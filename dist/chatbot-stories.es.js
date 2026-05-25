function Oe(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Kn(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
var me = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Gt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, vi, Z, H, _e = 1e8, O = 1 / _e, oi = Math.PI * 2, Ao = oi / 4, So = 0, Xn = Math.sqrt, ko = Math.cos, Co = Math.sin, X = function(e) {
  return typeof e == "string";
}, Y = function(e) {
  return typeof e == "function";
}, He = function(e) {
  return typeof e == "number";
}, Ai = function(e) {
  return typeof e > "u";
}, qe = function(e) {
  return typeof e == "object";
}, oe = function(e) {
  return e !== !1;
}, Si = function() {
  return typeof window < "u";
}, na = function(e) {
  return Y(e) || X(e);
}, Jn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ae = Array.isArray, To = /random\([^)]+\)/g, Eo = /,\s*/g, Gi = /(?:-?\.?\d|\.)+/gi, Zn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, qa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $n = /[+-]=-?[.\d]+/, Mo = /[^,'"\[\]\s]+/gi, Po = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, G, Pe, si, ki, fe = {}, ba = {}, er, tr = function(e) {
  return (ba = Ct(e, fe)) && de;
}, Ci = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Wt = function(e, t) {
  return !t && console.warn(e);
}, ar = function(e, t) {
  return e && (fe[e] = t) && ba && (ba[e] = t) || fe;
}, Yt = function() {
  return 0;
}, Ro = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, pa = {
  suppressEvents: !0,
  kill: !1
}, Do = {
  suppressEvents: !0
}, Ti = {}, Ze = [], li = {}, ir, ue = {}, La = {}, Wi = 30, ga = [], Ei = "", Mi = function(e) {
  var t = e[0], a, i;
  if (qe(t) || Y(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (i = ga.length; i-- && !ga[i].targetTest(t); )
      ;
    a = ga[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new kr(e[i], a))) || e.splice(i, 1);
  return e;
}, pt = function(e) {
  return e._gsap || Mi(ve(e))[0]._gsap;
}, nr = function(e, t, a) {
  return (a = e[t]) && Y(a) ? e[t]() : Ai(a) && e.getAttribute && e.getAttribute(t) || a;
}, se = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, Q = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, V = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, _t = function(e, t) {
  var a = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + i : a === "-" ? e - i : a === "*" ? e * i : e / i;
}, Io = function(e, t) {
  for (var a = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < a; )
    ;
  return i < a;
}, ya = function() {
  var e = Ze.length, t = Ze.slice(0), a, i;
  for (li = {}, Ze.length = 0, a = 0; a < e; a++)
    i = t[a], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Pi = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, rr = function(e, t, a, i) {
  Ze.length && !Z && ya(), e.render(t, a, !!(Z && t < 0 && Pi(e))), Ze.length && !Z && ya();
}, or = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Mo).length < 2 ? t : X(e) ? e.trim() : e;
}, sr = function(e) {
  return e;
}, we = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, qo = function(e) {
  return function(t, a) {
    for (var i in a)
      i in t || i === "duration" && e || i === "ease" || (t[i] = a[i]);
  };
}, Ct = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, Yi = function r(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = qe(t[a]) ? r(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, xa = function(e, t) {
  var a = {}, i;
  for (i in e)
    i in t || (a[i] = e[i]);
  return a;
}, zt = function(e) {
  var t = e.parent || G, a = e.keyframes ? qo(ae(e.keyframes)) : we;
  if (oe(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Lo = function(e, t) {
  for (var a = e.length, i = a === t.length; i && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, lr = function(e, t, a, i, n) {
  var o = e[i], s;
  if (n)
    for (s = t[n]; o && o[n] > s; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, Ea = function(e, t, a, i) {
  a === void 0 && (a = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, o = t._next;
  n ? n._next = o : e[a] === t && (e[a] = o), o ? o._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, et = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, gt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, No = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ci = function(e, t, a, i) {
  return e._startAt && (Z ? e._startAt.revert(pa) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Oo = function r(e) {
  return !e || e._ts && r(e.parent);
}, Qi = function(e) {
  return e._repeat ? Tt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Tt = function(e, t) {
  var a = Math.floor(e = V(e / t));
  return e && a === e ? a - 1 : a;
}, _a = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Ma = function(e) {
  return e._end = V(e._start + (e._tDur / Math.abs(e._ts || e._rts || O) || 0));
}, Pa = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = V(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ma(e), a._dirty || gt(a, e)), e;
}, cr = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = _a(e.rawTime(), t), (!t._dur || ta(0, t.totalDuration(), a) - t._tTime > O) && t.render(a, !0)), gt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -O;
  }
}, Re = function(e, t, a, i) {
  return t.parent && et(t), t._start = V((He(a) ? a : a || e !== G ? ye(e, a, t) : e._time) + t._delay), t._end = V(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), lr(e, t, "_first", "_last", e._sort ? "_start" : 0), di(t) || (e._recent = t), i || cr(e, t), e._ts < 0 && Pa(e, e._tTime), e;
}, dr = function(e, t) {
  return (fe.ScrollTrigger || Ci("scrollTrigger", t)) && fe.ScrollTrigger.create(t, e);
}, ur = function(e, t, a, i, n) {
  if (Di(e, t, n), !e._initted)
    return 1;
  if (!a && e._pt && !Z && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ir !== he.frame)
    return Ze.push(e), e._lazy = [n, i], 1;
}, Bo = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, di = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Fo = function(e, t, a, i) {
  var n = e.ratio, o = t < 0 || !t && (!e._start && Bo(e) && !(!e._initted && di(e)) || (e._ts < 0 || e._dp._ts < 0) && !di(e)) ? 0 : 1, s = e._rDelay, l = 0, c, d, u;
  if (s && e._repeat && (l = ta(0, e._tDur, t), d = Tt(l, s), e._yoyo && d & 1 && (o = 1 - o), d !== Tt(e._tTime, s) && (n = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== n || Z || i || e._zTime === O || !t && e._zTime) {
    if (!e._initted && ur(e, t, i, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? O : 0), a || (a = t && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(o, c.d), c = c._next;
    t < 0 && ci(e, t, a, !0), e._onUpdate && !a && pe(e, "onUpdate"), l && e._repeat && !a && e.parent && pe(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && et(e, 1), !a && !Z && (pe(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, zo = function(e, t, a) {
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
}, Et = function(e, t, a, i) {
  var n = e._repeat, o = V(t) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = n ? n < 0 ? 1e10 : V(o * (n + 1) + e._rDelay * n) : o, s > 0 && !i && Pa(e, e._tTime = e._tDur * s), e.parent && Ma(e), a || gt(e.parent, e), e;
}, ji = function(e) {
  return e instanceof re ? gt(e) : Et(e, e._dur);
}, Uo = {
  _start: 0,
  endTime: Yt,
  totalDuration: Yt
}, ye = function r(e, t, a) {
  var i = e.labels, n = e._recent || Uo, o = e.duration() >= _e ? n.endTime(!1) : e._dur, s, l, c;
  return X(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (s < 0 ? n : a).totalDuration() / 100 : 1)) : s < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), c && a && (l = l / 100 * (ae(a) ? a[0] : a).totalDuration()), s > 1 ? r(e, t.substr(0, s - 1), a) + l : o + l)) : t == null ? o : +t;
}, Ut = function(e, t, a) {
  var i = He(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[n], s, l;
  if (i && (o.duration = t[1]), o.parent = a, e) {
    for (s = o, l = a; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = oe(l.vars.inherit) && l.parent;
    o.immediateRender = oe(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1];
  }
  return new K(t[0], o, t[n + 1]);
}, it = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ta = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, te = function(e, t) {
  return !X(e) || !(t = Po.exec(e)) ? "" : t[1];
}, Ho = function(e, t, a) {
  return it(a, function(i) {
    return ta(e, t, i);
  });
}, ui = [].slice, hr = function(e, t) {
  return e && qe(e) && "length" in e && (!t && !e.length || e.length - 1 in e && qe(e[0])) && !e.nodeType && e !== Pe;
}, Vo = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(i) {
    var n;
    return X(i) && !t || hr(i, 1) ? (n = a).push.apply(n, ve(i)) : a.push(i);
  }) || a;
}, ve = function(e, t, a) {
  return H && !t && H.selector ? H.selector(e) : X(e) && !a && (si || !Mt()) ? ui.call((t || ki).querySelectorAll(e), 0) : ae(e) ? Vo(e, a) : hr(e) ? ui.call(e, 0) : e ? [e] : [];
}, hi = function(e) {
  return e = ve(e)[0] || Wt("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return ve(t, a.querySelectorAll ? a : a === e ? Wt("Invalid scope") || ki.createElement("div") : e);
  };
}, pr = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, gr = function(e) {
  if (Y(e))
    return e;
  var t = qe(e) ? e : {
    each: e
  }, a = mt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, o = {}, s = i > 0 && i < 1, l = isNaN(i) || s, c = t.axis, d = i, u = i;
  return X(i) ? d = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && l && (d = i[0], u = i[1]), function(h, g, m) {
    var p = (m || t).length, w = o[p], y, b, x, v, _, T, A, C, k;
    if (!w) {
      if (k = t.grid === "auto" ? 0 : (t.grid || [1, _e])[1], !k) {
        for (A = -_e; A < (A = m[k++].getBoundingClientRect().left) && k < p; )
          ;
        k < p && k--;
      }
      for (w = o[p] = [], y = l ? Math.min(k, p) * d - 0.5 : i % k, b = k === _e ? 0 : l ? p * u / k - 0.5 : i / k | 0, A = 0, C = _e, T = 0; T < p; T++)
        x = T % k - y, v = b - (T / k | 0), w[T] = _ = c ? Math.abs(c === "y" ? v : x) : Xn(x * x + v * v), _ > A && (A = _), _ < C && (C = _);
      i === "random" && pr(w), w.max = A - C, w.min = C, w.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (k > p ? p - 1 : c ? c === "y" ? p / k : k : Math.max(k, p / k)) || 0) * (i === "edges" ? -1 : 1), w.b = p < 0 ? n - p : n, w.u = te(t.amount || t.each) || 0, a = a && p < 0 ? as(a) : a;
    }
    return p = (w[h] - w.min) / w.max || 0, V(w.b + (a ? a(p) : p) * w.v) + w.u;
  };
}, pi = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var i = V(Math.round(parseFloat(a) / e) * e * t);
    return (i - i % 1) / t + (He(a) ? 0 : te(a));
  };
}, mr = function(e, t) {
  var a = ae(e), i, n;
  return !a && qe(e) && (i = a = e.radius || _e, e.values ? (e = ve(e.values), (n = !He(e[0])) && (i *= i)) : e = pi(e.increment)), it(t, a ? Y(e) ? function(o) {
    return n = e(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var s = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), c = _e, d = 0, u = e.length, h, g; u--; )
      n ? (h = e[u].x - s, g = e[u].y - l, h = h * h + g * g) : h = Math.abs(e[u] - s), h < c && (c = h, d = u);
    return d = !i || c <= i ? e[d] : o, n || d === o || He(o) ? d : d + te(o);
  } : pi(e));
}, fr = function(e, t, a, i) {
  return it(ae(e) ? !t : a === !0 ? !!(a = 0) : !i, function() {
    return ae(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * i) / i;
  });
}, Go = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(i) {
    return t.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, Wo = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || te(a));
  };
}, Yo = function(e, t, a) {
  return br(e, t, 0, 1, a);
}, wr = function(e, t, a) {
  return it(a, function(i) {
    return e[~~t(i)];
  });
}, Qo = function r(e, t, a) {
  var i = t - e;
  return ae(e) ? wr(e, r(0, e.length), t) : it(a, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, jo = function r(e, t, a) {
  var i = t - e, n = i * 2;
  return ae(e) ? wr(e, r(0, e.length - 1), t) : it(a, function(o) {
    return o = (n + (o - e) % n) % n || 0, e + (o > i ? n - o : o);
  });
}, Qt = function(e) {
  return e.replace(To, function(t) {
    var a = t.indexOf("[") + 1, i = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(Eo);
    return fr(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5);
  });
}, br = function(e, t, a, i, n) {
  var o = t - e, s = i - a;
  return it(n, function(l) {
    return a + ((l - e) / o * s || 0);
  });
}, Ko = function r(e, t, a, i) {
  var n = isNaN(e + t) ? 0 : function(g) {
    return (1 - g) * e + g * t;
  };
  if (!n) {
    var o = X(e), s = {}, l, c, d, u, h;
    if (a === !0 && (i = 1) && (a = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ae(e) && !ae(t)) {
      for (d = [], u = e.length, h = u - 2, c = 1; c < u; c++)
        d.push(r(e[c - 1], e[c]));
      u--, n = function(m) {
        m *= u;
        var p = Math.min(h, ~~m);
        return d[p](m - p);
      }, a = t;
    } else i || (e = Ct(ae(e) ? [] : {}, e));
    if (!d) {
      for (l in t)
        Ri.call(s, e, l, "get", t[l]);
      n = function(m) {
        return Li(m, s) || (o ? e.p : e);
      };
    }
  }
  return it(a, n);
}, Ki = function(e, t, a) {
  var i = e.labels, n = _e, o, s, l;
  for (o in i)
    s = i[o] - t, s < 0 == !!a && s && n > (s = Math.abs(s)) && (l = o, n = s);
  return l;
}, pe = function(e, t, a) {
  var i = e.vars, n = i[t], o = H, s = e._ctx, l, c, d;
  if (n)
    return l = i[t + "Params"], c = i.callbackScope || e, a && Ze.length && ya(), s && (H = s), d = l ? n.apply(c, l) : n.call(c), H = o, d;
}, Nt = function(e) {
  return et(e), e.scrollTrigger && e.scrollTrigger.kill(!!Z), e.progress() < 1 && pe(e, "onInterrupt"), e;
}, xt, yr = [], xr = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Si() || e.headless) {
      var t = e.name, a = Y(e), i = t && !a && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Yt,
        render: Li,
        add: Ri,
        kill: hs,
        modifier: us,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: qi,
        aliases: {},
        register: 0
      };
      if (Mt(), e !== i) {
        if (ue[t])
          return;
        we(i, we(xa(e, n), o)), Ct(i.prototype, Ct(n, xa(e, o))), ue[i.prop = t] = i, e.targetTest && (ga.push(i), Ti[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ar(t, i), e.register && e.register(de, i, le);
    } else
      yr.push(e);
}, N = 255, Ot = {
  aqua: [0, N, N],
  lime: [0, N, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, N],
  navy: [0, 0, 128],
  white: [N, N, N],
  olive: [128, 128, 0],
  yellow: [N, N, 0],
  orange: [N, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [N, 0, 0],
  pink: [N, 192, 203],
  cyan: [0, N, N],
  transparent: [N, N, N, 0]
}, Na = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * N + 0.5 | 0;
}, _r = function(e, t, a) {
  var i = e ? He(e) ? [e >> 16, e >> 8 & N, e & N] : 0 : Ot.black, n, o, s, l, c, d, u, h, g, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ot[e])
      i = Ot[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), s = e.charAt(3), e = "#" + n + n + o + o + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & N, i & N, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & N, e & N];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(Gi), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, d = +i[2] / 100, o = d <= 0.5 ? d * (c + 1) : d + c - d * c, n = d * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Na(l + 1 / 3, n, o), i[1] = Na(l, n, o), i[2] = Na(l - 1 / 3, n, o);
      else if (~e.indexOf("="))
        return i = e.match(Zn), a && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Gi) || Ot.transparent;
    i = i.map(Number);
  }
  return t && !m && (n = i[0] / N, o = i[1] / N, s = i[2] / N, u = Math.max(n, o, s), h = Math.min(n, o, s), d = (u + h) / 2, u === h ? l = c = 0 : (g = u - h, c = d > 0.5 ? g / (2 - u - h) : g / (u + h), l = u === n ? (o - s) / g + (o < s ? 6 : 0) : u === o ? (s - n) / g + 2 : (n - o) / g + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(d * 100 + 0.5)), a && i.length < 4 && (i[3] = 1), i;
}, vr = function(e) {
  var t = [], a = [], i = -1;
  return e.split($e).forEach(function(n) {
    var o = n.match(yt) || [];
    t.push.apply(t, o), a.push(i += o.length + 1);
  }), t.c = a, t;
}, Xi = function(e, t, a) {
  var i = "", n = (e + i).match($e), o = t ? "hsla(" : "rgba(", s = 0, l, c, d, u;
  if (!n)
    return e;
  if (n = n.map(function(h) {
    return (h = _r(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), a && (d = vr(e), l = a.c, l.join(i) !== d.c.join(i)))
    for (c = e.replace($e, "1").split(yt), u = c.length - 1; s < u; s++)
      i += c[s] + (~l.indexOf(s) ? n.shift() || o + "0,0,0,0)" : (d.length ? d : n.length ? n : a).shift());
  if (!c)
    for (c = e.split($e), u = c.length - 1; s < u; s++)
      i += c[s] + n[s];
  return i + c[u];
}, $e = (function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Ot)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
})(), Xo = /hsl[a]?\(/, Ar = function(e) {
  var t = e.join(" "), a;
  if ($e.lastIndex = 0, $e.test(t))
    return a = Xo.test(t), e[1] = Xi(e[1], a), e[0] = Xi(e[0], a, vr(e[1])), !0;
}, jt, he = (function() {
  var r = Date.now, e = 500, t = 33, a = r(), i = a, n = 1e3 / 240, o = n, s = [], l, c, d, u, h, g, m = function p(w) {
    var y = r() - i, b = w === !0, x, v, _, T;
    if ((y > e || y < 0) && (a += y - t), i += y, _ = i - a, x = _ - o, (x > 0 || b) && (T = ++u.frame, h = _ - u.time * 1e3, u.time = _ = _ / 1e3, o += x + (x >= n ? 4 : n - x), v = 1), b || (l = c(p)), v)
      for (g = 0; g < s.length; g++)
        s[g](_, h, T, w);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(w) {
      return h / (1e3 / (w || 60));
    },
    wake: function() {
      er && (!si && Si() && (Pe = si = window, ki = Pe.document || {}, fe.gsap = de, (Pe.gsapVersions || (Pe.gsapVersions = [])).push(de.version), tr(ba || Pe.GreenSockGlobals || !Pe.gsap && Pe || {}), yr.forEach(xr)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = d || function(w) {
        return setTimeout(w, o - u.time * 1e3 + 1 | 0);
      }, jt = 1, m(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(l), jt = 0, c = Yt;
    },
    lagSmoothing: function(w, y) {
      e = w || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(w) {
      n = 1e3 / (w || 240), o = u.time * 1e3 + n;
    },
    add: function(w, y, b) {
      var x = y ? function(v, _, T, A) {
        w(v, _, T, A), u.remove(x);
      } : w;
      return u.remove(w), s[b ? "unshift" : "push"](x), Mt(), x;
    },
    remove: function(w, y) {
      ~(y = s.indexOf(w)) && s.splice(y, 1) && g >= y && g--;
    },
    _listeners: s
  }, u;
})(), Mt = function() {
  return !jt && he.wake();
}, R = {}, Jo = /^[\d.\-M][\d.\-,\s]/, Zo = /["']/g, $o = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), i = a[0], n = 1, o = a.length, s, l, c; n < o; n++)
    l = a[n], s = n !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, s), t[i] = isNaN(c) ? c.replace(Zo, "").trim() : +c, i = l.substr(s + 1).trim();
  return t;
}, es = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < a ? e.indexOf(")", a + 1) : a);
}, ts = function(e) {
  var t = (e + "").split("("), a = R[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [$o(t[1])] : es(e).split(",").map(or)) : R._CE && Jo.test(e) ? R._CE("", e) : a;
}, as = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, mt = function(e, t) {
  return e && (Y(e) ? e : R[e] || ts(e)) || t;
}, wt = function(e, t, a, i) {
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
  return se(e, function(s) {
    R[s] = fe[s] = n, R[o = s.toLowerCase()] = a;
    for (var l in n)
      R[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = R[s + "." + l] = n[l];
  }), n;
}, Sr = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Oa = function r(e, t, a) {
  var i = t >= 1 ? t : 1, n = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = n / oi * (Math.asin(1 / i) || 0), s = function(d) {
    return d === 1 ? 1 : i * Math.pow(2, -10 * d) * Co((d - o) * n) + 1;
  }, l = e === "out" ? s : e === "in" ? function(c) {
    return 1 - s(1 - c);
  } : Sr(s);
  return n = oi / n, l.config = function(c, d) {
    return r(e, c, d);
  }, l;
}, Ba = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? a : e === "in" ? function(n) {
    return 1 - a(1 - n);
  } : Sr(a);
  return i.config = function(n) {
    return r(e, n);
  }, i;
};
se("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  wt(r + ",Power" + (t - 1), e ? function(a) {
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
wt("Elastic", Oa("in"), Oa("out"), Oa());
(function(r, e) {
  var t = 1 / e, a = 2 * t, i = 2.5 * t, n = function(s) {
    return s < t ? r * s * s : s < a ? r * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? r * (s -= 2.25 / e) * s + 0.9375 : r * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  wt("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
wt("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
wt("Circ", function(r) {
  return -(Xn(1 - r * r) - 1);
});
wt("Sine", function(r) {
  return r === 1 ? 1 : -ko(r * Ao) + 1;
});
wt("Back", Ba("in"), Ba("out"), Ba());
R.SteppedEase = R.steps = fe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, o = 1 - O;
    return function(s) {
      return ((i * ta(0, o, s) | 0) + n) * a;
    };
  }
};
Gt.ease = R["quad.out"];
se("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Ei += r + "," + r + "Params,";
});
var kr = function(e, t) {
  this.id = So++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : nr, this.set = t ? t.getSetter : qi;
}, Kt = /* @__PURE__ */ (function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Et(this, +t.duration, 1, 1), this.data = t.data, H && (this._ctx = H, H.data.push(this)), jt || he.wake();
  }
  var e = r.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, Et(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, i) {
    if (Mt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Pa(this, a), !n._dp || n.parent || cr(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && Re(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !i || this._initted && Math.abs(this._zTime) === O || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), rr(this, a, i)), this;
  }, e.time = function(a, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + Qi(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(a, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + Qi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * n, i) : this._repeat ? Tt(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(a, i) {
    if (!arguments.length)
      return this._rts === -O ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var n = this.parent && this._ts ? _a(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -O ? 0 : this._rts, this.totalTime(ta(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), Ma(this), No(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Mt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== O && (this._tTime -= O)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = V(a);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Re(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + (oe(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var i = this.parent || this._dp;
    return i ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _a(i.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = Do);
    var i = Z;
    return Z = a, Pi(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), Z = i, this;
  }, e.globalTime = function(a) {
    for (var i = this, n = arguments.length ? a : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : n;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, ji(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = a, ji(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, i) {
    return this.totalTime(ye(this, a), oe(i));
  }, e.restart = function(a, i) {
    return this.play().totalTime(a ? -this._delay : 0, oe(i)), this._dur || (this._zTime = -O), this;
  }, e.play = function(a, i) {
    return a != null && this.seek(a, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(a, i) {
    return a != null && this.seek(a || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(a, i) {
    return a != null && this.seek(a, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(a) {
    return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -O : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -O, this;
  }, e.isActive = function() {
    var a = this.parent || this._dp, i = this._start, n;
    return !!(!a || this._ts && this._initted && a.isActive() && (n = a.rawTime(!0)) >= i && n < this.endTime(!0) - O);
  }, e.eventCallback = function(a, i, n) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[a] = i, n && (o[a + "Params"] = n), a === "onUpdate" && (this._onUpdate = i)) : delete o[a], this) : o[a];
  }, e.then = function(a) {
    var i = this, n = i._prom;
    return new Promise(function(o) {
      var s = Y(a) ? a : sr, l = function() {
        var d = i.then;
        i.then = null, n && n(), Y(s) && (s = s(i)) && (s.then || s === i) && (i.then = d), o(s), i.then = d;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    Nt(this);
  }, r;
})();
we(Kt.prototype, {
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
  _zTime: -O,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var re = /* @__PURE__ */ (function(r) {
  Kn(e, r);
  function e(a, i) {
    var n;
    return a === void 0 && (a = {}), n = r.call(this, a) || this, n.labels = {}, n.smoothChildTiming = !!a.smoothChildTiming, n.autoRemoveChildren = !!a.autoRemoveChildren, n._sort = oe(a.sortChildren), G && Re(a.parent || G, Oe(n), i), a.reversed && n.reverse(), a.paused && n.paused(!0), a.scrollTrigger && dr(Oe(n), a.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, o) {
    return Ut(0, arguments, this), this;
  }, t.from = function(i, n, o) {
    return Ut(1, arguments, this), this;
  }, t.fromTo = function(i, n, o, s) {
    return Ut(2, arguments, this), this;
  }, t.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, zt(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new K(i, n, ye(this, o), 1), this;
  }, t.call = function(i, n, o) {
    return Re(this, K.delayedCall(0, i, n), o);
  }, t.staggerTo = function(i, n, o, s, l, c, d) {
    return o.duration = n, o.stagger = o.stagger || s, o.onComplete = c, o.onCompleteParams = d, o.parent = this, new K(i, o, ye(this, l)), this;
  }, t.staggerFrom = function(i, n, o, s, l, c, d) {
    return o.runBackwards = 1, zt(o).immediateRender = oe(o.immediateRender), this.staggerTo(i, n, o, s, l, c, d);
  }, t.staggerFromTo = function(i, n, o, s, l, c, d, u) {
    return s.startAt = o, zt(s).immediateRender = oe(s.immediateRender), this.staggerTo(i, n, s, l, c, d, u);
  }, t.render = function(i, n, o) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, d = i <= 0 ? 0 : V(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), h, g, m, p, w, y, b, x, v, _, T, A;
    if (this !== G && d > l && i >= 0 && (d = l), d !== this._tTime || o || u) {
      if (s !== this._time && c && (d += this._time - s, i += this._time - s), h = d, v = this._start, x = this._ts, y = !x, u && (c || (s = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, w = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(w * 100 + i, n, o);
        if (h = V(d % w), d === l ? (p = this._repeat, h = c) : (_ = V(d / w), p = ~~_, p && p === _ && (h = c, p--), h > c && (h = c)), _ = Tt(this._tTime, w), !s && this._tTime && _ !== p && this._tTime - _ * w - this._dur <= 0 && (_ = p), T && p & 1 && (h = c - h, A = 1), p !== _ && !this._lock) {
          var C = T && _ & 1, k = C === (T && p & 1);
          if (p < _ && (C = !C), s = C ? 0 : d % c ? c : d, this._lock = 1, this.render(s || (A ? 0 : V(p * w)), n, !c)._lock = 0, this._tTime = d, !n && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1, _ = p), s && s !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, k && (this._lock = 2, s = C ? c : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = zo(this, V(s), V(h)), b && (d -= h - (h = b._start))), this._tTime = d, this._time = h, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && d && c && !n && !_ && (pe(this, "onStart"), this._tTime !== d))
        return this;
      if (h >= s && i >= 0)
        for (g = this._first; g; ) {
          if (m = g._next, (g._act || h >= g._start) && g._ts && b !== g) {
            if (g.parent !== this)
              return this.render(i, n, o);
            if (g.render(g._ts > 0 ? (h - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (h - g._start) * g._ts, n, o), h !== this._time || !this._ts && !y) {
              b = 0, m && (d += this._zTime = -O);
              break;
            }
          }
          g = m;
        }
      else {
        g = this._last;
        for (var M = i < 0 ? i : h; g; ) {
          if (m = g._prev, (g._act || M <= g._end) && g._ts && b !== g) {
            if (g.parent !== this)
              return this.render(i, n, o);
            if (g.render(g._ts > 0 ? (M - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (M - g._start) * g._ts, n, o || Z && Pi(g)), h !== this._time || !this._ts && !y) {
              b = 0, m && (d += this._zTime = M ? -O : O);
              break;
            }
          }
          g = m;
        }
      }
      if (b && !n && (this.pause(), b.render(h >= s ? 0 : -O)._zTime = h >= s ? 1 : -1, this._ts))
        return this._start = v, Ma(this), this.render(i, n, o);
      this._onUpdate && !n && pe(this, "onUpdate", !0), (d === l && this._tTime >= this.totalDuration() || !d && s) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (d === l && this._ts > 0 || !d && this._ts < 0) && et(this, 1), !n && !(i < 0 && !s) && (d || s || !l) && (pe(this, d === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var o = this;
    if (He(n) || (n = ye(this, n, i)), !(i instanceof Kt)) {
      if (ae(i))
        return i.forEach(function(s) {
          return o.add(s, n);
        }), this;
      if (X(i))
        return this.addLabel(i, n);
      if (Y(i))
        i = K.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Re(this, i, n) : this;
  }, t.getChildren = function(i, n, o, s) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), s === void 0 && (s = -_e);
    for (var l = [], c = this._first; c; )
      c._start >= s && (c instanceof K ? n && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, n, o)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, t.remove = function(i) {
    return X(i) ? this.removeLabel(i) : Y(i) ? this.killTweensOf(i) : (i.parent === this && Ea(this, i), i === this._recent && (this._recent = this._last), gt(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = V(he.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = ye(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, o) {
    var s = K.delayedCall(0, n || Yt, o);
    return s.data = "isPause", this._hasPause = 1, Re(this, s, ye(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = ye(this, i); n; )
      n._start === i && n.data === "isPause" && et(n), n = n._next;
  }, t.killTweensOf = function(i, n, o) {
    for (var s = this.getTweensOf(i, o), l = s.length; l--; )
      je !== s[l] && s[l].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var o = [], s = ve(i), l = this._first, c = He(n), d; l; )
      l instanceof K ? Io(l._targets, s) && (c ? (!je || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (d = l.getTweensOf(s, n)).length && o.push.apply(o, d), l = l._next;
    return o;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var o = this, s = ye(o, i), l = n, c = l.startAt, d = l.onStart, u = l.onStartParams, h = l.immediateRender, g, m = K.to(o, we({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: n.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || O,
      onStart: function() {
        if (o.pause(), !g) {
          var w = n.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          m._dur !== w && Et(m, w, 0, 1).render(m._time, !0, !0), g = 1;
        }
        d && d.apply(m, u || []);
      }
    }, n));
    return h ? m.render(0) : m;
  }, t.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, we({
      startAt: {
        time: ye(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Ki(this, ye(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Ki(this, ye(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + O);
  }, t.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    var s = this._first, l = this.labels, c;
    for (i = V(i); s; )
      s._start >= o && (s._start += i, s._end += i), s = s._next;
    if (n)
      for (c in l)
        l[c] >= o && (l[c] += i);
    return gt(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), gt(this);
  }, t.totalDuration = function(i) {
    var n = 0, o = this, s = o._last, l = _e, c, d, u;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; s; )
        c = s._prev, s._dirty && s.totalDuration(), d = s._start, d > l && o._sort && s._ts && !o._lock ? (o._lock = 1, Re(o, s, d - s._delay, 1)._lock = 0) : l = d, d < 0 && s._ts && (n -= d, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += V(d / o._ts), o._time -= d, o._tTime -= d), o.shiftChildren(-d, !1, -1 / 0), l = 0), s._end > n && s._ts && (n = s._end), s = c;
      Et(o, o === G && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (G._ts && (rr(G, _a(i, G)), ir = he.frame), he.frame >= Wi) {
      Wi += me.autoSleep || 120;
      var n = G._first;
      if ((!n || !n._ts) && me.autoSleep && he._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || he.sleep();
      }
    }
  }, e;
})(Kt);
we(re.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var is = function(e, t, a, i, n, o, s) {
  var l = new le(this._pt, e, t, 0, 1, Rr, null, n), c = 0, d = 0, u, h, g, m, p, w, y, b;
  for (l.b = a, l.e = i, a += "", i += "", (y = ~i.indexOf("random(")) && (i = Qt(i)), o && (b = [a, i], o(b, e, t), a = b[0], i = b[1]), h = a.match(qa) || []; u = qa.exec(i); )
    m = u[0], p = i.substring(c, u.index), g ? g = (g + 1) % 5 : p.substr(-5) === "rgba(" && (g = 1), m !== h[d++] && (w = parseFloat(h[d - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || d === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: w,
      c: m.charAt(1) === "=" ? _t(w, m) - w : parseFloat(m) - w,
      m: g && g < 4 ? Math.round : 0
    }, c = qa.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = s, ($n.test(i) || y) && (l.e = 0), this._pt = l, l;
}, Ri = function(e, t, a, i, n, o, s, l, c, d) {
  Y(i) && (i = i(n || 0, e, o));
  var u = e[t], h = a !== "get" ? a : Y(u) ? c ? e[t.indexOf("set") || !Y(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, g = Y(u) ? c ? ls : Mr : Ii, m;
  if (X(i) && (~i.indexOf("random(") && (i = Qt(i)), i.charAt(1) === "=" && (m = _t(h, i) + (te(h) || 0), (m || m === 0) && (i = m))), !d || h !== i || gi)
    return !isNaN(h * i) && i !== "" ? (m = new le(this._pt, e, t, +h || 0, i - (h || 0), typeof u == "boolean" ? ds : Pr, 0, g), c && (m.fp = c), s && m.modifier(s, this, e), this._pt = m) : (!u && !(t in e) && Ci(t, i), is.call(this, e, t, h, i, g, l || me.stringFilter, c));
}, ns = function(e, t, a, i, n) {
  if (Y(e) && (e = Ht(e, n, t, a, i)), !qe(e) || e.style && e.nodeType || ae(e) || Jn(e))
    return X(e) ? Ht(e, n, t, a, i) : e;
  var o = {}, s;
  for (s in e)
    o[s] = Ht(e[s], n, t, a, i);
  return o;
}, Cr = function(e, t, a, i, n, o) {
  var s, l, c, d;
  if (ue[e] && (s = new ue[e]()).init(n, s.rawVars ? t[e] : ns(t[e], i, n, o, a), a, i, o) !== !1 && (a._pt = l = new le(a._pt, n, e, 0, 1, s.render, s, 0, s.priority), a !== xt))
    for (c = a._ptLookup[a._targets.indexOf(n)], d = s._props.length; d--; )
      c[s._props[d]] = l;
  return s;
}, je, gi, Di = function r(e, t, a) {
  var i = e.vars, n = i.ease, o = i.startAt, s = i.immediateRender, l = i.lazy, c = i.onUpdate, d = i.runBackwards, u = i.yoyoEase, h = i.keyframes, g = i.autoRevert, m = e._dur, p = e._startAt, w = e._targets, y = e.parent, b = y && y.data === "nested" ? y.vars.targets : w, x = e._overwrite === "auto" && !vi, v = e.timeline, _ = i.easeReverse || u, T, A, C, k, M, F, z, L, U, D, I, P, $;
  if (v && (!h || !n) && (n = "none"), e._ease = mt(n, Gt.ease), e._rEase = _ && (mt(_) || e._ease), e._from = !v && !!i.runBackwards, e._from && (e.ratio = 1), !v || h && !i.stagger) {
    if (L = w[0] ? pt(w[0]).harness : 0, P = L && i[L.prop], T = xa(i, Ti), p && (p._zTime < 0 && p.progress(1), t < 0 && d && s && !g ? p.render(-1, !0) : p.revert(d && m ? pa : Ro), p._lazy = 0), o) {
      if (et(e._startAt = K.set(w, we({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !p && oe(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return pe(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Z || !s && !g) && e._startAt.revert(pa), s && m && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (d && m && !p) {
      if (t && (s = !1), C = we({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !p && oe(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), P && (C[L.prop] = P), et(e._startAt = K.set(w, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Z ? e._startAt.revert(pa) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        r(e._startAt, O, O);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = m && oe(l) || l && !m, A = 0; A < w.length; A++) {
      if (M = w[A], z = M._gsap || Mi(w)[A]._gsap, e._ptLookup[A] = D = {}, li[z.id] && Ze.length && ya(), I = b === w ? A : b.indexOf(M), L && (U = new L()).init(M, P || T, e, I, b) !== !1 && (e._pt = k = new le(e._pt, M, U.name, 0, 1, U.render, U, 0, U.priority), U._props.forEach(function(ke) {
        D[ke] = k;
      }), U.priority && (F = 1)), !L || P)
        for (C in T)
          ue[C] && (U = Cr(C, T, e, I, M, b)) ? U.priority && (F = 1) : D[C] = k = Ri.call(e, M, C, "get", T[C], I, b, 0, i.stringFilter);
      e._op && e._op[A] && e.kill(M, e._op[A]), x && e._pt && (je = e, G.killTweensOf(M, D, e.globalTime(t)), $ = !e.parent, je = 0), e._pt && l && (li[z.id] = 1);
    }
    F && Dr(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !$, h && t <= 0 && v.render(_e, !0, !0);
}, rs = function(e, t, a, i, n, o, s, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, u, h, g;
  if (!c)
    for (c = e._ptCache[t] = [], h = e._ptLookup, g = e._targets.length; g--; ) {
      if (d = h[g][t], d && d.d && d.d._pt)
        for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
          d = d._next;
      if (!d)
        return gi = 1, e.vars[t] = "+=0", Di(e, s), gi = 0, l ? Wt(t + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(d);
    }
  for (g = c.length; g--; )
    u = c[g], d = u._pt || u, d.s = (i || i === 0) && !n ? i : d.s + (i || 0) + o * d.c, d.c = a - d.s, u.e && (u.e = Q(a) + te(u.e)), u.b && (u.b = d.s + te(u.b));
}, os = function(e, t) {
  var a = e[0] ? pt(e[0]).harness : 0, i = a && a.aliases, n, o, s, l;
  if (!i)
    return t;
  n = Ct({}, t);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), s = l.length; s--; )
        n[l[s]] = n[o];
  return n;
}, ss = function(e, t, a, i) {
  var n = t.ease || i || "power1.inOut", o, s;
  if (ae(t))
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
}, Ht = function(e, t, a, i, n) {
  return Y(e) ? e.call(t, a, i, n) : X(e) && ~e.indexOf("random(") ? Qt(e) : e;
}, Tr = Ei + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Er = {};
se(Tr + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return Er[r] = 1;
});
var K = /* @__PURE__ */ (function(r) {
  Kn(e, r);
  function e(a, i, n, o) {
    var s;
    typeof i == "number" && (n.duration = i, i = n, n = null), s = r.call(this, o ? i : zt(i)) || this;
    var l = s.vars, c = l.duration, d = l.delay, u = l.immediateRender, h = l.stagger, g = l.overwrite, m = l.keyframes, p = l.defaults, w = l.scrollTrigger, y = i.parent || G, b = (ae(a) || Jn(a) ? He(a[0]) : "length" in i) ? [a] : ve(a), x, v, _, T, A, C, k, M;
    if (s._targets = b.length ? Mi(b) : Wt("GSAP target " + a + " not found. https://gsap.com", !me.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = g, m || h || na(c) || na(d)) {
      i = s.vars;
      var F = i.easeReverse || i.yoyoEase;
      if (x = s.timeline = new re({
        data: "nested",
        defaults: p || {},
        targets: y && y.data === "nested" ? y.vars.targets : b
      }), x.kill(), x.parent = x._dp = Oe(s), x._start = 0, h || na(c) || na(d)) {
        if (T = b.length, k = h && gr(h), qe(h))
          for (A in h)
            ~Tr.indexOf(A) && (M || (M = {}), M[A] = h[A]);
        for (v = 0; v < T; v++)
          _ = xa(i, Er), _.stagger = 0, F && (_.easeReverse = F), M && Ct(_, M), C = b[v], _.duration = +Ht(c, Oe(s), v, C, b), _.delay = (+Ht(d, Oe(s), v, C, b) || 0) - s._delay, !h && T === 1 && _.delay && (s._delay = d = _.delay, s._start += d, _.delay = 0), x.to(C, _, k ? k(v, C, b) : 0), x._ease = R.none;
        x.duration() ? c = d = 0 : s.timeline = 0;
      } else if (m) {
        zt(we(x.vars.defaults, {
          ease: "none"
        })), x._ease = mt(m.ease || i.ease || "none");
        var z = 0, L, U, D;
        if (ae(m))
          m.forEach(function(I) {
            return x.to(b, I, ">");
          }), x.duration();
        else {
          _ = {};
          for (A in m)
            A === "ease" || A === "easeEach" || ss(A, m[A], _, m.easeEach);
          for (A in _)
            for (L = _[A].sort(function(I, P) {
              return I.t - P.t;
            }), z = 0, v = 0; v < L.length; v++)
              U = L[v], D = {
                ease: U.e,
                duration: (U.t - (v ? L[v - 1].t : 0)) / 100 * c
              }, D[A] = U.v, x.to(b, D, z), z += D.duration;
          x.duration() < c && x.to({}, {
            duration: c - x.duration()
          });
        }
      }
      c || s.duration(c = x.duration());
    } else
      s.timeline = 0;
    return g === !0 && !vi && (je = Oe(s), G.killTweensOf(b), je = 0), Re(y, Oe(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !c && !m && s._start === V(y._time) && oe(u) && Oo(Oe(s)) && y.data !== "nested") && (s._tTime = -O, s.render(Math.max(0, -d) || 0)), w && dr(Oe(s), w), s;
  }
  var t = e.prototype;
  return t.render = function(i, n, o) {
    var s = this._time, l = this._tDur, c = this._dur, d = i < 0, u = i > l - O && !d ? l : i < O ? 0 : i, h, g, m, p, w, y, b, x;
    if (!c)
      Fo(this, i, n, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (h = u, x = this.timeline, this._repeat) {
        if (p = c + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(p * 100 + i, n, o);
        if (h = V(u % p), u === l ? (m = this._repeat, h = c) : (w = V(u / p), m = ~~w, m && m === w ? (h = c, m--) : h > c && (h = c)), y = this._yoyo && m & 1, y && (h = c - h), w = Tt(this._tTime, p), h === s && !o && this._initted && m === w)
          return this._tTime = u, this;
        m !== w && this.vars.repeatRefresh && !y && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(V(p * m), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (ur(this, d ? i : h, o, n, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(o && this.vars.repeatRefresh && m !== w))
          return this;
        if (c !== this._dur)
          return this.render(i, n, o);
      }
      if (this._rEase) {
        var v = h < s;
        if (v !== this._inv) {
          var _ = v ? s : c - s;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = s, this._invRecip = _ ? (v ? -1 : 1) / _ : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = b = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = b = this._ease(h / c);
      if (this._from && (this.ratio = b = 1 - b), this._tTime = u, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !s && u && !n && !w && (pe(this, "onStart"), this._tTime !== u))
        return this;
      for (g = this._pt; g; )
        g.r(b, g.d), g = g._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (d && ci(this, i, n, o), pe(this, "onUpdate")), this._repeat && m !== w && this.vars.onRepeat && !n && this.parent && pe(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (d && !this._onUpdate && ci(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && et(this, 1), !n && !(d && !s) && (u || s || y) && (pe(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, o, s, l) {
    jt || he.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Di(this, c), d = this._ease(c / this._dur), rs(this, i, n, o, s, d, c, l) ? this.resetTo(i, n, o, s, 1) : (Pa(this, 0), this.parent || lr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Nt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Z), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, je && je.vars.overwrite !== !0)._first || Nt(this), this.parent && o !== this.timeline.totalDuration() && Et(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var s = this._targets, l = i ? ve(i) : s, c = this._ptLookup, d = this._pt, u, h, g, m, p, w, y;
    if ((!n || n === "all") && Lo(s, l))
      return n === "all" && (this._pt = 0), Nt(this);
    for (u = this._op = this._op || [], n !== "all" && (X(n) && (p = {}, se(n, function(b) {
      return p[b] = 1;
    }), n = p), n = os(s, n)), y = s.length; y--; )
      if (~l.indexOf(s[y])) {
        h = c[y], n === "all" ? (u[y] = n, m = h, g = {}) : (g = u[y] = u[y] || {}, m = n);
        for (p in m)
          w = h && h[p], w && ((!("kill" in w.d) || w.d.kill(p) === !0) && Ea(this, w, "_pt"), delete h[p]), g !== "all" && (g[p] = 1);
      }
    return this._initted && !this._pt && d && Nt(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Ut(1, arguments);
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
    return Ut(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, o) {
    return G.killTweensOf(i, n, o);
  }, e;
})(Kt);
we(K.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
se("staggerTo,staggerFrom,staggerFromTo", function(r) {
  K[r] = function() {
    var e = new re(), t = ui.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Ii = function(e, t, a) {
  return e[t] = a;
}, Mr = function(e, t, a) {
  return e[t](a);
}, ls = function(e, t, a, i) {
  return e[t](i.fp, a);
}, cs = function(e, t, a) {
  return e.setAttribute(t, a);
}, qi = function(e, t) {
  return Y(e[t]) ? Mr : Ai(e[t]) && e.setAttribute ? cs : Ii;
}, Pr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, ds = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Rr = function(e, t) {
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
}, Li = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, us = function(e, t, a, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(e, t, a), n = o;
}, hs = function(e) {
  for (var t = this._pt, a, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Ea(this, t, "_pt") : t.dep || (a = 1), t = i;
  return !a;
}, ps = function(e, t, a, i) {
  i.mSet(e, t, i.m.call(i.tween, a, i.mt), i);
}, Dr = function(e) {
  for (var t = e._pt, a, i, n, o; t; ) {
    for (a = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : o = t, t = a;
  }
  e._pt = n;
}, le = /* @__PURE__ */ (function() {
  function r(t, a, i, n, o, s, l, c, d) {
    this.t = a, this.s = n, this.c = o, this.p = i, this.r = s || Pr, this.d = l || this, this.set = c || Ii, this.pr = d || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(a, i, n) {
    this.mSet = this.mSet || this.set, this.set = ps, this.m = a, this.mt = n, this.tween = i;
  }, r;
})();
se(Ei + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(r) {
  return Ti[r] = 1;
});
fe.TweenMax = fe.TweenLite = K;
fe.TimelineLite = fe.TimelineMax = re;
G = new re({
  sortChildren: !1,
  defaults: Gt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
me.stringFilter = Ar;
var ft = [], ma = {}, gs = [], Ji = 0, ms = 0, Fa = function(e) {
  return (ma[e] || gs).map(function(t) {
    return t();
  });
}, mi = function() {
  var e = Date.now(), t = [];
  e - Ji > 2 && (Fa("matchMediaInit"), ft.forEach(function(a) {
    var i = a.queries, n = a.conditions, o, s, l, c;
    for (s in i)
      o = Pe.matchMedia(i[s]).matches, o && (l = 1), o !== n[s] && (n[s] = o, c = 1);
    c && (a.revert(), l && t.push(a));
  }), Fa("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(i) {
      return a.add(null, i);
    });
  }), Ji = e, Fa("matchMedia"));
}, Ir = /* @__PURE__ */ (function() {
  function r(t, a) {
    this.selector = a && hi(a), this.data = [], this._r = [], this.isReverted = !1, this.id = ms++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(a, i, n) {
    Y(a) && (n = i, i = a, a = Y);
    var o = this, s = function() {
      var c = H, d = o.selector, u;
      return c && c !== o && c.data.push(o), n && (o.selector = hi(n)), H = o, u = i.apply(o, arguments), Y(u) && o._r.push(u), H = c, o.selector = d, o.isReverted = !1, u;
    };
    return o.last = s, a === Y ? s(o, function(l) {
      return o.add(null, l);
    }) : a ? o[a] = s : s;
  }, e.ignore = function(a) {
    var i = H;
    H = null, a(this), H = i;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? a.push.apply(a, i.getTweens()) : i instanceof K && !(i.parent && i.parent.data === "nested") && a.push(i);
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
        c = n.data[l], c instanceof re ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof K) && c.revert && c.revert(a);
      n._r.forEach(function(d) {
        return d(a, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var o = ft.length; o--; )
        ft[o].id === this.id && ft.splice(o, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, r;
})(), fs = /* @__PURE__ */ (function() {
  function r(t) {
    this.contexts = [], this.scope = t, H && H.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(a, i, n) {
    qe(a) || (a = {
      matches: a
    });
    var o = new Ir(0, n || this.scope), s = o.conditions = {}, l, c, d;
    H && !o.selector && (o.selector = H.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = a;
    for (c in a)
      c === "all" ? d = 1 : (l = Pe.matchMedia(a[c]), l && (ft.indexOf(o) < 0 && ft.push(o), (s[c] = l.matches) && (d = 1), l.addListener ? l.addListener(mi) : l.addEventListener("change", mi)));
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
})(), va = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(i) {
      return xr(i);
    });
  },
  timeline: function(e) {
    return new re(e);
  },
  getTweensOf: function(e, t) {
    return G.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, i) {
    X(e) && (e = ve(e)[0]);
    var n = pt(e || {}).get, o = a ? sr : or;
    return a === "native" && (a = ""), e && (t ? o((ue[t] && ue[t].get || n)(e, t, a, i)) : function(s, l, c) {
      return o((ue[s] && ue[s].get || n)(e, s, l, c));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = ve(e), e.length > 1) {
      var i = e.map(function(d) {
        return de.quickSetter(d, t, a);
      }), n = i.length;
      return function(d) {
        for (var u = n; u--; )
          i[u](d);
      };
    }
    e = e[0] || {};
    var o = ue[t], s = pt(e), l = s.harness && (s.harness.aliases || {})[t] || t, c = o ? function(d) {
      var u = new o();
      xt._pt = 0, u.init(e, a ? d + a : d, xt, 0, [e]), u.render(1, u), xt._pt && Li(1, xt);
    } : s.set(e, l);
    return o ? c : function(d) {
      return c(e, l, a ? d + a : d, s, 1);
    };
  },
  quickTo: function(e, t, a) {
    var i, n = de.to(e, we((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), a || {})), o = function(l, c, d) {
      return n.resetTo(t, l, c, d);
    };
    return o.tween = n, o;
  },
  isTweening: function(e) {
    return G.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = mt(e.ease, Gt.ease)), Yi(Gt, e || {});
  },
  config: function(e) {
    return Yi(me, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, i = e.plugins, n = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !ue[s] && !fe[s] && Wt(t + " effect requires " + s + " plugin.");
    }), La[t] = function(s, l, c) {
      return a(ve(s), we(l || {}, n), c);
    }, o && (re.prototype[t] = function(s, l, c) {
      return this.add(La[t](s, qe(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    R[e] = mt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? mt(e, t) : R;
  },
  getById: function(e) {
    return G.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new re(e), i, n;
    for (a.smoothChildTiming = oe(e.smoothChildTiming), G.remove(a), a._dp = 0, a._time = a._tTime = G._time, i = G._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof K && i.vars.onComplete === i._targets[0])) && Re(a, i, i._start - i._delay), i = n;
    return Re(G, a, 0), a;
  },
  context: function(e, t) {
    return e ? new Ir(e, t) : H;
  },
  matchMedia: function(e) {
    return new fs(e);
  },
  matchMediaRefresh: function() {
    return ft.forEach(function(e) {
      var t = e.conditions, a, i;
      for (i in t)
        t[i] && (t[i] = !1, a = 1);
      a && e.revert();
    }) || mi();
  },
  addEventListener: function(e, t) {
    var a = ma[e] || (ma[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = ma[e], i = a && a.indexOf(t);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: Qo,
    wrapYoyo: jo,
    distribute: gr,
    random: fr,
    snap: mr,
    normalize: Yo,
    getUnit: te,
    clamp: Ho,
    splitColor: _r,
    toArray: ve,
    selector: hi,
    mapRange: br,
    pipe: Go,
    unitize: Wo,
    interpolate: Ko,
    shuffle: pr
  },
  install: tr,
  effects: La,
  ticker: he,
  updateRoot: re.updateRoot,
  plugins: ue,
  globalTimeline: G,
  core: {
    PropTween: le,
    globals: ar,
    Tween: K,
    Timeline: re,
    Animation: Kt,
    getCache: pt,
    _removeLinkedListItem: Ea,
    reverting: function() {
      return Z;
    },
    context: function(e) {
      return e && H && (H.data.push(e), e._ctx = H), H;
    },
    suppressOverwrites: function(e) {
      return vi = e;
    }
  }
};
se("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return va[r] = K[r];
});
he.add(re.updateRoot);
xt = va.to({}, {
  duration: 0
});
var ws = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, bs = function(e, t) {
  var a = e._targets, i, n, o;
  for (i in t)
    for (n = a.length; n--; )
      o = e._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = ws(o, i)), o && o.modifier && o.modifier(t[i], e, a[n], i));
}, za = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(s) {
        var l, c;
        if (X(n) && (l = {}, se(n, function(d) {
          return l[d] = 1;
        }), n = l), t) {
          l = {};
          for (c in n)
            l[c] = t(n[c]);
          n = l;
        }
        bs(s, n);
      };
    }
  };
}, de = va.registerPlugin({
  name: "attr",
  init: function(e, t, a, i, n) {
    var o, s, l;
    this.tween = a;
    for (o in t)
      l = e.getAttribute(o) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[o], i, n, 0, 0, o), s.op = o, s.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var a = t._pt; a; )
      Z ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var a = t.length; a--; )
      this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1);
  }
}, za("roundProps", pi), za("modifiers"), za("snap", mr)) || va;
K.version = re.version = de.version = "3.15.0";
er = 1;
Si() && Mt();
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
var Zi, Ke, vt, Ni, ht, $i, Oi, ys = function() {
  return typeof window < "u";
}, Ve = {}, dt = 180 / Math.PI, At = Math.PI / 180, bt = Math.atan2, en = 1e8, Bi = /([A-Z])/g, xs = /(left|right|width|margin|padding|x)/i, _s = /[\s,\(]\S/, Ie = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, fi = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, vs = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, As = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Ss = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ks = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, qr = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Lr = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Cs = function(e, t, a) {
  return e.style[t] = a;
}, Ts = function(e, t, a) {
  return e.style.setProperty(t, a);
}, Es = function(e, t, a) {
  return e._gsap[t] = a;
}, Ms = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, Ps = function(e, t, a, i, n) {
  var o = e._gsap;
  o.scaleX = o.scaleY = a, o.renderTransform(n, o);
}, Rs = function(e, t, a, i, n) {
  var o = e._gsap;
  o[t] = a, o.renderTransform(n, o);
}, W = "transform", ce = W + "Origin", Ds = function r(e, t) {
  var a = this, i = this.target, n = i.style, o = i._gsap;
  if (e in Ve && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ie[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return a.tfm[s] = Fe(i, s);
      }) : this.tfm[e] = o.x ? o[e] : Fe(i, e), e === ce && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ie.transform.split(",").forEach(function(s) {
        return r.call(a, s, t);
      });
    if (this.props.indexOf(W) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ce, t, "")), e = W;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, Nr = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Is = function() {
  var e = this.props, t = this.target, a = t.style, i = t._gsap, n, o;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? a[e[n]] = e[n + 2] : a.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Bi, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Oi(), (!n || !n.isStart) && !a[W] && (Nr(a), i.zOrigin && a[ce] && (a[ce] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Or = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: Is,
    save: Ds
  };
  return e._gsap || de.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return a.save(i);
  }), a;
}, Br, wi = function(e, t) {
  var a = Ke.createElementNS ? Ke.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ke.createElement(e);
  return a && a.style ? a : Ke.createElement(e);
}, ge = function r(e, t, a) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Bi, "-$1").toLowerCase()) || i.getPropertyValue(t) || !a && r(e, Pt(t) || t, 1) || "";
}, tn = "O,Moz,ms,Ms,Webkit".split(","), Pt = function(e, t, a) {
  var i = t || ht, n = i.style, o = 5;
  if (e in n && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(tn[o] + e in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? tn[o] : "") + e;
}, bi = function() {
  ys() && window.document && (Zi = window, Ke = Zi.document, vt = Ke.documentElement, ht = wi("div") || {
    style: {}
  }, wi("div"), W = Pt(W), ce = W + "Origin", ht.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Br = !!Pt("perspective"), Oi = de.core.reverting, Ni = 1);
}, an = function(e) {
  var t = e.ownerSVGElement, a = wi("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", a.appendChild(i), vt.appendChild(a);
  try {
    n = i.getBBox();
  } catch {
  }
  return a.removeChild(i), vt.removeChild(a), n;
}, nn = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, Fr = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = an(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = an(e)), t && !t.width && !t.x && !t.y ? {
    x: +nn(e, ["x", "cx", "x1"]) || 0,
    y: +nn(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, zr = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fr(e));
}, tt = function(e, t) {
  if (t) {
    var a = e.style, i;
    t in Ve && t !== ce && (t = W), a.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(i === "--" ? t : t.replace(Bi, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, Xe = function(e, t, a, i, n, o) {
  var s = new le(e._pt, t, a, 0, 1, o ? Lr : qr);
  return e._pt = s, s.b = i, s.e = n, e._props.push(a), s;
}, rn = {
  deg: 1,
  rad: 1,
  turn: 1
}, qs = {
  grid: 1,
  flex: 1
}, at = function r(e, t, a, i) {
  var n = parseFloat(a) || 0, o = (a + "").trim().substr((n + "").length) || "px", s = ht.style, l = xs.test(t), c = e.tagName.toLowerCase() === "svg", d = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, h = i === "px", g = i === "%", m, p, w, y;
  if (i === o || !n || rn[i] || rn[o])
    return n;
  if (o !== "px" && !h && (n = r(e, t, a, "px")), y = e.getCTM && zr(e), (g || o === "%") && (Ve[t] || ~t.indexOf("adius")))
    return m = y ? e.getBBox()[l ? "width" : "height"] : e[d], Q(g ? n / m * u : n / 100 * m);
  if (s[l ? "width" : "height"] = u + (h ? o : i), p = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, y && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === Ke || !p.appendChild) && (p = Ke.body), w = p._gsap, w && g && w.width && l && w.time === he.time && !w.uncache)
    return Q(n / w.width * u);
  if (g && (t === "height" || t === "width")) {
    var b = e.style[t];
    e.style[t] = u + i, m = e[d], b ? e.style[t] = b : tt(e, t);
  } else
    (g || o === "%") && !qs[ge(p, "display")] && (s.position = ge(e, "position")), p === e && (s.position = "static"), p.appendChild(ht), m = ht[d], p.removeChild(ht), s.position = "absolute";
  return l && g && (w = pt(p), w.time = he.time, w.width = p[d]), Q(h ? m * n / u : m && n ? u / m * n : 0);
}, Fe = function(e, t, a, i) {
  var n;
  return Ni || bi(), t in Ie && t !== "transform" && (t = Ie[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ve[t] && t !== "transform" ? (n = Jt(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Sa(ge(e, ce)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Aa[t] && Aa[t](e, t, a) || ge(e, t) || nr(e, t) || (t === "opacity" ? 1 : 0))), a && !~(n + "").trim().indexOf(" ") ? at(e, t, n, a) + a : n;
}, Ls = function(e, t, a, i) {
  if (!a || a === "none") {
    var n = Pt(t, e, 1), o = n && ge(e, n, 1);
    o && o !== a ? (t = n, a = o) : t === "borderColor" && (a = ge(e, "borderTopColor"));
  }
  var s = new le(this._pt, e.style, t, 0, 1, Rr), l = 0, c = 0, d, u, h, g, m, p, w, y, b, x, v, _;
  if (s.b = a, s.e = i, a += "", i += "", i.substring(0, 6) === "var(--" && (i = ge(e, i.substring(4, i.indexOf(")")))), i === "auto" && (p = e.style[t], e.style[t] = i, i = ge(e, t) || i, p ? e.style[t] = p : tt(e, t)), d = [a, i], Ar(d), a = d[0], i = d[1], h = a.match(yt) || [], _ = i.match(yt) || [], _.length) {
    for (; u = yt.exec(i); )
      w = u[0], b = i.substring(l, u.index), m ? m = (m + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (m = 1), w !== (p = h[c++] || "") && (g = parseFloat(p) || 0, v = p.substr((g + "").length), w.charAt(1) === "=" && (w = _t(g, w) + v), y = parseFloat(w), x = w.substr((y + "").length), l = yt.lastIndex - x.length, x || (x = x || me.units[t] || v, l === i.length && (i += x, s.e += x)), v !== x && (g = at(e, t, p, x) || 0), s._pt = {
        _next: s._pt,
        p: b || c === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: g,
        c: y - g,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    s.r = t === "display" && i === "none" ? Lr : qr;
  return $n.test(i) && (s.e = 0), this._pt = s, s;
}, on = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ns = function(e) {
  var t = e.split(" "), a = t[0], i = t[1] || "50%";
  return (a === "top" || a === "bottom" || i === "left" || i === "right") && (e = a, a = i, i = e), t[0] = on[a] || a, t[1] = on[i] || i, t.join(" ");
}, Os = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, i = a.style, n = t.u, o = a._gsap, s, l, c;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), c = n.length; --c > -1; )
        s = n[c], Ve[s] && (l = 1, s = s === "transformOrigin" ? ce : W), tt(a, s);
    l && (tt(a, W), o && (o.svg && a.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Jt(a, 1), o.uncache = 1, Nr(i)));
  }
}, Aa = {
  clearProps: function(e, t, a, i, n) {
    if (n.data !== "isFromStart") {
      var o = e._pt = new le(e._pt, t, a, 0, 0, Os);
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
}, Xt = [1, 0, 0, 1, 0, 0], Ur = {}, Hr = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, sn = function(e) {
  var t = ge(e, W);
  return Hr(t) ? Xt : t.substr(7).match(Zn).map(Q);
}, Fi = function(e, t) {
  var a = e._gsap || pt(e), i = e.style, n = sn(e), o, s, l, c;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? Xt : n) : (n === Xt && !e.offsetParent && e !== vt && !a.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, s = e.nextElementSibling, vt.appendChild(e)), n = sn(e), l ? i.display = l : tt(e, "display"), c && (s ? o.insertBefore(e, s) : o ? o.appendChild(e) : vt.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, yi = function(e, t, a, i, n, o) {
  var s = e._gsap, l = n || Fi(e, !0), c = s.xOrigin || 0, d = s.yOrigin || 0, u = s.xOffset || 0, h = s.yOffset || 0, g = l[0], m = l[1], p = l[2], w = l[3], y = l[4], b = l[5], x = t.split(" "), v = parseFloat(x[0]) || 0, _ = parseFloat(x[1]) || 0, T, A, C, k;
  a ? l !== Xt && (A = g * w - m * p) && (C = v * (w / A) + _ * (-p / A) + (p * b - w * y) / A, k = v * (-m / A) + _ * (g / A) - (g * b - m * y) / A, v = C, _ = k) : (T = Fr(e), v = T.x + (~x[0].indexOf("%") ? v / 100 * T.width : v), _ = T.y + (~(x[1] || x[0]).indexOf("%") ? _ / 100 * T.height : _)), i || i !== !1 && s.smooth ? (y = v - c, b = _ - d, s.xOffset = u + (y * g + b * p) - y, s.yOffset = h + (y * m + b * w) - b) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = _, s.smooth = !!i, s.origin = t, s.originIsAbsolute = !!a, e.style[ce] = "0px 0px", o && (Xe(o, s, "xOrigin", c, v), Xe(o, s, "yOrigin", d, _), Xe(o, s, "xOffset", u, s.xOffset), Xe(o, s, "yOffset", h, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + _);
}, Jt = function(e, t) {
  var a = e._gsap || new kr(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var i = e.style, n = a.scaleX < 0, o = "px", s = "deg", l = getComputedStyle(e), c = ge(e, ce) || "0", d, u, h, g, m, p, w, y, b, x, v, _, T, A, C, k, M, F, z, L, U, D, I, P, $, ke, Ge, Se, nt, Vi, Le, rt;
  return d = u = h = p = w = y = b = x = v = 0, g = m = 1, a.svg = !!(e.getCTM && zr(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[W] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[W] !== "none" ? l[W] : "")), i.scale = i.rotate = i.translate = "none"), A = Fi(e, a.svg), a.svg && (a.uncache ? ($ = e.getBBox(), c = a.xOrigin - $.x + "px " + (a.yOrigin - $.y) + "px", P = "") : P = !t && e.getAttribute("data-svg-origin"), yi(e, P || c, !!P || a.originIsAbsolute, a.smooth !== !1, A)), _ = a.xOrigin || 0, T = a.yOrigin || 0, A !== Xt && (F = A[0], z = A[1], L = A[2], U = A[3], d = D = A[4], u = I = A[5], A.length === 6 ? (g = Math.sqrt(F * F + z * z), m = Math.sqrt(U * U + L * L), p = F || z ? bt(z, F) * dt : 0, b = L || U ? bt(L, U) * dt + p : 0, b && (m *= Math.abs(Math.cos(b * At))), a.svg && (d -= _ - (_ * F + T * L), u -= T - (_ * z + T * U))) : (rt = A[6], Vi = A[7], Ge = A[8], Se = A[9], nt = A[10], Le = A[11], d = A[12], u = A[13], h = A[14], C = bt(rt, nt), w = C * dt, C && (k = Math.cos(-C), M = Math.sin(-C), P = D * k + Ge * M, $ = I * k + Se * M, ke = rt * k + nt * M, Ge = D * -M + Ge * k, Se = I * -M + Se * k, nt = rt * -M + nt * k, Le = Vi * -M + Le * k, D = P, I = $, rt = ke), C = bt(-L, nt), y = C * dt, C && (k = Math.cos(-C), M = Math.sin(-C), P = F * k - Ge * M, $ = z * k - Se * M, ke = L * k - nt * M, Le = U * M + Le * k, F = P, z = $, L = ke), C = bt(z, F), p = C * dt, C && (k = Math.cos(C), M = Math.sin(C), P = F * k + z * M, $ = D * k + I * M, z = z * k - F * M, I = I * k - D * M, F = P, D = $), w && Math.abs(w) + Math.abs(p) > 359.9 && (w = p = 0, y = 180 - y), g = Q(Math.sqrt(F * F + z * z + L * L)), m = Q(Math.sqrt(I * I + rt * rt)), C = bt(D, I), b = Math.abs(C) > 2e-4 ? C * dt : 0, v = Le ? 1 / (Le < 0 ? -Le : Le) : 0), a.svg && (P = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Hr(ge(e, W)), P && e.setAttribute("transform", P))), Math.abs(b) > 90 && Math.abs(b) < 270 && (n ? (g *= -1, b += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (m *= -1, b += b <= 0 ? 180 : -180)), t = t || a.uncache, a.x = d - ((a.xPercent = d && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + o, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + o, a.z = h + o, a.scaleX = Q(g), a.scaleY = Q(m), a.rotation = Q(p) + s, a.rotationX = Q(w) + s, a.rotationY = Q(y) + s, a.skewX = b + s, a.skewY = x + s, a.transformPerspective = v + o, (a.zOrigin = parseFloat(c.split(" ")[2]) || !t && a.zOrigin || 0) && (i[ce] = Sa(c)), a.xOffset = a.yOffset = 0, a.force3D = me.force3D, a.renderTransform = a.svg ? Fs : Br ? Vr : Bs, a.uncache = 0, a;
}, Sa = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Ua = function(e, t, a) {
  var i = te(t);
  return Q(parseFloat(t) + parseFloat(at(e, "x", a + "px", i))) + i;
}, Bs = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Vr(e, t);
}, ot = "0deg", Rt = "0px", st = ") ", Vr = function(e, t) {
  var a = t || this, i = a.xPercent, n = a.yPercent, o = a.x, s = a.y, l = a.z, c = a.rotation, d = a.rotationY, u = a.rotationX, h = a.skewX, g = a.skewY, m = a.scaleX, p = a.scaleY, w = a.transformPerspective, y = a.force3D, b = a.target, x = a.zOrigin, v = "", _ = y === "auto" && e && e !== 1 || y === !0;
  if (x && (u !== ot || d !== ot)) {
    var T = parseFloat(d) * At, A = Math.sin(T), C = Math.cos(T), k;
    T = parseFloat(u) * At, k = Math.cos(T), o = Ua(b, o, A * k * -x), s = Ua(b, s, -Math.sin(T) * -x), l = Ua(b, l, C * k * -x + x);
  }
  w !== Rt && (v += "perspective(" + w + st), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (_ || o !== Rt || s !== Rt || l !== Rt) && (v += l !== Rt || _ ? "translate3d(" + o + ", " + s + ", " + l + ") " : "translate(" + o + ", " + s + st), c !== ot && (v += "rotate(" + c + st), d !== ot && (v += "rotateY(" + d + st), u !== ot && (v += "rotateX(" + u + st), (h !== ot || g !== ot) && (v += "skew(" + h + ", " + g + st), (m !== 1 || p !== 1) && (v += "scale(" + m + ", " + p + st), b.style[W] = v || "translate(0, 0)";
}, Fs = function(e, t) {
  var a = t || this, i = a.xPercent, n = a.yPercent, o = a.x, s = a.y, l = a.rotation, c = a.skewX, d = a.skewY, u = a.scaleX, h = a.scaleY, g = a.target, m = a.xOrigin, p = a.yOrigin, w = a.xOffset, y = a.yOffset, b = a.forceCSS, x = parseFloat(o), v = parseFloat(s), _, T, A, C, k;
  l = parseFloat(l), c = parseFloat(c), d = parseFloat(d), d && (d = parseFloat(d), c += d, l += d), l || c ? (l *= At, c *= At, _ = Math.cos(l) * u, T = Math.sin(l) * u, A = Math.sin(l - c) * -h, C = Math.cos(l - c) * h, c && (d *= At, k = Math.tan(c - d), k = Math.sqrt(1 + k * k), A *= k, C *= k, d && (k = Math.tan(d), k = Math.sqrt(1 + k * k), _ *= k, T *= k)), _ = Q(_), T = Q(T), A = Q(A), C = Q(C)) : (_ = u, C = h, T = A = 0), (x && !~(o + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (x = at(g, "x", o, "px"), v = at(g, "y", s, "px")), (m || p || w || y) && (x = Q(x + m - (m * _ + p * A) + w), v = Q(v + p - (m * T + p * C) + y)), (i || n) && (k = g.getBBox(), x = Q(x + i / 100 * k.width), v = Q(v + n / 100 * k.height)), k = "matrix(" + _ + "," + T + "," + A + "," + C + "," + x + "," + v + ")", g.setAttribute("transform", k), b && (g.style[W] = k);
}, zs = function(e, t, a, i, n) {
  var o = 360, s = X(n), l = parseFloat(n) * (s && ~n.indexOf("rad") ? dt : 1), c = l - i, d = i + c + "deg", u, h;
  return s && (u = n.split("_")[1], u === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), u === "cw" && c < 0 ? c = (c + o * en) % o - ~~(c / o) * o : u === "ccw" && c > 0 && (c = (c - o * en) % o - ~~(c / o) * o)), e._pt = h = new le(e._pt, t, a, i, c, vs), h.e = d, h.u = "deg", e._props.push(a), h;
}, ln = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, Us = function(e, t, a) {
  var i = ln({}, a._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = a.style, s, l, c, d, u, h, g, m;
  i.svg ? (c = a.getAttribute("transform"), a.setAttribute("transform", ""), o[W] = t, s = Jt(a, 1), tt(a, W), a.setAttribute("transform", c)) : (c = getComputedStyle(a)[W], o[W] = t, s = Jt(a, 1), o[W] = c);
  for (l in Ve)
    c = i[l], d = s[l], c !== d && n.indexOf(l) < 0 && (g = te(c), m = te(d), u = g !== m ? at(a, l, c, m) : parseFloat(c), h = parseFloat(d), e._pt = new le(e._pt, s, l, u, h - u, fi), e._pt.u = m || 0, e._props.push(l));
  ln(s, i);
};
se("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", a = "Right", i = "Bottom", n = "Left", o = (e < 3 ? [t, a, i, n] : [t + n, t + a, i + a, i + n]).map(function(s) {
    return e < 2 ? r + s : "border" + s + r;
  });
  Aa[e > 1 ? "border" + r : r] = function(s, l, c, d, u) {
    var h, g;
    if (arguments.length < 4)
      return h = o.map(function(m) {
        return Fe(s, m, c);
      }), g = h.join(" "), g.split(h[0]).length === 5 ? h[0] : g;
    h = (d + "").split(" "), g = {}, o.forEach(function(m, p) {
      return g[m] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), s.init(l, g, u);
  };
});
var Gr = {
  name: "css",
  register: bi,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, i, n) {
    var o = this._props, s = e.style, l = a.vars.startAt, c, d, u, h, g, m, p, w, y, b, x, v, _, T, A, C, k;
    Ni || bi(), this.styles = this.styles || Or(e), C = this.styles.props, this.tween = a;
    for (p in t)
      if (p !== "autoRound" && (d = t[p], !(ue[p] && Cr(p, t, a, i, e, n)))) {
        if (g = typeof d, m = Aa[p], g === "function" && (d = d.call(a, i, e, n), g = typeof d), g === "string" && ~d.indexOf("random(") && (d = Qt(d)), m)
          m(this, e, p, d, a) && (A = 1);
        else if (p.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(p) + "").trim(), d += "", $e.lastIndex = 0, $e.test(c) || (w = te(c), y = te(d), y ? w !== y && (c = at(e, p, c, y) + y) : w && (d += w)), this.add(s, "setProperty", c, d, i, n, 0, 0, p), o.push(p), C.push(p, 0, s[p]);
        else if (g !== "undefined") {
          if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(a, i, e, n) : l[p], X(c) && ~c.indexOf("random(") && (c = Qt(c)), te(c + "") || c === "auto" || (c += me.units[p] || te(Fe(e, p)) || ""), (c + "").charAt(1) === "=" && (c = Fe(e, p))) : c = Fe(e, p), h = parseFloat(c), b = g === "string" && d.charAt(1) === "=" && d.substr(0, 2), b && (d = d.substr(2)), u = parseFloat(d), p in Ie && (p === "autoAlpha" && (h === 1 && Fe(e, "visibility") === "hidden" && u && (h = 0), C.push("visibility", 0, s.visibility), Xe(this, s, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), p !== "scale" && p !== "transform" && (p = Ie[p], ~p.indexOf(",") && (p = p.split(",")[0]))), x = p in Ve, x) {
            if (this.styles.save(p), k = d, g === "string" && d.substring(0, 6) === "var(--") {
              if (d = ge(e, d.substring(4, d.indexOf(")"))), d.substring(0, 5) === "calc(") {
                var M = e.style.perspective;
                e.style.perspective = d, d = ge(e, "perspective"), M ? e.style.perspective = M : tt(e, "perspective");
              }
              u = parseFloat(d);
            }
            if (v || (_ = e._gsap, _.renderTransform && !t.parseTransform || Jt(e, t.parseTransform), T = t.smoothOrigin !== !1 && _.smooth, v = this._pt = new le(this._pt, s, W, 0, 1, _.renderTransform, _, 0, -1), v.dep = 1), p === "scale")
              this._pt = new le(this._pt, _, "scaleY", _.scaleY, (b ? _t(_.scaleY, b + u) : u) - _.scaleY || 0, fi), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              C.push(ce, 0, s[ce]), d = Ns(d), _.svg ? yi(e, d, 0, T, 0, this) : (y = parseFloat(d.split(" ")[2]) || 0, y !== _.zOrigin && Xe(this, _, "zOrigin", _.zOrigin, y), Xe(this, s, p, Sa(c), Sa(d)));
              continue;
            } else if (p === "svgOrigin") {
              yi(e, d, 1, T, 0, this);
              continue;
            } else if (p in Ur) {
              zs(this, _, p, h, b ? _t(h, b + d) : d);
              continue;
            } else if (p === "smoothOrigin") {
              Xe(this, _, "smooth", _.smooth, d);
              continue;
            } else if (p === "force3D") {
              _[p] = d;
              continue;
            } else if (p === "transform") {
              Us(this, d, e);
              continue;
            }
          } else p in s || (p = Pt(p) || p);
          if (x || (u || u === 0) && (h || h === 0) && !_s.test(d) && p in s)
            w = (c + "").substr((h + "").length), u || (u = 0), y = te(d) || (p in me.units ? me.units[p] : w), w !== y && (h = at(e, p, c, y)), this._pt = new le(this._pt, x ? _ : s, p, h, (b ? _t(h, b + u) : u) - h, !x && (y === "px" || p === "zIndex") && t.autoRound !== !1 ? ks : fi), this._pt.u = y || 0, x && k !== d ? (this._pt.b = c, this._pt.e = k, this._pt.r = Ss) : w !== y && y !== "%" && (this._pt.b = c, this._pt.r = As);
          else if (p in s)
            Ls.call(this, e, p, c, b ? b + d : d);
          else if (p in e)
            this.add(e, p, c || e[p], b ? b + d : d, i, n);
          else if (p !== "parseTransform") {
            Ci(p, d);
            continue;
          }
          x || (p in s ? C.push(p, 0, s[p]) : typeof e[p] == "function" ? C.push(p, 2, e[p]()) : C.push(p, 1, c || e[p])), o.push(p);
        }
      }
    A && Dr(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Oi())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: Fe,
  aliases: Ie,
  getSetter: function(e, t, a) {
    var i = Ie[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Ve && t !== ce && (e._gsap.x || Fe(e, "x")) ? a && $i === a ? t === "scale" ? Ms : Es : ($i = a || {}) && (t === "scale" ? Ps : Rs) : e.style && !Ai(e.style[t]) ? Cs : ~t.indexOf("-") ? Ts : qi(e, t);
  },
  core: {
    _removeProperty: tt,
    _getMatrix: Fi
  }
};
de.utils.checkPrefix = Pt;
de.core.getStyleSaver = Or;
(function(r, e, t, a) {
  var i = se(r + "," + e + "," + t, function(n) {
    Ve[n] = 1;
  });
  se(e, function(n) {
    me.units[n] = "deg", Ur[n] = 1;
  }), Ie[i[13]] = r + "," + e, se(a, function(n) {
    var o = n.split(":");
    Ie[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
se("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  me.units[r] = "px";
});
de.registerPlugin(Gr);
var f = de.registerPlugin(Gr) || de;
f.core.Tween;
const Be = "Thinking", Vt = "Show more", fa = "Show less";
function zi(r, e) {
  const t = r.toLowerCase();
  return t.includes("source") || t.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : t.includes("competitor") || t.includes("positioning") ? "Comparing the business context against known market alternatives, displacement angles, objections, and differentiation claims." : t.includes("messaging") || t.includes("proof") ? "Extracting repeatable claims, customer proof, pain language, and credible hooks that can become outbound strategy." : t.includes("pylon") ? "Reading the uploaded business context to identify category language, buyer pains, competitive traps, and GTM opportunities." : t.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : t.includes("icp") || t.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : t.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : t.includes("career") || t.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : t.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : t.includes("funding") || t.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : t.includes("transcript") || t.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : t.includes("logs") || t.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : t.includes("account") || t.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : e % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
}
function Ra(r) {
  return r <= 1 ? "4m 12s" : r <= 3 ? "4m 20s" : "4m 50s";
}
function Hs(r) {
  const e = r.trim().toLowerCase(), t = e.match(/(\d+(?:\.\d+)?)\s*m/), a = e.match(/(\d+(?:\.\d+)?)\s*s/);
  let i = 0, n = !1;
  if (t && (i += Number(t[1]) * 60, n = !0), a && (i += Number(a[1]), n = !0), !n) {
    const o = Number(e);
    return Number.isFinite(o) ? Math.max(0, o) : null;
  }
  return Number.isFinite(i) ? Math.max(0, i) : null;
}
function ra(r) {
  const e = Math.max(0, Math.floor(r)), t = Math.floor(e / 60), a = e % 60;
  return t > 0 ? `${t}m ${a}s` : `${a}s`;
}
function Vs(r, e, t, a = {}) {
  const i = Hs(t);
  if (i === null) {
    e.textContent = t;
    return;
  }
  if (e.textContent = "0s", a.reducedMotion || i <= 0) {
    e.textContent = ra(i);
    return;
  }
  const n = r.duration();
  if (n <= 0) {
    e.textContent = ra(i);
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
        e.textContent = ra(o.seconds);
      },
      onComplete: () => {
        e.textContent = ra(i);
      },
      onReverseComplete: () => {
        e.textContent = "0s";
      }
    },
    0
  );
}
const Gs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVQ4jd3TsRFAYAyG4Td+1rGFRm8CnbOO0gL0GgOomcEWjmg07jj86aRN8tyXIsJYKN9rAXoceeCxDBABKavUvsBRmhgBInk1NhYNkF21rAkImcpLGXQmroZnQLfmptcCj4D5hB8A4vkLpwSLEZDeBjjNgc43yQ5kyxoFPrhHWwAAAABJRU5ErkJggg==", Ws = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAaVBMVEVHcEz+tQD/vAD8tAD6K2D/tgAlxPkVwP8YwP//tgD+uAAOwP8Mwv/5K2DHLyeKAGkcwP8Aw/8Mv/+6IUj/rwD5K2GzAE24G0j//wChAFmwD0f9KkYXv//9tAD4KmC3H0a5H0jZJVTkJ1jwBUmcAAAAG3RSTlMAzFX6SZEOh0ZCD70sfxAFFmn6jRQod/YUM7hQnaq0AAAAdklEQVQYlY2PSRKDIBAAhz0oSFyzFIvJ/x8ZgYhcrLJPdHOYGYBrNIwQ1hSVyEUIklm3p8sQtyXTYfR3hzDnQD/v15NFZZNq7Q2o/4bHYrDkYrA2Be9DWLveJnLwowFRBR2HlTDrvEwJOymIO1ShPX4jip/c+QPspgsTY5Zd9wAAAABJRU5ErkJggg==", Ha = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKklEQVQ4jZ2Sz0tUcRTFP9/33jwaf+ITXNWuQst2ZoPRQqSUMWNIoRaFZFASSEFLw7KSNi0MbNMiWmQ2JQXmOKPixog0gohMon+g8sVIj0lt3ry5LQafjY0tuvDd3HvOufee+1X2j4o5lDrA/4TIvLIdSwrVFhcyTCVcdlfrhI+aW2poWxWSSWHg+iqxsbSfm4yn8bz8fr6A5wkXzqVITOQIoQYDy1I+cOFDhtMnU/R0/ywsMJ1wGY2mOXMqRfTRGoahaA4HfOBA/wpKg3BbIE8A27Fk/c3MlkljkyFKITduBeVhtEQ6TpjyIlEqgAwOFcmfeNuxpKCJr1663OxfYfsOjaoqjffvPJrDAXouBfE84e2bDOXliuo9BgbAxHg6zyyAuv0GbZGc+0vf1thbq3P5Yop4zMVeEnr7ghsCnz95PHmcprIyt3drm8nI8C8CBogorEqNkeFcg4OHch7s3KUDoGzHksWPGZaTQqjBQNcVQ3dWmYy71O7T+foly3JSuHItSF39JgM3m2g7lgzeLRKlkPHJUom0mxJ9XiK9fUEBpKU1ILNzZXn4PIEHw8Wi68jh5oDYjiWRdlM6u0yxHUtuDxaJpiGahoyMlvicvJ8YG3PJZqH3atDPxWMu2azQ2bWNe/eLOd5h0ti0sUreGT1PmJl2OdKSc//82RTPnqaJTZVSHyqwP+SusB66rnwywLGISU2NTlm5+ovoT/DdqXgtqNCWiH+FyPxvxJQOsx2aRhAAAAAASUVORK5CYII=", Ys = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAQlBMVEUXFxfy6OiEgICfmZlpZWXWzs5NS0syMTFjYGBbWFjf1tZva2uclpbk29vDu7tFQkI4NjaLhoa7tLS0ra3q4eEkJCQHTzuzAAAATUlEQVQYlWNgoARwMDFxIvOZGBkZmeEsRkYubhYeuAAvKysfPwMDC1yACaIJVUCAjU0QWYAbbBBMgFVImBkMuGG2iKA4QJSdXZQiHwEAwJgBiwaJnkkAAAAASUVORK5CYII=", cn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAFklEQVR4nGNQOhpHEmIY1TCqYfhqAACML0UQHuDXpwAAAABJRU5ErkJggg==", Qs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcEwAc/8Ac/8Acv8Ac/8AcP8Ac/8Ac/8Ac/8Ac/8Ac/8Ac/8Ac/8AcP8Ac/8pWYqpAAAADnRSTlMAMm5b2g/F7aVJlYG0HQV+ULEAAABmSURBVBiVbY/bDsAgCEMRcF7X///c4dQMk/UJCs1JiUyKUNEKOi0x+o1EwDbGmBAyeBsXhJGDfS0VqA/MjH0544VczpiQeELcvYMN4ow/SHSQitrQ5INEu1vAQaysHk0EXUYTHcsDTdkETLWztHkAAAAASUVORK5CYII=", js = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEVHcExPtf0upv0bpP0Vk/3b8f7b8f7c8v5Tuf0XmP0Qkf0Ynf0Zof0bo/0p6qQOAAAAB3RSTlMA+1/j4+NfcZs3/QAAAF5JREFUGJVtz8sOwCAIRNERHxXQ///dKpBUk87unrABoDznHKPvJQLIMqB3QrYcGpAwvG9QDUgGO5Ut94Unsx2swXNB8sGT5YmBf0FuWCkHWB5QRE6ooBvaerd8UBteZt8ICiaoa+IAAAAASUVORK5CYII=", dn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB2UlEQVQ4jZWSsW9OYRjFf+e9935J/wJt+B/UIBqKEE2DTfJFpWyiWiImi0FrtJGWLyKSJhIWk0mnaoi0BKMYSAzKYrFo73vfY7it7+vXNuFJnul5znnPc84rX8yHwQ+AlcrZ9axv9akmiWxRvkBBKEbsNIWwrLNKY9k3oA8AkUDzkq5xr3wnMICNuJwPOHILfADQGufXAPrVfoKAfdROrxjPbvs8OwCYKMYcPQ8e7ACDiIrjjWZw9QQTNmkWyyJMkZfPXGaLwK6OWRLZqDxJ7uV8Dnxkq7sBg5YQxh5oE+iFUhwSgC8V+xzTAtDYhqS7VpWFQd0t39Syp8sliceb9/Sh7i5JYpaZ8i1Q3y3hmDTLmuvrYCkOS3G4i8Qh0yOp3v1rXF5Q/aN8qNq4AHXOqfI5OiPC/Xb+3ORz4P7Ou5BPe223NnGi2OsqveR/TFQ4qFa5tE2Meg30gHdvVNVZWpDjsVB9b5xCPrxhJO9U0ThphavAj63xHiRrNEMg3ez+hTa9VblyPGuVd+Rqj8Q08HsDgQlO6UYA97RZSUjzMQ+Hslb1EED3WaZVXYkK+0FzQOpQkQdZI8AX0CeRjao3DjVmysX1nGte3GiV7/UznhBZE/QR8VlFOPMHnYnGfYh6xT4AAAAASUVORK5CYII=", Ks = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEVHcEwAtv//cCD/WTcAw/+gTOIAtv//Njcky3H/czcky3Eky3FikcacmrbFi47/NTQizG8At///czeGTv+MRv/IQ6//cC9elcD/byiil7FflMHhlt8GAAAAD3RSTlMAO2o2Y3N9dHV3PDJ3d8DNbxI3AAAAZUlEQVQYlYWMSQ6AIBAEB2V1BdnU/z/UITLEC7FO3ZV0AyCjUsoYM0JF7ciBDFXsJI6eeCfpTIZORIxx2K61dY9w5xyvovTgCj0hfAihTCSdLHfOwCSjri0CH+yvKBP9FTDpueUHZzYHUnCSxBoAAAAASUVORK5CYII=", Xs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAVFBMVEX0XUj////0V0DzTDH3nJH0WUP0Vj/5r6f7ycTzPxv5uLHzUjv96+r96Ob4rKT83Nj2i3771dH+9vb1eWr7z8v2gXP1fW76w77+8O/yMADyIwD4oZcjV8HwAAAAZ0lEQVQYlY2PSRKAIAwEGWJYFBfABfX//5SDZTiaW3dNTU2U+nmGyAwsTDaM07x8hiJSAjr9Mmc471cR+sbGvDSJHYf3ToSiGaU0HdX0qfStUMN5OWQZUhsTIkmA7xBsw9XU6X/ffAC+LwMx3zJEQgAAAABJRU5ErkJggg==", Js = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEUBARsAABkAAAwAAAAAABVKOkMXEiN8fIH/zc2RcnbntbWHam8HBRwZFCTzvr75w8P/0NBENj8nHyyog4fQo6S1jpD4wsKde391XGLDmZvsubmMAc49AAAAd0lEQVQYlW2PwRKDMAhElwRjTGyobaxt/v9DSxwOVrt7eCwDM4DR4SA34ifjHHcRQU0GzSHMtzkEA8GXON2nWAwePslTstQaBy3W3nhVbaRt41Tl7fpEjlk+a+loOtH25Wbw4GV4qFUdCwPMpGbDn0Mvujx3fv8L/hgFdRdpvpEAAAAASUVORK5CYII=", Zs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAAD///8nJydBQUGpqan29vYaGhqysrKHh4fY2Ng8PDzg4OCNjY3s7Ox0dHS5ubnm5uZdXV0WFhbBwcEICAhiYmKDg4OWlpYkJCS0tLQRERFISEg4ODhsbGw7gbjnAAAAdUlEQVQYlV3PRxKAIAwFUAQlIFJsIJb7X9ORgC27vCEhn9SUvIrW5NOT0hqrHfS3DmOVyg7YT21TZUGYPSuCUxxEEUggKYg85RIwRaFD0bjjkZjAB6aWGC4xuLQR+Y1c8d9N+0vCzsup67Ezyc30TvOE+8c/ARgLBHAKow9dAAAAAElFTkSuQmCC", $s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVQ4jV2RzWtcZRyFz/m9985MZtLQzDgf+VhomXRqAhVJ28FGha6kC0Gr/hdSdNlKCVkUC250IypY0HVXLvwEqQubmsSFSuJNGnXVVjOt1aYzk8y973tchEr0WZ3Fw+HAIf5Hq9U+Cuh5QEYiC0E5gHNmWATClST5/qf9vnsYms1mvlZrXiDhdneLl8nBPZI5M/6YZfEHpD8GWK5anTxTrx+81ul0/L8FzWYzbzZ60Xt71yw0zNJXzThN8mcABedQJVEm7dc01ZdS/EajMXq10+l4A4AoGj0fgr0dRf4FwG2bYUPiNxJ+D0F/ACEPQKRXHOO093gnTYfOAYBrtdpHSTgzDIeAzvr60leVysTpQmH3Y+9d2wzPSTZCopgkKx+WyxOjUWQ1AIN6fcLzyJHjCxIyEn0AkDACsCCFLomeZNd7PbdSKvkFUn0A2wAO7+yUzhYK3dcNwMksi98n9UMI3CTR73bdPImixKtA2C2V/IKkB8713pK0EQLuDw1tT0s0V6lMPAqELoADgG6T1o6i7G8JqzdurCzdvXvrZq02uU2q4X005px+IzEA+IiEEZOQOsdJyUwSJSyaWXv/15IYApdItrMMcQi24z1vAsgZiZj0iVl4xoz1fH7n0xA0bOZempqabU9NzbYlvBjCn0sktsxYB3Q/l8MGqbkIYOj3D6zl890REocHg/wsyaFu180XizhmpnYIoRtFo+cBgOQUCWYZnpL4ravVxu45l54iuRICbq+vL1+uVsefjmOdMAtPSlwrFAYfeR/NJcnyfLk8USJtC1AaRfja3blza6tSGT/jvX3hnE5Uq+NlgAcBJRIXAfzlvXtCsmKtNjZM8pBz/rr3PJUky1cMAOK4/6ZZeC1N8ZnkCIAAd83QIDVO4llALcnRufB5mtrZOO5dwp64x8zMTC5Nh86R/EXCIe/j9+I4fVzCZAhYTdNSkss9eAXgY3Hcu7S6ujr4T8FDpqePz2SZXiZxUsK1vSWyEBhCsE82N79b2+//Azn7ZJedFPGXAAAAAElFTkSuQmCC", el = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAFklEQVR4nGPojvlGEmIY1TCqYfhqAAAq1t0QMabSpAAAAABJRU5ErkJggg==", tl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAFklEQVR4nGOwbvpGEmIY1TCqYfhqAACHB7MQtEO1oAAAAABJRU5ErkJggg==", al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLElEQVQ4jX2QMUhbYRSFv1dMhjyhL2BeMBmc0qWLXQVpHFzi4tSCS0XUwbmTWTJIBrM4CG4lggiddOjgJDgmm5B2cHk65EGSIb+Q/w0vw+nQmJo2euHCuXDvxznXkeQCH4F3QA54C6RHOmOt9aIoShtjEvPz8+3Z2dmy4zinjGoG+HZ5efnp9vaWMAzp9/uEYYi1FgDXdUmlUnieRxiG+f39/bqkL8Bnx3F6SOr4vq9SqaRGo6EgCBTHsaZVEARaX19XpVKRtXYgqeRI6mSzWb/b7bK5ucnq6irGGKy19Ho9oiga6ziOeXh44O7ujpWVFa6vr3/O8Kzq9TrGGAqFAslkkoWFBRKJBPl8Hs/zxm2tZXl5GSAzAQC4uLgY6zAMyeVyAJyfn3N1dcXc3Bzb29t/D55+AOjPKFUqFSUSCQE6OjqSJDUaDaXTacVxrMFgIN/3JakzFSBJvu/L8zx5nqdWq6UgCJ6OJgBv/o3wvA4ODjDGsLW1RRRFU3deBRSLRXZ2dmg2m1Sr1elLr0VotVrq9/sqFAoCXozwa3FxcSrcGIPneRwfH79sU1Kx2WyOvy5JtVpNu7u72tvbGzs6OzvT4eHhfw6cEaRWrVa/lstlBoPBhANjDMPhkHa7zePjI8YYut0uJycndDqd7hPABRpra2vvb25uJhwmk0lyuRyu65LJZMbz0tISGxsbP5xnUQrA9/v7+w+pVMpKstls1gBDwAK9kR4C7VGf/gbPbZWL1WleXwAAAABJRU5ErkJggg==", il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAFklEQVR4nGP4Oo+bJMQwqmFUw/DVAAACRZ4QdD+g5wAAAABJRU5ErkJggg==", nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEVHcEwAKZFgzf8odsEAKpEAKJBgzf9gzf8AKZFgzf9Qsuxhz/9h0P8AKZEAKZEAKpJgzf8AKZEAKZEAKZIAAG4AKf9gzf8AJY4AKZEDkv9j0f8ASbMAjP9Ht/wAiP8AD4kAG4sinv8AMJlHoN8AOaIrgNL2JF6mAAAAFXRSTlMADo0BaZ3sXcqaK0aywNVF6c79NxD+lfCrAAAAfElEQVQYlY2P2xKCMAxEQUBb8ILAJGlpC4j+/y8SxxKGB2bctz2TZLNJ8pfSu1Lqlm/gQYSsQkBO2LNeAgpCw3LXFTzxbZwLk71E0GDvQjAA+uczGj/eewsQJ1oaZ8sWzhIyeHb1aQsZLIj7PtqVsh6vVgDlrkyldXZUdAFXgAfvMnEX9AAAAABJRU5ErkJggg==", rl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZUlEQVQ4jX2TTUhUURiGnzMqM2NOzsbQfsckmsjwmhqpUQoVlom26EcIRIraBCmY0MqGwkRa6KZ0Ue0yF5L2Y7QaM0GQpEubxhloBhfO2J8Td4a5g42nhV69JviuzoHvfc/7vd93BP/DrVQhl+oRogFwASBREaggPPjUkLlcrJ5cihP7UgdStGwQXceQPSQsHkJqdE3ApTixSi8CZVOyAYlKUlQTUqNpAORtewCiAcBhc1C4q5DTxXVE/oSxbsmivKYRmQHR72HDdy4Z0sbP+fcCt+ICGTTIo60v+RIJMKKOUlp2jgU7qDNj7C5T2H+qnO7as+hazOin2gKyw3BWln8YX8RPps3BXHSORQSpNFj4Fca5Ixff5DjuqkpzKw3pCBTkmsCrz2/5nYxz72o/d57eQLdC0/3HDPd50Bej5JcWwevVQOvTkWvB+cJ+LpU38kOP0/m8jbrzbcSzJS+6b1N5rZnMHCsTT56Z43RZzDdfJIBEkmnPIqZrpAToCQ09rmFzZJGIxQn7v62fKu6iICsL036mlangNElh4eaVh3QNtKGlNJq6HuEd6md+1s++6gredHQbbDUdIUaQ8tayAz+1xXUI+1b6hjycrLmOni0Z7Gyn5OIFcg4W4J/4aApRqBYkw8bd+3WcY+4TxBMaiYSGkAJSIKVAj8UoqDjO7CfV3IFneRMPKD2Gizzndg7ll7BnbwnvJgf4myE5UnuZYGCawOQH9FjMeL2XGbVlWUBRnCSl1zyRTbFhlSMRnZ15g6SEHTi6OVn0khTN6z+TGW7FBdxFUISUK45ECMkIgmF86pi5/B9ga/KYLsUOOgAAAABJRU5ErkJggg==", ol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/0lEQVQ4jX2TPWiTURSGn3OTtFWTNIs/tNL629o4FDSgUByaQSJSFzcxCBqQLoogqFtm6SJ2dXCxi7tUNOIfFWoR/Km2SKu2iiYIbRrbfF/6fcehSUxikhcu53Lu+55zeO+9Qg1+LO2JuEYSQBShWxUR+AKkXNU7Xe1zk5V8KW3S6bC/sNm+heueU/DUFi7CBXM3Z3kuH9g6s1IukMn0BqzW9QegAw2ENZCXLYHW2DaZzhkAq3X9djOxbcHaamVGB+ysNQpgFpf3HQWNN+s399nlysU8+bXKITS+sLz/iFFxE4BpVuDZY4d3bxzyea1MGyNuwqAy2Ez8O6PcHyvQ0+ehPSRVZwqDRoSuRmLLguQ1i+yScva8D5H/KN0G1KknXvymXLqQZ3LC4cQpL9FYvZtVRxayez8IGgZY/QPPUw4TL9Z5Mu5g28rQaR/HT3oxBnr6DP7AP7mITHsFHQfCAG2b4ON7h9evHI5FPcSGvDx95HB1OA/AwX7DzdE2tviL/V19KN+zu3td5K1AS3kwBZGNqFXGb+SLXtgGb7/pDM7PCDJSSypFY6pX2UiRkY7g7CcD8HM2lBRhrJ6Z9aAqY53+UBKKDygSmSp0+A/H1eUGKrnGUllRuL4zeCguMlWAit9YQjq3a4ftmjMoURXpFkFR/Yoh5UPvbffP/6rk/wX8trxabySvwAAAAABJRU5ErkJggg==", sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAARVBMVEX///8AAAAkJCQMDAyBgYEWFhaqqqoaGhrc3NwFBQVqamq8vLx8fHympqZlZWX19fVQUFDy8vIoKCi3t7dgYGCRkZGbm5v4fqiUAAAAa0lEQVQYlWWOWxKAIAgApSwEUyut+x81Iu0x7ZezgyzG/EiTvWjCwaBAukWnwDPRKzAzl+U0YVQCIYJ7b1/lWxUue+8zEDVR5E0QxNZhxndFiD0i0iaLqwiRJSn5bwWfysV5/kfs1k7J/DgA2zoDaFhX6hEAAAAASUVORK5CYII=", ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEV6AF3////ewNeTMHuHGWzbutPhxtu8f62tY5yDEmjNn8K5eqrw4uyiTo6oWJX17PP7+Pr58/fQpsaUM33Ci7Xy5/DUrMqaP4XFkLjghu1BAAAAWklEQVQYla2PSw6AIBBDOx9EUcAvcP+TymL0BHTVvjRNCoyRd6rOY2YxsFDASoJt+irdRUpw2bKQR9hVj9MA7ypUEOgyoH3jJlnyv/EwEkXw84HSULmilUE/XidhAl42YZzTAAAAAElFTkSuQmCC", cl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEX////J4doAXTO31cwAWy90qJdam4dQmIJmoY7U5uHs9PK/2tLw9vW01MvM4ty6188AUBtEknsAYDkAVihkpZJtqZcAUyIATxp/sqOUvrGszcN4doo7AAAAaUlEQVQYlY3PSRKAIAxE0VYUMAHjiMP9DyolWoWu+Mu3SQcoyHl0PTyRCN1QDbAjgsg0cYIGrUHN6gszO6UogwXM7DLAGppNXrB7fjaC4LAx3SUIABsdMwlY/5YS9rm+C/JsP1XKU8mrF0CSA/WBIjolAAAAAElFTkSuQmCC", dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVQ4jZ3Tvy5EQRQG8N9dd/0LhY430IhEIfECWg1PolBotlV4FFGpeYENQWiERqETWVnWtSju7O647og4ycm958w533fmm5lMabvYRAPvfrc8fA/Rgh18/tNbGa6xGDE8YiLB3sNcFN/lKELQxwaOMZsA6GANR4GkA+0wToGp1MYr9hR62nmUbGABt+F/CeNhrcClUuB5IyHFAAKq0HxWWVvBaVQzZK2zOhGbdYUpgCyR/zNAtyb3VldY1WDAfIFlTIa4F3I/posBPnAfxeeJ6R6Ud2YIMDiqhvIinWAm0fyMVSORc7jy/X53lefdr/GXSu3NWNjnesTSDNNkNV7VbH8gyDa2MG30NlLWxCsOsPcFht5JrzhcXkgAAAAASUVORK5CYII=", un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAQlBMVEX///9/AADUtrbfzc2IAgTcxcWYVVT////////////Xv7+0hYWqeXjAl5aJICD7+Pj28vKRNDSjZmTw6OjPq6ro3dxrdh8QAAAACXRSTlPu////////7+F1O+6fAAAAhUlEQVQYlV2PWw7FIAhERRFb8W27/61evNXYdD4IORCGUYdTL7lDuVNkh8zoZCz1IkgJyEurBvCEGBmR7AQWE3gLCBtgu2/moDfg3PVV1g2dkIwJKeYJOgPlTlj9BGeJnEtAXEc1R5m9gIUag7d1b8hjoQG2ZSsEigHSf9snnBH5J9w3/g+hBQbGLvrOhQAAAABJRU5ErkJggg==", ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVQ4jc2TsWoCURBFzzw2C8ZCgiQKKQTJIpgv0C9IF9Q6tZX/4G/4VVauSBYtAsElhaQISYr1ppBEAy7ytvLCNI85hzcMY72uHk3biRk1PCKRytzQ+p1s7QsfSlxRGMCMmvMBKldQuvz/FuQ1X4TQbEHUhqhtRPdwXYfxSMymOYLqDfSedkDjDoLAjqiV/4P6LTz0vabCr/ssBblbOEyWiZcVJDGkrycEErytRTKH51gkMSwX8P11XG6Dbva3l1IZwhDeNwVH+PzYlU+cROqH7COROpkbFpH8nvMPujhEsWwjq+gAAAAASUVORK5CYII=", hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVQ4jcXSPUqDURCF4SefMYoJxkawSSepxUpEoitIKboHK7eQ3so1iI1iLSIiIhZiEUKwkHSCiIiFQkhCsMiIIn7xp3HgwnDnnHdmLjdzCYxjERXMYxYzmBiUtXGHG1zhDKfFarWduWQba2jiHB30cIGjAFTiJMhhAXNj5fJBFsd4wAo2MRqmFyxF9wMU474b8O1cqdTM4hAbWMYeTjCFWhjbYa7hPlZdRy7J57cy8QZZrGIXfRTwhBHvMR2TJqHdL1arnSSKPeyEGZ7R+mC+xWPk/WjUEbS0aHzK+1+JhgHqKfmfAI000U9X+NMELYO/0MV1mig7BNCLKSYN/sKvAQJQGCb4DlCPCf4P8PYGqfEKP29DzuPh+lUAAAAASUVORK5CYII=", hn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAP1BMVEX///8iIiINDQ3U1NR5eXmysrKioqL///8AAAD////AwMCJiYns7OzJycmrq6uWlpY6OjpERERQUFBqamplZWXeFUpeAAAACHRSTlP2////////NOB4UscAAABqSURBVBiVdc/BDoQgDEXRIkVvAUVn/P9vlQUqmthN807StJVJrCuZ5JGrvHKV1hypA7/tOUI4IVJTsoI2GN1MgKxDB2akcIOv86suF2AbadVAA4/LM2jRa+2Pv7H47rA4UB6Xfj8j8n7/AHV0CGt04/+HAAAAAElFTkSuQmCC", pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEUAAAD///8nJye3t7cyMjKHh4f8/Pz39/ecnJwaGhoSEhI5OTnW1tbT09NHEhmuAAAAOklEQVQYlWNgoB5gZUUTYGNH5XMwMnIg8zkZgYALSYAZJMCM4HMzggE3XIAHIsALF2BhAgMWSt0OAwBMcQCayCv/8QAAAABJRU5ErkJggg==", gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEUUbvUUb/UTbvX///8CavUAYvUObfUbdvalw/vn8P6IsfpdlPi80/zA1vx9PzTeAAAAAnRSTlP3SrtnEswAAABpSURBVBiVfY8LDsAgCEPRFpi63f+6Q7OvS0YU0heUIknyIyTJSweZdJCezPoZdwB3p3lm1AF0BRRoBXA7wQLUyDo62GroHpoP0HU8qMzXH6gFRY+xumH1aGo8fVCVRvI29nH6t4zIvP4Ox/kDQdeBOboAAAAASUVORK5CYII=", ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMElEQVQ4jaWRX0hTcRzFP/duOsQsM5AsyYc0ih4q9WGEUGA5S9CoJJAsiiAo7a1/lCG1zNSih/Ch0CAsUSExMBLf1F5EKCFS0mFZqJubbmvOO++9v18PCabtZXSez/fD+Z6jkF+9IxlzNNVYlMQgT1yC4hfxWVYA+6Kbc4FRNRZAc/IuemzpxHQUTf8NsAIkpm9lS/ammA4TPTbwLgPSDtjJu1SwymAKSWVjD6YpaKwsxKKuDtv69D10DkV/IaIbnKnrouzgbs4X7KH84Vu0JSNqEhVshilWFgyGIxRVtdE96CInK429mZvp/ThB4a1W/AvaqoTEm6ZKim36hydgAnj8C1x43I1r2k8gHCGnoomciia8wUXGpua5+OQd074QAJOeoI7GDAApJx99+PJ9VtivvJBhbUn+Ckdk0rF6WXS7TRTf6RDqkRrpng9J3TBl/vVXctjlFhuPN/TDcolzIe35vstN+1VFYWLGz5IhKMzdLluuFSsoUFbbJUcmfUpG6no+udzkVjYruimfASgAlLZbCI4NAtkAJ/J2ytYbJUqc1QKAbghO13XR3jfypwAph9gwbKejw1yp8/C9LBxOX6nzjdANU66VbpjyVE2nwHF/FseDzL9WWFZv1RjSUjA66fWOT839M9fXnz4+f5v1AA56bo5H3RSAo86MpJL6AefrARFY0GQgpMm7Lf1iXUl9H4dqt621K9Ep1SqO+LNJCdarUqoiFI400Ku/hGqx1vkb3iELIMm4QLQAAAAASUVORK5CYII=", fl = {
  adyen: Gs,
  airtable: Ws,
  apollo: Ha,
  "apollo io": Ha,
  apolloio: Ha,
  brex: Ys,
  "bright layer": cn,
  brightlayer: cn,
  census: Qs,
  clearbit: js,
  "dbt labs": dn,
  dbt: dn,
  figma: Ks,
  gusto: Xs,
  hex: Js,
  linear: Zs,
  mercury: $s,
  "northstar ai": el,
  "northstar dev": tl,
  notion: al,
  orbitgrid: il,
  paypal: nl,
  plaid: rl,
  ramp: ol,
  retool: sl,
  rippling: ll,
  sequoia: cl,
  square: dl,
  "stanford gsb": un,
  stanford: un,
  stripe: ul,
  tesla: hl,
  unify: hn,
  "unify gtm": hn,
  vercel: pl,
  webflow: gl,
  wharton: ml
}, q = "https://i.pravatar.cc/96", wl = {
  "andre park": `${q}?img=52`,
  "ava garcia": `${q}?img=46`,
  "chadley dupre": `${q}?img=59`,
  "chandler bree": `${q}?img=11`,
  "clara wong": `${q}?img=32`,
  "david kim": `${q}?img=33`,
  "ellen nelle": `${q}?img=47`,
  "evan brooks": `${q}?img=8`,
  "fatima ali": `${q}?img=45`,
  "jamie chen": `${q}?img=12`,
  "jules meyer": `${q}?img=14`,
  "leo martin": `${q}?img=56`,
  "liam price": `${q}?img=6`,
  "marcus reed": `${q}?img=53`,
  "maya patel": `${q}?img=5`,
  "miles kibble iii": `${q}?img=15`,
  "miles kibbles iii": `${q}?img=15`,
  "mr kibbles iii": `${q}?img=15`,
  "natalie dank": `${q}?img=49`,
  "nina kapoor": `${q}?img=31`,
  "noah singh": `${q}?img=4`,
  "owen lee": `${q}?img=7`,
  "patrick bateman": `${q}?img=68`,
  "priya rao": `${q}?img=21`,
  "rachel cho": `${q}?img=44`,
  "sam hollis": `${q}?img=13`,
  "sara nelson": `${q}?img=41`,
  "zoe carter": `${q}?img=23`
};
function Wr(r) {
  return r.trim().toLowerCase().replace(/\s+/g, " ");
}
function bl(r) {
  const e = Wr(r).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return e ? `${q}?u=${encodeURIComponent(e)}` : "";
}
function Da(r, e) {
  const t = Wr(r), a = e?.trim() || void 0;
  return wl[t] ?? a ?? bl(r);
}
const Yr = `
<svg viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="currentColor"/>
  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="currentColor"/>
</svg>`;
function pn(r) {
  const e = document.createElement("template");
  e.innerHTML = Yr.trim();
  const t = e.content.firstElementChild;
  return t.classList.add(r), t;
}
const yl = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
<path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
<path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
<path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
<path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
<path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
</svg>`, xl = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="60 90.4 570.02 539.67">
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
function Qr(r) {
  return typeof r.initialSequenceIndex == "number" && Number.isFinite(r.initialSequenceIndex) ? Math.min(Math.max(0, Math.round(r.initialSequenceIndex)), Math.max(0, r.sequences.length - 1)) : Math.max(0, Math.floor((r.sequences.length - 1) / 2));
}
function jr(r, e) {
  const t = Qr(r), a = [];
  for (let i = t + 1; i < r.sequences.length && a.length < e; i += 1)
    a.push(i);
  for (let i = t - 1; i >= 0 && a.length < e; i -= 1)
    a.push(i);
  for (; a.length < e; ) a.push(t);
  return a;
}
const _l = [
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
], vl = 1.28, S = (r) => Number((r * vl).toFixed(3)), Al = [3, 3, 3], Sl = {
  "David Kim": "+1 (917) 234-3381"
}, ie = {
  pressDuration: S(0.09),
  releaseDuration: S(0.2),
  loadingHoldDuration: S(0.78),
  successHoldDuration: S(0.12),
  learningRevealDuration: S(0.34),
  detailSwapDuration: 0.16,
  readyPopUpDuration: 0.12,
  readyPopSettleDuration: 0.22,
  settleHold: S(0.24)
}, gn = "Learning your style", kl = "Voice calibrated", mn = "73 tone & tactic rules defined", Va = [
  { detail: "Analyzing vocabulary", progress: 31, duration: 1.05, hold: 0.38 },
  { detail: "Investigating wins", progress: 64, duration: 1.2, hold: 0.46 },
  { detail: "Figuring out your voice", progress: 100, duration: 1.15, hold: 0.76 }
], Cl = {
  gmail: kn(yl),
  outlook: kn(xl)
}, Tl = [
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
], El = /* @__PURE__ */ new Set([5, 8, 10, 16]), Ml = [
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
], Pl = {
  duration: S(0.44),
  ease: "back.out(1.7)"
}, fn = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, St = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, Rl = {
  charsPerSecond: St.labelCharsPerSecond,
  minDuration: St.minDuration,
  maxDuration: St.maxDuration
}, Dl = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, wn = {
  detailOffsetY: -4,
  duration: S(0.24)
}, Ce = {
  duration: S(0.34),
  returnDuration: S(0.38),
  ease: "power2.inOut"
}, Ga = {
  y: -4,
  duration: S(0.26),
  ease: "power2.inOut"
}, Wa = {
  templateHold: S(0.54),
  progressDuration: S(3.9),
  finalHold: S(0.34)
}, bn = {
  railCenterDuration: S(0.34),
  railCenterEase: "power3.out"
}, be = {
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
}, Il = "left,right,bottom,width,height,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,borderWidth,gap", Ya = {
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderWidth: "",
  gap: ""
}, Dt = {
  scrollOutRatio: 1.02,
  minScrollOut: 420,
  duration: S(0.58),
  threadOverlap: "-=0.36"
}, Qa = {
  duration: S(0.68),
  ease: "power3.inOut",
  targetColor: "#67635f"
}, yn = 110, J = {
  revealDuration: S(0.42),
  revealEase: "power3.inOut",
  componentFollowDelay: 0.12,
  componentRevealDelay: 0.16,
  followDuration: S(0.24),
  followEase: "power2.out"
}, lt = {
  scrollDistance: 160,
  offsetY: 78,
  scrollDuration: S(0.36),
  contentDuration: S(0.42),
  contentDelay: 0.04,
  contentEase: "power3.in",
  stagger: 0.015
}, Ne = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: S(0.62),
  revealEase: "power3.inOut",
  cardDuration: S(0.28)
}, xn = 4, ql = "-=0.22", _n = {
  from: { autoAlpha: 0, y: 5 },
  to: {
    autoAlpha: 1,
    y: 0,
    duration: S(0.24),
    ease: "power2.out",
    stagger: 0.035
  }
}, Ll = [
  ["CRM", "Core Data", "Ad Intelligence"],
  ["Web Intent", "Product Analytics", "SMB Data", "Ecommerce"],
  ["Enrichment", "Company / Fundraising", "Tech Stack"],
  ["Web / SEO", "Relationships", "And more"]
], ja = {
  contentWidth: 1881,
  height: 1280
}, Nl = 96, vn = ".wa-cursor-file, .wa-file-landing-clone, .wa-file-landing-label, .wa-csv-drop, .wa-signup-logo-transfer", An = "[data-marketing-data-sources-grid]", Sn = "[data-data-table]", It = "[data-table-action]", Ka = "[data-table-page-button]", Xa = "[data-table-page-range]", j = {
  duration: S(0.12),
  incomingLag: S(0.1),
  rowStagger: S(0.03),
  columnStagger: S(0.07),
  totalDuration: S(0.95),
  incomingY: -7,
  outgoingY: 7
}, oa = {
  in: f.parseEase("power2.out"),
  out: f.parseEase("power2.in")
}, Ol = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons", Bl = "https://www.google.com/s2/favicons", Fl = {
  adyen: "adyen",
  airtable: "airtable",
  brex: "brex",
  "dbt labs": "dbt",
  figma: "figma",
  gusto: "gusto",
  hubspot: "hubspot",
  linear: "linear",
  linkedin: "linkedin",
  notion: "notion",
  paypal: "paypal",
  posthog: "posthog",
  retool: "retool",
  salesforce: "salesforce",
  square: "square",
  stripe: "stripe",
  tesla: "tesla",
  vercel: "vercel",
  webflow: "webflow"
}, zl = {
  adyen: "adyen.com",
  airtable: "airtable.com",
  apollo: "apollo.io",
  "apollo io": "apollo.io",
  apolloio: "apollo.io",
  brex: "brex.com",
  "bright layer": "brightlayer.com",
  brightlayer: "brightlayer.com",
  census: "getcensus.com",
  clearbit: "clearbit.com",
  "clearbit inc": "clearbit.com",
  demandbase: "demandbase.com",
  "dbt labs": "getdbt.com",
  figma: "figma.com",
  gusto: "gusto.com",
  hex: "hex.tech",
  hubspot: "hubspot.com",
  linear: "linear.app",
  linkedin: "linkedin.com",
  mercury: "mercury.com",
  "northstar ai": "northstar.ai",
  "northstar dev": "northstardev.com",
  notion: "notion.so",
  orbitgrid: "orbitgrid.com",
  paypal: "paypal.com",
  plaid: "plaid.com",
  posthog: "posthog.com",
  ramp: "ramp.com",
  retool: "retool.com",
  rippling: "rippling.com",
  salesforce: "salesforce.com",
  segment: "segment.com",
  snitcher: "snitcher.com",
  square: "squareup.com",
  stripe: "stripe.com",
  tesla: "tesla.com",
  unify: "unifygtm.com",
  "unify gtm": "unifygtm.com",
  vercel: "vercel.com",
  webflow: "webflow.com"
}, Ja = {
  offscreenMargin: 280,
  pullInDuration: S(0.22),
  pullInEase: "power2.out"
}, Te = {
  duration: S(0.34),
  stagger: 0.035,
  ease: "power3.out",
  rotations: [2, -5, 6, -8],
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18
}, Ee = {
  rowStartHold: S(0.36),
  serviceRevealDuration: S(0.32),
  serviceLoadDuration: S(1.36),
  serviceLoadVariance: S(0.28),
  serviceSettleDuration: S(0.28),
  rowCompleteHold: S(0.32),
  rowOffsets: [0, S(0.16), S(0.28)]
}, Me = {
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
class Ul {
  constructor(e) {
    this.root = e, this.stage = this.required(".wa-stage"), this.browserWindow = this.required(".wa-window"), this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.composerContents = Array.from(this.composer.children).filter(
      (t) => t instanceof HTMLElement
    ), this.tableControlTooltip = this.createDataTableFloatingTooltip(), this.chatShell.append(this.tableControlTooltip), this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.addEventListener("click", this.handleDataTableControlClick), this.signupScene = this.required("[data-signup-scene]"), this.signupLogo = this.required("[data-signup-logo-target]"), this.signupEmail = this.required("[data-signup-email]"), this.signupSubmit = this.required("[data-signup-submit]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.removeElements("[data-thinking], [data-research-steps], [data-result-grid]"), this.removeElements(vn), this.clearMarketingPanels(), this.observeThreadContentFit();
  }
  root;
  stage;
  browserWindow;
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
  activeSequencePersonTimelines = /* @__PURE__ */ new Map();
  threadContentFitFrame = null;
  threadContentResizeObserver = null;
  threadContentMutationObserver = null;
  windowSceneMeasure = null;
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
    const a = t.closest(Sn), i = a?.dataset.dataTable, n = Number(t.dataset.tablePageButton);
    if (!i || !Number.isFinite(n)) return;
    e.preventDefault();
    const o = Number(a.dataset.activePage), s = a.querySelector(Xa)?.textContent ?? null;
    this.updateDataTablePageControlsForTable(a, n, t.dataset.pageRange ?? null), this.activeTablePageTimelines.get(i)?.kill();
    const l = this.dataTablePage(i, n, {
      updateExpected: !1,
      initialPage: o,
      initialRangeText: s
    });
    this.activeTablePageTimelines.set(i, l), l.eventCallback("onComplete", () => {
      this.activeTablePageTimelines.get(i) === l && this.activeTablePageTimelines.delete(i), this.showTooltipForDataTableControl(t);
    });
  };
  reset() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null, this.clearTransientElements(), this.clearMarketingPanels(), this.messageIndex = 0, this.cardIndex = 0, this.composerText.textContent = "", f.killTweensOf([this.composer, this.composerText, ...this.composerContents, this.thread]), this.clearDataTableState(), this.clearSequencePersonTimelines(), this.transferSignupLogoOnNextThinking = !1, this.signupEmail.textContent = "", this.setSignupEmailFilled(!1), this.status?.replaceChildren(document.createTextNode("Ready")), this.clearCustomResults(), this.clearThreadContentFitState(), this.thread.scrollTop = 0, f.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth"
    }), f.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" }), f.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" }), f.set(this.thread, {
      autoAlpha: 1,
      y: 0,
      display: ""
    }), this.resetComposerPresentation();
    for (const e of this.messagePool)
      e.style.display = "none";
    for (const e of this.cardPool)
      e.style.display = "none";
    this.requestThreadContentFitUpdate();
  }
  destroy() {
    this.chatShell.removeEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.removeEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.removeEventListener("click", this.handleDataTableControlClick), this.threadContentFitFrame !== null && (cancelAnimationFrame(this.threadContentFitFrame), this.threadContentFitFrame = null), this.threadContentResizeObserver?.disconnect(), this.threadContentMutationObserver?.disconnect(), this.windowSceneMeasure?.remove(), this.windowSceneMeasure = null, this.clearDataTableState(), this.clearSequencePersonTimelines();
  }
  prepareStoryStart() {
    this.resetComposerPresentation();
  }
  animateStorySwitchExit() {
    const e = this.getStorySwitchExitTargets(), t = f.timeline();
    if (this.stopScrollMotion(), !e.length)
      return t.to({}, { duration: 1e-3 });
    const a = this.getThreadBottomScrollTarget(), i = Math.min(a, this.thread.scrollTop + lt.scrollDistance);
    return f.killTweensOf(e), i > this.thread.scrollTop + 0.5 && t.to(
      this.thread,
      {
        scrollTop: i,
        duration: lt.scrollDuration,
        ease: "power2.inOut",
        overwrite: "auto"
      },
      0
    ), t.to(
      e,
      {
        y: `-=${lt.offsetY}`,
        autoAlpha: 0,
        duration: lt.contentDuration,
        ease: lt.contentEase,
        stagger: lt.stagger,
        overwrite: "auto"
      },
      lt.contentDelay
    ), t;
  }
  setStatus(e) {
    const t = f.timeline();
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
    this.signupEmail.textContent = e, this.setSignupEmailFilled(!!e), f.set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto"
    }), f.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" }), f.set([this.thread, this.composer], {
      autoAlpha: 0,
      y: 34
    }), f.set(this.composer, this.getComposerHiddenVars()), f.set(this.composerContents, this.getComposerContentsHiddenVars()), this.setComposerVisibleState(!1);
  }
  setSignupEmailFilled(e) {
    this.signupScene.dataset.signupFilled = String(e), e || delete this.signupScene.dataset.signupSubmitted;
  }
  typeComposer(e, t = 1.1) {
    const a = { count: 0 }, i = f.timeline();
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
    return f.timeline().to(this.composerText, {
      autoAlpha: 0,
      y: -9,
      duration: S(0.18),
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  setComposerFocus(e) {
    return f.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => this.setComposerFocusState(e)
      }
    );
  }
  showComposer() {
    const e = f.timeline(), t = this.measureComposerFullFrame(), a = this.getComposerCompactFrame(t);
    return e.set(this.composer, {
      ...this.getComposerHiddenVars(),
      ...Ya,
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
      paddingBottom: () => Math.max(yn, this.getComposerThreadInsetForFrame(t))
    }, 0).call(() => this.pinThreadToBottom(), void 0, 0).to(this.composer, {
      left: t.left,
      bottom: t.bottom,
      width: t.width,
      height: t.height,
      minHeight: t.height,
      duration: be.showDuration,
      ease: be.showEase,
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
      ease: be.contentEase,
      overwrite: "auto"
    }, be.contentShowDelay).call(() => this.pinThreadToBottom()), e;
  }
  hideComposer() {
    const e = this.measureComposerFullFrame(), t = this.getComposerCollapsedFrame(e);
    return f.timeline().set(this.composer, {
      ...Ya,
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
      duration: be.contentHideDuration,
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
      duration: be.hideDuration,
      ease: be.hideEase,
      force3D: !0,
      autoRound: !1,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        f.set(this.composerContents, { visibility: "hidden" }), f.set(this.composer, {
          visibility: "hidden"
        }), f.set(this.thread, { paddingBottom: yn }), this.pinThreadToBottom();
      }
    }, 0);
  }
  clearComposer() {
    return f.timeline().call(() => {
      this.composerText.textContent = "", f.set(this.composerText, { autoAlpha: 1, y: 0 });
    });
  }
  resetComposerPresentation() {
    this.setComposerFocusState(!1), this.setComposerVisibleState(!1), f.set(this.composer, this.getComposerHiddenVars()), f.set(this.composerContents, this.getComposerContentsHiddenVars()), f.set(this.composerText, { autoAlpha: 1, y: 0 });
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
      ...Ya
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
    return Math.ceil(i + be.threadGap);
  }
  measureComposerFullFrame() {
    f.set(this.composer, { clearProps: Il });
    const e = this.chatShell.getBoundingClientRect(), t = this.composer.getBoundingClientRect();
    return {
      left: t.left - e.left,
      bottom: e.bottom - t.bottom,
      width: t.width,
      height: t.height
    };
  }
  getComposerCompactFrame(e) {
    const t = Math.min(be.compactWidth, e.width), a = Math.min(be.compactHeight, e.height);
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  getComposerCollapsedFrame(e) {
    const t = be.collapsedWidth, a = be.collapsedHeight;
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  showSignup(e = "") {
    return f.timeline().call(() => {
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
    return f.timeline().call(() => {
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
    return f.timeline().call(() => {
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
    return this.transferSignupLogoOnNextThinking = !0, f.timeline();
  }
  transitionSignupToChat() {
    return f.timeline().to(this.signupScene, {
      y: () => this.getSignupScrollOutDistance(),
      autoAlpha: 1,
      scale: 1,
      duration: Dt.duration,
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
        duration: Dt.duration,
        ease: "power3.out"
      },
      Dt.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(Dt.minScrollOut, Math.round(e * Dt.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  prepareForChatHistoryPause() {
    f.killTweensOf(this.tableControlTooltip), this.hideDataTableControlTooltip();
  }
  scrollToLive(e = J.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = f.to(this.thread, {
      scrollTop: t,
      duration: e,
      ease: J.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  scrollToLiveTimeline(e = J.followDuration) {
    return this.scrollChatTarget(() => null, {
      align: "bottom",
      duration: e,
      fallback: "bottom"
    });
  }
  userMessage(e) {
    const t = this.claimMessage("user", e);
    return this.revealMessage(t);
  }
  assistantMessage(e) {
    const t = this.claimMessage("assistant", ""), a = t.querySelector("[data-message-body]"), i = f.timeline().add(this.revealMessage(t));
    return a ? i.add(
      this.streamText(a, e, {
        duration: this.getStreamDuration(e, fn),
        targetForScroll: t
      }),
      fn.startOverlap
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
    return this.revealComponentItems("table", t, ".wa-data-table__row", Me.tableRow, a);
  }
  scrollDataTableFooterIntoView(e, t = J.revealDuration, a = {}) {
    const i = this.findDataTable(e), n = a.align === "top" ? i?.querySelector(".wa-data-table__footer") ?? i : i;
    if (!n) return;
    this.stopScrollMotion();
    const o = this.getElementScrollTarget(n, {
      align: a.align ?? "bottom",
      offset: a.offset ?? 0
    });
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - o) < 1) {
      this.thread.scrollTop = o;
      return;
    }
    this.scrollTween = f.to(this.thread, {
      scrollTop: o,
      duration: t,
      ease: J.revealEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  scrollChatElementIntoView(e, t = {}) {
    return this.scrollChatTarget(() => {
      const a = this.queryElements(this.root, e);
      return t.match === "last" ? a[a.length - 1] ?? null : a[0] ?? null;
    }, {
      align: t.align ?? "top",
      duration: t.duration ?? J.revealDuration,
      offset: t.offset,
      fallback: "current"
    });
  }
  scrollChatTarget(e, t) {
    const a = f.timeline();
    let i = this.thread.scrollTop, n = null;
    return a.call(() => {
      n = e(), this.stopScrollMotion(), this.updateThreadContentFitState(), i = n ? this.getElementScrollTarget(n, t) : this.getMissingScrollTarget(t.fallback ?? "current");
    }), a.to(this.thread, {
      scrollTop: () => i,
      duration: t.duration,
      ease: J.revealEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    }), a.call(() => {
      i = n ? this.getElementScrollTarget(n, t) : this.getMissingScrollTarget(t.fallback ?? "current");
    }), a.to(this.thread, {
      scrollTop: () => i,
      duration: S(0.16),
      ease: "power2.out",
      overwrite: "auto"
    }), a;
  }
  getElementScrollTarget(e, t) {
    return t.align === "bottom" ? this.getElementBottomScrollTarget(e, t.offset ?? 0) : this.getAlignedElementScrollTarget(e, t.offset ?? 0);
  }
  getMissingScrollTarget(e) {
    return e === "bottom" ? this.getThreadBottomScrollTarget() : this.thread.scrollTop;
  }
  dataTablePage(e, t, a = {}) {
    const i = f.timeline(), n = { value: 0 }, o = a.updateExpected ?? !0, s = {
      canSwitch: !1,
      committed: !1,
      table: null,
      initialPage: null,
      initialRangeText: null,
      currentRows: [],
      targetRows: [],
      buttons: [],
      range: null,
      cellSwaps: []
    };
    return i.to(n, {
      value: 1,
      duration: j.totalDuration,
      ease: "none",
      onStart: () => {
        s.table = this.findDataTable(e), o && this.expectedDataTablePages.set(e, t), s.initialPage = a.initialPage ?? Number(s.table?.dataset.activePage), s.currentRows = s.table ? this.getVisibleDataTableRows(s.table) : [], s.targetRows = s.table ? this.queryElements(s.table, `.wa-data-table__row[data-page="${t}"]`) : [], s.buttons = s.table ? this.queryElements(s.table, Ka) : [], s.targetButton = s.buttons.find((l) => Number(l.dataset.tablePageButton) === t), s.range = s.table?.querySelector(Xa) ?? null, s.initialRangeText = a.initialRangeText ?? s.range?.textContent ?? null, s.canSwitch = !!(s.table && s.targetRows.length && s.table.dataset.activePage !== String(t)), s.canSwitch && (n.value = 0, f.set(s.currentRows, { autoAlpha: 1, y: 0 }), s.cellSwaps = this.prepareDataTablePageCellSwaps(s.currentRows, s.targetRows), this.updateDataTablePageControls(s, t), this.setMotionHints(this.getDataTablePageMotionTargets(s)));
      },
      onUpdate: () => {
        s.canSwitch && this.renderDataTablePageCellSwaps(s, n.value);
      }
    }).call(() => {
      this.commitDataTablePageTransition(s, t);
    }), i.eventCallback("onInterrupt", () => {
      this.cleanupDataTablePageTransition(s);
    }), i;
  }
  prepareDataTablePageCellSwaps(e, t) {
    const a = [], i = Math.min(e.length, t.length);
    for (let n = 0; n < i; n += 1) {
      const o = this.queryElements(e[n], ".wa-data-table__cell"), s = this.queryElements(t[n], ".wa-data-table__cell"), l = Math.min(o.length, s.length);
      for (let c = 0; c < l; c += 1) {
        const d = this.getElementChildren(o[c]), u = this.createDataTablePageCellClone(s[c]);
        !d.length || !u.childNodes.length || (o[c].dataset.cellSwapActive = "true", o[c].append(u), this.setDataTablePageCellSwapState(d, 1, 0), this.setDataTablePageCellSwapState([u], 0, j.incomingY), a.push({
          cell: o[c],
          currentContent: d,
          clone: u,
          delay: this.getDataTablePageCellDelay(n, c)
        }));
      }
    }
    return a;
  }
  createDataTablePageCellClone(e) {
    const t = document.createElement("span");
    return t.className = "wa-data-table__cell-swap-clone", t.setAttribute("aria-hidden", "true"), e.childNodes.forEach((a) => {
      t.append(a.cloneNode(!0));
    }), t;
  }
  renderDataTablePageCellSwaps(e, t) {
    const a = t * j.totalDuration;
    e.cellSwaps.forEach((i) => {
      const n = Ye(
        (a - i.delay) / j.duration
      ), o = Ye(
        (a - i.delay - j.incomingLag) / j.duration
      ), s = oa.in(o), l = oa.out(n);
      this.setDataTablePageCellSwapState(
        i.currentContent,
        1 - l,
        this.interpolate(0, j.outgoingY, l)
      ), this.setDataTablePageCellSwapState(
        [i.clone],
        s,
        this.interpolate(j.incomingY, 0, s)
      );
    });
  }
  getDataTablePageCellDelay(e, t) {
    return e * j.rowStagger + t * j.columnStagger;
  }
  setDataTablePageCellSwapState(e, t, a) {
    const i = t > 1e-3, n = Ye(t).toFixed(3), o = Math.abs(a) < 0.01 ? "0" : a.toFixed(2);
    e.forEach((s) => {
      s.style.opacity = n, s.style.transform = `translate3d(0, ${o}px, 0)`, s.style.visibility = i ? "visible" : "hidden";
    });
  }
  commitDataTablePageTransition(e, t) {
    !e.table || !e.canSwitch || (e.committed = !0, e.table.dataset.activePage = String(t), e.currentRows.forEach((a) => {
      a.style.display = "none";
    }), e.targetRows.forEach((a) => {
      a.style.display = "grid";
    }), e.buttons.forEach((a) => {
      this.updateDataTablePageButton(a, t);
    }), e.range && e.targetButton?.dataset.pageRange && (e.range.textContent = e.targetButton.dataset.pageRange), f.set(e.targetRows, {
      autoAlpha: 1,
      y: 0,
      clearProps: "opacity,visibility,transform,translate,rotate,scale"
    }), this.cleanupDataTablePageTransition(e));
  }
  cleanupDataTablePageTransition(e) {
    const t = this.getDataTablePageMotionTargets(e);
    t.length && this.clearMotionHints(t), e.cellSwaps.forEach((a) => {
      a.clone.remove(), delete a.cell.dataset.cellSwapActive, f.set(a.currentContent, { clearProps: "opacity,visibility,transform,translate,rotate,scale" });
    }), !e.committed && e.canSwitch && (f.set(e.currentRows, { autoAlpha: 1, y: 0 }), e.initialPage !== null && Number.isFinite(e.initialPage) && this.updateDataTablePageControls(e, e.initialPage, e.initialRangeText)), e.cellSwaps = [];
  }
  getDataTablePageMotionTargets(e) {
    return e.cellSwaps.flatMap((t) => [...t.currentContent, t.clone]);
  }
  getElementChildren(e) {
    return Array.from(e.children).filter((t) => t instanceof HTMLElement);
  }
  updateDataTablePageControls(e, t, a = e.targetButton?.dataset.pageRange ?? null) {
    this.updateDataTablePageControlsForElements(e.buttons, e.range, t, a);
  }
  updateDataTablePageControlsForTable(e, t, a) {
    this.updateDataTablePageControlsForElements(
      this.queryElements(e, Ka),
      e.querySelector(Xa),
      t,
      a
    );
  }
  updateDataTablePageControlsForElements(e, t, a, i) {
    e.forEach((n) => {
      this.updateDataTablePageButton(n, a);
    }), t && i !== null && (t.textContent = i);
  }
  updateDataTablePageButton(e, t) {
    const a = Number(e.dataset.tablePageButton) === t;
    e.dataset.active = String(a), e.setAttribute("aria-current", a ? "page" : "false");
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
    return f.timeline().call(() => {
      const i = this.findDataTable(e);
      if (!i) {
        this.hideDataTableControlTooltip();
        return;
      }
      const n = this.queryElements(i, It);
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
    const t = this.createEnrichmentPanel(e), a = this.claimComponentMessage("enrichment", t), i = this.queryElements(t, ".wa-waterfall-row"), n = this.queryElements(t, ".wa-waterfall-chip"), o = this.queryElements(t, ".wa-waterfall-service-step"), s = this.revealPreparedItems(a, i, Me.waterfallRow), l = t.querySelector(".wa-thinking__glyph");
    return f.set(o, { autoAlpha: 0, y: 3, scale: 0.98 }), f.set(n, { scale: 1 }), s.call(() => this.setLocalLogoMode(l, "thinking"), void 0, 0), s.add(this.animateEnrichmentWaterfall(i), `+=${Ee.rowStartHold}`), s.call(() => this.setLocalLogoMode(l, "done")), s;
  }
  strategyPlans(e) {
    const t = e.map((h) => this.createStrategyPlan(h)), a = document.createElement("div"), i = t.flatMap((h) => this.queryElements(h, ".wa-strategy-plan__bullets li")), n = this.getLastMessageBody(), o = Me.strategyCard, s = "strategyCardsIn", l = o.to.stagger, c = [...t, ...i];
    a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((h) => h.id).join(" "), a.append(...t), t.length && f.set(t, { ...o.from }), f.set(i, { ..._n.from });
    const d = this.claimComponentMessage("strategy", a), u = f.timeline().add(this.revealMessage(d, n, xn)).addLabel(s, ql).call(() => this.setMotionHints(c), void 0, s).to(t, { ...o.to }, s);
    return t.forEach((h, g) => {
      const m = this.queryElements(h, ".wa-strategy-plan__bullets li");
      m.length && u.to(m, { ..._n.to }, `${s}+=${g * l}`);
    }), u.call(() => this.clearMotionHints(c)).call(
      () => this.animateMessageScrollIntoView(d, J.followDuration, n, xn),
      void 0,
      "+=0.02"
    );
  }
  strategyPlanHover(e, t) {
    return f.timeline().call(() => {
      const a = this.root.querySelector(e), i = a?.closest("[data-strategy-plans]");
      (i ? this.queryElements(i, ".wa-strategy-plan") : []).forEach((o) => o.toggleAttribute("data-cursor-hover", t && o === a));
    });
  }
  dataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e);
    return this.revealComponentItems("sources", t, ".wa-data-source-card", Me.smallCard);
  }
  marketingDataSourcesGrid(e) {
    const t = this.createMarketingDataSourcesGrid(e), a = this.queryElements(t, ".wa-data-vendor-logo"), i = this.queryElements(t, ".wa-data-source-group"), n = t.querySelector(".wa-data-source-grid__header"), o = this.compactElements(n, ...i, ...a);
    return f.timeline().call(() => {
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
        duration: Ne.revealDuration,
        ease: Ne.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: Ne.threadY,
        autoAlpha: Ne.threadOpacity,
        duration: Ne.revealDuration,
        ease: Ne.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: Ne.revealDuration,
        ease: Ne.revealEase
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
        duration: Ne.cardDuration,
        ease: "power2.out",
        stagger: 0.025
      },
      0.42
    );
  }
  outreachStyleProfile(e, t = {}) {
    const a = this.createOutreachStyleProfile(e);
    return t.scrollAlign && (a.dataset.scrollAlign = t.scrollAlign), this.revealComponentItems(
      "style",
      a,
      ".wa-style-profile__row, .wa-style-profile__example",
      Me.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("table", t, ".wa-data-table__row", Me.tableRow);
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
    ), a = t?.querySelector("[data-mailbox-connect]"), i = t?.querySelector("[data-mailbox-learning]"), n = t ? Array.from(t.querySelectorAll("[data-mailbox-thumbprint-path]")) : [], o = t?.querySelector("[data-mailbox-learning-progress]"), s = t?.querySelector(".wa-mailbox-learning__title"), l = t?.querySelector("[data-mailbox-learning-title-text]") ?? s, c = t?.querySelector("[data-mailbox-learning-ready-chevron]"), d = t?.querySelector(".wa-mailbox-learning__detail"), u = t?.querySelector(".wa-mailbox-learning__thumbprint"), h = t ? this.queryElements(t, ".wa-mailbox-connection__signal") : [], g = f.timeline();
    if (!t || !a || !i || !l || !d || !u || !n.length || !o) return g;
    const m = { value: 0 };
    return g.call(() => {
      t.dataset.mailboxState = "loading", a.disabled = !0, a.setAttribute("aria-busy", "true"), a.setAttribute("aria-label", a.dataset.mailboxLoadingLabel ?? "Connecting"), i.dataset.mailboxLearningState = "idle", l.textContent = gn, d.textContent = Va[0].detail, f.set(i, { display: "none", autoAlpha: 0, y: 8, scale: 0.992 }), this.updateMailboxThumbprintFill(n, 0), f.set(o, { scaleX: 0, transformOrigin: "left center" }), f.set(u, { scale: 1, transformOrigin: "center center" }), f.set(this.compactElements(c), { autoAlpha: 0, y: -1, scale: 0.9 });
    }).to(a, {
      scale: 0.985,
      duration: ie.pressDuration,
      ease: "power2.out"
    }).to(a, {
      scale: 1,
      duration: ie.releaseDuration,
      ease: "back.out(2.6)"
    }).to({}, { duration: ie.loadingHoldDuration }).call(() => {
      t.dataset.mailboxState = "connected", a.disabled = !0, a.removeAttribute("aria-busy"), a.setAttribute("aria-label", a.dataset.mailboxConnectedLabel ?? "Connected"), i.dataset.mailboxLearningState = "loading";
    }).to({}, { duration: ie.successHoldDuration }).set(i, { display: "grid", height: "auto" }, "-=0.04").fromTo(
      i,
      { autoAlpha: 0, y: 8, scale: 0.992 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: ie.learningRevealDuration,
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
    ), Va.forEach((p, w) => {
      w > 0 && g.to(d, {
        autoAlpha: 0,
        y: -3,
        duration: ie.detailSwapDuration,
        ease: "power1.in"
      }).call(() => {
        d.textContent = p.detail;
      }).fromTo(
        d,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: ie.detailSwapDuration,
          ease: "power2.out"
        }
      ), g.to(
        m,
        {
          value: p.progress,
          duration: p.duration,
          ease: "power2.inOut",
          onUpdate: () => this.updateMailboxThumbprintFill(n, m.value)
        },
        w === 0 ? "-=0.04" : void 0
      ).to(
        o,
        {
          scaleX: p.progress / 100,
          duration: p.duration,
          ease: "power2.inOut"
        },
        "<"
      ).to({}, { duration: p.hold });
    }), g.to(d, {
      autoAlpha: 0,
      y: -3,
      duration: ie.detailSwapDuration,
      ease: "power1.in"
    }).to(l, {
      autoAlpha: 0,
      y: -3,
      duration: ie.detailSwapDuration,
      ease: "power1.in"
    }, "<").call(() => {
      i.dataset.mailboxLearningState = "ready", l.textContent = kl, d.textContent = i.dataset.mailboxLearningReadyDetail ?? mn;
    }).fromTo(
      l,
      { autoAlpha: 0, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: ie.detailSwapDuration,
        ease: "power2.out"
      }
    ).fromTo(
      d,
      { autoAlpha: 0, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: ie.detailSwapDuration,
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
        duration: ie.detailSwapDuration,
        ease: "power2.out"
      },
      "<"
    ).to(
      u,
      {
        scale: 1.16,
        duration: ie.readyPopUpDuration,
        ease: "power2.out"
      },
      "<"
    ).to(u, {
      scale: 1,
      duration: ie.readyPopSettleDuration,
      ease: "back.out(3)"
    }), h.length && g.to(
      h,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.18),
        ease: "power2.out",
        stagger: 0.035
      },
      "<+=0.38"
    ), g.to({}, { duration: ie.settleHold }), g;
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
    ), n = i?.querySelector(`[data-swipe-card="${this.escapeSelectorValue(t)}"]`), o = this.getSwipeCards(i), s = n ? o.indexOf(n) : -1, l = o[s + 1], c = a === "use" ? 1 : -1, d = i?.querySelector(`[data-swipe-action="${a}"]`), u = i?.querySelector("[data-swipe-complete]"), h = i?.querySelector(".wa-swipe-game__actions"), g = f.timeline();
    return !i || !n || s < 0 || (g.call(() => {
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
        delete i.dataset.swipeDecision, d && delete d.dataset.active, n.dataset.swipeState = "done", f.set(n, { display: "none" }), this.layoutSwipeGameCards(i, s + 1);
      },
      void 0,
      "-=0.12"
    ), l ? g.fromTo(
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
    ) : u && h && g.to(
      h,
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
    )), g;
  }
  sequenceEngagement(e) {
    const t = this.createSequenceEngagement(e), a = Number(t.dataset.activeSequenceIndex ?? "0"), i = e.sequences.some((s) => s.steps?.length), n = i ? ".wa-sequence-people-wrap, .wa-sequence-engagement__sequences, .wa-sequence-kickoff" : ".wa-sequence-people-wrap, .wa-sequence-card, .wa-sequence-step, .wa-sequence-wait, .wa-sequence-copy-panel, .wa-engage-channel, .wa-sequence-kickoff", o = i ? {
      from: { autoAlpha: 0, y: 9, scale: 0.99 },
      to: {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: S(0.24),
        ease: "power2.out",
        stagger: 0
      }
    } : Me.stackCard;
    return this.revealComponentItems(
      "sequence",
      t,
      n,
      o
    ).call(() => this.setSequencePersonRailPosition(t, a), void 0, 0.01).call(() => this.setSequencePersonRailPosition(t, a), void 0, 0.12).call(() => this.clearSequencePersonCardMotionStyles(t));
  }
  sequenceBuildThinking(e) {
    const t = this.createSequenceThinkingStep(e.templateLabel, e.template, 0), a = e.tracks.map(
      (u, h) => this.createSequenceThinkingStep(u.label, u.detail, h + 1, e.total)
    ), i = [t, ...a], n = this.getThinkingElapsed(3), o = this.claimThinkingMessage(i, n), s = { value: 1 }, l = a.map((u) => ({
      label: u.querySelector(".wa-sequence-thinking-progress__count"),
      bar: u.querySelector(".wa-sequence-thinking-progress__bar span")
    })), c = l.flatMap((u) => u.bar ? [u.bar] : []);
    o.message.querySelector(".wa-thinking-block").dataset.sequenceThinking = e.id;
    const d = f.timeline().call(() => {
      this.prepareThinkingMessage(o, i, 10), f.set(c, {
        scaleX: 1 / Math.max(1, e.total),
        transformOrigin: "left center"
      });
    }).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, 0.24)).call(() => {
      t.dataset.stepState = "current", f.set(t, { display: "grid" });
    }).add(this.moveThinkingLogoToStep(o, t), "<");
    return this.addThinkingStepReveal(d, t, { position: "<" }), d.to({}, { duration: Wa.templateHold }).add(this.foldThinkingStep(t)).call(() => {
      a.forEach((u) => {
        u.dataset.stepState = "current", f.set(u, { display: "grid" });
      });
    }, void 0, "+=0.1").add(this.moveThinkingLogoToStep(o, a[0]), "<").to(a, {
      autoAlpha: 1,
      y: 0,
      duration: S(0.3),
      ease: "power2.out",
      stagger: 0.04
    }, "<"), this.addThinkingStepStreams(d, a), d.to(s, {
      value: e.total,
      duration: Wa.progressDuration,
      ease: "power1.inOut",
      onUpdate: () => {
        const u = Math.max(1, Math.round(s.value)), h = u / Math.max(1, e.total);
        l.forEach(({ label: g, bar: m }) => {
          g && (g.textContent = `${u}/${e.total}`), m && f.set(m, { scaleX: h });
        }), this.requestMessageScroll(o.message);
      }
    }, "+=0.14").to({}, { duration: Wa.finalHold }), a.forEach((u, h) => {
      d.add(this.foldThinkingStep(u), h === 0 ? void 0 : "<");
    }), d.add(this.collapseThinkingToHeader(o, i)), this.addThinkingElapsedTimer(d, o.elapsed, n), d;
  }
  sequencePerson(e, t) {
    const a = this.findSequenceEngagement(e), i = f.timeline({ defaults: { overwrite: "auto" } }), n = { value: 0 }, o = {
      committed: !1,
      swaps: []
    };
    if (!a) return i;
    const s = this.queryElements(a, "[data-sequence-card]"), l = this.getSequenceDisplayCard(a), c = s.find((u) => Number(u.dataset.sequenceIndex) === t), d = Number(a.dataset.activeSequenceIndex ?? "0");
    return !c || !l || d === t ? (this.setActiveSequencePerson(a, t, !0), i) : (i.call(() => {
      this.setSequencePersonRailState(a, t, !0), o.swaps = this.prepareSequencePersonContentSwaps(a, l, c, t), this.setMotionHints(this.getSequencePersonSwapMotionTargets(o)), this.renderSequencePersonContentSwaps(o, n.value);
    }, void 0, 0), i.to(n, {
      value: 1,
      duration: j.totalDuration,
      ease: "none",
      onUpdate: () => {
        this.renderSequencePersonContentSwaps(o, n.value);
      }
    }, 0).call(() => {
      this.commitSequencePersonContentSwaps(o);
    }), i.eventCallback("onInterrupt", () => {
      this.cleanupSequencePersonContentSwaps(o);
    }), i);
  }
  playSequencePersonInteraction(e, t) {
    this.activeSequencePersonTimelines.get(e)?.kill();
    const a = this.sequencePerson(e, t), i = a.eventCallback("onComplete"), n = a.eventCallback("onInterrupt"), o = () => {
      this.activeSequencePersonTimelines.get(e) === a && this.activeSequencePersonTimelines.delete(e);
    };
    a.duration() <= 0 || (this.activeSequencePersonTimelines.set(e, a), a.eventCallback("onComplete", () => {
      i?.(), o();
    }), a.eventCallback("onInterrupt", () => {
      n?.(), o();
    }));
  }
  clearSequencePersonTimelines() {
    this.activeSequencePersonTimelines.forEach((e) => e.kill()), this.activeSequencePersonTimelines.clear();
  }
  sequenceKickoff(e) {
    return f.timeline().call(() => {
      const t = this.findSequenceEngagement(e), a = t?.querySelector("[data-sequence-kickoff]"), i = a?.querySelector(".wa-sequence-kickoff__label");
      !t || !a || (t.dataset.sequenceLaunched = "true", a.dataset.launched = "true", i && (i.textContent = `Enrolled ${t.dataset.peopleCount ?? "50 people"}`));
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
      o?.(), o = null, f.killTweensOf(s);
    };
    return this.registerTransientElement(n, () => {
      l();
    }), {
      el: n,
      startFollow: () => f.timeline().call(() => {
        o?.(), t.beginDragPayload();
        const c = this.getCursorFileEntryOffset(n, t);
        s.x = c.x, s.y = c.y, o = this.followCursorWithFile(n, t, s);
      }).set(n, {
        autoAlpha: 1,
        scale: 1
      }, 0).to(s, {
        x: 0,
        y: 0,
        duration: Ja.pullInDuration,
        ease: Ja.pullInEase
      }, 0),
      stopFollow: () => f.timeline().call(l).to(n, {
        autoAlpha: 0,
        scale: 0.92,
        duration: S(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (c, d = "CSV uploaded") => f.timeline().call(l).add(t.releaseDragPayload(), 0).add(this.uploadedFileMessageFromCursorFile(n, c, d), 0),
      landAsUploadedFiles: (c) => f.timeline().call(l).add(t.releaseDragPayload(), 0).add(this.uploadedFilesMessageFromCursorFile(n, c), 0)
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
      ...Me.compactRow,
      from: { ...Me.compactRow.from, scale: 0.99 },
      to: { ...Me.compactRow.to, scale: 1 },
      position: "-=0.24"
    });
  }
  uploadedFilesMessageFromCursorFile(e, t) {
    const a = this.createUploadedFiles(t), i = this.claimUserComponentMessage("file", a), n = this.queryElements(a, ".wa-uploaded-file"), o = this.queryElements(a, ".wa-uploaded-files__summary");
    return this.revealDroppedFilesMessage(e, i, n, o, {
      landingLabel: this.getUploadedFilesLandingLabel(t.length)
    });
  }
  getUploadedFilesLandingLabel(e) {
    return e === 4 ? "You uploaded four files" : `You uploaded ${e} files`;
  }
  pulse(e) {
    const t = typeof e == "string" ? this.root.querySelector(e) : e, a = f.timeline();
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
      stagger: Te.stagger
    }) : (f.set(o, { autoAlpha: 0, y: 0, scale: 1 }), f.timeline().call(() => {
      const u = this.thread.scrollTop;
      this.scrollTween?.kill(), this.scrollTween = null, t.style.display = "grid", f.set(t, {
        opacity: 1,
        visibility: "hidden",
        y: 0,
        scale: 1,
        transformOrigin: "right center"
      }), d = this.getMessageScrollTarget(t), this.thread.scrollTop = d, s = this.createFileLandingClones(e, a), this.thread.scrollTop = u, l = this.createFileLandingLabel(n.landingLabel, s), f.set(e, { autoAlpha: 0 });
    }).to(
      this.thread,
      {
        scrollTop: () => d,
        duration: Te.duration,
        ease: Te.ease,
        overwrite: "auto"
      },
      0
    ).to(
      c,
      {
        value: 1,
        duration: Te.duration,
        ease: Te.ease,
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
        stagger: Te.stagger
      },
      `-=${S(0.16)}`
    ).call(() => {
      this.renderFileLandingClones(s, 1), this.renderFileLandingLabel(l, 1), this.thread.scrollTop = d, f.set(o, { autoAlpha: 1, y: 0, scale: 1 }), f.set(t, { opacity: 1, visibility: "visible" }), s.forEach((u) => u.el.remove()), l?.el.remove(), e.remove();
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e), i = this.chatBody;
    return t.map((n, o) => {
      const l = a[Math.min(o, a.length - 1)].getBoundingClientRect(), c = n.getBoundingClientRect(), d = this.getElementLocalRect(l, i), u = this.getElementLocalRect(c, i), h = n.cloneNode(!0), g = this.getCursorFileCardRotation(o, a.length), m = window.getComputedStyle(n), p = d.left + (l.width - c.width) * 0.5, w = d.top + (l.height - c.height) * 0.5;
      return h.classList.add("wa-file-landing-clone"), h.dataset.fileLandingClone = "", i.append(h), f.set(h, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: c.width,
        minWidth: c.width,
        maxWidth: c.width,
        height: c.height,
        minHeight: c.height,
        x: p,
        y: w,
        scaleX: 1,
        scaleY: 1,
        rotation: g,
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1,
        visibility: "visible",
        backgroundColor: m.backgroundColor,
        borderColor: m.borderTopColor,
        borderStyle: m.borderTopStyle === "none" ? "solid" : m.borderTopStyle,
        borderWidth: m.borderTopWidth || "1px",
        boxShadow: this.getFileLandingShadow(0)
      }), {
        el: h,
        startX: p,
        startY: w,
        startWidth: l.width,
        startHeight: l.height,
        endX: u.left,
        endY: u.top,
        endWidth: c.width,
        endHeight: c.height,
        startRotation: g,
        setX: f.quickSetter(h, "x", "px"),
        setY: f.quickSetter(h, "y", "px"),
        setRotation: f.quickSetter(h, "rotation", "deg")
      };
    });
  }
  renderFileLandingClones(e, t) {
    for (const a of e)
      a.setX(this.interpolate(a.startX, a.endX, t)), a.setY(this.interpolate(a.startY, a.endY, t)), a.setRotation(this.interpolate(a.startRotation, 0, t)), a.el.style.boxShadow = this.getFileLandingShadow(t);
  }
  createFileLandingLabel(e, t) {
    if (!e || !t.length) return null;
    const a = document.createElement("div");
    a.className = "wa-file-landing-label", a.textContent = e, this.chatBody.append(a), f.set(a, {
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
    const i = a.offsetWidth, n = a.offsetHeight, o = 9, s = this.getFileLandingCloneBounds(t, "end"), l = s.left + s.width / 2 - i / 2, c = s.top - n - o;
    return f.set(a, { x: l, y: c }), {
      el: a,
      setOpacity: f.quickSetter(a, "opacity")
    };
  }
  renderFileLandingLabel(e, t) {
    if (!e) return;
    const a = Ye(t / 0.16), i = Ye((1 - t) / 0.16);
    e.setOpacity(Math.min(a, i));
  }
  getFileLandingCloneBounds(e, t) {
    const a = e.map((g) => t === "start" ? g.startX : g.endX), i = e.map((g) => t === "start" ? g.startY : g.endY), n = e.map((g) => t === "start" ? g.startWidth : g.endWidth), o = e.map((g) => t === "start" ? g.startHeight : g.endHeight), s = e.map((g, m) => a[m] + n[m]), l = e.map((g, m) => i[m] + o[m]), c = Math.min(...a), d = Math.min(...i), u = Math.max(...s), h = Math.max(...l);
    return {
      left: c,
      top: d,
      width: u - c,
      height: h - d
    };
  }
  getCursorFileCards(e) {
    const t = Array.from(e.querySelectorAll(".wa-cursor-file__card"));
    return t.length ? t : [e];
  }
  getCursorFileCardRotation(e, t) {
    return t > 1 ? Te.rotations[e] ?? 0 : 0;
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
  getFileLandingShadow(e) {
    const t = 1 - e;
    return `0 ${this.interpolate(Te.shadowY, 0, e).toFixed(2)}px ${this.interpolate(
      Te.shadowBlur,
      0,
      e
    ).toFixed(2)}px rgba(23, 23, 20, ${(Te.shadowAlpha * t).toFixed(3)})`;
  }
  revealMessageWithChildren(e, t, a, i = "-=0.22", n = null, o = 0) {
    return f.timeline().add(this.revealMessage(e, n, o)).call(() => this.setMotionHints(t), void 0, i).to(t, a, i).call(() => this.clearMotionHints(t));
  }
  revealMessageWithChildFrom(e, t, a, i, n = "-=0.22") {
    return f.timeline().add(this.revealMessage(e)).call(() => this.setMotionHints(t), void 0, n).fromTo(
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
    t.length && f.set(t, { ...a.from });
    const o = this.revealMessageWithChildren(
      e,
      t,
      { ...a.to },
      a.position,
      i,
      n
    );
    return o.call(
      () => this.animateMessageScrollIntoView(e, J.followDuration, i, n),
      void 0,
      J.componentFollowDelay
    ), o.call(
      () => this.animateMessageScrollIntoView(e, J.followDuration, i, n),
      void 0,
      "+=0.02"
    );
  }
  revealMessage(e, t = null, a = 0) {
    let i = 0;
    const n = e.classList.contains("wa-message--component") ? J.componentRevealDelay : 0.04;
    return f.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, e.style.display = "grid", this.setMotionHints(e), this.forceThreadLayout(e), this.updateThreadContentFitState(), this.composerVisible && this.pinThreadToBottom(), i = this.getMessageScrollTarget(e, t, a);
    }).to(
      this.thread,
      {
        scrollTop: () => i,
        duration: J.revealDuration,
        ease: J.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...Pl
    }, n).call(() => this.clearMotionHints(e));
  }
  forceThreadLayout(e) {
    e.offsetHeight, this.thread.scrollHeight;
  }
  observeThreadContentFit() {
    this.threadContentResizeObserver?.disconnect(), this.threadContentMutationObserver?.disconnect(), typeof ResizeObserver < "u" && (this.threadContentResizeObserver = new ResizeObserver(() => this.requestThreadContentFitUpdate()), this.threadContentResizeObserver.observe(this.stage), this.threadContentResizeObserver.observe(this.browserWindow), this.threadContentResizeObserver.observe(this.chatBody), this.threadContentResizeObserver.observe(this.thread)), typeof MutationObserver < "u" && (this.threadContentMutationObserver = new MutationObserver((e) => {
      this.shouldIgnoreThreadContentFitMutations(e) || this.requestThreadContentFitUpdate();
    }), this.threadContentMutationObserver.observe(this.thread, {
      attributes: !0,
      attributeFilter: ["class", "style", "data-active", "data-step-open", "data-step-selected"],
      characterData: !0,
      childList: !0,
      subtree: !0
    })), this.requestThreadContentFitUpdate();
  }
  requestThreadContentFitUpdate() {
    this.threadContentFitFrame === null && (this.threadContentFitFrame = requestAnimationFrame(() => {
      this.threadContentFitFrame = null, this.updateThreadContentFitState();
    }));
  }
  shouldIgnoreThreadContentFitMutations(e) {
    return e.length > 0 && e.every(
      (t) => t.type === "attributes" && t.target === this.thread && t.attributeName === "style"
    );
  }
  updateThreadContentFitState() {
    const e = this.getVisibleThreadContentWidth();
    this.applyWindowSceneScale(e);
    const t = this.getVisibleThreadContentHeight(), a = Math.max(this.thread.clientHeight, this.chatBody.clientHeight), i = t > 0 && a > 0 && t <= a - 1;
    if (!t || !a) {
      delete this.chatBody.dataset.chatContentFit, delete this.thread.dataset.threadContentFit;
      return;
    }
    const n = i ? "short" : "overflow";
    this.chatBody.dataset.chatContentFit = n, this.thread.dataset.threadContentFit = n;
  }
  clearThreadContentFitState() {
    delete this.chatBody.dataset.chatContentFit, delete this.thread.dataset.threadContentFit, this.clearWindowSceneScaleState();
  }
  getWindowSceneScale(e, t) {
    return !e || !t || e <= t + 0.5 ? 1 : Math.min(1, t / e);
  }
  applyWindowSceneScale(e) {
    const t = this.getWindowSceneBaseSize(), a = this.getWindowSceneAvailableWidth(), i = Math.ceil(Math.max(
      t.width,
      this.getWindowSceneBaseWidth(),
      e
    )), n = this.getWindowSceneScale(i, a), o = Math.min(1, Math.max(0.01, n)), s = i > t.width + 0.5;
    if (o >= 0.999 && !s) {
      this.clearWindowSceneScaleState();
      return;
    }
    const l = o >= 0.999 ? 1 : Number(o.toFixed(4)), c = String(l), d = Math.ceil(t.height * (i / Math.max(1, t.width))), u = `${i}px`, h = `${Math.ceil(d * l)}px`, g = `${d}px`;
    this.stage.dataset.windowContentScale = l < 1 ? "scaled" : "sized", this.stage.style.getPropertyValue("--wa-window-scene-scale") !== c && this.stage.style.setProperty("--wa-window-scene-scale", c), this.stage.style.getPropertyValue("--wa-window-scene-width") !== u && this.stage.style.setProperty("--wa-window-scene-width", u), this.stage.style.getPropertyValue("--wa-window-scene-height") !== h && this.stage.style.setProperty("--wa-window-scene-height", h), this.stage.style.getPropertyValue("--wa-window-scene-unscaled-height") !== g && this.stage.style.setProperty("--wa-window-scene-unscaled-height", g);
  }
  clearWindowSceneScaleState() {
    delete this.stage.dataset.windowContentScale, this.stage.style.removeProperty("--wa-window-scene-scale"), this.stage.style.removeProperty("--wa-window-scene-width"), this.stage.style.removeProperty("--wa-window-scene-height"), this.stage.style.removeProperty("--wa-window-scene-unscaled-height");
  }
  getThreadContentScale() {
    const e = Number.parseFloat(this.stage.style.getPropertyValue("--wa-window-scene-scale"));
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  getWindowSceneAvailableWidth() {
    const e = this.stage.clientWidth;
    if (e > 0) return e;
    const t = this.stage.parentElement?.clientWidth ?? 0;
    return t > 0 ? t : this.root.clientWidth;
  }
  getWindowSceneBaseWidth() {
    const e = window.getComputedStyle(this.stage).getPropertyValue("--wa-window-scene-min-width").trim(), t = Number.parseFloat(e);
    return Number.isFinite(t) && t > 0 ? t : 0;
  }
  getWindowSceneBaseSize() {
    const e = this.getWindowSceneMeasure();
    e.style.width = "var(--wa-window-width)", e.style.height = "var(--wa-window-height)";
    const t = e.offsetWidth || this.browserWindow.offsetWidth, a = e.offsetHeight || this.browserWindow.offsetHeight;
    return {
      width: Math.max(1, t),
      height: Math.max(1, a)
    };
  }
  getWindowSceneMeasure() {
    if (this.windowSceneMeasure) return this.windowSceneMeasure;
    const e = document.createElement("div");
    return e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.left = "-10000px", e.style.top = "0", e.style.display = "block", e.style.visibility = "hidden", e.style.pointerEvents = "none", e.style.overflow = "hidden", e.style.contain = "strict", this.stage.append(e), this.windowSceneMeasure = e, e;
  }
  getVisibleThreadContentHeight() {
    const e = Array.from(this.thread.children).filter(
      (i) => i instanceof HTMLElement && this.isMeasurableThreadChild(i)
    );
    if (!e.length) return 0;
    const t = Math.min(...e.map((i) => i.offsetTop)), a = Math.max(...e.map((i) => i.offsetTop + i.offsetHeight));
    return Math.max(0, a - t);
  }
  getVisibleThreadContentWidth() {
    const e = Array.from(this.thread.children).flatMap((a) => !(a instanceof HTMLElement) || !this.isMeasurableThreadChild(a) ? [] : this.getThreadWidthMeasureTargets(a)).filter(
      (a) => a instanceof HTMLElement && this.isMeasurableThreadChild(a)
    );
    if (!e.length) return 0;
    const t = e.map((a) => {
      const i = window.getComputedStyle(a), n = Number.parseFloat(i.marginLeft) || 0, o = Number.parseFloat(i.marginRight) || 0;
      return Math.max(a.offsetWidth, this.getDeclaredThreadContentFitWidth(a)) + n + o;
    });
    return Math.max(0, ...t);
  }
  getThreadWidthMeasureTargets(e) {
    const t = e.querySelector(":scope > .wa-message__body"), a = t ? Array.from(t.children).filter((i) => i instanceof HTMLElement) : [];
    return a.length ? a : [e];
  }
  getDeclaredThreadContentFitWidth(e) {
    const t = window.getComputedStyle(e).getPropertyValue("--wa-story-fit-width").trim(), a = Number.parseFloat(t);
    return Number.isFinite(a) && a > 0 ? a : 0;
  }
  isMeasurableThreadChild(e) {
    const t = window.getComputedStyle(e);
    return t.display !== "none" && t.visibility !== "hidden" && e.offsetHeight > 0;
  }
  setMotionHints(e, t = "transform, opacity") {
    f.set(e, { willChange: t });
  }
  clearMotionHints(e) {
    f.set(e, { willChange: "auto" });
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
    return this.messageIndex += 1, n.dataset.messageRole = e, n.dataset.messageId = `${t}-${i}`, this.resetMessageClasses(n), n.classList.toggle("wa-message--first-active", i === 0), n.style.display = "none", delete o.dataset.streaming, o.replaceChildren(), this.thread.append(n), f.set(n, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: a
    }), { message: n, body: o, index: i };
  }
  resetMessageClasses(e) {
    e.classList.remove(..._l), e.classList.remove("wa-message--first-active");
  }
  createCsvDropArea(e = {}) {
    const t = document.createElement("article");
    t.className = "wa-csv-drop", t.dataset.csvDropArea = "", t.dataset.dropState = "idle";
    const a = document.createElement("span");
    a.className = "wa-csv-drop__copy";
    const i = document.createElement("strong");
    return i.textContent = "Add files to chat", a.append(i), t.append(a), t;
  }
  revealCsvDropArea(e) {
    return f.timeline().to(
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
    return f.timeline().to(
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
          }, i = () => f.ticker.remove(a);
          this.dropRevealWatchers.set(e, i), f.ticker.add(a);
        }
      }
    );
  }
  activateCsvDropArea(e) {
    return f.timeline().to(
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
    return f.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          e.dataset.dropState = "complete", e.dataset.dropComplete = "true", this.clearDropRevealWatcher(e), f.killTweensOf(e), f.set(e, { autoAlpha: 0 }), e.remove();
        }
      }
    );
  }
  showCsvDropArea(e, t) {
    e.dataset.dropComplete !== "true" && ((t || !e.dataset.dropState) && (e.dataset.dropState = "idle"), e.isConnected || this.chatShell.append(e), f.set(e, {
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
    return n > 1 ? (i.classList.add("wa-cursor-file--stack"), i.append(...this.createCursorFileStack(e, t, n, a))) : i.append(this.createCursorFileCard(e, t)), this.root.append(i), f.set(i, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 }), i;
  }
  followCursorWithFile(e, t, a) {
    const i = e.offsetWidth || 154, n = e.offsetHeight || 42, o = f.quickSetter(e, "x", "px"), s = f.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, c = () => {
      const d = t.readPosition(), u = d.x - i * 0.5 + a.x, h = d.y - n * 0.5 + a.y;
      t.isPayloadDragging() && t.el.dataset.cursorMode !== "drag" && t.setMode("drag"), u !== l.x && (l.x = u, o(u)), h !== l.y && (l.y = h, s(h));
    };
    return c(), f.ticker.add(c), () => f.ticker.remove(c);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, i = t.readPosition(), n = this.root.getBoundingClientRect(), o = window.innerWidth - n.left, s = i.x - a * 0.5, l = o + Ja.offscreenMargin;
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
    if (t.className = "wa-uploaded-files", t.dataset.uploadedFileCount = String(e.length), e.length > 1) {
      const i = document.createElement("span");
      i.className = "wa-uploaded-files__summary", i.textContent = this.getUploadedFilesLandingLabel(e.length), t.append(i);
    }
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
    return this.streamThinkingChild(e, ".wa-thinking__title", Dl);
  }
  streamThinkingStepLabel(e) {
    return this.streamThinkingChild(e, ".wa-research-step__label", Rl);
  }
  streamThinkingStepDetail(e) {
    return this.streamThinkingChild(e, ".wa-research-step__detail", St);
  }
  streamThinkingChild(e, t, a) {
    const i = e.querySelector(t), n = i?.dataset.fullText ?? i?.textContent ?? "";
    return !i || !n ? f.timeline() : this.streamText(i, n, {
      duration: this.getStreamDuration(n, a),
      targetForScroll: this.getMessageScrollTargetElement(e)
    });
  }
  streamText(e, t, a) {
    const i = { count: 0 };
    let n = -1;
    return f.timeline().call(() => {
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
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, J.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-sequence-thinking-progress"
    );
    return f.timeline().to(t, {
      autoAlpha: 0,
      y: wn.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: wn.duration,
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
    }), f.set(e.header, { autoAlpha: 0, y: 5 }), f.set(e.traveler, { autoAlpha: 0, x: 0, y: 0 }), f.set(e.steps, { display: "grid", autoAlpha: 1, y: 0 }), e.title.dataset.thinkingActive = "true", this.resetThinkingGuide(e), f.set(t, { autoAlpha: 0, y: a, display: "none" });
  }
  revealThinkingHeader(e, t) {
    return this.consumeSignupLogoTransfer() ? this.revealThinkingHeaderFromSignupLogo(e, t) : f.timeline().to(e.header, {
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
    return f.timeline().call(() => {
      a = this.createSignupLogoTransfer(e.headerGlyph), f.set(this.signupLogo, { autoAlpha: 0 }), f.set(e.header, { autoAlpha: 1, y: 0 }), f.set(e.traveler, { autoAlpha: 0 }), this.snapThinkingLogoTo(e, e.headerGlyph);
    }).add(this.streamThinkingHeader(e.header), S(Math.min(t, 0.16))).to(i, {
      value: 1,
      duration: Qa.duration,
      ease: Qa.ease,
      overwrite: "auto",
      onUpdate: () => this.renderSignupLogoTransfer(a, i.value)
    }, 0).call(() => {
      this.renderSignupLogoTransfer(a, 1), this.snapThinkingLogoTo(e, e.headerGlyph), f.set(e.traveler, { autoAlpha: 1 }), a?.el.remove();
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
    return i.className = "wa-signup-logo-transfer", i.removeAttribute("data-signup-logo-target"), i.setAttribute("aria-hidden", "true"), this.chatBody.append(i), f.set(i, {
      width: t.width,
      height: t.height,
      x: a.left,
      y: a.top,
      color: getComputedStyle(this.signupLogo).color,
      autoAlpha: 1
    }), f.set(e, { autoAlpha: 1 }), {
      el: i,
      startX: a.left,
      startY: a.top,
      startWidth: t.width,
      startHeight: t.height,
      target: e,
      setX: f.quickSetter(i, "x", "px"),
      setY: f.quickSetter(i, "y", "px"),
      setWidth: f.quickSetter(i, "width", "px"),
      setHeight: f.quickSetter(i, "height", "px")
    };
  }
  renderSignupLogoTransfer(e, t) {
    if (!e) return;
    const a = e.target.getBoundingClientRect(), i = this.getElementLocalRect(a, this.chatBody), n = Kr(t);
    e.setX(this.interpolate(e.startX, i.left, n)), e.setY(this.interpolate(e.startY, i.top, n)), e.setWidth(this.interpolate(e.startWidth, a.width, n)), e.setHeight(this.interpolate(e.startHeight, a.height, n)), f.set(e.el, {
      color: t > 0.78 ? Qa.targetColor : getComputedStyle(this.signupLogo).color
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
    ).add(this.streamThinkingStepLabel(t), St.startOverlap).add(this.streamThinkingStepDetail(t), "-=0.02");
  }
  createThinkingStepReveal(e) {
    return this.addThinkingStepReveal(f.timeline(), e, { position: 0 });
  }
  addThinkingStepStreams(e, t) {
    t.forEach((a, i) => {
      e.add(this.streamThinkingStepLabel(a), i === 0 ? St.startOverlap : "<");
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
    const n = (e.message.querySelector(".wa-thinking-block") ?? e.message).getBoundingClientRect(), o = t.getBoundingClientRect(), s = e.traveler.offsetWidth || e.headerGlyph.offsetWidth || 18, l = e.traveler.offsetHeight || e.headerGlyph.offsetHeight || 11, c = a && Number(f.getProperty(a, "x")) || 0, d = a && Number(f.getProperty(a, "y")) || 0;
    return {
      x: o.left - n.left + (o.width - s) / 2 - c,
      y: o.top - n.top + (o.height - l) / 2 - d
    };
  }
  snapThinkingLogoTo(e, t) {
    const a = this.getThinkingLogoTargetPosition(e, t);
    f.set(e.traveler, a);
  }
  moveThinkingLogoTo(e, t, a = Ce.duration, i) {
    return f.timeline().to(e.traveler, {
      x: () => this.getThinkingLogoTargetPosition(e, t, i).x,
      y: () => this.getThinkingLogoTargetPosition(e, t, i).y,
      duration: a,
      ease: Ce.ease,
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
    const i = e.steps.getBoundingClientRect(), n = t.getBoundingClientRect(), o = a && Number(f.getProperty(a, "y")) || 0, s = n.top - i.top + n.height / 2 - o;
    return Math.max(this.getThinkingGuideStart(e), s);
  }
  moveThinkingGuideTo(e, t, a = Ce.duration, i) {
    return f.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideTargetPosition(e, t, i)}px`,
      duration: a,
      ease: Ce.ease,
      overwrite: "auto"
    });
  }
  moveThinkingGuideToStart(e, t = Ce.returnDuration) {
    return f.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideStart(e)}px`,
      duration: t,
      ease: Ce.ease,
      overwrite: "auto"
    });
  }
  moveThinkingLogoToStep(e, t) {
    const a = t?.querySelector(".wa-research-step__marker");
    return a ? f.timeline().add(this.moveThinkingLogoTo(e, a, Ce.duration, t), 0).add(this.moveThinkingGuideTo(e, a, Ce.duration, t), 0) : f.timeline();
  }
  collapseThinkingToHeader(e, t) {
    return f.timeline().call(() => {
      this.markThinkingStepsComplete(t), this.setLocalLogoMode(e.traveler, "done"), f.set(e.steps, {
        height: e.steps.offsetHeight,
        overflow: "hidden"
      });
    }).add(this.moveThinkingLogoTo(e, e.headerGlyph, Ce.returnDuration), 0).add(this.moveThinkingGuideToStart(e, Ce.returnDuration), 0).to(e.steps, {
      autoAlpha: 0,
      y: Ga.y,
      height: 0,
      duration: Ga.duration,
      ease: Ga.ease,
      onComplete: () => this.setThinkingHeaderCollapsed(e),
      onReverseComplete: () => this.setThinkingHeaderActive(e)
    }, 0).call(() => {
      f.set(e.steps, {
        display: "none",
        height: "",
        overflow: "",
        y: 0
      }), this.animateMessageScrollIntoView(e.message);
    });
  }
  getActiveThinkingTitle(e = Be) {
    const t = e.trim() || Be;
    return /^thinking(?:\.\.\.)?$/i.test(t) ? "Thinking..." : t;
  }
  setThinkingHeaderActive(e) {
    const t = this.getActiveThinkingTitle(e.title.dataset.activeText);
    e.title.dataset.fullText = t, e.title.textContent = t, e.title.dataset.thinkingActive = "true", delete e.title.dataset.streaming, f.set(e.elapsed, { display: "", autoAlpha: 1 });
  }
  setThinkingHeaderCollapsed(e) {
    const t = e.elapsed.dataset.elapsedTarget || e.elapsed.textContent?.trim() || "", a = t ? `Thought for ${t}` : "Thought";
    e.title.dataset.fullText = a, e.title.textContent = a, delete e.title.dataset.thinkingActive, delete e.title.dataset.streaming, f.set(e.elapsed, { display: "none" });
  }
  runThinkingSequence(e, t) {
    const a = f.timeline(), i = e.items.map((s, l) => this.createThinkingStep(s, l)), n = e.elapsed ?? this.getThinkingElapsed(e.items.length), o = this.claimThinkingMessage(i, n, e.title);
    return a.call(() => this.prepareThinkingMessage(o, i, t.itemStartY)).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, t.headerDuration)), e.items.forEach((s, l) => {
      const c = i[l], d = l === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(i, l), void 0, d).add(this.moveThinkingLogoToStep(o, c), "<").add(this.createThinkingStepReveal(c), "<").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(c));
    }), a.add(this.collapseThinkingToHeader(o, i), `+=${t.finalHold}`), this.addThinkingElapsedTimer(a, o.elapsed, n), a;
  }
  activateThinkingStep(e, t) {
    e.forEach((a, i) => {
      i > t && (a.dataset.stepState = "pending", f.set(a, { display: "none" })), i === t && (a.dataset.stepState = "current", f.set(a, { display: "grid" }));
    });
  }
  getStreamDuration(e, t) {
    return this.prefersReducedMotion ? 0.01 : Math.min(t.maxDuration, Math.max(t.minDuration, e.length / t.charsPerSecond));
  }
  claimThinkingMessage(e, t, a = Be) {
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
    Vs(e, t, a, { reducedMotion: this.prefersReducedMotion });
  }
  createThinkingLogo(e = "wa-thinking__glyph") {
    const t = document.createElement("span");
    return t.className = e, t.dataset.logoMode = "thinking", t.setAttribute("aria-hidden", "true"), t.append(pn("wa-thinking__logo-mark")), t;
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
    return zi(e, t);
  }
  getThinkingElapsed(e) {
    return Ra(e);
  }
  normalizeThinkingInput(e) {
    if (this.isThinkingStateConfig(e)) {
      const a = e.items.map((i, n) => this.normalizeThinkingItem(i, n));
      return {
        title: e.title || Be,
        elapsed: e.elapsed,
        items: a.length ? a : [this.normalizeThinkingItem(Be, 0)]
      };
    }
    const t = (Array.isArray(e) ? e : [e]).map(
      (a, i) => this.normalizeThinkingItem(a, i)
    );
    return {
      title: Be,
      items: t.length ? t : [this.normalizeThinkingItem(Be, 0)]
    };
  }
  normalizeThinkingItem(e, t) {
    const a = typeof e == "string" ? e : e.label;
    return {
      label: a,
      detail: typeof e == "string" ? this.getThinkingDetail(a, t) : e.detail || this.getThinkingDetail(a, t),
      disclosure: typeof e == "string" ? t === 0 ? Vt : fa : e.disclosure || (t === 0 ? Vt : fa)
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
        const h = document.createElement("span");
        h.textContent = c.label;
        const g = document.createElement("strong");
        return g.textContent = c.value, u.append(h, g), u;
      })
    ), l?.replaceChildren(
      ...(e.actions ?? []).map((c) => {
        const d = document.createElement("button");
        return d.className = "wa-result-action", d.type = "button", d.textContent = c.label, d.dataset.resultAction = c.targetId, d;
      })
    ), f.set(a, {
      autoAlpha: 0,
      y: 18,
      scale: 0.985,
      transformOrigin: "center top"
    }), f.set(a.querySelectorAll(".wa-result-row, .wa-result-action"), {
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
    t.className = "wa-data-table", t.dataset.dataTable = e.id, t.dataset.tableVariant = e.variant ?? "default", t.dataset.columnCount = String(e.columns.length), t.dataset.activePage = String(i), e.scrollAlign && (t.dataset.scrollAlign = e.scrollAlign), e.footerClearance !== void 0 && (t.dataset.footerClearance = "true", t.style.setProperty("--wa-data-table-footer-clearance", `${e.footerClearance}px`)), this.expectedDataTablePages.set(e.id, i), t.style.setProperty(
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
        c.page !== i && (u.style.display = "none", f.set(u, { autoAlpha: 0, y: 6 })), l.append(u);
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
      c.className = "wa-data-table__cell", c.dataset.columnKey = l.key, s ? c.textContent = l.label : this.appendDataTableCellContent(c, l, a), o.append(c);
    }
    return s && o.append(this.createDataTableAddButton(i)), o;
  }
  createDataTableAddButton(e, t = "") {
    const a = document.createElement("button");
    return a.className = `wa-data-table__add${t ? ` ${t}` : ""}`, a.type = "button", a.tabIndex = -1, a.setAttribute("aria-label", `Add row to ${e}`), a.append(this.createDataTableAddIcon()), a;
  }
  appendDataTableCellContent(e, t, a) {
    const i = this.getDataTableCellType(t);
    if (i === "person") {
      e.append(this.createDataTablePerson(a, a[t.key] ?? "", t.person));
      return;
    }
    if (i === "mutualConnection") {
      const n = this.getMutualConnectionPersonOptions(t), o = n.badgeKey ?? "mutualConnectionBadge";
      e.append(this.createDataTablePerson(a, a[t.key] ?? "", n)), a[o] && e.append(this.createDataTableCellBadge(a[o]));
      return;
    }
    this.appendDataTableTextCell(e, a[t.key] ?? "");
  }
  getDataTableCellType(e) {
    return e.cellType ? e.cellType : e.key === "mutualConnection" ? "mutualConnection" : "text";
  }
  getMutualConnectionPersonOptions(e) {
    return {
      detailKey: "mutualConnectionDetail",
      avatarToneKey: "mutualConnectionAvatarTone",
      avatarUrlKey: "mutualConnectionAvatarUrl",
      avatarKey: "mutualConnectionAvatar",
      sourceKey: "mutualConnectionSource",
      companyKey: "mutualConnectionCompany",
      ...e.person
    };
  }
  appendDataTableTextCell(e, t) {
    const a = document.createElement("span");
    a.className = "wa-data-table__cell-text", a.textContent = t || "-", e.append(a), t || (e.dataset.empty = "true");
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
    this.tableControlTooltip.dataset.hasBadge = String(!!l), this.tableControlTooltip.dataset.visible = "true", f.set(this.tableControlTooltip, {
      x: n,
      y: o,
      xPercent: -50,
      yPercent: -100
    });
  }
  hideDataTableControlTooltip() {
    this.tableControlTooltip.dataset.visible = "false", this.tableControlTooltip.dataset.hasBadge = "false", this.queryElements(this.chatShell, It).forEach((e) => {
      e.dataset.tooltipVisible = "false";
    });
  }
  setDataTableControlTooltipVisible(e) {
    const t = e.closest(Sn);
    (t ? this.queryElements(t, It) : this.queryElements(this.chatShell, It)).forEach((i) => {
      i.dataset.tooltipVisible = String(i === e);
    });
  }
  getDataTableControlTooltipText(e) {
    return e.querySelector(".wa-data-table-action__tooltip")?.textContent?.trim() || e.dataset.tooltip || "";
  }
  findDataTableControl(e) {
    return e instanceof Element ? e.closest(It) : null;
  }
  findDataTablePageButton(e) {
    return e instanceof Element ? e.closest(Ka) : null;
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
    const s = this.createDataTablePersonSourceBadge(e, a), l = document.createElement("span");
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
  createDataTablePersonSourceBadge(e, t = {}) {
    const a = document.createElement("span"), i = this.getPersonBadgeCompany(e, t), n = this.getCompanyLogoUrl(i, e);
    if (a.className = "wa-data-table-person__source", a.dataset.source = e[t.sourceKey ?? "source"] ?? "default", a.setAttribute("aria-hidden", "true"), !i) return a;
    if (a.dataset.source = "company", a.dataset.company = i, a.title = i, !n)
      return a.dataset.hasLogo = "false", a;
    const o = document.createElement("img");
    return o.className = "wa-data-table-person__source-logo", o.alt = "", o.decoding = "async", o.referrerPolicy = "no-referrer", o.addEventListener("load", () => {
      a.dataset.hasLogo = "true";
    }, { once: !0 }), o.addEventListener("error", () => {
      a.contains(o) && (o.remove(), a.dataset.hasLogo = "false");
    }, { once: !0 }), o.src = n, a.append(o), a;
  }
  createSequenceCompanyBadge(e) {
    const t = this.getCompanyLogoUrl(e, {});
    if (!t) return null;
    const a = document.createElement("span"), i = document.createElement("img");
    return a.className = "wa-sequence-person-card__company", a.title = e, a.setAttribute("aria-hidden", "true"), i.alt = "", i.decoding = "async", i.src = t, a.append(i), a;
  }
  getPersonBadgeCompany(e, t = {}) {
    const a = e[t.companyKey ?? "company"]?.trim();
    if (a) return a;
    const i = e[t.detailKey ?? "prospectDetail"] || e.personDetail || "", n = this.getCompanyNameFromPersonDetail(i);
    return n || this.getCompanyNameFromEmailValues(e);
  }
  getCompanyLogoUrl(e, t) {
    const a = t.companyLogo || t.logoUrl;
    if (a) return a;
    const i = this.getCompanyKey(e), n = fl[i];
    if (n) return n;
    const o = t.companyLogoSlug || this.getCompanyLogoIconSlug(e);
    if (o) return `${Ol}/${encodeURIComponent(o)}.svg`;
    const s = t.companyDomain || this.getCompanyLogoDomain(e) || this.getEmailDomainFromValues(t);
    return s ? `${Bl}?domain=${encodeURIComponent(s)}&sz=64` : "";
  }
  getCompanyLogoIconSlug(e) {
    return e ? Fl[this.getCompanyKey(e)] ?? "" : "";
  }
  getCompanyLogoDomain(e) {
    return e ? zl[this.getCompanyKey(e)] ?? "" : "";
  }
  getCompanyKey(e) {
    return e.toLowerCase().replace(/\b(inc|llc|ltd|corp|corporation|company)\b\.?/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  getCompanyNameFromPersonDetail(e) {
    const t = e.trim();
    if (!t) return "";
    const a = t.match(/(?:@|\bat\s+)([A-Z][A-Za-z0-9& .-]+)(?:\s*\([^()]*\))?$/)?.[1]?.trim();
    if (a) return a;
    const i = t.match(/,\s*([A-Z][A-Za-z0-9& .-]+?)(?:\s*\([^()]*\))?$/)?.[1]?.trim();
    if (i && !/(?:\d+\s*(?:yrs?|years?|mos?|months?)|mba|gsb|school|studied)/i.test(i))
      return i;
    const n = t.match(/\(([^()]+)\)\s*$/)?.[1]?.trim();
    return !n || /(?:\d+\s*(?:yrs?|years?|mos?|months?)|mba|gsb|school|studied)/i.test(n) ? "" : n.match(/(?:@|\bat\s+)([A-Z][A-Za-z0-9& .-]+)$/)?.[1]?.trim() || n;
  }
  getCompanyNameFromEmailValues(e) {
    const t = this.getEmailDomainFromValues(e);
    return t ? (t.split(".")[0] ?? "").split(/[-_]+/).filter(Boolean).map((i) => i[0]?.toUpperCase() + i.slice(1)).join(" ") : "";
  }
  getEmailDomainFromValues(e) {
    return Object.entries(e).find(([i, n]) => i.toLowerCase().includes("email") && n.includes("@"))?.[1]?.trim()?.split("@").pop()?.toLowerCase().replace(/[^a-z0-9.-]/g, "") ?? "";
  }
  getInitials(e) {
    return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
  }
  setProfileAvatar(e, t, a, i) {
    const n = Da(t, a);
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
    n.className = "wa-thinking__title", n.textContent = "Enriching contacts", a.append(i, n);
    const o = document.createElement("div");
    return o.className = "wa-waterfall-rows", o.append(
      this.createWaterfallRow("Work email", "complete", [
        { label: "On Prem", service: "on-prem", state: "complete" },
        { label: "Wiza", service: "wiza", state: "pending" },
        { label: "ContactOut", service: "contactout", state: "pending" },
        { label: "Prospeo", service: "prospeo", state: "pending" },
        { label: "Waterfall", service: "waterfall", state: "pending" },
        { label: "FullEnrich", service: "fullenrich", state: "pending" }
      ]),
      this.createWaterfallRow("Phone number", "complete", [
        { label: "On Prem", service: "on-prem", state: "failed" },
        { label: "ContactOut", service: "contactout", state: "failed" },
        { label: "Forager", service: "forager", state: "complete" },
        { label: "Wiza", service: "wiza", state: "pending" },
        { label: "Prospeo", service: "prospeo", state: "pending" },
        { label: "FullEnrich", service: "fullenrich", state: "pending" }
      ]),
      this.createWaterfallRow("Social profile", "complete", [
        { label: "On Prem", service: "on-prem", state: "failed" },
        { label: "ContactOut", service: "contactout", state: "complete" },
        { label: "Prospeo", service: "prospeo", state: "pending" },
        { label: "Wiza", service: "wiza", state: "pending" },
        { label: "Forager", service: "forager", state: "pending" }
      ])
    ), t.append(a, o), t;
  }
  createWaterfallRow(e, t, a) {
    const i = document.createElement("div");
    i.className = "wa-waterfall-row", i.dataset.stepState = "pending", i.dataset.finalStepState = t;
    const n = document.createElement("span");
    n.className = "wa-waterfall-row__status", n.setAttribute("aria-hidden", "true");
    const o = document.createElement("span");
    o.className = "wa-waterfall-row__label", o.textContent = e;
    const s = document.createElement("span");
    return s.className = "wa-waterfall-row__chips", a.forEach((l, c) => {
      const d = document.createElement("span"), u = this.createWaterfallServiceBadge(l);
      if (d.className = "wa-waterfall-service-step", d.append(u), c < a.length - 1) {
        const h = document.createElement("span");
        h.className = "wa-waterfall-arrow", h.setAttribute("aria-hidden", "true"), h.append(this.createTablerIcon("arrow-right", 16)), d.append(h);
      }
      s.append(d);
    }), i.append(n, o, s), i;
  }
  createWaterfallServiceBadge(e) {
    const t = document.createElement("span"), a = document.createElement("span"), i = document.createElement("span");
    t.className = "wa-waterfall-chip", t.dataset.service = e.service, t.dataset.stepState = "pending", t.dataset.finalStepState = e.state, a.className = "wa-waterfall-chip__icon", a.setAttribute("aria-hidden", "true"), this.appendWaterfallServiceIcon(a, e.service);
    const n = document.createElement("span");
    return n.className = "wa-waterfall-chip__state-icon", n.setAttribute("aria-hidden", "true"), n.append(
      this.createTablerIcon("check", 14),
      this.createTablerIcon("x", 14)
    ), i.className = "wa-waterfall-chip__label", i.textContent = e.label, t.append(a, n, i), t;
  }
  createTablerIcon(e, t) {
    const a = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i = e === "arrow-right" ? ["M5 12h14", "M13 18l6 -6", "M13 6l6 6"] : e === "check" ? ["M5 12l5 5l10 -10"] : ["M18 6l-12 12", "M6 6l12 12"];
    a.setAttribute("width", String(t)), a.setAttribute("height", String(t)), a.setAttribute("viewBox", "0 0 24 24"), a.setAttribute("aria-hidden", "true"), a.setAttribute("focusable", "false");
    for (const n of i) {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
      o.setAttribute("d", n), o.setAttribute("fill", "none"), o.setAttribute("stroke", "currentColor"), o.setAttribute("stroke-width", "2"), o.setAttribute("stroke-linecap", "round"), o.setAttribute("stroke-linejoin", "round"), a.append(o);
    }
    return a;
  }
  appendWaterfallServiceIcon(e, t) {
    if (t === "on-prem") {
      e.append(pn("wa-waterfall-chip__mark"));
      return;
    }
    const a = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    switch (a.setAttribute("viewBox", "0 0 16 16"), a.setAttribute("aria-hidden", "true"), a.setAttribute("focusable", "false"), i.setAttribute("fill", "none"), i.setAttribute("stroke", "currentColor"), i.setAttribute("stroke-width", "1.8"), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-linejoin", "round"), t) {
      case "wiza":
        i.setAttribute("d", "M8 2.4 5.2 11.8h5.6L8 2.4Zm-3.8 9.4h7.6");
        break;
      case "contactout":
        i.setAttribute("d", "M4.2 10.7V5.3h7.6v5.4H4.2Zm1.2-6.8h1.2m2.8 0h1.2M6 7.9h.1m3.8 0h.1");
        break;
      case "prospeo":
        i.setAttribute("d", "m8 2.7 4.4 2.5v5.6L8 13.3l-4.4-2.5V5.2L8 2.7Zm0 0v5.2m4.4-2.7L8 7.9 3.6 5.2");
        break;
      case "waterfall":
        i.setAttribute("d", "m3.2 6.2 3.1 3 1.7-1.6 1.7 1.6 3.1-3");
        break;
      case "fullenrich":
        i.setAttribute("d", "M3.1 9.9a5 5 0 1 1 9.8 0M5.2 8.6a2.8 2.8 0 1 1 5.6 0M2.9 11.8h10.2");
        break;
      default:
        i.setAttribute("d", "M3.3 4.2 8 2l4.7 2.2M3.3 7.1 8 4.9l4.7 2.2M3.3 10 8 7.8l4.7 2.2M8 7.8v5.4");
        break;
    }
    a.append(i), e.append(a);
  }
  animateEnrichmentWaterfall(e) {
    const t = f.timeline();
    return e.forEach((a, i) => {
      const n = this.queryElements(a, ".wa-waterfall-chip"), o = this.queryElements(a, ".wa-waterfall-service-step"), s = this.getAttemptedWaterfallChips(n), l = this.getWaterfallFinalState(a), c = f.timeline(), d = Ee.rowOffsets[i % Ee.rowOffsets.length] ?? 0, u = Ee.serviceLoadDuration + (i % 2 === 0 ? Ee.serviceLoadVariance : -Ee.serviceLoadVariance);
      c.call(() => this.setWaterfallState(a, "loading")).to(o, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: Ee.serviceRevealDuration,
        ease: "power2.out",
        stagger: 0.035
      }, "<"), s.forEach((h) => {
        const g = this.getWaterfallFinalState(h);
        c.call(() => this.setWaterfallState(h, "loading")).to(h, {
          scale: 1.025,
          duration: Ee.serviceSettleDuration,
          ease: "power2.out"
        }, "<").to({}, { duration: u }).call(() => this.setWaterfallState(h, g)).to(h, {
          scale: 1,
          duration: Ee.serviceSettleDuration,
          ease: g === "complete" ? "back.out(1.8)" : "power2.out"
        });
      }), c.call(() => this.setWaterfallState(a, l)).to({}, { duration: Ee.rowCompleteHold }), t.add(c, d);
    }), t;
  }
  getAttemptedWaterfallChips(e) {
    const t = [];
    for (const a of e) {
      const i = this.getWaterfallFinalState(a);
      if (i === "pending" || (t.push(a), i === "complete")) break;
    }
    return t;
  }
  getWaterfallFinalState(e) {
    const t = e.dataset.finalStepState;
    return t === "complete" || t === "failed" || t === "pending" ? t : "pending";
  }
  setWaterfallState(e, t) {
    e.dataset.stepState = t;
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
    return t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__scale", i.className = "wa-data-source-grid__groups", Ll.forEach((s) => {
      const l = document.createElement("div");
      l.className = "wa-data-source-grid__column", s.forEach((c) => {
        const d = o.find((u) => u.category === c);
        d && l.append(this.createMarketingDataSourceGroup(d));
      }), i.append(l);
    }), a.replaceChildren(...this.compactElements(n, i)), t.replaceChildren(a), this.setMarketingDataGridScale(t), t;
  }
  setMarketingDataGridScale(e) {
    const t = this.chatBody.getBoundingClientRect(), a = getComputedStyle(this.chatBody), i = Number.parseFloat(a.paddingLeft) || 0, n = Number.parseFloat(a.paddingRight) || i, o = Math.max(0, t.width - i - n) / ja.contentWidth, s = Math.max(0, t.height) / ja.height, l = Math.min(o || 1, s || 1), c = l > 0 ? i / l : 0, d = l > 0 ? n / l : c, u = ja.contentWidth + c + d;
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
      const y = document.createElement("p");
      y.className = "wa-mailbox-connection__subtitle", y.textContent = e.subtitle, i.append(n, y);
    } else
      i.append(n);
    const o = document.createElement("div");
    o.className = "wa-mailbox-connection__actions";
    const s = this.createMailboxProviderButton({
      id: e.id,
      icon: "gmail",
      label: Za("gmail", e.ctaLabel),
      loadingLabel: $a(e.loadingLabel, "Connecting"),
      connectedLabel: Za("gmail", e.status, "connected"),
      isPrimary: !0
    }), l = this.createMailboxProviderButton({
      icon: "outlook",
      label: Za("outlook", e.secondaryCtaLabel)
    });
    o.append(s, l), a.append(i, o);
    const c = document.createElement("div");
    c.className = "wa-mailbox-learning", c.dataset.mailboxLearning = "", c.dataset.mailboxLearningReadyDetail = e.learningReadyDetail ?? mn;
    const d = document.createElement("div");
    d.className = "wa-mailbox-learning__thumbprint", d.append(this.createMailboxThumbprint(e.id));
    const u = document.createElement("h4");
    u.className = "wa-mailbox-learning__title";
    const h = document.createElement("span");
    h.dataset.mailboxLearningTitleText = "", h.textContent = e.learningTitle ?? gn;
    const g = document.createElement("span");
    g.className = "wa-mailbox-learning__ready-chevron", g.dataset.mailboxLearningReadyChevron = "", g.setAttribute("aria-hidden", "true"), u.append(h, g);
    const m = document.createElement("p");
    m.className = "wa-mailbox-learning__detail", m.textContent = e.learningDetail ?? Va[0].detail;
    const p = document.createElement("div");
    p.className = "wa-mailbox-learning__progress";
    const w = document.createElement("span");
    return w.dataset.mailboxLearningProgress = "", p.append(w), c.append(d, u, p, m), t.append(a, c), t;
  }
  createMailboxProviderButton(e) {
    const t = document.createElement("button");
    t.className = "wa-mailbox-connection__button", t.type = "button", t.setAttribute("aria-label", e.label), e.isPrimary && e.id && (t.dataset.mailboxConnect = e.id, t.dataset.mailboxLoadingLabel = $a(e.loadingLabel, "Connecting"), t.dataset.mailboxConnectedLabel = e.connectedLabel ?? "Gmail");
    const a = this.createMailboxProviderIcon(e.icon), i = document.createElement("span");
    i.className = "wa-mailbox-connection__button-copy";
    const n = document.createElement("span");
    if (n.className = e.isPrimary ? "wa-mailbox-connection__button-label" : "wa-mailbox-connection__provider-label", e.isPrimary && (n.dataset.mailboxButtonLabel = "idle", n.setAttribute("aria-hidden", "true")), n.textContent = e.label, i.append(n), e.isPrimary) {
      const s = document.createElement("span");
      s.className = "wa-mailbox-connection__button-label", s.dataset.mailboxButtonLabel = "loading", s.setAttribute("aria-hidden", "true"), s.textContent = $a(e.loadingLabel, "Connecting");
      const l = document.createElement("span"), c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), d = document.createElementNS("http://www.w3.org/2000/svg", "path"), u = document.createElement("span");
      l.className = "wa-mailbox-connection__button-label", l.dataset.mailboxButtonLabel = "connected", l.setAttribute("aria-hidden", "true"), c.classList.add("wa-mailbox-connection__connected-icon"), c.setAttribute("width", "16"), c.setAttribute("height", "16"), c.setAttribute("viewBox", "0 0 24 24"), c.setAttribute("aria-hidden", "true"), c.setAttribute("focusable", "false"), d.setAttribute("d", "M5 12l5 5l10 -10"), c.append(d), u.textContent = e.connectedLabel ?? "Gmail", l.append(c, u), i.append(s, l);
    }
    const o = document.createElement("span");
    return o.className = "wa-mailbox-connection__spinner", o.setAttribute("aria-hidden", "true"), t.append(a, i, o), t;
  }
  createMailboxProviderIcon(e) {
    const t = document.createElement("img");
    return t.className = "wa-mailbox-connection__provider-icon", t.src = Cl[e], t.alt = "", t.decoding = "async", t.loading = "eager", t.setAttribute("aria-hidden", "true"), t;
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
    return a.classList.add(e), Ml.forEach((i, n) => {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
      o.setAttribute("d", i), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "round"), o.setAttribute("stroke-miterlimit", "10"), t && (o.dataset.mailboxThumbprintPath = String(n), o.setAttribute("pathLength", "100"), o.setAttribute("stroke-dasharray", "0 100"), o.setAttribute("stroke-dashoffset", "0")), a.append(o);
    }), a;
  }
  updateMailboxThumbprintFill(e, t) {
    e.forEach((a, i) => {
      const n = Hl(i, t);
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
    u.className = "wa-swipe-game__glow", u.setAttribute("aria-hidden", "true"), d.append(u), e.signals.forEach((m, p) => {
      const w = document.createElement("article");
      w.className = "wa-swipe-card", w.dataset.swipeCard = m.id, w.dataset.swipeDecision = m.decision, w.dataset.cardIndex = String(p);
      const y = document.createElement("strong");
      y.className = "wa-swipe-card__label", y.textContent = m.label;
      const b = document.createElement("span");
      b.className = "wa-swipe-card__detail", b.textContent = m.detail, w.append(y, b), d.append(w);
    });
    const h = document.createElement("div");
    h.className = "wa-swipe-game__complete", h.dataset.swipeComplete = "", h.textContent = e.completeLabel ?? `${e.signals.length} choices captured`, d.append(h), f.set(h, { autoAlpha: 0, y: 12, scale: 0.96 });
    const g = document.createElement("div");
    return g.className = "wa-swipe-game__actions", g.append(
      this.createSwipeActionButton("avoid", e.labels?.avoid ?? "Never me"),
      this.createSwipeActionButton("use", e.labels?.use ?? "I'd use it")
    ), t.append(a, n, o, d, g), this.updateSwipeGameProgress(t, 0), t;
  }
  createSwipeActionButton(e, t) {
    const a = document.createElement("button");
    return a.className = "wa-swipe-game__action", a.type = "button", a.tabIndex = -1, a.dataset.swipeAction = e, a.setAttribute("aria-label", t), a;
  }
  layoutSwipeGameCards(e, t) {
    const a = this.getSwipeCards(e);
    a.forEach((i, n) => {
      const o = n - t, s = o >= 0 && o < 3;
      i.dataset.swipeState = o === 0 ? "active" : o > 0 ? "queued" : "done", f.set(i, {
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
    const t = document.createElement("section"), a = Qr(e);
    t.className = "wa-sequence-engagement", t.dataset.sequenceEngagement = e.id, t.dataset.peopleCount = e.peopleCount, t.dataset.activeSequenceIndex = String(a);
    const i = this.createSectionHeader("wa-sequence-engagement", e.title, e.subtitle), n = document.createElement("div");
    n.className = "wa-sequence-engagement__sequences";
    const o = e.sequences.some((m) => m.steps?.length);
    let s = null;
    if (o) {
      const m = document.createElement("div"), p = document.createElement("div");
      m.className = "wa-sequence-people-wrap", p.className = "wa-sequence-people", p.dataset.sequencePeopleRail = e.id, p.setAttribute("aria-label", "Sequence people"), m.append(p), e.sequences.forEach((w, y) => {
        const b = document.createElement("button"), x = document.createElement("span"), v = document.createElement("span"), _ = document.createElement("span"), T = document.createElement("strong"), A = document.createElement("span");
        b.className = "wa-sequence-person-card", b.type = "button", b.tabIndex = -1, b.dataset.sequencePersonCard = `${e.id}:${y}`, b.dataset.sequencePersonIndex = String(y), b.dataset.active = String(y === a), b.setAttribute("aria-pressed", String(y === a)), b.setAttribute("aria-label", `Preview sequence for ${w.name}`), b.addEventListener("click", () => this.playSequencePersonInteraction(e.id, y)), x.className = "wa-sequence-person-card__avatar-wrap", v.className = "wa-sequence-person-card__avatar", v.dataset.avatarTone = String(y % 9 + 1), this.setProfileAvatar(v, w.name, w.avatarUrl), x.append(v);
        const C = this.createSequenceCompanyBadge(w.company);
        C && x.append(C), _.className = "wa-sequence-person-card__copy", T.textContent = w.name, A.textContent = [w.title, w.company].filter(Boolean).join(", "), _.append(T, A), b.append(x, _), p.append(b);
      }), s = m;
    }
    e.sequences.forEach((m, p) => {
      const w = document.createElement("article");
      w.className = "wa-sequence-card", w.dataset.sequenceCard = `${e.id}:${p}`, w.dataset.sequenceIndex = String(p), w.dataset.active = String(p === a), w.dataset.sequenceName = m.name, w.dataset.sequenceMeta = [m.title, m.company].filter(Boolean).join(", "), w.dataset.sequenceAvatarUrl = m.avatarUrl ?? "", w.dataset.sequenceTemplateName = m.name, w.dataset.sequenceTemplateMeta = [m.title, m.company].filter(Boolean).join(", "), w.dataset.sequenceTemplateAvatarUrl = m.avatarUrl ?? "", w.dataset.sequenceEmail = this.getSequenceRecipientEmail(m), w.dataset.sequenceTemplateEmail = this.getSequenceRecipientEmail(m), w.dataset.sequencePhone = this.getSequenceRecipientPhone(m), w.dataset.sequenceTemplatePhone = this.getSequenceRecipientPhone(m), p !== a && (w.style.display = "none", f.set(w, { autoAlpha: 0, y: 8 }));
      const y = document.createElement("div");
      y.className = "wa-sequence-card__top";
      const b = document.createElement("span");
      b.className = "wa-sequence-card__identity";
      const x = document.createElement("strong");
      x.textContent = m.name;
      const v = document.createElement("span");
      v.textContent = [m.title, m.company].filter(Boolean).join(", "), b.append(x, v);
      const _ = document.createElement("span");
      _.className = "wa-sequence-card__label", _.textContent = m.signal ?? "Personalized", y.append(b, _);
      const T = document.createElement("p");
      T.className = "wa-sequence-card__subject", T.textContent = m.subject;
      const A = document.createElement("p");
      A.className = "wa-sequence-card__personalization", A.textContent = m.personalization;
      const C = m.steps;
      if (C?.length) {
        const k = document.createElement("div"), M = this.getInitialSequenceStepIndex(e, C.length), F = document.createElement("div"), z = document.createElement("span"), L = document.createElement("strong"), U = document.createElement("div");
        k.className = "wa-sequence-steps", C.forEach((D, I) => {
          const P = document.createElement("button"), $ = document.createElement("span"), ke = document.createElement("span"), Ge = document.createElement("strong"), Se = this.getSequenceStepWaitDays(D, I, C.length);
          P.className = "wa-sequence-step", P.type = "button", P.tabIndex = -1, P.dataset.stepIndex = String(I), P.dataset.stepOpen = String(I === M), P.dataset.stepSelected = String(I === M), P.dataset.channel = this.slugChannelName(D.channel), P.dataset.stepSubject = I === 0 ? m.subject : D.label, P.dataset.stepBody = this.getSequenceStepCopy(m, D), P.dataset.stepTemplateChannel = D.channel, P.dataset.stepTemplateLabel = D.label, P.dataset.stepTemplateSubject = I === 0 ? m.subject : D.label, P.dataset.stepTemplateBody = this.getSequenceStepCopy(m, D), Se && (P.dataset.waitDays = String(Se), P.dataset.stepTemplateWaitDays = String(Se)), P.setAttribute("aria-pressed", String(I === 0)), P.addEventListener("click", () => {
            this.selectSequenceStep(w, I, { cancelPersonTransition: !0 });
          }), $.className = "wa-sequence-step__channel", $.append(
            this.createSequenceChannelIcon(D.channel),
            document.createTextNode(this.formatSequenceChannelLabel(D.channel))
          ), ke.className = "wa-sequence-step__copy", Ge.textContent = this.formatSequenceStepTitle(D.label), ke.append(Ge), P.append($, ke), k.append(P), Se && k.append(this.createSequenceWaitRow(Se, I));
        }), F.className = "wa-sequence-copy-panel", F.dataset.sequenceCopyPanel = "", z.className = "wa-sequence-copy-panel__meta", z.dataset.sequenceCopyMeta = "", L.className = "wa-sequence-copy-panel__subject", L.dataset.sequenceCopySubject = "", U.className = "wa-sequence-copy-panel__body", U.dataset.sequenceCopyBody = "", F.append(z, L, U), w.append(k, F), this.selectSequenceStep(w, M);
      } else
        w.append(y, T, A);
      n.append(w);
    });
    const l = document.createElement("div");
    l.className = "wa-engage-channels", e.channels.forEach((m) => {
      const p = document.createElement("button");
      p.className = "wa-engage-channel", p.type = "button", p.tabIndex = -1;
      const w = document.createElement("span");
      w.className = "wa-engage-channel__copy";
      const y = document.createElement("strong");
      y.textContent = m.label;
      const b = document.createElement("span");
      if (b.textContent = m.detail, w.append(y, b), p.append(w), m.badge) {
        const x = document.createElement("span");
        x.className = "wa-engage-channel__badge", x.textContent = m.badge, p.dataset.badge = m.badge.toLowerCase(), p.append(x);
      }
      l.append(p);
    });
    const c = document.createElement("div"), d = document.createElement("button"), u = document.createElement("span"), h = document.createElement("button"), g = document.createElement("span");
    return c.className = "wa-sequence-actions", d.className = "wa-sequence-action wa-sequence-action--draft", d.type = "button", d.tabIndex = -1, d.dataset.sequenceSaveDraft = e.id, d.setAttribute("aria-label", "Save as draft"), u.className = "wa-sequence-kickoff__label", u.textContent = "Save as draft", d.append(u), h.className = "wa-sequence-kickoff", h.type = "button", h.tabIndex = -1, h.dataset.sequenceKickoff = e.id, h.setAttribute("aria-label", `Enroll ${e.peopleCount}`), g.className = "wa-sequence-kickoff__label", g.textContent = `Enroll ${e.peopleCount}`, h.append(g), h.addEventListener("click", () => {
      this.sequenceKickoff(e.id).play();
    }), c.append(d, h), o ? (t.append(...this.compactElements(i, s, n, c)), this.observeInitialSequenceRailCenter(t)) : t.append(i, n, l), t;
  }
  createSequenceThinkingStep(e, t, a, i) {
    const n = this.createThinkingStep(
      {
        label: e,
        detail: t,
        disclosure: a === 0 ? Vt : fa
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
    f.set(t, { clearProps: "opacity,visibility,transform" });
  }
  createSequenceWaitRow(e, t) {
    const a = document.createElement("div"), i = document.createElement("span");
    return a.className = "wa-sequence-wait", a.dataset.sequenceWaitIndex = String(t), a.dataset.waitDays = String(e), i.className = "wa-sequence-wait__label", this.populateSequenceWaitLabel(i, e), a.append(i), a;
  }
  populateSequenceWaitLabel(e, t) {
    const a = document.createElement("span"), i = document.createElement("span");
    a.className = "wa-sequence-wait__prefix", a.textContent = "wait", i.className = "wa-sequence-wait__value", i.textContent = `${t} ${t === 1 ? "day" : "days"}`, e.setAttribute("aria-label", this.formatSequenceWaitLabel(t)), e.replaceChildren(a, i);
  }
  getSequenceStepWaitDays(e, t, a) {
    return t >= a - 1 ? null : e.waitDays ?? Al[t] ?? 1;
  }
  formatSequenceWaitLabel(e) {
    return `wait ${e} ${e === 1 ? "day" : "days"}`;
  }
  getInitialSequenceStepIndex(e, t) {
    const a = e.initialStepIndex;
    return typeof a != "number" || !Number.isFinite(a) ? 0 : Math.min(Math.max(0, Math.round(a)), Math.max(0, t - 1));
  }
  formatSequenceChannelLabel(e) {
    const t = e.trim().toLowerCase();
    return t.includes("email") ? "Email" : t.includes("linkedin") || t.includes("social") ? "Connect" : t.includes("call") || t.includes("dial") ? "Call" : e.trim() || "Step";
  }
  formatSequenceStepTitle(e) {
    const t = e.trim();
    return t ? `${t[0]?.toUpperCase()}${t.slice(1)}` : "";
  }
  createSequenceChannelIcon(e) {
    const t = document.createElement("span"), a = this.slugChannelName(e);
    return t.className = "wa-sequence-step__icon", t.setAttribute("aria-hidden", "true"), t.innerHTML = a === "call" || a.includes("call") ? '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -16 -16a2 2 0 0 1 2 -2"></path></svg>' : a.includes("linkedin") || a.includes("social") ? '<svg viewBox="0 0 24 24" focusable="false"><path d="M9 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M7 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M19 16v6"></path><path d="M16 19h6"></path></svg>' : '<svg viewBox="0 0 24 24" focusable="false"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M3 7l9 6l9 -6"></path></svg>', t;
  }
  setActiveSequencePerson(e, t, a = !1) {
    const i = this.queryElements(e, "[data-sequence-card]"), n = this.getSequenceDisplayCard(e), o = this.getSequenceTemplateCard(e, t);
    !n || !o || (i.forEach((s) => {
      const l = s === n;
      s.dataset.active = String(l), s.style.display = l ? "grid" : "none", f.set(s, { autoAlpha: l ? 1 : 0, y: 0 });
    }), e.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(e, n, o, t), this.setSequencePersonRailState(e, t, a));
  }
  setSequencePersonRailState(e, t, a = !1) {
    const i = this.queryElements(e, "[data-sequence-person-card]");
    e.dataset.activeSequenceIndex = String(t), i.forEach((n) => {
      const o = Number(n.dataset.sequencePersonIndex) === t;
      n.dataset.active = String(o), n.setAttribute("aria-pressed", String(o));
    }), a && this.centerSequencePersonCard(e, t);
  }
  centerSequencePersonCard(e, t) {
    const a = e.querySelector("[data-sequence-people-rail]"), i = a?.querySelector(`[data-sequence-person-index="${t}"]`);
    if (!a || !i) return;
    const n = this.getSequencePersonRailScrollTarget(a, i);
    if (f.killTweensOf(a, "scrollLeft"), this.prefersReducedMotion || Math.abs(a.scrollLeft - n) < 1) {
      a.scrollLeft = n, delete a.dataset.sequenceCentering;
      return;
    }
    a.dataset.sequenceCentering = "true", f.to(a, {
      scrollLeft: n,
      duration: bn.railCenterDuration,
      ease: bn.railCenterEase,
      overwrite: "auto",
      onComplete: () => {
        delete a.dataset.sequenceCentering;
      },
      onInterrupt: () => {
        delete a.dataset.sequenceCentering;
      }
    });
  }
  setSequencePersonRailPosition(e, t, a = 3) {
    const i = e.querySelector("[data-sequence-people-rail]"), n = i?.querySelector(`[data-sequence-person-index="${t}"]`);
    if (!(!i || !n)) {
      if ((i.clientWidth <= 0 || n.getBoundingClientRect().width <= 0) && a > 0) {
        requestAnimationFrame(() => this.setSequencePersonRailPosition(e, t, a - 1));
        return;
      }
      i.dataset.sequenceCentering = "true", i.scrollLeft = this.getSequencePersonRailScrollTarget(i, n), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          delete i.dataset.sequenceCentering;
        });
      });
    }
  }
  observeInitialSequenceRailCenter(e) {
    const t = e.querySelector("[data-sequence-people-rail]");
    if (!t || typeof ResizeObserver > "u") return;
    const a = [], i = () => a.forEach((s) => s.disconnect()), n = () => {
      t.clientWidth <= 0 || requestAnimationFrame(() => {
        const s = Number(e.dataset.activeSequenceIndex ?? "0");
        this.setSequencePersonRailPosition(e, s), window.setTimeout(() => this.setSequencePersonRailPosition(e, s), 80), i();
      });
    }, o = new ResizeObserver(n);
    o.observe(t), a.push(o), requestAnimationFrame(() => {
      const s = e.closest(".wa-message");
      if (!s || typeof MutationObserver > "u") {
        n();
        return;
      }
      const l = new MutationObserver(n);
      l.observe(s, { attributes: !0, attributeFilter: ["class", "style"] }), a.push(l), n();
    });
  }
  getSequencePersonRailScrollTarget(e, t) {
    const a = Math.max(0, e.scrollWidth - e.clientWidth), i = e.getBoundingClientRect(), n = t.getBoundingClientRect(), o = e.scrollLeft + n.left - i.left - (e.clientWidth - n.width) / 2;
    return Math.min(a, Math.max(0, o));
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
  prepareSequencePersonContentSwaps(e, t, a, i) {
    const n = this.getSequenceTransitionTargets(t), o = /* @__PURE__ */ new Map();
    f.killTweensOf(n), this.cleanupInlineSequencePersonContentSwaps(t), n.forEach((c) => {
      o.set(c, c.innerHTML);
    }), this.applySequenceTemplateToDisplayCard(e, t, a, i);
    const s = this.getSequenceTransitionTargets(t), l = this.getSequencePersonContentSwapDelays(s);
    return s.flatMap((c) => {
      const d = c.innerHTML, u = o.get(c) ?? "";
      return u === d ? [] : [this.prepareSequencePersonContentSwap(c, u, d, l.get(c) ?? 0)];
    });
  }
  prepareSequencePersonContentSwap(e, t, a, i) {
    const n = this.measureSequenceContentSwapBox(e, t, a), o = this.createSequenceContentSwapClone(t, "current"), s = this.createSequenceContentSwapClone(a, "incoming");
    return e.dataset.sequenceContentSwapActive = "true", e.style.minWidth = `${n.width}px`, e.style.minHeight = `${this.formatSequenceSwapSize(n.height)}px`, e.replaceChildren(o, s), this.setDataTablePageCellSwapState([o], 1, 0), this.setDataTablePageCellSwapState([s], 0, j.incomingY), {
      target: e,
      currentClone: o,
      incomingClone: s,
      finalHtml: a,
      delay: i
    };
  }
  measureSequenceContentSwapBox(e, t, a) {
    const i = e.getBoundingClientRect(), n = this.isSequenceCopyPanelShellRow(e), o = n ? [i.height] : [i.height, e.offsetHeight, e.scrollHeight], s = e.parentElement, l = n ? 0 : Math.ceil(Math.max(Math.abs(j.incomingY), Math.abs(j.outgoingY))) + 2;
    if (!s || i.width <= 0)
      return {
        width: i.width,
        height: Math.max(...o) + l
      };
    const c = e.cloneNode(!1);
    return c.removeAttribute("data-sequence-content-swap-active"), c.style.position = "absolute", c.style.left = "-10000px", c.style.top = "0", c.style.width = `${i.width}px`, c.style.minWidth = `${i.width}px`, c.style.maxWidth = `${i.width}px`, c.style.minHeight = "0", c.style.height = "auto", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.overflow = "visible", c.style.contain = "layout style", s.append(c), [t, a].forEach((d) => {
      c.innerHTML = d, n ? o.push(c.getBoundingClientRect().height) : o.push(c.offsetHeight, c.scrollHeight, c.getBoundingClientRect().height);
    }), c.remove(), {
      width: i.width,
      height: Math.max(...o) + l
    };
  }
  isSequenceCopyPanelShellRow(e) {
    return e.classList.contains("wa-sequence-copy-panel__meta") || e.classList.contains("wa-sequence-copy-panel__subject") || e.classList.contains("wa-sequence-copy-panel__body");
  }
  formatSequenceSwapSize(e) {
    return Number.isFinite(e) ? e.toFixed(2) : "0";
  }
  createSequenceContentSwapClone(e, t) {
    const a = document.createElement("span");
    return a.className = "wa-sequence-content-swap-clone", a.dataset.sequenceContentSwapClone = t, a.setAttribute("aria-hidden", "true"), a.innerHTML = e, a;
  }
  getSequencePersonContentSwapDelays(e) {
    const t = e.map((o) => ({ target: o, rect: o.getBoundingClientRect() })).sort((o, s) => {
      const l = o.rect.top - s.rect.top;
      return Math.abs(l) > 6 ? l : o.rect.left - s.rect.left;
    }), a = [], i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    return t.forEach(({ target: o, rect: s }) => {
      let l = a.findIndex((d) => Math.abs(d - s.top) <= 6);
      l === -1 && (l = a.length, a.push(s.top));
      const c = i.get(l) ?? 0;
      i.set(l, c + 1), n.set(o, this.getDataTablePageCellDelay(l, c));
    }), n;
  }
  renderSequencePersonContentSwaps(e, t) {
    const a = t * j.totalDuration;
    e.swaps.forEach((i) => {
      const n = Ye(
        (a - i.delay) / j.duration
      ), o = Ye(
        (a - i.delay - j.incomingLag) / j.duration
      ), s = oa.in(o), l = oa.out(n);
      this.setDataTablePageCellSwapState(
        [i.currentClone],
        1 - l,
        this.interpolate(0, j.outgoingY, l)
      ), this.setDataTablePageCellSwapState(
        [i.incomingClone],
        s,
        this.interpolate(j.incomingY, 0, s)
      );
    });
  }
  commitSequencePersonContentSwaps(e) {
    e.committed = !0, this.cleanupSequencePersonContentSwaps(e);
  }
  cleanupSequencePersonContentSwaps(e) {
    const t = this.getSequencePersonSwapMotionTargets(e);
    t.length && this.clearMotionHints(t), e.swaps.forEach((a) => {
      a.target.innerHTML = a.finalHtml, delete a.target.dataset.sequenceContentSwapActive, a.target.style.minWidth = "", a.target.style.minHeight = "";
    }), e.swaps = [];
  }
  cleanupInlineSequencePersonContentSwaps(e) {
    this.queryElements(e, '[data-sequence-content-swap-active="true"]').forEach((t) => {
      const a = t.querySelector('[data-sequence-content-swap-clone="incoming"]'), i = t.querySelector('[data-sequence-content-swap-clone="current"]');
      t.innerHTML = a?.innerHTML ?? i?.innerHTML ?? t.innerHTML, delete t.dataset.sequenceContentSwapActive, t.style.minWidth = "", t.style.minHeight = "";
    });
  }
  getSequencePersonSwapMotionTargets(e) {
    return e.swaps.flatMap((t) => [t.currentClone, t.incomingClone]);
  }
  applySequenceTemplateToDisplayCard(e, t, a, i) {
    const n = this.getSelectedSequenceStepIndex(t), o = this.queryElements(t, ".wa-sequence-step"), s = this.queryElements(t, ".wa-sequence-wait"), l = this.queryElements(a, ".wa-sequence-step");
    t.dataset.sequenceName = a.dataset.sequenceTemplateName ?? a.dataset.sequenceName ?? "", t.dataset.sequenceMeta = a.dataset.sequenceTemplateMeta ?? a.dataset.sequenceMeta ?? "", t.dataset.sequenceAvatarUrl = a.dataset.sequenceTemplateAvatarUrl ?? a.dataset.sequenceAvatarUrl ?? "", t.dataset.sequenceEmail = a.dataset.sequenceTemplateEmail ?? a.dataset.sequenceEmail ?? "", t.dataset.sequencePhone = a.dataset.sequenceTemplatePhone ?? a.dataset.sequencePhone ?? "", o.forEach((c, d) => {
      const u = l[d], h = c.querySelector(".wa-sequence-step__channel"), g = c.querySelector(".wa-sequence-step__copy strong");
      if (!u) return;
      if (c.dataset.channel = u.dataset.channel ?? "", c.dataset.stepSubject = u.dataset.stepTemplateSubject ?? u.dataset.stepSubject ?? "", c.dataset.stepBody = u.dataset.stepTemplateBody ?? u.dataset.stepBody ?? "", c.dataset.waitDays = u.dataset.stepTemplateWaitDays ?? u.dataset.waitDays ?? "", h) {
        const y = u.dataset.stepTemplateChannel ?? h.textContent ?? "";
        h.replaceChildren(
          this.createSequenceChannelIcon(y),
          document.createTextNode(this.formatSequenceChannelLabel(y))
        );
      }
      g && (g.textContent = this.formatSequenceStepTitle(u.dataset.stepTemplateLabel ?? g.textContent ?? ""));
      const m = s[d], p = Number(c.dataset.waitDays), w = m?.querySelector(".wa-sequence-wait__label");
      m && (m.style.display = Number.isFinite(p) && p > 0 ? "grid" : "none", m.dataset.waitDays = String(p)), w && Number.isFinite(p) && p > 0 && this.populateSequenceWaitLabel(w, p);
    }), e.dataset.activeSequenceIndex = String(i), this.selectSequenceStep(t, Math.min(n, Math.max(0, o.length - 1)));
  }
  selectSequenceStep(e, t, a = {}) {
    const i = this.queryElements(e, ".wa-sequence-step"), n = i.find((c) => Number(c.dataset.stepIndex) === t) ?? i[0], o = e.querySelector("[data-sequence-copy-meta]"), s = e.querySelector("[data-sequence-copy-subject]"), l = e.querySelector("[data-sequence-copy-body]");
    a.cancelPersonTransition && (this.cancelSequencePersonTransitionForCard(e), this.cleanupInlineSequencePersonContentSwaps(e)), i.forEach((c) => {
      const d = c === n;
      c.dataset.stepSelected = String(d), c.dataset.stepOpen = String(d), c.setAttribute("aria-pressed", String(d));
    }), this.renderSequenceCopyPanel(e, n, o, s, l);
  }
  cancelSequencePersonTransitionForCard(e) {
    const a = e.closest("[data-sequence-engagement]")?.dataset.sequenceEngagement;
    if (!a) return;
    const i = this.activeSequencePersonTimelines.get(a);
    i && (i.kill(), this.activeSequencePersonTimelines.delete(a));
  }
  renderSequenceCopyPanel(e, t, a, i, n) {
    const o = e.querySelector("[data-sequence-copy-panel]"), s = t?.dataset.channel ?? "", l = s.includes("linkedin") || s.includes("social"), c = s.includes("call") || s.includes("dial");
    if (o && (o.dataset.copyChannel = l ? "connect" : c ? "call" : "email"), l) {
      a && (a.textContent = "Send connection request"), i && (i.textContent = t?.dataset.stepBody ?? ""), n && n.replaceChildren(document.createTextNode("0/200"));
      return;
    }
    if (c) {
      a && this.setSequenceCallMeta(a, e.dataset.sequencePhone ?? ""), i && (i.textContent = t?.dataset.stepBody ?? ""), n && this.renderSequenceCallAction(n, e);
      return;
    }
    a && this.setSequenceCopyMeta(a, e.dataset.sequenceEmail ?? ""), i && (i.textContent = t?.dataset.stepSubject ?? ""), n && n.replaceChildren(document.createTextNode(t?.dataset.stepBody ?? ""));
  }
  setSequenceCopyMeta(e, t) {
    const a = document.createElement("span"), i = document.createElement("strong");
    a.textContent = "to:", i.textContent = t, e.replaceChildren(a, document.createTextNode(" "), i);
  }
  setSequenceCallMeta(e, t) {
    const a = document.createElement("span"), i = document.createElement("strong");
    a.textContent = "call:", i.textContent = t, e.replaceChildren(a, document.createTextNode(" "), i);
  }
  renderSequenceCallAction(e, t) {
    const a = document.createElement("span"), i = document.createElement("span"), n = document.createElement("span"), o = document.createElement("strong"), s = document.createElement("span"), l = document.createElement("span"), c = document.createElement("span"), d = document.createElement("span");
    a.className = "wa-sequence-call-action", i.className = "wa-sequence-call-action__avatar", this.setProfileAvatar(i, t.dataset.sequenceName ?? "", t.dataset.sequenceAvatarUrl), n.className = "wa-sequence-call-action__copy", o.textContent = t.dataset.sequenceName ?? "", s.textContent = t.dataset.sequenceMeta ?? "", n.append(o, s), l.className = "wa-sequence-call-action__button", c.className = "wa-sequence-call-action__icon", c.setAttribute("aria-hidden", "true"), c.innerHTML = '<svg viewBox="0 0 24 24" focusable="false"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -16 -16a2 2 0 0 1 2 -2"></path></svg>', d.textContent = "Start", l.append(c, d), a.append(i, n, l), e.replaceChildren(a);
  }
  getSequenceStepCopy(e, t) {
    const a = e.name.split(" ")[0] ?? e.name;
    return this.slugChannelName(t.channel) !== "email" ? t.body : e.name === "Jamie Chen" && t.label === "lead with ROI" ? [
      `Hi ${a},`,
      "Saw Square pop up through the ROI calculator, which usually means the team is pressure-testing whether better GTM data changes pipeline economics.",
      "Connect the calculator visit to the cost of fragmented data and suggest a quick account-quality benchmark.",
      "Worth sending over a quick example?"
    ].join(`

`) : [
      `Hi ${a},`,
      e.personalization,
      t.body,
      "Worth sending over a quick example?"
    ].join(`

`);
  }
  getSequenceRecipientEmail(e) {
    const [t = "hello", a = "there"] = e.name.toLowerCase().replace(/[^a-z\s-]/g, "").split(/\s+/).filter(Boolean), i = this.getCompanyLogoDomain(e.company) || `${this.getCompanyKey(e.company)}.com`;
    return `${t}.${a}@${i}`;
  }
  getSequenceRecipientPhone(e) {
    const t = Sl[e.name];
    if (t) return t;
    const a = `${e.name}:${e.company}`.split("").reduce((l, c) => l + c.charCodeAt(0), 0), i = [628, 917, 415, 646, 312, 424, 206, 650], n = i[a % i.length], o = 200 + a % 700, s = 1e3 + a * 37 % 9e3;
    return `+1 (${n}) ${String(o).padStart(3, "0")}-${String(s).padStart(4, "0")}`;
  }
  slugChannelName(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  revealCard(e) {
    const t = this.claimComponentMessage("result", e), a = e.querySelectorAll(".wa-result-row, .wa-result-action");
    return f.timeline().call(() => {
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
    const a = typeof t == "string" ? e.querySelector(t) : t ?? e.querySelector(".wa-result-row, .wa-result-action") ?? e, i = f.timeline();
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
    this.removeElements(An);
  }
  getStorySwitchExitTargets() {
    return this.compactElements(
      this.isVisibleForStorySwitchExit(this.thread) ? this.thread : null,
      this.composerVisible && this.isVisibleForStorySwitchExit(this.composer) ? this.composer : null,
      this.isVisibleForStorySwitchExit(this.signupScene) ? this.signupScene : null,
      ...this.queryElements(this.chatBody, An).filter(
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
      t?.(), f.killTweensOf(e), e.remove();
    });
  }
  clearTransientElements() {
    for (const e of this.transientCleanups) e();
    this.transientCleanups = [], this.removeElements(vn);
  }
  removeElements(e) {
    this.root.querySelectorAll(e).forEach((t) => {
      f.killTweensOf(t), t.remove();
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
    const a = this.getElementSideInset(e), i = this.getThreadContentScale(), n = this.getElementOffsetTopWithinThread(e) - a / i + t / i, o = Math.max(this.getThreadBottomScrollTarget(), this.getElementBottomScrollTarget(e));
    return Math.min(Math.max(0, n), o);
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
  getElementBottomScrollTarget(e, t = 0) {
    const a = this.getThreadContentScale();
    return Math.max(
      0,
      this.getElementOffsetTopWithinThread(e) + e.offsetHeight + this.getThreadBottomPadding() - this.thread.clientHeight + t / a
    );
  }
  pinThreadToBottom() {
    this.thread.scrollTop = this.getThreadBottomScrollTarget();
  }
  animateMessageScrollIntoView(e, t = J.followDuration, a = null, i = 0) {
    this.updateThreadContentFitState();
    const n = this.getMessageScrollTarget(e, a, i);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - n) < 1) {
      this.thread.scrollTop = n;
      return;
    }
    this.scrollTween?.kill(), f.killTweensOf(this.thread, "scrollTop"), this.scrollTween = f.to(this.thread, {
      scrollTop: n,
      duration: t,
      ease: J.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  requestMessageScroll(e) {
    const t = performance.now();
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < Nl) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function Ye(r) {
  return Math.min(1, Math.max(0, r));
}
function Kr(r) {
  const e = Ye(r);
  return e * e * (3 - 2 * e);
}
function kn(r) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
}
function Za(r, e, t = "idle") {
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
function $a(r, e) {
  const t = r?.trim();
  return t ? t.toLowerCase() === e.toLowerCase() ? e : t : e;
}
function Hl(r, e) {
  const t = Tl[r] ?? 0, a = 24 + r * 11 % 8, i = Math.min(100, t + a), n = Kr((e - t) / (i - t));
  if (n <= 0) return 0;
  const o = El.has(r) ? 20 : 12;
  return Math.round(o + n * (100 - o));
}
function Vl(r, e) {
  return Math.hypot(e.x - r.x, e.y - r.y);
}
function Bt(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function Cn(r, e, t, a, i) {
  const n = 1 - i, o = i * i, s = n * n, l = s * n, c = o * i;
  return {
    x: l * r.x + 3 * s * i * e.x + 3 * n * o * t.x + c * a.x,
    y: l * r.y + 3 * s * i * e.y + 3 * n * o * t.y + c * a.y
  };
}
function Gl(r) {
  let e = 2166136261;
  for (let t = 0; t < r.length; t += 1)
    e ^= r.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function Xr(r) {
  let e = Gl(r) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const Wl = {
  slow: 560,
  normal: 860,
  quick: 1220
}, Yl = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, Ql = 1.24;
function sa(r, e, t) {
  const a = Xr(t.seed), i = Vl(r, e), n = t.speed ?? "normal", o = t.intent ?? "hover";
  if (t.reducedMotion || i < 2)
    return {
      start: r,
      c1: r,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const s = e.x - r.x, l = e.y - r.y, c = s / i, d = l / i, u = -d, h = c, g = a() > 0.5 ? 1 : -1, m = t.curve ?? 1, w = Bt(i * (o === "drag" ? 0.1 : o === "click" ? 0.17 : 0.22) * m, 18, 150) * g * (0.72 + a() * 0.44), y = i / Wl[n] + 0.16, b = Bt(
    y * Yl[o] * Ql * (t.durationScale ?? 1),
    0.3,
    1.98
  ), x = t.overshoot === !1 || i < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : Bt(i * 0.026, 4, 18), v = x > 0 ? {
    x: e.x + c * x,
    y: e.y + d * x
  } : e, _ = {
    x: r.x + s * (0.25 + a() * 0.08) + u * w,
    y: r.y + l * (0.25 + a() * 0.08) + h * w
  }, T = {
    x: r.x + s * (0.68 + a() * 0.12) - u * w * 0.42,
    y: r.y + l * (0.68 + a() * 0.12) - h * w * 0.42
  }, A = t.settle !== !1 && x > 0;
  return {
    start: r,
    c1: _,
    c2: T,
    end: v,
    duration: A ? b * 0.86 : b,
    settle: A ? {
      start: v,
      c1: {
        x: v.x - c * x * 0.45 + u * w * 0.04,
        y: v.y - d * x * 0.45 + h * w * 0.04
      },
      c2: {
        x: e.x + c * x * 0.16,
        y: e.y + d * x * 0.16
      },
      end: e,
      duration: Bt(b * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const ei = [
  "button:not(:disabled)",
  "a[href]",
  "[role='button']:not([aria-disabled='true'])",
  "[data-send-button]",
  "[data-result-action]",
  "[data-table-action]",
  "[data-table-page-button]",
  "[data-swipe-action]",
  "[data-sequence-person-card]",
  "[data-sequence-kickoff]",
  "[data-strategy-plan]",
  ".wa-sequence-step"
].join(", "), ti = "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']", ai = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, la = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, qt = {
  minDistance: 6,
  minInterval: 24,
  lookahead: 5
}, jl = -135, Kl = 0.34;
class Xl {
  constructor(e, t, a = {}) {
    this.root = e, this.resolver = t, this.options = a, this.el = this.root.querySelector("[data-cursor]") ?? this.createElement(), this.floatLayer = this.ensureFloatLayer(), this.setX = f.quickSetter(this.el, "x", "px"), this.setY = f.quickSetter(this.el, "y", "px"), this.setRotation = f.quickSetter(this.el, "rotation", "deg");
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
  lastModeSamplePoint = { x: Number.NaN, y: Number.NaN };
  modeWatchFrame = 0;
  modeSyncFrame = 0;
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
  isPayloadDragging() {
    return this.payloadDragActive;
  }
  beginMimicControl() {
    this.stopIdleFloat(!0), this.modeOverride = "default", this.setMode("default"), this.el.dataset.cursorMimicking = "true", f.killTweensOf(this.el), f.set(this.el, { autoAlpha: 1, scale: 1 });
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
    const a = t.label ?? `move-${this.moveIndex}`, i = t.mode ?? "default", n = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, o = this.resolver.resolve(e, n), s = { ...this.plannedPosition }, l = t.ease ?? "power2.inOut", c = sa(s, o, {
      seed: n,
      intent: t.intent,
      speed: t.speed,
      curve: t.curve,
      durationScale: t.durationScale,
      overshoot: t.overshoot,
      settle: t.settle,
      reducedMotion: this.options.reducedMotion
    }), d = f.timeline();
    let u = null;
    return this.moveIndex += 1, this.plannedPosition = { ...o }, d.call(() => {
      this.stopIdleFloat(), this.resetRotation(), i !== "drag" && this.clearPayloadDragState();
    }, void 0, 0), d.set(this.el, { autoAlpha: 1 }, 0), d.call(() => {
      this.modeOverride = i === "drag" ? "drag" : null, this.modeOverride ? this.setMode(this.modeOverride) : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0), d.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const h = this.resolver.resolve(e, n);
          return u = sa(this.currentPosition, h, {
            seed: n,
            intent: t.intent,
            speed: t.speed,
            curve: t.curve,
            durationScale: t.durationScale,
            overshoot: t.overshoot,
            settle: t.settle,
            reducedMotion: this.options.reducedMotion
          }), this.plannedPosition = { ...h }, u;
        },
        c.duration,
        l
      )
    ), c.settle && d.add(
      this.pathTweenFromFactory(
        () => u?.settle ?? {
          start: this.currentPosition,
          c1: this.currentPosition,
          c2: this.currentPosition,
          end: this.currentPosition,
          duration: 0.01
        },
        c.settle.duration,
        "power2.out"
      )
    ), t.preserveMode || d.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), d;
  }
  parkForChatHistory() {
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, i = this.resolveHistoryParkPoint(), n = sa(a, i, {
      seed: t,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    }), o = f.timeline();
    return this.moveIndex += 1, this.plannedPosition = { ...i }, o.call(() => {
      this.stopIdleFloat(!0), f.killTweensOf([this.el, this.floatLayer]), this.resetRotation(!0), this.clearPayloadDragState(), this.modeOverride = "default", this.setMode("default");
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
    const a = t.label ?? `scan-${this.moveIndex}`, i = f.timeline();
    return this.moveIndex += 1, this.options.reducedMotion ? i.to({}, { duration: 0.08 }) : (i.call(() => {
      this.stopIdleFloat(), this.clearPayloadDragState(), this.modeOverride = "default", this.setMode("default");
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
    const t = f.timeline();
    return t.call(() => {
      this.stopIdleFloat(), this.clearPayloadDragState();
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
    this.payloadDragActive = !0, this.stopIdleFloat(), this.modeOverride = "drag", this.setMode("drag"), !e && f.to(this.el, {
      scale: 0.9,
      duration: this.options.reducedMotion ? 0.04 : 0.16,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  releaseDragPayload() {
    return f.timeline().call(() => {
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
    const a = f.timeline();
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
    this.targetObserver?.disconnect(), this.stopModeWatch(), this.stopScheduledModeSync(), this.stopIdleFloat(), this.el.remove();
  }
  resetInteraction() {
    this.stopIdleFloat(!0), this.modeOverride = null, this.clearPayloadDragState(), delete this.el.dataset.cursorMimicking, f.killTweensOf(this.el), f.set(this.el, { scale: 1 }), this.resetRotation(!0), this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
  }
  clearTransientInteraction() {
    this.clearPayloadDragState(), this.modeOverride = null, f.killTweensOf(this.el, "scale"), f.set(this.el, { scale: 1 }), this.syncModeToPoint(this.currentPosition);
  }
  clearPayloadDragState() {
    this.payloadDragActive = !1;
  }
  pathTween(e, t, a, i, n, o = "power2.inOut") {
    const s = { t: 0 };
    return f.fromTo(
      s,
      { t: 0 },
      {
        t: 1,
        duration: n,
        ease: o,
        onUpdate: () => {
          const l = Cn(e, t, a, i, s.t);
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
    return f.fromTo(
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
          const o = Cn(n.start, n.c1, n.c2, n.end, i.t);
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
    const t = this.resolveHistoryParkPoint(), a = sa(this.currentPosition, t, {
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
    const a = Bt(
      t.height * la.topRatio,
      la.minTopInset,
      la.maxTopInset
    );
    return {
      x: t.right - e.left + la.outsideOffset,
      y: t.top - e.top + a
    };
  }
  pointTweenFromFactory(e, t, a = "power2.inOut") {
    const i = { t: 0 };
    let n = { ...this.currentPosition }, o = { ...this.currentPosition };
    return f.fromTo(i, { t: 0 }, {
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
      c1: En(i, n, 0.64),
      c2: En(n, o, 0.42),
      end: o
    };
  }
  resolveScanPoint(e, t, a, i = "first") {
    const n = typeof e == "string" ? this.findVisibleScanElement(e, i) : e;
    if (!n) return this.currentPosition;
    this.resolver.refresh();
    const o = this.seededScanRandom(t), s = this.root.getBoundingClientRect(), l = n.getBoundingClientRect(), c = this.getChatShellRect(), d = c ? Math.max(l.left, c.left + 18) : l.left, u = c ? Math.min(l.right, c.right - 18) : l.right, h = c ? Math.max(l.top, c.top + 58) : l.top, g = c ? Math.min(l.bottom, c.bottom - 34) : l.bottom, m = Math.max(1, u - d), p = Math.max(1, g - h), w = a === "start" ? 0.16 + o() * 0.08 : 0.76 + o() * 0.12, y = 0.34 + o() * 0.32;
    return {
      x: d - s.left + m * w,
      y: h - s.top + p * y
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
    const n = Math.atan2(i, a) * 180 / Math.PI, o = Jl(n - jl), s = this.rotationState + Zl(this.rotationState, o) * Kl;
    this.renderRotation(s);
  }
  resetRotation(e = !1) {
    if (f.killTweensOf(this.el, "rotation"), e || this.options.reducedMotion) {
      this.renderRotation(0);
      return;
    }
    f.to(this.el, {
      rotation: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        this.rotationState = Number(f.getProperty(this.el, "rotation")) || 0;
      },
      onComplete: () => {
        this.rotationState = 0;
      }
    });
  }
  renderRotation(e) {
    Math.abs(e - this.rotationState) < 0.1 || (this.rotationState = e, this.setRotation(e));
  }
  queueIdleFloat(e = ai.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = f.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    f.killTweensOf(this.floatLayer);
    const e = f.timeline({ repeat: -1 });
    for (const t of ai.segments)
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
      f.set(this.floatLayer, { x: 0, y: 0, rotation: 0 });
      return;
    }
    f.to(this.floatLayer, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: ai.returnDuration,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  maybeSyncModeToPoint(e) {
    const t = performance.now(), a = e.x - this.lastModeSyncPoint.x, i = e.y - this.lastModeSyncPoint.y, n = Number.isNaN(this.lastModeSamplePoint.x) ? 0 : e.x - this.lastModeSamplePoint.x, o = Number.isNaN(this.lastModeSamplePoint.y) ? 0 : e.y - this.lastModeSamplePoint.y, s = Number.isNaN(a) || a * a + i * i >= qt.minDistance * qt.minDistance;
    this.lastModeSamplePoint = { ...e }, !(!s && t - this.lastModeSyncAt < qt.minInterval) && (this.lastModeSyncAt = t, this.lastModeSyncPoint = { ...e }, this.syncModeToPoint(e, { x: n, y: o }));
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
  scheduleModeSync() {
    this.modeSyncFrame || (this.modeSyncFrame = window.requestAnimationFrame(() => {
      this.modeSyncFrame = 0, this.modeOverride || this.syncModeToPoint(this.currentPosition);
    }));
  }
  stopScheduledModeSync() {
    this.modeSyncFrame && (window.cancelAnimationFrame(this.modeSyncFrame), this.modeSyncFrame = 0);
  }
  syncModeToPoint(e, t = { x: 0, y: 0 }) {
    if (this.payloadDragActive) {
      this.modeOverride = "drag", this.mode !== "drag" && this.setMode("drag");
      return;
    }
    const a = this.getModeForPoint(e, t);
    a !== this.mode && this.setMode(a);
  }
  getModeForPoint(e, t = { x: 0, y: 0 }) {
    const a = this.getModeForExactPoint(e);
    if (a !== "default") return a;
    const i = Math.hypot(t.x, t.y);
    return i <= 0.25 ? "default" : this.getModeForExactPoint({
      x: e.x + t.x / i * qt.lookahead,
      y: e.y + t.y / i * qt.lookahead
    });
  }
  getModeForExactPoint(e) {
    const t = this.root.getBoundingClientRect(), a = {
      x: t.left + e.x,
      y: t.top + e.y
    }, i = a.x >= 0 && a.x <= window.innerWidth && a.y >= 0 && a.y <= window.innerHeight ? document.elementFromPoint(a.x, a.y) : null, n = this.getModeForElement(i);
    return n !== "default" ? n : this.getModeForLocalPoint(e, t);
  }
  getModeForElement(e) {
    return e ? e.closest(ei) ? "pointer" : e.closest(ti) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t, ei) ? "pointer" : this.findLocalHit(this.textTargets, e, t, ti) ? "text" : "default";
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
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(ei)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(ti)).reverse(), this.modeTargetsDirty = !1);
  }
  observeModeTargets() {
    "MutationObserver" in window && (this.targetObserver = new MutationObserver(() => {
      this.modeTargetsDirty = !0, this.scheduleModeSync();
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
    return a.className = "wa-cursor__glyph", a.append(Tn()), t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph"), t.querySelector(".wa-cursor__mimic-head") || t.append(Tn());
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function Tn() {
  const r = document.createDocumentFragment(), e = document.createElement("span"), t = document.createElement("span");
  return e.className = "wa-cursor__mimic-tail", t.className = "wa-cursor__mimic-head", e.setAttribute("aria-hidden", "true"), t.setAttribute("aria-hidden", "true"), r.append(e, t), r;
}
function En(r, e, t) {
  return {
    x: r.x + (e.x - r.x) * t,
    y: r.y + (e.y - r.y) * t
  };
}
function Jl(r) {
  return (r % 360 + 360) % 360;
}
function Zl(r, e) {
  return (e - r + 540) % 360 - 180;
}
const Mn = /* @__PURE__ */ new Set();
function Pn(r, e) {
  r.length && (Rn(r[e]), Rn(r[(e + 1) % r.length]));
}
function Rn(r) {
  if (r?.assetUrls?.length)
    for (const e of r.assetUrls) tc(e);
}
function Ft(r) {
  const e = /* @__PURE__ */ new Set(), t = (a) => $l(e, a.values);
  return r.rows.forEach(t), r.pagination?.pages.forEach((a) => a.rows.forEach(t)), [...e];
}
function Jr(r) {
  return r.sources.map((e) => e.logoSrc).filter(Zt);
}
function Zr(r) {
  return r.leads.map((e) => Da(e.name, e.avatarUrl)).filter(Zt);
}
function $r(r) {
  return r.sequences.map((e) => Da(e.name, e.avatarUrl)).filter(Zt);
}
function $l(r, e) {
  for (const t of ["avatarUrl", "mutualConnectionAvatarUrl"])
    Zt(e[t]) && r.add(e[t]);
  for (const t of ["name", "contact", "prospect", "fullName", "mutualConnection", "connector"]) {
    const a = e[t];
    if (!a || !ec(t, e)) continue;
    const i = t === "mutualConnection" || t === "connector" ? e.mutualConnectionAvatarUrl : e.avatarUrl, n = Da(a, i);
    Zt(n) && r.add(n);
  }
}
function ec(r, e) {
  return r === "mutualConnection" || r === "connector" ? !0 : !!(e.avatarUrl || e.avatar || e.avatarTone || e.source || e.personDetail || e.prospectDetail);
}
function tc(r) {
  if (typeof document > "u" || typeof Image > "u") return;
  const e = ic(r);
  if (!e || Mn.has(e)) return;
  Mn.add(e), ac(e);
  const t = new Image();
  t.decoding = "async", t.loading = "eager", t.src = e, t.decode?.().catch(() => {
  });
}
function ac(r) {
  if (Array.from(document.head.querySelectorAll('link[rel="preload"][as="image"]')).some((a) => a.href === r)) return;
  const t = document.createElement("link");
  t.rel = "preload", t.as = "image", t.href = r, document.head.append(t);
}
function ic(r) {
  try {
    return new URL(r, document.baseURI).href;
  } catch {
    return null;
  }
}
function Zt(r) {
  return typeof r == "string" && r.trim().length > 0;
}
const E = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26,
  fileGrab: 0.18
};
function ii(r) {
  return typeof r == "number" ? { x: r, y: 0 } : r;
}
function B(r, e, t = {}, a = !0) {
  return {
    desktop: { target: r, anchor: e, offset: ii(t.desktop), humanOffset: a },
    tablet: { target: r, anchor: e, offset: ii(t.tablet), humanOffset: a },
    mobile: { target: r, anchor: e, offset: ii(t.mobile), humanOffset: a }
  };
}
const ka = {
  hitGroundRunning: B("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: B("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: B("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: B("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: B("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, eo = B("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), to = B("[data-signup-submit]", "center"), nc = B("[data-send-button]", "center"), Ui = {
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
}, rc = 2.8, oc = 42, sc = 2, lc = 3, Ca = "[data-chat-shell] [data-chat-thread]", cc = `${Ca} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, dc = `${Ca} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${Ca} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, xi = 0.24, ao = 0.3, ze = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function Je(r = ze.right, e) {
  return {
    kind: "cursorMove",
    target: r,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function io(r) {
  const e = B(
    `[data-mailbox-connect="${xe(r.id)}"]`,
    "center",
    {
      desktop: { x: 2, y: 0 },
      tablet: { x: 1, y: 0 },
      mobile: { x: 0, y: 0 }
    },
    !1
  );
  return [
    { kind: "status", text: "connect mailbox" },
    {
      kind: "custom",
      build: (t) => t.chat.mailboxConnection(r),
      at: "+=0.04"
    },
    ...ro([
      {
        selector: `[data-mailbox-connection="${xe(r.id)}"]`,
        label: `mailbox-cta-skim-${r.id}`,
        scanDuration: 0.68,
        at: "+=0.16"
      }
    ]),
    {
      kind: "cursorMove",
      target: e,
      options: {
        mode: "pointer",
        intent: "hover",
        speed: "normal",
        overshoot: !1,
        settle: !0,
        label: `mailbox-connect-${r.id}`
      },
      at: "+=0.08"
    },
    { kind: "cursorClick", at: "-=0.02" },
    {
      kind: "custom",
      build: (t) => t.chat.connectMailbox(r.id),
      at: "<+=0.08"
    }
  ];
}
function no(r) {
  const e = ut(`[data-style-profile="${xe(r)}"]`), t = Ta(r);
  return ro([
    {
      selector: `${e} .wa-style-profile__row:nth-of-type(1)`,
      label: `${t}-top-row`,
      scanDuration: 0.58,
      at: "+=0.08"
    },
    {
      selector: `${e} .wa-style-profile__row:nth-of-type(3)`,
      label: `${t}-middle-row`,
      scanDuration: 0.58,
      scrollBeforeScan: !0,
      scrollDuration: 0.56,
      at: "+=0.04"
    },
    {
      selector: `${e} .wa-style-profile__examples`,
      scanSelector: `${e} .wa-style-profile__example:nth-of-type(1)`,
      label: `${t}-examples-section`,
      scanLabel: `${t}-examples`,
      scanDuration: 0.66,
      scrollBeforeScan: !0,
      scrollDuration: 0.56,
      at: "+=0.04"
    }
  ]);
}
function ro(r) {
  return r.flatMap((e) => {
    const t = [];
    return e.scrollBeforeScan && t.push({
      kind: "custom",
      build: (a) => a.chat.scrollChatElementIntoView(e.selector, {
        align: e.scrollAlign,
        duration: e.scrollDuration,
        offset: e.scrollOffset
      }),
      at: e.at
    }), t.push({
      kind: "custom",
      build: (a) => a.cursor.scanAcross(e.scanSelector ?? e.selector, {
        duration: e.scanDuration,
        label: e.scanLabel ?? e.label,
        match: e.scanMatch
      }),
      at: e.scrollBeforeScan ? "+=0.02" : e.at
    }), t;
  });
}
function oo(r, e = E.beat + 0.18, t, a = {}) {
  return {
    kind: "custom",
    build: (i) => {
      const n = aa(i);
      return n.call(() => i.chat.scrollDataTableFooterIntoView(r, e, a)), n.to({}, { duration: e }), a.settleDelay && (n.to({}, { duration: a.settleDelay }), n.call(() => i.chat.scrollDataTableFooterIntoView(r, e, a)), n.to({}, { duration: e })), ia(n);
    },
    at: t
  };
}
function De(r, e) {
  const t = aa(r), a = bc();
  for (const [i, n] of e.entries())
    uc(t, r, n, i, a);
  return ia(t);
}
function uc(r, e, t, a, i) {
  switch (t.kind) {
    case "prompt":
      r.add(xc(e, t), t.at);
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
      r.add(e.chat.assistantMessage(t.text), t.at), wc(r, e, i, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: cc,
        label: `assistant-${Ta(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking": {
      const n = hc(t), o = n.items.map((s) => s.label);
      t.statusBefore && r.add(e.chat.setStatus(t.statusBefore), t.at), r.add(e.chat.thinkingState(n, t.hold), t.statusBefore ? void 0 : t.at), fc(r, e, i, t.hold, o.length, o.join("|"), a);
      return;
    }
    case "dataTable":
      Lt(
        r,
        e,
        e.chat.dataTable(t.config),
        t.at,
        ut(`[data-data-table="${xe(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      Lt(
        r,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        ut(`[data-enrichment-panel="${xe(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      {
        const n = ut(`[data-strategy-plans~="${xe(t.plans[0]?.id ?? "strategy")}"]`);
        r.add(e.chat.strategyPlans(t.plans), t.at), r.add(mc(e, n, t.plans), "+=0.06");
      }
      return;
    case "dataSourcesGrid":
      Lt(
        r,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        ut(`[data-data-sources-grid="${xe(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      Lt(
        r,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${xe(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "personalizationSwipeGame":
      pc(r, e, t.config, t.at);
      return;
    case "sequenceEngagement":
      Lt(
        r,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        ut(`[data-sequence-engagement="${xe(t.config.id)}"]`),
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
function hc(r) {
  return "thinking" in r && r.thinking ? r.thinking : Array.isArray(r.steps) ? { items: r.steps.map(Dn) } : { items: [Dn(r.label ?? "")] };
}
function Dn(r) {
  return typeof r == "string" ? { label: r } : r;
}
function Lt(r, e, t, a, i, n) {
  r.add(t, a), r.add(gc(e, i, n), "+=0.06");
}
function pc(r, e, t, a) {
  const i = ut(
    `[data-personalization-swipe-game="${xe(t.id)}"]`
  );
  r.add(e.chat.personalizationSwipeGame(t), a), t.signals.forEach((n, o) => {
    const s = `${i} [data-swipe-card="${xe(n.id)}"]`, l = n.decision === "use" ? 1 : -1, c = n.decision === "use" ? "right" : "left", d = B(s, c, {
      desktop: { x: l * 154, y: o % 2 === 0 ? -18 : 16 },
      tablet: { x: l * 132, y: o % 2 === 0 ? -14 : 14 },
      mobile: { x: l * 86, y: o % 2 === 0 ? -10 : 10 }
    }, !1);
    r.add(
      e.cursor.moveTo(B(s, "center", {}, !1), {
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
    e.cursor.moveTo(Ui, {
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
function gc(r, e, t) {
  const a = aa(r).add(r.cursor.scanAcross(e, { label: t }));
  return ia(a);
}
function mc(r, e, t) {
  const a = aa(r);
  return t.forEach((i, n) => {
    const o = `${e} [data-strategy-plan="${xe(i.id)}"]`;
    a.add(
      r.cursor.scanAcross(o, {
        duration: n === 0 ? 0.42 : 0.34,
        label: `strategy-card-${i.id}`
      }),
      n === 0 ? 0 : "+=0.03"
    ), a.add(r.chat.strategyPlanHover(o, !0), "<+=0.08"), a.add(r.chat.strategyPlanHover(o, !1), "-=0.04");
  }), ia(a);
}
function fc(r, e, t, a = E.thinkingShort, i = 1, n = "thinking", o = 0) {
  const s = a * Math.max(1, i), l = i >= 3 && so(e, t, {
    kind: "thinking",
    key: n,
    text: n,
    stepIndex: o,
    minChars: 16
  });
  l && r.add(
    e.cursor.scanAcross(dc, {
      label: `thinking-skim-${Ta(n)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(s < rc) && r.add(
    e.cursor.moveTo(Ui, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${Ta(n)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function wc(r, e, t, a) {
  so(e, t, a) && r.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function bc() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function so(r, e, t) {
  const a = t.text.trim(), i = t.minChars ?? oc;
  if (a.length < i || e.textSkimCount >= lc) return !1;
  const n = e.textCandidateCount;
  e.textCandidateCount += 1;
  const o = e.textSkimCount === 0, s = t.stepIndex - e.lastTextSkimStep >= sc, l = yc(`${r.story.id}:${t.kind}:${n}:${t.key}`), c = n > 0 && n % 3 === 0, d = o || s && (l >= 0.58 || c);
  return d && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), d;
}
function yc(r) {
  let e = 2166136261;
  for (let a = 0; a < r.length; a += 1)
    e ^= r.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function xe(r) {
  return r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function ut(r) {
  return `${Ca} ${r}`;
}
function Ta(r) {
  return r.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function xc(r, e) {
  const t = aa(r);
  return e.statusBefore && t.add(r.chat.setStatus(e.statusBefore)), t.add(r.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    r.cursor.moveTo(e.focusTarget ?? r.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(r.cursor.click("text"), "-=0.02").add(r.chat.setComposerFocus(!0), "-=0.14").add(r.chat.typeComposer(e.text, e.duration ?? E.typeMedium)).add(
    r.cursor.moveTo(nc, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(r.cursor.click()).add(r.chat.setComposerFocus(!1), "-=0.08").add(r.chat.sendComposerText(), "-=0.06").add(r.chat.userMessage(e.text), "-=0.12").add(r.chat.hideComposer(), "<").add(r.chat.clearComposer()).add(
    r.cursor.moveTo(Ui, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(r.chat.setStatus(e.statusAfter), "<"), ia(t);
}
function aa(r) {
  const e = r.timeline();
  return e.pause(0), e;
}
function ia(r) {
  return r.paused(!1), r;
}
const _c = {
  desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 420, y: -74 }, humanOffset: !1 },
  tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 360, y: -58 }, humanOffset: !1 },
  mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 280, y: -42 }, humanOffset: !1 }
};
function vc(r, e) {
  const t = new Map(r.map((a) => [a.id, a]));
  return e.map((a) => {
    const i = t.get(a.id);
    return i ? Ac(i, a) : a;
  });
}
function Ac(r, e) {
  return {
    ...e,
    label: r.label,
    navLabel: r.label,
    navDescription: r.summary || e.navDescription,
    summary: r.summary || e.summary,
    assetUrls: Sc(r),
    entry: kc(r.id, e),
    entryLeadTime: Cc(r.id, e),
    prepare: r.id === "hit-ground-running" ? (t) => t.chat.prepareSignup() : e.prepare,
    build: (t) => Tc(t, r, e)
  };
}
function Sc(r) {
  const e = /* @__PURE__ */ new Set();
  for (const t of r.steps) {
    if (t.kind !== "component" || !t.component) continue;
    const a = t.component;
    a.kind === "table" && Ft($t(a, `${r.id}-${t.id}`)).forEach((i) => e.add(i)), a.kind === "dataSources" && Jr(po(a)).forEach((i) => e.add(i)), a.kind === "proximityList" && Zr(wo(a)).forEach((i) => e.add(i)), a.kind === "sequenceEngagement" && $r(Hi(a, `${r.id}-${t.id}`)).forEach((i) => e.add(i));
  }
  return [...e];
}
function kc(r, e) {
  return r === "hit-ground-running" ? eo : r === "data-marketplace" ? ka.dataMarketplace : r === "research-brief" ? ka.researchBrief : e.entry;
}
function Cc(r, e) {
  return r === "hit-ground-running" ? ao : r === "data-marketplace" || r === "research-brief" ? xi : e.entryLeadTime;
}
function Tc(r, e, t) {
  if (e.id === "hit-ground-running") return Ec(r, e);
  if (e.id === "crm-update") return Mc(r, e);
  if (e.id === "research-brief") return Pc(r, e);
  if (e.id === "csv-import-cleanup") return Rc(r, e);
  const a = Lc(e);
  return a.length ? De(r, [...a, Je(ze.bottomRight, "+=0.18")]) : t.build(r);
}
function Ec(r, e) {
  const t = Ue(e, "status"), a = Ue(e, "user"), i = Ue(e, "thinking"), n = Ue(e, "assistant"), o = ea(e, "strategyCards");
  return De(r, [
    { kind: "status", text: t?.text || "Sign up" },
    { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
    { kind: "typeSignupEmail", email: a?.text || "joel@vercel.com", duration: E.typeShort },
    {
      kind: "cursorMove",
      target: to,
      options: { mode: "pointer", intent: "click", speed: "quick", label: "signup-submit" },
      at: "-=0.04"
    },
    { kind: "cursorClick", nextMode: "default", at: "-=0.03" },
    { kind: "custom", build: () => r.chat.submitSignup(), at: "<" },
    { kind: "status", text: "Building workspace", at: "-=0.08" },
    { kind: "custom", build: () => r.chat.transferSignupLogoToNextThinking(), at: "<" },
    { kind: "transitionSignupToChat", at: `+=${E.beat}` },
    ...i ? [{ kind: "status", text: i.text || "Researching", at: "<" }] : [],
    ...i ? [Ia(i, { hold: 0.46, at: "<" })] : [],
    ...n ? [{ kind: "assistant", text: n.text }] : [],
    ...o ? [{ kind: "status", text: "Game plans ready", at: "<" }] : [],
    ...o ? [{ kind: "strategyPlans", plans: ho(o.component), at: "-=0.08" }] : [],
    Je(ze.right, "+=0.18")
  ]);
}
function Mc(r, e) {
  const t = ea(e, "mailboxConnection"), a = ea(e, "uploadedFiles"), i = [];
  if (t && fo(i, mo(t.component)), a) {
    const n = go(a.component), o = r.chat.prepareCsvDropArea({
      title: a.component.title,
      detail: n.map((d) => d.name).join(", ")
    }), s = n.length > 1 ? `${n.length} context files` : n[0]?.name ?? a.text, l = r.chat.prepareCursorFile(s, r.cursor, n[0]?.type ?? "DOC", n), c = B("[data-chat-shell]", "center", {
      desktop: { x: 0, y: 74 },
      tablet: { x: 0, y: 64 },
      mobile: { x: 0, y: 56 }
    });
    i.push(
      { kind: "status", text: "waiting for context" },
      {
        kind: "cursorMove",
        target: _c,
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
      { kind: "custom", build: () => l.startFollow() },
      { kind: "custom", build: () => o.revealWhenCursorEnters(r.cursor), at: "<" },
      {
        kind: "cursorMove",
        target: c,
        options: {
          mode: "drag",
          intent: "drag",
          speed: "slow",
          ease: "power1.out",
          overshoot: !1,
          settle: !0,
          preserveMode: !0,
          label: "drag-context-files"
        },
        at: "<"
      },
      { kind: "custom", build: () => o.activate(), at: "<+=0.02" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat }) },
      { kind: "custom", build: () => o.complete() },
      { kind: "custom", build: () => l.landAsUploadedFiles(n), at: "<" }
    );
  }
  for (const n of e.steps)
    n === t || n === a || lo(i, e.id, n);
  return i.push(Je(ze.bottomRight, "+=0.16")), De(r, i);
}
function Pc(r, e) {
  const t = Ue(e, "user"), a = ea(e, "table"), i = Ue(e, "thinking"), n = ea(e, "sequenceEngagement"), o = a ? $t(a.component, "website-visitors-sales") : null, s = n ? Hi(n.component, "visitor-outreach-sequences") : null, l = [];
  if (o && (o.scrollAlign = "equal-inset"), t && l.push({
    kind: "prompt",
    text: t.text,
    duration: bo(t.text),
    sendLabel: "send-visitor-sales-list",
    statusBefore: "finding visitors",
    statusAfter: "building visitor list",
    fromEntry: !0
  }), o && l.push(
    { kind: "dataTable", config: o, at: "-=0.02" },
    oo("website-visitors-sales", E.beat + 0.42, "+=0.08", {
      align: "top",
      offset: -190,
      settleDelay: 0.32
    }),
    {
      kind: "custom",
      build: () => r.chat.scrollToLiveTimeline(E.beat + 0.42),
      at: "+=0.08"
    }
  ), o?.pagination && o.pagination.pages.length > 1) {
    const c = B(
      '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
      "center"
    ), d = B(
      '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
      "center",
      { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
      !1
    ), u = B(
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
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.58 }) },
      {
        kind: "cursorMove",
        target: d,
        options: {
          mode: "pointer",
          intent: "hover",
          speed: "slow",
          durationScale: 1.45,
          label: "hover-power-dialer"
        },
        at: "+=0.42"
      },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 2 }), at: "+=0.12" },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
      {
        kind: "cursorMove",
        target: u,
        options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
      },
      { kind: "cursorClick", at: "+=0.18" },
      { kind: "status", text: "building outreach sequence", at: "<" }
    );
  }
  if (i && l.push(Ia(i, { hold: E.thinkingMedium, at: "+=0.06" })), s) {
    const [c, d] = jr(s, 2), u = B(
      `[data-sequence-person-card="visitor-outreach-sequences:${c}"]`,
      "center"
    ), h = B(
      `[data-sequence-person-card="visitor-outreach-sequences:${d}"]`,
      "center"
    ), g = B(
      '[data-sequence-kickoff="visitor-outreach-sequences"]',
      "center"
    );
    l.push(
      { kind: "sequenceEngagement", config: s, at: "-=0.02" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: u,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-second-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", c), at: "-=0.03" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: h,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-third-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", d), at: "-=0.03" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.28 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: g,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
      { kind: "status", text: "sequence kicked off", at: "<" }
    );
  }
  return De(r, l);
}
function Rc(r, e) {
  const t = Ue(e, "file"), a = Ue(e, "thinking"), i = Ue(e, "assistant"), n = e.steps.filter(
    (m) => m.kind === "component" && m.component?.kind === "table"
  ), o = a ? e.steps.indexOf(a) : -1, s = n.find((m) => o >= 0 && e.steps.indexOf(m) < o), l = [...n].reverse().find((m) => m !== s), c = t?.text || "may_webinar_attendees.csv", d = Dc(t, s?.component ?? l?.component), u = r.chat.prepareCsvDropArea(), h = r.chat.prepareCursorFile(c, r.cursor), g = B("[data-chat-shell]", "center", {
    desktop: { x: 0, y: 82 },
    tablet: { x: 0, y: 72 },
    mobile: { x: 0, y: 64 }
  });
  return De(r, [
    { kind: "status", text: "waiting for CSV" },
    { kind: "custom", build: () => h.startFollow(), at: `+=${E.fileGrab}` },
    { kind: "custom", build: () => u.revealWhenCursorEnters(r.cursor), at: "<" },
    {
      kind: "cursorMove",
      target: g,
      options: {
        mode: "drag",
        intent: "drag",
        speed: "slow",
        ease: "power1.out",
        overshoot: !1,
        settle: !0,
        preserveMode: !0,
        label: "drag-webinar-csv"
      },
      at: "<"
    },
    { kind: "custom", build: () => u.activate(), at: "<+=0.02" },
    { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat }) },
    { kind: "custom", build: () => u.complete() },
    { kind: "custom", build: () => h.landAsUploadedFile(c, d), at: "<" },
    ...s ? [{ kind: "dataTable", config: $t(s.component, "raw-webinar-attendees"), at: "+=0.08" }] : [],
    { kind: "status", text: "Cleaning CSV", at: "<" },
    ...a ? [Ia(a, { hold: 0.34, at: `+=${E.beat}` })] : [],
    ...i ? [{ kind: "assistant", text: i.text }] : [],
    ...l ? [{ kind: "dataTable", config: Uc($t(l.component, "cleaned-webinar-attendees")), at: "-=0.04" }] : [],
    Je(ze.bottomRight, "+=0.18")
  ]);
}
function Dc(r, e) {
  const t = Ic(e);
  if (t) return t;
  const a = r?.note?.trim();
  return !a || qc(a) ? "CSV uploaded" : a;
}
function Ic(r) {
  if (!r || r.kind !== "table") return null;
  const e = r.count?.trim();
  if (e) return e;
  const t = r.rows.length;
  return t <= 0 ? null : `${t} ${t === 1 ? "record" : "records"}`;
}
function qc(r) {
  return /user-side message|after release|drop overlay|appears as/i.test(r);
}
function Lc(r) {
  const e = [], t = r.id === "data-marketplace" ? Nc(r.steps) : r.steps;
  let a = 0;
  for (const i of t)
    a += i.kind === "user" ? 1 : 0, lo(e, r.id, i, a === 1);
  return e;
}
function Nc(r) {
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
    e.push(i.length > 1 ? Oc(i) : a);
  }
  return e;
}
function Oc(r) {
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
      elapsed: Ra(a.length),
      items: a
    }
  };
}
function lo(r, e, t, a = !1) {
  if (t.kind === "status" && t.text) {
    r.push({ kind: "status", text: t.text });
    return;
  }
  if (t.kind === "user" && t.text) {
    r.push({
      kind: "prompt",
      text: t.text,
      duration: bo(t.text),
      sendLabel: `send-${ne(e)}-${r.length}`,
      fromEntry: a,
      statusAfter: t.note || void 0,
      at: a ? void 0 : `+=${E.beat}`
    });
    return;
  }
  if (t.kind === "assistant" && t.text) {
    r.push({ kind: "assistant", text: t.text, at: "+=0.08" });
    return;
  }
  if (t.kind === "thinking") {
    r.push(Ia(t, { hold: E.thinkingMedium }));
    return;
  }
  if (t.kind === "file" && t.text) {
    r.push({ kind: "custom", build: (i) => i.chat.uploadedFileMessage(t.text, t.note || "uploaded") });
    return;
  }
  t.kind !== "component" || !t.component || Bc(r, e, t);
}
function Bc(r, e, t) {
  const a = t.component;
  if (a.kind === "table") {
    const i = $t(a, `${e}-${t.id}`);
    e === "data-marketplace" && Hc(i), Qc(e, t, i) && (i.scrollAlign = "equal-inset"), r.push({ kind: "dataTable", config: i, at: "-=0.04" });
    return;
  }
  if (a.kind === "strategyCards") {
    r.push({ kind: "strategyPlans", plans: ho(a), at: "-=0.04" });
    return;
  }
  if (a.kind === "enrichment") {
    r.push({ kind: "enrichmentPanel", config: id(a), at: "+=0.12" });
    return;
  }
  if (a.kind === "dataSources") {
    const i = po(a);
    r.push({
      kind: e === "data-marketplace" ? "marketingDataSourcesGrid" : "dataSourcesGrid",
      config: i,
      at: e === "data-marketplace" ? "+=1.44" : "-=0.04"
    });
    return;
  }
  if (a.kind === "uploadedFiles") {
    r.push({ kind: "custom", build: (i) => i.chat.uploadedFilesMessage(go(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "mailboxConnection") {
    fo(r, mo(a));
    return;
  }
  if (a.kind === "styleProfile") {
    const i = nd(a);
    r.push({
      kind: "custom",
      build: (n) => n.chat.outreachStyleProfile(i, { scrollAlign: "equal-inset" }),
      at: "-=0.02"
    }), e === "crm-update" && r.push(...no(i.id));
    return;
  }
  if (a.kind === "proximityList") {
    r.push({ kind: "custom", build: (i) => i.chat.proximityLeadList(wo(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "personalizationSwipeGame") {
    r.push({ kind: "personalizationSwipeGame", config: rd(a), at: "+=0.06" });
    return;
  }
  if (a.kind === "sequenceEngagement") {
    r.push({ kind: "sequenceEngagement", config: Hi(a, `${e}-${t.id}`), at: "-=0.02" });
    return;
  }
  r.push({ kind: "assistant", text: [a.title, ...a.items].filter(Boolean).join(`
`) });
}
function Ia(r, e = {}) {
  return {
    kind: "thinking",
    thinking: Fc(r.thinking, r.text, r.note),
    hold: e.hold,
    at: e.at
  };
}
function Fc(r, e, t) {
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
const zc = {
  "dev singh": { title: "RevOps Lead @ Brex", company: "Brex" },
  "evan brooks": { title: "Growth Lead @ PayPal", company: "PayPal" },
  "jenna park": { title: "VP Marketing @ Square", company: "Square" },
  "marco liu": { title: "Partner @ Sequoia", company: "Sequoia" },
  "noah singh": { title: "Head of Sales @ Adyen", company: "Adyen" },
  "owen lee": { title: "Principal @ Sequoia", company: "Sequoia" },
  "priya shah": { title: "VP Sales @ Plaid", company: "Plaid" },
  "rachel cho": { title: "Head of Sales @ Stripe", company: "Stripe" },
  "sam hollis": { title: "VP Sales @ Ramp", company: "Ramp" }
};
function $t(r, e) {
  const t = jc(r, e), a = r.rows.filter((o) => o.some((s) => s.trim())).map((o, s) => $c(o, t, s)), i = r.pagination?.pageSize ?? Wc(r.pagination?.ranges) ?? Math.min(10, a.length || 10), n = r.pagination?.ranges.map((o, s) => ({
    page: s + 1,
    range: o,
    rows: Yc(a, o, s, i)
  })).filter((o) => o.rows.length) ?? [];
  return {
    id: e === "website-visitors-sales" ? e : ne(r.title || e),
    title: r.title,
    eyebrow: r.eyebrow,
    count: r.count,
    variant: t.variant ?? od(r),
    footerClearance: Zc(e),
    columns: t.columns,
    rows: n[0]?.rows ?? a,
    actions: r.actions?.map(ad),
    pagination: n.length > 1 ? {
      pageSize: i,
      totalRows: sd(r, a.length),
      activePage: 1,
      pages: n
    } : void 0
  };
}
function Uc(r) {
  return {
    ...r,
    scrollAnchor: "previous-message"
  };
}
function Hc(r) {
  r.rows.forEach((e) => In(e.values)), r.pagination?.pages.forEach((e) => {
    e.rows.forEach((t) => In(t.values));
  });
}
function In(r) {
  r.name && "company" in r && (r.company = "Stripe"), r.prospectDetail && (r.prospectDetail = Vc(r.prospectDetail)), r.connector && (r.connector = Gc(r.connector));
}
function Vc(r) {
  const e = r.trim();
  return e ? /(?:@|\bat\s+)[A-Z][A-Za-z0-9& .-]+(?:\s*\([^()]*\))?$/i.test(e) ? e.replace(
    /(?:@|\bat\s+)([A-Z][A-Za-z0-9& .-]+?)(\s*\([^()]*\))?$/i,
    (t, a, i = "") => `at Stripe${qn(i)}`
  ) : /,\s*[A-Z][A-Za-z0-9& .-]+(?:\s*\([^()]*\))?$/.test(e) ? e.replace(
    /,\s*([A-Z][A-Za-z0-9& .-]+?)(\s*\([^()]*\))?$/,
    (t, a, i = "") => `, Stripe${qn(i)}`
  ) : /stripe/i.test(e) ? e : `${e} at Stripe` : "";
}
function qn(r) {
  const e = r.trim();
  return e ? ` ${e}` : "";
}
function Gc(r) {
  const e = uo(r);
  return !e.name || !e.title ? r : `${e.name} (${e.title})${e.context ? ` — ${e.context}` : ""}`;
}
function Wc(r) {
  const t = r?.[0]?.match(/^\s*(\d+)\s*[-–]\s*(\d+)/);
  if (!t) return null;
  const a = Number(t[1]), n = Number(t[2]) - a + 1;
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Yc(r, e, t, a) {
  const i = e.match(/^\s*(\d+)\s*[-–]\s*(\d+)/);
  if (!i) return r.slice(t * a, (t + 1) * a);
  const n = Number(i[1]), o = Number(i[2]);
  return !Number.isFinite(n) || !Number.isFinite(o) || n <= 0 || o < n ? r.slice(t * a, (t + 1) * a) : r.slice(n - 1, o);
}
function Qc(r, e, t) {
  if (r !== "data-marketplace") return !1;
  const a = ne(t.title);
  return e.id === "data-marketplace-step-3" || e.id === "data-marketplace-step-6" || a === "new-hires-at-dev-tool-companies" || a === "raised-in-the-past-three-months" || a === "warmest-paths-into-stripe-active-in-past-90-days";
}
function jc(r, e) {
  const t = r.columns, a = t.findIndex((d) => d.trim().toLowerCase() === "name"), i = a >= 0 ? t.findIndex((d, u) => u > a && /^role\b/i.test(d.trim())) : -1, n = a >= 0 && i >= 0, o = co(e) ? t.findIndex((d) => d.trim().toLowerCase() === "title") : -1, s = n ? i : o >= 0 ? o : void 0, l = t.map((d, u) => u).filter((d) => d !== i && d !== o), c = l.map((d) => {
    const u = t[d] || `Column ${d + 1}`;
    if (n && d === a)
      return {
        key: "name",
        label: "Prospect",
        width: "minmax(220px,0.95fr)",
        cellType: "person"
      };
    if (n && /^via\s+connector\b/i.test(u.trim()))
      return {
        key: "mutualConnection",
        label: "Best connection",
        width: "minmax(0,1.3fr)",
        cellType: "mutualConnection"
      };
    const h = Xc(e, u), g = h.key ?? ne(u || `column-${d + 1}`);
    return {
      key: g,
      label: u,
      width: h.width ?? Kc(u, n),
      cellType: h.cellType ?? Jc(e, u, g),
      person: h.person
    };
  });
  return {
    columns: c,
    sourceIndexes: l,
    foldedRoleIndex: s,
    mutualConnectionKey: c.some((d) => d.key === "mutualConnection") ? "mutualConnection" : void 0,
    variant: c.some((d) => d.key === "mutualConnection") ? "connections" : void 0
  };
}
function Kc(r, e) {
  const t = r.toLowerCase();
  if (t === "email" || t === "work email") return "max-content";
  if (e)
    return t.includes("connector") || t.includes("connection") ? "minmax(170px,0.78fr)" : t.includes("email") ? "minmax(190px,0.95fr)" : t.includes("mobile") ? "minmax(150px,0.72fr)" : "minmax(130px,1fr)";
}
function Xc(r, e) {
  const t = e.trim().toLowerCase();
  if (r === "raw-webinar-attendees") {
    if (t === "name") return { width: "110px", cellType: "text" };
    if (t === "email") return { width: "250px" };
    if (t === "company") return { width: "minmax(120px,1fr)" };
  }
  if (co(r)) {
    if (t === "full name") return { key: "fullName", width: "245px", cellType: "person" };
    if (t === "work email") return { width: "215px" };
    if (t === "company") return { width: "minmax(110px,1fr)" };
  }
  return {};
}
function Jc(r, e, t) {
  const a = e.trim().toLowerCase();
  if (r !== "raw-webinar-attendees" && (t === "name" || t === "contact" || t === "fullName" || a === "name" || a === "prospect" || a === "contact" || a === "full name"))
    return "person";
}
function Zc(r) {
  return r === "website-visitors-sales" ? 88 : void 0;
}
function co(r) {
  return r === "cleaned-webinar-attendees" || r === "clean-webinar-attendees";
}
function $c(r, e, t) {
  const a = {};
  if (e.columns.forEach((i, n) => {
    a[i.key] = r[e.sourceIndexes[n]] ?? "";
  }), e.foldedRoleIndex !== void 0 && (a.prospectDetail = r[e.foldedRoleIndex] ?? ""), e.mutualConnectionKey) {
    const i = uo(a[e.mutualConnectionKey] ?? ""), n = ed(t);
    a[e.mutualConnectionKey] = i.name, a.mutualConnectionDetail = i.title, a.mutualConnectionContext = i.context, a.mutualConnectionCompany = i.company, i.name && n && (a.mutualConnectionBadge = n);
  }
  return {
    id: `${ne(r[0] || "row")}-${t + 1}`,
    values: a
  };
}
function ed(r) {
  const e = [2, 3, 7, null, 1, 12, 4, 5, null, 8, 6, 10], t = e[r % e.length];
  return t === null ? null : `+${t} more`;
}
function uo(r) {
  const [e = "", t = ""] = r.split(/\s+[—–]\s+/, 2), a = e.trim().match(/^(.+?)(?:\s*\((.+)\))?$/), i = a?.[1]?.trim() || r.trim(), n = t.trim(), o = zc[ne(i).replace(/-/g, " ")], s = td(a?.[2]?.trim() || "", o, n);
  return {
    name: i,
    title: s.title,
    context: n,
    company: s.company
  };
}
function td(r, e, t) {
  const a = Ln(t), i = a && !/^(?:Stanford GSB|Wharton)$/i.test(a);
  return r && i && /\bUnify\b/i.test(r) ? {
    title: r.replace(/\bUnify\b/g, a),
    company: a
  } : e && (!r || /\bUnify\b/i.test(r)) ? e : r ? {
    title: r,
    company: Ln(r) || a || ""
  } : {
    title: e?.title ?? (a ? `Warm intro @ ${a}` : ""),
    company: e?.company ?? a
  };
}
function Ln(r) {
  const e = r.trim();
  if (!e) return "";
  const t = e.match(/(?:@|\bat\s+|Both at |Shared investor:\s*)([A-Z][A-Za-z0-9& .-]+?)(?:\s*\(|$)/);
  return t?.[1] ? t[1].trim() : /Wharton/i.test(e) ? "Wharton" : /Stanford/i.test(e) ? "Stanford GSB" : "";
}
function ad(r) {
  const e = r.label.toLowerCase().includes("dial") ? "power-dialer" : "email-sequence";
  return {
    id: e,
    label: e === "power-dialer" ? "Power dial" : "Outreach sequence",
    icon: e === "power-dialer" ? "dialer" : "email",
    tooltip: r.tooltip.trim() || void 0,
    badge: r.badge || void 0
  };
}
function ho(r) {
  return r.cards.map((e, t) => ({
    id: ne(e.label || e.title || `strategy-${t + 1}`),
    label: e.label,
    title: e.title,
    summary: e.summary,
    bullets: e.summary.split(/\n+/).map((a) => a.trim()).filter(Boolean)
  }));
}
function id(r) {
  return {
    id: ne(r.title || "enrichment"),
    title: r.title,
    subtitle: r.subtitle,
    modeLabel: "Balanced",
    fields: r.fields
  };
}
function po(r) {
  return {
    id: ne(r.title || "data-sources"),
    title: r.title,
    subtitle: r.subtitle,
    sources: r.sources.map((e, t) => ({
      id: ne(e.name || `source-${t + 1}`),
      category: e.category,
      name: e.name,
      detail: e.detail,
      logoSrc: e.logoSrc
    }))
  };
}
function go(r) {
  return r.files.map((e) => ({
    name: e.name,
    detail: e.detail,
    type: e.type
  }));
}
function mo(r) {
  return {
    id: ne(r.title || "mailbox-connection"),
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
function fo(r, e) {
  r.push(...io(e));
}
function nd(r) {
  return {
    id: ne(r.title || "style-profile"),
    title: r.title,
    subtitle: r.subtitle,
    signals: r.signals,
    examples: r.examples
  };
}
function wo(r) {
  return {
    id: ne(r.title || "proximity-list"),
    title: r.title,
    subtitle: r.subtitle,
    leads: r.leads
  };
}
function rd(r) {
  return {
    id: ne(r.title || "personalization-swipe"),
    title: r.title,
    subtitle: r.subtitle,
    prompt: r.prompt,
    labels: { avoid: "avoid", use: "use" },
    completeLabel: "personalization rules learned",
    signals: r.signals.map((e, t) => ({
      id: ne(e.label || `signal-${t + 1}`),
      label: e.label,
      detail: e.detail,
      decision: e.decision
    }))
  };
}
function Hi(r, e) {
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
function Ue(r, e) {
  return r.steps.find((t) => t.kind === e);
}
function ea(r, e) {
  return r.steps.find(
    (t) => t.kind === "component" && t.component?.kind === e
  );
}
function bo(r) {
  return r.length > 72 ? E.typeLong : r.length > 38 ? E.typeMedium : E.typeShort;
}
function od(r) {
  const e = `${r.title} ${r.eyebrow ?? ""}`.toLowerCase();
  if (e.includes("enrich")) return "enriched";
  if (e.includes("filter") || e.includes("raised")) return "filtered";
}
function sd(r, e) {
  const t = r.pagination?.ranges ?? [], i = t[t.length - 1]?.match(/of\s+(\d+)/i);
  return i ? Number(i[1]) : e;
}
function ne(r) {
  return r.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
}
const ld = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], cd = [
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
], yo = [
  { key: "name", label: "Name", width: "1.45fr", cellType: "person" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], dd = [
  { key: "name", label: "Prospect", width: "minmax(220px,0.95fr)", cellType: "person" },
  { key: "email", label: "Work email", width: "minmax(190px,0.95fr)" },
  { key: "number", label: "Mobile", width: "minmax(150px,0.72fr)" },
  { key: "connector", label: "Connector", width: "minmax(170px,0.78fr)" }
], Nn = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "8 records",
  scrollAlign: "equal-inset",
  columns: yo,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Stripe",
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
        company: "Stripe",
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
        company: "Stripe",
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
        company: "Stripe",
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
        company: "Stripe",
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
        company: "Stripe",
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
}, On = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  scrollAlign: "equal-inset",
  columns: yo,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Stripe",
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
        company: "Stripe",
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
        company: "Stripe",
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
}, ud = {
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
}, Bn = {
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
}, Fn = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "4 contacts",
  variant: "enriched",
  columns: dd,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        prospectDetail: "VP of Sales at Stripe",
        email: "jamie@stripe.com",
        number: "+1 (628) 240-2744",
        connector: "Priya Shah (VP Sales @ Plaid)",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal"
      }
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        prospectDetail: "Head of Growth at Stripe",
        email: "andre@stripe.com",
        number: "+1 (210) 555-2341",
        connector: "Marco Liu (Partner @ Sequoia)",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal"
      }
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        prospectDetail: "Head of Revenue at Stripe",
        email: "david@stripe.com",
        number: "+1 (628) 230-9962",
        connector: "Dev Singh (RevOps Lead @ Brex)",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal"
      }
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        prospectDetail: "VP of Sales at Stripe",
        email: "chandler@stripe.com",
        number: "+1 (628) 240-2744",
        connector: "Jenna Park (VP Marketing @ Square)",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database"
      }
    }
  ]
}, zn = [
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
], hd = {
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
}, Un = {
  id: "pylon-business-report",
  title: "Pylon business report",
  subtitle: "How to win Pylon's market from the uploaded business context.",
  signals: [
    {
      label: "Winning wedge",
      value: "Sell Pylon as the revenue layer for post-sale conversations: support signals become expansion, renewal, and risk plays before competitors see them."
    },
    {
      label: "Primary motion",
      value: "Target VP CS, RevOps, and founders at B2B SaaS companies where Slack, tickets, and call notes hide account-level next actions."
    },
    {
      label: "Displacement angle",
      value: "Against Zendesk and Intercom, avoid ticketing arguments. Show where they break: account context, revenue handoffs, and renewal escalation."
    },
    {
      label: "Proof to use",
      value: "Lead with fewer missed expansion signals, faster executive escalation, cleaner CS-to-sales handoffs, and one shared customer timeline."
    }
  ],
  examples: [
    "Open with a customer moment: repeated feature requests, renewal risk, or stalled onboarding that should have triggered a revenue play.",
    "Package the CTA as a quick account review: show hidden risks and expansion signals pulled from recent customer conversations.",
    "Keep the copy specific: account visibility, post-sale intelligence, executive escalation, and revenue timing beats generic AI language."
  ]
}, Hn = {
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
}, wa = {
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
          body: "Maya, saw OrbitGrid looking at pricing while hiring RevOps. I work on turning those signals into focused account lists instead of generic outreach. Worth connecting?"
        },
        {
          channel: "email",
          label: "offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion."
        },
        {
          channel: "call",
          label: "use context",
          body: "Hi Maya, saw OrbitGrid looking at pricing while hiring RevOps. Are you trying to improve account fit, source coverage, or speed to follow-up right now?"
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
          body: "Evan, saw Northstar Dev digging into integrations while expanding sales. Curious if partner-fit signals are already part of outbound scoring?"
        },
        {
          channel: "email",
          label: "show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list."
        },
        {
          channel: "call",
          label: "reference the path",
          body: "Hi Evan, saw the integrations research and Northstar Dev's sales expansion. Are ecosystem-led accounts already a named campaign, or still mostly rep judgment?"
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
          body: "Clara, saw BrightLayer reading customer proof. Curious whether your team is trying to find more accounts that look like that same buyer."
        },
        {
          channel: "email",
          label: "personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment."
        },
        {
          channel: "call",
          label: "ask for fit",
          body: "Hi Clara, saw the case-study research. Are you looking for more accounts like that customer, or testing a new adjacent segment?"
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
          body: "Andre, saw Ramp checking out the demo while growth hiring is active. I work on turning those signals into researched account clusters without stitching tabs together."
        },
        {
          channel: "email",
          label: "send the account cut",
          body: "Offer a small list of accounts showing hiring, tech stack, and funding signals in one view."
        },
        {
          channel: "call",
          label: "ask about timing",
          body: "Hi Andre, saw Ramp's demo interest and growth hiring. Is this tied to an active expansion push, or are you mainly tightening account prioritization?"
        }
      ]
    },
    {
      name: "Jamie Chen",
      company: "Square",
      title: "VP Sales",
      signal: "ROI calculator",
      subject: "Saw Square using the ROI calculator",
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
          body: "Jamie, saw Square using the ROI calculator. We help teams turn account-quality questions into researched lists and sequences in one workflow."
        },
        {
          channel: "email",
          label: "offer benchmark",
          body: "Offer to compare one existing target segment against Unify’s combined intent and company data."
        },
        {
          channel: "call",
          label: "qualify the metric",
          body: "Hi Jamie, saw Square pressure-testing the ROI calculator. Are you optimizing for more contacts, better account fit, or higher rep throughput?"
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
          body: "Nina, saw Mercury reviewing security content. Curious how your team evaluates new GTM data before it reaches outbound workflows."
        },
        {
          channel: "email",
          label: "show governance",
          body: "Send a short overview of how Unify routes data work while keeping reps inside one system."
        },
        {
          channel: "call",
          label: "surface blocker",
          body: "Hi Nina, saw Mercury spending time on security content. Is the bigger blocker for richer GTM data security review, data quality, or operational control?"
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
          body: "David, saw Stripe come through the docs. Curious whether the team is looking hardest at automating research, enrichment, or sequencing first."
        },
        {
          channel: "email",
          label: "share workflow map",
          body: "Send a compact workflow map from prompt to table to sequence, using a Stripe-like target segment."
        },
        {
          channel: "call",
          label: "probe use case",
          body: "Hi David, saw Stripe come through the docs. Are you evaluating this as rep-assist workflow automation, or as fully agentic list building?"
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
          body: "Sam, saw Apollo reviewing comparison content. Curious whether the real criteria is coverage, workflow speed, or personalization quality."
        },
        {
          channel: "email",
          label: "offer side-by-side",
          body: "Offer a short side-by-side showing how one sales request becomes a researched sequence in Unify."
        },
        {
          channel: "call",
          label: "qualify priority",
          body: "Hi Sam, saw Apollo comparing workflows. Which step is pulling reps out of selling most often: data search, enrichment, or writing the sequence?"
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
          body: "Rachel, saw Retool pricing interest during a sales hiring push. We help teams build smaller, higher-fit lists instead of expanding generic coverage."
        },
        {
          channel: "email",
          label: "send a sample segment",
          body: "Offer a sample segment with account fit, contacts, and ready-to-send messaging angles."
        },
        {
          channel: "call",
          label: "ask about handoff",
          body: "Hi Rachel, saw Retool's pricing interest alongside sales hiring. How are intent signals getting handed to reps today, and where does the handoff break?"
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
          body: "Owen, saw Linear's demo-page research. Curious if the sales team is prioritizing outbound efficiency or better personalization this quarter."
        },
        {
          channel: "email",
          label: "show a concrete play",
          body: "Send a specific play for identifying software teams expanding support or sales operations."
        },
        {
          channel: "call",
          label: "connect to timing",
          body: "Hi Owen, saw Linear's demo-page visit. Is this tied to an active evaluation window, or are you mapping what a cleaner outbound workflow could look like?"
        }
      ]
    }
  ],
  channels: []
};
({
  ...wa
});
const pd = {
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
}, gd = [
  { key: "name", label: "Name", width: "1.2fr", cellType: "person" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" }
], Vn = [
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
], md = [
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
], Gn = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  scrollAlign: "equal-inset",
  footerClearance: 88,
  columns: gd,
  rows: Vn,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: Vn },
      { page: 2, range: "11-20 of 50 people", rows: md }
    ]
  },
  actions: [
    {
      id: "power-dialer",
      label: "Power dial",
      icon: "dialer",
      tooltip: "Coming soon!",
      variant: "primary"
    },
    {
      id: "email-sequence",
      label: "Outreach sequence",
      icon: "email",
      variant: "secondary"
    }
  ]
}, ni = [
  {
    id: "raw-maya-rodriguez",
    values: {
      name: "Maya R.",
      email: "MAYA.RODRIGUEZ@NorthStar.ai ",
      company: "northstar ai"
    }
  },
  {
    id: "raw-ethan-cho",
    values: {
      name: "Ethan Cho",
      email: "ethan.cho@gmail.com",
      company: "Clearbit Inc."
    }
  },
  {
    id: "raw-priya-shah",
    values: {
      name: "Priya Shah",
      email: "priya.shah+webinar@orbitgrid.com",
      company: "Orbitgrid"
    }
  },
  {
    id: "raw-lucas-meyer",
    values: {
      name: "Lucas",
      email: "lucas.meyer@ramp.com",
      company: "Ramp"
    }
  },
  {
    id: "raw-nina-kapoor",
    values: {
      name: "N. Kapoor",
      email: "",
      company: "Mercury"
    }
  },
  {
    id: "raw-sam-hollis",
    values: {
      name: "sam hollis",
      email: "sam.hollis@apollo.io",
      company: "Apollo.io"
    }
  },
  {
    id: "raw-anna-li",
    values: {
      name: "Anna Li",
      email: "",
      company: "Linear"
    }
  },
  {
    id: "raw-devon-park",
    values: {
      name: "Devon Park",
      email: "devon.park@brex.com",
      company: "Brex"
    }
  },
  {
    id: "raw-rachel-cho",
    values: {
      name: "Rachel C.",
      email: "rcho@figma.com",
      company: "Figma"
    }
  },
  {
    id: "raw-owen-lee",
    values: {
      name: "Owen Lee",
      email: "owen.lee@icloud.com",
      company: "Notion"
    }
  },
  {
    id: "raw-clara-wong",
    values: {
      name: "Clara Wong",
      email: "clara.wong@brightlayer.com",
      company: "Bright Layer"
    }
  },
  {
    id: "raw-maya-rodriguez-duplicate",
    values: {
      name: "Maya Rodriguez",
      email: "maya.rodriguez@northstar.ai",
      company: "Northstar AI"
    }
  },
  {
    id: "raw-ethan-cho-duplicate",
    values: {
      name: "Ethan Cho",
      email: "ethan.cho+events@gmail.com",
      company: "Clearbit Inc."
    }
  }
], fd = {
  id: "raw-webinar-attendees",
  title: "Raw webinar attendees",
  eyebrow: "CSV import",
  count: "54 records",
  columns: [
    { key: "name", label: "Name", width: "110px", cellType: "text" },
    { key: "email", label: "Email", width: "250px" },
    { key: "company", label: "Company", width: "minmax(120px,1fr)" }
  ],
  rows: ni,
  pagination: {
    pageSize: 6,
    totalRows: 54,
    activePage: 1,
    pages: [
      { page: 1, range: "1-6 of 54 records", rows: ni.slice(0, 6) },
      { page: 2, range: "7-13 of 54 records", rows: ni.slice(6, 13) }
    ]
  }
}, wd = {
  id: "clean-webinar-attendees",
  title: "Cleaned webinar attendees",
  eyebrow: "CSV cleanup",
  count: "54 records",
  scrollAnchor: "previous-message",
  columns: [
    { key: "fullName", label: "Full name", width: "245px", cellType: "person" },
    { key: "work-email", label: "Work email", width: "215px" },
    { key: "company", label: "Company", width: "minmax(110px,1fr)" }
  ],
  rows: [
    {
      id: "maya-rodriguez",
      values: {
        fullName: "Maya Rodriguez",
        "work-email": "maya.rodriguez@northstar.ai",
        company: "Northstar AI",
        prospectDetail: "VP Marketing"
      }
    },
    {
      id: "ethan-cho",
      values: {
        fullName: "Ethan Cho",
        "work-email": "ethan.cho@clearbit.com",
        company: "Clearbit",
        prospectDetail: "Head of Demand Gen"
      }
    },
    {
      id: "priya-shah",
      values: {
        fullName: "Priya Shah",
        "work-email": "priya.shah@orbitgrid.com",
        company: "OrbitGrid",
        prospectDetail: "Head of Growth"
      }
    },
    {
      id: "lucas-meyer",
      values: {
        fullName: "Lucas Meyer",
        "work-email": "lucas.meyer@ramp.com",
        company: "Ramp",
        prospectDetail: "Revenue Operations"
      }
    },
    {
      id: "nina-kapoor",
      values: {
        fullName: "Nina Kapoor",
        "work-email": "nina.kapoor@mercury.com",
        company: "Mercury",
        prospectDetail: "Sales Director"
      }
    },
    {
      id: "sam-hollis",
      values: {
        fullName: "Sam Hollis",
        "work-email": "sam.hollis@apollo.io",
        company: "Apollo",
        prospectDetail: "VP Sales"
      }
    }
  ]
}, xo = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: eo,
    entryLeadTime: ao,
    prepare: (r) => {
      r.chat.prepareSignup();
    },
    build: (r) => De(r, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@vercel.com", duration: E.typeShort },
      {
        kind: "cursorMove",
        target: to,
        options: { mode: "pointer", intent: "click", speed: "quick", label: "signup-submit" },
        at: "-=0.04"
      },
      { kind: "cursorClick", nextMode: "default", at: "-=0.03" },
      { kind: "custom", build: () => r.chat.submitSignup(), at: "<" },
      { kind: "status", text: "Building workspace", at: "-=0.08" },
      { kind: "custom", build: () => r.chat.transferSignupLogoToNextThinking(), at: "<" },
      { kind: "transitionSignupToChat", at: `+=${E.beat}` },
      { kind: "status", text: "Researching Vercel", at: "<" },
      { kind: "thinking", steps: ld, hold: 0.46, at: "<" },
      { kind: "assistant", text: "Here are some ideas I can put into action for you:" },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: cd, at: "-=0.08" },
      Je(ze.right, "+=0.18")
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
      ...Ft(Nn),
      ...Ft(On),
      ...Ft(Fn),
      ...Jr(Bn)
    ],
    entry: ka.dataMarketplace,
    entryLeadTime: xi,
    build: (r) => De(r, [
      {
        kind: "prompt",
        text: "Show me new hires at dev-tool companies with 50+ employees.",
        duration: E.typeLong,
        sendLabel: "send-data-search",
        statusBefore: "Searching data",
        statusAfter: "Searching 100+ sources",
        fromEntry: !0
      },
      {
        kind: "thinking",
        label: "Searching hiring signals, headcount, and company data",
        hold: E.thinkingMedium
      },
      { kind: "dataTable", config: Nn, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Filter to the ones that have raised in the past three months.",
        duration: E.typeMedium,
        sendLabel: "send-data-filter",
        statusAfter: "Filtering by funding",
        at: `+=${E.beat}`
      },
      {
        kind: "thinking",
        label: "Checking rounds announced since February 2026",
        hold: E.thinkingShort
      },
      { kind: "dataTable", config: On, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: E.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${E.beat}`
      },
      { kind: "enrichmentPanel", config: ud, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: Fn, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: Bn, at: "+=1.44" },
      Je(ze.bottomRight, "+=3")
    ])
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns your sales context, protects ICP fit, and ranks leads by relationship proximity.",
    assetUrls: Zr(Hn),
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
      }), t = r.chat.prepareCursorFile("4 context files", r.cursor, "DOC", zn), a = {
        desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 420, y: -74 }, humanOffset: !1 },
        tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 360, y: -58 }, humanOffset: !1 },
        mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 280, y: -42 }, humanOffset: !1 }
      }, i = B("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 }
      });
      return De(r, [
        ...io(hd),
        { kind: "status", text: "waiting for context", at: `+=${E.beat}` },
        {
          kind: "cursorMove",
          target: a,
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
        { kind: "custom", build: () => t.startFollow() },
        { kind: "custom", build: () => e.revealWhenCursorEnters(r.cursor), at: "<" },
        {
          kind: "cursorMove",
          target: i,
          options: {
            mode: "drag",
            intent: "drag",
            speed: "slow",
            ease: "power1.out",
            overshoot: !1,
            settle: !0,
            preserveMode: !0,
            label: "drag-context-files"
          },
          at: "<"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat }) },
        { kind: "custom", build: () => e.complete() },
        { kind: "custom", build: () => t.landAsUploadedFiles(zn), at: "<" },
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
          at: `+=${E.beat}`
        },
        {
          kind: "custom",
          build: () => r.chat.outreachStyleProfile(Un, { scrollAlign: "equal-inset" }),
          at: "-=0.02"
        },
        ...no(Un.id),
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: E.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${E.beat}`
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: E.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${E.beat}`
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
          hold: E.thinkingMedium
        },
        { kind: "custom", build: () => r.chat.proximityLeadList(Hn), at: "-=0.04" },
        Je(ze.bottomRight, "+=0.16")
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
      ...Ft(Gn),
      ...$r(wa)
    ],
    entry: ka.researchBrief,
    entryLeadTime: xi,
    build: (r) => {
      const e = B(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
        "center"
      ), t = B(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
        { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
        !1
      ), a = B(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
        {},
        !1
      ), [i, n] = jr(wa, 2), o = B(
        `[data-sequence-person-card="visitor-outreach-sequences:${i}"]`,
        "center"
      ), s = B(
        `[data-sequence-person-card="visitor-outreach-sequences:${n}"]`,
        "center"
      ), l = B(
        '[data-sequence-kickoff="visitor-outreach-sequences"]',
        "center"
      );
      return De(r, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: E.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
          fromEntry: !0
        },
        { kind: "dataTable", config: Gn, at: "-=0.02" },
        oo("website-visitors-sales", E.beat + 0.42, "+=0.08", {
          align: "top",
          offset: -190,
          settleDelay: 0.32
        }),
        {
          kind: "custom",
          build: () => r.chat.scrollToLiveTimeline(E.beat + 0.42),
          at: "+=0.08"
        },
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
          build: () => r.timeline().to({}, { duration: E.beat + 0.58 })
        },
        {
          kind: "cursorMove",
          target: t,
          options: {
            mode: "pointer",
            intent: "hover",
            speed: "slow",
            durationScale: 1.45,
            label: "hover-power-dialer"
          },
          at: "+=0.42"
        },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 2 }), at: "+=0.12" },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
        {
          kind: "cursorMove",
          target: a,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
        },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "status", text: "building outreach sequence", at: "<" },
        { kind: "custom", build: () => r.chat.sequenceBuildThinking(pd), at: "+=0.06" },
        { kind: "sequenceEngagement", config: wa, at: "-=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: o,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-next-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", i), at: "-=0.03" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: s,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-following-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", n), at: "-=0.03" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat + 0.28 }), at: "+=0.04" },
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
      const e = r.chat.prepareCsvDropArea(), t = r.chat.prepareCursorFile("may_webinar_attendees.csv", r.cursor), a = B("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 }
      });
      return De(r, [
        { kind: "status", text: "waiting for CSV" },
        { kind: "custom", build: () => t.startFollow(), at: `+=${E.fileGrab}` },
        { kind: "custom", build: () => e.revealWhenCursorEnters(r.cursor), at: "<" },
        {
          kind: "cursorMove",
          target: a,
          options: {
            mode: "drag",
            intent: "drag",
            speed: "slow",
            ease: "power1.out",
            overshoot: !1,
            settle: !0,
            preserveMode: !0,
            label: "drag-webinar-csv"
          },
          at: "<"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: E.beat }) },
        { kind: "custom", build: () => e.complete() },
        { kind: "custom", build: () => t.landAsUploadedFile("may_webinar_attendees.csv", "54 records"), at: "<" },
        { kind: "dataTable", config: fd, at: "+=0.08" },
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
          at: `+=${E.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: wd, at: "-=0.04" },
        Je(ze.bottomRight, "+=0.18")
      ]);
    }
  }
], ca = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, ct = {
  sampleWindowMs: 960,
  minDurationMs: 620,
  minTravel: 480,
  minAxisReversals: 6,
  minAverageSpeed: 0.54,
  minTravelToNetRatio: 2.55,
  maxNetDistance: 165
}, ee = {
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
}, We = {
  smoothing: 0.22,
  orbitMs: 1620,
  bobMs: 690,
  radiusX: 76,
  radiusY: 42,
  bobY: 10,
  minPointerDistance: 56,
  viewportInset: 14
}, da = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, ri = {
  durationMs: 980,
  amplitude: 18,
  arriveDistance: 3.5
};
class bd {
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
      this.mode === "follow" ? (this.updateFollowTarget(t), this.lastMoveAt = a, this.trackDismissShake(t, a), this.hasDismissShake() && this.startReturnAfterPause(0)) : this.mode === "play" ? this.pointer && Qe(t, this.pointer) < 3 ? this.pointer = t : this.resumeFollowing(t) : this.mode === "sniff" && this.isPointNearStoryCursor(t, ee.reengageRadius) && this.resumeFollowing(t), this.scheduleFollow();
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
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, da.smoothing, this.target), e - this.sniffStartedAt >= da.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "play") {
      if (!this.pointer) {
        this.startReturnAfterPause();
        return;
      }
      this.updatePlayTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, We.smoothing, this.pointer), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.getReturnHomePoint(), a = yd((e - this.returnStartedAt) / ri.durationMs), i = this.getReturnWavePoint(a, t), n = this.getReturnWavePoint(Math.min(1, a + 0.035), t);
      if (this.target = t, this.cursor.mimicViewportPoint(i, 1, a < 1 ? n : t), a >= 1 || Qe(this.getCursorViewportPoint(), t) <= ri.arriveDistance) {
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
      if (e - this.lastMoveAt > ee.idleTimeoutMs) {
        this.startPlayfulIdle(e);
        return;
      }
      this.applyMomentum(e), this.cursor.mimicViewportPoint(this.target, ee.smoothing, this.pointer ?? this.target), this.scheduleFollow();
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
      }, this.velocity = Sd(a, ee.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * ee.trailDistance,
      y: e.y - this.trailDirection.y * ee.trailDistance
    };
    Qe(e, t) < ee.minPointerDistance && (t.x = e.x - this.trailDirection.x * ee.minPointerDistance, t.y = e.y - this.trailDirection.y * ee.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
  }
  startPlayfulIdle(e) {
    if (!this.active || !this.pointer) return;
    const t = this.getCursorViewportPoint();
    this.mode = "play", this.playStartedAt = e, this.playPhase = Math.atan2(t.y - this.pointer.y, t.x - this.pointer.x), this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], this.scheduleFollow();
  }
  updatePlayTarget(e) {
    if (!this.pointer) return;
    const t = e - this.playStartedAt, a = this.playPhase + t / We.orbitMs * Math.PI * 2, i = Math.sin(t / We.bobMs * Math.PI * 2), n = {
      x: this.pointer.x + Math.cos(a) * We.radiusX,
      y: this.pointer.y + Math.sin(a * 1.28) * We.radiusY + i * We.bobY
    };
    this.target = _d(n, this.pointer, We.minPointerDistance, We.viewportInset);
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
    const t = this.sniffIndex, a = t * 1.92, i = da.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * i,
      y: this.sniffAnchor.y + Math.sin(a) * i * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + da.pointIntervalMs;
  }
  applyMomentum(e) {
    !this.target || e - this.lastMoveAt < 48 || Math.hypot(this.velocity.x, this.velocity.y) < ee.minMomentum || (this.target = {
      x: this.target.x + this.velocity.x * ee.momentumScale,
      y: this.target.y + this.velocity.y * ee.momentumScale
    }, this.velocity = {
      x: this.velocity.x * ee.momentumDecay,
      y: this.velocity.y * ee.momentumDecay
    });
  }
  startReturnAfterPause(e = ee.returnDelayMs) {
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
    const a = this.returnStart ?? this.getCursorViewportPoint(), i = xd(e), n = t.x - a.x, o = t.y - a.y, s = Math.hypot(n, o), l = {
      x: a.x + n * i,
      y: a.y + o * i
    };
    if (s < 1) return l;
    const c = Math.sin(Math.PI * e), d = Math.sin(Math.PI * 2 * e) * c * ri.amplitude * this.returnWaveDirection;
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
    return Ad(i, e) > ee.maxBrowserDistance;
  }
  getChatShell() {
    return this.chatShell?.isConnected ? this.chatShell : (this.chatShell = this.root.querySelector("[data-chat-shell]"), this.chatShell);
  }
  isPointNearStoryCursor(e, t = ca.radius) {
    const a = this.root.getBoundingClientRect(), i = this.cursor.readPosition(), n = {
      x: a.left + i.x,
      y: a.top + i.y
    };
    return Qe(e, n) <= t;
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
    this.pruneSampleList(this.samples, e, ca.sampleWindowMs);
  }
  trackDismissShake(e, t) {
    this.dismissSamples.push({ ...e, time: t }), this.pruneSampleList(this.dismissSamples, t, ct.sampleWindowMs);
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
      return n ? t + Qe(a, n) : t;
    }, 0) >= ca.minTravel && this.countAxisReversals(this.samples) >= ca.minAxisReversals;
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
      return u ? l + Qe(c, u) : l;
    }, 0), o = Qe(t, a), s = n / Math.max(o, 1);
    return i >= ct.minDurationMs && n >= ct.minTravel && o <= ct.maxNetDistance && n / i >= ct.minAverageSpeed && s >= ct.minTravelToNetRatio && this.countAxisReversals(e) >= ct.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, i = 0;
    for (let n = 1; n < e.length; n += 1) {
      const o = e[n - 1], s = e[n], l = Qn(s.x - o.x), c = Qn(s.y - o.y);
      l && a && l !== a && (t += 1), c && i && c !== i && (t += 1), l && (a = l), c && (i = c);
    }
    return t;
  }
}
function Qe(r, e) {
  return Math.hypot(e.x - r.x, e.y - r.y);
}
function yd(r) {
  return Math.min(1, Math.max(0, r));
}
function Wn(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function xd(r) {
  return -(Math.cos(Math.PI * r) - 1) / 2;
}
function Yn(r, e) {
  return {
    x: Wn(r.x, e, window.innerWidth - e),
    y: Wn(r.y, e, window.innerHeight - e)
  };
}
function _d(r, e, t, a) {
  const i = Yn(vd(r, e, t), a);
  if (Qe(i, e) >= t * 0.86) return i;
  const n = {
    x: window.innerWidth / 2 - e.x,
    y: window.innerHeight / 2 - e.y
  }, o = Math.hypot(n.x, n.y) || 1;
  return Yn({
    x: e.x + n.x / o * t,
    y: e.y + n.y / o * t
  }, a);
}
function vd(r, e, t) {
  const a = r.x - e.x, i = r.y - e.y, n = Math.hypot(a, i);
  if (n >= t) return r;
  const o = -Math.PI * 0.28, s = n > 0.01 ? a / n : Math.cos(o), l = n > 0.01 ? i / n : Math.sin(o);
  return {
    x: e.x + s * t,
    y: e.y + l * t
  };
}
function Ad(r, e) {
  const t = Math.max(e.left - r.x, 0, r.x - e.right), a = Math.max(e.top - r.y, 0, r.y - e.bottom);
  return Math.hypot(t, a);
}
function Sd(r, e) {
  const t = Math.hypot(r.x, r.y);
  return t <= e || t === 0 ? r : {
    x: r.x / t * e,
    y: r.y / t * e
  };
}
function Qn(r) {
  return Math.abs(r) < 2 ? 0 : Math.sign(r);
}
const jn = {
  minPixelDelta: 0.5
};
class kd {
  constructor(e, t, a, i, n, o) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = i, this.chat = n, this.options = o, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new bd(this.root, this.cursor, {
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
    this.setHistoryPaused(!1), this.chat.scrollToLive(), this.playing = !0, this.updatePlayButton(), !(e && this.restoreDataTablePagesBeforePlay()) && this.resumeActiveTimeline();
  }
  pause() {
    this.setHistoryPaused(!1), this.playing = !1, this.activeTimeline?.pause(), this.autoAdvance?.kill(), this.updatePlayButton(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null;
  }
  restoreDataTablePagesBeforePlay() {
    if (!this.activeTimeline) return !1;
    const e = this.chat.getDataTablePageRestores();
    if (!e.length) return !1;
    const t = f.timeline({
      onComplete: () => {
        this.resumeRestoreTimeline = null, this.playing && this.resumeActiveTimeline();
      }
    });
    return e.forEach((a, i) => {
      const n = i === 0 ? 0 : ">";
      t.add(this.buildDataTablePageRestore(a), n);
    }), this.resumeRestoreTimeline = t, !0;
  }
  buildDataTablePageRestore(e) {
    const t = f.timeline();
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
    const a = this.stories[this.activeIndex]?.id, i = this.stories, n = new Map(this.stories.map((c, d) => [c.id, this.storyProgress[d] ?? 0])), o = this.cursor.getPosition(), s = this.playing, l = Cd(i, e);
    if (this.stories = e, this.storyProgress = this.stories.map((c) => n.get(c.id) ?? 0), this.activeIndex = Math.max(0, this.resolveStoryIndex(a ?? this.stories[0].id)), l && this.renderStoryTabs(), t.restartActive) {
      this.stopTimeline(), this.setHistoryPaused(!1), this.rebuildActiveStoryTimeline(this.activeIndex, o), this.playing = s || this.options.autoplay, this.updatePlayButton(), this.playing && this.activeTimeline?.play();
      return;
    }
    this.updateStoryMeta(), this.updateAllTabProgress(), Pn(this.stories, this.activeIndex);
  }
  goTo(e, t = {}) {
    const a = this.resolveStoryIndex(e);
    a < 0 || !this.stories[a] || this.transitionToStory(a, t);
  }
  transitionToStory(e, t = {}) {
    const a = this.cursor.getPosition(), i = !!(t.animateExit && this.activeTimeline);
    if (this.storyProgress[e] = 0, this.storySwitchTimeline?.kill(), this.storySwitchTimeline = null, this.stopTimeline(), this.setHistoryPaused(!1), !i) {
      this.activateStory(e, a);
      return;
    }
    this.playing = !1, this.updatePlayButton(), this.storySwitchTimeline = f.timeline({
      onComplete: () => {
        this.storySwitchTimeline = null, this.activateStory(e, a);
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
      timeline: () => f.timeline()
    };
    a.prepare?.(i), this.resolver.refresh();
    const n = f.timeline({
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
    this.activeIndex = e, Pn(this.stories, this.activeIndex), this.activeTimeline = this.buildTimeline(this.activeIndex, t), this.activeTimeline.progress(a).pause(), this.updateStoryMeta(), this.updateProgress();
  }
  stopTimeline() {
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null, this.cancelHistoryParkMotion(), this.pausedCursorMimic?.setPaused(!1), this.activeTimeline?.kill(), this.activeTimeline = null, this.cursor.resetInteraction();
  }
  handleComplete() {
    const e = this.playing;
    this.playing = !1, this.updatePlayButton(), !(!this.options.autoplay || !e) && (!this.options.loop && this.activeIndex === this.stories.length - 1 || (this.autoAdvance?.kill(), this.autoAdvance = f.delayedCall(this.options.autoAdvanceDelay, () => {
      const t = this.activeIndex + 1;
      if (t >= this.stories.length) {
        this.options.loop && this.resetStoryProgress(), this.goTo(this.options.loop ? 0 : this.activeIndex, { animateExit: !0 });
        return;
      }
      this.goTo(t, { animateExit: !0 });
    })));
  }
  seekTo(e, t = 0.28) {
    if (!this.activeTimeline) return;
    const a = this.playing;
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.setHistoryPaused(!1), this.chat.stopScrollMotion();
    const i = ua(e), n = this.activeTimeline.duration();
    this.playing = a, this.seekTween = f.to(this.activeTimeline, {
      time: n * i,
      duration: t,
      ease: "power2.out",
      overwrite: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => {
        a && this.resumeActiveTimeline(), this.updatePlayButton();
      }
    }), this.activeTimeline.pause(), this.updatePlayButton();
  }
  updateStoryMeta() {
    const e = this.stories[this.activeIndex];
    this.setText("[data-story-eyebrow]", e.eyebrow), this.setText("[data-story-label]", e.label), this.setText("[data-story-title]", e.label), this.setText("[data-story-summary]", e.summary), this.setText("[data-story-count]", `${this.activeIndex + 1} / ${this.stories.length}`);
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
    const i = (d) => {
      if ((d.target instanceof Element ? d.target : null)?.closest(".wa-story-tab__marker")) {
        d.preventDefault();
        return;
      }
      this.goTo(t);
    };
    a.addEventListener("click", i), this.storyTabListeners.push(() => a.removeEventListener("click", i));
    const n = document.createElement("span");
    n.className = "wa-story-tab__marker", n.setAttribute("aria-hidden", "true");
    const o = (d) => this.beginStoryProgressScrub(d, t, n);
    n.addEventListener("pointerdown", o), this.storyTabListeners.push(() => n.removeEventListener("pointerdown", o));
    const s = document.createElement("span");
    s.className = "wa-story-tab__body";
    const l = document.createElement("span");
    l.className = "wa-story-tab__count", l.textContent = `${t + 1} / ${this.stories.length}`;
    const c = document.createElement("span");
    if (c.className = "wa-story-tab__title", c.textContent = e.navLabel ?? e.label, s.append(l, c), e.navDescription) {
      const d = document.createElement("span");
      d.className = "wa-story-tab__description", d.textContent = e.navDescription, s.append(d);
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
      c.pointerId === e.pointerId && (c.preventDefault(), this.scrubStoryProgress(t, a, c));
    }, o = (c) => {
      c.pointerId === e.pointerId && (c.preventDefault(), this.endStoryProgressScrub(!0));
    }, s = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
    }, l = this.getMarkerTrack(a);
    this.storyProgressScrub = {
      storyIndex: t,
      wasPlaying: i,
      pointerId: e.pointerId,
      marker: a,
      ...l,
      removeListeners: s
    }, a.dataset.scrubbing = "true", window.addEventListener("pointermove", n, { passive: !1 }), window.addEventListener("pointerup", o, { passive: !1 }), window.addEventListener("pointercancel", o, { passive: !1 }), this.scrubStoryProgress(t, a, e);
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
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null, this.setHistoryPaused(!1), this.chat.stopScrollMotion(), this.cursor.clearTransientInteraction(), this.activeTimeline?.pause(), this.updatePlayButton();
  }
  setActiveTimelineProgress(e) {
    this.activeTimeline && (this.activeTimeline.progress(ua(e)).pause(), this.updateProgress());
  }
  resumeActiveTimeline() {
    const e = this.activeTimeline;
    if (e) {
      if (this.isTimelineAtEnd(e)) {
        this.handleComplete();
        return;
      }
      e.play();
    }
  }
  isTimelineAtEnd(e) {
    const t = e.duration();
    return t <= 0 || e.time() >= t - 1e-3 || e.progress() >= 0.999999;
  }
  endStoryProgressScrub(e) {
    const t = this.storyProgressScrub;
    t && (t.removeListeners(), t.marker.removeAttribute("data-scrubbing"), this.storyProgressScrub = null, this.playing = e ? t.wasPlaying : this.playing, this.cursor.clearTransientInteraction(), e && t.wasPlaying ? this.resumeActiveTimeline() : this.activeTimeline?.pause(), this.updatePlayButton());
  }
  getMarkerProgress(e, t, a = null) {
    if (a?.marker === e && a.trackLength > 0) {
      const o = a.trackAxis === "x" ? t.clientX : t.clientY;
      return ua((o - a.trackStart) / a.trackLength);
    }
    const i = this.getMarkerTrack(e);
    if (i.trackLength <= 0) return 0;
    const n = i.trackAxis === "x" ? t.clientX : t.clientY;
    return ua((n - i.trackStart) / i.trackLength);
  }
  getMarkerTrack(e) {
    const t = e.getBoundingClientRect(), a = t.width > t.height ? "x" : "y";
    return {
      trackAxis: a,
      trackStart: a === "x" ? t.left : t.top,
      trackLength: Math.max(0, a === "x" ? t.width : t.height)
    };
  }
  attachChatHistoryScroll() {
    const e = this.root.querySelector("[data-chat-shell]"), t = this.root.querySelector("[data-chat-thread]");
    if (!e || !t) return;
    const a = (i) => {
      if (!this.activeTimeline || Math.abs(i.deltaX) > Math.abs(i.deltaY)) return;
      const n = this.getWheelPixelDelta(i);
      if (Math.abs(n) < jn.minPixelDelta) return;
      const o = this.getThreadMaxScroll(t);
      if (o <= 0 || !(n < 0 || this.historyPaused)) return;
      const l = _o(t.scrollTop + n, 0, o);
      if (!(Math.abs(l - t.scrollTop) >= 0.5)) return;
      const d = Math.max(0, n - (o - t.scrollTop));
      i.preventDefault(), this.pauseForChatHistory(), t.scrollTop = l, d >= jn.minPixelDelta && window.scrollBy({ top: d, left: 0, behavior: "auto" });
    };
    e.addEventListener("wheel", a, { passive: !1 }), this.listeners.push(() => e.removeEventListener("wheel", a));
  }
  getWheelPixelDelta(e) {
    return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? e.deltaY * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? e.deltaY * window.innerHeight : e.deltaY;
  }
  pauseForChatHistory() {
    this.historyPaused || (this.playing = !1, this.autoAdvance?.kill(), this.seekTween?.kill(), this.activeTimeline?.pause(), this.chat.stopScrollMotion(), this.chat.prepareForChatHistoryPause(), this.cursor.clearTransientInteraction(), this.cancelHistoryParkMotion(), this.historyParkTimeline = this.cursor.parkForChatHistory(), this.setHistoryPaused(!0), this.updatePlayButton());
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
function _o(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function ua(r) {
  return _o(r, 0, 1);
}
function Cd(r, e) {
  return r.length !== e.length ? !0 : e.some((t, a) => {
    const i = r[a];
    return !i || i.id !== t.id || i.label !== t.label || i.navLabel !== t.navLabel || i.navDescription !== t.navDescription;
  });
}
const ha = ["mobile", "tablet", "desktop", "wide"];
class Td {
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
      const l = Xr(t), c = Math.min(o.width * 0.18, 18), d = Math.min(o.height * 0.18, 14);
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
      const t = this.getBreakpoint(), a = ha.indexOf(t), i = [
        t,
        ...ha.slice(0, a).reverse(),
        ...ha.slice(a + 1)
      ];
      for (const n of i)
        if (e[n]) return e[n];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return ha.some((t) => t in e);
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
const Ed = 3, Md = /* @__PURE__ */ new Set([
  "user",
  "assistant",
  "thinking",
  "component",
  "cursor",
  "status",
  "file"
]);
function Pd(r) {
  if (!kt(r) || !Array.isArray(r.stories)) return null;
  const e = typeof r.schemaVersion == "number" ? r.schemaVersion : 1, t = r.stories.map((a) => Id(a)).filter((a) => !!a);
  return t.length ? { schemaVersion: e, stories: t } : null;
}
function Rd(r) {
  return Md.has(r);
}
function Dd(r) {
  return typeof structuredClone == "function" ? structuredClone(r) : JSON.parse(JSON.stringify(r));
}
function kt(r) {
  return !!(r && typeof r == "object" && !Array.isArray(r));
}
function Id(r) {
  if (!kt(r) || !Array.isArray(r.steps)) return null;
  const e = Ae(r.id), t = Ae(r.label), a = Ae(r.summary), i = r.steps.map((n) => qd(n)).filter((n) => !!n);
  return !e || !t || !i.length ? null : {
    id: e,
    label: t,
    summary: a ?? "",
    steps: i
  };
}
function qd(r) {
  if (!kt(r)) return null;
  const e = Ae(r.id), t = Ae(r.kind), a = Ae(r.text), i = Ae(r.note);
  return !e || !t || !Rd(t) ? null : {
    id: e,
    kind: t,
    text: a ?? "",
    note: i ?? "",
    thinking: kt(r.thinking) ? Ld(r.thinking, a ?? "", i ?? "") : t === "thinking" ? vo(a ?? "", i ?? "") : void 0,
    component: kt(r.component) ? Dd(r.component) : void 0
  };
}
function Ld(r, e, t) {
  const i = (Array.isArray(r.items) ? r.items : []).map((n, o) => Nd(n, o)).filter((n) => !!n);
  return i.length ? {
    title: Ae(r.title) ?? Be,
    elapsed: Ae(r.elapsed) ?? Ra(i.length),
    items: i
  } : vo(e, t);
}
function Nd(r, e) {
  if (!kt(r)) return null;
  const t = Ae(r.label);
  return t ? {
    label: t,
    detail: Ae(r.detail) ?? zi(t, e),
    disclosure: Ae(r.disclosure) ?? (e === 0 ? Vt : fa)
  } : null;
}
function vo(r, e = "") {
  return {
    title: Be,
    elapsed: Ra(1),
    items: [
      {
        label: r || "Thinking",
        detail: e || zi(r || "Thinking", 0),
        disclosure: Vt
      }
    ]
  };
}
function Ae(r) {
  return typeof r == "string" ? r : null;
}
async function Od(r, e) {
  try {
    const t = await fetch(r, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!t.ok) return;
    const a = Pd(await t.json());
    if (!a || a.schemaVersion !== Ed) return;
    e(a.stories, { source: "load" });
  } catch {
  }
}
function Bd(r) {
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
          <span class="wa-story-count" data-story-count aria-hidden="true">1 / 5</span>
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
                <span class="wa-signup-scene__logo" data-signup-logo-target aria-hidden="true">${Yr}</span>
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
function Fd(r, e = {}) {
  Bd(r);
  const t = e.stories?.length ? e.stories : xo, a = e.builderDraftEndpoint ?? "/api/story-draft", i = e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, n = new Td(r), o = new Ul(r), s = new Xl(r, n, { reducedMotion: i }), l = new kd(r, t, n, s, o, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), c = (d, u = {}) => {
    l.updateStories(vc(d, t), {
      restartActive: u.source === "load"
    });
  };
  return l.mount(), a && Od(a, c), {
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
const zd = "[data-chatbot-stories]", Ud = "[data-chatbot-stories][data-auto-init]";
function Hd(r, {
  autoInitSelector: e = Ud,
  defaultTarget: t = zd,
  injectStyles: a
} = {}) {
  const i = /* @__PURE__ */ new WeakMap();
  function n(l = t) {
    if (l instanceof HTMLElement) return l;
    const c = document.querySelector(l);
    if (!c)
      throw new Error(`ChatbotStories: root element not found for selector "${l}"`);
    return c;
  }
  function o(l = t, c = {}) {
    const d = n(l), u = i.get(d);
    if (u) return u;
    c.injectStyles !== !1 && a?.();
    const h = r(d, c), g = h.destroy.bind(h);
    let m = !1;
    const p = {
      ...h,
      destroy: () => {
        m || (m = !0, i.delete(d), delete d.dataset.chatbotStoriesMounted, g());
      }
    };
    return i.set(d, p), d.dataset.chatbotStoriesMounted = "true", p;
  }
  function s() {
    const l = document.querySelectorAll(e);
    l.length && (a?.(), l.forEach((c) => o(c, { injectStyles: !1 })));
  }
  return { autoInit: s, init: o };
}
function Vd(r, e) {
  const t = document.getElementById(r);
  if (t instanceof HTMLStyleElement) {
    t.textContent !== e && (t.textContent = e);
    return;
  }
  const a = document.createElement("style");
  a.id = r, a.textContent = e, document.head.append(a);
}
const Gd = `:root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .12);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 24px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: calc(var(--wa-chat-x-padding) + 4px);--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 8px);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-header-weight: 430;--wa-chat-thinking-weight: 400;--wa-chat-detail-weight: 400;--wa-thinking-logo-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 11'%3E%3Cpath fill='black' d='M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z'/%3E%3Cpath fill='black' d='M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z'/%3E%3C/svg%3E");--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 102px;--wa-composer-send-size: 36px;--wa-history-resume-height: 42px;--wa-history-resume-y-offset: 44px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow-head: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABP0lEQVR42t3XwXGEIBQG4NeBR49uB6QDSqAEtgPSAXvMzXTglpAOSAeWgB2wHbwMGTQq7gL6vOSfQR2HeZ+IOgiICIh4QcS3cEza/OaKf/k6A/jGZe6nANZadM6RIxPAOUfGGDmyAACAHIkAamQToESeAlTIS4ACSQJHkSzgCJIN7EWKgD1IMVCK7AJKkN1ALnIIyEEOAymEBNhAPskB33yNkMcpAPyWm0IPaK1pRmCMwURu2UBd19E5KeWzwo958SQghMBhGGArzrljX9PZVYKUMgK01mWAUmoq3rbt4mkwxkRA0zTZwPtYyU9e3/fz4h9jR8ZYhHRdlwVAeL3Xuc47+mLrcM6zAQir61sY0WXd0U9qVVURYq3NBpJNKRUB/gEgA/zVlt6m4oWUEOK8EYxzMSJ+n3rh4Izfpv8F/ADB/dNnKnKg1wAAAABJRU5ErkJggg==);--wa-cursor-arrow-tail: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABSUlEQVR42t3X3XGEIBAHcDrw3nw0HVAC6YASSAekA+3AdOB1wnWgHWAHXAdkljkyRPxAFvOQnXF8UP8/XHAGibWWXHmQ/wNorYkx5jqAMUYopcWRXwBUaSQCSiOrQElkEyiF7AIlkEMAiyQBGCQZyEVOATnIaeAskgWcQbKBVAQFpCBo4AgpAuwhxQAoyLgUgCoF2LWjbVv7qmcu4IKUUvagumSgruto1EKIreBnGH4IcM7JPM+r7TDG+NCPrA9NCOGvuRHv9PuRBEgpf8L7vg9vcj1fAk3ThK15S9rZKaXIOI7Lm1xRSiNkGAZ/+Y7ZOsLDLmwJMMbCyb3lAu+QAJNaVVWEaK098onZ/E6QIKWMgGDJPjAALEU32p02Wez2HfpsOedbbzBhgc7PhUfgHHxwHRa4+blYqQmzipbI3bfrFfy1Ff4nv1DfGYDdsG+uObgAAAAASUVORK5CYII=);--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{position:relative;z-index:4;grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft);cursor:ns-resize;touch-action:none}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear}.wa-story-tab__marker:after{content:"";position:absolute;inset:0 -8px}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__marker[data-scrubbing=true]:before{transition:none}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-story-tab__count,.wa-story-count{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-control-button svg{display:block;width:16px;height:16px;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;fill:none}.wa-stage{--wa-window-scene-scale: 1;--wa-window-scene-width: var(--wa-window-width);--wa-window-scene-height: var(--wa-stage-min-height);--wa-window-scene-unscaled-height: var(--wa-window-height);--wa-window-scene-min-width: 0px;position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage[data-window-content-scale]{height:var(--wa-window-scene-height);min-height:var(--wa-window-scene-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow);transform-origin:top left}.wa-stage[data-window-content-scale] .wa-window{position:absolute;top:0;left:50%;width:var(--wa-window-scene-width);margin:0;transform:translate(-50%) scale(var(--wa-window-scene-scale));transform-origin:top center;will-change:transform}.wa-stage[data-window-content-scale] .wa-chat-shell{height:var(--wa-window-scene-unscaled-height)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:16px;line-height:1;font-weight:560}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:12px;min-height:0;padding-bottom:0;color:var(--wa-ink)}.wa-signup-scene__logo{display:block;width:clamp(34px,3.2vw,42px);aspect-ratio:18 / 11;margin-bottom:-2px;color:#77736c;pointer-events:none}.wa-signup-scene__logo svg{display:block;width:100%;height:100%}.wa-signup-scene__title{margin:0 0 18px;color:#77736c;font-family:var(--wa-font-feature);font-size:clamp(26px,2.8vw,34px);line-height:1;font-weight:400;letter-spacing:0}.wa-signup-field{display:grid;grid-template-columns:minmax(0,1fr) 38px;align-items:center;gap:10px;width:min(360px,72%);min-height:56px;padding:0 9px 0 17px;overflow:hidden;border:1px solid #d5d2ca;border-radius:15px;color:var(--wa-ink);background:#fffffa;box-shadow:0 12px 24px #1717141f;font-size:16px;line-height:1.2;font-weight:410;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"email@work.com";color:#aaa89e}.wa-signup-field [data-signup-email]{transform:translateY(-1px)}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-signup-field__submit{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;padding:0;border:0;border-radius:999px;color:#fffffa;background:#aaa89e;cursor:default}.wa-signup-scene[data-signup-filled=true] .wa-signup-field__submit,.wa-signup-scene[data-signup-submitted=true] .wa-signup-field__submit{background:#11110f}.wa-signup-field__submit-icon{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-signup-logo-transfer{position:absolute;top:0;left:0;z-index:7;display:block;pointer-events:none;transform-origin:left top}.wa-signup-logo-transfer svg{display:block;width:100%;height:100%}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:auto}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section.wa-sequence-sandbox{min-height:100svh;overflow:auto;padding:28px}.wa-sequence-sandbox .wa-section__inner{display:grid;grid-template-columns:minmax(0,1fr);gap:24px;width:min(1240px,100%)}.wa-sequence-sandbox .wa-copy,.wa-sequence-sandbox .wa-story-controls,.wa-sequence-sandbox .wa-stage__media,.wa-sequence-sandbox .wa-composer,.wa-sequence-sandbox .wa-signup-scene,.wa-sequence-sandbox .wa-history-resume,.wa-sequence-sandbox .wa-sequence-actions,.wa-sequence-sandbox .wa-sequence-kickoff{display:none!important}.wa-sequence-sandbox__header{display:flex;gap:24px;align-items:end;justify-content:space-between}.wa-sequence-sandbox__copy{display:grid;gap:6px;max-width:720px}.wa-sequence-sandbox__eyebrow{margin:0;color:var(--wa-orange);font-size:12px;line-height:1;font-weight:620}.wa-sequence-sandbox__title{margin:0;color:var(--wa-ink);font-size:clamp(30px,4vw,48px);line-height:1;font-weight:520}.wa-sequence-sandbox__note{margin:0;color:var(--wa-color-muted);font-size:14px;line-height:1.45;font-weight:410}.wa-sequence-sandbox__back{flex:0 0 auto;color:var(--wa-color-muted);font-size:13px;line-height:1;font-weight:520;text-decoration:none}.wa-sequence-sandbox__back:hover{color:var(--wa-ink)}.wa-sequence-sandbox .wa-stage{grid-column:1;grid-row:auto;justify-self:center;width:min(100%,1240px);min-height:0}.wa-sequence-sandbox .wa-window{width:100%;margin:0}.wa-sequence-sandbox .wa-chat-shell{height:auto;min-height:620px}.wa-sequence-sandbox .wa-chat-shell__body{min-height:570px;padding:0}.wa-sequence-sandbox .wa-chat-shell__body:before{content:none}.wa-sequence-sandbox .wa-thread{height:auto;padding:34px 0 42px;overflow:visible}.wa-sequence-sandbox .wa-sequence-engagement__header{display:none}.wa-sequence-sandbox .wa-message{max-width:100%}.wa-sequence-sandbox .wa-message--component{width:100%}.wa-section[data-active-story=crm-update]{--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 3px)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=user]+.wa-message[data-message-role=assistant],.wa-message[data-message-role=assistant]+.wa-message[data-message-role=user]{margin-top:var(--wa-chat-entry-gap)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message[data-message-role=assistant]:not(.wa-message--component) .wa-message__body{padding-right:0;padding-left:0}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:16px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;max-width:none;justify-self:end;padding:0;background:transparent}.wa-message[data-message-role=user].wa-message--file .wa-message__body{max-width:none;background:transparent}.wa-thinking-block{--wa-thinking-icon-column: 18px;--wa-thinking-column-gap: 8px;--wa-thinking-guide-top: -9px;--wa-thinking-rail-x-adjust: -.5px;position:relative;display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:var(--wa-thinking-icon-column) auto auto;align-items:center;justify-content:start;gap:var(--wa-thinking-column-gap);justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:14px;line-height:1.28;font-weight:var(--wa-chat-thinking-header-weight);overflow:visible}.wa-thinking__glyph{position:relative;display:inline-block;width:18px;height:11px;opacity:1;color:#67635f;transform-origin:center}.wa-thinking__glyph:after,.wa-thinking-logo-traveler:after{content:"";position:absolute;inset:0;display:block;width:18px;height:11px;opacity:0;background:linear-gradient(100deg,#67635f 0% 30%,#f23b0a 48%,#c8c3bb 58%,#67635f 74% 100%);background-position:120% 50%;background-size:260% 100%;pointer-events:none;-webkit-mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat;mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat}.wa-thinking__glyph[data-logo-role=shadow]{color:#c8c3bb;opacity:.88}.wa-thinking-logo-traveler{position:absolute;top:0;left:0;z-index:4;display:inline-block;width:18px;height:11px;color:#67635f;pointer-events:none;transform-origin:center}.wa-thinking__logo-mark{display:block;width:18px;height:11px;overflow:visible}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]) .wa-thinking__logo-mark,.wa-thinking-logo-traveler[data-logo-mode=thinking] .wa-thinking__logo-mark{opacity:0}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]):after,.wa-thinking-logo-traveler[data-logo-mode=thinking]:after{opacity:1;animation:wa-thinking-logo-gradient 1.28s linear infinite}.wa-thinking__glyph[data-logo-mode=done]:not([data-logo-role=shadow]),.wa-thinking-logo-traveler[data-logo-mode=done]{opacity:.72}.wa-thinking__title{color:#57544f;line-height:inherit;overflow:visible}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:14px;line-height:inherit;font-weight:var(--wa-chat-thinking-weight)}.wa-research-steps{--wa-thinking-guide-end: var(--wa-thinking-guide-top);position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0}.wa-research-steps:before{content:"";position:absolute;top:var(--wa-thinking-guide-top);left:calc((var(--wa-thinking-icon-column) / 2) + var(--wa-thinking-rail-x-adjust));width:1px;height:max(0px,calc(var(--wa-thinking-guide-end) - var(--wa-thinking-guide-top)));background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:var(--wa-thinking-icon-column) minmax(0,1fr);align-content:start;gap:var(--wa-thinking-column-gap);align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:14px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight)}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__marker{position:relative;z-index:1;justify-self:center;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__marker:before,.wa-research-step__marker:after{content:"";position:absolute}.wa-research-step__marker:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890;opacity:0;transform:scale(.74);transition:opacity .16s ease,transform .18s ease}.wa-research-step[data-step-state=complete] .wa-research-step__marker:before{opacity:1;transform:scale(1)}.wa-research-step[data-step-state=failed] .wa-research-step__marker:before{opacity:1;background:#e1544c;transform:scale(1)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label-row{display:inline-flex;gap:var(--wa-thinking-column-gap);align-items:center;justify-self:start;max-width:100%;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:14px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;margin-top:2px;overflow:hidden;color:#86817a;font-size:13px;line-height:1.38;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-sequence-thinking-progress{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;min-width:0;padding-top:2px}.wa-sequence-thinking-progress__count{color:#8e8a83;font-size:10px;line-height:1;font-weight:560;font-variant-numeric:tabular-nums}.wa-sequence-thinking-progress__bar{display:block;height:4px;overflow:hidden;border-radius:999px;background:#e4ded6}.wa-sequence-thinking-progress__bar span{display:block;width:100%;height:100%;border-radius:inherit;background:#57544f;transform:scaleX(.02);transform-origin:left center}.wa-thinking__title[data-thinking-active=true],.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail{display:none}.wa-research-step__chevron{position:relative;z-index:1;flex:0 0 8px;width:8px;height:14px;margin-top:0}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg);transition:top .16s ease,transform .16s ease}.wa-research-step[data-step-state=complete] .wa-research-step__chevron:before{top:2px;transform:rotate(135deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:14px;overflow-x:visible}.wa-message--strategy,.wa-message--strategy .wa-message__body,.wa-message--style,.wa-message--style .wa-message__body{overflow-x:visible}.wa-chat-shell__body:has(.wa-result-grid.has-strategy-plans),.wa-thread:has(.wa-result-grid.has-strategy-plans){overflow:visible;clip-path:none}.wa-chat-shell__body:has(.wa-style-profile){overflow:visible;clip-path:inset(0 -32px 0 -32px)}.wa-thread:has(.wa-style-profile){overflow:hidden;clip-path:inset(0 -32px 0 -32px)}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none}.wa-file-landing-clone{box-sizing:border-box}.wa-file-landing-label{color:#5e5c55;font-size:12px;line-height:1;font-weight:540;white-space:nowrap}.wa-cursor-file__card,.wa-uploaded-file{--wa-file-color: #916135;--wa-file-bg: #fdf8f2;--wa-file-border: #dedbd3}.wa-cursor-file__card{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:8px;align-items:center;width:292px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, #dedbd3);border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:252px;height:96px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:230px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-file-color, #916135);background:var(--wa-file-bg, #faf1e8);font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:34px;height:34px}.wa-cursor-file__card[data-file-tone=spreadsheet],.wa-uploaded-file[data-file-tone=spreadsheet]{--wa-file-color: #2a8050;--wa-file-bg: #f7fcf8}.wa-cursor-file__card[data-file-tone=pdf],.wa-uploaded-file[data-file-tone=pdf]{--wa-file-color: #c04436;--wa-file-bg: #fff7f6}.wa-cursor-file__card[data-file-tone=doc],.wa-uploaded-file[data-file-tone=doc]{--wa-file-color: #2c66d8;--wa-file-bg: #f7faff}.wa-cursor-file__card[data-file-tone=text],.wa-uploaded-file[data-file-tone=text]{--wa-file-color: #6f6a63;--wa-file-bg: #faf9f6}.wa-cursor-file__card[data-file-tone=ppt],.wa-uploaded-file[data-file-tone=ppt]{--wa-file-color: #b5671c;--wa-file-bg: #fff9f1}@supports (color: oklch(.5 .1 120)){.wa-cursor-file__card,.wa-uploaded-file{--wa-file-color: oklch(.49 .105 55);--wa-file-bg: oklch(.986 .012 65);--wa-file-border: oklch(.88 .008 80)}.wa-cursor-file__card[data-file-tone=spreadsheet],.wa-uploaded-file[data-file-tone=spreadsheet]{--wa-file-color: oklch(.51 .12 150);--wa-file-bg: oklch(.986 .014 150)}.wa-cursor-file__card[data-file-tone=pdf],.wa-uploaded-file[data-file-tone=pdf]{--wa-file-color: oklch(.52 .15 29);--wa-file-bg: oklch(.986 .014 29)}.wa-cursor-file__card[data-file-tone=doc],.wa-uploaded-file[data-file-tone=doc]{--wa-file-color: oklch(.52 .145 257);--wa-file-bg: oklch(.986 .013 257)}.wa-cursor-file__card[data-file-tone=text],.wa-uploaded-file[data-file-tone=text]{--wa-file-color: oklch(.52 .018 82);--wa-file-bg: oklch(.982 .004 82)}.wa-cursor-file__card[data-file-tone=ppt],.wa-uploaded-file[data-file-tone=ppt]{--wa-file-color: oklch(.56 .13 57);--wa-file-bg: oklch(.986 .016 64)}}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:292px;max-width:340px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, #dedbd3);border-radius:8px;color:var(--wa-ink);background:#faf9f4}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"]{--wa-uploaded-file-target-width: 230px;--wa-story-fit-width: 467px;width:min(467px,calc(100vw - 72px));max-width:100%}.wa-uploaded-files__summary{justify-self:start;color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-files__list{width:100%;grid-template-columns:repeat(2,minmax(0,var(--wa-uploaded-file-target-width)));justify-content:end;justify-items:stretch}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-file{width:100%;min-width:0;max-width:none}.wa-data-table{--wa-data-table-scroll-width: 100%;display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505}.wa-data-table[data-footer-clearance=true]{padding-bottom:var(--wa-data-table-footer-clearance, 0px)}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:rgba(17,17,15,.22) transparent;border:1px solid #eee6df;border-radius:8px;background:var(--wa-color-panel);-webkit-overflow-scrolling:touch}.wa-data-table__grid::-webkit-scrollbar{height:6px}.wa-data-table__grid::-webkit-scrollbar-track{background:transparent}.wa-data-table__grid::-webkit-scrollbar-thumb{border-radius:999px;background:#11110f33}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);width:max(100%,var(--wa-data-table-scroll-width));min-width:max(100%,var(--wa-data-table-scroll-width));min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel)}.wa-data-table[data-column-count="3"]{--wa-data-table-scroll-width: 560px}.wa-data-table[data-column-count="2"]{--wa-data-table-scroll-width: 620px}.wa-data-table[data-table-variant=connections]{--wa-data-table-scroll-width: 100%}.wa-data-table[data-column-count="4"]{--wa-data-table-scroll-width: 680px}.wa-data-table[data-column-count="5"]{--wa-data-table-scroll-width: 860px}.wa-data-table[data-table-variant=enriched]{--wa-data-table-scroll-width: 760px}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:34px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:center;min-width:0;padding:6px 8px;overflow:visible;border-left:0;color:#555452;font-size:14px;line-height:1.14;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell[data-cell-swap-active=true]{position:relative;overflow:hidden}.wa-data-table__cell-swap-clone{position:absolute;inset:0;box-sizing:border-box;display:flex;align-items:center;min-width:0;padding:inherit;gap:inherit;color:inherit;font:inherit;line-height:inherit;pointer-events:none;opacity:0;visibility:hidden}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{grid-row:1;align-items:center;padding:9px 10px 8px;color:#555452;font-size:14px;line-height:1.08;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(1){grid-column:1}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(2){grid-column:2}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(3){grid-column:3}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(4){grid-column:4}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(5){grid-column:5}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(6){grid-column:6}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=fullName],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:48px}.wa-section .wa-data-table__add{position:sticky;z-index:2;grid-column:1 / -1;grid-row:1;align-self:center;justify-self:end;right:3px;display:inline-flex;align-items:center;justify-content:center;width:28px;height:26px;padding:0 0 1px;border:1px solid #eee6df;border-radius:4px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;line-height:0}.wa-data-table__add-icon{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.wa-data-table__cell-text{display:block;min-width:0;margin-top:0}.wa-data-table__footer{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding-top:8px}.wa-data-table__actions{display:flex;align-items:center;gap:7px;min-width:0}.wa-data-table-action{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:0;min-height:32px;padding:0 10px;border:1px solid #ded9d2;border-radius:6px;color:#555452;background:transparent;font:inherit;box-shadow:0 1px 1px #17171408;cursor:pointer;white-space:nowrap}.wa-data-table-action[data-action-variant=primary]{border-color:#ded9d2;color:#555452;background:transparent}.wa-data-table-action__icon{display:block;width:16px;height:16px;flex:0 0 16px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.wa-data-table-action__label{display:inline-block;font-size:11px;line-height:1;font-weight:520}.wa-data-table-action__badge{position:absolute;top:-5px;right:-5px;display:none;align-items:center;min-height:15px;padding:0 5px;border-radius:999px;color:#11110f;background:var(--wa-orange);font-size:8px;line-height:1;font-weight:680}.wa-data-table-action__tooltip{display:none}.wa-data-table-floating-tooltip{position:absolute;z-index:7;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:6px;color:#fffffb;background:#11110f;box-shadow:0 8px 20px #1717142e;font-size:11px;line-height:1;font-weight:580;pointer-events:none;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .12s ease,visibility .12s ease}.wa-data-table-floating-tooltip[data-has-badge=true]{flex-direction:column;align-items:flex-start;min-height:50px;padding:8px 10px;gap:6px}.wa-data-table-floating-tooltip[data-visible=true]{opacity:1;visibility:visible}.wa-section[data-chat-history-paused=true] .wa-data-table-floating-tooltip{opacity:0;visibility:hidden}.wa-data-table-floating-tooltip__label{display:block}.wa-data-table-floating-tooltip__badge{display:inline-flex;align-items:center;min-height:15px;padding:0 6px;border-radius:999px;color:#11110f;background:#fffffb;font-size:8px;line-height:1;font-weight:650}.wa-data-table__pagination{display:inline-flex;align-items:center;justify-content:end;gap:7px;min-width:0;color:#716d66;font-size:9.5px;line-height:1;font-weight:500}.wa-data-table__range{white-space:nowrap}.wa-data-table__page-controls{display:inline-flex;align-items:center;gap:3px}.wa-data-table__page-button{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:#fffffb;font-size:9px;line-height:1;font-weight:560;cursor:pointer}.wa-data-table-action:hover,.wa-data-table-action[data-tooltip-visible=true],.wa-data-table__page-button:hover,.wa-data-table__page-button[data-tooltip-visible=true]{border-color:#bdb7ae;color:#11110f}.wa-data-table__page-button[data-active=true]{border-color:#11110f;color:#fffffb;background:#11110f}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact],.wa-data-table__cell[data-column-key=fullName],.wa-data-table__cell[data-column-key=mutualConnection]{overflow:visible;color:#050505;font-weight:400;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number],.wa-data-table__cell[data-column-key=work-email],.wa-data-table__cell[data-column-key=mobile]{color:#565553}.wa-data-table__cell[data-column-key=email] .wa-data-table__cell-text,.wa-data-table__cell[data-column-key=work-email] .wa-data-table__cell-text,.wa-data-table__cell[data-column-key=signal] .wa-data-table__cell-text{overflow-wrap:normal;white-space:nowrap}.wa-data-table__cell[data-cell-swap-active=true][data-column-key]{overflow:hidden}.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=mobile]{color:#0c6f66}.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=email] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=number] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=work-email] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=mobile] .wa-data-table__cell-text{display:inline-flex;align-items:center;width:fit-content;max-width:100%;min-height:22px;padding:2px 6px;border-radius:5px;background:#0e9c901f;color:#0c6f66}.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mobile]{color:#147970}.wa-data-table--proximity .wa-data-table__row:not([data-header=true]){min-height:38px}.wa-data-table--proximity .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=connection]{font-size:14px;line-height:1.08;overflow-wrap:normal;white-space:normal}.wa-data-table--proximity .wa-data-table__row:not([data-header=true]) .wa-data-table__cell[data-column-key=connection]{color:var(--wa-ink);font-size:13.5px;line-height:1.18;overflow-wrap:normal;white-space:normal}.wa-data-table--proximity .wa-data-table__cell[data-column-key=connection] .wa-data-table__cell-text{overflow-wrap:normal;white-space:normal;word-break:normal}.wa-data-table[data-table-variant=connections] .wa-data-table__grid{overflow-x:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell{overflow:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){align-items:center;gap:8px}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection] .wa-data-table-person{flex:1 1 auto;width:auto}.wa-data-table[data-table-variant=connections] .wa-data-table-person__name,.wa-data-table[data-table-variant=connections] .wa-data-table-person__detail{overflow:hidden;text-overflow:ellipsis}.wa-data-table-cell-badge{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;min-height:20px;padding:0;border:0;border-radius:0;color:#706c66;background:transparent;font-size:12px;line-height:1;font-weight:430;white-space:nowrap}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:visible}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;display:grid;place-items:center;width:12px;height:12px;overflow:hidden;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c;color:#4d4943;font-size:6px;line-height:1;font-weight:720;text-transform:uppercase}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__source[data-source=company]{border:0;border-radius:999px;background:transparent;box-shadow:0 0 0 1.5px var(--wa-panel),0 1px 2px #11110f1f}.wa-data-table-person__source[data-source=company]:before,.wa-data-table-person__source[data-source=company]:after{display:none}.wa-data-table-person__source[data-source=company][data-has-logo=false]{display:none}.wa-data-table-person__source-logo{display:block;width:100%;height:100%;border-radius:inherit;object-fit:cover}.wa-data-table-person__copy{display:grid;align-content:start;gap:2px;min-width:0;margin-top:0}.wa-data-table-person__name{min-width:0;margin-top:0;overflow:visible;color:#050505;font-size:14px;line-height:1.05;font-weight:400;overflow-wrap:normal;text-overflow:clip;white-space:nowrap}.wa-data-table-person__detail{min-width:0;overflow:hidden;color:#67635f;font-size:12px;line-height:1.12;font-weight:400;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-thinking-icon-column: 18px;--wa-thinking-column-gap: 8px;--wa-thinking-rail-x-adjust: -.5px;--wa-step-progress: 0;display:grid;gap:12px;min-width:0;max-width:none;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#11110f}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:var(--wa-thinking-icon-column) auto;gap:var(--wa-thinking-column-gap);align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#11110f;background:transparent;font-size:14px;line-height:1;font-weight:520}.wa-enrichment-panel .wa-thinking__title{color:#11110f}.wa-waterfall-rows{position:relative;display:grid;gap:0;padding:0}.wa-waterfall-rows:before{content:"";position:absolute;top:-16px;bottom:11px;left:calc((var(--wa-thinking-icon-column) / 2) + var(--wa-thinking-rail-x-adjust));width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:var(--wa-thinking-icon-column) 100px max-content;gap:var(--wa-thinking-column-gap) 7px;align-items:center;min-height:30px;color:#11110f;font-size:14px;line-height:1;font-weight:400;white-space:nowrap}.wa-waterfall-row__status{position:relative;z-index:1;justify-self:center;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before{content:"";position:absolute;top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row__label{min-width:0;overflow:hidden;color:#11110f;font-size:14px;font-weight:400;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:visible}.wa-waterfall-service-step{display:inline-flex;align-items:center;gap:6px;flex:0 0 auto}.wa-waterfall-arrow{display:inline-grid;place-items:center;width:16px;height:16px;color:#bbb3a9;line-height:1;font-weight:400}.wa-waterfall-arrow svg{display:block;width:16px;height:16px}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:7px;max-width:none;min-height:26px;padding:0 8px 0 6px;overflow:hidden;border:1px solid #e5ded5;border-radius:5px;color:#817b72;background:#fffffa;background-clip:padding-box;font-size:13px;line-height:1;font-weight:400;text-overflow:ellipsis;box-shadow:0 0 0 1px #5f584e05;will-change:transform}.wa-waterfall-chip__icon{position:relative;display:inline-grid;flex:0 0 16px;place-items:center;width:16px;height:16px;color:currentColor}.wa-waterfall-chip__icon svg{display:block;width:16px;height:16px}.wa-waterfall-chip__mark{display:block;width:16px;height:auto}.wa-waterfall-chip__state-icon{display:none;flex:0 0 16px;width:16px;height:16px;place-items:center;color:currentColor}.wa-waterfall-chip__state-icon svg{display:none;width:14px;height:14px}.wa-waterfall-chip__label{display:inline-block;transform:translateY(-.5px)}.wa-waterfall-chip[data-service=on-prem] .wa-waterfall-chip__icon{color:#827d75}.wa-waterfall-chip[data-service=wiza] .wa-waterfall-chip__icon{color:#9b43ff}.wa-waterfall-chip[data-service=contactout] .wa-waterfall-chip__icon{color:#009d5f}.wa-waterfall-chip[data-service=prospeo] .wa-waterfall-chip__icon{color:#ff3b30}.wa-waterfall-chip[data-service=waterfall] .wa-waterfall-chip__icon,.wa-waterfall-chip[data-service=forager] .wa-waterfall-chip__icon{color:#514bff}.wa-waterfall-chip[data-service=fullenrich] .wa-waterfall-chip__icon{color:#77736d}.wa-waterfall-chip[data-step-state=pending]{opacity:.62}.wa-waterfall-chip[data-step-state=loading]{opacity:1;color:#68635c;border-color:transparent;background:linear-gradient(#fbfaf2,#fbfaf2) padding-box,linear-gradient(108deg,#2f2e2a 0% 35%,#c9c2b8 49%,#2f2e2a 64% 100%) border-box;background-size:100% 100%,220% 100%;animation:wa-waterfall-service-poll .9s linear infinite;box-shadow:0 1px 3px #11110f1f}.wa-waterfall-chip[data-step-state=complete],.wa-waterfall-chip[data-step-state=failed]{background:#fbfaf2}.wa-waterfall-chip[data-step-state=complete]{color:#2f8f4c}.wa-waterfall-chip[data-step-state=complete] .wa-waterfall-chip__icon,.wa-waterfall-chip[data-step-state=failed] .wa-waterfall-chip__icon{display:none}.wa-waterfall-chip[data-step-state=complete] .wa-waterfall-chip__state-icon,.wa-waterfall-chip[data-step-state=failed] .wa-waterfall-chip__state-icon{display:inline-grid}.wa-waterfall-chip[data-step-state=complete] .wa-waterfall-chip__state-icon svg:first-child,.wa-waterfall-chip[data-step-state=failed] .wa-waterfall-chip__state-icon svg:last-child{display:block}.wa-waterfall-chip[data-step-state=failed]{color:#bf4941}@keyframes wa-waterfall-service-poll{0%{background-position:0 0,120% 50%}to{background-position:0 0,-120% 50%}}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow)}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap}.wa-strategy-plan{--wa-strategy-hover-scale: 1.035;--wa-strategy-hover-border: #c8c3bb;display:block;min-height:0;overflow:visible}.wa-strategy-plan__surface{display:grid;align-content:start;gap:10px;width:100%;min-height:0;padding:16px 18px 16px 20px;border:1px solid #dfddd5;border-radius:7px;background:#fffffa;box-shadow:0 7px 18px #1717140e;transform:scale(1) translateZ(0);transform-origin:center;transition:transform 125ms cubic-bezier(.2,.92,.18,1),border-color .12s ease,background-color .12s ease,box-shadow .14s ease}.wa-strategy-plan:hover .wa-strategy-plan__surface,.wa-strategy-plan[data-cursor-hover] .wa-strategy-plan__surface{border-color:var(--wa-strategy-hover-border);background:#fffffe;box-shadow:0 10px 24px #17171414;transform:scale(var(--wa-strategy-hover-scale)) translateZ(0)}.wa-strategy-plan__title{margin:0;color:#252521;font-family:var(--wa-font-feature);font-size:16px;line-height:1.18;font-weight:400;letter-spacing:0}.wa-strategy-plan__bullets{display:grid;gap:5px;margin:0;padding-left:14px;color:#5e5c55;font-family:var(--wa-font-sans);font-size:12px;line-height:1.34;font-weight:560;letter-spacing:0}.wa-strategy-plan__bullets li{padding-left:2px;white-space:nowrap}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;top:0;bottom:0;left:0;width:100%;max-width:none;padding:0;overflow:visible;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__scale{display:grid;grid-template-rows:auto auto;align-content:start;gap:68px;width:var(--wa-data-grid-artboard-width, 2048px);height:1280px;padding:80px var(--wa-data-grid-gutter-right, 87px) 0 var(--wa-data-grid-gutter-left, 87px);transform:scale(var(--wa-data-grid-scale, .2880859375));transform-origin:top left}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:0;max-width:none}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:64px;line-height:1.05;font-weight:520;letter-spacing:0;white-space:nowrap}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{display:none}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 26px;min-height:0;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(4,438px);gap:43px;align-items:start}.wa-data-source-grid__column{display:grid;align-content:start;gap:14px;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px;width:438px}.wa-data-source-group{display:grid;align-content:start;gap:9px;min-width:0;padding:0;border:0;border-radius:0;background:transparent}.wa-data-source-group__title{margin:0;color:#5e5d59;font-size:clamp(13px,1.15vw,18px);line-height:1.05;font-weight:530;letter-spacing:0;text-align:left;text-transform:none}.wa-data-source-grid--marketing .wa-data-source-group{gap:14px}.wa-data-source-grid--marketing .wa-data-source-group__title{font-size:36px;line-height:1.05;font-weight:520}.wa-data-source-grid--marketing .wa-data-source-grid__list{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:438px;gap:24px;min-height:0;padding:32px 35px;border-radius:7px;background:#e9e9e9}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-2{min-height:186px}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-3{min-height:238px}.wa-data-vendor-logo{display:inline-flex;align-items:center;justify-content:flex-start;width:100%;min-width:0;height:auto;min-height:0;max-width:100%;color:#000;opacity:1}.wa-data-vendor-logo--image{opacity:1}.wa-data-vendor-logo__mark{display:flex;align-items:center;justify-content:center;width:100%;height:100%;max-width:100%;overflow:hidden;color:currentColor;font-size:clamp(18px,2.1vw,36px);line-height:1;font-weight:560;letter-spacing:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;transform:scale(var(--wa-logo-scale, 1));transform-origin:center}.wa-data-vendor-logo__image{display:block;width:auto;height:auto;max-width:100%;max-height:34px;object-fit:contain;object-position:left center;filter:brightness(0) saturate(100%);transform:scale(var(--wa-logo-scale, 1));transform-origin:left center;-webkit-user-select:none;user-select:none}.wa-data-source-grid--marketing .wa-data-vendor-logo{width:max-content;max-width:none}.wa-data-source-grid--marketing .wa-data-vendor-logo__mark{width:max-content;max-width:none;font-size:48px;transform:none;transform-origin:left center}.wa-data-source-grid--marketing .wa-data-vendor-logo__image{width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;transform:none!important}.wa-mini-game,.wa-mailbox-connection,.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{--wa-story-fit-width: 540px;display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-style-profile{gap:13px;padding:14px 16px 15px;border:1px solid var(--wa-line-10);border-radius:13px;background:#fffffa;box-shadow:0 12px 32px #25252114}.wa-sequence-engagement{--wa-sequence-tab-line-stroke: rgba(17, 17, 15, .28);--wa-story-fit-width: 712px;gap:14px;width:min(100%,712px)}.wa-mini-game__header,.wa-mailbox-connection__header,.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-mini-game__eyebrow{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:680;text-transform:uppercase}.wa-mini-game__title,.wa-mailbox-connection__title,.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-mini-game__subtitle,.wa-mailbox-connection__subtitle,.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-mailbox-connection{gap:15px}.wa-mailbox-connection__card{display:grid;grid-template-columns:minmax(0,1fr) 124px;gap:14px;align-items:center;min-width:0;padding:14px 14px 14px 16px;border:1px solid #d9d7d0;border-radius:12px;background:#f7f6f0;box-shadow:inset 0 0 0 1px #fffff96b}.wa-mailbox-connection__copy{display:grid;gap:15px;min-width:0;box-sizing:border-box;padding-left:8px}.wa-mailbox-connection__title{font-size:20px;line-height:1.08;font-weight:560}.wa-mailbox-connection__subtitle{max-width:310px;color:#11110f;font-size:14px;line-height:1.28;font-weight:400}.wa-mailbox-connection__actions{display:grid;gap:9px;justify-self:end;width:124px;min-width:0}.wa-mailbox-connection__button{position:relative;isolation:isolate;display:grid;grid-template-columns:20px max-content;align-items:center;justify-content:center;gap:8px;width:100%;min-width:0;min-height:40px;padding:0 10px;border:1px solid #d6d5cf;border-radius:5px;color:#080807;background:#fffff9;font:inherit;font-size:15.5px;line-height:1;font-weight:430;letter-spacing:0;cursor:default;overflow:visible;transform:translateZ(0)}.wa-mailbox-connection__button:before,.wa-mailbox-connection__button:after{content:"";position:absolute;pointer-events:none;opacity:0}.wa-mailbox-connection__button:before{inset:-1px;z-index:0;border-radius:inherit;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.82),transparent 34%),linear-gradient(90deg,#ea433500,#ea433566,#ea433500);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;filter:blur(7px)}.wa-mailbox-connection__button:after{inset:0;z-index:1;border-radius:inherit;padding:1px;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.95),rgba(234,67,53,.26) 34%,transparent 54%),linear-gradient(90deg,transparent,rgba(234,67,53,.52),transparent);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.wa-mailbox-connection__button>*{position:relative;z-index:2}.wa-mailbox-connection__button:disabled{opacity:1;pointer-events:none}.wa-mailbox-connection__provider-icon{display:block;width:20px;height:20px;flex-shrink:0;object-fit:contain}.wa-mailbox-connection__button-copy{display:grid;width:max-content;min-width:0;align-items:center}.wa-mailbox-connection__provider-label,.wa-mailbox-connection__button-label{grid-area:1 / 1;display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .18s ease,transform .18s ease}.wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection__button-label[data-mailbox-button-label=connected],.wa-mailbox-connection__spinner{display:none;opacity:0;transform:translateY(5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle]{display:none;opacity:0;transform:translateY(-5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=connected]{display:block;opacity:1;transform:translateY(0)}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=connected]{display:inline-flex;align-items:center;gap:4px}.wa-mailbox-connection__connected-icon{display:block;width:16px;height:16px;color:currentColor;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:0 0 16px}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]{grid-template-columns:max-content;border-color:#ea433561}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:before{opacity:0;animation:none}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:after{opacity:1;animation:wa-mailbox-gmail-radiate 1.16s ease-in-out infinite}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__provider-icon,.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__spinner{display:none}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect]{grid-template-columns:max-content;color:#aaa59d;border-color:#17171424;background:transparent;box-shadow:none}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__provider-icon{display:none}.wa-mailbox-connection__spinner{position:absolute;right:9px;width:12px;height:12px;border:1.5px solid rgba(17,17,15,.18);border-top-color:currentColor;border-radius:999px;animation:wa-spin .76s linear infinite}.wa-mailbox-learning{display:none;grid-template-columns:44px max-content minmax(90px,1fr);grid-template-rows:auto auto;grid-template-areas:"thumb title progress" "thumb detail progress";align-items:center;gap:5px 14px;margin-top:8px;padding:0;color:#5f5b55;background:transparent}.wa-mailbox-learning__thumbprint{grid-area:thumb;display:grid;place-items:center;width:44px;height:44px;background:transparent}.wa-mailbox-learning__title{grid-area:title;display:inline-flex;align-items:center;gap:6px;margin:0;color:#5b5752;font-size:14px;line-height:1;font-weight:560;white-space:nowrap}.wa-mailbox-learning__ready-chevron{position:relative;top:-1px;display:inline-block;width:9px;height:9px;color:currentColor;opacity:0;transform-origin:center}.wa-mailbox-learning__ready-chevron:before{content:"";position:absolute;top:0;left:1px;width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg)}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__title{color:#11110f}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__progress{display:none}.wa-mailbox-learning__detail{grid-area:detail;margin:0;color:#8b867e;font-size:13px;line-height:1.15;font-weight:400}.wa-mailbox-thumbprint{width:36px;height:36px;overflow:visible;color:#11110f}.wa-mailbox-thumbprint__base path,.wa-mailbox-thumbprint__fill path{stroke-width:5.4}.wa-mailbox-thumbprint__base path{stroke:color-mix(in srgb,currentColor 14%,transparent)}.wa-mailbox-thumbprint__fill path{stroke:currentColor}.wa-mailbox-learning__progress{grid-area:progress;align-self:center;height:4px;overflow:hidden;border-radius:999px;background:#dfddd6}.wa-mailbox-learning__progress span{display:block;width:100%;height:100%;border-radius:inherit;background:#5f5b55;transform:scaleX(0);transform-origin:left center}.wa-swipe-game{gap:9px;max-width:520px}.wa-swipe-game__prompt{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.28;font-weight:430}.wa-swipe-game__axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:520}.wa-swipe-game__axis span:first-child{color:#7f1d1d94}.wa-swipe-game__axis span:nth-child(2){color:var(--wa-color-muted);font-variant-numeric:tabular-nums}.wa-swipe-game__axis span:last-child{justify-self:end;color:#1665349e}.wa-swipe-game__stack{position:relative;height:184px;overflow:visible}.wa-swipe-game__glow{position:absolute;inset:12px -18px 0;z-index:0;border-radius:999px;background:linear-gradient(90deg,rgba(127,29,29,.055),transparent 42%,transparent 58%,rgba(22,101,52,.065));filter:blur(22px);pointer-events:none}.wa-swipe-card,.wa-swipe-game__complete{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;min-width:0;border:1px solid rgba(228,228,231,.82);border-radius:21px;background:#fafafa;text-align:center;box-shadow:0 18px 45px #00000014}.wa-swipe-card{gap:13px;padding:22px 26px}.wa-swipe-game[data-swipe-decision=avoid] .wa-swipe-card[data-swipe-state=active]{border-color:#d298989e;background:linear-gradient(135deg,#f8f1f1,#fafafa 68%);box-shadow:-22px 28px 70px #7f1d1d1f}.wa-swipe-game[data-swipe-decision=use] .wa-swipe-card[data-swipe-state=active]{border-color:#8eb79da3;background:linear-gradient(135deg,#fafafa 32%,#f0f7f2);box-shadow:22px 28px 70px #1665341f}.wa-swipe-card__label{max-width:360px;color:var(--wa-ink);font-size:20px;line-height:1.05;font-weight:580;letter-spacing:0}.wa-swipe-card__detail{max-width:340px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.35;font-weight:410}.wa-swipe-game__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;max-width:420px}.wa-swipe-game__action{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:38px;border:1px solid var(--wa-line-12);border-radius:999px;background:var(--wa-panel);cursor:default}.wa-swipe-game__action:before,.wa-swipe-game__action:after{content:"";position:absolute;display:block}.wa-swipe-game__action[data-swipe-action=avoid]{border-color:#d298987a;background:#f8f1f1e6}.wa-swipe-game__action[data-swipe-action=avoid]:before,.wa-swipe-game__action[data-swipe-action=avoid]:after{width:14px;height:1.5px;border-radius:999px;background:#ba4d4d}.wa-swipe-game__action[data-swipe-action=avoid]:before{transform:rotate(45deg)}.wa-swipe-game__action[data-swipe-action=avoid]:after{transform:rotate(-45deg)}.wa-swipe-game__action[data-swipe-action=use]{border-color:#8eb79d80;background:#f0f7f2f2}.wa-swipe-game__action[data-swipe-action=use]:before{width:13px;height:7px;border-bottom:1.7px solid #2f8f4d;border-left:1.7px solid #2f8f4d;transform:translateY(-1px) rotate(-45deg)}.wa-swipe-game__action[data-active=true]{border-color:var(--wa-ink)}.wa-swipe-game__complete{z-index:10;color:var(--wa-ink);font-size:17px;line-height:1.1;font-weight:560}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr);align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-style-profile__rows{display:grid;grid-template-columns:minmax(0,1fr);gap:0;border-top:1px solid var(--wa-line-08)}.wa-style-profile__row{display:grid;grid-template-columns:104px minmax(0,1fr);gap:14px;align-items:start;min-height:0;padding:10px 0;border-bottom:1px solid var(--wa-line-08);background:transparent}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:11px;line-height:1.18;font-weight:560}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12.5px;line-height:1.28;font-weight:430}.wa-style-profile__examples{display:grid;gap:0}.wa-style-profile__example{position:relative;margin:0;padding:6px 0 6px 16px;color:var(--wa-ink);background:transparent;font-size:12px;line-height:1.34;font-weight:430}.wa-style-profile__example:before{content:"";position:absolute;top:14px;left:2px;width:4px;height:4px;border-radius:999px;background:var(--wa-color-muted)}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:24px}.wa-sequence-people-wrap{--wa-sequence-person-card-min-width: 112px;position:relative;isolation:isolate;width:100%;min-width:0;max-width:100%;overflow:visible}.wa-sequence-people-wrap:after{content:"";position:absolute;right:0;bottom:0;left:0;z-index:0;height:1px;background:var(--wa-sequence-tab-line-stroke);pointer-events:none;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%)}.wa-sequence-people{--wa-sequence-person-card-min-width: 112px;position:relative;z-index:1;isolation:isolate;display:flex;gap:4px;align-items:end;width:100%;max-width:100%;margin:0;padding:3px max(16px,calc(50% - var(--wa-sequence-person-card-min-width) / 2)) 0;overflow-x:auto;overflow-y:visible;scroll-snap-type:none;scroll-padding-inline:max(16px,calc(50% - var(--wa-sequence-person-card-min-width) / 2));scrollbar-width:none;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%)}.wa-sequence-people::-webkit-scrollbar{display:none}.wa-sequence-people[data-sequence-centering=true]{scroll-snap-type:none}.wa-sequence-person-card{position:relative;z-index:1;display:grid;flex:0 0 auto;grid-template-columns:28px max-content;gap:8px;align-items:center;width:max-content;min-width:var(--wa-sequence-person-card-min-width);min-height:46px;padding:8px 10px 9px;border:1px solid var(--wa-line-08);border-bottom-color:transparent;border-radius:9px 9px 0 0;color:var(--wa-ink);background:color-mix(in srgb,var(--wa-panel) 82%,#f1f0eb);background-clip:padding-box;font:inherit;text-align:left;opacity:.66;cursor:pointer;scroll-snap-align:none;transform:translateZ(0);transform-origin:center;backface-visibility:hidden;will-change:transform,opacity;transition:border-color .16s ease,background .16s ease,box-shadow .16s ease,opacity .16s ease,transform .18s cubic-bezier(.2,.8,.2,1)}.wa-sequence-person-card:is(:hover,[data-active=true]){border-color:#11110f33;background:var(--wa-panel);opacity:1}.wa-sequence-person-card[data-active=true]{z-index:3;border-color:#11110f3d;border-bottom-color:var(--wa-panel);box-shadow:none;background-clip:border-box}.wa-sequence-person-card[data-active=true]:after{content:none}.wa-sequence-person-card__avatar-wrap{position:relative;display:inline-grid;width:28px;height:28px}.wa-sequence-person-card__avatar{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;overflow:hidden;border:1px solid rgba(17,17,15,.08);border-radius:999px;color:#11110f;background:#e8f3ff;font-size:10px;line-height:1;font-weight:620}.wa-sequence-person-card__company{position:absolute;right:-1px;bottom:-1px;display:grid;place-items:center;width:12px;height:12px;overflow:hidden;border:0;border-radius:999px;background:transparent;box-shadow:0 0 0 1.5px var(--wa-panel),0 1px 2px #11110f1f}.wa-sequence-person-card__company img{display:block;width:100%;height:100%;border-radius:inherit;object-fit:cover}.wa-sequence-person-card__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-sequence-person-card__avatar[data-avatar-tone="2"]{background:#f1eadf}.wa-sequence-person-card__avatar[data-avatar-tone="3"]{background:#e9f5e6}.wa-sequence-person-card__avatar[data-avatar-tone="4"]{background:#f4e8ec}.wa-sequence-person-card__avatar[data-avatar-tone="5"]{background:#e8f1f0}.wa-sequence-person-card__avatar[data-avatar-tone="6"]{background:#f1ede7}.wa-sequence-person-card__avatar[data-avatar-tone="7"]{background:#e9edf5}.wa-sequence-person-card__avatar[data-avatar-tone="8"]{background:#f2eeee}.wa-sequence-person-card__avatar[data-avatar-tone="9"]{background:#edf3e8}.wa-sequence-person-card__copy{display:grid;gap:2px;width:max-content;min-width:0}.wa-sequence-person-card__copy strong{overflow:visible;color:var(--wa-ink);font-size:12px;line-height:1.1;font-weight:560;text-overflow:clip;white-space:nowrap}.wa-sequence-person-card__copy span{overflow:visible;color:var(--wa-color-muted);font-size:10px;line-height:1.12;font-weight:410;text-overflow:clip;white-space:nowrap}.wa-sequence-card{display:grid;grid-template-columns:minmax(0,248px) minmax(0,424px);gap:16px;align-items:start;justify-content:center;min-width:0;padding:0;border:0;background:transparent;box-shadow:none}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-sequence-steps{--wa-sequence-dot-color: #8d8b84;--wa-sequence-dot-selected: #050505;--wa-sequence-dot-stroke: var(--wa-panel);--wa-sequence-dot-center: 8.5px;--wa-sequence-step-size: 82px;display:grid;position:relative;grid-template-columns:52px 10px minmax(0,1fr);align-content:start;column-gap:8px;row-gap:0;min-width:0;margin:14px 0 0;color:#85837b}.wa-sequence-step{position:relative;display:grid;grid-column:2 / 4;grid-template-columns:10px minmax(0,1fr);align-content:start;column-gap:12px;row-gap:8px;align-items:start;width:100%;min-height:var(--wa-sequence-step-size);padding:0;border:0;border-radius:0;color:#85837b;background:transparent;font:inherit;text-align:left;cursor:pointer}.wa-sequence-step:before{content:"";position:absolute;top:calc(var(--wa-sequence-dot-center) - 5.5px);left:-.5px;z-index:2;width:7px;height:7px;box-sizing:content-box;border:2px solid var(--wa-sequence-dot-stroke);border-radius:999px;background:var(--wa-sequence-dot-color)}.wa-sequence-step:after{content:"";position:absolute;top:var(--wa-sequence-dot-center);left:4.5px;z-index:1;width:1px;height:var(--wa-sequence-step-size);border-radius:999px;background:var(--wa-sequence-dot-color)}.wa-sequence-step:last-of-type:after{content:none}.wa-sequence-step__channel{display:inline-flex;grid-column:2;align-items:center;justify-content:start;gap:7px;min-height:0;padding:0;border-radius:0;color:#85837b;background:transparent;font-size:12px;line-height:1;font-weight:500;text-transform:none;transform:translateY(1px)}.wa-sequence-step__icon{display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;color:currentColor;transform:translateY(-1px)}.wa-sequence-step__icon svg{display:block;width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.05;stroke-linecap:round;stroke-linejoin:round}.wa-sequence-step[data-channel=linkedin] .wa-sequence-step__channel,.wa-sequence-step[data-channel=call] .wa-sequence-step__channel{color:#85837b;background:transparent}.wa-sequence-step__copy{display:grid;grid-column:2;gap:5px;min-width:0}.wa-sequence-step__copy strong{color:currentColor;font-size:14px;line-height:1.05;font-weight:520;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-step__copy strong[data-sequence-content-swap-active=true],.wa-sequence-copy-panel__meta[data-sequence-content-swap-active=true],.wa-sequence-copy-panel__subject[data-sequence-content-swap-active=true],.wa-sequence-copy-panel__body[data-sequence-content-swap-active=true]{position:relative;overflow:hidden}.wa-sequence-step__copy strong[data-sequence-content-swap-active=true]{display:block}.wa-sequence-content-swap-clone{position:absolute;inset:0;box-sizing:border-box;display:block;width:100%;max-width:100%;min-width:0;padding:inherit;gap:inherit;color:inherit;font:inherit;line-height:inherit;pointer-events:none;opacity:0;visibility:hidden}.wa-sequence-step__copy strong .wa-sequence-content-swap-clone{display:block;color:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-copy-panel__meta .wa-sequence-content-swap-clone{display:flex;align-items:center}.wa-sequence-copy-panel:not([data-copy-channel=connect]):not([data-copy-channel=call]) .wa-sequence-copy-panel__subject .wa-sequence-content-swap-clone{display:flex;align-items:center}.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__body .wa-sequence-content-swap-clone{display:grid;align-items:inherit;justify-items:inherit}.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__subject[data-sequence-content-swap-active=true],.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__body[data-sequence-content-swap-active=true]{overflow:visible}.wa-sequence-step__copy span{color:var(--wa-color-muted);font-size:10px;line-height:1.22;font-weight:410}.wa-sequence-step[data-step-open=false]{align-items:start;padding:0}.wa-sequence-step[data-step-selected=true]{color:#050505;background:transparent}.wa-sequence-step[data-step-selected=true]:before{background:var(--wa-sequence-dot-selected)}.wa-sequence-step[data-step-selected=true] .wa-sequence-step__channel{color:#050505}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy span{display:none}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy strong .wa-sequence-content-swap-clone{display:block}.wa-sequence-wait{display:grid;grid-column:1;align-items:center;justify-items:end;min-height:var(--wa-sequence-step-size);margin-top:0;padding:0 8px 0 0;color:#5f5d56;font-size:10px;line-height:1.12;font-weight:500;letter-spacing:0;text-align:right;transform:translateY(calc(var(--wa-sequence-dot-center) - var(--wa-sequence-step-size)))}.wa-sequence-wait:before{content:none}.wa-sequence-wait__label{display:grid;width:44px;justify-items:end;text-align:right;white-space:normal}.wa-sequence-wait__prefix,.wa-sequence-wait__value{display:block}.wa-sequence-wait__prefix{padding-right:1px}.wa-sequence-copy-panel{display:grid;align-content:start;gap:0;min-width:0;min-height:336px;padding:0;overflow:hidden;border:1px solid var(--wa-sequence-tab-line-stroke);border-radius:8px;background:var(--wa-panel);box-shadow:0 12px 20px #11110f0f}.wa-sequence-copy-panel[data-copy-channel=connect],.wa-sequence-copy-panel[data-copy-channel=call]{grid-template-rows:auto auto 1fr}.wa-sequence-copy-panel__meta{display:flex;gap:4px;align-items:center;min-height:36px;padding:0 12px;border-bottom:1px solid #c7c4bc;background:#f8f8f0;color:#86847d;font-size:13px;line-height:1;font-weight:410;text-transform:none}.wa-sequence-copy-panel__meta strong{color:#151513;font-weight:410}.wa-sequence-copy-panel[data-copy-channel=connect] .wa-sequence-copy-panel__meta,.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__meta{color:var(--wa-ink);font-weight:410}.wa-sequence-copy-panel__subject{display:flex;align-items:center;min-height:36px;padding:0 12px;border-bottom:1px solid #c7c4bc;color:var(--wa-ink);font-size:14px;line-height:1.12;font-weight:600}.wa-sequence-copy-panel[data-copy-channel=connect] .wa-sequence-copy-panel__subject{display:block;min-height:69px;margin:14px 12px 0;padding:10px 12px;border:1px solid #8f8d85;border-radius:4px;color:#080806;font-size:13px;line-height:1.45;font-weight:500}.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__subject{display:block;min-height:0;padding:14px 12px 0;border-bottom:0;color:#080806;font-size:15px;line-height:1.45;font-weight:500}.wa-sequence-copy-panel__body{margin:0;padding:13px 12px;color:var(--wa-ink);font-size:13px;line-height:1.48;font-weight:500;white-space:pre-line}.wa-sequence-copy-panel[data-copy-channel=connect] .wa-sequence-copy-panel__body{justify-self:end;margin:0;padding:8px 16px 0 0;color:#5f5d56;font-size:12px;line-height:1;font-weight:520;white-space:normal}.wa-sequence-copy-panel[data-copy-channel=call] .wa-sequence-copy-panel__body{display:grid;align-items:end;justify-items:center;min-height:0;padding:0 18px 29px;white-space:normal}.wa-sequence-call-action{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:11px;align-items:center;width:min(100%,286px);min-height:50px;padding:5px 7px 5px 6px;border:1px solid #8f8d85;border-radius:999px;background:var(--wa-panel);box-shadow:0 1px 2px #11110f1f,0 10px 20px #11110f14}.wa-sequence-call-action__avatar{display:inline-grid;place-items:center;width:34px;height:34px;overflow:hidden;border-radius:999px;background:#e8e6df;color:var(--wa-ink);font-size:10px;line-height:1;font-weight:620;filter:grayscale(1);opacity:.74}.wa-sequence-call-action__avatar img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1)}.wa-sequence-call-action__copy{display:grid;gap:2px;min-width:0;color:#706e67}.wa-sequence-call-action__copy strong{overflow:hidden;color:#706e67;font-size:13px;line-height:1.08;font-weight:520;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-call-action__copy span{overflow:hidden;color:#85837b;font-size:12px;line-height:1.08;font-weight:410;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-call-action__button{display:inline-flex;gap:5px;align-items:center;justify-content:center;min-width:74px;min-height:35px;padding:0 13px;border-radius:999px;color:#fffffa;background:#8f8d85;font-size:13px;line-height:1;font-weight:620}.wa-sequence-call-action__icon,.wa-sequence-call-action__icon svg{display:block;width:15px;height:15px}.wa-sequence-call-action__icon svg{fill:none;stroke:currentColor;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}.wa-sequence-step__copy strong,.wa-sequence-copy-panel__meta,.wa-sequence-copy-panel__subject,.wa-sequence-copy-panel__body{backface-visibility:hidden;transform:translateZ(0);will-change:transform,opacity}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-sequence-actions{display:inline-flex;gap:8px;align-items:center;justify-self:end}.wa-sequence-action,.wa-sequence-kickoff{display:inline-flex;align-items:center;justify-content:center;width:auto;min-width:0;min-height:36px;padding:0 12px;border:1px solid var(--wa-ink);border-radius:var(--wa-radius-sm);font:inherit;text-align:center;cursor:pointer}.wa-sequence-action--draft{border-color:#11110f24;color:var(--wa-color-muted);background:#eeede6}.wa-sequence-kickoff{color:var(--wa-color-inverse);background:var(--wa-ink);box-shadow:0 10px 22px #1717141f}.wa-sequence-kickoff__label{font-size:11px;line-height:1.05;font-weight:580}.wa-sequence-kickoff[data-launched=true]{border-color:var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-color-accent)}.wa-composer{position:absolute;right:var(--wa-composer-side-inset);bottom:var(--wa-composer-bottom-outset);left:var(--wa-composer-side-inset);z-index:3;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto;gap:8px;align-items:stretch;height:var(--wa-composer-height);min-height:0;padding:18px 10px 10px 20px;margin:0;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:17px;background:var(--wa-panel);box-shadow:0 48px 88px #05050457,0 18px 38px #0505042e,0 1px #ffffffbd inset;transform-origin:center center;contain:layout paint style;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer__placeholder{display:flex;grid-row:1;align-items:flex-start;align-self:start;min-width:0;min-height:20px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:16px;line-height:1.32;font-weight:400;overflow-wrap:anywhere;white-space:normal}.wa-composer__placeholder:empty:before{content:"Ask anything...";color:var(--wa-placeholder)}.wa-composer__controls{display:inline-flex;grid-row:2;align-items:center;justify-self:end;gap:12px;min-width:0}.wa-composer__select{display:inline-flex;align-items:center;gap:5px;color:#74726a;font-size:12px;line-height:1;font-weight:410;white-space:nowrap}.wa-composer__chevron{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);line-height:1;cursor:default;white-space:nowrap}.wa-composer__send-icon{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__placeholder:empty~.wa-composer__controls .wa-composer__send{background:#aaa89e}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height) - var(--wa-history-resume-y-offset));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__svg{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 2px 3px var(--wa-cursor-shadow))}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor__mimic-head,.wa-cursor__mimic-tail{position:absolute;inset:0;display:none;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none;transform-origin:6px 13.25px;backface-visibility:hidden}.wa-cursor__mimic-head{z-index:2;background-image:var(--wa-cursor-arrow-head)}.wa-cursor__mimic-tail{z-index:1;background-image:var(--wa-cursor-arrow-tail)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-head,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{display:block}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{animation:wa-cursor-tail-wag 245ms infinite}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-cursor-tail-wag{0%,to{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translateZ(0) rotate(-1deg) skew(0)}24%{animation-timing-function:cubic-bezier(.16,0,.24,1);transform:translate3d(.22px,0,0) rotate(9.5deg) skew(1.65deg)}38%{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translate3d(.08px,0,0) rotate(3.6deg) skew(.65deg)}64%{animation-timing-function:cubic-bezier(.2,0,.24,1);transform:translate3d(-.2px,0,0) rotate(-8.5deg) skew(-1.5deg)}}@keyframes wa-thinking-logo-gradient{0%{background-position:120% 50%}to{background-position:-120% 50%}}@keyframes wa-mailbox-gmail-radiate{0%{background-position:0% 50%,0% 50%}50%{background-position:100% 50%,100% 50%}to{background-position:0% 50%,0% 50%}}@keyframes wa-mailbox-gmail-pulse{0%,to{transform:scale(.98)}50%{transform:scale(1.08)}}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-spin{to{transform:rotate(360deg)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1380px){.wa-section{--wa-title-size: clamp(48px, 4.5vw, 58px);--wa-title-line-height: 1.08;--wa-feature-title-size: clamp(36px, 3.5vw, 44px);--wa-feature-copy-size: clamp(20px, 2.1vw, 25px);--wa-window-width: min(82vw, 912px);--wa-window-height: min(820px, 74vw);--wa-chat-x-padding: 24px;padding:88px clamp(56px,6vw,80px) 118px}.wa-section__inner{grid-template-columns:1fr;grid-template-rows:auto auto auto;row-gap:clamp(92px,11vw,154px);width:100%}.wa-copy{max-width:min(1160px,100%)}.wa-story-controls,.wa-stage{grid-column:1}.wa-story-controls{grid-template-columns:minmax(0,1fr) auto;align-items:start;width:min(1080px,100%);justify-self:start;gap:28px;padding-top:0}.wa-story-tabs{min-width:0;gap:0}.wa-story-tab{display:none}.wa-story-tab.is-active{display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto auto;min-height:0;gap:0;align-items:start}.wa-story-tab.is-active .wa-story-tab__marker{order:2;width:100%;height:4px;min-height:4px;margin-top:42px;cursor:ew-resize}.wa-story-tab.is-active .wa-story-tab__marker:before{transform:scaleX(var(--wa-tab-progress));transform-origin:left}.wa-story-tab__body{order:1;min-width:0;gap:20px;padding-top:0}.wa-story-tab__count{display:block;color:var(--wa-color-heading-strong);font-size:23px;line-height:1;font-weight:560;letter-spacing:0}.wa-story-tab__title{overflow:visible;white-space:normal;text-overflow:clip;font-size:var(--wa-feature-title-size);line-height:1.04}.wa-story-tab__description{display:block;max-width:960px;font-size:var(--wa-feature-copy-size);line-height:1.24}.wa-controls-row{position:static;display:grid;align-items:center;justify-content:end;gap:18px;width:auto;height:auto;overflow:visible;clip:auto;clip-path:none;white-space:normal;padding-top:58px}.wa-story-count,.wa-controls-row [data-toggle-play],.wa-controls-row .wa-scrubber{display:none}.wa-control-button{display:grid;place-items:center;width:54px;height:54px;padding:0;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#dcdcd4d6;box-shadow:none;cursor:pointer}.wa-controls-row [data-prev-story] svg,.wa-controls-row [data-next-story] svg{transform:rotate(90deg)}.wa-control-button:hover{border-color:var(--wa-line-20);background:#fffff9f0}.wa-control-button:focus-visible{outline:2px solid var(--wa-color-accent);outline-offset:3px}.wa-stage{grid-row:3;width:100%;min-height:calc(var(--wa-window-height) + 132px);justify-self:center;overflow:visible}.wa-stage[data-window-content-scale]{min-height:var(--wa-window-scene-height)}.wa-stage__media{top:180px;right:auto;left:50%;width:min(100vw,1220px);height:min(540px,46vw);min-height:460px;transform:translate(-50%)}.wa-window{width:var(--wa-window-width);margin:0 auto}.wa-chat-shell{height:var(--wa-window-height)}}@media(max-width:760px){.wa-section{--wa-mobile-page-inset: clamp(24px, 7vw, 34px);--wa-chat-x-padding: 12px;--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 88px;--wa-composer-send-size: 32px;--wa-history-resume-height: 40px;--wa-window-width: 590px;--wa-window-height: 860px;padding:38px 0 0}.wa-section__inner{row-gap:0;width:100%}.wa-copy{padding-right:var(--wa-mobile-page-inset);padding-left:var(--wa-mobile-page-inset)}.wa-copy{margin-bottom:86px}.wa-copy__title{font-size:clamp(38px,9.8vw,48px);line-height:1.14}.wa-story-controls{display:grid;grid-template-areas:"nav" "story";grid-template-columns:1fr;width:100%;gap:0;padding-right:0;padding-left:0}.wa-controls-row{grid-area:nav;display:inline-flex;justify-content:flex-start;gap:24px;padding-top:0;padding-right:var(--wa-mobile-page-inset);padding-left:var(--wa-mobile-page-inset)}.wa-story-count{display:inline-flex;align-items:center;color:var(--wa-color-heading-strong);font-size:25px;line-height:1;font-weight:560;letter-spacing:0}.wa-control-button{width:52px;height:52px}.wa-controls-row [data-prev-story] svg,.wa-controls-row [data-next-story] svg{transform:none}.wa-story-tabs{grid-area:story;gap:0;margin-top:30px}.wa-story-tab{gap:0;min-height:0}.wa-story-tab.is-active .wa-story-tab__marker{width:100%;height:2px;min-height:2px;margin-top:52px;margin-left:0}.wa-story-tab__body{gap:22px;padding-top:0;padding-right:var(--wa-mobile-page-inset);padding-left:var(--wa-mobile-page-inset)}.wa-story-tab__count{display:none}.wa-story-tab__title{font-size:clamp(31px,7.1vw,38px);line-height:1.05}.wa-story-tab__description{font-size:clamp(18px,4.2vw,22px);line-height:1.26}.wa-stage{--wa-window-scene-min-width: 590px;width:100vw;min-height:var(--wa-window-height);margin-top:0;overflow:visible}.wa-stage[data-window-content-scale]{min-height:var(--wa-window-scene-height)}.wa-stage__media{display:none}.wa-window{width:var(--wa-window-width);margin:0 auto;border-radius:0}.wa-chat-shell{height:var(--wa-window-height);border-right:0;border-left:0;border-radius:0}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{gap:10px;padding-bottom:0}.wa-signup-scene__title{margin-bottom:16px;font-size:26px}.wa-signup-field{grid-template-columns:minmax(0,1fr) 36px;gap:9px;width:min(320px,86%);min-height:54px;padding:0 8px 0 15px;border-radius:14px;font-size:16px}.wa-signup-field__submit{width:36px;height:36px}.wa-signup-field__submit-icon{width:16px;height:16px}.wa-research-step{min-height:64px;gap:8px;padding-left:0}.wa-research-step__label{font-size:14px}.wa-research-step__detail{font-size:13px}.wa-data-source-grid__column{gap:11px}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-swipe-game__actions,.wa-sequence-card{grid-template-columns:minmax(0,1fr)}.wa-sequence-copy-panel{min-height:140px}.wa-sequence-step{grid-template-columns:minmax(0,1fr)}.wa-sequence-step__channel{justify-self:start;padding:0}.wa-sequence-wait{grid-template-columns:minmax(0,1fr);min-height:16px;padding:0 8px}.wa-sequence-wait:before{display:none}.wa-sequence-people{--wa-sequence-person-card-min-width: 104px;padding-inline:max(14px,calc(50% - var(--wa-sequence-person-card-min-width) / 2));scroll-padding-inline:max(14px,calc(50% - var(--wa-sequence-person-card-min-width) / 2))}.wa-sequence-person-card{grid-template-columns:24px max-content;gap:7px;min-height:42px;padding:7px 9px 8px}.wa-sequence-person-card__avatar-wrap,.wa-sequence-person-card__avatar{width:24px;height:24px}.wa-sequence-person-card__company{width:10px;height:10px}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:5px 4px;font-size:8.5px;line-height:1.12}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:9px}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=fullName],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:4px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-section .wa-data-table__add{right:2px;width:22px;height:20px;border-radius:4px;font-size:15px}.wa-data-table__footer{align-items:start;gap:6px;padding-top:6px}.wa-data-table__actions{gap:5px}.wa-data-table-action{min-height:28px;padding:0 8px;border-radius:5px}.wa-data-table-action__icon{width:16px;height:16px}.wa-data-table-action__label{font-size:10px}.wa-data-table-action__badge{min-height:12px;padding:0 4px;font-size:6.5px}.wa-data-table-floating-tooltip{min-height:25px;padding:0 9px;font-size:9.5px}.wa-data-table-floating-tooltip[data-has-badge=true]{min-height:43px;padding:7px 9px;gap:5px}.wa-data-table-floating-tooltip__badge{min-height:13px;padding:0 5px;font-size:7px}.wa-data-table__pagination{gap:4px;font-size:7.5px}.wa-data-table__page-controls{gap:2px}.wa-data-table__page-button{width:17px;height:17px;border-radius:4px;font-size:7.5px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__copy{gap:1px;margin-top:0}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:9px;line-height:1.03}.wa-data-table-person__detail{font-size:7.5px;line-height:1.04}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){gap:4px}.wa-data-table-cell-badge{min-height:14px;padding:0;font-size:7px}.wa-mailbox-connection__card{grid-template-columns:minmax(0,1fr);gap:12px;padding:12px;border-radius:10px}.wa-mailbox-connection__copy{gap:9px}.wa-mailbox-connection__actions{justify-self:end;width:min(124px,100%)}.wa-mailbox-connection__title{font-size:16px}.wa-mailbox-connection__subtitle{max-width:none;font-size:12.5px}.wa-mailbox-connection__button{min-height:36px;font-size:12.5px;padding:0 9px}.wa-mailbox-learning{grid-template-columns:36px max-content minmax(48px,1fr);gap:4px 10px}.wa-mailbox-learning__thumbprint{width:36px;height:36px}.wa-mailbox-thumbprint{width:30px;height:30px}.wa-mailbox-learning__title{font-size:14px}.wa-mailbox-learning__detail{font-size:13px}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:var(--wa-thinking-icon-column) auto;gap:8px;padding:0;font-size:14px}.wa-waterfall-rows{gap:0}.wa-waterfall-row{grid-template-columns:var(--wa-thinking-icon-column) 100px max-content;gap:7px;min-height:30px;font-size:14px}.wa-waterfall-chip{min-height:26px;padding:0 8px 0 6px;gap:5px;font-size:11px}.wa-waterfall-chip__icon,.wa-waterfall-chip__icon svg{width:13px;height:13px}.wa-waterfall-chip__mark{width:13px}.wa-waterfall-chip__state-icon{flex-basis:14px;width:14px;height:14px}.wa-waterfall-chip__state-icon svg{width:14px;height:14px}.wa-waterfall-arrow{width:16px;height:16px}.wa-waterfall-service-step{gap:5px}.wa-swipe-game{max-width:100%}.wa-swipe-game__stack{height:168px}.wa-swipe-card{padding:18px 16px}.wa-swipe-card__label{font-size:16px}.wa-swipe-card__detail{font-size:10.5px}.wa-composer{grid-template-columns:minmax(0,1fr);height:var(--wa-composer-height);padding:14px 9px 9px 14px;border-radius:15px}.wa-composer__placeholder{min-height:22px;font-size:16px}.wa-composer__controls{gap:10px}.wa-composer__select{gap:4px;font-size:11px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}`, Wd = "chatbot-stories-runtime-styles";
function Yd() {
  Vd(Wd, Gd);
}
const _i = Hd(Fd, { injectStyles: Yd });
function Qd(r = "[data-chatbot-stories]", e = {}) {
  return _i.init(r, e);
}
const jd = {
  init: Qd,
  defaultStories: xo
};
typeof window < "u" && (window.ChatbotStories = jd, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _i.autoInit, { once: !0 }) : _i.autoInit());
export {
  xo as defaultStories,
  Qd as init
};
