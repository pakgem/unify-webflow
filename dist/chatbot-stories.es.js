function Ae(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Or(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
}
var le = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Pt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ma, X, N, pe = 1e8, M = 1 / pe, fa = Math.PI * 2, Hi = fa / 4, Gi = 0, zr = Math.sqrt, Ui = Math.cos, Yi = Math.sin, j = function(e) {
  return typeof e == "string";
}, q = function(e) {
  return typeof e == "function";
}, Se = function(e) {
  return typeof e == "number";
}, Ra = function(e) {
  return typeof e > "u";
}, ye = function(e) {
  return typeof e == "object";
}, $ = function(e) {
  return e !== !1;
}, Na = function() {
  return typeof window < "u";
}, Ft = function(e) {
  return q(e) || j(e);
}, Lr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, Wi = /random\([^)]+\)/g, Vi = /,\s*/g, Ka = /(?:-?\.?\d|\.)+/gi, Fr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ia = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Br = /[+-]=-?[.\d]+/, ji = /[^,'"\[\]\s]+/gi, Xi = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, z, we, wa, Da, de = {}, jt = {}, qr, Hr = function(e) {
  return (jt = lt(e, de)) && re;
}, Oa = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, It = function(e, t) {
  return !t && console.warn(e);
}, Gr = function(e, t) {
  return e && (de[e] = t) && jt && (jt[e] = t) || de;
}, Mt = function() {
  return 0;
}, Ji = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Yt = {
  suppressEvents: !0,
  kill: !1
}, Qi = {
  suppressEvents: !0
}, za = {}, Me = [], _a = {}, Ur, ie = {}, na = {}, $a = 30, Wt = [], La = "", Fa = function(e) {
  var t = e[0], a, r;
  if (ye(t) || q(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (r = Wt.length; r-- && !Wt[r].targetTest(t); )
      ;
    a = Wt[r];
  }
  for (r = e.length; r--; )
    e[r] && (e[r]._gsap || (e[r]._gsap = new ui(e[r], a))) || e.splice(r, 1);
  return e;
}, We = function(e) {
  return e._gsap || Fa(me(e))[0]._gsap;
}, Yr = function(e, t, a) {
  return (a = e[t]) && q(a) ? e[t]() : Ra(a) && e.getAttribute && e.getAttribute(t) || a;
}, ee = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, U = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, O = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, nt = function(e, t) {
  var a = t.charAt(0), r = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + r : a === "-" ? e - r : a === "*" ? e * r : e / r;
}, Zi = function(e, t) {
  for (var a = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < a; )
    ;
  return r < a;
}, Xt = function() {
  var e = Me.length, t = Me.slice(0), a, r;
  for (_a = {}, Me.length = 0, a = 0; a < e; a++)
    r = t[a], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Ba = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Wr = function(e, t, a, r) {
  Me.length && !X && Xt(), e.render(t, a, !!(X && t < 0 && Ba(e))), Me.length && !X && Xt();
}, Vr = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(ji).length < 2 ? t : j(e) ? e.trim() : e;
}, jr = function(e) {
  return e;
}, ce = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, Ki = function(e) {
  return function(t, a) {
    for (var r in a)
      r in t || r === "duration" && e || r === "ease" || (t[r] = a[r]);
  };
}, lt = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, er = function o(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = ye(t[a]) ? o(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, Jt = function(e, t) {
  var a = {}, r;
  for (r in e)
    r in t || (a[r] = e[r]);
  return a;
}, Ct = function(e) {
  var t = e.parent || z, a = e.keyframes ? Ki(Z(e.keyframes)) : ce;
  if ($(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, $i = function(e, t) {
  for (var a = e.length, r = a === t.length; r && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, Xr = function(e, t, a, r, i) {
  var n = e[r], s;
  if (i)
    for (s = t[i]; n && n[i] > s; )
      n = n._prev;
  return n ? (t._next = n._next, n._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = n, t.parent = t._dp = e, t;
}, ta = function(e, t, a, r) {
  a === void 0 && (a = "_first"), r === void 0 && (r = "_last");
  var i = t._prev, n = t._next;
  i ? i._next = n : e[a] === t && (e[a] = n), n ? n._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, Ne = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Ve = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, en = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ba = function(e, t, a, r) {
  return e._startAt && (X ? e._startAt.revert(Yt) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, tn = function o(e) {
  return !e || e._ts && o(e.parent);
}, tr = function(e) {
  return e._repeat ? dt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, dt = function(e, t) {
  var a = Math.floor(e = O(e / t));
  return e && a === e ? a - 1 : a;
}, Qt = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, aa = function(e) {
  return e._end = O(e._start + (e._tDur / Math.abs(e._ts || e._rts || M) || 0));
}, ra = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = O(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), aa(e), a._dirty || Ve(a, e)), e;
}, Jr = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Qt(e.rawTime(), t), (!t._dur || Lt(0, t.totalDuration(), a) - t._tTime > M) && t.render(a, !0)), Ve(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -M;
  }
}, _e = function(e, t, a, r) {
  return t.parent && Ne(t), t._start = O((Se(a) ? a : a || e !== z ? he(e, a, t) : e._time) + t._delay), t._end = O(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Xr(e, t, "_first", "_last", e._sort ? "_start" : 0), ya(t) || (e._recent = t), r || Jr(e, t), e._ts < 0 && ra(e, e._tTime), e;
}, Qr = function(e, t) {
  return (de.ScrollTrigger || Oa("scrollTrigger", t)) && de.ScrollTrigger.create(t, e);
}, Zr = function(e, t, a, r, i) {
  if (Ha(e, t, i), !e._initted)
    return 1;
  if (!a && e._pt && !X && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ur !== ne.frame)
    return Me.push(e), e._lazy = [i, r], 1;
}, an = function o(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
}, ya = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, rn = function(e, t, a, r) {
  var i = e.ratio, n = t < 0 || !t && (!e._start && an(e) && !(!e._initted && ya(e)) || (e._ts < 0 || e._dp._ts < 0) && !ya(e)) ? 0 : 1, s = e._rDelay, l = 0, d, c, u;
  if (s && e._repeat && (l = Lt(0, e._tDur, t), c = dt(l, s), e._yoyo && c & 1 && (n = 1 - n), c !== dt(e._tTime, s) && (i = 1 - n, e.vars.repeatRefresh && e._initted && e.invalidate())), n !== i || X || r || e._zTime === M || !t && e._zTime) {
    if (!e._initted && Zr(e, t, r, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? M : 0), a || (a = t && !u), e.ratio = n, e._from && (n = 1 - n), e._time = 0, e._tTime = l, d = e._pt; d; )
      d.r(n, d.d), d = d._next;
    t < 0 && ba(e, t, a, !0), e._onUpdate && !a && se(e, "onUpdate"), l && e._repeat && !a && e.parent && se(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === n && (n && Ne(e, 1), !a && !X && (se(e, n ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, nn = function(e, t, a) {
  var r;
  if (a > t)
    for (r = e._first; r && r._start <= a; ) {
      if (r.data === "isPause" && r._start > t)
        return r;
      r = r._next;
    }
  else
    for (r = e._last; r && r._start >= a; ) {
      if (r.data === "isPause" && r._start < t)
        return r;
      r = r._prev;
    }
}, ct = function(e, t, a, r) {
  var i = e._repeat, n = O(t) || 0, s = e._tTime / e._tDur;
  return s && !r && (e._time *= n / e._dur), e._dur = n, e._tDur = i ? i < 0 ? 1e10 : O(n * (i + 1) + e._rDelay * i) : n, s > 0 && !r && ra(e, e._tTime = e._tDur * s), e.parent && aa(e), a || Ve(e.parent, e), e;
}, ar = function(e) {
  return e instanceof K ? Ve(e) : ct(e, e._dur);
}, sn = {
  _start: 0,
  endTime: Mt,
  totalDuration: Mt
}, he = function o(e, t, a) {
  var r = e.labels, i = e._recent || sn, n = e.duration() >= pe ? i.endTime(!1) : e._dur, s, l, d;
  return j(t) && (isNaN(t) || t in r) ? (l = t.charAt(0), d = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (s < 0 ? i : a).totalDuration() / 100 : 1)) : s < 0 ? (t in r || (r[t] = n), r[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), d && a && (l = l / 100 * (Z(a) ? a[0] : a).totalDuration()), s > 1 ? o(e, t.substr(0, s - 1), a) + l : n + l)) : t == null ? n : +t;
}, St = function(e, t, a) {
  var r = Se(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), n = t[i], s, l;
  if (r && (n.duration = t[1]), n.parent = a, e) {
    for (s = n, l = a; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = $(l.vars.inherit) && l.parent;
    n.immediateRender = $(s.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[i - 1];
  }
  return new Y(t[0], n, t[i + 1]);
}, ze = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Lt = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, Q = function(e, t) {
  return !j(e) || !(t = Xi.exec(e)) ? "" : t[1];
}, on = function(e, t, a) {
  return ze(a, function(r) {
    return Lt(e, t, r);
  });
}, xa = [].slice, Kr = function(e, t) {
  return e && ye(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ye(e[0])) && !e.nodeType && e !== we;
}, ln = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(r) {
    var i;
    return j(r) && !t || Kr(r, 1) ? (i = a).push.apply(i, me(r)) : a.push(r);
  }) || a;
}, me = function(e, t, a) {
  return N && !t && N.selector ? N.selector(e) : j(e) && !a && (wa || !ut()) ? xa.call((t || Da).querySelectorAll(e), 0) : Z(e) ? ln(e, a) : Kr(e) ? xa.call(e, 0) : e ? [e] : [];
}, va = function(e) {
  return e = me(e)[0] || It("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return me(t, a.querySelectorAll ? a : a === e ? It("Invalid scope") || Da.createElement("div") : e);
  };
}, $r = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ei = function(e) {
  if (q(e))
    return e;
  var t = ye(e) ? e : {
    each: e
  }, a = je(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, n = {}, s = r > 0 && r < 1, l = isNaN(r) || s, d = t.axis, c = r, u = r;
  return j(r) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !s && l && (c = r[0], u = r[1]), function(p, m, g) {
    var h = (g || t).length, f = n[h], y, _, x, v, b, S, A, C, k;
    if (!f) {
      if (k = t.grid === "auto" ? 0 : (t.grid || [1, pe])[1], !k) {
        for (A = -pe; A < (A = g[k++].getBoundingClientRect().left) && k < h; )
          ;
        k < h && k--;
      }
      for (f = n[h] = [], y = l ? Math.min(k, h) * c - 0.5 : r % k, _ = k === pe ? 0 : l ? h * u / k - 0.5 : r / k | 0, A = 0, C = pe, S = 0; S < h; S++)
        x = S % k - y, v = _ - (S / k | 0), f[S] = b = d ? Math.abs(d === "y" ? v : x) : zr(x * x + v * v), b > A && (A = b), b < C && (C = b);
      r === "random" && $r(f), f.max = A - C, f.min = C, f.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (k > h ? h - 1 : d ? d === "y" ? h / k : k : Math.max(k, h / k)) || 0) * (r === "edges" ? -1 : 1), f.b = h < 0 ? i - h : i, f.u = Q(t.amount || t.each) || 0, a = a && h < 0 ? xn(a) : a;
    }
    return h = (f[p] - f.min) / f.max || 0, O(f.b + (a ? a(h) : h) * f.v) + f.u;
  };
}, Aa = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var r = O(Math.round(parseFloat(a) / e) * e * t);
    return (r - r % 1) / t + (Se(a) ? 0 : Q(a));
  };
}, ti = function(e, t) {
  var a = Z(e), r, i;
  return !a && ye(e) && (r = a = e.radius || pe, e.values ? (e = me(e.values), (i = !Se(e[0])) && (r *= r)) : e = Aa(e.increment)), ze(t, a ? q(e) ? function(n) {
    return i = e(n), Math.abs(i - n) <= r ? i : n;
  } : function(n) {
    for (var s = parseFloat(i ? n.x : n), l = parseFloat(i ? n.y : 0), d = pe, c = 0, u = e.length, p, m; u--; )
      i ? (p = e[u].x - s, m = e[u].y - l, p = p * p + m * m) : p = Math.abs(e[u] - s), p < d && (d = p, c = u);
    return c = !r || d <= r ? e[c] : n, i || c === n || Se(n) ? c : c + Q(n);
  } : Aa(e));
}, ai = function(e, t, a, r) {
  return ze(Z(e) ? !t : a === !0 ? !!(a = 0) : !r, function() {
    return Z(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (r = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * r) / r;
  });
}, dn = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(r) {
    return t.reduce(function(i, n) {
      return n(i);
    }, r);
  };
}, cn = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || Q(a));
  };
}, un = function(e, t, a) {
  return ii(e, t, 0, 1, a);
}, ri = function(e, t, a) {
  return ze(a, function(r) {
    return e[~~t(r)];
  });
}, hn = function o(e, t, a) {
  var r = t - e;
  return Z(e) ? ri(e, o(0, e.length), t) : ze(a, function(i) {
    return (r + (i - e) % r) % r + e;
  });
}, pn = function o(e, t, a) {
  var r = t - e, i = r * 2;
  return Z(e) ? ri(e, o(0, e.length - 1), t) : ze(a, function(n) {
    return n = (i + (n - e) % i) % i || 0, e + (n > r ? i - n : n);
  });
}, Rt = function(e) {
  return e.replace(Wi, function(t) {
    var a = t.indexOf("[") + 1, r = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(Vi);
    return ai(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ii = function(e, t, a, r, i) {
  var n = t - e, s = r - a;
  return ze(i, function(l) {
    return a + ((l - e) / n * s || 0);
  });
}, mn = function o(e, t, a, r) {
  var i = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!i) {
    var n = j(e), s = {}, l, d, c, u, p;
    if (a === !0 && (r = 1) && (a = null), n)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Z(e) && !Z(t)) {
      for (c = [], u = e.length, p = u - 2, d = 1; d < u; d++)
        c.push(o(e[d - 1], e[d]));
      u--, i = function(g) {
        g *= u;
        var h = Math.min(p, ~~g);
        return c[h](g - h);
      }, a = t;
    } else r || (e = lt(Z(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        qa.call(s, e, l, "get", t[l]);
      i = function(g) {
        return Ya(g, s) || (n ? e.p : e);
      };
    }
  }
  return ze(a, i);
}, rr = function(e, t, a) {
  var r = e.labels, i = pe, n, s, l;
  for (n in r)
    s = r[n] - t, s < 0 == !!a && s && i > (s = Math.abs(s)) && (l = n, i = s);
  return l;
}, se = function(e, t, a) {
  var r = e.vars, i = r[t], n = N, s = e._ctx, l, d, c;
  if (i)
    return l = r[t + "Params"], d = r.callbackScope || e, a && Me.length && Xt(), s && (N = s), c = l ? i.apply(d, l) : i.call(d), N = n, c;
}, vt = function(e) {
  return Ne(e), e.scrollTrigger && e.scrollTrigger.kill(!!X), e.progress() < 1 && se(e, "onInterrupt"), e;
}, it, ni = [], si = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Na() || e.headless) {
      var t = e.name, a = q(e), r = t && !a && e.init ? function() {
        this._props = [];
      } : e, i = {
        init: Mt,
        render: Ya,
        add: qa,
        kill: Mn,
        modifier: In,
        rawVars: 0
      }, n = {
        targetTest: 0,
        get: 0,
        getSetter: Ua,
        aliases: {},
        register: 0
      };
      if (ut(), e !== r) {
        if (ie[t])
          return;
        ce(r, ce(Jt(e, i), n)), lt(r.prototype, lt(i, Jt(e, n))), ie[r.prop = t] = r, e.targetTest && (Wt.push(r), za[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Gr(t, r), e.register && e.register(re, r, te);
    } else
      ni.push(e);
}, I = 255, At = {
  aqua: [0, I, I],
  lime: [0, I, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, I],
  navy: [0, 0, 128],
  white: [I, I, I],
  olive: [128, 128, 0],
  yellow: [I, I, 0],
  orange: [I, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [I, 0, 0],
  pink: [I, 192, 203],
  cyan: [0, I, I],
  transparent: [I, I, I, 0]
}, sa = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * I + 0.5 | 0;
}, oi = function(e, t, a) {
  var r = e ? Se(e) ? [e >> 16, e >> 8 & I, e & I] : 0 : At.black, i, n, s, l, d, c, u, p, m, g;
  if (!r) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), At[e])
      r = At[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (i = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + i + i + n + n + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & I, r & I, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & I, e & I];
    } else if (e.substr(0, 3) === "hsl") {
      if (r = g = e.match(Ka), !t)
        l = +r[0] % 360 / 360, d = +r[1] / 100, c = +r[2] / 100, n = c <= 0.5 ? c * (d + 1) : c + d - c * d, i = c * 2 - n, r.length > 3 && (r[3] *= 1), r[0] = sa(l + 1 / 3, i, n), r[1] = sa(l, i, n), r[2] = sa(l - 1 / 3, i, n);
      else if (~e.indexOf("="))
        return r = e.match(Fr), a && r.length < 4 && (r[3] = 1), r;
    } else
      r = e.match(Ka) || At.transparent;
    r = r.map(Number);
  }
  return t && !g && (i = r[0] / I, n = r[1] / I, s = r[2] / I, u = Math.max(i, n, s), p = Math.min(i, n, s), c = (u + p) / 2, u === p ? l = d = 0 : (m = u - p, d = c > 0.5 ? m / (2 - u - p) : m / (u + p), l = u === i ? (n - s) / m + (n < s ? 6 : 0) : u === n ? (s - i) / m + 2 : (i - n) / m + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(d * 100 + 0.5), r[2] = ~~(c * 100 + 0.5)), a && r.length < 4 && (r[3] = 1), r;
}, li = function(e) {
  var t = [], a = [], r = -1;
  return e.split(Re).forEach(function(i) {
    var n = i.match(rt) || [];
    t.push.apply(t, n), a.push(r += n.length + 1);
  }), t.c = a, t;
}, ir = function(e, t, a) {
  var r = "", i = (e + r).match(Re), n = t ? "hsla(" : "rgba(", s = 0, l, d, c, u;
  if (!i)
    return e;
  if (i = i.map(function(p) {
    return (p = oi(p, t, 1)) && n + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), a && (c = li(e), l = a.c, l.join(r) !== c.c.join(r)))
    for (d = e.replace(Re, "1").split(rt), u = d.length - 1; s < u; s++)
      r += d[s] + (~l.indexOf(s) ? i.shift() || n + "0,0,0,0)" : (c.length ? c : i.length ? i : a).shift());
  if (!d)
    for (d = e.split(Re), u = d.length - 1; s < u; s++)
      r += d[s] + i[s];
  return r + d[u];
}, Re = (function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in At)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
})(), gn = /hsl[a]?\(/, di = function(e) {
  var t = e.join(" "), a;
  if (Re.lastIndex = 0, Re.test(t))
    return a = gn.test(t), e[1] = ir(e[1], a), e[0] = ir(e[0], a, li(e[1])), !0;
}, Nt, ne = (function() {
  var o = Date.now, e = 500, t = 33, a = o(), r = a, i = 1e3 / 240, n = i, s = [], l, d, c, u, p, m, g = function h(f) {
    var y = o() - r, _ = f === !0, x, v, b, S;
    if ((y > e || y < 0) && (a += y - t), r += y, b = r - a, x = b - n, (x > 0 || _) && (S = ++u.frame, p = b - u.time * 1e3, u.time = b = b / 1e3, n += x + (x >= i ? 4 : i - x), v = 1), _ || (l = d(h)), v)
      for (m = 0; m < s.length; m++)
        s[m](b, p, S, f);
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
      qr && (!wa && Na() && (we = wa = window, Da = we.document || {}, de.gsap = re, (we.gsapVersions || (we.gsapVersions = [])).push(re.version), Hr(jt || we.GreenSockGlobals || !we.gsap && we || {}), ni.forEach(si)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), d = c || function(f) {
        return setTimeout(f, n - u.time * 1e3 + 1 | 0);
      }, Nt = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Nt = 0, d = Mt;
    },
    lagSmoothing: function(f, y) {
      e = f || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(f) {
      i = 1e3 / (f || 240), n = u.time * 1e3 + i;
    },
    add: function(f, y, _) {
      var x = y ? function(v, b, S, A) {
        f(v, b, S, A), u.remove(x);
      } : f;
      return u.remove(f), s[_ ? "unshift" : "push"](x), ut(), x;
    },
    remove: function(f, y) {
      ~(y = s.indexOf(f)) && s.splice(y, 1) && m >= y && m--;
    },
    _listeners: s
  }, u;
})(), ut = function() {
  return !Nt && ne.wake();
}, P = {}, fn = /^[\d.\-M][\d.\-,\s]/, wn = /["']/g, _n = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), r = a[0], i = 1, n = a.length, s, l, d; i < n; i++)
    l = a[i], s = i !== n - 1 ? l.lastIndexOf(",") : l.length, d = l.substr(0, s), t[r] = isNaN(d) ? d.replace(wn, "").trim() : +d, r = l.substr(s + 1).trim();
  return t;
}, bn = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), r = e.indexOf("(", t);
  return e.substring(t, ~r && r < a ? e.indexOf(")", a + 1) : a);
}, yn = function(e) {
  var t = (e + "").split("("), a = P[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [_n(t[1])] : bn(e).split(",").map(Vr)) : P._CE && fn.test(e) ? P._CE("", e) : a;
}, xn = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, je = function(e, t) {
  return e && (q(e) ? e : P[e] || yn(e)) || t;
}, Je = function(e, t, a, r) {
  a === void 0 && (a = function(l) {
    return 1 - t(1 - l);
  }), r === void 0 && (r = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var i = {
    easeIn: t,
    easeOut: a,
    easeInOut: r
  }, n;
  return ee(e, function(s) {
    P[s] = de[s] = i, P[n = s.toLowerCase()] = a;
    for (var l in i)
      P[n + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = P[s + "." + l] = i[l];
  }), i;
}, ci = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, oa = function o(e, t, a) {
  var r = t >= 1 ? t : 1, i = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), n = i / fa * (Math.asin(1 / r) || 0), s = function(c) {
    return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Yi((c - n) * i) + 1;
  }, l = e === "out" ? s : e === "in" ? function(d) {
    return 1 - s(1 - d);
  } : ci(s);
  return i = fa / i, l.config = function(d, c) {
    return o(e, d, c);
  }, l;
}, la = function o(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(n) {
    return n ? --n * n * ((t + 1) * n + t) + 1 : 0;
  }, r = e === "out" ? a : e === "in" ? function(i) {
    return 1 - a(1 - i);
  } : ci(a);
  return r.config = function(i) {
    return o(e, i);
  }, r;
};
ee("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var t = e < 5 ? e + 1 : e;
  Je(o + ",Power" + (t - 1), e ? function(a) {
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
Je("Elastic", oa("in"), oa("out"), oa());
(function(o, e) {
  var t = 1 / e, a = 2 * t, r = 2.5 * t, i = function(s) {
    return s < t ? o * s * s : s < a ? o * Math.pow(s - 1.5 / e, 2) + 0.75 : s < r ? o * (s -= 2.25 / e) * s + 0.9375 : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  Je("Bounce", function(n) {
    return 1 - i(1 - n);
  }, i);
})(7.5625, 2.75);
Je("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
Je("Circ", function(o) {
  return -(zr(1 - o * o) - 1);
});
Je("Sine", function(o) {
  return o === 1 ? 1 : -Ui(o * Hi) + 1;
});
Je("Back", la("in"), la("out"), la());
P.SteppedEase = P.steps = de.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, r = e + (t ? 0 : 1), i = t ? 1 : 0, n = 1 - M;
    return function(s) {
      return ((r * Lt(0, n, s) | 0) + i) * a;
    };
  }
};
Pt.ease = P["quad.out"];
ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return La += o + "," + o + "Params,";
});
var ui = function(e, t) {
  this.id = Gi++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Yr, this.set = t ? t.getSetter : Ua;
}, Dt = /* @__PURE__ */ (function() {
  function o(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ct(this, +t.duration, 1, 1), this.data = t.data, N && (this._ctx = N, N.data.push(this)), Nt || ne.wake();
  }
  var e = o.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, ct(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, r) {
    if (ut(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (ra(this, a), !i._dp || i.parent || Jr(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && _e(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !r || this._initted && Math.abs(this._zTime) === M || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), Wr(this, a, r)), this;
  }, e.time = function(a, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + tr(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), r) : this._time;
  }, e.totalProgress = function(a, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + tr(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, r) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * i, r) : this._repeat ? dt(this._tTime, i) + 1 : 1;
  }, e.timeScale = function(a, r) {
    if (!arguments.length)
      return this._rts === -M ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var i = this.parent && this._ts ? Qt(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -M ? 0 : this._rts, this.totalTime(Lt(-Math.abs(this._delay), this.totalDuration(), i), r !== !1), aa(this), en(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ut(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = O(a);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && _e(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + ($(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var r = this.parent || this._dp;
    return r ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qt(r.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = Qi);
    var r = X;
    return X = a, Ba(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), X = r, this;
  }, e.globalTime = function(a) {
    for (var r = this, i = arguments.length ? a : r.rawTime(); r; )
      i = r._start + i / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : i;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, ar(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = a, ar(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, r) {
    return this.totalTime(he(this, a), $(r));
  }, e.restart = function(a, r) {
    return this.play().totalTime(a ? -this._delay : 0, $(r)), this._dur || (this._zTime = -M), this;
  }, e.play = function(a, r) {
    return a != null && this.seek(a, r), this.reversed(!1).paused(!1);
  }, e.reverse = function(a, r) {
    return a != null && this.seek(a || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, e.pause = function(a, r) {
    return a != null && this.seek(a, r), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(a) {
    return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -M : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -M, this;
  }, e.isActive = function() {
    var a = this.parent || this._dp, r = this._start, i;
    return !!(!a || this._ts && this._initted && a.isActive() && (i = a.rawTime(!0)) >= r && i < this.endTime(!0) - M);
  }, e.eventCallback = function(a, r, i) {
    var n = this.vars;
    return arguments.length > 1 ? (r ? (n[a] = r, i && (n[a + "Params"] = i), a === "onUpdate" && (this._onUpdate = r)) : delete n[a], this) : n[a];
  }, e.then = function(a) {
    var r = this, i = r._prom;
    return new Promise(function(n) {
      var s = q(a) ? a : jr, l = function() {
        var c = r.then;
        r.then = null, i && i(), q(s) && (s = s(r)) && (s.then || s === r) && (r.then = c), n(s), r.then = c;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l;
    });
  }, e.kill = function() {
    vt(this);
  }, o;
})();
ce(Dt.prototype, {
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
  _zTime: -M,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ (function(o) {
  Or(e, o);
  function e(a, r) {
    var i;
    return a === void 0 && (a = {}), i = o.call(this, a) || this, i.labels = {}, i.smoothChildTiming = !!a.smoothChildTiming, i.autoRemoveChildren = !!a.autoRemoveChildren, i._sort = $(a.sortChildren), z && _e(a.parent || z, Ae(i), r), a.reversed && i.reverse(), a.paused && i.paused(!0), a.scrollTrigger && Qr(Ae(i), a.scrollTrigger), i;
  }
  var t = e.prototype;
  return t.to = function(r, i, n) {
    return St(0, arguments, this), this;
  }, t.from = function(r, i, n) {
    return St(1, arguments, this), this;
  }, t.fromTo = function(r, i, n, s) {
    return St(2, arguments, this), this;
  }, t.set = function(r, i, n) {
    return i.duration = 0, i.parent = this, Ct(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new Y(r, i, he(this, n), 1), this;
  }, t.call = function(r, i, n) {
    return _e(this, Y.delayedCall(0, r, i), n);
  }, t.staggerTo = function(r, i, n, s, l, d, c) {
    return n.duration = i, n.stagger = n.stagger || s, n.onComplete = d, n.onCompleteParams = c, n.parent = this, new Y(r, n, he(this, l)), this;
  }, t.staggerFrom = function(r, i, n, s, l, d, c) {
    return n.runBackwards = 1, Ct(n).immediateRender = $(n.immediateRender), this.staggerTo(r, i, n, s, l, d, c);
  }, t.staggerFromTo = function(r, i, n, s, l, d, c, u) {
    return s.startAt = n, Ct(s).immediateRender = $(s.immediateRender), this.staggerTo(r, i, s, l, d, c, u);
  }, t.render = function(r, i, n) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, c = r <= 0 ? 0 : O(r), u = this._zTime < 0 != r < 0 && (this._initted || !d), p, m, g, h, f, y, _, x, v, b, S, A;
    if (this !== z && c > l && r >= 0 && (c = l), c !== this._tTime || n || u) {
      if (s !== this._time && d && (c += this._time - s, r += this._time - s), p = c, v = this._start, x = this._ts, y = !x, u && (d || (s = this._zTime), (r || !i) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, f = d + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(f * 100 + r, i, n);
        if (p = O(c % f), c === l ? (h = this._repeat, p = d) : (b = O(c / f), h = ~~b, h && h === b && (p = d, h--), p > d && (p = d)), b = dt(this._tTime, f), !s && this._tTime && b !== h && this._tTime - b * f - this._dur <= 0 && (b = h), S && h & 1 && (p = d - p, A = 1), h !== b && !this._lock) {
          var C = S && b & 1, k = C === (S && h & 1);
          if (h < b && (C = !C), s = C ? 0 : c % d ? d : c, this._lock = 1, this.render(s || (A ? 0 : O(h * f)), i, !d)._lock = 0, this._tTime = c, !i && this.parent && se(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1, b = h), s && s !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (d = this._dur, l = this._tDur, k && (this._lock = 2, s = C ? d : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = nn(this, O(s), O(p)), _ && (c -= p - (p = _._start))), this._tTime = c, this._time = p, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, s = 0), !s && c && d && !i && !b && (se(this, "onStart"), this._tTime !== c))
        return this;
      if (p >= s && r >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || p >= m._start) && m._ts && _ !== m) {
            if (m.parent !== this)
              return this.render(r, i, n);
            if (m.render(m._ts > 0 ? (p - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (p - m._start) * m._ts, i, n), p !== this._time || !this._ts && !y) {
              _ = 0, g && (c += this._zTime = -M);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var T = r < 0 ? r : p; m; ) {
          if (g = m._prev, (m._act || T <= m._end) && m._ts && _ !== m) {
            if (m.parent !== this)
              return this.render(r, i, n);
            if (m.render(m._ts > 0 ? (T - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (T - m._start) * m._ts, i, n || X && Ba(m)), p !== this._time || !this._ts && !y) {
              _ = 0, g && (c += this._zTime = T ? -M : M);
              break;
            }
          }
          m = g;
        }
      }
      if (_ && !i && (this.pause(), _.render(p >= s ? 0 : -M)._zTime = p >= s ? 1 : -1, this._ts))
        return this._start = v, aa(this), this.render(r, i, n);
      this._onUpdate && !i && se(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && s) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !d) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ne(this, 1), !i && !(r < 0 && !s) && (c || s || !l) && (se(this, c === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(r, i) {
    var n = this;
    if (Se(i) || (i = he(this, i, r)), !(r instanceof Dt)) {
      if (Z(r))
        return r.forEach(function(s) {
          return n.add(s, i);
        }), this;
      if (j(r))
        return this.addLabel(r, i);
      if (q(r))
        r = Y.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _e(this, r, i) : this;
  }, t.getChildren = function(r, i, n, s) {
    r === void 0 && (r = !0), i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = -pe);
    for (var l = [], d = this._first; d; )
      d._start >= s && (d instanceof Y ? i && l.push(d) : (n && l.push(d), r && l.push.apply(l, d.getChildren(!0, i, n)))), d = d._next;
    return l;
  }, t.getById = function(r) {
    for (var i = this.getChildren(1, 1, 1), n = i.length; n--; )
      if (i[n].vars.id === r)
        return i[n];
  }, t.remove = function(r) {
    return j(r) ? this.removeLabel(r) : q(r) ? this.killTweensOf(r) : (r.parent === this && ta(this, r), r === this._recent && (this._recent = this._last), Ve(this));
  }, t.totalTime = function(r, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = O(ne.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, i), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(r, i) {
    return this.labels[r] = he(this, i), this;
  }, t.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, t.addPause = function(r, i, n) {
    var s = Y.delayedCall(0, i || Mt, n);
    return s.data = "isPause", this._hasPause = 1, _e(this, s, he(this, r));
  }, t.removePause = function(r) {
    var i = this._first;
    for (r = he(this, r); i; )
      i._start === r && i.data === "isPause" && Ne(i), i = i._next;
  }, t.killTweensOf = function(r, i, n) {
    for (var s = this.getTweensOf(r, n), l = s.length; l--; )
      Ee !== s[l] && s[l].kill(r, i);
    return this;
  }, t.getTweensOf = function(r, i) {
    for (var n = [], s = me(r), l = this._first, d = Se(i), c; l; )
      l instanceof Y ? Zi(l._targets, s) && (d ? (!Ee || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && n.push(l) : (c = l.getTweensOf(s, i)).length && n.push.apply(n, c), l = l._next;
    return n;
  }, t.tweenTo = function(r, i) {
    i = i || {};
    var n = this, s = he(n, r), l = i, d = l.startAt, c = l.onStart, u = l.onStartParams, p = l.immediateRender, m, g = Y.to(n, ce({
      ease: i.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: i.duration || Math.abs((s - (d && "time" in d ? d.time : n._time)) / n.timeScale()) || M,
      onStart: function() {
        if (n.pause(), !m) {
          var f = i.duration || Math.abs((s - (d && "time" in d ? d.time : n._time)) / n.timeScale());
          g._dur !== f && ct(g, f, 0, 1).render(g._time, !0, !0), m = 1;
        }
        c && c.apply(g, u || []);
      }
    }, i));
    return p ? g.render(0) : g;
  }, t.tweenFromTo = function(r, i, n) {
    return this.tweenTo(i, ce({
      startAt: {
        time: he(this, r)
      }
    }, n));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(r) {
    return r === void 0 && (r = this._time), rr(this, he(this, r));
  }, t.previousLabel = function(r) {
    return r === void 0 && (r = this._time), rr(this, he(this, r), 1);
  }, t.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + M);
  }, t.shiftChildren = function(r, i, n) {
    n === void 0 && (n = 0);
    var s = this._first, l = this.labels, d;
    for (r = O(r); s; )
      s._start >= n && (s._start += r, s._end += r), s = s._next;
    if (i)
      for (d in l)
        l[d] >= n && (l[d] += r);
    return Ve(this);
  }, t.invalidate = function(r) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(r), i = i._next;
    return o.prototype.invalidate.call(this, r);
  }, t.clear = function(r) {
    r === void 0 && (r = !0);
    for (var i = this._first, n; i; )
      n = i._next, this.remove(i), i = n;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ve(this);
  }, t.totalDuration = function(r) {
    var i = 0, n = this, s = n._last, l = pe, d, c, u;
    if (arguments.length)
      return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -r : r));
    if (n._dirty) {
      for (u = n.parent; s; )
        d = s._prev, s._dirty && s.totalDuration(), c = s._start, c > l && n._sort && s._ts && !n._lock ? (n._lock = 1, _e(n, s, c - s._delay, 1)._lock = 0) : l = c, c < 0 && s._ts && (i -= c, (!u && !n._dp || u && u.smoothChildTiming) && (n._start += O(c / n._ts), n._time -= c, n._tTime -= c), n.shiftChildren(-c, !1, -1 / 0), l = 0), s._end > i && s._ts && (i = s._end), s = d;
      ct(n, n === z && n._time > i ? n._time : i, 1, 1), n._dirty = 0;
    }
    return n._tDur;
  }, e.updateRoot = function(r) {
    if (z._ts && (Wr(z, Qt(r, z)), Ur = ne.frame), ne.frame >= $a) {
      $a += le.autoSleep || 120;
      var i = z._first;
      if ((!i || !i._ts) && le.autoSleep && ne._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || ne.sleep();
      }
    }
  }, e;
})(Dt);
ce(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var vn = function(e, t, a, r, i, n, s) {
  var l = new te(this._pt, e, t, 0, 1, wi, null, i), d = 0, c = 0, u, p, m, g, h, f, y, _;
  for (l.b = a, l.e = r, a += "", r += "", (y = ~r.indexOf("random(")) && (r = Rt(r)), n && (_ = [a, r], n(_, e, t), a = _[0], r = _[1]), p = a.match(ia) || []; u = ia.exec(r); )
    g = u[0], h = r.substring(d, u.index), m ? m = (m + 1) % 5 : h.substr(-5) === "rgba(" && (m = 1), g !== p[c++] && (f = parseFloat(p[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: f,
      c: g.charAt(1) === "=" ? nt(f, g) - f : parseFloat(g) - f,
      m: m && m < 4 ? Math.round : 0
    }, d = ia.lastIndex);
  return l.c = d < r.length ? r.substring(d, r.length) : "", l.fp = s, (Br.test(r) || y) && (l.e = 0), this._pt = l, l;
}, qa = function(e, t, a, r, i, n, s, l, d, c) {
  q(r) && (r = r(i || 0, e, n));
  var u = e[t], p = a !== "get" ? a : q(u) ? d ? e[t.indexOf("set") || !q(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : u, m = q(u) ? d ? Tn : gi : Ga, g;
  if (j(r) && (~r.indexOf("random(") && (r = Rt(r)), r.charAt(1) === "=" && (g = nt(p, r) + (Q(p) || 0), (g || g === 0) && (r = g))), !c || p !== r || ka)
    return !isNaN(p * r) && r !== "" ? (g = new te(this._pt, e, t, +p || 0, r - (p || 0), typeof u == "boolean" ? Pn : fi, 0, m), d && (g.fp = d), s && g.modifier(s, this, e), this._pt = g) : (!u && !(t in e) && Oa(t, r), vn.call(this, e, t, p, r, m, l || le.stringFilter, d));
}, An = function(e, t, a, r, i) {
  if (q(e) && (e = Tt(e, i, t, a, r)), !ye(e) || e.style && e.nodeType || Z(e) || Lr(e))
    return j(e) ? Tt(e, i, t, a, r) : e;
  var n = {}, s;
  for (s in e)
    n[s] = Tt(e[s], i, t, a, r);
  return n;
}, hi = function(e, t, a, r, i, n) {
  var s, l, d, c;
  if (ie[e] && (s = new ie[e]()).init(i, s.rawVars ? t[e] : An(t[e], r, i, n, a), a, r, n) !== !1 && (a._pt = l = new te(a._pt, i, e, 0, 1, s.render, s, 0, s.priority), a !== it))
    for (d = a._ptLookup[a._targets.indexOf(i)], c = s._props.length; c--; )
      d[s._props[c]] = l;
  return s;
}, Ee, ka, Ha = function o(e, t, a) {
  var r = e.vars, i = r.ease, n = r.startAt, s = r.immediateRender, l = r.lazy, d = r.onUpdate, c = r.runBackwards, u = r.yoyoEase, p = r.keyframes, m = r.autoRevert, g = e._dur, h = e._startAt, f = e._targets, y = e.parent, _ = y && y.data === "nested" ? y.vars.targets : f, x = e._overwrite === "auto" && !Ma, v = e.timeline, b = r.easeReverse || u, S, A, C, k, T, H, F, R, B, V, W, G, ue;
  if (v && (!p || !i) && (i = "none"), e._ease = je(i, Pt.ease), e._rEase = b && (je(b) || e._ease), e._from = !v && !!r.runBackwards, e._from && (e.ratio = 1), !v || p && !r.stagger) {
    if (R = f[0] ? We(f[0]).harness : 0, G = R && r[R.prop], S = Jt(r, za), h && (h._zTime < 0 && h.progress(1), t < 0 && c && s && !m ? h.render(-1, !0) : h.revert(c && g ? Yt : Ji), h._lazy = 0), n) {
      if (Ne(e._startAt = Y.set(f, ce({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !h && $(l),
        startAt: null,
        delay: 0,
        onUpdate: d && function() {
          return se(e, "onUpdate");
        },
        stagger: 0
      }, n))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X || !s && !m) && e._startAt.revert(Yt), s && g && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && g && !h) {
      if (t && (s = !1), C = ce({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && $(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, S), G && (C[R.prop] = G), Ne(e._startAt = Y.set(f, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X ? e._startAt.revert(Yt) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        o(e._startAt, M, M);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && $(l) || l && !g, A = 0; A < f.length; A++) {
      if (T = f[A], F = T._gsap || Fa(f)[A]._gsap, e._ptLookup[A] = V = {}, _a[F.id] && Me.length && Xt(), W = _ === f ? A : _.indexOf(T), R && (B = new R()).init(T, G || S, e, W, _) !== !1 && (e._pt = k = new te(e._pt, T, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(Qe) {
        V[Qe] = k;
      }), B.priority && (H = 1)), !R || G)
        for (C in S)
          ie[C] && (B = hi(C, S, e, W, T, _)) ? B.priority && (H = 1) : V[C] = k = qa.call(e, T, C, "get", S[C], W, _, 0, r.stringFilter);
      e._op && e._op[A] && e.kill(T, e._op[A]), x && e._pt && (Ee = e, z.killTweensOf(T, V, e.globalTime(t)), ue = !e.parent, Ee = 0), e._pt && l && (_a[F.id] = 1);
    }
    H && _i(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = d, e._initted = (!e._op || e._pt) && !ue, p && t <= 0 && v.render(pe, !0, !0);
}, kn = function(e, t, a, r, i, n, s, l) {
  var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, p, m;
  if (!d)
    for (d = e._ptCache[t] = [], p = e._ptLookup, m = e._targets.length; m--; ) {
      if (c = p[m][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return ka = 1, e.vars[t] = "+=0", Ha(e, s), ka = 0, l ? It(t + " not eligible for reset. Try splitting into individual properties") : 1;
      d.push(c);
    }
  for (m = d.length; m--; )
    u = d[m], c = u._pt || u, c.s = (r || r === 0) && !i ? r : c.s + (r || 0) + n * c.c, c.c = a - c.s, u.e && (u.e = U(a) + Q(u.e)), u.b && (u.b = c.s + Q(u.b));
}, Cn = function(e, t) {
  var a = e[0] ? We(e[0]).harness : 0, r = a && a.aliases, i, n, s, l;
  if (!r)
    return t;
  i = lt({}, t);
  for (n in r)
    if (n in i)
      for (l = r[n].split(","), s = l.length; s--; )
        i[l[s]] = i[n];
  return i;
}, Sn = function(e, t, a, r) {
  var i = t.ease || r || "power1.inOut", n, s;
  if (Z(t))
    s = a[e] || (a[e] = []), t.forEach(function(l, d) {
      return s.push({
        t: d / (t.length - 1) * 100,
        v: l,
        e: i
      });
    });
  else
    for (n in t)
      s = a[n] || (a[n] = []), n === "ease" || s.push({
        t: parseFloat(e),
        v: t[n],
        e: i
      });
}, Tt = function(e, t, a, r, i) {
  return q(e) ? e.call(t, a, r, i) : j(e) && ~e.indexOf("random(") ? Rt(e) : e;
}, pi = La + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", mi = {};
ee(pi + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return mi[o] = 1;
});
var Y = /* @__PURE__ */ (function(o) {
  Or(e, o);
  function e(a, r, i, n) {
    var s;
    typeof r == "number" && (i.duration = r, r = i, i = null), s = o.call(this, n ? r : Ct(r)) || this;
    var l = s.vars, d = l.duration, c = l.delay, u = l.immediateRender, p = l.stagger, m = l.overwrite, g = l.keyframes, h = l.defaults, f = l.scrollTrigger, y = r.parent || z, _ = (Z(a) || Lr(a) ? Se(a[0]) : "length" in r) ? [a] : me(a), x, v, b, S, A, C, k, T;
    if (s._targets = _.length ? Fa(_) : It("GSAP target " + a + " not found. https://gsap.com", !le.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = m, g || p || Ft(d) || Ft(c)) {
      r = s.vars;
      var H = r.easeReverse || r.yoyoEase;
      if (x = s.timeline = new K({
        data: "nested",
        defaults: h || {},
        targets: y && y.data === "nested" ? y.vars.targets : _
      }), x.kill(), x.parent = x._dp = Ae(s), x._start = 0, p || Ft(d) || Ft(c)) {
        if (S = _.length, k = p && ei(p), ye(p))
          for (A in p)
            ~pi.indexOf(A) && (T || (T = {}), T[A] = p[A]);
        for (v = 0; v < S; v++)
          b = Jt(r, mi), b.stagger = 0, H && (b.easeReverse = H), T && lt(b, T), C = _[v], b.duration = +Tt(d, Ae(s), v, C, _), b.delay = (+Tt(c, Ae(s), v, C, _) || 0) - s._delay, !p && S === 1 && b.delay && (s._delay = c = b.delay, s._start += c, b.delay = 0), x.to(C, b, k ? k(v, C, _) : 0), x._ease = P.none;
        x.duration() ? d = c = 0 : s.timeline = 0;
      } else if (g) {
        Ct(ce(x.vars.defaults, {
          ease: "none"
        })), x._ease = je(g.ease || r.ease || "none");
        var F = 0, R, B, V;
        if (Z(g))
          g.forEach(function(W) {
            return x.to(_, W, ">");
          }), x.duration();
        else {
          b = {};
          for (A in g)
            A === "ease" || A === "easeEach" || Sn(A, g[A], b, g.easeEach);
          for (A in b)
            for (R = b[A].sort(function(W, G) {
              return W.t - G.t;
            }), F = 0, v = 0; v < R.length; v++)
              B = R[v], V = {
                ease: B.e,
                duration: (B.t - (v ? R[v - 1].t : 0)) / 100 * d
              }, V[A] = B.v, x.to(_, V, F), F += V.duration;
          x.duration() < d && x.to({}, {
            duration: d - x.duration()
          });
        }
      }
      d || s.duration(d = x.duration());
    } else
      s.timeline = 0;
    return m === !0 && !Ma && (Ee = Ae(s), z.killTweensOf(_), Ee = 0), _e(y, Ae(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), (u || !d && !g && s._start === O(y._time) && $(u) && tn(Ae(s)) && y.data !== "nested") && (s._tTime = -M, s.render(Math.max(0, -c) || 0)), f && Qr(Ae(s), f), s;
  }
  var t = e.prototype;
  return t.render = function(r, i, n) {
    var s = this._time, l = this._tDur, d = this._dur, c = r < 0, u = r > l - M && !c ? l : r < M ? 0 : r, p, m, g, h, f, y, _, x;
    if (!d)
      rn(this, r, i, n);
    else if (u !== this._tTime || !r || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (p = u, x = this.timeline, this._repeat) {
        if (h = d + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + r, i, n);
        if (p = O(u % h), u === l ? (g = this._repeat, p = d) : (f = O(u / h), g = ~~f, g && g === f ? (p = d, g--) : p > d && (p = d)), y = this._yoyo && g & 1, y && (p = d - p), f = dt(this._tTime, h), p === s && !n && this._initted && g === f)
          return this._tTime = u, this;
        g !== f && this.vars.repeatRefresh && !y && !this._lock && p !== h && this._initted && (this._lock = n = 1, this.render(O(h * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Zr(this, c ? r : p, n, i, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(n && this.vars.repeatRefresh && g !== f))
          return this;
        if (d !== this._dur)
          return this.render(r, i, n);
      }
      if (this._rEase) {
        var v = p < s;
        if (v !== this._inv) {
          var b = v ? s : d - s;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = s, this._invRecip = b ? (v ? -1 : 1) / b : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = _ = this._invRatio + this._invScale * this._invEase((p - this._invTime) * this._invRecip);
      } else
        this.ratio = _ = this._ease(p / d);
      if (this._from && (this.ratio = _ = 1 - _), this._tTime = u, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), !s && u && !i && !f && (se(this, "onStart"), this._tTime !== u))
        return this;
      for (m = this._pt; m; )
        m.r(_, m.d), m = m._next;
      x && x.render(r < 0 ? r : x._dur * x._ease(p / this._dur), i, n) || this._startAt && (this._zTime = r), this._onUpdate && !i && (c && ba(this, r, i, n), se(this, "onUpdate")), this._repeat && g !== f && this.vars.onRepeat && !i && this.parent && se(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && ba(this, r, !0, !0), (r || !d) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Ne(this, 1), !i && !(c && !s) && (u || s || y) && (se(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), o.prototype.invalidate.call(this, r);
  }, t.resetTo = function(r, i, n, s, l) {
    Nt || ne.wake(), this._ts || this.play();
    var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Ha(this, d), c = this._ease(d / this._dur), kn(this, r, i, n, s, c, d, l) ? this.resetTo(r, i, n, s, 1) : (ra(this, 0), this.parent || Xr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(r, i) {
    if (i === void 0 && (i = "all"), !r && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? vt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var n = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, i, Ee && Ee.vars.overwrite !== !0)._first || vt(this), this.parent && n !== this.timeline.totalDuration() && ct(this, this._dur * this.timeline._tDur / n, 0, 1), this;
    }
    var s = this._targets, l = r ? me(r) : s, d = this._ptLookup, c = this._pt, u, p, m, g, h, f, y;
    if ((!i || i === "all") && $i(s, l))
      return i === "all" && (this._pt = 0), vt(this);
    for (u = this._op = this._op || [], i !== "all" && (j(i) && (h = {}, ee(i, function(_) {
      return h[_] = 1;
    }), i = h), i = Cn(s, i)), y = s.length; y--; )
      if (~l.indexOf(s[y])) {
        p = d[y], i === "all" ? (u[y] = i, g = p, m = {}) : (m = u[y] = u[y] || {}, g = i);
        for (h in g)
          f = p && p[h], f && ((!("kill" in f.d) || f.d.kill(h) === !0) && ta(this, f, "_pt"), delete p[h]), m !== "all" && (m[h] = 1);
      }
    return this._initted && !this._pt && c && vt(this), this;
  }, e.to = function(r, i) {
    return new e(r, i, arguments[2]);
  }, e.from = function(r, i) {
    return St(1, arguments);
  }, e.delayedCall = function(r, i, n, s) {
    return new e(i, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: n,
      onReverseCompleteParams: n,
      callbackScope: s
    });
  }, e.fromTo = function(r, i, n) {
    return St(2, arguments);
  }, e.set = function(r, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(r, i);
  }, e.killTweensOf = function(r, i, n) {
    return z.killTweensOf(r, i, n);
  }, e;
})(Dt);
ce(Y.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ee("staggerTo,staggerFrom,staggerFromTo", function(o) {
  Y[o] = function() {
    var e = new K(), t = xa.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var Ga = function(e, t, a) {
  return e[t] = a;
}, gi = function(e, t, a) {
  return e[t](a);
}, Tn = function(e, t, a, r) {
  return e[t](r.fp, a);
}, En = function(e, t, a) {
  return e.setAttribute(t, a);
}, Ua = function(e, t) {
  return q(e[t]) ? gi : Ra(e[t]) && e.setAttribute ? En : Ga;
}, fi = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Pn = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, wi = function(e, t) {
  var a = t._pt, r = "";
  if (!e && t.b)
    r = t.b;
  else if (e === 1 && t.e)
    r = t.e;
  else {
    for (; a; )
      r = a.p + (a.m ? a.m(a.s + a.c * e) : Math.round((a.s + a.c * e) * 1e4) / 1e4) + r, a = a._next;
    r += t.c;
  }
  t.set(t.t, t.p, r, t);
}, Ya = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, In = function(e, t, a, r) {
  for (var i = this._pt, n; i; )
    n = i._next, i.p === r && i.modifier(e, t, a), i = n;
}, Mn = function(e) {
  for (var t = this._pt, a, r; t; )
    r = t._next, t.p === e && !t.op || t.op === e ? ta(this, t, "_pt") : t.dep || (a = 1), t = r;
  return !a;
}, Rn = function(e, t, a, r) {
  r.mSet(e, t, r.m.call(r.tween, a, r.mt), r);
}, _i = function(e) {
  for (var t = e._pt, a, r, i, n; t; ) {
    for (a = t._next, r = i; r && r.pr > t.pr; )
      r = r._next;
    (t._prev = r ? r._prev : n) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : n = t, t = a;
  }
  e._pt = i;
}, te = /* @__PURE__ */ (function() {
  function o(t, a, r, i, n, s, l, d, c) {
    this.t = a, this.s = i, this.c = n, this.p = r, this.r = s || fi, this.d = l || this, this.set = d || Ga, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(a, r, i) {
    this.mSet = this.mSet || this.set, this.set = Rn, this.m = a, this.mt = i, this.tween = r;
  }, o;
})();
ee(La + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(o) {
  return za[o] = 1;
});
de.TweenMax = de.TweenLite = Y;
de.TimelineLite = de.TimelineMax = K;
z = new K({
  sortChildren: !1,
  defaults: Pt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
le.stringFilter = di;
var Xe = [], Vt = {}, Nn = [], nr = 0, Dn = 0, da = function(e) {
  return (Vt[e] || Nn).map(function(t) {
    return t();
  });
}, Ca = function() {
  var e = Date.now(), t = [];
  e - nr > 2 && (da("matchMediaInit"), Xe.forEach(function(a) {
    var r = a.queries, i = a.conditions, n, s, l, d;
    for (s in r)
      n = we.matchMedia(r[s]).matches, n && (l = 1), n !== i[s] && (i[s] = n, d = 1);
    d && (a.revert(), l && t.push(a));
  }), da("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(r) {
      return a.add(null, r);
    });
  }), nr = e, da("matchMedia"));
}, bi = /* @__PURE__ */ (function() {
  function o(t, a) {
    this.selector = a && va(a), this.data = [], this._r = [], this.isReverted = !1, this.id = Dn++, t && this.add(t);
  }
  var e = o.prototype;
  return e.add = function(a, r, i) {
    q(a) && (i = r, r = a, a = q);
    var n = this, s = function() {
      var d = N, c = n.selector, u;
      return d && d !== n && d.data.push(n), i && (n.selector = va(i)), N = n, u = r.apply(n, arguments), q(u) && n._r.push(u), N = d, n.selector = c, n.isReverted = !1, u;
    };
    return n.last = s, a === q ? s(n, function(l) {
      return n.add(null, l);
    }) : a ? n[a] = s : s;
  }, e.ignore = function(a) {
    var r = N;
    N = null, a(this), N = r;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(r) {
      return r instanceof o ? a.push.apply(a, r.getTweens()) : r instanceof Y && !(r.parent && r.parent.data === "nested") && a.push(r);
    }), a;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(a, r) {
    var i = this;
    if (a ? (function() {
      for (var s = i.getTweens(), l = i.data.length, d; l--; )
        d = i.data[l], d.data === "isFlip" && (d.revert(), d.getChildren(!0, !0, !1).forEach(function(c) {
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
      }), l = i.data.length; l--; )
        d = i.data[l], d instanceof K ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof Y) && d.revert && d.revert(a);
      i._r.forEach(function(c) {
        return c(a, i);
      }), i.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), r)
      for (var n = Xe.length; n--; )
        Xe[n].id === this.id && Xe.splice(n, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, o;
})(), On = /* @__PURE__ */ (function() {
  function o(t) {
    this.contexts = [], this.scope = t, N && N.data.push(this);
  }
  var e = o.prototype;
  return e.add = function(a, r, i) {
    ye(a) || (a = {
      matches: a
    });
    var n = new bi(0, i || this.scope), s = n.conditions = {}, l, d, c;
    N && !n.selector && (n.selector = N.selector), this.contexts.push(n), r = n.add("onMatch", r), n.queries = a;
    for (d in a)
      d === "all" ? c = 1 : (l = we.matchMedia(a[d]), l && (Xe.indexOf(n) < 0 && Xe.push(n), (s[d] = l.matches) && (c = 1), l.addListener ? l.addListener(Ca) : l.addEventListener("change", Ca)));
    return c && r(n, function(u) {
      return n.add(null, u);
    }), this;
  }, e.revert = function(a) {
    this.kill(a || {});
  }, e.kill = function(a) {
    this.contexts.forEach(function(r) {
      return r.kill(a, !0);
    });
  }, o;
})(), Zt = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(r) {
      return si(r);
    });
  },
  timeline: function(e) {
    return new K(e);
  },
  getTweensOf: function(e, t) {
    return z.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, r) {
    j(e) && (e = me(e)[0]);
    var i = We(e || {}).get, n = a ? jr : Vr;
    return a === "native" && (a = ""), e && (t ? n((ie[t] && ie[t].get || i)(e, t, a, r)) : function(s, l, d) {
      return n((ie[s] && ie[s].get || i)(e, s, l, d));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = me(e), e.length > 1) {
      var r = e.map(function(c) {
        return re.quickSetter(c, t, a);
      }), i = r.length;
      return function(c) {
        for (var u = i; u--; )
          r[u](c);
      };
    }
    e = e[0] || {};
    var n = ie[t], s = We(e), l = s.harness && (s.harness.aliases || {})[t] || t, d = n ? function(c) {
      var u = new n();
      it._pt = 0, u.init(e, a ? c + a : c, it, 0, [e]), u.render(1, u), it._pt && Ya(1, it);
    } : s.set(e, l);
    return n ? d : function(c) {
      return d(e, l, a ? c + a : c, s, 1);
    };
  },
  quickTo: function(e, t, a) {
    var r, i = re.to(e, ce((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), a || {})), n = function(l, d, c) {
      return i.resetTo(t, l, d, c);
    };
    return n.tween = i, n;
  },
  isTweening: function(e) {
    return z.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = je(e.ease, Pt.ease)), er(Pt, e || {});
  },
  config: function(e) {
    return er(le, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, r = e.plugins, i = e.defaults, n = e.extendTimeline;
    (r || "").split(",").forEach(function(s) {
      return s && !ie[s] && !de[s] && It(t + " effect requires " + s + " plugin.");
    }), na[t] = function(s, l, d) {
      return a(me(s), ce(l || {}, i), d);
    }, n && (K.prototype[t] = function(s, l, d) {
      return this.add(na[t](s, ye(l) ? l : (d = l) && {}, this), d);
    });
  },
  registerEase: function(e, t) {
    P[e] = je(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? je(e, t) : P;
  },
  getById: function(e) {
    return z.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new K(e), r, i;
    for (a.smoothChildTiming = $(e.smoothChildTiming), z.remove(a), a._dp = 0, a._time = a._tTime = z._time, r = z._first; r; )
      i = r._next, (t || !(!r._dur && r instanceof Y && r.vars.onComplete === r._targets[0])) && _e(a, r, r._start - r._delay), r = i;
    return _e(z, a, 0), a;
  },
  context: function(e, t) {
    return e ? new bi(e, t) : N;
  },
  matchMedia: function(e) {
    return new On(e);
  },
  matchMediaRefresh: function() {
    return Xe.forEach(function(e) {
      var t = e.conditions, a, r;
      for (r in t)
        t[r] && (t[r] = !1, a = 1);
      a && e.revert();
    }) || Ca();
  },
  addEventListener: function(e, t) {
    var a = Vt[e] || (Vt[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = Vt[e], r = a && a.indexOf(t);
    r >= 0 && a.splice(r, 1);
  },
  utils: {
    wrap: hn,
    wrapYoyo: pn,
    distribute: ei,
    random: ai,
    snap: ti,
    normalize: un,
    getUnit: Q,
    clamp: on,
    splitColor: oi,
    toArray: me,
    selector: va,
    mapRange: ii,
    pipe: dn,
    unitize: cn,
    interpolate: mn,
    shuffle: $r
  },
  install: Hr,
  effects: na,
  ticker: ne,
  updateRoot: K.updateRoot,
  plugins: ie,
  globalTimeline: z,
  core: {
    PropTween: te,
    globals: Gr,
    Tween: Y,
    Timeline: K,
    Animation: Dt,
    getCache: We,
    _removeLinkedListItem: ta,
    reverting: function() {
      return X;
    },
    context: function(e) {
      return e && N && (N.data.push(e), e._ctx = N), N;
    },
    suppressOverwrites: function(e) {
      return Ma = e;
    }
  }
};
ee("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Zt[o] = Y[o];
});
ne.add(K.updateRoot);
it = Zt.to({}, {
  duration: 0
});
var zn = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, Ln = function(e, t) {
  var a = e._targets, r, i, n;
  for (r in t)
    for (i = a.length; i--; )
      n = e._ptLookup[i][r], n && (n = n.d) && (n._pt && (n = zn(n, r)), n && n.modifier && n.modifier(t[r], e, a[i], r));
}, ca = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, i, n) {
      n._onInit = function(s) {
        var l, d;
        if (j(i) && (l = {}, ee(i, function(c) {
          return l[c] = 1;
        }), i = l), t) {
          l = {};
          for (d in i)
            l[d] = t(i[d]);
          i = l;
        }
        Ln(s, i);
      };
    }
  };
}, re = Zt.registerPlugin({
  name: "attr",
  init: function(e, t, a, r, i) {
    var n, s, l;
    this.tween = a;
    for (n in t)
      l = e.getAttribute(n) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[n], r, i, 0, 0, n), s.op = n, s.b = l, this._props.push(n);
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
}, ca("roundProps", Aa), ca("modifiers"), ca("snap", ti)) || Zt;
Y.version = K.version = re.version = "3.15.0";
qr = 1;
Na() && ut();
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
var sr, Pe, st, Wa, Ye, or, Va, Fn = function() {
  return typeof window < "u";
}, Te = {}, Ge = 180 / Math.PI, ot = Math.PI / 180, Ze = Math.atan2, lr = 1e8, ja = /([A-Z])/g, Bn = /(left|right|width|margin|padding|x)/i, qn = /[\s,\(]\S/, be = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Sa = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Hn = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Gn = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Un = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Yn = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, yi = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, xi = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Wn = function(e, t, a) {
  return e.style[t] = a;
}, Vn = function(e, t, a) {
  return e.style.setProperty(t, a);
}, jn = function(e, t, a) {
  return e._gsap[t] = a;
}, Xn = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, Jn = function(e, t, a, r, i) {
  var n = e._gsap;
  n.scaleX = n.scaleY = a, n.renderTransform(i, n);
}, Qn = function(e, t, a, r, i) {
  var n = e._gsap;
  n[t] = a, n.renderTransform(i, n);
}, L = "transform", ae = L + "Origin", Zn = function o(e, t) {
  var a = this, r = this.target, i = r.style, n = r._gsap;
  if (e in Te && i) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = be[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return a.tfm[s] = ke(r, s);
      }) : this.tfm[e] = n.x ? n[e] : ke(r, e), e === ae && (this.tfm.zOrigin = n.zOrigin);
    else
      return be.transform.split(",").forEach(function(s) {
        return o.call(a, s, t);
      });
    if (this.props.indexOf(L) >= 0)
      return;
    n.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ae, t, "")), e = L;
  }
  (i || t) && this.props.push(e, t, i[e]);
}, vi = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Kn = function() {
  var e = this.props, t = this.target, a = t.style, r = t._gsap, i, n;
  for (i = 0; i < e.length; i += 3)
    e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? a[e[i]] = e[i + 2] : a.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(ja, "-$1").toLowerCase());
  if (this.tfm) {
    for (n in this.tfm)
      r[n] = this.tfm[n];
    r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = Va(), (!i || !i.isStart) && !a[L] && (vi(a), r.zOrigin && a[ae] && (a[ae] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Ai = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: Kn,
    save: Zn
  };
  return e._gsap || re.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(r) {
    return a.save(r);
  }), a;
}, ki, Ta = function(e, t) {
  var a = Pe.createElementNS ? Pe.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Pe.createElement(e);
  return a && a.style ? a : Pe.createElement(e);
}, oe = function o(e, t, a) {
  var r = getComputedStyle(e);
  return r[t] || r.getPropertyValue(t.replace(ja, "-$1").toLowerCase()) || r.getPropertyValue(t) || !a && o(e, ht(t) || t, 1) || "";
}, dr = "O,Moz,ms,Ms,Webkit".split(","), ht = function(e, t, a) {
  var r = t || Ye, i = r.style, n = 5;
  if (e in i && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(dr[n] + e in i); )
    ;
  return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? dr[n] : "") + e;
}, Ea = function() {
  Fn() && window.document && (sr = window, Pe = sr.document, st = Pe.documentElement, Ye = Ta("div") || {
    style: {}
  }, Ta("div"), L = ht(L), ae = L + "Origin", Ye.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ki = !!ht("perspective"), Va = re.core.reverting, Wa = 1);
}, cr = function(e) {
  var t = e.ownerSVGElement, a = Ta("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
  r.style.display = "block", a.appendChild(r), st.appendChild(a);
  try {
    i = r.getBBox();
  } catch {
  }
  return a.removeChild(r), st.removeChild(a), i;
}, ur = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, Ci = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = cr(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = cr(e)), t && !t.width && !t.x && !t.y ? {
    x: +ur(e, ["x", "cx", "x1"]) || 0,
    y: +ur(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Si = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ci(e));
}, De = function(e, t) {
  if (t) {
    var a = e.style, r;
    t in Te && t !== ae && (t = L), a.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(r === "--" ? t : t.replace(ja, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, Ie = function(e, t, a, r, i, n) {
  var s = new te(e._pt, t, a, 0, 1, n ? xi : yi);
  return e._pt = s, s.b = r, s.e = i, e._props.push(a), s;
}, hr = {
  deg: 1,
  rad: 1,
  turn: 1
}, $n = {
  grid: 1,
  flex: 1
}, Oe = function o(e, t, a, r) {
  var i = parseFloat(a) || 0, n = (a + "").trim().substr((i + "").length) || "px", s = Ye.style, l = Bn.test(t), d = e.tagName.toLowerCase() === "svg", c = (d ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, p = r === "px", m = r === "%", g, h, f, y;
  if (r === n || !i || hr[r] || hr[n])
    return i;
  if (n !== "px" && !p && (i = o(e, t, a, "px")), y = e.getCTM && Si(e), (m || n === "%") && (Te[t] || ~t.indexOf("adius")))
    return g = y ? e.getBBox()[l ? "width" : "height"] : e[c], U(m ? i / g * u : i / 100 * g);
  if (s[l ? "width" : "height"] = u + (p ? n : r), h = r !== "rem" && ~t.indexOf("adius") || r === "em" && e.appendChild && !d ? e : e.parentNode, y && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Pe || !h.appendChild) && (h = Pe.body), f = h._gsap, f && m && f.width && l && f.time === ne.time && !f.uncache)
    return U(i / f.width * u);
  if (m && (t === "height" || t === "width")) {
    var _ = e.style[t];
    e.style[t] = u + r, g = e[c], _ ? e.style[t] = _ : De(e, t);
  } else
    (m || n === "%") && !$n[oe(h, "display")] && (s.position = oe(e, "position")), h === e && (s.position = "static"), h.appendChild(Ye), g = Ye[c], h.removeChild(Ye), s.position = "absolute";
  return l && m && (f = We(h), f.time = ne.time, f.width = h[c]), U(p ? g * i / u : g && i ? u / g * i : 0);
}, ke = function(e, t, a, r) {
  var i;
  return Wa || Ea(), t in be && t !== "transform" && (t = be[t], ~t.indexOf(",") && (t = t.split(",")[0])), Te[t] && t !== "transform" ? (i = zt(e, r), i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : $t(oe(e, ae)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = Kt[t] && Kt[t](e, t, a) || oe(e, t) || Yr(e, t) || (t === "opacity" ? 1 : 0))), a && !~(i + "").trim().indexOf(" ") ? Oe(e, t, i, a) + a : i;
}, es = function(e, t, a, r) {
  if (!a || a === "none") {
    var i = ht(t, e, 1), n = i && oe(e, i, 1);
    n && n !== a ? (t = i, a = n) : t === "borderColor" && (a = oe(e, "borderTopColor"));
  }
  var s = new te(this._pt, e.style, t, 0, 1, wi), l = 0, d = 0, c, u, p, m, g, h, f, y, _, x, v, b;
  if (s.b = a, s.e = r, a += "", r += "", r.substring(0, 6) === "var(--" && (r = oe(e, r.substring(4, r.indexOf(")")))), r === "auto" && (h = e.style[t], e.style[t] = r, r = oe(e, t) || r, h ? e.style[t] = h : De(e, t)), c = [a, r], di(c), a = c[0], r = c[1], p = a.match(rt) || [], b = r.match(rt) || [], b.length) {
    for (; u = rt.exec(r); )
      f = u[0], _ = r.substring(l, u.index), g ? g = (g + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (g = 1), f !== (h = p[d++] || "") && (m = parseFloat(h) || 0, v = h.substr((m + "").length), f.charAt(1) === "=" && (f = nt(m, f) + v), y = parseFloat(f), x = f.substr((y + "").length), l = rt.lastIndex - x.length, x || (x = x || le.units[t] || v, l === r.length && (r += x, s.e += x)), v !== x && (m = Oe(e, t, h, x) || 0), s._pt = {
        _next: s._pt,
        p: _ || d === 1 ? _ : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: y - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < r.length ? r.substring(l, r.length) : "";
  } else
    s.r = t === "display" && r === "none" ? xi : yi;
  return Br.test(r) && (s.e = 0), this._pt = s, s;
}, pr = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ts = function(e) {
  var t = e.split(" "), a = t[0], r = t[1] || "50%";
  return (a === "top" || a === "bottom" || r === "left" || r === "right") && (e = a, a = r, r = e), t[0] = pr[a] || a, t[1] = pr[r] || r, t.join(" ");
}, as = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, r = a.style, i = t.u, n = a._gsap, s, l, d;
    if (i === "all" || i === !0)
      r.cssText = "", l = 1;
    else
      for (i = i.split(","), d = i.length; --d > -1; )
        s = i[d], Te[s] && (l = 1, s = s === "transformOrigin" ? ae : L), De(a, s);
    l && (De(a, L), n && (n.svg && a.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", zt(a, 1), n.uncache = 1, vi(r)));
  }
}, Kt = {
  clearProps: function(e, t, a, r, i) {
    if (i.data !== "isFromStart") {
      var n = e._pt = new te(e._pt, t, a, 0, 0, as);
      return n.u = r, n.pr = -10, n.tween = i, e._props.push(a), 1;
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
}, Ot = [1, 0, 0, 1, 0, 0], Ti = {}, Ei = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, mr = function(e) {
  var t = oe(e, L);
  return Ei(t) ? Ot : t.substr(7).match(Fr).map(U);
}, Xa = function(e, t) {
  var a = e._gsap || We(e), r = e.style, i = mr(e), n, s, l, d;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, i = [l.a, l.b, l.c, l.d, l.e, l.f], i.join(",") === "1,0,0,1,0,0" ? Ot : i) : (i === Ot && !e.offsetParent && e !== st && !a.svg && (l = r.display, r.display = "block", n = e.parentNode, (!n || !e.offsetParent && !e.getBoundingClientRect().width) && (d = 1, s = e.nextElementSibling, st.appendChild(e)), i = mr(e), l ? r.display = l : De(e, "display"), d && (s ? n.insertBefore(e, s) : n ? n.appendChild(e) : st.removeChild(e))), t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, Pa = function(e, t, a, r, i, n) {
  var s = e._gsap, l = i || Xa(e, !0), d = s.xOrigin || 0, c = s.yOrigin || 0, u = s.xOffset || 0, p = s.yOffset || 0, m = l[0], g = l[1], h = l[2], f = l[3], y = l[4], _ = l[5], x = t.split(" "), v = parseFloat(x[0]) || 0, b = parseFloat(x[1]) || 0, S, A, C, k;
  a ? l !== Ot && (A = m * f - g * h) && (C = v * (f / A) + b * (-h / A) + (h * _ - f * y) / A, k = v * (-g / A) + b * (m / A) - (m * _ - g * y) / A, v = C, b = k) : (S = Ci(e), v = S.x + (~x[0].indexOf("%") ? v / 100 * S.width : v), b = S.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * S.height : b)), r || r !== !1 && s.smooth ? (y = v - d, _ = b - c, s.xOffset = u + (y * m + _ * h) - y, s.yOffset = p + (y * g + _ * f) - _) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = b, s.smooth = !!r, s.origin = t, s.originIsAbsolute = !!a, e.style[ae] = "0px 0px", n && (Ie(n, s, "xOrigin", d, v), Ie(n, s, "yOrigin", c, b), Ie(n, s, "xOffset", u, s.xOffset), Ie(n, s, "yOffset", p, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + b);
}, zt = function(e, t) {
  var a = e._gsap || new ui(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var r = e.style, i = a.scaleX < 0, n = "px", s = "deg", l = getComputedStyle(e), d = oe(e, ae) || "0", c, u, p, m, g, h, f, y, _, x, v, b, S, A, C, k, T, H, F, R, B, V, W, G, ue, Qe, pt, mt, Le, Za, xe, Fe;
  return c = u = p = h = f = y = _ = x = v = 0, m = g = 1, a.svg = !!(e.getCTM && Si(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[L] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[L] !== "none" ? l[L] : "")), r.scale = r.rotate = r.translate = "none"), A = Xa(e, a.svg), a.svg && (a.uncache ? (ue = e.getBBox(), d = a.xOrigin - ue.x + "px " + (a.yOrigin - ue.y) + "px", G = "") : G = !t && e.getAttribute("data-svg-origin"), Pa(e, G || d, !!G || a.originIsAbsolute, a.smooth !== !1, A)), b = a.xOrigin || 0, S = a.yOrigin || 0, A !== Ot && (H = A[0], F = A[1], R = A[2], B = A[3], c = V = A[4], u = W = A[5], A.length === 6 ? (m = Math.sqrt(H * H + F * F), g = Math.sqrt(B * B + R * R), h = H || F ? Ze(F, H) * Ge : 0, _ = R || B ? Ze(R, B) * Ge + h : 0, _ && (g *= Math.abs(Math.cos(_ * ot))), a.svg && (c -= b - (b * H + S * R), u -= S - (b * F + S * B))) : (Fe = A[6], Za = A[7], pt = A[8], mt = A[9], Le = A[10], xe = A[11], c = A[12], u = A[13], p = A[14], C = Ze(Fe, Le), f = C * Ge, C && (k = Math.cos(-C), T = Math.sin(-C), G = V * k + pt * T, ue = W * k + mt * T, Qe = Fe * k + Le * T, pt = V * -T + pt * k, mt = W * -T + mt * k, Le = Fe * -T + Le * k, xe = Za * -T + xe * k, V = G, W = ue, Fe = Qe), C = Ze(-R, Le), y = C * Ge, C && (k = Math.cos(-C), T = Math.sin(-C), G = H * k - pt * T, ue = F * k - mt * T, Qe = R * k - Le * T, xe = B * T + xe * k, H = G, F = ue, R = Qe), C = Ze(F, H), h = C * Ge, C && (k = Math.cos(C), T = Math.sin(C), G = H * k + F * T, ue = V * k + W * T, F = F * k - H * T, W = W * k - V * T, H = G, V = ue), f && Math.abs(f) + Math.abs(h) > 359.9 && (f = h = 0, y = 180 - y), m = U(Math.sqrt(H * H + F * F + R * R)), g = U(Math.sqrt(W * W + Fe * Fe)), C = Ze(V, W), _ = Math.abs(C) > 2e-4 ? C * Ge : 0, v = xe ? 1 / (xe < 0 ? -xe : xe) : 0), a.svg && (G = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Ei(oe(e, L)), G && e.setAttribute("transform", G))), Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (m *= -1, _ += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, _ += _ <= 0 ? 180 : -180)), t = t || a.uncache, a.x = c - ((a.xPercent = c && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + n, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + n, a.z = p + n, a.scaleX = U(m), a.scaleY = U(g), a.rotation = U(h) + s, a.rotationX = U(f) + s, a.rotationY = U(y) + s, a.skewX = _ + s, a.skewY = x + s, a.transformPerspective = v + n, (a.zOrigin = parseFloat(d.split(" ")[2]) || !t && a.zOrigin || 0) && (r[ae] = $t(d)), a.xOffset = a.yOffset = 0, a.force3D = le.force3D, a.renderTransform = a.svg ? is : ki ? Pi : rs, a.uncache = 0, a;
}, $t = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, ua = function(e, t, a) {
  var r = Q(t);
  return U(parseFloat(t) + parseFloat(Oe(e, "x", a + "px", r))) + r;
}, rs = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Pi(e, t);
}, Be = "0deg", gt = "0px", qe = ") ", Pi = function(e, t) {
  var a = t || this, r = a.xPercent, i = a.yPercent, n = a.x, s = a.y, l = a.z, d = a.rotation, c = a.rotationY, u = a.rotationX, p = a.skewX, m = a.skewY, g = a.scaleX, h = a.scaleY, f = a.transformPerspective, y = a.force3D, _ = a.target, x = a.zOrigin, v = "", b = y === "auto" && e && e !== 1 || y === !0;
  if (x && (u !== Be || c !== Be)) {
    var S = parseFloat(c) * ot, A = Math.sin(S), C = Math.cos(S), k;
    S = parseFloat(u) * ot, k = Math.cos(S), n = ua(_, n, A * k * -x), s = ua(_, s, -Math.sin(S) * -x), l = ua(_, l, C * k * -x + x);
  }
  f !== gt && (v += "perspective(" + f + qe), (r || i) && (v += "translate(" + r + "%, " + i + "%) "), (b || n !== gt || s !== gt || l !== gt) && (v += l !== gt || b ? "translate3d(" + n + ", " + s + ", " + l + ") " : "translate(" + n + ", " + s + qe), d !== Be && (v += "rotate(" + d + qe), c !== Be && (v += "rotateY(" + c + qe), u !== Be && (v += "rotateX(" + u + qe), (p !== Be || m !== Be) && (v += "skew(" + p + ", " + m + qe), (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + qe), _.style[L] = v || "translate(0, 0)";
}, is = function(e, t) {
  var a = t || this, r = a.xPercent, i = a.yPercent, n = a.x, s = a.y, l = a.rotation, d = a.skewX, c = a.skewY, u = a.scaleX, p = a.scaleY, m = a.target, g = a.xOrigin, h = a.yOrigin, f = a.xOffset, y = a.yOffset, _ = a.forceCSS, x = parseFloat(n), v = parseFloat(s), b, S, A, C, k;
  l = parseFloat(l), d = parseFloat(d), c = parseFloat(c), c && (c = parseFloat(c), d += c, l += c), l || d ? (l *= ot, d *= ot, b = Math.cos(l) * u, S = Math.sin(l) * u, A = Math.sin(l - d) * -p, C = Math.cos(l - d) * p, d && (c *= ot, k = Math.tan(d - c), k = Math.sqrt(1 + k * k), A *= k, C *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), b *= k, S *= k)), b = U(b), S = U(S), A = U(A), C = U(C)) : (b = u, C = p, S = A = 0), (x && !~(n + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (x = Oe(m, "x", n, "px"), v = Oe(m, "y", s, "px")), (g || h || f || y) && (x = U(x + g - (g * b + h * A) + f), v = U(v + h - (g * S + h * C) + y)), (r || i) && (k = m.getBBox(), x = U(x + r / 100 * k.width), v = U(v + i / 100 * k.height)), k = "matrix(" + b + "," + S + "," + A + "," + C + "," + x + "," + v + ")", m.setAttribute("transform", k), _ && (m.style[L] = k);
}, ns = function(e, t, a, r, i) {
  var n = 360, s = j(i), l = parseFloat(i) * (s && ~i.indexOf("rad") ? Ge : 1), d = l - r, c = r + d + "deg", u, p;
  return s && (u = i.split("_")[1], u === "short" && (d %= n, d !== d % (n / 2) && (d += d < 0 ? n : -n)), u === "cw" && d < 0 ? d = (d + n * lr) % n - ~~(d / n) * n : u === "ccw" && d > 0 && (d = (d - n * lr) % n - ~~(d / n) * n)), e._pt = p = new te(e._pt, t, a, r, d, Hn), p.e = c, p.u = "deg", e._props.push(a), p;
}, gr = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, ss = function(e, t, a) {
  var r = gr({}, a._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", n = a.style, s, l, d, c, u, p, m, g;
  r.svg ? (d = a.getAttribute("transform"), a.setAttribute("transform", ""), n[L] = t, s = zt(a, 1), De(a, L), a.setAttribute("transform", d)) : (d = getComputedStyle(a)[L], n[L] = t, s = zt(a, 1), n[L] = d);
  for (l in Te)
    d = r[l], c = s[l], d !== c && i.indexOf(l) < 0 && (m = Q(d), g = Q(c), u = m !== g ? Oe(a, l, d, g) : parseFloat(d), p = parseFloat(c), e._pt = new te(e._pt, s, l, u, p - u, Sa), e._pt.u = g || 0, e._props.push(l));
  gr(s, r);
};
ee("padding,margin,Width,Radius", function(o, e) {
  var t = "Top", a = "Right", r = "Bottom", i = "Left", n = (e < 3 ? [t, a, r, i] : [t + i, t + a, r + a, r + i]).map(function(s) {
    return e < 2 ? o + s : "border" + s + o;
  });
  Kt[e > 1 ? "border" + o : o] = function(s, l, d, c, u) {
    var p, m;
    if (arguments.length < 4)
      return p = n.map(function(g) {
        return ke(s, g, d);
      }), m = p.join(" "), m.split(p[0]).length === 5 ? p[0] : m;
    p = (c + "").split(" "), m = {}, n.forEach(function(g, h) {
      return m[g] = p[h] = p[h] || p[(h - 1) / 2 | 0];
    }), s.init(l, m, u);
  };
});
var Ii = {
  name: "css",
  register: Ea,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, r, i) {
    var n = this._props, s = e.style, l = a.vars.startAt, d, c, u, p, m, g, h, f, y, _, x, v, b, S, A, C, k;
    Wa || Ea(), this.styles = this.styles || Ai(e), C = this.styles.props, this.tween = a;
    for (h in t)
      if (h !== "autoRound" && (c = t[h], !(ie[h] && hi(h, t, a, r, e, i)))) {
        if (m = typeof c, g = Kt[h], m === "function" && (c = c.call(a, r, e, i), m = typeof c), m === "string" && ~c.indexOf("random(") && (c = Rt(c)), g)
          g(this, e, h, c, a) && (A = 1);
        else if (h.substr(0, 2) === "--")
          d = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", Re.lastIndex = 0, Re.test(d) || (f = Q(d), y = Q(c), y ? f !== y && (d = Oe(e, h, d, y) + y) : f && (c += f)), this.add(s, "setProperty", d, c, r, i, 0, 0, h), n.push(h), C.push(h, 0, s[h]);
        else if (m !== "undefined") {
          if (l && h in l ? (d = typeof l[h] == "function" ? l[h].call(a, r, e, i) : l[h], j(d) && ~d.indexOf("random(") && (d = Rt(d)), Q(d + "") || d === "auto" || (d += le.units[h] || Q(ke(e, h)) || ""), (d + "").charAt(1) === "=" && (d = ke(e, h))) : d = ke(e, h), p = parseFloat(d), _ = m === "string" && c.charAt(1) === "=" && c.substr(0, 2), _ && (c = c.substr(2)), u = parseFloat(c), h in be && (h === "autoAlpha" && (p === 1 && ke(e, "visibility") === "hidden" && u && (p = 0), C.push("visibility", 0, s.visibility), Ie(this, s, "visibility", p ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = be[h], ~h.indexOf(",") && (h = h.split(",")[0]))), x = h in Te, x) {
            if (this.styles.save(h), k = c, m === "string" && c.substring(0, 6) === "var(--") {
              if (c = oe(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var T = e.style.perspective;
                e.style.perspective = c, c = oe(e, "perspective"), T ? e.style.perspective = T : De(e, "perspective");
              }
              u = parseFloat(c);
            }
            if (v || (b = e._gsap, b.renderTransform && !t.parseTransform || zt(e, t.parseTransform), S = t.smoothOrigin !== !1 && b.smooth, v = this._pt = new te(this._pt, s, L, 0, 1, b.renderTransform, b, 0, -1), v.dep = 1), h === "scale")
              this._pt = new te(this._pt, b, "scaleY", b.scaleY, (_ ? nt(b.scaleY, _ + u) : u) - b.scaleY || 0, Sa), this._pt.u = 0, n.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              C.push(ae, 0, s[ae]), c = ts(c), b.svg ? Pa(e, c, 0, S, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== b.zOrigin && Ie(this, b, "zOrigin", b.zOrigin, y), Ie(this, s, h, $t(d), $t(c)));
              continue;
            } else if (h === "svgOrigin") {
              Pa(e, c, 1, S, 0, this);
              continue;
            } else if (h in Ti) {
              ns(this, b, h, p, _ ? nt(p, _ + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              Ie(this, b, "smooth", b.smooth, c);
              continue;
            } else if (h === "force3D") {
              b[h] = c;
              continue;
            } else if (h === "transform") {
              ss(this, c, e);
              continue;
            }
          } else h in s || (h = ht(h) || h);
          if (x || (u || u === 0) && (p || p === 0) && !qn.test(c) && h in s)
            f = (d + "").substr((p + "").length), u || (u = 0), y = Q(c) || (h in le.units ? le.units[h] : f), f !== y && (p = Oe(e, h, d, y)), this._pt = new te(this._pt, x ? b : s, h, p, (_ ? nt(p, _ + u) : u) - p, !x && (y === "px" || h === "zIndex") && t.autoRound !== !1 ? Yn : Sa), this._pt.u = y || 0, x && k !== c ? (this._pt.b = d, this._pt.e = k, this._pt.r = Un) : f !== y && y !== "%" && (this._pt.b = d, this._pt.r = Gn);
          else if (h in s)
            es.call(this, e, h, d, _ ? _ + c : c);
          else if (h in e)
            this.add(e, h, d || e[h], _ ? _ + c : c, r, i);
          else if (h !== "parseTransform") {
            Oa(h, c);
            continue;
          }
          x || (h in s ? C.push(h, 0, s[h]) : typeof e[h] == "function" ? C.push(h, 2, e[h]()) : C.push(h, 1, d || e[h])), n.push(h);
        }
      }
    A && _i(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Va())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: ke,
  aliases: be,
  getSetter: function(e, t, a) {
    var r = be[t];
    return r && r.indexOf(",") < 0 && (t = r), t in Te && t !== ae && (e._gsap.x || ke(e, "x")) ? a && or === a ? t === "scale" ? Xn : jn : (or = a || {}) && (t === "scale" ? Jn : Qn) : e.style && !Ra(e.style[t]) ? Wn : ~t.indexOf("-") ? Vn : Ua(e, t);
  },
  core: {
    _removeProperty: De,
    _getMatrix: Xa
  }
};
re.utils.checkPrefix = ht;
re.core.getStyleSaver = Ai;
(function(o, e, t, a) {
  var r = ee(o + "," + e + "," + t, function(i) {
    Te[i] = 1;
  });
  ee(e, function(i) {
    le.units[i] = "deg", Ti[i] = 1;
  }), be[r[13]] = o + "," + e, ee(a, function(i) {
    var n = i.split(":");
    be[n[1]] = r[n[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  le.units[o] = "px";
});
re.registerPlugin(Ii);
var w = re.registerPlugin(Ii) || re;
w.core.Tween;
const os = [
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
    "sequence",
    "drop",
    "file"
  ].map(
    (o) => `wa-message--${o}`
  )
], ls = 1.28, E = (o) => Number((o * ls).toFixed(3)), ds = {
  duration: E(0.44),
  ease: "back.out(1.7)"
}, fr = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, Et = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, cs = {
  charsPerSecond: Et.labelCharsPerSecond,
  minDuration: Et.minDuration,
  maxDuration: Et.maxDuration
}, us = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, wr = {
  detailOffsetY: -4,
  duration: E(0.24)
}, ge = {
  hiddenY: 0,
  hiddenScaleX: 0.62,
  hiddenScaleY: 0.42,
  showDuration: E(0.3),
  hideDuration: E(0.28),
  threadGap: 44
}, ft = {
  scrollOutRatio: 0.74,
  minScrollOut: 280,
  duration: E(0.58),
  threadOverlap: "-=0.36"
}, _r = 110, He = {
  revealDuration: E(0.42),
  revealEase: "power3.inOut",
  followDuration: E(0.24),
  followEase: "power2.out"
}, ve = {
  threadY: -176,
  threadOpacity: 0.1,
  revealDuration: E(0.62),
  revealEase: "power3.inOut",
  cardDuration: E(0.28)
}, hs = 96, br = ".wa-cursor-file, .wa-file-landing-clone, .wa-csv-drop", ps = "[data-marketing-data-sources-grid]", ha = {
  offscreenMargin: 96,
  pullInDuration: E(0.38),
  pullInEase: "power3.out"
}, wt = {
  duration: E(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8]
}, fe = {
  tableRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: E(0.24),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  compactRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: E(0.2),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  softRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: E(0.24),
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
      duration: E(0.28),
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
      duration: E(0.24),
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
      duration: E(0.44),
      ease: "back.out(1.35)",
      stagger: 0.16
    }
  },
  waterfallRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: E(0.22),
      ease: "power2.out",
      stagger: 0.045
    },
    position: "-=0.18"
  }
};
class ms {
  constructor(e) {
    this.root = e, this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.signupScene = this.required("[data-signup-scene]"), this.signupEmail = this.required("[data-signup-email]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.root.querySelectorAll("[data-thinking], [data-research-steps], [data-result-grid]").forEach((t) => {
      t.remove();
    }), this.root.querySelectorAll(br).forEach((t) => {
      t.remove();
    }), this.clearMarketingPanels();
  }
  root;
  chatShell;
  chatBody;
  thread;
  composerText;
  composer;
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
  reset() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null, this.clearTransientElements(), this.clearMarketingPanels(), this.messageIndex = 0, this.cardIndex = 0, this.composerText.textContent = "", w.killTweensOf([this.composer, this.composerText, this.thread]), this.setComposerFocusState(!1), this.setComposerVisibleState(!1), this.signupEmail.textContent = "", this.status?.replaceChildren(document.createTextNode("Ready")), this.clearCustomResults(), this.thread.scrollTop = 0, w.set(this.thread, {
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
  prepareStoryStart() {
    this.setComposerFocusState(!1), this.setComposerVisibleState(!1), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerText, { autoAlpha: 1, y: 0 });
  }
  setStatus(e) {
    const t = w.timeline();
    return this.status && t.to(this.status, {
      autoAlpha: 0,
      y: -3,
      duration: E(0.12),
      ease: "power1.out"
    }).call(() => {
      this.status && (this.status.textContent = e);
    }).to(this.status, {
      autoAlpha: 1,
      y: 0,
      duration: E(0.18),
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
    const a = { count: 0 }, r = w.timeline();
    return r.call(() => {
      this.composerText.textContent = "";
    }).to(a, {
      count: e.length,
      duration: t,
      ease: "none",
      onUpdate: () => {
        this.composerText.textContent = e.slice(0, Math.round(a.count));
      }
    }), r;
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
      duration: ge.showDuration,
      ease: "power3.out",
      force3D: !0,
      overwrite: "auto",
      onStart: () => {
        this.setComposerVisibleState(!0), w.set(this.composer, {
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
        paddingBottom: () => Math.max(_r, this.getComposerThreadInset()),
        duration: ge.showDuration,
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
      y: ge.hiddenY,
      scaleX: ge.hiddenScaleX,
      scaleY: ge.hiddenScaleY,
      opacity: 1,
      duration: ge.hideDuration,
      ease: "power2.inOut",
      force3D: !0,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        w.set(this.composer, { visibility: "hidden" });
      }
    }).to(
      this.thread,
      {
        paddingBottom: _r,
        duration: ge.hideDuration,
        ease: "power2.inOut",
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
      y: ge.hiddenY,
      scaleX: ge.hiddenScaleX,
      scaleY: ge.hiddenScaleY,
      display: "",
      transformOrigin: "center center"
    };
  }
  getComposerThreadInset() {
    const e = this.composer.getBoundingClientRect(), t = this.thread.getBoundingClientRect(), a = Math.max(0, t.bottom - e.top);
    return Math.ceil(a + ge.threadGap);
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
      duration: ft.duration,
      ease: "power3.inOut"
    }).set(this.signupScene, { pointerEvents: "none" }).fromTo(
      this.thread,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: ft.duration,
        ease: "power3.out"
      },
      ft.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(ft.minScrollOut, Math.round(e * ft.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  scrollToLive(e = He.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = w.to(this.thread, {
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
    const t = this.claimMessage("assistant", ""), a = t.querySelector("[data-message-body]"), r = w.timeline().add(this.revealMessage(t));
    return a ? r.add(
      this.streamText(a, e, {
        duration: this.getStreamDuration(e, fr),
        targetForScroll: t
      }),
      fr.startOverlap
    ) : r;
  }
  thinkingState(e, t = 1.1) {
    return this.runThinkingSequence([e], {
      hold: t,
      itemStartY: 6,
      headerDuration: 0.28,
      afterStepHold: t,
      finalHold: 0
    });
  }
  researchSequence(e, t = 0.42) {
    return this.runThinkingSequence(e, {
      hold: t,
      itemStartY: 10,
      headerDuration: 0.24,
      afterStepHold: t * 0.45,
      finalHold: t * 0.35
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
    return this.revealComponentItems("table", t, ".wa-data-table__row", fe.tableRow);
  }
  enrichmentPanel(e) {
    const t = this.createEnrichmentPanel(e);
    return this.revealComponentItems("enrichment", t, ".wa-waterfall-row", fe.waterfallRow);
  }
  strategyPlans(e) {
    const t = e.map((i) => this.createStrategyPlan(i)), a = document.createElement("div"), r = t.flatMap((i) => Array.from(i.querySelectorAll(".wa-strategy-plan__summary")));
    return a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((i) => i.id).join(" "), a.append(...t), w.set(r, { autoAlpha: 0, y: 8 }), this.revealComponentItems("strategy", a, t, fe.strategyCard).to(
      r,
      {
        autoAlpha: 1,
        y: 0,
        duration: E(0.24),
        ease: "power2.out",
        stagger: 0.035
      },
      "-=0.22"
    );
  }
  dataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e);
    return this.revealComponentItems("sources", t, ".wa-data-source-card", fe.smallCard);
  }
  marketingDataSourcesGrid(e) {
    const t = this.createMarketingDataSourcesGrid(e), a = Array.from(t.querySelectorAll(".wa-data-source-card")), r = Array.from(t.querySelectorAll(".wa-data-source-group")), i = t.querySelector(".wa-data-source-grid__header"), n = [i, ...r, ...a].filter((s) => !!s);
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
        duration: ve.revealDuration,
        ease: ve.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: ve.threadY,
        autoAlpha: ve.threadOpacity,
        duration: ve.revealDuration,
        ease: ve.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: ve.revealDuration,
        ease: ve.revealEase
      },
      0.16
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: E(0.28),
        ease: "power2.out"
      },
      0.28
    ).to(
      r,
      {
        autoAlpha: 1,
        y: 0,
        duration: E(0.3),
        ease: "power2.out",
        stagger: 0.04
      },
      0.36
    ).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: ve.cardDuration,
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
      fe.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("proximity", t, ".wa-proximity-lead", {
      ...fe.stackCard,
      to: { ...fe.stackCard.to, duration: E(0.25), stagger: 0.06 }
    });
  }
  sequenceEngagement(e) {
    const t = this.createSequenceEngagement(e);
    return this.revealComponentItems(
      "sequence",
      t,
      ".wa-sequence-card, .wa-engage-channel",
      fe.stackCard
    );
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
    const r = this.createCursorFile(e, a);
    let i = null, n = { x: 0, y: 0 };
    const s = () => {
      i?.(), i = null, w.killTweensOf(n);
    };
    return this.registerTransientElement(r, () => {
      s();
    }), {
      el: r,
      startFollow: () => w.timeline().call(() => {
        i?.(), n = this.getCursorFileEntryOffset(r, t), i = this.followCursorWithFile(r, t, n);
      }).to(n, {
        x: 0,
        y: 0,
        duration: ha.pullInDuration,
        ease: ha.pullInEase
      }, 0).to(r, {
        autoAlpha: 1,
        scale: 1,
        duration: E(0.24),
        ease: "back.out(1.9)"
      }, 0.04),
      stopFollow: () => w.timeline().call(s).to(r, {
        autoAlpha: 0,
        scale: 0.92,
        duration: E(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (l, d = "CSV uploaded") => w.timeline().call(s).add(this.uploadedFileMessageFromCursorFile(r, l, d)),
      landAsUploadedFiles: (l) => w.timeline().call(s).add(this.uploadedFilesMessageFromCursorFile(r, l))
    };
  }
  uploadedFileMessage(e, t = "CSV uploaded") {
    const a = this.createUploadedFile(e, t), r = this.claimUserComponentMessage("file", a);
    return this.revealMessageWithChildFrom(r, a, {
      autoAlpha: 0,
      y: 8,
      scale: 0.98
    }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: E(0.26),
      ease: "back.out(1.6)"
    });
  }
  uploadedFileMessageFromCursorFile(e, t, a = "CSV uploaded") {
    const r = this.createUploadedFile(t, a), i = this.claimUserComponentMessage("file", r);
    return this.revealDroppedFilesMessage(e, i, [r]);
  }
  uploadedFilesMessage(e) {
    const t = this.createUploadedFiles(e);
    return this.revealUserComponentItems("file", t, ".wa-uploaded-file", {
      ...fe.compactRow,
      from: { ...fe.compactRow.from, scale: 0.99 },
      to: { ...fe.compactRow.to, scale: 1 },
      position: "-=0.24"
    });
  }
  uploadedFilesMessageFromCursorFile(e, t) {
    const a = this.createUploadedFiles(t), r = this.claimUserComponentMessage("file", a), i = Array.from(a.querySelectorAll(".wa-uploaded-file")), n = Array.from(a.querySelectorAll(".wa-uploaded-files__summary"));
    return this.revealDroppedFilesMessage(e, r, i, n);
  }
  pulse(e) {
    const t = typeof e == "string" ? this.root.querySelector(e) : e, a = w.timeline();
    return t && a.to(t, {
      scale: 1.025,
      duration: E(0.14),
      ease: "power2.out"
    }).to(t, {
      scale: 1,
      duration: E(0.28),
      ease: "elastic.out(1, 0.55)"
    }), a;
  }
  revealDroppedFilesMessage(e, t, a, r = []) {
    const i = [...a, ...r];
    let n = [];
    return !a.length || !e.isConnected ? this.revealMessageWithChildren(t, i, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: E(0.24),
      ease: "power2.out",
      stagger: wt.stagger
    }) : (w.set(i, { autoAlpha: 0 }), w.timeline().add(this.revealMessage(t)).call(() => {
      n = this.createFileLandingClones(e, a), w.set(e, { autoAlpha: 0 });
    }).to(
      n.map((s) => s.el),
      {
        x: (s) => this.getRootLocalRect(n[s].targetRect).left,
        y: (s) => this.getRootLocalRect(n[s].targetRect).top,
        scaleX: (s) => n[s].targetRect.width / Math.max(1, n[s].sourceRect.width),
        scaleY: (s) => n[s].targetRect.height / Math.max(1, n[s].sourceRect.height),
        rotation: 0,
        duration: wt.duration,
        ease: wt.ease,
        stagger: wt.stagger,
        overwrite: "auto"
      },
      "-=0.06"
    ).call(() => {
      w.set(i, { autoAlpha: 1, y: 0, scale: 1 }), n.forEach((s) => s.el.remove()), e.remove();
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e);
    return t.map((r, i) => {
      const n = a[Math.min(i, a.length - 1)], s = n.getBoundingClientRect(), l = r.getBoundingClientRect(), d = this.getRootLocalRect(s), c = n.cloneNode(!0);
      return c.classList.add("wa-file-landing-clone"), c.dataset.fileLandingClone = "", this.root.append(c), w.set(c, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        x: d.left,
        y: d.top,
        scaleX: 1,
        scaleY: 1,
        rotation: this.getCursorFileCardRotation(i, a.length),
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1
      }), { el: c, sourceRect: s, targetRect: l };
    });
  }
  getCursorFileCards(e) {
    const t = Array.from(e.querySelectorAll(".wa-cursor-file__card"));
    return t.length ? t : [e];
  }
  getCursorFileCardRotation(e, t) {
    return t > 1 ? wt.rotations[e] ?? 0 : 0;
  }
  getRootLocalRect(e) {
    const t = this.root.getBoundingClientRect();
    return {
      left: e.left - t.left,
      top: e.top - t.top
    };
  }
  revealMessageWithChildren(e, t, a, r = "-=0.22") {
    return w.timeline().add(this.revealMessage(e)).to(t, a, r);
  }
  revealMessageWithChildFrom(e, t, a, r, i = "-=0.22") {
    return w.timeline().add(this.revealMessage(e)).fromTo(
      t,
      a,
      r,
      i
    );
  }
  revealComponentItems(e, t, a, r) {
    const i = this.claimComponentMessage(e, t);
    return this.revealPreparedItems(i, this.resolveRevealTargets(t, a), r);
  }
  revealUserComponentItems(e, t, a, r) {
    const i = this.claimUserComponentMessage(e, t);
    return this.revealPreparedItems(i, this.resolveRevealTargets(t, a), r);
  }
  resolveRevealTargets(e, t) {
    return typeof t == "string" ? Array.from(e.querySelectorAll(t)) : t;
  }
  revealPreparedItems(e, t, a) {
    return t.length && w.set(t, { ...a.from }), this.revealMessageWithChildren(e, t, { ...a.to }, a.position);
  }
  revealMessage(e) {
    let t = 0;
    return w.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, e.style.display = "grid", this.composerVisible && this.pinThreadToBottom(), t = this.getMessageScrollTarget(e);
    }).to(
      this.thread,
      {
        scrollTop: () => t,
        duration: He.revealDuration,
        ease: He.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...ds
    }, 0.04);
  }
  claimMessage(e, t) {
    const a = this.messageIndex, r = this.messagePool[a] ?? this.createMessage(a), i = r.querySelector("[data-message-body]");
    return this.messageIndex += 1, r.dataset.messageRole = e, r.dataset.messageId = `${e}-${a}`, this.resetMessageClasses(r), r.classList.toggle("wa-message--first-active", a === 0), r.style.display = "none", i && (delete i.dataset.streaming, i.replaceChildren(document.createTextNode(t))), this.thread.append(r), w.set(r, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: e === "user" ? "right center" : "left center"
    }), r;
  }
  claimComponentMessage(e, t) {
    const a = this.messageIndex, r = this.messagePool[a] ?? this.createMessage(a), i = r.querySelector("[data-message-body]");
    return this.messageIndex += 1, r.dataset.messageRole = "assistant", r.dataset.messageId = `assistant-component-${a}`, this.resetMessageClasses(r), r.classList.toggle("wa-message--first-active", a === 0), r.classList.add("wa-message--component", `wa-message--${e}`), r.style.display = "none", i && (delete i.dataset.streaming, i.replaceChildren(t)), this.thread.append(r), w.set(r, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: "left center"
    }), r;
  }
  claimUserComponentMessage(e, t) {
    const a = this.claimMessage("user", ""), r = a.querySelector("[data-message-body]");
    return a.classList.add("wa-message--component", `wa-message--${e}`), r?.replaceChildren(t), a;
  }
  resetMessageClasses(e) {
    e.classList.remove(...os), e.classList.remove("wa-message--first-active");
  }
  createCsvDropArea(e = {}) {
    const t = document.createElement("article");
    t.className = "wa-csv-drop", t.dataset.csvDropArea = "", t.dataset.dropState = "idle";
    const a = document.createElement("span");
    a.className = "wa-csv-drop__copy";
    const r = document.createElement("strong");
    r.textContent = e.title ?? "Drop CSV to clean audience data";
    const i = document.createElement("span");
    return i.textContent = e.detail ?? "Accepts webinar exports, event lists, and messy attendee spreadsheets.", a.append(r, i), t.append(a), t;
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
          }, r = () => w.ticker.remove(a);
          this.dropRevealWatchers.set(e, r), w.ticker.add(a);
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
    const t = e.readPosition(), a = this.root.getBoundingClientRect(), r = this.chatShell.getBoundingClientRect(), i = {
      x: a.left + t.x,
      y: a.top + t.y
    };
    return i.x >= r.left && i.x <= r.right && i.y >= r.top && i.y <= r.bottom;
  }
  createCursorFile(e, t = "CSV") {
    const a = document.createElement("div");
    a.className = "wa-cursor-file", a.setAttribute("aria-hidden", "true");
    const r = this.getCursorFileStackCount(e);
    return r > 1 ? (a.classList.add("wa-cursor-file--stack"), a.append(...this.createCursorFileStack(e, t, r))) : a.append(this.createCursorFileCard(e, t)), this.root.append(a), w.set(a, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 }), a;
  }
  followCursorWithFile(e, t, a) {
    const r = e.offsetWidth || 154, i = e.offsetHeight || 42, n = w.quickSetter(e, "x", "px"), s = w.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, d = () => {
      const c = t.readPosition(), u = c.x - r * 0.5 + a.x, p = c.y - i * 0.5 + a.y;
      u !== l.x && (l.x = u, n(u)), p !== l.y && (l.y = p, s(p));
    };
    return d(), w.ticker.add(d), () => w.ticker.remove(d);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, r = t.readPosition(), i = this.root.getBoundingClientRect().width || window.innerWidth, n = r.x + a * 0.5, s = i + ha.offscreenMargin;
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
    return this.getCursorFileStackLabels(e, a).map((i, n) => {
      const s = this.createCursorFileCard(i, t);
      return s.classList.add("wa-cursor-file__card--stacked"), s;
    });
  }
  getCursorFileStackLabels(e, t) {
    return e.toLowerCase().includes("context") ? ["Battle cards", "ICP notes", "Voice doc", "Playbook"].slice(0, t) : Array.from({ length: t }, (a, r) => r === 0 ? e : `File ${r + 1}`);
  }
  createCursorFileCard(e, t) {
    const a = document.createElement("span");
    a.className = "wa-cursor-file__card";
    const r = document.createElement("span");
    r.className = "wa-cursor-file__icon", r.textContent = t;
    const i = document.createElement("span");
    return i.className = "wa-cursor-file__name", i.textContent = e, a.append(r, i), a;
  }
  createUploadedFile(e, t) {
    const a = document.createElement("div");
    a.className = "wa-uploaded-file";
    const r = document.createElement("span");
    r.className = "wa-uploaded-file__icon", r.textContent = "CSV";
    const i = document.createElement("span");
    i.className = "wa-uploaded-file__body";
    const n = document.createElement("strong");
    n.textContent = e;
    const s = document.createElement("span");
    return s.textContent = t, i.append(n, s), a.append(r, i), a;
  }
  createUploadedFiles(e) {
    const t = document.createElement("div");
    t.className = "wa-uploaded-files";
    const a = document.createElement("span");
    a.className = "wa-uploaded-files__summary", a.textContent = `${e.length} business context files`;
    const r = document.createElement("div");
    return r.className = "wa-uploaded-files__list", e.forEach((i) => {
      const n = this.createUploadedFile(i.name, i.detail), s = n.querySelector(".wa-uploaded-file__icon");
      s && (s.textContent = i.type ?? "DOC"), r.append(n);
    }), t.append(a, r), t;
  }
  streamThinkingHeader(e) {
    const t = e.querySelector(".wa-thinking__title"), a = t?.dataset.fullText ?? t?.textContent ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, us),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepLabel(e) {
    const t = e.querySelector(".wa-research-step__label"), a = t?.dataset.fullText ?? t?.textContent ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, cs),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepDetail(e) {
    const t = e.querySelector(".wa-research-step__detail"), a = t?.dataset.fullText ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, Et),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamText(e, t, a) {
    const r = { count: 0 };
    let i = -1;
    return w.timeline().call(() => {
      e.dataset.streaming = "true", e.textContent = "", i = 0;
    }).to(r, {
      count: t.length,
      duration: a.duration,
      ease: "none",
      onUpdate: () => {
        const n = Math.round(r.count);
        n !== i && (i = n, e.textContent = t.slice(0, n), this.requestMessageScroll(a.targetForScroll));
      }
    }).call(() => {
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, He.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-research-step__disclosure, .wa-research-step__chevron"
    );
    return w.timeline().to(t, {
      autoAlpha: 0,
      y: wr.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: wr.duration,
      ease: "power2.inOut"
    }).call(() => {
      e.dataset.stepState = "complete", this.animateMessageScrollIntoView(e.closest(".wa-message") ?? e);
    });
  }
  runThinkingSequence(e, t) {
    const a = w.timeline(), r = e.map((n, s) => this.createThinkingStep(n, s)), i = this.claimThinkingMessage(r, this.getThinkingElapsed(e.length));
    return a.call(() => {
      r.forEach((n) => {
        n.dataset.stepState = "pending";
      }), w.set(i.header, { autoAlpha: 0, y: 5 }), w.set(i.steps, { display: "grid", autoAlpha: 1, y: 0 }), w.set(r, { autoAlpha: 0, y: t.itemStartY });
    }).add(this.revealMessage(i.message)).to(i.header, {
      autoAlpha: 1,
      y: 0,
      duration: E(t.headerDuration),
      ease: "power2.out"
    }).add(this.streamThinkingHeader(i.header), "-=0.08"), e.forEach((n, s) => {
      const l = r[s], d = s === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(r, s), void 0, d).to(
        l,
        {
          autoAlpha: 1,
          y: 0,
          duration: E(0.26),
          ease: "power2.out"
        },
        "<"
      ).add(this.streamThinkingStepLabel(l), Et.startOverlap).add(this.streamThinkingStepDetail(l), "-=0.02").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(l));
    }), a.call(() => {
      r.forEach((n) => {
        n.dataset.stepState = "complete";
      });
    }, void 0, `+=${t.finalHold}`);
  }
  activateThinkingStep(e, t) {
    e.forEach((a, r) => {
      r > t && (a.dataset.stepState = "pending"), r === t && (a.dataset.stepState = "current");
    });
  }
  getStreamDuration(e, t) {
    return this.prefersReducedMotion ? 0.01 : Math.min(t.maxDuration, Math.max(t.minDuration, e.length / t.charsPerSecond));
  }
  claimThinkingMessage(e, t) {
    const a = document.createElement("div");
    a.className = "wa-thinking-block";
    const r = document.createElement("div");
    r.className = "wa-thinking";
    const i = document.createElement("span");
    i.className = "wa-thinking__glyph", i.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-thinking__title", n.dataset.fullText = "Thinking", n.textContent = "";
    const s = document.createElement("span");
    s.className = "wa-thinking__elapsed", s.textContent = t;
    const l = document.createElement("div");
    return l.className = "wa-research-steps", l.dataset.researchSteps = "", l.append(...e), r.append(i, n, s), a.append(r, l), {
      message: this.claimComponentMessage("thinking", a),
      header: r,
      steps: l
    };
  }
  createMessage(e) {
    const t = document.createElement("div");
    t.className = "wa-message", t.dataset.messageId = `message-${e}`;
    const a = document.createElement("div");
    a.className = "wa-message__avatar";
    const r = document.createElement("div");
    return r.className = "wa-message__body", r.dataset.messageBody = "", t.append(a, r), this.messagePool[e] = t, t;
  }
  createThinkingStep(e, t) {
    const a = document.createElement("div");
    a.className = "wa-research-step", a.dataset.researchStep = String(t), a.dataset.stepState = t === 0 ? "current" : "complete";
    const r = document.createElement("span");
    r.className = "wa-research-step__check", r.setAttribute("aria-hidden", "true");
    const i = document.createElement("span");
    i.className = "wa-research-step__body";
    const n = document.createElement("span");
    n.className = "wa-research-step__label", n.dataset.fullText = e, n.textContent = "";
    const s = document.createElement("span");
    s.className = "wa-research-step__detail", s.dataset.fullText = this.getThinkingDetail(e, t), s.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-research-step__disclosure", l.textContent = t === 0 ? "Show more" : "Show less";
    const d = document.createElement("span");
    return d.className = "wa-research-step__chevron", d.setAttribute("aria-hidden", "true"), i.append(n, s, l), a.append(r, i, d), a;
  }
  getThinkingDetail(e, t) {
    const a = e.toLowerCase();
    return a.includes("source") || a.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : a.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : a.includes("icp") || a.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : a.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : a.includes("career") || a.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : a.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : a.includes("funding") || a.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : a.includes("transcript") || a.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : a.includes("logs") || a.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : a.includes("account") || a.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : t % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
  }
  getThinkingElapsed(e) {
    return e <= 1 ? "4m 12s" : e <= 3 ? "4m 20s" : "4m 50s";
  }
  createSectionHeader(e, t, a, r) {
    const i = document.createElement("div");
    i.className = `${e}__header`;
    const n = document.createElement("h3");
    if (n.className = `${e}__title`, n.textContent = t, i.append(n), r && i.append(r), a) {
      const s = document.createElement("p");
      s.className = `${e}__subtitle`, s.textContent = a, i.append(s);
    }
    return i;
  }
  claimCard(e) {
    const t = this.cardIndex, a = this.cardPool[t] ?? this.createCard(t), r = a.querySelector("[data-result-kicker]"), i = a.querySelector("[data-result-title]"), n = a.querySelector("[data-result-body]"), s = a.querySelector("[data-result-rows]"), l = a.querySelector("[data-result-actions]");
    return this.cardIndex += 1, a.dataset.resultCard = e.id, a.style.display = "none", r && (r.textContent = e.kicker ?? "Result"), i && (i.textContent = e.title), n && (n.textContent = e.body ?? ""), s?.replaceChildren(
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
    const t = document.createElement("article");
    t.className = "wa-data-table", t.dataset.dataTable = e.id, t.dataset.tableVariant = e.variant ?? "default", t.dataset.columnCount = String(e.columns.length), t.style.setProperty(
      "--wa-data-table-columns",
      e.columns.map((s) => s.width ?? "minmax(0, 1fr)").join(" ")
    );
    const a = document.createElement("div");
    a.className = "wa-data-table__header";
    const r = document.createElement("div");
    r.className = "wa-data-table__meta", r.textContent = e.eyebrow ?? "Data marketplace";
    const i = document.createElement("h3");
    if (i.className = "wa-data-table__title", i.textContent = e.title, a.append(r, i), e.count) {
      const s = document.createElement("span");
      s.className = "wa-data-table__count", s.textContent = e.count, a.append(s);
    }
    const n = document.createElement("div");
    n.className = "wa-data-table__grid", n.append(this.createDataTableRow("header", e.columns, {}, e.id));
    for (const s of e.rows)
      n.append(this.createDataTableRow(s.id, e.columns, s.values, e.id));
    return t.append(a, n), t;
  }
  createDataTableRow(e, t, a, r) {
    const i = document.createElement("div");
    i.className = "wa-data-table__row", i.dataset.tableRow = e;
    const n = e === "header";
    n && (i.dataset.header = "true"), !n && a.source && (i.dataset.source = a.source);
    for (const s of t) {
      const l = document.createElement(n ? "strong" : "span");
      if (l.className = "wa-data-table__cell", l.dataset.columnKey = s.key, n)
        l.textContent = s.label;
      else if (s.key === "name" || s.key === "contact")
        l.append(this.createDataTablePerson(a, a[s.key] ?? ""));
      else {
        const d = a[s.key] ?? "";
        l.textContent = d || "-", d || (l.dataset.empty = "true");
      }
      i.append(l);
    }
    if (n) {
      const s = document.createElement("button");
      s.className = "wa-data-table__add", s.type = "button", s.tabIndex = -1, s.setAttribute("aria-label", `Add row to ${r}`), s.textContent = "+", i.append(s);
    }
    return i;
  }
  createDataTablePerson(e, t) {
    const a = document.createElement("span");
    a.className = "wa-data-table-person";
    const r = document.createElement("span");
    r.className = "wa-data-table-person__avatar-wrap";
    const i = document.createElement("span");
    if (i.className = "wa-data-table-person__avatar", i.dataset.avatarTone = e.avatarTone ?? "1", e.avatarUrl) {
      const l = document.createElement("img");
      l.alt = "", l.decoding = "async", l.loading = "lazy", l.referrerPolicy = "no-referrer", l.src = e.avatarUrl, i.append(l);
    } else
      i.textContent = e.avatar ?? this.getInitials(t);
    const n = document.createElement("span");
    n.className = "wa-data-table-person__source", n.dataset.source = e.source ?? "default", n.setAttribute("aria-hidden", "true");
    const s = document.createElement("span");
    return s.className = "wa-data-table-person__name", s.textContent = t || "-", r.append(i, n), a.append(r, s), a;
  }
  getInitials(e) {
    return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
  }
  createEnrichmentPanel(e) {
    const t = document.createElement("article");
    t.className = "wa-enrichment-panel wa-waterfall-thinking", t.dataset.enrichmentPanel = e.id;
    const a = document.createElement("div");
    a.className = "wa-enrichment-panel__header";
    const r = document.createElement("span");
    r.className = "wa-thinking__glyph", r.setAttribute("aria-hidden", "true");
    const i = document.createElement("span");
    i.className = "wa-thinking__title", i.textContent = "Enriching";
    const n = document.createElement("span");
    n.className = "wa-thinking__elapsed", n.textContent = "4m 20s", a.append(r, i, n);
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
    const r = document.createElement("div");
    r.className = "wa-waterfall-row", r.dataset.stepState = t;
    const i = document.createElement("span");
    i.className = "wa-waterfall-row__status", i.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-waterfall-row__label", n.textContent = e;
    const s = document.createElement("span");
    return s.className = "wa-waterfall-row__chips", s.append(
      ...a.map((l) => {
        const d = document.createElement("span");
        return d.className = "wa-waterfall-chip", d.dataset.stepState = l.state, d.textContent = l.label, d;
      })
    ), r.append(i, n, s), r;
  }
  createStrategyPlan(e) {
    const t = document.createElement("article");
    t.className = "wa-strategy-plan", t.dataset.strategyPlan = e.id;
    const a = document.createElement("div");
    a.className = "wa-strategy-plan__label", a.textContent = e.label;
    const r = document.createElement("h3");
    r.className = "wa-strategy-plan__title", r.textContent = e.title;
    const i = document.createElement("p");
    return i.className = "wa-strategy-plan__summary", i.textContent = this.getStrategyPlanSummary(e), t.append(a, r, i), t;
  }
  getStrategyPlanSummary(e) {
    return e.summary ? e.summary : [e.audience, e.motion, e.proof].filter(Boolean).join(". ");
  }
  createDataSourcesGrid(e) {
    const t = document.createElement("section");
    t.className = "wa-data-source-grid", t.dataset.dataSourcesGrid = e.id;
    const a = this.createSectionHeader("wa-data-source-grid", e.title, e.subtitle), r = document.createElement("div");
    return r.className = "wa-data-source-grid__list", e.sources.forEach((i) => {
      r.append(this.createDataSourceCard(i));
    }), t.append(a, r), t;
  }
  createMarketingDataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e), a = document.createElement("div"), r = t.querySelector(".wa-data-source-grid__header");
    t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__groups";
    for (const i of this.groupDataSources(e.sources)) {
      const n = document.createElement("section"), s = document.createElement("h4"), l = document.createElement("div");
      n.className = "wa-data-source-group", s.className = "wa-data-source-group__title", s.textContent = i.category, l.className = "wa-data-source-grid__list", i.sources.forEach((d) => {
        l.append(this.createDataSourceCard(d));
      }), n.append(s, l), a.append(n);
    }
    return t.replaceChildren(...[r, a].filter((i) => !!i)), t;
  }
  groupDataSources(e) {
    const t = [], a = /* @__PURE__ */ new Map();
    return e.forEach((r) => {
      const i = r.category ?? "Data partners";
      let n = a.get(i);
      n || (n = { category: i, sources: [] }, a.set(i, n), t.push(n)), n.sources.push(r);
    }), t;
  }
  createDataSourceCard(e) {
    const t = document.createElement("article");
    t.className = "wa-data-source-card", t.dataset.dataSource = e.id;
    const a = document.createElement("span");
    a.className = "wa-data-source-card__icon", a.setAttribute("aria-hidden", "true");
    const r = document.createElement("span");
    r.className = "wa-data-source-card__copy";
    const i = document.createElement("strong");
    i.textContent = e.name;
    const n = document.createElement("span");
    return n.textContent = e.detail, r.append(i, n), t.append(a, r), t;
  }
  createOutreachStyleProfile(e) {
    const t = document.createElement("section");
    t.className = "wa-style-profile", t.dataset.styleProfile = e.id;
    const a = this.createSectionHeader("wa-style-profile", e.title, e.subtitle), r = document.createElement("div");
    if (r.className = "wa-style-profile__rows", e.signals.forEach((i) => {
      const n = document.createElement("div");
      n.className = "wa-style-profile__row";
      const s = document.createElement("span");
      s.textContent = i.label;
      const l = document.createElement("strong");
      l.textContent = i.value, n.append(s, l), r.append(n);
    }), t.append(a, r), e.examples?.length) {
      const i = document.createElement("div");
      i.className = "wa-style-profile__examples", e.examples.forEach((n) => {
        const s = document.createElement("blockquote");
        s.className = "wa-style-profile__example", s.textContent = n, i.append(s);
      }), t.append(i);
    }
    return t;
  }
  createProximityLeadList(e) {
    const t = document.createElement("section");
    t.className = "wa-proximity-list", t.dataset.proximityList = e.id;
    const a = this.createSectionHeader("wa-proximity-list", e.title, e.subtitle), r = document.createElement("div");
    return r.className = "wa-proximity-list__rows", e.leads.forEach((i) => {
      const n = document.createElement("article");
      n.className = "wa-proximity-lead", n.dataset.proximityScore = i.score;
      const s = document.createElement("span");
      s.className = "wa-proximity-lead__rank", s.textContent = i.rank;
      const l = document.createElement("div");
      l.className = "wa-proximity-lead__body";
      const d = document.createElement("div");
      d.className = "wa-proximity-lead__top";
      const c = document.createElement("span");
      c.className = "wa-proximity-lead__identity";
      const u = document.createElement("strong");
      u.textContent = i.name;
      const p = document.createElement("span");
      p.textContent = `${i.title}, ${i.company}`, c.append(u, p);
      const m = document.createElement("span");
      m.className = "wa-proximity-lead__score", m.textContent = i.score, d.append(c, m);
      const g = document.createElement("p");
      g.className = "wa-proximity-lead__personalization", g.textContent = i.personalization;
      const h = document.createElement("span");
      h.className = "wa-proximity-lead__proximity", h.textContent = i.proximity, l.append(d, g, h), n.append(s, l), r.append(n);
    }), t.append(a, r), t;
  }
  createSequenceEngagement(e) {
    const t = document.createElement("section");
    t.className = "wa-sequence-engagement", t.dataset.sequenceEngagement = e.id;
    const a = document.createElement("span");
    a.className = "wa-sequence-engagement__count", a.textContent = e.peopleCount;
    const r = this.createSectionHeader("wa-sequence-engagement", e.title, e.subtitle, a), i = document.createElement("div");
    i.className = "wa-sequence-engagement__sequences", e.sequences.forEach((s) => {
      const l = document.createElement("article");
      l.className = "wa-sequence-card";
      const d = document.createElement("div");
      d.className = "wa-sequence-card__top";
      const c = document.createElement("span");
      c.className = "wa-sequence-card__identity";
      const u = document.createElement("strong");
      u.textContent = s.name;
      const p = document.createElement("span");
      p.textContent = s.company, c.append(u, p);
      const m = document.createElement("span");
      m.className = "wa-sequence-card__label", m.textContent = "Personalized", d.append(c, m);
      const g = document.createElement("p");
      g.className = "wa-sequence-card__subject", g.textContent = s.subject;
      const h = document.createElement("p");
      h.className = "wa-sequence-card__personalization", h.textContent = s.personalization, l.append(d, g, h), i.append(l);
    });
    const n = document.createElement("div");
    return n.className = "wa-engage-channels", e.channels.forEach((s) => {
      const l = document.createElement("button");
      l.className = "wa-engage-channel", l.type = "button", l.tabIndex = -1;
      const d = document.createElement("span");
      d.className = "wa-engage-channel__copy";
      const c = document.createElement("strong");
      c.textContent = s.label;
      const u = document.createElement("span");
      if (u.textContent = s.detail, d.append(c, u), l.append(d), s.badge) {
        const p = document.createElement("span");
        p.className = "wa-engage-channel__badge", p.textContent = s.badge, l.dataset.badge = s.badge.toLowerCase(), l.append(p);
      }
      n.append(l);
    }), t.append(r, i, n), t;
  }
  revealCard(e) {
    const t = this.claimComponentMessage("result", e), a = e.querySelectorAll(".wa-result-row, .wa-result-action");
    return w.timeline().call(() => {
      e.style.display = "grid";
    }).add(this.revealMessageWithChildren(t, e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: E(0.48),
      ease: "back.out(1.45)"
    }), 0).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: E(0.32),
        ease: "power2.out",
        stagger: 0.06
      },
      "-=0.22"
    );
  }
  highlightCardTarget(e, t) {
    const a = typeof t == "string" ? e.querySelector(t) : t ?? e.querySelector(".wa-result-row, .wa-result-action") ?? e, r = w.timeline();
    return a && r.to(a, {
      backgroundColor: "rgba(213, 255, 79, 0.22)",
      scale: 1.018,
      duration: E(0.16),
      ease: "power2.out"
    }).to(a, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 1,
      duration: E(0.42),
      ease: "power2.out"
    }), r;
  }
  required(e) {
    const t = this.root.querySelector(e);
    if (!t)
      throw new Error(`ChatbotStories: required element missing: ${e}`);
    return t;
  }
  clearCustomResults() {
    this.root.querySelectorAll("[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel").forEach((e) => {
      e.remove();
    });
  }
  clearMarketingPanels() {
    this.root.querySelectorAll(ps).forEach((e) => {
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
    this.transientCleanups = [], this.root.querySelectorAll(br).forEach((e) => {
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
  animateMessageScrollIntoView(e, t = He.followDuration) {
    const a = this.getMessageScrollTarget(e);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - a) < 1) {
      this.thread.scrollTop = a;
      return;
    }
    this.scrollTween?.kill(), this.scrollTween = w.to(this.thread, {
      scrollTop: a,
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
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < hs) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function gs(o, e) {
  return Math.hypot(e.x - o.x, e.y - o.y);
}
function kt(o, e, t) {
  return Math.min(t, Math.max(e, o));
}
function yr(o, e, t, a, r) {
  const i = 1 - r, n = r * r, s = i * i, l = s * i, d = n * r;
  return {
    x: l * o.x + 3 * s * r * e.x + 3 * i * n * t.x + d * a.x,
    y: l * o.y + 3 * s * r * e.y + 3 * i * n * t.y + d * a.y
  };
}
function fs(o) {
  let e = 2166136261;
  for (let t = 0; t < o.length; t += 1)
    e ^= o.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function Mi(o) {
  let e = fs(o) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const ws = {
  slow: 560,
  normal: 860,
  quick: 1220
}, _s = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, bs = 1.24;
function Bt(o, e, t) {
  const a = Mi(t.seed), r = gs(o, e), i = t.speed ?? "normal", n = t.intent ?? "hover";
  if (t.reducedMotion || r < 2)
    return {
      start: o,
      c1: o,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const s = e.x - o.x, l = e.y - o.y, d = s / r, c = l / r, u = -c, p = d, m = a() > 0.5 ? 1 : -1, g = t.curve ?? 1, f = kt(r * (n === "drag" ? 0.1 : n === "click" ? 0.17 : 0.22) * g, 18, 150) * m * (0.72 + a() * 0.44), y = r / ws[i] + 0.16, _ = kt(y * _s[n] * bs, 0.3, 1.66), x = t.overshoot === !1 || r < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : kt(r * 0.026, 4, 18), v = x > 0 ? {
    x: e.x + d * x,
    y: e.y + c * x
  } : e, b = {
    x: o.x + s * (0.25 + a() * 0.08) + u * f,
    y: o.y + l * (0.25 + a() * 0.08) + p * f
  }, S = {
    x: o.x + s * (0.68 + a() * 0.12) - u * f * 0.42,
    y: o.y + l * (0.68 + a() * 0.12) - p * f * 0.42
  }, A = t.settle !== !1 && x > 0;
  return {
    start: o,
    c1: b,
    c2: S,
    end: v,
    duration: A ? _ * 0.86 : _,
    settle: A ? {
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
      duration: kt(_ * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const xr = "button, a, [role='button'], [data-send-button], [data-result-action]", vr = "[data-chat-input], [data-signup-field], input, textarea, [contenteditable='true']", pa = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, qt = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, ys = -135, xs = 0.34;
class vs {
  constructor(e, t, a = {}) {
    this.root = e, this.resolver = t, this.options = a, this.el = this.root.querySelector("[data-cursor]") ?? this.createElement(), this.floatLayer = this.ensureFloatLayer(), this.setX = w.quickSetter(this.el, "x", "px"), this.setY = w.quickSetter(this.el, "y", "px"), this.setRotation = w.quickSetter(this.el, "rotation", "deg");
    const r = this.resolver.resolve({ target: "[data-chat-shell]", anchor: "center" }, "cursor:start");
    this.setPosition(r), this.setMode("default"), this.observeModeTargets(), this.queueIdleFloat();
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
  beginBuild(e, t) {
    this.storyId = t, this.moveIndex = 0, this.plannedPosition = { ...e };
  }
  getPosition() {
    return { ...this.currentPosition };
  }
  readPosition() {
    return this.currentPosition;
  }
  beginMimicControl() {
    this.stopIdleFloat(!0), this.modeOverride = "default", this.setMode("default"), this.el.dataset.cursorMimicking = "true", w.killTweensOf(this.el), w.set(this.el, { autoAlpha: 1, scale: 1 });
  }
  mimicViewportPoint(e, t = 0.42, a = e) {
    const r = this.root.getBoundingClientRect(), i = {
      x: e.x - r.left,
      y: e.y - r.top
    }, n = {
      x: a.x - r.left,
      y: a.y - r.top
    }, s = {
      x: this.currentPosition.x + (i.x - this.currentPosition.x) * t,
      y: this.currentPosition.y + (i.y - this.currentPosition.y) * t
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
    this.mode === e && this.el.dataset.cursorMode === e || (this.mode = e, this.el.dataset.cursorMode = e);
  }
  moveTo(e, t = {}) {
    const a = t.label ?? `move-${this.moveIndex}`, r = t.mode ?? "default", i = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, n = this.resolver.resolve(e, i), s = { ...this.plannedPosition }, l = Bt(s, n, {
      seed: i,
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
      this.modeOverride = r === "drag" ? "drag" : null, this.modeOverride ? this.setMode(this.modeOverride) : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0), d.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const u = this.resolver.resolve(e, i);
          return c = Bt(this.currentPosition, u, {
            seed: i,
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
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, r = this.resolveHistoryParkPoint(), i = Bt(a, r, {
      seed: t,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    }), n = w.timeline();
    return this.moveIndex += 1, this.plannedPosition = { ...r }, n.call(() => {
      this.stopIdleFloat(), this.modeOverride = null, this.setMode("default");
    }, void 0, 0), n.add(
      this.pathTweenFromFactory(
        () => this.createHistoryParkPlan(t),
        i.duration,
        "sine.inOut"
      )
    ), n.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), n;
  }
  scanAcross(e, t = {}) {
    const a = t.label ?? `scan-${this.moveIndex}`, r = w.timeline();
    return this.moveIndex += 1, this.options.reducedMotion ? r.to({}, { duration: 0.08 }) : (r.call(() => {
      this.stopIdleFloat(), this.modeOverride = "default", this.setMode("default");
    }), r.add(
      this.pathTweenFromFactory(
        () => this.resolveScanPath(e, `${this.storyId}:${a}:scan`, t.match),
        t.duration ?? 0.78,
        "sine.inOut"
      )
    ).to({}, { duration: 0.08 }), r.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), r);
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
      "+=0.04"
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
    this.targetObserver?.disconnect(), this.stopIdleFloat(), this.el.remove();
  }
  resetInteraction() {
    this.stopIdleFloat(!0), this.modeOverride = null, delete this.el.dataset.cursorMimicking, w.killTweensOf(this.el), w.set(this.el, { scale: 1 }), this.resetRotation(!0), this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
  }
  pathTween(e, t, a, r, i, n = "power2.inOut") {
    const s = { t: 0 };
    return w.fromTo(
      s,
      { t: 0 },
      {
        t: 1,
        duration: i,
        ease: n,
        onUpdate: () => {
          const l = yr(e, t, a, r, s.t);
          this.currentPosition = l, this.renderPosition(l), this.modeOverride || this.maybeSyncModeToPoint(l);
        },
        onComplete: () => {
          this.currentPosition = { ...r }, this.renderPosition(r), this.modeOverride || this.syncModeToPoint(r);
        }
      }
    );
  }
  pathTweenFromFactory(e, t, a = "power2.inOut") {
    const r = { t: 0 };
    let i = null;
    return w.fromTo(
      r,
      { t: 0 },
      {
        t: 1,
        duration: t,
        ease: a,
        onStart: () => {
          r.t = 0, i = e();
        },
        onUpdate: () => {
          if (!i) return;
          const n = yr(i.start, i.c1, i.c2, i.end, r.t);
          this.currentPosition = n, this.renderPosition(n), this.modeOverride || this.maybeSyncModeToPoint(n);
        },
        onComplete: () => {
          i && (this.currentPosition = { ...i.end }, this.plannedPosition = { ...i.end }, this.renderPosition(i.end), this.modeOverride || this.syncModeToPoint(i.end));
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
    const a = kt(
      t.height * qt.topRatio,
      qt.minTopInset,
      qt.maxTopInset
    );
    return {
      x: t.right - e.left + qt.outsideOffset,
      y: t.top - e.top + a
    };
  }
  pointTweenFromFactory(e, t, a = "power2.inOut") {
    const r = { t: 0 };
    let i = { ...this.currentPosition }, n = { ...this.currentPosition };
    return w.fromTo(r, { t: 0 }, {
      t: 1,
      duration: t,
      ease: a,
      onStart: () => {
        r.t = 0, i = { ...this.currentPosition }, n = e();
      },
      onUpdate: () => {
        const s = {
          x: i.x + (n.x - i.x) * r.t,
          y: i.y + (n.y - i.y) * r.t
        };
        this.currentPosition = s, this.renderPosition(s);
      },
      onComplete: () => {
        this.currentPosition = { ...n }, this.plannedPosition = { ...this.currentPosition }, this.renderPosition(this.currentPosition);
      }
    });
  }
  resolveScanPath(e, t, a = "first") {
    const r = { ...this.currentPosition }, i = this.resolveScanPoint(e, `${t}:start`, "start", a), n = this.resolveScanPoint(e, `${t}:end`, "end", a);
    return {
      start: r,
      c1: Ar(r, i, 0.64),
      c2: Ar(i, n, 0.42),
      end: n
    };
  }
  resolveScanPoint(e, t, a, r = "first") {
    const i = typeof e == "string" ? this.findVisibleScanElement(e, r) : e;
    if (!i) return this.currentPosition;
    this.resolver.refresh();
    const n = this.seededScanRandom(t), s = this.root.getBoundingClientRect(), l = i.getBoundingClientRect(), d = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect(), c = d ? Math.max(l.left, d.left + 18) : l.left, u = d ? Math.min(l.right, d.right - 18) : l.right, p = d ? Math.max(l.top, d.top + 58) : l.top, m = d ? Math.min(l.bottom, d.bottom - 34) : l.bottom, g = Math.max(1, u - c), h = Math.max(1, m - p), f = a === "start" ? 0.16 + n() * 0.08 : 0.76 + n() * 0.12, y = 0.34 + n() * 0.32;
    return {
      x: c - s.left + g * f,
      y: p - s.top + h * y
    };
  }
  findVisibleScanElement(e, t = "first") {
    const r = Array.from(this.root.querySelectorAll(e)).filter((i) => {
      const n = window.getComputedStyle(i), s = i.getBoundingClientRect();
      return n.display !== "none" && n.visibility !== "hidden" && Number(n.opacity) > 0.01 && s.width > 0 && s.height > 0;
    });
    return t === "last" ? r[r.length - 1] ?? null : r[0] ?? null;
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
    const a = t.x - e.x, r = t.y - e.y;
    if (a * a + r * r < 4) return;
    const i = Math.atan2(r, a) * 180 / Math.PI, n = As(i - ys), s = this.rotationState + ks(this.rotationState, n) * xs;
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
  queueIdleFloat(e = pa.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = w.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    w.killTweensOf(this.floatLayer);
    const e = w.timeline({ repeat: -1 });
    for (const t of pa.segments)
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
      duration: pa.returnDuration,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  maybeSyncModeToPoint(e) {
    const t = performance.now(), a = e.x - this.lastModeSyncPoint.x, r = e.y - this.lastModeSyncPoint.y;
    !(Number.isNaN(a) || a * a + r * r >= 576) && t - this.lastModeSyncAt < 72 || (this.lastModeSyncAt = t, this.lastModeSyncPoint = { ...e }, this.syncModeToPoint(e));
  }
  syncModeToPoint(e) {
    const t = this.getModeForPoint(e);
    t !== this.mode && this.setMode(t);
  }
  getModeForPoint(e) {
    const t = this.root.getBoundingClientRect(), a = {
      x: t.left + e.x,
      y: t.top + e.y
    }, r = a.x >= 0 && a.x <= window.innerWidth && a.y >= 0 && a.y <= window.innerHeight ? document.elementFromPoint(a.x, a.y) : null, i = this.getModeForElement(r);
    return i !== "default" ? i : this.getModeForLocalPoint(e, t);
  }
  getModeForElement(e) {
    return e ? e.closest(xr) ? "pointer" : e.closest(vr) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t) ? "pointer" : this.findLocalHit(this.textTargets, e, t) ? "text" : "default";
  }
  findLocalHit(e, t, a) {
    return e.find((r) => {
      const i = window.getComputedStyle(r);
      if (i.display === "none" || i.visibility === "hidden" || Number(i.opacity) < 0.01) return !1;
      const n = r.getBoundingClientRect();
      if (n.width <= 0 || n.height <= 0) return !1;
      const s = n.left - a.left, l = n.right - a.left, d = n.top - a.top, c = n.bottom - a.top;
      return t.x >= s && t.x <= l && t.y >= d && t.y <= c;
    }) ?? null;
  }
  refreshModeTargetCache() {
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(xr)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(vr)).reverse(), this.modeTargetsDirty = !1);
  }
  observeModeTargets() {
    "MutationObserver" in window && (this.targetObserver = new MutationObserver(() => {
      this.modeTargetsDirty = !0;
    }), this.targetObserver.observe(this.root, {
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
    return a.className = "wa-cursor__glyph", t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph");
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function Ar(o, e, t) {
  return {
    x: o.x + (e.x - o.x) * t,
    y: o.y + (e.y - o.y) * t
  };
}
function As(o) {
  return (o % 360 + 360) % 360;
}
function ks(o, e) {
  return (e - o + 540) % 360 - 180;
}
const Ue = {
  user: "User",
  assistant: "AI",
  thinking: "Thinking",
  component: "Component",
  cursor: "Cursor",
  status: "State",
  file: "File"
}, Cs = ["user", "assistant", "thinking", "component", "cursor", "file"];
class Ss {
  constructor(e, t, a = {}) {
    this.root = e, this.options = a, this.stories = Ts(t), this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null;
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
      const a = ma(t.target, "[data-builder-story-tab]");
      a && this.selectStory(Number(a.dataset.builderStoryTab));
    }), this.on(e.addRail, "click", (t) => {
      const r = ma(t.target, "[data-builder-add]")?.dataset.builderAdd;
      !r || !Sr(r) || this.addStep(r);
    }), this.on(e.copyJson, "click", () => {
      this.copyExportJson();
    }), this.on(e.thread, "click", (t) => {
      const a = ma(t.target, "[data-builder-action]");
      if (a) {
        this.handleStepAction(a);
        return;
      }
      const r = t.target?.closest("[data-builder-step]");
      r?.dataset.builderStep && this.selectStep(r.dataset.builderStep, { renderThread: !1 });
    }), this.on(e.thread, "input", (t) => {
      const a = t.target?.closest("[data-builder-component-field]");
      if (a) {
        this.handleComponentInput(a), a instanceof HTMLTextAreaElement && this.autoSize(a);
        return;
      }
      const r = t.target?.closest("[data-builder-step-field]");
      if (!r) return;
      const i = r.dataset.builderStepField;
      i && (this.updateStep(i, { text: r.value }, { renderThread: !1 }), this.autoSize(r));
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
    const t = this.stories.map((a, r) => {
      const i = document.createElement("button");
      i.className = "wa-builder-tab", i.type = "button", i.dataset.builderStoryTab = String(r), i.classList.toggle("is-active", r === this.activeStoryIndex), i.setAttribute("aria-pressed", String(r === this.activeStoryIndex));
      const n = document.createElement("span");
      n.className = "wa-builder-tab__title", n.textContent = a.label;
      const s = document.createElement("span");
      return s.className = "wa-builder-tab__count", s.textContent = `${a.steps.length} messages`, i.append(n, s), i;
    });
    e.tabs.replaceChildren(...t);
  }
  renderAddRail() {
    const e = this.refs;
    if (!e || e.addRail.childElementCount) return;
    const t = Cs.map((a) => {
      const r = document.createElement("button");
      return r.className = "wa-builder-add-button", r.type = "button", r.dataset.builderAdd = a, r.textContent = `+ ${Ue[a]}`, r;
    });
    e.addRail.replaceChildren(...t);
  }
  renderThread() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory, a = t.steps.map(
      (r, i) => this.createStepNode(r, i, t.steps.length, t.steps[i - 1]?.kind)
    );
    e.thread.replaceChildren(...a), e.thread.querySelectorAll("[data-builder-step-field]").forEach((r) => {
      this.autoSize(r);
    });
  }
  renderPanel() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory, a = this.selectedStep, r = document.createDocumentFragment();
    r.append(
      this.createField("Story title", "input", "story-label", t.label),
      this.createField("Story summary", "textarea", "story-summary", t.summary)
    );
    const i = document.createElement("div");
    if (i.className = "wa-builder-panel__divider", r.append(i), a) {
      const n = document.createElement("label");
      n.className = "wa-builder-field";
      const s = document.createElement("span");
      s.className = "wa-builder-field__label", s.textContent = "Selected message";
      const l = document.createElement("select");
      l.className = "wa-builder-field__control", l.dataset.builderPanelSelect = "step-kind";
      for (const d of Object.keys(Ue)) {
        const c = document.createElement("option");
        c.value = d, c.textContent = Ue[d], c.selected = a.kind === d, l.append(c);
      }
      n.append(s, l), r.append(
        n,
        this.createField("Message text", "textarea", "step-text", a.text),
        this.createField("Internal note", "textarea", "step-note", a.note)
      );
    } else {
      const n = document.createElement("p");
      n.className = "wa-builder-panel__empty", n.textContent = "No message selected.", r.append(n);
    }
    e.panel.replaceChildren(r), e.panel.querySelectorAll("textarea").forEach((n) => this.autoSize(n));
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
    let r = !1;
    try {
      r = document.execCommand("copy");
    } catch {
      r = !1;
    }
    return a.remove(), r;
  }
  setCopyButtonState(e) {
    const t = this.refs;
    if (!t) return;
    const a = t.copyJson.querySelector("[data-builder-copy-label]");
    t.copyJson.dataset.copyState = e ? "copied" : "idle", a && (a.textContent = e ? "Copied" : "Copy"), this.copyResetTimer !== null && window.clearTimeout(this.copyResetTimer), this.copyResetTimer = window.setTimeout(() => {
      if (!this.refs) return;
      delete this.refs.copyJson.dataset.copyState;
      const r = this.refs.copyJson.querySelector("[data-builder-copy-label]");
      r && (r.textContent = "Copy"), this.copyResetTimer = null;
    }, 1400);
  }
  createStepNode(e, t, a, r) {
    const i = document.createElement("article");
    i.className = "wa-builder-step", i.dataset.builderStep = e.id, i.dataset.builderKind = e.kind, i.draggable = !0, i.setAttribute("aria-grabbed", "false"), i.classList.toggle("is-selected", e.id === this.selectedStepId);
    const n = document.createElement("div");
    n.className = "wa-message wa-builder-message", n.dataset.messageRole = e.kind === "user" || e.kind === "file" ? "user" : "assistant", (e.kind === "component" || e.kind === "thinking") && n.classList.add("wa-message--component");
    const s = document.createElement("div");
    s.className = "wa-message__avatar";
    const l = document.createElement("div");
    return l.className = "wa-message__body wa-builder-message__body", l.dataset.messageBody = "", l.append(this.createStepBody(e, r === "thinking")), n.append(s, l), i.append(n, this.createStepToolbar(e, a)), i;
  }
  createStepBody(e, t = !1) {
    if (e.kind === "thinking") return this.createThinkingBody(e, t);
    if (e.kind === "component") return this.createComponentBody(e);
    if (e.kind === "cursor") return this.createCursorBody(e);
    if (e.kind === "file") return this.createFileBody(e);
    const a = document.createElement("div");
    a.className = "wa-builder-bubble";
    const r = document.createElement("span");
    return r.className = "wa-builder-step__kind", r.textContent = Ue[e.kind], a.append(r, this.createInlineTextarea(e)), a;
  }
  createThinkingBody(e, t = !1) {
    const a = document.createElement("div");
    a.className = "wa-thinking-block wa-builder-thinking";
    const r = document.createElement("div");
    r.className = "wa-thinking";
    const i = document.createElement("span");
    i.className = "wa-thinking__glyph", i.setAttribute("aria-hidden", "true");
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
    return m.className = "wa-research-step__detail", m.textContent = e.note || "Add the evidence, source, or transformation this thinking step should reveal.", u.append(p, m), d.append(c, u), l.append(d), r.append(i, n, s), t ? (a.dataset.thinkingHeaderSuppressed = "true", a.append(l)) : a.append(r, l), a;
  }
  createComponentBody(e) {
    if (e.component ??= Ms(e.text), e.component.kind === "table") return this.createTableComponentBody(e, e.component);
    if (e.component.kind === "strategyCards") return this.createStrategyComponentBody(e, e.component);
    if (e.component.kind === "enrichment") return this.createEnrichmentComponentBody(e, e.component);
    if (e.component.kind === "dataSources") return this.createDataSourcesComponentBody(e, e.component);
    if (e.component.kind === "uploadedFiles") return this.createUploadedFilesComponentBody(e, e.component);
    if (e.component.kind === "styleProfile") return this.createStyleProfileComponentBody(e, e.component);
    if (e.component.kind === "proximityList") return this.createProximityListComponentBody(e, e.component);
    if (e.component.kind === "sequenceEngagement")
      return this.createSequenceEngagementComponentBody(e, e.component);
    const t = document.createElement("div");
    t.className = "wa-builder-component-card";
    const a = document.createElement("div");
    a.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Component";
    const i = this.createComponentField(e.id, "title", e.component.title, {
      className: "wa-builder-component-card__title"
    }), n = document.createElement("div");
    return n.className = "wa-builder-component-list", e.component.items.forEach((s, l) => {
      n.append(
        this.createComponentField(e.id, "item", s, {
          itemIndex: l,
          className: "wa-builder-component-list__item"
        })
      );
    }), a.append(r, i, n), t.append(a), t;
  }
  createTableComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--table";
    const r = document.createElement("div");
    r.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    i.className = "wa-builder-step__kind", i.textContent = "Table";
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
    }), r.append(i, n, s), a.append(r), a;
  }
  createStrategyComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--strategy";
    const r = document.createElement("div");
    r.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    i.className = "wa-builder-step__kind", i.textContent = "Strategy cards";
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
    }), r.append(i, n, s), a.append(r), a;
  }
  createEnrichmentComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--enrichment";
    const r = document.createElement("div");
    r.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    i.className = "wa-builder-step__kind", i.textContent = "Enrichment";
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
    }), r.append(i, n, s, l), a.append(r), a;
  }
  createDataSourcesComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--sources";
    const r = document.createElement("div");
    r.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    i.className = "wa-builder-step__kind", i.textContent = "Data sources";
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
    }), r.append(i, n, s, l), a.append(r), a;
  }
  createUploadedFilesComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Files"), r = a.querySelector(".wa-builder-component-card__content"), i = this.createComponentField(e.id, "title", t.title, {
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
    }), r.append(i, n), a;
  }
  createStyleProfileComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Style profile"), r = a.querySelector(".wa-builder-component-card__content"), i = this.createComponentField(e.id, "title", t.title, {
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
    }), r.append(i, n, s, l), a;
  }
  createProximityListComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Proximity list"), r = a.querySelector(".wa-builder-component-card__content"), i = this.createComponentField(e.id, "title", t.title, {
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
    }), r.append(i, n, s), a;
  }
  createSequenceEngagementComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Sequence engagement"), r = a.querySelector(".wa-builder-component-card__content"), i = this.createComponentField(e.id, "title", t.title, {
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
    }), r.append(i, n, s, l, d), a;
  }
  createStructuredComponentCard(e) {
    const t = document.createElement("div");
    t.className = "wa-builder-component-card";
    const a = document.createElement("div");
    a.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    return r.className = "wa-builder-step__kind", r.textContent = e, a.append(r), t.append(a), t;
  }
  createComponentField(e, t, a, r) {
    const i = document.createElement("textarea");
    return i.className = r.className, i.dataset.builderComponentField = t, i.dataset.builderComponentStep = e, i.value = a, i.rows = 1, i.spellcheck = !0, this.applyComponentIndexes(i, r), i;
  }
  createComponentInput(e, t, a, r) {
    const i = document.createElement("input");
    return i.className = r.className, i.dataset.builderComponentField = t, i.dataset.builderComponentStep = e, i.value = a, i.type = "text", i.spellcheck = !0, this.applyComponentIndexes(i, r), i;
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
    return t.className = "wa-builder-step__textarea", t.dataset.builderStepField = e.id, t.value = e.text, t.rows = 1, t.spellcheck = !0, t.setAttribute("aria-label", `${Ue[e.kind]} message text`), t;
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
    return t.className = "wa-builder-step__action wa-builder-step__drag", t.type = "button", t.draggable = !0, t.dataset.builderDragHandle = e, t.setAttribute("aria-label", "Drag to reorder message"), t.append(Tr("grip")), t;
  }
  createActionButton(e, t, a, r, i = !1) {
    const n = document.createElement("button");
    return n.className = "wa-builder-step__action", n.type = "button", n.dataset.builderAction = t, n.dataset.builderActionStep = e, n.disabled = i, n.setAttribute("aria-label", a), n.append(Tr(r)), n;
  }
  createField(e, t, a, r) {
    const i = document.createElement("label");
    i.className = "wa-builder-field";
    const n = document.createElement("span");
    n.className = "wa-builder-field__label", n.textContent = e;
    const s = t === "textarea" ? document.createElement("textarea") : document.createElement("input");
    return s.className = "wa-builder-field__control", s.dataset.builderPanelInput = a, s.value = r, s instanceof HTMLInputElement && (s.type = t === "color" ? "color" : "text"), s instanceof HTMLTextAreaElement && (s.rows = 2), i.append(n, s), i;
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
    const t = Ps(e, Is(e), ""), a = this.activeStory.steps, r = a.findIndex((n) => n.id === this.selectedStepId), i = r >= 0 ? r + 1 : a.length;
    a.splice(i, 0, t), this.selectedStepId = t.id, this.render(), this.emitChange(`Added ${Ue[e]} message`);
  }
  updateStep(e, t, a = {}) {
    const r = this.activeStory.steps.find((i) => i.id === e);
    r && (Object.assign(r, t), this.renderExport(), this.emitChange("Draft updated", !1), a.renderThread !== !1 && (this.renderThread(), this.renderPanel()));
  }
  handleStepAction(e) {
    const t = e.dataset.builderAction, a = e.dataset.builderActionStep;
    if (!t || !a) return;
    const r = this.activeStory.steps, i = r.findIndex((n) => n.id === a);
    i < 0 || (t === "duplicate" && (r.splice(i + 1, 0, Hs(r[i])), this.selectedStepId = r[i + 1]?.id ?? a), t === "delete" && r.length > 1 && (r.splice(i, 1), this.selectedStepId = r[Math.min(i, r.length - 1)]?.id ?? null), this.render(), this.emitChange("Draft updated"));
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
    const a = t.getBoundingClientRect(), r = e.clientY < a.top + a.height / 2 ? "before" : "after";
    t.classList.add(r === "before" ? "is-drop-before" : "is-drop-after");
  }
  handleDrop(e) {
    if (!this.draggedStepId) return;
    e.preventDefault();
    const t = e.target?.closest("[data-builder-step]"), a = t?.dataset.builderStep, r = t?.classList.contains("is-drop-before") ? "before" : "after";
    this.moveStep(this.draggedStepId, a ?? null, r), this.clearDragState();
  }
  moveStep(e, t, a) {
    const r = this.activeStory.steps, i = r.findIndex((l) => l.id === e);
    if (i < 0) return;
    const [n] = r.splice(i, 1);
    let s = t ? r.findIndex((l) => l.id === t) : r.length;
    s < 0 && (s = r.length), a === "after" && (s += 1), r.splice(Math.min(s, r.length), 0, n), this.selectedStepId = n.id, this.render(), this.emitChange("Reordered message");
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
    const t = e.dataset.builderComponentStep, a = e.dataset.builderComponentField, r = t ? this.activeStory.steps.find((i) => i.id === t) : null;
    !r?.component || !a || (Bs(r.component, a, e.value, {
      rowIndex: _t(e.dataset.builderComponentRow),
      columnIndex: _t(e.dataset.builderComponentColumn),
      cardIndex: _t(e.dataset.builderComponentCard),
      fieldIndex: _t(e.dataset.builderComponentGroup),
      itemIndex: _t(e.dataset.builderComponentItem)
    }), r.text = qs(r.component), this.selectedStepId === r.id && this.syncPanelStepText(r.text), this.renderExport(), this.emitChange("Component updated", !1));
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
    e.dataset.builderPanelSelect !== "step-kind" || !this.selectedStep || !Sr(e.value) || this.updateStep(this.selectedStep.id, { kind: e.value });
  }
  setStatus(e) {
    const t = this.refs;
    t && (t.status.textContent = e);
  }
  syncThreadStepText(e, t) {
    const a = this.refs;
    if (!a) return;
    const r = Array.from(a.thread.querySelectorAll("[data-builder-step-field]")).find(
      (i) => i.dataset.builderStepField === e
    );
    !r || r.value === t || (r.value = t, this.autoSize(r));
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
function Ts(o) {
  return o.map((e) => ({
    id: e.id,
    label: e.navLabel ?? e.label,
    summary: e.navDescription ?? e.summary,
    steps: Es(e.id, e.summary)
  }));
}
function Es(o, e) {
  return ({
    "hit-ground-running": [
      { kind: "status", text: "Sign up", note: "Start in the browser sign-up screen." },
      { kind: "user", text: "joel@acme.co", note: "Typed into the sign-up field." },
      { kind: "assistant", text: "I’ll learn Acme first, then turn the signal into launch-ready GTM paths.", note: "" },
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
        component: kr("Matching new hires", [
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
        component: kr("Recently funded matches", [
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
        component: zs()
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: Ls()
      }
    ],
    "research-brief": [
      { kind: "user", text: "Start with these 10 best-fit buyers.", note: "" },
      {
        kind: "component",
        text: "Table: 10 best-fit buyers",
        note: "Starting list before expansion.",
        component: Cr("10 best-fit buyers", [
          ["Maya Patel", "OrbitGrid", "VP Revenue", "High"],
          ["Evan Brooks", "Northstar Dev", "Head of Growth", "High"],
          ["Clara Wong", "BrightLayer", "RevOps Lead", "Med"],
          ["Sam Hollis", "Apollo", "Growth Lead", "Med"],
          ["Nina Kapoor", "Mercury", "Sales Ops", "High"]
        ])
      },
      { kind: "user", text: "Expand this to 50 people and personalize outreach for each.", note: "" },
      {
        kind: "thinking",
        text: "Finding 40 more lookalike buyers and account triggers",
        note: "Use firmographic fit, role match, hiring signals, and account similarity."
      },
      {
        kind: "component",
        text: "Table: 50-person expanded list",
        note: "The story shows the expanded audience before sequence generation.",
        component: Cr("50-person expanded list", [
          ["Maya Patel", "OrbitGrid", "VP Revenue", "High"],
          ["Evan Brooks", "Northstar Dev", "Head of Growth", "High"],
          ["Clara Wong", "BrightLayer", "RevOps Lead", "Med"],
          ["Sam Hollis", "Apollo", "Growth Lead", "Med"],
          ["Nina Kapoor", "Mercury", "Sales Ops", "High"],
          ["Andre Park", "Ramp", "Head of Growth", "High"],
          ["Jamie Chen", "Square", "VP Sales", "High"],
          ["David Kim", "Stripe", "Revenue Lead", "Med"]
        ])
      },
      {
        kind: "thinking",
        text: "Generating personalized sequences for all 50 people",
        note: "Create a reason, opener, and engagement path for every person."
      },
      {
        kind: "component",
        text: "50 personalized sequences ready",
        note: "The in-app dialer action should carry the Soon badge.",
        component: Fs()
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
  }[o] ?? [{ kind: "assistant", text: e, note: "" }]).map((r, i) => ({
    ...r,
    id: `${o}-step-${i + 1}`
  }));
}
function Ps(o, e, t) {
  return {
    id: Ri("step"),
    kind: o,
    text: e,
    note: t
  };
}
function Is(o) {
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
function Ms(o) {
  return {
    kind: "generic",
    title: o,
    items: ["Primary result", "Supporting detail", "Next action"]
  };
}
function kr(o, e) {
  return {
    kind: "table",
    title: o,
    columns: ["Name", "Company", "Title"],
    rows: e
  };
}
function Cr(o, e) {
  return {
    kind: "table",
    title: o,
    columns: ["Name", "Company", "Title", "Fit"],
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
        category: "People and contacts",
        name: "Apollo",
        detail: "Contacts, roles, emails, and outbound-ready people data."
      },
      {
        category: "People and contacts",
        name: "ZoomInfo",
        detail: "Verified B2B contact and account coverage."
      },
      {
        category: "Company intelligence",
        name: "Crunchbase",
        detail: "Funding rounds, investor signals, and company growth events."
      },
      {
        category: "Company intelligence",
        name: "LinkedIn",
        detail: "Hiring movement, role changes, headcount, and profile signals."
      },
      {
        category: "Commerce and local",
        name: "Store Leads",
        detail: "E-commerce stores, platforms, categories, and growth signals."
      },
      {
        category: "Commerce and local",
        name: "Google Business Profile",
        detail: "Local business categories, locations, ratings, and presence."
      },
      {
        category: "Technographics and enrichment",
        name: "BuiltWith",
        detail: "Installed tools, web stack, pixels, and infrastructure data."
      },
      {
        category: "Technographics and enrichment",
        name: "FullEnrich",
        detail: "Waterfall enrichment for emails, phones, and missing fields."
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
function zs() {
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
function Ls() {
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
function Fs() {
  return {
    kind: "sequenceEngagement",
    title: "50 personalized sequences ready",
    subtitle: "Each person gets a reason, opener, and channel plan from the same workflow.",
    peopleCount: "50 people",
    sequences: [
      {
        name: "Maya Patel",
        company: "OrbitGrid",
        subject: "RevOps hiring + data quality",
        personalization: "Opens with the new RevOps roles and their public data-quality push."
      },
      {
        name: "Evan Brooks",
        company: "Northstar Dev",
        subject: "PLG growth handoff",
        personalization: "References the growth team expansion and routes to a low-friction benchmark CTA."
      },
      {
        name: "Nina Kapoor",
        company: "Mercury",
        subject: "Sales ops cleanup",
        personalization: "Leads with CRM hygiene language pulled from similar hiring patterns."
      }
    ],
    channels: [
      { label: "Email sequences", detail: "Launch all 50 now", badge: "" },
      { label: "LinkedIn tasks", detail: "Create follow-up steps", badge: "" },
      { label: "In-app dialer", detail: "Call queue from this list", badge: "Soon" }
    ]
  };
}
function Bs(o, e, t, a) {
  if (e === "title" && (o.title = t), o.kind === "generic" && e === "item" && a.itemIndex !== null && (o.items[a.itemIndex] = t), o.kind === "dataSources" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const r = o.sources[a.itemIndex];
    if (!r) return;
    e === "sourceCategory" && (r.category = t), e === "sourceName" && (r.name = t), e === "sourceDetail" && (r.detail = t);
  }
  if (o.kind === "uploadedFiles" && a.itemIndex !== null) {
    const r = o.files[a.itemIndex];
    if (!r) return;
    e === "fileType" && (r.type = t), e === "fileName" && (r.name = t), e === "fileDetail" && (r.detail = t);
  }
  if (o.kind === "styleProfile" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const r = o.signals[a.itemIndex];
    r && (e === "signalLabel" && (r.label = t), e === "signalValue" && (r.value = t)), e === "styleExample" && (o.examples[a.itemIndex] = t);
  }
  if (o.kind === "proximityList" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const r = o.leads[a.itemIndex];
    if (!r) return;
    e === "leadRank" && (r.rank = t), e === "leadScore" && (r.score = t), e === "leadName" && (r.name = t), e === "leadCompany" && (r.company = t), e === "leadTitle" && (r.title = t), e === "leadProximity" && (r.proximity = t), e === "leadPersonalization" && (r.personalization = t);
  }
  if (o.kind === "sequenceEngagement" && (e === "subtitle" && (o.subtitle = t), e === "peopleCount" && (o.peopleCount = t), a.itemIndex !== null)) {
    const r = o.sequences[a.itemIndex];
    r && (e === "sequenceName" && (r.name = t), e === "sequenceCompany" && (r.company = t), e === "sequenceSubject" && (r.subject = t), e === "sequencePersonalization" && (r.personalization = t));
    const i = o.channels[a.itemIndex];
    i && (e === "channelLabel" && (i.label = t), e === "channelDetail" && (i.detail = t), e === "channelBadge" && (i.badge = t));
  }
  if (o.kind === "table" && (e === "column" && a.columnIndex !== null && (o.columns[a.columnIndex] = t), e === "cell" && a.rowIndex !== null && a.columnIndex !== null && (o.rows[a.rowIndex] ??= [], o.rows[a.rowIndex][a.columnIndex] = t)), o.kind === "strategyCards" && a.cardIndex !== null) {
    const r = o.cards[a.cardIndex];
    if (!r) return;
    e === "cardLabel" && (r.label = t), e === "cardTitle" && (r.title = t), e === "cardSummary" && (r.summary = t);
  }
  if (o.kind === "enrichment") {
    if (e === "subtitle" && (o.subtitle = t), e === "fieldTitle" && a.fieldIndex !== null) {
      const r = o.fields[a.fieldIndex];
      r && (r.title = t);
    }
    if (e === "fieldStep" && a.fieldIndex !== null && a.itemIndex !== null) {
      const r = o.fields[a.fieldIndex];
      r && (r.steps[a.itemIndex] = t);
    }
  }
}
function qs(o) {
  return o.kind === "table" ? `Table: ${o.title}` : (o.kind === "strategyCards" || o.kind === "enrichment" || o.kind === "dataSources" || o.kind === "uploadedFiles" || o.kind === "styleProfile" || o.kind === "proximityList" || o.kind === "sequenceEngagement", o.title);
}
function Hs(o) {
  return {
    ...o,
    id: Ri("step"),
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
function Ri(o) {
  return typeof crypto < "u" && "randomUUID" in crypto ? `${o}-${crypto.randomUUID()}` : `${o}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function ma(o, e) {
  return o instanceof Element ? o.closest(e) : null;
}
function Us(o) {
  return !!o?.closest("textarea, input, select, button, [contenteditable='true']");
}
function Sr(o) {
  return o in Ue;
}
function Tr(o) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (e.setAttribute("viewBox", "0 0 20 20"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), o === "copy" && Er(e, "M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"), o === "x" && Er(e, "M5.5 5.5l9 9 M14.5 5.5l-9 9"), o === "grip")
    for (const t of [7, 13])
      for (const a of [5, 10, 15]) {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        r.setAttribute("cx", String(t)), r.setAttribute("cy", String(a)), r.setAttribute("r", "1.25"), r.setAttribute("fill", "currentColor"), e.append(r);
      }
  return e;
}
function Er(o, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
  t.setAttribute("d", e), t.setAttribute("fill", "none"), t.setAttribute("stroke", "currentColor"), t.setAttribute("stroke-width", "1.7"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round"), o.append(t);
}
const D = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26
};
function ga(o) {
  return typeof o == "number" ? { x: o, y: 0 } : o;
}
function Ce(o, e, t = {}, a = !0) {
  return {
    desktop: { target: o, anchor: e, offset: ga(t.desktop), humanOffset: a },
    tablet: { target: o, anchor: e, offset: ga(t.tablet), humanOffset: a },
    mobile: { target: o, anchor: e, offset: ga(t.mobile), humanOffset: a }
  };
}
const Pr = {
  hitGroundRunning: Ce("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: Ce("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: Ce("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: Ce("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: Ce("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, Ys = Ce("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), Ws = Ce("[data-send-button]", "center"), Ni = {
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
}, Vs = 2.8, js = 42, Xs = 2, Js = 3, ea = "[data-chat-shell] [data-chat-thread]", Qs = `${ea} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, Zs = `${ea} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${ea} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, Ir = 0.24, Ks = 0.3, at = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function bt(o = at.right, e) {
  return {
    kind: "cursorMove",
    target: o,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function yt(o, e) {
  const t = Ja(o), a = ao();
  for (const [r, i] of e.entries())
    $s(t, o, i, r, a);
  return Qa(t);
}
function $s(o, e, t, a, r) {
  switch (t.kind) {
    case "prompt":
      o.add(io(e, t), t.at);
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
      o.add(e.chat.assistantMessage(t.text), t.at), to(o, e, r, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: Qs,
        label: `assistant-${Ia(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking":
      t.statusBefore && o.add(e.chat.setStatus(t.statusBefore), t.at), o.add(e.chat.thinkingState(t.label, t.hold), t.statusBefore ? void 0 : t.at), Mr(o, e, r, t.hold, 1, t.label, a);
      return;
    case "research":
      t.statusBefore && o.add(e.chat.setStatus(t.statusBefore), t.at), o.add(e.chat.researchSequence(t.steps, t.hold), t.statusBefore ? void 0 : t.at), Mr(o, e, r, t.hold, t.steps.length, t.steps.join("|"), a);
      return;
    case "dataTable":
      Ke(
        o,
        e,
        e.chat.dataTable(t.config),
        t.at,
        xt(`[data-data-table="${$e(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      Ke(
        o,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        xt(`[data-enrichment-panel="${$e(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      Ke(
        o,
        e,
        e.chat.strategyPlans(t.plans),
        t.at,
        xt(`[data-strategy-plans~="${$e(t.plans[0]?.id ?? "strategy")}"]`),
        `strategy-${t.plans[0]?.id ?? "plans"}`
      );
      return;
    case "dataSourcesGrid":
      Ke(
        o,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        xt(`[data-data-sources-grid="${$e(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      Ke(
        o,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${$e(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "sequenceEngagement":
      Ke(
        o,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        xt(`[data-sequence-engagement="${$e(t.config.id)}"]`),
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
function Ke(o, e, t, a, r, i) {
  o.add(t, a), o.add(eo(e, r, i), "+=0.06");
}
function eo(o, e, t) {
  const a = Ja(o).add(o.cursor.scanAcross(e, { label: t }));
  return Qa(a);
}
function Mr(o, e, t, a = D.thinkingShort, r = 1, i = "thinking", n = 0) {
  const s = a * Math.max(1, r), l = r >= 3 && Di(e, t, {
    kind: "thinking",
    key: i,
    text: i,
    stepIndex: n,
    minChars: 16
  });
  l && o.add(
    e.cursor.scanAcross(Zs, {
      label: `thinking-skim-${Ia(i)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(s < Vs) && o.add(
    e.cursor.moveTo(Ni, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${Ia(i)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function to(o, e, t, a) {
  Di(e, t, a) && o.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function ao() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function Di(o, e, t) {
  const a = t.text.trim(), r = t.minChars ?? js;
  if (a.length < r || e.textSkimCount >= Js) return !1;
  const i = e.textCandidateCount;
  e.textCandidateCount += 1;
  const n = e.textSkimCount === 0, s = t.stepIndex - e.lastTextSkimStep >= Xs, l = ro(`${o.story.id}:${t.kind}:${i}:${t.key}`), d = i > 0 && i % 3 === 0, c = n || s && (l >= 0.58 || d);
  return c && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), c;
}
function ro(o) {
  let e = 2166136261;
  for (let a = 0; a < o.length; a += 1)
    e ^= o.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function $e(o) {
  return o.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function xt(o) {
  return `${ea} ${o}`;
}
function Ia(o) {
  return o.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function io(o, e) {
  const t = Ja(o);
  return e.statusBefore && t.add(o.chat.setStatus(e.statusBefore)), t.add(o.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    o.cursor.moveTo(e.focusTarget ?? o.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(o.cursor.click("text"), "-=0.02").add(o.chat.setComposerFocus(!0), "-=0.14").add(o.chat.typeComposer(e.text, e.duration ?? D.typeMedium)).add(
    o.cursor.moveTo(Ws, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(o.cursor.click()).add(o.chat.setComposerFocus(!1), "-=0.08").add(o.chat.userMessage(e.text), "-=0.08").add(o.chat.clearComposer(), "<").add(o.chat.hideComposer(), "-=0.03").add(
    o.cursor.moveTo(Ni, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(o.chat.setStatus(e.statusAfter), "<"), Qa(t);
}
function Ja(o) {
  const e = o.timeline();
  return e.pause(0), e;
}
function Qa(o) {
  return o.paused(!1), o;
}
const no = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], so = [
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
], Oi = [
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], oo = [
  { key: "name", label: "Name", width: "1.55fr" },
  { key: "company", label: "Company", width: "0.9fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "email", label: "Email", width: "1.28fr" },
  { key: "number", label: "Number", width: "1.48fr" }
], lo = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "9 records",
  columns: Oi,
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
}, co = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  columns: Oi,
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
}, uo = {
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
}, ho = {
  id: "data-marketplace-sources",
  title: "Specific vendors by data area",
  subtitle: "Unify routes each search across the right partner sources for the job.",
  sources: [
    {
      id: "apollo",
      category: "People and contacts",
      name: "Apollo",
      detail: "Contacts, roles, emails, and outbound-ready people data."
    },
    {
      id: "zoominfo",
      category: "People and contacts",
      name: "ZoomInfo",
      detail: "Verified B2B contact and account coverage."
    },
    {
      id: "crunchbase",
      category: "Company intelligence",
      name: "Crunchbase",
      detail: "Funding rounds, investor signals, and company growth events."
    },
    {
      id: "linkedin",
      category: "Company intelligence",
      name: "LinkedIn",
      detail: "Hiring movement, role changes, headcount, and profile signals."
    },
    {
      id: "store-leads",
      category: "Commerce and local",
      name: "Store Leads",
      detail: "E-commerce stores, platforms, categories, and growth signals."
    },
    {
      id: "google-business-profile",
      category: "Commerce and local",
      name: "Google Business Profile",
      detail: "Local business categories, locations, ratings, and presence."
    },
    {
      id: "builtwith",
      category: "Technographics and enrichment",
      name: "BuiltWith",
      detail: "Installed tools, web stack, pixels, and infrastructure data."
    },
    {
      id: "fullenrich",
      category: "Technographics and enrichment",
      name: "FullEnrich",
      detail: "Waterfall enrichment for emails, phones, and missing fields."
    }
  ]
}, po = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "Ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: oo,
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
}, mo = [
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
], go = {
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
}, fo = {
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
}, zi = [
  { key: "name", label: "Name", width: "1.35fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "fit", label: "Fit", width: "0.72fr" }
], Li = {
  id: "engagement-list-10",
  title: "Outbound list",
  eyebrow: "Starting list",
  count: "10 people",
  columns: zi,
  rows: [
    { id: "maya-patel", values: { name: "Maya Patel", company: "OrbitGrid", title: "VP Revenue", fit: "High", source: "signal" } },
    { id: "evan-brooks", values: { name: "Evan Brooks", company: "Northstar Dev", title: "Head of Growth", fit: "High", source: "signal" } },
    { id: "clara-wong", values: { name: "Clara Wong", company: "BrightLayer", title: "RevOps Lead", fit: "Med", source: "database" } },
    { id: "sam-hollis", values: { name: "Sam Hollis", company: "Apollo", title: "Growth Lead", fit: "Med", source: "database" } },
    { id: "nina-kapoor", values: { name: "Nina Kapoor", company: "Mercury", title: "Sales Ops", fit: "High", source: "engage" } }
  ]
}, wo = {
  id: "engagement-list-50",
  title: "Expanded outbound list",
  eyebrow: "Lookalike expansion",
  count: "50 people",
  variant: "filtered",
  columns: zi,
  rows: [
    ...Li.rows,
    { id: "andre-park", values: { name: "Andre Park", company: "Ramp", title: "Head of Growth", fit: "High", source: "signal" } },
    { id: "jamie-chen", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", fit: "High", source: "signal" } },
    { id: "david-kim", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", fit: "Med", source: "database" } }
  ]
}, _o = {
  id: "zero-effort-sequences",
  title: "50 personalized sequences ready",
  subtitle: "Each person gets a reason, opener, and channel plan from the same workflow.",
  peopleCount: "50 people",
  sequences: [
    {
      name: "Maya Patel",
      company: "OrbitGrid",
      subject: "RevOps hiring + data quality",
      personalization: "Opens with the new RevOps roles and their public data-quality push."
    },
    {
      name: "Evan Brooks",
      company: "Northstar Dev",
      subject: "PLG growth handoff",
      personalization: "References the growth team expansion and routes to a low-friction benchmark CTA."
    },
    {
      name: "Nina Kapoor",
      company: "Mercury",
      subject: "Sales ops cleanup",
      personalization: "Leads with CRM hygiene language pulled from similar hiring patterns."
    }
  ],
  channels: [
    { label: "Email sequences", detail: "Launch all 50 now" },
    { label: "LinkedIn tasks", detail: "Create follow-up steps" },
    { label: "In-app dialer", detail: "Call queue from this list", badge: "Soon" }
  ]
}, bo = {
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
}, Fi = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: Ys,
    entryLeadTime: Ks,
    prepare: (o) => {
      o.chat.prepareSignup();
    },
    build: (o) => yt(o, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@acme.co", duration: D.typeShort },
      { kind: "status", text: "Building workspace", at: "-=0.16" },
      { kind: "transitionSignupToChat", at: `+=${D.beat}` },
      { kind: "assistant", text: "I’ll learn Acme first, then suggest the cleanest GTM plays." },
      { kind: "status", text: "Researching Acme", at: "<" },
      { kind: "research", steps: no, hold: 0.46, at: "+=0.02" },
      { kind: "assistant", text: "I found three GTM paths worth testing first." },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: so, at: "-=0.08" },
      bt(at.right, "+=0.18")
    ])
  },
  {
    id: "data-marketplace",
    label: "100+ Data Sources at Your Fingertips",
    navLabel: "100+ Data Sources at Your Fingertips",
    navDescription: "A One-Stop Shop for Your Data Needs, B2B Contacts and Companies, E-commerce, Local Businesses, Technographics, and More in a Single Natural Language Search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    entry: Pr.dataMarketplace,
    entryLeadTime: Ir,
    build: (o) => yt(o, [
      {
        kind: "prompt",
        text: "Show me new hires at dev-tool companies with 50+ employees.",
        duration: D.typeLong,
        sendLabel: "send-data-search",
        statusBefore: "Searching data",
        statusAfter: "Searching 100+ sources",
        fromEntry: !0
      },
      {
        kind: "thinking",
        label: "Searching hiring signals, headcount, and company data",
        hold: D.thinkingMedium
      },
      { kind: "dataTable", config: lo, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Filter to the ones that have raised in the past three months.",
        duration: D.typeMedium,
        sendLabel: "send-data-filter",
        statusAfter: "Filtering by funding",
        at: `+=${D.beat}`
      },
      {
        kind: "thinking",
        label: "Checking rounds announced since February 2026",
        hold: D.thinkingShort
      },
      { kind: "dataTable", config: co, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: D.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${D.beat}`
      },
      { kind: "enrichmentPanel", config: uo, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: po, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: ho, at: "+=0.44" },
      bt(at.bottomRight)
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
      }), t = o.chat.prepareCursorFile("4 context files", o.cursor, "DOC"), a = Ce("[data-chat-shell]", "center", {
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
          at: "+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.18" },
        { kind: "custom", build: () => t.landAsUploadedFiles(mo), at: "<" },
        { kind: "status", text: "Learning outreach style", at: "<" },
        {
          kind: "research",
          steps: [
            "Reading battle cards and competitive traps",
            "Extracting voice and tone rules",
            "Learning ICP disqualifiers",
            "Mapping playbook CTAs and objection handling"
          ],
          hold: 0.24,
          at: `+=${D.beat}`
        },
        { kind: "custom", build: () => o.chat.outreachStyleProfile(go), at: "-=0.02" },
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: D.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${D.beat}`
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: D.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${D.beat}`
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
          hold: D.thinkingMedium
        },
        { kind: "custom", build: () => o.chat.proximityLeadList(fo), at: "-=0.04" },
        bt(at.bottomRight, "+=0.16")
      ]);
    }
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant expands an outbound list, writes personalized sequences, and starts engagement from one workflow.",
    entry: Pr.researchBrief,
    entryLeadTime: Ir,
    build: (o) => yt(o, [
      {
        kind: "prompt",
        text: "Start with these 10 best-fit buyers.",
        duration: D.typeShort,
        sendLabel: "send-start-list",
        statusBefore: "Building list",
        fromEntry: !0
      },
      { kind: "dataTable", config: Li, at: "-=0.02" },
      {
        kind: "prompt",
        text: "Expand this to 50 people and personalize outreach for each.",
        duration: D.typeMedium,
        sendLabel: "send-expand-list",
        statusAfter: "Expanding audience",
        at: `+=${D.beat}`
      },
      {
        kind: "thinking",
        label: "Finding 40 more lookalike buyers and account triggers",
        hold: D.thinkingShort
      },
      { kind: "dataTable", config: wo, at: "-=0.04" },
      { kind: "status", text: "Writing sequences", at: "<" },
      {
        kind: "thinking",
        label: "Generating personalized sequences for all 50 people",
        hold: D.thinkingMedium
      },
      { kind: "sequenceEngagement", config: _o, at: "-=0.04" },
      bt(at.bottomRight, "+=0.14")
    ])
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
      const e = o.chat.prepareCsvDropArea(), t = o.chat.prepareCursorFile("webinar_attendees.csv", o.cursor), a = Ce("[data-chat-shell]", "center", {
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
          at: "+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.24" },
        { kind: "custom", build: () => t.landAsUploadedFile("webinar_attendees.csv", "1,284 attendees"), at: "<" },
        { kind: "status", text: "Cleaning CSV", at: "<" },
        {
          kind: "research",
          steps: [
            "Parsing webinar attendee CSV",
            "Normalizing email addresses",
            "Combining first and last name fields",
            "Removing duplicates and empty rows"
          ],
          hold: 0.34,
          at: `+=${D.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: bo, at: "-=0.04" },
        bt(at.bottomRight, "+=0.18")
      ]);
    }
  }
], Ht = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, et = {
  sampleWindowMs: 560,
  minTravel: 300,
  minAxisReversals: 4,
  minAverageSpeed: 0.58,
  minTravelToNetRatio: 2.25,
  maxNetDistance: 180
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
}, Gt = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, Rr = {
  smoothing: 0.18,
  arriveDistance: 3.5
};
class yo {
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
  homePoint = null;
  sniffAnchor = null;
  sniffStartedAt = 0;
  nextSniffAt = 0;
  sniffIndex = 0;
  returnAt = 0;
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
    this.active || (this.active = !0, this.mode = "follow", this.homePoint = this.getCursorViewportPoint(), this.lastPointer = this.samples[this.samples.length - 2] ?? null, this.updateFollowTarget(e), this.lastMoveAt = performance.now(), this.samples = [], this.dismissSamples = [], this.root.dataset.cursorMimicking = "true", this.options.onMimicStart?.(), this.cursor.beginMimicControl(), this.scheduleFollow());
  }
  stopMimicking() {
    this.active && (this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.homePoint = null, this.sniffAnchor = null, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl());
  }
  scheduleFollow() {
    this.frame || !this.active || (this.frame = window.requestAnimationFrame(this.followPointer));
  }
  followPointer = () => {
    if (this.frame = 0, !this.active) return;
    const e = performance.now();
    if (this.mode === "returnWait") {
      e >= this.returnAt && (this.mode = "return", this.target = this.homePoint ?? this.getCursorViewportPoint()), this.scheduleFollow();
      return;
    }
    if (this.mode === "sniff") {
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, Gt.smoothing, this.target), e - this.sniffStartedAt >= Gt.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.homePoint ?? this.getCursorViewportPoint();
      if (this.target = t, this.cursor.mimicViewportPoint(t, Rr.smoothing, t), tt(this.getCursorViewportPoint(), t) <= Rr.arriveDistance) {
        this.completeReturn();
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
      }, r = Math.hypot(a.x, a.y);
      r > 1.5 && (this.trailDirection = {
        x: a.x / r,
        y: a.y / r
      }, this.velocity = vo(a, J.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * J.trailDistance,
      y: e.y - this.trailDirection.y * J.trailDistance
    };
    tt(e, t) < J.minPointerDistance && (t.x = e.x - this.trailDirection.x * J.minPointerDistance, t.y = e.y - this.trailDirection.y * J.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
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
    const t = this.sniffIndex, a = t * 1.92, r = Gt.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * r,
      y: this.sniffAnchor.y + Math.sin(a) * r * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + Gt.pointIntervalMs;
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
    this.active && (this.mode = "returnWait", this.target = null, this.pointer = null, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], window.cancelAnimationFrame(this.frame), this.frame = 0, this.returnAt = performance.now() + e, this.scheduleFollow());
  }
  completeReturn() {
    this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.homePoint = null, this.sniffAnchor = null, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl();
  }
  isCursorTooFarFromBrowser() {
    const e = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect();
    if (!e) return !1;
    const t = this.root.getBoundingClientRect(), a = this.cursor.readPosition(), r = {
      x: t.left + a.x,
      y: t.top + a.y
    };
    return xo(r, e) > J.maxBrowserDistance;
  }
  isPointNearStoryCursor(e, t = Ht.radius) {
    const a = this.root.getBoundingClientRect(), r = this.cursor.readPosition(), i = {
      x: a.left + r.x,
      y: a.top + r.y
    };
    return tt(e, i) <= t;
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
    this.dismissSamples.push({ ...e, time: t }), this.dismissSamples = this.dismissSamples.filter((a) => t - a.time <= et.sampleWindowMs);
  }
  hasMimicGesture() {
    return this.samples.length < 4 ? !1 : this.samples.reduce((t, a, r) => {
      const i = this.samples[r - 1];
      return i ? t + tt(a, i) : t;
    }, 0) >= Ht.minTravel && this.countAxisReversals(this.samples) >= Ht.minAxisReversals;
  }
  hasDismissShake() {
    if (this.dismissSamples.length < 6) return !1;
    for (let e = 0; e <= this.dismissSamples.length - 6; e += 1)
      if (this.isDismissShakeWindow(this.dismissSamples.slice(e))) return !0;
    return !1;
  }
  isDismissShakeWindow(e) {
    const t = e[0], a = e[e.length - 1], r = Math.max(1, a.time - t.time), i = e.reduce((l, d, c) => {
      const u = e[c - 1];
      return u ? l + tt(d, u) : l;
    }, 0), n = tt(t, a), s = i / Math.max(n, 1);
    return i >= et.minTravel && n <= et.maxNetDistance && i / r >= et.minAverageSpeed && s >= et.minTravelToNetRatio && this.countAxisReversals(e) >= et.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, r = 0;
    for (let i = 1; i < e.length; i += 1) {
      const n = e[i - 1], s = e[i], l = Nr(s.x - n.x), d = Nr(s.y - n.y);
      l && a && l !== a && (t += 1), d && r && d !== r && (t += 1), l && (a = l), d && (r = d);
    }
    return t;
  }
}
function tt(o, e) {
  return Math.hypot(e.x - o.x, e.y - o.y);
}
function xo(o, e) {
  const t = Math.max(e.left - o.x, 0, o.x - e.right), a = Math.max(e.top - o.y, 0, o.y - e.bottom);
  return Math.hypot(t, a);
}
function vo(o, e) {
  const t = Math.hypot(o.x, o.y);
  return t <= e || t === 0 ? o : {
    x: o.x / t * e,
    y: o.y / t * e
  };
}
function Nr(o) {
  return Math.abs(o) < 2 ? 0 : Math.sign(o);
}
const Ao = {
  minPixelDelta: 0.5
};
class ko {
  constructor(e, t, a, r, i, n) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = r, this.chat = i, this.options = n, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new yo(this.root, this.cursor, {
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
  resizeObserver = null;
  resizeTimer = 0;
  observedWidth = 0;
  observedHeight = 0;
  listeners = [];
  storyProgress;
  historyParkTimeline = null;
  pausedCursorMimic = null;
  playing = !1;
  historyPaused = !1;
  mount() {
    this.attachControls(), this.observeLayout(), this.goTo(this.options.initialStory ?? 0);
  }
  play() {
    this.setHistoryPaused(!1), this.chat.scrollToLive(), this.playing = !0, this.activeTimeline?.play(), this.updatePlayButton();
  }
  pause() {
    this.setHistoryPaused(!1), this.playing = !1, this.activeTimeline?.pause(), this.autoAdvance?.kill(), this.updatePlayButton();
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
    const r = {
      root: this.root,
      story: a,
      resolver: this.resolver,
      cursor: this.cursor,
      chat: this.chat,
      timeline: () => w.timeline()
    };
    a.prepare?.(r), this.resolver.refresh();
    const i = w.timeline({
      paused: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => this.handleComplete()
    }), n = this.cursor.moveTo(a.entry, {
      mode: "text",
      intent: "entry",
      speed: "normal",
      label: "story-entry"
    }), s = a.build(r), l = a.entryLeadTime ?? 0.24;
    return i.add(n, 0), s.pause(0), i.add(s, Math.max(0, n.duration() - l)), s.paused(!1), this.chat.prepareStoryStart(), i;
  }
  stopTimeline() {
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.cancelHistoryParkMotion(), this.pausedCursorMimic?.setPaused(!1), this.activeTimeline?.kill(), this.activeTimeline = null, this.cursor.resetInteraction();
  }
  handleComplete() {
    const e = this.playing;
    this.playing = !1, this.updatePlayButton(), !(!this.options.autoplay || !e) && (!this.options.loop && this.activeIndex === this.stories.length - 1 || (this.autoAdvance?.kill(), this.autoAdvance = w.delayedCall(this.options.autoAdvanceDelay, () => this.next())));
  }
  seekTo(e, t = 0.28) {
    if (!this.activeTimeline) return;
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.playing = !1, this.setHistoryPaused(!1), this.chat.stopScrollMotion();
    const a = Co(e), r = this.activeTimeline.duration();
    this.seekTween = w.to(this.activeTimeline, {
      time: r * a,
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
    this.setText("[data-story-eyebrow]", e.eyebrow), this.setText("[data-story-label]", e.label), this.setText("[data-story-title]", e.label), this.setText("[data-story-summary]", e.summary), this.root.querySelectorAll("[data-story-tab]").forEach((t) => {
      const a = t.dataset.storyTab === e.id;
      t.classList.toggle("is-active", a), t.setAttribute("aria-pressed", String(a));
    });
  }
  updateProgress() {
    const e = this.activeTimeline?.progress() ?? 0, t = this.root.querySelector("[data-story-scrubber]");
    this.storyProgress[this.activeIndex] = e, this.root.style.setProperty("--wa-story-progress", e.toFixed(4)), this.updateTabProgress(), t && document.activeElement !== t && (t.value = String(Math.round(e * 1e3)));
  }
  updatePlayButton() {
    const e = this.root.querySelector("[data-toggle-play]");
    e && (e.textContent = this.playing ? "Pause" : "Play", e.setAttribute("aria-label", this.playing ? "Pause animation" : "Play animation"));
  }
  attachControls() {
    const e = this.root.querySelector("[data-story-tabs]");
    e && e.replaceChildren(
      ...this.stories.map((t, a) => {
        const r = document.createElement("button");
        r.className = "wa-story-tab", r.type = "button", r.dataset.storyTab = t.id, r.style.setProperty("--wa-tab-progress", "0"), r.setAttribute("aria-pressed", "false"), r.addEventListener("click", () => this.goTo(a));
        const i = document.createElement("span");
        i.className = "wa-story-tab__marker", i.setAttribute("aria-hidden", "true");
        const n = document.createElement("span");
        n.className = "wa-story-tab__body";
        const s = document.createElement("span");
        if (s.className = "wa-story-tab__title", s.textContent = t.navLabel ?? t.label, n.append(s), t.navDescription) {
          const l = document.createElement("span");
          l.className = "wa-story-tab__description", l.textContent = t.navDescription, n.append(l);
        }
        return r.append(i, n), r;
      })
    ), this.on("[data-prev-story]", "click", () => this.previous()), this.on("[data-next-story]", "click", () => this.next()), this.on("[data-toggle-play]", "click", () => {
      this.playing ? this.pause() : this.play();
    }), this.on("[data-history-resume]", "click", () => this.play()), this.on("[data-story-scrubber]", "input", (t) => {
      const a = t.currentTarget;
      this.seekTo(Number(a.value) / 1e3);
    }), this.attachChatHistoryScroll();
  }
  attachChatHistoryScroll() {
    const e = this.root.querySelector("[data-chat-shell]"), t = this.root.querySelector("[data-chat-thread]");
    if (!e || !t) return;
    const a = (r) => {
      if (!this.activeTimeline || Math.abs(r.deltaX) > Math.abs(r.deltaY)) return;
      const i = this.getWheelPixelDelta(r);
      if (Math.abs(i) < Ao.minPixelDelta) return;
      const n = this.getThreadMaxScroll(t);
      if (n <= 0 || !(i < 0 || this.historyPaused)) return;
      const l = Bi(t.scrollTop + i, 0, n);
      Math.abs(l - t.scrollTop) >= 0.5 && (r.preventDefault(), this.pauseForChatHistory(), t.scrollTop = l);
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
    const t = this.root.querySelector("[data-history-resume]");
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
    const a = Math.abs(e - this.observedWidth) > 1, r = Math.abs(t - this.observedHeight) > 1;
    return !a && !r ? !1 : (this.observedWidth = e, this.observedHeight = t, !0);
  }
  rebuildForResize() {
    if (!this.activeTimeline) return;
    const e = this.activeTimeline.progress(), t = this.playing, a = this.cursor.getPosition();
    this.stopTimeline(), this.activeTimeline = this.buildTimeline(this.activeIndex, a), this.activeTimeline.progress(e).pause(), this.updateStoryMeta(), this.updateProgress(), t && this.play();
  }
  updateTabProgress() {
    this.root.querySelectorAll("[data-story-tab]").forEach((e, t) => {
      e.style.setProperty("--wa-tab-progress", this.storyProgress[t]?.toFixed(4) ?? "0");
    });
  }
  resetStoryProgress() {
    this.storyProgress.fill(0), this.updateTabProgress();
  }
  resolveStoryIndex(e) {
    return typeof e == "number" ? e : this.stories.findIndex((t) => t.id === e);
  }
  setText(e, t) {
    const a = this.root.querySelector(e);
    a && (a.textContent = t);
  }
  on(e, t, a) {
    const r = this.root.querySelector(e);
    r && (r.addEventListener(t, a), this.listeners.push(() => r.removeEventListener(t, a)));
  }
}
function Bi(o, e, t) {
  return Math.min(t, Math.max(e, o));
}
function Co(o) {
  return Bi(o, 0, 1);
}
const Ut = ["mobile", "tablet", "desktop", "wide"];
class So {
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
    const a = this.pickTarget(e), r = this.getRootRect();
    if (typeof a.x == "number" && typeof a.y == "number" && !a.target)
      return {
        x: a.x + (a.offset?.x ?? 0),
        y: a.y + (a.offset?.y ?? 0)
      };
    const i = this.findElement(a.target);
    if (!i)
      return this.resolveFallbackPoint(a, r);
    const n = i.getBoundingClientRect();
    let s = this.anchorPoint(n, a.anchor ?? "center");
    if (s = {
      x: s.x - r.left,
      y: s.y - r.top
    }, a.outside && (s = this.outsidePoint(s, n, r, a.outside)), a.humanOffset) {
      const l = Mi(t), d = Math.min(n.width * 0.18, 18), c = Math.min(n.height * 0.18, 14);
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
      const t = this.getBreakpoint(), a = Ut.indexOf(t), r = [
        t,
        ...Ut.slice(0, a).reverse(),
        ...Ut.slice(a + 1)
      ];
      for (const i of r)
        if (e[i]) return e[i];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return Ut.some((t) => t in e);
  }
  findElement(e) {
    return e ? e instanceof HTMLElement ? e : this.root.querySelector(e) : this.getMotionFallbackElement();
  }
  getMotionFallbackElement() {
    return this.root.querySelector("[data-chat-shell]") ?? this.root.querySelector(".wa-stage") ?? this.root;
  }
  resolveFallbackPoint(e, t) {
    const a = this.getMotionFallbackElement().getBoundingClientRect();
    let r = this.anchorPoint(a, e.anchor ?? "center");
    return r = {
      x: r.x - t.left,
      y: r.y - t.top
    }, e.outside && (r = this.outsidePoint(r, a, t, e.outside)), {
      x: r.x + (e.offset?.x ?? 0),
      y: r.y + (e.offset?.y ?? 0)
    };
  }
  anchorPoint(e, t) {
    const a = e.left + e.width * 0.5, r = e.top + e.height * 0.5;
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
        return { x: e.left, y: r };
      case "right":
        return { x: e.right, y: r };
      case "top":
        return { x: a, y: e.top };
      case "bottom":
        return { x: a, y: e.bottom };
      default:
        return { x: a, y: r };
    }
  }
  outsidePoint(e, t, a, r) {
    const i = t.left - a.left, n = t.right - a.left, s = t.top - a.top, l = t.bottom - a.top;
    switch (r) {
      case "left":
        return { ...e, x: i - 42 };
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
function To(o, e = {}) {
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
function Eo(o, e = {}) {
  To(o, { showBuilder: e.showBuilder !== !1 });
  const t = e.stories?.length ? e.stories : Fi, a = new So(o), r = new ms(o), i = new vs(o, a, {
    reducedMotion: e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1
  }), n = new ko(o, t, a, i, r, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), s = n.destroy.bind(n), l = e.showBuilder === !1 ? null : new Ss(o, t, {
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
      l?.destroy(), s(), i.destroy();
    }
  };
}
const Po = ':root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .3);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 19px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: 56px;--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 18px);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-weight: 440;--wa-chat-detail-weight: 410;--wa-composer-outset-x: 34px;--wa-composer-bottom-outset: 24px;--wa-composer-height: 56px;--wa-composer-send-size: 40px;--wa-history-resume-height: 42px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft)}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear;will-change:transform}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-stage{position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:14px;line-height:1;font-weight:620}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:22px;min-height:0;padding-bottom:0;color:var(--wa-ink);will-change:transform,opacity}.wa-signup-scene__title{margin:0;color:var(--wa-ink);font-family:var(--wa-font-feature);font-size:23px;line-height:1;font-weight:620;letter-spacing:0}.wa-signup-field{display:flex;align-items:center;width:min(292px,82%);min-height:48px;padding:0 14px;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-color-panel);font-size:14px;line-height:1;font-weight:460;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"you@company.com";color:var(--wa-placeholder)}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:contain}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%;will-change:transform,opacity}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:13px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;justify-self:end}.wa-thinking-block{display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:12px auto auto;align-items:center;justify-content:start;gap:6px;justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-thinking__glyph{position:relative;display:inline-block;width:11px;height:11px;opacity:.82;background-image:radial-gradient(circle at center,currentColor 1.1px,transparent 1.2px);background-position:0 0;background-size:4px 4px}.wa-thinking__title{color:#57544f}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:11px;font-weight:480}.wa-research-steps{position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0 3px}.wa-research-steps:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:13px minmax(0,1fr) 9px;align-content:start;gap:8px;align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:13px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__check{position:relative;z-index:1;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__check:before,.wa-research-step__check:after{content:"";position:absolute}.wa-research-step__check:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-research-step[data-step-state=complete] .wa-research-step__check:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:before,.wa-research-step[data-step-state=failed] .wa-research-step__check:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-research-step[data-step-state=failed] .wa-research-step__check:before{transform:rotate(45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:after{transform:rotate(-45deg)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:13px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;overflow:hidden;color:#86817a;font-size:11px;line-height:1.28;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail,.wa-research-step[data-step-state=complete] .wa-research-step__disclosure,.wa-research-step[data-step-state=complete] .wa-research-step__chevron{display:none}.wa-research-step__disclosure{display:inline-flex;align-items:center;justify-self:start;gap:3px;margin-top:2px;color:#7f7a73;font-size:10px;line-height:1;font-weight:var(--wa-chat-detail-weight)}.wa-research-step__disclosure:after{content:"";width:4px;height:4px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:translateY(-1px) rotate(45deg)}.wa-research-step:nth-child(n+2) .wa-research-step__disclosure:after{transform:translateY(1px) rotate(225deg)}.wa-research-step__chevron{position:relative;z-index:1;width:8px;height:14px;margin-top:1px}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none;will-change:transform,opacity}.wa-file-landing-clone{box-sizing:border-box;will-change:transform}.wa-cursor-file__card{display:inline-grid;grid-template-columns:30px minmax(0,auto);gap:8px;align-items:center;max-width:190px;min-height:42px;padding:6px 10px 6px 6px;border:1px solid rgba(23,23,20,.12);border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:190px;height:72px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:172px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-orange);background:#f23b0a1a;font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:30px;height:30px}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:226px;max-width:280px;min-height:50px;padding:8px 12px 8px 8px;border-radius:8px;color:var(--wa-ink);background:var(--wa-color-user-message)}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files__summary{color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-data-table{display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505;will-change:transform,opacity}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow:hidden;border:1px solid #eee6df;border-radius:5px;background:var(--wa-color-panel)}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);min-width:0;min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel);will-change:transform,opacity}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:25px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:center;min-width:0;padding:0 8px;overflow:visible;border-left:0;color:#555452;font-size:10px;line-height:1.08;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{color:#555452;font-size:11px;line-height:1;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:34px}.wa-data-table__add{position:absolute;top:4px;right:5px;display:inline-flex;align-items:center;justify-content:center;width:22px;height:18px;padding:0 0 1px;border:1px solid #eee6df;border-radius:5px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;font-size:14px;line-height:1;font-weight:680}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact]{overflow:hidden;color:#050505;font-weight:520;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number]{color:#565553}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:hidden}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;width:12px;height:12px;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__name{min-width:0;overflow:hidden;color:#050505;font-size:10px;line-height:1.05;font-weight:520;overflow-wrap:normal;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-step-progress: 0;display:grid;gap:11px;min-width:0;max-width:420px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#56534f;will-change:transform,opacity}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:12px auto auto;gap:6px;align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:520}.wa-waterfall-rows{position:relative;display:grid;gap:9px;padding:1px 0 0 3px}.wa-waterfall-rows:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:13px auto minmax(0,1fr);gap:8px;align-items:center;min-height:27px;color:#56534f;font-size:13px;line-height:1;font-weight:500;white-space:nowrap;will-change:transform,opacity}.wa-waterfall-row__status{position:relative;z-index:1;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before,.wa-waterfall-row__status:after{content:"";position:absolute}.wa-waterfall-row__status:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row[data-step-state=complete] .wa-waterfall-row__status:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before,.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before{transform:rotate(45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{transform:rotate(-45deg)}.wa-waterfall-row__label{min-width:104px;overflow:hidden;color:#56534f;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:4px;max-width:86px;min-height:17px;padding:2px 6px 2px 15px;overflow:hidden;border:1px solid #ebe5dc;border-radius:3px;color:#7c7770;background:#fbfaf3;font-size:10px;line-height:1;text-overflow:ellipsis}.wa-waterfall-chip:before,.wa-waterfall-chip:after{content:"";position:absolute}.wa-waterfall-chip:before{top:7px;left:6px;width:4px;height:4px;border-radius:999px;background:#a49f98}.wa-waterfall-chip[data-step-state=complete]:before{top:6px;left:5px;width:7px;height:3.5px;border-bottom:1.2px solid #279443;border-left:1.2px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-chip[data-step-state=failed]{color:#a94f48}.wa-waterfall-chip[data-step-state=failed]:before,.wa-waterfall-chip[data-step-state=failed]:after{top:8px;left:5px;width:7px;height:1.2px;border-radius:999px;background:#e1544c}.wa-waterfall-chip[data-step-state=failed]:before{transform:rotate(45deg)}.wa-waterfall-chip[data-step-state=failed]:after{transform:rotate(-45deg)}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px;will-change:transform,opacity}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap;will-change:transform,opacity}.wa-strategy-plan{display:grid;align-content:start;gap:8px;min-height:124px;padding:11px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-strategy-plan__label{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:560;letter-spacing:0;text-transform:uppercase}.wa-strategy-plan__title{min-height:34px;margin:0;color:var(--wa-ink);font-size:13px;line-height:1.08;font-weight:560;letter-spacing:0}.wa-strategy-plan__summary{margin:0;padding-top:3px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.24;font-weight:420;text-transform:none;will-change:transform,opacity}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;inset:calc(var(--wa-chat-top-fade) - 14px) 24px 22px;align-content:start;width:auto;max-width:none;gap:11px;padding:0;overflow:hidden;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:4px;max-width:420px}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:18px;line-height:1.05;font-weight:560}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{max-width:390px;font-size:11px;line-height:1.24}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 10px;min-height:0;min-width:0}.wa-data-source-group{display:grid;align-content:start;gap:5px;min-width:0}.wa-data-source-group__title{margin:0;color:var(--wa-color-muted);font-size:8.5px;line-height:1;font-weight:680;letter-spacing:.02em;text-transform:uppercase}.wa-data-source-grid--marketing .wa-data-source-grid__list{grid-template-columns:minmax(0,1fr);gap:5px}.wa-data-source-grid--marketing .wa-data-source-card{grid-template-columns:15px minmax(0,1fr);gap:7px;min-height:50px;padding:7px 8px;border-color:var(--wa-line-08);background:#f5f4eda8;box-shadow:none}.wa-data-source-grid--marketing .wa-data-source-card__icon{width:15px;height:15px;border-radius:5px}.wa-data-source-grid--marketing .wa-data-source-card__icon:before{top:4px;left:4px;width:5px;height:5px}.wa-data-source-grid--marketing .wa-data-source-card__icon:after{right:3px;bottom:3px;width:3px;height:3px}.wa-data-source-grid--marketing .wa-data-source-card__copy{gap:2px}.wa-data-source-grid--marketing .wa-data-source-card__copy strong{font-size:11.6px;line-height:1.08;font-weight:560}.wa-data-source-grid--marketing .wa-data-source-card__copy span{font-size:9.4px;line-height:1.18}.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr) auto;align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-sequence-engagement__count{display:inline-flex;align-items:center;min-height:23px;padding:0 9px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-style-profile__rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.wa-style-profile__row{display:grid;gap:4px;min-height:54px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);will-change:transform,opacity}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:660;text-transform:uppercase}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12px;line-height:1.2;font-weight:520}.wa-style-profile__examples{display:grid;gap:6px}.wa-style-profile__example{margin:0;padding:9px 11px;border-left:2px solid var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-row-bg);font-size:11px;line-height:1.25;font-weight:430;will-change:transform,opacity}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:7px}.wa-sequence-card{display:grid;gap:6px;min-width:0;padding:10px 11px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left;will-change:transform,opacity}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-composer{position:absolute;right:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));bottom:var(--wa-composer-bottom-outset);left:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));z-index:3;display:grid;grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);gap:10px;align-items:center;min-height:var(--wa-composer-height);padding:6px 8px 6px 18px;margin:0;border:1px solid var(--wa-color-input-line);border-radius:999px;background:var(--wa-panel);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset;transform-origin:center center;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease;will-change:transform}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer[data-focused=true]{border-color:var(--wa-orange);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset}.wa-composer__placeholder{display:flex;align-items:center;min-width:0;min-height:38px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:14px;font-weight:460;text-overflow:ellipsis;white-space:nowrap}.wa-composer__placeholder:empty:before{content:"Ask the assistant...";color:var(--wa-placeholder)}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:18px;line-height:1;font-weight:680;cursor:default;white-space:nowrap}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__icon:before{content:"";width:0;height:0;margin-left:2px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid currentColor}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-builder{position:relative;grid-column:1 / -1;justify-self:center;display:grid;gap:24px;width:min(1680px,calc(100vw - 36px));margin-top:12px;padding-top:58px;border-top:1px solid var(--wa-line-10)}.wa-builder__header{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,430px);gap:28px;align-items:end}.wa-builder__eyebrow{margin:0 0 10px;color:var(--wa-color-accent);font-size:12px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder__title{max-width:780px;margin:0;color:var(--wa-color-heading);font-size:clamp(31px,2.25vw,42px);line-height:1.04;font-weight:520;letter-spacing:0}.wa-builder__lede{margin:0;color:var(--wa-color-muted);font-size:15px;line-height:1.35;font-weight:430}.wa-builder__tabs{display:flex;flex-wrap:wrap;gap:8px}.wa-builder-tab{display:inline-grid;gap:4px;min-width:168px;padding:12px 14px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);cursor:default;text-align:left}.wa-builder-tab.is-active{border-color:var(--wa-color-accent);background:var(--wa-card-accent-bg);box-shadow:inset 3px 0 0 var(--wa-color-accent)}.wa-builder-tab__title{min-width:0;overflow:hidden;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.12;font-weight:540;text-overflow:ellipsis;white-space:nowrap}.wa-builder-tab__count{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:430}.wa-builder__layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,320px);gap:28px;align-items:start}.wa-builder__workspace{display:grid;gap:14px;min-width:0}.wa-builder__add-rail{display:flex;flex-wrap:wrap;gap:8px}.wa-builder-add-button{min-height:34px;padding:0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:500;cursor:default;white-space:nowrap}.wa-builder-add-button:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder__thread{display:grid;gap:20px;align-content:start;min-height:560px;max-height:720px;min-width:0;padding:30px;overflow:auto;border:1px solid var(--wa-line-10);border-radius:14px;background:linear-gradient(to bottom,var(--wa-panel),var(--wa-row-bg)),radial-gradient(circle at top left,var(--wa-card-accent-bg),transparent 36%)}.wa-builder-step{display:grid;gap:7px;min-width:0}.wa-builder-step .wa-message{max-width:min(88%,760px)}.wa-builder-step[data-builder-kind=assistant] .wa-message,.wa-builder-step[data-builder-kind=status] .wa-message,.wa-builder-step[data-builder-kind=cursor] .wa-message{width:min(100%,680px);max-width:100%;grid-template-columns:minmax(0,1fr)}.wa-builder-step[data-builder-kind=user],.wa-builder-step[data-builder-kind=file]{justify-items:end}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:min(100%,1080px);max-width:100%}.wa-builder-step[data-builder-kind=assistant] .wa-message__body,.wa-builder-step[data-builder-kind=status] .wa-message__body,.wa-builder-step[data-builder-kind=cursor] .wa-message__body,.wa-builder-step[data-builder-kind=component] .wa-message__body,.wa-builder-step[data-builder-kind=thinking] .wa-message__body{width:100%}.wa-builder-step.is-selected .wa-message__body{outline:1px solid var(--wa-color-accent);outline-offset:3px}.wa-builder-step.is-dragging{opacity:.42}.wa-builder-step.is-drop-before,.wa-builder-step.is-drop-after{position:relative}.wa-builder-step.is-drop-before:before,.wa-builder-step.is-drop-after:after{content:"";display:block;height:2px;border-radius:999px;background:var(--wa-color-accent)}.wa-builder-step.is-drop-before:before{margin-bottom:10px}.wa-builder-step.is-drop-after:after{margin-top:10px}.wa-builder-message__body{max-width:none}.wa-builder-bubble{display:grid;gap:7px;min-width:0}.wa-builder-step__kind{display:inline-flex;width:max-content;max-width:100%;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder-step__textarea{display:block;width:100%;min-height:19px;padding:0;overflow:hidden;border:0;color:inherit;background:transparent;font-size:inherit;line-height:inherit;font-weight:inherit;letter-spacing:0;outline:0}.wa-builder-step__textarea::selection{background:var(--wa-card-accent-bg)}.wa-builder-step__toolbar{display:flex;gap:6px;justify-content:flex-start;padding-left:3px;opacity:0;transform:translateY(-2px);transition:opacity .14s ease,transform .14s ease}.wa-builder-step[data-builder-kind=user] .wa-builder-step__toolbar,.wa-builder-step[data-builder-kind=file] .wa-builder-step__toolbar{justify-content:flex-end;padding-right:3px;padding-left:0}.wa-builder-step:hover .wa-builder-step__toolbar,.wa-builder-step:focus-within .wa-builder-step__toolbar,.wa-builder-step.is-selected .wa-builder-step__toolbar{opacity:1;transform:translateY(0)}.wa-builder-step__action{display:inline-flex;align-items:center;justify-content:center;width:28px;min-width:28px;height:28px;padding:0;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-muted);background:var(--wa-panel);font-size:10px;line-height:1;font-weight:560;cursor:default;white-space:nowrap}.wa-builder-step__action svg{display:block;width:15px;height:15px}.wa-builder-step__drag{cursor:grab}.wa-builder-step__drag:active{cursor:grabbing}.wa-builder-step__action:disabled{opacity:.34}.wa-builder-step__action:not(:disabled):hover{color:var(--wa-color-text);border-color:var(--wa-line-20)}.wa-builder-thinking{gap:10px;width:100%}.wa-builder-thinking[data-thinking-header-suppressed=true]{padding-top:0}.wa-builder-research-step{min-height:64px}.wa-builder-research-step .wa-builder-step__textarea{color:var(--wa-ink);font-weight:var(--wa-chat-thinking-weight)}.wa-builder-component-card{display:grid;width:100%;min-height:96px;padding:16px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-row-bg)}.wa-builder-component-card__content{display:grid;gap:12px;align-content:start;min-width:0}.wa-builder-component-card__title,.wa-builder-component-card__subtitle,.wa-builder-component-list__item,.wa-builder-table-editor__cell,.wa-builder-strategy-editor input,.wa-builder-strategy-editor textarea,.wa-builder-enrichment-editor input,.wa-builder-data-sources-editor input,.wa-builder-data-sources-editor textarea,.wa-builder-file-list-editor input,.wa-builder-file-list-editor textarea,.wa-builder-style-profile-editor input,.wa-builder-style-profile-editor textarea,.wa-builder-proximity-editor input,.wa-builder-proximity-editor textarea,.wa-builder-sequence-editor input,.wa-builder-sequence-editor textarea,.wa-builder-channel-editor input,.wa-builder-channel-editor textarea,.wa-builder-sequence-editor__count{width:100%;min-width:0;border:0;color:var(--wa-color-text);background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-component-card__title{min-height:28px;color:var(--wa-color-heading-strong);font-size:20px;line-height:1.12;font-weight:520}.wa-builder-component-card__subtitle{min-height:19px;color:var(--wa-color-muted);font-size:13px;line-height:1.3;font-weight:430}.wa-builder-component-list{display:grid;gap:8px}.wa-builder-component-list__item{min-height:32px;padding:7px 10px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel);font-size:13px;line-height:1.25}.wa-builder-table-editor{display:grid;gap:0;min-width:0;overflow:auto;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-table-editor__row{display:grid;grid-template-columns:var(--wa-builder-table-columns);min-width:max-content;border-bottom:1px solid var(--wa-line-08)}.wa-builder-table-editor__row:last-child{border-bottom:0}.wa-builder-table-editor__row[data-header=true]{background:var(--wa-row-bg)}.wa-builder-table-editor__cell{min-height:38px;padding:10px 12px;border-right:1px solid var(--wa-line-08);font-size:13px;line-height:1.15}.wa-builder-table-editor__cell:last-child{border-right:0}.wa-builder-table-editor__row[data-header=true] .wa-builder-table-editor__cell{color:var(--wa-color-muted);font-weight:560}.wa-builder-strategy-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-strategy-editor__card{display:grid;gap:9px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor__label{color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:700;text-transform:uppercase}.wa-builder-strategy-editor__title{min-height:37px;color:var(--wa-color-heading-strong);font-size:15px;line-height:1.15;font-weight:540}.wa-builder-strategy-editor__summary{min-height:76px;color:var(--wa-color-text);font-size:12.5px;line-height:1.25;font-weight:450}.wa-builder-enrichment-editor{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.wa-builder-enrichment-editor__group{display:grid;gap:7px;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-enrichment-editor__title{min-height:26px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.1;font-weight:520}.wa-builder-enrichment-editor__step{min-height:28px;padding:6px 8px;border:1px solid var(--wa-line-08);border-radius:6px;color:var(--wa-color-text);background:var(--wa-row-bg);font-size:12px;line-height:1}.wa-builder-data-sources-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-data-sources-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-data-sources-editor__category{min-height:18px;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:680;text-transform:uppercase}.wa-builder-data-sources-editor__name{min-height:20px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.15;font-weight:560}.wa-builder-data-sources-editor__detail{min-height:48px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-file-list-editor,.wa-builder-style-profile-editor,.wa-builder-style-profile-editor__examples,.wa-builder-proximity-editor,.wa-builder-sequence-editor,.wa-builder-channel-editor{display:grid;gap:10px}.wa-builder-file-list-editor__card,.wa-builder-style-profile-editor__row,.wa-builder-proximity-editor__row,.wa-builder-sequence-editor__card,.wa-builder-channel-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-file-list-editor__card{grid-template-columns:46px minmax(0,1fr)}.wa-builder-file-list-editor__detail{grid-column:1 / -1}.wa-builder-file-list-editor__type,.wa-builder-proximity-editor__rank,.wa-builder-proximity-editor__score,.wa-builder-sequence-editor__count,.wa-builder-channel-editor__badge{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:700;text-transform:uppercase}.wa-builder-file-list-editor__name,.wa-builder-style-profile-editor__value,.wa-builder-proximity-editor__name,.wa-builder-sequence-editor__name,.wa-builder-channel-editor__label{color:var(--wa-color-heading-strong);font-size:14px;line-height:1.16;font-weight:560}.wa-builder-file-list-editor__detail,.wa-builder-style-profile-editor__example,.wa-builder-proximity-editor__personalization,.wa-builder-sequence-editor__personalization,.wa-builder-channel-editor__detail{min-height:44px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-style-profile-editor{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder-style-profile-editor__label,.wa-builder-proximity-editor__company,.wa-builder-proximity-editor__title,.wa-builder-proximity-editor__proximity,.wa-builder-sequence-editor__company{color:var(--wa-color-muted);font-size:11px;line-height:1.12;font-weight:520}.wa-builder-proximity-editor__row{grid-template-columns:42px 42px repeat(3,minmax(0,1fr))}.wa-builder-proximity-editor__proximity,.wa-builder-proximity-editor__personalization{grid-column:1 / -1}.wa-builder-sequence-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-sequence-editor__card{align-content:start}.wa-builder-sequence-editor__subject{color:var(--wa-color-text);font-size:12px;line-height:1.18;font-weight:520}.wa-builder-channel-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-channel-editor__card{grid-template-columns:minmax(0,1fr) 58px}.wa-builder-channel-editor__detail{grid-column:1 / -1}.wa-builder-cursor-line{display:grid;grid-template-columns:18px minmax(0,1fr);gap:10px;align-items:start}.wa-builder-cursor-line__cursor{display:block;width:14px;height:23px;background:var(--wa-cursor-arrow) 0 0 / 14px 23px no-repeat}.wa-builder-file-pill{display:grid;grid-template-columns:42px minmax(0,1fr);gap:10px;align-items:center}.wa-builder-file-pill__icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:32px;border-radius:8px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680}.wa-builder__side{position:sticky;top:22px;display:grid;gap:14px;min-width:0}.wa-builder__panel,.wa-builder-export{display:grid;gap:14px;padding:16px;border:1px solid var(--wa-line-10);border-radius:14px;background:var(--wa-panel)}.wa-builder-panel__divider{height:1px;margin:2px 0;background:var(--wa-line-10)}.wa-builder-panel__empty{margin:0;color:var(--wa-color-muted);font-size:13px;line-height:1.32}.wa-builder-field{display:grid;gap:7px;min-width:0}.wa-builder-field__label,.wa-builder-export__label{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:620;letter-spacing:.02em;text-transform:uppercase}.wa-builder-export__header{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0}.wa-builder-export__copy{display:inline-flex;gap:6px;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:520;cursor:default;white-space:nowrap}.wa-builder-export__copy svg{display:block;width:14px;height:14px}.wa-builder-export__copy path{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.wa-builder-export__copy:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder-export__copy[data-copy-state=copied]{color:var(--wa-color-inverse);border-color:var(--wa-color-heading-strong);background:var(--wa-color-heading-strong)}.wa-builder-field__control,.wa-builder-export__textarea{width:100%;min-width:0;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);font-size:13px;line-height:1.32;font-weight:430;outline:0}.wa-builder-field__control{min-height:38px;padding:10px}.wa-builder-field__control[type=color]{height:42px;padding:5px}.wa-builder-field__control:focus,.wa-builder-export__textarea:focus{border-color:var(--wa-color-accent);box-shadow:0 0 0 3px var(--wa-card-accent-bg)}.wa-builder-export__textarea{min-height:172px;max-height:320px;padding:12px;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;white-space:pre}.wa-builder__status{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.25;font-weight:430}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden;will-change:transform,opacity}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden;will-change:transform}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 8px 12px var(--wa-cursor-shadow));will-change:transform}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph:before,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph:after{opacity:1;background-image:var(--wa-cursor-arrow)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph:before{clip-path:inset(0 0 34% 0);z-index:2}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph:after{clip-path:inset(66% 0 0 0);transform-origin:50% 66%;animation:wa-cursor-wag 165ms ease-in-out infinite alternate;z-index:1}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-cursor-wag{0%{transform:rotate(-10deg)}to{transform:rotate(10deg)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1180px){.wa-section{padding:82px 24px 96px}.wa-section__inner{grid-template-columns:1fr;row-gap:56px}.wa-copy{max-width:880px}.wa-story-controls,.wa-stage{grid-column:1}.wa-stage{width:min(660px,100%);justify-self:center}.wa-stage__media{right:0}.wa-window{margin-left:auto;margin-right:auto}.wa-builder__header,.wa-builder__layout{grid-template-columns:1fr}.wa-builder__side{position:static;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start}.wa-builder__status{grid-column:1 / -1}}@media(max-width:760px){.wa-section{--wa-chat-x-padding: 6px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 12px);--wa-composer-outset-x: 14px;--wa-composer-bottom-outset: 18px;--wa-composer-height: 50px;--wa-composer-send-size: 36px;--wa-history-resume-height: 40px;padding:54px 18px 72px}.wa-section__inner{row-gap:40px}.wa-copy__title{font-size:clamp(36px,11vw,48px);line-height:1.05}.wa-story-tabs{gap:22px}.wa-story-tab{gap:18px;min-height:64px}.wa-story-tab__marker{min-height:64px}.wa-story-tab__body{gap:13px;padding-top:9px}.wa-story-tab__title{font-size:24px}.wa-story-tab__description{font-size:15px}.wa-builder{gap:18px;padding-top:40px}.wa-builder__header{gap:16px}.wa-builder__title{font-size:clamp(28px,9vw,36px)}.wa-builder__lede{font-size:14px}.wa-builder-tab{flex:1 1 100%;min-width:0}.wa-builder__thread{min-height:500px;max-height:660px;padding:18px}.wa-builder-step .wa-message{max-width:96%}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:100%}.wa-builder-step__toolbar{opacity:1;transform:none}.wa-builder-component-card,.wa-builder-file-pill{grid-template-columns:1fr}.wa-builder-cursor-line{grid-template-columns:16px minmax(0,1fr)}.wa-builder__side{grid-template-columns:1fr}.wa-stage{width:100%;min-height:560px}.wa-stage__media{top:-22px;right:0;width:58vw;min-width:220px;height:570px}.wa-window{width:min(100%,590px);margin:82px 0 0}.wa-chat-shell{height:520px;border-radius:16px}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{padding-bottom:4px}.wa-signup-field{width:min(292px,88%)}.wa-research-step{min-height:52px;gap:7px;padding-left:0}.wa-research-step__label{font-size:12px}.wa-research-step__detail{font-size:10px}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:7px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-builder-data-sources-editor,.wa-builder-style-profile-editor,.wa-builder-proximity-editor__row,.wa-builder-sequence-editor,.wa-builder-channel-editor{grid-template-columns:minmax(0,1fr)}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:0 4px;font-size:7.5px;line-height:1.06}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-data-table__add{top:3px;right:4px;width:18px;height:16px;border-radius:4px;font-size:12px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:8px;line-height:1.03}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:12px auto auto;gap:6px;padding:0;font-size:12px}.wa-waterfall-rows{gap:7px}.wa-waterfall-row{grid-template-columns:13px minmax(82px,auto) minmax(0,1fr);gap:6px;min-height:24px;font-size:11px}.wa-waterfall-chip{max-width:72px;padding-right:5px;font-size:8.5px}.wa-strategy-plan{min-height:112px;gap:5px;padding:9px}.wa-strategy-plan__title{min-height:0;font-size:12px}.wa-strategy-plan__summary{font-size:11px}.wa-composer{grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);min-height:var(--wa-composer-height);padding:6px 8px 6px 15px}.wa-composer__placeholder{min-height:34px;font-size:13px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}', Dr = "chatbot-stories-styles";
function Io() {
  if (document.getElementById(Dr)) return;
  const o = document.createElement("style");
  o.id = Dr, o.textContent = Po, document.head.append(o);
}
function Mo(o) {
  if (o instanceof HTMLElement) return o;
  const e = document.querySelector(o);
  if (!e)
    throw new Error(`ChatbotStories: root element not found for selector "${o}"`);
  return e;
}
function qi(o = "[data-chatbot-stories]", e = {}) {
  return e.injectStyles !== !1 && Io(), Eo(Mo(o), e);
}
const Ro = {
  init: qi,
  defaultStories: Fi
};
if (typeof window < "u") {
  window.ChatbotStories = Ro;
  const o = () => {
    document.querySelectorAll("[data-chatbot-stories][data-auto-init]").forEach((e) => {
      e.dataset.chatbotStoriesMounted || (e.dataset.chatbotStoriesMounted = "true", qi(e));
    });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, { once: !0 }) : o();
}
export {
  Fi as defaultStories,
  qi as init
};
