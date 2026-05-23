function Re(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function kr(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e;
}
var he = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Yt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, pi, J, H, _e = 1e8, O = 1 / _e, Xa = Math.PI * 2, Wn = Xa / 4, jn = 0, Sr = Math.sqrt, Yn = Math.cos, $n = Math.sin, X = function(e) {
  return typeof e == "string";
}, j = function(e) {
  return typeof e == "function";
}, Oe = function(e) {
  return typeof e == "number";
}, hi = function(e) {
  return typeof e > "u";
}, Pe = function(e) {
  return typeof e == "object";
}, ie = function(e) {
  return e !== !1;
}, mi = function() {
  return typeof window < "u";
}, ia = function(e) {
  return j(e) || X(e);
}, Cr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, Xn = /random\([^)]+\)/g, Jn = /,\s*/g, Li = /(?:-?\.?\d|\.)+/gi, Ar = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ta = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Tr = /[+-]=-?[.\d]+/, Kn = /[^,'"\[\]\s]+/gi, Qn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, V, Ce, Ja, gi, me = {}, ma = {}, Er, Mr = function(e) {
  return (ma = Et(e, me)) && se;
}, fi = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, $t = function(e, t) {
  return !t && console.warn(e);
}, Pr = function(e, t) {
  return e && (me[e] = t) && ma && (ma[e] = t) || me;
}, Xt = function() {
  return 0;
}, Zn = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ua = {
  suppressEvents: !0,
  kill: !1
}, eo = {
  suppressEvents: !0
}, wi = {}, Ye = [], Ka = {}, Ir, de = {}, Ea = {}, qi = 30, pa = [], bi = "", yi = function(e) {
  var t = e[0], a, i;
  if (Pe(t) || j(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (i = pa.length; i-- && !pa[i].targetTest(t); )
      ;
    a = pa[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Zr(e[i], a))) || e.splice(i, 1);
  return e;
}, ct = function(e) {
  return e._gsap || yi(xe(e))[0]._gsap;
}, Dr = function(e, t, a) {
  return (a = e[t]) && j(a) ? e[t]() : hi(a) && e.getAttribute && e.getAttribute(t) || a;
}, re = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, Y = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, U = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, St = function(e, t) {
  var a = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + i : a === "-" ? e - i : a === "*" ? e * i : e / i;
}, to = function(e, t) {
  for (var a = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < a; )
    ;
  return i < a;
}, ga = function() {
  var e = Ye.length, t = Ye.slice(0), a, i;
  for (Ka = {}, Ye.length = 0, a = 0; a < e; a++)
    i = t[a], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, _i = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Rr = function(e, t, a, i) {
  Ye.length && !J && ga(), e.render(t, a, !!(J && t < 0 && _i(e))), Ye.length && !J && ga();
}, Nr = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Kn).length < 2 ? t : X(e) ? e.trim() : e;
}, Lr = function(e) {
  return e;
}, ge = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, ao = function(e) {
  return function(t, a) {
    for (var i in a)
      i in t || i === "duration" && e || i === "ease" || (t[i] = a[i]);
  };
}, Et = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, Oi = function n(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = Pe(t[a]) ? n(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, fa = function(e, t) {
  var a = {}, i;
  for (i in e)
    i in t || (a[i] = e[i]);
  return a;
}, Vt = function(e) {
  var t = e.parent || V, a = e.keyframes ? ao(Z(e.keyframes)) : ge;
  if (ie(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, io = function(e, t) {
  for (var a = e.length, i = a === t.length; i && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, qr = function(e, t, a, i, r) {
  var o = e[i], s;
  if (r)
    for (s = t[r]; o && o[r] > s; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, ka = function(e, t, a, i) {
  a === void 0 && (a = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, o = t._next;
  r ? r._next = o : e[a] === t && (e[a] = o), o ? o._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Je = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, ut = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, ro = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Qa = function(e, t, a, i) {
  return e._startAt && (J ? e._startAt.revert(ua) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, no = function n(e) {
  return !e || e._ts && n(e.parent);
}, Bi = function(e) {
  return e._repeat ? Mt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Mt = function(e, t) {
  var a = Math.floor(e = U(e / t));
  return e && a === e ? a - 1 : a;
}, wa = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Sa = function(e) {
  return e._end = U(e._start + (e._tDur / Math.abs(e._ts || e._rts || O) || 0));
}, Ca = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = U(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Sa(e), a._dirty || ut(a, e)), e;
}, Or = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = wa(e.rawTime(), t), (!t._dur || ta(0, t.totalDuration(), a) - t._tTime > O) && t.render(a, !0)), ut(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -O;
  }
}, Te = function(e, t, a, i) {
  return t.parent && Je(t), t._start = U((Oe(a) ? a : a || e !== V ? ye(e, a, t) : e._time) + t._delay), t._end = U(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), qr(e, t, "_first", "_last", e._sort ? "_start" : 0), Za(t) || (e._recent = t), i || Or(e, t), e._ts < 0 && Ca(e, e._tTime), e;
}, Br = function(e, t) {
  return (me.ScrollTrigger || fi("scrollTrigger", t)) && me.ScrollTrigger.create(t, e);
}, zr = function(e, t, a, i, r) {
  if (vi(e, t, r), !e._initted)
    return 1;
  if (!a && e._pt && !J && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ir !== ce.frame)
    return Ye.push(e), e._lazy = [r, i], 1;
}, oo = function n(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
}, Za = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, so = function(e, t, a, i) {
  var r = e.ratio, o = t < 0 || !t && (!e._start && oo(e) && !(!e._initted && Za(e)) || (e._ts < 0 || e._dp._ts < 0) && !Za(e)) ? 0 : 1, s = e._rDelay, l = 0, d, c, u;
  if (s && e._repeat && (l = ta(0, e._tDur, t), c = Mt(l, s), e._yoyo && c & 1 && (o = 1 - o), c !== Mt(e._tTime, s) && (r = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== r || J || i || e._zTime === O || !t && e._zTime) {
    if (!e._initted && zr(e, t, i, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? O : 0), a || (a = t && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, d = e._pt; d; )
      d.r(o, d.d), d = d._next;
    t < 0 && Qa(e, t, a, !0), e._onUpdate && !a && ue(e, "onUpdate"), l && e._repeat && !a && e.parent && ue(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Je(e, 1), !a && !J && (ue(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, lo = function(e, t, a) {
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
}, Pt = function(e, t, a, i) {
  var r = e._repeat, o = U(t) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = r ? r < 0 ? 1e10 : U(o * (r + 1) + e._rDelay * r) : o, s > 0 && !i && Ca(e, e._tTime = e._tDur * s), e.parent && Sa(e), a || ut(e.parent, e), e;
}, zi = function(e) {
  return e instanceof ae ? ut(e) : Pt(e, e._dur);
}, co = {
  _start: 0,
  endTime: Xt,
  totalDuration: Xt
}, ye = function n(e, t, a) {
  var i = e.labels, r = e._recent || co, o = e.duration() >= _e ? r.endTime(!1) : e._dur, s, l, d;
  return X(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), d = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (s < 0 ? r : a).totalDuration() / 100 : 1)) : s < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), d && a && (l = l / 100 * (Z(a) ? a[0] : a).totalDuration()), s > 1 ? n(e, t.substr(0, s - 1), a) + l : o + l)) : t == null ? o : +t;
}, Wt = function(e, t, a) {
  var i = Oe(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[r], s, l;
  if (i && (o.duration = t[1]), o.parent = a, e) {
    for (s = o, l = a; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = ie(l.vars.inherit) && l.parent;
    o.immediateRender = ie(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[r - 1];
  }
  return new $(t[0], o, t[r + 1]);
}, Ze = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ta = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, Q = function(e, t) {
  return !X(e) || !(t = Qn.exec(e)) ? "" : t[1];
}, uo = function(e, t, a) {
  return Ze(a, function(i) {
    return ta(e, t, i);
  });
}, ei = [].slice, Fr = function(e, t) {
  return e && Pe(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Pe(e[0])) && !e.nodeType && e !== Ce;
}, po = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(i) {
    var r;
    return X(i) && !t || Fr(i, 1) ? (r = a).push.apply(r, xe(i)) : a.push(i);
  }) || a;
}, xe = function(e, t, a) {
  return H && !t && H.selector ? H.selector(e) : X(e) && !a && (Ja || !It()) ? ei.call((t || gi).querySelectorAll(e), 0) : Z(e) ? po(e, a) : Fr(e) ? ei.call(e, 0) : e ? [e] : [];
}, ti = function(e) {
  return e = xe(e)[0] || $t("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return xe(t, a.querySelectorAll ? a : a === e ? $t("Invalid scope") || gi.createElement("div") : e);
  };
}, Hr = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Gr = function(e) {
  if (j(e))
    return e;
  var t = Pe(e) ? e : {
    each: e
  }, a = pt(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, o = {}, s = i > 0 && i < 1, l = isNaN(i) || s, d = t.axis, c = i, u = i;
  return X(i) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && l && (c = i[0], u = i[1]), function(p, m, g) {
    var h = (g || t).length, f = o[h], b, _, y, v, x, T, k, C, S;
    if (!f) {
      if (S = t.grid === "auto" ? 0 : (t.grid || [1, _e])[1], !S) {
        for (k = -_e; k < (k = g[S++].getBoundingClientRect().left) && S < h; )
          ;
        S < h && S--;
      }
      for (f = o[h] = [], b = l ? Math.min(S, h) * c - 0.5 : i % S, _ = S === _e ? 0 : l ? h * u / S - 0.5 : i / S | 0, k = 0, C = _e, T = 0; T < h; T++)
        y = T % S - b, v = _ - (T / S | 0), f[T] = x = d ? Math.abs(d === "y" ? v : y) : Sr(y * y + v * v), x > k && (k = x), x < C && (C = x);
      i === "random" && Hr(f), f.max = k - C, f.min = C, f.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (S > h ? h - 1 : d ? d === "y" ? h / S : S : Math.max(S, h / S)) || 0) * (i === "edges" ? -1 : 1), f.b = h < 0 ? r - h : r, f.u = Q(t.amount || t.each) || 0, a = a && h < 0 ? Co(a) : a;
    }
    return h = (f[p] - f.min) / f.max || 0, U(f.b + (a ? a(h) : h) * f.v) + f.u;
  };
}, ai = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var i = U(Math.round(parseFloat(a) / e) * e * t);
    return (i - i % 1) / t + (Oe(a) ? 0 : Q(a));
  };
}, Ur = function(e, t) {
  var a = Z(e), i, r;
  return !a && Pe(e) && (i = a = e.radius || _e, e.values ? (e = xe(e.values), (r = !Oe(e[0])) && (i *= i)) : e = ai(e.increment)), Ze(t, a ? j(e) ? function(o) {
    return r = e(o), Math.abs(r - o) <= i ? r : o;
  } : function(o) {
    for (var s = parseFloat(r ? o.x : o), l = parseFloat(r ? o.y : 0), d = _e, c = 0, u = e.length, p, m; u--; )
      r ? (p = e[u].x - s, m = e[u].y - l, p = p * p + m * m) : p = Math.abs(e[u] - s), p < d && (d = p, c = u);
    return c = !i || d <= i ? e[c] : o, r || c === o || Oe(o) ? c : c + Q(o);
  } : ai(e));
}, Vr = function(e, t, a, i) {
  return Ze(Z(e) ? !t : a === !0 ? !!(a = 0) : !i, function() {
    return Z(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * i) / i;
  });
}, ho = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(i) {
    return t.reduce(function(r, o) {
      return o(r);
    }, i);
  };
}, mo = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || Q(a));
  };
}, go = function(e, t, a) {
  return jr(e, t, 0, 1, a);
}, Wr = function(e, t, a) {
  return Ze(a, function(i) {
    return e[~~t(i)];
  });
}, fo = function n(e, t, a) {
  var i = t - e;
  return Z(e) ? Wr(e, n(0, e.length), t) : Ze(a, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, wo = function n(e, t, a) {
  var i = t - e, r = i * 2;
  return Z(e) ? Wr(e, n(0, e.length - 1), t) : Ze(a, function(o) {
    return o = (r + (o - e) % r) % r || 0, e + (o > i ? r - o : o);
  });
}, Jt = function(e) {
  return e.replace(Xn, function(t) {
    var a = t.indexOf("[") + 1, i = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(Jn);
    return Vr(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5);
  });
}, jr = function(e, t, a, i, r) {
  var o = t - e, s = i - a;
  return Ze(r, function(l) {
    return a + ((l - e) / o * s || 0);
  });
}, bo = function n(e, t, a, i) {
  var r = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!r) {
    var o = X(e), s = {}, l, d, c, u, p;
    if (a === !0 && (i = 1) && (a = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Z(e) && !Z(t)) {
      for (c = [], u = e.length, p = u - 2, d = 1; d < u; d++)
        c.push(n(e[d - 1], e[d]));
      u--, r = function(g) {
        g *= u;
        var h = Math.min(p, ~~g);
        return c[h](g - h);
      }, a = t;
    } else i || (e = Et(Z(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        xi.call(s, e, l, "get", t[l]);
      r = function(g) {
        return Ci(g, s) || (o ? e.p : e);
      };
    }
  }
  return Ze(a, r);
}, Fi = function(e, t, a) {
  var i = e.labels, r = _e, o, s, l;
  for (o in i)
    s = i[o] - t, s < 0 == !!a && s && r > (s = Math.abs(s)) && (l = o, r = s);
  return l;
}, ue = function(e, t, a) {
  var i = e.vars, r = i[t], o = H, s = e._ctx, l, d, c;
  if (r)
    return l = i[t + "Params"], d = i.callbackScope || e, a && Ye.length && ga(), s && (H = s), c = l ? r.apply(d, l) : r.call(d), H = o, c;
}, Ht = function(e) {
  return Je(e), e.scrollTrigger && e.scrollTrigger.kill(!!J), e.progress() < 1 && ue(e, "onInterrupt"), e;
}, kt, Yr = [], $r = function(e) {
  if (e)
    if (e = !e.name && e.default || e, mi() || e.headless) {
      var t = e.name, a = j(e), i = t && !a && e.init ? function() {
        this._props = [];
      } : e, r = {
        init: Xt,
        render: Ci,
        add: xi,
        kill: Lo,
        modifier: No,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Si,
        aliases: {},
        register: 0
      };
      if (It(), e !== i) {
        if (de[t])
          return;
        ge(i, ge(fa(e, r), o)), Et(i.prototype, Et(r, fa(e, o))), de[i.prop = t] = i, e.targetTest && (pa.push(i), wi[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Pr(t, i), e.register && e.register(se, i, ne);
    } else
      Yr.push(e);
}, q = 255, Gt = {
  aqua: [0, q, q],
  lime: [0, q, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, q],
  navy: [0, 0, 128],
  white: [q, q, q],
  olive: [128, 128, 0],
  yellow: [q, q, 0],
  orange: [q, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [q, 0, 0],
  pink: [q, 192, 203],
  cyan: [0, q, q],
  transparent: [q, q, q, 0]
}, Ma = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * q + 0.5 | 0;
}, Xr = function(e, t, a) {
  var i = e ? Oe(e) ? [e >> 16, e >> 8 & q, e & q] : 0 : Gt.black, r, o, s, l, d, c, u, p, m, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Gt[e])
      i = Gt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), o = e.charAt(2), s = e.charAt(3), e = "#" + r + r + o + o + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & q, i & q, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & q, e & q];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Li), !t)
        l = +i[0] % 360 / 360, d = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (d + 1) : c + d - c * d, r = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Ma(l + 1 / 3, r, o), i[1] = Ma(l, r, o), i[2] = Ma(l - 1 / 3, r, o);
      else if (~e.indexOf("="))
        return i = e.match(Ar), a && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Li) || Gt.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / q, o = i[1] / q, s = i[2] / q, u = Math.max(r, o, s), p = Math.min(r, o, s), c = (u + p) / 2, u === p ? l = d = 0 : (m = u - p, d = c > 0.5 ? m / (2 - u - p) : m / (u + p), l = u === r ? (o - s) / m + (o < s ? 6 : 0) : u === o ? (s - r) / m + 2 : (r - o) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(d * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), a && i.length < 4 && (i[3] = 1), i;
}, Jr = function(e) {
  var t = [], a = [], i = -1;
  return e.split($e).forEach(function(r) {
    var o = r.match(vt) || [];
    t.push.apply(t, o), a.push(i += o.length + 1);
  }), t.c = a, t;
}, Hi = function(e, t, a) {
  var i = "", r = (e + i).match($e), o = t ? "hsla(" : "rgba(", s = 0, l, d, c, u;
  if (!r)
    return e;
  if (r = r.map(function(p) {
    return (p = Xr(p, t, 1)) && o + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), a && (c = Jr(e), l = a.c, l.join(i) !== c.c.join(i)))
    for (d = e.replace($e, "1").split(vt), u = d.length - 1; s < u; s++)
      i += d[s] + (~l.indexOf(s) ? r.shift() || o + "0,0,0,0)" : (c.length ? c : r.length ? r : a).shift());
  if (!d)
    for (d = e.split($e), u = d.length - 1; s < u; s++)
      i += d[s] + r[s];
  return i + d[u];
}, $e = (function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Gt)
    n += "|" + e + "\\b";
  return new RegExp(n + ")", "gi");
})(), yo = /hsl[a]?\(/, Kr = function(e) {
  var t = e.join(" "), a;
  if ($e.lastIndex = 0, $e.test(t))
    return a = yo.test(t), e[1] = Hi(e[1], a), e[0] = Hi(e[0], a, Jr(e[1])), !0;
}, Kt, ce = (function() {
  var n = Date.now, e = 500, t = 33, a = n(), i = a, r = 1e3 / 240, o = r, s = [], l, d, c, u, p, m, g = function h(f) {
    var b = n() - i, _ = f === !0, y, v, x, T;
    if ((b > e || b < 0) && (a += b - t), i += b, x = i - a, y = x - o, (y > 0 || _) && (T = ++u.frame, p = x - u.time * 1e3, u.time = x = x / 1e3, o += y + (y >= r ? 4 : r - y), v = 1), _ || (l = d(h)), v)
      for (m = 0; m < s.length; m++)
        s[m](x, p, T, f);
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
      Er && (!Ja && mi() && (Ce = Ja = window, gi = Ce.document || {}, me.gsap = se, (Ce.gsapVersions || (Ce.gsapVersions = [])).push(se.version), Mr(ma || Ce.GreenSockGlobals || !Ce.gsap && Ce || {}), Yr.forEach($r)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), d = c || function(f) {
        return setTimeout(f, o - u.time * 1e3 + 1 | 0);
      }, Kt = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Kt = 0, d = Xt;
    },
    lagSmoothing: function(f, b) {
      e = f || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(f) {
      r = 1e3 / (f || 240), o = u.time * 1e3 + r;
    },
    add: function(f, b, _) {
      var y = b ? function(v, x, T, k) {
        f(v, x, T, k), u.remove(y);
      } : f;
      return u.remove(f), s[_ ? "unshift" : "push"](y), It(), y;
    },
    remove: function(f, b) {
      ~(b = s.indexOf(f)) && s.splice(b, 1) && m >= b && m--;
    },
    _listeners: s
  }, u;
})(), It = function() {
  return !Kt && ce.wake();
}, D = {}, _o = /^[\d.\-M][\d.\-,\s]/, xo = /["']/g, vo = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), i = a[0], r = 1, o = a.length, s, l, d; r < o; r++)
    l = a[r], s = r !== o - 1 ? l.lastIndexOf(",") : l.length, d = l.substr(0, s), t[i] = isNaN(d) ? d.replace(xo, "").trim() : +d, i = l.substr(s + 1).trim();
  return t;
}, ko = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < a ? e.indexOf(")", a + 1) : a);
}, So = function(e) {
  var t = (e + "").split("("), a = D[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [vo(t[1])] : ko(e).split(",").map(Nr)) : D._CE && _o.test(e) ? D._CE("", e) : a;
}, Co = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, pt = function(e, t) {
  return e && (j(e) ? e : D[e] || So(e)) || t;
}, ft = function(e, t, a, i) {
  a === void 0 && (a = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var r = {
    easeIn: t,
    easeOut: a,
    easeInOut: i
  }, o;
  return re(e, function(s) {
    D[s] = me[s] = r, D[o = s.toLowerCase()] = a;
    for (var l in r)
      D[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = D[s + "." + l] = r[l];
  }), r;
}, Qr = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Pa = function n(e, t, a) {
  var i = t >= 1 ? t : 1, r = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = r / Xa * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * $n((c - o) * r) + 1;
  }, l = e === "out" ? s : e === "in" ? function(d) {
    return 1 - s(1 - d);
  } : Qr(s);
  return r = Xa / r, l.config = function(d, c) {
    return n(e, d, c);
  }, l;
}, Ia = function n(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? a : e === "in" ? function(r) {
    return 1 - a(1 - r);
  } : Qr(a);
  return i.config = function(r) {
    return n(e, r);
  }, i;
};
re("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
  var t = e < 5 ? e + 1 : e;
  ft(n + ",Power" + (t - 1), e ? function(a) {
    return Math.pow(a, t);
  } : function(a) {
    return a;
  }, function(a) {
    return 1 - Math.pow(1 - a, t);
  }, function(a) {
    return a < 0.5 ? Math.pow(a * 2, t) / 2 : 1 - Math.pow((1 - a) * 2, t) / 2;
  });
});
D.Linear.easeNone = D.none = D.Linear.easeIn;
ft("Elastic", Pa("in"), Pa("out"), Pa());
(function(n, e) {
  var t = 1 / e, a = 2 * t, i = 2.5 * t, r = function(s) {
    return s < t ? n * s * s : s < a ? n * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? n * (s -= 2.25 / e) * s + 0.9375 : n * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  ft("Bounce", function(o) {
    return 1 - r(1 - o);
  }, r);
})(7.5625, 2.75);
ft("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
ft("Circ", function(n) {
  return -(Sr(1 - n * n) - 1);
});
ft("Sine", function(n) {
  return n === 1 ? 1 : -Yn(n * Wn) + 1;
});
ft("Back", Ia("in"), Ia("out"), Ia());
D.SteppedEase = D.steps = me.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, o = 1 - O;
    return function(s) {
      return ((i * ta(0, o, s) | 0) + r) * a;
    };
  }
};
Yt.ease = D["quad.out"];
re("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return bi += n + "," + n + "Params,";
});
var Zr = function(e, t) {
  this.id = jn++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Dr, this.set = t ? t.getSetter : Si;
}, Qt = /* @__PURE__ */ (function() {
  function n(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Pt(this, +t.duration, 1, 1), this.data = t.data, H && (this._ctx = H, H.data.push(this)), Kt || ce.wake();
  }
  var e = n.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, Pt(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, i) {
    if (It(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (Ca(this, a), !r._dp || r.parent || Or(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && Te(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !i || this._initted && Math.abs(this._zTime) === O || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), Rr(this, a, i)), this;
  }, e.time = function(a, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + Bi(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(a, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + Bi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * r, i) : this._repeat ? Mt(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(a, i) {
    if (!arguments.length)
      return this._rts === -O ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var r = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -O ? 0 : this._rts, this.totalTime(ta(-Math.abs(this._delay), this.totalDuration(), r), i !== !1), Sa(this), ro(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (It(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== O && (this._tTime -= O)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = U(a);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Te(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + (ie(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var i = this.parent || this._dp;
    return i ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(i.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = eo);
    var i = J;
    return J = a, _i(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), J = i, this;
  }, e.globalTime = function(a) {
    for (var i = this, r = arguments.length ? a : i.rawTime(); i; )
      r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : r;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, zi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = a, zi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, i) {
    return this.totalTime(ye(this, a), ie(i));
  }, e.restart = function(a, i) {
    return this.play().totalTime(a ? -this._delay : 0, ie(i)), this._dur || (this._zTime = -O), this;
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
    var a = this.parent || this._dp, i = this._start, r;
    return !!(!a || this._ts && this._initted && a.isActive() && (r = a.rawTime(!0)) >= i && r < this.endTime(!0) - O);
  }, e.eventCallback = function(a, i, r) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[a] = i, r && (o[a + "Params"] = r), a === "onUpdate" && (this._onUpdate = i)) : delete o[a], this) : o[a];
  }, e.then = function(a) {
    var i = this, r = i._prom;
    return new Promise(function(o) {
      var s = j(a) ? a : Lr, l = function() {
        var c = i.then;
        i.then = null, r && r(), j(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), o(s), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    Ht(this);
  }, n;
})();
ge(Qt.prototype, {
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
var ae = /* @__PURE__ */ (function(n) {
  kr(e, n);
  function e(a, i) {
    var r;
    return a === void 0 && (a = {}), r = n.call(this, a) || this, r.labels = {}, r.smoothChildTiming = !!a.smoothChildTiming, r.autoRemoveChildren = !!a.autoRemoveChildren, r._sort = ie(a.sortChildren), V && Te(a.parent || V, Re(r), i), a.reversed && r.reverse(), a.paused && r.paused(!0), a.scrollTrigger && Br(Re(r), a.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, o) {
    return Wt(0, arguments, this), this;
  }, t.from = function(i, r, o) {
    return Wt(1, arguments, this), this;
  }, t.fromTo = function(i, r, o, s) {
    return Wt(2, arguments, this), this;
  }, t.set = function(i, r, o) {
    return r.duration = 0, r.parent = this, Vt(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new $(i, r, ye(this, o), 1), this;
  }, t.call = function(i, r, o) {
    return Te(this, $.delayedCall(0, i, r), o);
  }, t.staggerTo = function(i, r, o, s, l, d, c) {
    return o.duration = r, o.stagger = o.stagger || s, o.onComplete = d, o.onCompleteParams = c, o.parent = this, new $(i, o, ye(this, l)), this;
  }, t.staggerFrom = function(i, r, o, s, l, d, c) {
    return o.runBackwards = 1, Vt(o).immediateRender = ie(o.immediateRender), this.staggerTo(i, r, o, s, l, d, c);
  }, t.staggerFromTo = function(i, r, o, s, l, d, c, u) {
    return s.startAt = o, Vt(s).immediateRender = ie(s.immediateRender), this.staggerTo(i, r, s, l, d, c, u);
  }, t.render = function(i, r, o) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, c = i <= 0 ? 0 : U(i), u = this._zTime < 0 != i < 0 && (this._initted || !d), p, m, g, h, f, b, _, y, v, x, T, k;
    if (this !== V && c > l && i >= 0 && (c = l), c !== this._tTime || o || u) {
      if (s !== this._time && d && (c += this._time - s, i += this._time - s), p = c, v = this._start, y = this._ts, b = !y, u && (d || (s = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, f = d + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(f * 100 + i, r, o);
        if (p = U(c % f), c === l ? (h = this._repeat, p = d) : (x = U(c / f), h = ~~x, h && h === x && (p = d, h--), p > d && (p = d)), x = Mt(this._tTime, f), !s && this._tTime && x !== h && this._tTime - x * f - this._dur <= 0 && (x = h), T && h & 1 && (p = d - p, k = 1), h !== x && !this._lock) {
          var C = T && x & 1, S = C === (T && h & 1);
          if (h < x && (C = !C), s = C ? 0 : c % d ? d : c, this._lock = 1, this.render(s || (k ? 0 : U(h * f)), r, !d)._lock = 0, this._tTime = c, !r && this.parent && ue(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1, x = h), s && s !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (d = this._dur, l = this._tDur, S && (this._lock = 2, s = C ? d : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = lo(this, U(s), U(p)), _ && (c -= p - (p = _._start))), this._tTime = c, this._time = p, this._act = !!y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && c && d && !r && !x && (ue(this, "onStart"), this._tTime !== c))
        return this;
      if (p >= s && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || p >= m._start) && m._ts && _ !== m) {
            if (m.parent !== this)
              return this.render(i, r, o);
            if (m.render(m._ts > 0 ? (p - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (p - m._start) * m._ts, r, o), p !== this._time || !this._ts && !b) {
              _ = 0, g && (c += this._zTime = -O);
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
              return this.render(i, r, o);
            if (m.render(m._ts > 0 ? (E - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (E - m._start) * m._ts, r, o || J && _i(m)), p !== this._time || !this._ts && !b) {
              _ = 0, g && (c += this._zTime = E ? -O : O);
              break;
            }
          }
          m = g;
        }
      }
      if (_ && !r && (this.pause(), _.render(p >= s ? 0 : -O)._zTime = p >= s ? 1 : -1, this._ts))
        return this._start = v, Sa(this), this.render(i, r, o);
      this._onUpdate && !r && ue(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && s) && (v === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !d) && (c === l && this._ts > 0 || !c && this._ts < 0) && Je(this, 1), !r && !(i < 0 && !s) && (c || s || !l) && (ue(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var o = this;
    if (Oe(r) || (r = ye(this, r, i)), !(i instanceof Qt)) {
      if (Z(i))
        return i.forEach(function(s) {
          return o.add(s, r);
        }), this;
      if (X(i))
        return this.addLabel(i, r);
      if (j(i))
        i = $.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Te(this, i, r) : this;
  }, t.getChildren = function(i, r, o, s) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), o === void 0 && (o = !0), s === void 0 && (s = -_e);
    for (var l = [], d = this._first; d; )
      d._start >= s && (d instanceof $ ? r && l.push(d) : (o && l.push(d), i && l.push.apply(l, d.getChildren(!0, r, o)))), d = d._next;
    return l;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), o = r.length; o--; )
      if (r[o].vars.id === i)
        return r[o];
  }, t.remove = function(i) {
    return X(i) ? this.removeLabel(i) : j(i) ? this.killTweensOf(i) : (i.parent === this && ka(this, i), i === this._recent && (this._recent = this._last), ut(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = U(ce.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = ye(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, o) {
    var s = $.delayedCall(0, r || Xt, o);
    return s.data = "isPause", this._hasPause = 1, Te(this, s, ye(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = ye(this, i); r; )
      r._start === i && r.data === "isPause" && Je(r), r = r._next;
  }, t.killTweensOf = function(i, r, o) {
    for (var s = this.getTweensOf(i, o), l = s.length; l--; )
      Ue !== s[l] && s[l].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var o = [], s = xe(i), l = this._first, d = Oe(r), c; l; )
      l instanceof $ ? to(l._targets, s) && (d ? (!Ue || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && o.push(l) : (c = l.getTweensOf(s, r)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var o = this, s = ye(o, i), l = r, d = l.startAt, c = l.onStart, u = l.onStartParams, p = l.immediateRender, m, g = $.to(o, ge({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: r.duration || Math.abs((s - (d && "time" in d ? d.time : o._time)) / o.timeScale()) || O,
      onStart: function() {
        if (o.pause(), !m) {
          var f = r.duration || Math.abs((s - (d && "time" in d ? d.time : o._time)) / o.timeScale());
          g._dur !== f && Pt(g, f, 0, 1).render(g._time, !0, !0), m = 1;
        }
        c && c.apply(g, u || []);
      }
    }, r));
    return p ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, o) {
    return this.tweenTo(r, ge({
      startAt: {
        time: ye(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Fi(this, ye(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Fi(this, ye(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + O);
  }, t.shiftChildren = function(i, r, o) {
    o === void 0 && (o = 0);
    var s = this._first, l = this.labels, d;
    for (i = U(i); s; )
      s._start >= o && (s._start += i, s._end += i), s = s._next;
    if (r)
      for (d in l)
        l[d] >= o && (l[d] += i);
    return ut(this);
  }, t.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return n.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, o; r; )
      o = r._next, this.remove(r), r = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ut(this);
  }, t.totalDuration = function(i) {
    var r = 0, o = this, s = o._last, l = _e, d, c, u;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; s; )
        d = s._prev, s._dirty && s.totalDuration(), c = s._start, c > l && o._sort && s._ts && !o._lock ? (o._lock = 1, Te(o, s, c - s._delay, 1)._lock = 0) : l = c, c < 0 && s._ts && (r -= c, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += U(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), s._end > r && s._ts && (r = s._end), s = d;
      Pt(o, o === V && o._time > r ? o._time : r, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (V._ts && (Rr(V, wa(i, V)), Ir = ce.frame), ce.frame >= qi) {
      qi += he.autoSleep || 120;
      var r = V._first;
      if ((!r || !r._ts) && he.autoSleep && ce._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || ce.sleep();
      }
    }
  }, e;
})(Qt);
ge(ae.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Ao = function(e, t, a, i, r, o, s) {
  var l = new ne(this._pt, e, t, 0, 1, on, null, r), d = 0, c = 0, u, p, m, g, h, f, b, _;
  for (l.b = a, l.e = i, a += "", i += "", (b = ~i.indexOf("random(")) && (i = Jt(i)), o && (_ = [a, i], o(_, e, t), a = _[0], i = _[1]), p = a.match(Ta) || []; u = Ta.exec(i); )
    g = u[0], h = i.substring(d, u.index), m ? m = (m + 1) % 5 : h.substr(-5) === "rgba(" && (m = 1), g !== p[c++] && (f = parseFloat(p[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: f,
      c: g.charAt(1) === "=" ? St(f, g) - f : parseFloat(g) - f,
      m: m && m < 4 ? Math.round : 0
    }, d = Ta.lastIndex);
  return l.c = d < i.length ? i.substring(d, i.length) : "", l.fp = s, (Tr.test(i) || b) && (l.e = 0), this._pt = l, l;
}, xi = function(e, t, a, i, r, o, s, l, d, c) {
  j(i) && (i = i(r || 0, e, o));
  var u = e[t], p = a !== "get" ? a : j(u) ? d ? e[t.indexOf("set") || !j(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : u, m = j(u) ? d ? Io : rn : ki, g;
  if (X(i) && (~i.indexOf("random(") && (i = Jt(i)), i.charAt(1) === "=" && (g = St(p, i) + (Q(p) || 0), (g || g === 0) && (i = g))), !c || p !== i || ii)
    return !isNaN(p * i) && i !== "" ? (g = new ne(this._pt, e, t, +p || 0, i - (p || 0), typeof u == "boolean" ? Ro : nn, 0, m), d && (g.fp = d), s && g.modifier(s, this, e), this._pt = g) : (!u && !(t in e) && fi(t, i), Ao.call(this, e, t, p, i, m, l || he.stringFilter, d));
}, To = function(e, t, a, i, r) {
  if (j(e) && (e = jt(e, r, t, a, i)), !Pe(e) || e.style && e.nodeType || Z(e) || Cr(e))
    return X(e) ? jt(e, r, t, a, i) : e;
  var o = {}, s;
  for (s in e)
    o[s] = jt(e[s], r, t, a, i);
  return o;
}, en = function(e, t, a, i, r, o) {
  var s, l, d, c;
  if (de[e] && (s = new de[e]()).init(r, s.rawVars ? t[e] : To(t[e], i, r, o, a), a, i, o) !== !1 && (a._pt = l = new ne(a._pt, r, e, 0, 1, s.render, s, 0, s.priority), a !== kt))
    for (d = a._ptLookup[a._targets.indexOf(r)], c = s._props.length; c--; )
      d[s._props[c]] = l;
  return s;
}, Ue, ii, vi = function n(e, t, a) {
  var i = e.vars, r = i.ease, o = i.startAt, s = i.immediateRender, l = i.lazy, d = i.onUpdate, c = i.runBackwards, u = i.yoyoEase, p = i.keyframes, m = i.autoRevert, g = e._dur, h = e._startAt, f = e._targets, b = e.parent, _ = b && b.data === "nested" ? b.vars.targets : f, y = e._overwrite === "auto" && !pi, v = e.timeline, x = i.easeReverse || u, T, k, C, S, E, B, L, I, R, P, G, z, ee;
  if (v && (!p || !r) && (r = "none"), e._ease = pt(r, Yt.ease), e._rEase = x && (pt(x) || e._ease), e._from = !v && !!i.runBackwards, e._from && (e.ratio = 1), !v || p && !i.stagger) {
    if (I = f[0] ? ct(f[0]).harness : 0, z = I && i[I.prop], T = fa(i, wi), h && (h._zTime < 0 && h.progress(1), t < 0 && c && s && !m ? h.render(-1, !0) : h.revert(c && g ? ua : Zn), h._lazy = 0), o) {
      if (Je(e._startAt = $.set(f, ge({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !h && ie(l),
        startAt: null,
        delay: 0,
        onUpdate: d && function() {
          return ue(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (J || !s && !m) && e._startAt.revert(ua), s && g && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && g && !h) {
      if (t && (s = !1), C = ge({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && ie(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), z && (C[I.prop] = z), Je(e._startAt = $.set(f, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (J ? e._startAt.revert(ua) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        n(e._startAt, O, O);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && ie(l) || l && !g, k = 0; k < f.length; k++) {
      if (E = f[k], L = E._gsap || yi(f)[k]._gsap, e._ptLookup[k] = P = {}, Ka[L.id] && Ye.length && ga(), G = _ === f ? k : _.indexOf(E), I && (R = new I()).init(E, z || T, e, G, _) !== !1 && (e._pt = S = new ne(e._pt, E, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(fe) {
        P[fe] = S;
      }), R.priority && (B = 1)), !I || z)
        for (C in T)
          de[C] && (R = en(C, T, e, G, E, _)) ? R.priority && (B = 1) : P[C] = S = xi.call(e, E, C, "get", T[C], G, _, 0, i.stringFilter);
      e._op && e._op[k] && e.kill(E, e._op[k]), y && e._pt && (Ue = e, V.killTweensOf(E, P, e.globalTime(t)), ee = !e.parent, Ue = 0), e._pt && l && (Ka[L.id] = 1);
    }
    B && sn(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = d, e._initted = (!e._op || e._pt) && !ee, p && t <= 0 && v.render(_e, !0, !0);
}, Eo = function(e, t, a, i, r, o, s, l) {
  var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, p, m;
  if (!d)
    for (d = e._ptCache[t] = [], p = e._ptLookup, m = e._targets.length; m--; ) {
      if (c = p[m][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return ii = 1, e.vars[t] = "+=0", vi(e, s), ii = 0, l ? $t(t + " not eligible for reset. Try splitting into individual properties") : 1;
      d.push(c);
    }
  for (m = d.length; m--; )
    u = d[m], c = u._pt || u, c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + o * c.c, c.c = a - c.s, u.e && (u.e = Y(a) + Q(u.e)), u.b && (u.b = c.s + Q(u.b));
}, Mo = function(e, t) {
  var a = e[0] ? ct(e[0]).harness : 0, i = a && a.aliases, r, o, s, l;
  if (!i)
    return t;
  r = Et({}, t);
  for (o in i)
    if (o in r)
      for (l = i[o].split(","), s = l.length; s--; )
        r[l[s]] = r[o];
  return r;
}, Po = function(e, t, a, i) {
  var r = t.ease || i || "power1.inOut", o, s;
  if (Z(t))
    s = a[e] || (a[e] = []), t.forEach(function(l, d) {
      return s.push({
        t: d / (t.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (o in t)
      s = a[o] || (a[o] = []), o === "ease" || s.push({
        t: parseFloat(e),
        v: t[o],
        e: r
      });
}, jt = function(e, t, a, i, r) {
  return j(e) ? e.call(t, a, i, r) : X(e) && ~e.indexOf("random(") ? Jt(e) : e;
}, tn = bi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", an = {};
re(tn + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return an[n] = 1;
});
var $ = /* @__PURE__ */ (function(n) {
  kr(e, n);
  function e(a, i, r, o) {
    var s;
    typeof i == "number" && (r.duration = i, i = r, r = null), s = n.call(this, o ? i : Vt(i)) || this;
    var l = s.vars, d = l.duration, c = l.delay, u = l.immediateRender, p = l.stagger, m = l.overwrite, g = l.keyframes, h = l.defaults, f = l.scrollTrigger, b = i.parent || V, _ = (Z(a) || Cr(a) ? Oe(a[0]) : "length" in i) ? [a] : xe(a), y, v, x, T, k, C, S, E;
    if (s._targets = _.length ? yi(_) : $t("GSAP target " + a + " not found. https://gsap.com", !he.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = m, g || p || ia(d) || ia(c)) {
      i = s.vars;
      var B = i.easeReverse || i.yoyoEase;
      if (y = s.timeline = new ae({
        data: "nested",
        defaults: h || {},
        targets: b && b.data === "nested" ? b.vars.targets : _
      }), y.kill(), y.parent = y._dp = Re(s), y._start = 0, p || ia(d) || ia(c)) {
        if (T = _.length, S = p && Gr(p), Pe(p))
          for (k in p)
            ~tn.indexOf(k) && (E || (E = {}), E[k] = p[k]);
        for (v = 0; v < T; v++)
          x = fa(i, an), x.stagger = 0, B && (x.easeReverse = B), E && Et(x, E), C = _[v], x.duration = +jt(d, Re(s), v, C, _), x.delay = (+jt(c, Re(s), v, C, _) || 0) - s._delay, !p && T === 1 && x.delay && (s._delay = c = x.delay, s._start += c, x.delay = 0), y.to(C, x, S ? S(v, C, _) : 0), y._ease = D.none;
        y.duration() ? d = c = 0 : s.timeline = 0;
      } else if (g) {
        Vt(ge(y.vars.defaults, {
          ease: "none"
        })), y._ease = pt(g.ease || i.ease || "none");
        var L = 0, I, R, P;
        if (Z(g))
          g.forEach(function(G) {
            return y.to(_, G, ">");
          }), y.duration();
        else {
          x = {};
          for (k in g)
            k === "ease" || k === "easeEach" || Po(k, g[k], x, g.easeEach);
          for (k in x)
            for (I = x[k].sort(function(G, z) {
              return G.t - z.t;
            }), L = 0, v = 0; v < I.length; v++)
              R = I[v], P = {
                ease: R.e,
                duration: (R.t - (v ? I[v - 1].t : 0)) / 100 * d
              }, P[k] = R.v, y.to(_, P, L), L += P.duration;
          y.duration() < d && y.to({}, {
            duration: d - y.duration()
          });
        }
      }
      d || s.duration(d = y.duration());
    } else
      s.timeline = 0;
    return m === !0 && !pi && (Ue = Re(s), V.killTweensOf(_), Ue = 0), Te(b, Re(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !d && !g && s._start === U(b._time) && ie(u) && no(Re(s)) && b.data !== "nested") && (s._tTime = -O, s.render(Math.max(0, -c) || 0)), f && Br(Re(s), f), s;
  }
  var t = e.prototype;
  return t.render = function(i, r, o) {
    var s = this._time, l = this._tDur, d = this._dur, c = i < 0, u = i > l - O && !c ? l : i < O ? 0 : i, p, m, g, h, f, b, _, y;
    if (!d)
      so(this, i, r, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (p = u, y = this.timeline, this._repeat) {
        if (h = d + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, r, o);
        if (p = U(u % h), u === l ? (g = this._repeat, p = d) : (f = U(u / h), g = ~~f, g && g === f ? (p = d, g--) : p > d && (p = d)), b = this._yoyo && g & 1, b && (p = d - p), f = Mt(this._tTime, h), p === s && !o && this._initted && g === f)
          return this._tTime = u, this;
        g !== f && this.vars.repeatRefresh && !b && !this._lock && p !== h && this._initted && (this._lock = o = 1, this.render(U(h * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (zr(this, c ? i : p, o, r, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(o && this.vars.repeatRefresh && g !== f))
          return this;
        if (d !== this._dur)
          return this.render(i, r, o);
      }
      if (this._rEase) {
        var v = p < s;
        if (v !== this._inv) {
          var x = v ? s : d - s;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = s, this._invRecip = x ? (v ? -1 : 1) / x : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = _ = this._invRatio + this._invScale * this._invEase((p - this._invTime) * this._invRecip);
      } else
        this.ratio = _ = this._ease(p / d);
      if (this._from && (this.ratio = _ = 1 - _), this._tTime = u, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), !s && u && !r && !f && (ue(this, "onStart"), this._tTime !== u))
        return this;
      for (m = this._pt; m; )
        m.r(_, m.d), m = m._next;
      y && y.render(i < 0 ? i : y._dur * y._ease(p / this._dur), r, o) || this._startAt && (this._zTime = i), this._onUpdate && !r && (c && Qa(this, i, r, o), ue(this, "onUpdate")), this._repeat && g !== f && this.vars.onRepeat && !r && this.parent && ue(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Qa(this, i, !0, !0), (i || !d) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Je(this, 1), !r && !(c && !s) && (u || s || b) && (ue(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), n.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, r, o, s, l) {
    Kt || ce.wake(), this._ts || this.play();
    var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || vi(this, d), c = this._ease(d / this._dur), Eo(this, i, r, o, s, c, d, l) ? this.resetTo(i, r, o, s, 1) : (Ca(this, 0), this.parent || qr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ht(this) : this.scrollTrigger && this.scrollTrigger.kill(!!J), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, Ue && Ue.vars.overwrite !== !0)._first || Ht(this), this.parent && o !== this.timeline.totalDuration() && Pt(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var s = this._targets, l = i ? xe(i) : s, d = this._ptLookup, c = this._pt, u, p, m, g, h, f, b;
    if ((!r || r === "all") && io(s, l))
      return r === "all" && (this._pt = 0), Ht(this);
    for (u = this._op = this._op || [], r !== "all" && (X(r) && (h = {}, re(r, function(_) {
      return h[_] = 1;
    }), r = h), r = Mo(s, r)), b = s.length; b--; )
      if (~l.indexOf(s[b])) {
        p = d[b], r === "all" ? (u[b] = r, g = p, m = {}) : (m = u[b] = u[b] || {}, g = r);
        for (h in g)
          f = p && p[h], f && ((!("kill" in f.d) || f.d.kill(h) === !0) && ka(this, f, "_pt"), delete p[h]), m !== "all" && (m[h] = 1);
      }
    return this._initted && !this._pt && c && Ht(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return Wt(1, arguments);
  }, e.delayedCall = function(i, r, o, s) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: s
    });
  }, e.fromTo = function(i, r, o) {
    return Wt(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, o) {
    return V.killTweensOf(i, r, o);
  }, e;
})(Qt);
ge($.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
re("staggerTo,staggerFrom,staggerFromTo", function(n) {
  $[n] = function() {
    var e = new ae(), t = ei.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var ki = function(e, t, a) {
  return e[t] = a;
}, rn = function(e, t, a) {
  return e[t](a);
}, Io = function(e, t, a, i) {
  return e[t](i.fp, a);
}, Do = function(e, t, a) {
  return e.setAttribute(t, a);
}, Si = function(e, t) {
  return j(e[t]) ? rn : hi(e[t]) && e.setAttribute ? Do : ki;
}, nn = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Ro = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, on = function(e, t) {
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
}, Ci = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, No = function(e, t, a, i) {
  for (var r = this._pt, o; r; )
    o = r._next, r.p === i && r.modifier(e, t, a), r = o;
}, Lo = function(e) {
  for (var t = this._pt, a, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? ka(this, t, "_pt") : t.dep || (a = 1), t = i;
  return !a;
}, qo = function(e, t, a, i) {
  i.mSet(e, t, i.m.call(i.tween, a, i.mt), i);
}, sn = function(e) {
  for (var t = e._pt, a, i, r, o; t; ) {
    for (a = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : o = t, t = a;
  }
  e._pt = r;
}, ne = /* @__PURE__ */ (function() {
  function n(t, a, i, r, o, s, l, d, c) {
    this.t = a, this.s = r, this.c = o, this.p = i, this.r = s || nn, this.d = l || this, this.set = d || ki, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = n.prototype;
  return e.modifier = function(a, i, r) {
    this.mSet = this.mSet || this.set, this.set = qo, this.m = a, this.mt = r, this.tween = i;
  }, n;
})();
re(bi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(n) {
  return wi[n] = 1;
});
me.TweenMax = me.TweenLite = $;
me.TimelineLite = me.TimelineMax = ae;
V = new ae({
  sortChildren: !1,
  defaults: Yt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
he.stringFilter = Kr;
var ht = [], ha = {}, Oo = [], Gi = 0, Bo = 0, Da = function(e) {
  return (ha[e] || Oo).map(function(t) {
    return t();
  });
}, ri = function() {
  var e = Date.now(), t = [];
  e - Gi > 2 && (Da("matchMediaInit"), ht.forEach(function(a) {
    var i = a.queries, r = a.conditions, o, s, l, d;
    for (s in i)
      o = Ce.matchMedia(i[s]).matches, o && (l = 1), o !== r[s] && (r[s] = o, d = 1);
    d && (a.revert(), l && t.push(a));
  }), Da("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(i) {
      return a.add(null, i);
    });
  }), Gi = e, Da("matchMedia"));
}, ln = /* @__PURE__ */ (function() {
  function n(t, a) {
    this.selector = a && ti(a), this.data = [], this._r = [], this.isReverted = !1, this.id = Bo++, t && this.add(t);
  }
  var e = n.prototype;
  return e.add = function(a, i, r) {
    j(a) && (r = i, i = a, a = j);
    var o = this, s = function() {
      var d = H, c = o.selector, u;
      return d && d !== o && d.data.push(o), r && (o.selector = ti(r)), H = o, u = i.apply(o, arguments), j(u) && o._r.push(u), H = d, o.selector = c, o.isReverted = !1, u;
    };
    return o.last = s, a === j ? s(o, function(l) {
      return o.add(null, l);
    }) : a ? o[a] = s : s;
  }, e.ignore = function(a) {
    var i = H;
    H = null, a(this), H = i;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(i) {
      return i instanceof n ? a.push.apply(a, i.getTweens()) : i instanceof $ && !(i.parent && i.parent.data === "nested") && a.push(i);
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
        d = r.data[l], d instanceof ae ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof $) && d.revert && d.revert(a);
      r._r.forEach(function(c) {
        return c(a, r);
      }), r.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var o = ht.length; o--; )
        ht[o].id === this.id && ht.splice(o, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, n;
})(), zo = /* @__PURE__ */ (function() {
  function n(t) {
    this.contexts = [], this.scope = t, H && H.data.push(this);
  }
  var e = n.prototype;
  return e.add = function(a, i, r) {
    Pe(a) || (a = {
      matches: a
    });
    var o = new ln(0, r || this.scope), s = o.conditions = {}, l, d, c;
    H && !o.selector && (o.selector = H.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = a;
    for (d in a)
      d === "all" ? c = 1 : (l = Ce.matchMedia(a[d]), l && (ht.indexOf(o) < 0 && ht.push(o), (s[d] = l.matches) && (c = 1), l.addListener ? l.addListener(ri) : l.addEventListener("change", ri)));
    return c && i(o, function(u) {
      return o.add(null, u);
    }), this;
  }, e.revert = function(a) {
    this.kill(a || {});
  }, e.kill = function(a) {
    this.contexts.forEach(function(i) {
      return i.kill(a, !0);
    });
  }, n;
})(), ba = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(i) {
      return $r(i);
    });
  },
  timeline: function(e) {
    return new ae(e);
  },
  getTweensOf: function(e, t) {
    return V.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, i) {
    X(e) && (e = xe(e)[0]);
    var r = ct(e || {}).get, o = a ? Lr : Nr;
    return a === "native" && (a = ""), e && (t ? o((de[t] && de[t].get || r)(e, t, a, i)) : function(s, l, d) {
      return o((de[s] && de[s].get || r)(e, s, l, d));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = xe(e), e.length > 1) {
      var i = e.map(function(c) {
        return se.quickSetter(c, t, a);
      }), r = i.length;
      return function(c) {
        for (var u = r; u--; )
          i[u](c);
      };
    }
    e = e[0] || {};
    var o = de[t], s = ct(e), l = s.harness && (s.harness.aliases || {})[t] || t, d = o ? function(c) {
      var u = new o();
      kt._pt = 0, u.init(e, a ? c + a : c, kt, 0, [e]), u.render(1, u), kt._pt && Ci(1, kt);
    } : s.set(e, l);
    return o ? d : function(c) {
      return d(e, l, a ? c + a : c, s, 1);
    };
  },
  quickTo: function(e, t, a) {
    var i, r = se.to(e, ge((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), a || {})), o = function(l, d, c) {
      return r.resetTo(t, l, d, c);
    };
    return o.tween = r, o;
  },
  isTweening: function(e) {
    return V.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = pt(e.ease, Yt.ease)), Oi(Yt, e || {});
  },
  config: function(e) {
    return Oi(he, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, i = e.plugins, r = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !de[s] && !me[s] && $t(t + " effect requires " + s + " plugin.");
    }), Ea[t] = function(s, l, d) {
      return a(xe(s), ge(l || {}, r), d);
    }, o && (ae.prototype[t] = function(s, l, d) {
      return this.add(Ea[t](s, Pe(l) ? l : (d = l) && {}, this), d);
    });
  },
  registerEase: function(e, t) {
    D[e] = pt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? pt(e, t) : D;
  },
  getById: function(e) {
    return V.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new ae(e), i, r;
    for (a.smoothChildTiming = ie(e.smoothChildTiming), V.remove(a), a._dp = 0, a._time = a._tTime = V._time, i = V._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof $ && i.vars.onComplete === i._targets[0])) && Te(a, i, i._start - i._delay), i = r;
    return Te(V, a, 0), a;
  },
  context: function(e, t) {
    return e ? new ln(e, t) : H;
  },
  matchMedia: function(e) {
    return new zo(e);
  },
  matchMediaRefresh: function() {
    return ht.forEach(function(e) {
      var t = e.conditions, a, i;
      for (i in t)
        t[i] && (t[i] = !1, a = 1);
      a && e.revert();
    }) || ri();
  },
  addEventListener: function(e, t) {
    var a = ha[e] || (ha[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = ha[e], i = a && a.indexOf(t);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: fo,
    wrapYoyo: wo,
    distribute: Gr,
    random: Vr,
    snap: Ur,
    normalize: go,
    getUnit: Q,
    clamp: uo,
    splitColor: Xr,
    toArray: xe,
    selector: ti,
    mapRange: jr,
    pipe: ho,
    unitize: mo,
    interpolate: bo,
    shuffle: Hr
  },
  install: Mr,
  effects: Ea,
  ticker: ce,
  updateRoot: ae.updateRoot,
  plugins: de,
  globalTimeline: V,
  core: {
    PropTween: ne,
    globals: Pr,
    Tween: $,
    Timeline: ae,
    Animation: Qt,
    getCache: ct,
    _removeLinkedListItem: ka,
    reverting: function() {
      return J;
    },
    context: function(e) {
      return e && H && (H.data.push(e), e._ctx = H), H;
    },
    suppressOverwrites: function(e) {
      return pi = e;
    }
  }
};
re("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return ba[n] = $[n];
});
ce.add(ae.updateRoot);
kt = ba.to({}, {
  duration: 0
});
var Fo = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, Ho = function(e, t) {
  var a = e._targets, i, r, o;
  for (i in t)
    for (r = a.length; r--; )
      o = e._ptLookup[r][i], o && (o = o.d) && (o._pt && (o = Fo(o, i)), o && o.modifier && o.modifier(t[i], e, a[r], i));
}, Ra = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, o) {
      o._onInit = function(s) {
        var l, d;
        if (X(r) && (l = {}, re(r, function(c) {
          return l[c] = 1;
        }), r = l), t) {
          l = {};
          for (d in r)
            l[d] = t(r[d]);
          r = l;
        }
        Ho(s, r);
      };
    }
  };
}, se = ba.registerPlugin({
  name: "attr",
  init: function(e, t, a, i, r) {
    var o, s, l;
    this.tween = a;
    for (o in t)
      l = e.getAttribute(o) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[o], i, r, 0, 0, o), s.op = o, s.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var a = t._pt; a; )
      J ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var a = t.length; a--; )
      this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1);
  }
}, Ra("roundProps", ai), Ra("modifiers"), Ra("snap", Ur)) || ba;
$.version = ae.version = se.version = "3.15.0";
Er = 1;
mi() && It();
D.Power0;
D.Power1;
D.Power2;
D.Power3;
D.Power4;
D.Linear;
D.Quad;
D.Cubic;
D.Quart;
D.Quint;
D.Strong;
D.Elastic;
D.Back;
D.SteppedEase;
D.Bounce;
D.Sine;
D.Expo;
D.Circ;
var Ui, Ve, Ct, Ai, dt, Vi, Ti, Go = function() {
  return typeof window < "u";
}, Be = {}, st = 180 / Math.PI, At = Math.PI / 180, wt = Math.atan2, Wi = 1e8, Ei = /([A-Z])/g, Uo = /(left|right|width|margin|padding|x)/i, Vo = /[\s,\(]\S/, Me = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ni = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Wo = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, jo = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Yo = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, $o = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, dn = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, cn = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Xo = function(e, t, a) {
  return e.style[t] = a;
}, Jo = function(e, t, a) {
  return e.style.setProperty(t, a);
}, Ko = function(e, t, a) {
  return e._gsap[t] = a;
}, Qo = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, Zo = function(e, t, a, i, r) {
  var o = e._gsap;
  o.scaleX = o.scaleY = a, o.renderTransform(r, o);
}, es = function(e, t, a, i, r) {
  var o = e._gsap;
  o[t] = a, o.renderTransform(r, o);
}, W = "transform", oe = W + "Origin", ts = function n(e, t) {
  var a = this, i = this.target, r = i.style, o = i._gsap;
  if (e in Be && r) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Me[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return a.tfm[s] = Ne(i, s);
      }) : this.tfm[e] = o.x ? o[e] : Ne(i, e), e === oe && (this.tfm.zOrigin = o.zOrigin);
    else
      return Me.transform.split(",").forEach(function(s) {
        return n.call(a, s, t);
      });
    if (this.props.indexOf(W) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(oe, t, "")), e = W;
  }
  (r || t) && this.props.push(e, t, r[e]);
}, un = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, as = function() {
  var e = this.props, t = this.target, a = t.style, i = t._gsap, r, o;
  for (r = 0; r < e.length; r += 3)
    e[r + 1] ? e[r + 1] === 2 ? t[e[r]](e[r + 2]) : t[e[r]] = e[r + 2] : e[r + 2] ? a[e[r]] = e[r + 2] : a.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(Ei, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = Ti(), (!r || !r.isStart) && !a[W] && (un(a), i.zOrigin && a[oe] && (a[oe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, pn = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: as,
    save: ts
  };
  return e._gsap || se.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return a.save(i);
  }), a;
}, hn, oi = function(e, t) {
  var a = Ve.createElementNS ? Ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ve.createElement(e);
  return a && a.style ? a : Ve.createElement(e);
}, pe = function n(e, t, a) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Ei, "-$1").toLowerCase()) || i.getPropertyValue(t) || !a && n(e, Dt(t) || t, 1) || "";
}, ji = "O,Moz,ms,Ms,Webkit".split(","), Dt = function(e, t, a) {
  var i = t || dt, r = i.style, o = 5;
  if (e in r && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ji[o] + e in r); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ji[o] : "") + e;
}, si = function() {
  Go() && window.document && (Ui = window, Ve = Ui.document, Ct = Ve.documentElement, dt = oi("div") || {
    style: {}
  }, oi("div"), W = Dt(W), oe = W + "Origin", dt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", hn = !!Dt("perspective"), Ti = se.core.reverting, Ai = 1);
}, Yi = function(e) {
  var t = e.ownerSVGElement, a = oi("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), r;
  i.style.display = "block", a.appendChild(i), Ct.appendChild(a);
  try {
    r = i.getBBox();
  } catch {
  }
  return a.removeChild(i), Ct.removeChild(a), r;
}, $i = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, mn = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = Yi(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = Yi(e)), t && !t.width && !t.x && !t.y ? {
    x: +$i(e, ["x", "cx", "x1"]) || 0,
    y: +$i(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, gn = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && mn(e));
}, Ke = function(e, t) {
  if (t) {
    var a = e.style, i;
    t in Be && t !== oe && (t = W), a.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(i === "--" ? t : t.replace(Ei, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, We = function(e, t, a, i, r, o) {
  var s = new ne(e._pt, t, a, 0, 1, o ? cn : dn);
  return e._pt = s, s.b = i, s.e = r, e._props.push(a), s;
}, Xi = {
  deg: 1,
  rad: 1,
  turn: 1
}, is = {
  grid: 1,
  flex: 1
}, Qe = function n(e, t, a, i) {
  var r = parseFloat(a) || 0, o = (a + "").trim().substr((r + "").length) || "px", s = dt.style, l = Uo.test(t), d = e.tagName.toLowerCase() === "svg", c = (d ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, p = i === "px", m = i === "%", g, h, f, b;
  if (i === o || !r || Xi[i] || Xi[o])
    return r;
  if (o !== "px" && !p && (r = n(e, t, a, "px")), b = e.getCTM && gn(e), (m || o === "%") && (Be[t] || ~t.indexOf("adius")))
    return g = b ? e.getBBox()[l ? "width" : "height"] : e[c], Y(m ? r / g * u : r / 100 * g);
  if (s[l ? "width" : "height"] = u + (p ? o : i), h = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !d ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Ve || !h.appendChild) && (h = Ve.body), f = h._gsap, f && m && f.width && l && f.time === ce.time && !f.uncache)
    return Y(r / f.width * u);
  if (m && (t === "height" || t === "width")) {
    var _ = e.style[t];
    e.style[t] = u + i, g = e[c], _ ? e.style[t] = _ : Ke(e, t);
  } else
    (m || o === "%") && !is[pe(h, "display")] && (s.position = pe(e, "position")), h === e && (s.position = "static"), h.appendChild(dt), g = dt[c], h.removeChild(dt), s.position = "absolute";
  return l && m && (f = ct(h), f.time = ce.time, f.width = h[c]), Y(p ? g * r / u : g && r ? u / g * r : 0);
}, Ne = function(e, t, a, i) {
  var r;
  return Ai || si(), t in Me && t !== "transform" && (t = Me[t], ~t.indexOf(",") && (t = t.split(",")[0])), Be[t] && t !== "transform" ? (r = ea(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : _a(pe(e, oe)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = ya[t] && ya[t](e, t, a) || pe(e, t) || Dr(e, t) || (t === "opacity" ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? Qe(e, t, r, a) + a : r;
}, rs = function(e, t, a, i) {
  if (!a || a === "none") {
    var r = Dt(t, e, 1), o = r && pe(e, r, 1);
    o && o !== a ? (t = r, a = o) : t === "borderColor" && (a = pe(e, "borderTopColor"));
  }
  var s = new ne(this._pt, e.style, t, 0, 1, on), l = 0, d = 0, c, u, p, m, g, h, f, b, _, y, v, x;
  if (s.b = a, s.e = i, a += "", i += "", i.substring(0, 6) === "var(--" && (i = pe(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = pe(e, t) || i, h ? e.style[t] = h : Ke(e, t)), c = [a, i], Kr(c), a = c[0], i = c[1], p = a.match(vt) || [], x = i.match(vt) || [], x.length) {
    for (; u = vt.exec(i); )
      f = u[0], _ = i.substring(l, u.index), g ? g = (g + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (g = 1), f !== (h = p[d++] || "") && (m = parseFloat(h) || 0, v = h.substr((m + "").length), f.charAt(1) === "=" && (f = St(m, f) + v), b = parseFloat(f), y = f.substr((b + "").length), l = vt.lastIndex - y.length, y || (y = y || he.units[t] || v, l === i.length && (i += y, s.e += y)), v !== y && (m = Qe(e, t, h, y) || 0), s._pt = {
        _next: s._pt,
        p: _ || d === 1 ? _ : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: b - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    s.r = t === "display" && i === "none" ? cn : dn;
  return Tr.test(i) && (s.e = 0), this._pt = s, s;
}, Ji = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ns = function(e) {
  var t = e.split(" "), a = t[0], i = t[1] || "50%";
  return (a === "top" || a === "bottom" || i === "left" || i === "right") && (e = a, a = i, i = e), t[0] = Ji[a] || a, t[1] = Ji[i] || i, t.join(" ");
}, os = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, i = a.style, r = t.u, o = a._gsap, s, l, d;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), d = r.length; --d > -1; )
        s = r[d], Be[s] && (l = 1, s = s === "transformOrigin" ? oe : W), Ke(a, s);
    l && (Ke(a, W), o && (o.svg && a.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", ea(a, 1), o.uncache = 1, un(i)));
  }
}, ya = {
  clearProps: function(e, t, a, i, r) {
    if (r.data !== "isFromStart") {
      var o = e._pt = new ne(e._pt, t, a, 0, 0, os);
      return o.u = i, o.pr = -10, o.tween = r, e._props.push(a), 1;
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
}, Zt = [1, 0, 0, 1, 0, 0], fn = {}, wn = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ki = function(e) {
  var t = pe(e, W);
  return wn(t) ? Zt : t.substr(7).match(Ar).map(Y);
}, Mi = function(e, t) {
  var a = e._gsap || ct(e), i = e.style, r = Ki(e), o, s, l, d;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? Zt : r) : (r === Zt && !e.offsetParent && e !== Ct && !a.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (d = 1, s = e.nextElementSibling, Ct.appendChild(e)), r = Ki(e), l ? i.display = l : Ke(e, "display"), d && (s ? o.insertBefore(e, s) : o ? o.appendChild(e) : Ct.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, li = function(e, t, a, i, r, o) {
  var s = e._gsap, l = r || Mi(e, !0), d = s.xOrigin || 0, c = s.yOrigin || 0, u = s.xOffset || 0, p = s.yOffset || 0, m = l[0], g = l[1], h = l[2], f = l[3], b = l[4], _ = l[5], y = t.split(" "), v = parseFloat(y[0]) || 0, x = parseFloat(y[1]) || 0, T, k, C, S;
  a ? l !== Zt && (k = m * f - g * h) && (C = v * (f / k) + x * (-h / k) + (h * _ - f * b) / k, S = v * (-g / k) + x * (m / k) - (m * _ - g * b) / k, v = C, x = S) : (T = mn(e), v = T.x + (~y[0].indexOf("%") ? v / 100 * T.width : v), x = T.y + (~(y[1] || y[0]).indexOf("%") ? x / 100 * T.height : x)), i || i !== !1 && s.smooth ? (b = v - d, _ = x - c, s.xOffset = u + (b * m + _ * h) - b, s.yOffset = p + (b * g + _ * f) - _) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = x, s.smooth = !!i, s.origin = t, s.originIsAbsolute = !!a, e.style[oe] = "0px 0px", o && (We(o, s, "xOrigin", d, v), We(o, s, "yOrigin", c, x), We(o, s, "xOffset", u, s.xOffset), We(o, s, "yOffset", p, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + x);
}, ea = function(e, t) {
  var a = e._gsap || new Zr(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var i = e.style, r = a.scaleX < 0, o = "px", s = "deg", l = getComputedStyle(e), d = pe(e, oe) || "0", c, u, p, m, g, h, f, b, _, y, v, x, T, k, C, S, E, B, L, I, R, P, G, z, ee, fe, qt, Ot, et, Ni, Ie, tt;
  return c = u = p = h = f = b = _ = y = v = 0, m = g = 1, a.svg = !!(e.getCTM && gn(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[W] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[W] !== "none" ? l[W] : "")), i.scale = i.rotate = i.translate = "none"), k = Mi(e, a.svg), a.svg && (a.uncache ? (ee = e.getBBox(), d = a.xOrigin - ee.x + "px " + (a.yOrigin - ee.y) + "px", z = "") : z = !t && e.getAttribute("data-svg-origin"), li(e, z || d, !!z || a.originIsAbsolute, a.smooth !== !1, k)), x = a.xOrigin || 0, T = a.yOrigin || 0, k !== Zt && (B = k[0], L = k[1], I = k[2], R = k[3], c = P = k[4], u = G = k[5], k.length === 6 ? (m = Math.sqrt(B * B + L * L), g = Math.sqrt(R * R + I * I), h = B || L ? wt(L, B) * st : 0, _ = I || R ? wt(I, R) * st + h : 0, _ && (g *= Math.abs(Math.cos(_ * At))), a.svg && (c -= x - (x * B + T * I), u -= T - (x * L + T * R))) : (tt = k[6], Ni = k[7], qt = k[8], Ot = k[9], et = k[10], Ie = k[11], c = k[12], u = k[13], p = k[14], C = wt(tt, et), f = C * st, C && (S = Math.cos(-C), E = Math.sin(-C), z = P * S + qt * E, ee = G * S + Ot * E, fe = tt * S + et * E, qt = P * -E + qt * S, Ot = G * -E + Ot * S, et = tt * -E + et * S, Ie = Ni * -E + Ie * S, P = z, G = ee, tt = fe), C = wt(-I, et), b = C * st, C && (S = Math.cos(-C), E = Math.sin(-C), z = B * S - qt * E, ee = L * S - Ot * E, fe = I * S - et * E, Ie = R * E + Ie * S, B = z, L = ee, I = fe), C = wt(L, B), h = C * st, C && (S = Math.cos(C), E = Math.sin(C), z = B * S + L * E, ee = P * S + G * E, L = L * S - B * E, G = G * S - P * E, B = z, P = ee), f && Math.abs(f) + Math.abs(h) > 359.9 && (f = h = 0, b = 180 - b), m = Y(Math.sqrt(B * B + L * L + I * I)), g = Y(Math.sqrt(G * G + tt * tt)), C = wt(P, G), _ = Math.abs(C) > 2e-4 ? C * st : 0, v = Ie ? 1 / (Ie < 0 ? -Ie : Ie) : 0), a.svg && (z = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !wn(pe(e, W)), z && e.setAttribute("transform", z))), Math.abs(_) > 90 && Math.abs(_) < 270 && (r ? (m *= -1, _ += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, _ += _ <= 0 ? 180 : -180)), t = t || a.uncache, a.x = c - ((a.xPercent = c && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + o, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + o, a.z = p + o, a.scaleX = Y(m), a.scaleY = Y(g), a.rotation = Y(h) + s, a.rotationX = Y(f) + s, a.rotationY = Y(b) + s, a.skewX = _ + s, a.skewY = y + s, a.transformPerspective = v + o, (a.zOrigin = parseFloat(d.split(" ")[2]) || !t && a.zOrigin || 0) && (i[oe] = _a(d)), a.xOffset = a.yOffset = 0, a.force3D = he.force3D, a.renderTransform = a.svg ? ls : hn ? bn : ss, a.uncache = 0, a;
}, _a = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Na = function(e, t, a) {
  var i = Q(t);
  return Y(parseFloat(t) + parseFloat(Qe(e, "x", a + "px", i))) + i;
}, ss = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, bn(e, t);
}, at = "0deg", Bt = "0px", it = ") ", bn = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, o = a.x, s = a.y, l = a.z, d = a.rotation, c = a.rotationY, u = a.rotationX, p = a.skewX, m = a.skewY, g = a.scaleX, h = a.scaleY, f = a.transformPerspective, b = a.force3D, _ = a.target, y = a.zOrigin, v = "", x = b === "auto" && e && e !== 1 || b === !0;
  if (y && (u !== at || c !== at)) {
    var T = parseFloat(c) * At, k = Math.sin(T), C = Math.cos(T), S;
    T = parseFloat(u) * At, S = Math.cos(T), o = Na(_, o, k * S * -y), s = Na(_, s, -Math.sin(T) * -y), l = Na(_, l, C * S * -y + y);
  }
  f !== Bt && (v += "perspective(" + f + it), (i || r) && (v += "translate(" + i + "%, " + r + "%) "), (x || o !== Bt || s !== Bt || l !== Bt) && (v += l !== Bt || x ? "translate3d(" + o + ", " + s + ", " + l + ") " : "translate(" + o + ", " + s + it), d !== at && (v += "rotate(" + d + it), c !== at && (v += "rotateY(" + c + it), u !== at && (v += "rotateX(" + u + it), (p !== at || m !== at) && (v += "skew(" + p + ", " + m + it), (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + it), _.style[W] = v || "translate(0, 0)";
}, ls = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, o = a.x, s = a.y, l = a.rotation, d = a.skewX, c = a.skewY, u = a.scaleX, p = a.scaleY, m = a.target, g = a.xOrigin, h = a.yOrigin, f = a.xOffset, b = a.yOffset, _ = a.forceCSS, y = parseFloat(o), v = parseFloat(s), x, T, k, C, S;
  l = parseFloat(l), d = parseFloat(d), c = parseFloat(c), c && (c = parseFloat(c), d += c, l += c), l || d ? (l *= At, d *= At, x = Math.cos(l) * u, T = Math.sin(l) * u, k = Math.sin(l - d) * -p, C = Math.cos(l - d) * p, d && (c *= At, S = Math.tan(d - c), S = Math.sqrt(1 + S * S), k *= S, C *= S, c && (S = Math.tan(c), S = Math.sqrt(1 + S * S), x *= S, T *= S)), x = Y(x), T = Y(T), k = Y(k), C = Y(C)) : (x = u, C = p, T = k = 0), (y && !~(o + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (y = Qe(m, "x", o, "px"), v = Qe(m, "y", s, "px")), (g || h || f || b) && (y = Y(y + g - (g * x + h * k) + f), v = Y(v + h - (g * T + h * C) + b)), (i || r) && (S = m.getBBox(), y = Y(y + i / 100 * S.width), v = Y(v + r / 100 * S.height)), S = "matrix(" + x + "," + T + "," + k + "," + C + "," + y + "," + v + ")", m.setAttribute("transform", S), _ && (m.style[W] = S);
}, ds = function(e, t, a, i, r) {
  var o = 360, s = X(r), l = parseFloat(r) * (s && ~r.indexOf("rad") ? st : 1), d = l - i, c = i + d + "deg", u, p;
  return s && (u = r.split("_")[1], u === "short" && (d %= o, d !== d % (o / 2) && (d += d < 0 ? o : -o)), u === "cw" && d < 0 ? d = (d + o * Wi) % o - ~~(d / o) * o : u === "ccw" && d > 0 && (d = (d - o * Wi) % o - ~~(d / o) * o)), e._pt = p = new ne(e._pt, t, a, i, d, Wo), p.e = c, p.u = "deg", e._props.push(a), p;
}, Qi = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, cs = function(e, t, a) {
  var i = Qi({}, a._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", o = a.style, s, l, d, c, u, p, m, g;
  i.svg ? (d = a.getAttribute("transform"), a.setAttribute("transform", ""), o[W] = t, s = ea(a, 1), Ke(a, W), a.setAttribute("transform", d)) : (d = getComputedStyle(a)[W], o[W] = t, s = ea(a, 1), o[W] = d);
  for (l in Be)
    d = i[l], c = s[l], d !== c && r.indexOf(l) < 0 && (m = Q(d), g = Q(c), u = m !== g ? Qe(a, l, d, g) : parseFloat(d), p = parseFloat(c), e._pt = new ne(e._pt, s, l, u, p - u, ni), e._pt.u = g || 0, e._props.push(l));
  Qi(s, i);
};
re("padding,margin,Width,Radius", function(n, e) {
  var t = "Top", a = "Right", i = "Bottom", r = "Left", o = (e < 3 ? [t, a, i, r] : [t + r, t + a, i + a, i + r]).map(function(s) {
    return e < 2 ? n + s : "border" + s + n;
  });
  ya[e > 1 ? "border" + n : n] = function(s, l, d, c, u) {
    var p, m;
    if (arguments.length < 4)
      return p = o.map(function(g) {
        return Ne(s, g, d);
      }), m = p.join(" "), m.split(p[0]).length === 5 ? p[0] : m;
    p = (c + "").split(" "), m = {}, o.forEach(function(g, h) {
      return m[g] = p[h] = p[h] || p[(h - 1) / 2 | 0];
    }), s.init(l, m, u);
  };
});
var yn = {
  name: "css",
  register: si,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, i, r) {
    var o = this._props, s = e.style, l = a.vars.startAt, d, c, u, p, m, g, h, f, b, _, y, v, x, T, k, C, S;
    Ai || si(), this.styles = this.styles || pn(e), C = this.styles.props, this.tween = a;
    for (h in t)
      if (h !== "autoRound" && (c = t[h], !(de[h] && en(h, t, a, i, e, r)))) {
        if (m = typeof c, g = ya[h], m === "function" && (c = c.call(a, i, e, r), m = typeof c), m === "string" && ~c.indexOf("random(") && (c = Jt(c)), g)
          g(this, e, h, c, a) && (k = 1);
        else if (h.substr(0, 2) === "--")
          d = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", $e.lastIndex = 0, $e.test(d) || (f = Q(d), b = Q(c), b ? f !== b && (d = Qe(e, h, d, b) + b) : f && (c += f)), this.add(s, "setProperty", d, c, i, r, 0, 0, h), o.push(h), C.push(h, 0, s[h]);
        else if (m !== "undefined") {
          if (l && h in l ? (d = typeof l[h] == "function" ? l[h].call(a, i, e, r) : l[h], X(d) && ~d.indexOf("random(") && (d = Jt(d)), Q(d + "") || d === "auto" || (d += he.units[h] || Q(Ne(e, h)) || ""), (d + "").charAt(1) === "=" && (d = Ne(e, h))) : d = Ne(e, h), p = parseFloat(d), _ = m === "string" && c.charAt(1) === "=" && c.substr(0, 2), _ && (c = c.substr(2)), u = parseFloat(c), h in Me && (h === "autoAlpha" && (p === 1 && Ne(e, "visibility") === "hidden" && u && (p = 0), C.push("visibility", 0, s.visibility), We(this, s, "visibility", p ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = Me[h], ~h.indexOf(",") && (h = h.split(",")[0]))), y = h in Be, y) {
            if (this.styles.save(h), S = c, m === "string" && c.substring(0, 6) === "var(--") {
              if (c = pe(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = c, c = pe(e, "perspective"), E ? e.style.perspective = E : Ke(e, "perspective");
              }
              u = parseFloat(c);
            }
            if (v || (x = e._gsap, x.renderTransform && !t.parseTransform || ea(e, t.parseTransform), T = t.smoothOrigin !== !1 && x.smooth, v = this._pt = new ne(this._pt, s, W, 0, 1, x.renderTransform, x, 0, -1), v.dep = 1), h === "scale")
              this._pt = new ne(this._pt, x, "scaleY", x.scaleY, (_ ? St(x.scaleY, _ + u) : u) - x.scaleY || 0, ni), this._pt.u = 0, o.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              C.push(oe, 0, s[oe]), c = ns(c), x.svg ? li(e, c, 0, T, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== x.zOrigin && We(this, x, "zOrigin", x.zOrigin, b), We(this, s, h, _a(d), _a(c)));
              continue;
            } else if (h === "svgOrigin") {
              li(e, c, 1, T, 0, this);
              continue;
            } else if (h in fn) {
              ds(this, x, h, p, _ ? St(p, _ + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              We(this, x, "smooth", x.smooth, c);
              continue;
            } else if (h === "force3D") {
              x[h] = c;
              continue;
            } else if (h === "transform") {
              cs(this, c, e);
              continue;
            }
          } else h in s || (h = Dt(h) || h);
          if (y || (u || u === 0) && (p || p === 0) && !Vo.test(c) && h in s)
            f = (d + "").substr((p + "").length), u || (u = 0), b = Q(c) || (h in he.units ? he.units[h] : f), f !== b && (p = Qe(e, h, d, b)), this._pt = new ne(this._pt, y ? x : s, h, p, (_ ? St(p, _ + u) : u) - p, !y && (b === "px" || h === "zIndex") && t.autoRound !== !1 ? $o : ni), this._pt.u = b || 0, y && S !== c ? (this._pt.b = d, this._pt.e = S, this._pt.r = Yo) : f !== b && b !== "%" && (this._pt.b = d, this._pt.r = jo);
          else if (h in s)
            rs.call(this, e, h, d, _ ? _ + c : c);
          else if (h in e)
            this.add(e, h, d || e[h], _ ? _ + c : c, i, r);
          else if (h !== "parseTransform") {
            fi(h, c);
            continue;
          }
          y || (h in s ? C.push(h, 0, s[h]) : typeof e[h] == "function" ? C.push(h, 2, e[h]()) : C.push(h, 1, d || e[h])), o.push(h);
        }
      }
    k && sn(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Ti())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: Ne,
  aliases: Me,
  getSetter: function(e, t, a) {
    var i = Me[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Be && t !== oe && (e._gsap.x || Ne(e, "x")) ? a && Vi === a ? t === "scale" ? Qo : Ko : (Vi = a || {}) && (t === "scale" ? Zo : es) : e.style && !hi(e.style[t]) ? Xo : ~t.indexOf("-") ? Jo : Si(e, t);
  },
  core: {
    _removeProperty: Ke,
    _getMatrix: Mi
  }
};
se.utils.checkPrefix = Dt;
se.core.getStyleSaver = pn;
(function(n, e, t, a) {
  var i = re(n + "," + e + "," + t, function(r) {
    Be[r] = 1;
  });
  re(e, function(r) {
    he.units[r] = "deg", fn[r] = 1;
  }), Me[i[13]] = n + "," + e, re(a, function(r) {
    var o = r.split(":");
    Me[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
re("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  he.units[n] = "px";
});
se.registerPlugin(yn);
var w = se.registerPlugin(yn) || se;
w.core.Tween;
const Ae = "Thinking", Xe = "Show more", mt = "Show less";
function _n(n) {
  return n.map((e, t) => ({
    label: e,
    detail: Lt(e, t),
    disclosure: t === 0 ? Xe : mt
  }));
}
function Lt(n, e) {
  const t = n.toLowerCase();
  return t.includes("source") || t.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : t.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : t.includes("icp") || t.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : t.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : t.includes("career") || t.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : t.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : t.includes("funding") || t.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : t.includes("transcript") || t.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : t.includes("logs") || t.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : t.includes("account") || t.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : e % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
}
function aa(n) {
  return n <= 1 ? "4m 12s" : n <= 3 ? "4m 20s" : "4m 50s";
}
function us(n) {
  const e = n.trim().toLowerCase(), t = e.match(/(\d+(?:\.\d+)?)\s*m/), a = e.match(/(\d+(?:\.\d+)?)\s*s/);
  let i = 0, r = !1;
  if (t && (i += Number(t[1]) * 60, r = !0), a && (i += Number(a[1]), r = !0), !r) {
    const o = Number(e);
    return Number.isFinite(o) ? Math.max(0, o) : null;
  }
  return Number.isFinite(i) ? Math.max(0, i) : null;
}
function ra(n) {
  const e = Math.max(0, Math.floor(n)), t = Math.floor(e / 60), a = e % 60;
  return t > 0 ? `${t}m ${a}s` : `${a}s`;
}
function ps(n, e, t, a = {}) {
  const i = us(t);
  if (i === null) {
    e.textContent = t;
    return;
  }
  if (e.textContent = "0s", a.reducedMotion || i <= 0) {
    e.textContent = ra(i);
    return;
  }
  const r = n.duration();
  if (r <= 0) {
    e.textContent = ra(i);
    return;
  }
  const o = { seconds: 0 };
  n.to(
    o,
    {
      seconds: i,
      duration: r,
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
const N = "https://i.pravatar.cc/96", hs = {
  "andre park": `${N}?img=52`,
  "ava garcia": `${N}?img=46`,
  "chadley dupre": `${N}?img=59`,
  "chandler bree": `${N}?img=11`,
  "clara wong": `${N}?img=32`,
  "david kim": `${N}?img=33`,
  "ellen nelle": `${N}?img=47`,
  "evan brooks": `${N}?img=8`,
  "fatima ali": `${N}?img=45`,
  "jamie chen": `${N}?img=12`,
  "jules meyer": `${N}?img=14`,
  "leo martin": `${N}?img=56`,
  "liam price": `${N}?img=6`,
  "marcus reed": `${N}?img=53`,
  "maya patel": `${N}?img=5`,
  "miles kibble iii": `${N}?img=15`,
  "miles kibbles iii": `${N}?img=15`,
  "mr kibbles iii": `${N}?img=15`,
  "natalie dank": `${N}?img=49`,
  "nina kapoor": `${N}?img=31`,
  "noah singh": `${N}?img=4`,
  "owen lee": `${N}?img=7`,
  "patrick bateman": `${N}?img=68`,
  "priya rao": `${N}?img=21`,
  "rachel cho": `${N}?img=44`,
  "sam hollis": `${N}?img=13`,
  "sara nelson": `${N}?img=41`,
  "zoe carter": `${N}?img=23`
};
function xn(n) {
  return n.trim().toLowerCase().replace(/\s+/g, " ");
}
function ms(n) {
  const e = xn(n).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return e ? `${N}?u=${encodeURIComponent(e)}` : "";
}
function gs(n, e) {
  const t = xn(n), a = e?.trim() || void 0;
  return hs[t] ?? a ?? ms(n);
}
const vn = `
<svg viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="currentColor"/>
  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="currentColor"/>
</svg>`;
function kn(n) {
  const e = document.createElement("template");
  e.innerHTML = vn.trim();
  const t = e.content.firstElementChild;
  return t.classList.add(n), t;
}
const fs = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
<path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
<path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
<path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
<path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
<path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
</svg>`, ws = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="60 90.4 570.02 539.67">
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
</svg>`, bs = [
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
    (n) => `wa-message--${n}`
  )
], ys = 1.28, A = (n) => Number((n * ys).toFixed(3)), _s = [2, 3, 2], te = {
  pressDuration: A(0.09),
  releaseDuration: A(0.2),
  loadingHoldDuration: A(0.78),
  successHoldDuration: A(0.12),
  learningRevealDuration: A(0.34),
  detailSwapDuration: 0.16,
  readyPopUpDuration: 0.12,
  readyPopSettleDuration: 0.22,
  settleHold: A(0.24)
}, Zi = "Learning your style", xs = "Ready to mimic your voice", er = "73 tone & tactic rules defined", La = [
  { detail: "Analyzing vocabulary", progress: 31, duration: 1.05, hold: 0.38 },
  { detail: "Investigating wins", progress: 64, duration: 1.2, hold: 0.46 },
  { detail: "Figuring out your voice", progress: 100, duration: 1.15, hold: 0.76 }
], vs = {
  gmail: sr(fs),
  outlook: sr(ws)
}, ks = [
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
], Ss = /* @__PURE__ */ new Set([5, 8, 10, 16]), Cs = [
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
], As = {
  duration: A(0.44),
  ease: "back.out(1.7)"
}, tr = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, Tt = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, Ts = {
  charsPerSecond: Tt.labelCharsPerSecond,
  minDuration: Tt.minDuration,
  maxDuration: Tt.maxDuration
}, Es = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, ar = {
  detailOffsetY: -4,
  duration: A(0.24)
}, ke = {
  duration: A(0.34),
  returnDuration: A(0.38),
  ease: "power2.inOut"
}, qa = {
  y: -4,
  duration: A(0.26),
  ease: "power2.inOut"
}, Oa = {
  templateHold: A(0.54),
  progressDuration: A(3.9),
  finalHold: A(0.34)
}, we = {
  compactWidth: 96,
  compactHeight: 30,
  collapsedWidth: 0,
  collapsedHeight: 0,
  showDuration: A(0.42),
  hideDuration: A(0.32),
  contentShowDelay: A(0.1),
  contentHideDuration: A(0.1),
  showEase: "expo.out",
  hideEase: "power3.in",
  contentEase: "power2.out",
  threadGap: 44
}, Ms = "left,right,bottom,width,height,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,borderWidth,gap", Ba = {
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderWidth: "",
  gap: ""
}, zt = {
  scrollOutRatio: 0.74,
  minScrollOut: 280,
  duration: A(0.58),
  threadOverlap: "-=0.36"
}, ir = 110, ze = {
  revealDuration: A(0.42),
  revealEase: "power3.inOut",
  followDuration: A(0.24),
  followEase: "power2.out"
}, De = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: A(0.62),
  revealEase: "power3.inOut",
  cardDuration: A(0.28)
}, Ps = [
  ["CRM", "Core Data", "Ad Intelligence"],
  ["Web Intent", "Product Analytics", "SMB Data", "Ecommerce"],
  ["Enrichment", "Company / Fundraising", "Tech Stack"],
  ["Web / SEO", "Relationships", "And more"]
], za = {
  contentWidth: 1881,
  height: 1280
}, Is = 96, rr = ".wa-cursor-file, .wa-file-landing-clone, .wa-csv-drop", Ds = "[data-marketing-data-sources-grid]", nr = "[data-data-table]", Ft = "[data-table-action]", or = "[data-table-page-button]", Rs = "[data-table-page-range]", Fa = {
  offscreenMargin: 96,
  pullInDuration: A(0.38),
  pullInEase: "power3.out"
}, be = {
  duration: A(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8],
  detailStart: 0.42,
  detailSpan: 0.34,
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18
}, Se = {
  tableRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: A(0.24),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  compactRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: A(0.2),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  softRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: A(0.24),
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
      duration: A(0.28),
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
      duration: A(0.24),
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
      duration: A(0.44),
      ease: "back.out(1.35)",
      stagger: 0.16
    }
  },
  waterfallRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: A(0.22),
      ease: "power2.out",
      stagger: 0.045
    },
    position: "-=0.18"
  }
};
class Ns {
  constructor(e) {
    this.root = e, this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.composerContents = Array.from(this.composer.children).filter(
      (t) => t instanceof HTMLElement
    ), this.tableControlTooltip = this.createDataTableFloatingTooltip(), this.chatShell.append(this.tableControlTooltip), this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.addEventListener("click", this.handleDataTableControlClick), this.signupScene = this.required("[data-signup-scene]"), this.signupEmail = this.required("[data-signup-email]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.removeElements("[data-thinking], [data-research-steps], [data-result-grid]"), this.removeElements(rr), this.clearMarketingPanels();
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
    const i = t.closest(nr)?.dataset.dataTable, r = Number(t.dataset.tablePageButton);
    if (!i || !Number.isFinite(r)) return;
    e.preventDefault(), this.activeTablePageTimelines.get(i)?.kill();
    const o = this.dataTablePage(i, r, { updateExpected: !1 });
    this.activeTablePageTimelines.set(i, o), o.eventCallback("onComplete", () => {
      this.activeTablePageTimelines.get(i) === o && this.activeTablePageTimelines.delete(i), this.showTooltipForDataTableControl(t);
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
      duration: A(0.12),
      ease: "power1.out"
    }).call(() => {
      this.status && (this.status.textContent = e);
    }).to(this.status, {
      autoAlpha: 1,
      y: 0,
      duration: A(0.18),
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
      duration: A(0.18),
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
      ...Ba,
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
      paddingBottom: () => Math.max(ir, this.getComposerThreadInsetForFrame(t))
    }, 0).call(() => this.pinThreadToBottom(), void 0, 0).to(this.composer, {
      left: t.left,
      bottom: t.bottom,
      width: t.width,
      height: t.height,
      minHeight: t.height,
      duration: we.showDuration,
      ease: we.showEase,
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
      duration: A(0.18),
      ease: we.contentEase,
      overwrite: "auto"
    }, we.contentShowDelay).call(() => this.pinThreadToBottom()), e;
  }
  hideComposer() {
    const e = this.measureComposerFullFrame(), t = this.getComposerCollapsedFrame(e);
    return w.timeline().set(this.composer, {
      ...Ba,
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
      duration: we.contentHideDuration,
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
      duration: we.hideDuration,
      ease: we.hideEase,
      force3D: !0,
      autoRound: !1,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        w.set(this.composerContents, { visibility: "hidden" }), w.set(this.composer, {
          visibility: "hidden"
        }), w.set(this.thread, { paddingBottom: ir }), this.pinThreadToBottom();
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
      ...Ba
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
    return Math.ceil(i + we.threadGap);
  }
  measureComposerFullFrame() {
    w.set(this.composer, { clearProps: Ms });
    const e = this.chatShell.getBoundingClientRect(), t = this.composer.getBoundingClientRect();
    return {
      left: t.left - e.left,
      bottom: e.bottom - t.bottom,
      width: t.width,
      height: t.height
    };
  }
  getComposerCompactFrame(e) {
    const t = Math.min(we.compactWidth, e.width), a = Math.min(we.compactHeight, e.height);
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  getComposerCollapsedFrame(e) {
    const t = we.collapsedWidth, a = we.collapsedHeight;
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
      duration: zt.duration,
      ease: "power3.inOut"
    }).set(this.signupScene, { pointerEvents: "none" }).fromTo(
      this.thread,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: zt.duration,
        ease: "power3.out"
      },
      zt.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(zt.minScrollOut, Math.round(e * zt.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  prepareForChatHistoryPause() {
    w.killTweensOf(this.tableControlTooltip), this.hideDataTableControlTooltip();
  }
  scrollToLive(e = ze.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = w.to(this.thread, {
      scrollTop: t,
      duration: e,
      ease: ze.followEase,
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
        duration: this.getStreamDuration(e, tr),
        targetForScroll: t
      }),
      tr.startOverlap
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
    return this.revealComponentItems("table", t, ".wa-data-table__row", Se.tableRow);
  }
  dataTablePage(e, t, a = {}) {
    const i = w.timeline(), r = { value: 0 }, o = { value: 0 }, s = a.updateExpected ?? !0, l = {
      canSwitch: !1,
      table: null,
      currentRows: [],
      targetRows: [],
      buttons: [],
      range: null
    };
    return i.to(r, {
      value: 1,
      duration: A(0.14),
      ease: "power1.out",
      onStart: () => {
        l.table = this.findDataTable(e), s && this.expectedDataTablePages.set(e, t), l.currentRows = l.table ? this.getVisibleDataTableRows(l.table) : [], l.targetRows = l.table ? this.queryElements(l.table, `.wa-data-table__row[data-page="${t}"]`) : [], l.buttons = l.table ? this.queryElements(l.table, or) : [], l.targetButton = l.buttons.find((d) => Number(d.dataset.tablePageButton) === t), l.range = l.table?.querySelector(Rs) ?? null, l.canSwitch = !!(l.table && l.targetRows.length && l.table.dataset.activePage !== String(t)), l.canSwitch && w.set(l.currentRows, { autoAlpha: 1, y: 0 });
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
    }).to(o, {
      value: 1,
      duration: A(0.2),
      ease: "power2.out",
      onStart: () => {
        o.value = 0;
      },
      onUpdate: () => {
        if (!l.canSwitch) return;
        const d = o.value, c = this.interpolate(6, 0, d);
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
      const i = this.findDataTable(a), r = Number(i?.dataset.activePage), o = i?.querySelector(`[data-table-page-button="${t}"]`);
      !i || !o || !Number.isFinite(r) || r === t || e.push({
        tableId: a,
        currentPage: r,
        expectedPage: t,
        target: o
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
      const r = this.queryElements(i, Ft);
      r.forEach((l) => {
        const d = l.dataset.tableAction === t && a;
        l.dataset.tooltipVisible = String(d);
      });
      const o = a ? r.find((l) => l.dataset.tableAction === t) : void 0;
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
    const t = this.createEnrichmentPanel(e), a = this.revealComponentItems("enrichment", t, ".wa-waterfall-row", Se.waterfallRow), i = t.querySelector(".wa-thinking__elapsed"), r = t.querySelector(".wa-thinking__glyph");
    return i && this.addThinkingElapsedTimer(a, i, i.dataset.elapsedTarget ?? "4m 20s"), a.call(() => this.setLocalLogoMode(r, "thinking"), void 0, 0), a.call(() => this.setLocalLogoMode(r, "done")), a;
  }
  strategyPlans(e) {
    const t = e.map((s) => this.createStrategyPlan(s)), a = document.createElement("div"), i = t.flatMap((s) => this.queryElements(s, ".wa-strategy-plan__bullets li")), r = this.getLastMessageBody();
    a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((s) => s.id).join(" "), a.append(...t), w.set(i, { autoAlpha: 0, y: 5 });
    const o = this.claimComponentMessage("strategy", a);
    return this.revealPreparedItems(o, t, Se.strategyCard, r).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.24),
        ease: "power2.out",
        stagger: 0.035
      },
      "-=0.22"
    );
  }
  strategyPlanHoverSequence(e) {
    const t = w.timeline(), a = { cards: [] };
    t.call(() => {
      const i = this.root.querySelector(e);
      a.cards = i ? this.queryElements(i, ".wa-strategy-plan") : [];
    });
    for (let i = 0; i < 3; i += 1)
      t.call(() => {
        a.cards.forEach((r, o) => {
          r.toggleAttribute("data-cursor-hover", o === i);
        });
      }).to({}, { duration: A(0.22), ease: "none" });
    return t.call(() => {
      a.cards.forEach((i) => i.removeAttribute("data-cursor-hover"));
    }), t;
  }
  dataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e);
    return this.revealComponentItems("sources", t, ".wa-data-source-card", Se.smallCard);
  }
  marketingDataSourcesGrid(e) {
    const t = this.createMarketingDataSourcesGrid(e), a = this.queryElements(t, ".wa-data-vendor-logo"), i = this.queryElements(t, ".wa-data-source-group"), r = t.querySelector(".wa-data-source-grid__header"), o = this.compactElements(r, ...i, ...a);
    return w.timeline().call(() => {
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
        duration: De.revealDuration,
        ease: De.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: De.threadY,
        autoAlpha: De.threadOpacity,
        duration: De.revealDuration,
        ease: De.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: De.revealDuration,
        ease: De.revealEase
      },
      0.16
    ).to(
      r,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.28),
        ease: "power2.out"
      },
      0.28
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.3),
        ease: "power2.out",
        stagger: 0.04
      },
      0.36
    ).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: De.cardDuration,
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
      Se.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("table", t, ".wa-data-table__row", Se.tableRow);
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
        duration: A(0.28),
        ease: "power2.out",
        stagger: 0.045
      },
      position: "-=0.2"
    });
  }
  connectMailbox(e) {
    const t = this.root.querySelector(
      `[data-mailbox-connection="${this.escapeSelectorValue(e)}"]`
    ), a = t?.querySelector("[data-mailbox-connect]"), i = t?.querySelector("[data-mailbox-learning]"), r = t ? Array.from(t.querySelectorAll("[data-mailbox-thumbprint-path]")) : [], o = t?.querySelector("[data-mailbox-learning-progress]"), s = t?.querySelector(".wa-mailbox-learning__title"), l = t?.querySelector("[data-mailbox-learning-title-text]") ?? s, d = t?.querySelector("[data-mailbox-learning-ready-chevron]"), c = t?.querySelector(".wa-mailbox-learning__detail"), u = t?.querySelector(".wa-mailbox-learning__thumbprint"), p = t ? this.queryElements(t, ".wa-mailbox-connection__signal") : [], m = w.timeline();
    if (!t || !a || !i || !l || !c || !u || !r.length || !o) return m;
    const g = { value: 0 };
    return m.call(() => {
      t.dataset.mailboxState = "loading", a.disabled = !0, a.setAttribute("aria-busy", "true"), a.setAttribute("aria-label", a.dataset.mailboxLoadingLabel ?? "connecting"), i.dataset.mailboxLearningState = "idle", l.textContent = Zi, c.textContent = La[0].detail, w.set(i, { display: "none", autoAlpha: 0, y: 8, scale: 0.992 }), this.updateMailboxThumbprintFill(r, 0), w.set(o, { scaleX: 0, transformOrigin: "left center" }), w.set(u, { scale: 1, transformOrigin: "center center" }), w.set(this.compactElements(d), { autoAlpha: 0, y: -1, scale: 0.9 });
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
      this.compactElements(l, c),
      { autoAlpha: 0, y: 5 },
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.22),
        ease: "power2.out",
        stagger: 0.04
      },
      "<+=0.07"
    ), La.forEach((h, f) => {
      f > 0 && m.to(c, {
        autoAlpha: 0,
        y: -3,
        duration: te.detailSwapDuration,
        ease: "power1.in"
      }).call(() => {
        c.textContent = h.detail;
      }).fromTo(
        c,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: te.detailSwapDuration,
          ease: "power2.out"
        }
      ), m.to(
        g,
        {
          value: h.progress,
          duration: h.duration,
          ease: "power2.inOut",
          onUpdate: () => this.updateMailboxThumbprintFill(r, g.value)
        },
        f === 0 ? "-=0.04" : void 0
      ).to(
        o,
        {
          scaleX: h.progress / 100,
          duration: h.duration,
          ease: "power2.inOut"
        },
        "<"
      ).to({}, { duration: h.hold });
    }), m.to(c, {
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
      i.dataset.mailboxLearningState = "ready", l.textContent = xs, c.textContent = i.dataset.mailboxLearningReadyDetail ?? er;
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
      c,
      { autoAlpha: 0, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: te.detailSwapDuration,
        ease: "power2.out"
      },
      "<+=0.03"
    ).fromTo(
      this.compactElements(d),
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
    }), p.length && m.to(
      p,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.18),
        ease: "power2.out",
        stagger: 0.035
      },
      "<+=0.38"
    ), m.to({}, { duration: te.settleHold }), m;
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
        duration: A(0.32),
        ease: "power2.out",
        stagger: 0.05
      },
      position: "-=0.2"
    });
  }
  swipePersonalizationCard(e, t, a) {
    const i = this.root.querySelector(
      `[data-personalization-swipe-game="${this.escapeSelectorValue(e)}"]`
    ), r = i?.querySelector(`[data-swipe-card="${this.escapeSelectorValue(t)}"]`), o = this.getSwipeCards(i), s = r ? o.indexOf(r) : -1, l = o[s + 1], d = a === "use" ? 1 : -1, c = i?.querySelector(`[data-swipe-action="${a}"]`), u = i?.querySelector("[data-swipe-complete]"), p = i?.querySelector(".wa-swipe-game__actions"), m = w.timeline();
    return !i || !r || s < 0 || (m.call(() => {
      i.dataset.swipeDecision = a, c && (c.dataset.active = "true");
    }).to(
      c ?? {},
      {
        scale: 0.92,
        duration: A(0.08),
        ease: "power2.out"
      },
      0
    ).to(
      c ?? {},
      {
        scale: 1,
        duration: A(0.18),
        ease: "back.out(2)"
      },
      A(0.1)
    ).to(
      r,
      {
        x: d * 520,
        y: s % 2 === 0 ? -28 : 24,
        rotation: d * (16 + s * 2),
        autoAlpha: 0,
        duration: A(0.5),
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
        duration: A(0.28),
        ease: "power2.out",
        force3D: !0
      },
      "-=0.2"
    ) : u && p && m.to(
      p,
      {
        autoAlpha: 0,
        y: 8,
        duration: A(0.18),
        ease: "power2.out"
      },
      "-=0.16"
    ).to(
      u,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: A(0.28),
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
      Se.stackCard
    );
  }
  sequenceBuildThinking(e) {
    const t = this.createSequenceThinkingStep(e.templateLabel, e.template, 0), a = e.tracks.map(
      (u, p) => this.createSequenceThinkingStep(u.label, u.detail, p + 1, e.total)
    ), i = [t, ...a], r = this.getThinkingElapsed(3), o = this.claimThinkingMessage(i, r), s = { value: 1 }, l = a.map((u) => ({
      label: u.querySelector(".wa-sequence-thinking-progress__count"),
      bar: u.querySelector(".wa-sequence-thinking-progress__bar span")
    })), d = l.flatMap((u) => u.bar ? [u.bar] : []);
    o.message.querySelector(".wa-thinking-block").dataset.sequenceThinking = e.id;
    const c = w.timeline().call(() => {
      this.prepareThinkingMessage(o, i, 10), w.set(d, {
        scaleX: 1 / Math.max(1, e.total),
        transformOrigin: "left center"
      });
    }).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, 0.24)).call(() => {
      t.dataset.stepState = "current", w.set(t, { display: "grid" });
    }).add(this.moveThinkingLogoToStep(o, t), "<");
    return this.addThinkingStepReveal(c, t, { position: "<" }), c.to({}, { duration: Oa.templateHold }).add(this.foldThinkingStep(t)).call(() => {
      a.forEach((u) => {
        u.dataset.stepState = "current", w.set(u, { display: "grid" });
      });
    }, void 0, "+=0.1").add(this.moveThinkingLogoToStep(o, a[0]), "<").to(a, {
      autoAlpha: 1,
      y: 0,
      duration: A(0.3),
      ease: "power2.out",
      stagger: 0.04
    }, "<"), this.addThinkingStepStreams(c, a), c.to(s, {
      value: e.total,
      duration: Oa.progressDuration,
      ease: "power1.inOut",
      onUpdate: () => {
        const u = Math.max(1, Math.round(s.value)), p = u / Math.max(1, e.total);
        l.forEach(({ label: m, bar: g }) => {
          m && (m.textContent = `${u}/${e.total}`), g && w.set(g, { scaleX: p });
        }), this.requestMessageScroll(o.message);
      }
    }, "+=0.14").to({}, { duration: Oa.finalHold }), a.forEach((u, p) => {
      c.add(this.foldThinkingStep(u), p === 0 ? void 0 : "<");
    }), c.add(this.collapseThinkingToHeader(o, i)), this.addThinkingElapsedTimer(c, o.elapsed, r), c;
  }
  sequencePerson(e, t) {
    const a = this.findSequenceEngagement(e), i = w.timeline();
    if (!a) return i;
    const r = this.queryElements(a, "[data-sequence-card]"), o = this.queryElements(a, "[data-sequence-person-button]"), s = a.querySelector("[data-sequence-count]"), l = this.getSequenceDisplayCard(a), d = r.find((p) => Number(p.dataset.sequenceIndex) === t), c = Number(a.dataset.activeSequenceIndex ?? "0");
    if (!d || !l || c === t)
      return this.setActiveSequencePerson(a, t), i;
    const u = this.getSequenceTransitionTargets(a, l);
    return i.to(u, {
      autoAlpha: 0,
      y: -3,
      duration: A(0.14),
      ease: "power2.in",
      stagger: 0.012
    }).call(() => {
      r.forEach((p) => {
        const m = p === l;
        p.dataset.active = String(m), p.style.display = m ? "grid" : "none";
      }), a.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(a, l, d, t), o.forEach((p) => {
        p.dataset.currentIndex = String(t);
      }), s && (s.textContent = this.getSequenceCountLabel(t, a.dataset.peopleCount ?? "")), this.updateSequencePersonIdentity(a, t), w.set(u, { y: 4 });
    }).to(u, {
      autoAlpha: 1,
      y: 0,
      duration: A(0.24),
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
  prepareCursorFile(e, t, a = "CSV", i = []) {
    const r = this.createCursorFile(e, a, i);
    let o = null, s = { x: 0, y: 0 };
    const l = () => {
      o?.(), o = null, w.killTweensOf(s);
    };
    return this.registerTransientElement(r, () => {
      l();
    }), {
      el: r,
      startFollow: () => w.timeline().call(() => {
        o?.();
        const d = this.getCursorFileEntryOffset(r, t);
        s.x = d.x, s.y = d.y, o = this.followCursorWithFile(r, t, s);
      }).to(s, {
        x: 0,
        y: 0,
        duration: Fa.pullInDuration,
        ease: Fa.pullInEase
      }, 0).to(r, {
        autoAlpha: 1,
        scale: 1,
        duration: A(0.24),
        ease: "back.out(1.9)"
      }, 0.04),
      stopFollow: () => w.timeline().call(l).to(r, {
        autoAlpha: 0,
        scale: 0.92,
        duration: A(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (d, c = "CSV uploaded") => w.timeline().call(l).add(this.uploadedFileMessageFromCursorFile(r, d, c)),
      landAsUploadedFiles: (d) => w.timeline().call(l).add(this.uploadedFilesMessageFromCursorFile(r, d))
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
      duration: A(0.26),
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
      ...Se.compactRow,
      from: { ...Se.compactRow.from, scale: 0.99 },
      to: { ...Se.compactRow.to, scale: 1 },
      position: "-=0.24"
    });
  }
  uploadedFilesMessageFromCursorFile(e, t) {
    const a = this.createUploadedFiles(t), i = this.claimUserComponentMessage("file", a), r = this.queryElements(a, ".wa-uploaded-file"), o = this.queryElements(a, ".wa-uploaded-files__summary");
    return this.revealDroppedFilesMessage(e, i, r, o);
  }
  pulse(e) {
    const t = typeof e == "string" ? this.root.querySelector(e) : e, a = w.timeline();
    return t && a.to(t, {
      scale: 1.025,
      duration: A(0.14),
      ease: "power2.out"
    }).to(t, {
      scale: 1,
      duration: A(0.28),
      ease: "elastic.out(1, 0.55)"
    }), a;
  }
  revealDroppedFilesMessage(e, t, a, i = []) {
    const r = [...a, ...i];
    let o = [];
    const s = { value: 0 };
    let l = 0;
    return !a.length || !e.isConnected ? this.revealMessageWithChildren(t, r, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: A(0.24),
      ease: "power2.out",
      stagger: be.stagger
    }) : (w.set(r, { autoAlpha: 0, y: 0, scale: 1 }), w.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, t.style.display = "grid", w.set(t, {
        opacity: 1,
        visibility: "hidden",
        y: 0,
        scale: 1,
        transformOrigin: "right center"
      }), o = this.createFileLandingClones(e, a), w.set(e, { autoAlpha: 0 }), l = this.getMessageScrollTarget(t);
    }).to(
      this.thread,
      {
        scrollTop: () => l,
        duration: be.duration,
        ease: be.ease,
        overwrite: "auto"
      },
      0
    ).to(
      s,
      {
        value: 1,
        duration: be.duration,
        ease: be.ease,
        onUpdate: () => this.renderFileLandingClones(o, s.value)
      },
      0
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: A(0.16),
        ease: "power1.out",
        stagger: be.stagger
      },
      `-=${A(0.16)}`
    ).call(() => {
      this.renderFileLandingClones(o, 1), w.set(r, { autoAlpha: 1, y: 0, scale: 1 }), w.set(t, { opacity: 1, visibility: "visible" }), o.forEach((d) => d.el.remove()), e.remove(), this.animateMessageScrollIntoView(t);
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e), i = this.chatBody;
    return t.map((r, o) => {
      const s = a[Math.min(o, a.length - 1)], l = s.getBoundingClientRect(), d = r.getBoundingClientRect(), c = this.getElementLocalRect(l, i), u = r.cloneNode(!0), p = this.getCursorFileCardRotation(o, a.length), m = window.getComputedStyle(s), g = window.getComputedStyle(r), h = this.parseCssColor(m.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 }, f = this.parseCssColor(g.backgroundColor) ?? h, b = this.parseCssColor(m.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 }, _ = this.parseCssColor(g.borderTopColor) ?? b, y = this.queryElements(u, ".wa-uploaded-file__body span");
      return u.classList.add("wa-file-landing-clone"), u.dataset.fileLandingClone = "", i.append(u), w.set(u, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: d.width,
        height: d.height,
        x: c.left,
        y: c.top,
        scaleX: 1,
        scaleY: 1,
        rotation: p,
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1,
        visibility: "visible",
        backgroundColor: this.formatRgba(h),
        borderColor: this.formatRgba(b),
        borderStyle: m.borderTopStyle === "none" ? "solid" : m.borderTopStyle,
        borderWidth: m.borderTopWidth || "1px",
        boxShadow: this.getFileLandingShadow(0)
      }), w.set(y, { autoAlpha: 0, y: -3 }), {
        el: u,
        target: r,
        startX: c.left,
        startY: c.top,
        startRotation: p,
        startBackground: h,
        endBackground: f,
        startBorderColor: b,
        endBorderColor: _,
        detailEls: y,
        setX: w.quickSetter(u, "x", "px"),
        setY: w.quickSetter(u, "y", "px"),
        setRotation: w.quickSetter(u, "rotation", "deg"),
        setBackgroundColor: w.quickSetter(u, "backgroundColor"),
        setBorderColor: w.quickSetter(u, "borderColor")
      };
    });
  }
  renderFileLandingClones(e, t) {
    const a = this.chatBody.getBoundingClientRect();
    for (const i of e) {
      const r = i.target.getBoundingClientRect(), o = r.left - a.left, s = r.top - a.top, l = Sn(
        (t - be.detailStart) / be.detailSpan
      );
      if (i.setX(this.interpolate(i.startX, o, t)), i.setY(this.interpolate(i.startY, s, t)), i.setRotation(this.interpolate(i.startRotation, 0, t)), i.setBackgroundColor(this.interpolateRgba(i.startBackground, i.endBackground, t)), i.setBorderColor(this.interpolateRgba(i.startBorderColor, i.endBorderColor, t)), i.el.style.boxShadow = this.getFileLandingShadow(t), i.detailEls.length) {
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
    return t > 1 ? be.rotations[e] ?? 0 : 0;
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
    return `0 ${this.interpolate(be.shadowY, 0, e).toFixed(2)}px ${this.interpolate(
      be.shadowBlur,
      0,
      e
    ).toFixed(2)}px rgba(23, 23, 20, ${(be.shadowAlpha * t).toFixed(3)})`;
  }
  revealMessageWithChildren(e, t, a, i = "-=0.22", r = null) {
    return w.timeline().add(this.revealMessage(e, r)).to(t, a, i);
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
  revealPreparedItems(e, t, a, i = null) {
    return t.length && w.set(t, { ...a.from }), this.revealMessageWithChildren(e, t, { ...a.to }, a.position, i).call(
      () => this.animateMessageScrollIntoView(e, ze.followDuration, i),
      void 0,
      "+=0.02"
    );
  }
  revealMessage(e, t = null) {
    let a = 0;
    return w.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, e.style.display = "grid", this.composerVisible && this.pinThreadToBottom(), a = this.getMessageScrollTarget(e, t);
    }).to(
      this.thread,
      {
        scrollTop: () => a,
        duration: ze.revealDuration,
        ease: ze.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...As
    }, 0.04);
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
    const i = this.messageIndex, r = this.messagePool[i] ?? this.createMessage(i), o = this.getMessageBody(r);
    return this.messageIndex += 1, r.dataset.messageRole = e, r.dataset.messageId = `${t}-${i}`, this.resetMessageClasses(r), r.classList.toggle("wa-message--first-active", i === 0), r.style.display = "none", delete o.dataset.streaming, o.replaceChildren(), this.thread.append(r), w.set(r, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: a
    }), { message: r, body: o, index: i };
  }
  resetMessageClasses(e) {
    e.classList.remove(...bs), e.classList.remove("wa-message--first-active");
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
  createCursorFile(e, t = "CSV", a = []) {
    const i = document.createElement("div");
    i.className = "wa-cursor-file", i.setAttribute("aria-hidden", "true");
    const r = this.getCursorFileStackCount(e, a);
    return r > 1 ? (i.classList.add("wa-cursor-file--stack"), i.append(...this.createCursorFileStack(e, t, r, a))) : i.append(this.createCursorFileCard(e, t)), this.root.append(i), w.set(i, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 }), i;
  }
  followCursorWithFile(e, t, a) {
    const i = e.offsetWidth || 154, r = e.offsetHeight || 42, o = w.quickSetter(e, "x", "px"), s = w.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, d = () => {
      const c = t.readPosition(), u = c.x - i * 0.5 + a.x, p = c.y - r * 0.5 + a.y;
      u !== l.x && (l.x = u, o(u)), p !== l.y && (l.y = p, s(p));
    };
    return d(), w.ticker.add(d), () => w.ticker.remove(d);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, i = t.readPosition(), r = this.root.getBoundingClientRect().width || window.innerWidth, o = i.x + a * 0.5, s = r + Fa.offscreenMargin;
    return {
      x: Math.max(0, s - o),
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
    return i.length ? i.slice(0, a).map((r) => ({
      name: r.name,
      type: r.type
    })) : e.toLowerCase().includes("context") ? [
      { name: "battlecards.pdf", type: "PDF" },
      { name: "icp-context.md", type: "MD" },
      { name: "voice-and-tone.docx", type: "DOC" },
      { name: "outbound-playbook.pdf", type: "PDF" }
    ].slice(0, a) : Array.from({ length: a }, (r, o) => ({
      name: o === 0 ? e : `File ${o + 1}`,
      type: t
    }));
  }
  createCursorFileCard(e, t) {
    const a = this.getFileDisplayType(e, t), i = document.createElement("span");
    i.className = "wa-cursor-file__card", i.dataset.fileTone = this.getFileTone(a);
    const r = document.createElement("span");
    r.className = "wa-cursor-file__icon", r.textContent = a;
    const o = document.createElement("span");
    return o.className = "wa-cursor-file__name", o.textContent = e, i.append(r, o), i;
  }
  createUploadedFile(e, t, a) {
    const i = this.getFileDisplayType(e, a), r = document.createElement("div");
    r.className = "wa-uploaded-file", r.dataset.fileTone = this.getFileTone(i);
    const o = document.createElement("span");
    o.className = "wa-uploaded-file__icon", o.textContent = i;
    const s = document.createElement("span");
    s.className = "wa-uploaded-file__body";
    const l = document.createElement("strong");
    l.textContent = e;
    const d = document.createElement("span");
    return d.textContent = t, s.append(l, d), r.append(o, s), r;
  }
  createUploadedFiles(e) {
    const t = document.createElement("div");
    t.className = "wa-uploaded-files", t.dataset.uploadedFileCount = String(e.length);
    const a = document.createElement("div");
    return a.className = "wa-uploaded-files__list", e.forEach((i) => {
      const r = this.createUploadedFile(i.name, i.detail, i.type);
      a.append(r);
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
    return this.streamThinkingChild(e, ".wa-thinking__title", Es);
  }
  streamThinkingStepLabel(e) {
    return this.streamThinkingChild(e, ".wa-research-step__label", Ts);
  }
  streamThinkingStepDetail(e) {
    return this.streamThinkingChild(e, ".wa-research-step__detail", Tt);
  }
  streamThinkingChild(e, t, a) {
    const i = e.querySelector(t), r = i?.dataset.fullText ?? i?.textContent ?? "";
    return !i || !r ? w.timeline() : this.streamText(i, r, {
      duration: this.getStreamDuration(r, a),
      targetForScroll: this.getMessageScrollTargetElement(e)
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
        const o = Math.round(i.count);
        o !== r && (r = o, e.textContent = t.slice(0, o), this.requestMessageScroll(a.targetForScroll));
      }
    }).call(() => {
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, ze.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-sequence-thinking-progress, .wa-research-step__chevron"
    );
    return w.timeline().to(t, {
      autoAlpha: 0,
      y: ar.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: ar.duration,
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
    }), w.set(e.header, { autoAlpha: 0, y: 5 }), w.set(e.traveler, { autoAlpha: 0, x: 0, y: 0 }), w.set(e.steps, { display: "grid", autoAlpha: 1, y: 0 }), e.title.dataset.thinkingActive = "true", this.resetThinkingGuide(e), w.set(t, { autoAlpha: 0, y: a, display: "none" });
  }
  revealThinkingHeader(e, t) {
    return w.timeline().to(e.header, {
      autoAlpha: 1,
      y: 0,
      duration: A(t),
      ease: "power2.out"
    }).call(() => this.snapThinkingLogoTo(e, e.headerGlyph)).to(e.traveler, {
      autoAlpha: 1,
      duration: A(0.12),
      ease: "power2.out"
    }, "<").add(this.streamThinkingHeader(e.header), "-=0.08");
  }
  addThinkingStepReveal(e, t, a = {}) {
    return e.to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.26),
        ease: "power2.out"
      },
      a.position ?? "<"
    ).add(this.streamThinkingStepLabel(t), Tt.startOverlap).add(this.streamThinkingStepDetail(t), "-=0.02");
  }
  createThinkingStepReveal(e) {
    return this.addThinkingStepReveal(w.timeline(), e, { position: 0 });
  }
  addThinkingStepStreams(e, t) {
    t.forEach((a, i) => {
      e.add(this.streamThinkingStepLabel(a), i === 0 ? Tt.startOverlap : "<");
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
    const r = (e.message.querySelector(".wa-thinking-block") ?? e.message).getBoundingClientRect(), o = t.getBoundingClientRect(), s = e.traveler.offsetWidth || e.headerGlyph.offsetWidth || 18, l = e.traveler.offsetHeight || e.headerGlyph.offsetHeight || 11, d = a && Number(w.getProperty(a, "x")) || 0, c = a && Number(w.getProperty(a, "y")) || 0;
    return {
      x: o.left - r.left + (o.width - s) / 2 - d,
      y: o.top - r.top + (o.height - l) / 2 - c
    };
  }
  snapThinkingLogoTo(e, t) {
    const a = this.getThinkingLogoTargetPosition(e, t);
    w.set(e.traveler, a);
  }
  moveThinkingLogoTo(e, t, a = ke.duration, i) {
    return w.timeline().to(e.traveler, {
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
    const i = e.steps.getBoundingClientRect(), r = t.getBoundingClientRect(), o = a && Number(w.getProperty(a, "y")) || 0, s = r.top - i.top + r.height / 2 - o;
    return Math.max(this.getThinkingGuideStart(e), s);
  }
  moveThinkingGuideTo(e, t, a = ke.duration, i) {
    return w.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideTargetPosition(e, t, i)}px`,
      duration: a,
      ease: ke.ease,
      overwrite: "auto"
    });
  }
  moveThinkingGuideToStart(e, t = ke.returnDuration) {
    return w.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideStart(e)}px`,
      duration: t,
      ease: ke.ease,
      overwrite: "auto"
    });
  }
  moveThinkingLogoToStep(e, t) {
    const a = t?.querySelector(".wa-research-step__marker");
    return a ? w.timeline().add(this.moveThinkingLogoTo(e, a, ke.duration, t), 0).add(this.moveThinkingGuideTo(e, a, ke.duration, t), 0) : w.timeline();
  }
  collapseThinkingToHeader(e, t) {
    return w.timeline().call(() => {
      this.markThinkingStepsComplete(t), this.setLocalLogoMode(e.traveler, "done"), w.set(e.steps, {
        height: e.steps.offsetHeight,
        overflow: "hidden"
      });
    }).add(this.moveThinkingLogoTo(e, e.headerGlyph, ke.returnDuration), 0).add(this.moveThinkingGuideToStart(e, ke.returnDuration), 0).to(e.steps, {
      autoAlpha: 0,
      y: qa.y,
      height: 0,
      duration: qa.duration,
      ease: qa.ease,
      onComplete: () => this.setThinkingHeaderCollapsed(e),
      onReverseComplete: () => this.setThinkingHeaderActive(e)
    }, 0).call(() => {
      w.set(e.steps, {
        display: "none",
        height: "",
        overflow: "",
        y: 0
      }), this.animateMessageScrollIntoView(e.message);
    });
  }
  getActiveThinkingTitle(e = Ae) {
    const t = e.trim() || Ae;
    return /^thinking(?:\.\.\.)?$/i.test(t) ? "Thinking..." : t;
  }
  setThinkingHeaderActive(e) {
    const t = this.getActiveThinkingTitle(e.title.dataset.activeText);
    e.title.dataset.fullText = t, e.title.textContent = t, e.title.dataset.thinkingActive = "true", delete e.title.dataset.streaming, w.set(e.elapsed, { display: "", autoAlpha: 1 });
  }
  setThinkingHeaderCollapsed(e) {
    const t = e.elapsed.dataset.elapsedTarget || e.elapsed.textContent?.trim() || "", a = t ? `Thought for ${t}` : "Thought";
    e.title.dataset.fullText = a, e.title.textContent = a, delete e.title.dataset.thinkingActive, delete e.title.dataset.streaming, w.set(e.elapsed, { display: "none" });
  }
  runThinkingSequence(e, t) {
    const a = w.timeline(), i = e.items.map((s, l) => this.createThinkingStep(s, l)), r = e.elapsed ?? this.getThinkingElapsed(e.items.length), o = this.claimThinkingMessage(i, r, e.title);
    return a.call(() => this.prepareThinkingMessage(o, i, t.itemStartY)).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, t.headerDuration)), e.items.forEach((s, l) => {
      const d = i[l], c = l === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(i, l), void 0, c).add(this.moveThinkingLogoToStep(o, d), "<").add(this.createThinkingStepReveal(d), "<").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(d));
    }), a.add(this.collapseThinkingToHeader(o, i), `+=${t.finalHold}`), this.addThinkingElapsedTimer(a, o.elapsed, r), a;
  }
  activateThinkingStep(e, t) {
    e.forEach((a, i) => {
      i > t && (a.dataset.stepState = "pending", w.set(a, { display: "none" })), i === t && (a.dataset.stepState = "current", w.set(a, { display: "grid" }));
    });
  }
  getStreamDuration(e, t) {
    return this.prefersReducedMotion ? 0.01 : Math.min(t.maxDuration, Math.max(t.minDuration, e.length / t.charsPerSecond));
  }
  claimThinkingMessage(e, t, a = Ae) {
    const i = document.createElement("div");
    i.className = "wa-thinking-block";
    const r = document.createElement("div");
    r.className = "wa-thinking";
    const o = this.createThinkingLogo();
    o.dataset.logoRole = "shadow";
    const s = this.createThinkingLogo("wa-thinking-logo-traveler"), l = document.createElement("span"), d = this.getActiveThinkingTitle(a);
    l.className = "wa-thinking__title", l.dataset.activeText = a, l.dataset.fullText = d, l.dataset.thinkingActive = "true", l.textContent = "";
    const c = document.createElement("span");
    c.className = "wa-thinking__elapsed", c.dataset.elapsedTarget = t, c.textContent = "0s";
    const u = document.createElement("div");
    return u.className = "wa-research-steps", u.dataset.researchSteps = "", u.append(...e), r.append(o, l, c), i.append(r, u, s), {
      message: this.claimComponentMessage("thinking", i),
      header: r,
      headerGlyph: o,
      title: l,
      traveler: s,
      elapsed: c,
      steps: u
    };
  }
  addThinkingElapsedTimer(e, t, a) {
    ps(e, t, a, { reducedMotion: this.prefersReducedMotion });
  }
  createThinkingLogo(e = "wa-thinking__glyph") {
    const t = document.createElement("span");
    return t.className = e, t.dataset.logoMode = "thinking", t.setAttribute("aria-hidden", "true"), t.append(kn("wa-thinking__logo-mark")), t;
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
    const r = document.createElement("span");
    r.className = "wa-research-step__body";
    const o = document.createElement("span");
    o.className = "wa-research-step__label-row";
    const s = document.createElement("span");
    s.className = "wa-research-step__label", s.dataset.fullText = e.label, s.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-research-step__detail", l.dataset.fullText = e.detail, l.textContent = "";
    const d = document.createElement("span");
    return d.className = "wa-research-step__chevron", d.setAttribute("aria-hidden", "true"), o.append(s, d), r.append(o, l), a.append(i, r), a;
  }
  getThinkingDetail(e, t) {
    return Lt(e, t);
  }
  getThinkingElapsed(e) {
    return aa(e);
  }
  normalizeThinkingInput(e) {
    if (this.isThinkingStateConfig(e)) {
      const a = e.items.map((i, r) => this.normalizeThinkingItem(i, r));
      return {
        title: e.title || Ae,
        elapsed: e.elapsed,
        items: a.length ? a : [this.normalizeThinkingItem(Ae, 0)]
      };
    }
    const t = (Array.isArray(e) ? e : [e]).map(
      (a, i) => this.normalizeThinkingItem(a, i)
    );
    return {
      title: Ae,
      items: t.length ? t : [this.normalizeThinkingItem(Ae, 0)]
    };
  }
  normalizeThinkingItem(e, t) {
    const a = typeof e == "string" ? e : e.label;
    return {
      label: a,
      detail: typeof e == "string" ? this.getThinkingDetail(a, t) : e.detail || this.getThinkingDetail(a, t),
      disclosure: typeof e == "string" ? t === 0 ? Xe : mt : e.disclosure || (t === 0 ? Xe : mt)
    };
  }
  isThinkingStateConfig(e) {
    return !!(e && typeof e == "object" && !Array.isArray(e) && "items" in e);
  }
  createSectionHeader(e, t, a, i) {
    const r = document.createElement("div");
    r.className = `${e}__header`;
    const o = document.createElement("h3");
    if (o.className = `${e}__title`, o.textContent = t, r.append(o), i && r.append(i), a) {
      const s = document.createElement("p");
      s.className = `${e}__subtitle`, s.textContent = a, r.append(s);
    }
    return r;
  }
  claimCard(e) {
    const t = this.cardIndex, a = this.cardPool[t] ?? this.createCard(t), i = a.querySelector("[data-result-kicker]"), r = a.querySelector("[data-result-title]"), o = a.querySelector("[data-result-body]"), s = a.querySelector("[data-result-rows]"), l = a.querySelector("[data-result-actions]");
    return this.cardIndex += 1, a.dataset.resultCard = e.id, a.style.display = "none", i && (i.textContent = e.kicker ?? "Result"), r && (r.textContent = e.title), o && (o.textContent = e.body ?? ""), s?.replaceChildren(
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
    t.className = "wa-data-table", t.dataset.dataTable = e.id, t.dataset.tableVariant = e.variant ?? "default", t.dataset.columnCount = String(e.columns.length), t.dataset.activePage = String(i), e.scrollAlign && (t.dataset.scrollAlign = e.scrollAlign), this.expectedDataTablePages.set(e.id, i), t.style.setProperty(
      "--wa-data-table-columns",
      e.columns.map((d) => d.width ?? "minmax(0, 1fr)").join(" ")
    );
    const r = document.createElement("div");
    r.className = "wa-data-table__header";
    const o = document.createElement("div");
    o.className = "wa-data-table__meta", o.textContent = e.eyebrow ?? "Data marketplace";
    const s = document.createElement("h3");
    if (s.className = "wa-data-table__title", s.textContent = e.title, r.append(o, s), e.count) {
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
    const o = document.createElement("div");
    o.className = "wa-data-table__row", o.dataset.tableRow = e;
    const s = e === "header";
    s && (o.dataset.header = "true"), !s && a.source && (o.dataset.source = a.source), !s && r !== void 0 && (o.dataset.page = String(r));
    for (const l of t) {
      const d = document.createElement(s ? "strong" : "span");
      if (d.className = "wa-data-table__cell", d.dataset.columnKey = l.key, s)
        d.textContent = l.label;
      else if (l.key === "name" || l.key === "contact")
        d.append(this.createDataTablePerson(a, a[l.key] ?? ""));
      else if (l.key === "mutualConnection")
        d.append(this.createDataTablePerson(a, a[l.key] ?? "", {
          detailKey: "mutualConnectionDetail",
          avatarToneKey: "mutualConnectionAvatarTone",
          avatarUrlKey: "mutualConnectionAvatarUrl",
          avatarKey: "mutualConnectionAvatar",
          sourceKey: "mutualConnectionSource"
        })), a.mutualConnectionBadge && d.append(this.createDataTableCellBadge(a.mutualConnectionBadge));
      else {
        const c = a[l.key] ?? "", u = document.createElement("span");
        u.className = "wa-data-table__cell-text", u.textContent = c || "-", d.append(u), c || (d.dataset.empty = "true");
      }
      o.append(d);
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
      const r = document.createElement("div");
      r.className = "wa-data-table__actions";
      for (const o of e.actions)
        r.append(this.createDataTableAction(e.id, o));
      i.append(r);
    }
    if (e.pagination) {
      const r = document.createElement("div");
      r.className = "wa-data-table__pagination";
      const o = t.find((d) => d.page === a)?.range ?? t[0]?.range ?? "", s = document.createElement("span");
      s.className = "wa-data-table__range", s.dataset.tablePageRange = "", s.textContent = o;
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
    const a = this.chatShell.getBoundingClientRect(), i = e.getBoundingClientRect(), r = i.left - a.left + i.width * 0.5, o = i.top - a.top - 7, s = document.createElement("span"), l = e.dataset.tooltipBadge?.trim();
    if (s.className = "wa-data-table-floating-tooltip__label", s.textContent = t, this.tableControlTooltip.replaceChildren(s), l) {
      const d = document.createElement("span");
      d.className = "wa-data-table-floating-tooltip__badge", d.textContent = l, this.tableControlTooltip.append(d);
    }
    this.tableControlTooltip.dataset.hasBadge = String(!!l), this.tableControlTooltip.dataset.visible = "true", w.set(this.tableControlTooltip, {
      x: r,
      y: o,
      xPercent: -50,
      yPercent: -100
    });
  }
  hideDataTableControlTooltip() {
    this.tableControlTooltip.dataset.visible = "false", this.tableControlTooltip.dataset.hasBadge = "false", this.queryElements(this.chatShell, Ft).forEach((e) => {
      e.dataset.tooltipVisible = "false";
    });
  }
  setDataTableControlTooltipVisible(e) {
    const t = e.closest(nr);
    (t ? this.queryElements(t, Ft) : this.queryElements(this.chatShell, Ft)).forEach((i) => {
      i.dataset.tooltipVisible = String(i === e);
    });
  }
  getDataTableControlTooltipText(e) {
    return e.querySelector(".wa-data-table-action__tooltip")?.textContent?.trim() || e.dataset.tooltip || e.getAttribute("aria-label") || "";
  }
  findDataTableControl(e) {
    return e instanceof Element ? e.closest(Ft) : null;
  }
  findDataTablePageButton(e) {
    return e instanceof Element ? e.closest(or) : null;
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
    const r = document.createElement("span");
    r.className = "wa-data-table-person__avatar-wrap";
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
    l.className = "wa-data-table-person__name", l.textContent = t || "-", r.append(o, s);
    const d = document.createElement("span");
    d.className = "wa-data-table-person__copy", d.append(l);
    const c = e[a.detailKey ?? "prospectDetail"] || e.personDetail || "";
    if (c) {
      const u = document.createElement("span");
      u.className = "wa-data-table-person__detail", u.textContent = c, d.append(u);
    }
    return i.append(r, d), i;
  }
  getInitials(e) {
    return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
  }
  setProfileAvatar(e, t, a, i) {
    const r = gs(t, a);
    if (e.replaceChildren(), e.dataset.hasPhoto = String(!!r), !r) {
      e.textContent = i ?? this.getInitials(t);
      return;
    }
    const o = document.createElement("img");
    o.alt = "", o.decoding = "async", o.loading = "lazy", o.referrerPolicy = "no-referrer", o.src = r, o.addEventListener("error", () => {
      e.contains(o) && (e.dataset.hasPhoto = "false", e.textContent = i ?? this.getInitials(t));
    }, { once: !0 }), e.append(o);
  }
  createEnrichmentPanel(e) {
    const t = document.createElement("article");
    t.className = "wa-enrichment-panel wa-waterfall-thinking", t.dataset.enrichmentPanel = e.id;
    const a = document.createElement("div");
    a.className = "wa-enrichment-panel__header";
    const i = this.createThinkingLogo(), r = document.createElement("span");
    r.className = "wa-thinking__title", r.textContent = "Enriching";
    const o = document.createElement("span");
    o.className = "wa-thinking__elapsed", o.dataset.elapsedTarget = "4m 20s", o.textContent = "0s", a.append(i, r, o);
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
    const o = document.createElement("span");
    o.className = "wa-waterfall-row__label", o.textContent = e;
    const s = document.createElement("span");
    return s.className = "wa-waterfall-row__chips", s.append(
      ...a.map((l) => {
        const d = document.createElement("span");
        return d.className = "wa-waterfall-chip", d.dataset.stepState = l.state, d.textContent = l.label, d;
      })
    ), i.append(r, o, s), i;
  }
  createStrategyPlan(e) {
    const t = document.createElement("article");
    t.className = "wa-strategy-plan", t.dataset.strategyPlan = e.id;
    const a = document.createElement("h3");
    a.className = "wa-strategy-plan__title", a.textContent = e.title;
    const i = document.createElement("ul");
    i.className = "wa-strategy-plan__bullets";
    for (const r of this.getStrategyPlanBullets(e)) {
      const o = document.createElement("li");
      o.textContent = r, i.append(o);
    }
    return t.append(a, i), t;
  }
  getStrategyPlanBullets(e) {
    return e.bullets?.length ? e.bullets : e.summary ? e.summary.split(/\n+/).map((t) => t.trim()).filter(Boolean) : [e.audience, e.motion, e.proof].filter((t) => !!t);
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
    const t = this.createDataSourcesGrid(e), a = document.createElement("div"), i = document.createElement("div"), r = t.querySelector(".wa-data-source-grid__header"), o = this.groupDataSources(e.sources);
    return t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__scale", i.className = "wa-data-source-grid__groups", Ps.forEach((s) => {
      const l = document.createElement("div");
      l.className = "wa-data-source-grid__column", s.forEach((d) => {
        const c = o.find((u) => u.category === d);
        c && l.append(this.createMarketingDataSourceGroup(c));
      }), i.append(l);
    }), a.replaceChildren(...this.compactElements(r, i)), t.replaceChildren(a), this.setMarketingDataGridScale(t), t;
  }
  setMarketingDataGridScale(e) {
    const t = this.chatBody.getBoundingClientRect(), a = getComputedStyle(this.chatBody), i = Number.parseFloat(a.paddingLeft) || 0, r = Number.parseFloat(a.paddingRight) || i, o = Math.max(0, t.width - i - r) / za.contentWidth, s = Math.max(0, t.height) / za.height, l = Math.min(o || 1, s || 1), d = l > 0 ? i / l : 0, c = l > 0 ? r / l : d, u = za.contentWidth + d + c;
    e.style.setProperty("--wa-data-grid-scale", String(l)), e.style.setProperty("--wa-data-grid-artboard-width", `${u}px`), e.style.setProperty("--wa-data-grid-gutter-left", `${d}px`), e.style.setProperty("--wa-data-grid-gutter-right", `${c}px`);
  }
  createMarketingDataSourceGroup(e) {
    const t = document.createElement("section"), a = document.createElement("h4"), i = document.createElement("div");
    return t.className = "wa-data-source-group", t.dataset.sourceGroup = this.slugChannelName(e.category), a.className = "wa-data-source-group__title", a.textContent = e.category, i.className = "wa-data-source-grid__list", i.classList.add(`wa-data-source-grid__list--count-${e.sources.length}`), e.sources.forEach((r) => {
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
      let o = a.get(r);
      o || (o = { category: r, sources: [] }, a.set(r, o), t.push(o)), o.sources.push(i);
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
    const o = document.createElement("span");
    return o.textContent = e.detail, i.append(r, o), t.append(a, i), t;
  }
  createOutreachStyleProfile(e) {
    const t = document.createElement("section");
    t.className = "wa-style-profile", t.dataset.styleProfile = e.id;
    const a = this.createSectionHeader("wa-style-profile", e.title, e.subtitle), i = document.createElement("div");
    if (i.className = "wa-style-profile__rows", e.signals.forEach((r) => {
      const o = document.createElement("div");
      o.className = "wa-style-profile__row";
      const s = document.createElement("span");
      s.textContent = r.label;
      const l = document.createElement("strong");
      l.textContent = r.value, o.append(s, l), i.append(o);
    }), t.append(a, i), e.examples?.length) {
      const r = document.createElement("div");
      r.className = "wa-style-profile__examples", e.examples.forEach((o) => {
        const s = document.createElement("blockquote");
        s.className = "wa-style-profile__example", s.textContent = o, r.append(s);
      }), t.append(r);
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
    const r = document.createElement("h3");
    if (r.className = "wa-mailbox-connection__title", r.textContent = e.title, e.subtitle) {
      const b = document.createElement("p");
      b.className = "wa-mailbox-connection__subtitle", b.textContent = e.subtitle, i.append(r, b);
    } else
      i.append(r);
    const o = document.createElement("div");
    o.className = "wa-mailbox-connection__actions";
    const s = this.createMailboxProviderButton({
      id: e.id,
      icon: "gmail",
      label: Ha("gmail", e.ctaLabel),
      loadingLabel: e.loadingLabel ?? "connecting",
      connectedLabel: Ha("gmail", e.status, "connected"),
      isPrimary: !0
    }), l = this.createMailboxProviderButton({
      icon: "outlook",
      label: Ha("outlook", e.secondaryCtaLabel)
    });
    o.append(s, l), a.append(i, o);
    const d = document.createElement("div");
    d.className = "wa-mailbox-learning", d.dataset.mailboxLearning = "", d.dataset.mailboxLearningReadyDetail = e.learningReadyDetail ?? er;
    const c = document.createElement("div");
    c.className = "wa-mailbox-learning__thumbprint", c.append(this.createMailboxThumbprint(e.id));
    const u = document.createElement("h4");
    u.className = "wa-mailbox-learning__title";
    const p = document.createElement("span");
    p.dataset.mailboxLearningTitleText = "", p.textContent = e.learningTitle ?? Zi;
    const m = document.createElement("span");
    m.className = "wa-mailbox-learning__ready-chevron", m.dataset.mailboxLearningReadyChevron = "", m.setAttribute("aria-hidden", "true"), u.append(p, m);
    const g = document.createElement("p");
    g.className = "wa-mailbox-learning__detail", g.textContent = e.learningDetail ?? La[0].detail;
    const h = document.createElement("div");
    h.className = "wa-mailbox-learning__progress";
    const f = document.createElement("span");
    return f.dataset.mailboxLearningProgress = "", h.append(f), d.append(c, u, h, g), t.append(a, d), t;
  }
  createMailboxProviderButton(e) {
    const t = document.createElement("button");
    t.className = "wa-mailbox-connection__button", t.type = "button", t.setAttribute("aria-label", e.label), e.isPrimary && e.id && (t.dataset.mailboxConnect = e.id, t.dataset.mailboxLoadingLabel = e.loadingLabel ?? "connecting", t.dataset.mailboxConnectedLabel = e.connectedLabel ?? "Gmail");
    const a = this.createMailboxProviderIcon(e.icon), i = document.createElement("span");
    i.className = "wa-mailbox-connection__button-copy";
    const r = document.createElement("span");
    if (r.className = e.isPrimary ? "wa-mailbox-connection__button-label" : "wa-mailbox-connection__provider-label", e.isPrimary && (r.dataset.mailboxButtonLabel = "idle", r.setAttribute("aria-hidden", "true")), r.textContent = e.label, i.append(r), e.isPrimary) {
      const s = document.createElement("span");
      s.className = "wa-mailbox-connection__button-label", s.dataset.mailboxButtonLabel = "loading", s.setAttribute("aria-hidden", "true"), s.textContent = e.loadingLabel ?? "connecting";
      const l = document.createElement("span");
      l.className = "wa-mailbox-connection__button-label", l.dataset.mailboxButtonLabel = "connected", l.setAttribute("aria-hidden", "true"), l.textContent = e.connectedLabel ?? "Gmail", i.append(s, l);
    }
    const o = document.createElement("span");
    return o.className = "wa-mailbox-connection__spinner", o.setAttribute("aria-hidden", "true"), t.append(a, i, o), t;
  }
  createMailboxProviderIcon(e) {
    const t = document.createElement("img");
    return t.className = "wa-mailbox-connection__provider-icon", t.src = vs[e], t.alt = "", t.decoding = "async", t.loading = "eager", t.setAttribute("aria-hidden", "true"), t;
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
    return a.classList.add(e), Cs.forEach((i, r) => {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
      o.setAttribute("d", i), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "round"), o.setAttribute("stroke-miterlimit", "10"), t && (o.dataset.mailboxThumbprintPath = String(r), o.setAttribute("pathLength", "100"), o.setAttribute("stroke-dasharray", "0 100"), o.setAttribute("stroke-dashoffset", "0")), a.append(o);
    }), a;
  }
  updateMailboxThumbprintFill(e, t) {
    e.forEach((a, i) => {
      const r = qs(i, t);
      if (r <= 0) {
        a.setAttribute("stroke-dasharray", "0 100");
        return;
      }
      a.setAttribute("stroke-dasharray", r >= 100 ? "100 0" : `${r} 100`);
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
    const r = document.createElement("p");
    r.className = "wa-swipe-game__prompt", r.textContent = e.prompt ?? "Swipe toward the personalization you would use.";
    const o = document.createElement("div");
    o.className = "wa-swipe-game__axis";
    const s = document.createElement("span");
    s.textContent = e.labels?.avoid ?? "Never me";
    const l = document.createElement("span");
    l.dataset.swipeProgress = "";
    const d = document.createElement("span");
    d.textContent = e.labels?.use ?? "I'd use it", o.append(s, l, d);
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
    ), t.append(a, r, o, c, m), this.updateSwipeGameProgress(t, 0), t;
  }
  createSwipeActionButton(e, t) {
    const a = document.createElement("button");
    return a.className = "wa-swipe-game__action", a.type = "button", a.tabIndex = -1, a.dataset.swipeAction = e, a.setAttribute("aria-label", t), a;
  }
  layoutSwipeGameCards(e, t) {
    const a = this.getSwipeCards(e);
    a.forEach((i, r) => {
      const o = r - t, s = o >= 0 && o < 3;
      i.dataset.swipeState = o === 0 ? "active" : o > 0 ? "queued" : "done", w.set(i, {
        display: o >= 0 ? "grid" : "none",
        x: 0,
        y: Math.max(0, o) * 8,
        scale: 1 - Math.max(0, o) * 0.035,
        rotation: o === 1 ? -1.15 : o === 2 ? 1.05 : 0,
        autoAlpha: s ? 1 - Math.max(0, o) * 0.18 : 0,
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
    const o = e.sequences.some((p) => p.steps?.length);
    let s = null;
    if (o) {
      s = document.createElement("div"), s.className = "wa-sequence-people", s.setAttribute("aria-label", "Sequence people");
      const p = document.createElement("button"), m = document.createElement("div"), g = document.createElement("span"), h = document.createElement("span"), f = document.createElement("strong"), b = document.createElement("span"), _ = document.createElement("div"), y = document.createElement("button"), v = e.sequences[0];
      p.className = "wa-sequence-person-button", p.type = "button", p.tabIndex = -1, p.dataset.sequencePersonButton = `${e.id}:prev`, p.dataset.direction = "prev", p.dataset.currentIndex = "0", p.setAttribute("aria-label", "Previous person"), p.textContent = "‹", p.addEventListener("click", () => {
        const T = (Number(p.dataset.currentIndex ?? "0") - 1 + e.sequences.length) % e.sequences.length;
        this.sequencePerson(e.id, T).play();
      }), m.className = "wa-sequence-person-current", g.className = "wa-sequence-person-current__avatar", g.dataset.avatarTone = "1", this.setProfileAvatar(g, v?.name ?? "", v?.avatarUrl), h.className = "wa-sequence-person-current__copy", f.textContent = v?.name ?? "", b.textContent = [v?.title, v?.company].filter(Boolean).join(", "), h.append(f, b), m.append(g, h), y.className = "wa-sequence-person-button", y.type = "button", y.tabIndex = -1, y.dataset.sequencePersonButton = `${e.id}:next`, y.dataset.direction = "next", y.dataset.currentIndex = "0", y.setAttribute("aria-label", "Next person"), y.textContent = "›", y.addEventListener("click", () => {
        const T = (Number(y.dataset.currentIndex ?? "0") + 1) % e.sequences.length;
        this.sequencePerson(e.id, T).play();
      }), _.className = "wa-sequence-person-actions", _.append(p, y), s.append(m, _);
    }
    e.sequences.forEach((p, m) => {
      const g = document.createElement("article");
      g.className = "wa-sequence-card", g.dataset.sequenceCard = `${e.id}:${m}`, g.dataset.sequenceIndex = String(m), g.dataset.active = String(m === 0), g.dataset.sequenceName = p.name, g.dataset.sequenceMeta = [p.title, p.company].filter(Boolean).join(", "), g.dataset.sequenceTemplateName = p.name, g.dataset.sequenceTemplateMeta = [p.title, p.company].filter(Boolean).join(", "), g.dataset.sequenceTemplateAvatarUrl = p.avatarUrl ?? "", m !== 0 && (g.style.display = "none", w.set(g, { autoAlpha: 0, y: 8 }));
      const h = document.createElement("div");
      h.className = "wa-sequence-card__top";
      const f = document.createElement("span");
      f.className = "wa-sequence-card__identity";
      const b = document.createElement("strong");
      b.textContent = p.name;
      const _ = document.createElement("span");
      _.textContent = [p.title, p.company].filter(Boolean).join(", "), f.append(b, _);
      const y = document.createElement("span");
      y.className = "wa-sequence-card__label", y.textContent = p.signal ?? "Personalized", h.append(f, y);
      const v = document.createElement("p");
      v.className = "wa-sequence-card__subject", v.textContent = p.subject;
      const x = document.createElement("p");
      x.className = "wa-sequence-card__personalization", x.textContent = p.personalization;
      const T = p.steps;
      if (T?.length) {
        const k = document.createElement("div"), C = T[0], S = document.createElement("div"), E = document.createElement("span"), B = document.createElement("strong"), L = document.createElement("p");
        k.className = "wa-sequence-steps", T.forEach((I, R) => {
          const P = document.createElement("button"), G = document.createElement("span"), z = document.createElement("span"), ee = document.createElement("strong"), fe = this.getSequenceStepWaitDays(I, R, T.length);
          P.className = "wa-sequence-step", P.type = "button", P.tabIndex = -1, P.dataset.stepIndex = String(R), P.dataset.stepOpen = String(R === 0), P.dataset.stepSelected = String(R === 0), P.dataset.channel = this.slugChannelName(I.channel), P.dataset.stepSubject = R === 0 ? p.subject : I.label, P.dataset.stepBody = this.getSequenceStepCopy(p, I), P.dataset.stepTemplateChannel = I.channel, P.dataset.stepTemplateLabel = I.label, P.dataset.stepTemplateSubject = R === 0 ? p.subject : I.label, P.dataset.stepTemplateBody = this.getSequenceStepCopy(p, I), fe && (P.dataset.waitDays = String(fe), P.dataset.stepTemplateWaitDays = String(fe)), P.setAttribute("aria-pressed", String(R === 0)), P.addEventListener("click", () => {
            this.selectSequenceStep(g, R);
          }), G.className = "wa-sequence-step__channel", G.textContent = I.channel, z.className = "wa-sequence-step__copy", ee.textContent = I.label, z.append(ee), P.append(G, z), k.append(P), fe && k.append(this.createSequenceWaitRow(fe, R));
        }), S.className = "wa-sequence-copy-panel", S.dataset.sequenceCopyPanel = "", E.className = "wa-sequence-copy-panel__meta", E.dataset.sequenceCopyMeta = "", E.textContent = C ? `${C.channel} 1` : "Email", B.className = "wa-sequence-copy-panel__subject", B.dataset.sequenceCopySubject = "", B.textContent = p.subject, L.className = "wa-sequence-copy-panel__body", L.dataset.sequenceCopyBody = "", L.textContent = C ? this.getSequenceStepCopy(p, C) : p.personalization, S.append(E, B, L), g.append(k, S);
      } else
        g.append(h, v, x);
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
    }), o ? t.append(...this.compactElements(i, s, r, d)) : t.append(i, r, l), t;
  }
  createSequenceThinkingStep(e, t, a, i) {
    const r = this.createThinkingStep(
      {
        label: e,
        detail: t,
        disclosure: a === 0 ? Xe : mt
      },
      a
    );
    r.querySelector(".wa-research-step__detail");
    const o = r.querySelector(".wa-research-step__body");
    if (typeof i == "number" && o) {
      const s = document.createElement("span"), l = document.createElement("span"), d = document.createElement("span"), c = document.createElement("span");
      s.className = "wa-sequence-thinking-progress", s.dataset.sequenceThinkingTrack = e, l.className = "wa-sequence-thinking-progress__count", l.textContent = `1/${i}`, d.className = "wa-sequence-thinking-progress__bar", c.setAttribute("aria-hidden", "true"), d.append(c), s.append(l, d), o.append(s);
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
    return t >= a - 1 ? null : e.waitDays ?? _s[t] ?? 1;
  }
  formatSequenceWaitLabel(e) {
    return `wait ${e} ${e === 1 ? "day" : "days"}`;
  }
  setActiveSequencePerson(e, t) {
    const a = this.queryElements(e, "[data-sequence-card]"), i = this.queryElements(e, "[data-sequence-person-button]"), r = e.querySelector("[data-sequence-count]"), o = this.getSequenceDisplayCard(e), s = this.getSequenceTemplateCard(e, t);
    !o || !s || (a.forEach((l) => {
      const d = l === o;
      l.dataset.active = String(d), l.style.display = d ? "grid" : "none", w.set(l, { autoAlpha: d ? 1 : 0, y: 0 });
    }), e.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(e, o, s, t), i.forEach((l) => {
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
      e.querySelector(".wa-sequence-person-current__avatar"),
      e.querySelector(".wa-sequence-person-current__copy strong"),
      e.querySelector(".wa-sequence-person-current__copy span"),
      ...this.queryElements(t, ".wa-sequence-step__copy strong"),
      t.querySelector("[data-sequence-copy-meta]"),
      t.querySelector("[data-sequence-copy-subject]"),
      t.querySelector("[data-sequence-copy-body]")
    );
  }
  applySequenceTemplateToDisplayCard(e, t, a, i) {
    const r = this.getSelectedSequenceStepIndex(t), o = this.queryElements(t, ".wa-sequence-step"), s = this.queryElements(t, ".wa-sequence-wait"), l = this.queryElements(a, ".wa-sequence-step");
    t.dataset.sequenceName = a.dataset.sequenceTemplateName ?? a.dataset.sequenceName ?? "", t.dataset.sequenceMeta = a.dataset.sequenceTemplateMeta ?? a.dataset.sequenceMeta ?? "", o.forEach((d, c) => {
      const u = l[c], p = d.querySelector(".wa-sequence-step__channel"), m = d.querySelector(".wa-sequence-step__copy strong");
      if (!u) return;
      d.dataset.channel = u.dataset.channel ?? "", d.dataset.stepSubject = u.dataset.stepTemplateSubject ?? u.dataset.stepSubject ?? "", d.dataset.stepBody = u.dataset.stepTemplateBody ?? u.dataset.stepBody ?? "", d.dataset.waitDays = u.dataset.stepTemplateWaitDays ?? u.dataset.waitDays ?? "", p && (p.textContent = u.dataset.stepTemplateChannel ?? p.textContent), m && (m.textContent = u.dataset.stepTemplateLabel ?? m.textContent);
      const g = s[c], h = Number(d.dataset.waitDays), f = g?.querySelector(".wa-sequence-wait__label");
      g && (g.style.display = Number.isFinite(h) && h > 0 ? "grid" : "none", g.dataset.waitDays = String(h)), f && Number.isFinite(h) && h > 0 && (f.textContent = this.formatSequenceWaitLabel(h));
    }), e.dataset.activeSequenceIndex = String(i), this.selectSequenceStep(t, Math.min(r, Math.max(0, o.length - 1)));
  }
  selectSequenceStep(e, t) {
    const a = this.queryElements(e, ".wa-sequence-step"), i = a.find((d) => Number(d.dataset.stepIndex) === t) ?? a[0], r = e.querySelector("[data-sequence-copy-meta]"), o = e.querySelector("[data-sequence-copy-subject]"), s = e.querySelector("[data-sequence-copy-body]"), l = i?.querySelector(".wa-sequence-step__channel")?.textContent?.trim() ?? "email";
    a.forEach((d) => {
      const c = d === i;
      d.dataset.stepSelected = String(c), d.dataset.stepOpen = String(c), d.setAttribute("aria-pressed", String(c));
    }), r && (r.textContent = `${l} ${t + 1}`), o && (o.textContent = i?.dataset.stepSubject ?? ""), s && (s.textContent = i?.dataset.stepBody ?? "");
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
    const a = this.getSequenceTemplateCard(e, t), i = a?.dataset.sequenceTemplateName ?? a?.dataset.sequenceName ?? a?.querySelector(".wa-sequence-card__identity strong")?.textContent ?? "", r = a?.dataset.sequenceTemplateMeta ?? a?.dataset.sequenceMeta ?? a?.querySelector(".wa-sequence-card__identity span")?.textContent ?? "", o = a?.dataset.sequenceTemplateAvatarUrl, s = e.querySelector(".wa-sequence-person-current__avatar"), l = e.querySelector(".wa-sequence-person-current__copy strong"), d = e.querySelector(".wa-sequence-person-current__copy span");
    s && (s.dataset.avatarTone = String(t % 6 + 1)), s && this.setProfileAvatar(s, i, o), l && (l.textContent = i), d && (d.textContent = r);
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
      duration: A(0.48),
      ease: "back.out(1.45)"
    }), 0).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: A(0.32),
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
      duration: A(0.16),
      ease: "power2.out"
    }).to(a, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 1,
      duration: A(0.42),
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
    this.removeElements(Ds);
  }
  registerTransientElement(e, t) {
    this.transientCleanups.push(() => {
      t?.(), w.killTweensOf(e), e.remove();
    });
  }
  clearTransientElements() {
    for (const e of this.transientCleanups) e();
    this.transientCleanups = [], this.removeElements(rr);
  }
  removeElements(e) {
    this.root.querySelectorAll(e).forEach((t) => {
      w.killTweensOf(t), t.remove();
    });
  }
  getMessageScrollTarget(e, t = null) {
    const a = t ? this.getAlignedElementScrollTarget(t) : this.getAlignedMessageScrollTarget(e);
    if (a !== null) return a;
    const i = e.offsetTop + e.offsetHeight + this.getThreadBottomPadding() - this.thread.clientHeight;
    return this.composerVisible ? Math.max(0, i, this.getThreadBottomScrollTarget()) : Math.max(0, i);
  }
  getAlignedMessageScrollTarget(e) {
    const t = e.matches('[data-scroll-align="equal-inset"]') ? e : e.querySelector('[data-scroll-align="equal-inset"]');
    return t ? this.getAlignedElementScrollTarget(t) : null;
  }
  getAlignedElementScrollTarget(e) {
    const t = this.getElementSideInset(e), a = this.getElementOffsetTopWithinThread(e) - t;
    return Math.min(Math.max(0, a), this.getThreadBottomScrollTarget());
  }
  getElementSideInset(e) {
    const t = e.getBoundingClientRect(), a = this.chatBody.getBoundingClientRect(), i = Number.parseFloat(getComputedStyle(this.chatBody).paddingLeft) || 0, r = t.left - a.left;
    return Math.max(0, Number.isFinite(r) ? r : i);
  }
  getElementOffsetTopWithinThread(e) {
    let t = 0, a = e;
    for (; a && a !== this.thread; )
      t += a.offsetTop, a = a.offsetParent;
    if (a === this.thread) return t;
    const i = e.getBoundingClientRect(), r = this.thread.getBoundingClientRect();
    return this.thread.scrollTop + i.top - r.top;
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
  animateMessageScrollIntoView(e, t = ze.followDuration, a = null) {
    const i = this.getMessageScrollTarget(e, a);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - i) < 1) {
      this.thread.scrollTop = i;
      return;
    }
    this.scrollTween?.kill(), this.scrollTween = w.to(this.thread, {
      scrollTop: i,
      duration: t,
      ease: ze.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  requestMessageScroll(e) {
    const t = performance.now();
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < Is) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function Sn(n) {
  return Math.min(1, Math.max(0, n));
}
function Ls(n) {
  const e = Sn(n);
  return e * e * (3 - 2 * e);
}
function sr(n) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`;
}
function Ha(n, e, t = "idle") {
  const a = n === "gmail" ? "Gmail" : "Outlook", i = e?.trim();
  if (!i) return t === "connected" ? "Connected" : a;
  const r = a.toLowerCase(), o = i.toLowerCase().replace(/\s+/g, " "), s = /* @__PURE__ */ new Set([
    r,
    `connect ${r}`,
    `${r} connected`,
    `connected ${r}`
  ]);
  return t === "connected" && (s.has(o) || o === "connected") ? "Connected" : s.has(o) ? a : i;
}
function qs(n, e) {
  const t = ks[n] ?? 0, a = 24 + n * 11 % 8, i = Math.min(100, t + a), r = Ls((e - t) / (i - t));
  if (r <= 0) return 0;
  const o = Ss.has(n) ? 20 : 12;
  return Math.round(o + r * (100 - o));
}
function Os(n, e) {
  return Math.hypot(e.x - n.x, e.y - n.y);
}
function Ut(n, e, t) {
  return Math.min(t, Math.max(e, n));
}
function lr(n, e, t, a, i) {
  const r = 1 - i, o = i * i, s = r * r, l = s * r, d = o * i;
  return {
    x: l * n.x + 3 * s * i * e.x + 3 * r * o * t.x + d * a.x,
    y: l * n.y + 3 * s * i * e.y + 3 * r * o * t.y + d * a.y
  };
}
function Bs(n) {
  let e = 2166136261;
  for (let t = 0; t < n.length; t += 1)
    e ^= n.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function Cn(n) {
  let e = Bs(n) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const zs = {
  slow: 560,
  normal: 860,
  quick: 1220
}, Fs = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, Hs = 1.24;
function na(n, e, t) {
  const a = Cn(t.seed), i = Os(n, e), r = t.speed ?? "normal", o = t.intent ?? "hover";
  if (t.reducedMotion || i < 2)
    return {
      start: n,
      c1: n,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const s = e.x - n.x, l = e.y - n.y, d = s / i, c = l / i, u = -c, p = d, m = a() > 0.5 ? 1 : -1, g = t.curve ?? 1, f = Ut(i * (o === "drag" ? 0.1 : o === "click" ? 0.17 : 0.22) * g, 18, 150) * m * (0.72 + a() * 0.44), b = i / zs[r] + 0.16, _ = Ut(b * Fs[o] * Hs, 0.3, 1.66), y = t.overshoot === !1 || i < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : Ut(i * 0.026, 4, 18), v = y > 0 ? {
    x: e.x + d * y,
    y: e.y + c * y
  } : e, x = {
    x: n.x + s * (0.25 + a() * 0.08) + u * f,
    y: n.y + l * (0.25 + a() * 0.08) + p * f
  }, T = {
    x: n.x + s * (0.68 + a() * 0.12) - u * f * 0.42,
    y: n.y + l * (0.68 + a() * 0.12) - p * f * 0.42
  }, k = t.settle !== !1 && y > 0;
  return {
    start: n,
    c1: x,
    c2: T,
    end: v,
    duration: k ? _ * 0.86 : _,
    settle: k ? {
      start: v,
      c1: {
        x: v.x - d * y * 0.45 + u * f * 0.04,
        y: v.y - c * y * 0.45 + p * f * 0.04
      },
      c2: {
        x: e.x + d * y * 0.16,
        y: e.y + c * y * 0.16
      },
      end: e,
      duration: Ut(_ * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const Ga = "button, a, [role='button'], [data-send-button], [data-result-action]", Ua = "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']", Va = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, oa = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, Gs = -135, Us = 0.34;
class Vs {
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
    this.stopIdleFloat(!0), this.modeOverride = "default", this.setMode("default"), this.el.dataset.cursorMimicking = "true", w.killTweensOf(this.el), w.set(this.el, { autoAlpha: 1, scale: 1 });
  }
  mimicViewportPoint(e, t = 0.42, a = e) {
    const i = this.root.getBoundingClientRect(), r = {
      x: e.x - i.left,
      y: e.y - i.top
    }, o = {
      x: a.x - i.left,
      y: a.y - i.top
    }, s = {
      x: this.currentPosition.x + (r.x - this.currentPosition.x) * t,
      y: this.currentPosition.y + (r.y - this.currentPosition.y) * t
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
    const a = t.label ?? `move-${this.moveIndex}`, i = t.mode ?? "default", r = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, o = this.resolver.resolve(e, r), s = { ...this.plannedPosition }, l = na(s, o, {
      seed: r,
      intent: t.intent,
      speed: t.speed,
      curve: t.curve,
      overshoot: t.overshoot,
      settle: t.settle,
      reducedMotion: this.options.reducedMotion
    }), d = w.timeline();
    let c = null;
    return this.moveIndex += 1, this.plannedPosition = { ...o }, d.call(() => {
      this.stopIdleFloat(), this.resetRotation();
    }, void 0, 0), d.set(this.el, { autoAlpha: 1 }, 0), d.call(() => {
      this.modeOverride = i === "drag" ? "drag" : null, this.modeOverride ? this.setMode(this.modeOverride) : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0), d.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const u = this.resolver.resolve(e, r);
          return c = na(this.currentPosition, u, {
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
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, i = this.resolveHistoryParkPoint(), r = na(a, i, {
      seed: t,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    }), o = w.timeline();
    return this.moveIndex += 1, this.plannedPosition = { ...i }, o.call(() => {
      this.stopIdleFloat(!0), w.killTweensOf([this.el, this.floatLayer]), this.resetRotation(!0), this.modeOverride = "default", this.setMode("default");
    }, void 0, 0), o.add(
      this.pathTweenFromFactory(
        () => this.createHistoryParkPlan(t),
        r.duration,
        "sine.inOut"
      )
    ), o.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), o;
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
  pathTween(e, t, a, i, r, o = "power2.inOut") {
    const s = { t: 0 };
    return w.fromTo(
      s,
      { t: 0 },
      {
        t: 1,
        duration: r,
        ease: o,
        onUpdate: () => {
          const l = lr(e, t, a, i, s.t);
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
          const o = lr(r.start, r.c1, r.c2, r.end, i.t);
          this.currentPosition = o, this.renderPosition(o), this.modeOverride || this.maybeSyncModeToPoint(o);
        },
        onComplete: () => {
          r && (this.currentPosition = { ...r.end }, this.plannedPosition = { ...r.end }, this.renderPosition(r.end), this.modeOverride || this.syncModeToPoint(r.end));
        }
      }
    );
  }
  createHistoryParkPlan(e) {
    this.resolver.refresh();
    const t = this.resolveHistoryParkPoint(), a = na(this.currentPosition, t, {
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
    const a = Ut(
      t.height * oa.topRatio,
      oa.minTopInset,
      oa.maxTopInset
    );
    return {
      x: t.right - e.left + oa.outsideOffset,
      y: t.top - e.top + a
    };
  }
  pointTweenFromFactory(e, t, a = "power2.inOut") {
    const i = { t: 0 };
    let r = { ...this.currentPosition }, o = { ...this.currentPosition };
    return w.fromTo(i, { t: 0 }, {
      t: 1,
      duration: t,
      ease: a,
      onStart: () => {
        i.t = 0, r = { ...this.currentPosition }, o = e();
      },
      onUpdate: () => {
        const s = {
          x: r.x + (o.x - r.x) * i.t,
          y: r.y + (o.y - r.y) * i.t
        };
        this.currentPosition = s, this.renderPosition(s);
      },
      onComplete: () => {
        this.currentPosition = { ...o }, this.plannedPosition = { ...this.currentPosition }, this.renderPosition(this.currentPosition);
      }
    });
  }
  resolveScanPath(e, t, a = "first") {
    const i = { ...this.currentPosition }, r = this.resolveScanPoint(e, `${t}:start`, "start", a), o = this.resolveScanPoint(e, `${t}:end`, "end", a);
    return {
      start: i,
      c1: cr(i, r, 0.64),
      c2: cr(r, o, 0.42),
      end: o
    };
  }
  resolveScanPoint(e, t, a, i = "first") {
    const r = typeof e == "string" ? this.findVisibleScanElement(e, i) : e;
    if (!r) return this.currentPosition;
    this.resolver.refresh();
    const o = this.seededScanRandom(t), s = this.root.getBoundingClientRect(), l = r.getBoundingClientRect(), d = this.getChatShellRect(), c = d ? Math.max(l.left, d.left + 18) : l.left, u = d ? Math.min(l.right, d.right - 18) : l.right, p = d ? Math.max(l.top, d.top + 58) : l.top, m = d ? Math.min(l.bottom, d.bottom - 34) : l.bottom, g = Math.max(1, u - c), h = Math.max(1, m - p), f = a === "start" ? 0.16 + o() * 0.08 : 0.76 + o() * 0.12, b = 0.34 + o() * 0.32;
    return {
      x: c - s.left + g * f,
      y: p - s.top + h * b
    };
  }
  findVisibleScanElement(e, t = "first") {
    const a = this.root.querySelectorAll(e);
    if (t === "last") {
      for (let i = a.length - 1; i >= 0; i -= 1) {
        const r = a.item(i);
        if (r && this.isVisibleScanElement(r)) return r;
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
    const r = Math.atan2(i, a) * 180 / Math.PI, o = Ws(r - Gs), s = this.rotationState + js(this.rotationState, o) * Us;
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
  queueIdleFloat(e = Va.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = w.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    w.killTweensOf(this.floatLayer);
    const e = w.timeline({ repeat: -1 });
    for (const t of Va.segments)
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
      duration: Va.returnDuration,
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
    return e ? e.closest(Ga) ? "pointer" : e.closest(Ua) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t, Ga) ? "pointer" : this.findLocalHit(this.textTargets, e, t, Ua) ? "text" : "default";
  }
  findLocalHit(e, t, a, i) {
    for (const r of e) {
      if (!r.matches(i)) continue;
      const o = this.getVisibleRect(r);
      if (!o) continue;
      const s = o.left - a.left, l = o.right - a.left, d = o.top - a.top, c = o.bottom - a.top;
      if (t.x >= s && t.x <= l && t.y >= d && t.y <= c) return r;
    }
    return null;
  }
  refreshModeTargetCache() {
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(Ga)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(Ua)).reverse(), this.modeTargetsDirty = !1);
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
    return a.className = "wa-cursor__glyph", a.append(dr()), t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph"), t.querySelector(".wa-cursor__mimic-head") || t.append(dr());
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function dr() {
  const n = document.createDocumentFragment(), e = document.createElement("span"), t = document.createElement("span");
  return e.className = "wa-cursor__mimic-tail", t.className = "wa-cursor__mimic-head", e.setAttribute("aria-hidden", "true"), t.setAttribute("aria-hidden", "true"), n.append(e, t), n;
}
function cr(n, e, t) {
  return {
    x: n.x + (e.x - n.x) * t,
    y: n.y + (e.y - n.y) * t
  };
}
function Ws(n) {
  return (n % 360 + 360) % 360;
}
function js(n, e) {
  return (e - n + 540) % 360 - 180;
}
const lt = {
  user: "User",
  assistant: "AI",
  thinking: "Thinking",
  component: "Component",
  cursor: "Cursor",
  status: "State",
  file: "File"
}, Ys = ["user", "assistant", "thinking", "component", "cursor", "file"], $s = "/api/story-draft", Xs = 800, An = "73 tone & tactic rules defined", _t = 3;
class Js {
  constructor(e, t, a = {}) {
    this.root = e, this.sourceStories = t, this.options = a, this.stories = ur(t), this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null, this.draftEndpoint = a.draftEndpoint ?? $s, this.draftAutoSave = a.draftAutoSave ?? !0;
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
      storyMeta: this.required(e, "[data-builder-story-meta]"),
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
      const a = Wa(t.target, "[data-builder-story-tab]");
      a && this.selectStory(Number(a.dataset.builderStoryTab));
    }), this.on(e.addRail, "click", (t) => {
      const i = Wa(t.target, "[data-builder-add]")?.dataset.builderAdd;
      !i || !di(i) || this.addStep(i);
    }), this.on(e.copyJson, "click", () => {
      this.copyExportJson();
    }), this.on(e.thread, "click", (t) => {
      const a = Wa(t.target, "[data-builder-action]");
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
      const o = r.dataset.builderStepField;
      o && (this.updateStep(o, { text: r.value }, { renderThread: !1 }), this.autoSize(r));
    }), this.on(e.thread, "dragstart", (t) => this.handleDragStart(t)), this.on(e.thread, "dragover", (t) => this.handleDragOver(t)), this.on(e.thread, "drop", (t) => this.handleDrop(t)), this.on(e.thread, "dragend", () => this.clearDragState()), this.on(e.thread, "dragleave", (t) => {
      e.thread.contains(t.relatedTarget) || this.clearDropMarkers();
    }), this.on(e.panel, "input", (t) => {
      const a = t.target;
      (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && this.handlePanelInput(a);
    }), this.on(e.storyMeta, "input", (t) => {
      const a = t.target;
      (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && this.handlePanelInput(a);
    }), this.on(e.panel, "change", (t) => {
      const a = t.target;
      a instanceof HTMLSelectElement && this.handlePanelSelect(a);
    }));
  }
  render() {
    this.renderTabs(), this.renderStoryMeta(), this.renderAddRail(), this.renderThread(), this.renderPanel(), this.renderExport();
  }
  renderTabs() {
    const e = this.refs;
    if (!e) return;
    const t = this.stories.map((a, i) => {
      const r = document.createElement("button");
      r.className = "wa-builder-tab", r.type = "button", r.dataset.builderStoryTab = String(i), r.classList.toggle("is-active", i === this.activeStoryIndex), r.setAttribute("aria-pressed", String(i === this.activeStoryIndex));
      const o = document.createElement("span");
      o.className = "wa-builder-tab__title", o.textContent = a.label;
      const s = document.createElement("span");
      return s.className = "wa-builder-tab__count", s.textContent = `${a.steps.length} messages`, r.append(o, s), r;
    });
    e.tabs.replaceChildren(...t);
  }
  renderStoryMeta() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory;
    e.storyMeta.replaceChildren(
      this.createField("Story title", "input", "story-label", t.label),
      this.createField("Story summary", "textarea", "story-summary", t.summary)
    ), e.storyMeta.querySelectorAll("textarea").forEach((a) => this.autoSize(a));
  }
  renderAddRail() {
    const e = this.refs;
    if (!e || e.addRail.childElementCount) return;
    const t = Ys.map((a) => {
      const i = document.createElement("button");
      return i.className = "wa-builder-add-button", i.type = "button", i.dataset.builderAdd = a, i.textContent = `+ ${lt[a]}`, i;
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
    const t = this.selectedStep, a = document.createDocumentFragment();
    if (t) {
      const i = document.createElement("label");
      i.className = "wa-builder-field";
      const r = document.createElement("span");
      r.className = "wa-builder-field__label", r.textContent = "Selected message";
      const o = document.createElement("select");
      o.className = "wa-builder-field__control", o.dataset.builderPanelSelect = "step-kind";
      for (const s of Object.keys(lt)) {
        const l = document.createElement("option");
        l.value = s, l.textContent = lt[s], l.selected = t.kind === s, o.append(l);
      }
      i.append(r, o), a.append(
        i,
        this.createField("Message text", "textarea", "step-text", t.text),
        this.createField("Internal note", "textarea", "step-note", t.note)
      );
    } else {
      const i = document.createElement("p");
      i.className = "wa-builder-panel__empty", i.textContent = "No message selected.", a.append(i);
    }
    e.panel.replaceChildren(a), e.panel.querySelectorAll("textarea").forEach((i) => this.autoSize(i));
  }
  renderExport() {
    const e = this.refs;
    e && (this.isExportHidden() || (e.export.value = this.getExportJson(), this.autoSize(e.export)));
  }
  getExportJson() {
    return JSON.stringify({
      schemaVersion: _t,
      stories: this.stories
    }, null, 2);
  }
  isExportHidden() {
    return !!this.refs?.export.closest(".wa-builder-export")?.hasAttribute("hidden");
  }
  async copyExportJson() {
    const e = this.refs;
    if (!e) return;
    const t = e.export.value || this.getExportJson();
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
    const o = document.createElement("div");
    o.className = "wa-message wa-builder-message", o.dataset.messageRole = e.kind === "user" || e.kind === "file" ? "user" : "assistant", (e.kind === "component" || e.kind === "thinking") && o.classList.add("wa-message--component");
    const s = document.createElement("div");
    s.className = "wa-message__avatar";
    const l = document.createElement("div");
    return l.className = "wa-message__body wa-builder-message__body", l.dataset.messageBody = "", l.append(this.createStepBody(e, i === "thinking")), o.append(s, l), r.append(o, this.createStepToolbar(e, a)), r;
  }
  createStepBody(e, t = !1) {
    if (e.kind === "thinking") return this.createThinkingBody(e, t);
    if (e.kind === "component") return this.createComponentBody(e);
    if (e.kind === "cursor") return this.createCursorBody(e);
    if (e.kind === "file") return this.createFileBody(e);
    const a = document.createElement("div");
    a.className = "wa-builder-bubble";
    const i = document.createElement("span");
    return i.className = "wa-builder-step__kind", i.textContent = lt[e.kind], a.append(i, this.createInlineTextarea(e)), a;
  }
  createThinkingBody(e, t = !1) {
    e.thinking ??= Rt(e.text, e.note);
    const a = document.createElement("div");
    a.className = "wa-thinking-block wa-builder-thinking";
    const i = document.createElement("div");
    i.className = "wa-thinking";
    const r = document.createElement("span");
    r.className = "wa-thinking__glyph", r.dataset.logoRole = "shadow", r.setAttribute("aria-hidden", "true"), r.append(kn("wa-thinking__logo-mark"));
    const o = document.createElement("span");
    o.className = "wa-thinking__title", o.append(
      this.createThinkingInput(e.id, "title", e.thinking.title, {
        className: "wa-builder-thinking__header-input"
      })
    );
    const s = document.createElement("span");
    s.className = "wa-thinking__elapsed", s.append(
      this.createThinkingInput(e.id, "elapsed", e.thinking.elapsed, {
        className: "wa-builder-thinking__elapsed-input"
      })
    );
    const l = document.createElement("div");
    return l.className = "wa-research-steps", e.thinking.items.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-research-step wa-builder-research-step", u.dataset.stepState = "complete";
      const p = document.createElement("span");
      p.className = "wa-research-step__marker", p.setAttribute("aria-hidden", "true");
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
      ), m.append(g, h), u.append(p, m), l.append(u);
    }), i.append(r, o, s), t ? (a.dataset.thinkingHeaderSuppressed = "true", a.append(l)) : a.append(i, l), a;
  }
  createComponentBody(e) {
    if (e.component ??= tl(e.text), e.component.kind === "table") return this.createTableComponentBody(e, e.component);
    if (e.component.kind === "strategyCards") return this.createStrategyComponentBody(e, e.component);
    if (e.component.kind === "enrichment") return this.createEnrichmentComponentBody(e, e.component);
    if (e.component.kind === "dataSources") return this.createDataSourcesComponentBody(e, e.component);
    if (e.component.kind === "uploadedFiles") return this.createUploadedFilesComponentBody(e, e.component);
    if (e.component.kind === "mailboxConnection")
      return this.createMailboxConnectionComponentBody(e, e.component);
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
    }), o = document.createElement("div");
    return o.className = "wa-builder-component-list", e.component.items.forEach((s, l) => {
      o.append(
        this.createComponentField(e.id, "item", s, {
          itemIndex: l,
          className: "wa-builder-component-list__item"
        })
      );
    }), a.append(i, r, o), t.append(a), t;
  }
  createTableComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--table";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Table";
    const o = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), s = this.createComponentInput(e.id, "eyebrow", t.eyebrow ?? "", {
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
    }), i.append(r, o, s, l, d, u), a.append(i), a;
  }
  createStrategyComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--strategy";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Strategy cards";
    const o = this.createComponentField(e.id, "title", t.title, {
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
    }), i.append(r, o, s), a.append(i), a;
  }
  createEnrichmentComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--enrichment";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Enrichment";
    const o = this.createComponentField(e.id, "title", t.title, {
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
    }), i.append(r, o, s, l), a.append(i), a;
  }
  createDataSourcesComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--sources";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Data sources";
    const o = this.createComponentField(e.id, "title", t.title, {
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
    }), i.append(r, o, s, l), a.append(i), a;
  }
  createUploadedFilesComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Files"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = document.createElement("div");
    return o.className = "wa-builder-file-list-editor", t.files.forEach((s, l) => {
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
      ), o.append(d);
    }), i.append(r, o), a;
  }
  createMailboxConnectionComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Mailbox connection"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = document.createElement("div");
    s.className = "wa-builder-mailbox-editor__meta", s.append(
      this.createComponentInput(e.id, "mailboxProvider", t.provider, {
        className: "wa-builder-mailbox-editor__provider"
      }),
      this.createComponentInput(e.id, "mailboxAccount", t.account, {
        className: "wa-builder-mailbox-editor__account"
      }),
      this.createComponentInput(e.id, "mailboxStatus", t.status, {
        className: "wa-builder-mailbox-editor__status"
      })
    );
    const l = document.createElement("div");
    l.className = "wa-builder-mailbox-editor__cta", l.append(
      this.createComponentInput(e.id, "mailboxCtaLabel", t.ctaLabel, {
        className: "wa-builder-mailbox-editor__button-label"
      }),
      this.createComponentInput(e.id, "mailboxSecondaryCtaLabel", t.secondaryCtaLabel ?? "Outlook", {
        className: "wa-builder-mailbox-editor__button-label"
      }),
      this.createComponentInput(e.id, "mailboxLoadingLabel", t.loadingLabel, {
        className: "wa-builder-mailbox-editor__button-label"
      })
    );
    const d = this.createComponentInput(e.id, "mailboxLearningTitle", t.learningTitle, {
      className: "wa-builder-mailbox-editor__learning-title"
    }), c = this.createComponentField(e.id, "mailboxLearningDetail", t.learningDetail, {
      className: "wa-builder-mailbox-editor__learning-detail"
    }), u = this.createComponentField(
      e.id,
      "mailboxLearningReadyDetail",
      t.learningReadyDetail ?? An,
      {
        className: "wa-builder-mailbox-editor__learning-detail"
      }
    ), p = document.createElement("div");
    return p.className = "wa-builder-mailbox-editor__signals", t.signals.forEach((m, g) => {
      p.append(
        this.createComponentInput(e.id, "mailboxSignal", m, {
          itemIndex: g,
          className: "wa-builder-mailbox-editor__signal"
        })
      );
    }), i.append(r, o, s, l, d, c, u, p), a;
  }
  createStyleProfileComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Style profile"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
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
    }), i.append(r, o, s, l), a;
  }
  createProximityListComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Proximity list"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
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
    }), i.append(r, o, s), a;
  }
  createPersonalizationSwipeComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Personalization swipe game"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
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
    }), i.append(r, o, s, l), a;
  }
  createSequenceEngagementComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Sequence engagement"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = this.createComponentInput(e.id, "peopleCount", t.peopleCount, {
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
    }), i.append(r, o, s, l, d, c), a;
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
    return t.className = "wa-builder-step__textarea", t.dataset.builderStepField = e.id, t.value = e.text, t.rows = 1, t.spellcheck = !0, t.setAttribute("aria-label", `${lt[e.kind]} message text`), t;
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
    return t.className = "wa-builder-step__action wa-builder-step__drag", t.type = "button", t.draggable = !0, t.dataset.builderDragHandle = e, t.setAttribute("aria-label", "Drag to reorder message"), t.append(hr("grip")), t;
  }
  createActionButton(e, t, a, i, r = !1) {
    const o = document.createElement("button");
    return o.className = "wa-builder-step__action", o.type = "button", o.dataset.builderAction = t, o.dataset.builderActionStep = e, o.disabled = r, o.setAttribute("aria-label", a), o.append(hr(i)), o;
  }
  createField(e, t, a, i) {
    const r = document.createElement("label");
    r.className = "wa-builder-field";
    const o = document.createElement("span");
    o.className = "wa-builder-field__label", o.textContent = e;
    const s = t === "textarea" ? document.createElement("textarea") : document.createElement("input");
    return s.className = "wa-builder-field__control", s.dataset.builderPanelInput = a, s.value = i, s instanceof HTMLInputElement && (s.type = t === "color" ? "color" : "text"), s instanceof HTMLTextAreaElement && (s.rows = 2), r.append(o, s), r;
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
    const t = Qs(e, el(e), ""), a = this.activeStory.steps, i = a.findIndex((o) => o.id === this.selectedStepId), r = i >= 0 ? i + 1 : a.length;
    a.splice(r, 0, t), this.selectedStepId = t.id, this.render(), this.emitChange(`Added ${lt[e]} message`);
  }
  updateStep(e, t, a = {}) {
    const i = this.activeStory.steps.find((r) => r.id === e);
    i && (Object.assign(i, t), i.kind === "thinking" && hl(i, t), this.renderExport(), this.emitChange("Draft updated", !1), a.renderThread !== !1 && (this.renderThread(), this.renderPanel()));
  }
  handleStepAction(e) {
    const t = e.dataset.builderAction, a = e.dataset.builderActionStep;
    if (!t || !a) return;
    const i = this.activeStory.steps, r = i.findIndex((o) => o.id === a);
    r < 0 || (t === "duplicate" && (i.splice(r + 1, 0, wl(i[r])), this.selectedStepId = i[r + 1]?.id ?? a), t === "delete" && i.length > 1 && (i.splice(r, 1), this.selectedStepId = i[Math.min(r, i.length - 1)]?.id ?? null), this.render(), this.emitChange("Draft updated"));
  }
  handleDragStart(e) {
    const t = e.target, a = t?.closest("[data-builder-step]");
    if (!a?.dataset.builderStep) {
      e.preventDefault();
      return;
    }
    if (Sl(t) && !t?.closest("[data-builder-drag-handle]")) {
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
    const [o] = i.splice(r, 1);
    let s = t ? i.findIndex((l) => l.id === t) : i.length;
    s < 0 && (s = i.length), a === "after" && (s += 1), i.splice(Math.min(s, i.length), 0, o), this.selectedStepId = o.id, this.render(), this.emitChange("Reordered message");
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
    const t = e.dataset.builderThinkingStep, a = e.dataset.builderThinkingField, i = nt(e.dataset.builderThinkingItem), r = t ? this.activeStory.steps.find((o) => o.id === t) : null;
    !r || !a || (r.thinking ??= Rt(r.text, r.note), ul(r.thinking, a, e.value, i), pl(r), this.selectedStepId === r.id && (this.syncPanelStepText(r.text), this.syncPanelStepNote(r.note)), this.renderExport(), this.emitChange("Thinking updated", !1));
  }
  handleComponentInput(e) {
    const t = e.dataset.builderComponentStep, a = e.dataset.builderComponentField, i = t ? this.activeStory.steps.find((r) => r.id === t) : null;
    !i?.component || !a || (gl(i.component, a, e.value, {
      rowIndex: nt(e.dataset.builderComponentRow),
      columnIndex: nt(e.dataset.builderComponentColumn),
      cardIndex: nt(e.dataset.builderComponentCard),
      fieldIndex: nt(e.dataset.builderComponentGroup),
      itemIndex: nt(e.dataset.builderComponentItem)
    }), i.text = fl(i.component), this.selectedStepId === i.id && this.syncPanelStepText(i.text), this.renderExport(), this.emitChange("Component updated", !1));
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
    e.dataset.builderPanelSelect !== "step-kind" || !this.selectedStep || !di(e.value) || this.updateStep(this.selectedStep.id, { kind: e.value });
  }
  setStatus(e) {
    const t = this.refs;
    t && (t.status.textContent = e);
  }
  syncThreadStepText(e, t) {
    const a = this.refs;
    if (!a) return;
    const i = a.thread.querySelector(
      `[data-builder-step-field="${this.escapeSelectorValue(e)}"]`
    );
    !i || i.value === t || (i.value = t, this.autoSize(i));
  }
  escapeSelectorValue(e) {
    return typeof CSS < "u" && "escape" in CSS ? CSS.escape(e) : e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }
  syncThreadThinking(e) {
    const t = this.refs;
    !t || !e.thinking || t.thread.querySelectorAll(
      `[data-builder-thinking-step="${e.id}"]`
    ).forEach((a) => {
      const i = a.dataset.builderThinkingField, r = nt(a.dataset.builderThinkingItem), o = ml(e.thinking, i, r);
      o === null || a.value === o || (a.value = o, a instanceof HTMLTextAreaElement && this.autoSize(a));
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
    a && (t && this.setStatus(e), this.options.onStoriesChange?.(this.stories, { source: "edit" }), a.shell.dispatchEvent(
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
          const r = await yl(e);
          if (gt(r) && r.error === "not_found") {
            this.setStatus("seeding blob draft"), this.loadingRemoteDraft = !1, this.queueRemoteSave();
            return;
          }
          throw new Error("draft endpoint unavailable");
        }
        if (!e.ok)
          throw new Error(`draft load failed with ${e.status}`);
        const t = await e.json(), a = Tn(t), i = a?.stories;
        if (!a || !i?.length)
          throw new Error("draft payload did not include stories");
        this.stories = a.schemaVersion === _t ? i : ur(this.sourceStories), this.activeStoryIndex = Math.min(this.activeStoryIndex, Math.max(0, this.stories.length - 1)), this.selectedStepId = this.activeStory.steps[0]?.id ?? null, this.render(), this.setStatus(a.schemaVersion === _t ? "draft loaded" : "draft upgraded"), this.options.onStoriesChange?.(this.stories, { source: "load" }), a.schemaVersion !== _t && this.queueRemoteSave();
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
      }, Xs);
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
            ...Cl()
          },
          body: JSON.stringify({
            schemaVersion: _t,
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
function ur(n) {
  return n.map((e) => ({
    id: e.id,
    label: e.navLabel ?? e.label,
    summary: e.navDescription ?? e.summary,
    steps: Ks(e.id, e.summary)
  }));
}
function Ks(n, e) {
  return ({
    "hit-ground-running": [
      { kind: "status", text: "Sign up", note: "Start in the browser sign-up screen." },
      { kind: "user", text: "joel@acme.co", note: "Typed into the sign-up field." },
      rt([
        "Researching the company profile",
        "Learning the ICP and buyer roles",
        "Reading blog posts for positioning",
        "Scanning careers pages for priorities",
        "Mapping current GTM signals"
      ]),
      { kind: "assistant", text: "Here are some ideas I can put into action for you:", note: "" },
      {
        kind: "component",
        text: "Three compact GTM strategy cards",
        note: "Founder-led signal capture, RevOps consolidation, and pipeline acceleration.",
        component: il()
      }
    ],
    "data-marketplace": [
      { kind: "user", text: "Show me new hires at dev-tool companies with 50+ employees.", note: "" },
      rt(["Searching hiring signals, headcount, and company data"]),
      {
        kind: "component",
        text: "Table: New hires at dev-tool companies",
        note: "No chrome around the table.",
        component: pr("New hires at dev-tool companies", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
          ["Chandler Bree", "Square", "VP of Sales"],
          ["Ellen Nelle", "Square", "Growth Engineer"],
          ["Chadley Dupre", "Square", "Head of Revops"],
          ["Patrick Bateman", "Stripe", "COO"],
          ["Miles Kibble III", "Stripe", "Head of Chaos"]
        ], { eyebrow: "Natural language search", count: "8 records" })
      },
      { kind: "user", text: "Filter to the ones that have raised in the past three months.", note: "" },
      rt(["Checking rounds announced since February 2026"]),
      {
        kind: "component",
        text: "Table: Raised in the past three months",
        note: "A smaller table appears after the filter message.",
        component: pr("Raised in the past three months", [
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
        component: rl()
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
          columns: ["Name", "Role", "Work email", "Mobile", "Connector"],
          rows: [
            ["Jamie Chen", "VP of Sales at Ramp", "jamie@ramp.com", "+1 (628) 240-2744", "Priya Shah (Unify)"],
            ["Andre Park", "Head of Growth at Ramp", "andre@ramp.com", "+1 (210) 555-2341", "Marco Liu (Unify)"],
            ["David Kim", "Head of Revenue at Ramp", "david@ramp.com", "+1 (628) 230-9962", "Dev Singh (Unify)"],
            ["Chandler Bree", "VP of Sales at Square", "jamie@ramp.com", "+1 (628) 240-2744", "Jenna Park (Unify)"],
            ["Ellen Nelle", "Growth Engineer at Square", "andre@ramp.com", "+1 (210) 555-2341", "Owen Lee (Unify)"],
            ["Chadley Dupre", "Head of Revops at Square", "david@ramp.com", "+1 (628) 230-9962", "Rachel Cho (Unify)"],
            ["Patrick Bateman", "COO at Stripe", "pbateman@stripe.com", "+1 (415) 555-0142", "Evan Brooks (Unify)"],
            ["Miles Kibble III", "Head of Chaos at Stripe", "mkibble@stripe.com", "+1 (628) 555-2210", "Sam Hollis (Unify)"],
            ["Natalie Dank", "Money Manager at Stripe", "ndank@stripe.com", "+1 (415) 555-7733", "Noah Singh (Unify)"]
          ]
        }
      },
      {
        kind: "component",
        text: "Grid: specific vendor partners",
        note: "Marketing page grid of vendor partners grouped by data area.",
        component: nl()
      }
    ],
    "crm-update": [
      {
        kind: "component",
        text: "Connect a mailbox",
        note: "Mailbox connection happens before the business context files are dragged in.",
        component: sl()
      },
      {
        kind: "component",
        text: "Uploaded business context files",
        note: "Dragged in as a bundle before the agent learns the business.",
        component: ol()
      },
      rt([
        "Reading battle cards and competitive traps",
        "Extracting voice and tone rules",
        "Learning ICP disqualifiers",
        "Mapping playbook CTAs and objection handling"
      ]),
      {
        kind: "component",
        text: "Learned outreach style",
        note: "Shows the style and qualification rules the AI learned.",
        component: ll()
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      rt(["Scoring shared schools, fields of study, mutual contacts, and warm signals"]),
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: dl()
      }
    ],
    "research-brief": [
      { kind: "user", text: "Show me 50 sales leaders that have recently visited my website.", note: "" },
      {
        kind: "component",
        text: "Table: Recent website visitors",
        note: "Shows 10 rows at a time with pagination, power dialer, and outreach sequence actions.",
        component: al("Recent website visitors", [
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
      rt(
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
        component: cl()
      }
    ],
    "csv-import-cleanup": [
      { kind: "cursor", text: "Cursor exits right and drags a CSV into the browser.", note: "Drop overlay appears as soon as the file enters." },
      { kind: "file", text: "webinar_attendees.csv", note: "6 normalized records" },
      rt([
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
  }[n] ?? [{ kind: "assistant", text: e, note: "" }]).map((i, r) => ({
    ...i,
    id: `${n}-step-${r + 1}`
  }));
}
function Qs(n, e, t) {
  const a = {
    id: Mn("step"),
    kind: n,
    text: e,
    note: t
  };
  return n === "thinking" && (a.thinking = Rt(e, t)), a;
}
function Rt(n, e = "") {
  const t = _n([n || "Thinking"]).map((a, i) => ({
    label: a.label,
    detail: e || a.detail || Lt(a.label, i),
    disclosure: a.disclosure || (i === 0 ? Xe : mt)
  }));
  return {
    title: Ae,
    elapsed: aa(t.length),
    items: t
  };
}
function Zs(n, e = {}) {
  const t = _n(n).map((a, i) => ({
    label: a.label,
    detail: e[a.label] || a.detail || Lt(a.label, i),
    disclosure: a.disclosure || (i === 0 ? Xe : mt)
  }));
  return {
    title: Ae,
    elapsed: aa(t.length),
    items: t
  };
}
function el(n) {
  return {
    user: "Ask the assistant to transform the current result.",
    assistant: "The assistant responds with the next useful result.",
    thinking: "Researching the next signal",
    component: "Visual result component",
    cursor: "Move cursor to the next interaction target.",
    status: "Update state",
    file: "uploaded_file.csv"
  }[n];
}
function rt(n, e = {}) {
  const t = Zs(n, e), a = t.items[0];
  return {
    kind: "thinking",
    text: a?.label ?? "",
    note: a?.detail ?? "",
    thinking: t
  };
}
function tl(n) {
  return {
    kind: "generic",
    title: n,
    items: ["Primary result", "Supporting detail", "Next action"]
  };
}
function pr(n, e, t = {}) {
  return {
    kind: "table",
    title: n,
    ...t,
    columns: ["Name", "Company", "Title"],
    rows: e
  };
}
function al(n, e) {
  return {
    kind: "table",
    title: n,
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
function il() {
  return {
    kind: "strategyCards",
    title: "Three go-to-market strategies",
    cards: [
      {
        label: "Idea one",
        title: "Target DevOps teams outgrowing AWS complexity",
        summary: [
          "I'll find mid-market SaaS companies with heavy AWS footprints and hiring DevOps",
          "I'll run a 3-step email + LinkedIn sequence using the Notion infra efficiency angle"
        ].join(`
`)
      },
      {
        label: "Idea two",
        title: "Intercept AI teams burning cycles on LLM infra",
        summary: [
          "I'll identify companies building AI products, showing LLM/ML engineering hiring signals",
          "I'll craft a sequence leading with AI infra complexity pain and Vercel AI SDK as the path"
        ].join(`
`)
      },
      {
        label: "Idea three",
        title: "Hit e-commerce teams before peak season",
        summary: [
          "I'll find ecom and DTC brands with 50+ engineers and upcoming high-traffic events",
          "I'll lead with PAIGE's Black Friday results in a short sequence timed to pre-peak urgency"
        ].join(`
`)
      }
    ]
  };
}
function rl() {
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
function nl() {
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
function ol() {
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
function sl() {
  return {
    kind: "mailboxConnection",
    title: "Connect a mailbox",
    subtitle: "Unify will recent emails, replies, and meeting context to learn how you actually communicate",
    provider: "Gmail",
    account: "joel@unifygtm.com",
    status: "Connected",
    ctaLabel: "Gmail",
    secondaryCtaLabel: "Outlook",
    loadingLabel: "connecting",
    learningTitle: "Learning your style",
    learningDetail: "Analyzing vocabulary...",
    learningReadyDetail: An,
    signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"]
  };
}
function ll() {
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
function dl() {
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
function cl() {
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
function ul(n, e, t, a) {
  if (e === "title" && (n.title = t), e === "elapsed" && (n.elapsed = t), a === null) return;
  const i = n.items[a];
  i && (e === "label" && (i.label = t), e === "detail" && (i.detail = t), e === "disclosure" && (i.disclosure = t));
}
function pl(n) {
  if (!n.thinking) return;
  const e = n.thinking.items[0];
  n.text = e?.label ?? "", n.note = e?.detail ?? "";
}
function hl(n, e) {
  n.kind === "thinking" && (n.thinking ??= Rt(n.text, n.note), n.thinking.items[0] ??= {
    label: n.text,
    detail: n.note || Lt(n.text, 0),
    disclosure: Xe
  }, e.text !== void 0 && (n.thinking.items[0].label = e.text), e.note !== void 0 && (n.thinking.items[0].detail = e.note));
}
function ml(n, e, t) {
  if (e === "title") return n.title;
  if (e === "elapsed") return n.elapsed;
  if (t === null) return null;
  const a = n.items[t];
  return a ? e === "label" ? a.label : e === "detail" ? a.detail : e === "disclosure" ? a.disclosure : null : null;
}
function gl(n, e, t, a) {
  if (e === "title" && (n.title = t), n.kind === "generic" && e === "item" && a.itemIndex !== null && (n.items[a.itemIndex] = t), n.kind === "dataSources" && (e === "subtitle" && (n.subtitle = t), a.itemIndex !== null)) {
    const i = n.sources[a.itemIndex];
    if (!i) return;
    e === "sourceCategory" && (i.category = t), e === "sourceName" && (i.name = t), e === "sourceDetail" && (i.detail = t);
  }
  if (n.kind === "uploadedFiles" && a.itemIndex !== null) {
    const i = n.files[a.itemIndex];
    if (!i) return;
    e === "fileType" && (i.type = t), e === "fileName" && (i.name = t), e === "fileDetail" && (i.detail = t);
  }
  if (n.kind === "mailboxConnection" && (e === "subtitle" && (n.subtitle = t), e === "mailboxProvider" && (n.provider = t), e === "mailboxAccount" && (n.account = t), e === "mailboxStatus" && (n.status = t), e === "mailboxCtaLabel" && (n.ctaLabel = t), e === "mailboxSecondaryCtaLabel" && (n.secondaryCtaLabel = t), e === "mailboxLoadingLabel" && (n.loadingLabel = t), e === "mailboxLearningTitle" && (n.learningTitle = t), e === "mailboxLearningDetail" && (n.learningDetail = t), e === "mailboxLearningReadyDetail" && (n.learningReadyDetail = t), e === "mailboxSignal" && a.itemIndex !== null && (n.signals[a.itemIndex] = t)), n.kind === "styleProfile" && (e === "subtitle" && (n.subtitle = t), a.itemIndex !== null)) {
    const i = n.signals[a.itemIndex];
    i && (e === "signalLabel" && (i.label = t), e === "signalValue" && (i.value = t)), e === "styleExample" && (n.examples[a.itemIndex] = t);
  }
  if (n.kind === "proximityList" && (e === "subtitle" && (n.subtitle = t), a.itemIndex !== null)) {
    const i = n.leads[a.itemIndex];
    if (!i) return;
    e === "leadRank" && (i.rank = t), e === "leadScore" && (i.score = t), e === "leadName" && (i.name = t), e === "leadCompany" && (i.company = t), e === "leadTitle" && (i.title = t), e === "leadProximity" && (i.proximity = t), e === "leadPersonalization" && (i.personalization = t);
  }
  if (n.kind === "personalizationSwipeGame" && (e === "subtitle" && (n.subtitle = t), e === "prompt" && (n.prompt = t), a.itemIndex !== null)) {
    const i = n.signals[a.itemIndex];
    if (!i) return;
    e === "swipeDecision" && (i.decision = t === "avoid" ? "avoid" : "use"), e === "swipeLabel" && (i.label = t), e === "swipeDetail" && (i.detail = t);
  }
  if (n.kind === "sequenceEngagement" && (e === "subtitle" && (n.subtitle = t), e === "peopleCount" && (n.peopleCount = t), e === "launchLabel" && (n.launchLabel = t), a.itemIndex !== null)) {
    const i = n.sequences[a.itemIndex];
    if (i) {
      e === "sequenceName" && (i.name = t), e === "sequenceCompany" && (i.company = t), e === "sequenceTitle" && (i.title = t), e === "sequenceSignal" && (i.signal = t), e === "sequenceSubject" && (i.subject = t), e === "sequencePersonalization" && (i.personalization = t);
      const o = a.fieldIndex !== null ? i.steps?.[a.fieldIndex] : null;
      o && (e === "sequenceStepChannel" && (o.channel = t), e === "sequenceStepLabel" && (o.label = t), e === "sequenceStepBody" && (o.body = t), e === "sequenceStepWaitDays" && (o.waitDays = t));
    }
    const r = n.channels[a.itemIndex];
    r && (e === "channelLabel" && (r.label = t), e === "channelDetail" && (r.detail = t), e === "channelBadge" && (r.badge = t));
  }
  if (n.kind === "table" && (e === "eyebrow" && (n.eyebrow = t), e === "count" && (n.count = t), e === "column" && a.columnIndex !== null && (n.columns[a.columnIndex] = t), e === "cell" && a.rowIndex !== null && a.columnIndex !== null && (n.rows[a.rowIndex] ??= [], n.rows[a.rowIndex][a.columnIndex] = t), a.itemIndex !== null)) {
    const i = n.actions?.[a.itemIndex];
    i && (e === "actionLabel" && (i.label = t), e === "actionTooltip" && (i.tooltip = t), e === "actionBadge" && (i.badge = t)), e === "pageRange" && n.pagination && (n.pagination.ranges[a.itemIndex] = t);
  }
  if (n.kind === "strategyCards" && a.cardIndex !== null) {
    const i = n.cards[a.cardIndex];
    if (!i) return;
    e === "cardLabel" && (i.label = t), e === "cardTitle" && (i.title = t), e === "cardSummary" && (i.summary = t);
  }
  if (n.kind === "enrichment") {
    if (e === "subtitle" && (n.subtitle = t), e === "fieldTitle" && a.fieldIndex !== null) {
      const i = n.fields[a.fieldIndex];
      i && (i.title = t);
    }
    if (e === "fieldStep" && a.fieldIndex !== null && a.itemIndex !== null) {
      const i = n.fields[a.fieldIndex];
      i && (i.steps[a.itemIndex] = t);
    }
  }
}
function fl(n) {
  return n.kind === "table" ? `Table: ${n.title}` : (n.kind === "strategyCards" || n.kind === "enrichment" || n.kind === "dataSources" || n.kind === "uploadedFiles" || n.kind === "mailboxConnection" || n.kind === "styleProfile" || n.kind === "proximityList" || n.kind === "personalizationSwipeGame" || n.kind === "sequenceEngagement", n.title);
}
function wl(n) {
  return {
    ...n,
    id: Mn("step"),
    component: n.component ? bl(n.component) : void 0
  };
}
function bl(n) {
  return En(n);
}
function Tn(n) {
  if (!gt(n) || !Array.isArray(n.stories)) return null;
  const e = typeof n.schemaVersion == "number" ? n.schemaVersion : 1, t = n.stories.map((a) => _l(a)).filter((a) => !!a);
  return t.length ? { schemaVersion: e, stories: t } : null;
}
async function yl(n) {
  try {
    return await n.clone().json();
  } catch {
    return null;
  }
}
function _l(n) {
  if (!gt(n) || !Array.isArray(n.steps)) return null;
  const e = ve(n.id), t = ve(n.label), a = ve(n.summary), i = n.steps.map((r) => xl(r)).filter((r) => !!r);
  return !e || !t || !i.length ? null : {
    id: e,
    label: t,
    summary: a ?? "",
    steps: i
  };
}
function xl(n) {
  if (!gt(n)) return null;
  const e = ve(n.id), t = ve(n.kind), a = ve(n.text), i = ve(n.note);
  return !e || !t || !di(t) ? null : {
    id: e,
    kind: t,
    text: a ?? "",
    note: i ?? "",
    thinking: gt(n.thinking) ? vl(n.thinking, a ?? "", i ?? "") : t === "thinking" ? Rt(a ?? "", i ?? "") : void 0,
    component: gt(n.component) ? En(n.component) : void 0
  };
}
function En(n) {
  return typeof structuredClone == "function" ? structuredClone(n) : JSON.parse(JSON.stringify(n));
}
function vl(n, e, t) {
  const i = (Array.isArray(n.items) ? n.items : []).map((r, o) => kl(r, o)).filter((r) => !!r);
  return i.length ? {
    title: ve(n.title) ?? Ae,
    elapsed: ve(n.elapsed) ?? aa(i.length),
    items: i
  } : Rt(e, t);
}
function kl(n, e) {
  if (!gt(n)) return null;
  const t = ve(n.label);
  return t ? {
    label: t,
    detail: ve(n.detail) ?? Lt(t, e),
    disclosure: ve(n.disclosure) ?? (e === 0 ? Xe : mt)
  } : null;
}
function gt(n) {
  return !!(n && typeof n == "object" && !Array.isArray(n));
}
function ve(n) {
  return typeof n == "string" ? n : null;
}
function nt(n) {
  if (n === void 0) return null;
  const e = Number(n);
  return Number.isFinite(e) ? e : null;
}
function Mn(n) {
  return typeof crypto < "u" && "randomUUID" in crypto ? `${n}-${crypto.randomUUID()}` : `${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function Wa(n, e) {
  return n instanceof Element ? n.closest(e) : null;
}
function Sl(n) {
  return !!n?.closest("textarea, input, select, button, [contenteditable='true']");
}
function di(n) {
  return n in lt;
}
function Cl() {
  const n = Al();
  return n ? { "x-story-draft-token": n } : {};
}
function Al() {
  try {
    return window.localStorage.getItem("storyDraftWriteToken");
  } catch {
    return null;
  }
}
function hr(n) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (e.setAttribute("viewBox", "0 0 20 20"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), n === "copy" && mr(e, "M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"), n === "x" && mr(e, "M5.5 5.5l9 9 M14.5 5.5l-9 9"), n === "grip")
    for (const t of [7, 13])
      for (const a of [5, 10, 15]) {
        const i = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        i.setAttribute("cx", String(t)), i.setAttribute("cy", String(a)), i.setAttribute("r", "1.25"), i.setAttribute("fill", "currentColor"), e.append(i);
      }
  return e;
}
function mr(n, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
  t.setAttribute("d", e), t.setAttribute("fill", "none"), t.setAttribute("stroke", "currentColor"), t.setAttribute("stroke-width", "1.7"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round"), n.append(t);
}
const M = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26
};
function ja(n) {
  return typeof n == "number" ? { x: n, y: 0 } : n;
}
function F(n, e, t = {}, a = !0) {
  return {
    desktop: { target: n, anchor: e, offset: ja(t.desktop), humanOffset: a },
    tablet: { target: n, anchor: e, offset: ja(t.tablet), humanOffset: a },
    mobile: { target: n, anchor: e, offset: ja(t.mobile), humanOffset: a }
  };
}
const xa = {
  hitGroundRunning: F("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: F("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: F("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: F("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: F("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, Pn = F("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), Tl = F("[data-send-button]", "center"), Pi = {
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
}, El = 2.8, Ml = 42, Pl = 2, Il = 3, va = "[data-chat-shell] [data-chat-thread]", Dl = `${va} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, Rl = `${va} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${va} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, ci = 0.24, In = 0.3, Le = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function je(n = Le.right, e) {
  return {
    kind: "cursorMove",
    target: n,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function Ee(n, e) {
  const t = Ii(n), a = Fl();
  for (const [i, r] of e.entries())
    Nl(t, n, r, i, a);
  return Di(t);
}
function Nl(n, e, t, a, i) {
  switch (t.kind) {
    case "prompt":
      n.add(Gl(e, t), t.at);
      return;
    case "status":
      n.add(e.chat.setStatus(t.text), t.at);
      return;
    case "cursorClick":
      n.add(e.cursor.click(t.nextMode), t.at);
      return;
    case "typeSignupEmail":
      n.add(e.chat.typeSignupEmail(t.email, t.duration), t.at);
      return;
    case "transitionSignupToChat":
      n.add(e.chat.transitionSignupToChat(), t.at);
      return;
    case "assistant":
      n.add(e.chat.assistantMessage(t.text), t.at), zl(n, e, i, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: Dl,
        label: `assistant-${ui(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking": {
      const r = Ll(t), o = r.items.map((s) => s.label);
      t.statusBefore && n.add(e.chat.setStatus(t.statusBefore), t.at), n.add(e.chat.thinkingState(r, t.hold), t.statusBefore ? void 0 : t.at), Bl(n, e, i, t.hold, o.length, o.join("|"), a);
      return;
    }
    case "dataTable":
      bt(
        n,
        e,
        e.chat.dataTable(t.config),
        t.at,
        xt(`[data-data-table="${Ge(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      bt(
        n,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        xt(`[data-enrichment-panel="${Ge(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      bt(
        n,
        e,
        e.chat.strategyPlans(t.plans),
        t.at,
        xt(`[data-strategy-plans~="${Ge(t.plans[0]?.id ?? "strategy")}"]`),
        `strategy-${t.plans[0]?.id ?? "plans"}`
      );
      return;
    case "dataSourcesGrid":
      bt(
        n,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        xt(`[data-data-sources-grid="${Ge(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      bt(
        n,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${Ge(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "personalizationSwipeGame":
      ql(n, e, t.config, t.at);
      return;
    case "sequenceEngagement":
      bt(
        n,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        xt(`[data-sequence-engagement="${Ge(t.config.id)}"]`),
        `sequence-${t.config.id}`
      );
      return;
    case "cursorMove":
      n.add(e.cursor.moveTo(t.target, t.options), t.at);
      return;
    case "cursorDrag":
      n.add(e.cursor.dragTo(t.target, t.options), t.at);
      return;
    case "custom":
      n.add(t.build(e), t.at);
      return;
  }
}
function Ll(n) {
  return "thinking" in n && n.thinking ? n.thinking : Array.isArray(n.steps) ? { items: n.steps.map(gr) } : { items: [gr(n.label ?? "")] };
}
function gr(n) {
  return typeof n == "string" ? { label: n } : n;
}
function bt(n, e, t, a, i, r) {
  n.add(t, a), n.add(Ol(e, i, r), "+=0.06");
}
function ql(n, e, t, a) {
  const i = xt(
    `[data-personalization-swipe-game="${Ge(t.id)}"]`
  );
  n.add(e.chat.personalizationSwipeGame(t), a), t.signals.forEach((r, o) => {
    const s = `${i} [data-swipe-card="${Ge(r.id)}"]`, l = r.decision === "use" ? 1 : -1, d = r.decision === "use" ? "right" : "left", c = F(s, d, {
      desktop: { x: l * 154, y: o % 2 === 0 ? -18 : 16 },
      tablet: { x: l * 132, y: o % 2 === 0 ? -14 : 14 },
      mobile: { x: l * 86, y: o % 2 === 0 ? -10 : 10 }
    }, !1);
    n.add(
      e.cursor.moveTo(F(s, "center", {}, !1), {
        intent: "hover",
        mode: "default",
        speed: o === 0 ? "normal" : "quick",
        overshoot: !1,
        settle: !1,
        label: `swipe-card-${r.id}-center`
      }),
      o === 0 ? "+=0.2" : "+=0.12"
    ), n.add(
      e.cursor.dragTo(c, {
        speed: "slow",
        releaseHold: 0.08,
        label: `swipe-card-${r.id}-${r.decision}`
      }),
      "-=0.02"
    ), n.add(e.chat.swipePersonalizationCard(t.id, r.id, r.decision), "<+=0.2");
  }), n.add(
    e.cursor.moveTo(Pi, {
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
function Ol(n, e, t) {
  const a = Ii(n).add(n.cursor.scanAcross(e, { label: t }));
  return t.startsWith("strategy-") && a.add(n.chat.strategyPlanHoverSequence(e), "<+=0.06"), Di(a);
}
function Bl(n, e, t, a = M.thinkingShort, i = 1, r = "thinking", o = 0) {
  const s = a * Math.max(1, i), l = i >= 3 && Dn(e, t, {
    kind: "thinking",
    key: r,
    text: r,
    stepIndex: o,
    minChars: 16
  });
  l && n.add(
    e.cursor.scanAcross(Rl, {
      label: `thinking-skim-${ui(r)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(s < El) && n.add(
    e.cursor.moveTo(Pi, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${ui(r)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function zl(n, e, t, a) {
  Dn(e, t, a) && n.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function Fl() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function Dn(n, e, t) {
  const a = t.text.trim(), i = t.minChars ?? Ml;
  if (a.length < i || e.textSkimCount >= Il) return !1;
  const r = e.textCandidateCount;
  e.textCandidateCount += 1;
  const o = e.textSkimCount === 0, s = t.stepIndex - e.lastTextSkimStep >= Pl, l = Hl(`${n.story.id}:${t.kind}:${r}:${t.key}`), d = r > 0 && r % 3 === 0, c = o || s && (l >= 0.58 || d);
  return c && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), c;
}
function Hl(n) {
  let e = 2166136261;
  for (let a = 0; a < n.length; a += 1)
    e ^= n.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Ge(n) {
  return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function xt(n) {
  return `${va} ${n}`;
}
function ui(n) {
  return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function Gl(n, e) {
  const t = Ii(n);
  return e.statusBefore && t.add(n.chat.setStatus(e.statusBefore)), t.add(n.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    n.cursor.moveTo(e.focusTarget ?? n.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(n.cursor.click("text"), "-=0.02").add(n.chat.setComposerFocus(!0), "-=0.14").add(n.chat.typeComposer(e.text, e.duration ?? M.typeMedium)).add(
    n.cursor.moveTo(Tl, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(n.cursor.click()).add(n.chat.setComposerFocus(!1), "-=0.08").add(n.chat.sendComposerText(), "-=0.06").add(n.chat.userMessage(e.text), "-=0.12").add(n.chat.hideComposer(), "<").add(n.chat.clearComposer()).add(
    n.cursor.moveTo(Pi, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(n.chat.setStatus(e.statusAfter), "<"), Di(t);
}
function Ii(n) {
  const e = n.timeline();
  return e.pause(0), e;
}
function Di(n) {
  return n.paused(!1), n;
}
const Ul = {
  desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 180, y: -74 }, humanOffset: !1 },
  tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 144, y: -58 }, humanOffset: !1 },
  mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 96, y: -42 }, humanOffset: !1 }
};
function Vl(n, e) {
  const t = new Map(n.map((a) => [a.id, a]));
  return e.map((a) => {
    const i = t.get(a.id);
    return i ? Wl(i, a) : a;
  });
}
function Wl(n, e) {
  return {
    ...e,
    label: n.label,
    navLabel: n.label,
    navDescription: n.summary || e.navDescription,
    summary: n.summary || e.summary,
    entry: jl(n.id, e),
    entryLeadTime: Yl(n.id, e),
    prepare: n.id === "hit-ground-running" ? (t) => t.chat.prepareSignup() : e.prepare,
    build: (t) => $l(t, n, e)
  };
}
function jl(n, e) {
  return n === "hit-ground-running" ? Pn : n === "data-marketplace" ? xa.dataMarketplace : n === "research-brief" ? xa.researchBrief : e.entry;
}
function Yl(n, e) {
  return n === "hit-ground-running" ? In : n === "data-marketplace" || n === "research-brief" ? ci : e.entryLeadTime;
}
function $l(n, e, t) {
  if (e.id === "hit-ground-running") return Xl(n, e);
  if (e.id === "crm-update") return Jl(n, e);
  if (e.id === "research-brief") return Kl(n, e);
  if (e.id === "csv-import-cleanup") return Ql(n, e);
  const a = ad(e);
  return a.length ? Ee(n, [...a, je(Le.bottomRight, "+=0.18")]) : t.build(n);
}
function Xl(n, e) {
  const t = qe(e, "status"), a = qe(e, "user"), i = qe(e, "thinking"), r = qe(e, "assistant"), o = Nt(e, "strategyCards");
  return Ee(n, [
    { kind: "status", text: t?.text || "Sign up" },
    { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
    { kind: "typeSignupEmail", email: a?.text || "joel@acme.co", duration: M.typeShort },
    { kind: "status", text: "Building workspace", at: "-=0.16" },
    { kind: "transitionSignupToChat", at: `+=${M.beat}` },
    ...i ? [{ kind: "status", text: i.text || "Researching", at: "<" }] : [],
    ...i ? [Aa(i, { hold: 0.46, at: "+=0.04" })] : [],
    ...r ? [{ kind: "assistant", text: r.text }] : [],
    ...o ? [{ kind: "status", text: "Game plans ready", at: "<" }] : [],
    ...o ? [{ kind: "strategyPlans", plans: Nn(o.component), at: "-=0.08" }] : [],
    je(Le.right, "+=0.18")
  ]);
}
function Jl(n, e) {
  const t = Nt(e, "mailboxConnection"), a = Nt(e, "uploadedFiles"), i = [];
  if (t && On(i, qn(t.component)), a) {
    const r = Ln(a.component), o = n.chat.prepareCsvDropArea({
      title: a.component.title,
      detail: r.map((c) => c.name).join(", ")
    }), s = r.length > 1 ? `${r.length} context files` : r[0]?.name ?? a.text, l = n.chat.prepareCursorFile(s, n.cursor, r[0]?.type ?? "DOC", r), d = F("[data-chat-shell]", "center", {
      desktop: { x: 0, y: 74 },
      tablet: { x: 0, y: 64 },
      mobile: { x: 0, y: 56 }
    });
    i.push(
      { kind: "status", text: "waiting for context" },
      {
        kind: "cursorMove",
        target: Ul,
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
      { kind: "custom", build: () => l.startFollow(), at: "-=0.04" },
      { kind: "custom", build: () => o.revealWhenCursorEnters(n.cursor), at: "<" },
      {
        kind: "cursorDrag",
        target: d,
        options: { mode: "drag", speed: "slow", releaseHold: 0.34, label: "drag-context-files" },
        at: "<+=0.1"
      },
      { kind: "custom", build: () => o.activate(), at: "<+=0.02" },
      { kind: "custom", build: () => o.complete(), at: "-=0.18" },
      { kind: "custom", build: () => l.landAsUploadedFiles(r), at: "<" }
    );
  }
  for (const r of e.steps)
    r === t || r === a || Rn(i, e.id, r);
  return i.push(je(Le.bottomRight, "+=0.16")), Ee(n, i);
}
function Kl(n, e) {
  const t = qe(e, "user"), a = Nt(e, "table"), i = qe(e, "thinking"), r = Nt(e, "sequenceEngagement"), o = a ? Ri(a.component, "website-visitors-sales") : null, s = r ? Bn(r.component, "visitor-outreach-sequences") : null, l = [];
  if (t && l.push({
    kind: "prompt",
    text: t.text,
    duration: zn(t.text),
    sendLabel: "send-visitor-sales-list",
    statusBefore: "finding visitors",
    statusAfter: "building visitor list",
    fromEntry: !0
  }), o && l.push({ kind: "dataTable", config: o, at: "-=0.02" }), o?.pagination && o.pagination.pages.length > 1) {
    const d = F(
      '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
      "center"
    ), c = F(
      '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
      "center",
      { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
      !1
    ), u = F(
      '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
      "center",
      {},
      !1
    );
    l.push(
      {
        kind: "cursorMove",
        target: d,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
        at: "+=0.2"
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => n.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
      { kind: "status", text: "ready to engage", at: "+=0.1" },
      { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.58 }) },
      {
        kind: "cursorMove",
        target: c,
        options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
        at: "+=0.42"
      },
      { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
      { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 1 }), at: "+=0.12" },
      { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
      {
        kind: "cursorMove",
        target: u,
        options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
      },
      { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
      { kind: "cursorClick", at: "+=0.18" },
      { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
      { kind: "status", text: "building outreach sequence", at: "<" }
    );
  }
  if (i && l.push(Aa(i, { hold: M.thinkingMedium, at: "+=0.06" })), s) {
    const d = F(
      '[data-sequence-person-button="visitor-outreach-sequences:next"]',
      "center"
    ), c = F(
      '[data-sequence-kickoff="visitor-outreach-sequences"]',
      "center"
    );
    l.push(
      { kind: "sequenceEngagement", config: s, at: "-=0.02" },
      { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: d,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-second-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => n.chat.sequencePerson("visitor-outreach-sequences", 1), at: "-=0.03" },
      { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: d,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-third-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => n.chat.sequencePerson("visitor-outreach-sequences", 2), at: "-=0.03" },
      { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.28 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: c,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => n.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
      { kind: "status", text: "sequence kicked off", at: "<" }
    );
  }
  return Ee(n, l);
}
function Ql(n, e) {
  const t = qe(e, "file"), a = qe(e, "thinking"), i = qe(e, "assistant"), r = Nt(e, "table"), o = t?.text || "webinar_attendees.csv", s = Zl(t, r?.component), l = n.chat.prepareCsvDropArea(), d = n.chat.prepareCursorFile(o, n.cursor), c = F("[data-chat-shell]", "center", {
    desktop: { x: 0, y: 82 },
    tablet: { x: 0, y: 72 },
    mobile: { x: 0, y: 64 }
  });
  return Ee(n, [
    { kind: "status", text: "waiting for CSV" },
    { kind: "custom", build: () => d.startFollow(), at: "+=0.04" },
    { kind: "custom", build: () => l.revealWhenCursorEnters(n.cursor), at: "<" },
    {
      kind: "cursorDrag",
      target: c,
      options: { mode: "drag", speed: "slow", releaseHold: 0.46, label: "drag-webinar-csv" },
      at: "<+=0.1"
    },
    { kind: "custom", build: () => l.activate(), at: "<+=0.02" },
    { kind: "custom", build: () => l.complete(), at: "-=0.24" },
    { kind: "custom", build: () => d.landAsUploadedFile(o, s), at: "<" },
    { kind: "status", text: "Cleaning CSV", at: "<" },
    ...a ? [Aa(a, { hold: 0.34, at: `+=${M.beat}` })] : [],
    ...i ? [{ kind: "assistant", text: i.text }] : [],
    ...r ? [{ kind: "dataTable", config: Ri(r.component, "cleaned-webinar-attendees"), at: "-=0.04" }] : [],
    je(Le.bottomRight, "+=0.18")
  ]);
}
function Zl(n, e) {
  const t = ed(e);
  if (t) return t;
  const a = n?.note?.trim();
  return !a || td(a) ? "CSV uploaded" : a;
}
function ed(n) {
  if (!n || n.kind !== "table") return null;
  const e = n.count?.trim();
  if (e) return e;
  const t = n.rows.length;
  return t <= 0 ? null : `${t} ${t === 1 ? "record" : "records"}`;
}
function td(n) {
  return /user-side message|after release|drop overlay|appears as/i.test(n);
}
function ad(n) {
  const e = [], t = n.id === "data-marketplace" ? id(n.steps) : n.steps;
  let a = 0;
  for (const i of t)
    a += i.kind === "user" ? 1 : 0, Rn(e, n.id, i, a === 1);
  return e;
}
function id(n) {
  const e = [];
  let t = 0;
  for (; t < n.length; ) {
    const a = n[t];
    if (a.kind !== "thinking") {
      e.push(a), t += 1;
      continue;
    }
    const i = [];
    for (; t < n.length && n[t].kind === "thinking"; )
      i.push(n[t]), t += 1;
    e.push(i.length > 1 ? rd(i) : a);
  }
  return e;
}
function rd(n) {
  const e = n[0], a = n.flatMap(
    (i) => i.thinking?.items.length ? i.thinking.items : [{
      label: i.text || "Thinking",
      detail: i.note || "",
      disclosure: ""
    }]
  ).filter((i) => i.label.trim()).map((i, r) => ({
    label: i.label,
    detail: i.detail,
    disclosure: i.disclosure || (r === 0 ? "Show more" : "Show less")
  }));
  return {
    ...e,
    text: a[0]?.label || e.text,
    note: a[0]?.detail || e.note,
    thinking: {
      title: e.thinking?.title || "Thinking",
      elapsed: aa(a.length),
      items: a
    }
  };
}
function Rn(n, e, t, a = !1) {
  if (t.kind === "status" && t.text) {
    n.push({ kind: "status", text: t.text });
    return;
  }
  if (t.kind === "user" && t.text) {
    n.push({
      kind: "prompt",
      text: t.text,
      duration: zn(t.text),
      sendLabel: `send-${le(e)}-${n.length}`,
      fromEntry: a,
      statusAfter: t.note || void 0,
      at: a ? void 0 : `+=${M.beat}`
    });
    return;
  }
  if (t.kind === "assistant" && t.text) {
    n.push({ kind: "assistant", text: t.text, at: "+=0.08" });
    return;
  }
  if (t.kind === "thinking") {
    n.push(Aa(t, { hold: M.thinkingMedium }));
    return;
  }
  if (t.kind === "file" && t.text) {
    n.push({ kind: "custom", build: (i) => i.chat.uploadedFileMessage(t.text, t.note || "uploaded") });
    return;
  }
  t.kind !== "component" || !t.component || nd(n, e, t);
}
function nd(n, e, t) {
  const a = t.component;
  if (a.kind === "table") {
    const i = Ri(a, `${e}-${t.id}`);
    sd(e, t, i) && (i.scrollAlign = "equal-inset"), n.push({ kind: "dataTable", config: i, at: "-=0.04" });
    return;
  }
  if (a.kind === "strategyCards") {
    n.push({ kind: "strategyPlans", plans: Nn(a), at: "-=0.04" });
    return;
  }
  if (a.kind === "enrichment") {
    n.push({ kind: "enrichmentPanel", config: md(a), at: "+=0.12" });
    return;
  }
  if (a.kind === "dataSources") {
    const i = gd(a);
    n.push({
      kind: e === "data-marketplace" ? "marketingDataSourcesGrid" : "dataSourcesGrid",
      config: i,
      at: e === "data-marketplace" ? "+=0.44" : "-=0.04"
    });
    return;
  }
  if (a.kind === "uploadedFiles") {
    n.push({ kind: "custom", build: (i) => i.chat.uploadedFilesMessage(Ln(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "mailboxConnection") {
    On(n, qn(a));
    return;
  }
  if (a.kind === "styleProfile") {
    n.push({ kind: "custom", build: (i) => i.chat.outreachStyleProfile(fd(a)), at: "-=0.02" });
    return;
  }
  if (a.kind === "proximityList") {
    n.push({ kind: "custom", build: (i) => i.chat.proximityLeadList(wd(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "personalizationSwipeGame") {
    n.push({ kind: "personalizationSwipeGame", config: bd(a), at: "+=0.06" });
    return;
  }
  if (a.kind === "sequenceEngagement") {
    n.push({ kind: "sequenceEngagement", config: Bn(a, `${e}-${t.id}`), at: "-=0.02" });
    return;
  }
  n.push({ kind: "assistant", text: [a.title, ...a.items].filter(Boolean).join(`
`) });
}
function Aa(n, e = {}) {
  return {
    kind: "thinking",
    thinking: od(n.thinking, n.text, n.note),
    hold: e.hold,
    at: e.at
  };
}
function od(n, e, t) {
  return n?.items.length ? {
    title: n.title,
    elapsed: n.elapsed,
    items: n.items.map((a) => ({
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
function Ri(n, e) {
  const t = ld(n.columns), a = n.rows.map((o, s) => cd(o, t, s)), i = Math.min(10, a.length || 10), r = n.pagination?.ranges.map((o, s) => ({
    page: s + 1,
    range: o,
    rows: a.slice(s * i, (s + 1) * i)
  })).filter((o) => o.rows.length) ?? [];
  return {
    id: e === "website-visitors-sales" ? e : le(n.title || e),
    title: n.title,
    eyebrow: n.eyebrow,
    count: n.count,
    variant: t.variant ?? yd(n),
    columns: t.columns,
    rows: r[0]?.rows ?? a,
    actions: n.actions?.map(hd),
    pagination: r.length > 1 ? {
      pageSize: i,
      totalRows: _d(n, a.length),
      activePage: 1,
      pages: r
    } : void 0
  };
}
function sd(n, e, t) {
  return n !== "data-marketplace" ? !1 : e.id === "data-marketplace-step-3" || le(t.title) === "new-hires-at-dev-tool-companies";
}
function ld(n) {
  const e = n.findIndex((o) => o.trim().toLowerCase() === "name"), t = e >= 0 ? n.findIndex((o, s) => s > e && /^role\b/i.test(o.trim())) : -1, a = e >= 0 && t >= 0, i = n.map((o, s) => s).filter((o) => o !== t), r = i.map((o) => {
    const s = n[o] || `Column ${o + 1}`;
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
      width: dd(s, a)
    };
  });
  return {
    columns: r,
    sourceIndexes: i,
    foldedRoleIndex: a ? t : void 0,
    mutualConnectionKey: r.some((o) => o.key === "mutualConnection") ? "mutualConnection" : void 0,
    variant: r.some((o) => o.key === "mutualConnection") ? "connections" : void 0
  };
}
function dd(n, e) {
  if (!e) return;
  const t = n.toLowerCase();
  return t.includes("connector") || t.includes("connection") ? "minmax(170px,0.78fr)" : t.includes("email") ? "minmax(190px,0.95fr)" : t.includes("mobile") ? "minmax(150px,0.72fr)" : "minmax(130px,1fr)";
}
function cd(n, e, t) {
  const a = {};
  if (e.columns.forEach((i, r) => {
    a[i.key] = n[e.sourceIndexes[r]] ?? "";
  }), e.foldedRoleIndex !== void 0 && (a.prospectDetail = n[e.foldedRoleIndex] ?? ""), e.mutualConnectionKey) {
    const i = pd(a[e.mutualConnectionKey] ?? ""), r = ud(t);
    a[e.mutualConnectionKey] = i.name, a.mutualConnectionDetail = i.title, a.mutualConnectionContext = i.context, i.name && r && (a.mutualConnectionBadge = r);
  }
  return {
    id: `${le(n[0] || "row")}-${t + 1}`,
    values: a
  };
}
function ud(n) {
  const e = [2, 3, 7, null, 1, 12, 4, 5, null, 8, 6, 10], t = e[n % e.length];
  return t === null ? null : `+${t} more`;
}
function pd(n) {
  const [e = "", t = ""] = n.split(/\s+[—–]\s+/, 2), a = e.trim().match(/^(.+?)(?:\s*\((.+)\))?$/);
  return {
    name: a?.[1]?.trim() || n.trim(),
    title: a?.[2]?.trim() || "",
    context: t.trim()
  };
}
function hd(n) {
  const e = n.label.toLowerCase().includes("dial") ? "power-dialer" : "email-sequence";
  return {
    id: e,
    label: n.label,
    icon: e === "power-dialer" ? "dialer" : "email",
    tooltip: n.tooltip,
    badge: n.badge || void 0
  };
}
function Nn(n) {
  return n.cards.map((e, t) => ({
    id: le(e.label || e.title || `strategy-${t + 1}`),
    label: e.label,
    title: e.title,
    summary: e.summary,
    bullets: e.summary.split(/\n+/).map((a) => a.trim()).filter(Boolean)
  }));
}
function md(n) {
  return {
    id: le(n.title || "enrichment"),
    title: n.title,
    subtitle: n.subtitle,
    modeLabel: "Balanced",
    fields: n.fields
  };
}
function gd(n) {
  return {
    id: le(n.title || "data-sources"),
    title: n.title,
    subtitle: n.subtitle,
    sources: n.sources.map((e, t) => ({
      id: le(e.name || `source-${t + 1}`),
      category: e.category,
      name: e.name,
      detail: e.detail,
      logoSrc: e.logoSrc
    }))
  };
}
function Ln(n) {
  return n.files.map((e) => ({
    name: e.name,
    detail: e.detail,
    type: e.type
  }));
}
function qn(n) {
  return {
    id: le(n.title || "mailbox-connection"),
    title: n.title,
    subtitle: n.subtitle,
    provider: n.provider,
    account: n.account,
    status: n.status,
    ctaLabel: n.ctaLabel,
    secondaryCtaLabel: n.secondaryCtaLabel,
    loadingLabel: n.loadingLabel,
    learningTitle: n.learningTitle,
    learningDetail: n.learningDetail,
    learningReadyDetail: n.learningReadyDetail,
    signals: n.signals
  };
}
function On(n, e) {
  const t = F(
    `[data-mailbox-connect="${e.id}"]`,
    "center",
    {
      desktop: { x: 2, y: 0 },
      tablet: { x: 1, y: 0 },
      mobile: { x: 0, y: 0 }
    },
    !1
  );
  n.push(
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
function fd(n) {
  return {
    id: le(n.title || "style-profile"),
    title: n.title,
    subtitle: n.subtitle,
    signals: n.signals,
    examples: n.examples
  };
}
function wd(n) {
  return {
    id: le(n.title || "proximity-list"),
    title: n.title,
    subtitle: n.subtitle,
    leads: n.leads
  };
}
function bd(n) {
  return {
    id: le(n.title || "personalization-swipe"),
    title: n.title,
    subtitle: n.subtitle,
    prompt: n.prompt,
    labels: { avoid: "avoid", use: "use" },
    completeLabel: "personalization rules learned",
    signals: n.signals.map((e, t) => ({
      id: le(e.label || `signal-${t + 1}`),
      label: e.label,
      detail: e.detail,
      decision: e.decision
    }))
  };
}
function Bn(n, e) {
  return {
    id: e,
    title: n.title,
    subtitle: n.subtitle,
    peopleCount: n.peopleCount,
    launchLabel: n.launchLabel,
    sequences: n.sequences.map((t) => ({
      ...t,
      steps: t.steps?.map((a) => ({
        ...a,
        waitDays: a.waitDays ? Number(a.waitDays) : void 0
      }))
    })),
    channels: n.channels.map((t) => ({
      label: t.label,
      detail: t.detail,
      badge: t.badge || void 0
    }))
  };
}
function qe(n, e) {
  return n.steps.find((t) => t.kind === e);
}
function Nt(n, e) {
  return n.steps.find(
    (t) => t.kind === "component" && t.component?.kind === e
  );
}
function zn(n) {
  return n.length > 72 ? M.typeLong : n.length > 38 ? M.typeMedium : M.typeShort;
}
function yd(n) {
  const e = `${n.title} ${n.eyebrow ?? ""}`.toLowerCase();
  if (e.includes("enrich")) return "enriched";
  if (e.includes("filter") || e.includes("raised")) return "filtered";
}
function _d(n, e) {
  const t = n.pagination?.ranges ?? [], i = t[t.length - 1]?.match(/of\s+(\d+)/i);
  return i ? Number(i[1]) : e;
}
function le(n) {
  return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
}
const xd = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], vd = [
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
], Fn = [
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], kd = [
  { key: "name", label: "Prospect", width: "minmax(220px,0.95fr)" },
  { key: "email", label: "Work email", width: "minmax(190px,0.95fr)" },
  { key: "number", label: "Mobile", width: "minmax(150px,0.72fr)" },
  { key: "connector", label: "Connector", width: "minmax(170px,0.78fr)" }
], Sd = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "8 records",
  scrollAlign: "equal-inset",
  columns: Fn,
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
}, Cd = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  columns: Fn,
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
}, Ad = {
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
}, Td = {
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
}, Ed = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: kd,
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
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        prospectDetail: "Growth Engineer at Square",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        connector: "Owen Lee (Unify)",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database"
      }
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        prospectDetail: "Head of Revops at Square",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        connector: "Rachel Cho (Unify)",
        avatarTone: "6",
        avatarUrl: "https://i.pravatar.cc/64?img=59",
        source: "database"
      }
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        prospectDetail: "COO at Stripe",
        email: "pbateman@stripe.com",
        number: "+1 (415) 555-0142",
        connector: "Evan Brooks (Unify)",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage"
      }
    },
    {
      id: "miles-kibble",
      values: {
        name: "Miles Kibble III",
        prospectDetail: "Head of Chaos at Stripe",
        email: "mkibble@stripe.com",
        number: "+1 (628) 555-2210",
        connector: "Sam Hollis (Unify)",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage"
      }
    },
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        prospectDetail: "Money Manager at Stripe",
        email: "ndank@stripe.com",
        number: "+1 (415) 555-7733",
        connector: "Noah Singh (Unify)",
        avatarTone: "9",
        avatarUrl: "https://i.pravatar.cc/64?img=49",
        source: "engage"
      }
    }
  ]
}, fr = [
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
], yt = {
  id: "gmail-mailbox-connection",
  title: "Connect a mailbox",
  subtitle: "Unify will recent emails, replies, and meeting context to learn how you actually communicate",
  provider: "Gmail",
  account: "joel@unifygtm.com",
  status: "Connected",
  ctaLabel: "Gmail",
  secondaryCtaLabel: "Outlook",
  loadingLabel: "connecting",
  learningTitle: "Learning your style",
  learningDetail: "Analyzing vocabulary...",
  learningReadyDetail: "73 tone & tactic rules defined",
  signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"]
}, Md = {
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
}, Pd = {
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
}, Id = {
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
}, Dd = {
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
}, Rd = [
  { key: "name", label: "Name", width: "1.2fr" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" }
], wr = [
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
], Nd = [
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
], Ld = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  columns: Rd,
  rows: wr,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: wr },
      { page: 2, range: "11-20 of 50 people", rows: Nd }
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
}, qd = {
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
}, Hn = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: Pn,
    entryLeadTime: In,
    prepare: (n) => {
      n.chat.prepareSignup();
    },
    build: (n) => Ee(n, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@acme.co", duration: M.typeShort },
      { kind: "status", text: "Building workspace", at: "-=0.16" },
      { kind: "transitionSignupToChat", at: `+=${M.beat}` },
      { kind: "status", text: "Researching Acme", at: "<" },
      { kind: "thinking", steps: xd, hold: 0.46, at: "+=0.04" },
      { kind: "assistant", text: "Here are some ideas I can put into action for you:" },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: vd, at: "-=0.08" },
      je(Le.right, "+=0.18")
    ])
  },
  {
    id: "data-marketplace",
    label: "100+ data sources at your fingertips",
    navLabel: "100+ data sources at your fingertips",
    navDescription: "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and more in a single natural language search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    entry: xa.dataMarketplace,
    entryLeadTime: ci,
    build: (n) => Ee(n, [
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
      { kind: "dataTable", config: Sd, at: "-=0.04" },
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
      { kind: "dataTable", config: Cd, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: M.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${M.beat}`
      },
      { kind: "enrichmentPanel", config: Ad, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: Ed, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: Td, at: "+=0.44" },
      je(Le.bottomRight, "+=3")
    ])
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns your sales context, protects ICP fit, and ranks leads by relationship proximity.",
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", offset: { x: -48, y: 168 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", offset: { x: -44, y: 144 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", offset: { x: -36, y: 112 } }
    },
    entryLeadTime: 0.18,
    build: (n) => {
      const e = n.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context."
      }), t = n.chat.prepareCursorFile("4 context files", n.cursor, "DOC", fr), a = F(
        `[data-mailbox-connect="${yt.id}"]`,
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
      }, r = F("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 }
      });
      return Ee(n, [
        { kind: "status", text: "connect mailbox" },
        { kind: "custom", build: () => n.chat.mailboxConnection(yt), at: "+=0.04" },
        {
          kind: "custom",
          build: () => n.cursor.scanAcross(`[data-mailbox-connection="${yt.id}"]`, {
            label: `mailbox-cta-skim-${yt.id}`,
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
            label: `mailbox-connect-${yt.id}`
          },
          at: "+=0.08"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => n.chat.connectMailbox(yt.id), at: "<+=0.08" },
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
        { kind: "custom", build: () => t.startFollow(), at: "-=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(n.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: r,
          options: { mode: "drag", speed: "slow", releaseHold: 0.34, label: "drag-context-files" },
          at: "<+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.18" },
        { kind: "custom", build: () => t.landAsUploadedFiles(fr), at: "<" },
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
          at: `+=${M.beat}`
        },
        { kind: "custom", build: () => n.chat.outreachStyleProfile(Md), at: "-=0.02" },
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
        { kind: "custom", build: () => n.chat.proximityLeadList(Pd), at: "-=0.04" },
        je(Le.bottomRight, "+=0.16")
      ]);
    }
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    entry: xa.researchBrief,
    entryLeadTime: ci,
    build: (n) => {
      const e = F(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
        "center"
      ), t = F(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
        { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
        !1
      ), a = F(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
        {},
        !1
      ), i = F(
        '[data-sequence-person-button="visitor-outreach-sequences:next"]',
        "center"
      ), r = F(
        '[data-sequence-kickoff="visitor-outreach-sequences"]',
        "center"
      );
      return Ee(n, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: M.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
          fromEntry: !0
        },
        { kind: "dataTable", config: Ld, at: "-=0.02" },
        {
          kind: "cursorMove",
          target: e,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
          at: "+=0.2"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => n.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
        { kind: "status", text: "ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => n.timeline().to({}, { duration: M.beat + 0.58 })
        },
        {
          kind: "cursorMove",
          target: t,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
          at: "+=0.42"
        },
        { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
        { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
        {
          kind: "cursorMove",
          target: a,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
        },
        { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => n.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
        { kind: "status", text: "building outreach sequence", at: "<" },
        { kind: "custom", build: () => n.chat.sequenceBuildThinking(Dd), at: "+=0.06" },
        { kind: "sequenceEngagement", config: Id, at: "-=0.02" },
        { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-evan-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => n.chat.sequencePerson("visitor-outreach-sequences", 1), at: "-=0.03" },
        { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-clara-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => n.chat.sequencePerson("visitor-outreach-sequences", 2), at: "-=0.03" },
        { kind: "custom", build: () => n.timeline().to({}, { duration: M.beat + 0.28 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: r,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => n.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
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
    build: (n) => {
      const e = n.chat.prepareCsvDropArea(), t = n.chat.prepareCursorFile("webinar_attendees.csv", n.cursor), a = F("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 }
      });
      return Ee(n, [
        { kind: "status", text: "waiting for CSV" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(n.cursor), at: "<" },
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
          at: `+=${M.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: qd, at: "-=0.04" },
        je(Le.bottomRight, "+=0.18")
      ]);
    }
  }
], sa = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, ot = {
  sampleWindowMs: 960,
  minDurationMs: 620,
  minTravel: 480,
  minAxisReversals: 6,
  minAverageSpeed: 0.54,
  minTravelToNetRatio: 2.55,
  maxNetDistance: 165
}, K = {
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
}, Fe = {
  smoothing: 0.22,
  orbitMs: 1620,
  bobMs: 690,
  radiusX: 76,
  radiusY: 42,
  bobY: 10,
  minPointerDistance: 56,
  viewportInset: 14
}, la = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, Ya = {
  durationMs: 980,
  amplitude: 18,
  arriveDistance: 3.5
};
class Od {
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
      this.mode === "follow" ? (this.updateFollowTarget(t), this.lastMoveAt = a, this.trackDismissShake(t, a), this.hasDismissShake() && this.startReturnAfterPause(0)) : this.mode === "play" ? this.pointer && He(t, this.pointer) < 3 ? this.pointer = t : this.resumeFollowing(t) : this.mode === "sniff" && this.isPointNearStoryCursor(t, K.reengageRadius) && this.resumeFollowing(t), this.scheduleFollow();
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
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, la.smoothing, this.target), e - this.sniffStartedAt >= la.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "play") {
      if (!this.pointer) {
        this.startReturnAfterPause();
        return;
      }
      this.updatePlayTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, Fe.smoothing, this.pointer), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.getReturnHomePoint(), a = Bd((e - this.returnStartedAt) / Ya.durationMs), i = this.getReturnWavePoint(a, t), r = this.getReturnWavePoint(Math.min(1, a + 0.035), t);
      if (this.target = t, this.cursor.mimicViewportPoint(i, 1, a < 1 ? r : t), a >= 1 || He(this.getCursorViewportPoint(), t) <= Ya.arriveDistance) {
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
      if (e - this.lastMoveAt > K.idleTimeoutMs) {
        this.startPlayfulIdle(e);
        return;
      }
      this.applyMomentum(e), this.cursor.mimicViewportPoint(this.target, K.smoothing, this.pointer ?? this.target), this.scheduleFollow();
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
      }, this.velocity = Ud(a, K.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * K.trailDistance,
      y: e.y - this.trailDirection.y * K.trailDistance
    };
    He(e, t) < K.minPointerDistance && (t.x = e.x - this.trailDirection.x * K.minPointerDistance, t.y = e.y - this.trailDirection.y * K.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
  }
  startPlayfulIdle(e) {
    if (!this.active || !this.pointer) return;
    const t = this.getCursorViewportPoint();
    this.mode = "play", this.playStartedAt = e, this.playPhase = Math.atan2(t.y - this.pointer.y, t.x - this.pointer.x), this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], this.scheduleFollow();
  }
  updatePlayTarget(e) {
    if (!this.pointer) return;
    const t = e - this.playStartedAt, a = this.playPhase + t / Fe.orbitMs * Math.PI * 2, i = Math.sin(t / Fe.bobMs * Math.PI * 2), r = {
      x: this.pointer.x + Math.cos(a) * Fe.radiusX,
      y: this.pointer.y + Math.sin(a * 1.28) * Fe.radiusY + i * Fe.bobY
    };
    this.target = Fd(r, this.pointer, Fe.minPointerDistance, Fe.viewportInset);
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
    const t = this.sniffIndex, a = t * 1.92, i = la.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * i,
      y: this.sniffAnchor.y + Math.sin(a) * i * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + la.pointIntervalMs;
  }
  applyMomentum(e) {
    !this.target || e - this.lastMoveAt < 48 || Math.hypot(this.velocity.x, this.velocity.y) < K.minMomentum || (this.target = {
      x: this.target.x + this.velocity.x * K.momentumScale,
      y: this.target.y + this.velocity.y * K.momentumScale
    }, this.velocity = {
      x: this.velocity.x * K.momentumDecay,
      y: this.velocity.y * K.momentumDecay
    });
  }
  startReturnAfterPause(e = K.returnDelayMs) {
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
    const a = this.returnStart ?? this.getCursorViewportPoint(), i = zd(e), r = t.x - a.x, o = t.y - a.y, s = Math.hypot(r, o), l = {
      x: a.x + r * i,
      y: a.y + o * i
    };
    if (s < 1) return l;
    const d = Math.sin(Math.PI * e), c = Math.sin(Math.PI * 2 * e) * d * Ya.amplitude * this.returnWaveDirection;
    return {
      x: l.x - o / s * c,
      y: l.y + r / s * c
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
    return Gd(i, e) > K.maxBrowserDistance;
  }
  getChatShell() {
    return this.chatShell?.isConnected ? this.chatShell : (this.chatShell = this.root.querySelector("[data-chat-shell]"), this.chatShell);
  }
  isPointNearStoryCursor(e, t = sa.radius) {
    const a = this.root.getBoundingClientRect(), i = this.cursor.readPosition(), r = {
      x: a.left + i.x,
      y: a.top + i.y
    };
    return He(e, r) <= t;
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
    this.pruneSampleList(this.samples, e, sa.sampleWindowMs);
  }
  trackDismissShake(e, t) {
    this.dismissSamples.push({ ...e, time: t }), this.pruneSampleList(this.dismissSamples, t, ot.sampleWindowMs);
  }
  pruneSampleList(e, t, a) {
    let i = 0;
    for (; i < e.length && t - e[i].time > a; )
      i += 1;
    i > 0 && e.splice(0, i);
  }
  hasMimicGesture() {
    return this.samples.length < 4 ? !1 : this.samples.reduce((t, a, i) => {
      const r = this.samples[i - 1];
      return r ? t + He(a, r) : t;
    }, 0) >= sa.minTravel && this.countAxisReversals(this.samples) >= sa.minAxisReversals;
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
      return u ? l + He(d, u) : l;
    }, 0), o = He(t, a), s = r / Math.max(o, 1);
    return i >= ot.minDurationMs && r >= ot.minTravel && o <= ot.maxNetDistance && r / i >= ot.minAverageSpeed && s >= ot.minTravelToNetRatio && this.countAxisReversals(e) >= ot.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, i = 0;
    for (let r = 1; r < e.length; r += 1) {
      const o = e[r - 1], s = e[r], l = _r(s.x - o.x), d = _r(s.y - o.y);
      l && a && l !== a && (t += 1), d && i && d !== i && (t += 1), l && (a = l), d && (i = d);
    }
    return t;
  }
}
function He(n, e) {
  return Math.hypot(e.x - n.x, e.y - n.y);
}
function Bd(n) {
  return Math.min(1, Math.max(0, n));
}
function br(n, e, t) {
  return Math.min(t, Math.max(e, n));
}
function zd(n) {
  return -(Math.cos(Math.PI * n) - 1) / 2;
}
function yr(n, e) {
  return {
    x: br(n.x, e, window.innerWidth - e),
    y: br(n.y, e, window.innerHeight - e)
  };
}
function Fd(n, e, t, a) {
  const i = yr(Hd(n, e, t), a);
  if (He(i, e) >= t * 0.86) return i;
  const r = {
    x: window.innerWidth / 2 - e.x,
    y: window.innerHeight / 2 - e.y
  }, o = Math.hypot(r.x, r.y) || 1;
  return yr({
    x: e.x + r.x / o * t,
    y: e.y + r.y / o * t
  }, a);
}
function Hd(n, e, t) {
  const a = n.x - e.x, i = n.y - e.y, r = Math.hypot(a, i);
  if (r >= t) return n;
  const o = -Math.PI * 0.28, s = r > 0.01 ? a / r : Math.cos(o), l = r > 0.01 ? i / r : Math.sin(o);
  return {
    x: e.x + s * t,
    y: e.y + l * t
  };
}
function Gd(n, e) {
  const t = Math.max(e.left - n.x, 0, n.x - e.right), a = Math.max(e.top - n.y, 0, n.y - e.bottom);
  return Math.hypot(t, a);
}
function Ud(n, e) {
  const t = Math.hypot(n.x, n.y);
  return t <= e || t === 0 ? n : {
    x: n.x / t * e,
    y: n.y / t * e
  };
}
function _r(n) {
  return Math.abs(n) < 2 ? 0 : Math.sign(n);
}
const xr = {
  minPixelDelta: 0.5
};
class Vd {
  constructor(e, t, a, i, r, o) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = i, this.chat = r, this.options = o, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new Od(this.root, this.cursor, {
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
  updateStories(e, t = {}) {
    if (!e.length) return;
    const a = this.stories[this.activeIndex]?.id, i = this.stories, r = new Map(this.stories.map((d, c) => [d.id, this.storyProgress[c] ?? 0])), o = this.cursor.getPosition(), s = this.playing, l = Wd(i, e);
    if (this.stories = e, this.storyProgress = this.stories.map((d) => r.get(d.id) ?? 0), this.activeIndex = Math.max(0, this.resolveStoryIndex(a ?? this.stories[0].id)), l && this.renderStoryTabs(), t.restartActive) {
      this.stopTimeline(), this.setHistoryPaused(!1), this.activeTimeline = this.buildTimeline(this.activeIndex, o), this.activeTimeline.progress(0), this.playing = s || this.options.autoplay, this.updateStoryMeta(), this.updateProgress(), this.updatePlayButton(), this.playing && this.activeTimeline.play();
      return;
    }
    this.updateStoryMeta(), this.updateAllTabProgress();
  }
  goTo(e) {
    const t = this.resolveStoryIndex(e);
    if (t < 0 || !this.stories[t]) return;
    const a = this.cursor.getPosition();
    this.storyProgress[t] = 0, this.stopTimeline(), this.setHistoryPaused(!1), this.activeIndex = t, this.activeTimeline = this.buildTimeline(this.activeIndex, a), this.activeTimeline.progress(0), this.playing = this.options.autoplay, this.updateStoryMeta(), this.updateProgress(), this.updatePlayButton(), this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex), this.options.autoplay && this.activeTimeline.play();
  }
  destroy() {
    this.stopTimeline(), this.pausedCursorMimic?.destroy(), this.resizeObserver?.disconnect(), window.clearTimeout(this.resizeTimer), this.clearStoryTabListeners();
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
    }), o = this.cursor.moveTo(a.entry, {
      mode: "text",
      intent: "entry",
      speed: "normal",
      label: "story-entry"
    }), s = a.build(i), l = a.entryLeadTime ?? 0.24;
    return r.add(o, 0), s.pause(0), r.add(s, Math.max(0, o.duration() - l)), s.paused(!1), this.chat.prepareStoryStart(), r;
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
    const a = this.playing;
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.setHistoryPaused(!1), this.chat.stopScrollMotion();
    const i = da(e), r = this.activeTimeline.duration();
    this.playing = a, this.seekTween = w.to(this.activeTimeline, {
      time: r * i,
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
    const i = (d) => {
      if ((d.target instanceof Element ? d.target : null)?.closest(".wa-story-tab__marker")) {
        d.preventDefault();
        return;
      }
      this.goTo(t);
    };
    a.addEventListener("click", i), this.storyTabListeners.push(() => a.removeEventListener("click", i));
    const r = document.createElement("span");
    r.className = "wa-story-tab__marker", r.setAttribute("aria-hidden", "true");
    const o = (d) => this.beginStoryProgressScrub(d, t, r);
    r.addEventListener("pointerdown", o), this.storyTabListeners.push(() => r.removeEventListener("pointerdown", o));
    const s = document.createElement("span");
    s.className = "wa-story-tab__body";
    const l = document.createElement("span");
    if (l.className = "wa-story-tab__title", l.textContent = e.navLabel ?? e.label, s.append(l), e.navDescription) {
      const d = document.createElement("span");
      d.className = "wa-story-tab__description", d.textContent = e.navDescription, s.append(d);
    }
    return a.append(r, s), a;
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
    const i = this.playing, r = (d) => {
      d.pointerId === e.pointerId && (d.preventDefault(), this.scrubStoryProgress(t, a, d.clientY));
    }, o = (d) => {
      d.pointerId === e.pointerId && (d.preventDefault(), this.endStoryProgressScrub(!0));
    }, s = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
    }, l = a.getBoundingClientRect();
    this.storyProgressScrub = {
      storyIndex: t,
      wasPlaying: i,
      pointerId: e.pointerId,
      marker: a,
      trackTop: l.top,
      trackHeight: l.height,
      removeListeners: s
    }, a.dataset.scrubbing = "true", window.addEventListener("pointermove", r, { passive: !1 }), window.addEventListener("pointerup", o, { passive: !1 }), window.addEventListener("pointercancel", o, { passive: !1 }), this.scrubStoryProgress(t, a, e.clientY);
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
    this.activeTimeline && (this.activeTimeline.progress(da(e)).pause(), this.updateProgress());
  }
  endStoryProgressScrub(e) {
    const t = this.storyProgressScrub;
    t && (t.removeListeners(), t.marker.removeAttribute("data-scrubbing"), this.storyProgressScrub = null, this.playing = e ? t.wasPlaying : this.playing, e && t.wasPlaying ? this.activeTimeline?.play() : this.activeTimeline?.pause(), this.updatePlayButton());
  }
  getMarkerProgress(e, t, a = null) {
    if (a?.marker === e && a.trackHeight > 0)
      return da((t - a.trackTop) / a.trackHeight);
    const i = e.getBoundingClientRect();
    return i.height <= 0 ? 0 : da((t - i.top) / i.height);
  }
  attachChatHistoryScroll() {
    const e = this.root.querySelector("[data-chat-shell]"), t = this.root.querySelector("[data-chat-thread]");
    if (!e || !t) return;
    const a = (i) => {
      if (!this.activeTimeline || Math.abs(i.deltaX) > Math.abs(i.deltaY)) return;
      const r = this.getWheelPixelDelta(i);
      if (Math.abs(r) < xr.minPixelDelta) return;
      const o = this.getThreadMaxScroll(t);
      if (o <= 0 || !(r < 0 || this.historyPaused)) return;
      const l = Gn(t.scrollTop + r, 0, o);
      if (!(Math.abs(l - t.scrollTop) >= 0.5)) return;
      const c = Math.max(0, r - (o - t.scrollTop));
      i.preventDefault(), this.pauseForChatHistory(), t.scrollTop = l, c >= xr.minPixelDelta && window.scrollBy({ top: c, left: 0, behavior: "auto" });
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
function Gn(n, e, t) {
  return Math.min(t, Math.max(e, n));
}
function da(n) {
  return Gn(n, 0, 1);
}
function Wd(n, e) {
  return n.length !== e.length ? !0 : e.some((t, a) => {
    const i = n[a];
    return !i || i.id !== t.id || i.label !== t.label || i.navLabel !== t.navLabel || i.navDescription !== t.navDescription;
  });
}
const ca = ["mobile", "tablet", "desktop", "wide"];
class jd {
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
    const o = r.getBoundingClientRect();
    let s = this.anchorPoint(o, a.anchor ?? "center");
    if (s = {
      x: s.x - i.left,
      y: s.y - i.top
    }, a.outside && (s = this.outsidePoint(s, o, i, a.outside)), a.humanOffset) {
      const l = Cn(t), d = Math.min(o.width * 0.18, 18), c = Math.min(o.height * 0.18, 14);
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
      const t = this.getBreakpoint(), a = ca.indexOf(t), i = [
        t,
        ...ca.slice(0, a).reverse(),
        ...ca.slice(a + 1)
      ];
      for (const r of i)
        if (e[r]) return e[r];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return ca.some((t) => t in e);
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
    const r = t.left - a.left, o = t.right - a.left, s = t.top - a.top, l = t.bottom - a.top;
    switch (i) {
      case "left":
        return { ...e, x: r - 42 };
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
function Yd(n, e = {}) {
  if (n.classList.add("wa-section"), n.querySelector("[data-chat-shell]")) return;
  const t = e.showBuilder === !1 ? "" : `
      <div class="wa-builder" data-story-builder>
        <div class="wa-builder__header">
          <div>
            <p class="wa-builder__eyebrow">Story builder</p>
            <h3 class="wa-builder__title">Homepage story draft</h3>
          </div>
        </div>

        <div class="wa-builder__tabs" data-builder-tabs aria-label="Builder stories"></div>
        <div class="wa-builder__story-meta" data-builder-story-meta aria-label="Story title and summary"></div>

        <div class="wa-builder__layout">
          <div class="wa-builder__workspace">
            <div class="wa-builder__add-rail" data-builder-add-rail aria-label="Add message"></div>
            <div class="wa-builder__thread" data-builder-thread aria-label="Editable story chat"></div>
          </div>

          <aside class="wa-builder__side">
            <div class="wa-builder__panel" data-builder-panel aria-label="Selected message inspector"></div>
            <div class="wa-builder-export" hidden>
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
  n.innerHTML = `
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
                <span class="wa-signup-scene__logo" data-signup-logo-target aria-hidden="true">${vn}</span>
                <h3 class="wa-signup-scene__title">sign up</h3>
                <div class="wa-signup-field" data-signup-field>
                  <span data-signup-email></span>
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

      ${t}
    </div>
  `;
}
function $d(n, e = {}) {
  Yd(n, { showBuilder: e.showBuilder !== !1 });
  const t = e.stories?.length ? e.stories : Hn, a = e.builderDraftEndpoint ?? "/api/story-draft", i = e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, r = new jd(n), o = new Ns(n), s = new Vs(n, r, { reducedMotion: i }), l = new Vd(n, t, r, s, o, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), d = (p, m = {}) => {
    l.updateStories(Vl(p, t), {
      restartActive: m.source === "load"
    });
  }, c = l.destroy.bind(l), u = e.showBuilder === !1 ? null : new Js(n, t, {
    onStorySelect: (p) => l.goTo(p),
    onStoriesChange: d,
    draftEndpoint: a,
    draftAutoSave: e.builderDraftAutoSave
  });
  return l.mount(), u?.mount(), !u && a && Xd(a, d), {
    play: l.play.bind(l),
    pause: l.pause.bind(l),
    next: l.next.bind(l),
    previous: l.previous.bind(l),
    goTo: l.goTo.bind(l),
    getState: l.getState.bind(l),
    destroy: () => {
      u?.destroy(), c(), o.destroy(), s.destroy();
    }
  };
}
async function Xd(n, e) {
  try {
    const t = await fetch(n, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!t.ok) return;
    const a = Tn(await t.json());
    if (!a || a.schemaVersion !== _t) return;
    e(a.stories, { source: "load" });
  } catch {
  }
}
const $a = `:root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .12);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 24px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: var(--wa-chat-x-padding);--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: var(--wa-chat-x-padding);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-header-weight: 430;--wa-chat-thinking-weight: 400;--wa-chat-detail-weight: 400;--wa-thinking-logo-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 11'%3E%3Cpath fill='black' d='M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z'/%3E%3Cpath fill='black' d='M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z'/%3E%3C/svg%3E");--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 128px;--wa-composer-send-size: 38px;--wa-history-resume-height: 42px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow-head: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABP0lEQVR42t3XwXGEIBQG4NeBR49uB6QDSqAEtgPSAXvMzXTglpAOSAeWgB2wHbwMGTQq7gL6vOSfQR2HeZ+IOgiICIh4QcS3cEza/OaKf/k6A/jGZe6nANZadM6RIxPAOUfGGDmyAACAHIkAamQToESeAlTIS4ACSQJHkSzgCJIN7EWKgD1IMVCK7AJKkN1ALnIIyEEOAymEBNhAPskB33yNkMcpAPyWm0IPaK1pRmCMwURu2UBd19E5KeWzwo958SQghMBhGGArzrljX9PZVYKUMgK01mWAUmoq3rbt4mkwxkRA0zTZwPtYyU9e3/fz4h9jR8ZYhHRdlwVAeL3Xuc47+mLrcM6zAQir61sY0WXd0U9qVVURYq3NBpJNKRUB/gEgA/zVlt6m4oWUEOK8EYxzMSJ+n3rh4Izfpv8F/ADB/dNnKnKg1wAAAABJRU5ErkJggg==);--wa-cursor-arrow-tail: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABSUlEQVR42t3X3XGEIBAHcDrw3nw0HVAC6YASSAekA+3AdOB1wnWgHWAHXAdkljkyRPxAFvOQnXF8UP8/XHAGibWWXHmQ/wNorYkx5jqAMUYopcWRXwBUaSQCSiOrQElkEyiF7AIlkEMAiyQBGCQZyEVOATnIaeAskgWcQbKBVAQFpCBo4AgpAuwhxQAoyLgUgCoF2LWjbVv7qmcu4IKUUvagumSgruto1EKIreBnGH4IcM7JPM+r7TDG+NCPrA9NCOGvuRHv9PuRBEgpf8L7vg9vcj1fAk3ThK15S9rZKaXIOI7Lm1xRSiNkGAZ/+Y7ZOsLDLmwJMMbCyb3lAu+QAJNaVVWEaK098onZ/E6QIKWMgGDJPjAALEU32p02Wez2HfpsOedbbzBhgc7PhUfgHHxwHRa4+blYqQmzipbI3bfrFfy1Ff4nv1DfGYDdsG+uObgAAAAASUVORK5CYII=);--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft);cursor:ns-resize;touch-action:none}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear;will-change:transform}.wa-story-tab__marker:after{content:"";position:absolute;inset:0 -8px}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__marker[data-scrubbing=true]:before{transition:none}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-control-button svg{display:block;width:16px;height:16px;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;fill:none}.wa-stage{position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:14px;line-height:1;font-weight:560}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:20px;min-height:0;padding-bottom:0;color:var(--wa-ink);will-change:transform,opacity}.wa-signup-scene__logo{display:block;width:clamp(70px,8.4vw,96px);aspect-ratio:18 / 11;margin-bottom:4px;color:var(--wa-orange);pointer-events:none}.wa-signup-scene__logo svg{display:block;width:100%;height:100%}.wa-signup-scene__title{margin:0;color:var(--wa-ink);font-family:var(--wa-font-feature);font-size:23px;line-height:1;font-weight:620;letter-spacing:0}.wa-signup-field{display:flex;align-items:center;width:min(292px,82%);min-height:48px;padding:0 14px;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-color-panel);font-size:14px;line-height:1;font-weight:460;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"you@company.com";color:var(--wa-placeholder)}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:auto}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%;will-change:transform,opacity}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message[data-message-role=assistant]:not(.wa-message--component) .wa-message__body{padding-right:0;padding-left:0}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:16px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;max-width:none;justify-self:end;padding:0;background:transparent}.wa-message[data-message-role=user].wa-message--file .wa-message__body{max-width:none;background:transparent}.wa-thinking-block{--wa-thinking-icon-column: 18px;--wa-thinking-column-gap: 8px;--wa-thinking-guide-top: -9px;position:relative;display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:var(--wa-thinking-icon-column) auto auto;align-items:center;justify-content:start;gap:var(--wa-thinking-column-gap);justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-header-weight);will-change:transform,opacity}.wa-thinking__glyph{position:relative;display:inline-block;width:18px;height:11px;opacity:1;color:#67635f;transform-origin:center}.wa-thinking__glyph:after,.wa-thinking-logo-traveler:after{content:"";position:absolute;inset:0;display:block;width:18px;height:11px;opacity:0;background:linear-gradient(100deg,#67635f 0% 30%,#f23b0a 48%,#c8c3bb 58%,#67635f 74% 100%);background-position:120% 50%;background-size:260% 100%;pointer-events:none;-webkit-mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat;mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat;will-change:background-position,opacity}.wa-thinking__glyph[data-logo-role=shadow]{color:#c8c3bb;opacity:.88}.wa-thinking-logo-traveler{position:absolute;top:0;left:0;z-index:4;display:inline-block;width:18px;height:11px;color:#67635f;pointer-events:none;transform-origin:center;will-change:transform,opacity}.wa-thinking__logo-mark{display:block;width:18px;height:11px;overflow:visible}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]) .wa-thinking__logo-mark,.wa-thinking-logo-traveler[data-logo-mode=thinking] .wa-thinking__logo-mark{opacity:0}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]):after,.wa-thinking-logo-traveler[data-logo-mode=thinking]:after{opacity:1;animation:wa-thinking-logo-gradient 1.28s linear infinite}.wa-thinking__glyph[data-logo-mode=done]:not([data-logo-role=shadow]),.wa-thinking-logo-traveler[data-logo-mode=done]{opacity:.72}.wa-thinking__title{color:#57544f}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:14px;font-weight:var(--wa-chat-thinking-weight)}.wa-research-steps{--wa-thinking-guide-end: var(--wa-thinking-guide-top);position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0}.wa-research-steps:before{content:"";position:absolute;top:var(--wa-thinking-guide-top);left:calc(var(--wa-thinking-icon-column) / 2);width:1px;height:max(0px,calc(var(--wa-thinking-guide-end) - var(--wa-thinking-guide-top)));background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:var(--wa-thinking-icon-column) minmax(0,1fr);align-content:start;gap:var(--wa-thinking-column-gap);align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:14px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__marker{position:relative;z-index:1;justify-self:center;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__marker:before,.wa-research-step__marker:after{content:"";position:absolute}.wa-research-step__marker:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890;opacity:0;transform:scale(.74);transition:opacity .16s ease,transform .18s ease}.wa-research-step[data-step-state=complete] .wa-research-step__marker:before{opacity:1;transform:scale(1)}.wa-research-step[data-step-state=failed] .wa-research-step__marker:before{opacity:1;background:#e1544c;transform:scale(1)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label-row{display:grid;grid-template-columns:minmax(0,1fr) 9px;gap:var(--wa-thinking-column-gap);align-items:center;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:14px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;margin-top:2px;overflow:hidden;color:#86817a;font-size:13px;line-height:1.38;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-sequence-thinking-progress{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;min-width:0;padding-top:2px}.wa-sequence-thinking-progress__count{color:#8e8a83;font-size:10px;line-height:1;font-weight:560;font-variant-numeric:tabular-nums}.wa-sequence-thinking-progress__bar{display:block;height:4px;overflow:hidden;border-radius:999px;background:#e4ded6}.wa-sequence-thinking-progress__bar span{display:block;width:100%;height:100%;border-radius:inherit;background:#57544f;transform:scaleX(.02);transform-origin:left center;will-change:transform}.wa-thinking__title[data-thinking-active=true],.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail,.wa-research-step[data-step-state=complete] .wa-research-step__chevron{display:none}.wa-research-step__chevron{position:relative;z-index:1;justify-self:end;width:8px;height:14px;margin-top:0}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:14px}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none;will-change:transform,opacity}.wa-file-landing-clone{box-sizing:border-box;will-change:transform}.wa-cursor-file__card{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:8px;align-items:center;width:292px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, rgba(23, 23, 20, .12));border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:318px;height:96px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:296px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-file-color, var(--wa-orange));background:var(--wa-file-bg, rgba(242, 59, 10, .1));font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:34px;height:34px}.wa-cursor-file__card[data-file-tone=spreadsheet],.wa-uploaded-file[data-file-tone=spreadsheet]{--wa-file-color: #198754;--wa-file-bg: rgba(25, 135, 84, .12);--wa-file-border: rgba(25, 135, 84, .2)}.wa-cursor-file__card[data-file-tone=pdf],.wa-uploaded-file[data-file-tone=pdf]{--wa-file-color: #d83a2e;--wa-file-bg: rgba(216, 58, 46, .12);--wa-file-border: rgba(216, 58, 46, .2)}.wa-cursor-file__card[data-file-tone=doc],.wa-uploaded-file[data-file-tone=doc]{--wa-file-color: #2563eb;--wa-file-bg: rgba(37, 99, 235, .12);--wa-file-border: rgba(37, 99, 235, .18)}.wa-cursor-file__card[data-file-tone=text],.wa-uploaded-file[data-file-tone=text]{--wa-file-color: #6f6a63;--wa-file-bg: rgba(111, 106, 99, .12);--wa-file-border: rgba(111, 106, 99, .18)}.wa-cursor-file__card[data-file-tone=ppt],.wa-uploaded-file[data-file-tone=ppt]{--wa-file-color: #c96a12;--wa-file-bg: rgba(201, 106, 18, .13);--wa-file-border: rgba(201, 106, 18, .22)}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:292px;max-width:340px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, transparent);border-radius:8px;color:var(--wa-ink);background:var(--wa-color-user-message)}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"]{width:min(600px,calc(100vw - 72px));max-width:100%}.wa-uploaded-files__summary{color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-files__list{width:100%;grid-template-columns:repeat(2,minmax(0,1fr));justify-items:stretch}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-file{width:100%;min-width:0;max-width:none}.wa-data-table{--wa-data-table-scroll-width: 100%;display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505;will-change:transform,opacity}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:rgba(17,17,15,.22) transparent;border:1px solid #eee6df;border-radius:8px;background:var(--wa-color-panel);-webkit-overflow-scrolling:touch}.wa-data-table__grid::-webkit-scrollbar{height:6px}.wa-data-table__grid::-webkit-scrollbar-track{background:transparent}.wa-data-table__grid::-webkit-scrollbar-thumb{border-radius:999px;background:#11110f33}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);width:max(100%,var(--wa-data-table-scroll-width));min-width:max(100%,var(--wa-data-table-scroll-width));min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel);will-change:transform,opacity}.wa-data-table[data-column-count="3"]{--wa-data-table-scroll-width: 560px}.wa-data-table[data-column-count="2"]{--wa-data-table-scroll-width: 620px}.wa-data-table[data-table-variant=connections]{--wa-data-table-scroll-width: 100%}.wa-data-table[data-column-count="4"]{--wa-data-table-scroll-width: 680px}.wa-data-table[data-column-count="5"]{--wa-data-table-scroll-width: 860px}.wa-data-table[data-table-variant=enriched]{--wa-data-table-scroll-width: 760px}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:34px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:flex-start;min-width:0;padding:6px 8px;overflow:visible;border-left:0;color:#555452;font-size:14px;line-height:1.14;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{grid-row:1;align-items:flex-start;padding:9px 10px 8px;color:#555452;font-size:14px;line-height:1.08;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(1){grid-column:1}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(2){grid-column:2}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(3){grid-column:3}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(4){grid-column:4}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(5){grid-column:5}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(6){grid-column:6}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:48px}.wa-section .wa-data-table__add{position:sticky;z-index:2;grid-column:1 / -1;grid-row:1;align-self:center;justify-self:end;right:3px;display:inline-flex;align-items:center;justify-content:center;width:28px;height:26px;padding:0 0 1px;border:1px solid #eee6df;border-radius:4px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;line-height:0}.wa-data-table__add-icon{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.wa-data-table__cell-text{display:block;min-width:0;margin-top:4px}.wa-data-table__footer{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding-top:8px}.wa-data-table__actions{display:flex;align-items:center;gap:6px;min-width:0}.wa-data-table-action{position:relative;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:transparent;box-shadow:0 1px 1px #17171408;cursor:pointer}.wa-data-table-action[data-action-variant=primary]{border-color:#ded9d2;color:#555452;background:transparent}.wa-data-table-action__icon{display:block;width:14px;height:14px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.8}.wa-data-table-action__badge{position:absolute;top:-5px;right:-5px;display:none;align-items:center;min-height:15px;padding:0 5px;border-radius:999px;color:#11110f;background:var(--wa-orange);font-size:8px;line-height:1;font-weight:680}.wa-data-table-action__tooltip{display:none}.wa-data-table-floating-tooltip{position:absolute;z-index:7;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:6px;color:#fffffb;background:#11110f;box-shadow:0 8px 20px #1717142e;font-size:11px;line-height:1;font-weight:580;pointer-events:none;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .12s ease,visibility .12s ease}.wa-data-table-floating-tooltip[data-has-badge=true]{flex-direction:column;align-items:flex-start;min-height:50px;padding:8px 10px;gap:6px}.wa-data-table-floating-tooltip[data-visible=true]{opacity:1;visibility:visible}.wa-section[data-chat-history-paused=true] .wa-data-table-floating-tooltip{opacity:0;visibility:hidden}.wa-data-table-floating-tooltip__label{display:block}.wa-data-table-floating-tooltip__badge{display:inline-flex;align-items:center;min-height:15px;padding:0 6px;border-radius:999px;color:#11110f;background:#fffffb;font-size:8px;line-height:1;font-weight:650}.wa-data-table__pagination{display:inline-flex;align-items:center;justify-content:end;gap:7px;min-width:0;color:#716d66;font-size:9.5px;line-height:1;font-weight:500}.wa-data-table__range{white-space:nowrap}.wa-data-table__page-controls{display:inline-flex;align-items:center;gap:3px}.wa-data-table__page-button{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:#fffffb;font-size:9px;line-height:1;font-weight:560;cursor:pointer}.wa-data-table-action:hover,.wa-data-table-action[data-tooltip-visible=true],.wa-data-table__page-button:hover,.wa-data-table__page-button[data-tooltip-visible=true]{border-color:#bdb7ae;color:#11110f}.wa-data-table__page-button[data-active=true]{border-color:#11110f;color:#fffffb;background:#11110f}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact],.wa-data-table__cell[data-column-key=mutualConnection]{overflow:visible;color:#050505;font-weight:400;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number],.wa-data-table__cell[data-column-key=work-email],.wa-data-table__cell[data-column-key=mobile]{color:#565553}.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=mobile]{background:#0e9c901f;color:#0c6f66}.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mobile]{color:#147970}.wa-data-table--proximity .wa-data-table__row:not([data-header=true]){min-height:38px}.wa-data-table--proximity .wa-data-table__cell[data-column-key=connection]{color:var(--wa-ink);font-size:10.6px;line-height:1.2}.wa-data-table[data-table-variant=connections] .wa-data-table__grid{overflow-x:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell{overflow:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){align-items:center;gap:8px}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection] .wa-data-table-person{flex:1 1 auto;width:auto}.wa-data-table[data-table-variant=connections] .wa-data-table-person__name,.wa-data-table[data-table-variant=connections] .wa-data-table-person__detail{overflow:hidden;text-overflow:ellipsis}.wa-data-table-cell-badge{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;min-height:20px;padding:0;border:0;border-radius:0;color:#706c66;background:transparent;font-size:12px;line-height:1;font-weight:430;white-space:nowrap}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:visible}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;width:12px;height:12px;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__copy{display:grid;align-content:start;gap:2px;min-width:0;margin-top:0}.wa-data-table-person__name{min-width:0;margin-top:0;overflow:visible;color:#050505;font-size:14px;line-height:1.05;font-weight:400;overflow-wrap:normal;text-overflow:clip;white-space:nowrap}.wa-data-table-person__detail{min-width:0;overflow:hidden;color:#67635f;font-size:12px;line-height:1.12;font-weight:400;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-step-progress: 0;display:grid;gap:11px;min-width:0;max-width:420px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#56534f;will-change:transform,opacity}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:12px auto auto;gap:8px;align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#57544f;background:transparent;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-header-weight)}.wa-waterfall-rows{position:relative;display:grid;gap:9px;padding:1px 0 0}.wa-waterfall-rows:before{content:"";position:absolute;top:9px;bottom:9px;left:6px;width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:12px auto minmax(0,1fr);gap:8px;align-items:center;min-height:27px;color:#56534f;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-weight);white-space:nowrap;will-change:transform,opacity}.wa-waterfall-row__status{position:relative;z-index:1;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before,.wa-waterfall-row__status:after{content:"";position:absolute}.wa-waterfall-row__status:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row[data-step-state=complete] .wa-waterfall-row__status:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before,.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before{transform:rotate(45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{transform:rotate(-45deg)}.wa-waterfall-row__label{min-width:104px;overflow:hidden;color:#56534f;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:4px;max-width:86px;min-height:17px;padding:2px 6px 2px 15px;overflow:hidden;border:1px solid #ebe5dc;border-radius:3px;color:#7c7770;background:#fbfaf3;font-size:10px;line-height:1;text-overflow:ellipsis}.wa-waterfall-chip:before,.wa-waterfall-chip:after{content:"";position:absolute}.wa-waterfall-chip:before{top:7px;left:6px;width:4px;height:4px;border-radius:999px;background:#a49f98}.wa-waterfall-chip[data-step-state=complete]:before{top:6px;left:5px;width:7px;height:3.5px;border-bottom:1.2px solid #279443;border-left:1.2px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-chip[data-step-state=failed]{color:#a94f48}.wa-waterfall-chip[data-step-state=failed]:before,.wa-waterfall-chip[data-step-state=failed]:after{top:8px;left:5px;width:7px;height:1.2px;border-radius:999px;background:#e1544c}.wa-waterfall-chip[data-step-state=failed]:before{transform:rotate(45deg)}.wa-waterfall-chip[data-step-state=failed]:after{transform:rotate(-45deg)}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px;will-change:transform,opacity}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap;will-change:transform,opacity}.wa-strategy-plan{display:grid;align-content:start;gap:10px;min-height:0;padding:16px 18px 16px 20px;border:1px solid #dfddd5;border-radius:7px;background:#fffffa;box-shadow:0 7px 18px #1717140e;transition:background-color .16s ease,box-shadow .16s ease;will-change:transform,opacity}.wa-strategy-plan:hover,.wa-strategy-plan[data-cursor-hover]{background:#fffffe;box-shadow:0 9px 22px #17171412}.wa-strategy-plan__title{margin:0;color:#252521;font-family:var(--wa-font-feature);font-size:16px;line-height:1.18;font-weight:400;letter-spacing:0}.wa-strategy-plan__bullets{display:grid;gap:5px;margin:0;padding-left:14px;color:#5e5c55;font-family:var(--wa-font-sans);font-size:12px;line-height:1.34;font-weight:560;letter-spacing:0}.wa-strategy-plan__bullets li{padding-left:2px;white-space:nowrap}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;top:0;bottom:0;left:0;width:100%;max-width:none;padding:0;overflow:visible;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__scale{display:grid;grid-template-rows:auto auto;align-content:start;gap:68px;width:var(--wa-data-grid-artboard-width, 2048px);height:1280px;padding:80px var(--wa-data-grid-gutter-right, 87px) 0 var(--wa-data-grid-gutter-left, 87px);transform:scale(var(--wa-data-grid-scale, .2880859375));transform-origin:top left}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:0;max-width:none}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:64px;line-height:1.05;font-weight:520;letter-spacing:0;white-space:nowrap}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{display:none}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 26px;min-height:0;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(4,438px);gap:43px;align-items:start}.wa-data-source-grid__column{display:grid;align-content:start;gap:14px;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px;width:438px}.wa-data-source-group{display:grid;align-content:start;gap:9px;min-width:0;padding:0;border:0;border-radius:0;background:transparent}.wa-data-source-group__title{margin:0;color:#5e5d59;font-size:clamp(13px,1.15vw,18px);line-height:1.05;font-weight:530;letter-spacing:0;text-align:left;text-transform:none}.wa-data-source-grid--marketing .wa-data-source-group{gap:14px}.wa-data-source-grid--marketing .wa-data-source-group__title{font-size:36px;line-height:1.05;font-weight:520}.wa-data-source-grid--marketing .wa-data-source-grid__list{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:438px;gap:24px;min-height:0;padding:32px 35px;border-radius:7px;background:#e9e9e9}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-2{min-height:186px}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-3{min-height:238px}.wa-data-vendor-logo{display:inline-flex;align-items:center;justify-content:flex-start;width:100%;min-width:0;height:auto;min-height:0;max-width:100%;color:#000;opacity:1;will-change:transform,opacity}.wa-data-vendor-logo--image{opacity:1}.wa-data-vendor-logo__mark{display:flex;align-items:center;justify-content:center;width:100%;height:100%;max-width:100%;overflow:hidden;color:currentColor;font-size:clamp(18px,2.1vw,36px);line-height:1;font-weight:560;letter-spacing:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;transform:scale(var(--wa-logo-scale, 1));transform-origin:center}.wa-data-vendor-logo__image{display:block;width:auto;height:auto;max-width:100%;max-height:34px;object-fit:contain;object-position:left center;filter:brightness(0) saturate(100%);transform:scale(var(--wa-logo-scale, 1));transform-origin:left center;-webkit-user-select:none;user-select:none}.wa-data-source-grid--marketing .wa-data-vendor-logo{width:max-content;max-width:none}.wa-data-source-grid--marketing .wa-data-vendor-logo__mark{width:max-content;max-width:none;font-size:48px;transform:none;transform-origin:left center}.wa-data-source-grid--marketing .wa-data-vendor-logo__image{width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;transform:none!important}.wa-mini-game,.wa-mailbox-connection,.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-sequence-engagement{width:min(100%,560px)}.wa-mini-game__header,.wa-mailbox-connection__header,.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-mini-game__eyebrow{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:680;text-transform:uppercase}.wa-mini-game__title,.wa-mailbox-connection__title,.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-mini-game__subtitle,.wa-mailbox-connection__subtitle,.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-mailbox-connection{gap:15px}.wa-mailbox-connection__card{display:grid;grid-template-columns:minmax(0,1fr) 124px;gap:14px;align-items:center;min-width:0;padding:14px 14px 14px 16px;border:1px solid #d9d7d0;border-radius:12px;background:#f7f6f0;box-shadow:inset 0 0 0 1px #fffff96b;will-change:transform,opacity}.wa-mailbox-connection__copy{display:grid;gap:15px;min-width:0}.wa-mailbox-connection__title{font-size:20px;line-height:1.08;font-weight:560}.wa-mailbox-connection__subtitle{max-width:310px;color:#11110f;font-size:14px;line-height:1.28;font-weight:400}.wa-mailbox-connection__actions{display:grid;gap:9px;justify-self:end;width:124px;min-width:0}.wa-mailbox-connection__button{position:relative;isolation:isolate;display:grid;grid-template-columns:20px max-content;align-items:center;justify-content:center;gap:8px;width:100%;min-width:0;min-height:40px;padding:0 10px;border:1px solid #d6d5cf;border-radius:5px;color:#080807;background:#fffff9;font:inherit;font-size:15.5px;line-height:1;font-weight:430;letter-spacing:0;cursor:default;overflow:visible;transform:translateZ(0);will-change:transform,opacity}.wa-mailbox-connection__button:before,.wa-mailbox-connection__button:after{content:"";position:absolute;pointer-events:none;opacity:0}.wa-mailbox-connection__button:before{inset:-1px;z-index:0;border-radius:inherit;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.82),transparent 34%),linear-gradient(90deg,#ea433500,#ea433566,#ea433500);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;filter:blur(7px)}.wa-mailbox-connection__button:after{inset:0;z-index:1;border-radius:inherit;padding:1px;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.95),rgba(234,67,53,.26) 34%,transparent 54%),linear-gradient(90deg,transparent,rgba(234,67,53,.52),transparent);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.wa-mailbox-connection__button>*{position:relative;z-index:2}.wa-mailbox-connection__button:disabled{opacity:1;pointer-events:none}.wa-mailbox-connection__provider-icon{display:block;width:20px;height:20px;flex-shrink:0;object-fit:contain}.wa-mailbox-connection__button-copy{display:grid;width:max-content;min-width:0;align-items:center}.wa-mailbox-connection__provider-label,.wa-mailbox-connection__button-label{grid-area:1 / 1;display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .18s ease,transform .18s ease}.wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection__button-label[data-mailbox-button-label=connected],.wa-mailbox-connection__spinner{display:none;opacity:0;transform:translateY(5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle]{display:none;opacity:0;transform:translateY(-5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=connected]{display:block;opacity:1;transform:translateY(0)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]{border-color:#ea433561}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:before{opacity:1;animation:wa-mailbox-gmail-radiate 1.16s ease-in-out infinite,wa-mailbox-gmail-pulse 1.72s ease-in-out infinite}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:after{opacity:1;animation:wa-mailbox-gmail-radiate 1.16s ease-in-out infinite}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect]{grid-template-columns:max-content;color:#080807;border-color:#d6d5cf;background:#fffff9}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__provider-icon{display:none}.wa-mailbox-connection__spinner{position:absolute;right:9px;width:12px;height:12px;border:1.5px solid rgba(17,17,15,.18);border-top-color:currentColor;border-radius:999px;animation:wa-spin .76s linear infinite}.wa-mailbox-connection[data-mailbox-state=loading] .wa-mailbox-connection__spinner{display:block;opacity:1;transform:translateY(0)}.wa-mailbox-learning{display:none;grid-template-columns:44px max-content minmax(90px,1fr);grid-template-rows:auto auto;grid-template-areas:"thumb title progress" "thumb detail detail";align-items:center;gap:5px 14px;padding:0;color:#5f5b55;background:transparent;will-change:transform,opacity}.wa-mailbox-learning__thumbprint{grid-area:thumb;display:grid;place-items:center;width:44px;height:44px;background:transparent}.wa-mailbox-learning__title{grid-area:title;display:inline-flex;align-items:center;gap:6px;margin:0;color:#5b5752;font-size:14px;line-height:1;font-weight:560;white-space:nowrap}.wa-mailbox-learning__ready-chevron{position:relative;top:-1px;display:inline-block;width:9px;height:9px;color:currentColor;opacity:0;transform-origin:center}.wa-mailbox-learning__ready-chevron:before{content:"";position:absolute;top:0;left:1px;width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg)}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__title{color:#11110f}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__progress{display:none}.wa-mailbox-learning__detail{grid-area:detail;margin:0;color:#8b867e;font-size:13px;line-height:1.15;font-weight:400}.wa-mailbox-thumbprint{width:36px;height:36px;overflow:visible;color:#11110f}.wa-mailbox-thumbprint__base path,.wa-mailbox-thumbprint__fill path{stroke-width:5.4}.wa-mailbox-thumbprint__base path{stroke:color-mix(in srgb,currentColor 14%,transparent)}.wa-mailbox-thumbprint__fill path{stroke:currentColor}.wa-mailbox-learning__progress{grid-area:progress;height:4px;overflow:hidden;border-radius:999px;background:#dfddd6}.wa-mailbox-learning__progress span{display:block;width:100%;height:100%;border-radius:inherit;background:#5f5b55;transform:scaleX(0);transform-origin:left center}.wa-swipe-game{gap:9px;max-width:520px}.wa-swipe-game__prompt{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.28;font-weight:430}.wa-swipe-game__axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:520}.wa-swipe-game__axis span:first-child{color:#7f1d1d94}.wa-swipe-game__axis span:nth-child(2){color:var(--wa-color-muted);font-variant-numeric:tabular-nums}.wa-swipe-game__axis span:last-child{justify-self:end;color:#1665349e}.wa-swipe-game__stack{position:relative;height:184px;overflow:visible}.wa-swipe-game__glow{position:absolute;inset:12px -18px 0;z-index:0;border-radius:999px;background:linear-gradient(90deg,rgba(127,29,29,.055),transparent 42%,transparent 58%,rgba(22,101,52,.065));filter:blur(22px);pointer-events:none}.wa-swipe-card,.wa-swipe-game__complete{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;min-width:0;border:1px solid rgba(228,228,231,.82);border-radius:21px;background:#fafafa;text-align:center;box-shadow:0 18px 45px #00000014;will-change:transform,opacity}.wa-swipe-card{gap:13px;padding:22px 26px}.wa-swipe-game[data-swipe-decision=avoid] .wa-swipe-card[data-swipe-state=active]{border-color:#d298989e;background:linear-gradient(135deg,#f8f1f1,#fafafa 68%);box-shadow:-22px 28px 70px #7f1d1d1f}.wa-swipe-game[data-swipe-decision=use] .wa-swipe-card[data-swipe-state=active]{border-color:#8eb79da3;background:linear-gradient(135deg,#fafafa 32%,#f0f7f2);box-shadow:22px 28px 70px #1665341f}.wa-swipe-card__label{max-width:360px;color:var(--wa-ink);font-size:20px;line-height:1.05;font-weight:580;letter-spacing:0}.wa-swipe-card__detail{max-width:340px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.35;font-weight:410}.wa-swipe-game__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;max-width:420px;will-change:transform,opacity}.wa-swipe-game__action{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:38px;border:1px solid var(--wa-line-12);border-radius:999px;background:var(--wa-panel);cursor:default;will-change:transform}.wa-swipe-game__action:before,.wa-swipe-game__action:after{content:"";position:absolute;display:block}.wa-swipe-game__action[data-swipe-action=avoid]{border-color:#d298987a;background:#f8f1f1e6}.wa-swipe-game__action[data-swipe-action=avoid]:before,.wa-swipe-game__action[data-swipe-action=avoid]:after{width:14px;height:1.5px;border-radius:999px;background:#ba4d4d}.wa-swipe-game__action[data-swipe-action=avoid]:before{transform:rotate(45deg)}.wa-swipe-game__action[data-swipe-action=avoid]:after{transform:rotate(-45deg)}.wa-swipe-game__action[data-swipe-action=use]{border-color:#8eb79d80;background:#f0f7f2f2}.wa-swipe-game__action[data-swipe-action=use]:before{width:13px;height:7px;border-bottom:1.7px solid #2f8f4d;border-left:1.7px solid #2f8f4d;transform:translateY(-1px) rotate(-45deg)}.wa-swipe-game__action[data-active=true]{border-color:var(--wa-ink)}.wa-swipe-game__complete{z-index:10;color:var(--wa-ink);font-size:17px;line-height:1.1;font-weight:560}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr) auto;align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-sequence-engagement__count{display:inline-flex;align-items:center;min-height:23px;padding:0 9px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-style-profile__rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.wa-style-profile__row{display:grid;gap:4px;min-height:54px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);will-change:transform,opacity}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:660;text-transform:uppercase}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12px;line-height:1.2;font-weight:520}.wa-style-profile__examples{display:grid;gap:6px}.wa-style-profile__example{margin:0;padding:9px 11px;border-left:2px solid var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-row-bg);font-size:11px;line-height:1.25;font-weight:430;will-change:transform,opacity}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:10px}.wa-sequence-people{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;max-width:340px}.wa-sequence-person-actions{display:inline-flex;gap:5px;justify-self:end}.wa-sequence-person-button{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:1px solid var(--wa-line-10);border-radius:6px;color:var(--wa-ink);background:var(--wa-panel);font:inherit;font-size:15px;line-height:1;font-weight:460;cursor:pointer}.wa-sequence-person-current{display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:center;min-width:0}.wa-sequence-person-current__avatar{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;overflow:hidden;border:1px solid rgba(17,17,15,.08);border-radius:999px;color:#11110f;background:#e8f3ff;font-size:10px;line-height:1;font-weight:620}.wa-sequence-person-current__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-sequence-person-current__avatar[data-avatar-tone="2"]{background:#f1eadf}.wa-sequence-person-current__avatar[data-avatar-tone="3"]{background:#e9f5e6}.wa-sequence-person-current__copy{display:grid;gap:2px;min-width:0}.wa-sequence-person-current__copy strong{overflow:hidden;color:var(--wa-ink);font-size:12px;line-height:1.1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-person-current__copy span{overflow:hidden;color:var(--wa-color-muted);font-size:10px;line-height:1.12;font-weight:410;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-card{display:grid;grid-template-columns:minmax(146px,.76fr) minmax(0,1.24fr);gap:10px;align-items:stretch;min-width:0;padding:0;border:0;background:transparent;box-shadow:none;will-change:transform,opacity}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-sequence-steps{display:grid;align-content:start;gap:5px;min-width:0;margin:0}.wa-sequence-step{position:relative;display:grid;grid-template-columns:48px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-height:38px;padding:7px 8px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-panel);font:inherit;text-align:left;cursor:pointer}.wa-sequence-step__channel{display:inline-flex;align-items:center;justify-content:center;min-height:16px;padding:0 4px;border-radius:4px;color:var(--wa-color-inverse);background:#6f6a62;font-size:7.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-step[data-channel=linkedin] .wa-sequence-step__channel{background:#0a66c2}.wa-sequence-step[data-channel=call] .wa-sequence-step__channel{background:#2f7d4f}.wa-sequence-step__copy{display:grid;min-width:0}.wa-sequence-step__copy strong{color:var(--wa-ink);font-size:10px;line-height:1.12;font-weight:560;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-step__copy span{color:var(--wa-color-muted);font-size:10px;line-height:1.22;font-weight:410}.wa-sequence-step[data-step-open=false]{align-items:center;padding-top:6px;padding-bottom:6px}.wa-sequence-step[data-step-selected=true]{border-color:#11110fb8;background:#fffff9}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy span{display:none}.wa-sequence-wait{display:grid;grid-template-columns:48px minmax(0,1fr);gap:7px;align-items:center;min-height:18px;padding:0 8px;color:var(--wa-color-muted);font-size:8.5px;line-height:1;font-weight:560;letter-spacing:0;text-transform:uppercase}.wa-sequence-wait:before{content:"";justify-self:center;width:1px;height:14px;border-radius:999px;background:var(--wa-line-10)}.wa-sequence-wait__label{white-space:nowrap}.wa-sequence-copy-panel{display:grid;align-content:start;gap:7px;min-width:0;min-height:180px;padding:11px 12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-sequence-copy-panel__meta{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:650;text-transform:uppercase}.wa-sequence-copy-panel__subject{color:var(--wa-ink);font-size:12px;line-height:1.16;font-weight:560}.wa-sequence-copy-panel__body{margin:0;color:var(--wa-ink);font-size:10.5px;line-height:1.32;font-weight:410;white-space:pre-line}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left;will-change:transform,opacity}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-sequence-kickoff{display:grid;gap:3px;justify-items:start;justify-self:end;width:auto;min-width:0;min-height:36px;padding:7px 10px;border:1px solid var(--wa-ink);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-ink);font:inherit;text-align:left;cursor:pointer;box-shadow:0 10px 22px #1717141f;will-change:transform,opacity}.wa-sequence-kickoff__label{font-size:11px;line-height:1.05;font-weight:580}.wa-sequence-kickoff__detail{color:#fffffbb8;font-size:8.5px;line-height:1.15;font-weight:410}.wa-sequence-kickoff[data-launched=true]{border-color:var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-color-accent)}.wa-sequence-kickoff[data-launched=true] .wa-sequence-kickoff__detail{color:#11110f9e}.wa-composer{position:absolute;right:var(--wa-composer-side-inset);bottom:var(--wa-composer-bottom-outset);left:var(--wa-composer-side-inset);z-index:3;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto;gap:12px;align-items:stretch;height:var(--wa-composer-height);min-height:0;padding:24px 12px 12px 24px;margin:0;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:17px;background:var(--wa-panel);box-shadow:0 48px 88px #05050457,0 18px 38px #0505042e,0 1px #ffffffbd inset;transform-origin:center center;contain:layout paint style;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease;will-change:left,bottom,width,height,padding,border-width,gap}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer__placeholder{display:flex;grid-row:1;align-items:flex-start;align-self:start;min-width:0;min-height:28px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:14px;line-height:1.18;font-weight:400;overflow-wrap:anywhere;white-space:normal}.wa-composer__placeholder:empty:before{content:"Ask anything...";color:var(--wa-placeholder)}.wa-composer__controls{display:inline-flex;grid-row:2;align-items:center;justify-self:end;gap:18px;min-width:0}.wa-composer__select{display:inline-flex;align-items:center;gap:5px;color:#74726a;font-size:14px;line-height:1;font-weight:410;white-space:nowrap}.wa-composer__chevron{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);line-height:1;cursor:default;white-space:nowrap}.wa-composer__send-icon{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__placeholder:empty~.wa-composer__controls .wa-composer__send{background:#aaa89e}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__svg{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-builder{position:relative;grid-column:1 / -1;justify-self:stretch;display:grid;gap:24px;width:100%;margin-top:12px;padding-top:58px;border-top:1px solid var(--wa-line-10)}.wa-builder__header{display:none;grid-template-columns:minmax(0,1fr);gap:12px;align-items:start}.wa-builder__eyebrow{margin:0 0 10px;color:var(--wa-color-accent);font-size:12px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder__title{max-width:780px;margin:0;color:var(--wa-color-heading);font-size:clamp(31px,2.25vw,42px);line-height:1.04;font-weight:520;letter-spacing:0}.wa-builder__lede{margin:0;color:var(--wa-color-muted);font-size:15px;line-height:1.35;font-weight:430}.wa-builder__tabs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}.wa-builder-tab{display:grid;gap:4px;width:100%;min-width:0;padding:12px 14px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);cursor:default;text-align:left}.wa-builder-tab.is-active{border-color:var(--wa-color-accent);background:var(--wa-card-accent-bg);box-shadow:inset 3px 0 0 var(--wa-color-accent)}.wa-builder-tab__title{min-width:0;overflow:hidden;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.12;font-weight:540;text-overflow:ellipsis;white-space:nowrap}.wa-builder-tab__count{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:430}.wa-builder__layout{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,3fr);gap:24px;align-items:start}.wa-builder__story-meta{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;width:100%;min-width:0}.wa-builder__workspace{display:grid;gap:14px;min-width:0}.wa-builder__add-rail{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}.wa-builder-add-button{width:100%;min-height:34px;padding:0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:500;cursor:default;white-space:nowrap}.wa-builder-add-button:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder__thread{display:grid;gap:20px;align-content:start;min-height:560px;max-height:720px;min-width:0;padding:30px;overflow:auto;border:1px solid var(--wa-line-10);border-radius:14px;background:linear-gradient(to bottom,var(--wa-panel),var(--wa-row-bg)),radial-gradient(circle at top left,var(--wa-card-accent-bg),transparent 36%)}.wa-builder-step{display:grid;gap:7px;min-width:0}.wa-builder-step .wa-message{width:100%;max-width:100%;justify-self:stretch}.wa-builder-step[data-builder-kind=assistant] .wa-message,.wa-builder-step[data-builder-kind=status] .wa-message,.wa-builder-step[data-builder-kind=cursor] .wa-message{width:100%;max-width:100%;grid-template-columns:minmax(0,1fr)}.wa-builder-step[data-builder-kind=user],.wa-builder-step[data-builder-kind=file]{justify-items:stretch}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:100%;max-width:100%}.wa-builder-step .wa-message__body,.wa-builder-step[data-builder-kind=user] .wa-message__body,.wa-builder-step[data-builder-kind=file] .wa-message__body{width:100%;max-width:none}.wa-builder-step[data-builder-kind=assistant] .wa-message__body,.wa-builder-step[data-builder-kind=status] .wa-message__body,.wa-builder-step[data-builder-kind=cursor] .wa-message__body,.wa-builder-step[data-builder-kind=component] .wa-message__body,.wa-builder-step[data-builder-kind=thinking] .wa-message__body{width:100%}.wa-builder-step.is-selected .wa-message__body{outline:1px solid var(--wa-color-accent);outline-offset:3px}.wa-builder-step.is-dragging{opacity:.42}.wa-builder-step.is-drop-before,.wa-builder-step.is-drop-after{position:relative}.wa-builder-step.is-drop-before:before,.wa-builder-step.is-drop-after:after{content:"";display:block;height:2px;border-radius:999px;background:var(--wa-color-accent)}.wa-builder-step.is-drop-before:before{margin-bottom:10px}.wa-builder-step.is-drop-after:after{margin-top:10px}.wa-builder-message__body{max-width:none}.wa-builder-bubble{display:grid;gap:7px;min-width:0}.wa-builder-step__kind{display:inline-flex;width:max-content;max-width:100%;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder-step__textarea{display:block;width:100%;min-height:19px;padding:0;overflow:hidden;border:0;color:inherit;background:transparent;font-size:inherit;line-height:inherit;font-weight:inherit;letter-spacing:0;outline:0}.wa-builder-step__textarea::selection{background:var(--wa-card-accent-bg)}.wa-builder-step__toolbar{display:flex;gap:6px;justify-content:flex-start;padding-left:3px;opacity:0;transform:translateY(-2px);transition:opacity .14s ease,transform .14s ease}.wa-builder-step[data-builder-kind=user] .wa-builder-step__toolbar,.wa-builder-step[data-builder-kind=file] .wa-builder-step__toolbar{justify-content:flex-end;padding-right:3px;padding-left:0}.wa-builder-step:hover .wa-builder-step__toolbar,.wa-builder-step:focus-within .wa-builder-step__toolbar,.wa-builder-step.is-selected .wa-builder-step__toolbar{opacity:1;transform:translateY(0)}.wa-builder-step__action{display:inline-flex;align-items:center;justify-content:center;width:28px;min-width:28px;height:28px;padding:0;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-muted);background:var(--wa-panel);font-size:10px;line-height:1;font-weight:560;cursor:default;white-space:nowrap}.wa-builder-step__action svg{display:block;width:15px;height:15px}.wa-builder-step__drag{cursor:grab}.wa-builder-step__drag:active{cursor:grabbing}.wa-builder-step__action:disabled{opacity:.34}.wa-builder-step__action:not(:disabled):hover{color:var(--wa-color-text);border-color:var(--wa-line-20)}.wa-builder-thinking{gap:10px;width:100%}.wa-builder-thinking[data-thinking-header-suppressed=true]{padding-top:0}.wa-builder-research-step{min-height:64px}.wa-builder-research-step .wa-builder-step__textarea{color:var(--wa-ink);font-weight:var(--wa-chat-thinking-weight)}.wa-builder-thinking__header-input,.wa-builder-thinking__elapsed-input,.wa-builder-thinking__detail-input{width:100%;min-width:0;border:0;color:inherit;background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-thinking__header-input{min-width:86px}.wa-builder-thinking__elapsed-input{width:62px}.wa-builder-thinking__detail-input{color:var(--wa-color-muted);font-size:inherit;line-height:inherit;font-weight:inherit;resize:none}.wa-builder-component-card{display:grid;width:100%;min-height:96px;padding:16px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-row-bg)}.wa-builder-component-card__content{display:grid;gap:12px;align-content:start;min-width:0}.wa-builder-component-card__title,.wa-builder-component-card__subtitle,.wa-builder-component-list__item,.wa-builder-table-editor__meta,.wa-builder-table-editor__cell,.wa-builder-strategy-editor input,.wa-builder-strategy-editor textarea,.wa-builder-enrichment-editor input,.wa-builder-data-sources-editor input,.wa-builder-data-sources-editor textarea,.wa-builder-file-list-editor input,.wa-builder-file-list-editor textarea,.wa-builder-mailbox-editor__meta input,.wa-builder-mailbox-editor__cta input,.wa-builder-mailbox-editor__learning-detail,.wa-builder-mailbox-editor__learning-title,.wa-builder-mailbox-editor__signals input,.wa-builder-style-profile-editor input,.wa-builder-style-profile-editor textarea,.wa-builder-proximity-editor input,.wa-builder-proximity-editor textarea,.wa-builder-swipe-game-editor input,.wa-builder-swipe-game-editor textarea,.wa-builder-sequence-editor input,.wa-builder-sequence-editor textarea,.wa-builder-channel-editor input,.wa-builder-channel-editor textarea,.wa-builder-sequence-editor__count{width:100%;min-width:0;border:0;color:var(--wa-color-text);background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-component-card__title{min-height:28px;color:var(--wa-color-heading-strong);font-size:20px;line-height:1.12;font-weight:520}.wa-builder-component-card__subtitle{min-height:19px;color:var(--wa-color-muted);font-size:13px;line-height:1.3;font-weight:430}.wa-builder-component-list{display:grid;gap:8px}.wa-builder-component-list__item{min-height:32px;padding:7px 10px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel);font-size:13px;line-height:1.25}.wa-builder-table-editor{display:grid;gap:0;min-width:0;overflow:auto;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-table-editor__row{display:grid;grid-template-columns:var(--wa-builder-table-columns);min-width:max-content;border-bottom:1px solid var(--wa-line-08)}.wa-builder-table-editor__row:last-child{border-bottom:0}.wa-builder-table-editor__row[data-header=true]{background:var(--wa-row-bg)}.wa-builder-table-editor__cell{min-height:38px;padding:10px 12px;border-right:1px solid var(--wa-line-08);font-size:13px;line-height:1.15}.wa-builder-table-editor__cell:last-child{border-right:0}.wa-builder-table-editor__row[data-header=true] .wa-builder-table-editor__cell{color:var(--wa-color-muted);font-weight:560}.wa-builder-table-editor__meta{min-height:20px;color:var(--wa-color-muted);font-size:12px;line-height:1.2;font-weight:480}.wa-builder-table-editor__footer-fields{display:grid;gap:8px}.wa-builder-table-editor__action-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow:hidden;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-strategy-editor__card{display:grid;gap:9px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor__label{color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:700;text-transform:uppercase}.wa-builder-strategy-editor__title{min-height:37px;color:var(--wa-color-heading-strong);font-size:15px;line-height:1.15;font-weight:540}.wa-builder-strategy-editor__summary{min-height:76px;color:var(--wa-color-text);font-size:12.5px;line-height:1.25;font-weight:450}.wa-builder-enrichment-editor{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.wa-builder-enrichment-editor__group{display:grid;gap:7px;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-enrichment-editor__title{min-height:26px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.1;font-weight:520}.wa-builder-enrichment-editor__step{min-height:28px;padding:6px 8px;border:1px solid var(--wa-line-08);border-radius:6px;color:var(--wa-color-text);background:var(--wa-row-bg);font-size:12px;line-height:1}.wa-builder-data-sources-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-data-sources-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-data-sources-editor__category{min-height:18px;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:680;text-transform:uppercase}.wa-builder-data-sources-editor__name{min-height:20px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.15;font-weight:560}.wa-builder-data-sources-editor__detail{min-height:48px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-file-list-editor,.wa-builder-mailbox-editor__meta,.wa-builder-mailbox-editor__cta,.wa-builder-mailbox-editor__signals,.wa-builder-style-profile-editor,.wa-builder-style-profile-editor__examples,.wa-builder-proximity-editor,.wa-builder-swipe-game-editor,.wa-builder-sequence-editor,.wa-builder-channel-editor{display:grid;gap:10px}.wa-builder-file-list-editor__card,.wa-builder-style-profile-editor__row,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor__card,.wa-builder-channel-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-file-list-editor__card{grid-template-columns:46px minmax(0,1fr)}.wa-builder-file-list-editor__detail{grid-column:1 / -1}.wa-builder-mailbox-editor__meta{grid-template-columns:120px minmax(0,1fr) 120px}.wa-builder-mailbox-editor__signals{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder-mailbox-editor__cta{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-mailbox-editor__signal{min-height:32px;padding:8px 10px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-panel);font-size:12px;line-height:1.15;font-weight:430}.wa-builder-file-list-editor__type,.wa-builder-proximity-editor__rank,.wa-builder-proximity-editor__score,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__count,.wa-builder-channel-editor__badge{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:700;text-transform:uppercase}.wa-builder-mailbox-editor__provider,.wa-builder-mailbox-editor__button-label,.wa-builder-mailbox-editor__status{color:var(--wa-color-muted);font-size:11px;line-height:1.1;font-weight:560}.wa-builder-file-list-editor__name,.wa-builder-mailbox-editor__account,.wa-builder-mailbox-editor__learning-title,.wa-builder-style-profile-editor__value,.wa-builder-proximity-editor__name,.wa-builder-swipe-game-editor__label,.wa-builder-sequence-editor__name,.wa-builder-channel-editor__label{color:var(--wa-color-heading-strong);font-size:14px;line-height:1.16;font-weight:560}.wa-builder-file-list-editor__detail,.wa-builder-mailbox-editor__learning-detail,.wa-builder-style-profile-editor__example,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail,.wa-builder-sequence-editor__personalization,.wa-builder-channel-editor__detail{min-height:44px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-style-profile-editor{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder-style-profile-editor__label,.wa-builder-proximity-editor__company,.wa-builder-proximity-editor__title,.wa-builder-proximity-editor__proximity,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__company{color:var(--wa-color-muted);font-size:11px;line-height:1.12;font-weight:520}.wa-builder-proximity-editor__row{grid-template-columns:42px 42px repeat(3,minmax(0,1fr))}.wa-builder-proximity-editor__proximity,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail{grid-column:1 / -1}.wa-builder-swipe-game-editor__row{grid-template-columns:72px minmax(0,1fr)}.wa-builder-sequence-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-sequence-editor__card{align-content:start}.wa-builder-sequence-editor__subject{color:var(--wa-color-text);font-size:12px;line-height:1.18;font-weight:520}.wa-builder-channel-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-channel-editor__card{grid-template-columns:minmax(0,1fr) 58px}.wa-builder-channel-editor__detail{grid-column:1 / -1}.wa-builder-cursor-line{display:grid;grid-template-columns:18px minmax(0,1fr);gap:10px;align-items:start}.wa-builder-cursor-line__cursor{display:block;width:14px;height:23px;background:var(--wa-cursor-arrow) 0 0 / 14px 23px no-repeat}.wa-builder-file-pill{display:grid;grid-template-columns:42px minmax(0,1fr);gap:10px;align-items:center}.wa-builder-file-pill__icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:32px;border-radius:8px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680}.wa-builder__side{position:sticky;top:24px;display:grid;grid-template-columns:minmax(0,1fr);gap:14px;width:100%;min-width:0}.wa-builder-export[hidden]{display:none}.wa-builder__panel,.wa-builder-export{display:grid;gap:14px;padding:16px;border:1px solid var(--wa-line-10);border-radius:14px;background:var(--wa-panel)}.wa-builder-panel__divider{height:1px;margin:2px 0;background:var(--wa-line-10)}.wa-builder-panel__empty{margin:0;color:var(--wa-color-muted);font-size:13px;line-height:1.32}.wa-builder-field{display:grid;gap:7px;min-width:0}.wa-builder-field__label,.wa-builder-export__label{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:620;letter-spacing:.02em;text-transform:uppercase}.wa-builder-export__header{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0}.wa-builder-export__copy{display:inline-flex;gap:6px;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:520;cursor:default;white-space:nowrap}.wa-builder-export__copy svg{display:block;width:14px;height:14px}.wa-builder-export__copy path{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.wa-builder-export__copy:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder-export__copy[data-copy-state=copied]{color:var(--wa-color-inverse);border-color:var(--wa-color-heading-strong);background:var(--wa-color-heading-strong)}.wa-builder-field__control,.wa-builder-export__textarea{width:100%;min-width:0;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);font-size:13px;line-height:1.32;font-weight:430;outline:0}.wa-builder-field__control{min-height:38px;padding:10px}.wa-builder-field__control[type=color]{height:42px;padding:5px}.wa-builder-field__control:focus,.wa-builder-export__textarea:focus{border-color:var(--wa-color-accent);box-shadow:0 0 0 3px var(--wa-card-accent-bg)}.wa-builder-export__textarea{min-height:172px;max-height:320px;padding:12px;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;white-space:pre}.wa-builder__status{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.25;font-weight:430}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden;will-change:transform,opacity}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden;will-change:transform}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 2px 3px var(--wa-cursor-shadow));will-change:transform}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor__mimic-head,.wa-cursor__mimic-tail{position:absolute;inset:0;display:none;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none;transform-origin:6px 13.25px;backface-visibility:hidden;will-change:transform}.wa-cursor__mimic-head{z-index:2;background-image:var(--wa-cursor-arrow-head)}.wa-cursor__mimic-tail{z-index:1;background-image:var(--wa-cursor-arrow-tail)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-head,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{display:block}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{animation:wa-cursor-tail-wag 245ms infinite}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-cursor-tail-wag{0%,to{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translateZ(0) rotate(-1deg) skew(0)}24%{animation-timing-function:cubic-bezier(.16,0,.24,1);transform:translate3d(.22px,0,0) rotate(9.5deg) skew(1.65deg)}38%{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translate3d(.08px,0,0) rotate(3.6deg) skew(.65deg)}64%{animation-timing-function:cubic-bezier(.2,0,.24,1);transform:translate3d(-.2px,0,0) rotate(-8.5deg) skew(-1.5deg)}}@keyframes wa-thinking-logo-gradient{0%{background-position:120% 50%}to{background-position:-120% 50%}}@keyframes wa-mailbox-gmail-radiate{0%{background-position:0% 50%,0% 50%}50%{background-position:100% 50%,100% 50%}to{background-position:0% 50%,0% 50%}}@keyframes wa-mailbox-gmail-pulse{0%,to{transform:scale(.98)}50%{transform:scale(1.08)}}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-spin{to{transform:rotate(360deg)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1180px){.wa-section{padding:82px 24px 96px}.wa-section__inner{grid-template-columns:1fr;grid-template-rows:auto auto auto;row-gap:28px}.wa-copy{max-width:880px}.wa-story-controls,.wa-stage{grid-column:1}.wa-story-controls{grid-template-columns:minmax(0,1fr) auto;align-items:center;width:min(660px,100%);justify-self:center;gap:14px;padding-top:0}.wa-story-tabs{min-width:0;gap:0}.wa-story-tab{display:none}.wa-story-tab.is-active{display:grid;grid-template-columns:4px minmax(0,1fr);min-height:36px;gap:12px;align-items:center}.wa-story-tab.is-active .wa-story-tab__marker{min-height:36px}.wa-story-tab__body{min-width:0;gap:0;padding-top:0}.wa-story-tab__title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:24px;line-height:1.08}.wa-story-tab__description{display:none}.wa-controls-row{position:static;display:inline-flex;align-items:center;justify-content:flex-end;gap:8px;width:auto;height:auto;overflow:visible;clip:auto;clip-path:none;white-space:normal}.wa-controls-row [data-toggle-play],.wa-controls-row .wa-scrubber{display:none}.wa-control-button{display:grid;place-items:center;width:34px;height:34px;padding:0;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9c2;box-shadow:0 8px 22px #17171414;cursor:pointer}.wa-control-button:hover{border-color:var(--wa-line-20);background:#fffff9f0}.wa-control-button:focus-visible{outline:2px solid var(--wa-color-accent);outline-offset:3px}.wa-stage{grid-row:3;width:min(660px,100%);justify-self:center}.wa-stage__media{right:0}.wa-window{margin-left:auto;margin-right:auto}.wa-builder__header,.wa-builder__layout{grid-template-columns:1fr}.wa-builder__side{position:static;grid-template-columns:minmax(0,1fr);align-items:start}.wa-builder__status{grid-column:1 / -1}.wa-builder__add-rail{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:760px){.wa-section{--wa-chat-x-padding: 12px;--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 106px;--wa-composer-send-size: 34px;--wa-history-resume-height: 40px;padding:54px 18px 72px}.wa-section__inner{row-gap:24px}.wa-copy__title{font-size:clamp(36px,11vw,48px);line-height:1.05}.wa-story-tabs{gap:0}.wa-story-tab{gap:12px;min-height:36px}.wa-story-tab__marker{min-height:36px}.wa-story-tab__body{gap:0;padding-top:0}.wa-story-tab__title{font-size:21px}.wa-story-tab__description{font-size:15px}.wa-builder{gap:18px;padding-top:40px}.wa-builder__header{gap:16px}.wa-builder__title{font-size:clamp(28px,9vw,36px)}.wa-builder__lede{font-size:14px}.wa-builder__tabs{grid-auto-flow:column;grid-auto-columns:minmax(172px,1fr);grid-template-columns:none;overflow-x:auto;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}.wa-builder-tab{min-width:0}.wa-builder__add-rail{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder__thread{min-height:500px;max-height:660px;padding:18px}.wa-builder-step .wa-message{max-width:100%}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:100%}.wa-builder-step__toolbar{opacity:1;transform:none}.wa-builder-component-card,.wa-builder-file-pill{grid-template-columns:1fr}.wa-builder-cursor-line{grid-template-columns:16px minmax(0,1fr)}.wa-builder__side{grid-template-columns:1fr}.wa-stage{width:100%;min-height:560px}.wa-stage__media{top:-22px;right:0;width:58vw;min-width:220px;height:570px}.wa-window{width:min(100%,590px);margin:82px 0 0}.wa-chat-shell{height:520px;border-radius:16px}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{padding-bottom:4px}.wa-signup-field{width:min(292px,88%)}.wa-research-step{min-height:64px;gap:8px;padding-left:0}.wa-research-step__label{font-size:14px}.wa-research-step__detail{font-size:13px}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:7px}.wa-data-source-grid__column{gap:11px}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-swipe-game__actions,.wa-builder-data-sources-editor,.wa-builder-style-profile-editor,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor,.wa-builder-channel-editor,.wa-sequence-card{grid-template-columns:minmax(0,1fr)}.wa-sequence-copy-panel{min-height:140px}.wa-sequence-step{grid-template-columns:minmax(0,1fr)}.wa-sequence-step__channel{justify-self:start;padding:0 8px}.wa-sequence-wait{grid-template-columns:minmax(0,1fr);min-height:16px;padding:0 8px}.wa-sequence-wait:before{display:none}.wa-sequence-person-button{width:22px;height:22px;padding:0;font-size:13px}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:5px 4px;font-size:8.5px;line-height:1.12}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:9px}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:4px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-section .wa-data-table__add{right:2px;width:22px;height:20px;border-radius:4px;font-size:15px}.wa-data-table__footer{align-items:start;gap:6px;padding-top:6px}.wa-data-table__actions{gap:4px}.wa-data-table-action{width:22px;height:22px;padding:0;border-radius:4px}.wa-data-table-action__icon{width:12px;height:12px}.wa-data-table-action__badge{min-height:12px;padding:0 4px;font-size:6.5px}.wa-data-table-floating-tooltip{min-height:25px;padding:0 9px;font-size:9.5px}.wa-data-table-floating-tooltip[data-has-badge=true]{min-height:43px;padding:7px 9px;gap:5px}.wa-data-table-floating-tooltip__badge{min-height:13px;padding:0 5px;font-size:7px}.wa-data-table__pagination{gap:4px;font-size:7.5px}.wa-data-table__page-controls{gap:2px}.wa-data-table__page-button{width:17px;height:17px;border-radius:4px;font-size:7.5px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__copy{gap:1px;margin-top:0}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:9px;line-height:1.03}.wa-data-table-person__detail{font-size:7.5px;line-height:1.04}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){gap:4px}.wa-data-table-cell-badge{min-height:14px;padding:0;font-size:7px}.wa-mailbox-connection__card{grid-template-columns:minmax(0,1fr);gap:12px;padding:12px;border-radius:10px}.wa-mailbox-connection__copy{gap:9px}.wa-mailbox-connection__actions{justify-self:end;width:min(124px,100%)}.wa-mailbox-connection__title{font-size:16px}.wa-mailbox-connection__subtitle{max-width:none;font-size:12.5px}.wa-mailbox-connection__button{min-height:36px;font-size:12.5px;padding:0 9px}.wa-mailbox-learning{grid-template-columns:36px max-content minmax(48px,1fr);gap:4px 10px}.wa-mailbox-learning__thumbprint{width:36px;height:36px}.wa-mailbox-thumbprint{width:30px;height:30px}.wa-mailbox-learning__title{font-size:14px}.wa-mailbox-learning__detail{font-size:13px}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:12px auto auto;gap:8px;padding:0;font-size:14px}.wa-waterfall-rows{gap:7px}.wa-waterfall-row{grid-template-columns:12px minmax(82px,auto) minmax(0,1fr);gap:8px;min-height:27px;font-size:14px}.wa-waterfall-chip{max-width:72px;padding-right:5px;font-size:8.5px}.wa-strategy-plan{gap:10px;padding:14px 14px 14px 16px}.wa-strategy-plan__title{font-size:15px}.wa-strategy-plan__bullets{gap:4px;padding-left:14px;font-size:11.5px}.wa-strategy-plan__bullets li{white-space:normal}.wa-swipe-game{max-width:100%}.wa-swipe-game__stack{height:168px}.wa-swipe-card{padding:18px 16px}.wa-swipe-card__label{font-size:16px}.wa-swipe-card__detail{font-size:10.5px}.wa-composer{grid-template-columns:minmax(0,1fr);height:var(--wa-composer-height);padding:16px 10px 10px 16px;border-radius:15px}.wa-composer__placeholder{min-height:22px;font-size:14px}.wa-composer__controls{gap:10px}.wa-composer__select{gap:4px;font-size:11px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}`, vr = "chatbot-stories-styles";
function Un() {
  const n = document.getElementById(vr);
  if (n instanceof HTMLStyleElement) {
    n.textContent !== $a && (n.textContent = $a);
    return;
  }
  const e = document.createElement("style");
  e.id = vr, e.textContent = $a, document.head.append(e);
}
function Jd(n) {
  if (n instanceof HTMLElement) return n;
  const e = document.querySelector(n);
  if (!e)
    throw new Error(`ChatbotStories: root element not found for selector "${n}"`);
  return e;
}
function Vn(n = "[data-chatbot-stories]", e = {}) {
  return e.injectStyles !== !1 && Un(), $d(Jd(n), e);
}
const Kd = {
  init: Vn,
  defaultStories: Hn
};
if (typeof window < "u") {
  window.ChatbotStories = Kd;
  const n = () => {
    document.querySelector("[data-chatbot-stories][data-auto-init]") && Un(), document.querySelectorAll("[data-chatbot-stories][data-auto-init]").forEach((e) => {
      e.dataset.chatbotStoriesMounted || (e.dataset.chatbotStoriesMounted = "true", Vn(e));
    });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", n, { once: !0 }) : n();
}
export {
  Hn as defaultStories,
  Vn as init
};
