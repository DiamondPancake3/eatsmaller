!function(t) {
  function e(n) {
    if (r[n])
      return r[n].exports;
    var i = r[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return t[n].call(i.exports, i, i.exports, e),
    i.loaded = !0,
    i.exports
  }
  var r = {};
  return e.m = t,
  e.c = r,
  e.p = "",
  e(0)
}([
  function(t, e, r) {
    r(1),
    t.exports = r(298)
  },
  function(t, e, r) {
    (function(t) {
      "use strict";
      function e(t, e, r) {
        t[e] || Object[n](t, e, {
          writable: !0,
          configurable: !0,
          value: r
        })
      }
      if (r(2), r(293), r(295), t._babelPolyfill)
        throw new Error("only one instance of babel-polyfill is allowed");
      t._babelPolyfill = !0;
      var n = "defineProperty";
      e(String.prototype, "padLeft", "".padStart),
      e(String.prototype, "padRight", "".padEnd),
      "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
        [][t] && e(Array, t, Function.call.bind([][t]))
      })
    }).call(e, function() {
      return this
    }())
  },
  function(t, e, r) {
    r(3),
    r(52),
    r(53),
    r(54),
    r(55),
    r(57),
    r(60),
    r(61),
    r(62),
    r(63),
    r(64),
    r(65),
    r(66),
    r(67),
    r(68),
    r(70),
    r(72),
    r(74),
    r(76),
    r(79),
    r(80),
    r(81),
    r(85),
    r(87),
    r(89),
    r(92),
    r(93),
    r(94),
    r(95),
    r(97),
    r(98),
    r(99),
    r(100),
    r(101),
    r(102),
    r(103),
    r(105),
    r(106),
    r(107),
    r(109),
    r(110),
    r(111),
    r(113),
    r(114),
    r(115),
    r(116),
    r(117),
    r(118),
    r(119),
    r(120),
    r(121),
    r(122),
    r(123),
    r(124),
    r(125),
    r(126),
    r(131),
    r(132),
    r(136),
    r(137),
    r(138),
    r(139),
    r(141),
    r(142),
    r(143),
    r(144),
    r(145),
    r(146),
    r(147),
    r(148),
    r(149),
    r(150),
    r(151),
    r(152),
    r(153),
    r(154),
    r(155),
    r(156),
    r(157),
    r(159),
    r(160),
    r(166),
    r(167),
    r(169),
    r(170),
    r(171),
    r(175),
    r(176),
    r(177),
    r(178),
    r(179),
    r(181),
    r(182),
    r(183),
    r(184),
    r(187),
    r(189),
    r(190),
    r(191),
    r(193),
    r(195),
    r(197),
    r(198),
    r(199),
    r(201),
    r(202),
    r(203),
    r(204),
    r(211),
    r(214),
    r(215),
    r(217),
    r(218),
    r(221),
    r(222),
    r(224),
    r(225),
    r(226),
    r(227),
    r(228),
    r(229),
    r(230),
    r(231),
    r(232),
    r(233),
    r(234),
    r(235),
    r(236),
    r(237),
    r(238),
    r(239),
    r(240),
    r(241),
    r(242),
    r(244),
    r(245),
    r(246),
    r(247),
    r(248),
    r(249),
    r(251),
    r(252),
    r(253),
    r(254),
    r(255),
    r(256),
    r(257),
    r(258),
    r(260),
    r(261),
    r(263),
    r(264),
    r(265),
    r(266),
    r(269),
    r(270),
    r(271),
    r(272),
    r(273),
    r(274),
    r(275),
    r(276),
    r(278),
    r(279),
    r(280),
    r(281),
    r(282),
    r(283),
    r(284),
    r(285),
    r(286),
    r(287),
    r(288),
    r(291),
    r(292),
    t.exports = r(9)
  },
  function(t, e, r) {
    "use strict";
    var n = r(4),
      i = r(5),
      o = r(6),
      s = r(8),
      a = r(18),
      h = r(22).KEY,
      u = r(7),
      c = r(23),
      l = r(24),
      p = r(19),
      f = r(25),
      d = r(26),
      m = r(27),
      g = r(29),
      y = r(42),
      v = r(45),
      x = r(12),
      b = r(32),
      _ = r(16),
      w = r(17),
      S = r(46),
      M = r(49),
      T = r(51),
      R = r(11),
      E = r(30),
      C = T.f,
      A = R.f,
      P = M.f,
      I = n.Symbol,
      O = n.JSON,
      L = O && O.stringify,
      N = "prototype",
      D = f("_hidden"),
      F = f("toPrimitive"),
      k = {}.propertyIsEnumerable,
      U = c("symbol-registry"),
      B = c("symbols"),
      G = c("op-symbols"),
      H = Object[N],
      j = "function" == typeof I,
      V = n.QObject,
      W = !V || !V[N] || !V[N].findChild,
      X = o && u(function() {
        return 7 != S(A({}, "a", {
          get: function() {
            return A(this, "a", {value: 7}).a
          }
        })).a
      })
        ? function(t, e, r) {
          var n = C(H, e);
          n && delete H[e],
          A(t, e, r),
          n && t !== H && A(H, e, n)
        }
        : A,
      q = function(t) {
        var e = B[t] = S(I[N]);
        return e._k = t,
        e
      },
      z = j && "symbol" == typeof I.iterator
        ? function(t) {
          return "symbol" == typeof t
        }
        : function(t) {
          return t instanceof I
        },
      Y = function(t, e, r) {
        return t === H && Y(G, e, r),
        x(t),
        e = _(e, !0),
        x(r),
        i(B, e)
          ? (r.enumerable
            ? (i(t, D) && t[D][e] && (t[D][e] = !1),
            r = S(r, {
              enumerable: w(0, !1)
            }))
            : (i(t, D) || A(t, D, w(1, {})), t[D][e] = !0), X(t, e, r))
          : A(t, e, r)
      },
      Z = function(t, e) {
        x(t);
        for (var r, n = y(e = b(e)), i = 0, o = n.length; o > i;)
          Y(t, r = n[i++], e[r]);
        return t
      },
      K = function(t, e) {
        return void 0 === e
          ? S(t)
          : Z(S(t), e)
      },
      J = function(t) {
        var e = k.call(this, t = _(t, !0));
        return !(this === H && i(B, t) && !i(G, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, D) && this[D][t]) || e)
      },
      Q = function(t, e) {
        if (t = b(t), e = _(e, !0), t !== H || !i(B, e) || i(G, e)) {
          var r = C(t, e);
          return !r || !i(B, e) || i(t, D) && t[D][e] || (r.enumerable = !0),
          r
        }
      },
      $ = function(t) {
        for (var e, r = P(b(t)), n = [], o = 0; r.length > o;)
          i(B, e = r[o++]) || e == D || e == h || n.push(e);
        return n
      },
      tt = function(t) {
        for (var e, r = t === H, n = P(r
          ? G
          : b(t)), o = [], s = 0; n.length > s;)
          !i(B, e = n[s++]) || r && !i(H, e) || o.push(B[e]);
        return o
      };
    j || (I = function() {
      if (this instanceof I)
        throw TypeError("Symbol is not a constructor!");
      var t = p(arguments.length > 0
          ? arguments[0]
          : void 0),
        e = function(r) {
          this === H && e.call(G, r),
          i(this, D) && i(this[D], t) && (this[D][t] = !1),
          X(this, t, w(1, r))
        };
      return o && W && X(H, t, {
        configurable: !0,
        set: e
      }),
      q(t)
    },
    a(I[N], "toString", function() {
      return this._k
    }),
    T.f = Q,
    R.f = Y,
    r(50).f = M.f = $,
    r(44).f = J,
    r(43).f = tt,
    o && !r(28) && a(H, "propertyIsEnumerable", J, !0),
    d.f = function(t) {
      return q(f(t))
    }),
    s(s.G + s.W + s.F * !j, {Symbol: I});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; et.length > rt;)
      f(et[rt++]);
    for (var et = E(f.store), rt = 0; et.length > rt;)
      m(et[rt++]);
    s(s.S + s.F * !j, "Symbol", {
      "for": function(t) {
        return i(U, t += "")
          ? U[t]
          : U[t] = I(t)
      },
      keyFor: function(t) {
        if (z(t))
          return g(U, t);
        throw TypeError(t + " is not a symbol!")
      },
      useSetter: function() {
        W = !0
      },
      useSimple: function() {
        W = !1
      }
    }),
    s(s.S + s.F * !j, "Object", {
      create: K,
      defineProperty: Y,
      defineProperties: Z,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: $,
      getOwnPropertySymbols: tt
    }),
    O && s(s.S + s.F * (!j || u(function() {
      var t = I();
      return "[null]" != L([t]) || "{}" != L({a: t}) || "{}" != L(Object(t))
    })), "JSON", {
      stringify: function(t) {
        if (void 0 !== t && !z(t)) {
          for (var e, r, n = [t], i = 1; arguments.length > i;)
            n.push(arguments[i++]);
          return e = n[1],
          "function" == typeof e && (r = e),
          !r && v(e) || (e = function(t, e) {
            if (r && (e = r.call(this, t, e)), !z(e))
              return e
          }),
          n[1] = e,
          L.apply(O, n)
        }
      }
    }),
    I[N][F] || r(10)(I[N], F, I[N].valueOf),
    l(I, "Symbol"),
    l(Math, "Math", !0),
    l(n.JSON, "JSON", !0)
  },
  function(t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math
      ? window
      : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")();
    "number" == typeof __g && (__g = r)
  },
  function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return r.call(t, e)
    }
  },
  function(t, e, r) {
    t.exports = !r(7)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (e) {
        return !0
      }
    }
  },
  function(t, e, r) {
    var n = r(4),
      i = r(9),
      o = r(10),
      s = r(18),
      a = r(20),
      h = "prototype",
      u = function(t, e, r) {
        var c,
          l,
          p,
          f,
          d = t & u.F,
          m = t & u.G,
          g = t & u.S,
          y = t & u.P,
          v = t & u.B,
          x = m
            ? n
            : g
              ? n[e] || (n[e] = {})
              : (n[e] || {})[h],
          b = m
            ? i
            : i[e] || (i[e] = {}),
          _ = b[h] || (b[h] = {});
        m && (r = e);
        for (c in r)
          l = !d && x && void 0 !== x[c],
          p = (l
            ? x
            : r)[c],
          f = v && l
            ? a(p, n)
            : y && "function" == typeof p
              ? a(Function.call, p)
              : p,
          x && s(x, c, p, t & u.U),
          b[c] != p && o(b, c, f),
          y && _[c] != p && (_[c] = p)
      };
    n.core = i,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    t.exports = u
  },
  function(t, e) {
    var r = t.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = r)
  },
  function(t, e, r) {
    var n = r(11),
      i = r(17);
    t.exports = r(6)
      ? function(t, e, r) {
        return n.f(t, e, i(1, r))
      }
      : function(t, e, r) {
        return t[e] = r,
        t
      }
  },
  function(t, e, r) {
    var n = r(12),
      i = r(14),
      o = r(16),
      s = Object.defineProperty;
    e.f = r(6)
      ? Object.defineProperty
      : function(t, e, r) {
        if (n(t), e = o(e, !0), n(r), i)
          try {
            return s(t, e, r)
          } catch (a) {}
        if ("get" in r || "set" in r)
          throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value),
        t
      }
  },
  function(t, e, r) {
    var n = r(13);
    t.exports = function(t) {
      if (!n(t))
        throw TypeError(t + " is not an object!");
      return t
    }
  },
  function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t
        ? null !== t
        : "function" == typeof t
    }
  },
  function(t, e, r) {
    t.exports = !r(6) && !r(7)(function() {
      return 7 != Object.defineProperty(r(15)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  },
  function(t, e, r) {
    var n = r(13),
      i = r(4).document,
      o = n(i) && n(i.createElement);
    t.exports = function(t) {
      return o
        ? i.createElement(t)
        : {}
    }
  },
  function(t, e, r) {
    var n = r(13);
    t.exports = function(t, e) {
      if (!n(t))
        return t;
      var r,
        i;
      if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t)))
        return i;
      if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t)))
        return i;
      if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t)))
        return i;
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  },
  function(t, e, r) {
    var n = r(4),
      i = r(10),
      o = r(5),
      s = r(19)("src"),
      a = "toString",
      h = Function[a],
      u = ("" + h).split(a);
    r(9).inspectSource = function(t) {
      return h.call(t)
    },
    (t.exports = function(t, e, r, a) {
      var h = "function" == typeof r;
      h && (o(r, "name") || i(r, "name", e)),
      t[e] !== r && (h && (o(r, s) || i(r, s, t[e]
        ? "" + t[e]
        : u.join(String(e)))), t === n
        ? t[e] = r
        : a
          ? t[e]
            ? t[e] = r
            : i(t, e, r)
          : (delete t[e], i(t, e, r)))
    })(Function.prototype, a, function() {
      return "function" == typeof this && this[s] || h.call(this)
    })
  },
  function(t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(void 0 === t
        ? ""
        : t, ")_", (++r + n).toString(36))
    }
  },
  function(t, e, r) {
    var n = r(21);
    t.exports = function(t, e, r) {
      if (n(t), void 0 === e)
        return t;
      switch (r) {
        case 1:
          return function(r) {
            return t.call(e, r)
          };
        case 2:
          return function(r, n) {
            return t.call(e, r, n)
          };
        case 3:
          return function(r, n, i) {
            return t.call(e, r, n, i)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if ("function" != typeof t)
        throw TypeError(t + " is not a function!");
      return t
    }
  },
  function(t, e, r) {
    var n = r(19)("meta"),
      i = r(13),
      o = r(5),
      s = r(11).f,
      a = 0,
      h = Object.isExtensible || function() {
        return !0
      },
      u = !r(7)(function() {
        return h(Object.preventExtensions({}))
      }),
      c = function(t) {
        s(t, n, {
          value: {
            i: "O" + ++a,
            w: {}
          }
        })
      },
      l = function(t, e) {
        if (!i(t))
          return "symbol" == typeof t
            ? t
            : ("string" == typeof t
              ? "S"
              : "P") + t;
        if (!o(t, n)) {
          if (!h(t))
            return "F";
          if (!e)
            return "E";
          c(t)
        }
        return t[n].i
      },
      p = function(t, e) {
        if (!o(t, n)) {
          if (!h(t))
            return !0;
          if (!e)
            return !1;
          c(t)
        }
        return t[n].w
      },
      f = function(t) {
        return u && d.NEED && h(t) && !o(t, n) && c(t),
        t
      },
      d = t.exports = {
        KEY: n,
        NEED: !1,
        fastKey: l,
        getWeak: p,
        onFreeze: f
      }
  },
  function(t, e, r) {
    var n = r(4),
      i = "__core-js_shared__",
      o = n[i] || (n[i] = {});
    t.exports = function(t) {
      return o[t] || (o[t] = {})
    }
  },
  function(t, e, r) {
    var n = r(11).f,
      i = r(5),
      o = r(25)("toStringTag");
    t.exports = function(t, e, r) {
      t && !i(t = r
        ? t
        : t.prototype, o) && n(t, o, {
        configurable: !0,
        value: e
      })
    }
  },
  function(t, e, r) {
    var n = r(23)("wks"),
      i = r(19),
      o = r(4).Symbol,
      s = "function" == typeof o,
      a = t.exports = function(t) {
        return n[t] || (n[t] = s && o[t] || (s
          ? o
          : i)("Symbol." + t))
      };
    a.store = n
  },
  function(t, e, r) {
    e.f = r(25)
  },
  function(t, e, r) {
    var n = r(4),
      i = r(9),
      o = r(28),
      s = r(26),
      a = r(11).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o
        ? {}
        : n.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, {value: s.f(t)})
    }
  },
  function(t, e) {
    t.exports = !1
  },
  function(t, e, r) {
    var n = r(30),
      i = r(32);
    t.exports = function(t, e) {
      for (var r, o = i(t), s = n(o), a = s.length, h = 0; a > h;)
        if (o[r = s[h++]] === e)
          return r
    }
  },
  function(t, e, r) {
    var n = r(31),
      i = r(41);
    t.exports = Object.keys || function(t) {
      return n(t, i)
    }
  },
  function(t, e, r) {
    var n = r(5),
      i = r(32),
      o = r(36)(!1),
      s = r(40)("IE_PROTO");
    t.exports = function(t, e) {
      var r,
        a = i(t),
        h = 0,
        u = [];
      for (r in a)
        r != s && n(a, r) && u.push(r);
      for (; e.length > h;)
        n(a, r = e[h++]) && (~ o(u, r) || u.push(r));
      return u
    }
  },
  function(t, e, r) {
    var n = r(33),
      i = r(35);
    t.exports = function(t) {
      return n(i(t))
    }
  },
  function(t, e, r) {
    var n = r(34);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(t) {
        return "String" == n(t)
          ? t.split("")
          : Object(t)
      }
  },
  function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
      return r.call(t).slice(8, -1)
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if (void 0 == t)
        throw TypeError("Can't call method on  " + t);
      return t
    }
  },
  function(t, e, r) {
    var n = r(32),
      i = r(37),
      o = r(39);
    t.exports = function(t) {
      return function(e, r, s) {
        var a,
          h = n(e),
          u = i(h.length),
          c = o(s, u);
        if (t && r != r) {
          for (; u > c;)
            if (a = h[c++], a != a)
              return !0
          }
        else
          for (; u > c; c++)
            if ((t || c in h) && h[c] === r)
              return t || c || 0;
      return !t && -1
      }
    }
  },
  function(t, e, r) {
    var n = r(38),
      i = Math.min;
    t.exports = function(t) {
      return t > 0
        ? i(n(t), 9007199254740991)
        : 0
    }
  },
  function(t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function(t) {
      return isNaN(t =+ t)
        ? 0
        : (t > 0
          ? n
          : r)(t)
    }
  },
  function(t, e, r) {
    var n = r(38),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      return t = n(t),
      t < 0
        ? i(t + e, 0)
        : o(t, e)
    }
  },
  function(t, e, r) {
    var n = r(23)("keys"),
      i = r(19);
    t.exports = function(t) {
      return n[t] || (n[t] = i(t))
    }
  },
  function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  },
  function(t, e, r) {
    var n = r(30),
      i = r(43),
      o = r(44);
    t.exports = function(t) {
      var e = n(t),
        r = i.f;
      if (r)
        for (var s, a = r(t), h = o.f, u = 0; a.length > u;)
          h.call(t, s = a[u++]) && e.push(s);
    return e
    }
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols
  },
  function(t, e) {
    e.f = {}.propertyIsEnumerable
  },
  function(t, e, r) {
    var n = r(34);
    t.exports = Array.isArray || function(t) {
      return "Array" == n(t)
    }
  },
  function(t, e, r) {
    var n = r(12),
      i = r(47),
      o = r(41),
      s = r(40)("IE_PROTO"),
      a = function() {},
      h = "prototype",
      u = function() {
        var t,
          e = r(15)("iframe"),
          n = o.length,
          i = "<",
          s = ">";
        for (e.style.display = "none", r(48).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(i + "script" + s + "document.F=Object" + i + "/script" + s), t.close(), u = t.F; n--;)
          delete u[h][o[n]];
        return u()
      };
    t.exports = Object.create || function(t, e) {
      var r;
      return null !== t
        ? (a[h] = n(t), r = new a, a[h] = null, r[s] = t)
        : r = u(),
      void 0 === e
        ? r
        : i(r, e)
    }
  },
  function(t, e, r) {
    var n = r(11),
      i = r(12),
      o = r(30);
    t.exports = r(6)
      ? Object.defineProperties
      : function(t, e) {
        i(t);
        for (var r, s = o(e), a = s.length, h = 0; a > h;)
          n.f(t, r = s[h++], e[r]);
        return t
      }
  },
  function(t, e, r) {
    t.exports = r(4).document && document.documentElement
  },
  function(t, e, r) {
    var n = r(32),
      i = r(50).f,
      o = {}.toString,
      s = "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
      a = function(t) {
        try {
          return i(t)
        } catch (e) {
          return s.slice()
        }
      };
    t.exports.f = function(t) {
      return s && "[object Window]" == o.call(t)
        ? a(t)
        : i(n(t))
    }
  },
  function(t, e, r) {
    var n = r(31),
      i = r(41).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
      return n(t, i)
    }
  },
  function(t, e, r) {
    var n = r(44),
      i = r(17),
      o = r(32),
      s = r(16),
      a = r(5),
      h = r(14),
      u = Object.getOwnPropertyDescriptor;
    e.f = r(6)
      ? u
      : function(t, e) {
        if (t = o(t), e = s(e, !0), h)
          try {
            return u(t, e)
          } catch (r) {}
        if (a(t, e))
          return i(!n.f.call(t, e), t[e])
      }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Object", {create: r(46)})
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S + n.F * !r(6), "Object", {defineProperty: r(11).f})
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S + n.F * !r(6), "Object", {defineProperties: r(47)})
  },
  function(t, e, r) {
    var n = r(32),
      i = r(51).f;
    r(56)("getOwnPropertyDescriptor", function() {
      return function(t, e) {
        return i(n(t), e)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(9),
      o = r(7);
    t.exports = function(t, e) {
      var r = (i.Object || {})[t] || Object[t],
        s = {};
      s[t] = e(r),
      n(n.S + n.F * o(function() {
        r(1)
      }), "Object", s)
    }
  },
  function(t, e, r) {
    var n = r(58),
      i = r(59);
    r(56)("getPrototypeOf", function() {
      return function(t) {
        return i(n(t))
      }
    })
  },
  function(t, e, r) {
    var n = r(35);
    t.exports = function(t) {
      return Object(n(t))
    }
  },
  function(t, e, r) {
    var n = r(5),
      i = r(58),
      o = r(40)("IE_PROTO"),
      s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
      return t = i(t),
      n(t, o)
        ? t[o]
        : "function" == typeof t.constructor && t instanceof t.constructor
          ? t.constructor.prototype
          : t instanceof Object
            ? s
            : null
    }
  },
  function(t, e, r) {
    var n = r(58),
      i = r(30);
    r(56)("keys", function() {
      return function(t) {
        return i(n(t))
      }
    })
  },
  function(t, e, r) {
    r(56)("getOwnPropertyNames", function() {
      return r(49).f
    })
  },
  function(t, e, r) {
    var n = r(13),
      i = r(22).onFreeze;
    r(56)("freeze", function(t) {
      return function(e) {
        return t && n(e)
          ? t(i(e))
          : e
      }
    })
  },
  function(t, e, r) {
    var n = r(13),
      i = r(22).onFreeze;
    r(56)("seal", function(t) {
      return function(e) {
        return t && n(e)
          ? t(i(e))
          : e
      }
    })
  },
  function(t, e, r) {
    var n = r(13),
      i = r(22).onFreeze;
    r(56)("preventExtensions", function(t) {
      return function(e) {
        return t && n(e)
          ? t(i(e))
          : e
      }
    })
  },
  function(t, e, r) {
    var n = r(13);
    r(56)("isFrozen", function(t) {
      return function(e) {
        return !n(e) || !!t && t(e)
      }
    })
  },
  function(t, e, r) {
    var n = r(13);
    r(56)("isSealed", function(t) {
      return function(e) {
        return !n(e) || !!t && t(e)
      }
    })
  },
  function(t, e, r) {
    var n = r(13);
    r(56)("isExtensible", function(t) {
      return function(e) {
        return !!n(e) && (!t || t(e))
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S + n.F, "Object", {assign: r(69)})
  },
  function(t, e, r) {
    "use strict";
    var n = r(30),
      i = r(43),
      o = r(44),
      s = r(58),
      a = r(33),
      h = Object.assign;
    t.exports = !h || r(7)(function() {
      var t = {},
        e = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";
      return t[r] = 7,
      n.split("").forEach(function(t) {
        e[t] = t
      }),
      7 != h({}, t)[r] || Object.keys(h({}, e)).join("") != n
    })
      ? function(t, e) {
        for (var r = s(t), h = arguments.length, u = 1, c = i.f, l = o.f; h > u;)
          for (var p, f = a(arguments[u++]), d = c
            ? n(f).concat(c(f))
            : n(f), m = d.length, g = 0; m > g;)
            l.call(f, p = d[g++]) && (r[p] = f[p]);
      return r
      }
      : h
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Object", {is: r(71)})
  },
  function(t, e) {
    t.exports = Object.is || function(t, e) {
      return t === e
        ? 0 !== t || 1 / t === 1 / e
        : t != t && e != e
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Object", {setPrototypeOf: r(73).set})
  },
  function(t, e, r) {
    var n = r(13),
      i = r(12),
      o = function(t, e) {
        if (i(t), !n(e) && null !== e)
          throw TypeError(e + ": can't set as prototype!")
      };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {}
        ? function(t, e, n) {
          try {
            n = r(20)(Function.call, r(51).f(Object.prototype, "__proto__").set, 2),
            n(t, []),
            e = !(t instanceof Array)
          } catch (i) {
            e = !0
          }
          return function(t, r) {
            return o(t, r),
            e
              ? t.__proto__ = r
              : n(t, r),
            t
          }
        }({}, !1)
        : void 0),
      check: o
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(75),
      i = {};
    i[r(25)("toStringTag")] = "z",
    i + "" != "[object z]" && r(18)(Object.prototype, "toString", function() {
      return "[object " + n(this) + "]"
    },
    !0)
  },
  function(t, e, r) {
    var n = r(34),
      i = r(25)("toStringTag"),
      o = "Arguments" == n(function() {
        return arguments
      }()),
      s = function(t, e) {
        try {
          return t[e]
        } catch (r) {}
      };
    t.exports = function(t) {
      var e,
        r,
        a;
      return void 0 === t
        ? "Undefined"
        : null === t
          ? "Null"
          : "string" == typeof(r = s(e = Object(t), i))
            ? r
            : o
              ? n(e)
              : "Object" == (a = n(e)) && "function" == typeof e.callee
                ? "Arguments"
                : a
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P, "Function", {bind: r(77)})
  },
  function(t, e, r) {
    "use strict";
    var n = r(21),
      i = r(13),
      o = r(78),
      s = [].slice,
      a = {},
      h = function(t, e, r) {
        if (!(e in a)) {
          for (var n = [], i = 0; i < e; i++)
            n[i] = "a[" + i + "]";
          a[e] = Function("F,a", "return new F(" + n.join(",") + ")")
        }
        return a[e](t, r)
      };
    t.exports = Function.bind || function(t) {
      var e = n(this),
        r = s.call(arguments, 1),
        a = function() {
          var n = r.concat(s.call(arguments));
          return this instanceof a
            ? h(e, n.length, n)
            : o(e, n, t)
        };
      return i(e.prototype) && (a.prototype = e.prototype),
      a
    }
  },
  function(t, e) {
    t.exports = function(t, e, r) {
      var n = void 0 === r;
      switch (e.length) {
        case 0:
          return n
            ? t()
            : t.call(r);
        case 1:
          return n
            ? t(e[0])
            : t.call(r, e[0]);
        case 2:
          return n
            ? t(e[0], e[1])
            : t.call(r, e[0], e[1]);
        case 3:
          return n
            ? t(e[0], e[1], e[2])
            : t.call(r, e[0], e[1], e[2]);
        case 4:
          return n
            ? t(e[0], e[1], e[2], e[3])
            : t.call(r, e[0], e[1], e[2], e[3])
      }
      return t.apply(r, e)
    }
  },
  function(t, e, r) {
    var n = r(11).f,
      i = r(17),
      o = r(5),
      s = Function.prototype,
      a = /^\s*function ([^ (]*)/,
      h = "name",
      u = Object.isExtensible || function() {
        return !0
      };
    h in s || r(6) && n(s, h, {
      configurable: !0,
      get: function() {
        try {
          var t = this,
            e = ("" + t).match(a)[1];
          return o(t, h) || !u(t) || n(t, h, i(5, e)),
          e
        } catch (r) {
          return ""
        }
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(13),
      i = r(59),
      o = r(25)("hasInstance"),
      s = Function.prototype;
    o in s || r(11).f(s, o, {
      value: function(t) {
        if ("function" != typeof this || !n(t))
          return !1;
        if (!n(this.prototype))
          return t instanceof this;
        for (; t = i(t);)
          if (this.prototype === t)
            return !0;
      return !1
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(82);
    n(n.G + n.F * (parseInt != i), {parseInt: i})
  },
  function(t, e, r) {
    var n = r(4).parseInt,
      i = r(83).trim,
      o = r(84),
      s = /^[\-+]?0[xX]/;
    t.exports = 8 !== n(o + "08") || 22 !== n(o + "0x16")
      ? function(t, e) {
        var r = i(String(t), 3);
        return n(r, e >>> 0 || (s.test(r)
          ? 16
          : 10))
      }
      : n
  },
  function(t, e, r) {
    var n = r(8),
      i = r(35),
      o = r(7),
      s = r(84),
      a = "[" + s + "]",
      h = "​",
      u = RegExp("^" + a + a + "*"),
      c = RegExp(a + a + "*$"),
      l = function(t, e, r) {
        var i = {},
          a = o(function() {
            return !!s[t]() || h[t]() != h
          }),
          u = i[t] = a
            ? e(p)
            : s[t];
        r && (i[r] = u),
        n(n.P + n.F * a, "String", i)
      },
      p = l.trim = function(t, e) {
        return t = String(i(t)),
        1 & e && (t = t.replace(u, "")),
        2 & e && (t = t.replace(c, "")),
        t
      };
    t.exports = l
  },
  function(t, e) {
    t.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
  },
  function(t, e, r) {
    var n = r(8),
      i = r(86);
    n(n.G + n.F * (parseFloat != i), {parseFloat: i})
  },
  function(t, e, r) {
    var n = r(4).parseFloat,
      i = r(83).trim;
    t.exports = 1 / n(r(84) + "-0") !== -(1 / 0)
      ? function(t) {
        var e = i(String(t), 3),
          r = n(e);
        return 0 === r && "-" == e.charAt(0)
          ? -0
          : r
      }
      : n
  },
  function(t, e, r) {
    "use strict";
    var n = r(4),
      i = r(5),
      o = r(34),
      s = r(88),
      a = r(16),
      h = r(7),
      u = r(50).f,
      c = r(51).f,
      l = r(11).f,
      p = r(83).trim,
      f = "Number",
      d = n[f],
      m = d,
      g = d.prototype,
      y = o(r(46)(g)) == f,
      v = "trim" in String.prototype,
      x = function(t) {
        var e = a(t, !1);
        if ("string" == typeof e && e.length > 2) {
          e = v
            ? e.trim()
            : p(e, 3);
          var r,
            n,
            i,
            o = e.charCodeAt(0);
          if (43 === o || 45 === o) {
            if (r = e.charCodeAt(2), 88 === r || 120 === r)
              return NaN
          } else if (48 === o) {
            switch (e.charCodeAt(1)) {
              case 66:
              case 98:
                n = 2,
                i = 49;
                break;
              case 79:
              case 111:
                n = 8,
                i = 55;
                break;
              default:
                return + e
            }
            for (var s, h = e.slice(2), u = 0, c = h.length; u < c; u++)
              if (s = h.charCodeAt(u), s < 48 || s > i)
                return NaN;
          return parseInt(h, n)
          }
        }
        return + e
      };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
      d = function(t) {
        var e = arguments.length < 1
            ? 0
            : t,
          r = this;
        return r instanceof d && (y
          ? h(function() {
            g.valueOf.call(r)
          })
          : o(r) != f)
          ? s(new m(x(e)), r, d)
          : x(e)
      };
      for (var b, _ = r(6)
        ? u(m)
        : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; _.length > w; w++)
        i(m, b = _[w]) && !i(d, b) && l(d, b, c(m, b));
      d.prototype = g,
      g.constructor = d,
      r(18)(n, f, d)
    }
  },
  function(t, e, r) {
    var n = r(13),
      i = r(73).set;
    t.exports = function(t, e, r) {
      var o,
        s = e.constructor;
      return s !== r && "function" == typeof s && (o = s.prototype) !== r.prototype && n(o) && i && i(t, o),
      t
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(38),
      o = r(90),
      s = r(91),
      a = 1..toFixed,
      h = Math.floor,
      u = [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      c = "Number.toFixed: incorrect invocation!",
      l = "0",
      p = function(t, e) {
        for (var r = -1, n = e; ++r < 6;)
          n += t * u[r],
          u[r] = n % 1e7,
          n = h(n / 1e7)
      },
      f = function(t) {
        for (var e = 6, r = 0; --e >= 0;)
          r += u[e],
          u[e] = h(r / t),
          r = r % t * 1e7
      },
      d = function() {
        for (var t = 6, e = ""; --t >= 0;)
          if ("" !== e || 0 === t || 0 !== u[t]) {
            var r = String(u[t]);
            e = "" === e
              ? r
              : e + s.call(l, 7 - r.length) + r
          }
        return e
      },
      m = function(t, e, r) {
        return 0 === e
          ? r
          : e % 2 === 1
            ? m(t, e - 1, r * t)
            : m(t * t, e / 2, r)
      },
      g = function(t) {
        for (var e = 0, r = t; r >= 4096;)
          e += 12,
          r /= 4096;
        for (; r >= 2;)
          e += 1,
          r /= 2;
        return e
      };
    n(n.P + n.F * (!!a && ("0.000" !== 8e-5. toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r(7)(function() {
      a.call({})
    })), "Number", {
      toFixed: function(t) {
        var e,
          r,
          n,
          a,
          h = o(this, c),
          u = i(t),
          y = "",
          v = l;
        if (u < 0 || u > 20)
          throw RangeError(c);
        if (h != h)
          return "NaN";
        if (h <= -1e21 || h >= 1e21)
          return String(h);
        if (h < 0 && (y = "-", h = -h), h > 1e-21)
          if (e = g(h * m(2, 69, 1)) - 69, r = e < 0
            ? h * m(2, -e, 1)
            : h / m(2, e, 1), r *= 4503599627370496, e = 52 - e, e > 0) {
            for (p(0, r), n = u; n >= 7;)
              p(1e7, 0),
              n -= 7;
            for (p(m(10, n, 1), 0), n = e - 1; n >= 23;)
              f(1 << 23),
              n -= 23;
            f(1 << n),
            p(1, 1),
            f(2),
            v = d()
          } else
            p(0, r),
            p(1 << -e, 0),
            v = d() + s.call(l, u);
      return u > 0
          ? (a = v.length, v = y + (a <= u
            ? "0." + s.call(l, u - a) + v
            : v.slice(0, a - u) + "." + v.slice(a - u)))
          : v = y + v,
        v
      }
    })
  },
  function(t, e, r) {
    var n = r(34);
    t.exports = function(t, e) {
      if ("number" != typeof t && "Number" != n(t))
        throw TypeError(e);
      return + t
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(38),
      i = r(35);
    t.exports = function(t) {
      var e = String(i(this)),
        r = "",
        o = n(t);
      if (o < 0 || o == 1 / 0)
        throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (e += e))
        1 & o && (r += e);
      return r
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(7),
      o = r(90),
      s = 1..toPrecision;
    n(n.P + n.F * (i(function() {
      return "1" !== s.call(1, void 0)
    }) || !i(function() {
      s.call({})
    })), "Number", {
      toPrecision: function(t) {
        var e = o(this, "Number#toPrecision: incorrect invocation!");
        return void 0 === t
          ? s.call(e)
          : s.call(e, t)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Number", {
      EPSILON: Math.pow(2, -52)
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(4).isFinite;
    n(n.S, "Number", {
      isFinite: function(t) {
        return "number" == typeof t && i(t)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Number", {isInteger: r(96)})
  },
  function(t, e, r) {
    var n = r(13),
      i = Math.floor;
    t.exports = function(t) {
      return !n(t) && isFinite(t) && i(t) === t
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Number", {
      isNaN: function(t) {
        return t != t
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(96),
      o = Math.abs;
    n(n.S, "Number", {
      isSafeInteger: function(t) {
        return i(t) && o(t) <= 9007199254740991
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(86);
    n(n.S + n.F * (Number.parseFloat != i), "Number", {parseFloat: i})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(82);
    n(n.S + n.F * (Number.parseInt != i), "Number", {parseInt: i})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(104),
      o = Math.sqrt,
      s = Math.acosh;
    n(n.S + n.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
      acosh: function(t) {
        return (t =+ t) < 1
          ? NaN
          : t > 94906265.62425156
            ? Math.log(t) + Math.LN2
            : i(t - 1 + o(t - 1) * o(t + 1))
      }
    })
  },
  function(t, e) {
    t.exports = Math.log1p || function(t) {
      return (t =+ t) > -1e-8 && t < 1e-8
        ? t - t * t / 2
        : Math.log(1 + t)
    }
  },
  function(t, e, r) {
    function n(t) {
      return isFinite(t =+ t) && 0 != t
        ? t < 0
          ? -n(-t)
          : Math.log(t + Math.sqrt(t * t + 1))
        : t
    }
    var i = r(8),
      o = Math.asinh;
    i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", {asinh: n})
  },
  function(t, e, r) {
    var n = r(8),
      i = Math.atanh;
    n(n.S + n.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function(t) {
        return 0 == (t =+ t)
          ? t
          : Math.log((1 + t) / (1 - t)) / 2
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(108);
    n(n.S, "Math", {
      cbrt: function(t) {
        return i(t =+ t) * Math.pow(Math.abs(t), 1 / 3)
      }
    })
  },
  function(t, e) {
    t.exports = Math.sign || function(t) {
      return 0 == (t =+ t) || t != t
        ? t
        : t < 0
          ? -1
          : 1
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      clz32: function(t) {
        return (t >>>= 0)
          ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E)
          : 32
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = Math.exp;
    n(n.S, "Math", {
      cosh: function(t) {
        return (i(t =+ t) + i(-t)) / 2
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(112);
    n(n.S + n.F * (i != Math.expm1), "Math", {expm1: i})
  },
  function(t, e) {
    var r = Math.expm1;
    t.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || r(-2e-17) != -2e-17
      ? function(t) {
        return 0 == (t =+ t)
          ? t
          : t > -1e-6 && t < 1e-6
            ? t + t * t / 2
            : Math.exp(t) - 1
      }
      : r
  },
  function(t, e, r) {
    var n = r(8),
      i = r(108),
      o = Math.pow,
      s = o(2, -52),
      a = o(2, -23),
      h = o(2, 127) * (2 - a),
      u = o(2, -126),
      c = function(t) {
        return t + 1 / s - 1 / s
      };
    n(n.S, "Math", {
      fround: function(t) {
        var e,
          r,
          n = Math.abs(t),
          o = i(t);
        return n < u
          ? o * c(n / u / a) * u * a
          : (e = (1 + a / s) * n, r = e - (e - n), r > h || r != r
            ? o * (1 / 0)
            : o * r)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = Math.abs;
    n(n.S, "Math", {
      hypot: function(t, e) {
        for (var r, n, o = 0, s = 0, a = arguments.length, h = 0; s < a;)
          r = i(arguments[s++]),
          h < r
            ? (n = h / r, o = o * n * n + 1, h = r)
            : r > 0
              ? (n = r / h, o += n * n)
              : o += r;
        return h === 1 / 0
          ? 1 / 0
          : h * Math.sqrt(o)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = Math.imul;
    n(n.S + n.F * r(7)(function() {
      return i(4294967295, 5) != -5 || 2 != i.length
    }), "Math", {
      imul: function(t, e) {
        var r = 65535,
          n =+ t,
          i =+ e,
          o = r & n,
          s = r & i;
        return 0 | o * s + ((r & n >>> 16) * s + o * (r & i >>> 16) << 16 >>> 0)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      log10: function(t) {
        return Math.log(t) / Math.LN10
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {log1p: r(104)})
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      log2: function(t) {
        return Math.log(t) / Math.LN2
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {sign: r(108)})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(112),
      o = Math.exp;
    n(n.S + n.F * r(7)(function() {
      return !Math.sinh(-2e-17) != -2e-17
    }), "Math", {
      sinh: function(t) {
        return Math.abs(t =+ t) < 1
          ? (i(t) - i(-t)) / 2
          : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(112),
      o = Math.exp;
    n(n.S, "Math", {
      tanh: function(t) {
        var e = i(t =+ t),
          r = i(-t);
        return e == 1 / 0
          ? 1
          : r == 1 / 0
            ? -1
            : (e - r) / (o(t) + o(-t))
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      trunc: function(t) {
        return (t > 0
          ? Math.floor
          : Math.ceil)(t)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(39),
      o = String.fromCharCode,
      s = String.fromCodePoint;
    n(n.S + n.F * (!!s && 1 != s.length), "String", {
      fromCodePoint: function(t) {
        for (var e, r = [], n = arguments.length, s = 0; n > s;) {
          if (e =+ arguments[s++], i(e, 1114111) !== e)
            throw RangeError(e + " is not a valid code point");
          r.push(e < 65536
            ? o(e)
            : o(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
        }
        return r.join("")
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(32),
      o = r(37);
    n(n.S, "String", {
      raw: function(t) {
        for (var e = i(t.raw), r = o(e.length), n = arguments.length, s = [], a = 0; r > a;)
          s.push(String(e[a++])),
          a < n && s.push(String(arguments[a]));
        return s.join("")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(83)("trim", function(t) {
      return function() {
        return t(this, 3)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(127)(!0);
    r(128)(String, "String", function(t) {
      this._t = String(t),
      this._i = 0
    },
    function() {
      var t,
        e = this._t,
        r = this._i;
      return r >= e.length
        ? {
          value: void 0,
          done: !0
        }
        : (t = n(e, r), this._i += t.length, {
          value: t,
          done: !1
        })
    })
  },
  function(t, e, r) {
    var n = r(38),
      i = r(35);
    t.exports = function(t) {
      return function(e, r) {
        var o,
          s,
          a = String(i(e)),
          h = n(r),
          u = a.length;
        return h < 0 || h >= u
          ? t
            ? ""
            : void 0
          : (o = a.charCodeAt(h), o < 55296 || o > 56319 || h + 1 === u || (s = a.charCodeAt(h + 1)) < 56320 || s > 57343
            ? t
              ? a.charAt(h)
              : o
            : t
              ? a.slice(h, h + 2)
              : (o - 55296 << 10) + (s - 56320) + 65536)
      }
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(28),
      i = r(8),
      o = r(18),
      s = r(10),
      a = r(5),
      h = r(129),
      u = r(130),
      c = r(24),
      l = r(59),
      p = r(25)("iterator"),
      f = !([].keys && "next" in[].keys()),
      d = "@@iterator",
      m = "keys",
      g = "values",
      y = function() {
        return this
      };
    t.exports = function(t, e, r, v, x, b, _) {
      u(r, e, v);
      var w,
        S,
        M,
        T = function(t) {
          if (!f && t in A)
            return A[t];
          switch (t) {
            case m:
              return function() {
                return new r(this, t)
              };
            case g:
              return function() {
                return new r(this, t)
              }
          }
          return function() {
            return new r(this, t)
          }
        },
        R = e + " Iterator",
        E = x == g,
        C = !1,
        A = t.prototype,
        P = A[p] || A[d] || x && A[x],
        I = P || T(x),
        O = x
          ? E
            ? T("entries")
            : I
          : void 0,
        L = "Array" == e
          ? A.entries || P
          : P;
      if (L && (M = l(L.call(new t)), M !== Object.prototype && (c(M, R, !0), n || a(M, p) || s(M, p, y))), E && P && P.name !== g && (C = !0, I = function() {
        return P.call(this)
      }), n && !_ || !f && !C && A[p] || s(A, p, I), h[e] = I, h[R] = y, x)
        if (w = {
          values: E
            ? I
            : T(g),
          keys: b
            ? I
            : T(m),
          entries: O
        }, _)
          for (S in w)
            S in A || o(A, S, w[S]);
    else
        i(i.P + i.F * (f || C), e, w);
      return w
    }
  },
  function(t, e) {
    t.exports = {}
  },
  function(t, e, r) {
    "use strict";
    var n = r(46),
      i = r(17),
      o = r(24),
      s = {};
    r(10)(s, r(25)("iterator"),
    function() {
      return this
    }),
    t.exports = function(t, e, r) {
      t.prototype = n(s, {
        next: i(1, r)
      }),
      o(t, e + " Iterator")
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(127)(!1);
    n(n.P, "String", {
      codePointAt: function(t) {
        return i(this, t)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(37),
      o = r(133),
      s = "endsWith",
      a = "" [s];
    n(n.P + n.F * r(135)(s), "String", {
      endsWith: function(t) {
        var e = o(this, t, s),
          r = arguments.length > 1
            ? arguments[1]
            : void 0,
          n = i(e.length),
          h = void 0 === r
            ? n
            : Math.min(i(r), n),
          u = String(t);
        return a
          ? a.call(e, u, h)
          : e.slice(h - u.length, h) === u
      }
    })
  },
  function(t, e, r) {
    var n = r(134),
      i = r(35);
    t.exports = function(t, e, r) {
      if (n(e))
        throw TypeError("String#" + r + " doesn't accept regex!");
      return String(i(t))
    }
  },
  function(t, e, r) {
    var n = r(13),
      i = r(34),
      o = r(25)("match");
    t.exports = function(t) {
      var e;
      return n(t) && (void 0 !== (e = t[o])
        ? !!e
        : "RegExp" == i(t))
    }
  },
  function(t, e, r) {
    var n = r(25)("match");
    t.exports = function(t) {
      var e = /./;
      try {
        "/./" [t](e)
      } catch (r) {
        try {
          return e[n] = !1,
          !"/./" [t](e)
        } catch (i) {}
      }
      return !0
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(133),
      o = "includes";
    n(n.P + n.F * r(135)(o), "String", {
      includes: function(t) {
        return ! !~ i(this, t, o).indexOf(t, arguments.length > 1
          ? arguments[1]
          : void 0)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P, "String", {repeat: r(91)})
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(37),
      o = r(133),
      s = "startsWith",
      a = "" [s];
    n(n.P + n.F * r(135)(s), "String", {
      startsWith: function(t) {
        var e = o(this, t, s),
          r = i(Math.min(arguments.length > 1
            ? arguments[1]
            : void 0, e.length)),
          n = String(t);
        return a
          ? a.call(e, n, r)
          : e.slice(r, r + n.length) === n
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("anchor", function(t) {
      return function(e) {
        return t(this, "a", "name", e)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(7),
      o = r(35),
      s = /"/g,
      a = function(t, e, r, n) {
        var i = String(o(t)),
          a = "<" + e;
        return "" !== r && (a += " " + r + '="' + String(n).replace(s, "&quot;") + '"'),
        a + ">" + i + "</" + e + ">"
      };
    t.exports = function(t, e) {
      var r = {};
      r[t] = e(a),
      n(n.P + n.F * i(function() {
        var e = "" [t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3
      }), "String", r)
    }
  },
  function(t, e, r) {
    "use strict";
    r(140)("big", function(t) {
      return function() {
        return t(this, "big", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("blink", function(t) {
      return function() {
        return t(this, "blink", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("bold", function(t) {
      return function() {
        return t(this, "b", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("fixed", function(t) {
      return function() {
        return t(this, "tt", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("fontcolor", function(t) {
      return function(e) {
        return t(this, "font", "color", e)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("fontsize", function(t) {
      return function(e) {
        return t(this, "font", "size", e)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("italics", function(t) {
      return function() {
        return t(this, "i", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("link", function(t) {
      return function(e) {
        return t(this, "a", "href", e)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("small", function(t) {
      return function() {
        return t(this, "small", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("strike", function(t) {
      return function() {
        return t(this, "strike", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("sub", function(t) {
      return function() {
        return t(this, "sub", "", "")
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(140)("sup", function(t) {
      return function() {
        return t(this, "sup", "", "")
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Date", {
      now: function() {
        return (new Date).getTime()
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(58),
      o = r(16);
    n(n.P + n.F * r(7)(function() {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function() {
          return 1
        }
      })
    }), "Date", {
      toJSON: function(t) {
        var e = i(this),
          r = o(e);
        return "number" != typeof r || isFinite(r)
          ? e.toISOString()
          : null
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(7),
      o = Date.prototype.getTime,
      s = function(t) {
        return t > 9
          ? t
          : "0" + t
      };
    n(n.P + n.F * (i(function() {
      return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
    }) || !i(function() {
      new Date(NaN).toISOString()
    })), "Date", {
      toISOString: function() {
        if (!isFinite(o.call(this)))
          throw RangeError("Invalid time value");
        var t = this,
          e = t.getUTCFullYear(),
          r = t.getUTCMilliseconds(),
          n = e < 0
            ? "-"
            : e > 9999
              ? "+"
              : "";
        return n + ("00000" + Math.abs(e)).slice(n
          ? -6
          : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (r > 99
          ? r
          : "0" + s(r)) + "Z";
      }
    })
  },
  function(t, e, r) {
    var n = Date.prototype,
      i = "Invalid Date",
      o = "toString",
      s = n[o],
      a = n.getTime;
    new Date(NaN) + "" != i && r(18)(n, o, function() {
      var t = a.call(this);
      return t === t
        ? s.call(this)
        : i
    })
  },
  function(t, e, r) {
    var n = r(25)("toPrimitive"),
      i = Date.prototype;
    n in i || r(10)(i, n, r(158))
  },
  function(t, e, r) {
    "use strict";
    var n = r(12),
      i = r(16),
      o = "number";
    t.exports = function(t) {
      if ("string" !== t && t !== o && "default" !== t)
        throw TypeError("Incorrect hint");
      return i(n(this), t != o)
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Array", {isArray: r(45)})
  },
  function(t, e, r) {
    "use strict";
    var n = r(20),
      i = r(8),
      o = r(58),
      s = r(161),
      a = r(162),
      h = r(37),
      u = r(163),
      c = r(164);
    i(i.S + i.F * !r(165)(function(t) {
      Array.from(t)
    }), "Array", {
      from: function(t) {
        var e,
          r,
          i,
          l,
          p = o(t),
          f = "function" == typeof this
            ? this
            : Array,
          d = arguments.length,
          m = d > 1
            ? arguments[1]
            : void 0,
          g = void 0 !== m,
          y = 0,
          v = c(p);
        if (g && (m = n(m, d > 2
          ? arguments[2]
          : void 0, 2)), void 0 == v || f == Array && a(v))
          for (e = h(p.length), r = new f(e); e > y; y++)
            u(r, y, g
              ? m(p[y], y)
              : p[y]);
        else
          for (l = v.call(p), r = new f; !(i = l.next()).done; y++)
            u(r, y, g
              ? s(l, m, [
                i.value, y
              ], !0)
              : i.value);
        return r.length = y,
        r
      }
    })
  },
  function(t, e, r) {
    var n = r(12);
    t.exports = function(t, e, r, i) {
      try {
        return i
          ? e(n(r)[0], r[1])
          : e(r)
      } catch (o) {
        var s = t["return"];
        throw void 0 !== s && n(s.call(t)),
        o
      }
    }
  },
  function(t, e, r) {
    var n = r(129),
      i = r(25)("iterator"),
      o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (n.Array === t || o[i] === t)
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(11),
      i = r(17);
    t.exports = function(t, e, r) {
      e in t
        ? n.f(t, e, i(0, r))
        : t[e] = r
    }
  },
  function(t, e, r) {
    var n = r(75),
      i = r(25)("iterator"),
      o = r(129);
    t.exports = r(9).getIteratorMethod = function(t) {
      if (void 0 != t)
        return t[i] || t["@@iterator"] || o[n(t)]
    }
  },
  function(t, e, r) {
    var n = r(25)("iterator"),
      i = !1;
    try {
      var o = [7][n]();
      o["return"] = function() {
        i = !0
      },
      Array.from(o, function() {
        throw 2
      })
    } catch (s) {}
    t.exports = function(t, e) {
      if (!e && !i)
        return !1;
      var r = !1;
      try {
        var o = [7],
          s = o[n]();
        s.next = function() {
          return {
            done: r = !0
          }
        },
        o[n] = function() {
          return s
        },
        t(o)
      } catch (a) {}
      return r
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(163);
    n(n.S + n.F * r(7)(function() {
      function t() {}
      return !(Array.of.call(t)instanceof t)
    }), "Array", {
      of: function() {
        for (var t = 0, e = arguments.length, r = new("function" == typeof this
          ? this
          : Array)(e); e > t;)
          i(r, t, arguments[t++]);
        return r.length = e,
        r
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(32),
      o = [].join;
    n(n.P + n.F * (r(33) != Object || !r(168)(o)), "Array", {
      join: function(t) {
        return o.call(i(this), void 0 === t
          ? ","
          : t)
      }
    })
  },
  function(t, e, r) {
    var n = r(7);
    t.exports = function(t, e) {
      return !!t && n(function() {
        e
          ? t.call(null, function() {}, 1)
          : t.call(null)
      })
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(48),
      o = r(34),
      s = r(39),
      a = r(37),
      h = [].slice;
    n(n.P + n.F * r(7)(function() {
      i && h.call(i)
    }), "Array", {
      slice: function(t, e) {
        var r = a(this.length),
          n = o(this);
        if (e = void 0 === e
          ? r
          : e, "Array" == n)
          return h.call(this, t, e);
        for (var i = s(t, r), u = s(e, r), c = a(u - i), l = Array(c), p = 0; p < c; p++)
          l[p] = "String" == n
            ? this.charAt(i + p)
            : this[i + p];
        return l
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(21),
      o = r(58),
      s = r(7),
      a = [].sort,
      h = [1, 2, 3];
    n(n.P + n.F * (s(function() {
      h.sort(void 0)
    }) || !s(function() {
      h.sort(null)
    }) || !r(168)(a)), "Array", {
      sort: function(t) {
        return void 0 === t
          ? a.call(o(this))
          : a.call(o(this), i(t))
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(0),
      o = r(168)([].forEach, !0);
    n(n.P + n.F * !o, "Array", {
      forEach: function(t) {
        return i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    var n = r(20),
      i = r(33),
      o = r(58),
      s = r(37),
      a = r(173);
    t.exports = function(t, e) {
      var r = 1 == t,
        h = 2 == t,
        u = 3 == t,
        c = 4 == t,
        l = 6 == t,
        p = 5 == t || l,
        f = e || a;
      return function(e, a, d) {
        for (var m, g, y = o(e), v = i(y), x = n(a, d, 3), b = s(v.length), _ = 0, w = r
          ? f(e, b)
          : h
            ? f(e, 0)
            : void 0; b > _; _++)
          if ((p || _ in v) && (m = v[_], g = x(m, _, y), t))
            if (r)
              w[_] = g;
            else if (g)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return m;
                case 6:
                  return _;
                case 2:
                  w.push(m)
              }
            else if (c)
          return !1;
        return l
          ? -1
          : u || c
            ? c
            : w
      }
    }
  },
  function(t, e, r) {
    var n = r(174);
    t.exports = function(t, e) {
      return new(n(t))(e)
    }
  },
  function(t, e, r) {
    var n = r(13),
      i = r(45),
      o = r(25)("species");
    t.exports = function(t) {
      var e;
      return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) || (e = void 0), n(e) && (e = e[o], null === e && (e = void 0))),
      void 0 === e
        ? Array
        : e
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(1);
    n(n.P + n.F * !r(168)([].map, !0), "Array", {
      map: function(t) {
        return i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(2);
    n(n.P + n.F * !r(168)([].filter, !0), "Array", {
      filter: function(t) {
        return i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(3);
    n(n.P + n.F * !r(168)([].some, !0), "Array", {
      some: function(t) {
        return i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(4);
    n(n.P + n.F * !r(168)([].every, !0), "Array", {
      every: function(t) {
        return i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(180);
    n(n.P + n.F * !r(168)([].reduce, !0), "Array", {
      reduce: function(t) {
        return i(this, t, arguments.length, arguments[1], !1)
      }
    })
  },
  function(t, e, r) {
    var n = r(21),
      i = r(58),
      o = r(33),
      s = r(37);
    t.exports = function(t, e, r, a, h) {
      n(e);
      var u = i(t),
        c = o(u),
        l = s(u.length),
        p = h
          ? l - 1
          : 0,
        f = h
          ? -1
          : 1;
      if (r < 2)
        for (;;) {
          if (p in c) {
            a = c[p],
            p += f;
            break
          }
          if (p += f, h
            ? p < 0
            : l <= p)
            throw TypeError("Reduce of empty array with no initial value")
        }
      for (; h
        ? p >= 0
        : l > p; p += f)
        p in c && (a = e(a, c[p], p, u));
      return a
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(180);
    n(n.P + n.F * !r(168)([].reduceRight, !0), "Array", {
      reduceRight: function(t) {
        return i(this, t, arguments.length, arguments[1], !0)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(36)(!1),
      o = [].indexOf,
      s = !!o && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (s || !r(168)(o)), "Array", {
      indexOf: function(t) {
        return s
          ? o.apply(this, arguments) || 0
          : i(this, t, arguments[1])
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(32),
      o = r(38),
      s = r(37),
      a = [].lastIndexOf,
      h = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (h || !r(168)(a)), "Array", {
      lastIndexOf: function(t) {
        if (h)
          return a.apply(this, arguments) || 0;
        var e = i(this),
          r = s(e.length),
          n = r - 1;
        for (arguments.length > 1 && (n = Math.min(n, o(arguments[1]))), n < 0 && (n = r + n); n >= 0; n--)
          if (n in e && e[n] === t)
            return n || 0;
      return -1
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P, "Array", {copyWithin: r(185)}),
    r(186)("copyWithin")
  },
  function(t, e, r) {
    "use strict";
    var n = r(58),
      i = r(39),
      o = r(37);
    t.exports = [].copyWithin || function(t, e) {
      var r = n(this),
        s = o(r.length),
        a = i(t, s),
        h = i(e, s),
        u = arguments.length > 2
          ? arguments[2]
          : void 0,
        c = Math.min((void 0 === u
          ? s
          : i(u, s)) - h, s - a),
        l = 1;
      for (h < a && a < h + c && (l = -1, h += c - 1, a += c - 1); c-- > 0;)
        h in r
          ? r[a] = r[h]
          : delete r[a],
        a += l,
        h += l;
      return r
    }
  },
  function(t, e, r) {
    var n = r(25)("unscopables"),
      i = Array.prototype;
    void 0 == i[n] && r(10)(i, n, {}),
    t.exports = function(t) {
      i[n][t] = !0
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P, "Array", {fill: r(188)}),
    r(186)("fill")
  },
  function(t, e, r) {
    "use strict";
    var n = r(58),
      i = r(39),
      o = r(37);
    t.exports = function(t) {
      for (var e = n(this), r = o(e.length), s = arguments.length, a = i(s > 1
        ? arguments[1]
        : void 0, r), h = s > 2
        ? arguments[2]
        : void 0, u = void 0 === h
        ? r
        : i(h, r); u > a;)
        e[a++] = t;
      return e
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(5),
      o = "find",
      s = !0;
    o in[] && Array(1)[o](function() {
      s = !1
    }),
    n(n.P + n.F * s, "Array", {
      find: function(t) {
        return i(this, t, arguments.length > 1
          ? arguments[1]
          : void 0)
      }
    }),
    r(186)(o)
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(172)(6),
      o = "findIndex",
      s = !0;
    o in[] && Array(1)[o](function() {
      s = !1
    }),
    n(n.P + n.F * s, "Array", {
      findIndex: function(t) {
        return i(this, t, arguments.length > 1
          ? arguments[1]
          : void 0)
      }
    }),
    r(186)(o)
  },
  function(t, e, r) {
    r(192)("Array")
  },
  function(t, e, r) {
    "use strict";
    var n = r(4),
      i = r(11),
      o = r(6),
      s = r(25)("species");
    t.exports = function(t) {
      var e = n[t];
      o && e && !e[s] && i.f(e, s, {
        configurable: !0,
        get: function() {
          return this
        }
      })
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(186),
      i = r(194),
      o = r(129),
      s = r(32);
    t.exports = r(128)(Array, "Array", function(t, e) {
      this._t = s(t),
      this._i = 0,
      this._k = e
    },
    function() {
      var t = this._t,
        e = this._k,
        r = this._i++;
      return !t || r >= t.length
        ? (this._t = void 0, i(1))
        : "keys" == e
          ? i(0, r)
          : "values" == e
            ? i(0, t[r])
            : i(0, [r, t[r]])
    },
    "values"),
    o.Arguments = o.Array,
    n("keys"),
    n("values"),
    n("entries")
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        value: e,
        done: !!t
      }
    }
  },
  function(t, e, r) {
    var n = r(4),
      i = r(88),
      o = r(11).f,
      s = r(50).f,
      a = r(134),
      h = r(196),
      u = n.RegExp,
      c = u,
      l = u.prototype,
      p = /a/g,
      f = /a/g,
      d = new u(p) !== p;
    if (r(6) && (!d || r(7)(function() {
      return f[r(25)("match")] = !1,
      u(p) != p || u(f) == f || "/a/i" != u(p, "i")
    }))) {
      u = function(t, e) {
        var r = this instanceof u,
          n = a(t),
          o = void 0 === e;
        return !r && n && t.constructor === u && o
          ? t
          : i(d
            ? new c(n && !o
              ? t.source
              : t, e)
            : c((n = t instanceof u)
              ? t.source
              : t, n && o
              ? h.call(t)
              : e), r
            ? this
            : l, u)
      };
      for (var m = (function(t) {
        t in u || o(u, t, {
          configurable: !0,
          get: function() {
            return c[t]
          },
          set: function(e) {
            c[t] = e
          }
        })
      }), g = s(c), y = 0; g.length > y;)
        m(g[y++]);
      l.constructor = u,
      u.prototype = l,
      r(18)(n, "RegExp", u)
    }
    r(192)("RegExp")
  },
  function(t, e, r) {
    "use strict";
    var n = r(12);
    t.exports = function() {
      var t = n(this),
        e = "";
      return t.global && (e += "g"),
      t.ignoreCase && (e += "i"),
      t.multiline && (e += "m"),
      t.unicode && (e += "u"),
      t.sticky && (e += "y"),
      e
    }
  },
  function(t, e, r) {
    "use strict";
    r(198);
    var n = r(12),
      i = r(196),
      o = r(6),
      s = "toString",
      a = /./[s],
      h = function(t) {
        r(18)(RegExp.prototype, s, t, !0)
      };
    r(7)(function() {
      return "/a/b" != a.call({source: "a", flags: "b"})
    })
      ? h(function() {
        var t = n(this);
        return "/".concat(t.source, "/", "flags" in t
          ? t.flags
          : !o && t instanceof RegExp
            ? i.call(t)
            : void 0)
      })
      : a.name != s && h(function() {
        return a.call(this)
      })
  },
  function(t, e, r) {
    r(6) && "g" != /./g.flags && r(11).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: r(196)
    })
  },
  function(t, e, r) {
    r(200)("match", 1, function(t, e, r) {
      return [
        function(r) {
          "use strict";
          var n = t(this),
            i = void 0 == r
              ? void 0
              : r[e];
          return void 0 !== i
            ? i.call(r, n)
            : new RegExp(r)[e](String(n))
        },
        r
      ]
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(10),
      i = r(18),
      o = r(7),
      s = r(35),
      a = r(25);
    t.exports = function(t, e, r) {
      var h = a(t),
        u = r(s, h, "" [t]),
        c = u[0],
        l = u[1];
      o(function() {
        var e = {};
        return e[h] = function() {
          return 7
        },
        7 != "" [t](e)
      }) && (i(String.prototype, t, c), n(RegExp.prototype, h, 2 == e
        ? function(t, e) {
          return l.call(t, this, e)
        }
        : function(t) {
          return l.call(t, this)
        }))
    }
  },
  function(t, e, r) {
    r(200)("replace", 2, function(t, e, r) {
      return [
        function(n, i) {
          "use strict";
          var o = t(this),
            s = void 0 == n
              ? void 0
              : n[e];
          return void 0 !== s
            ? s.call(n, o, i)
            : r.call(String(o), n, i)
        },
        r
      ]
    })
  },
  function(t, e, r) {
    r(200)("search", 1, function(t, e, r) {
      return [
        function(r) {
          "use strict";
          var n = t(this),
            i = void 0 == r
              ? void 0
              : r[e];
          return void 0 !== i
            ? i.call(r, n)
            : new RegExp(r)[e](String(n))
        },
        r
      ]
    })
  },
  function(t, e, r) {
    r(200)("split", 2, function(t, e, n) {
      "use strict";
      var i = r(134),
        o = n,
        s = [].push,
        a = "split",
        h = "length",
        u = "lastIndex";
      if ("c" == "abbc" [a](/(b)*/)[1] || 4 != "test" [a](/(?:)/, -1)[h] || 2 != "ab" [a](/(?:ab)*/)[h] || 4 != "." [a](/(.?)(.?)/)[h] || "." [a](/()()/)[h] > 1 || "" [a](/.?/)[h]) {
        var c = void 0 === /()??/.exec("")[1];
        n = function(t, e) {
          var r = String(this);
          if (void 0 === t && 0 === e)
            return [];
          if (!i(t))
            return o.call(r, t, e);
          var n,
            a,
            l,
            p,
            f,
            d = [],
            m = (t.ignoreCase
              ? "i"
              : "") + (t.multiline
              ? "m"
              : "") + (t.unicode
              ? "u"
              : "") + (t.sticky
              ? "y"
              : ""),
            g = 0,
            y = void 0 === e
              ? 4294967295
              : e >>> 0,
            v = new RegExp(t.source, m + "g");
          for (c || (n = new RegExp("^" + v.source + "$(?!\\s)", m)); (a = v.exec(r)) && (l = a.index + a[0][h], !(l > g && (d.push(r.slice(g, a.index)), !c && a[h] > 1 && a[0].replace(n, function() {
            for (f = 1; f < arguments[h] - 2; f++)
              void 0 === arguments[f] && (a[f] = void 0)
          }), a[h] > 1 && a.index < r[h] && s.apply(d, a.slice(1)), p = a[0][h], g = l, d[h] >= y)));)
            v[u] === a.index && v[u]++;
          return g === r[h]
            ? !p && v.test("") || d.push("")
            : d.push(r.slice(g)),
          d[h] > y
            ? d.slice(0, y)
            : d
        }
      } else
        "0" [a](void 0, 0)[h] && (n = function(t, e) {
          return void 0 === t && 0 === e
            ? []
            : o.call(this, t, e)
        });
      return [
        function(r, i) {
          var o = t(this),
            s = void 0 == r
              ? void 0
              : r[e];
          return void 0 !== s
            ? s.call(r, o, i)
            : n.call(String(o), r, i)
        },
        n
      ]
    })
  },
  function(t, e, r) {
    "use strict";
    var n,
      i,
      o,
      s = r(28),
      a = r(4),
      h = r(20),
      u = r(75),
      c = r(8),
      l = r(13),
      p = r(21),
      f = r(205),
      d = r(206),
      m = r(207),
      g = r(208).set,
      y = r(209)(),
      v = "Promise",
      x = a.TypeError,
      b = a.process,
      _ = a[v],
      b = a.process,
      w = "process" == u(b),
      S = function() {},
      M = !!function() {
        try {
          var t = _.resolve(1),
            e = (t.constructor = {})[r(25)("species")] = function(t) {
              t(S, S)
            };
          return (w || "function" == typeof PromiseRejectionEvent) && t.then(S)instanceof e
        } catch (n) {}
      }(),
      T = function(t, e) {
        return t === e || t === _ && e === o
      },
      R = function(t) {
        var e;
        return !(!l(t) || "function" != typeof(e = t.then)) && e
      },
      E = function(t) {
        return T(_, t)
          ? new C(t)
          : new i(t)
      },
      C = i = function(t) {
        var e,
          r;
        this.promise = new t(function(t, n) {
          if (void 0 !== e || void 0 !== r)
            throw x("Bad Promise constructor");
          e = t,
          r = n
        }),
        this.resolve = p(e),
        this.reject = p(r)
      },
      A = function(t) {
        try {
          t()
        } catch (e) {
          return {error: e}
        }
      },
      P = function(t, e) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          y(function() {
            for (var n = t._v, i = 1 == t._s, o = 0, s = function(e) {
              var r,
                o,
                s = i
                  ? e.ok
                  : e.fail,
                a = e.resolve,
                h = e.reject,
                u = e.domain;
              try {
                s
                  ? (i || (2 == t._h && L(t), t._h = 1), s === !0
                    ? r = n
                    : (u && u.enter(), r = s(n), u && u.exit()), r === e.promise
                    ? h(x("Promise-chain cycle"))
                    : (o = R(r))
                      ? o.call(r, a, h)
                      : a(r))
                  : h(n)
              } catch (c) {
                h(c)
              }
            }; r.length > o;)
              s(r[o++]);
            t._c = [],
            t._n = !1,
            e && !t._h && I(t)
          })
        }
      },
      I = function(t) {
        g.call(a, function() {
          var e,
            r,
            n,
            i = t._v;
          if (O(t) && (e = A(function() {
            w
              ? b.emit("unhandledRejection", i, t)
              : (r = a.onunhandledrejection)
                ? r({promise: t, reason: i})
                : (n = a.console) && n.error && n.error("Unhandled promise rejection", i)
          }), t._h = w || O(t)
            ? 2
            : 1), t._a = void 0, e)
            throw e.error
        })
      },
      O = function(t) {
        if (1 == t._h)
          return !1;
        for (var e, r = t._a || t._c, n = 0; r.length > n;)
          if (e = r[n++], e.fail || !O(e.promise))
            return !1;
      return !0
      },
      L = function(t) {
        g.call(a, function() {
          var e;
          w
            ? b.emit("rejectionHandled", t)
            : (e = a.onrejectionhandled) && e({promise: t, reason: t._v})
        })
      },
      N = function(t) {
        var e = this;
        e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), P(e, !0))
      },
      D = function(t) {
        var e,
          r = this;
        if (!r._d) {
          r._d = !0,
          r = r._w || r;
          try {
            if (r === t)
              throw x("Promise can't be resolved itself");

            (e = R(t))
              ? y(function() {
                var n = {
                  _w: r,
                  _d: !1
                };
                try {
                  e.call(t, h(D, n, 1), h(N, n, 1))
                } catch (i) {
                  N.call(n, i)
                }
              })
              : (r._v = t, r._s = 1, P(r, !1))
          } catch (n) {
            N.call({
              _w: r,
              _d: !1
            }, n)
          }
        }
      };
    M || (_ = function(t) {
      f(this, _, v, "_h"),
      p(t),
      n.call(this);
      try {
        t(h(D, this, 1), h(N, this, 1))
      } catch (e) {
        N.call(this, e)
      }
    },
    n = function(t) {
      this._c = [],
      this._a = void 0,
      this._s = 0,
      this._d = !1,
      this._v = void 0,
      this._h = 0,
      this._n = !1
    },
    n.prototype = r(210)(_.prototype, {
      then: function(t, e) {
        var r = E(m(this, _));
        return r.ok = "function" != typeof t || t,
        r.fail = "function" == typeof e && e,
        r.domain = w
          ? b.domain
          : void 0,
        this._c.push(r),
        this._a && this._a.push(r),
        this._s && P(this, !1),
        r.promise
      },
      "catch": function(t) {
        return this.then(void 0, t)
      }
    }),
    C = function() {
      var t = new n;
      this.promise = t,
      this.resolve = h(D, t, 1),
      this.reject = h(N, t, 1)
    }),
    c(c.G + c.W + c.F * !M, {Promise: _}),
    r(24)(_, v),
    r(192)(v),
    o = r(9)[v],
    c(c.S + c.F * !M, v, {
      reject: function(t) {
        var e = E(this),
          r = e.reject;
        return r(t),
        e.promise
      }
    }),
    c(c.S + c.F * (s || !M), v, {
      resolve: function(t) {
        if (t instanceof _ && T(t.constructor, this))
          return t;
        var e = E(this),
          r = e.resolve;
        return r(t),
        e.promise
      }
    }),
    c(c.S + c.F * !(M && r(165)(function(t) {
      _.all(t)["catch"](S)
    })), v, {
      all: function(t) {
        var e = this,
          r = E(e),
          n = r.resolve,
          i = r.reject,
          o = A(function() {
            var r = [],
              o = 0,
              s = 1;
            d(t, !1, function(t) {
              var a = o++,
                h = !1;
              r.push(void 0),
              s++,
              e.resolve(t).then(function(t) {
                h || (h = !0, r[a] = t, --s || n(r))
              }, i)
            }),
            --s || n(r)
          });
        return o && i(o.error),
        r.promise
      },
      race: function(t) {
        var e = this,
          r = E(e),
          n = r.reject,
          i = A(function() {
            d(t, !1, function(t) {
              e.resolve(t).then(r.resolve, n)
            })
          });
        return i && n(i.error),
        r.promise
      }
    })
  },
  function(t, e) {
    t.exports = function(t, e, r, n) {
      if (!(t instanceof e) || void 0 !== n && n in t)
        throw TypeError(r + ": incorrect invocation!");
      return t
    }
  },
  function(t, e, r) {
    var n = r(20),
      i = r(161),
      o = r(162),
      s = r(12),
      a = r(37),
      h = r(164),
      u = {},
      c = {},
      e = t.exports = function(t, e, r, l, p) {
        var f,
          d,
          m,
          g,
          y = p
            ? function() {
              return t
            }
            : h(t),
          v = n(r, l, e
            ? 2
            : 1),
          x = 0;
        if ("function" != typeof y)
          throw TypeError(t + " is not iterable!");
        if (o(y)) {
          for (f = a(t.length); f > x; x++)
            if (g = e
              ? v(s(d = t[x])[0], d[1])
              : v(t[x]), g === u || g === c)
              return g
          }
        else
          for (m = y.call(t); !(d = m.next()).done;)
            if (g = i(m, v, d.value, e), g === u || g === c)
              return g
      };
    e.BREAK = u,
    e.RETURN = c
  },
  function(t, e, r) {
    var n = r(12),
      i = r(21),
      o = r(25)("species");
    t.exports = function(t, e) {
      var r,
        s = n(t).constructor;
      return void 0 === s || void 0 == (r = n(s)[o])
        ? e
        : i(r)
    }
  },
  function(t, e, r) {
    var n,
      i,
      o,
      s = r(20),
      a = r(78),
      h = r(48),
      u = r(15),
      c = r(4),
      l = c.process,
      p = c.setImmediate,
      f = c.clearImmediate,
      d = c.MessageChannel,
      m = 0,
      g = {},
      y = "onreadystatechange",
      v = function() {
        var t =+ this;
        if (g.hasOwnProperty(t)) {
          var e = g[t];
          delete g[t],
          e()
        }
      },
      x = function(t) {
        v.call(t.data)
      };
    p && f || (p = function(t) {
      for (var e = [], r = 1; arguments.length > r;)
        e.push(arguments[r++]);
      return g[++m] = function() {
        a("function" == typeof t
          ? t
          : Function(t), e)
      },
      n(m),
      m
    },
    f = function(t) {
      delete g[t]
    },
    "process" == r(34)(l)
      ? n = function(t) {
        l.nextTick(s(v, t, 1))
      }
      : d
        ? (i = new d, o = i.port2, i.port1.onmessage = x, n = s(o.postMessage, o, 1))
        : c.addEventListener && "function" == typeof postMessage && !c.importScripts
          ? (n = function(t) {
            c.postMessage(t + "", "*")
          },
          c.addEventListener("message", x, !1))
          : n = y in u("script")
            ? function(t) {
              h.appendChild(u("script"))[y] = function() {
                h.removeChild(this),
                v.call(t)
              }
            }
            : function(t) {
              setTimeout(s(v, t, 1), 0)
            }),
    t.exports = {
      set: p,
      clear: f
    }
  },
  function(t, e, r) {
    var n = r(4),
      i = r(208).set,
      o = n.MutationObserver || n.WebKitMutationObserver,
      s = n.process,
      a = n.Promise,
      h = "process" == r(34)(s);
    t.exports = function() {
      var t,
        e,
        r,
        u = function() {
          var n,
            i;
          for (h && (n = s.domain) && n.exit(); t;) {
            i = t.fn,
            t = t.next;
            try {
              i()
            } catch (o) {
              throw t
                ? r()
                : e = void 0,
              o
            }
          }
          e = void 0,
          n && n.enter()
        };
      if (h)
        r = function() {
          s.nextTick(u)
        };
      else if (o) {
        var c = !0,
          l = document.createTextNode("");
        new o(u).observe(l, {
          characterData: !0
        }),
        r = function() {
          l.data = c = !c
        }
      } else if (a && a.resolve) {
        var p = a.resolve();
        r = function() {
          p.then(u)
        }
      } else
        r = function() {
          i.call(n, u)
        };
      return function(n) {
        var i = {
          fn: n,
          next: void 0
        };
        e && (e.next = i),
        t || (t = i, r()),
        e = i
      }
    }
  },
  function(t, e, r) {
    var n = r(18);
    t.exports = function(t, e, r) {
      for (var i in e)
        n(t, i, e[i], r);
      return t
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(212);
    t.exports = r(213)("Map", function(t) {
      return function() {
        return t(this, arguments.length > 0
          ? arguments[0]
          : void 0)
      }
    }, {
      get: function(t) {
        var e = n.getEntry(this, t);
        return e && e.v
      },
      set: function(t, e) {
        return n.def(this, 0 === t
          ? 0
          : t, e)
      }
    },
    n,
    !0)
  },
  function(t, e, r) {
    "use strict";
    var n = r(11).f,
      i = r(46),
      o = r(210),
      s = r(20),
      a = r(205),
      h = r(35),
      u = r(206),
      c = r(128),
      l = r(194),
      p = r(192),
      f = r(6),
      d = r(22).fastKey,
      m = f
        ? "_s"
        : "size",
      g = function(t, e) {
        var r,
          n = d(e);
        if ("F" !== n)
          return t._i[n];
        for (r = t._f; r; r = r.n)
          if (r.k == e)
            return r
      };
    t.exports = {
      getConstructor: function(t, e, r, c) {
        var l = t(function(t, n) {
          a(t, l, e, "_i"),
          t._i = i(null),
          t._f = void 0,
          t._l = void 0,
          t[m] = 0,
          void 0 != n && u(n, r, t[c], t)
        });
        return o(l.prototype, {
          clear: function() {
            for (var t = this, e = t._i, r = t._f; r; r = r.n)
              r.r = !0,
              r.p && (r.p = r.p.n = void 0),
              delete e[r.i];
            t._f = t._l = void 0,
            t[m] = 0
          },
          "delete": function(t) {
            var e = this,
              r = g(e, t);
            if (r) {
              var n = r.n,
                i = r.p;
              delete e._i[r.i],
              r.r = !0,
              i && (i.n = n),
              n && (n.p = i),
              e._f == r && (e._f = n),
              e._l == r && (e._l = i),
              e[m]--
            }
            return !!r
          },
          forEach: function(t) {
            a(this, l, "forEach");
            for (var e, r = s(t, arguments.length > 1
              ? arguments[1]
              : void 0, 3); e = e
              ? e.n
              : this._f;)
              for (r(e.v, e.k, this); e && e.r;)
                e = e.p
          },
          has: function(t) {
            return !!g(this, t)
          }
        }),
        f && n(l.prototype, "size", {
          get: function() {
            return h(this[m])
          }
        }),
        l
      },
      def: function(t, e, r) {
        var n,
          i,
          o = g(t, e);
        return o
          ? o.v = r
          : (t._l = o = {
            i: i = d(e, !0),
            k: e,
            v: r,
            p: n = t._l,
            n: void 0,
            r: !1
          }, t._f || (t._f = o), n && (n.n = o), t[m]++, "F" !== i && (t._i[i] = o)),
        t
      },
      getEntry: g,
      setStrong: function(t, e, r) {
        c(t, e, function(t, e) {
          this._t = t,
          this._k = e,
          this._l = void 0
        }, function() {
          for (var t = this, e = t._k, r = t._l; r && r.r;)
            r = r.p;
          return t._t && (t._l = r = r
            ? r.n
            : t._t._f)
            ? "keys" == e
              ? l(0, r.k)
              : "values" == e
                ? l(0, r.v)
                : l(0, [r.k, r.v])
            : (t._t = void 0, l(1))
        }, r
          ? "entries"
          : "values", !r, !0),
        p(e)
      }
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(4),
      i = r(8),
      o = r(18),
      s = r(210),
      a = r(22),
      h = r(206),
      u = r(205),
      c = r(13),
      l = r(7),
      p = r(165),
      f = r(24),
      d = r(88);
    t.exports = function(t, e, r, m, g, y) {
      var v = n[t],
        x = v,
        b = g
          ? "set"
          : "add",
        _ = x && x.prototype,
        w = {},
        S = function(t) {
          var e = _[t];
          o(_, t, "delete" == t
            ? function(t) {
              return !(y && !c(t)) && e.call(this, 0 === t
                ? 0
                : t)
            }
            : "has" == t
              ? function(t) {
                return !(y && !c(t)) && e.call(this, 0 === t
                  ? 0
                  : t)
              }
              : "get" == t
                ? function(t) {
                  return y && !c(t)
                    ? void 0
                    : e.call(this, 0 === t
                      ? 0
                      : t)
                }
                : "add" == t
                  ? function(t) {
                    return e.call(this, 0 === t
                      ? 0
                      : t),
                    this
                  }
                  : function(t, r) {
                    return e.call(this, 0 === t
                      ? 0
                      : t, r),
                    this
                  })
        };
      if ("function" == typeof x && (y || _.forEach && !l(function() {
        (new x).entries().next()
      }))) {
        var M = new x,
          T = M[b](y
            ? {}
            : -0, 1) != M,
          R = l(function() {
            M.has(1)
          }),
          E = p(function(t) {
            new x(t)
          }),
          C = !y && l(function() {
            for (var t = new x, e = 5; e--;)
              t[b](e, e);
            return !t.has(-0)
          });
        E || (x = e(function(e, r) {
          u(e, x, t);
          var n = d(new v, e, x);
          return void 0 != r && h(r, g, n[b], n),
          n
        }), x.prototype = _, _.constructor = x),
        (R || C) && (S("delete"), S("has"), g && S("get")),
        (C || T) && S(b),
        y && _.clear && delete _.clear
      } else
        x = m.getConstructor(e, t, g, b),
        s(x.prototype, r),
        a.NEED = !0;
      return f(x, t),
      w[t] = x,
      i(i.G + i.W + i.F * (x != v), w),
      y || m.setStrong(x, t, g),
      x
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(212);
    t.exports = r(213)("Set", function(t) {
      return function() {
        return t(this, arguments.length > 0
          ? arguments[0]
          : void 0)
      }
    }, {
      add: function(t) {
        return n.def(this, t = 0 === t
          ? 0
          : t, t)
      }
    },
    n)
  },
  function(t, e, r) {
    "use strict";
    var n,
      i = r(172)(0),
      o = r(18),
      s = r(22),
      a = r(69),
      h = r(216),
      u = r(13),
      c = s.getWeak,
      l = Object.isExtensible,
      p = h.ufstore,
      f = {},
      d = function(t) {
        return function() {
          return t(this, arguments.length > 0
            ? arguments[0]
            : void 0)
        }
      },
      m = {
        get: function(t) {
          if (u(t)) {
            var e = c(t);
            return e === !0
              ? p(this).get(t)
              : e
                ? e[this._i]
                : void 0
          }
        },
        set: function(t, e) {
          return h.def(this, t, e)
        }
      },
      g = t.exports = r(213)("WeakMap", d, m, h, !0, !0);
    7 != (new g).set((Object.freeze || Object)(f), 7).get(f) && (n = h.getConstructor(d), a(n.prototype, m), s.NEED = !0, i([
      "delete", "has", "get", "set"
    ], function(t) {
      var e = g.prototype,
        r = e[t];
      o(e, t, function(e, i) {
        if (u(e) && !l(e)) {
          this._f || (this._f = new n);
          var o = this._f[t](e, i);
          return "set" == t
            ? this
            : o
        }
        return r.call(this, e, i)
      })
    }))
  },
  function(t, e, r) {
    "use strict";
    var n = r(210),
      i = r(22).getWeak,
      o = r(12),
      s = r(13),
      a = r(205),
      h = r(206),
      u = r(172),
      c = r(5),
      l = u(5),
      p = u(6),
      f = 0,
      d = function(t) {
        return t._l || (t._l = new m)
      },
      m = function() {
        this.a = []
      },
      g = function(t, e) {
        return l(t.a, function(t) {
          return t[0] === e
        })
      };
    m.prototype = {
      get: function(t) {
        var e = g(this, t);
        if (e)
          return e[1]
      },
      has: function(t) {
        return !!g(this, t)
      },
      set: function(t, e) {
        var r = g(this, t);
        r
          ? r[1] = e
          : this.a.push([t, e])
      },
      "delete": function(t) {
        var e = p(this.a, function(e) {
          return e[0] === t
        });
        return ~ e && this.a.splice(e, 1),
        ! !~ e
      }
    },
    t.exports = {
      getConstructor: function(t, e, r, o) {
        var u = t(function(t, n) {
          a(t, u, e, "_i"),
          t._i = f++,
          t._l = void 0,
          void 0 != n && h(n, r, t[o], t)
        });
        return n(u.prototype, {
          "delete": function(t) {
            if (!s(t))
              return !1;
            var e = i(t);
            return e === !0
              ? d(this)["delete"](t)
              : e && c(e, this._i) && delete e[this._i]
          },
          has: function(t) {
            if (!s(t))
              return !1;
            var e = i(t);
            return e === !0
              ? d(this).has(t)
              : e && c(e, this._i)
          }
        }),
        u
      },
      def: function(t, e, r) {
        var n = i(o(e), !0);
        return n === !0
          ? d(t).set(e, r)
          : n[t._i] = r,
        t
      },
      ufstore: d
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(216);
    r(213)("WeakSet", function(t) {
      return function() {
        return t(this, arguments.length > 0
          ? arguments[0]
          : void 0)
      }
    }, {
      add: function(t) {
        return n.def(this, t, !0)
      }
    },
    n,
    !1,
    !0)
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(219),
      o = r(220),
      s = r(12),
      a = r(39),
      h = r(37),
      u = r(13),
      c = r(4).ArrayBuffer,
      l = r(207),
      p = o.ArrayBuffer,
      f = o.DataView,
      d = i.ABV && c.isView,
      m = p.prototype.slice,
      g = i.VIEW,
      y = "ArrayBuffer";
    n(n.G + n.W + n.F * (c !== p), {ArrayBuffer: p}),
    n(n.S + n.F * !i.CONSTR, y, {
      isView: function(t) {
        return d && d(t) || u(t) && g in t
      }
    }),
    n(n.P + n.U + n.F * r(7)(function() {
      return !new p(2).slice(1, void 0).byteLength
    }), y, {
      slice: function(t, e) {
        if (void 0 !== m && void 0 === e)
          return m.call(s(this), t);
        for (var r = s(this).byteLength, n = a(t, r), i = a(void 0 === e
          ? r
          : e, r), o = new(l(this, p))(h(i - n)),
        u = new f(this),
        c = new f(o),
        d = 0; n < i;)
          c.setUint8(d++, u.getUint8(n++));
        return o
      }
    }),
    r(192)(y)
  },
  function(t, e, r) {
    for (var n, i = r(4), o = r(10), s = r(19), a = s("typed_array"), h = s("view"), u = !(!i.ArrayBuffer || !i.DataView), c = u, l = 0, p = 9, f = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < p;)
      (n = i[f[l++]])
        ? (o(n.prototype, a, !0), o(n.prototype, h, !0))
        : c = !1;
    t.exports = {
      ABV: u,
      CONSTR: c,
      TYPED: a,
      VIEW: h
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(4),
      i = r(6),
      o = r(28),
      s = r(219),
      a = r(10),
      h = r(210),
      u = r(7),
      c = r(205),
      l = r(38),
      p = r(37),
      f = r(50).f,
      d = r(11).f,
      m = r(188),
      g = r(24),
      y = "ArrayBuffer",
      v = "DataView",
      x = "prototype",
      b = "Wrong length!",
      _ = "Wrong index!",
      w = n[y],
      S = n[v],
      M = n.Math,
      T = n.RangeError,
      R = n.Infinity,
      E = w,
      C = M.abs,
      A = M.pow,
      P = M.floor,
      I = M.log,
      O = M.LN2,
      L = "buffer",
      N = "byteLength",
      D = "byteOffset",
      F = i
        ? "_b"
        : L,
      k = i
        ? "_l"
        : N,
      U = i
        ? "_o"
        : D,
      B = function(t, e, r) {
        var n,
          i,
          o,
          s = Array(r),
          a = 8 * r - e - 1,
          h = (1 << a) - 1,
          u = h >> 1,
          c = 23 === e
            ? A(2, -24) - A(2, -77)
            : 0,
          l = 0,
          p = t < 0 || 0 === t && 1 / t < 0
            ? 1
            : 0;
        for (t = C(t), t != t || t === R
          ? (i = t != t
            ? 1
            : 0, n = h)
          : (n = P(I(t) / O), t * (o = A(2, -n)) < 1 && (n--, o *= 2), t += n + u >= 1
            ? c / o
            : c * A(2, 1 - u), t * o >= 2 && (n++, o /= 2), n + u >= h
            ? (i = 0, n = h)
            : n + u >= 1
              ? (i = (t * o - 1) * A(2, e), n += u)
              : (i = t * A(2, u - 1) * A(2, e), n = 0)); e >= 8; s[l++] = 255 & i, i /= 256, e -= 8)
        ;
        for (n = n << e | i, a += e; a > 0; s[l++] = 255 & n, n /= 256, a -= 8)
        ;
        return s[--l] |= 128 * p,
        s
      },
      G = function(t, e, r) {
        var n,
          i = 8 * r - e - 1,
          o = (1 << i) - 1,
          s = o >> 1,
          a = i - 7,
          h = r - 1,
          u = t[h--],
          c = 127 & u;
        for (u >>= 7; a > 0; c = 256 * c + t[h], h--, a -= 8)
        ;
        for (n = c & (1 << -a) - 1, c >>= -a, a += e; a > 0; n = 256 * n + t[h], h--, a -= 8)
        ;
        if (0 === c)
          c = 1 - s;
        else {
          if (c === o)
            return n
              ? NaN
              : u
                ? -R
                : R;
          n += A(2, e),
          c -= s
        }
        return (u
          ? -1
          : 1) * n * A(2, c - e)
      },
      H = function(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
      },
      j = function(t) {
        return [255 & t]
      },
      V = function(t) {
        return [
          255 & t,
          t >> 8 & 255
        ]
      },
      W = function(t) {
        return [
          255 & t,
          t >> 8 & 255,
          t >> 16 & 255,
          t >> 24 & 255
        ]
      },
      X = function(t) {
        return B(t, 52, 8)
      },
      q = function(t) {
        return B(t, 23, 4)
      },
      z = function(t, e, r) {
        d(t[x], e, {
          get: function() {
            return this[r]
          }
        })
      },
      Y = function(t, e, r, n) {
        var i =+ r,
          o = l(i);
        if (i != o || o < 0 || o + e > t[k])
          throw T(_);
        var s = t[F]._b,
          a = o + t[U],
          h = s.slice(a, a + e);
        return n
          ? h
          : h.reverse()
      },
      Z = function(t, e, r, n, i, o) {
        var s =+ r,
          a = l(s);
        if (s != a || a < 0 || a + e > t[k])
          throw T(_);
        for (var h = t[F]._b, u = a + t[U], c = n(+ i), p = 0; p < e; p++)
          h[u + p] = c[o
              ? p
              : e - p - 1]
          },
      K = function(t, e) {
        c(t, w, y);
        var r =+ e,
          n = p(r);
        if (r != n)
          throw T(b);
        return n
      };
    if (s.ABV) {
      if (!u(function() {
        new w
      }) || !u(function() {
        new w(.5)
      })) {
        w = function(t) {
          return new E(K(this, t))
        };
        for (var J, Q = w[x] = E[x], $ = f(E), tt = 0; $.length > tt;)
          (J = $[tt++]) in w || a(w, J, E[J]);
        o || (Q.constructor = w)
      }
      var et = new S(new w(2)),
        rt = S[x].setInt8;
      et.setInt8(0, 2147483648),
      et.setInt8(1, 2147483649),
      !et.getInt8(0) && et.getInt8(1) || h(S[x], {
        setInt8: function(t, e) {
          rt.call(this, t, e << 24 >> 24)
        },
        setUint8: function(t, e) {
          rt.call(this, t, e << 24 >> 24)
        }
      }, !0)
    } else
      w = function(t) {
        var e = K(this, t);
        this._b = m.call(Array(e), 0),
        this[k] = e
      }
    ,
    S = function(t, e, r) {
      c(this, S, v),
      c(t, w, v);
      var n = t[k],
        i = l(e);
      if (i < 0 || i > n)
        throw T("Wrong offset!");
      if (r = void 0 === r
        ? n - i
        : p(r), i + r > n)
        throw T(b);
      this[F] = t,
      this[U] = i,
      this[k] = r
    },
    i && (z(w, N, "_l"), z(S, L, "_b"), z(S, N, "_l"), z(S, D, "_o")),
    h(S[x], {
      getInt8: function(t) {
        return Y(this, 1, t)[0] << 24 >> 24
      },
      getUint8: function(t) {
        return Y(this, 1, t)[0]
      },
      getInt16: function(t) {
        var e = Y(this, 2, t, arguments[1]);
        return (e[1] << 8 | e[0]) << 16 >> 16
      },
      getUint16: function(t) {
        var e = Y(this, 2, t, arguments[1]);
        return e[1] << 8 | e[0]
      },
      getInt32: function(t) {
        return H(Y(this, 4, t, arguments[1]))
      },
      getUint32: function(t) {
        return H(Y(this, 4, t, arguments[1])) >>> 0
      },
      getFloat32: function(t) {
        return G(Y(this, 4, t, arguments[1]), 23, 4)
      },
      getFloat64: function(t) {
        return G(Y(this, 8, t, arguments[1]), 52, 8)
      },
      setInt8: function(t, e) {
        Z(this, 1, t, j, e)
      },
      setUint8: function(t, e) {
        Z(this, 1, t, j, e)
      },
      setInt16: function(t, e) {
        Z(this, 2, t, V, e, arguments[2])
      },
      setUint16: function(t, e) {
        Z(this, 2, t, V, e, arguments[2])
      },
      setInt32: function(t, e) {
        Z(this, 4, t, W, e, arguments[2])
      },
      setUint32: function(t, e) {
        Z(this, 4, t, W, e, arguments[2])
      },
      setFloat32: function(t, e) {
        Z(this, 4, t, q, e, arguments[2])
      },
      setFloat64: function(t, e) {
        Z(this, 8, t, X, e, arguments[2])
      }
    });
    g(w, y),
    g(S, v),
    a(S[x], s.VIEW, !0),
    e[y] = w,
    e[v] = S
  },
  function(t, e, r) {
    var n = r(8);
    n(n.G + n.W + n.F * !r(219).ABV, {DataView: r(220).DataView})
  },
  function(t, e, r) {
    r(223)("Int8", 1, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    if (r(6)) {
      var n = r(28),
        i = r(4),
        o = r(7),
        s = r(8),
        a = r(219),
        h = r(220),
        u = r(20),
        c = r(205),
        l = r(17),
        p = r(10),
        f = r(210),
        d = r(38),
        m = r(37),
        g = r(39),
        y = r(16),
        v = r(5),
        x = r(71),
        b = r(75),
        _ = r(13),
        w = r(58),
        S = r(162),
        M = r(46),
        T = r(59),
        R = r(50).f,
        E = r(164),
        C = r(19),
        A = r(25),
        P = r(172),
        I = r(36),
        O = r(207),
        L = r(193),
        N = r(129),
        D = r(165),
        F = r(192),
        k = r(188),
        U = r(185),
        B = r(11),
        G = r(51),
        H = B.f,
        j = G.f,
        V = i.RangeError,
        W = i.TypeError,
        X = i.Uint8Array,
        q = "ArrayBuffer",
        z = "Shared" + q,
        Y = "BYTES_PER_ELEMENT",
        Z = "prototype",
        K = Array[Z],
        J = h.ArrayBuffer,
        Q = h.DataView,
        $ = P(0),
        tt = P(2),
        et = P(3),
        rt = P(4),
        nt = P(5),
        it = P(6),
        ot = I(!0),
        st = I(!1),
        at = L.values,
        ht = L.keys,
        ut = L.entries,
        ct = K.lastIndexOf,
        lt = K.reduce,
        pt = K.reduceRight,
        ft = K.join,
        dt = K.sort,
        mt = K.slice,
        gt = K.toString,
        yt = K.toLocaleString,
        vt = A("iterator"),
        xt = A("toStringTag"),
        bt = C("typed_constructor"),
        _t = C("def_constructor"),
        wt = a.CONSTR,
        St = a.TYPED,
        Mt = a.VIEW,
        Tt = "Wrong length!",
        Rt = P(1, function(t, e) {
          return Ot(O(t, t[_t]), e)
        }),
        Et = o(function() {
          return 1 === new X(new Uint16Array([1]).buffer)[0]
        }),
        Ct = !!X && !!X[Z].set && o(function() {
          new X(1).set({})
        }),
        At = function(t, e) {
          if (void 0 === t)
            throw W(Tt);
          var r =+ t,
            n = m(t);
          if (e && !x(r, n))
            throw V(Tt);
          return n
        },
        Pt = function(t, e) {
          var r = d(t);
          if (r < 0 || r % e)
            throw V("Wrong offset!");
          return r
        },
        It = function(t) {
          if (_(t) && St in t)
            return t;
          throw W(t + " is not a typed array!")
        },
        Ot = function(t, e) {
          if (!(_(t) && bt in t))
            throw W("It is not a typed array constructor!");
          return new t(e)
        },
        Lt = function(t, e) {
          return Nt(O(t, t[_t]), e)
        },
        Nt = function(t, e) {
          for (var r = 0, n = e.length, i = Ot(t, n); n > r;)
            i[r] = e[r++];
          return i
        },
        Dt = function(t, e, r) {
          H(t, e, {
            get: function() {
              return this._d[r]
            }
          })
        },
        Ft = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a = w(t),
            h = arguments.length,
            c = h > 1
              ? arguments[1]
              : void 0,
            l = void 0 !== c,
            p = E(a);
          if (void 0 != p && !S(p)) {
            for (s = p.call(a), n = [], e = 0; !(o = s.next()).done; e++)
              n.push(o.value);
            a = n
          }
          for (l && h > 2 && (c = u(c, arguments[2], 2)), e = 0, r = m(a.length), i = Ot(this, r); r > e; e++)
            i[e] = l
              ? c(a[e], e)
              : a[e];
          return i
        },
        kt = function() {
          for (var t = 0, e = arguments.length, r = Ot(this, e); e > t;)
            r[t] = arguments[t++];
          return r
        },
        Ut = !!X && o(function() {
          yt.call(new X(1))
        }),
        Bt = function() {
          return yt.apply(Ut
            ? mt.call(It(this))
            : It(this), arguments)
        },
        Gt = {
          copyWithin: function(t, e) {
            return U.call(It(this), t, e, arguments.length > 2
              ? arguments[2]
              : void 0)
          },
          every: function(t) {
            return rt(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          fill: function(t) {
            return k.apply(It(this), arguments)
          },
          filter: function(t) {
            return Lt(this, tt(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0))
          },
          find: function(t) {
            return nt(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          findIndex: function(t) {
            return it(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          forEach: function(t) {
            $(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          indexOf: function(t) {
            return st(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          includes: function(t) {
            return ot(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          join: function(t) {
            return ft.apply(It(this), arguments)
          },
          lastIndexOf: function(t) {
            return ct.apply(It(this), arguments)
          },
          map: function(t) {
            return Rt(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          reduce: function(t) {
            return lt.apply(It(this), arguments)
          },
          reduceRight: function(t) {
            return pt.apply(It(this), arguments)
          },
          reverse: function() {
            for (var t, e = this, r = It(e).length, n = Math.floor(r / 2), i = 0; i < n;)
              t = e[i],
              e[i++] = e[--r],
              e[r] = t;
            return e
          },
          some: function(t) {
            return et(It(this), t, arguments.length > 1
              ? arguments[1]
              : void 0)
          },
          sort: function(t) {
            return dt.call(It(this), t)
          },
          subarray: function(t, e) {
            var r = It(this),
              n = r.length,
              i = g(t, n);
            return new(O(r, r[_t]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, m((void 0 === e
              ? n
              : g(e, n)) - i))
          }
        },
        Ht = function(t, e) {
          return Lt(this, mt.call(It(this), t, e))
        },
        jt = function(t) {
          It(this);
          var e = Pt(arguments[1], 1),
            r = this.length,
            n = w(t),
            i = m(n.length),
            o = 0;
          if (i + e > r)
            throw V(Tt);
          for (; o < i;)
            this[e + o] = n[o++]
        },
        Vt = {
          entries: function() {
            return ut.call(It(this))
          },
          keys: function() {
            return ht.call(It(this))
          },
          values: function() {
            return at.call(It(this))
          }
        },
        Wt = function(t, e) {
          return _(t) && t[St] && "symbol" != typeof e && e in t && String(+ e) == String(e)
        },
        Xt = function(t, e) {
          return Wt(t, e = y(e, !0))
            ? l(2, t[e])
            : j(t, e)
        },
        qt = function(t, e, r) {
          return !(Wt(t, e = y(e, !0)) && _(r) && v(r, "value")) || v(r, "get") || v(r, "set") || r.configurable || v(r, "writable") && !r.writable || v(r, "enumerable") && !r.enumerable
            ? H(t, e, r)
            : (t[e] = r.value, t)
        };
      wt || (G.f = Xt, B.f = qt),
      s(s.S + s.F * !wt, "Object", {
        getOwnPropertyDescriptor: Xt,
        defineProperty: qt
      }),
      o(function() {
        gt.call({})
      }) && (gt = yt = function() {
        return ft.call(this)
      });
      var zt = f({}, Gt);
      f(zt, Vt),
      p(zt, vt, Vt.values),
      f(zt, {
        slice: Ht,
        set: jt,
        constructor: function() {},
        toString: gt,
        toLocaleString: Bt
      }),
      Dt(zt, "buffer", "b"),
      Dt(zt, "byteOffset", "o"),
      Dt(zt, "byteLength", "l"),
      Dt(zt, "length", "e"),
      H(zt, xt, {
        get: function() {
          return this[St]
        }
      }),
      t.exports = function(t, e, r, h) {
        h = !!h;
        var u = t + (h
            ? "Clamped"
            : "") + "Array",
          l = "Uint8Array" != u,
          f = "get" + t,
          d = "set" + t,
          g = i[u],
          y = g || {},
          v = g && T(g),
          x = !g || !a.ABV,
          w = {},
          S = g && g[Z],
          E = function(t, r) {
            var n = t._d;
            return n.v[f](r * e + n.o, Et)
          },
          C = function(t, r, n) {
            var i = t._d;
            h && (n = (n = Math.round(n)) < 0
              ? 0
              : n > 255
                ? 255
                : 255 & n),
            i.v[d](r * e + i.o, n, Et)
          },
          A = function(t, e) {
            H(t, e, {
              get: function() {
                return E(this, e)
              },
              set: function(t) {
                return C(this, e, t)
              },
              enumerable: !0
            })
          };
        x
          ? (g = r(function(t, r, n, i) {
            c(t, g, u, "_d");
            var o,
              s,
              a,
              h,
              l = 0,
              f = 0;
            if (_(r)) {
              if (!(r instanceof J || (h = b(r)) == q || h == z))
                return St in r
                  ? Nt(g, r)
                  : Ft.call(g, r);
              o = r,
              f = Pt(n, e);
              var d = r.byteLength;
              if (void 0 === i) {
                if (d % e)
                  throw V(Tt);
                if (s = d - f, s < 0)
                  throw V(Tt)
              } else if (s = m(i) * e, s + f > d)
                throw V(Tt);
              a = s / e
            } else
              a = At(r, !0),
              s = a * e,
              o = new J(s);
            for (p(t, "_d", {
              b: o,
              o: f,
              l: s,
              e: a,
              v: new Q(o)
            }); l < a;)
              A(t, l++)
          }), S = g[Z] = M(zt), p(S, "constructor", g))
          : D(function(t) {
            new g(null),
            new g(t)
          }, !0) || (g = r(function(t, r, n, i) {
            c(t, g, u);
            var o;
            return _(r)
              ? r instanceof J || (o = b(r)) == q || o == z
                ? void 0 !== i
                  ? new y(r, Pt(n, e), i)
                  : void 0 !== n
                    ? new y(r, Pt(n, e))
                    : new y(r)
                : St in r
                  ? Nt(g, r)
                  : Ft.call(g, r)
              : new y(At(r, l))
          }), $(v !== Function.prototype
            ? R(y).concat(R(v))
            : R(y), function(t) {
            t in g || p(g, t, y[t])
          }), g[Z] = S, n || (S.constructor = g));
        var P = S[vt],
          I = !!P && ("values" == P.name || void 0 == P.name),
          O = Vt.values;
        p(g, bt, !0),
        p(S, St, u),
        p(S, Mt, !0),
        p(S, _t, g),
        (h
          ? new g(1)[xt] == u
          : xt in S) || H(S, xt, {
          get: function() {
            return u
          }
        }),
        w[u] = g,
        s(s.G + s.W + s.F * (g != y), w),
        s(s.S, u, {
          BYTES_PER_ELEMENT: e,
          from: Ft,
          of: kt
        }),
        Y in S || p(S, Y, e),
        s(s.P, u, Gt),
        F(u),
        s(s.P + s.F * Ct, u, {set: jt}),
        s(s.P + s.F * !I, u, Vt),
        s(s.P + s.F * (S.toString != gt), u, {toString: gt}),
        s(s.P + s.F * o(function() {
          new g(1).slice()
        }), u, {slice: Ht}),
        s(s.P + s.F * (o(function() {
          return [1, 2].toLocaleString() != new g([1, 2]).toLocaleString()
        }) || !o(function() {
          S.toLocaleString.call([1, 2])
        })), u, {toLocaleString: Bt}),
        N[u] = I
          ? P
          : O,
        n || I || p(S, vt, O)
      }
    } else
      t.exports = function() {}
    },
  function(t, e, r) {
    r(223)("Uint8", 1, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Uint8", 1, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    },
    !0)
  },
  function(t, e, r) {
    r(223)("Int16", 2, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Uint16", 2, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Int32", 4, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Uint32", 4, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Float32", 4, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    r(223)("Float64", 8, function(t) {
      return function(e, r, n) {
        return t(this, e, r, n)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(21),
      o = r(12),
      s = (r(4).Reflect || {}).apply,
      a = Function.apply;
    n(n.S + n.F * !r(7)(function() {
      s(function() {})
    }), "Reflect", {
      apply: function(t, e, r) {
        var n = i(t),
          h = o(r);
        return s
          ? s(n, e, h)
          : a.call(n, e, h)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(46),
      o = r(21),
      s = r(12),
      a = r(13),
      h = r(7),
      u = r(77),
      c = (r(4).Reflect || {}).construct,
      l = h(function() {
        function t() {}
        return !(c(function() {}, [], t) instanceof t)
      }),
      p = !h(function() {
        c(function() {})
      });
    n(n.S + n.F * (l || p), "Reflect", {
      construct: function(t, e) {
        o(t),
        s(e);
        var r = arguments.length < 3
          ? t
          : o(arguments[2]);
        if (p && !l)
          return c(t, e, r);
        if (t == r) {
          switch (e.length) {
            case 0:
              return new t;
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3])
          }
          var n = [null];
          return n.push.apply(n, e),
          new(u.apply(t, n))
        }
        var h = r.prototype,
          f = i(a(h)
            ? h
            : Object.prototype),
          d = Function.apply.call(t, f, e);
        return a(d)
          ? d
          : f
      }
    })
  },
  function(t, e, r) {
    var n = r(11),
      i = r(8),
      o = r(12),
      s = r(16);
    i(i.S + i.F * r(7)(function() {
      Reflect.defineProperty(n.f({}, 1, {value: 1}), 1, {value: 2})
    }), "Reflect", {
      defineProperty: function(t, e, r) {
        o(t),
        e = s(e, !0),
        o(r);
        try {
          return n.f(t, e, r),
          !0
        } catch (i) {
          return !1
        }
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(51).f,
      o = r(12);
    n(n.S, "Reflect", {
      deleteProperty: function(t, e) {
        var r = i(o(t), e);
        return !(r && !r.configurable) && delete t[e]
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(12),
      o = function(t) {
        this._t = i(t),
        this._i = 0;
        var e,
          r = this._k = [];
        for (e in t)
          r.push(e)
      };
    r(130)(o, "Object", function() {
      var t,
        e = this,
        r = e._k;
      do
        if (e._i >= r.length)
          return {
            value: void 0,
            done: !0
          };
    while (!((t = r[e._i++]) in e._t))
      ;
      return {
        value: t,
        done: !1
      }
    }),
    n(n.S, "Reflect", {
      enumerate: function(t) {
        return new o(t)
      }
    })
  },
  function(t, e, r) {
    function n(t, e) {
      var r,
        a,
        c = arguments.length < 3
          ? t
          : arguments[2];
      return u(t) === c
        ? t[e]
        : (r = i.f(t, e))
          ? s(r, "value")
            ? r.value
            : void 0 !== r.get
              ? r.get.call(c)
              : void 0
          : h(a = o(t))
            ? n(a, e, c)
            : void 0
    }
    var i = r(51),
      o = r(59),
      s = r(5),
      a = r(8),
      h = r(13),
      u = r(12);
    a(a.S, "Reflect", {get: n})
  },
  function(t, e, r) {
    var n = r(51),
      i = r(8),
      o = r(12);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function(t, e) {
        return n.f(o(t), e)
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(59),
      o = r(12);
    n(n.S, "Reflect", {
      getPrototypeOf: function(t) {
        return i(o(t))
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Reflect", {
      has: function(t, e) {
        return e in t
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(12),
      o = Object.isExtensible;
    n(n.S, "Reflect", {
      isExtensible: function(t) {
        return i(t),
        !o || o(t)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Reflect", {ownKeys: r(243)})
  },
  function(t, e, r) {
    var n = r(50),
      i = r(43),
      o = r(12),
      s = r(4).Reflect;
    t.exports = s && s.ownKeys || function(t) {
      var e = n.f(o(t)),
        r = i.f;
      return r
        ? e.concat(r(t))
        : e
    }
  },
  function(t, e, r) {
    var n = r(8),
      i = r(12),
      o = Object.preventExtensions;
    n(n.S, "Reflect", {
      preventExtensions: function(t) {
        i(t);
        try {
          return o && o(t),
          !0
        } catch (e) {
          return !1
        }
      }
    })
  },
  function(t, e, r) {
    function n(t, e, r) {
      var h,
        p,
        f = arguments.length < 4
          ? t
          : arguments[3],
        d = o.f(c(t), e);
      if (!d) {
        if (l(p = s(t)))
          return n(p, e, r, f);
        d = u(0)
      }
      return a(d, "value")
        ? !(d.writable === !1 || !l(f)) && (h = o.f(f, e) || u(0), h.value = r, i.f(f, e, h), !0)
        : void 0 !== d.set && (d.set.call(f, r), !0)
    }
    var i = r(11),
      o = r(51),
      s = r(59),
      a = r(5),
      h = r(8),
      u = r(17),
      c = r(12),
      l = r(13);
    h(h.S, "Reflect", {set: n})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(73);
    i && n(n.S, "Reflect", {
      setPrototypeOf: function(t, e) {
        i.check(t, e);
        try {
          return i.set(t, e),
          !0
        } catch (r) {
          return !1
        }
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(36)(!0);
    n(n.P, "Array", {
      includes: function(t) {
        return i(this, t, arguments.length > 1
          ? arguments[1]
          : void 0)
      }
    }),
    r(186)("includes")
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(127)(!0);
    n(n.P, "String", {
      at: function(t) {
        return i(this, t)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(250);
    n(n.P, "String", {
      padStart: function(t) {
        return i(this, t, arguments.length > 1
          ? arguments[1]
          : void 0, !0)
      }
    })
  },
  function(t, e, r) {
    var n = r(37),
      i = r(91),
      o = r(35);
    t.exports = function(t, e, r, s) {
      var a = String(o(t)),
        h = a.length,
        u = void 0 === r
          ? " "
          : String(r),
        c = n(e);
      if (c <= h || "" == u)
        return a;
      var l = c - h,
        p = i.call(u, Math.ceil(l / u.length));
      return p.length > l && (p = p.slice(0, l)),
      s
        ? p + a
        : a + p
    }
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(250);
    n(n.P, "String", {
      padEnd: function(t) {
        return i(this, t, arguments.length > 1
          ? arguments[1]
          : void 0, !1)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    r(83)("trimLeft", function(t) {
      return function() {
        return t(this, 1)
      }
    },
    "trimStart")
  },
  function(t, e, r) {
    "use strict";
    r(83)("trimRight", function(t) {
      return function() {
        return t(this, 2)
      }
    },
    "trimEnd")
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(35),
      o = r(37),
      s = r(134),
      a = r(196),
      h = RegExp.prototype,
      u = function(t, e) {
        this._r = t,
        this._s = e
      };
    r(130)(u, "RegExp String", function() {
      var t = this._r.exec(this._s);
      return {
        value: t,
        done: null === t
      }
    }),
    n(n.P, "String", {
      matchAll: function(t) {
        if (i(this), !s(t))
          throw TypeError(t + " is not a regexp!");
        var e = String(this),
          r = "flags" in h
            ? String(t.flags)
            : a.call(t),
          n = new RegExp(t.source, ~ r.indexOf("g")
            ? r
            : "g" + r);
        return n.lastIndex = o(t.lastIndex),
        new u(n, e)
      }
    })
  },
  function(t, e, r) {
    r(27)("asyncIterator")
  },
  function(t, e, r) {
    r(27)("observable")
  },
  function(t, e, r) {
    var n = r(8),
      i = r(243),
      o = r(32),
      s = r(51),
      a = r(163);
    n(n.S, "Object", {
      getOwnPropertyDescriptors: function(t) {
        for (var e, r = o(t), n = s.f, h = i(r), u = {}, c = 0; h.length > c;)
          a(u, e = h[c++], n(r, e));
        return u
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(259)(!1);
    n(n.S, "Object", {
      values: function(t) {
        return i(t)
      }
    })
  },
  function(t, e, r) {
    var n = r(30),
      i = r(32),
      o = r(44).f;
    t.exports = function(t) {
      return function(e) {
        for (var r, s = i(e), a = n(s), h = a.length, u = 0, c = []; h > u;)
          o.call(s, r = a[u++]) && c.push(t
            ? [r, s[r]]
            : s[r]);
        return c
      }
    }
  },
  function(t, e, r) {
    var n = r(8),
      i = r(259)(!0);
    n(n.S, "Object", {
      entries: function(t) {
        return i(t)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(58),
      o = r(21),
      s = r(11);
    r(6) && n(n.P + r(262), "Object", {
      __defineGetter__: function(t, e) {
        s.f(i(this), t, {
          get: o(e),
          enumerable: !0,
          configurable: !0
        })
      }
    })
  },
  function(t, e, r) {
    t.exports = r(28) || !r(7)(function() {
      var t = Math.random();
      __defineSetter__.call(null, t, function() {}),
      delete r(4)[t]
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(58),
      o = r(21),
      s = r(11);
    r(6) && n(n.P + r(262), "Object", {
      __defineSetter__: function(t, e) {
        s.f(i(this), t, {
          set: o(e),
          enumerable: !0,
          configurable: !0
        })
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(58),
      o = r(16),
      s = r(59),
      a = r(51).f;
    r(6) && n(n.P + r(262), "Object", {
      __lookupGetter__: function(t) {
        var e,
          r = i(this),
          n = o(t, !0);
        do
          if (e = a(r, n))
            return e.get;
      while (r = s(r))
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(58),
      o = r(16),
      s = r(59),
      a = r(51).f;
    r(6) && n(n.P + r(262), "Object", {
      __lookupSetter__: function(t) {
        var e,
          r = i(this),
          n = o(t, !0);
        do
          if (e = a(r, n))
            return e.set;
      while (r = s(r))
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P + n.R, "Map", {
      toJSON: r(267)("Map")
    })
  },
  function(t, e, r) {
    var n = r(75),
      i = r(268);
    t.exports = function(t) {
      return function() {
        if (n(this) != t)
          throw TypeError(t + "#toJSON isn't generic");
        return i(this)
      }
    }
  },
  function(t, e, r) {
    var n = r(206);
    t.exports = function(t, e) {
      var r = [];
      return n(t, !1, r.push, r, e),
      r
    }
  },
  function(t, e, r) {
    var n = r(8);
    n(n.P + n.R, "Set", {
      toJSON: r(267)("Set")
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "System", {global: r(4)})
  },
  function(t, e, r) {
    var n = r(8),
      i = r(34);
    n(n.S, "Error", {
      isError: function(t) {
        return "Error" === i(t)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      iaddh: function(t, e, r, n) {
        var i = t >>> 0,
          o = e >>> 0,
          s = r >>> 0;
        return o + (n >>> 0) + ((i & s | (i | s) &~ (i + s >>> 0)) >>> 31) | 0
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      isubh: function(t, e, r, n) {
        var i = t >>> 0,
          o = e >>> 0,
          s = r >>> 0;
        return o - (n >>> 0) - ((~ i & s |~ (i ^ s) & i - s >>> 0) >>> 31) | 0
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      imulh: function(t, e) {
        var r = 65535,
          n =+ t,
          i =+ e,
          o = n & r,
          s = i & r,
          a = n >> 16,
          h = i >> 16,
          u = (a * s >>> 0) + (o * s >>> 16);
        return a * h + (u >> 16) + ((o * h >>> 0) + (u & r) >> 16)
      }
    })
  },
  function(t, e, r) {
    var n = r(8);
    n(n.S, "Math", {
      umulh: function(t, e) {
        var r = 65535,
          n =+ t,
          i =+ e,
          o = n & r,
          s = i & r,
          a = n >>> 16,
          h = i >>> 16,
          u = (a * s >>> 0) + (o * s >>> 16);
        return a * h + (u >>> 16) + ((o * h >>> 0) + (u & r) >>> 16)
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = n.key,
      s = n.set;
    n.exp({
      defineMetadata: function(t, e, r, n) {
        s(t, e, i(r), o(n))
      }
    })
  },
  function(t, e, r) {
    var n = r(211),
      i = r(8),
      o = r(23)("metadata"),
      s = o.store || (o.store = new(r(215))),
      a = function(t, e, r) {
        var i = s.get(t);
        if (!i) {
          if (!r)
            return;
          s.set(t, i = new n)
        }
        var o = i.get(e);
        if (!o) {
          if (!r)
            return;
          i.set(e, o = new n)
        }
        return o
      },
      h = function(t, e, r) {
        var n = a(e, r, !1);
        return void 0 !== n && n.has(t)
      },
      u = function(t, e, r) {
        var n = a(e, r, !1);
        return void 0 === n
          ? void 0
          : n.get(t)
      },
      c = function(t, e, r, n) {
        a(r, n, !0).set(t, e)
      },
      l = function(t, e) {
        var r = a(t, e, !1),
          n = [];
        return r && r.forEach(function(t, e) {
          n.push(e)
        }),
        n
      },
      p = function(t) {
        return void 0 === t || "symbol" == typeof t
          ? t
          : String(t)
      },
      f = function(t) {
        i(i.S, "Reflect", t)
      };
    t.exports = {
      store: s,
      map: a,
      has: h,
      get: u,
      set: c,
      keys: l,
      key: p,
      exp: f
    }
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = n.key,
      s = n.map,
      a = n.store;
    n.exp({
      deleteMetadata: function(t, e) {
        var r = arguments.length < 3
            ? void 0
            : o(arguments[2]),
          n = s(i(e), r, !1);
        if (void 0 === n || !n["delete"](t))
          return !1;
        if (n.size)
          return !0;
        var h = a.get(e);
        return h["delete"](r),
        !!h.size || a["delete"](e)
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = r(59),
      s = n.has,
      a = n.get,
      h = n.key,
      u = function(t, e, r) {
        var n = s(t, e, r);
        if (n)
          return a(t, e, r);
        var i = o(e);
        return null !== i
          ? u(t, i, r)
          : void 0
      };
    n.exp({
      getMetadata: function(t, e) {
        return u(t, i(e), arguments.length < 3
          ? void 0
          : h(arguments[2]))
      }
    })
  },
  function(t, e, r) {
    var n = r(214),
      i = r(268),
      o = r(277),
      s = r(12),
      a = r(59),
      h = o.keys,
      u = o.key,
      c = function(t, e) {
        var r = h(t, e),
          o = a(t);
        if (null === o)
          return r;
        var s = c(o, e);
        return s.length
          ? r.length
            ? i(new n(r.concat(s)))
            : s
          : r
      };
    o.exp({
      getMetadataKeys: function(t) {
        return c(s(t), arguments.length < 2
          ? void 0
          : u(arguments[1]))
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = n.get,
      s = n.key;
    n.exp({
      getOwnMetadata: function(t, e) {
        return o(t, i(e), arguments.length < 3
          ? void 0
          : s(arguments[2]))
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = n.keys,
      s = n.key;
    n.exp({
      getOwnMetadataKeys: function(t) {
        return o(i(t), arguments.length < 2
          ? void 0
          : s(arguments[1]))
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = r(59),
      s = n.has,
      a = n.key,
      h = function(t, e, r) {
        var n = s(t, e, r);
        if (n)
          return !0;
        var i = o(e);
        return null !== i && h(t, i, r)
      };
    n.exp({
      hasMetadata: function(t, e) {
        return h(t, i(e), arguments.length < 3
          ? void 0
          : a(arguments[2]))
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = n.has,
      s = n.key;
    n.exp({
      hasOwnMetadata: function(t, e) {
        return o(t, i(e), arguments.length < 3
          ? void 0
          : s(arguments[2]))
      }
    })
  },
  function(t, e, r) {
    var n = r(277),
      i = r(12),
      o = r(21),
      s = n.key,
      a = n.set;
    n.exp({
      metadata: function(t, e) {
        return function(r, n) {
          a(t, e, (void 0 !== n
            ? i
            : o)(r), s(n))
        }
      }
    })
  },
  function(t, e, r) {
    var n = r(8),
      i = r(209)(),
      o = r(4).process,
      s = "process" == r(34)(o);
    n(n.G, {
      asap: function(t) {
        var e = s && o.domain;
        i(e
          ? e.bind(t)
          : t)
      }
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(8),
      i = r(4),
      o = r(9),
      s = r(209)(),
      a = r(25)("observable"),
      h = r(21),
      u = r(12),
      c = r(205),
      l = r(210),
      p = r(10),
      f = r(206),
      d = f.RETURN,
      m = function(t) {
        return null == t
          ? void 0
          : h(t)
      },
      g = function(t) {
        var e = t._c;
        e && (t._c = void 0, e())
      },
      y = function(t) {
        return void 0 === t._o
      },
      v = function(t) {
        y(t) || (t._o = void 0, g(t))
      },
      x = function(t, e) {
        u(t),
        this._c = void 0,
        this._o = t,
        t = new b(this);
        try {
          var r = e(t),
            n = r;
          null != r && ("function" == typeof r.unsubscribe
            ? r = function() {
              n.unsubscribe()
            }
            : h(r),
          this._c = r)
        } catch (i) {
          return void t.error(i)
        }
        y(this) && g(this)
      };
    x.prototype = l({}, {
      unsubscribe: function() {
        v(this)
      }
    });
    var b = function(t) {
      this._s = t
    };
    b.prototype = l({}, {
      next: function(t) {
        var e = this._s;
        if (!y(e)) {
          var r = e._o;
          try {
            var n = m(r.next);
            if (n)
              return n.call(r, t)
          } catch (i) {
            try {
              v(e)
            } finally {
              throw i
            }
          }
        }
      },
      error: function(t) {
        var e = this._s;
        if (y(e))
          throw t;
        var r = e._o;
        e._o = void 0;
        try {
          var n = m(r.error);
          if (!n)
            throw t;
          t = n.call(r, t)
        } catch (i) {
          try {
            g(e)
          } finally {
            throw i
          }
        }
        return g(e),
        t
      },
      complete: function(t) {
        var e = this._s;
        if (!y(e)) {
          var r = e._o;
          e._o = void 0;
          try {
            var n = m(r.complete);
            t = n
              ? n.call(r, t)
              : void 0
          } catch (i) {
            try {
              g(e)
            } finally {
              throw i
            }
          }
          return g(e),
          t
        }
      }
    });
    var _ = function(t) {
      c(this, _, "Observable", "_f")._f = h(t)
    };
    l(_.prototype, {
      subscribe: function(t) {
        return new x(t, this._f)
      },
      forEach: function(t) {
        var e = this;
        return new(o.Promise || i.Promise)(function(r, n) {
          h(t);
          var i = e.subscribe({
            next: function(e) {
              try {
                return t(e)
              } catch (r) {
                n(r),
                i.unsubscribe()
              }
            },
            error: n,
            complete: r
          })
        })
      }
    }),
    l(_, {
      from: function(t) {
        var e = "function" == typeof this
            ? this
            : _,
          r = m(u(t)[a]);
        if (r) {
          var n = u(r.call(t));
          return n.constructor === e
            ? n
            : new e(function(t) {
              return n.subscribe(t)
            })
        }
        return new e(function(e) {
          var r = !1;
          return s(function() {
            if (!r) {
              try {
                if (f(t, !1, function(t) {
                  if (e.next(t), r)
                    return d
                }) === d)
                  return
              } catch (n) {
                if (r)
                  throw n;
                return void e.error(n)
              }
              e.complete()
            }
          }),
          function() {
            r = !0
          }
        })
      },
      of: function() {
        for (var t = 0, e = arguments.length, r = Array(e); t < e;)
          r[t] = arguments[t++];
        return new("function" == typeof this
          ? this
          : _)(function(t) {
          var e = !1;
          return s(function() {
            if (!e) {
              for (var n = 0; n < r.length; ++n)
                if (t.next(r[n]), e)
                  return;
            t.complete()
            }
          }),
          function() {
            e = !0
          }
        })
      }
    }),
    p(_.prototype, a, function() {
      return this
    }),
    n(n.G, {Observable: _}),
    r(192)("Observable")
  },
  function(t, e, r) {
    var n = r(4),
      i = r(8),
      o = r(78),
      s = r(289),
      a = n.navigator,
      h = !!a && /MSIE .\./.test(a.userAgent),
      u = function(t) {
        return h
          ? function(e, r) {
            return t(o(s, [].slice.call(arguments, 2), "function" == typeof e
              ? e
              : Function(e)), r)
          }
          : t
      };
    i(i.G + i.B + i.F * h, {
      setTimeout: u(n.setTimeout),
      setInterval: u(n.setInterval)
    })
  },
  function(t, e, r) {
    "use strict";
    var n = r(290),
      i = r(78),
      o = r(21);
    t.exports = function() {
      for (var t = o(this), e = arguments.length, r = Array(e), s = 0, a = n._, h = !1; e > s;)
        (r[s] = arguments[s++]) === a && (h = !0);
      return function() {
        var n,
          o = this,
          s = arguments.length,
          u = 0,
          c = 0;
        if (!h && !s)
          return i(t, r, o);
        if (n = r.slice(), h)
          for (; e > u; u++)
            n[u] === a && (n[u] = arguments[c++]);
      for (; s > c;)
          n.push(arguments[c++]);
        return i(t, n, o)
      }
    }
  },
  function(t, e, r) {
    t.exports = r(4)
  },
  function(t, e, r) {
    var n = r(8),
      i = r(208);
    n(n.G + n.B, {
      setImmediate: i.set,
      clearImmediate: i.clear
    })
  },
  function(t, e, r) {
    for (var n = r(193), i = r(18), o = r(4), s = r(10), a = r(129), h = r(25), u = h("iterator"), c = h("toStringTag"), l = a.Array, p = [
      "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"
    ], f = 0; f < 5; f++) {
      var d,
        m = p[f],
        g = o[m],
        y = g && g.prototype;
      if (y) {
        y[u] || s(y, u, l),
        y[c] || s(y, c, m),
        a[m] = l;
        for (d in n)
          y[d] || i(y, d, n[d], !0)
      }
    }
  },
  function(t, e, r) {
    (function(e, r) {
      !function(e) {
        "use strict";
        function n(t, e, r, n) {
          var i = Object.create((e || o).prototype),
            s = new d(n || []);
          return i._invoke = l(t, r, s),
          i
        }
        function i(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            }
          } catch (n) {
            return {type: "throw", arg: n}
          }
        }
        function o() {}
        function s() {}
        function a() {}
        function h(t) {
          ["next", "throw", "return"].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t)
            }
          })
        }
        function u(t) {
          this.arg = t
        }
        function c(t) {
          function e(r, n, o, s) {
            var a = i(t[r], t, n);
            if ("throw" !== a.type) {
              var h = a.arg,
                c = h.value;
              return c instanceof u
                ? Promise.resolve(c.arg).then(function(t) {
                  e("next", t, o, s)
                }, function(t) {
                  e("throw", t, o, s)
                })
                : Promise.resolve(c).then(function(t) {
                  h.value = t,
                  o(h)
                }, s)
            }
            s(a.arg)
          }
          function n(t, r) {
            function n() {
              return new Promise(function(n, i) {
                e(t, r, n, i)
              })
            }
            return o = o
              ? o.then(n, n)
              : n()
          }
          "object" == typeof r && r.domain && (e = r.domain.bind(e));
          var o;
          this._invoke = n
        }
        function l(t, e, r) {
          var n = M;
          return function(o, s) {
            if (n === R)
              throw new Error("Generator is already running");
            if (n === E) {
              if ("throw" === o)
                throw s;
              return g()
            }
            for (;;) {
              var a = r.delegate;
              if (a) {
                if ("return" === o || "throw" === o && a.iterator[o] === y) {
                  r.delegate = null;
                  var h = a.iterator["return"];
                  if (h) {
                    var u = i(h, a.iterator, s);
                    if ("throw" === u.type) {
                      o = "throw",
                      s = u.arg;
                      continue
                    }
                  }
                  if ("return" === o)
                    continue
                }
                var u = i(a.iterator[o], a.iterator, s);
                if ("throw" === u.type) {
                  r.delegate = null,
                  o = "throw",
                  s = u.arg;
                  continue
                }
                o = "next",
                s = y;
                var c = u.arg;
                if (!c.done)
                  return n = T,
                  c;
                r[a.resultName] = c.value,
                r.next = a.nextLoc,
                r.delegate = null
              }
              if ("next" === o)
                r.sent = r._sent = s;
              else if ("throw" === o) {
                if (n === M)
                  throw n = E,
                  s;
                r.dispatchException(s) && (o = "next", s = y)
              } else
                "return" === o && r.abrupt("return", s);
              n = R;
              var u = i(t, e, r);
              if ("normal" === u.type) {
                n = r.done
                  ? E
                  : T;
                var c = {
                  value: u.arg,
                  done: r.done
                };
                if (u.arg !== C)
                  return c;
                r.delegate && "next" === o && (s = y)
              } else
                "throw" === u.type && (n = E, o = "throw", s = u.arg)
            }
          }
        }
        function p(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]),
          2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
          this.tryEntries.push(e)
        }
        function f(t) {
          var e = t.completion || {};
          e.type = "normal",
          delete e.arg,
          t.completion = e
        }
        function d(t) {
          this.tryEntries = [
            {
              tryLoc: "root"
            }
          ],
          t.forEach(p, this),
          this.reset(!0)
        }
        function m(t) {
          if (t) {
            var e = t[b];
            if (e)
              return e.call(t);
            if ("function" == typeof t.next)
              return t;
            if (!isNaN(t.length)) {
              var r = -1,
                n = function i() {
                  for (; ++r < t.length;)
                    if (v.call(t, r))
                      return i.value = t[r],
                      i.done = !1,
                      i;
                return i.value = y,
                  i.done = !0,
                  i
                };
              return n.next = n
            }
          }
          return {next: g}
        }
        function g() {
          return {
            value: y,
            done: !0
          }
        }
        var y,
          v = Object.prototype.hasOwnProperty,
          x = "function" == typeof Symbol
            ? Symbol
            : {},
          b = x.iterator || "@@iterator",
          _ = x.toStringTag || "@@toStringTag",
          w = "object" == typeof t,
          S = e.regeneratorRuntime;
        if (S)
          return void(w && (t.exports = S));
        S = e.regeneratorRuntime = w
          ? t.exports
          : {},
        S.wrap = n;
        var M = "suspendedStart",
          T = "suspendedYield",
          R = "executing",
          E = "completed",
          C = {},
          A = a.prototype = o.prototype;
        s.prototype = A.constructor = a,
        a.constructor = s,
        a[_] = s.displayName = "GeneratorFunction",
        S.isGeneratorFunction = function(t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === s || "GeneratorFunction" === (e.displayName || e.name))
        },
        S.mark = function(t) {
          return Object.setPrototypeOf
            ? Object.setPrototypeOf(t, a)
            : (t.__proto__ = a, _ in t || (t[_] = "GeneratorFunction")),
          t.prototype = Object.create(A),
          t
        },
        S.awrap = function(t) {
          return new u(t)
        },
        h(c.prototype),
        S.async = function(t, e, r, i) {
          var o = new c(n(t, e, r, i));
          return S.isGeneratorFunction(e)
            ? o
            : o.next().then(function(t) {
              return t.done
                ? t.value
                : o.next()
            })
        },
        h(A),
        A[b] = function() {
          return this
        },
        A[_] = "Generator",
        A.toString = function() {
          return "[object Generator]"
        },
        S.keys = function(t) {
          var e = [];
          for (var r in t)
            e.push(r);
          return e.reverse(),
          function n() {
            for (; e.length;) {
              var r = e.pop();
              if (r in t)
                return n.value = r,
                n.done = !1,
                n
            }
            return n.done = !0,
            n
          }
        },
        S.values = m,
        d.prototype = {
          constructor: d,
          reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.tryEntries.forEach(f), !t)
              for (var e in this)
                "t" === e.charAt(0) && v.call(this, e) && !isNaN(+ e.slice(1)) && (this[e] = y)
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0],
              e = t.completion;
            if ("throw" === e.type)
              throw e.arg;
            return this.rval
          },
          dispatchException: function(t) {
            function e(e, n) {
              return o.type = "throw",
              o.arg = t,
              r.next = e,
              !!n
            }
            if (this.done)
              throw t;
            for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n],
                o = i.completion;
              if ("root" === i.tryLoc)
                return e("end");
              if (i.tryLoc <= this.prev) {
                var s = v.call(i, "catchLoc"),
                  a = v.call(i, "finallyLoc");
                if (s && a) {
                  if (this.prev < i.catchLoc)
                    return e(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc)
                    return e(i.finallyLoc)
                } else if (s) {
                  if (this.prev < i.catchLoc)
                    return e(i.catchLoc, !0)
                } else {
                  if (!a)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc)
                    return e(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (n.tryLoc <= this.prev && v.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var i = n;
                break
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var o = i
              ? i.completion
              : {};
            return o.type = t,
            o.arg = e,
            i
              ? this.next = i.finallyLoc
              : this.complete(o),
            C
          },
          complete: function(t, e) {
            if ("throw" === t.type)
              throw t.arg;

            "break" === t.type || "continue" === t.type
              ? this.next = t.arg
              : "return" === t.type
                ? (this.rval = t.arg, this.next = "end")
                : "normal" === t.type && e && (this.next = e)
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc),
                f(r),
                C
            }
          },
          "catch": function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  f(r)
                }
                return i
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function(t, e, r) {
            return this.delegate = {
              iterator: m(t),
              resultName: e,
              nextLoc: r
            },
            C
          }
        }
      }("object" == typeof e
        ? e
        : "object" == typeof window
          ? window
          : "object" == typeof self
            ? self
            : this)
    }).call(e, function() {
      return this
    }(), r(294))
  },
  function(t, e) {
    function r() {
      throw new Error("setTimeout has not been defined")
    }
    function n() {
      throw new Error("clearTimeout has not been defined")
    }
    function i(t) {
      if (c === setTimeout)
        return setTimeout(t, 0);
      if ((c === r || !c) && setTimeout)
        return c = setTimeout,
        setTimeout(t, 0);
      try {
        return c(t, 0)
      } catch (e) {
        try {
          return c.call(null, t, 0)
        } catch (e) {
          return c.call(this, t, 0)
        }
      }
    }
    function o(t) {
      if (l === clearTimeout)
        return clearTimeout(t);
      if ((l === n || !l) && clearTimeout)
        return l = clearTimeout,
        clearTimeout(t);
      try {
        return l(t)
      } catch (e) {
        try {
          return l.call(null, t)
        } catch (e) {
          return l.call(this, t)
        }
      }
    }
    function s() {
      m && f && (m = !1, f.length
        ? d = f.concat(d)
        : g = -1, d.length && a())
    }
    function a() {
      if (!m) {
        var t = i(s);
        m = !0;
        for (var e = d.length; e;) {
          for (f = d, d = []; ++g < e;)
            f && f[g].run();
          g = -1,
          e = d.length
        }
        f = null,
        m = !1,
        o(t)
      }
    }
    function h(t, e) {
      this.fun = t,
      this.array = e
    }
    function u() {}
    var c,
      l,
      p = t.exports = {};
    !function() {
      try {
        c = "function" == typeof setTimeout
          ? setTimeout
          : r
      } catch (t) {
        c = r
      }
      try {
        l = "function" == typeof clearTimeout
          ? clearTimeout
          : n
      } catch (t) {
        l = n
      }
    }();
    var f,
      d = [],
      m = !1,
      g = -1;
    p.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
    d.push(new h(t, e)),
      1 !== d.length || m || i(a)
    },
    h.prototype.run = function() {
      this.fun.apply(null, this.array)
    },
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = u,
    p.addListener = u,
    p.once = u,
    p.off = u,
    p.removeListener = u,
    p.removeAllListeners = u,
    p.emit = u,
    p.binding = function(t) {
      throw new Error("process.binding is not supported")
    },
    p.cwd = function() {
      return "/"
    },
    p.chdir = function(t) {
      throw new Error("process.chdir is not supported")
    },
    p.umask = function() {
      return 0
    }
  },
  function(t, e, r) {
    r(296),
    t.exports = r(9).RegExp.escape
  },
  function(t, e, r) {
    var n = r(8),
      i = r(297)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    n(n.S, "RegExp", {
      escape: function(t) {
        return i(t)
      }
    })
  },
  function(t, e) {
    t.exports = function(t, e) {
      var r = e === Object(e)
        ? function(t) {
          return e[t]
        }
        : e;
      return function(e) {
        return String(e).replace(t, r)
      }
    }
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      return t && t.__esModule
        ? t
        : {
          "default": t
        }
    }
    var i = r(299),
      o = n(i);
    r(300);
    var s = function(t) {
      var e = void 0,
        r = void 0,
        n = [],
        i = void 0,
        o = void 0,
        s = void 0,
        a = void 0,
        h = 2560,
        u = 1440,
        c = function() {
          s = new t.Group,
          a = new t.Group;
          for (var e = function(e) {
            var r = t.createSprite(t.random(h / 6, 5 * h / 6), t.random(u / 6, 5 * u / 6));
            r.addAnimation("glow", "assets/sun1.png", "assets/sun3.png"),
            r.mass = 50,
            r.setSpeed(t.random(1, 2), t.random(0, 360)),
            r.setCollider("circle", 0, 0, 70),
            r.maxSpeed = 10;
            var i = t.createSprite(r.position.x, r.position.y);
            i.draw = function() {
              i.position.x = r.position.x,
              i.position.y = r.position.y,
              i.setCollider("circle", 0, 0, 700 * r.scale, 700 * r.scale),
              r.scale <= .1 && i.remove()
            },
            s.add(r),
            a.add(i),
            n.push(r)
          },
          r = 0; r < 3; r++)
            e(r)
        },
        l = function() {
          var e = t.loadImage("assets/face.png");
          o = t.createSprite(t.width / 2, t.height / 2, 10, 10),
          o.setCollider("circle", 0, 0, 50, 50),
          o.scale = .9,
          o.draw = function() {
            t.fill(237, 205, 0),
            t.push(),
            t.rotate(t.radians(this.getDirection())),
            t.ellipse(0, 0, 100 + this.getSpeed(), 100 - this.getSpeed() / 1.5),
            t.pop(),
            t.image(e, 2 * this.deltaX, 2 * this.deltaY)
          },
          o.maxSpeed = 15
        },
        p = function() {
          o.velocity.x = (t.camera.mouseX - o.position.x) / 20,
          o.velocity.y = (t.camera.mouseY - o.position.y) / 20
        };
      t.setup = function() {
        t.createCanvas(1440, 768);
        var o = t.createSprite(h / 2, u / 2);
        o.setCollider("rectangle", 0, 0, h + 150, u + 150),
        o.debug = !0,
        o.draw = function() {},
        e = new t.Group;
        for (var s = 0; s < 50; s++) {
          var a = t.createSprite(t.random(0, t.width), t.random(0, t.height));
          a.addAnimation("normal", "assets/asterisk_circle0006.png", "assets/asterisk_circle0008.png"),
          a.setCollider("circle", -2, 2, 55),
          a.setSpeed(t.random(1, 3), t.random(0, 360)),
          a.scale = t.random(.1, .2),
          a.mass = a.scale,
          a.maxSpeed = 5,
          e.add(a),
          n.push(a)
        }
        r = new t.Group;
        for (var p = 0; p < 8; p++) {
          var f = t.createSprite(t.random(h / 10, 9 * h / 10), t.random(u / 10, 9 * u / 10));
          f.addAnimation("normal", "assets/box0001.png", "assets/box0003.png"),
          f.immovable = !0,
          p % 2 == 0 && (f.rotation = 90),
          r.add(f)
        }
        i = new t.Group;
        for (var d = 0; d < 8; d++) {
          var m = t.createSprite(t.random(h / 10, 9 * h / 10), t.random(u / 10, 9 * u / 10));
          m.addAnimation("normal", "assets/bubbly0001.png", "assets/bubbly0004.png"),
          m.setCollider("rectangle", 0, 0, 100, 200),
          i.add(m),
          d % 2 == 0 && (m.rotation = 90),
          n.push(m)
        }
        c(),
        l()
      };
      var f = function(t, e) {
          e.velocity.x += t.velocity.x / 10,
          e.velocity.y += t.velocity.y / 10,
          t.scale >= e.scale
            ? (t.scale < 2 && (t.scale += e.scale / 20 / t.scale), e.scale <= t.scale / 15 * t.scale
              ? (e.scale -= t.scale / 15 * t.scale, e.remove())
              : e.scale -= t.scale / 15 * t.scale)
            : (t.scale <= e.scale / 15 * e.scale
              ? (t.scale -= e.scale / 15 * e.scale, t.remove())
              : t.scale -= e.scale / 15 * e.scale, e.scale < 2 && (e.scale += t.scale / 20 / e.scale))
        },
        d = function(t, e) {
          t.velocity.x += (e.position.x - t.position.x) / 5e3 * e.scale,
          t.velocity.y += (e.position.y - t.position.y) / 5e3 * e.scale
        };
      t.draw = function() {
        if (t.background(255, 255, 255), t.random(0, 100) <= 15) {
          var c = t.createSprite(t.random(0, t.width), t.random(0, t.height));
          c.addAnimation("normal", "assets/asterisk_circle0006.png", "assets/asterisk_circle0008.png"),
          c.setCollider("circle", -2, 2, 55),
          c.setSpeed(t.random(2, 3), t.random(0, 360)),
          c.scale = t.random(.2, .5),
          c.mass = c.scale,
          e.add(c),
          n.push(c)
        }
        e.overlap(e, f),
        e.bounce(r),
        o.overlap(i),
        e.overlap(i, function(t, e) {
          90 === e.rotation
            ? t.velocity.x += .6
            : t.velocity.y -= .6
        }),
        i.collide(r),
        r.collide(r),
        e.overlap(s),
        e.overlap(a, d),
        s.displace(r),
        s.overlap(i, function(t, e) {
          90 === e.rotation
            ? t.velocity.x += .2
            : t.velocity.y -= .2
        }),
        o.collide(r),
        o.displace(s),
        o.overlap(e, f),
        s.overlap(s, f),
        s.overlap(a, d);
        for (var l = 0; l < n.length; l++) {
          var m = n[l];
          m.position.x < 0 && (m.position.x = 1, m.velocity.x = t.abs(m.velocity.x)),
          m.position.x > h && (m.position.x = h - 1, m.velocity.x = -t.abs(m.velocity.x)),
          m.position.y < 0 && (m.position.y = 1, m.velocity.y = t.abs(m.velocity.y)),
          m.position.y > u && (m.position.y = u - 1, m.velocity.y = -t.abs(m.velocity.y)),
          m.velocity.x /= 1.001,
          m.velocity.y /= 1.001
        }
        t.camera.position.x = o.position.x,
        t.camera.position.y = o.position.y,
        o.position.x < 0 && (o.position.x = 0),
        o.position.y < 0 && (o.position.y = 0),
        o.position.x > h && (o.position.x = h),
        o.position.y > u && (o.position.y = u),
        p(),
        (!o || o.scale <= .01) && (t.background(255, 255, 255, 50), t.textSize(100), t.fill(0, 102, 153), t.text("You Lose", t.camera.position.x - 200, t.camera.position.y - 200)),
        o && o.scale >= 1.98 && (t.background(255, 255, 255, 50), t.textSize(100), t.fill(0, 102, 153), t.text("You Win!", t.camera.position.x - 200, t.camera.position.y - 200)),
        t.drawSprites()
      },
      t.mousePressed = function() {
        console.log(e[0])
      }
    };
    new o["default"](s)
  },
  function(module, exports, __webpack_require__) {
    var require,
      require;
    !function(t) {
      module.exports = t()
    }(function() {
      var define,
        module,
        exports;
      return function t(e, r, n) {
        function i(s, a) {
          if (!r[s]) {
            if (!e[s]) {
              var h = "function" == typeof require && require;
              if (!a && h)
                return require(s, !0);
              if (o)
                return o(s, !0);
              var u = new Error("Cannot find module '" + s + "'");
              throw u.code = "MODULE_NOT_FOUND",
              u
            }
            var c = r[s] = {
              exports: {}
            };
            e[s][0].call(c.exports, function(t) {
              var r = e[s][1][t];
              return i(r
                ? r
                : t)
            }, c, c.exports, t, e, r, n)
          }
          return r[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
          i(n[s]);
        return i
      }({
        1: [
          function(t, e, r) {}, {}
        ],
        2: [
          function(t, e, r) {
            "use strict";
            r.argument = function(t, e) {
              if (!t)
                throw new Error(e)
            },
            r.assert = r.argument
          }, {}
        ],
        3: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r, n, i) {
              t.beginPath(),
              t.moveTo(e, r),
              t.lineTo(n, i),
              t.stroke()
            }
            r.line = n
          }, {}
        ],
        4: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              this.font = t
            }
            function i(t) {
              this.cmap = t
            }
            function o(t, e) {
              this.encoding = t,
              this.charset = e
            }
            function s(t) {
              var e;
              switch (t.version) {
                case 1:
                  this.names = r.standardNames.slice();
                  break;
                case 2:
                  for (this.names = new Array(t.numberOfGlyphs), e = 0; e < t.numberOfGlyphs; e++)
                    t.glyphNameIndex[e] < r.standardNames.length
                      ? this.names[e] = r.standardNames[t.glyphNameIndex[e]]
                      : this.names[e] = t.names[t.glyphNameIndex[e] - r.standardNames.length];
                  break;
                case 2.5:
                  for (this.names = new Array(t.numberOfGlyphs), e = 0; e < t.numberOfGlyphs; e++)
                    this.names[e] = r.standardNames[e + t.glyphNameIndex[e]];
                  break;
                case 3:
                  this.names = []
              }
            }
            function a(t) {
              for (var e, r = t.tables.cmap.glyphIndexMap, n = Object.keys(r), i = 0; i < n.length; i += 1) {
                var o = n[i],
                  s = r[o];
                e = t.glyphs.get(s),
                e.addUnicode(parseInt(o))
              }
              for (i = 0; i < t.glyphs.length; i += 1)
                e = t.glyphs.get(i),
                t.cffEncoding
                  ? e.name = t.cffEncoding.charset[i]
                  : e.name = t.glyphNames.glyphIndexToName(i)
              }
            var h = [
                ".notdef",
                "space",
                "exclam",
                "quotedbl",
                "numbersign",
                "dollar",
                "percent",
                "ampersand",
                "quoteright",
                "parenleft",
                "parenright",
                "asterisk",
                "plus",
                "comma",
                "hyphen",
                "period",
                "slash",
                "zero",
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "colon",
                "semicolon",
                "less",
                "equal",
                "greater",
                "question",
                "at",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "bracketleft",
                "backslash",
                "bracketright",
                "asciicircum",
                "underscore",
                "quoteleft",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "braceleft",
                "bar",
                "braceright",
                "asciitilde",
                "exclamdown",
                "cent",
                "sterling",
                "fraction",
                "yen",
                "florin",
                "section",
                "currency",
                "quotesingle",
                "quotedblleft",
                "guillemotleft",
                "guilsinglleft",
                "guilsinglright",
                "fi",
                "fl",
                "endash",
                "dagger",
                "daggerdbl",
                "periodcentered",
                "paragraph",
                "bullet",
                "quotesinglbase",
                "quotedblbase",
                "quotedblright",
                "guillemotright",
                "ellipsis",
                "perthousand",
                "questiondown",
                "grave",
                "acute",
                "circumflex",
                "tilde",
                "macron",
                "breve",
                "dotaccent",
                "dieresis",
                "ring",
                "cedilla",
                "hungarumlaut",
                "ogonek",
                "caron",
                "emdash",
                "AE",
                "ordfeminine",
                "Lslash",
                "Oslash",
                "OE",
                "ordmasculine",
                "ae",
                "dotlessi",
                "lslash",
                "oslash",
                "oe",
                "germandbls",
                "onesuperior",
                "logicalnot",
                "mu",
                "trademark",
                "Eth",
                "onehalf",
                "plusminus",
                "Thorn",
                "onequarter",
                "divide",
                "brokenbar",
                "degree",
                "thorn",
                "threequarters",
                "twosuperior",
                "registered",
                "minus",
                "eth",
                "multiply",
                "threesuperior",
                "copyright",
                "Aacute",
                "Acircumflex",
                "Adieresis",
                "Agrave",
                "Aring",
                "Atilde",
                "Ccedilla",
                "Eacute",
                "Ecircumflex",
                "Edieresis",
                "Egrave",
                "Iacute",
                "Icircumflex",
                "Idieresis",
                "Igrave",
                "Ntilde",
                "Oacute",
                "Ocircumflex",
                "Odieresis",
                "Ograve",
                "Otilde",
                "Scaron",
                "Uacute",
                "Ucircumflex",
                "Udieresis",
                "Ugrave",
                "Yacute",
                "Ydieresis",
                "Zcaron",
                "aacute",
                "acircumflex",
                "adieresis",
                "agrave",
                "aring",
                "atilde",
                "ccedilla",
                "eacute",
                "ecircumflex",
                "edieresis",
                "egrave",
                "iacute",
                "icircumflex",
                "idieresis",
                "igrave",
                "ntilde",
                "oacute",
                "ocircumflex",
                "odieresis",
                "ograve",
                "otilde",
                "scaron",
                "uacute",
                "ucircumflex",
                "udieresis",
                "ugrave",
                "yacute",
                "ydieresis",
                "zcaron",
                "exclamsmall",
                "Hungarumlautsmall",
                "dollaroldstyle",
                "dollarsuperior",
                "ampersandsmall",
                "Acutesmall",
                "parenleftsuperior",
                "parenrightsuperior",
                "266 ff",
                "onedotenleader",
                "zerooldstyle",
                "oneoldstyle",
                "twooldstyle",
                "threeoldstyle",
                "fouroldstyle",
                "fiveoldstyle",
                "sixoldstyle",
                "sevenoldstyle",
                "eightoldstyle",
                "nineoldstyle",
                "commasuperior",
                "threequartersemdash",
                "periodsuperior",
                "questionsmall",
                "asuperior",
                "bsuperior",
                "centsuperior",
                "dsuperior",
                "esuperior",
                "isuperior",
                "lsuperior",
                "msuperior",
                "nsuperior",
                "osuperior",
                "rsuperior",
                "ssuperior",
                "tsuperior",
                "ff",
                "ffi",
                "ffl",
                "parenleftinferior",
                "parenrightinferior",
                "Circumflexsmall",
                "hyphensuperior",
                "Gravesmall",
                "Asmall",
                "Bsmall",
                "Csmall",
                "Dsmall",
                "Esmall",
                "Fsmall",
                "Gsmall",
                "Hsmall",
                "Ismall",
                "Jsmall",
                "Ksmall",
                "Lsmall",
                "Msmall",
                "Nsmall",
                "Osmall",
                "Psmall",
                "Qsmall",
                "Rsmall",
                "Ssmall",
                "Tsmall",
                "Usmall",
                "Vsmall",
                "Wsmall",
                "Xsmall",
                "Ysmall",
                "Zsmall",
                "colonmonetary",
                "onefitted",
                "rupiah",
                "Tildesmall",
                "exclamdownsmall",
                "centoldstyle",
                "Lslashsmall",
                "Scaronsmall",
                "Zcaronsmall",
                "Dieresissmall",
                "Brevesmall",
                "Caronsmall",
                "Dotaccentsmall",
                "Macronsmall",
                "figuredash",
                "hypheninferior",
                "Ogoneksmall",
                "Ringsmall",
                "Cedillasmall",
                "questiondownsmall",
                "oneeighth",
                "threeeighths",
                "fiveeighths",
                "seveneighths",
                "onethird",
                "twothirds",
                "zerosuperior",
                "foursuperior",
                "fivesuperior",
                "sixsuperior",
                "sevensuperior",
                "eightsuperior",
                "ninesuperior",
                "zeroinferior",
                "oneinferior",
                "twoinferior",
                "threeinferior",
                "fourinferior",
                "fiveinferior",
                "sixinferior",
                "seveninferior",
                "eightinferior",
                "nineinferior",
                "centinferior",
                "dollarinferior",
                "periodinferior",
                "commainferior",
                "Agravesmall",
                "Aacutesmall",
                "Acircumflexsmall",
                "Atildesmall",
                "Adieresissmall",
                "Aringsmall",
                "AEsmall",
                "Ccedillasmall",
                "Egravesmall",
                "Eacutesmall",
                "Ecircumflexsmall",
                "Edieresissmall",
                "Igravesmall",
                "Iacutesmall",
                "Icircumflexsmall",
                "Idieresissmall",
                "Ethsmall",
                "Ntildesmall",
                "Ogravesmall",
                "Oacutesmall",
                "Ocircumflexsmall",
                "Otildesmall",
                "Odieresissmall",
                "OEsmall",
                "Oslashsmall",
                "Ugravesmall",
                "Uacutesmall",
                "Ucircumflexsmall",
                "Udieresissmall",
                "Yacutesmall",
                "Thornsmall",
                "Ydieresissmall",
                "001.000",
                "001.001",
                "001.002",
                "001.003",
                "Black",
                "Bold",
                "Book",
                "Light",
                "Medium",
                "Regular",
                "Roman",
                "Semibold"
              ],
              u = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "space",
                "exclam",
                "quotedbl",
                "numbersign",
                "dollar",
                "percent",
                "ampersand",
                "quoteright",
                "parenleft",
                "parenright",
                "asterisk",
                "plus",
                "comma",
                "hyphen",
                "period",
                "slash",
                "zero",
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "colon",
                "semicolon",
                "less",
                "equal",
                "greater",
                "question",
                "at",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "bracketleft",
                "backslash",
                "bracketright",
                "asciicircum",
                "underscore",
                "quoteleft",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "braceleft",
                "bar",
                "braceright",
                "asciitilde",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "exclamdown",
                "cent",
                "sterling",
                "fraction",
                "yen",
                "florin",
                "section",
                "currency",
                "quotesingle",
                "quotedblleft",
                "guillemotleft",
                "guilsinglleft",
                "guilsinglright",
                "fi",
                "fl",
                "",
                "endash",
                "dagger",
                "daggerdbl",
                "periodcentered",
                "",
                "paragraph",
                "bullet",
                "quotesinglbase",
                "quotedblbase",
                "quotedblright",
                "guillemotright",
                "ellipsis",
                "perthousand",
                "",
                "questiondown",
                "",
                "grave",
                "acute",
                "circumflex",
                "tilde",
                "macron",
                "breve",
                "dotaccent",
                "dieresis",
                "",
                "ring",
                "cedilla",
                "",
                "hungarumlaut",
                "ogonek",
                "caron",
                "emdash",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "AE",
                "",
                "ordfeminine",
                "",
                "",
                "",
                "",
                "Lslash",
                "Oslash",
                "OE",
                "ordmasculine",
                "",
                "",
                "",
                "",
                "",
                "ae",
                "",
                "",
                "",
                "dotlessi",
                "",
                "",
                "lslash",
                "oslash",
                "oe",
                "germandbls"
              ],
              c = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "space",
                "exclamsmall",
                "Hungarumlautsmall",
                "",
                "dollaroldstyle",
                "dollarsuperior",
                "ampersandsmall",
                "Acutesmall",
                "parenleftsuperior",
                "parenrightsuperior",
                "twodotenleader",
                "onedotenleader",
                "comma",
                "hyphen",
                "period",
                "fraction",
                "zerooldstyle",
                "oneoldstyle",
                "twooldstyle",
                "threeoldstyle",
                "fouroldstyle",
                "fiveoldstyle",
                "sixoldstyle",
                "sevenoldstyle",
                "eightoldstyle",
                "nineoldstyle",
                "colon",
                "semicolon",
                "commasuperior",
                "threequartersemdash",
                "periodsuperior",
                "questionsmall",
                "",
                "asuperior",
                "bsuperior",
                "centsuperior",
                "dsuperior",
                "esuperior",
                "",
                "",
                "isuperior",
                "",
                "",
                "lsuperior",
                "msuperior",
                "nsuperior",
                "osuperior",
                "",
                "",
                "rsuperior",
                "ssuperior",
                "tsuperior",
                "",
                "ff",
                "fi",
                "fl",
                "ffi",
                "ffl",
                "parenleftinferior",
                "",
                "parenrightinferior",
                "Circumflexsmall",
                "hyphensuperior",
                "Gravesmall",
                "Asmall",
                "Bsmall",
                "Csmall",
                "Dsmall",
                "Esmall",
                "Fsmall",
                "Gsmall",
                "Hsmall",
                "Ismall",
                "Jsmall",
                "Ksmall",
                "Lsmall",
                "Msmall",
                "Nsmall",
                "Osmall",
                "Psmall",
                "Qsmall",
                "Rsmall",
                "Ssmall",
                "Tsmall",
                "Usmall",
                "Vsmall",
                "Wsmall",
                "Xsmall",
                "Ysmall",
                "Zsmall",
                "colonmonetary",
                "onefitted",
                "rupiah",
                "Tildesmall",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "exclamdownsmall",
                "centoldstyle",
                "Lslashsmall",
                "",
                "",
                "Scaronsmall",
                "Zcaronsmall",
                "Dieresissmall",
                "Brevesmall",
                "Caronsmall",
                "",
                "Dotaccentsmall",
                "",
                "",
                "Macronsmall",
                "",
                "",
                "figuredash",
                "hypheninferior",
                "",
                "",
                "Ogoneksmall",
                "Ringsmall",
                "Cedillasmall",
                "",
                "",
                "",
                "onequarter",
                "onehalf",
                "threequarters",
                "questiondownsmall",
                "oneeighth",
                "threeeighths",
                "fiveeighths",
                "seveneighths",
                "onethird",
                "twothirds",
                "",
                "",
                "zerosuperior",
                "onesuperior",
                "twosuperior",
                "threesuperior",
                "foursuperior",
                "fivesuperior",
                "sixsuperior",
                "sevensuperior",
                "eightsuperior",
                "ninesuperior",
                "zeroinferior",
                "oneinferior",
                "twoinferior",
                "threeinferior",
                "fourinferior",
                "fiveinferior",
                "sixinferior",
                "seveninferior",
                "eightinferior",
                "nineinferior",
                "centinferior",
                "dollarinferior",
                "periodinferior",
                "commainferior",
                "Agravesmall",
                "Aacutesmall",
                "Acircumflexsmall",
                "Atildesmall",
                "Adieresissmall",
                "Aringsmall",
                "AEsmall",
                "Ccedillasmall",
                "Egravesmall",
                "Eacutesmall",
                "Ecircumflexsmall",
                "Edieresissmall",
                "Igravesmall",
                "Iacutesmall",
                "Icircumflexsmall",
                "Idieresissmall",
                "Ethsmall",
                "Ntildesmall",
                "Ogravesmall",
                "Oacutesmall",
                "Ocircumflexsmall",
                "Otildesmall",
                "Odieresissmall",
                "OEsmall",
                "Oslashsmall",
                "Ugravesmall",
                "Uacutesmall",
                "Ucircumflexsmall",
                "Udieresissmall",
                "Yacutesmall",
                "Thornsmall",
                "Ydieresissmall"
              ],
              l = [
                ".notdef",
                ".null",
                "nonmarkingreturn",
                "space",
                "exclam",
                "quotedbl",
                "numbersign",
                "dollar",
                "percent",
                "ampersand",
                "quotesingle",
                "parenleft",
                "parenright",
                "asterisk",
                "plus",
                "comma",
                "hyphen",
                "period",
                "slash",
                "zero",
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "colon",
                "semicolon",
                "less",
                "equal",
                "greater",
                "question",
                "at",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "bracketleft",
                "backslash",
                "bracketright",
                "asciicircum",
                "underscore",
                "grave",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "braceleft",
                "bar",
                "braceright",
                "asciitilde",
                "Adieresis",
                "Aring",
                "Ccedilla",
                "Eacute",
                "Ntilde",
                "Odieresis",
                "Udieresis",
                "aacute",
                "agrave",
                "acircumflex",
                "adieresis",
                "atilde",
                "aring",
                "ccedilla",
                "eacute",
                "egrave",
                "ecircumflex",
                "edieresis",
                "iacute",
                "igrave",
                "icircumflex",
                "idieresis",
                "ntilde",
                "oacute",
                "ograve",
                "ocircumflex",
                "odieresis",
                "otilde",
                "uacute",
                "ugrave",
                "ucircumflex",
                "udieresis",
                "dagger",
                "degree",
                "cent",
                "sterling",
                "section",
                "bullet",
                "paragraph",
                "germandbls",
                "registered",
                "copyright",
                "trademark",
                "acute",
                "dieresis",
                "notequal",
                "AE",
                "Oslash",
                "infinity",
                "plusminus",
                "lessequal",
                "greaterequal",
                "yen",
                "mu",
                "partialdiff",
                "summation",
                "product",
                "pi",
                "integral",
                "ordfeminine",
                "ordmasculine",
                "Omega",
                "ae",
                "oslash",
                "questiondown",
                "exclamdown",
                "logicalnot",
                "radical",
                "florin",
                "approxequal",
                "Delta",
                "guillemotleft",
                "guillemotright",
                "ellipsis",
                "nonbreakingspace",
                "Agrave",
                "Atilde",
                "Otilde",
                "OE",
                "oe",
                "endash",
                "emdash",
                "quotedblleft",
                "quotedblright",
                "quoteleft",
                "quoteright",
                "divide",
                "lozenge",
                "ydieresis",
                "Ydieresis",
                "fraction",
                "currency",
                "guilsinglleft",
                "guilsinglright",
                "fi",
                "fl",
                "daggerdbl",
                "periodcentered",
                "quotesinglbase",
                "quotedblbase",
                "perthousand",
                "Acircumflex",
                "Ecircumflex",
                "Aacute",
                "Edieresis",
                "Egrave",
                "Iacute",
                "Icircumflex",
                "Idieresis",
                "Igrave",
                "Oacute",
                "Ocircumflex",
                "apple",
                "Ograve",
                "Uacute",
                "Ucircumflex",
                "Ugrave",
                "dotlessi",
                "circumflex",
                "tilde",
                "macron",
                "breve",
                "dotaccent",
                "ring",
                "cedilla",
                "hungarumlaut",
                "ogonek",
                "caron",
                "Lslash",
                "lslash",
                "Scaron",
                "scaron",
                "Zcaron",
                "zcaron",
                "brokenbar",
                "Eth",
                "eth",
                "Yacute",
                "yacute",
                "Thorn",
                "thorn",
                "minus",
                "multiply",
                "onesuperior",
                "twosuperior",
                "threesuperior",
                "onehalf",
                "onequarter",
                "threequarters",
                "franc",
                "Gbreve",
                "gbreve",
                "Idotaccent",
                "Scedilla",
                "scedilla",
                "Cacute",
                "cacute",
                "Ccaron",
                "ccaron",
                "dcroat"
              ];
            n.prototype.charToGlyphIndex = function(t) {
              var e = t.charCodeAt(0),
                r = this.font.glyphs;
              if (!r)
                return null;
              for (var n = 0; n < r.length; n += 1)
                for (var i = r.get(n), o = 0; o < i.unicodes.length; o += 1)
                  if (i.unicodes[o] === e)
                    return n
            },
            i.prototype.charToGlyphIndex = function(t) {
              return this.cmap.glyphIndexMap[t.charCodeAt(0)] || 0
            },
            o.prototype.charToGlyphIndex = function(t) {
              var e = t.charCodeAt(0),
                r = this.encoding[e];
              return this.charset.indexOf(r)
            },
            s.prototype.nameToGlyphIndex = function(t) {
              return this.names.indexOf(t)
            },
            s.prototype.glyphIndexToName = function(t) {
              return this.names[t]
            },
            r.cffStandardStrings = h,
            r.cffStandardEncoding = u,
            r.cffExpertEncoding = c,
            r.standardNames = l,
            r.DefaultEncoding = n,
            r.CmapEncoding = i,
            r.CffEncoding = o,
            r.GlyphNames = s,
            r.addGlyphNames = a
          }, {}
        ],
        5: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              t = t || {},
              this.familyName = t.familyName || " ",
              this.styleName = t.styleName || " ",
              this.designer = t.designer || " ",
              this.designerURL = t.designerURL || " ",
              this.manufacturer = t.manufacturer || " ",
              this.manufacturerURL = t.manufacturerURL || " ",
              this.license = t.license || " ",
              this.licenseURL = t.licenseURL || " ",
              this.version = t.version || "Version 0.1",
              this.description = t.description || " ",
              this.copyright = t.copyright || " ",
              this.trademark = t.trademark || " ",
              this.unitsPerEm = t.unitsPerEm || 1e3,
              this.ascender = t.ascender,
              this.descender = t.descender,
              this.supported = !0,
              this.glyphs = new a.GlyphSet(this, t.glyphs || []),
              this.encoding = new s.DefaultEncoding(this),
              this.tables = {}
            }
            var i = t("./path"),
              o = t("./tables/sfnt"),
              s = t("./encoding"),
              a = t("./glyphset");
            n.prototype.hasChar = function(t) {
              return null !== this.encoding.charToGlyphIndex(t)
            },
            n.prototype.charToGlyphIndex = function(t) {
              return this.encoding.charToGlyphIndex(t)
            },
            n.prototype.charToGlyph = function(t) {
              var e = this.charToGlyphIndex(t),
                r = this.glyphs.get(e);
              return r || (r = this.glyphs.get(0)),
              r
            },
            n.prototype.stringToGlyphs = function(t) {
              for (var e = [], r = 0; r < t.length; r += 1) {
                var n = t[r];
                e.push(this.charToGlyph(n))
              }
              return e
            },
            n.prototype.nameToGlyphIndex = function(t) {
              return this.glyphNames.nameToGlyphIndex(t)
            },
            n.prototype.nameToGlyph = function(t) {
              var e = this.nametoGlyphIndex(t),
                r = this.glyphs.get(e);
              return r || (r = this.glyphs.get(0)),
              r
            },
            n.prototype.glyphIndexToName = function(t) {
              return this.glyphNames.glyphIndexToName
                ? this.glyphNames.glyphIndexToName(t)
                : ""
            },
            n.prototype.getKerningValue = function(t, e) {
              t = t.index || t,
              e = e.index || e;
              var r = this.getGposKerningValue;
              return r
                ? r(t, e)
                : this.kerningPairs[t + "," + e] || 0
            },
            n.prototype.forEachGlyph = function(t, e, r, n, i, o) {
              if (this.supported) {
                e = void 0 !== e
                  ? e
                  : 0,
                r = void 0 !== r
                  ? r
                  : 0,
                n = void 0 !== n
                  ? n
                  : 72,
                i = i || {};
                for (var s = void 0 === i.kerning || i.kerning, a = 1 / this.unitsPerEm * n, h = this.stringToGlyphs(t), u = 0; u < h.length; u += 1) {
                  var c = h[u];
                  if (o(c, e, r, n, i), c.advanceWidth && (e += c.advanceWidth * a), s && u < h.length - 1) {
                    var l = this.getKerningValue(c, h[u + 1]);
                    e += l * a
                  }
                }
              }
            },
            n.prototype.getPath = function(t, e, r, n, o) {
              var s = new i.Path;
              return this.forEachGlyph(t, e, r, n, o, function(t, e, r, n) {
                var i = t.getPath(e, r, n);
                s.extend(i)
              }),
              s
            },
            n.prototype.draw = function(t, e, r, n, i, o) {
              this.getPath(e, r, n, i, o).draw(t)
            },
            n.prototype.drawPoints = function(t, e, r, n, i, o) {
              this.forEachGlyph(e, r, n, i, o, function(e, r, n, i) {
                e.drawPoints(t, r, n, i)
              })
            },
            n.prototype.drawMetrics = function(t, e, r, n, i, o) {
              this.forEachGlyph(e, r, n, i, o, function(e, r, n, i) {
                e.drawMetrics(t, r, n, i)
              })
            },
            n.prototype.validate = function() {
              function t(t, e) {
                t || r.push(e)
              }
              function e(e) {
                t(n[e] && n[e].trim().length > 0, "No " + e + " specified.")
              }
              var r = [],
                n = this;
              e("familyName"),
              e("weightName"),
              e("manufacturer"),
              e("copyright"),
              e("version"),
              t(this.unitsPerEm > 0, "No unitsPerEm specified.")
            },
            n.prototype.toTables = function() {
              return o.fontToTable(this)
            },
            n.prototype.toBuffer = function() {
              for (var t = this.toTables(), e = t.encode(), r = new ArrayBuffer(e.length), n = new Uint8Array(r), i = 0; i < e.length; i++)
                n[i] = e[i];
              return r
            },
            n.prototype.download = function() {
              var t = this.familyName.replace(/\s/g, "") + "-" + this.styleName + ".otf",
                e = this.toBuffer();
              window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem,
              window.requestFileSystem(window.TEMPORARY, e.byteLength, function(r) {
                r.root.getFile(t, {
                  create: !0
                }, function(t) {
                  t.createWriter(function(r) {
                    var n = new DataView(e),
                      i = new Blob([n], {type: "font/opentype"});
                    r.write(i),
                    r.addEventListener("writeend", function() {
                      location.href = t.toURL()
                    }, !1)
                  })
                })
              }, function(t) {
                throw t
              })
            },
            r.Font = n
          }, {
            "./encoding": 4,
            "./glyphset": 7,
            "./path": 10,
            "./tables/sfnt": 25
          }
        ],
        6: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = e || {
                commands: []
              };
              return {
                configurable: !0,
                get: function() {
                  return "function" == typeof r && (r = r()),
                  r
                },
                set: function(t) {
                  r = t
                }
              }
            }
            function i(t) {
              this.bindConstructorValues(t)
            }
            var o = t("./check"),
              s = t("./draw"),
              a = t("./path");
            i.prototype.bindConstructorValues = function(t) {
              this.index = t.index || 0,
              this.name = t.name || null,
              this.unicode = t.unicode || void 0,
              this.unicodes = t.unicodes || void 0 !== t.unicode
                ? [t.unicode]
                : [],
              t.xMin && (this.xMin = t.xMin),
              t.yMin && (this.yMin = t.yMin),
              t.xMax && (this.xMax = t.xMax),
              t.yMax && (this.yMax = t.yMax),
              t.advanceWidth && (this.advanceWidth = t.advanceWidth),
              Object.defineProperty(this, "path", n(this, t.path))
            },
            i.prototype.addUnicode = function(t) {
              0 === this.unicodes.length && (this.unicode = t),
              this.unicodes.push(t)
            },
            i.prototype.getPath = function(t, e, r) {
              t = void 0 !== t
                ? t
                : 0,
              e = void 0 !== e
                ? e
                : 0,
              r = void 0 !== r
                ? r
                : 72;
              for (var n = 1 / this.path.unitsPerEm * r, i = new a.Path, o = this.path.commands, s = 0; s < o.length; s += 1) {
                var h = o[s];
                "M" === h.type
                  ? i.moveTo(t + h.x * n, e + -h.y * n)
                  : "L" === h.type
                    ? i.lineTo(t + h.x * n, e + -h.y * n)
                    : "Q" === h.type
                      ? i.quadraticCurveTo(t + h.x1 * n, e + -h.y1 * n, t + h.x * n, e + -h.y * n)
                      : "C" === h.type
                        ? i.curveTo(t + h.x1 * n, e + -h.y1 * n, t + h.x2 * n, e + -h.y2 * n, t + h.x * n, e + -h.y * n)
                        : "Z" === h.type && i.closePath()
              }
              return i
            },
            i.prototype.getContours = function() {
              if (void 0 === this.points)
                return [];
              for (var t = [], e = [], r = 0; r < this.points.length; r += 1) {
                var n = this.points[r];
                e.push(n),
                n.lastPointOfContour && (t.push(e), e = [])
              }
              return o.argument(0 === e.length, "There are still points left in the current contour."),
              t
            },
            i.prototype.getMetrics = function() {
              for (var t = this.path.commands, e = [], r = [], n = 0; n < t.length; n += 1) {
                var i = t[n];
                "Z" !== i.type && (e.push(i.x), r.push(i.y)),
                "Q" !== i.type && "C" !== i.type || (e.push(i.x1), r.push(i.y1)),
                "C" === i.type && (e.push(i.x2), r.push(i.y2))
              }
              var o = {
                xMin: Math.min.apply(null, e),
                yMin: Math.min.apply(null, r),
                xMax: Math.max.apply(null, e),
                yMax: Math.max.apply(null, r),
                leftSideBearing: 0
              };
              return o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin),
              o
            },
            i.prototype.draw = function(t, e, r, n) {
              this.getPath(e, r, n).draw(t)
            },
            i.prototype.drawPoints = function(t, e, r, n) {
              function i(e, r, n, i) {
                var o = 2 * Math.PI;
                t.beginPath();
                for (var s = 0; s < e.length; s += 1)
                  t.moveTo(r + e[s].x * i, n + e[s].y * i),
                  t.arc(r + e[s].x * i, n + e[s].y * i, 2, 0, o, !1);
                t.closePath(),
                t.fill()
              }
              e = void 0 !== e
                ? e
                : 0,
              r = void 0 !== r
                ? r
                : 0,
              n = void 0 !== n
                ? n
                : 24;
              for (var o = 1 / this.path.unitsPerEm * n, s = [], a = [], h = this.path, u = 0; u < h.commands.length; u += 1) {
                var c = h.commands[u];
                void 0 !== c.x && s.push({
                  x: c.x,
                  y: -c.y
                }),
                void 0 !== c.x1 && a.push({
                  x: c.x1,
                  y: -c.y1
                }),
                void 0 !== c.x2 && a.push({
                  x: c.x2,
                  y: -c.y2
                })
              }
              t.fillStyle = "blue",
              i(s, e, r, o),
              t.fillStyle = "red",
              i(a, e, r, o)
            },
            i.prototype.drawMetrics = function(t, e, r, n) {
              var i;
              e = void 0 !== e
                ? e
                : 0,
              r = void 0 !== r
                ? r
                : 0,
              n = void 0 !== n
                ? n
                : 24,
              i = 1 / this.path.unitsPerEm * n,
              t.lineWidth = 1,
              t.strokeStyle = "black",
              s.line(t, e, -1e4, e, 1e4),
              s.line(t, -1e4, r, 1e4, r);
              var o = this.xMin || 0,
                a = this.yMin || 0,
                h = this.xMax || 0,
                u = this.yMax || 0,
                c = this.advanceWidth || 0;
              t.strokeStyle = "blue",
              s.line(t, e + o * i, -1e4, e + o * i, 1e4),
              s.line(t, e + h * i, -1e4, e + h * i, 1e4),
              s.line(t, -1e4, r + -a * i, 1e4, r + -a * i),
              s.line(t, -1e4, r + -u * i, 1e4, r + -u * i),
              t.strokeStyle = "green",
              s.line(t, e + c * i, -1e4, e + c * i, 1e4)
            },
            r.Glyph = i
          }, {
            "./check": 2,
            "./draw": 3,
            "./path": 10
          }
        ],
        7: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              if (this.font = t, this.glyphs = {}, Array.isArray(e))
                for (var r = 0; r < e.length; r++)
                  this.glyphs[r] = e[r];
            this.length = e && e.length || 0
            }
            function i(t, e) {
              return new a.Glyph({index: e, font: t})
            }
            function o(t, e, r, n, i, o) {
              return function() {
                var s = new a.Glyph({index: e, font: t});
                return s.path = function() {
                  r(s, n, i);
                  var e = o(t.glyphs, s);
                  return e.unitsPerEm = t.unitsPerEm,
                  e
                },
                s
              }
            }
            function s(t, e, r, n) {
              return function() {
                var i = new a.Glyph({index: e, font: t});
                return i.path = function() {
                  var e = r(t, i, n);
                  return e.unitsPerEm = t.unitsPerEm,
                  e
                },
                i
              }
            }
            var a = t("./glyph");
            n.prototype.get = function(t) {
              return "function" == typeof this.glyphs[t] && (this.glyphs[t] = this.glyphs[t]()),
              this.glyphs[t]
            },
            n.prototype.push = function(t, e) {
              this.glyphs[t] = e,
              this.length++
            },
            r.GlyphSet = n,
            r.glyphLoader = i,
            r.ttfGlyphLoader = o,
            r.cffGlyphLoader = s
          }, {
            "./glyph": 6
          }
        ],
        8: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              for (var e = new ArrayBuffer(t.length), r = new Uint8Array(e), n = 0; n < t.length; n += 1)
                r[n] = t[n];
              return e
            }
            function i(e, r) {
              var i = t("fs");
              i.readFile(e, function(t, e) {
                return t
                  ? r(t.message)
                  : void r(null, n(e))
              })
            }
            function o(t, e) {
              var r = new XMLHttpRequest;
              r.open("get", t, !0),
              r.responseType = "arraybuffer",
              r.onload = function() {
                return 200 !== r.status
                  ? e("Font could not be loaded: " + r.statusText)
                  : e(null, r.response)
              },
              r.send()
            }
            function s(t) {
              var e,
                r,
                n,
                i,
                o,
                s,
                a,
                c = new u.Font,
                p = new DataView(t, 0),
                R = l.getFixed(p, 0);
              if (1 === R)
                c.outlinesFormat = "truetype";
              else {
                if (R = l.getTag(p, 0), "OTTO" !== R)
                  throw new Error("Unsupported OpenType version " + R);
                c.outlinesFormat = "cff"
              }
              for (var E = l.getUShort(p, 4), C = 12, A = 0; A < E; A += 1) {
                var P = l.getTag(p, C),
                  I = l.getULong(p, C + 8);
                switch (P) {
                  case "cmap":
                    c.tables.cmap = f.parse(p, I),
                    c.encoding = new h.CmapEncoding(c.tables.cmap),
                    c.encoding || (c.supported = !1);
                    break;
                  case "head":
                    c.tables.head = y.parse(p, I),
                    c.unitsPerEm = c.tables.head.unitsPerEm,
                    e = c.tables.head.indexToLocFormat;
                    break;
                  case "hhea":
                    c.tables.hhea = v.parse(p, I),
                    c.ascender = c.tables.hhea.ascender,
                    c.descender = c.tables.hhea.descender,
                    c.numberOfHMetrics = c.tables.hhea.numberOfHMetrics;
                    break;
                  case "hmtx":
                    r = I;
                    break;
                  case "maxp":
                    c.tables.maxp = w.parse(p, I),
                    c.numGlyphs = c.tables.maxp.numGlyphs;
                    break;
                  case "name":
                    c.tables.name = S.parse(p, I),
                    c.familyName = c.tables.name.fontFamily,
                    c.styleName = c.tables.name.fontSubfamily;
                    break;
                  case "OS/2":
                    c.tables.os2 = M.parse(p, I);
                    break;
                  case "post":
                    c.tables.post = T.parse(p, I),
                    c.glyphNames = new h.GlyphNames(c.tables.post);
                    break;
                  case "glyf":
                    n = I;
                    break;
                  case "loca":
                    i = I;
                    break;
                  case "CFF ":
                    o = I;
                    break;
                  case "kern":
                    s = I;
                    break;
                  case "GPOS":
                    a = I
                }
                C += 16
              }
              if (n && i) {
                var O = 0 === e,
                  L = _.parse(p, i, c.numGlyphs, O);
                c.glyphs = m.parse(p, n, L, c),
                x.parse(p, r, c.numberOfHMetrics, c.numGlyphs, c.glyphs),
                h.addGlyphNames(c)
              } else
                o
                  ? (d.parse(p, o, c), h.addGlyphNames(c))
                  : c.supported = !1;
              return c.supported && (s
                ? c.kerningPairs = b.parse(p, s)
                : c.kerningPairs = {}, a && g.parse(p, a, c)),
              c
            }
            function a(t, e) {
              var r = "undefined" == typeof window,
                n = r
                  ? i
                  : o;
              n(t, function(t, r) {
                if (t)
                  return e(t);
                var n = s(r);
                return n.supported
                  ? e(null, n)
                  : e("Font is not supported (is this a Postscript font?)")
              })
            }
            var h = t("./encoding"),
              u = t("./font"),
              c = t("./glyph"),
              l = t("./parse"),
              p = t("./path"),
              f = t("./tables/cmap"),
              d = t("./tables/cff"),
              m = t("./tables/glyf"),
              g = t("./tables/gpos"),
              y = t("./tables/head"),
              v = t("./tables/hhea"),
              x = t("./tables/hmtx"),
              b = t("./tables/kern"),
              _ = t("./tables/loca"),
              w = t("./tables/maxp"),
              S = t("./tables/name"),
              M = t("./tables/os2"),
              T = t("./tables/post");
            r._parse = l,
            r.Font = u.Font,
            r.Glyph = c.Glyph,
            r.Path = p.Path,
            r.parse = s,
            r.load = a
          }, {
            "./encoding": 4,
            "./font": 5,
            "./glyph": 6,
            "./parse": 9,
            "./path": 10,
            "./tables/cff": 12,
            "./tables/cmap": 13,
            "./tables/glyf": 14,
            "./tables/gpos": 15,
            "./tables/head": 16,
            "./tables/hhea": 17,
            "./tables/hmtx": 18,
            "./tables/kern": 19,
            "./tables/loca": 20,
            "./tables/maxp": 21,
            "./tables/name": 22,
            "./tables/os2": 23,
            "./tables/post": 24,
            fs: 1
          }
        ],
        9: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              this.data = t,
              this.offset = e,
              this.relativeOffset = 0
            }
            r.getByte = function(t, e) {
              return t.getUint8(e)
            },
            r.getCard8 = r.getByte,
            r.getUShort = function(t, e) {
              return t.getUint16(e, !1)
            },
            r.getCard16 = r.getUShort,
            r.getShort = function(t, e) {
              return t.getInt16(e, !1)
            },
            r.getULong = function(t, e) {
              return t.getUint32(e, !1)
            },
            r.getFixed = function(t, e) {
              var r = t.getInt16(e, !1),
                n = t.getUint16(e + 2, !1);
              return r + n / 65535
            },
            r.getTag = function(t, e) {
              for (var r = "", n = e; n < e + 4; n += 1)
                r += String.fromCharCode(t.getInt8(n));
              return r
            },
            r.getOffset = function(t, e, r) {
              for (var n = 0, i = 0; i < r; i += 1)
                n <<= 8,
                n += t.getUint8(e + i);
              return n
            },
            r.getBytes = function(t, e, r) {
              for (var n = [], i = e; i < r; i += 1)
                n.push(t.getUint8(i));
              return n
            },
            r.bytesToString = function(t) {
              for (var e = "", r = 0; r < t.length; r += 1)
                e += String.fromCharCode(t[r]);
              return e
            };
            var i = {
              "byte": 1,
              uShort: 2,
              "short": 2,
              uLong: 4,
              fixed: 4,
              longDateTime: 8,
              tag: 4
            };
            n.prototype.parseByte = function() {
              var t = this.data.getUint8(this.offset + this.relativeOffset);
              return this.relativeOffset += 1,
              t
            },
            n.prototype.parseChar = function() {
              var t = this.data.getInt8(this.offset + this.relativeOffset);
              return this.relativeOffset += 1,
              t
            },
            n.prototype.parseCard8 = n.prototype.parseByte,
            n.prototype.parseUShort = function() {
              var t = this.data.getUint16(this.offset + this.relativeOffset);
              return this.relativeOffset += 2,
              t
            },
            n.prototype.parseCard16 = n.prototype.parseUShort,
            n.prototype.parseSID = n.prototype.parseUShort,
            n.prototype.parseOffset16 = n.prototype.parseUShort,
            n.prototype.parseShort = function() {
              var t = this.data.getInt16(this.offset + this.relativeOffset);
              return this.relativeOffset += 2,
              t
            },
            n.prototype.parseF2Dot14 = function() {
              var t = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
              return this.relativeOffset += 2,
              t
            },
            n.prototype.parseULong = function() {
              var t = r.getULong(this.data, this.offset + this.relativeOffset);
              return this.relativeOffset += 4,
              t
            },
            n.prototype.parseFixed = function() {
              var t = r.getFixed(this.data, this.offset + this.relativeOffset);
              return this.relativeOffset += 4,
              t
            },
            n.prototype.parseOffset16List = n.prototype.parseUShortList = function(t) {
              for (var e = new Array(t), n = this.data, i = this.offset + this.relativeOffset, o = 0; o < t; o++)
                e[o] = r.getUShort(n, i),
                i += 2;
              return this.relativeOffset += 2 * t,
              e
            },
            n.prototype.parseString = function(t) {
              var e = this.data,
                r = this.offset + this.relativeOffset,
                n = "";
              this.relativeOffset += t;
              for (var i = 0; i < t; i++)
                n += String.fromCharCode(e.getUint8(r + i));
              return n
            },
            n.prototype.parseTag = function() {
              return this.parseString(4)
            },
            n.prototype.parseLongDateTime = function() {
              var t = r.getULong(this.data, this.offset + this.relativeOffset + 4);
              return this.relativeOffset += 8,
              t
            },
            n.prototype.parseFixed = function() {
              var t = r.getULong(this.data, this.offset + this.relativeOffset);
              return this.relativeOffset += 4,
              t / 65536
            },
            n.prototype.parseVersion = function() {
              var t = r.getUShort(this.data, this.offset + this.relativeOffset),
                e = r.getUShort(this.data, this.offset + this.relativeOffset + 2);
              return this.relativeOffset += 4,
              t + e / 4096 / 10
            },
            n.prototype.skip = function(t, e) {
              void 0 === e && (e = 1),
              this.relativeOffset += i[t] * e
            },
            r.Parser = n
          }, {}
        ],
        10: [
          function(t, e, r) {
            "use strict";
            function n() {
              this.commands = [],
              this.fill = "black",
              this.stroke = null,
              this.strokeWidth = 1
            }
            n.prototype.moveTo = function(t, e) {
              this.commands.push({type: "M", x: t, y: e})
            },
            n.prototype.lineTo = function(t, e) {
              this.commands.push({type: "L", x: t, y: e})
            },
            n.prototype.curveTo = n.prototype.bezierCurveTo = function(t, e, r, n, i, o) {
              this.commands.push({
                type: "C",
                x1: t,
                y1: e,
                x2: r,
                y2: n,
                x: i,
                y: o
              })
            },
            n.prototype.quadTo = n.prototype.quadraticCurveTo = function(t, e, r, n) {
              this.commands.push({type: "Q", x1: t, y1: e, x: r, y: n})
            },
            n.prototype.close = n.prototype.closePath = function() {
              this.commands.push({type: "Z"})
            },
            n.prototype.extend = function(t) {
              t.commands && (t = t.commands),
              Array.prototype.push.apply(this.commands, t)
            },
            n.prototype.draw = function(t) {
              t.beginPath();
              for (var e = 0; e < this.commands.length; e += 1) {
                var r = this.commands[e];
                "M" === r.type
                  ? t.moveTo(r.x, r.y)
                  : "L" === r.type
                    ? t.lineTo(r.x, r.y)
                    : "C" === r.type
                      ? t.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)
                      : "Q" === r.type
                        ? t.quadraticCurveTo(r.x1, r.y1, r.x, r.y)
                        : "Z" === r.type && t.closePath()
              }
              this.fill && (t.fillStyle = this.fill, t.fill()),
              this.stroke && (t.strokeStyle = this.stroke, t.lineWidth = this.strokeWidth, t.stroke())
            },
            n.prototype.toPathData = function(t) {
              function e(e) {
                return Math.round(e) === e
                  ? "" + Math.round(e)
                  : e.toFixed(t)
              }
              function r() {
                for (var t = "", r = 0; r < arguments.length; r += 1) {
                  var n = arguments[r];
                  n >= 0 && r > 0 && (t += " "),
                  t += e(n)
                }
                return t
              }
              t = void 0 !== t
                ? t
                : 2;
              for (var n = "", i = 0; i < this.commands.length; i += 1) {
                var o = this.commands[i];
                "M" === o.type
                  ? n += "M" + r(o.x, o.y)
                  : "L" === o.type
                    ? n += "L" + r(o.x, o.y)
                    : "C" === o.type
                      ? n += "C" + r(o.x1, o.y1, o.x2, o.y2, o.x, o.y)
                      : "Q" === o.type
                        ? n += "Q" + r(o.x1, o.y1, o.x, o.y)
                        : "Z" === o.type && (n += "Z")
              }
              return n
            },
            n.prototype.toSVG = function(t) {
              var e = '<path d="';
              return e += this.toPathData(t),
              e += '"',
              this.fill & "black" !== this.fill && (e += null === this.fill
                ? ' fill="none"'
                : ' fill="' + this.fill + '"'),
              this.stroke && (e += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'),
              e += "/>"
            },
            r.Path = n
          }, {}
        ],
        11: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r) {
              var n;
              for (n = 0; n < e.length; n += 1) {
                var i = e[n];
                this[i.name] = i.value
              }
              if (this.tableName = t, this.fields = e, r) {
                var o = Object.keys(r);
                for (n = 0; n < o.length; n += 1) {
                  var s = o[n],
                    a = r[s];
                  void 0 !== this[s] && (this[s] = a)
                }
              }
            }
            var i = t("./check"),
              o = t("./types").encode,
              s = t("./types").sizeOf;
            n.prototype.sizeOf = function() {
              for (var t = 0, e = 0; e < this.fields.length; e += 1) {
                var r = this.fields[e],
                  n = this[r.name];
                if (void 0 === n && (n = r.value), "function" == typeof n.sizeOf)
                  t += n.sizeOf();
                else {
                  var o = s[r.type];
                  i.assert("function" == typeof o, "Could not find sizeOf function for field" + r.name),
                  t += o(n)
                }
              }
              return t
            },
            n.prototype.encode = function() {
              return o.TABLE(this)
            },
            r.Table = n
          }, {
            "./check": 2,
            "./types": 26
          }
        ],
        12: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              if (t === e)
                return !0;
              if (Array.isArray(t) && Array.isArray(e)) {
                if (t.length !== e.length)
                  return !1;
                for (var r = 0; r < t.length; r += 1)
                  if (!n(t[r], e[r]))
                    return !1;
              return !0
              }
              return !1
            }
            function i(t, e, r) {
              var n,
                i,
                o,
                s = [],
                a = [],
                h = D.getCard16(t, e);
              if (0 !== h) {
                var u = D.getByte(t, e + 2);
                i = e + (h + 1) * u + 2;
                var c = e + 3;
                for (n = 0; n < h + 1; n += 1)
                  s.push(D.getOffset(t, c, u)),
                  c += u;
                o = i + s[h]
              } else
                o = e + 2;
              for (n = 0; n < s.length - 1; n += 1) {
                var l = D.getBytes(t, i + s[n], i + s[n + 1]);
                r && (l = r(l)),
                a.push(l)
              }
              return {objects: a, startOffset: e, endOffset: o}
            }
            function o(t) {
              for (var e = "", r = 15, n = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                ".",
                "E",
                "E-",
                null,
                "-"
              ];;) {
                var i = t.parseByte(),
                  o = i >> 4,
                  s = 15 & i;
                if (o === r)
                  break;
                if (e += n[o], s === r)
                  break;
                e += n[s]
              }
              return parseFloat(e)
            }
            function s(t, e) {
              var r,
                n,
                i,
                s;
              if (28 === e)
                return r = t.parseByte(),
                n = t.parseByte(),
                r << 8 | n;
              if (29 === e)
                return r = t.parseByte(),
                n = t.parseByte(),
                i = t.parseByte(),
                s = t.parseByte(),
                r << 24 | n << 16 | i << 8 | s;
              if (30 === e)
                return o(t);
              if (e >= 32 && e <= 246)
                return e - 139;
              if (e >= 247 && e <= 250)
                return r = t.parseByte(),
                256 * (e - 247) + r + 108;
              if (e >= 251 && e <= 254)
                return r = t.parseByte(),
                256 * -(e - 251) - r - 108;
              throw new Error("Invalid b0 " + e)
            }
            function a(t) {
              for (var e = {}, r = 0; r < t.length; r += 1) {
                var n,
                  i = t[r][0],
                  o = t[r][1];
                if (n = 1 === o.length
                  ? o[0]
                  : o, e.hasOwnProperty(i))
                  throw new Error("Object " + e + " already has key " + i);
                e[i] = n
              }
              return e
            }
            function h(t, e, r) {
              e = void 0 !== e
                ? e
                : 0;
              var n = new D.Parser(t, e),
                i = [],
                o = [];
              for (r = void 0 !== r
                ? r
                : t.length; n.relativeOffset < r;) {
                var h = n.parseByte();
                h <= 21
                  ? (12 === h && (h = 1200 + n.parseByte()), i.push([h, o]), o = [])
                  : o.push(s(n, h))
              }
              return a(i)
            }
            function u(t, e) {
              return e = e <= 390
                ? L.cffStandardStrings[e]
                : t[e - 391]
            }
            function c(t, e, r) {
              for (var n = {}, i = 0; i < e.length; i += 1) {
                var o = e[i],
                  s = t[o.op];
                void 0 === s && (s = void 0 !== o.value
                  ? o.value
                  : null),
                "SID" === o.type && (s = u(r, s)),
                n[o.name] = s
              }
              return n
            }
            function l(t, e) {
              var r = {};
              return r.formatMajor = D.getCard8(t, e),
              r.formatMinor = D.getCard8(t, e + 1),
              r.size = D.getCard8(t, e + 2),
              r.offsetSize = D.getCard8(t, e + 3),
              r.startOffset = e,
              r.endOffset = e + 4,
              r
            }
            function p(t, e) {
              var r = h(t, 0, t.byteLength);
              return c(r, U, e)
            }
            function f(t, e, r, n) {
              var i = h(t, e, r);
              return c(i, B, n)
            }
            function d(t, e, r, n) {
              var i,
                o,
                s,
                a = new D.Parser(t, e);
              r -= 1;
              var h = [".notdef"],
                c = a.parseCard8();
              if (0 === c)
                for (i = 0; i < r; i += 1)
                  o = a.parseSID(),
                  h.push(u(n, o));
                else if (1 === c)
                  for (; h.length <= r;)
                    for (o = a.parseSID(), s = a.parseCard8(), i = 0; i <= s; i += 1)
                      h.push(u(n, o)),
                      o += 1;
            else {
                if (2 !== c)
                  throw new Error("Unknown charset format " + c);
                for (; h.length <= r;)
                  for (o = a.parseSID(), s = a.parseCard16(), i = 0; i <= s; i += 1)
                    h.push(u(n, o)),
                    o += 1
              }
              return h
            }
            function m(t, e, r) {
              var n,
                i,
                o = {},
                s = new D.Parser(t, e),
                a = s.parseCard8();
              if (0 === a) {
                var h = s.parseCard8();
                for (n = 0; n < h; n += 1)
                  i = s.parseCard8(),
                  o[i] = n
              } else {
                if (1 !== a)
                  throw new Error("Unknown encoding format " + a);
                var u = s.parseCard8();
                for (i = 1, n = 0; n < u; n += 1)
                  for (var c = s.parseCard8(), l = s.parseCard8(), p = c; p <= c + l; p += 1)
                    o[p] = i,
                    i += 1
              }
              return new L.CffEncoding(o, r)
            }
            function g(t, e, r) {
              function n(t, e) {
                m && c.closePath(),
                c.moveTo(t, e),
                m = !0
              }
              function i() {
                var e;
                e = l.length % 2 !== 0,
                e && !f && (d = l.shift() + t.nominalWidthX),
                p += l.length >> 1,
                l.length = 0,
                f = !0
              }
              function o(r) {
                for (var v, x, b, _, w, S, M, T, R, E, C, A, P = 0; P < r.length;) {
                  var I = r[P];
                  switch (P += 1, I) {
                    case 1:
                      i();
                      break;
                    case 3:
                      i();
                      break;
                    case 4:
                      l.length > 1 && !f && (d = l.shift() + t.nominalWidthX, f = !0),
                      y += l.pop(),
                      n(g, y);
                      break;
                    case 5:
                      for (; l.length > 0;)
                        g += l.shift(),
                        y += l.shift(),
                        c.lineTo(g, y);
                      break;
                    case 6:
                      for (; l.length > 0 && (g += l.shift(), c.lineTo(g, y), 0 !== l.length);)
                        y += l.shift(),
                        c.lineTo(g, y);
                      break;
                    case 7:
                      for (; l.length > 0 && (y += l.shift(), c.lineTo(g, y), 0 !== l.length);)
                        g += l.shift(),
                        c.lineTo(g, y);
                      break;
                    case 8:
                      for (; l.length > 0;)
                        s = g + l.shift(),
                        a = y + l.shift(),
                        h = s + l.shift(),
                        u = a + l.shift(),
                        g = h + l.shift(),
                        y = u + l.shift(),
                        c.curveTo(s, a, h, u, g, y);
                      break;
                    case 10:
                      w = l.pop() + t.subrsBias,
                      S = t.subrs[w],
                      S && o(S);
                      break;
                    case 11:
                      return;
                    case 12:
                      switch (I = r[P], P += 1, I) {
                        case 35:
                          s = g + l.shift(),
                          a = y + l.shift(),
                          h = s + l.shift(),
                          u = a + l.shift(),
                          M = h + l.shift(),
                          T = u + l.shift(),
                          R = M + l.shift(),
                          E = T + l.shift(),
                          C = R + l.shift(),
                          A = E + l.shift(),
                          g = C + l.shift(),
                          y = A + l.shift(),
                          l.shift(),
                          c.curveTo(s, a, h, u, M, T),
                          c.curveTo(R, E, C, A, g, y);
                          break;
                        case 34:
                          s = g + l.shift(),
                          a = y,
                          h = s + l.shift(),
                          u = a + l.shift(),
                          M = h + l.shift(),
                          T = u,
                          R = M + l.shift(),
                          E = u,
                          C = R + l.shift(),
                          A = y,
                          g = C + l.shift(),
                          c.curveTo(s, a, h, u, M, T),
                          c.curveTo(R, E, C, A, g, y);
                          break;
                        case 36:
                          s = g + l.shift(),
                          a = y + l.shift(),
                          h = s + l.shift(),
                          u = a + l.shift(),
                          M = h + l.shift(),
                          T = u,
                          R = M + l.shift(),
                          E = u,
                          C = R + l.shift(),
                          A = E + l.shift(),
                          g = C + l.shift(),
                          c.curveTo(s, a, h, u, M, T),
                          c.curveTo(R, E, C, A, g, y);
                          break;
                        case 37:
                          s = g + l.shift(),
                          a = y + l.shift(),
                          h = s + l.shift(),
                          u = a + l.shift(),
                          M = h + l.shift(),
                          T = u + l.shift(),
                          R = M + l.shift(),
                          E = T + l.shift(),
                          C = R + l.shift(),
                          A = E + l.shift(),
                          Math.abs(C - g) > Math.abs(A - y)
                            ? g = C + l.shift()
                            : y = A + l.shift(),
                          c.curveTo(s, a, h, u, M, T),
                          c.curveTo(R, E, C, A, g, y);
                          break;
                        default:
                          console.log("Glyph " + e.index + ": unknown operator 1200" + I),
                          l.length = 0
                      }
                      break;
                    case 14:
                      l.length > 0 && !f && (d = l.shift() + t.nominalWidthX, f = !0),
                      m && (c.closePath(), m = !1);
                      break;
                    case 18:
                      i();
                      break;
                    case 19:
                    case 20:
                      i(),
                      P += p + 7 >> 3;
                      break;
                    case 21:
                      l.length > 2 && !f && (d = l.shift() + t.nominalWidthX, f = !0),
                      y += l.pop(),
                      g += l.pop(),
                      n(g, y);
                      break;
                    case 22:
                      l.length > 1 && !f && (d = l.shift() + t.nominalWidthX, f = !0),
                      g += l.pop(),
                      n(g, y);
                      break;
                    case 23:
                      i();
                      break;
                    case 24:
                      for (; l.length > 2;)
                        s = g + l.shift(),
                        a = y + l.shift(),
                        h = s + l.shift(),
                        u = a + l.shift(),
                        g = h + l.shift(),
                        y = u + l.shift(),
                        c.curveTo(s, a, h, u, g, y);
                      g += l.shift(),
                      y += l.shift(),
                      c.lineTo(g, y);
                      break;
                    case 25:
                      for (; l.length > 6;)
                        g += l.shift(),
                        y += l.shift(),
                        c.lineTo(g, y);
                      s = g + l.shift(),
                      a = y + l.shift(),
                      h = s + l.shift(),
                      u = a + l.shift(),
                      g = h + l.shift(),
                      y = u + l.shift(),
                      c.curveTo(s, a, h, u, g, y);
                      break;
                    case 26:
                      for (l.length % 2 && (g += l.shift()); l.length > 0;)
                        s = g,
                        a = y + l.shift(),
                        h = s + l.shift(),
                        u = a + l.shift(),
                        g = h,
                        y = u + l.shift(),
                        c.curveTo(s, a, h, u, g, y);
                      break;
                    case 27:
                      for (l.length % 2 && (y += l.shift()); l.length > 0;)
                        s = g + l.shift(),
                        a = y,
                        h = s + l.shift(),
                        u = a + l.shift(),
                        g = h + l.shift(),
                        y = u,
                        c.curveTo(s, a, h, u, g, y);
                      break;
                    case 28:
                      v = r[P],
                      x = r[P + 1],
                      l.push((v << 24 | x << 16) >> 16),
                      P += 2;
                      break;
                    case 29:
                      w = l.pop() + t.gsubrsBias,
                      S = t.gsubrs[w],
                      S && o(S);
                      break;
                    case 30:
                      for (; l.length > 0 && (s = g, a = y + l.shift(), h = s + l.shift(), u = a + l.shift(), g = h + l.shift(), y = u + (1 === l.length
                        ? l.shift()
                        : 0), c.curveTo(s, a, h, u, g, y), 0 !== l.length);)
                        s = g + l.shift(),
                        a = y,
                        h = s + l.shift(),
                        u = a + l.shift(),
                        y = u + l.shift(),
                        g = h + (1 === l.length
                          ? l.shift()
                          : 0),
                        c.curveTo(s, a, h, u, g, y);
                      break;
                    case 31:
                      for (; l.length > 0 && (s = g + l.shift(), a = y, h = s + l.shift(), u = a + l.shift(), y = u + l.shift(), g = h + (1 === l.length
                        ? l.shift()
                        : 0), c.curveTo(s, a, h, u, g, y), 0 !== l.length);)
                        s = g,
                        a = y + l.shift(),
                        h = s + l.shift(),
                        u = a + l.shift(),
                        g = h + l.shift(),
                        y = u + (1 === l.length
                          ? l.shift()
                          : 0),
                        c.curveTo(s, a, h, u, g, y);
                      break;
                    default:
                      I < 32
                        ? console.log("Glyph " + e.index + ": unknown operator " + I)
                        : I < 247
                          ? l.push(I - 139)
                          : I < 251
                            ? (v = r[P], P += 1, l.push(256 * (I - 247) + v + 108))
                            : I < 255
                              ? (v = r[P], P += 1, l.push(256 * -(I - 251) - v - 108))
                              : (v = r[P], x = r[P + 1], b = r[P + 2], _ = r[P + 3], P += 4, l.push((v << 24 | x << 16 | b << 8 | _) / 65536))
                  }
                }
              }
              var s,
                a,
                h,
                u,
                c = new F.Path,
                l = [],
                p = 0,
                f = !1,
                d = t.defaultWidthX,
                m = !1,
                g = 0,
                y = 0;
              return o(r),
              e.advanceWidth = d,
              c
            }
            function y(t) {
              var e;
              return e = t.length < 1240
                ? 107
                : t.length < 33900
                  ? 1131
                  : 32768
            }
            function v(t, e, r) {
              r.tables.cff = {};
              var n = l(t, e),
                o = i(t, n.endOffset, D.bytesToString),
                s = i(t, o.endOffset),
                a = i(t, s.endOffset, D.bytesToString),
                h = i(t, a.endOffset);
              r.gsubrs = h.objects,
              r.gsubrsBias = y(r.gsubrs);
              var u = new DataView(new Uint8Array(s.objects[0]).buffer),
                c = p(u, a.objects);
              r.tables.cff.topDict = c;
              var v = e + c["private"][1],
                x = f(t, v, c["private"][0], a.objects);
              if (r.defaultWidthX = x.defaultWidthX, r.nominalWidthX = x.nominalWidthX, 0 !== x.subrs) {
                var b = v + x.subrs,
                  _ = i(t, b);
                r.subrs = _.objects,
                r.subrsBias = y(r.subrs)
              } else
                r.subrs = [],
                r.subrsBias = 0;
              var w = i(t, e + c.charStrings);
              r.nGlyphs = w.objects.length;
              var S = d(t, e + c.charset, r.nGlyphs, a.objects);
              0 === c.encoding
                ? r.cffEncoding = new L.CffEncoding(L.cffStandardEncoding, S)
                : 1 === c.encoding
                  ? r.cffEncoding = new L.CffEncoding(L.cffExpertEncoding, S)
                  : r.cffEncoding = m(t, e + c.encoding, S),
              r.encoding = r.encoding || r.cffEncoding,
              r.glyphs = new N.GlyphSet(r);
              for (var M = 0; M < r.nGlyphs; M += 1) {
                var T = w.objects[M];
                r.glyphs.push(M, N.cffGlyphLoader(r, M, g, T))
              }
            }
            function x(t, e) {
              var r,
                n = L.cffStandardStrings.indexOf(t);
              return n >= 0 && (r = n),
              n = e.indexOf(t),
              n >= 0
                ? r = n + L.cffStandardStrings.length
                : (r = L.cffStandardStrings.length + e.length, e.push(t)),
              r
            }
            function b() {
              return new k.Table("Header", [
                {
                  name: "major",
                  type: "Card8",
                  value: 1
                }, {
                  name: "minor",
                  type: "Card8",
                  value: 0
                }, {
                  name: "hdrSize",
                  type: "Card8",
                  value: 4
                }, {
                  name: "major",
                  type: "Card8",
                  value: 1
                }
              ])
            }
            function _(t) {
              var e = new k.Table("Name INDEX", [
                {
                  name: "names",
                  type: "INDEX",
                  value: []
                }
              ]);
              e.names = [];
              for (var r = 0; r < t.length; r += 1)
                e.names.push({
                  name: "name_" + r,
                  type: "NAME",
                  value: t[r]
                });
              return e
            }
            function w(t, e, r) {
              for (var i = {}, o = 0; o < t.length; o += 1) {
                var s = t[o],
                  a = e[s.name];
                void 0 === a || n(a, s.value) || ("SID" === s.type && (a = x(a, r)), i[s.op] = {
                  name: s.name,
                  type: s.type,
                  value: a
                })
              }
              return i
            }
            function S(t, e) {
              var r = new k.Table("Top DICT", [
                {
                  name: "dict",
                  type: "DICT",
                  value: {}
                }
              ]);
              return r.dict = w(U, t, e),
              r
            }
            function M(t) {
              var e = new k.Table("Top DICT INDEX", [
                {
                  name: "topDicts",
                  type: "INDEX",
                  value: []
                }
              ]);
              return e.topDicts = [
                {
                  name: "topDict_0",
                  type: "TABLE",
                  value: t
                }
              ],
              e
            }
            function T(t) {
              var e = new k.Table("String INDEX", [
                {
                  name: "strings",
                  type: "INDEX",
                  value: []
                }
              ]);
              e.strings = [];
              for (var r = 0; r < t.length; r += 1)
                e.strings.push({
                  name: "string_" + r,
                  type: "STRING",
                  value: t[r]
                });
              return e
            }
            function R() {
              return new k.Table("Global Subr INDEX", [
                {
                  name: "subrs",
                  type: "INDEX",
                  value: []
                }
              ])
            }
            function E(t, e) {
              for (var r = new k.Table("Charsets", [
                {
                  name: "format",
                  type: "Card8",
                  value: 0
                }
              ]), n = 0; n < t.length; n += 1) {
                var i = t[n],
                  o = x(i, e);
                r.fields.push({
                  name: "glyph_" + n,
                  type: "SID",
                  value: o
                })
              }
              return r
            }
            function C(t) {
              var e = [],
                r = t.path;
              e.push({name: "width", type: "NUMBER", value: t.advanceWidth});
              for (var n = 0, i = 0, o = 0; o < r.commands.length; o += 1) {
                var s,
                  a,
                  h = r.commands[o];
                if ("Q" === h.type) {
                  var u = 1 / 3,
                    c = 2 / 3;
                  h = {
                    type: "C",
                    x: h.x,
                    y: h.y,
                    x1: *n + *h.x1,
                    y1: *i + *h.y1,
                    x2: *h.x + *h.x1,
                    y2: *h.y + *h.y1
                  }
                }
                if ("M" === h.type)
                  s = Math.round(h.x - n),
                  a = Math.round(h.y - i),
                  e.push({name: "dx", type: "NUMBER", value: s}),
                  e.push({name: "dy", type: "NUMBER", value: a}),
                  e.push({name: "rmoveto", type: "OP", value: 21}),
                  n = Math.round(h.x),
                  i = Math.round(h.y);
                else if ("L" === h.type)
                  s = Math.round(h.x - n),
                  a = Math.round(h.y - i),
                  e.push({name: "dx", type: "NUMBER", value: s}),
                  e.push({name: "dy", type: "NUMBER", value: a}),
                  e.push({name: "rlineto", type: "OP", value: 5}),
                  n = Math.round(h.x),
                  i = Math.round(h.y);
                else if ("C" === h.type) {
                  var l = Math.round(h.x1 - n),
                    p = Math.round(h.y1 - i),
                    f = Math.round(h.x2 - h.x1),
                    d = Math.round(h.y2 - h.y1);
                  s = Math.round(h.x - h.x2),
                  a = Math.round(h.y - h.y2),
                  e.push({name: "dx1", type: "NUMBER", value: l}),
                  e.push({name: "dy1", type: "NUMBER", value: p}),
                  e.push({name: "dx2", type: "NUMBER", value: f}),
                  e.push({name: "dy2", type: "NUMBER", value: d}),
                  e.push({name: "dx", type: "NUMBER", value: s}),
                  e.push({name: "dy", type: "NUMBER", value: a}),
                  e.push({name: "rrcurveto", type: "OP", value: 8}),
                  n = Math.round(h.x),
                  i = Math.round(h.y)
                }
              }
              return e.push({name: "endchar", type: "OP", value: 14}),
              e
            }
            function A(t) {
              for (var e = new k.Table("CharStrings INDEX", [
                {
                  name: "charStrings",
                  type: "INDEX",
                  value: []
                }
              ]), r = 0; r < t.length; r += 1) {
                var n = t.get(r),
                  i = C(n);
                e.charStrings.push({name: n.name, type: "CHARSTRING", value: i})
              }
              return e
            }
            function P(t, e) {
              var r = new k.Table("Private DICT", [
                {
                  name: "dict",
                  type: "DICT",
                  value: {}
                }
              ]);
              return r.dict = w(B, t, e),
              r
            }
            function I(t) {
              var e = new k.Table("Private DICT INDEX", [
                {
                  name: "privateDicts",
                  type: "INDEX",
                  value: []
                }
              ]);
              return e.privateDicts = [
                {
                  name: "privateDict_0",
                  type: "TABLE",
                  value: t
                }
              ],
              e
            }
            function O(t, e) {
              for (var r, n = new k.Table("CFF ", [
                {
                  name: "header",
                  type: "TABLE"
                }, {
                  name: "nameIndex",
                  type: "TABLE"
                }, {
                  name: "topDictIndex",
                  type: "TABLE"
                }, {
                  name: "stringIndex",
                  type: "TABLE"
                }, {
                  name: "globalSubrIndex",
                  type: "TABLE"
                }, {
                  name: "charsets",
                  type: "TABLE"
                }, {
                  name: "charStringsIndex",
                  type: "TABLE"
                }, {
                  name: "privateDictIndex",
                  type: "TABLE"
                }
              ]), i = 1 / e.unitsPerEm, o = {
                version: e.version,
                fullName: e.fullName,
                familyName: e.familyName,
                weight: e.weightName,
                fontMatrix: [
                  i,
                  0,
                  0,
                  i,
                  0,
                  0
                ],
                charset: 999,
                encoding: 0,
                charStrings: 999,
                "private": [0, 999]
              }, s = {}, a = [], h = 1; h < t.length; h += 1)
                r = t.get(h),
                a.push(r.name);
              var u = [];
              n.header = b(),
              n.nameIndex = _([e.postScriptName]);
              var c = S(o, u);
              n.topDictIndex = M(c),
              n.globalSubrIndex = R(),
              n.charsets = E(a, u),
              n.charStringsIndex = A(t);
              var l = P(s, u);
              n.privateDictIndex = I(l),
              n.stringIndex = T(u);
              var p = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
              return o.charset = p,
              o.encoding = 0,
              o.charStrings = o.charset + n.charsets.sizeOf(),
              o["private"][1] = o.charStrings + n.charStringsIndex.sizeOf(),
              c = S(o, u),
              n.topDictIndex = M(c),
              n
            }
            var L = t("../encoding"),
              N = t("../glyphset"),
              D = t("../parse"),
              F = t("../path"),
              k = t("../table"),
              U = [
                {
                  name: "version",
                  op: 0,
                  type: "SID"
                }, {
                  name: "notice",
                  op: 1,
                  type: "SID"
                }, {
                  name: "copyright",
                  op: 1200,
                  type: "SID"
                }, {
                  name: "fullName",
                  op: 2,
                  type: "SID"
                }, {
                  name: "familyName",
                  op: 3,
                  type: "SID"
                }, {
                  name: "weight",
                  op: 4,
                  type: "SID"
                }, {
                  name: "isFixedPitch",
                  op: 1201,
                  type: "number",
                  value: 0
                }, {
                  name: "italicAngle",
                  op: 1202,
                  type: "number",
                  value: 0
                }, {
                  name: "underlinePosition",
                  op: 1203,
                  type: "number",
                  value: -100
                }, {
                  name: "underlineThickness",
                  op: 1204,
                  type: "number",
                  value: 50
                }, {
                  name: "paintType",
                  op: 1205,
                  type: "number",
                  value: 0
                }, {
                  name: "charstringType",
                  op: 1206,
                  type: "number",
                  value: 2
                }, {
                  name: "fontMatrix",
                  op: 1207,
                  type: [
                    "real",
                    "real",
                    "real",
                    "real",
                    "real",
                    "real"
                  ],
                  value: [
                    .001,
                    0,
                    0,
                    .001,
                    0,
                    0
                  ]
                }, {
                  name: "uniqueId",
                  op: 13,
                  type: "number"
                }, {
                  name: "fontBBox",
                  op: 5,
                  type: [
                    "number", "number", "number", "number"
                  ],
                  value: [0, 0, 0, 0]
                }, {
                  name: "strokeWidth",
                  op: 1208,
                  type: "number",
                  value: 0
                }, {
                  name: "xuid",
                  op: 14,
                  type: [],
                  value: null
                }, {
                  name: "charset",
                  op: 15,
                  type: "offset",
                  value: 0
                }, {
                  name: "encoding",
                  op: 16,
                  type: "offset",
                  value: 0
                }, {
                  name: "charStrings",
                  op: 17,
                  type: "offset",
                  value: 0
                }, {
                  name: "private",
                  op: 18,
                  type: [
                    "number", "offset"
                  ],
                  value: [0, 0]
                }
              ],
              B = [
                {
                  name: "subrs",
                  op: 19,
                  type: "offset",
                  value: 0
                }, {
                  name: "defaultWidthX",
                  op: 20,
                  type: "number",
                  value: 0
                }, {
                  name: "nominalWidthX",
                  op: 21,
                  type: "number",
                  value: 0
                }
              ];
            r.parse = v,
            r.make = O
          }, {
            "../encoding": 4,
            "../glyphset": 7,
            "../parse": 9,
            "../path": 10,
            "../table": 11
          }
        ],
        13: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r,
                n = {};
              n.version = h.getUShort(t, e),
              a.argument(0 === n.version, "cmap table version should be 0."),
              n.numTables = h.getUShort(t, e + 2);
              var i = -1;
              for (r = 0; r < n.numTables; r += 1) {
                var o = h.getUShort(t, e + 4 + 8 * r),
                  s = h.getUShort(t, e + 4 + 8 * r + 2);
                if (3 === o && (1 === s || 0 === s)) {
                  i = h.getULong(t, e + 4 + 8 * r + 4);
                  break
                }
              }
              if (i === -1)
                return null;
              var u = new h.Parser(t, e + i);
              n.format = u.parseUShort(),
              a.argument(4 === n.format, "Only format 4 cmap tables are supported."),
              n.length = u.parseUShort(),
              n.language = u.parseUShort();
              var c;
              n.segCount = c = u.parseUShort() >> 1,
              u.skip("uShort", 3),
              n.glyphIndexMap = {};
              var l = new h.Parser(t, e + i + 14),
                p = new h.Parser(t, e + i + 16 + 2 * c),
                f = new h.Parser(t, e + i + 16 + 4 * c),
                d = new h.Parser(t, e + i + 16 + 6 * c),
                m = e + i + 16 + 8 * c;
              for (r = 0; r < c - 1; r += 1)
                for (var g, y = l.parseUShort(), v = p.parseUShort(), x = f.parseShort(), b = d.parseUShort(), _ = v; _ <= y; _ += 1)
                  0 !== b
                    ? (m = d.offset + d.relativeOffset - 2, m += b, m += 2 * (_ - v), g = h.getUShort(t, m), 0 !== g && (g = g + x & 65535))
                    : g = _ + x & 65535,
                  n.glyphIndexMap[_] = g;
            return n
            }
            function i(t, e, r) {
              t.segments.push({
                end: e,
                start: e,
                delta: -(e - r),
                offset: 0
              })
            }
            function o(t) {
              t.segments.push({end: 65535, start: 65535, delta: 1, offset: 0})
            }
            function s(t) {
              var e,
                r = new u.Table("cmap", [
                  {
                    name: "version",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "numTables",
                    type: "USHORT",
                    value: 1
                  }, {
                    name: "platformID",
                    type: "USHORT",
                    value: 3
                  }, {
                    name: "encodingID",
                    type: "USHORT",
                    value: 1
                  }, {
                    name: "offset",
                    type: "ULONG",
                    value: 12
                  }, {
                    name: "format",
                    type: "USHORT",
                    value: 4
                  }, {
                    name: "length",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "language",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "segCountX2",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "searchRange",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "entrySelector",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "rangeShift",
                    type: "USHORT",
                    value: 0
                  }
                ]);
              for (r.segments = [], e = 0; e < t.length; e += 1) {
                for (var n = t.get(e), s = 0; s < n.unicodes.length; s += 1)
                  i(r, n.unicodes[s], e);
                r.segments = r.segments.sort(function(t, e) {
                  return t.start - e.start
                })
              }
              o(r);
              var a;
              a = r.segments.length,
              r.segCountX2 = 2 * a,
              r.searchRange = 2 * Math.pow(2, Math.floor(Math.log(a) / Math.log(2))),
              r.entrySelector = Math.log(r.searchRange / 2) / Math.log(2),
              r.rangeShift = r.segCountX2 - r.searchRange;
              var h = [],
                c = [],
                l = [],
                p = [],
                f = [];
              for (e = 0; e < a; e += 1) {
                var d = r.segments[e];
                h = h.concat({
                  name: "end_" + e,
                  type: "USHORT",
                  value: d.end
                }),
                c = c.concat({
                  name: "start_" + e,
                  type: "USHORT",
                  value: d.start
                }),
                l = l.concat({
                  name: "idDelta_" + e,
                  type: "SHORT",
                  value: d.delta
                }),
                p = p.concat({
                  name: "idRangeOffset_" + e,
                  type: "USHORT",
                  value: d.offset
                }),
                void 0 !== d.glyphId && (f = f.concat({
                  name: "glyph_" + e,
                  type: "USHORT",
                  value: d.glyphId
                }))
              }
              return r.fields = r.fields.concat(h),
              r.fields.push({name: "reservedPad", type: "USHORT", value: 0}),
              r.fields = r.fields.concat(c),
              r.fields = r.fields.concat(l),
              r.fields = r.fields.concat(p),
              r.fields = r.fields.concat(f),
              r.length = 14 + 2 * h.length + 2 + 2 * c.length + 2 * l.length + 2 * p.length + 2 * f.length,
              r
            }
            var a = t("../check"),
              h = t("../parse"),
              u = t("../table");
            r.parse = n,
            r.make = s
          }, {
            "../check": 2,
            "../parse": 9,
            "../table": 11
          }
        ],
        14: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r, n, i) {
              var o;
              return (e & n) > 0
                ? (o = t.parseByte(), 0 === (e & i) && (o = -o), o = r + o)
                : o = (e & i) > 0
                  ? r
                  : r + t.parseShort(),
              o
            }
            function i(t, e, r) {
              var i = new p.Parser(e, r);
              t.numberOfContours = i.parseShort(),
              t.xMin = i.parseShort(),
              t.yMin = i.parseShort(),
              t.xMax = i.parseShort(),
              t.yMax = i.parseShort();
              var o,
                s;
              if (t.numberOfContours > 0) {
                var a,
                  h = t.endPointIndices = [];
                for (a = 0; a < t.numberOfContours; a += 1)
                  h.push(i.parseUShort());
                for (t.instructionLength = i.parseUShort(), t.instructions = [], a = 0; a < t.instructionLength; a += 1)
                  t.instructions.push(i.parseByte());
                var u = h[h.length - 1] + 1;
                for (o = [], a = 0; a < u; a += 1)
                  if (s = i.parseByte(), o.push(s), (8 & s) > 0)
                    for (var l = i.parseByte(), f = 0; f < l; f += 1)
                      o.push(s),
                      a += 1;
              if (c.argument(o.length === u, "Bad flags."), h.length > 0) {
                  var d,
                    m = [];
                  if (u > 0) {
                    for (a = 0; a < u; a += 1)
                      s = o[a],
                      d = {}
                    ,
                    d.onCurve = !!(1 & s),
                    d.lastPointOfContour = h.indexOf(a) >= 0,
                    m.push(d);
                    var g = 0;
                    for (a = 0; a < u; a += 1)
                      s = o[a],
                      d = m[a],
                      d.x = n(i, s, g, 2, 16),
                      g = d.x;
                    var y = 0;
                    for (a = 0; a < u; a += 1)
                      s = o[a],
                      d = m[a],
                      d.y = n(i, s, y, 4, 32),
                      y = d.y
                  }
                  t.points = m
                } else
                  t.points = []
              } else if (0 === t.numberOfContours)
                t.points = [];
              else {
                t.isComposite = !0,
                t.points = [],
                t.components = [];
                for (var v = !0; v;) {
                  o = i.parseUShort();
                  var x = {
                    glyphIndex: i.parseUShort(),
                    xScale: 1,
                    scale01: 0,
                    scale10: 0,
                    yScale: 1,
                    dx: 0,
                    dy: 0
                  };
                  (1 & o) > 0
                    ? (x.dx = i.parseShort(), x.dy = i.parseShort())
                    : (x.dx = i.parseChar(), x.dy = i.parseChar()),
                  (8 & o) > 0
                    ? x.xScale = x.yScale = i.parseF2Dot14()
                    : (64 & o) > 0
                      ? (x.xScale = i.parseF2Dot14(), x.yScale = i.parseF2Dot14())
                      : (128 & o) > 0 && (x.xScale = i.parseF2Dot14(), x.scale01 = i.parseF2Dot14(), x.scale10 = i.parseF2Dot14(), x.yScale = i.parseF2Dot14()),
                  t.components.push(x),
                  v = !!(32 & o)
                }
              }
            }
            function o(t, e) {
              for (var r = [], n = 0; n < t.length; n += 1) {
                var i = t[n],
                  o = {
                    x: e.*i.x + e.*i.y + e.dx,
                    y: e.*i.x + e.*i.y + e.dy,
                    onCurve: i.onCurve,
                    lastPointOfContour: i.lastPointOfContour
                  };
                r.push(o)
              }
              return r
            }
            function s(t) {
              for (var e = [], r = [], n = 0; n < t.length; n += 1) {
                var i = t[n];
                r.push(i),
                i.lastPointOfContour && (e.push(r), r = [])
              }
              return c.argument(0 === r.length, "There are still points left in the current contour."),
              e
            }
            function a(t) {
              var e = new f.Path;
              if (!t)
                return e;
              for (var r = s(t), n = 0; n < r.length; n += 1) {
                var i,
                  o,
                  a = r[n],
                  h = a[0],
                  u = a[a.length - 1];
                h.onCurve
                  ? (i = null, o = !0)
                  : (h = u.onCurve
                    ? u
                    : {
                      x: (h.x + u.x) / 2,
                      y: (h.y + u.y) / 2
                    }, i = h, o = !1),
                e.moveTo(h.x, h.y);
                for (var c = o
                  ? 1
                  : 0; c < a.length; c += 1) {
                  var l = a[c],
                    p = 0 === c
                      ? h
                      : a[c - 1];
                  if (p.onCurve && l.onCurve)
                    e.lineTo(l.x, l.y);
                  else if (p.onCurve && !l.onCurve)
                    i = l;
                  else if (p.onCurve || l.onCurve) {
                    if (p.onCurve || !l.onCurve)
                      throw new Error("Invalid state.");
                    e.quadraticCurveTo(i.x, i.y, l.x, l.y),
                    i = null
                  } else {
                    var d = {
                      x: (p.x + l.x) / 2,
                      y: (p.y + l.y) / 2
                    };
                    e.quadraticCurveTo(p.x, p.y, d.x, d.y),
                    i = l
                  }
                }
                h !== u && (i
                  ? e.quadraticCurveTo(i.x, i.y, h.x, h.y)
                  : e.lineTo(h.x, h.y))
              }
              return e.closePath(),
              e
            }
            function h(t, e) {
              if (e.isComposite)
                for (var r = 0; r < e.components.length; r += 1) {
                  var n = e.components[r],
                    i = t.get(n.glyphIndex);
                  if (i.points) {
                    var s = o(i.points, n);
                    e.points = e.points.concat(s)
                  }
                }
              return a(e.points)
            }
            function u(t, e, r, n) {
              var o,
                s = new l.GlyphSet(n);
              for (o = 0; o < r.length - 1; o += 1) {
                var a = r[o],
                  u = r[o + 1];
                a !== u
                  ? s.push(o, l.ttfGlyphLoader(n, o, i, t, e + a, h))
                  : s.push(o, l.glyphLoader(n, o))
              }
              return s
            }
            var c = t("../check"),
              l = t("../glyphset"),
              p = t("../parse"),
              f = t("../path");
            r.parse = u
          }, {
            "../check": 2,
            "../glyphset": 7,
            "../parse": 9,
            "../path": 10
          }
        ],
        15: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              for (var r = new c.Parser(t, e), n = r.parseUShort(), i = [], o = 0; o < n; o++)
                i[r.parseTag()] = {
                  offset: r.parseUShort()
                };
              return i
            }
            function i(t, e) {
              var r = new c.Parser(t, e),
                n = r.parseUShort(),
                i = r.parseUShort();
              if (1 === n)
                return r.parseUShortList(i);
              if (2 === n) {
                for (var o = []; i--;)
                  for (var s = r.parseUShort(), a = r.parseUShort(), h = r.parseUShort(), u = s; u <= a; u++)
                    o[h++] = u;
              return o
              }
            }
            function o(t, e) {
              var r = new c.Parser(t, e),
                n = r.parseUShort();
              if (1 === n) {
                var i = r.parseUShort(),
                  o = r.parseUShort(),
                  s = r.parseUShortList(o);
                return function(t) {
                  return s[t - i] || 0
                }
              }
              if (2 === n) {
                for (var a = r.parseUShort(), h = [], u = [], l = [], p = 0; p < a; p++)
                  h[p] = r.parseUShort(),
                  u[p] = r.parseUShort(),
                  l[p] = r.parseUShort();
                return function(t) {
                  for (var e = 0, r = h.length - 1; e < r;) {
                    var n = e + r + 1 >> 1;
                    t < h[n]
                      ? r = n - 1
                      : e = n
                  }
                  return h[e] <= t && t <= u[e]
                    ? l[e] || 0
                    : 0
                }
              }
            }
            function s(t, e) {
              var r,
                n,
                s = new c.Parser(t, e),
                a = s.parseUShort(),
                h = s.parseUShort(),
                u = i(t, e + h),
                l = s.parseUShort(),
                p = s.parseUShort();
              if (4 === l && 0 === p) {
                var f = {};
                if (1 === a) {
                  for (var d = s.parseUShort(), m = [], g = s.parseOffset16List(d), y = 0; y < d; y++) {
                    var v = g[y],
                      x = f[v];
                    if (!x) {
                      x = {},
                      s.relativeOffset = v;
                      for (var b = s.parseUShort(); b--;) {
                        var _ = s.parseUShort();
                        l && (r = s.parseShort()),
                        p && (n = s.parseShort()),
                        x[_] = r
                      }
                    }
                    m[u[y]] = x
                  }
                  return function(t, e) {
                    var r = m[t];
                    if (r)
                      return r[e]
                  }
                }
                if (2 === a) {
                  for (var w = s.parseUShort(), S = s.parseUShort(), M = s.parseUShort(), T = s.parseUShort(), R = o(t, e + w), E = o(t, e + S), C = [], A = 0; A < M; A++)
                    for (var P = C[A] = [], I = 0; I < T; I++)
                      l && (r = s.parseShort()),
                      p && (n = s.parseShort()),
                      P[I] = r;
                var O = {};
                  for (A = 0; A < u.length; A++)
                    O[u[A]] = 1;
                  return function(t, e) {
                    if (O[t]) {
                      var r = R(t),
                        n = E(e),
                        i = C[r];
                      return i
                        ? i[n]
                        : void 0
                    }
                  }
                }
              }
            }
            function a(t, e) {
              var r = new c.Parser(t, e),
                n = r.parseUShort(),
                i = r.parseUShort(),
                o = 16 & i,
                a = r.parseUShort(),
                h = r.parseOffset16List(a),
                u = {
                  lookupType: n,
                  lookupFlag: i,
                  markFilteringSet: o
                    ? r.parseUShort()
                    : -1
                };
              if (2 === n) {
                for (var l = [], p = 0; p < a; p++)
                  l.push(s(t, e + h[p]));
                u.getKerningValue = function(t, e) {
                  for (var r = l.length; r--;) {
                    var n = l[r](t, e);
                    if (void 0 !== n)
                      return n
                  }
                  return 0
                }
              }
              return u
            }
            function h(t, e, r) {
              var i = new c.Parser(t, e),
                o = i.parseFixed();
              u.argument(1 === o, "Unsupported GPOS table version."),
              n(t, e + i.parseUShort()),
              n(t, e + i.parseUShort());
              var s = i.parseUShort();
              i.relativeOffset = s;
              for (var h = i.parseUShort(), l = i.parseOffset16List(h), p = e + s, f = 0; f < h; f++) {
                var d = a(t, p + l[f]);
                2 !== d.lookupType || r.getGposKerningValue || (r.getGposKerningValue = d.getKerningValue)
              }
            }
            var u = t("../check"),
              c = t("../parse");
            r.parse = h
          }, {
            "../check": 2,
            "../parse": 9
          }
        ],
        16: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {},
                n = new s.Parser(t, e);
              return r.version = n.parseVersion(),
              r.fontRevision = Math.round(1e3 * n.parseFixed()) / 1e3,
              r.checkSumAdjustment = n.parseULong(),
              r.magicNumber = n.parseULong(),
              o.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."),
              r.flags = n.parseUShort(),
              r.unitsPerEm = n.parseUShort(),
              r.created = n.parseLongDateTime(),
              r.modified = n.parseLongDateTime(),
              r.xMin = n.parseShort(),
              r.yMin = n.parseShort(),
              r.xMax = n.parseShort(),
              r.yMax = n.parseShort(),
              r.macStyle = n.parseUShort(),
              r.lowestRecPPEM = n.parseUShort(),
              r.fontDirectionHint = n.parseShort(),
              r.indexToLocFormat = n.parseShort(),
              r.glyphDataFormat = n.parseShort(),
              r
            }
            function i(t) {
              return new a.Table("head", [
                {
                  name: "version",
                  type: "FIXED",
                  value: 65536
                }, {
                  name: "fontRevision",
                  type: "FIXED",
                  value: 65536
                }, {
                  name: "checkSumAdjustment",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "magicNumber",
                  type: "ULONG",
                  value: 1594834165
                }, {
                  name: "flags",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "unitsPerEm",
                  type: "USHORT",
                  value: 1e3
                }, {
                  name: "created",
                  type: "LONGDATETIME",
                  value: 0
                }, {
                  name: "modified",
                  type: "LONGDATETIME",
                  value: 0
                }, {
                  name: "xMin",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "yMin",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "xMax",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "yMax",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "macStyle",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "lowestRecPPEM",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "fontDirectionHint",
                  type: "SHORT",
                  value: 2
                }, {
                  name: "indexToLocFormat",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "glyphDataFormat",
                  type: "SHORT",
                  value: 0
                }
              ], t)
            }
            var o = t("../check"),
              s = t("../parse"),
              a = t("../table");
            r.parse = n,
            r.make = i
          }, {
            "../check": 2,
            "../parse": 9,
            "../table": 11
          }
        ],
        17: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {},
                n = new o.Parser(t, e);
              return r.version = n.parseVersion(),
              r.ascender = n.parseShort(),
              r.descender = n.parseShort(),
              r.lineGap = n.parseShort(),
              r.advanceWidthMax = n.parseUShort(),
              r.minLeftSideBearing = n.parseShort(),
              r.minRightSideBearing = n.parseShort(),
              r.xMaxExtent = n.parseShort(),
              r.caretSlopeRise = n.parseShort(),
              r.caretSlopeRun = n.parseShort(),
              r.caretOffset = n.parseShort(),
              n.relativeOffset += 8,
              r.metricDataFormat = n.parseShort(),
              r.numberOfHMetrics = n.parseUShort(),
              r
            }
            function i(t) {
              return new s.Table("hhea", [
                {
                  name: "version",
                  type: "FIXED",
                  value: 65536
                }, {
                  name: "ascender",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "descender",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "lineGap",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "advanceWidthMax",
                  type: "UFWORD",
                  value: 0
                }, {
                  name: "minLeftSideBearing",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "minRightSideBearing",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "xMaxExtent",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "caretSlopeRise",
                  type: "SHORT",
                  value: 1
                }, {
                  name: "caretSlopeRun",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "caretOffset",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "reserved1",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "reserved2",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "reserved3",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "reserved4",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "metricDataFormat",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "numberOfHMetrics",
                  type: "USHORT",
                  value: 0
                }
              ], t)
            }
            var o = t("../parse"),
              s = t("../table");
            r.parse = n,
            r.make = i
          }, {
            "../parse": 9,
            "../table": 11
          }
        ],
        18: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r, n, i) {
              for (var s, a, h = new o.Parser(t, e), u = 0; u < n; u += 1) {
                u < r && (s = h.parseUShort(), a = h.parseShort());
                var c = i.get(u);
                c.advanceWidth = s,
                c.leftSideBearing = a
              }
            }
            function i(t) {
              for (var e = new s.Table("hmtx", []), r = 0; r < t.length; r += 1) {
                var n = t.get(r),
                  i = n.advanceWidth || 0,
                  o = n.leftSideBearing || 0;
                e.fields.push({
                  name: "advanceWidth_" + r,
                  type: "USHORT",
                  value: i
                }),
                e.fields.push({
                  name: "leftSideBearing_" + r,
                  type: "SHORT",
                  value: o
                })
              }
              return e
            }
            var o = t("../parse"),
              s = t("../table");
            r.parse = n,
            r.make = i
          }, {
            "../parse": 9,
            "../table": 11
          }
        ],
        19: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {},
                n = new o.Parser(t, e),
                s = n.parseUShort();
              i.argument(0 === s, "Unsupported kern table version."),
              n.skip("uShort", 1);
              var a = n.parseUShort();
              i.argument(0 === a, "Unsupported kern sub-table version."),
              n.skip("uShort", 2);
              var h = n.parseUShort();
              n.skip("uShort", 3);
              for (var u = 0; u < h; u += 1) {
                var c = n.parseUShort(),
                  l = n.parseUShort(),
                  p = n.parseShort();
                r[c + "," + l] = p
              }
              return r
            }
            var i = t("../check"),
              o = t("../parse");
            r.parse = n
          }, {
            "../check": 2,
            "../parse": 9
          }
        ],
        20: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r, n) {
              for (var o = new i.Parser(t, e), s = n
                ? o.parseUShort
                : o.parseULong, a = [], h = 0; h < r + 1; h += 1) {
                var u = s.call(o);
                n && (u *= 2),
                a.push(u)
              }
              return a
            }
            var i = t("../parse");
            r.parse = n
          }, {
            "../parse": 9
          }
        ],
        21: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {},
                n = new o.Parser(t, e);
              return r.version = n.parseVersion(),
              r.numGlyphs = n.parseUShort(),
              1 === r.version && (r.maxPoints = n.parseUShort(), r.maxContours = n.parseUShort(), r.maxCompositePoints = n.parseUShort(), r.maxCompositeContours = n.parseUShort(), r.maxZones = n.parseUShort(), r.maxTwilightPoints = n.parseUShort(), r.maxStorage = n.parseUShort(), r.maxFunctionDefs = n.parseUShort(), r.maxInstructionDefs = n.parseUShort(), r.maxStackElements = n.parseUShort(), r.maxSizeOfInstructions = n.parseUShort(), r.maxComponentElements = n.parseUShort(), r.maxComponentDepth = n.parseUShort()),
              r
            }
            function i(t) {
              return new s.Table("maxp", [
                {
                  name: "version",
                  type: "FIXED",
                  value: 20480
                }, {
                  name: "numGlyphs",
                  type: "USHORT",
                  value: t
                }
              ])
            }
            var o = t("../parse"),
              s = t("../table");
            r.parse = n,
            r.make = i
          }, {
            "../parse": 9,
            "../table": 11
          }
        ],
        22: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {},
                n = new u.Parser(t, e);
              r.format = n.parseUShort();
              for (var i = n.parseUShort(), o = n.offset + n.parseUShort(), s = 0, a = 0; a < i; a++) {
                var h = n.parseUShort(),
                  c = n.parseUShort(),
                  p = n.parseUShort(),
                  f = n.parseUShort(),
                  d = l[f],
                  m = n.parseUShort(),
                  g = n.parseUShort();
                if (3 === h && 1 === c && 1033 === p) {
                  for (var y = [], v = m / 2, x = 0; x < v; x++, g += 2)
                    y[x] = u.getShort(t, o + g);
                  var b = String.fromCharCode.apply(null, y);
                  d
                    ? r[d] = b
                    : (s++, r["unknown" + s] = b)
                }
              }
              return 1 === r.format && (r.langTagCount = n.parseUShort()),
              r
            }
            function i(t, e, r, n, i, o) {
              return new c.Table("NameRecord", [
                {
                  name: "platformID",
                  type: "USHORT",
                  value: t
                }, {
                  name: "encodingID",
                  type: "USHORT",
                  value: e
                }, {
                  name: "languageID",
                  type: "USHORT",
                  value: r
                }, {
                  name: "nameID",
                  type: "USHORT",
                  value: n
                }, {
                  name: "length",
                  type: "USHORT",
                  value: i
                }, {
                  name: "offset",
                  type: "USHORT",
                  value: o
                }
              ])
            }
            function o(t, e, r, n) {
              var o = h.STRING(r);
              return t.records.push(i(1, 0, 0, e, o.length, n)),
              t.strings.push(o),
              n += o.length
            }
            function s(t, e, r, n) {
              var o = h.UTF16(r);
              return t.records.push(i(3, 1, 1033, e, o.length, n)),
              t.strings.push(o),
              n += o.length
            }
            function a(t) {
              var e = new c.Table("name", [
                {
                  name: "format",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "count",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "stringOffset",
                  type: "USHORT",
                  value: 0
                }
              ]);
              e.records = [],
              e.strings = [];
              var r,
                n,
                i = 0;
              for (r = 0; r < l.length; r += 1)
                void 0 !== t[l[r]] && (n = t[l[r]], i = o(e, r, n, i));
              for (r = 0; r < l.length; r += 1)
                void 0 !== t[l[r]] && (n = t[l[r]], i = s(e, r, n, i));
              for (e.count = e.records.length, e.stringOffset = 6 + 12 * e.count, r = 0; r < e.records.length; r += 1)
                e.fields.push({
                  name: "record_" + r,
                  type: "TABLE",
                  value: e.records[r]
                });
              for (r = 0; r < e.strings.length; r += 1)
                e.fields.push({
                  name: "string_" + r,
                  type: "LITERAL",
                  value: e.strings[r]
                });
              return e
            }
            var h = t("../types").encode,
              u = t("../parse"),
              c = t("../table"),
              l = [
                "copyright",
                "fontFamily",
                "fontSubfamily",
                "uniqueID",
                "fullName",
                "version",
                "postScriptName",
                "trademark",
                "manufacturer",
                "designer",
                "description",
                "manufacturerURL",
                "designerURL",
                "licence",
                "licenceURL",
                "reserved",
                "preferredFamily",
                "preferredSubfamily",
                "compatibleFullName",
                "sampleText",
                "postScriptFindFontName",
                "wwsFamily",
                "wwsSubfamily"
              ];
            r.parse = n,
            r.make = a
          }, {
            "../parse": 9,
            "../table": 11,
            "../types": 26
          }
        ],
        23: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              for (var e = 0; e < h.length; e += 1) {
                var r = h[e];
                if (t >= r.begin && t < r.end)
                  return e
              }
              return -1
            }
            function i(t, e) {
              var r = {},
                n = new s.Parser(t, e);
              r.version = n.parseUShort(),
              r.xAvgCharWidth = n.parseShort(),
              r.usWeightClass = n.parseUShort(),
              r.usWidthClass = n.parseUShort(),
              r.fsType = n.parseUShort(),
              r.ySubscriptXSize = n.parseShort(),
              r.ySubscriptYSize = n.parseShort(),
              r.ySubscriptXOffset = n.parseShort(),
              r.ySubscriptYOffset = n.parseShort(),
              r.ySuperscriptXSize = n.parseShort(),
              r.ySuperscriptYSize = n.parseShort(),
              r.ySuperscriptXOffset = n.parseShort(),
              r.ySuperscriptYOffset = n.parseShort(),
              r.yStrikeoutSize = n.parseShort(),
              r.yStrikeoutPosition = n.parseShort(),
              r.sFamilyClass = n.parseShort(),
              r.panose = [];
              for (var i = 0; i < 10; i++)
                r.panose[i] = n.parseByte();
              return r.ulUnicodeRange1 = n.parseULong(),
              r.ulUnicodeRange2 = n.parseULong(),
              r.ulUnicodeRange3 = n.parseULong(),
              r.ulUnicodeRange4 = n.parseULong(),
              r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()),
              r.fsSelection = n.parseUShort(),
              r.usFirstCharIndex = n.parseUShort(),
              r.usLastCharIndex = n.parseUShort(),
              r.sTypoAscender = n.parseShort(),
              r.sTypoDescender = n.parseShort(),
              r.sTypoLineGap = n.parseShort(),
              r.usWinAscent = n.parseUShort(),
              r.usWinDescent = n.parseUShort(),
              r.version >= 1 && (r.ulCodePageRange1 = n.parseULong(), r.ulCodePageRange2 = n.parseULong()),
              r.version >= 2 && (r.sxHeight = n.parseShort(), r.sCapHeight = n.parseShort(), r.usDefaultChar = n.parseUShort(), r.usBreakChar = n.parseUShort(), r.usMaxContent = n.parseUShort()),
              r
            }
            function o(t) {
              return new a.Table("OS/2", [
                {
                  name: "version",
                  type: "USHORT",
                  value: 3
                }, {
                  name: "xAvgCharWidth",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "usWeightClass",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usWidthClass",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "fsType",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "ySubscriptXSize",
                  type: "SHORT",
                  value: 650
                }, {
                  name: "ySubscriptYSize",
                  type: "SHORT",
                  value: 699
                }, {
                  name: "ySubscriptXOffset",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "ySubscriptYOffset",
                  type: "SHORT",
                  value: 140
                }, {
                  name: "ySuperscriptXSize",
                  type: "SHORT",
                  value: 650
                }, {
                  name: "ySuperscriptYSize",
                  type: "SHORT",
                  value: 699
                }, {
                  name: "ySuperscriptXOffset",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "ySuperscriptYOffset",
                  type: "SHORT",
                  value: 479
                }, {
                  name: "yStrikeoutSize",
                  type: "SHORT",
                  value: 49
                }, {
                  name: "yStrikeoutPosition",
                  type: "SHORT",
                  value: 258
                }, {
                  name: "sFamilyClass",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "bFamilyType",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bSerifStyle",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bWeight",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bProportion",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bContrast",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bStrokeVariation",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bArmStyle",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bLetterform",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bMidline",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "bXHeight",
                  type: "BYTE",
                  value: 0
                }, {
                  name: "ulUnicodeRange1",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "ulUnicodeRange2",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "ulUnicodeRange3",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "ulUnicodeRange4",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "achVendID",
                  type: "CHARARRAY",
                  value: "XXXX"
                }, {
                  name: "fsSelection",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usFirstCharIndex",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usLastCharIndex",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "sTypoAscender",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "sTypoDescender",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "sTypoLineGap",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "usWinAscent",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usWinDescent",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "ulCodePageRange1",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "ulCodePageRange2",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "sxHeight",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "sCapHeight",
                  type: "SHORT",
                  value: 0
                }, {
                  name: "usDefaultChar",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usBreakChar",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "usMaxContext",
                  type: "USHORT",
                  value: 0
                }
              ], t)
            }
            var s = t("../parse"),
              a = t("../table"),
              h = [
                {
                  begin: 0,
                  end: 127
                }, {
                  begin: 128,
                  end: 255
                }, {
                  begin: 256,
                  end: 383
                }, {
                  begin: 384,
                  end: 591
                }, {
                  begin: 592,
                  end: 687
                }, {
                  begin: 688,
                  end: 767
                }, {
                  begin: 768,
                  end: 879
                }, {
                  begin: 880,
                  end: 1023
                }, {
                  begin: 11392,
                  end: 11519
                }, {
                  begin: 1024,
                  end: 1279
                }, {
                  begin: 1328,
                  end: 1423
                }, {
                  begin: 1424,
                  end: 1535
                }, {
                  begin: 42240,
                  end: 42559
                }, {
                  begin: 1536,
                  end: 1791
                }, {
                  begin: 1984,
                  end: 2047
                }, {
                  begin: 2304,
                  end: 2431
                }, {
                  begin: 2432,
                  end: 2559
                }, {
                  begin: 2560,
                  end: 2687
                }, {
                  begin: 2688,
                  end: 2815
                }, {
                  begin: 2816,
                  end: 2943
                }, {
                  begin: 2944,
                  end: 3071
                }, {
                  begin: 3072,
                  end: 3199
                }, {
                  begin: 3200,
                  end: 3327
                }, {
                  begin: 3328,
                  end: 3455
                }, {
                  begin: 3584,
                  end: 3711
                }, {
                  begin: 3712,
                  end: 3839
                }, {
                  begin: 4256,
                  end: 4351
                }, {
                  begin: 6912,
                  end: 7039
                }, {
                  begin: 4352,
                  end: 4607
                }, {
                  begin: 7680,
                  end: 7935
                }, {
                  begin: 7936,
                  end: 8191
                }, {
                  begin: 8192,
                  end: 8303
                }, {
                  begin: 8304,
                  end: 8351
                }, {
                  begin: 8352,
                  end: 8399
                }, {
                  begin: 8400,
                  end: 8447
                }, {
                  begin: 8448,
                  end: 8527
                }, {
                  begin: 8528,
                  end: 8591
                }, {
                  begin: 8592,
                  end: 8703
                }, {
                  begin: 8704,
                  end: 8959
                }, {
                  begin: 8960,
                  end: 9215
                }, {
                  begin: 9216,
                  end: 9279
                }, {
                  begin: 9280,
                  end: 9311
                }, {
                  begin: 9312,
                  end: 9471
                }, {
                  begin: 9472,
                  end: 9599
                }, {
                  begin: 9600,
                  end: 9631
                }, {
                  begin: 9632,
                  end: 9727
                }, {
                  begin: 9728,
                  end: 9983
                }, {
                  begin: 9984,
                  end: 10175
                }, {
                  begin: 12288,
                  end: 12351
                }, {
                  begin: 12352,
                  end: 12447
                }, {
                  begin: 12448,
                  end: 12543
                }, {
                  begin: 12544,
                  end: 12591
                }, {
                  begin: 12592,
                  end: 12687
                }, {
                  begin: 43072,
                  end: 43135
                }, {
                  begin: 12800,
                  end: 13055
                }, {
                  begin: 13056,
                  end: 13311
                }, {
                  begin: 44032,
                  end: 55215
                }, {
                  begin: 55296,
                  end: 57343
                }, {
                  begin: 67840,
                  end: 67871
                }, {
                  begin: 19968,
                  end: 40959
                }, {
                  begin: 57344,
                  end: 63743
                }, {
                  begin: 12736,
                  end: 12783
                }, {
                  begin: 64256,
                  end: 64335
                }, {
                  begin: 64336,
                  end: 65023
                }, {
                  begin: 65056,
                  end: 65071
                }, {
                  begin: 65040,
                  end: 65055
                }, {
                  begin: 65104,
                  end: 65135
                }, {
                  begin: 65136,
                  end: 65279
                }, {
                  begin: 65280,
                  end: 65519
                }, {
                  begin: 65520,
                  end: 65535
                }, {
                  begin: 3840,
                  end: 4095
                }, {
                  begin: 1792,
                  end: 1871
                }, {
                  begin: 1920,
                  end: 1983
                }, {
                  begin: 3456,
                  end: 3583
                }, {
                  begin: 4096,
                  end: 4255
                }, {
                  begin: 4608,
                  end: 4991
                }, {
                  begin: 5024,
                  end: 5119
                }, {
                  begin: 5120,
                  end: 5759
                }, {
                  begin: 5760,
                  end: 5791
                }, {
                  begin: 5792,
                  end: 5887
                }, {
                  begin: 6016,
                  end: 6143
                }, {
                  begin: 6144,
                  end: 6319
                }, {
                  begin: 10240,
                  end: 10495
                }, {
                  begin: 40960,
                  end: 42127
                }, {
                  begin: 5888,
                  end: 5919
                }, {
                  begin: 66304,
                  end: 66351
                }, {
                  begin: 66352,
                  end: 66383
                }, {
                  begin: 66560,
                  end: 66639
                }, {
                  begin: 118784,
                  end: 119039
                }, {
                  begin: 119808,
                  end: 120831
                }, {
                  begin: 1044480,
                  end: 1048573
                }, {
                  begin: 65024,
                  end: 65039
                }, {
                  begin: 917504,
                  end: 917631
                }, {
                  begin: 6400,
                  end: 6479
                }, {
                  begin: 6480,
                  end: 6527
                }, {
                  begin: 6528,
                  end: 6623
                }, {
                  begin: 6656,
                  end: 6687
                }, {
                  begin: 11264,
                  end: 11359
                }, {
                  begin: 11568,
                  end: 11647
                }, {
                  begin: 19904,
                  end: 19967
                }, {
                  begin: 43008,
                  end: 43055
                }, {
                  begin: 65536,
                  end: 65663
                }, {
                  begin: 65856,
                  end: 65935
                }, {
                  begin: 66432,
                  end: 66463
                }, {
                  begin: 66464,
                  end: 66527
                }, {
                  begin: 66640,
                  end: 66687
                }, {
                  begin: 66688,
                  end: 66735
                }, {
                  begin: 67584,
                  end: 67647
                }, {
                  begin: 68096,
                  end: 68191
                }, {
                  begin: 119552,
                  end: 119647
                }, {
                  begin: 73728,
                  end: 74751
                }, {
                  begin: 119648,
                  end: 119679
                }, {
                  begin: 7040,
                  end: 7103
                }, {
                  begin: 7168,
                  end: 7247
                }, {
                  begin: 7248,
                  end: 7295
                }, {
                  begin: 43136,
                  end: 43231
                }, {
                  begin: 43264,
                  end: 43311
                }, {
                  begin: 43312,
                  end: 43359
                }, {
                  begin: 43520,
                  end: 43615
                }, {
                  begin: 65936,
                  end: 65999
                }, {
                  begin: 66e3,
                  end: 66047
                }, {
                  begin: 66208,
                  end: 66271
                }, {
                  begin: 127024,
                  end: 127135
                }
              ];
            r.unicodeRanges = h,
            r.getUnicodeRange = n,
            r.parse = i,
            r.make = o
          }, {
            "../parse": 9,
            "../table": 11
          }
        ],
        24: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r,
                n = {},
                i = new s.Parser(t, e);
              switch (n.version = i.parseVersion(), n.italicAngle = i.parseFixed(), n.underlinePosition = i.parseShort(), n.underlineThickness = i.parseShort(), n.isFixedPitch = i.parseULong(), n.minMemType42 = i.parseULong(), n.maxMemType42 = i.parseULong(), n.minMemType1 = i.parseULong(), n.maxMemType1 = i.parseULong(), n.version) {
                case 1:
                  n.names = o.standardNames.slice();
                  break;
                case 2:
                  for (n.numberOfGlyphs = i.parseUShort(), n.glyphNameIndex = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++)
                    n.glyphNameIndex[r] = i.parseUShort();
                  for (n.names = [], r = 0; r < n.numberOfGlyphs; r++)
                    if (n.glyphNameIndex[r] >= o.standardNames.length) {
                      var a = i.parseChar();
                      n.names.push(i.parseString(a))
                    }
                  break;
                case 2.5:
                  for (n.numberOfGlyphs = i.parseUShort(), n.offset = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++)
                    n.offset[r] = i.parseChar()
                }
              return n
            }
            function i() {
              return new a.Table("post", [
                {
                  name: "version",
                  type: "FIXED",
                  value: 196608
                }, {
                  name: "italicAngle",
                  type: "FIXED",
                  value: 0
                }, {
                  name: "underlinePosition",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "underlineThickness",
                  type: "FWORD",
                  value: 0
                }, {
                  name: "isFixedPitch",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "minMemType42",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "maxMemType42",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "minMemType1",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "maxMemType1",
                  type: "ULONG",
                  value: 0
                }
              ])
            }
            var o = t("../encoding"),
              s = t("../parse"),
              a = t("../table");
            r.parse = n,
            r.make = i
          }, {
            "../encoding": 4,
            "../parse": 9,
            "../table": 11
          }
        ],
        25: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              return Math.log(t) / Math.log(2) | 0
            }
            function i(t) {
              for (; t.length % 4 !== 0;)
                t.push(0);
              for (var e = 0, r = 0; r < t.length; r += 4)
                e += (t[r] << 24) + (t[r + 1] << 16) + (t[r + 2] << 8) + t[r + 3];
              return e %= Math.pow(2, 32)
            }
            function o(t, e, r, n) {
              return new l.Table("Table Record", [
                {
                  name: "tag",
                  type: "TAG",
                  value: void 0 !== t
                    ? t
                    : ""
                }, {
                  name: "checkSum",
                  type: "ULONG",
                  value: void 0 !== e
                    ? e
                    : 0
                }, {
                  name: "offset",
                  type: "ULONG",
                  value: void 0 !== r
                    ? r
                    : 0
                }, {
                  name: "length",
                  type: "ULONG",
                  value: void 0 !== n
                    ? n
                    : 0
                }
              ])
            }
            function s(t) {
              var e = new l.Table("sfnt", [
                {
                  name: "version",
                  type: "TAG",
                  value: "OTTO"
                }, {
                  name: "numTables",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "searchRange",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "entrySelector",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "rangeShift",
                  type: "USHORT",
                  value: 0
                }
              ]);
              e.tables = t,
              e.numTables = t.length;
              var r = Math.pow(2, n(e.numTables));
              e.searchRange = 16 * r,
              e.entrySelector = n(r),
              e.rangeShift = 16 * e.numTables - e.searchRange;
              for (var s = [], a = [], h = e.sizeOf() + o().sizeOf() * e.numTables; h % 4 !== 0;)
                h += 1,
                a.push({name: "padding", type: "BYTE", value: 0});
              for (var u = 0; u < t.length; u += 1) {
                var p = t[u];
                c.argument(4 === p.tableName.length, "Table name" + p.tableName + " is invalid.");
                var f = p.sizeOf(),
                  d = o(p.tableName, i(p.encode()), h, f);
                for (s.push({
                  name: d.tag + " Table Record",
                  type: "TABLE",
                  value: d
                }), a.push({
                  name: p.tableName + " table",
                  type: "TABLE",
                  value: p
                }), h += f, c.argument(!isNaN(h), "Something went wrong calculating the offset."); h % 4 !== 0;)
                  h += 1,
                  a.push({name: "padding", type: "BYTE", value: 0})
              }
              return s.sort(function(t, e) {
                return t.value.tag > e.value.tag
                  ? 1
                  : -1
              }),
              e.fields = e.fields.concat(s),
              e.fields = e.fields.concat(a),
              e
            }
            function a(t, e, r) {
              for (var n = 0; n < e.length; n += 1) {
                var i = t.charToGlyphIndex(e[n]);
                if (i > 0) {
                  var o = t.glyphs.get(i);
                  return o.getMetrics()
                }
              }
              return r
            }
            function h(t) {
              for (var e = 0, r = 0; r < t.length; r += 1)
                e += t[r];
              return e / t.length
            }
            function u(t) {
              for (var e, r = [], n = [], o = [], u = [], c = [], l = [], _ = [], w = 0, S = 0, M = 0, T = 0, R = 0, E = 0; E < t.glyphs.length; E += 1) {
                var C = t.glyphs.get(E),
                  A = 0 | C.unicode;
                (e > A || null === e) && (e = A),
                w < A && (w = A);
                var P = x.getUnicodeRange(A);
                if (P < 32)
                  S |= 1 << P;
                else if (P < 64)
                  M |= 1 << P - 32;
                else if (P < 96)
                  T |= 1 << P - 64;
                else {
                  if (!(P < 123))
                    throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                  R |= 1 << P - 96
                }
                if (".notdef" !== C.name) {
                  var I = C.getMetrics();
                  r.push(I.xMin),
                  n.push(I.yMin),
                  o.push(I.xMax),
                  u.push(I.yMax),
                  l.push(I.leftSideBearing),
                  _.push(I.rightSideBearing),
                  c.push(C.advanceWidth)
                }
              }
              var O = {
                xMin: Math.min.apply(null, r),
                yMin: Math.min.apply(null, n),
                xMax: Math.max.apply(null, o),
                yMax: Math.max.apply(null, u),
                advanceWidthMax: Math.max.apply(null, c),
                advanceWidthAvg: h(c),
                minLeftSideBearing: Math.min.apply(null, l),
                maxLeftSideBearing: Math.max.apply(null, l),
                minRightSideBearing: Math.min.apply(null, _)
              };
              O.ascender = void 0 !== t.ascender
                ? t.ascender
                : O.yMax,
              O.descender = void 0 !== t.descender
                ? t.descender
                : O.yMin;
              var L = d.make({unitsPerEm: t.unitsPerEm, xMin: O.xMin, yMin: O.yMin, xMax: O.xMax, yMax: O.yMax}),
                N = m.make({
                  ascender: O.ascender,
                  descender: O.descender,
                  advanceWidthMax: O.advanceWidthMax,
                  minLeftSideBearing: O.minLeftSideBearing,
                  minRightSideBearing: O.minRightSideBearing,
                  xMaxExtent: O.maxLeftSideBearing + (O.xMax - O.xMin),
                  numberOfHMetrics: t.glyphs.length
                }),
                D = y.make(t.glyphs.length),
                F = x.make({
                  xAvgCharWidth: Math.round(O.advanceWidthAvg),
                  usWeightClass: 500,
                  usWidthClass: 5,
                  usFirstCharIndex: e,
                  usLastCharIndex: w,
                  ulUnicodeRange1: S,
                  ulUnicodeRange2: M,
                  ulUnicodeRange3: T,
                  ulUnicodeRange4: R,
                  sTypoAscender: O.ascender,
                  sTypoDescender: O.descender,
                  sTypoLineGap: 0,
                  usWinAscent: O.ascender,
                  usWinDescent: -O.descender,
                  sxHeight: a(t, "xyvw", {yMax: 0}).yMax,
                  sCapHeight: a(t, "HIKLEFJMNTZBDPRAGOQSUVWXY", O).yMax,
                  usBreakChar: t.hasChar(" ")
                    ? 32
                    : 0
                }),
                k = g.make(t.glyphs),
                U = p.make(t.glyphs),
                B = t.familyName + " " + t.styleName,
                G = t.familyName.replace(/\s/g, "") + "-" + t.styleName,
                H = v.make({
                  copyright: t.copyright,
                  fontFamily: t.familyName,
                  fontSubfamily: t.styleName,
                  uniqueID: t.manufacturer + ":" + B,
                  fullName: B,
                  version: t.version,
                  postScriptName: G,
                  trademark: t.trademark,
                  manufacturer: t.manufacturer,
                  designer: t.designer,
                  description: t.description,
                  manufacturerURL: t.manufacturerURL,
                  designerURL: t.designerURL,
                  license: t.license,
                  licenseURL: t.licenseURL,
                  preferredFamily: t.familyName,
                  preferredSubfamily: t.styleName
                }),
                j = b.make(),
                V = f.make(t.glyphs, {
                  version: t.version,
                  fullName: B,
                  familyName: t.familyName,
                  weightName: t.styleName,
                  postScriptName: G,
                  unitsPerEm: t.unitsPerEm
                }),
                W = [
                  L,
                  N,
                  D,
                  F,
                  H,
                  U,
                  j,
                  V,
                  k
                ],
                X = s(W),
                q = X.encode(),
                z = i(q),
                Y = X.fields,
                Z = !1;
              for (E = 0; E < Y.length; E += 1)
                if ("head table" === Y[E].name) {
                  Y[E].value.checkSumAdjustment = 2981146554 - z,
                  Z = !0;
                  break
                }
              if (!Z)
                throw new Error("Could not find head table with checkSum to adjust.");
              return X
            }
            var c = t("../check"),
              l = t("../table"),
              p = t("./cmap"),
              f = t("./cff"),
              d = t("./head"),
              m = t("./hhea"),
              g = t("./hmtx"),
              y = t("./maxp"),
              v = t("./name"),
              x = t("./os2"),
              b = t("./post");
            r.computeCheckSum = i,
            r.make = s,
            r.fontToTable = u
          }, {
            "../check": 2,
            "../table": 11,
            "./cff": 12,
            "./cmap": 13,
            "./head": 16,
            "./hhea": 17,
            "./hmtx": 18,
            "./maxp": 21,
            "./name": 22,
            "./os2": 23,
            "./post": 24
          }
        ],
        26: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              return function() {
                return t
              }
            }
            var i = t("./check"),
              o = 32768,
              s = 2147483648,
              a = {},
              h = {},
              u = {};
            h.BYTE = function(t) {
              return i.argument(t >= 0 && t <= 255, "Byte value should be between 0 and 255."),
              [t]
            },
            u.BYTE = n(1),
            h.CHAR = function(t) {
              return [t.charCodeAt(0)]
            },
            u.BYTE = n(1),
            h.CHARARRAY = function(t) {
              for (var e = [], r = 0; r < t.length; r += 1)
                e.push(t.charCodeAt(r));
              return e
            },
            u.CHARARRAY = function(t) {
              return t.length
            },
            h.USHORT = function(t) {
              return [
                t >> 8 & 255,
                255 & t
              ]
            },
            u.USHORT = n(2),
            h.SHORT = function(t) {
              return t >= o && (t = -(2 * o - t)),
              [
                t >> 8 & 255,
                255 & t
              ]
            },
            u.SHORT = n(2),
            h.UINT24 = function(t) {
              return [
                t >> 16 & 255,
                t >> 8 & 255,
                255 & t
              ]
            },
            u.UINT24 = n(3),
            h.ULONG = function(t) {
              return [
                t >> 24 & 255,
                t >> 16 & 255,
                t >> 8 & 255,
                255 & t
              ]
            },
            u.ULONG = n(4),
            h.LONG = function(t) {
              return t >= s && (t = -(2 * s - t)),
              [
                t >> 24 & 255,
                t >> 16 & 255,
                t >> 8 & 255,
                255 & t
              ]
            },
            u.LONG = n(4),
            h.FIXED = h.ULONG,
            u.FIXED = u.ULONG,
            h.FWORD = h.SHORT,
            u.FWORD = u.SHORT,
            h.UFWORD = h.USHORT,
            u.UFWORD = u.USHORT,
            h.LONGDATETIME = function() {
              return [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            u.LONGDATETIME = n(8),
            h.TAG = function(t) {
              return i.argument(4 === t.length, "Tag should be exactly 4 ASCII characters."),
              [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]
            },
            u.TAG = n(4),
            h.Card8 = h.BYTE,
            u.Card8 = u.BYTE,
            h.Card16 = h.USHORT,
            u.Card16 = u.USHORT,
            h.OffSize = h.BYTE,
            u.OffSize = u.BYTE,
            h.SID = h.USHORT,
            u.SID = u.USHORT,
            h.NUMBER = function(t) {
              return t >= -107 && t <= 107
                ? [t + 139]
                : t >= 108 && t <= 1131
                  ? (t -= 108, [
                    (t >> 8) + 247,
                    255 & t
                  ])
                  : t >= -1131 && t <= -108
                    ? (t = -t - 108, [
                      (t >> 8) + 251,
                      255 & t
                    ])
                    : t >= -32768 && t <= 32767
                      ? h.NUMBER16(t)
                      : h.NUMBER32(t)
            },
            u.NUMBER = function(t) {
              return h.NUMBER(t).length
            },
            h.NUMBER16 = function(t) {
              return [
                28, t >> 8 & 255,
                255 & t
              ]
            },
            u.NUMBER16 = n(2),
            h.NUMBER32 = function(t) {
              return [
                29, t >> 24 & 255,
                t >> 16 & 255,
                t >> 8 & 255,
                255 & t
              ]
            },
            u.NUMBER32 = n(4),
            h.REAL = function(t) {
              var e = t.toString(),
                r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);
              if (r) {
                var n = parseFloat("1e" + ((r[2] ?+ r[2] : 0) + r[1].length));
                e = (Math.round(t * n) / n).toString()
              }
              var i,
                o,
                s = "";
              for (i = 0, o = e.length; i < o; i += 1) {
                var a = e[i];
                s += "e" === a
                  ? "-" === e[++i]
                    ? "c"
                    : "b"
                  : "." === a
                    ? "a"
                    : "-" === a
                      ? "e"
                      : a
              }
              s += 1 & s.length
                ? "f"
                : "ff";
              var h = [30];
              for (i = 0, o = s.length; i < o; i += 2)
                h.push(parseInt(s.substr(i, 2), 16));
              return h
            },
            u.REAL = function(t) {
              return h.REAL(t).length
            },
            h.NAME = h.CHARARRAY,
            u.NAME = u.CHARARRAY,
            h.STRING = h.CHARARRAY,
            u.STRING = u.CHARARRAY,
            h.UTF16 = function(t) {
              for (var e = [], r = 0; r < t.length; r += 1)
                e.push(0),
                e.push(t.charCodeAt(r));
              return e
            },
            u.UTF16 = function(t) {
              return 2 * t.length
            },
            h.INDEX = function(t) {
              var e,
                r = 1,
                n = [r],
                i = [],
                o = 0;
              for (e = 0; e < t.length; e += 1) {
                var s = h.OBJECT(t[e]);
                Array.prototype.push.apply(i, s),
                o += s.length,
                r += s.length,
                n.push(r)
              }
              if (0 === i.length)
                return [0, 0];
              var a = [],
                u = 1 + Math.floor(Math.log(o) / Math.log(2)) / 8 | 0,
                c = [void 0, h.BYTE, h.USHORT, h.UINT24, h.ULONG][u];
              for (e = 0; e < n.length; e += 1) {
                var l = c(n[e]);
                Array.prototype.push.apply(a, l)
              }
              return Array.prototype.concat(h.Card16(t.length), h.OffSize(u), a, i)
            },
            u.INDEX = function(t) {
              return h.INDEX(t).length
            },
            h.DICT = function(t) {
              for (var e = [], r = Object.keys(t), n = r.length, i = 0; i < n; i += 1) {
                var o = parseInt(r[i], 0),
                  s = t[o];
                e = e.concat(h.OPERAND(s.value, s.type)),
                e = e.concat(h.OPERATOR(o))
              }
              return e
            },
            u.DICT = function(t) {
              return h.DICT(t).length
            },
            h.OPERATOR = function(t) {
              return t < 1200
                ? [t]
                : [
                  12, t - 1200
                ]
            },
            h.OPERAND = function(t, e) {
              var r = [];
              if (Array.isArray(e))
                for (var n = 0; n < e.length; n += 1)
                  i.argument(t.length === e.length, "Not enough arguments given for type" + e),
                  r = r.concat(h.OPERAND(t[n], e[n]));
                else if ("SID" === e)
                  r = r.concat(h.NUMBER(t));
                else if ("offset" === e)
                  r = r.concat(h.NUMBER32(t));
                else if ("number" === e)
                  r = r.concat(h.NUMBER(t));
                else {
                  if ("real" !== e)
                    throw new Error("Unknown operand type " + e);
                  r = r.concat(h.REAL(t))
                }
              return r
            },
            h.OP = h.BYTE,
            u.OP = u.BYTE;
            var c = "function" == typeof WeakMap && new WeakMap;
            h.CHARSTRING = function(t) {
              if (c && c.has(t))
                return c.get(t);
              for (var e = [], r = t.length, n = 0; n < r; n += 1) {
                var i = t[n];
                e = e.concat(h[i.type](i.value))
              }
              return c && c.set(t, e),
              e
            },
            u.CHARSTRING = function(t) {
              return h.CHARSTRING(t).length
            },
            h.OBJECT = function(t) {
              var e = h[t.type];
              return i.argument(void 0 !== e, "No encoding function for type " + t.type),
              e(t.value)
            },
            h.TABLE = function(t) {
              for (var e = [], r = t.fields.length, n = 0; n < r; n += 1) {
                var o = t.fields[n],
                  s = h[o.type];
                i.argument(void 0 !== s, "No encoding function for field type " + o.type);
                var a = t[o.name];
                void 0 === a && (a = o.value);
                var u = s(a);
                e = e.concat(u)
              }
              return e
            },
            h.LITERAL = function(t) {
              return t
            },
            u.LITERAL = function(t) {
              return t.length
            },
            r.decode = a,
            r.encode = h,
            r.sizeOf = u
          }, {
            "./check": 2
          }
        ],
        27: [
          function(_dereq_, module, exports) {
            !function(t, e, r) {
              "undefined" != typeof module && module.exports
                ? module.exports = r()
                : "function" == typeof define && define.amd
                  ? define(r)
                  : e[t] = r()
            }("reqwest", this, function() {
              function succeed(t) {
                var e = protocolRe.exec(t.url);
                return e = e && e[1] || window.location.protocol,
                httpsRe.test(e)
                  ? twoHundo.test(t.request.status)
                  : !!t.request.response
              }
              function handleReadyState(t, e, r) {
                return function() {
                  return t._aborted
                    ? r(t.request)
                    : t._timedOut
                      ? r(t.request, "Request is aborted: timeout")
                      : void(t.request && 4 == t.request[readyState] && (t.request.onreadystatechange = noop, succeed(t)
                        ? e(t.request)
                        : r(t.request)))
                }
              }
              function setHeaders(t, e) {
                var r,
                  n = e.headers || {};
                n.Accept = n.Accept || defaultHeaders.accept[e.type] || defaultHeaders.accept["*"];
                var i = "function" == typeof FormData && e.data instanceof FormData;
                e.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
                n[contentType] || i || (n[contentType] = e.contentType || defaultHeaders.contentType);
                for (r in n)
                  n.hasOwnProperty(r) && "setRequestHeader" in t && t.setRequestHeader(r, n[r])
              }
              function setCredentials(t, e) {
                "undefined" != typeof e.withCredentials && "undefined" != typeof t.withCredentials && (t.withCredentials = !!e.withCredentials)
              }
              function generalCallback(t) {
                lastValue = t
              }
              function urlappend(t, e) {
                return t + (/\?/.test(t)
                  ? "&"
                  : "?") + e
              }
              function handleJsonp(t, e, r, n) {
                var i = uniqid++,
                  o = t.jsonpCallback || "callback",
                  s = t.jsonpCallbackName || reqwest.getcallbackPrefix(i),
                  a = new RegExp("((^|\\?|&)" + o + ")=([^&]+)"),
                  h = n.match(a),
                  u = doc.createElement("script"),
                  c = 0,
                  l = navigator.userAgent.indexOf("MSIE 10.0") !== -1;
                return h
                  ? "?" === h[3]
                    ? n = n.replace(a, "$1=" + s)
                    : s = h[3]
                  : n = urlappend(n, o + "=" + s),
                win[s] = generalCallback,
                u.type = "text/javascript",
                u.src = n,
                u.async = !0,
                "undefined" == typeof u.onreadystatechange || l || (u.htmlFor = u.id = "_reqwest_" + i),
                u.onload = u.onreadystatechange = function() {
                  return !(u[readyState] && "complete" !== u[readyState] && "loaded" !== u[readyState] || c) && (u.onload = u.onreadystatechange = null, u.onclick && u.onclick(), e(lastValue), lastValue = void 0, head.removeChild(u), void(c = 1))
                },
                head.appendChild(u), {
                  abort: function() {
                    u.onload = u.onreadystatechange = null,
                    r({}, "Request is aborted: timeout", {}),
                    lastValue = void 0,
                    head.removeChild(u),
                    c = 1
                  }
                }
              }
              function getRequest(t, e) {
                var r,
                  n = this.o,
                  i = (n.method || "GET").toUpperCase(),
                  o = "string" == typeof n
                    ? n
                    : n.url,
                  s = n.processData !== !1 && n.data && "string" != typeof n.data
                    ? reqwest.toQueryString(n.data)
                    : n.data || null,
                  a = !1;
                return "jsonp" != n.type && "GET" != i || !s || (o = urlappend(o, s), s = null),
                "jsonp" == n.type
                  ? handleJsonp(n, t, e, o)
                  : (r = n.xhr && n.xhr(n) || xhr(n), r.open(i, o, n.async !== !1), setHeaders(r, n), setCredentials(r, n), win[xDomainRequest] && r instanceof win[xDomainRequest]
                    ? (r.onload = t, r.onerror = e, r.onprogress = function() {},
                    a = !0)
                    : r.onreadystatechange = handleReadyState(this, t, e), n.before && n.before(r), a
                    ? setTimeout(function() {
                      r.send(s)
                    }, 200)
                    : r.send(s), r)
              }
              function Reqwest(t, e) {
                this.o = t,
                this.fn = e,
                init.apply(this, arguments)
              }
              function setType(t) {
                return t.match("json")
                  ? "json"
                  : t.match("javascript")
                    ? "js"
                    : t.match("text")
                      ? "html"
                      : t.match("xml")
                        ? "xml"
                        : void 0
              }
              function init(o, fn) {
                function complete(t) {
                  for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;)
                    self._completeHandlers.shift()(t)
                }
                function success(resp) {
                  var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                  resp = "jsonp" !== type
                    ? self.request
                    : resp;
                  var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                    r = filteredResponse;
                  try {
                    resp.responseText = r
                  } catch (e) {}
                  if (r)
                    switch (type) {
                      case "json":
                        try {
                          resp = win.JSON
                            ? win.JSON.parse(r)
                            : eval("(" + r + ")")
                        } catch (err) {
                          return error(resp, "Could not parse JSON in response", err)
                        }
                        break;
                      case "js":
                        resp = eval(r);
                        break;
                      case "html":
                        resp = r;
                        break;
                      case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason
                          ? null
                          : resp.responseXML
                    }
                  for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;)
                    resp = self._fulfillmentHandlers.shift()(resp);
                  complete(resp)
                }
                function timedOut() {
                  self._timedOut = !0,
                  self.request.abort()
                }
                function error(t, e, r) {
                  for (t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = r, self._erred = !0; self._errorHandlers.length > 0;)
                    self._errorHandlers.shift()(t, e, r);
                  complete(t)
                }
                this.url = "string" == typeof o
                  ? o
                  : o.url,
                this.timeout = null,
                this._fulfilled = !1,
                this._successHandler = function() {},
                this._fulfillmentHandlers = [],
                this._errorHandlers = [],
                this._completeHandlers = [],
                this._erred = !1,
                this._responseArgs = {};
                var self = this;
                fn = fn || function() {},
                o.timeout && (this.timeout = setTimeout(function() {
                  timedOut()
                }, o.timeout)),
                o.success && (this._successHandler = function() {
                  o.success.apply(o, arguments)
                }),
                o.error && this._errorHandlers.push(function() {
                  o.error.apply(o, arguments)
                }),
                o.complete && this._completeHandlers.push(function() {
                  o.complete.apply(o, arguments)
                }),
                this.request = getRequest.call(this, success, error)
              }
              function reqwest(t, e) {
                return new Reqwest(t, e)
              }
              function normalize(t) {
                return t
                  ? t.replace(/\r?\n/g, "\r\n")
                  : ""
              }
              function serial(t, e) {
                var r,
                  n,
                  i,
                  o,
                  s = t.name,
                  a = t.tagName.toLowerCase(),
                  h = function(t) {
                    t && !t.disabled && e(s, normalize(t.attributes.value && t.attributes.value.specified
                      ? t.value
                      : t.text))
                  };
                if (!t.disabled && s)
                  switch (a) {
                    case "input":
                      /reset|button|image|file/i.test(t.type) || (r = /checkbox/i.test(t.type), n = /radio/i.test(t.type), i = t.value, (!(r || n) || t.checked) && e(s, normalize(r && "" === i
                        ? "on"
                        : i)));
                      break;
                    case "textarea":
                      e(s, normalize(t.value));
                      break;
                    case "select":
                      if ("select-one" === t.type.toLowerCase())
                        h(t.selectedIndex >= 0
                          ? t.options[t.selectedIndex]
                          : null);
                      else
                        for (o = 0; t.length && o < t.length; o++)
                          t.options[o].selected && h(t.options[o])
                    }
                }
              function eachFormElement() {
                var t,
                  e,
                  r = this,
                  n = function(t, e) {
                    var n,
                      i,
                      o;
                    for (n = 0; n < e.length; n++)
                      for (o = t[byTag](e[n]), i = 0; i < o.length; i++)
                        serial(o[i], r)
                  };
                for (e = 0; e < arguments.length; e++)
                  t = arguments[e],
                  /input|select|textarea/i.test(t.tagName) && serial(t, r),
                  n(t, ["input", "select", "textarea"])
              }
              function serializeQueryString() {
                return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
              }
              function serializeHash() {
                var t = {};
                return eachFormElement.apply(function(e, r) {
                  e in t
                    ? (t[e] && !isArray(t[e]) && (t[e] = [t[e]]), t[e].push(r))
                    : t[e] = r
                }, arguments),
                t
              }
              function buildParams(t, e, r, n) {
                var i,
                  o,
                  s,
                  a = /\[\]$/;
                if (isArray(e))
                  for (o = 0; e && o < e.length; o++)
                    s = e[o],
                    r || a.test(t)
                      ? n(t, s)
                      : buildParams(t + "[" + ("object" == typeof s
                        ? o
                        : "") + "]", s, r, n);
                  else if (e && "[object Object]" === e.toString())
                    for (i in e)
                      buildParams(t + "[" + i + "]", e[i], r, n);
              else
                  n(t, e)
              }
              var win = window,
                doc = document,
                httpsRe = /^http/,
                protocolRe = /(^\w+):\/\//,
                twoHundo = /^(20\d|1223)$/,
                byTag = "getElementsByTagName",
                readyState = "readyState",
                contentType = "Content-Type",
                requestedWith = "X-Requested-With",
                head = doc[byTag]("head")[0],
                uniqid = 0,
                callbackPrefix = "reqwest_" + + new Date,
                lastValue,
                xmlHttpRequest = "XMLHttpRequest",
                xDomainRequest = "XDomainRequest",
                noop = function() {},
                isArray = "function" == typeof Array.isArray
                  ? Array.isArray
                  : function(t) {
                    return t instanceof Array
                  },
                defaultHeaders = {
                  contentType: "application/x-www-form-urlencoded",
                  requestedWith: xmlHttpRequest,
                  accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                  }
                },
                xhr = function(t) {
                  if (t.crossOrigin === !0) {
                    var e = win[xmlHttpRequest]
                      ? new XMLHttpRequest
                      : null;
                    if (e && "withCredentials" in e)
                      return e;
                    if (win[xDomainRequest])
                      return new XDomainRequest;
                    throw new Error("Browser does not support cross-origin requests")
                  }
                  return win[xmlHttpRequest]
                    ? new XMLHttpRequest
                    : new ActiveXObject("Microsoft.XMLHTTP")
                },
                globalSetupOptions = {
                  dataFilter: function(t) {
                    return t
                  }
                };
              return Reqwest.prototype = {
                abort: function() {
                  this._aborted = !0,
                  this.request.abort()
                },
                retry: function() {
                  init.call(this, this.o, this.fn)
                },
                then: function(t, e) {
                  return t = t || function() {},
                  e = e || function() {},
                  this._fulfilled
                    ? this._responseArgs.resp = t(this._responseArgs.resp)
                    : this._erred
                      ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
                      : (this._fulfillmentHandlers.push(t), this._errorHandlers.push(e)),
                  this
                },
                always: function(t) {
                  return this._fulfilled || this._erred
                    ? t(this._responseArgs.resp)
                    : this._completeHandlers.push(t),
                  this
                },
                fail: function(t) {
                  return this._erred
                    ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
                    : this._errorHandlers.push(t),
                  this
                },
                "catch": function(t) {
                  return this.fail(t)
                }
              },
              reqwest.serializeArray = function() {
                var t = [];
                return eachFormElement.apply(function(e, r) {
                  t.push({name: e, value: r})
                }, arguments),
                t
              },
              reqwest.serialize = function() {
                if (0 === arguments.length)
                  return "";
                var t,
                  e,
                  r = Array.prototype.slice.call(arguments, 0);
                return t = r.pop(),
                t && t.nodeType && r.push(t) && (t = null),
                t && (t = t.type),
                e = "map" == t
                  ? serializeHash
                  : "array" == t
                    ? reqwest.serializeArray
                    : serializeQueryString,
                e.apply(null, r)
              },
              reqwest.toQueryString = function(t, e) {
                var r,
                  n,
                  i = e || !1,
                  o = [],
                  s = encodeURIComponent,
                  a = function(t, e) {
                    e = "function" == typeof e
                      ? e()
                      : null == e
                        ? ""
                        : e,
                    o[o.length] = s(t) + "=" + s(e)
                  };
                if (isArray(t))
                  for (n = 0; t && n < t.length; n++)
                    a(t[n].name, t[n].value);
              else
                  for (r in t)
                    t.hasOwnProperty(r) && buildParams(r, t[r], i, a);
              return o.join("&").replace(/%20/g, "+")
              },
              reqwest.getcallbackPrefix = function() {
                return callbackPrefix
              },
              reqwest.compat = function(t, e) {
                return t && (t.type && (t.method = t.type) && delete t.type, t.dataType && (t.type = t.dataType), t.jsonpCallback && (t.jsonpCallbackName = t.jsonpCallback) && delete t.jsonpCallback, t.jsonp && (t.jsonpCallback = t.jsonp)),
                new Reqwest(t, e)
              },
              reqwest.ajaxSetup = function(t) {
                t = t || {};
                for (var e in t)
                  globalSetupOptions[e] = t[e]
              },
              reqwest
            })
          }, {}
        ],
        28: [
          function(t, e, r) {
            "use strict";
            var n = t("./core/core");
            t("./color/p5.Color"),
            t("./core/p5.Element"),
            t("./typography/p5.Font"),
            t("./core/p5.Graphics"),
            t("./core/p5.Renderer2D"),
            t("./image/p5.Image"),
            t("./math/p5.Vector"),
            t("./io/p5.TableRow"),
            t("./io/p5.Table"),
            t("./io/p5.XML"),
            t("./color/creating_reading"),
            t("./color/setting"),
            t("./core/constants"),
            t("./utilities/conversion"),
            t("./utilities/array_functions"),
            t("./utilities/string_functions"),
            t("./core/environment"),
            t("./image/image"),
            t("./image/loading_displaying"),
            t("./image/pixels"),
            t("./io/files"),
            t("./events/keyboard"),
            t("./events/acceleration"),
            t("./events/mouse"),
            t("./utilities/time_date"),
            t("./events/touch"),
            t("./math/math"),
            t("./math/calculation"),
            t("./math/random"),
            t("./math/noise"),
            t("./math/trigonometry"),
            t("./core/rendering"),
            t("./core/2d_primitives"),
            t("./core/attributes"),
            t("./core/curves"),
            t("./core/vertex"),
            t("./core/structure"),
            t("./core/transform"),
            t("./typography/attributes"),
            t("./typography/loading_displaying"),
            t("./webgl/p5.RendererGL"),
            t("./webgl/p5.Geometry"),
            t("./webgl/p5.RendererGL.Retained"),
            t("./webgl/p5.RendererGL.Immediate"),
            t("./webgl/primitives"),
            t("./webgl/loading"),
            t("./webgl/p5.Matrix"),
            t("./webgl/material"),
            t("./webgl/light"),
            t("./webgl/shader"),
            t("./webgl/camera"),
            t("./webgl/interaction");
            var i = function() {
              window.PHANTOMJS || window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !n.instance && new n
            };
            "complete" === document.readyState
              ? i()
              : window.addEventListener("load", i, !1),
            e.exports = n
          }, {
            "./color/creating_reading": 30,
            "./color/p5.Color": 31,
            "./color/setting": 32,
            "./core/2d_primitives": 33,
            "./core/attributes": 34,
            "./core/constants": 36,
            "./core/core": 37,
            "./core/curves": 38,
            "./core/environment": 39,
            "./core/p5.Element": 41,
            "./core/p5.Graphics": 42,
            "./core/p5.Renderer2D": 44,
            "./core/rendering": 45,
            "./core/structure": 47,
            "./core/transform": 48,
            "./core/vertex": 49,
            "./events/acceleration": 50,
            "./events/keyboard": 51,
            "./events/mouse": 52,
            "./events/touch": 53,
            "./image/image": 55,
            "./image/loading_displaying": 56,
            "./image/p5.Image": 57,
            "./image/pixels": 58,
            "./io/files": 59,
            "./io/p5.Table": 60,
            "./io/p5.TableRow": 61,
            "./io/p5.XML": 62,
            "./math/calculation": 63,
            "./math/math": 64,
            "./math/noise": 65,
            "./math/p5.Vector": 66,
            "./math/random": 68,
            "./math/trigonometry": 69,
            "./typography/attributes": 70,
            "./typography/loading_displaying": 71,
            "./typography/p5.Font": 72,
            "./utilities/array_functions": 73,
            "./utilities/conversion": 74,
            "./utilities/string_functions": 75,
            "./utilities/time_date": 76,
            "./webgl/camera": 77,
            "./webgl/interaction": 78,
            "./webgl/light": 79,
            "./webgl/loading": 80,
            "./webgl/material": 81,
            "./webgl/p5.Geometry": 82,
            "./webgl/p5.Matrix": 83,
            "./webgl/p5.RendererGL": 86,
            "./webgl/p5.RendererGL.Immediate": 84,
            "./webgl/p5.RendererGL.Retained": 85,
            "./webgl/primitives": 87,
            "./webgl/shader": 88
          }
        ],
        29: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.ColorConversion = {},
            n.ColorConversion._hsbaToHSLA = function(t) {
              var e = t[0],
                r = t[1],
                n = t[2],
                i = (2 - r) * n / 2;
              return 0 !== i && (1 === i
                ? r = 0
                : i < .5
                  ? r /= 2 - r
                  : r = r * n / (2 - 2 * i)),
              [e, r, i, t[3]]
            },
            n.ColorConversion._hsbaToRGBA = function(t) {
              var e = 6 * t[0],
                r = t[1],
                n = t[2],
                i = [];
              if (0 === r)
                i = [n, n, n, t[3]];
              else {
                var o,
                  s,
                  a,
                  h = Math.floor(e),
                  u = n * (1 - r),
                  c = n * (1 - r * (e - h)),
                  l = n * (1 - r * (1 + h - e));
                1 === h
                  ? (o = c, s = n, a = u)
                  : 2 === h
                    ? (o = u, s = n, a = l)
                    : 3 === h
                      ? (o = u, s = c, a = n)
                      : 4 === h
                        ? (o = l, s = u, a = n)
                        : 5 === h
                          ? (o = n, s = u, a = c)
                          : (o = n, s = l, a = u),
                i = [o, s, a, t[3]]
              }
              return i
            },
            n.ColorConversion._hslaToHSBA = function(t) {
              var e,
                r = t[0],
                n = t[1],
                i = t[2];
              return e = i < .5
                ? (1 + n) * i
                : i + n - i * n,
              n = 2 * (e - i) / e,
              [r, n, e, t[3]]
            },
            n.ColorConversion._hslaToRGBA = function(t) {
              var e = 6 * t[0],
                r = t[1],
                n = t[2],
                i = [];
              if (0 === r)
                i = [n, n, n, t[3]];
              else {
                var o;
                o = n < .5
                  ? (1 + r) * n
                  : n + r - n * r;
                var s = 2 * n - o,
                  a = function(t, e, r) {
                    return t < 0
                      ? t += 6
                      : t >= 6 && (t -= 6),
                    t < 1
                      ? e + (r - e) * t
                      : t < 3
                        ? r
                        : t < 4
                          ? e + (r - e) * (4 - t)
                          : e
                  };
                i = [
                  a(e + 2, s, o),
                  a(e, s, o),
                  a(e - 2, s, o),
                  t[3]
                ]
              }
              return i
            },
            n.ColorConversion._rgbaToHSBA = function(t) {
              var e,
                r,
                n = t[0],
                i = t[1],
                o = t[2],
                s = Math.max(n, i, o),
                a = s - Math.min(n, i, o);
              return 0 === a
                ? (e = 0, r = 0)
                : (r = a / s, n === s
                  ? e = (i - o) / a
                  : i === s
                    ? e = 2 + (o - n) / a
                    : o === s && (e = 4 + (n - i) / a), e < 0
                  ? e += 6
                  : e >= 6 && (e -= 6)),
              [
                e / 6,
                r,
                s,
                t[3]
              ]
            },
            n.ColorConversion._rgbaToHSLA = function(t) {
              var e,
                r,
                n = t[0],
                i = t[1],
                o = t[2],
                s = Math.max(n, i, o),
                a = Math.min(n, i, o),
                h = s + a,
                u = s - a;
              return 0 === u
                ? (e = 0, r = 0)
                : (r = h < 1
                  ? u / h
                  : u / (2 - u), n === s
                  ? e = (i - o) / u
                  : i === s
                    ? e = 2 + (o - n) / u
                    : o === s && (e = 4 + (n - i) / u), e < 0
                  ? e += 6
                  : e >= 6 && (e -= 6)),
              [
                e / 6,
                r,
                h / 2,
                t[3]
              ]
            },
            e.exports = n.ColorConversion
          }, {
            "../core/core": 37
          }
        ],
        30: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("../core/constants");
            t("./p5.Color"),
            n.prototype.alpha = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getAlpha();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.blue = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getBlue();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.brightness = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getBrightness();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.color = function() {
              return arguments[0]instanceof n.Color
                ? arguments[0]
                : arguments[0]instanceof Array
                  ? this instanceof n.Renderer
                    ? new n.Color(this, arguments[0])
                    : new n.Color(this._renderer, arguments[0])
                  : this instanceof n.Renderer
                    ? new n.Color(this, arguments)
                    : new n.Color(this._renderer, arguments)
            },
            n.prototype.green = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getGreen();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.hue = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getHue();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.lerpColor = function(t, e, r) {
              var n,
                o,
                s,
                a,
                h,
                u,
                c = this._renderer._colorMode,
                l = this._renderer._colorMaxes;
              if (c === i.RGB)
                h = t.levels.map(function(t) {
                  return t / 255
                }),
                u = e.levels.map(function(t) {
                  return t / 255
                });
              else if (c === i.HSB)
                t._getBrightness(),
                e._getBrightness(),
                h = t.hsba,
                u = e.hsba;
              else {
                if (c !== i.HSL)
                  throw new Error(c + "cannot be used for interpolation.");
                t._getLightness(),
                e._getLightness(),
                h = t.hsla,
                u = e.hsla
              }
              return r = Math.max(Math.min(r, 1), 0),
              n = this.lerp(h[0], u[0], r),
              o = this.lerp(h[1], u[1], r),
              s = this.lerp(h[2], u[2], r),
              a = this.lerp(h[3], u[3], r),
              n *= l[c][0],
              o *= l[c][1],
              s *= l[c][2],
              a *= l[c][3],
              this.color(n, o, s, a)
            },
            n.prototype.lightness = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getLightness();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.red = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getRed();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            n.prototype.saturation = function(t) {
              if (t instanceof n.Color || t instanceof Array)
                return this.color(t)._getSaturation();
              throw new Error("Needs p5.Color or pixel array as argument.")
            },
            e.exports = n
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "./p5.Color": 31
          }
        ],
        31: [
          function(t, e, r) {
            var n = t("../core/core"),
              i = t("../core/constants"),
              o = t("./color_conversion");
            n.Color = function(t, e) {
              if (this.mode = t._colorMode, this.maxes = t._colorMaxes, this.mode !== i.RGB && this.mode !== i.HSL && this.mode !== i.HSB)
                throw new Error(this.mode + " is an invalid colorMode.");
              return this._array = n.Color._parseInputs.apply(t, e),
              this.levels = this._array.map(function(t) {
                return Math.round(255 * t)
              }),
              this
            },
            n.Color.prototype.toString = function() {
              var t = this.levels,
                e = this._array[3];
              return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + e + ")"
            },
            n.Color.prototype._getAlpha = function() {
              return this._array[3] * this.maxes[this.mode][3]
            },
            n.Color.prototype._getBlue = function() {
              return this._array[2] * this.maxes[i.RGB][2]
            },
            n.Color.prototype._getBrightness = function() {
              return this.hsba || (this.hsba = o._rgbaToHSBA(this._array)),
              this.hsba[2] * this.maxes[i.HSB][2]
            },
            n.Color.prototype._getGreen = function() {
              return this._array[1] * this.maxes[i.RGB][1]
            },
            n.Color.prototype._getHue = function() {
              return this.mode === i.HSB
                ? (this.hsba || (this.hsba = o._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[i.HSB][0])
                : (this.hsla || (this.hsla = o._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[i.HSL][0])
            },
            n.Color.prototype._getLightness = function() {
              return this.hsla || (this.hsla = o._rgbaToHSLA(this._array)),
              this.hsla[2] * this.maxes[i.HSL][2]
            },
            n.Color.prototype._getRed = function() {
              return this._array[0] * this.maxes[i.RGB][0]
            },
            n.Color.prototype._getSaturation = function() {
              return this.mode === i.HSB
                ? (this.hsba || (this.hsba = o._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[i.HSB][1])
                : (this.hsla || (this.hsla = o._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[i.HSL][1])
            };
            var s = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
              },
              a = /\s*/,
              h = /(\d{1,3})/,
              u = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
              c = new RegExp(u.source + "%"),
              l = {
                HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
                HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
                RGB: new RegExp([
                  "^rgb\\(",
                  h.source,
                  ",",
                  h.source,
                  ",",
                  h.source,
                  "\\)$"
                ].join(a.source), "i"),
                RGB_PERCENT: new RegExp([
                  "^rgb\\(",
                  c.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  "\\)$"
                ].join(a.source), "i"),
                RGBA: new RegExp([
                  "^rgba\\(",
                  h.source,
                  ",",
                  h.source,
                  ",",
                  h.source,
                  ",",
                  u.source,
                  "\\)$"
                ].join(a.source), "i"),
                RGBA_PERCENT: new RegExp([
                  "^rgba\\(",
                  c.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  ",",
                  u.source,
                  "\\)$"
                ].join(a.source), "i"),
                HSL: new RegExp([
                  "^hsl\\(",
                  h.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  "\\)$"
                ].join(a.source), "i"),
                HSLA: new RegExp([
                  "^hsla\\(",
                  h.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  ",",
                  u.source,
                  "\\)$"
                ].join(a.source), "i"),
                HSB: new RegExp([
                  "^hsb\\(",
                  h.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  "\\)$"
                ].join(a.source), "i"),
                HSBA: new RegExp([
                  "^hsba\\(",
                  h.source,
                  ",",
                  c.source,
                  ",",
                  c.source,
                  ",",
                  u.source,
                  "\\)$"
                ].join(a.source), "i")
              };
            n.Color._parseInputs = function() {
              var t = arguments.length,
                e = this._colorMode,
                r = this._colorMaxes,
                a = [];
              if (t >= 3)
                return a[0] = arguments[0] / r[e][0],
                a[1] = arguments[1] / r[e][1],
                a[2] = arguments[2] / r[e][2],
                "number" == typeof arguments[3]
                  ? a[3] = arguments[3] / r[e][3]
                  : a[3] = 1,
                a = a.map(function(t) {
                  return Math.max(Math.min(t, 1), 0)
                }),
                e === i.HSL
                  ? o._hslaToRGBA(a)
                  : e === i.HSB
                    ? o._hsbaToRGBA(a)
                    : a;
              if (1 === t && "string" == typeof arguments[0]) {
                var h = arguments[0].trim().toLowerCase();
                if (s[h])
                  return n.Color._parseInputs.apply(this, [s[h]]);
                if (l.HEX3.test(h))
                  return a = l.HEX3.exec(h).slice(1).map(function(t) {
                    return parseInt(t + t, 16) / 255
                  }),
                  a[3] = 1,
                  a;
                if (l.HEX6.test(h))
                  return a = l.HEX6.exec(h).slice(1).map(function(t) {
                    return parseInt(t, 16) / 255
                  }),
                  a[3] = 1,
                  a;
                if (l.RGB.test(h))
                  return a = l.RGB.exec(h).slice(1).map(function(t) {
                    return t / 255
                  }),
                  a[3] = 1,
                  a;
                if (l.RGB_PERCENT.test(h))
                  return a = l.RGB_PERCENT.exec(h).slice(1).map(function(t) {
                    return parseFloat(t) / 100
                  }),
                  a[3] = 1,
                  a;
                if (l.RGBA.test(h))
                  return a = l.RGBA.exec(h).slice(1).map(function(t, e) {
                    return 3 === e
                      ? parseFloat(t)
                      : t / 255
                  });
                if (l.RGBA_PERCENT.test(h))
                  return a = l.RGBA_PERCENT.exec(h).slice(1).map(function(t, e) {
                    return 3 === e
                      ? parseFloat(t)
                      : parseFloat(t) / 100
                  });
                if (l.HSL.test(h)
                  ? (a = l.HSL.exec(h).slice(1).map(function(t, e) {
                    return 0 === e
                      ? parseInt(t, 10) / 360
                      : parseInt(t, 10) / 100
                  }), a[3] = 1)
                  : l.HSLA.test(h) && (a = l.HSLA.exec(h).slice(1).map(function(t, e) {
                    return 0 === e
                      ? parseInt(t, 10) / 360
                      : 3 === e
                        ? parseFloat(t)
                        : parseInt(t, 10) / 100
                  })), a.length)
                  return o._hslaToRGBA(a);
                if (l.HSB.test(h)
                  ? (a = l.HSB.exec(h).slice(1).map(function(t, e) {
                    return 0 === e
                      ? parseInt(t, 10) / 360
                      : parseInt(t, 10) / 100
                  }), a[3] = 1)
                  : l.HSBA.test(h) && (a = l.HSBA.exec(h).slice(1).map(function(t, e) {
                    return 0 === e
                      ? parseInt(t, 10) / 360
                      : 3 === e
                        ? parseFloat(t)
                        : parseInt(t, 10) / 100
                  })), a.length)
                  return o._hsbaToRGBA(a);
                a = [1, 1, 1, 1]
              } else {
                if (1 !== t && 2 !== t || "number" != typeof arguments[0])
                  throw new Error(arguments + "is not a valid color representation.");
                a[0] = arguments[0] / r[e][2],
                a[1] = arguments[0] / r[e][2],
                a[2] = arguments[0] / r[e][2],
                "number" == typeof arguments[1]
                  ? a[3] = arguments[1] / r[e][3]
                  : a[3] = 1,
                a = a.map(function(t) {
                  return Math.max(Math.min(t, 1), 0)
                })
              }
              return a
            },
            e.exports = n.Color
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "./color_conversion": 29
          }
        ],
        32: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("../core/constants");
            t("./p5.Color"),
            n.prototype.background = function() {
              return arguments[0]instanceof n.Image
                ? this.image(arguments[0], 0, 0, this.width, this.height)
                : this._renderer.background.apply(this._renderer, arguments),
              this
            },
            n.prototype.clear = function() {
              return this._renderer.clear(),
              this
            },
            n.prototype.colorMode = function() {
              if (arguments[0] === i.RGB || arguments[0] === i.HSB || arguments[0] === i.HSL) {
                this._renderer._colorMode = arguments[0];
                var t = this._renderer._colorMaxes[this._renderer._colorMode];
                2 === arguments.length
                  ? (t[0] = arguments[1], t[1] = arguments[1], t[2] = arguments[1], t[3] = arguments[1])
                  : 4 === arguments.length
                    ? (t[0] = arguments[1], t[1] = arguments[2], t[2] = arguments[3])
                    : 5 === arguments.length && (t[0] = arguments[1], t[1] = arguments[2], t[2] = arguments[3], t[3] = arguments[4])
              }
              return this
            },
            n.prototype.fill = function() {
              return this._renderer._setProperty("_fillSet", !0),
              this._renderer._setProperty("_doFill", !0),
              this._renderer.fill.apply(this._renderer, arguments),
              this
            },
            n.prototype.noFill = function() {
              return this._renderer._setProperty("_doFill", !1),
              this
            },
            n.prototype.noStroke = function() {
              return this._renderer._setProperty("_doStroke", !1),
              this
            },
            n.prototype.stroke = function() {
              return this._renderer._setProperty("_strokeSet", !0),
              this._renderer._setProperty("_doStroke", !0),
              this._renderer.stroke.apply(this._renderer, arguments),
              this
            },
            e.exports = n
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "./p5.Color": 31
          }
        ],
        33: [
          function(t, e, r) {
            "use strict";
            var n = t("./core"),
              i = t("./constants"),
              o = t("./canvas");
            t("./error_helpers"),
            n.prototype.arc = function(t, e, r, n, o, s, a) {
              for (var h = new Array(arguments.length), u = 0; u < h.length; ++u)
                h[u] = arguments[u];
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (this._angleMode === i.DEGREES && (o = this.radians(o), s = this.radians(s)); o < 0;)
                o += i.TWO_PI;
              for (; s < 0;)
                s += i.TWO_PI;
              return o %= i.TWO_PI,
              s %= i.TWO_PI,
              s === o && (s += i.TWO_PI),
              o = o <= i.HALF_PI
                ? Math.atan(r / n * Math.tan(o))
                : o > i.HALF_PI && o <= 3 * i.HALF_PI
                  ? Math.atan(r / n * Math.tan(o)) + i.PI
                  : Math.atan(r / n * Math.tan(o)) + i.TWO_PI,
              s = s <= i.HALF_PI
                ? Math.atan(r / n * Math.tan(s))
                : s > i.HALF_PI && s <= 3 * i.HALF_PI
                  ? Math.atan(r / n * Math.tan(s)) + i.PI
                  : Math.atan(r / n * Math.tan(s)) + i.TWO_PI,
              o > s && (s += i.TWO_PI),
              r = Math.abs(r),
              n = Math.abs(n),
              this._renderer.arc(t, e, r, n, o, s, a),
              this
            },
            n.prototype.ellipse = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              if (3 === t.length && t.push(t[2]), t[2] < 0 && (t[2] = Math.abs(t[2])), t[3] < 0 && (t[3] = Math.abs(t[3])), !this._renderer._doStroke && !this._renderer._doFill)
                return this;
              var r = o.modeAdjust(t[0], t[1], t[2], t[3], this._renderer._ellipseMode);
              return t[0] = r.x,
              t[1] = r.y,
              t[2] = r.w,
              t[3] = r.h,
              this._renderer.ellipse(t),
              this
            },
            n.prototype.line = function() {
              if (!this._renderer._doStroke)
                return this;
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.isP3D
                ? this._renderer.line(t[0], t[1], t[2], t[3], t[4], t[5])
                : this._renderer.line(t[0], t[1], t[2], t[3]),
              this
            },
            n.prototype.point = function() {
              if (!this._renderer._doStroke)
                return this;
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.isP3D
                ? this._renderer.point(t[0], t[1], t[2])
                : this._renderer.point(t[0], t[1]),
              this
            },
            n.prototype.quad = function() {
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.isP3D
                ? this._renderer.quad(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11])
                : this._renderer.quad(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
              this
            },
            n.prototype.rect = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              if (this._renderer._doStroke || this._renderer._doFill) {
                var r = o.modeAdjust(t[0], t[1], t[2], t[3], this._renderer._rectMode);
                return t[0] = r.x,
                t[1] = r.y,
                t[2] = r.w,
                t[3] = r.h,
                this._renderer.rect(t),
                this
              }
            },
            n.prototype.triangle = function() {
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.triangle(t),
              this
            },
            e.exports = n
          }, {
            "./canvas": 35,
            "./constants": 36,
            "./core": 37,
            "./error_helpers": 40
          }
        ],
        34: [
          function(t, e, r) {
            "use strict";
            var n = t("./core"),
              i = t("./constants");
            n.prototype.ellipseMode = function(t) {
              return t !== i.CORNER && t !== i.CORNERS && t !== i.RADIUS && t !== i.CENTER || (this._renderer._ellipseMode = t),
              this
            },
            n.prototype.noSmooth = function() {
              return this._renderer.noSmooth(),
              this
            },
            n.prototype.rectMode = function(t) {
              return t !== i.CORNER && t !== i.CORNERS && t !== i.RADIUS && t !== i.CENTER || (this._renderer._rectMode = t),
              this
            },
            n.prototype.smooth = function() {
              return this._renderer.smooth(),
              this
            },
            n.prototype.strokeCap = function(t) {
              return t !== i.ROUND && t !== i.SQUARE && t !== i.PROJECT || this._renderer.strokeCap(t),
              this
            },
            n.prototype.strokeJoin = function(t) {
              return t !== i.ROUND && t !== i.BEVEL && t !== i.MITER || this._renderer.strokeJoin(t),
              this
            },
            n.prototype.strokeWeight = function(t) {
              return this._renderer.strokeWeight(t),
              this
            },
            e.exports = n
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        35: [
          function(t, e, r) {
            var n = t("./constants");
            e.exports = {
              modeAdjust: function(t, e, r, i, o) {
                return o === n.CORNER
                  ? {
                    x: t,
                    y: e,
                    w: r,
                    h: i
                  }
                  : o === n.CORNERS
                    ? {
                      x: t,
                      y: e,
                      w: r - t,
                      h: i - e
                    }
                    : o === n.RADIUS
                      ? {
                        x: t - r,
                        y: e - i,
                        w: 2 *r,
                        h: 2 *i
                      }
                      : o === n.CENTER
                        ? {
                          x: t - .5 *r,
                          y: e - .5 *i,
                          w: r,
                          h: i
                        }
                        : void 0
              },
              arcModeAdjust: function(t, e, r, i, o) {
                return o === n.CORNER
                  ? {
                    x: t + .5 *r,
                    y: e + .5 *i,
                    w: r,
                    h: i
                  }
                  : o === n.CORNERS
                    ? {
                      x: t,
                      y: e,
                      w: r + t,
                      h: i + e
                    }
                    : o === n.RADIUS
                      ? {
                        x: t,
                        y: e,
                        w: 2 *r,
                        h: 2 *i
                      }
                      : o === n.CENTER
                        ? {
                          x: t,
                          y: e,
                          w: r,
                          h: i
                        }
                        : void 0
              }
            }
          }, {
            "./constants": 36
          }
        ],
        36: [
          function(t, e, r) {
            var n = Math.PI;
            e.exports = {
              P2D: "p2d",
              WEBGL: "webgl",
              ARROW: "default",
              CROSS: "crosshair",
              HAND: "pointer",
              MOVE: "move",
              TEXT: "text",
              WAIT: "wait",
              HALF_PI: n / 2,
              PI: n,
              QUARTER_PI: n / 4,
              TAU: 2 *n,
              TWO_PI: 2 *n,
              DEGREES: "degrees",
              RADIANS: "radians",
              CORNER: "corner",
              CORNERS: "corners",
              RADIUS: "radius",
              RIGHT: "right",
              LEFT: "left",
              CENTER: "center",
              TOP: "top",
              BOTTOM: "bottom",
              BASELINE: "alphabetic",
              POINTS: 0,
              LINES: 1,
              LINE_STRIP: 3,
              LINE_LOOP: 2,
              TRIANGLES: 4,
              TRIANGLE_FAN: 6,
              TRIANGLE_STRIP: 5,
              QUADS: "quads",
              QUAD_STRIP: "quad_strip",
              CLOSE: "close",
              OPEN: "open",
              CHORD: "chord",
              PIE: "pie",
              PROJECT: "square",
              SQUARE: "butt",
              ROUND: "round",
              BEVEL: "bevel",
              MITER: "miter",
              RGB: "rgb",
              HSB: "hsb",
              HSL: "hsl",
              AUTO: "auto",
              ALT: 18,
              BACKSPACE: 8,
              CONTROL: 17,
              DELETE: 46,
              DOWN_ARROW: 40,
              ENTER: 13,
              ESCAPE: 27,
              LEFT_ARROW: 37,
              OPTION: 18,
              RETURN: 13,
              RIGHT_ARROW: 39,
              SHIFT: 16,
              TAB: 9,
              UP_ARROW: 38,
              BLEND: "normal",
              ADD: "lighter",
              DARKEST: "darken",
              LIGHTEST: "lighten",
              DIFFERENCE: "difference",
              EXCLUSION: "exclusion",
              MULTIPLY: "multiply",
              SCREEN: "screen",
              REPLACE: "source-over",
              OVERLAY: "overlay",
              HARD_LIGHT: "hard-light",
              SOFT_LIGHT: "soft-light",
              DODGE: "color-dodge",
              BURN: "color-burn",
              THRESHOLD: "threshold",
              GRAY: "gray",
              OPAQUE: "opaque",
              INVERT: "invert",
              POSTERIZE: "posterize",
              DILATE: "dilate",
              ERODE: "erode",
              BLUR: "blur",
              NORMAL: "normal",
              ITALIC: "italic",
              BOLD: "bold",
              _DEFAULT_TEXT_FILL: "#000000",
              _DEFAULT_LEADMULT: 1.25,
              _CTX_MIDDLE: "middle",
              LINEAR: "linear",
              QUADRATIC: "quadratic",
              BEZIER: "bezier",
              CURVE: "curve",
              _DEFAULT_STROKE: "#000000",
              _DEFAULT_FILL: "#FFFFFF"
            }
          }, {}
        ],
        37: [
          function(t, e, r) {
            "use strict";
            t("./shim");
            var n = t("./constants"),
              i = function(t, e, r) {
                2 === arguments.length && "boolean" == typeof e && (r = e, e = void 0),
                this._setupDone = !1,
                this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1,
                this._userNode = e,
                this._curElement = null,
                this._elements = [],
                this._requestAnimId = 0,
                this._preloadCount = 0,
                this._isGlobal = !1,
                this._loop = !0,
                this._styles = [],
                this._defaultCanvasSize = {
                  width: 100,
                  height: 100
                },
                this._events = {
                  mousemove: null,
                  mousedown: null,
                  mouseup: null,
                  dragend: null,
                  dragover: null,
                  click: null,
                  mouseover: null,
                  mouseout: null,
                  keydown: null,
                  keyup: null,
                  keypress: null,
                  touchstart: null,
                  touchmove: null,
                  touchend: null,
                  resize: null,
                  blur: null
                },
                this._events.wheel = null,
                this._loadingScreenId = "p5_loading",
                window.DeviceOrientationEvent && (this._events.deviceorientation = null),
                window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null),
                this._start = function() {
                  this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode)),
                  this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, "p2d", !0);
                  var t = this.preload || window.preload;
                  if (t) {
                    var e = document.getElementById(this._loadingScreenId);
                    if (!e) {
                      e = document.createElement("div"),
                      e.innerHTML = "Loading...",
                      e.style.position = "absolute",
                      e.id = this._loadingScreenId;
                      var r = this._userNode || document.body;
                      r.appendChild(e)
                    }
                    for (var n in this._preloadMethods) {
                      this._preloadMethods[n] = this._preloadMethods[n] || i;
                      var o = this._preloadMethods[n];
                      o !== i.prototype && o !== i || (o = this._isGlobal
                        ? window
                        : this),
                      this._registeredPreloadMethods[n] = o[n],
                      o[n] = this._wrapPreload(o, n)
                    }
                    t(),
                    this._runIfPreloadsAreDone()
                  } else
                    this._setup(),
                    this._runFrames(),
                    this._draw()
                }.bind(this),
                this._runIfPreloadsAreDone = function() {
                  var t = this._isGlobal
                    ? window
                    : this;
                  if (0 === t._preloadCount) {
                    var e = document.getElementById(t._loadingScreenId);
                    e && e.parentNode.removeChild(e),
                    t._setup(),
                    t._runFrames(),
                    t._draw()
                  }
                },
                this._decrementPreload = function() {
                  var t = this._isGlobal
                    ? window
                    : this;
                  t._setProperty("_preloadCount", t._preloadCount - 1),
                  t._runIfPreloadsAreDone()
                },
                this._wrapPreload = function(t, e) {
                  return function() {
                    this._incrementPreload();
                    for (var r = new Array(arguments.length), n = 0; n < r.length; ++n)
                      r[n] = arguments[n];
                    return r.push(this._decrementPreload.bind(this)),
                    this._registeredPreloadMethods[e].apply(t, r)
                  }.bind(this)
                },
                this._incrementPreload = function() {
                  var t = this._isGlobal
                    ? window
                    : this;
                  t._setProperty("_preloadCount", t._preloadCount + 1)
                },
                this._setup = function() {
                  var t = this._isGlobal
                    ? window
                    : this;
                  if ("function" == typeof t.preload)
                    for (var e in this._preloadMethods)
                      t[e] = this._preloadMethods[e][e],
                      t[e] && this && (t[e] = t[e].bind(this));
                "function" == typeof t.setup && t.setup();
                  for (var r = document.getElementsByTagName("canvas"), n = 0; n < r.length; n++) {
                    var i = r[n];
                    "true" === i.dataset.hidden && (i.style.visibility = "", delete i.dataset.hidden)
                  }
                  this._setupDone = !0
                }.bind(this),
                this._draw = function() {
                  var t = window.performance.now(),
                    e = t - this._lastFrameTime,
                    r = 1e3 / this._targetFrameRate,
                    n = 5;
                  (!this._loop || e >= r - n) && (this._setProperty("frameCount", this.frameCount + 1), this.redraw(), this._updateMouseCoords(), this._updateTouchCoords(), this._frameRate = 1e3 / (t - this._lastFrameTime), this._lastFrameTime = t),
                  this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw))
                }.bind(this),
                this._runFrames = function() {
                  this._updateInterval && clearInterval(this._updateInterval)
                }.bind(this),
                this._setProperty = function(t, e) {
                  this[t] = e,
                  this._isGlobal && (window[t] = e)
                }.bind(this),
                this.remove = function() {
                  if (this._curElement) {
                    this._loop = !1,
                    this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId);
                    for (var t in this._events)
                      window.removeEventListener(t, this._events[t]);
                    for (var e = 0; e < this._elements.length; e++) {
                      var r = this._elements[e];
                      r.elt.parentNode && r.elt.parentNode.removeChild(r.elt);
                      for (var n in r._events)
                        r.elt.removeEventListener(n, r._events[n])
                    }
                    var o = this;
                    if (this._registeredMethods.remove.forEach(function(t) {
                      "undefined" != typeof t && t.call(o)
                    }), this._isGlobal) {
                      for (var s in i.prototype)
                        try {
                          delete window[s]
                        } catch (a) {
                          window[s] = void 0
                        }
                      for (var h in this)
                        if (this.hasOwnProperty(h))
                          try {
                            delete window[h]
                          } catch (a) {
                            window[h] = void 0
                          }
                        }
                  }
                }.bind(this),
                this._registeredMethods.init.forEach(function(t) {
                  "undefined" != typeof t && t.call(this)
                }, this);
                var n = this._createFriendlyGlobalFunctionBinder();
                if (t)
                  t(this);
                else {
                  this._isGlobal = !0,
                  i.instance = this;
                  for (var o in i.prototype)
                    if ("function" == typeof i.prototype[o]) {
                      var s = o.substring(2);
                      this._events.hasOwnProperty(s) || (Math.hasOwnProperty(o) && Math[o] === i.prototype[o]
                        ? n(o, i.prototype[o])
                        : n(o, i.prototype[o].bind(this)))
                    }
                  else
                    n(o, i.prototype[o]);
                  for (var a in this)
                    this.hasOwnProperty(a) && n(a, this[a])
                }
                for (var h in this._events) {
                  var u = this["_on" + h];
                  if (u) {
                    var c = u.bind(this);
                    window.addEventListener(h, c),
                    this._events[h] = c
                  }
                }
                var l = function() {
                    this._setProperty("focused", !0)
                  }.bind(this),
                  p = function() {
                    this._setProperty("focused", !1)
                  }.bind(this);
                window.addEventListener("focus", l),
                window.addEventListener("blur", p),
                this.registerMethod("remove", function() {
                  window.removeEventListener("focus", l),
                  window.removeEventListener("blur", p)
                }),
                r
                  ? this._start()
                  : "complete" === document.readyState
                    ? this._start()
                    : window.addEventListener("load", this._start.bind(this), !1)
              };
            i.instance = null,
            i.disableFriendlyErrors = !1;
            for (var o in n)
              i.prototype[o] = n[o];
            i.prototype._preloadMethods = {
              loadJSON: i.prototype,
              loadImage: i.prototype,
              loadStrings: i.prototype,
              loadXML: i.prototype,
              loadShape: i.prototype,
              loadTable: i.prototype,
              loadFont: i.prototype,
              loadModel: i.prototype
            },
            i.prototype._registeredMethods = {
              init: [],
              pre: [],
              post: [],
              remove: []
            },
            i.prototype._registeredPreloadMethods = {},
            i.prototype.registerPreloadMethod = function(t, e) {
              i.prototype._preloadMethods.hasOwnProperty(t) || (i.prototype._preloadMethods[t] = e)
            },
            i.prototype.registerMethod = function(t, e) {
              i.prototype._registeredMethods.hasOwnProperty(t) || (i.prototype._registeredMethods[t] = []),
              i.prototype._registeredMethods[t].push(e)
            },
            i.prototype._createFriendlyGlobalFunctionBinder = function(t) {
              t = t || {};
              var e = t.globalObject || window,
                r = t.log || console.log.bind(console),
                n = {
                  print: !0
                };
              return function(t, o) {
                if (i.disableFriendlyErrors || "undefined" != typeof IS_MINIFIED || "function" != typeof o || t in i.prototype._preloadMethods)
                  e[t] = o;
                else
                  try {
                    if (t in e && !(t in n))
                      throw new Error('global "' + t + '" already exists');
                    Object.defineProperty(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      get: function() {
                        return o
                      },
                      set: function(n) {
                        Object.defineProperty(e, t, {
                          configurable: !0,
                          enumerable: !0,
                          value: n,
                          writable: !0
                        }),
                        r('You just changed the value of "' + t + "\", which was a p5 function. This could cause problems later if you're not careful.")
                      }
                    })
                  } catch (s) {
                    r('p5 had problems creating the global function "' + t + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'),
                    e[t] = o
                  }
                }
            },
            e.exports = i
          }, {
            "./constants": 36,
            "./shim": 46
          }
        ],
        38: [
          function(t, e, r) {
            "use strict";
            var n = t("./core");
            t("./error_helpers");
            var i = 20,
              o = 20;
            n.prototype.bezier = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.isP3D
                ? this._validateParameters("bezier", t, [
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number"
                ])
                : this._validateParameters("bezier", t, [
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number"
                ]),
              this._renderer._doStroke
                ? (this._renderer.isP3D
                  ? (t.push(i), this._renderer.bezier(t))
                  : this._renderer.bezier(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]), this)
                : this
            },
            n.prototype.bezierDetail = function(t) {
              return i = t,
              this
            },
            n.prototype.bezierPoint = function(t, e, r, n, i) {
              var o = 1 - i;
              return Math.pow(o, 3) * t + 3 * Math.pow(o, 2) * i * e + 3 * o * Math.pow(i, 2) * r + Math.pow(i, 3) * n
            },
            n.prototype.bezierTangent = function(t, e, r, n, i) {
              var o = 1 - i;
              return 3 * n * Math.pow(i, 2) - 3 * r * Math.pow(i, 2) + 6 * r * o * i - 6 * e * o * i + 3 * e * Math.pow(o, 2) - 3 * t * Math.pow(o, 2)
            },
            n.prototype.curve = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return this._renderer.isP3D
                ? this._validateParameters("curve", t, [
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number"
                ])
                : this._validateParameters("curve", t, [
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number",
                  "Number"
                ]),
              this._renderer._doStroke
                ? (this._renderer.isP3D
                  ? (t.push(o), this._renderer.curve(t))
                  : this._renderer.curve(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]), this)
                : this
            },
            n.prototype.curveDetail = function(t) {
              return o = t,
              this
            },
            n.prototype.curveTightness = function(t) {
              this._renderer._curveTightness = t
            },
            n.prototype.curvePoint = function(t, e, r, n, i) {
              var o = i * i * i,
                s = i * i,
                a = -.5 * o + s - .5 * i,
                h = 1.5 * o - 2.5 * s + 1,
                u = -1.5 * o + 2 * s + .5 * i,
                c = .5 * o - .5 * s;
              return t * a + e * h + r * u + n * c
            },
            n.prototype.curveTangent = function(t, e, r, n, i) {
              var o = i * i,
                s = -3 * o / 2 + 2 * i - .5,
                a = 9 * o / 2 - 5 * i,
                h = -9 * o / 2 + 4 * i + .5,
                u = 3 * o / 2 - i;
              return t * s + e * a + r * h + n * u
            },
            e.exports = n
          }, {
            "./core": 37,
            "./error_helpers": 40
          }
        ],
        39: [
          function(t, e, r) {
            "use strict";
            function n() {
              return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0
            }
            function i() {
              return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0
            }
            function o(t) {
              var e = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
              if (!e)
                throw new Error("Fullscreen not enabled in this browser.");
              t.requestFullscreen
                ? t.requestFullscreen()
                : t.mozRequestFullScreen
                  ? t.mozRequestFullScreen()
                  : t.webkitRequestFullscreen
                    ? t.webkitRequestFullscreen()
                    : t.msRequestFullscreen && t.msRequestFullscreen()
            }
            function s() {
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.msExitFullscreen && document.msExitFullscreen()
            }
            var a = t("./core"),
              h = t("./constants"),
              u = [
                h.ARROW,
                h.CROSS,
                h.HAND,
                h.MOVE,
                h.TEXT,
                h.WAIT
              ];
            a.prototype._frameRate = 0,
            a.prototype._lastFrameTime = window.performance.now(),
            a.prototype._targetFrameRate = 60;
            var c = window.print;
            window.console && console.log
              ? a.prototype.print = function(t) {
                try {
                  if (0 === arguments.length)
                    c();
                  else if (arguments.length > 1)
                    console.log.apply(console, arguments);
                  else {
                    var e = JSON.parse(JSON.stringify(t));
                    console.log(e)
                  }
                } catch (r) {
                  console.log(t)
                }
              }
              : a.prototype.print = function() {},
            a.prototype.frameCount = 0,
            a.prototype.focused = document.hasFocus(),
            a.prototype.cursor = function(t, e, r) {
              var n = "auto",
                i = this._curElement.elt;
              if (u.indexOf(t) > -1)
                n = t;
              else if ("string" == typeof t) {
                var o = "";
                e && r && "number" == typeof e && "number" == typeof r && (o = e + " " + r),
                n = "http://" !== t.substring(0, 6)
                  ? "url(" + t + ") " + o + ", auto"
                  : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(t)
                    ? "url(" + t + ") " + o + ", auto"
                    : t
              }
              i.style.cursor = n
            },
            a.prototype.frameRate = function(t) {
              return "number" != typeof t || t <= 0
                ? this._frameRate
                : (this._setProperty("_targetFrameRate", t), this._runFrames(), this)
            },
            a.prototype.getFrameRate = function() {
              return this.frameRate()
            },
            a.prototype.setFrameRate = function(t) {
              return this.frameRate(t)
            },
            a.prototype.noCursor = function() {
              this._curElement.elt.style.cursor = "none"
            },
            a.prototype.displayWidth = screen.width,
            a.prototype.displayHeight = screen.height,
            a.prototype.windowWidth = n(),
            a.prototype.windowHeight = i(),
            a.prototype._onresize = function(t) {
              this._setProperty("windowWidth", n()),
              this._setProperty("windowHeight", i());
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              "function" == typeof r.windowResized && (e = r.windowResized(t), void 0 === e || e || t.preventDefault())
            },
            a.prototype.width = 0,
            a.prototype.height = 0,
            a.prototype.fullscreen = function(t) {
              return "undefined" == typeof t
                ? document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                : void(t
                  ? o(document.documentElement)
                  : s())
            },
            a.prototype.pixelDensity = function(t) {
              return "number" != typeof t
                ? this._pixelDensity
                : (this._pixelDensity = t, void this.resizeCanvas(this.width, this.height, !0))
            },
            a.prototype.displayDensity = function() {
              return window.devicePixelRatio
            },
            a.prototype.getURL = function() {
              return location.href
            },
            a.prototype.getURLPath = function() {
              return location.pathname.split("/").filter(function(t) {
                return "" !== t
              })
            },
            a.prototype.getURLParams = function() {
              for (var t, e = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {}; null != (t = e.exec(location.search));)
                t.index === e.lastIndex && e.lastIndex++,
                r[t[1]] = t[2];
              return r
            },
            e.exports = a
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        40: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r) {
              if (t.match(/^p5\./)) {
                var n = t.split(".");
                return r instanceof h[n[1]]
              }
              return "Boolean" === t || t.toLowerCase() === e || y.indexOf(t) > -1 && g(r)
            }
            function i(t, e, r) {
              u && (o(), u = !1),
              "undefined" === d(r)
                ? r = "#B40033"
                : "number" === d(r) && (r = w[r])
            }
            function o() {
              var t = "transparent",
                e = "#ED225D",
                r = "#ED225D",
                n = "white";
              console.log("%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.", "background-color:" + t + ";color:" + e + ";", "background-color:" + r + ";color:" + n + ";")
            }
            function s() {
              var e = {},
                r = function(t) {
                  return Object.getOwnPropertyNames(t).filter(function(t) {
                    return "_" !== t[0] && (!(t in e) && (e[t] = !0, !0))
                  }).map(function(e) {
                    var r;
                    return r = "function" == typeof t[e]
                      ? "function"
                      : e === e.toUpperCase()
                        ? "constant"
                        : "variable", {
                      name: e,
                      type: r
                    }
                  })
                };
              M = [].concat(r(h.prototype), r(t("./constants"))),
              M.sort(function(t, e) {
                return e.name.length - t.name.length
              })
            }
            function a(t, e) {
              e || (e = console.log.bind(console)),
              M || s(),
              M.some(function(r) {
                if (t.message && t.message.indexOf(r.name) !== -1)
                  return e("%cDid you just try to use p5.js's " + r.name + ("function" === r.type
                    ? "() "
                    : " ") + r.type + "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: " + T, "color: #B40033"),
                  !0
              })
            }
            for (var h = t("./core"), u = !1, c = {}, l = c.toString, p = [
              "Boolean",
              "Number",
              "String",
              "Function",
              "Array",
              "Date",
              "RegExp",
              "Object",
              "Error"
            ], f = 0; f < p.length; f++)
              c["[object " + p[f] + "]"] = p[f].toLowerCase();
            var d = function(t) {
                return null == t
                  ? t + ""
                  : "object" == typeof t || "function" == typeof t
                    ? c[l.call(t)] || "object"
                    : typeof t
              },
              m = Array.isArray || function(t) {
                return "array" === d(t)
              },
              g = function(t) {
                return !m(t) && t - parseFloat(t) + 1 >= 0
              },
              y = [
                "Number", "Integer", "Number/Constant"
              ],
              v = 0,
              x = 1,
              b = 2,
              _ = 3,
              w = ["#2D7BB6", "#EE9900", "#4DB200", "#C83C00"];
            h.prototype._validateParameters = function(t, e, r) {
              m(r[0]) || (r = [r]);
              for (var o, s = Math.abs(e.length - r[0].length), a = 0, h = 1, u = r.length; h < u; h++) {
                var c = Math.abs(e.length - r[h].length);
                c <= s && (a = h, s = c)
              }
              var l = "X";
              s > 0 && (o = "You wrote " + t + "(", e.length > 0 && (o += l + Array(e.length).join("," + l)), o += "). " + t + " was expecting " + r[a].length + " parameters. Try " + t + "(", r[a].length > 0 && (o += l + Array(r[a].length).join("," + l)), o += ").", r.length > 1 && (o += " " + t + " takes different numbers of parameters depending on what you want to do. Click this link to learn more: "), i(o, t, v));
              for (var p = 0; p < r.length; p++)
                for (var f = 0; f < r[p].length && f < e.length; f++) {
                  var g = r[p][f],
                    y = d(e[f]);
                  "undefined" === y || null === y
                    ? i("It looks like " + t + " received an empty variable in spot #" + (f + 1) + ". If not intentional, this is often a problem with scope: [link to scope].", t, x)
                    : "*" === g || n(g, y, e[f]) || (o = t + " was expecting a " + g.toLowerCase() + " for parameter #" + (f + 1) + ", received ", o += "string" === y
                      ? '"' + e[f] + '"'
                      : e[f], o += " instead.", r.length > 1 && (o += " " + t + " takes different numbers of parameters depending on what you want to do. Click this link to learn more:"), i(o, t, b))
                }
              },
            h.prototype._validateParameters = function() {
              return !0
            };
            var S = {
              0: {
                fileType: "image",
                method: "loadImage",
                message: " hosting the image online,"
              },
              1: {
                fileType: "XML file",
                method: "loadXML"
              },
              2: {
                fileType: "table file",
                method: "loadTable"
              },
              3: {
                fileType: "text file",
                method: "loadStrings"
              },
              4: {
                fileType: "font",
                method: "loadFont",
                message: " hosting the font online,"
              }
            };
            h._friendlyFileLoadError = function(t, e) {
              var r = S[t],
                n = "It looks like there was a problem loading your " + r.fileType + ". Try checking if the file path%c [" + e + "] %cis correct," + (r.message || "") + " or running a local server.";
              i(n, r.method, _)
            };
            var M = null,
              T = "https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";
            h.prototype._helpForMisusedAtTopLevelCode = a,
            "complete" !== document.readyState && (window.addEventListener("error", a, !1), window.addEventListener("load", function() {
              window.removeEventListener("error", a, !1)
            })),
            e.exports = h
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        41: [
          function(t, e, r) {
            function n(t, e, r) {
              var n = e.bind(r);
              r.elt.addEventListener(t, n, !1),
              r._events[t] = n
            }
            var i = t("./core");
            i.Element = function(t, e) {
              this.elt = t,
              this._pInst = e,
              this._events = {},
              this.width = this.elt.offsetWidth,
              this.height = this.elt.offsetHeight
            },
            i.Element.prototype.parent = function(t) {
              return 0 === arguments.length
                ? this.elt.parentNode
                : ("string" == typeof t
                  ? ("#" === t[0] && (t = t.substring(1)), t = document.getElementById(t))
                  : t instanceof i.Element && (t = t.elt), t.appendChild(this.elt), this)
            },
            i.Element.prototype.id = function(t) {
              return 0 === arguments.length
                ? this.elt.id
                : (this.elt.id = t, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this)
            },
            i.Element.prototype["class"] = function(t) {
              return 0 === arguments.length
                ? this.elt.className
                : (this.elt.className = t, this)
            },
            i.Element.prototype.mousePressed = function(t) {
              return n("mousedown", t, this),
              n("touchstart", t, this),
              this
            },
            i.Element.prototype.mouseWheel = function(t) {
              return n("wheel", t, this),
              this
            },
            i.Element.prototype.mouseReleased = function(t) {
              return n("mouseup", t, this),
              n("touchend", t, this),
              this
            },
            i.Element.prototype.mouseClicked = function(t) {
              return n("click", t, this),
              this
            },
            i.Element.prototype.mouseMoved = function(t) {
              return n("mousemove", t, this),
              n("touchmove", t, this),
              this
            },
            i.Element.prototype.mouseOver = function(t) {
              return n("mouseover", t, this),
              this
            },
            i.Element.prototype.changed = function(t) {
              return n("change", t, this),
              this
            },
            i.Element.prototype.input = function(t) {
              return n("input", t, this),
              this
            },
            i.Element.prototype.mouseOut = function(t) {
              return n("mouseout", t, this),
              this
            },
            i.Element.prototype.touchStarted = function(t) {
              return n("touchstart", t, this),
              n("mousedown", t, this),
              this
            },
            i.Element.prototype.touchMoved = function(t) {
              return n("touchmove", t, this),
              n("mousemove", t, this),
              this
            },
            i.Element.prototype.touchEnded = function(t) {
              return n("touchend", t, this),
              n("mouseup", t, this),
              this
            },
            i.Element.prototype.dragOver = function(t) {
              return n("dragover", t, this),
              this
            },
            i.Element.prototype.dragLeave = function(t) {
              return n("dragleave", t, this),
              this
            },
            i.Element.prototype.drop = function(t, e) {
              function r(e) {
                var r = new i.File(e);
                return function(e) {
                  r.data = e.target.result,
                  t(r)
                }
              }
              return window.File && window.FileReader && window.FileList && window.Blob
                ? (n("dragover", function(t) {
                  t.stopPropagation(),
                  t.preventDefault()
                }, this), n("dragleave", function(t) {
                  t.stopPropagation(),
                  t.preventDefault()
                }, this), arguments.length > 1 && n("drop", e, this), n("drop", function(t) {
                  t.stopPropagation(),
                  t.preventDefault();
                  for (var e = t.dataTransfer.files, n = 0; n < e.length; n++) {
                    var i = e[n],
                      o = new FileReader;
                    o.onload = r(i),
                    i.type.indexOf("text") > -1
                      ? o.readAsText(i)
                      : o.readAsDataURL(i)
                  }
                }, this))
                : console.log("The File APIs are not fully supported in this browser."),
              this
            },
            i.Element.prototype._setProperty = function(t, e) {
              this[t] = e
            },
            e.exports = i.Element
          }, {
            "./core": 37
          }
        ],
        42: [
          function(t, e, r) {
            var n = t("./core"),
              i = t("./constants");
            n.Graphics = function(t, e, r, o) {
              var s = r || i.P2D,
                a = document.createElement("canvas"),
                h = this._userNode || document.body;
              h.appendChild(a),
              n.Element.call(this, a, o, !1),
              this._styles = [],
              this.width = t,
              this.height = e,
              this._pixelDensity = o._pixelDensity,
              s === i.WEBGL
                ? this._renderer = new n.RendererGL(a, this, (!1))
                : this._renderer = new n.Renderer2D(a, this, (!1)),
              this._renderer.resize(t, e),
              this._renderer._applyDefaults(),
              o._elements.push(this);
              for (var u in n.prototype)
                this[u] || ("function" == typeof n.prototype[u]
                  ? this[u] = n.prototype[u].bind(this)
                  : this[u] = n.prototype[u]);
              return this
            },
            n.Graphics.prototype = Object.create(n.Element.prototype),
            e.exports = n.Graphics
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        43: [
          function(t, e, r) {
            function n(t) {
              var e = 0,
                r = 0;
              if (t.offsetParent) {
                do
                  e += t.offsetLeft,
                  r += t.offsetTop;
                while (t = t.offsetParent)
              } else
                e += t.offsetLeft,
                r += t.offsetTop;
              return [e, r]
            }
            var i = t("./core"),
              o = t("../core/constants");
            i.Renderer = function(t, e, r) {
              i.Element.call(this, t, e),
              this.canvas = t,
              this._pInst = e,
              r
                ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height))
                : (this.canvas.style.display = "none", this._styles = []),
              this._textSize = 12,
              this._textLeading = 15,
              this._textFont = "sans-serif",
              this._textStyle = o.NORMAL,
              this._textAscent = null,
              this._textDescent = null,
              this._rectMode = o.CORNER,
              this._ellipseMode = o.CENTER,
              this._curveTightness = 0,
              this._imageMode = o.CORNER,
              this._tint = null,
              this._doStroke = !0,
              this._doFill = !0,
              this._strokeSet = !1,
              this._fillSet = !1,
              this._colorMode = o.RGB,
              this._colorMaxes = {
                rgb: [
                  255, 255, 255, 255
                ],
                hsb: [
                  360, 100, 100, 1
                ],
                hsl: [360, 100, 100, 1]
              }
            },
            i.Renderer.prototype = Object.create(i.Element.prototype),
            i.Renderer.prototype.resize = function(t, e) {
              this.width = t,
              this.height = e,
              this.elt.width = t * this._pInst._pixelDensity,
              this.elt.height = e * this._pInst._pixelDensity,
              this.elt.style.width = t + "px",
              this.elt.style.height = e + "px",
              this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height))
            },
            i.Renderer.prototype.textLeading = function(t) {
              return arguments.length && arguments[0]
                ? (this._setProperty("_textLeading", t), this)
                : this._textLeading
            },
            i.Renderer.prototype.textSize = function(t) {
              return arguments.length && arguments[0]
                ? (this._setProperty("_textSize", t), this._setProperty("_textLeading", t * o._DEFAULT_LEADMULT), this._applyTextProperties())
                : this._textSize
            },
            i.Renderer.prototype.textStyle = function(t) {
              return arguments.length && arguments[0]
                ? (t !== o.NORMAL && t !== o.ITALIC && t !== o.BOLD || this._setProperty("_textStyle", t), this._applyTextProperties())
                : this._textStyle
            },
            i.Renderer.prototype.textAscent = function() {
              return null === this._textAscent && this._updateTextMetrics(),
              this._textAscent
            },
            i.Renderer.prototype.textDescent = function() {
              return null === this._textDescent && this._updateTextMetrics(),
              this._textDescent
            },
            i.Renderer.prototype._applyDefaults = function() {
              return this
            },
            i.Renderer.prototype._isOpenType = function(t) {
              return t = t || this._textFont,
              "object" == typeof t && t.font && t.font.supported
            },
            i.Renderer.prototype._updateTextMetrics = function() {
              if (this._isOpenType())
                return this._setProperty("_textAscent", this._textFont._textAscent()),
                this._setProperty("_textDescent", this._textFont._textDescent()),
                this;
              var t = document.createElement("span");
              t.style.fontFamily = this._textFont,
              t.style.fontSize = this._textSize + "px",
              t.innerHTML = "ABCjgq|";
              var e = document.createElement("div");
              e.style.display = "inline-block",
              e.style.width = "1px",
              e.style.height = "0px";
              var r = document.createElement("div");
              r.appendChild(t),
              r.appendChild(e),
              r.style.height = "0px",
              r.style.overflow = "hidden",
              document.body.appendChild(r),
              e.style.verticalAlign = "baseline";
              var i = n(e),
                o = n(t),
                s = i[1] - o[1];
              e.style.verticalAlign = "bottom",
              i = n(e),
              o = n(t);
              var a = i[1] - o[1],
                h = a - s;
              return document.body.removeChild(r),
              this._setProperty("_textAscent", s),
              this._setProperty("_textDescent", h),
              this
            },
            e.exports = i.Renderer
          }, {
            "../core/constants": 36,
            "./core": 37
          }
        ],
        44: [
          function(t, e, r) {
            var n = t("./core"),
              i = t("./canvas"),
              o = t("./constants"),
              s = t("../image/filters");
            t("./p5.Renderer");
            var a = "rgba(0,0,0,0)";
            n.Renderer2D = function(t, e, r) {
              return n.Renderer.call(this, t, e, r),
              this.drawingContext = this.canvas.getContext("2d"),
              this._pInst._setProperty("drawingContext", this.drawingContext),
              this
            },
            n.Renderer2D.prototype = Object.create(n.Renderer.prototype),
            n.Renderer2D.prototype._applyDefaults = function() {
              this.drawingContext.fillStyle = o._DEFAULT_FILL,
              this.drawingContext.strokeStyle = o._DEFAULT_STROKE,
              this.drawingContext.lineCap = o.ROUND,
              this.drawingContext.font = "normal 12px sans-serif"
            },
            n.Renderer2D.prototype.resize = function(t, e) {
              n.Renderer.prototype.resize.call(this, t, e),
              this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity)
            },
            n.Renderer2D.prototype.background = function() {
              if (this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), arguments[0]instanceof n.Image)
                this._pInst.image(arguments[0], 0, 0, this.width, this.height);
              else {
                var t = this.drawingContext.fillStyle,
                  e = this._pInst.color.apply(this, arguments),
                  r = e.toString();
                this.drawingContext.fillStyle = r,
                this.drawingContext.fillRect(0, 0, this.width, this.height),
                this.drawingContext.fillStyle = t
              }
              this.drawingContext.restore()
            },
            n.Renderer2D.prototype.clear = function() {
              this.drawingContext.clearRect(0, 0, this.width, this.height)
            },
            n.Renderer2D.prototype.fill = function() {
              var t = this.drawingContext,
                e = this._pInst.color.apply(this, arguments);
              t.fillStyle = e.toString()
            },
            n.Renderer2D.prototype.stroke = function() {
              var t = this.drawingContext,
                e = this._pInst.color.apply(this, arguments);
              t.strokeStyle = e.toString()
            },
            n.Renderer2D.prototype.image = function(t, e, r, i, o, s, a, h, u) {
              var c;
              try {
                this._tint && (n.MediaElement && t instanceof n.MediaElement && t.loadPixels(), t.canvas && (c = this._getTintedImageCanvas(t))),
                c || (c = t.canvas || t.elt),
                this.drawingContext.drawImage(c, e, r, i, o, s, a, h, u)
              } catch (l) {
                if ("NS_ERROR_NOT_AVAILABLE" !== l.name)
                  throw l
              }
            },
            n.Renderer2D.prototype._getTintedImageCanvas = function(t) {
              if (!t.canvas)
                return t;
              var e = s._toPixels(t.canvas),
                r = document.createElement("canvas");
              r.width = t.canvas.width,
              r.height = t.canvas.height;
              for (var n = r.getContext("2d"), i = n.createImageData(t.canvas.width, t.canvas.height), o = i.data, a = 0; a < e.length; a += 4) {
                var h = e[a],
                  u = e[a + 1],
                  c = e[a + 2],
                  l = e[a + 3];
                o[a] = h * this._tint[0] / 255,
                o[a + 1] = u * this._tint[1] / 255,
                o[a + 2] = c * this._tint[2] / 255,
                o[a + 3] = l * this._tint[3] / 255
              }
              return n.putImageData(i, 0, 0),
              r
            },
            n.Renderer2D.prototype.blendMode = function(t) {
              this.drawingContext.globalCompositeOperation = t
            },
            n.Renderer2D.prototype.blend = function() {
              var t = this.drawingContext.globalCompositeOperation,
                e = arguments[arguments.length - 1],
                r = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
              this.drawingContext.globalCompositeOperation = e,
              this._pInst
                ? this._pInst.copy.apply(this._pInst, r)
                : this.copy.apply(this, r),
              this.drawingContext.globalCompositeOperation = t
            },
            n.Renderer2D.prototype.copy = function() {
              var t,
                e,
                r,
                i,
                o,
                s,
                a,
                h,
                u;
              if (9 === arguments.length)
                t = arguments[0],
                e = arguments[1],
                r = arguments[2],
                i = arguments[3],
                o = arguments[4],
                s = arguments[5],
                a = arguments[6],
                h = arguments[7],
                u = arguments[8];
              else {
                if (8 !== arguments.length)
                  throw new Error("Signature not supported");
                t = this._pInst,
                e = arguments[0],
                r = arguments[1],
                i = arguments[2],
                o = arguments[3],
                s = arguments[4],
                a = arguments[5],
                h = arguments[6],
                u = arguments[7]
              }
              n.Renderer2D._copyHelper(t, e, r, i, o, s, a, h, u)
            },
            n.Renderer2D._copyHelper = function(t, e, r, n, i, o, s, a, h) {
              t.canvas || t.loadPixels();
              var u = t.canvas.width / t.width;
              this.drawingContext.drawImage(t.canvas, u * e, u * r, u * n, u * i, o, s, a, h)
            },
            n.Renderer2D.prototype.get = function(t, e, r, i) {
              if (void 0 === t && void 0 === e && void 0 === r && void 0 === i
                ? (t = 0, e = 0, r = this.width, i = this.height)
                : void 0 === r && void 0 === i && (r = 1, i = 1), t + r < 0 || e + i < 0 || t > this.width || e > this.height)
                return [0, 0, 0, 255];
              var o = this._pInst || this,
                s = o._pixelDensity;
              t = Math.floor(t),
              e = Math.floor(e);
              var a = t * s,
                h = e * s;
              if (1 === r && 1 === i) {
                var u = this.drawingContext.getImageData(a, h, 1, 1).data;
                return [u[0], u[1], u[2], u[3]]
              }
              var c = Math.min(r, o.width),
                l = Math.min(i, o.height),
                p = c * s,
                f = l * s,
                d = new n.Image(c, l);
              return d.canvas.getContext("2d").drawImage(this.canvas, a, h, p, f, 0, 0, c, l),
              d
            },
            n.Renderer2D.prototype.loadPixels = function() {
              var t = this._pixelDensity || this._pInst._pixelDensity,
                e = this.width * t,
                r = this.height * t,
                n = this.drawingContext.getImageData(0, 0, e, r);
              this._pInst
                ? (this._pInst._setProperty("imageData", n), this._pInst._setProperty("pixels", n.data))
                : (this._setProperty("imageData", n), this._setProperty("pixels", n.data))
            },
            n.Renderer2D.prototype.set = function(t, e, r) {
              if (t = Math.floor(t), e = Math.floor(e), r instanceof n.Image)
                this.drawingContext.save(),
                this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
                this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity),
                this.drawingContext.drawImage(r.canvas, t, e),
                this.loadPixels.call(this._pInst),
                this.drawingContext.restore();
              else {
                var i = this._pInst || this,
                  o = 0,
                  s = 0,
                  a = 0,
                  h = 0,
                  u = 4 * (e * i._pixelDensity * (this.width * i._pixelDensity) + t * i._pixelDensity);
                if (i.imageData || i.loadPixels.call(i), "number" == typeof r)
                  u < i.pixels.length && (o = r, s = r, a = r, h = 255);
                else if (r instanceof Array) {
                  if (r.length < 4)
                    throw new Error("pixel array must be of the form [R, G, B, A]");
                  u < i.pixels.length && (o = r[0], s = r[1], a = r[2], h = r[3])
                } else
                  r instanceof n.Color && u < i.pixels.length && (o = r.levels[0], s = r.levels[1], a = r.levels[2], h = r.levels[3]);
                for (var c = 0; c < i._pixelDensity; c++)
                  for (var l = 0; l < i._pixelDensity; l++)
                    u = 4 * ((e * i._pixelDensity + l) * this.width * i._pixelDensity + (t * i._pixelDensity + c)),
                    i.pixels[u] = o,
                    i.pixels[u + 1] = s,
                    i.pixels[u + 2] = a,
                    i.pixels[u + 3] = h
              }
            },
            n.Renderer2D.prototype.updatePixels = function(t, e, r, n) {
              var i = this._pixelDensity || this._pInst._pixelDensity;
              void 0 === t && void 0 === e && void 0 === r && void 0 === n && (t = 0, e = 0, r = this.width, n = this.height),
              r *= i,
              n *= i,
              this._pInst
                ? this.drawingContext.putImageData(this._pInst.imageData, t, e, 0, 0, r, n)
                : this.drawingContext.putImageData(this.imageData, t, e, 0, 0, r, n)
            },
            n.Renderer2D.prototype._acuteArcToBezier = function(t, e) {
              var r = e / 2,
                n = Math.cos(r),
                i = Math.sin(r),
                o = 1 / Math.tan(r),
                s = t + r,
                a = Math.cos(s),
                h = Math.sin(s),
                u = (4 - n) / 3,
                c = i + (n - u) * o;
              return {
                ax: Math.cos(t),
                ay: Math.sin(t),
                bx: *a + *h,
                by: *h - *a,
                cx: *a - *h,
                cy: *h + *a,
                dx: Math.cos(t + e),
                dy: Math.sin(t + e)
              }
            },
            n.Renderer2D.prototype.arc = function(t, e, r, n, s, a, h) {
              for (var u = this.drawingContext, c = i.arcModeAdjust(t, e, r, n, this._ellipseMode), l = c.w / 2, p = c.h / 2, f = 1e-5, d = 0, m = []; a - s > f;)
                d = Math.min(a - s, o.HALF_PI),
                m.push(this._acuteArcToBezier(s, d)),
                s += d;
              return this._doFill && (u.beginPath(), m.forEach(function(t, e) {
                0 === e && u.moveTo(c.x + t.ax * l, c.y + t.ay * p),
                u.bezierCurveTo(c.x + t.bx * l, c.y + t.by * p, c.x + t.cx * l, c.y + t.cy * p, c.x + t.dx * l, c.y + t.dy * p)
              }), h !== o.PIE && null != h || u.lineTo(c.x, c.y), u.closePath(), u.fill()),
              this._doStroke && (u.beginPath(), m.forEach(function(t, e) {
                0 === e && u.moveTo(c.x + t.ax * l, c.y + t.ay * p),
                u.bezierCurveTo(c.x + t.bx * l, c.y + t.by * p, c.x + t.cx * l, c.y + t.cy * p, c.x + t.dx * l, c.y + t.dy * p)
              }), h === o.PIE
                ? (u.lineTo(c.x, c.y), u.closePath())
                : h === o.CHORD && u.closePath(), u.stroke()),
              this
            },
            n.Renderer2D.prototype.ellipse = function(t) {
              var e = this.drawingContext,
                r = this._doFill,
                n = this._doStroke,
                i = t[0],
                o = t[1],
                s = t[2],
                h = t[3];
              if (r && !n) {
                if (e.fillStyle === a)
                  return this
              } else if (!r && n && e.strokeStyle === a)
                return this;
              var u = .5522847498,
                c = s / 2 * u,
                l = h / 2 * u,
                p = i + s,
                f = o + h,
                d = i + s / 2,
                m = o + h / 2;
              e.beginPath(),
              e.moveTo(i, m),
              e.bezierCurveTo(i, m - l, d - c, o, d, o),
              e.bezierCurveTo(d + c, o, p, m - l, p, m),
              e.bezierCurveTo(p, m + l, d + c, f, d, f),
              e.bezierCurveTo(d - c, f, i, m + l, i, m),
              e.closePath(),
              r && e.fill(),
              n && e.stroke()
            },
            n.Renderer2D.prototype.line = function(t, e, r, n) {
              var i = this.drawingContext;
              return this._doStroke
                ? i.strokeStyle === a
                  ? this
                  : (i.lineWidth % 2 === 1 && i.translate(.5, .5), i.beginPath(), i.moveTo(t, e), i.lineTo(r, n), i.stroke(), i.lineWidth % 2 === 1 && i.translate(-.5, -.5), this)
                : this
            },
            n.Renderer2D.prototype.point = function(t, e) {
              var r = this.drawingContext,
                n = r.strokeStyle,
                i = r.fillStyle;
              return this._doStroke
                ? r.strokeStyle === a
                  ? this
                  : (t = Math.round(t), e = Math.round(e), r.fillStyle = n, r.lineWidth > 1
                    ? (r.beginPath(), r.arc(t, e, r.lineWidth / 2, 0, o.TWO_PI, !1), r.fill())
                    : r.fillRect(t, e, 1, 1), void(r.fillStyle = i))
                : this
            },
            n.Renderer2D.prototype.quad = function(t, e, r, n, i, o, s, h) {
              var u = this.drawingContext,
                c = this._doFill,
                l = this._doStroke;
              if (c && !l) {
                if (u.fillStyle === a)
                  return this
              } else if (!c && l && u.strokeStyle === a)
                return this;
              return u.beginPath(),
              u.moveTo(t, e),
              u.lineTo(r, n),
              u.lineTo(i, o),
              u.lineTo(s, h),
              u.closePath(),
              c && u.fill(),
              l && u.stroke(),
              this
            },
            n.Renderer2D.prototype.rect = function(t) {
              var e = t[0],
                r = t[1],
                n = t[2],
                i = t[3],
                o = t[4],
                s = t[5],
                h = t[6],
                u = t[7],
                c = this.drawingContext,
                l = this._doFill,
                p = this._doStroke;
              if (l && !p) {
                if (c.fillStyle === a)
                  return this
              } else if (!l && p && c.strokeStyle === a)
                return this;
              if (this._doStroke && c.lineWidth % 2 === 1 && c.translate(.5, .5), c.beginPath(), "undefined" == typeof o)
                c.rect(e, r, n, i);
              else {
                "undefined" == typeof s && (s = o),
                "undefined" == typeof h && (h = s),
                "undefined" == typeof u && (u = h);
                var f = n / 2,
                  d = i / 2;
                n < 2 * o && (o = f),
                i < 2 * o && (o = d),
                n < 2 * s && (s = f),
                i < 2 * s && (s = d),
                n < 2 * h && (h = f),
                i < 2 * h && (h = d),
                n < 2 * u && (u = f),
                i < 2 * u && (u = d),
                c.beginPath(),
                c.moveTo(e + o, r),
                c.arcTo(e + n, r, e + n, r + i, s),
                c.arcTo(e + n, r + i, e, r + i, h),
                c.arcTo(e, r + i, e, r, u),
                c.arcTo(e, r, e + n, r, o),
                c.closePath()
              }
              return this._doFill && c.fill(),
              this._doStroke && c.stroke(),
              this._doStroke && c.lineWidth % 2 === 1 && c.translate(-.5, -.5),
              this
            },
            n.Renderer2D.prototype.triangle = function(t) {
              var e = this.drawingContext,
                r = this._doFill,
                n = this._doStroke,
                i = t[0],
                o = t[1],
                s = t[2],
                h = t[3],
                u = t[4],
                c = t[5];
              if (r && !n) {
                if (e.fillStyle === a)
                  return this
              } else if (!r && n && e.strokeStyle === a)
                return this;
              e.beginPath(),
              e.moveTo(i, o),
              e.lineTo(s, h),
              e.lineTo(u, c),
              e.closePath(),
              r && e.fill(),
              n && e.stroke()
            },
            n.Renderer2D.prototype.endShape = function(t, e, r, n, i, s, a) {
              if (0 === e.length)
                return this;
              if (!this._doStroke && !this._doFill)
                return this;
              var h,
                u = t === o.CLOSE;
              u && !s && e.push(e[0]);
              var c,
                l,
                p = e.length;
              if (!r || a !== o.POLYGON && null !== a)
                if (!n || a !== o.POLYGON && null !== a)
                  if (!i || a !== o.POLYGON && null !== a)
                    if (a === o.POINTS)
                      for (c = 0; c < p; c++)
                        h = e[c],
                        this._doStroke && this._pInst.stroke(h[6]),
                        this._pInst.point(h[0], h[1]);
              else if (a === o.LINES)
                  for (c = 0; c + 1 < p; c += 2)
                    h = e[c],
                    this._doStroke && this._pInst.stroke(e[c + 1][6]),
                    this._pInst.line(h[0], h[1], e[c + 1][0], e[c + 1][1]);
            else if (a === o.TRIANGLES)
                for (c = 0; c + 2 < p; c += 3)
                  h = e[c],
                  this.drawingContext.beginPath(),
                  this.drawingContext.moveTo(h[0], h[1]),
                  this.drawingContext.lineTo(e[c + 1][0], e[c + 1][1]),
                  this.drawingContext.lineTo(e[c + 2][0], e[c + 2][1]),
                  this.drawingContext.lineTo(h[0], h[1]),
                  this._doFill && (this._pInst.fill(e[c + 2][5]), this.drawingContext.fill()),
                  this._doStroke && (this._pInst.stroke(e[c + 2][6]), this.drawingContext.stroke()),
                  this.drawingContext.closePath();
                else if (a === o.TRIANGLE_STRIP)
                  for (c = 0; c + 1 < p; c++)
                    h = e[c],
                    this.drawingContext.beginPath(),
                    this.drawingContext.moveTo(e[c + 1][0], e[c + 1][1]),
                    this.drawingContext.lineTo(h[0], h[1]),
                    this._doStroke && this._pInst.stroke(e[c + 1][6]),
                    this._doFill && this._pInst.fill(e[c + 1][5]),
                    c + 2 < p && (this.drawingContext.lineTo(e[c + 2][0], e[c + 2][1]), this._doStroke && this._pInst.stroke(e[c + 2][6]), this._doFill && this._pInst.fill(e[c + 2][5])),
                    this._doFillStrokeClose();
            else if (a === o.TRIANGLE_FAN) {
                if (p > 2)
                  for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0][0], e[0][1]), this.drawingContext.lineTo(e[1][0], e[1][1]), this.drawingContext.lineTo(e[2][0], e[2][1]), this._doFill && this._pInst.fill(e[2][5]), this._doStroke && this._pInst.stroke(e[2][6]), this._doFillStrokeClose(), c = 3; c < p; c++)
                    h = e[c],
                    this.drawingContext.beginPath(),
                    this.drawingContext.moveTo(e[0][0], e[0][1]),
                    this.drawingContext.lineTo(e[c - 1][0], e[c - 1][1]),
                    this.drawingContext.lineTo(h[0], h[1]),
                    this._doFill && this._pInst.fill(h[5]),
                    this._doStroke && this._pInst.stroke(h[6]),
                    this._doFillStrokeClose()
              } else if (a === o.QUADS)
                for (c = 0; c + 3 < p; c += 4) {
                  for (h = e[c], this.drawingContext.beginPath(), this.drawingContext.moveTo(h[0], h[1]), l = 1; l < 4; l++)
                    this.drawingContext.lineTo(e[c + l][0], e[c + l][1]);
                  this.drawingContext.lineTo(h[0], h[1]),
                  this._doFill && this._pInst.fill(e[c + 3][5]),
                  this._doStroke && this._pInst.stroke(e[c + 3][6]),
                  this._doFillStrokeClose()
                }
              else if (a === o.QUAD_STRIP) {
                if (p > 3)
                  for (c = 0; c + 1 < p; c += 2)
                    h = e[c],
                    this.drawingContext.beginPath(),
                    c + 3 < p
                      ? (this.drawingContext.moveTo(e[c + 2][0], e[c + 2][1]), this.drawingContext.lineTo(h[0], h[1]), this.drawingContext.lineTo(e[c + 1][0], e[c + 1][1]), this.drawingContext.lineTo(e[c + 3][0], e[c + 3][1]), this._doFill && this._pInst.fill(e[c + 3][5]), this._doStroke && this._pInst.stroke(e[c + 3][6]))
                      : (this.drawingContext.moveTo(h[0], h[1]), this.drawingContext.lineTo(e[c + 1][0], e[c + 1][1])),
                    this._doFillStrokeClose()
              } else {
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[0][0], e[0][1]), c = 1; c < p; c++)
                  h = e[c],
                  h.isVert && (h.moveTo
                    ? this.drawingContext.moveTo(h[0], h[1])
                    : this.drawingContext.lineTo(h[0], h[1]));
                this._doFillStrokeClose()
              } else {
                for (this.drawingContext.beginPath(), c = 0; c < p; c++)
                  e[c].isVert
                    ? e[c].moveTo
                      ? this.drawingContext.moveTo([0], e[c][1])
                      : this.drawingContext.lineTo(e[c][0], e[c][1])
                    : this.drawingContext.quadraticCurveTo(e[c][0], e[c][1], e[c][2], e[c][3]);
                this._doFillStrokeClose()
              } else {
                for (this.drawingContext.beginPath(), c = 0; c < p; c++)
                  e[c].isVert
                    ? e[c].moveTo
                      ? this.drawingContext.moveTo(e[c][0], e[c][1])
                      : this.drawingContext.lineTo(e[c][0], e[c][1])
                    : this.drawingContext.bezierCurveTo(e[c][0], e[c][1], e[c][2], e[c][3], e[c][4], e[c][5]);
                this._doFillStrokeClose()
              } else if (p > 3) {
                var f = [],
                  d = 1 - this._curveTightness;
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(e[1][0], e[1][1]), c = 1; c + 2 < p; c++)
                  h = e[c],
                  f[0] = [
                    h[0], h[1]
                  ],
                  f[1] = [
                    h[0] + (d * e[c + 1][0] - d * e[c - 1][0]) / 6,
                    h[1] + (d * e[c + 1][1] - d * e[c - 1][1]) / 6
                  ],
                  f[2] = [
                    e[c + 1][0] + (d * e[c][0] - d * e[c + 2][0]) / 6,
                    e[c + 1][1] + (d * e[c][1] - d * e[c + 2][1]) / 6
                  ],
                  f[3] = [
                    e[c + 1][0],
                    e[c + 1][1]
                  ],
                  this.drawingContext.bezierCurveTo(f[1][0], f[1][1], f[2][0], f[2][1], f[3][0], f[3][1]);
                u && this.drawingContext.lineTo(e[c + 1][0], e[c + 1][1]),
                this._doFillStrokeClose()
              }
              return r = !1,
              n = !1,
              i = !1,
              s = !1,
              u && e.pop(),
              this
            },
            n.Renderer2D.prototype.noSmooth = function() {
              return "imageSmoothingEnabled" in this.drawingContext
                ? this.drawingContext.imageSmoothingEnabled = !1
                : "mozImageSmoothingEnabled" in this.drawingContext
                  ? this.drawingContext.mozImageSmoothingEnabled = !1
                  : "webkitImageSmoothingEnabled" in this.drawingContext
                    ? this.drawingContext.webkitImageSmoothingEnabled = !1
                    : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !1),
              this
            },
            n.Renderer2D.prototype.smooth = function() {
              return "imageSmoothingEnabled" in this.drawingContext
                ? this.drawingContext.imageSmoothingEnabled = !0
                : "mozImageSmoothingEnabled" in this.drawingContext
                  ? this.drawingContext.mozImageSmoothingEnabled = !0
                  : "webkitImageSmoothingEnabled" in this.drawingContext
                    ? this.drawingContext.webkitImageSmoothingEnabled = !0
                    : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !0),
              this
            },
            n.Renderer2D.prototype.strokeCap = function(t) {
              return t !== o.ROUND && t !== o.SQUARE && t !== o.PROJECT || (this.drawingContext.lineCap = t),
              this
            },
            n.Renderer2D.prototype.strokeJoin = function(t) {
              return t !== o.ROUND && t !== o.BEVEL && t !== o.MITER || (this.drawingContext.lineJoin = t),
              this
            },
            n.Renderer2D.prototype.strokeWeight = function(t) {
              return "undefined" == typeof t || 0 === t
                ? this.drawingContext.lineWidth = 1e-4
                : this.drawingContext.lineWidth = t,
              this
            },
            n.Renderer2D.prototype._getFill = function() {
              return this.drawingContext.fillStyle
            },
            n.Renderer2D.prototype._getStroke = function() {
              return this.drawingContext.strokeStyle
            },
            n.Renderer2D.prototype.bezier = function(t, e, r, n, i, o, s, a) {
              return this._pInst.beginShape(),
              this._pInst.vertex(t, e),
              this._pInst.bezierVertex(r, n, i, o, s, a),
              this._pInst.endShape(),
              this
            },
            n.Renderer2D.prototype.curve = function(t, e, r, n, i, o, s, a) {
              return this._pInst.beginShape(),
              this._pInst.curveVertex(t, e),
              this._pInst.curveVertex(r, n),
              this._pInst.curveVertex(i, o),
              this._pInst.curveVertex(s, a),
              this._pInst.endShape(),
              this
            },
            n.Renderer2D.prototype._doFillStrokeClose = function() {
              this._doFill && this.drawingContext.fill(),
              this._doStroke && this.drawingContext.stroke(),
              this.drawingContext.closePath()
            },
            n.Renderer2D.prototype.applyMatrix = function(t, e, r, n, i, o) {
              this.drawingContext.transform(t, e, r, n, i, o)
            },
            n.Renderer2D.prototype.resetMatrix = function() {
              return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
              this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity),
              this
            },
            n.Renderer2D.prototype.rotate = function(t) {
              this.drawingContext.rotate(t)
            },
            n.Renderer2D.prototype.scale = function(t, e) {
              return this.drawingContext.scale(t, e),
              this
            },
            n.Renderer2D.prototype.shearX = function(t) {
              return this._pInst._angleMode === o.DEGREES && (t = this._pInst.degrees(t)),
              this.drawingContext.transform(1, 0, this._pInst.tan(t), 1, 0, 0),
              this
            },
            n.Renderer2D.prototype.shearY = function(t) {
              return this._pInst._angleMode === o.DEGREES && (t = this._pInst.degrees(t)),
              this.drawingContext.transform(1, this._pInst.tan(t), 0, 1, 0, 0),
              this
            },
            n.Renderer2D.prototype.translate = function(t, e) {
              return this.drawingContext.translate(t, e),
              this
            },
            n.Renderer2D.prototype.text = function(t, e, r, n, i) {
              var s,
                a,
                h,
                u,
                c,
                l,
                p,
                f,
                d,
                m,
                g = this._pInst,
                y = Number.MAX_VALUE;
              if (this._doFill || this._doStroke) {
                if ("string" != typeof t && (t = t.toString()), t = t.replace(/(\t)/g, "  "), s = t.split("\n"), "undefined" != typeof n) {
                  for (d = 0, h = 0; h < s.length; h++)
                    for (c = "", f = s[h].split(" "), a = 0; a < f.length; a++)
                      l = c + f[a] + " ",
                      p = this.textWidth(l),
                      p > n
                        ? (c = f[a] + " ", d += g.textLeading())
                        : c = l;
                  switch (this._rectMode === o.CENTER && (e -= n / 2, r -= i / 2), this.drawingContext.textAlign) {
                    case o.CENTER:
                      e += n / 2;
                      break;
                    case o.RIGHT:
                      e += n
                  }
                  if ("undefined" != typeof i) {
                    switch (this.drawingContext.textBaseline) {
                      case o.BOTTOM:
                        r += i - d;
                        break;
                      case o._CTX_MIDDLE:
                        r += (i - d) / 2;
                        break;
                      case o.BASELINE:
                        m = !0,
                        this.drawingContext.textBaseline = o.TOP
                    }
                    y = r + i - g.textAscent()
                  }
                  for (h = 0; h < s.length; h++) {
                    for (c = "", f = s[h].split(" "), a = 0; a < f.length; a++)
                      l = c + f[a] + " ",
                      p = this.textWidth(l),
                      p > n && c.length > 0
                        ? (this._renderText(g, c, e, r, y), c = f[a] + " ", r += g.textLeading())
                        : c = l;
                    this._renderText(g, c, e, r, y),
                    r += g.textLeading()
                  }
                } else {
                  var v = 0,
                    x = g.textAlign().vertical;
                  for (x === o.CENTER
                    ? v = (s.length - 1) * g.textLeading() / 2
                    : x === o.BOTTOM && (v = (s.length - 1) * g.textLeading()), u = 0; u < s.length; u++)
                    this._renderText(g, s[u], e, r - v, y),
                    r += g.textLeading()
                }
                return m && (this.drawingContext.textBaseline = o.BASELINE),
                g
              }
            },
            n.Renderer2D.prototype._renderText = function(t, e, r, n, i) {
              if (!(n >= i))
                return t.push(),
                this._isOpenType()
                  ? this._textFont._renderPath(e, r, n, {renderer: this})
                  : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(e, r, n), this._doFill && (this.drawingContext.fillStyle = this._fillSet
                    ? this.drawingContext.fillStyle
                    : o._DEFAULT_TEXT_FILL, this.drawingContext.fillText(e, r, n))),
                t.pop(),
                t
            },
            n.Renderer2D.prototype.textWidth = function(t) {
              return this._isOpenType()
                ? this._textFont._textWidth(t, this._textSize)
                : this.drawingContext.measureText(t).width
            },
            n.Renderer2D.prototype.textAlign = function(t, e) {
              if (arguments.length)
                return t !== o.LEFT && t !== o.RIGHT && t !== o.CENTER || (this.drawingContext.textAlign = t),
                e !== o.TOP && e !== o.BOTTOM && e !== o.CENTER && e !== o.BASELINE || (e === o.CENTER
                  ? this.drawingContext.textBaseline = o._CTX_MIDDLE
                  : this.drawingContext.textBaseline = e),
                this._pInst;
              var r = this.drawingContext.textBaseline;
              return r === o._CTX_MIDDLE && (r = o.CENTER), {
                horizontal: this.drawingContext.textAlign,
                vertical: r
              }
            },
            n.Renderer2D.prototype._applyTextProperties = function() {
              var t,
                e = this._pInst;
              return this._setProperty("_textAscent", null),
              this._setProperty("_textDescent", null),
              t = this._textFont,
              this._isOpenType() && (t = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)),
              this.drawingContext.font = this._textStyle + " " + this._textSize + "px " + t,
              e
            },
            n.Renderer2D.prototype.push = function() {
              this.drawingContext.save()
            },
            n.Renderer2D.prototype.pop = function() {
              this.drawingContext.restore()
            },
            e.exports = n.Renderer2D
          }, {
            "../image/filters": 54,
            "./canvas": 35,
            "./constants": 36,
            "./core": 37,
            "./p5.Renderer": 43
          }
        ],
        45: [
          function(t, e, r) {
            var n = t("./core"),
              i = t("./constants");
            t("./p5.Graphics"),
            t("./p5.Renderer2D"),
            t("../webgl/p5.RendererGL");
            var o = "defaultCanvas0";
            n.prototype.createCanvas = function(t, e, r) {
              var s,
                a,
                h = r || i.P2D;
              if (arguments[3] && (s = "boolean" == typeof arguments[3] && arguments[3]), h === i.WEBGL)
                a = document.getElementById(o),
                a && a.parentNode.removeChild(a),
                a = document.createElement("canvas"),
                a.id = o;
              else if (s) {
                a = document.createElement("canvas");
                for (var u = 0; document.getElementById("defaultCanvas" + u);)
                  u++;
                o = "defaultCanvas" + u,
                a.id = o
              } else
                a = this.canvas;
              return this._setupDone || (a.dataset.hidden = !0, a.style.visibility = "hidden"),
              this._userNode
                ? this._userNode.appendChild(a)
                : document.body.appendChild(a),
              h === i.WEBGL
                ? (this._setProperty("_renderer", new n.RendererGL(a, this, (!0))), this._isdefaultGraphics = !0)
                : this._isdefaultGraphics || (this._setProperty("_renderer", new n.Renderer2D(a, this, (!0))), this._isdefaultGraphics = !0),
              this._renderer.resize(t, e),
              this._renderer._applyDefaults(),
              s && this._elements.push(this._renderer),
              this._renderer
            },
            n.prototype.resizeCanvas = function(t, e, r) {
              if (this._renderer) {
                var n = {};
                for (var i in this.drawingContext) {
                  var o = this.drawingContext[i];
                  "object" != typeof o && "function" != typeof o && (n[i] = o)
                }
                this._renderer.resize(t, e);
                for (var s in n)
                  this.drawingContext[s] = n[s];
                r || this.redraw()
              }
            },
            n.prototype.noCanvas = function() {
              this.canvas && this.canvas.parentNode.removeChild(this.canvas)
            },
            n.prototype.createGraphics = function(t, e, r) {
              return new n.Graphics(t, e, r, this)
            },
            n.prototype.blendMode = function(t) {
              if (t !== i.BLEND && t !== i.DARKEST && t !== i.LIGHTEST && t !== i.DIFFERENCE && t !== i.MULTIPLY && t !== i.EXCLUSION && t !== i.SCREEN && t !== i.REPLACE && t !== i.OVERLAY && t !== i.HARD_LIGHT && t !== i.SOFT_LIGHT && t !== i.DODGE && t !== i.BURN && t !== i.ADD && t !== i.NORMAL)
                throw new Error("Mode " + t + " not recognized.");
              this._renderer.blendMode(t)
            },
            e.exports = n
          }, {
            "../webgl/p5.RendererGL": 86,
            "./constants": 36,
            "./core": 37,
            "./p5.Graphics": 42,
            "./p5.Renderer2D": 44
          }
        ],
        46: [
          function(t, e, r) {
            window.requestAnimationFrame = function() {
              return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
                window.setTimeout(t, 1e3 / 60)
              }
            }(),
            window.performance = window.performance || {},
            window.performance.now = function() {
              var t = Date.now();
              return window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow || function() {
                return Date.now() - t
              }
            }(),
            function() {
              "use strict";
              "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
                value: Array.prototype.slice,
                writable: !0,
                configurable: !0,
                enumerable: !1
              })
            }()
          }, {}
        ],
        47: [
          function(t, e, r) {
            "use strict";
            var n = t("./core");
            n.prototype.exit = function() {
              throw "exit() not implemented, see remove()"
            },
            n.prototype.noLoop = function() {
              this._loop = !1
            },
            n.prototype.loop = function() {
              this._loop = !0,
              this._draw()
            },
            n.prototype.push = function() {
              this._renderer.push(),
              this._styles.push({
                _doStroke: this._renderer._doStroke,
                _strokeSet: this._renderer._strokeSet,
                _doFill: this._renderer._doFill,
                _fillSet: this._renderer._fillSet,
                _tint: this._renderer._tint,
                _imageMode: this._renderer._imageMode,
                _rectMode: this._renderer._rectMode,
                _ellipseMode: this._renderer._ellipseMode,
                _colorMode: this._renderer._colorMode,
                _textFont: this._renderer._textFont,
                _textLeading: this._renderer._textLeading,
                _textSize: this._renderer._textSize,
                _textStyle: this._renderer._textStyle
              })
            },
            n.prototype.pop = function() {
              this._renderer.pop();
              var t = this._styles.pop();
              for (var e in t)
                this._renderer[e] = t[e]
            },
            n.prototype.pushStyle = function() {
              throw new Error("pushStyle() not used, see push()")
            },
            n.prototype.popStyle = function() {
              throw new Error("popStyle() not used, see pop()")
            },
            n.prototype.redraw = function() {
              this.resetMatrix(),
              this._renderer.isP3D && this._renderer._update();
              var t = 1;
              if (1 === arguments.length)
                try {
                  parseInt(arguments[0]) > 1 && (t = parseInt(arguments[0]))
                } catch (e) {}
              var r = this.setup || window.setup,
                n = this.draw || window.draw;
              if ("function" == typeof n) {
                "undefined" == typeof r && this.scale(this._pixelDensity, this._pixelDensity);
                for (var i = this, o = function(t) {
                  t.call(i)
                },
                s = 0; s < t; s++)
                  this._registeredMethods.pre.forEach(o),
                  n(),
                  this._registeredMethods.post.forEach(o)
              }
            },
            n.prototype.size = function() {
              var t = "size() is not a valid p5 function, to set the size of the ";
              throw t += "drawing canvas, please use createCanvas() instead"
            },
            e.exports = n
          }, {
            "./core": 37
          }
        ],
        48: [
          function(t, e, r) {
            "use strict";
            var n = t("./core"),
              i = t("./constants");
            n.prototype.applyMatrix = function(t, e, r, n, i, o) {
              return this._renderer.applyMatrix(t, e, r, n, i, o),
              this
            },
            n.prototype.popMatrix = function() {
              throw new Error("popMatrix() not used, see pop()")
            },
            n.prototype.printMatrix = function() {
              throw new Error("printMatrix() not implemented")
            },
            n.prototype.pushMatrix = function() {
              throw new Error("pushMatrix() not used, see push()")
            },
            n.prototype.resetMatrix = function() {
              return this._renderer.resetMatrix(),
              this
            },
            n.prototype.rotate = function() {
              for (var t, e = new Array(arguments.length), r = 0; r < e.length; ++r)
                e[r] = arguments[r];
              return this._angleMode === i.DEGREES
                ? t = this.radians(e[0])
                : this._angleMode === i.RADIANS && (t = e[0]),
              e.length > 1
                ? this._renderer.rotate(t, e[1])
                : this._renderer.rotate(t),
              this
            },
            n.prototype.rotateX = function(t) {
              for (var e = new Array(arguments.length), r = 0; r < e.length; ++r)
                e[r] = arguments[r];
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              return this._validateParameters("rotateX", e, [
                ["Number"]
              ]),
              this._renderer.rotateX(t),
              this
            },
            n.prototype.rotateY = function(t) {
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              for (var e = new Array(arguments.length), r = 0; r < e.length; ++r)
                e[r] = arguments[r];
              return this._validateParameters("rotateY", e, [
                ["Number"]
              ]),
              this._renderer.rotateY(t),
              this
            },
            n.prototype.rotateZ = function(t) {
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              for (var e = new Array(arguments.length), r = 0; r < e.length; ++r)
                e[r] = arguments[r];
              return this._validateParameters("rotateZ", e, [
                ["Number"]
              ]),
              this._renderer.rotateZ(t),
              this
            },
            n.prototype.scale = function() {
              for (var t, e, r, i = new Array(arguments.length), o = 0; o < i.length; o++)
                i[o] = arguments[o];
              return i[0]instanceof n.Vector
                ? (t = i[0].x, e = i[0].y, r = i[0].z)
                : i[0]instanceof Array
                  ? (t = i[0][0], e = i[0][1], r = i[0][2] || 1)
                  : 1 === i.length
                    ? t = e = r = i[0]
                    : (t = i[0], e = i[1], r = i[2] || 1),
              this._renderer.isP3D
                ? this._renderer.scale.call(this._renderer, t, e, r)
                : this._renderer.scale.call(this._renderer, t, e),
              this
            },
            n.prototype.shearX = function(t) {
              return this._angleMode === i.DEGREES && (t = this.radians(t)),
              this._renderer.shearX(t),
              this
            },
            n.prototype.shearY = function(t) {
              return this._angleMode === i.DEGREES && (t = this.radians(t)),
              this._renderer.shearY(t),
              this
            },
            n.prototype.translate = function(t, e, r) {
              for (var n = new Array(arguments.length), i = 0; i < n.length; ++i)
                n[i] = arguments[i];
              return this._renderer.isP3D
                ? (this._validateParameters("translate", n, [
                  ["Number", "Number", "Number"]
                ]), this._renderer.translate(t, e, r))
                : (this._validateParameters("translate", n, [
                  ["Number", "Number"]
                ]), this._renderer.translate(t, e)),
              this
            },
            e.exports = n
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        49: [
          function(t, e, r) {
            "use strict";
            var n = t("./core"),
              i = t("./constants"),
              o = null,
              s = [],
              a = [],
              h = !1,
              u = !1,
              c = !1,
              l = !1,
              p = !0;
            n.prototype.beginContour = function() {
              return a = [],
              l = !0,
              this
            },
            n.prototype.beginShape = function(t) {
              return o = t === i.POINTS || t === i.LINES || t === i.TRIANGLES || t === i.TRIANGLE_FAN || t === i.TRIANGLE_STRIP || t === i.QUADS || t === i.QUAD_STRIP
                ? t
                : null,
              this._renderer.isP3D
                ? this._renderer.beginShape(t)
                : (s = [], a = []),
              this
            },
            n.prototype.bezierVertex = function(t, e, r, n, i, o) {
              if (0 === s.length)
                throw "vertex() must be used once before calling bezierVertex()";
              h = !0;
              for (var u = [], c = 0; c < arguments.length; c++)
                u[c] = arguments[c];
              return u.isVert = !1,
              l
                ? a.push(u)
                : s.push(u),
              this
            },
            n.prototype.curveVertex = function(t, e) {
              return u = !0,
              this.vertex(t, e),
              this
            },
            n.prototype.endContour = function() {
              var t = a[0].slice();
              t.isVert = a[0].isVert,
              t.moveTo = !1,
              a.push(t),
              p && (s.push(s[0]), p = !1);
              for (var e = 0; e < a.length; e++)
                s.push(a[e]);
              return this
            },
            n.prototype.endShape = function(t) {
              if (this._renderer.isP3D)
                this._renderer.endShape(t, u, h, c, l, o);
              else {
                if (0 === s.length)
                  return this;
                if (!this._renderer._doStroke && !this._renderer._doFill)
                  return this;
                var e = t === i.CLOSE;
                e && !l && s.push(s[0]),
                this._renderer.endShape(t, s, u, h, c, l, o),
                u = !1,
                h = !1,
                c = !1,
                l = !1,
                p = !0,
                e && s.pop()
              }
              return this
            },
            n.prototype.quadraticVertex = function(t, e, r, n) {
              if (this._contourInited) {
                var o = {};
                return o.x = t,
                o.y = e,
                o.x3 = r,
                o.y3 = n,
                o.type = i.QUADRATIC,
                this._contourVertices.push(o),
                this
              }
              if (!(s.length > 0))
                throw "vertex() must be used once before calling quadraticVertex()";
              c = !0;
              for (var h = [], u = 0; u < arguments.length; u++)
                h[u] = arguments[u];
              return h.isVert = !1,
              l
                ? a.push(h)
                : s.push(h),
              this
            },
            n.prototype.vertex = function(t, e, r) {
              for (var n = new Array(arguments.length), i = 0; i < n.length; ++i)
                n[i] = arguments[i];
              if (this._renderer.isP3D)
                this._validateParameters("vertex", n, [
                  ["Number", "Number", "Number"]
                ]),
                this._renderer.vertex(arguments[0], arguments[1], arguments[2]);
              else {
                this._validateParameters("vertex", n, [
                  [
                    "Number", "Number"
                  ],
                  ["Number", "Number", "Number"]
                ]);
                var o = [];
                o.isVert = !0,
                o[0] = t,
                o[1] = e,
                o[2] = 0,
                o[3] = 0,
                o[4] = 0,
                o[5] = this._renderer._getFill(),
                o[6] = this._renderer._getStroke(),
                r && (o.moveTo = r),
                l
                  ? (0 === a.length && (o.moveTo = !0), a.push(o))
                  : s.push(o)
              }
              return this
            },
            e.exports = n
          }, {
            "./constants": 36,
            "./core": 37
          }
        ],
        50: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.deviceOrientation = void 0,
            n.prototype.accelerationX = 0,
            n.prototype.accelerationY = 0,
            n.prototype.accelerationZ = 0,
            n.prototype.pAccelerationX = 0,
            n.prototype.pAccelerationY = 0,
            n.prototype.pAccelerationZ = 0,
            n.prototype._updatePAccelerations = function() {
              this._setProperty("pAccelerationX", this.accelerationX),
              this._setProperty("pAccelerationY", this.accelerationY),
              this._setProperty("pAccelerationZ", this.accelerationZ)
            },
            n.prototype.rotationX = 0,
            n.prototype.rotationY = 0,
            n.prototype.rotationZ = 0,
            n.prototype.pRotationX = 0,
            n.prototype.pRotationY = 0,
            n.prototype.pRotationZ = 0;
            var i,
              o,
              s,
              a = 0,
              h = 0,
              u = 0,
              c = "clockwise",
              l = "clockwise",
              p = "clockwise";
            n.prototype._updatePRotations = function() {
              this._setProperty("pRotationX", this.rotationX),
              this._setProperty("pRotationY", this.rotationY),
              this._setProperty("pRotationZ", this.rotationZ)
            },
            n.prototype.turnAxis = void 0;
            var f = .5,
              d = 30;
            n.prototype.setMoveThreshold = function(t) {
              "number" == typeof t && (f = t)
            },
            n.prototype.setShakeThreshold = function(t) {
              "number" == typeof t && (d = t)
            },
            n.prototype._ondeviceorientation = function(t) {
              this._updatePRotations(),
              this._setProperty("rotationX", t.beta),
              this._setProperty("rotationY", t.gamma),
              this._setProperty("rotationZ", t.alpha),
              this._handleMotion()
            },
            n.prototype._ondevicemotion = function(t) {
              this._updatePAccelerations(),
              this._setProperty("accelerationX", 2 * t.acceleration.x),
              this._setProperty("accelerationY", 2 * t.acceleration.y),
              this._setProperty("accelerationZ", 2 * t.acceleration.z),
              this._handleMotion()
            },
            n.prototype._handleMotion = function() {
              90 === window.orientation || window.orientation === -90
                ? this._setProperty("deviceOrientation", "landscape")
                : 0 === window.orientation
                  ? this._setProperty("deviceOrientation", "portrait")
                  : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined");
              var t = this.deviceMoved || window.deviceMoved;
              "function" == typeof t && (Math.abs(this.accelerationX - this.pAccelerationX) > f || Math.abs(this.accelerationY - this.pAccelerationY) > f || Math.abs(this.accelerationZ - this.pAccelerationZ) > f) && t();
              var e = this.deviceTurned || window.deviceTurned;
              if ("function" == typeof e) {
                var r = this.rotationX + 180,
                  n = this.pRotationX + 180,
                  m = a + 180;
                r - n > 0 && r - n < 270 || r - n < -270
                  ? c = "clockwise"
                  : (r - n < 0 || r - n > 270) && (c = "counter-clockwise"),
                c !== i && (m = r),
                Math.abs(r - m) > 90 && Math.abs(r - m) < 270 && (m = r, this._setProperty("turnAxis", "X"), e()),
                i = c,
                a = m - 180;
                var g = this.rotationY + 180,
                  y = this.pRotationY + 180,
                  v = h + 180;
                g - y > 0 && g - y < 270 || g - y < -270
                  ? l = "clockwise"
                  : (g - y < 0 || g - this.pRotationY > 270) && (l = "counter-clockwise"),
                l !== o && (v = g),
                Math.abs(g - v) > 90 && Math.abs(g - v) < 270 && (v = g, this._setProperty("turnAxis", "Y"), e()),
                o = l,
                h = v - 180,
                this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270
                  ? p = "clockwise"
                  : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (p = "counter-clockwise"),
                p !== s && (u = this.rotationZ),
                Math.abs(this.rotationZ - u) > 90 && Math.abs(this.rotationZ - u) < 270 && (u = this.rotationZ, this._setProperty("turnAxis", "Z"), e()),
                s = p,
                this._setProperty("turnAxis", void 0)
              }
              var x = this.deviceShaken || window.deviceShaken;
              if ("function" == typeof x) {
                var b,
                  _;
                null !== this.pAccelerationX && (b = Math.abs(this.accelerationX - this.pAccelerationX), _ = Math.abs(this.accelerationY - this.pAccelerationY)),
                b + _ > d && x()
              }
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        51: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = {};
            n.prototype.isKeyPressed = !1,
            n.prototype.keyIsPressed = !1,
            n.prototype.key = "",
            n.prototype.keyCode = 0,
            n.prototype._onkeydown = function(t) {
              if (!i[t.which]) {
                this._setProperty("isKeyPressed", !0),
                this._setProperty("keyIsPressed", !0),
                this._setProperty("keyCode", t.which),
                i[t.which] = !0;
                var e = String.fromCharCode(t.which);
                e || (e = t.which),
                this._setProperty("key", e);
                var r = this.keyPressed || window.keyPressed;
                if ("function" == typeof r && !t.charCode) {
                  var n = r(t);
                  n === !1 && t.preventDefault()
                }
              }
            },
            n.prototype._onkeyup = function(t) {
              var e = this.keyReleased || window.keyReleased;
              this._setProperty("isKeyPressed", !1),
              this._setProperty("keyIsPressed", !1),
              this._setProperty("_lastKeyCodeTyped", null),
              i[t.which] = !1;
              var r = String.fromCharCode(t.which);
              if (r || (r = t.which), this._setProperty("key", r), this._setProperty("keyCode", t.which), "function" == typeof e) {
                var n = e(t);
                n === !1 && t.preventDefault()
              }
            },
            n.prototype._onkeypress = function(t) {
              if (t.which !== this._lastKeyCodeTyped) {
                this._setProperty("keyCode", t.which),
                this._setProperty("_lastKeyCodeTyped", t.which),
                this._setProperty("key", String.fromCharCode(t.which));
                var e = this.keyTyped || window.keyTyped;
                if ("function" == typeof e) {
                  var r = e(t);
                  r === !1 && t.preventDefault()
                }
              }
            },
            n.prototype._onblur = function(t) {
              i = {}
            },
            n.prototype.keyIsDown = function(t) {
              return i[t]
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        52: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = t.getBoundingClientRect();
              return {
                x: e.clientX - r.left,
                y: e.clientY - r.top,
                winX: e.clientX,
                winY: e.clientY
              }
            }
            var i = t("../core/core"),
              o = t("../core/constants");
            i.prototype._hasMouseInteracted = !1,
            i.prototype.mouseX = 0,
            i.prototype.mouseY = 0,
            i.prototype.pmouseX = 0,
            i.prototype.pmouseY = 0,
            i.prototype.winMouseX = 0,
            i.prototype.winMouseY = 0,
            i.prototype.pwinMouseX = 0,
            i.prototype.pwinMouseY = 0,
            i.prototype.mouseButton = 0,
            i.prototype.mouseIsPressed = !1,
            i.prototype.isMousePressed = !1,
            i.prototype._updateNextMouseCoords = function(t) {
              var e = this.mouseX,
                r = this.mouseY,
                i = this.winMouseX,
                o = this.winMouseY;
              if ("touchstart" === t.type || "touchmove" === t.type || "touchend" === t.type || t.touches)
                e = this.touchX,
                r = this.touchY,
                i = this.winTouchX,
                o = this.winTouchY;
              else if (null !== this._curElement) {
                var s = n(this._curElement.elt, t);
                e = s.x,
                r = s.y,
                i = s.winX,
                o = s.winY
              }
              this._setProperty("mouseX", e),
              this._setProperty("mouseY", r),
              this._setProperty("winMouseX", i),
              this._setProperty("winMouseY", o),
              this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0))
            },
            i.prototype._updateMouseCoords = function() {
              this._setProperty("pmouseX", this.mouseX),
              this._setProperty("pmouseY", this.mouseY),
              this._setProperty("pwinMouseX", this.winMouseX),
              this._setProperty("pwinMouseY", this.winMouseY)
            },
            i.prototype._setMouseButton = function(t) {
              1 === t.button
                ? this._setProperty("mouseButton", o.CENTER)
                : 2 === t.button
                  ? this._setProperty("mouseButton", o.RIGHT)
                  : this._setProperty("mouseButton", o.LEFT)
            },
            i.prototype._onmousemove = function(t) {
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              this._updateNextMouseCoords(t),
              this._updateNextTouchCoords(t),
              this.isMousePressed
                ? "function" == typeof r.mouseDragged
                  ? (e = r.mouseDragged(t), e === !1 && t.preventDefault())
                  : "function" == typeof r.touchMoved && (e = r.touchMoved(t), e === !1 && t.preventDefault())
                : "function" == typeof r.mouseMoved && (e = r.mouseMoved(t), e === !1 && t.preventDefault())
            },
            i.prototype._onmousedown = function(t) {
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              this._setProperty("isMousePressed", !0),
              this._setProperty("mouseIsPressed", !0),
              this._setMouseButton(t),
              this._updateNextMouseCoords(t),
              this._updateNextTouchCoords(t),
              "function" == typeof r.mousePressed
                ? (e = r.mousePressed(t), e === !1 && t.preventDefault())
                : "function" == typeof r.touchStarted && (e = r.touchStarted(t), e === !1 && t.preventDefault())
            },
            i.prototype._onmouseup = function(t) {
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              this._setProperty("isMousePressed", !1),
              this._setProperty("mouseIsPressed", !1),
              "function" == typeof r.mouseReleased
                ? (e = r.mouseReleased(t), e === !1 && t.preventDefault())
                : "function" == typeof r.touchEnded && (e = r.touchEnded(t), e === !1 && t.preventDefault())
            },
            i.prototype._ondragend = i.prototype._onmouseup,
            i.prototype._ondragover = i.prototype._onmousemove,
            i.prototype._onclick = function(t) {
              var e = this._isGlobal
                ? window
                : this;
              if ("function" == typeof e.mouseClicked) {
                var r = e.mouseClicked(t);
                r === !1 && t.preventDefault()
              }
            },
            i.prototype._onwheel = function(t) {
              var e = this._isGlobal
                ? window
                : this;
              if ("function" == typeof e.mouseWheel) {
                t.delta = t.deltaY;
                var r = e.mouseWheel(t);
                r === !1 && t.preventDefault()
              }
            },
            e.exports = i
          }, {
            "../core/constants": 36,
            "../core/core": 37
          }
        ],
        53: [
          function(t, e, r) {
            "use strict";
            function n(t, e, r) {
              r = r || 0;
              var n = t.getBoundingClientRect(),
                i = e.touches[r] || e.changedTouches[r];
              return {
                x: i.clientX - n.left,
                y: i.clientY - n.top,
                winX: i.clientX,
                winY: i.clientY,
                id: i.identifier
              }
            }
            var i = t("../core/core");
            i.prototype._hasTouchInteracted = !1,
            i.prototype.touchX = 0,
            i.prototype.touchY = 0,
            i.prototype.ptouchX = 0,
            i.prototype.ptouchY = 0,
            i.prototype.winTouchX = 0,
            i.prototype.winTouchY = 0,
            i.prototype.pwinTouchX = 0,
            i.prototype.pwinTouchY = 0,
            i.prototype.touches = [],
            i.prototype.touchIsDown = !1,
            i.prototype._updateNextTouchCoords = function(t) {
              var e = this.touchX,
                r = this.touchY,
                i = this.winTouchX,
                o = this.winTouchY;
              if ("mousedown" !== t.type && "mousemove" !== t.type && "mouseup" !== t.type && t.touches) {
                if (null !== this._curElement) {
                  var s = n(this._curElement.elt, t, 0);
                  e = s.x,
                  r = s.y,
                  i = s.winX,
                  o = s.winY;
                  for (var a = [], h = 0; h < t.touches.length; h++)
                    a[h] = n(this._curElement.elt, t, h);
                  this._setProperty("touches", a)
                }
              } else
                e = this.mouseX,
                r = this.mouseY,
                i = this.winMouseX,
                o = this.winMouseY;
              this._setProperty("touchX", e),
              this._setProperty("touchY", r),
              this._setProperty("winTouchX", i),
              this._setProperty("winTouchY", o),
              this._hasTouchInteracted || (this._updateTouchCoords(), this._setProperty("_hasTouchInteracted", !0))
            },
            i.prototype._updateTouchCoords = function() {
              this._setProperty("ptouchX", this.touchX),
              this._setProperty("ptouchY", this.touchY),
              this._setProperty("pwinTouchX", this.winTouchX),
              this._setProperty("pwinTouchY", this.winTouchY)
            },
            i.prototype._ontouchstart = function(t) {
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              this._updateNextTouchCoords(t),
              this._updateNextMouseCoords(t),
              this._setProperty("touchIsDown", !0),
              "function" == typeof r.touchStarted
                ? (e = r.touchStarted(t), e === !1 && t.preventDefault())
                : "function" == typeof r.mousePressed && (e = r.mousePressed(t), e === !1 && t.preventDefault())
            },
            i.prototype._ontouchmove = function(t) {
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              this._updateNextTouchCoords(t),
              this._updateNextMouseCoords(t),
              "function" == typeof r.touchMoved
                ? (e = r.touchMoved(t), e === !1 && t.preventDefault())
                : "function" == typeof r.mouseDragged && (e = r.mouseDragged(t), e === !1 && t.preventDefault())
            },
            i.prototype._ontouchend = function(t) {
              this._updateNextTouchCoords(t),
              this._updateNextMouseCoords(t),
              0 === this.touches.length && this._setProperty("touchIsDown", !1);
              var e,
                r = this._isGlobal
                  ? window
                  : this;
              "function" == typeof r.touchEnded
                ? (e = r.touchEnded(t), e === !1 && t.preventDefault())
                : "function" == typeof r.mouseReleased && (e = r.mouseReleased(t), e === !1 && t.preventDefault())
            },
            e.exports = i
          }, {
            "../core/core": 37
          }
        ],
        54: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              var e = 3.5 * t | 0;
              if (e = e < 1
                ? 1
                : e < 248
                  ? e
                  : 248, s !== e) {
                s = e,
                a = 1 + s << 1,
                h = new Int32Array(a),
                u = new Array(a);
                for (var r = 0; r < a; r++)
                  u[r] = new Int32Array(256);
                for (var n, i, o, c, l = 1, p = e - 1; l < e; l++) {
                  h[e + l] = h[p] = i = p * p,
                  o = u[e + l],
                  c = u[p--];
                  for (var f = 0; f < 256; f++)
                    o[f] = c[f] = i * f
                }
                n = h[e] = e * e,
                o = u[e];
                for (var d = 0; d < 256; d++)
                  o[d] = n * d
              }
            }
            function i(t, e) {
              for (var r = o._toPixels(t), i = t.width, c = t.height, l = i * c, p = new Int32Array(l), f = 0; f < l; f++)
                p[f] = o._getARGB(r, f);
              var d,
                m,
                g,
                y,
                v,
                x,
                b,
                _,
                w,
                S,
                M = new Int32Array(l),
                T = new Int32Array(l),
                R = new Int32Array(l),
                E = new Int32Array(l),
                C = 0;
              n(e);
              var A,
                P,
                I,
                O;
              for (P = 0; P < c; P++) {
                for (A = 0; A < i; A++) {
                  if (y = g = m = v = d = 0, x = A - s, x < 0)
                    S = -x,
                    x = 0;
                  else {
                    if (x >= i)
                      break;
                    S = 0
                  }
                  for (I = S; I < a && !(x >= i); I++) {
                    var L = p[x + C];
                    O = u[I],
                    v += O[(L & -16777216) >>> 24],
                    m += O[(16711680 & L) >> 16],
                    g += O[(65280 & L) >> 8],
                    y += O[255 & L],
                    d += h[I],
                    x++
                  }
                  b = C + A,
                  M[b] = v / d,
                  T[b] = m / d,
                  R[b] = g / d,
                  E[b] = y / d
                }
                C += i
              }
              for (C = 0, _ = -s, w = _ * i, P = 0; P < c; P++) {
                for (A = 0; A < i; A++) {
                  if (y = g = m = v = d = 0, _ < 0)
                    S = b = -_,
                    x = A;
                  else {
                    if (_ >= c)
                      break;
                    S = 0,
                    b = _,
                    x = A + w
                  }
                  for (I = S; I < a && !(b >= c); I++)
                    O = u[I],
                    v += O[M[x]],
                    m += O[T[x]],
                    g += O[R[x]],
                    y += O[E[x]],
                    d += h[I],
                    b++,
                    x += i;
                  p[A + C] = v / d << 24 | m / d << 16 | g / d << 8 | y / d
                }
                C += i,
                w += i,
                _++
              }
              o._setPixels(r, p)
            }
            var o = {};
            o._toPixels = function(t) {
              return t instanceof ImageData
                ? t.data
                : t.getContext("2d").getImageData(0, 0, t.width, t.height).data
            },
            o._getARGB = function(t, e) {
              var r = 4 * e;
              return t[r + 3] << 24 & 4278190080 | t[r] << 16 & 16711680 | t[r + 1] << 8 & 65280 | 255 & t[r + 2]
            },
            o._setPixels = function(t, e) {
              for (var r = 0, n = 0, i = t.length; n < i; n++)
                r = 4 * n,
                t[r + 0] = (16711680 & e[n]) >>> 16,
                t[r + 1] = (65280 & e[n]) >>> 8,
                t[r + 2] = 255 & e[n],
                t[r + 3] = (4278190080 & e[n]) >>> 24
            },
            o._toImageData = function(t) {
              return t instanceof ImageData
                ? t
                : t.getContext("2d").getImageData(0, 0, t.width, t.height)
            },
            o._createImageData = function(t, e) {
              return o._tmpCanvas = document.createElement("canvas"),
              o._tmpCtx = o._tmpCanvas.getContext("2d"),
              this._tmpCtx.createImageData(t, e)
            },
            o.apply = function(t, e, r) {
              var n = t.getContext("2d"),
                i = n.getImageData(0, 0, t.width, t.height),
                o = e(i, r);
              o instanceof ImageData
                ? n.putImageData(o, 0, 0, 0, 0, t.width, t.height)
                : n.putImageData(i, 0, 0, 0, 0, t.width, t.height)
            },
            o.threshold = function(t, e) {
              var r = o._toPixels(t);
              void 0 === e && (e = .5);
              for (var n = Math.floor(255 * e), i = 0; i < r.length; i += 4) {
                var s,
                  a = r[i],
                  h = r[i + 1],
                  u = r[i + 2],
                  c = .2126 * a + .7152 * h + .0722 * u;
                s = c >= n
                  ? 255
                  : 0,
                r[i] = r[i + 1] = r[i + 2] = s
              }
            },
            o.gray = function(t) {
              for (var e = o._toPixels(t), r = 0; r < e.length; r += 4) {
                var n = e[r],
                  i = e[r + 1],
                  s = e[r + 2],
                  a = .2126 * n + .7152 * i + .0722 * s;
                e[r] = e[r + 1] = e[r + 2] = a
              }
            },
            o.opaque = function(t) {
              for (var e = o._toPixels(t), r = 0; r < e.length; r += 4)
                e[r + 3] = 255;
              return e
            },
            o.invert = function(t) {
              for (var e = o._toPixels(t), r = 0; r < e.length; r += 4)
                e[r] = 255 - e[r],
                e[r + 1] = 255 - e[r + 1],
                e[r + 2] = 255 - e[r + 2]
            },
            o.posterize = function(t, e) {
              var r = o._toPixels(t);
              if (e < 2 || e > 255)
                throw new Error("Level must be greater than 2 and less than 255 for posterize");
              for (var n = e - 1, i = 0; i < r.length; i += 4) {
                var s = r[i],
                  a = r[i + 1],
                  h = r[i + 2];
                r[i] = 255 * (s * e >> 8) / n,
                r[i + 1] = 255 * (a * e >> 8) / n,
                r[i + 2] = 255 * (h * e >> 8) / n
              }
            },
            o.dilate = function(t) {
              for (var e, r, n, i, s, a, h, u, c, l, p, f, d, m, g, y, v, x = o._toPixels(t), b = 0, _ = x.length
                ? x.length / 4
                : 0, w = new Int32Array(_); b < _;)
                for (e = b, r = b + t.width; b < r;)
                  n = i = o._getARGB(x, b),
                  h = b - 1,
                  a = b + 1,
                  u = b - t.width,
                  c = b + t.width,
                  h < e && (h = b),
                  a >= r && (a = b),
                  u < 0 && (u = 0),
                  c >= _ && (c = b),
                  f = o._getARGB(x, u),
                  p = o._getARGB(x, h),
                  d = o._getARGB(x, c),
                  l = o._getARGB(x, a),
                  s = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n),
                  g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p),
                  m = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l),
                  y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f),
                  v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d),
                  g > s && (i = p, s = g),
                  m > s && (i = l, s = m),
                  y > s && (i = f, s = y),
                  v > s && (i = d, s = v),
                  w[b++] = i;
            o._setPixels(x, w)
            },
            o.erode = function(t) {
              for (var e, r, n, i, s, a, h, u, c, l, p, f, d, m, g, y, v, x = o._toPixels(t), b = 0, _ = x.length
                ? x.length / 4
                : 0, w = new Int32Array(_); b < _;)
                for (e = b, r = b + t.width; b < r;)
                  n = i = o._getARGB(x, b),
                  h = b - 1,
                  a = b + 1,
                  u = b - t.width,
                  c = b + t.width,
                  h < e && (h = b),
                  a >= r && (a = b),
                  u < 0 && (u = 0),
                  c >= _ && (c = b),
                  f = o._getARGB(x, u),
                  p = o._getARGB(x, h),
                  d = o._getARGB(x, c),
                  l = o._getARGB(x, a),
                  s = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n),
                  g = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p),
                  m = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l),
                  y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f),
                  v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d),
                  g < s && (i = p, s = g),
                  m < s && (i = l, s = m),
                  y < s && (i = f, s = y),
                  v < s && (i = d, s = v),
                  w[b++] = i;
            o._setPixels(x, w)
            };
            var s,
              a,
              h,
              u;
            o.blur = function(t, e) {
              i(t, e)
            },
            e.exports = o
          }, {}
        ],
        55: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = [];
            n.prototype.createImage = function(t, e) {
              return new n.Image(t, e)
            },
            n.prototype.saveCanvas = function() {
              var t,
                e,
                r;
              if (3 === arguments.length
                ? (t = arguments[0], e = arguments[1], r = arguments[2])
                : 2 === arguments.length
                  ? "object" == typeof arguments[0]
                    ? (t = arguments[0], e = arguments[1])
                    : (e = arguments[0], r = arguments[1])
                  : 1 === arguments.length && ("object" == typeof arguments[0]
                    ? t = arguments[0]
                    : e = arguments[0]), t instanceof n.Element && (t = t.elt), t instanceof HTMLCanvasElement || (t = null), r || (r = n.prototype._checkFileExtension(e, r)[1],
              "" === r && (r = "png")), t || this._curElement && this._curElement.elt && (t = this._curElement.elt), n.prototype._isSafari()) {
                var i = "Hello, Safari user!\n";
                i += "Now capturing a screenshot...\n",
                i += "To save this image,\n",
                i += "go to File --> Save As.\n",
                alert(i),
                window.location.href = t.toDataURL()
              } else {
                var o;
                if ("undefined" == typeof r)
                  r = "png",
                  o = "image/png";
                else
                  switch (r) {
                    case "png":
                      o = "image/png";
                      break;
                    case "jpeg":
                      o = "image/jpeg";
                      break;
                    case "jpg":
                      o = "image/jpeg";
                      break;
                    default:
                      o = "image/png"
                  }
                var s = "image/octet-stream",
                  a = t.toDataURL(o);
                a = a.replace(o, s),
                n.prototype.downloadFile(a, e, r)
              }
            },
            n.prototype.saveFrames = function(t, e, r, o, s) {
              var a = r || 3;
              a = n.prototype.constrain(a, 0, 15),
              a = 1e3 * a;
              var h = o || 15;
              h = n.prototype.constrain(h, 0, 22);
              var u = 0,
                c = n.prototype._makeFrame,
                l = this._curElement.elt,
                p = setInterval(function() {
                  c(t + u, e, l),
                  u++
                }, 1e3 / h);
              setTimeout(function() {
                if (clearInterval(p), s)
                  s(i);
                else
                  for (var t = 0; t < i.length; t++) {
                    var e = i[t];
                    n.prototype.downloadFile(e.imageData, e.filename, e.ext);
                  }
                i = []
              }, a + .01)
            },
            n.prototype._makeFrame = function(t, e, r) {
              var n;
              n = this
                ? this._curElement.elt
                : r;
              var o;
              if (e)
                switch (e.toLowerCase()) {
                  case "png":
                    o = "image/png";
                    break;
                  case "jpeg":
                    o = "image/jpeg";
                    break;
                  case "jpg":
                    o = "image/jpeg";
                    break;
                  default:
                    o = "image/png"
                } else
                  e = "png",
                  o = "image/png";
            var s = "image/octet-stream",
                a = n.toDataURL(o);
              a = a.replace(o, s);
              var h = {};
              h.imageData = a,
              h.filename = t,
              h.ext = e,
              i.push(h)
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        56: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              return t > 0 && t < e
                ? t
                : e
            }
            var i = t("../core/core"),
              o = t("./filters"),
              s = t("../core/canvas"),
              a = t("../core/constants");
            t("../core/error_helpers"),
            i.prototype.loadImage = function(t, e, r) {
              var n = new Image,
                o = new i.Image(1, 1, this),
                s = i._getDecrementPreload.apply(this, arguments);
              return n.onload = function() {
                o.width = o.canvas.width = n.width,
                o.height = o.canvas.height = n.height,
                o.drawingContext.drawImage(n, 0, 0),
                "function" == typeof e && e(o),
                s && e !== s && s()
              },
              n.onerror = function(t) {
                i._friendlyFileLoadError(0, n.src),
                "function" == typeof r && r !== s && r(t)
              },
              0 !== t.indexOf("data:image/") && (n.crossOrigin = "Anonymous"),
              n.src = t,
              o
            },
            i.prototype.image = function(t, e, r, i, o, a, h, u, c) {
              if (arguments.length <= 5)
                if (a = e || 0, h = r || 0, e = 0, r = 0, t.elt && t.elt.videoWidth && !t.canvas) {
                  var l = t.elt.videoWidth,
                    p = t.elt.videoHeight;
                  u = i || t.elt.width,
                  c = o || t.elt.width * p / l,
                  i = l,
                  o = p
                } else
                  u = i || t.width,
                  c = o || t.height,
                  i = t.width,
                  o = t.height;
            else {
                if (9 !== arguments.length)
                  throw "Wrong number of arguments to image()";
                e = e || 0,
                r = r || 0,
                i = n(i, t.width),
                o = n(o, t.height),
                a = a || 0,
                h = h || 0,
                u = u || t.width,
                c = c || t.height
              }
              var f = s.modeAdjust(a, h, u, c, this._renderer._imageMode);
              this._renderer.image(t, e, r, i, o, f.x, f.y, f.w, f.h)
            },
            i.prototype.tint = function() {
              var t = this.color.apply(this, arguments);
              this._renderer._tint = t.levels
            },
            i.prototype.noTint = function() {
              this._renderer._tint = null
            },
            i.prototype._getTintedImageCanvas = function(t) {
              if (!t.canvas)
                return t;
              var e = o._toPixels(t.canvas),
                r = document.createElement("canvas");
              r.width = t.canvas.width,
              r.height = t.canvas.height;
              for (var n = r.getContext("2d"), i = n.createImageData(t.canvas.width, t.canvas.height), s = i.data, a = 0; a < e.length; a += 4) {
                var h = e[a],
                  u = e[a + 1],
                  c = e[a + 2],
                  l = e[a + 3];
                s[a] = h * this._renderer._tint[0] / 255,
                s[a + 1] = u * this._renderer._tint[1] / 255,
                s[a + 2] = c * this._renderer._tint[2] / 255,
                s[a + 3] = l * this._renderer._tint[3] / 255
              }
              return n.putImageData(i, 0, 0),
              r
            },
            i.prototype.imageMode = function(t) {
              t !== a.CORNER && t !== a.CORNERS && t !== a.CENTER || (this._renderer._imageMode = t)
            },
            e.exports = i
          }, {
            "../core/canvas": 35,
            "../core/constants": 36,
            "../core/core": 37,
            "../core/error_helpers": 40,
            "./filters": 54
          }
        ],
        57: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("./filters");
            n.Image = function(t, e) {
              this.width = t,
              this.height = e,
              this.canvas = document.createElement("canvas"),
              this.canvas.width = this.width,
              this.canvas.height = this.height,
              this.drawingContext = this.canvas.getContext("2d"),
              this._pixelDensity = 1,
              this.isTexture = !1,
              this.pixels = []
            },
            n.Image.prototype._setProperty = function(t, e) {
              this[t] = e
            },
            n.Image.prototype.loadPixels = function() {
              n.Renderer2D.prototype.loadPixels.call(this)
            },
            n.Image.prototype.updatePixels = function(t, e, r, i) {
              n.Renderer2D.prototype.updatePixels.call(this, t, e, r, i)
            },
            n.Image.prototype.get = function(t, e, r, i) {
              return n.Renderer2D.prototype.get.call(this, t, e, r, i)
            },
            n.Image.prototype.set = function(t, e, r) {
              n.Renderer2D.prototype.set.call(this, t, e, r)
            },
            n.Image.prototype.resize = function(t, e) {
              0 === t && 0 === e
                ? (t = this.canvas.width, e = this.canvas.height)
                : 0 === t
                  ? t = this.canvas.width * e / this.canvas.height
                  : 0 === e && (e = this.canvas.height * t / this.canvas.width),
              t = Math.floor(t),
              e = Math.floor(e);
              var r = document.createElement("canvas");
              r.width = t,
              r.height = e,
              r.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, r.width, r.height),
              this.canvas.width = this.width = t,
              this.canvas.height = this.height = e,
              this.drawingContext.drawImage(r, 0, 0, t, e, 0, 0, t, e),
              this.pixels.length > 0 && this.loadPixels()
            },
            n.Image.prototype.copy = function() {
              n.prototype.copy.apply(this, arguments)
            },
            n.Image.prototype.mask = function(t) {
              void 0 === t && (t = this);
              var e = this.drawingContext.globalCompositeOperation,
                r = 1;
              t instanceof n.Renderer && (r = t._pInst._pixelDensity);
              var i = [
                t, 0, 0, r * t.width,
                r * t.height,
                0,
                0,
                this.width,
                this.height
              ];
              this.drawingContext.globalCompositeOperation = "destination-in",
              n.Image.prototype.copy.apply(this, i),
              this.drawingContext.globalCompositeOperation = e
            },
            n.Image.prototype.filter = function(t, e) {
              i.apply(this.canvas, i[t.toLowerCase()], e)
            },
            n.Image.prototype.blend = function() {
              n.prototype.blend.apply(this, arguments)
            },
            n.Image.prototype.save = function(t, e) {
              var r;
              if (e)
                switch (e.toLowerCase()) {
                  case "png":
                    r = "image/png";
                    break;
                  case "jpeg":
                    r = "image/jpeg";
                    break;
                  case "jpg":
                    r = "image/jpeg";
                    break;
                  default:
                    r = "image/png"
                } else
                  e = "png",
                  r = "image/png";
            var i = "image/octet-stream",
                o = this.canvas.toDataURL(r);
              o = o.replace(r, i),
              n.prototype.downloadFile(o, t, e)
            },
            e.exports = n.Image
          }, {
            "../core/core": 37,
            "./filters": 54
          }
        ],
        58: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("./filters");
            t("../color/p5.Color"),
            n.prototype.pixels = [],
            n.prototype.blend = function() {
              this._renderer
                ? this._renderer.blend.apply(this._renderer, arguments)
                : n.Renderer2D.prototype.blend.apply(this, arguments)
            },
            n.prototype.copy = function() {
              n.Renderer2D._copyHelper.apply(this, arguments)
            },
            n.prototype.filter = function(t, e) {
              i.apply(this.canvas, i[t.toLowerCase()], e)
            },
            n.prototype.get = function(t, e, r, n) {
              return this._renderer.get(t, e, r, n)
            },
            n.prototype.loadPixels = function() {
              this._renderer.loadPixels()
            },
            n.prototype.set = function(t, e, r) {
              this._renderer.set(t, e, r)
            },
            n.prototype.updatePixels = function(t, e, r, n) {
              0 !== this.pixels.length && this._renderer.updatePixels(t, e, r, n)
            },
            e.exports = n
          }, {
            "../color/p5.Color": 31,
            "../core/core": 37,
            "./filters": 54
          }
        ],
        59: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              var r = {};
              if (e = e || [], "undefined" == typeof e)
                for (var n = 0; n < t.length; n++)
                  e[n.toString()] = n;
            for (var i = 0; i < e.length; i++) {
                var o = e[i],
                  s = t[i];
                r[o] = s
              }
              return r
            }
            function i(t) {
              return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
            }
            function o(t, e) {
              e && e !== !0 && "true" !== e || (e = ""),
              t || (t = "untitled");
              var r = "";
              return t && t.indexOf(".") > -1 && (r = t.split(".").pop()),
              e && r !== e && (r = e, t = t + "." + r),
              [t, r]
            }
            function s(t) {
              document.body.removeChild(t.target)
            }
            var a = t("../core/core"),
              h = t("reqwest"),
              u = t("opentype.js");
            t("../core/error_helpers"),
            a._getDecrementPreload = function() {
              var t = arguments[arguments.length - 1];
              return (window.preload || this && this.preload) && "function" == typeof t
                ? t
                : null
            },
            a.prototype.loadFont = function(t, e, r) {
              var n = new a.Font(this),
                i = a._getDecrementPreload.apply(this, arguments);
              return u.load(t, function(o, s) {
                if (o)
                  return "undefined" != typeof r && r !== i
                    ? r(o)
                    : (a._friendlyFileLoadError(4, t), void console.error(o, t));
                n.font = s,
                "undefined" != typeof e && e(n),
                i && e !== i && i();
                var h,
                  u,
                  c = [
                    "ttf", "otf", "woff", "woff2"
                  ],
                  l = t.split("\\").pop().split("/").pop(),
                  p = l.lastIndexOf("."),
                  f = p < 1
                    ? null
                    : l.substr(p + 1);
                c.indexOf(f) > -1 && (h = l.substr(0, p), u = document.createElement("style"), u.appendChild(document.createTextNode("\n@font-face {\nfont-family: " + h + ";\nsrc: url(" + t + ");\n}\n")), document.head.appendChild(u))
              }),
              n
            },
            a.prototype.createInput = function() {
              throw "not yet implemented"
            },
            a.prototype.createReader = function() {
              throw "not yet implemented"
            },
            a.prototype.loadBytes = function() {
              throw "not yet implemented"
            },
            a.prototype.loadJSON = function() {
              for (var t, e = arguments[0], r = arguments[1], n = a._getDecrementPreload.apply(this, arguments), i = {}, o = "json", s = 2; s < arguments.length; s++) {
                var u = arguments[s];
                "string" == typeof u
                  ? "jsonp" !== u && "json" !== u || (o = u)
                  : "function" == typeof u && (t = u)
              }
              return h({
                url: e,
                type: o,
                crossOrigin: !0,
                error: function(e) {
                  t
                    ? t(e)
                    : console.log(e.statusText)
                },
                success: function(t) {
                  for (var e in t)
                    i[e] = t[e];

                  "undefined" != typeof r && r(t),
                  n && r !== n && n()
                }
              }),
              i
            },
            a.prototype.loadStrings = function(t, e, r) {
              var n = [],
                i = new XMLHttpRequest,
                o = a._getDecrementPreload.apply(this, arguments);
              return i.addEventListener("error", function(t) {
                r
                  ? r(t)
                  : console.log(t.responseText)
              }),
              i.open("GET", t, !0),
              i.onreadystatechange = function() {
                if (4 === i.readyState)
                  if (200 === i.status) {
                    var t = i.responseText.match(/[^\r\n]+/g);
                    for (var s in t)
                      n[s] = t[s];

                    "undefined" != typeof e && e(n),
                    o && e !== o && o()
                  } else
                    r
                      ? r(i)
                      : console.log(i.statusText)
                },
              i.send(null),
              n
            },
            a.prototype.loadTable = function(t) {
              for (var e = null, r = [], i = !1, o = ",", s = !1, u = a._getDecrementPreload.apply(this, arguments), c = 1; c < arguments.length; c++)
                if ("function" == typeof arguments[c] && arguments[c] !== u)
                  e = arguments[c];
                else if ("string" == typeof arguments[c])
                  if (r.push(arguments[c]), "header" === arguments[c] && (i = !0), "csv" === arguments[c]) {
                    if (s)
                      throw new Error("Cannot set multiple separator types.");
                    o = ",",
                    s = !0
                  }
                else if ("tsv" === arguments[c]) {
                if (s)
                  throw new Error("Cannot set multiple separator types.");
                o = "\t",
                s = !0
              }
              var l = new a.Table;
              return h({
                url: t,
                crossOrigin: !0,
                type: "csv"
              }).then(function(t) {
                t = t.responseText;
                for (var r, s = {}, h = 0, p = 1, f = 2, d = 4, m = '"', g = "\r", y = "\n", v = [], x = 0, b = null, _ = function() {
                  s.escaped = !1,
                  b = [],
                  S()
                },
                w = function() {
                  s.currentState = d,
                  v.push(b),
                  b = null
                },
                S = function() {
                  s.currentState = h,
                  s.token = ""
                },
                M = function() {
                  b.push(s.token),
                  S()
                };;) {
                  if (r = t[x++], null == r) {
                    if (s.escaped)
                      throw new Error("Unclosed quote in file.");
                    if (b) {
                      M(),
                      w();
                      break
                    }
                  }
                  if (null === b && _(), s.currentState === h) {
                    if (r === m) {
                      s.escaped = !0,
                      s.currentState = p;
                      continue
                    }
                    s.currentState = p
                  }
                  s.currentState === p && s.escaped
                    ? r === m
                      ? t[x] === m
                        ? (s.token += m, x++)
                        : (s.escaped = !1, s.currentState = f)
                      : s.token += r
                    : r === g
                        ? (t[x] === y && x++, M(), w())
                        : r === y
                          ? (M(), w())
                          : r === o
                            ? M()
                            : s.currentState === p && (s.token += r)
                }
                if (i)
                  l.columns = v.shift();
                else
                  for (c = 0; c < v[0].length; c++)
                    l.columns[c] = "null";
              var T;
                for (c = 0; c < v.length && (c !== v.length - 1 || 1 !== v[c].length || "undefined" !== v[c][0]); c++)
                  T = new a.TableRow,
                  T.arr = v[c],
                  T.obj = n(v[c], l.columns),
                  l.addRow(T);
                null !== e && e(l),
                u && e !== u && u()
              }).fail(function(r, n) {
                a._friendlyFileLoadError(2, t),
                "function" == typeof e && e !== u && e(!1)
              }),
              l
            },
            a.prototype.parseXML = function(t) {
              var e,
                r = new a.XML;
              if (t.children.length) {
                for (e = 0; e < t.children.length; e++) {
                  var n = parseXML(t.children[e]);
                  r.addChild(n)
                }
                r.setName(t.nodeName),
                r._setCont(t.textContent),
                r._setAttributes(t);
                for (var i = 0; i < r.children.length; i++)
                  r.children[i].parent = r;
                return r
              }
              return r.setName(t.nodeName),
              r._setCont(t.textContent),
              r._setAttributes(t),
              r
            },
            a.prototype.loadXML = function(t, e, r) {
              var n = {},
                i = a._getDecrementPreload.apply(this, arguments);
              return h({
                url: t,
                type: "xml",
                crossOrigin: !0,
                error: function(t) {
                  r
                    ? r(t)
                    : console.log(t.statusText)
                }
              }).then(function(t) {
                var r = parseXML(t.documentElement);
                for (var o in r)
                  n[o] = r[o];

                "undefined" != typeof e && e(n),
                i && e !== i && i()
              }),
              n
            },
            a.prototype.selectFolder = function() {
              throw "not yet implemented"
            },
            a.prototype.selectInput = function() {
              throw "not yet implemented"
            },
            a.prototype.httpGet = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              t.push("GET"),
              a.prototype.httpDo.apply(this, t)
            },
            a.prototype.httpPost = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              t.push("POST"),
              a.prototype.httpDo.apply(this, t)
            },
            a.prototype.httpDo = function() {
              if ("object" == typeof arguments[0])
                h(arguments[0]);
              else {
                for (var t, e, r = "GET", n = arguments[0], i = {}, o = "", s = 1; s < arguments.length; s++) {
                  var a = arguments[s];
                  "string" == typeof a
                    ? "GET" === a || "POST" === a || "PUT" === a
                      ? r = a
                      : o = a
                    : "object" == typeof a
                      ? i = a
                      : "function" == typeof a && (t
                        ? e = a
                        : t = a)
                }
                "" === o && (o = n.indexOf("json") !== -1
                  ? "json"
                  : n.indexOf("xml") !== -1
                    ? "xml"
                    : "text"),
                h({
                  url: n,
                  method: r,
                  data: i,
                  type: o,
                  crossOrigin: !0,
                  success: function(e) {
                    "undefined" != typeof t && t("text" === o
                      ? e.response
                      : e)
                  },
                  error: function(t) {
                    e
                      ? e(t)
                      : console.log(t.statusText)
                  }
                })
              }
            },
            window.URL = window.URL || window.webkitURL,
            a.prototype._pWriters = [],
            a.prototype.beginRaw = function() {
              throw "not yet implemented"
            },
            a.prototype.beginRecord = function() {
              throw "not yet implemented"
            },
            a.prototype.createOutput = function() {
              throw "not yet implemented"
            },
            a.prototype.createWriter = function(t, e) {
              var r;
              for (var n in a.prototype._pWriters)
                if (a.prototype._pWriters[n].name === t)
                  return r = new a.PrintWriter(t + window.millis(), e),
                  a.prototype._pWriters.push(r),
                  r;
            return r = new a.PrintWriter(t, e),
              a.prototype._pWriters.push(r),
              r
            },
            a.prototype.endRaw = function() {
              throw "not yet implemented"
            },
            a.prototype.endRecord = function() {
              throw "not yet implemented"
            },
            a.PrintWriter = function(t, e) {
              var r = this;
              this.name = t,
              this.content = "",
              this.print = function(t) {
                this.content += t
              },
              this.print = function(t) {
                this.content += t + "\n"
              },
              this.flush = function() {
                this.content = ""
              },
              this.close = function() {
                var n = [];
                n.push(this.content),
                a.prototype.writeFile(n, t, e);
                for (var i in a.prototype._pWriters)
                  a.prototype._pWriters[i].name === this.name && a.prototype._pWriters.splice(i, 1);
                r.flush(),
                r = {}
              }
            },
            a.prototype.saveBytes = function() {
              throw "not yet implemented"
            },
            a.prototype.save = function(t, e, r) {
              var n = arguments,
                i = this._curElement.elt;
              if (0 === n.length)
                return void a.prototype.saveCanvas(i);
              if (n[0]instanceof a.Renderer || n[0]instanceof a.Graphics)
                return void a.prototype.saveCanvas(n[0].elt, n[1], n[2]);
              if (1 === n.length && "string" == typeof n[0])
                a.prototype.saveCanvas(i, n[0]);
              else {
                var s = o(n[1], n[2])[1];
                switch (s) {
                  case "json":
                    return void a.prototype.saveJSON(n[0], n[1], n[2]);
                  case "txt":
                    return void a.prototype.saveStrings(n[0], n[1], n[2]);
                  default:
                    n[0]instanceof Array
                      ? a.prototype.saveStrings(n[0], n[1], n[2])
                      : n[0]instanceof a.Table
                        ? a.prototype.saveTable(n[0], n[1], n[2], n[3])
                        : n[0]instanceof a.Image
                          ? a.prototype.saveCanvas(n[0].canvas, n[1])
                          : n[0]instanceof a.SoundFile && a.prototype.saveSound(n[0], n[1], n[2], n[3])
                }
              }
            },
            a.prototype.saveJSON = function(t, e, r) {
              var n;
              n = r
                ? JSON.stringify(t)
                : JSON.stringify(t, void 0, 2),
              console.log(n),
              this.saveStrings(n.split("\n"), e, "json")
            },
            a.prototype.saveJSONObject = a.prototype.saveJSON,
            a.prototype.saveJSONArray = a.prototype.saveJSON,
            a.prototype.saveStream = function() {
              throw "not yet implemented"
            },
            a.prototype.saveStrings = function(t, e, r) {
              for (var n = r || "txt", i = this.createWriter(e, n), o = 0; o < t.length; o++)
                o < t.length - 1
                  ? i.print(t[o])
                  : i.print(t[o]);
              i.close(),
              i.flush()
            },
            a.prototype.saveXML = function() {
              throw "not yet implemented"
            },
            a.prototype.selectOutput = function() {
              throw "not yet implemented"
            },
            a.prototype.saveTable = function(t, e, r) {
              var n = this.createWriter(e, r),
                o = t.columns,
                s = ",";
              if ("tsv" === r && (s = "\t"), "html" !== r) {
                if ("0" !== o[0])
                  for (var a = 0; a < o.length; a++)
                    a < o.length - 1
                      ? n.print(o[a] + s)
                      : n.print(o[a]);
                for (var h = 0; h < t.rows.length; h++) {
                  var u;
                  for (u = 0; u < t.rows[h].arr.length; u++)
                    u < t.rows[h].arr.length - 1
                      ? n.print(t.rows[h].arr[u] + s)
                      : h < t.rows.length - 1
                        ? n.print(t.rows[h].arr[u])
                        : n.print(t.rows[h].arr[u])
                    }
              } else {
                n.print("<html>"),
                n.print("<head>");
                var c = '  <meta http-equiv="content-type" content';
                if (c += '="text/html;charset=utf-8" />', n.print(c), n.print("</head>"), n.print("<body>"), n.print("  <table>"), "0" !== o[0]) {
                  n.print("    <tr>");
                  for (var l = 0; l < o.length; l++) {
                    var p = i(o[l]);
                    n.print("      <td>" + p),
                    n.print("      </td>")
                  }
                  n.print("    </tr>")
                }
                for (var f = 0; f < t.rows.length; f++) {
                  n.print("    <tr>");
                  for (var d = 0; d < t.columns.length; d++) {
                    var m = t.rows[f].getString(d),
                      g = i(m);
                    n.print("      <td>" + g),
                    n.print("      </td>")
                  }
                  n.print("    </tr>")
                }
                n.print("  </table>"),
                n.print("</body>"),
                n.print("</html>")
              }
              n.close(),
              n.flush()
            },
            a.prototype.writeFile = function(t, e, r) {
              var n = "application/octet-stream";
              a.prototype._isSafari() && (n = "text/plain");
              var i = new Blob(t, {type: n}),
                o = window.URL.createObjectURL(i);
              a.prototype.downloadFile(o, e, r)
            },
            a.prototype.downloadFile = function(t, e, r) {
              var n = o(e, r),
                i = n[0],
                h = n[1],
                u = document.createElement("a");
              if (u.href = t, u.download = i, u.onclick = s, u.style.display = "none", document.body.appendChild(u), a.prototype._isSafari()) {
                var c = "Hello, Safari user! To download this file...\n";
                c += "1. Go to File --> Save As.\n",
                c += '2. Choose "Page Source" as the Format.\n',
                c += '3. Name it with this extension: ."' + h + '"',
                alert(c)
              }
              u.click(),
              t = null
            },
            a.prototype._checkFileExtension = o,
            a.prototype._isSafari = function() {
              var t = Object.prototype.toString.call(window.HTMLElement);
              return t.indexOf("Constructor") > 0
            },
            e.exports = a
          }, {
            "../core/core": 37,
            "../core/error_helpers": 40,
            "opentype.js": 8,
            reqwest: 27
          }
        ],
        60: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.Table = function(t) {
              this.columns = [],
              this.rows = []
            },
            n.Table.prototype.addRow = function(t) {
              var e = t || new n.TableRow;
              if ("undefined" == typeof e.arr || "undefined" == typeof e.obj)
                throw "invalid TableRow: " + e;
              return e.table = this,
              this.rows.push(e),
              e
            },
            n.Table.prototype.removeRow = function(t) {
              this.rows[t].table = null;
              var e = this.rows.splice(t + 1, this.rows.length);
              this.rows.pop(),
              this.rows = this.rows.concat(e)
            },
            n.Table.prototype.getRow = function(t) {
              return this.rows[t]
            },
            n.Table.prototype.getRows = function() {
              return this.rows
            },
            n.Table.prototype.findRow = function(t, e) {
              if ("string" == typeof e) {
                for (var r = 0; r < this.rows.length; r++)
                  if (this.rows[r].obj[e] === t)
                    return this.rows[r]
                }
              else
                for (var n = 0; n < this.rows.length; n++)
                  if (this.rows[n].arr[e] === t)
                    return this.rows[n];
            return null
            },
            n.Table.prototype.findRows = function(t, e) {
              var r = [];
              if ("string" == typeof e)
                for (var n = 0; n < this.rows.length; n++)
                  this.rows[n].obj[e] === t && r.push(this.rows[n]);
            else
                for (var i = 0; i < this.rows.length; i++)
                  this.rows[i].arr[e] === t && r.push(this.rows[i]);
            return r
            },
            n.Table.prototype.matchRow = function(t, e) {
              if ("number" == typeof e) {
                for (var r = 0; r < this.rows.length; r++)
                  if (this.rows[r].arr[e].match(t))
                    return this.rows[r]
                }
              else
                for (var n = 0; n < this.rows.length; n++)
                  if (this.rows[n].obj[e].match(t))
                    return this.rows[n];
            return null
            },
            n.Table.prototype.matchRows = function(t, e) {
              var r = [];
              if ("number" == typeof e)
                for (var n = 0; n < this.rows.length; n++)
                  this.rows[n].arr[e].match(t) && r.push(this.rows[n]);
            else
                for (var i = 0; i < this.rows.length; i++)
                  this.rows[i].obj[e].match(t) && r.push(this.rows[i]);
            return r
            },
            n.Table.prototype.getColumn = function(t) {
              var e = [];
              if ("string" == typeof t)
                for (var r = 0; r < this.rows.length; r++)
                  e.push(this.rows[r].obj[t]);
            else
                for (var n = 0; n < this.rows.length; n++)
                  e.push(this.rows[n].arr[t]);
            return e
            },
            n.Table.prototype.clearRows = function() {
              delete this.rows,
              this.rows = []
            },
            n.Table.prototype.addColumn = function(t) {
              var e = t || null;
              this.columns.push(e)
            },
            n.Table.prototype.getColumnCount = function() {
              return this.columns.length
            },
            n.Table.prototype.getRowCount = function() {
              return this.rows.length
            },
            n.Table.prototype.removeTokens = function(t, e) {
              for (var r = function(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
              },
              n = [],
              i = 0; i < t.length; i++)
                n.push(r(t.charAt(i)));
              var o = new RegExp(n.join("|"), "g");
              if ("undefined" == typeof e)
                for (var s = 0; s < this.columns.length; s++)
                  for (var a = 0; a < this.rows.length; a++) {
                    var h = this.rows[a].arr[s];
                    h = h.replace(o, ""),
                    this.rows[a].arr[s] = h,
                    this.rows[a].obj[this.columns[s]] = h
                  }
                else if ("string" == typeof e)
                  for (var u = 0; u < this.rows.length; u++) {
                    var c = this.rows[u].obj[e];
                    c = c.replace(o, ""),
                    this.rows[u].obj[e] = c;
                    var l = this.columns.indexOf(e);
                    this.rows[u].arr[l] = c
                  }
                else
                for (var p = 0; p < this.rows.length; p++) {
                  var f = this.rows[p].arr[e];
                  f = f.replace(o, ""),
                  this.rows[p].arr[e] = f,
                  this.rows[p].obj[this.columns[e]] = f
                }
              },
            n.Table.prototype.trim = function(t) {
              var e = new RegExp(" ", "g");
              if ("undefined" == typeof t)
                for (var r = 0; r < this.columns.length; r++)
                  for (var n = 0; n < this.rows.length; n++) {
                    var i = this.rows[n].arr[r];
                    i = i.replace(e, ""),
                    this.rows[n].arr[r] = i,
                    this.rows[n].obj[this.columns[r]] = i
                  }
                else if ("string" == typeof t)
                  for (var o = 0; o < this.rows.length; o++) {
                    var s = this.rows[o].obj[t];
                    s = s.replace(e, ""),
                    this.rows[o].obj[t] = s;
                    var a = this.columns.indexOf(t);
                    this.rows[o].arr[a] = s
                  }
                else
                for (var h = 0; h < this.rows.length; h++) {
                  var u = this.rows[h].arr[t];
                  u = u.replace(e, ""),
                  this.rows[h].arr[t] = u,
                  this.rows[h].obj[this.columns[t]] = u
                }
              },
            n.Table.prototype.removeColumn = function(t) {
              var e,
                r;
              "string" == typeof t
                ? (e = t, r = this.columns.indexOf(t), console.log("string"))
                : (r = t, e = this.columns[t]);
              var n = this.columns.splice(r + 1, this.columns.length);
              this.columns.pop(),
              this.columns = this.columns.concat(n);
              for (var i = 0; i < this.rows.length; i++) {
                var o = this.rows[i].arr,
                  s = o.splice(r + 1, o.length);
                o.pop(),
                this.rows[i].arr = o.concat(s),
                delete this.rows[i].obj[e]
              }
            },
            n.Table.prototype.set = function(t, e, r) {
              this.rows[t].set(e, r)
            },
            n.Table.prototype.setNum = function(t, e, r) {
              this.rows[t].setNum(e, r)
            },
            n.Table.prototype.setString = function(t, e, r) {
              this.rows[t].setString(e, r)
            },
            n.Table.prototype.get = function(t, e) {
              return this.rows[t].get(e)
            },
            n.Table.prototype.getNum = function(t, e) {
              return this.rows[t].getNum(e)
            },
            n.Table.prototype.getString = function(t, e) {
              return this.rows[t].getString(e)
            },
            n.Table.prototype.getObject = function(t) {
              for (var e, r, n, i = {}, o = 0; o < this.rows.length; o++)
                if (e = this.rows[o].obj, "string" == typeof t) {
                  if (r = this.columns.indexOf(t), !(r >= 0))
                    throw 'This table has no column named "' + t + '"';
                  n = e[t],
                  i[n] = e
                }
              else
                i[o] = this.rows[o].obj;
              return i
            },
            n.Table.prototype.getArray = function() {
              for (var t = [], e = 0; e < this.rows.length; e++)
                t.push(this.rows[e].arr);
              return t
            },
            e.exports = n.Table
          }, {
            "../core/core": 37
          }
        ],
        61: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.TableRow = function(t, e) {
              var r = [],
                n = {};
              t && (e = e || ",", r = t.split(e));
              for (var i = 0; i < r.length; i++) {
                var o = i,
                  s = r[i];
                n[o] = s
              }
              this.arr = r,
              this.obj = n,
              this.table = null
            },
            n.TableRow.prototype.set = function(t, e) {
              if ("string" == typeof t) {
                var r = this.table.columns.indexOf(t);
                if (!(r >= 0))
                  throw 'This table has no column named "' + t + '"';
                this.obj[t] = e,
                this.arr[r] = e
              } else {
                if (!(t < this.table.columns.length))
                  throw "Column #" + t + " is out of the range of this table";
                this.arr[t] = e;
                var n = this.table.columns[t];
                this.obj[n] = e
              }
            },
            n.TableRow.prototype.setNum = function(t, e) {
              var r = parseFloat(e, 10);
              this.set(t, r)
            },
            n.TableRow.prototype.setString = function(t, e) {
              var r = e.toString();
              this.set(t, r)
            },
            n.TableRow.prototype.get = function(t) {
              return "string" == typeof t
                ? this.obj[t]
                : this.arr[t]
            },
            n.TableRow.prototype.getNum = function(t) {
              var e;
              if (e = "string" == typeof t
                ? parseFloat(this.obj[t], 10)
                : parseFloat(this.arr[t], 10), "NaN" === e.toString())
                throw "Error: " + this.obj[t] + " is NaN (Not a Number)";
              return e
            },
            n.TableRow.prototype.getString = function(t) {
              return "string" == typeof t
                ? this.obj[t].toString()
                : this.arr[t].toString()
            },
            e.exports = n.TableRow
          }, {
            "../core/core": 37
          }
        ],
        62: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.XML = function() {
              this.name = null,
              this.attributes = {},
              this.children = [],
              this.parent = null,
              this.content = null
            },
            n.XML.prototype.getParent = function() {
              return this.parent
            },
            n.XML.prototype.getName = function() {
              return this.name
            },
            n.XML.prototype.setName = function(t) {
              this.name = t
            },
            n.XML.prototype.hasChildren = function() {
              return this.children.length > 0
            },
            n.XML.prototype.listChildren = function() {
              return this.children.map(function(t) {
                return t.name
              })
            },
            n.XML.prototype.getChildren = function(t) {
              return t
                ? this.children.filter(function(e) {
                  return e.name === t
                })
                : this.children
            },
            n.XML.prototype.getChild = function(t) {
              return "string" == typeof t
                ? this.children.find(function(e) {
                  return e.name === t
                })
                : this.children[t]
            },
            n.XML.prototype.addChild = function(t) {
              t instanceof n.XML && this.children.push(t)
            },
            n.XML.prototype.removeChild = function(t) {
              var e = -1;
              if ("string" == typeof t) {
                for (var r = 0; r < this.children.length; r++)
                  if (this.children[r].name === t) {
                    e = r;
                    break
                  }
                } else
                e = t;
              e !== -1 && this.children.splice(e, 1)
            },
            n.XML.prototype.getAttributeCount = function() {
              return Object.keys(this.attributes).length
            },
            n.XML.prototype.listAttributes = function() {
              return Object.keys(this.attributes)
            },
            n.XML.prototype.hasAttribute = function(t) {
              return !!this.attributes[t]
            },
            n.XML.prototype.getNumber = function(t, e) {
              return Number(this.attributes[t]) || e || 0
            },
            n.XML.prototype.getString = function(t, e) {
              return String(this.attributes[t]) || e || null
            },
            n.XML.prototype.setAttribute = function(t, e) {
              this.attributes[t] && (this.attributes[t] = e)
            },
            n.XML.prototype.getContent = function(t) {
              return this.content || t || null
            },
            n.XML.prototype.setContent = function(t) {
              this.children.length || (this.content = t)
            },
            n.XML.prototype._setCont = function(t) {
              var e;
              e = t,
              e = e.replace(/\s\s+/g, ","),
              this.content = e
            },
            n.XML.prototype._setAttributes = function(t) {
              var e,
                r = {};
              for (e = 0; e < t.attributes.length; e++)
                r[t.attributes[e].nodeName] = t.attributes[e].nodeValue;
              this.attributes = r
            },
            e.exports = n.XML
          }, {
            "../core/core": 37
          }
        ],
        63: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.abs = Math.abs,
            n.prototype.ceil = Math.ceil,
            n.prototype.constrain = function(t, e, r) {
              return Math.max(Math.min(t, r), e)
            },
            n.prototype.dist = function(t, e, r, n, i, o) {
              return 4 === arguments.length
                ? Math.sqrt((r - t) * (r - t) + (n - e) * (n - e))
                : 6 === arguments.length
                  ? Math.sqrt((n - t) * (n - t) + (i - e) * (i - e) + (o - r) * (o - r))
                  : void 0
            },
            n.prototype.exp = Math.exp,
            n.prototype.floor = Math.floor,
            n.prototype.lerp = function(t, e, r) {
              return r * (e - t) + t
            },
            n.prototype.log = Math.log,
            n.prototype.mag = function(t, e) {
              return Math.sqrt(t * t + e * e)
            },
            n.prototype.map = function(t, e, r, n, i) {
              return (t - e) / (r - e) * (i - n) + n
            },
            n.prototype.max = function() {
              return arguments[0]instanceof Array
                ? Math.max.apply(null, arguments[0])
                : Math.max.apply(null, arguments)
            },
            n.prototype.min = function() {
              return arguments[0]instanceof Array
                ? Math.min.apply(null, arguments[0])
                : Math.min.apply(null, arguments)
            },
            n.prototype.norm = function(t, e, r) {
              return this.map(t, e, r, 0, 1)
            },
            n.prototype.pow = Math.pow,
            n.prototype.round = Math.round,
            n.prototype.sq = function(t) {
              return t * t
            },
            n.prototype.sqrt = Math.sqrt,
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        64: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.createVector = function(t, e, r) {
              return this instanceof n
                ? new n.Vector(this, arguments)
                : new n.Vector(t, e, r)
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        65: [
          function(t, e, r) {
            "use strict";
            var n,
              i = t("../core/core"),
              o = 4,
              s = 1 << o,
              a = 8,
              h = 1 << a,
              u = 4095,
              c = 4,
              l = .5,
              p = function(t) {
                return.5 * (1 - Math.cos(t * Math.PI))
              };
            i.prototype.noise = function(t, e, r) {
              if (e = e || 0, r = r || 0, null == n) {
                n = new Array(u + 1);
                for (var i = 0; i < u + 1; i++)
                  n[i] = Math.random()
              }
              t < 0 && (t = -t),
              e < 0 && (e = -e),
              r < 0 && (r = -r);
              for (var f, d, m, g, y, v = Math.floor(t), x = Math.floor(e), b = Math.floor(r), _ = t - v, w = e - x, S = r - b, M = 0, T = .5, R = 0; R < c; R++) {
                var E = v + (x << o) + (b << a);
                f = p(_),
                d = p(w),
                m = n[E & u],
                m += f * (n[E + 1 & u] - m),
                g = n[E + s & u],
                g += f * (n[E + s + 1 & u] - g),
                m += d * (g - m),
                E += h,
                g = n[E & u],
                g += f * (n[E + 1 & u] - g),
                y = n[E + s & u],
                y += f * (n[E + s + 1 & u] - y),
                g += d * (y - g),
                m += p(S) * (g - m),
                M += m * T,
                T *= l,
                v <<= 1,
                _ *= 2,
                x <<= 1,
                w *= 2,
                b <<= 1,
                S *= 2,
                _ >= 1 && (v++, _--),
                w >= 1 && (x++, w--),
                S >= 1 && (b++, S--)
              }
              return M
            },
            i.prototype.noiseDetail = function(t, e) {
              t > 0 && (c = t),
              e > 0 && (l = e)
            },
            i.prototype.noiseSeed = function(t) {
              var e = function() {
                var t,
                  e,
                  r = 4294967296,
                  n = 1664525,
                  i = 1013904223;
                return {
                  setSeed: function(n) {
                    e = t = (null == n
                      ? Math.random() * r
                      : n) >>> 0
                  },
                  getSeed: function() {
                    return t
                  },
                  rand: function() {
                    return e = (n * e + i) % r,
                    e / r
                  }
                }
              }();
              e.setSeed(t),
              n = new Array(u + 1);
              for (var r = 0; r < u + 1; r++)
                n[r] = e.rand()
            },
            e.exports = i
          }, {
            "../core/core": 37
          }
        ],
        66: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("./polargeometry"),
              o = t("../core/constants");
            n.Vector = function() {
              var t,
                e,
                r;
              arguments[0]instanceof n
                ? (this.p5 = arguments[0], t = arguments[1][0] || 0,
                e = arguments[1][1] || 0,
                r = arguments[1][2] || 0)
                : (t = arguments[0] || 0, e = arguments[1] || 0, r = arguments[2] || 0),
              this.x = t,
              this.y = e,
              this.z = r
            },
            n.Vector.prototype.toString = function() {
              return "p5.Vector Object : [" + this.x + ", " + this.y + ", " + this.z + "]"
            },
            n.Vector.prototype.set = function(t, e, r) {
              return t instanceof n.Vector
                ? (this.x = t.x || 0, this.y = t.y || 0, this.z = t.z || 0, this)
                : t instanceof Array
                  ? (this.x = t[0] || 0, this.y = t[1] || 0, this.z = t[2] || 0, this)
                  : (this.x = t || 0, this.y = e || 0, this.z = r || 0, this)
            },
            n.Vector.prototype.copy = function() {
              return this.p5
                ? new n.Vector(this.p5, [this.x, this.y, this.z])
                : new n.Vector(this.x, this.y, this.z)
            },
            n.Vector.prototype.add = function(t, e, r) {
              return t instanceof n.Vector
                ? (this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this)
                : t instanceof Array
                  ? (this.x += t[0] || 0, this.y += t[1] || 0, this.z += t[2] || 0, this)
                  : (this.x += t || 0, this.y += e || 0, this.z += r || 0, this)
            },
            n.Vector.prototype.sub = function(t, e, r) {
              return t instanceof n.Vector
                ? (this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this)
                : t instanceof Array
                  ? (this.x -= t[0] || 0, this.y -= t[1] || 0, this.z -= t[2] || 0, this)
                  : (this.x -= t || 0, this.y -= e || 0, this.z -= r || 0, this)
            },
            n.Vector.prototype.mult = function(t) {
              return this.x *= t || 0,
              this.y *= t || 0,
              this.z *= t || 0,
              this
            },
            n.Vector.prototype.div = function(t) {
              return this.x /= t,
              this.y /= t,
              this.z /= t,
              this
            },
            n.Vector.prototype.mag = function() {
              return Math.sqrt(this.magSq())
            },
            n.Vector.prototype.magSq = function() {
              var t = this.x,
                e = this.y,
                r = this.z;
              return t * t + e * e + r * r
            },
            n.Vector.prototype.dot = function(t, e, r) {
              return t instanceof n.Vector
                ? this.dot(t.x, t.y, t.z)
                : this.x * (t || 0) + this.y * (e || 0) + this.z * (r || 0)
            },
            n.Vector.prototype.cross = function(t) {
              var e = this.y * t.z - this.z * t.y,
                r = this.z * t.x - this.x * t.z,
                i = this.x * t.y - this.y * t.x;
              return this.p5
                ? new n.Vector(this.p5, [e, r, i])
                : new n.Vector(e, r, i)
            },
            n.Vector.prototype.dist = function(t) {
              var e = t.copy().sub(this);
              return e.mag()
            },
            n.Vector.prototype.normalize = function() {
              return 0 === this.mag()
                ? this
                : this.div(this.mag())
            },
            n.Vector.prototype.limit = function(t) {
              var e = this.magSq();
              return e > t * t && (this.div(Math.sqrt(e)), this.mult(t)),
              this
            },
            n.Vector.prototype.setMag = function(t) {
              return this.normalize().mult(t)
            },
            n.Vector.prototype.heading = function() {
              var t = Math.atan2(this.y, this.x);
              return this.p5
                ? this.p5._angleMode === o.RADIANS
                  ? t
                  : i.radiansToDegrees(t)
                : t
            },
            n.Vector.prototype.rotate = function(t) {
              this.p5 && this.p5._angleMode === o.DEGREES && (t = i.degreesToRadians(t));
              var e = this.heading() + t,
                r = this.mag();
              return this.x = Math.cos(e) * r,
              this.y = Math.sin(e) * r,
              this
            },
            n.Vector.prototype.lerp = function(t, e, r, i) {
              return t instanceof n.Vector
                ? this.lerp(t.x, t.y, t.z, e)
                : (this.x += (t - this.x) * i || 0, this.y += (e - this.y) * i || 0, this.z += (r - this.z) * i || 0, this)
            },
            n.Vector.prototype.array = function() {
              return [
                this.x || 0,
                this.y || 0,
                this.z || 0
              ]
            },
            n.Vector.prototype.equals = function(t, e, r) {
              var i,
                o,
                s;
              return t instanceof n.Vector
                ? (i = t.x || 0, o = t.y || 0, s = t.z || 0)
                : t instanceof Array
                  ? (i = t[0] || 0, o = t[1] || 0, s = t[2] || 0)
                  : (i = t || 0, o = e || 0, s = r || 0),
              this.x === i && this.y === o && this.z === s
            },
            n.Vector.fromAngle = function(t) {
              return this.p5 && this.p5._angleMode === o.DEGREES && (t = i.degreesToRadians(t)),
              this.p5
                ? new n.Vector(this.p5, [Math.cos(t), Math.sin(t), 0])
                : new n.Vector(Math.cos(t), Math.sin(t), 0)
            },
            n.Vector.random2D = function() {
              var t;
              return t = this.p5
                ? this.p5._angleMode === o.DEGREES
                  ? this.p5.random(360)
                  : this.p5.random(o.TWO_PI)
                : Math.random() * Math.PI * 2,
              this.fromAngle(t)
            },
            n.Vector.random3D = function() {
              var t,
                e;
              this.p5
                ? (t = this.p5.random(0, o.TWO_PI), e = this.p5.random(-1, 1))
                : (t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1);
              var r = Math.sqrt(1 - e * e) * Math.cos(t),
                i = Math.sqrt(1 - e * e) * Math.sin(t);
              return this.p5
                ? new n.Vector(this.p5, [r, i, e])
                : new n.Vector(r, i, e)
            },
            n.Vector.add = function(t, e, r) {
              return r
                ? r.set(t)
                : r = t.copy(),
              r.add(e),
              r
            },
            n.Vector.sub = function(t, e, r) {
              return r
                ? r.set(t)
                : r = t.copy(),
              r.sub(e),
              r
            },
            n.Vector.mult = function(t, e, r) {
              return r
                ? r.set(t)
                : r = t.copy(),
              r.mult(e),
              r
            },
            n.Vector.div = function(t, e, r) {
              return r
                ? r.set(t)
                : r = t.copy(),
              r.div(e),
              r
            },
            n.Vector.dot = function(t, e) {
              return t.dot(e)
            },
            n.Vector.cross = function(t, e) {
              return t.cross(e)
            },
            n.Vector.dist = function(t, e) {
              return t.dist(e)
            },
            n.Vector.lerp = function(t, e, r, n) {
              return n
                ? n.set(t)
                : n = t.copy(),
              n.lerp(e, r),
              n
            },
            n.Vector.angleBetween = function(t, e) {
              var r = Math.acos(t.dot(e) / (t.mag() * e.mag()));
              return this.p5 && this.p5._angleMode === o.DEGREES && (r = i.radiansToDegrees(r)),
              r
            },
            n.Vector.mag = function(t) {
              var e = t.x,
                r = t.y,
                n = t.z,
                i = e * e + r * r + n * n;
              return Math.sqrt(i)
            },
            e.exports = n.Vector
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "./polargeometry": 67
          }
        ],
        67: [
          function(t, e, r) {
            e.exports = {
              degreesToRadians: function(t) {
                return 2 * Math.PI * t / 360
              },
              radiansToDegrees: function(t) {
                return 360 * t / (2 * Math.PI)
              }
            }
          }, {}
        ],
        68: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = !1,
              o = function() {
                var t,
                  e,
                  r = 4294967296,
                  n = 1664525,
                  i = 1013904223;
                return {
                  setSeed: function(n) {
                    e = t = (null == n
                      ? Math.random() * r
                      : n) >>> 0
                  },
                  getSeed: function() {
                    return t
                  },
                  rand: function() {
                    return e = (n * e + i) % r,
                    e / r
                  }
                }
              }();
            n.prototype.randomSeed = function(t) {
              o.setSeed(t),
              i = !0
            },
            n.prototype.random = function(t, e) {
              var r;
              if (r = i
                ? o.rand()
                : Math.random(), "undefined" == typeof t)
                return r;
              if ("undefined" == typeof e)
                return t instanceof Array
                  ? t[Math.floor(r * t.length)]
                  : r * t;
              if (t > e) {
                var n = t;
                t = e,
                e = n
              }
              return r * (e - t) + t
            };
            var s,
              a = !1;
            n.prototype.randomGaussian = function(t, e) {
              var r,
                n,
                i,
                o;
              if (a)
                r = s,
                a = !1;
              else {
                do
                  n = this.random(2) - 1,
                  i = this.random(2) - 1,
                  o = n * n + i * i;
                while (o >= 1);
                o = Math.sqrt(-2 * Math.log(o) / o),
                r = n * o,
                s = i * o,
                a = !0
              }
              var h = t || 0,
                u = e || 1;
              return r * u + h
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        69: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("./polargeometry"),
              o = t("../core/constants");
            n.prototype._angleMode = o.RADIANS,
            n.prototype.acos = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.acos(t)
                : i.radiansToDegrees(Math.acos(t))
            },
            n.prototype.asin = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.asin(t)
                : i.radiansToDegrees(Math.asin(t))
            },
            n.prototype.atan = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.atan(t)
                : i.radiansToDegrees(Math.atan(t))
            },
            n.prototype.atan2 = function(t, e) {
              return this._angleMode === o.RADIANS
                ? Math.atan2(t, e)
                : i.radiansToDegrees(Math.atan2(t, e))
            },
            n.prototype.cos = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.cos(t)
                : Math.cos(this.radians(t))
            },
            n.prototype.sin = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.sin(t)
                : Math.sin(this.radians(t))
            },
            n.prototype.tan = function(t) {
              return this._angleMode === o.RADIANS
                ? Math.tan(t)
                : Math.tan(this.radians(t));
            },
            n.prototype.degrees = function(t) {
              return i.radiansToDegrees(t)
            },
            n.prototype.radians = function(t) {
              return i.degreesToRadians(t)
            },
            n.prototype.angleMode = function(t) {
              t !== o.DEGREES && t !== o.RADIANS || (this._angleMode = t)
            },
            e.exports = n
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "./polargeometry": 67
          }
        ],
        70: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.textAlign = function(t, e) {
              return this._renderer.textAlign.apply(this._renderer, arguments)
            },
            n.prototype.textLeading = function(t) {
              return this._renderer.textLeading.apply(this._renderer, arguments)
            },
            n.prototype.textSize = function(t) {
              return this._renderer.textSize.apply(this._renderer, arguments)
            },
            n.prototype.textStyle = function(t) {
              return this._renderer.textStyle.apply(this._renderer, arguments)
            },
            n.prototype.textWidth = function(t) {
              return 0 === t.length
                ? 0
                : this._renderer.textWidth.apply(this._renderer, arguments)
            },
            n.prototype.textAscent = function() {
              return this._renderer.textAscent()
            },
            n.prototype.textDescent = function() {
              return this._renderer.textDescent()
            },
            n.prototype._updateTextMetrics = function() {
              return this._renderer._updateTextMetrics()
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        71: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("../core/constants");
            t("../core/error_helpers"),
            n.prototype.text = function(t, e, r, n, i) {
              for (var o = new Array(arguments.length), s = 0; s < o.length; ++s)
                o[s] = arguments[s];
              return this._validateParameters("text", o, [
                [
                  "*", "Number", "Number"
                ],
                ["*", "Number", "Number", "Number", "Number"]
              ]),
              this._renderer._doFill || this._renderer._doStroke
                ? this._renderer.text.apply(this._renderer, arguments)
                : this
            },
            n.prototype.textFont = function(t, e) {
              if (arguments.length) {
                if (!t)
                  throw Error("null font passed to textFont");
                return this._renderer._setProperty("_textFont", t),
                e && (this._renderer._setProperty("_textSize", e), this._renderer._setProperty("_textLeading", e * i._DEFAULT_LEADMULT)),
                this._renderer._applyTextProperties()
              }
              return this
            },
            e.exports = n
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "../core/error_helpers": 40
          }
        ],
        72: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              for (var r = a(e, {
                sampleFactor: .1,
                simplifyThreshold: 0
              }), n = f(t, 0, 1), o = n / (n * r.sampleFactor), s = [], h = 0; h < n; h += o)
                s.push(f(t, h));
              return r.simplifyThreshold && i(s, r.simplifyThreshold),
              s
            }
            function i(t, e) {
              e = "undefined" == typeof e
                ? 0
                : e;
              for (var r = 0, n = t.length - 1; t.length > 3 && n >= 0; --n)
                u(h(t, n - 1), h(t, n), h(t, n + 1), e) && (t.splice(n % t.length, 1), r++);
              return r
            }
            function o(t) {
              for (var e, r = [], n = 0; n < t.length; n++)
                "M" === t[n].type && (e && r.push(e), e = []),
                e.push(s(t[n]));
              return r.push(e),
              r
            }
            function s(t) {
              var e = [t.type];
              return "M" === t.type || "L" === t.type
                ? e.push(t.x, t.y)
                : "C" === t.type
                  ? e.push(t.x1, t.y1, t.x2, t.y2, t.x, t.y)
                  : "Q" === t.type && e.push(t.x1, t.y1, t.x, t.y),
              e
            }
            function a(t, e) {
              if ("object" != typeof t)
                t = e;
              else
                for (var r in e)
                  "undefined" == typeof t[r] && (t[r] = e[r]);
            return t
            }
            function h(t, e) {
              var r = t.length;
              return t[e < 0
                  ? e % r + r
                  : e % r]
            }
            function u(t, e, r, n) {
              if (!n)
                return 0 === c(t, e, r);

              "undefined" == typeof u.tmpPoint1 && (u.tmpPoint1 = [], u.tmpPoint2 = []);
              var i = u.tmpPoint1,
                o = u.tmpPoint2;
              i.x = e.x - t.x,
              i.y = e.y - t.y,
              o.x = r.x - e.x,
              o.y = r.y - e.y;
              var s = i.x * o.x + i.y * o.y,
                a = Math.sqrt(i.x * i.x + i.y * i.y),
                h = Math.sqrt(o.x * o.x + o.y * o.y),
                l = Math.acos(s / (a * h));
              return l < n
            }
            function c(t, e, r) {
              return (e[0] - t[0]) * (r[1] - t[1]) - (r[0] - t[0]) * (e[1] - t[1])
            }
            function l(t, e, r, n, i, o, s, a, h) {
              var u = 1 - h,
                c = Math.pow(u, 3),
                l = Math.pow(u, 2),
                p = h * h,
                f = p * h,
                d = c * t + 3 * l * h * r + 3 * u * h * h * i + f * s,
                m = c * e + 3 * l * h * n + 3 * u * h * h * o + f * a,
                g = t + 2 * h * (r - t) + p * (i - 2 * r + t),
                y = e + 2 * h * (n - e) + p * (o - 2 * n + e),
                v = r + 2 * h * (i - r) + p * (s - 2 * i + r),
                x = n + 2 * h * (o - n) + p * (a - 2 * o + n),
                b = u * t + h * r,
                _ = u * e + h * n,
                w = u * i + h * s,
                S = u * o + h * a,
                M = 90 - 180 * Math.atan2(g - v, y - x) / Math.PI;
              return (g > v || y < x) && (M += 180), {
                x: d,
                y: m,
                m: {
                  x: g,
                  y: y
                },
                n: {
                  x: v,
                  y: x
                },
                start: {
                  x: b,
                  y: _
                },
                end: {
                  x: w,
                  y: S
                },
                alpha: M
              }
            }
            function p(t, e, r, n, i, o, s, a, h) {
              return null == h
                ? b(t, e, r, n, i, o, s, a)
                : l(t, e, r, n, i, o, s, a, _(t, e, r, n, i, o, s, a, h))
            }
            function f(t, e, r) {
              t = m(t);
              for (var n, i, o, s, a, h = "", u = {}, c = 0, f = 0, d = t.length; f < d; f++) {
                if (o = t[f], "M" === o[0])
                  n =+ o[1],
                  i =+ o[2];
                else {
                  if (s = p(n, i, o[1], o[2], o[3], o[4], o[5], o[6]), c + s > e && !r)
                    return a = p(n, i, o[1], o[2], o[3], o[4], o[5], o[6], e - c), {
                      x: a.x,
                      y: a.y,
                      alpha: a.alpha
                    };
                  c += s,
                  n =+ o[5],
                  i =+ o[6]
                }
                h += o.shift() + o
              }
              return u.end = h,
              a = r
                ? c
                : l(n, i, o[0], o[1], o[2], o[3], o[4], o[5], 1),
              a.alpha && (a = {
                x: a.x,
                y: a.y,
                alpha: a.alpha
              }),
              a
            }
            function d(t) {
              var e = [],
                r = 0,
                n = 0,
                i = 0,
                o = 0,
                s = 0;
              "M" === t[0][0] && (r =+ t[0][1], n =+ t[0][2], i = r, o = n, s++, e[0] = ["M", r, n]);
              for (var a, h, u, c = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(),
              l = s,
              p = t.length; l < p; l++) {
                if (e.push(h = []), u = t[l], u[0] !== String.prototype.toUpperCase.call(u[0]))
                  switch (h[0] = String.prototype.toUpperCase.call(u[0]), h[0]) {
                    case "A":
                      h[1] = u[1],
                      h[2] = u[2],
                      h[3] = u[3],
                      h[4] = u[4],
                      h[5] = u[5],
                      h[6] =+ (u[6] + r),
                      h[7] =+ (u[7] + n);
                      break;
                    case "V":
                      h[1] =+ u[1] + n;
                      break;
                    case "H":
                      h[1] =+ u[1] + r;
                      break;
                    case "R":
                      a = [r, n].concat(u.slice(1));
                      for (var f = 2, d = a.length; f < d; f++)
                        a[f] =+ a[f] + r,
                        a[++f] =+ a[f] + n;
                      e.pop(),
                      e = e.concat(y(a, c));
                      break;
                    case "M":
                      i =+ u[1] + r,
                      o =+ u[2] + n;
                      break;
                    default:
                      for (f = 1, d = u.length; f < d; f++)
                        h[f] =+ u[f] + (f % 2
                          ? r
                          : n)
                      }
                else if ("R" === u[0])
                  a = [r, n].concat(u.slice(1)),
                  e.pop(),
                  e = e.concat(y(a, c)),
                  h = ["R"].concat(u.slice(-2));
                else
                  for (var m = 0, g = u.length; m < g; m++)
                    h[m] = u[m];
              switch (h[0]) {
                  case "Z":
                    r = i,
                    n = o;
                    break;
                  case "H":
                    r = h[1];
                    break;
                  case "V":
                    n = h[1];
                    break;
                  case "M":
                    i = h[h.length - 2],
                    o = h[h.length - 1];
                    break;
                  default:
                    r = h[h.length - 2],
                    n = h[h.length - 1]
                }
              }
              return e
            }
            function m(t, e) {
              for (var r = d(t), n = e && d(e), i = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }, o = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }, s = (function(t, e, r) {
                var n,
                  i,
                  o = {
                    T: 1,
                    Q: 1
                  };
                if (!t)
                  return [
                    "C",
                    e.x,
                    e.y,
                    e.x,
                    e.y,
                    e.x,
                    e.y
                  ];
                switch (t[0] in o || (e.qx = e.qy = null), t[0]) {
                  case "M":
                    e.X = t[1],
                    e.Y = t[2];
                    break;
                  case "A":
                    t = ["C"].concat(g.apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                  case "S":
                    "C" === r || "S" === r
                      ? (n = 2 * e.x - e.bx, i = 2 * e.y - e.by)
                      : (n = e.x, i = e.y),
                    t = ["C", n, i].concat(t.slice(1));
                    break;
                  case "T":
                    "Q" === r || "T" === r
                      ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy)
                      : (e.qx = e.x, e.qy = e.y),
                    t = ["C"].concat(x(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                  case "Q":
                    e.qx = t[1],
                    e.qy = t[2],
                    t = ["C"].concat(x(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                  case "L":
                    t = ["C"].concat(v(e.x, e.y, t[1], t[2]));
                    break;
                  case "H":
                    t = ["C"].concat(v(e.x, e.y, t[1], e.y));
                    break;
                  case "V":
                    t = ["C"].concat(v(e.x, e.y, e.x, t[1]));
                    break;
                  case "Z":
                    t = ["C"].concat(v(e.x, e.y, e.X, e.Y))
                }
                return t
              }), a = function(t, e) {
                if (t[e].length > 7) {
                  t[e].shift();
                  for (var i = t[e]; i.length;)
                    u[e] = "A",
                    n && (c[e] = "A"),
                    t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                  t.splice(e, 1),
                  m = Math.max(r.length, n && n.length || 0)
                }
              },
              h = function(t, e, i, o, s) {
                t && e && "M" === t[s][0] && "M" !== e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], m = Math.max(r.length, n && n.length || 0))
              },
              u = [],
              c = [],
              l = "",
              p = "",
              f = 0,
              m = Math.max(r.length, n && n.length || 0); f < m; f++) {
                r[f] && (l = r[f][0]),
                "C" !== l && (u[f] = l, f && (p = u[f - 1])),
                r[f] = s(r[f], i, p),
                "A" !== u[f] && "C" === l && (u[f] = "C"),
                a(r, f),
                n && (n[f] && (l = n[f][0]), "C" !== l && (c[f] = l, f && (p = c[f - 1])), n[f] = s(n[f], o, p), "A" !== c[f] && "C" === l && (c[f] = "C"), a(n, f)),
                h(r, n, i, o, f),
                h(n, r, o, i, f);
                var y = r[f],
                  b = n && n[f],
                  _ = y.length,
                  w = n && b.length;
                i.x = y[_ - 2],
                i.y = y[_ - 1],
                i.bx = parseFloat(y[_ - 4]) || i.x,
                i.by = parseFloat(y[_ - 3]) || i.y,
                o.bx = n && (parseFloat(b[w - 4]) || o.x),
                o.by = n && (parseFloat(b[w - 3]) || o.y),
                o.x = n && b[w - 2],
                o.y = n && b[w - 1]
              }
              return n
                ? [r, n]
                : r
            }
            function g(t, e, r, n, i, o, s, a, h, u) {
              var c,
                l,
                p,
                f,
                d,
                m = Math.PI,
                y = 120 * m / 180,
                v = m / 180 * (+ i || 0),
                x = [],
                b = function(t, e, r) {
                  var n = t * Math.cos(r) - e * Math.sin(r),
                    i = t * Math.sin(r) + e * Math.cos(r);
                  return {x: n, y: i}
                };
              if (u)
                c = u[0],
                l = u[1],
                p = u[2],
                f = u[3];
              else {
                d = b(t, e, -v),
                t = d.x,
                e = d.y,
                d = b(a, h, -v),
                a = d.x,
                h = d.y;
                var _ = (t - a) / 2,
                  w = (e - h) / 2,
                  S = _ * _ / (r * r) + w * w / (n * n);
                S > 1 && (S = Math.sqrt(S), r = S * r, n = S * n);
                var M = r * r,
                  T = n * n,
                  R = (o === s
                    ? -1
                    : 1) * Math.sqrt(Math.abs((M * T - M * w * w - T * _ * _) / (M * w * w + T * _ * _)));
                p = R * r * w / n + (t + a) / 2,
                f = R * -n * _ / r + (e + h) / 2,
                c = Math.asin(((e - f) / n).toFixed(9)),
                l = Math.asin(((h - f) / n).toFixed(9)),
                c = t < p
                  ? m - c
                  : c,
                l = a < p
                  ? m - l
                  : l,
                c < 0 && (c = 2 * m + c),
                l < 0 && (l = 2 * m + l),
                s && c > l && (c -= 2 * m),
                !s && l > c && (l -= 2 * m)
              }
              var E = l - c;
              if (Math.abs(E) > y) {
                var C = l,
                  A = a,
                  P = h;
                l = c + y * (s && l > c
                  ? 1
                  : -1),
                a = p + r * Math.cos(l),
                h = f + n * Math.sin(l),
                x = g(a, h, r, n, i, 0, s, A, P, [l, C, p, f])
              }
              E = l - c;
              var I = Math.cos(c),
                O = Math.sin(c),
                L = Math.cos(l),
                N = Math.sin(l),
                D = Math.tan(E / 4),
                F = 4 / 3 * r * D,
                k = 4 / 3 * n * D,
                U = [
                  t, e
                ],
                B = [
                  t + F * O,
                  e - k * I
                ],
                G = [
                  a + F * N,
                  h - k * L
                ],
                H = [a, h];
              if (B[0] = 2 * U[0] - B[0], B[1] = 2 * U[1] - B[1], u)
                return [B, G, H].concat(x);
              x = [B, G, H].concat(x).join().split(",");
              for (var j = [], V = 0, W = x.length; V < W; V++)
                j[V] = V % 2
                  ? b(x[V - 1], x[V], v).y
                  : b(x[V], x[V + 1], v).x;
              return j
            }
            function y(t, e) {
              for (var r = [], n = 0, i = t.length; i - 2 * !e > n; n += 2) {
                var o = [
                  {
                    x :+ t[n - 2],
                    y :+ t[n - 1]
                  }, {
                    x :+ t[n],
                    y :+ t[n + 1]
                  }, {
                    x :+ t[n + 2],
                    y :+ t[n + 3]
                  }, {
                    x :+ t[n + 4],
                    y :+ t[n + 5]
                  }
                ];
                e
                  ? n
                    ? i - 4 === n
                      ? o[3] = {
                        x :+ t[0],
                        y :+ t[1]
                      }
                      : i - 2 === n && (o[2] = {
                        x :+ t[0],
                        y :+ t[1]
                      }, o[3] = {
                        x :+ t[2],
                        y :+ t[3]
                      })
                    : o[0] = {
                      x :+ t[i - 2],
                      y :+ t[i - 1]
                    }
                  : i - 4 === n
                      ? o[3] = o[2]
                      : n || (o[0] = {
                        x :+ t[n],
                        y :+ t[n + 1]
                      }),
                r.push([
                  "C",
                  (-o[0].x + 6 * o[1].x + o[2].x) / 6,
                  (-o[0].y + 6 * o[1].y + o[2].y) / 6,
                  (o[1].x + 6 * o[2].x - o[3].x) / 6,
                  (o[1].y + 6 * o[2].y - o[3].y) / 6,
                  o[2].x,
                  o[2].y
                ])
              }
              return r
            }
            function v(t, e, r, n) {
              return [
                t,
                e,
                r,
                n,
                r,
                n
              ]
            }
            function x(t, e, r, n, i, o) {
              var s = 1 / 3,
                a = 2 / 3;
              return [
                s * t + a * r,
                s * e + a * n,
                s * i + a * r,
                s * o + a * n,
                i,
                o
              ]
            }
            function b(t, e, r, n, i, o, s, a, h) {
              null == h && (h = 1),
              h = h > 1
                ? 1
                : h < 0
                  ? 0
                  : h;
              for (var u = h / 2, c = 12, l = [
                -.1252,
                .1252,
                -.3678,
                .3678,
                -.5873,
                .5873,
                -.7699,
                .7699,
                -.9041,
                .9041,
                -.9816,
                .9816
              ], p = 0, f = [
                .2491,
                .2491,
                .2335,
                .2335,
                .2032,
                .2032,
                .1601,
                .1601,
                .1069,
                .1069,
                .0472,
                .0472
              ], d = 0; d < c; d++) {
                var m = u * l[d] + u,
                  g = w(m, t, r, i, s),
                  y = w(m, e, n, o, a),
                  v = g * g + y * y;
                p += f[d] * Math.sqrt(v)
              }
              return u * p
            }
            function _(t, e, r, n, i, o, s, a, h) {
              if (!(h < 0 || b(t, e, r, n, i, o, s, a) < h)) {
                var u,
                  c = 1,
                  l = c / 2,
                  p = c - l,
                  f = .01;
                for (u = b(t, e, r, n, i, o, s, a, p); Math.abs(u - h) > f;)
                  l /= 2,
                  p += (u < h
                    ? 1
                    : -1) * l,
                  u = b(t, e, r, n, i, o, s, a, p);
                return p
              }
            }
            function w(t, e, r, n, i) {
              var o = -3 * e + 9 * r - 9 * n + 3 * i,
                s = t * o + 6 * e - 12 * r + 6 * n;
              return t * s - 3 * e + 3 * r
            }
            function S() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              e = t.length;
              for (var r = ""; e--;)
                r += t[e] === Object(t[e])
                  ? JSON.stringify(t[e])
                  : t[e];
              return r
            }
            var M = t("../core/core"),
              T = t("../core/constants");
            M.Font = function(t) {
              this.parent = t,
              this.cache = {},
              this.font = void 0
            },
            M.Font.prototype.list = function() {
              throw "not yet implemented"
            },
            M.Font.prototype.textBounds = function(t, e, r, n, i) {
              e = void 0 !== e
                ? e
                : 0,
              r = void 0 !== r
                ? r
                : 0,
              n = n || this.parent._renderer._textSize;
              var o = i && i.renderer && i.renderer._pInst || this.parent,
                s = o._renderer.drawingContext,
                a = s.textAlign || T.LEFT,
                h = s.textBaseline || T.BASELINE,
                u = this.cache[S("textBounds", t, e, r, n, a, h)];
              if (!u) {
                var c,
                  l,
                  p,
                  f,
                  d = [],
                  m = [],
                  g = this,
                  y = this._scale(n);
                this.font.forEachGlyph(t, e, r, n, i, function(t, e, r, i) {
                  d.push(e),
                  m.push(r);
                  var o = t.getMetrics();
                  "space" !== t.name
                    ? (d.push(e + o.xMax * y), m.push(r + -o.yMin * y), m.push(r + -o.yMax * y))
                    : d.push(e + g.font.charToGlyph(" ").advanceWidth * g._scale(n))
                }),
                c = Math.min.apply(null, d),
                l = Math.min.apply(null, m),
                p = Math.max.apply(null, d),
                f = Math.max.apply(null, m),
                u = {
                  x: c,
                  y: l,
                  h: f - l,
                  w: p - c,
                  advance: c - e
                };
                var v = u.w + u.advance,
                  x = this._handleAlignment(o, s, t, u.x, u.y, v);
                u.x = x.x,
                u.y = x.y,
                this.cache[S("textBounds", t, e, r, n, a, h)] = u
              }
              return u
            },
            M.Font.prototype.textToPoints = function(t, e, r, i, s) {
              var a = 0,
                h = [],
                u = this._getGlyphs(t);
              i = i || this.parent._renderer._textSize;
              for (var c = 0; c < u.length; c++) {
                for (var l = u[c].getPath(e, r, i), p = o(l.commands), f = 0; f < p.length; f++)
                  for (var d = n(p[f], s), m = 0; m < d.length; m++)
                    d[m].x += a,
                    h.push(d[m]);
              a += u[c].advanceWidth * this._scale(i)
              }
              return h
            },
            M.Font.prototype._getGlyphs = function(t) {
              return this.font.stringToGlyphs(t)
            },
            M.Font.prototype._getPath = function(t, e, r, n) {
              var i = n && n.renderer && n.renderer._pInst || this.parent,
                o = i._renderer.drawingContext,
                s = this._handleAlignment(i, o, t, e, r);
              return this.font.getPath(t, s.x, s.y, i._renderer._textSize, n)
            },
            M.Font.prototype._getPathData = function(t, e, r, n) {
              var i = 3;
              return "string" == typeof t && arguments.length > 2
                ? t = this._getPath(t, e, r, n)
                : "object" == typeof e && (n = e),
              n && "number" == typeof n.decimals && (i = n.decimals),
              t.toPathData(i)
            },
            M.Font.prototype._getSVG = function(t, e, r, n) {
              var i = 3;
              return "string" == typeof t && arguments.length > 2
                ? t = this._getPath(t, e, r, n)
                : "object" == typeof e && (n = e),
              n && ("number" == typeof n.decimals && (i = n.decimals), "number" == typeof n.strokeWidth && (t.strokeWidth = n.strokeWidth), "undefined" != typeof n.fill && (t.fill = n.fill), "undefined" != typeof n.stroke && (t.stroke = n.stroke)),
              t.toSVG(i)
            },
            M.Font.prototype._renderPath = function(t, e, r, n) {
              var i,
                o = n && n.renderer || this.parent._renderer,
                s = o.drawingContext;
              i = "object" == typeof t && t.commands
                ? t.commands
                : this._getPath(t, e, r, n).commands,
              s.beginPath();
              for (var a = 0; a < i.length; a += 1) {
                var h = i[a];
                "M" === h.type
                  ? s.moveTo(h.x, h.y)
                  : "L" === h.type
                    ? s.lineTo(h.x, h.y)
                    : "C" === h.type
                      ? s.bezierCurveTo(h.x1, h.y1, h.x2, h.y2, h.x, h.y)
                      : "Q" === h.type
                        ? s.quadraticCurveTo(h.x1, h.y1, h.x, h.y)
                        : "Z" === h.type && s.closePath()
              }
              return o._doStroke && o._strokeSet && s.stroke(),
              o._doFill && (s.fillStyle = o._fillSet
                ? s.fillStyle
                : T._DEFAULT_TEXT_FILL, s.fill()),
              this
            },
            M.Font.prototype._textWidth = function(t, e) {
              if (" " === t)
                return this.font.charToGlyph(" ").advanceWidth * this._scale(e);
              var r = this.textBounds(t, 0, 0, e);
              return r.w + r.advance
            },
            M.Font.prototype._textAscent = function(t) {
              return this.font.ascender * this._scale(t)
            },
            M.Font.prototype._textDescent = function(t) {
              return -this.font.descender * this._scale(t)
            },
            M.Font.prototype._scale = function(t) {
              return 1 / this.font.unitsPerEm * (t || this.parent._renderer._textSize)
            },
            M.Font.prototype._handleAlignment = function(t, e, r, n, i, o) {
              var s = t._renderer._textSize,
                a = this._textAscent(s),
                h = this._textDescent(s);
              return o = void 0 !== o
                ? o
                : this._textWidth(r, s),
              e.textAlign === T.CENTER
                ? n -= o / 2
                : e.textAlign === T.RIGHT && (n -= o),
              e.textBaseline === T.TOP
                ? i += a
                : e.textBaseline === T._CTX_MIDDLE
                  ? i += a / 2
                  : e.textBaseline === T.BOTTOM && (i -= h), {
                x: n,
                y: i
              }
            },
            e.exports = M.Font
          }, {
            "../core/constants": 36,
            "../core/core": 37
          }
        ],
        73: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.append = function(t, e) {
              return t.push(e),
              t
            },
            n.prototype.arrayCopy = function(t, e, r, n, i) {
              var o,
                s;
              "undefined" != typeof i
                ? (s = Math.min(i, t.length), o = n, t = t.slice(e, s + e))
                : ("undefined" != typeof r
                  ? (s = r, s = Math.min(s, t.length))
                  : s = t.length, o = 0, r = e, t = t.slice(0, s)),
              Array.prototype.splice.apply(r, [o, s].concat(t))
            },
            n.prototype.concat = function(t, e) {
              return t.concat(e)
            },
            n.prototype.reverse = function(t) {
              return t.reverse()
            },
            n.prototype.shorten = function(t) {
              return t.pop(),
              t
            },
            n.prototype.shuffle = function(t, e) {
              var r = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(t);
              t = e || r
                ? t
                : t.slice();
              for (var n, i, o = t.length; o > 1;)
                n = Math.random() * o | 0,
                i = t[--o],
                t[o] = t[n],
                t[n] = i;
              return t
            },
            n.prototype.sort = function(t, e) {
              var r = e
                  ? t.slice(0, Math.min(e, t.length))
                  : t,
                n = e
                  ? t.slice(Math.min(e, t.length))
                  : [];
              return r = "string" == typeof r[0]
                ? r.sort()
                : r.sort(function(t, e) {
                  return t - e
                }),
              r.concat(n)
            },
            n.prototype.splice = function(t, e, r) {
              return Array.prototype.splice.apply(t, [r, 0].concat(e)),
              t
            },
            n.prototype.subset = function(t, e, r) {
              return "undefined" != typeof r
                ? t.slice(e, e + r)
                : t.slice(e, t.length)
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        74: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype["float"] = function(t) {
              return parseFloat(t)
            },
            n.prototype["int"] = function(t, e) {
              return "string" == typeof t
                ? (e = e || 10, parseInt(t, e))
                : "number" == typeof t
                  ? 0 | t
                  : "boolean" == typeof t
                    ? t
                      ? 1
                      : 0
                    : t instanceof Array
                      ? t.map(function(t) {
                        return n.prototype["int"](t, e)
                      })
                      : void 0
            },
            n.prototype.str = function(t) {
              return t instanceof Array
                ? t.map(n.prototype.str)
                : String(t)
            },
            n.prototype["boolean"] = function(t) {
              return "number" == typeof t
                ? 0 !== t
                : "string" == typeof t
                  ? "true" === t.toLowerCase()
                  : "boolean" == typeof t
                    ? t
                    : t instanceof Array
                      ? t.map(n.prototype["boolean"])
                      : void 0
            },
            n.prototype["byte"] = function(t) {
              var e = n.prototype["int"](t, 10);
              return "number" == typeof e
                ? (e + 128) % 256 - 128
                : e instanceof Array
                  ? e.map(n.prototype["byte"])
                  : void 0
            },
            n.prototype["char"] = function(t) {
              return "number" != typeof t || isNaN(t)
                ? t instanceof Array
                  ? t.map(n.prototype["char"])
                  : "string" == typeof t
                    ? n.prototype["char"](parseInt(t, 10))
                    : void 0
                : String.fromCharCode(t)
            },
            n.prototype.unchar = function(t) {
              return "string" == typeof t && 1 === t.length
                ? t.charCodeAt(0)
                : t instanceof Array
                  ? t.map(n.prototype.unchar)
                  : void 0
            },
            n.prototype.hex = function(t, e) {
              if (e = void 0 === e || null === e
                ? e = 8
                : e, t instanceof Array)
                return t.map(function(t) {
                  return n.prototype.hex(t, e)
                });
              if ("number" == typeof t) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var r = Number(t).toString(16).toUpperCase(); r.length < e;)
                  r = "0" + r;
                return r.length >= e && (r = r.substring(r.length - e, r.length)),
                r
              }
            },
            n.prototype.unhex = function(t) {
              return t instanceof Array
                ? t.map(n.prototype.unhex)
                : parseInt("0x" + t, 16)
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        75: [
          function(t, e, r) {
            "use strict";
            function n() {
              var t = arguments[0],
                e = t < 0,
                r = e
                  ? t.toString().substring(1)
                  : t.toString(),
                n = r.indexOf("."),
                i = n !== -1
                  ? r.substring(0, n)
                  : r,
                o = n !== -1
                  ? r.substring(n + 1)
                  : "",
                s = e
                  ? "-"
                  : "";
              if (3 === arguments.length) {
                var a = "";
                (n !== -1 || arguments[2] - o.length > 0) && (a = "."),
                o.length > arguments[2] && (o = o.substring(0, arguments[2]));
                for (var h = 0; h < arguments[1] - i.length; h++)
                  s += "0";
                s += i,
                s += a,
                s += o;
                for (var u = 0; u < arguments[2] - o.length; u++)
                  s += "0";
                return s
              }
              for (var c = 0; c < Math.max(arguments[1] - i.length, 0); c++)
                s += "0";
              return s += r
            }
            function i() {
              var t = arguments[0].toString(),
                e = t.indexOf("."),
                r = e !== -1
                  ? t.substring(e)
                  : "",
                n = e !== -1
                  ? t.substring(0, e)
                  : t;
              if (n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === arguments[1])
                r = "";
              else if (void 0 !== arguments[1])
                if (arguments[1] > r.length) {
                  r += e === -1
                    ? "."
                    : "";
                  for (var i = arguments[1] - r.length + 1, o = 0; o < i; o++)
                    r += "0"
                } else
                  r = r.substring(0, arguments[1] + 1);
            return n + r
            }
            function o() {
              return parseFloat(arguments[0]) > 0
                ? "+" + arguments[0].toString()
                : arguments[0].toString()
            }
            function s() {
              return parseFloat(arguments[0]) > 0
                ? " " + arguments[0].toString()
                : arguments[0].toString()
            }
            var a = t("../core/core");
            a.prototype.join = function(t, e) {
              return t.join(e)
            },
            a.prototype.match = function(t, e) {
              return t.match(e)
            },
            a.prototype.matchAll = function(t, e) {
              for (var r = new RegExp(e, "g"), n = r.exec(t), i = []; null !== n;)
                i.push(n),
                n = r.exec(t);
              return i
            },
            a.prototype.nf = function() {
              if (arguments[0]instanceof Array) {
                var t = arguments[1],
                  e = arguments[2];
                return arguments[0].map(function(r) {
                  return n(r, t, e)
                })
              }
              var r = Object.prototype.toString.call(arguments[0]);
              return "[object Arguments]" === r
                ? 3 === arguments[0].length
                  ? this.nf(arguments[0][0], arguments[0][1], arguments[0][2])
                  : 2 === arguments[0].length
                    ? this.nf(arguments[0][0], arguments[0][1])
                    : this.nf(arguments[0][0])
                : n.apply(this, arguments)
            },
            a.prototype.nfc = function() {
              if (arguments[0]instanceof Array) {
                var t = arguments[1];
                return arguments[0].map(function(e) {
                  return i(e, t)
                })
              }
              return i.apply(this, arguments)
            },
            a.prototype.nfp = function() {
              var t = this.nf.apply(this, arguments);
              return t instanceof Array
                ? t.map(o)
                : o(t)
            },
            a.prototype.nfs = function() {
              var t = this.nf.apply(this, arguments);
              return t instanceof Array
                ? t.map(s)
                : s(t)
            },
            a.prototype.split = function(t, e) {
              return t.split(e)
            },
            a.prototype.splitTokens = function() {
              var t,
                e,
                r,
                n;
              return n = arguments[1],
              arguments.length > 1
                ? (r = /\]/g.exec(n), e = /\[/g.exec(n), e && r
                  ? (n = n.slice(0, r.index) + n.slice(r.index + 1), e = /\[/g.exec(n), n = n.slice(0, e.index) + n.slice(e.index + 1), t = new RegExp("[\\[" + n + "\\]]", "g"))
                  : r
                    ? (n = n.slice(0, r.index) + n.slice(r.index + 1), t = new RegExp("[" + n + "\\]]", "g"))
                    : e
                      ? (n = n.slice(0, e.index) + n.slice(e.index + 1), t = new RegExp("[" + n + "\\[]", "g"))
                      : t = new RegExp("[" + n + "]", "g"))
                : t = /\s/g,
              arguments[0].split(t).filter(function(t) {
                return t
              })
            },
            a.prototype.trim = function(t) {
              return t instanceof Array
                ? t.map(this.trim)
                : t.trim()
            },
            e.exports = a
          }, {
            "../core/core": 37
          }
        ],
        76: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.day = function() {
              return (new Date).getDate()
            },
            n.prototype.hour = function() {
              return (new Date).getHours()
            },
            n.prototype.minute = function() {
              return (new Date).getMinutes()
            },
            n.prototype.millis = function() {
              return window.performance.now()
            },
            n.prototype.month = function() {
              return (new Date).getMonth() + 1
            },
            n.prototype.second = function() {
              return (new Date).getSeconds()
            },
            n.prototype.year = function() {
              return (new Date).getFullYear()
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        77: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.camera = function(t, e, r) {
              for (var n = new Array(arguments.length), i = 0; i < n.length; ++i)
                n[i] = arguments[i];
              this._validateParameters("camera", n, ["Number", "Number", "Number"]),
              this._renderer.translate(-t, -e, -r)
            },
            n.prototype.perspective = function(t, e, r, i) {
              for (var o = new Array(arguments.length), s = 0; s < o.length; ++s)
                o[s] = arguments[s];
              this._validateParameters("perspective", o, ["Number", "Number", "Number", "Number"]),
              this._renderer.uPMatrix = n.Matrix.identity(),
              this._renderer.uPMatrix.perspective(t, e, r, i),
              this._renderer._curCamera = "custom"
            },
            n.prototype.ortho = function(t, e, r, i, o, s) {
              for (var a = new Array(arguments.length), h = 0; h < a.length; ++h)
                a[h] = arguments[h];
              this._validateParameters("ortho", a, [
                "Number",
                "Number",
                "Number",
                "Number",
                "Number",
                "Number"
              ]),
              t /= this.width,
              e /= this.width,
              i /= this.height,
              r /= this.height,
              this._renderer.uPMatrix = n.Matrix.identity(),
              this._renderer.uPMatrix.ortho(t, e, r, i, o, s),
              this._renderer._curCamera = "custom"
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        78: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.orbitControl = function() {
              return this.mouseIsPressed && (this.rotateY((this.mouseX - this.width / 2) / (this.width / 2)), this.rotateX((this.mouseY - this.height / 2) / (this.width / 2))),
              this
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        79: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.ambientLight = function(t, e, r, n) {
              var i = this._renderer.GL,
                o = this._renderer._getShader("lightVert", "lightTextureFrag");
              i.useProgram(o),
              o.uAmbientColor = i.getUniformLocation(o, "uAmbientColor[" + this._renderer.ambientLightCount + "]");
              var s = this._renderer._pInst.color.apply(this._renderer._pInst, arguments),
                a = s._array;
              return i.uniform3f(o.uAmbientColor, a[0], a[1], a[2]),
              o.uMaterialColor = i.getUniformLocation(o, "uMaterialColor"),
              i.uniform4f(o.uMaterialColor, 1, 1, 1, 1),
              this._renderer.ambientLightCount++,
              o.uAmbientLightCount = i.getUniformLocation(o, "uAmbientLightCount"),
              i.uniform1i(o.uAmbientLightCount, this._renderer.ambientLightCount),
              this
            },
            n.prototype.directionalLight = function(t, e, r, n, i, o, s) {
              var a = this._renderer.GL,
                h = this._renderer._getShader("lightVert", "lightTextureFrag");
              a.useProgram(h),
              h.uDirectionalColor = a.getUniformLocation(h, "uDirectionalColor[" + this._renderer.directionalLightCount + "]");
              var u = this._renderer._pInst.color.apply(this._renderer._pInst, [t, e, r]),
                c = u._array;
              a.uniform3f(h.uDirectionalColor, c[0], c[1], c[2]);
              for (var l, p, f, d = new Array(arguments.length), m = 0; m < d.length; ++m)
                d[m] = arguments[m];
              if ("number" == typeof d[d.length - 1])
                l = d[d.length - 3],
                p = d[d.length - 2],
                f = d[d.length - 1];
              else
                try {
                  l = d[d.length - 1].x,
                  p = d[d.length - 1].y,
                  f = d[d.length - 1].z
                } catch (g) {
                  throw g
                }
              return h.uLightingDirection = a.getUniformLocation(h, "uLightingDirection[" + this._renderer.directionalLightCount + "]"),
              a.uniform3f(h.uLightingDirection, l, p, f),
              h.uMaterialColor = a.getUniformLocation(h, "uMaterialColor"),
              a.uniform4f(h.uMaterialColor, 1, 1, 1, 1),
              this._renderer.directionalLightCount++,
              h.uDirectionalLightCount = a.getUniformLocation(h, "uDirectionalLightCount"),
              a.uniform1i(h.uDirectionalLightCount, this._renderer.directionalLightCount),
              this
            },
            n.prototype.pointLight = function(t, e, r, n, i, o, s) {
              var a = this._renderer.GL,
                h = this._renderer._getShader("lightVert", "lightTextureFrag");
              a.useProgram(h),
              h.uPointLightColor = a.getUniformLocation(h, "uPointLightColor[" + this._renderer.pointLightCount + "]");
              var u = this._renderer._pInst.color.apply(this._renderer._pInst, [t, e, r]),
                c = u._array;
              a.uniform3f(h.uPointLightColor, c[0], c[1], c[2]);
              for (var l, p, f, d = new Array(arguments.length), m = 0; m < d.length; ++m)
                d[m] = arguments[m];
              if ("number" == typeof d[d.length - 1])
                l = d[d.length - 3],
                p = d[d.length - 2],
                f = d[d.length - 1];
              else
                try {
                  l = d[d.length - 1].x,
                  p = d[d.length - 1].y,
                  f = d[d.length - 1].z
                } catch (g) {
                  throw g
                }
              return h.uPointLightLocation = a.getUniformLocation(h, "uPointLightLocation[" + this._renderer.pointLightCount + "]"),
              a.uniform3f(h.uPointLightLocation, l, p, f),
              h.uMaterialColor = a.getUniformLocation(h, "uMaterialColor"),
              a.uniform4f(h.uMaterialColor, 1, 1, 1, 1),
              this._renderer.pointLightCount++,
              h.uPointLightCount = a.getUniformLocation(h, "uPointLightCount"),
              a.uniform1i(h.uPointLightCount, this._renderer.pointLightCount),
              this
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        80: [
          function(t, e, r) {
            "use strict";
            function n(t, e) {
              for (var r = {
                v: [],
                vt: [],
                vn: []
              }, n = {}, o = 0; o < e.length; ++o) {
                var s = e[o].trim().split(/\b\s+/);
                if (s.length > 0)
                  if ("v" === s[0] || "vn" === s[0]) {
                    var a = new i.Vector(parseFloat(s[1]), parseFloat(s[2]), parseFloat(s[3]));
                    r[s[0]].push(a)
                  }
                else if ("vt" === s[0]) {
                  var h = [
                    parseFloat(s[1]),
                    parseFloat(s[2])
                  ];
                  r[s[0]].push(h)
                } else if ("f" === s[0])
                  for (var u = 3; u < s.length; ++u) {
                    for (var c = [], l = [
                      1, u - 1,
                      u
                    ], p = 0; p < l.length; ++p) {
                      var f = s[l[p]],
                        d = 0;
                      if (void 0 !== n[f])
                        d = n[f];
                      else {
                        for (var m = f.split("/"), g = 0; g < m.length; g++)
                          m[g] = parseInt(m[g]) - 1;
                        d = n[f] = t.vertices.length,
                        t.vertices.push(r.v[m[0]].copy()),
                        r.vt[m[1]]
                          ? t.uvs.push(r.vt[m[1]].slice())
                          : t.uvs.push([0, 0]),
                        r.vn[m[2]] && t.vertexNormals.push(r.vn[m[2]].copy())
                      }
                      c.push(d)
                    }
                    t.faces.push(c)
                  }
                }
              return 0 === t.vertexNormals.length && t.computeNormals(),
              t
            }
            var i = t("../core/core");
            t("./p5.Geometry"),
            i.prototype.loadModel = function() {
              var t,
                e,
                r,
                o = arguments[0];
              "boolean" == typeof arguments[1]
                ? (t = arguments[1], e = arguments[2], r = arguments[3])
                : (t = !1, e = arguments[1], r = arguments[2]);
              var s = new i.Geometry;
              return s.gid = o + "|" + t,
              this.loadStrings(o, function(r) {
                n(s, r),
                t && s.normalize(),
                "function" == typeof e && e(s)
              }.bind(this), r),
              s
            },
            i.prototype.model = function(t) {
              t.vertices.length > 0 && (this._renderer.geometryInHash(t.gid) || this._renderer.createBuffers(t.gid, t), this._renderer.drawBuffers(t.gid))
            },
            e.exports = i
          }, {
            "../core/core": 37,
            "./p5.Geometry": 82
          }
        ],
        81: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.prototype.normalMaterial = function() {
              return this._renderer._getShader("normalVert", "normalFrag"),
              this
            },
            n.prototype.texture = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = this._renderer.GL,
                i = this._renderer._getShader("lightVert", "lightTextureFrag");
              r.useProgram(i);
              var o;
              if (t[0].isTexture)
                t[0]instanceof n.Graphics || "undefined" != typeof n.MediaElement && t[0]instanceof n.MediaElement
                  ? o = t[0].elt
                  : t[0]instanceof n.Image && (o = t[0].canvas),
                this._renderer._bind.call(this, t[0].tex, o);
              else {
                if (t[0]instanceof n.Image)
                  o = t[0].canvas;
                else if ("undefined" != typeof n.MediaElement && t[0]instanceof n.MediaElement) {
                  if (!t[0].loadedmetadata)
                    return;
                  o = t[0].elt
                } else
                  t[0]instanceof n.Graphics && (o = t[0].elt);
                var s = r.createTexture();
                t[0]._setProperty("tex", s),
                t[0]._setProperty("isTexture", !0),
                this._renderer._bind.call(this, s, o)
              }
              return r.activeTexture(r.TEXTURE0),
              r.bindTexture(r.TEXTURE_2D, t[0].tex),
              r.uniform1i(r.getUniformLocation(i, "isTexture"), !0),
              r.uniform1i(r.getUniformLocation(i, "uSampler"), 0),
              this
            },
            n.RendererGL.prototype._bind = function(t, e) {
              var r = this._renderer.GL;
              r.bindTexture(r.TEXTURE_2D, t),
              r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e),
              r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.bindTexture(r.TEXTURE_2D, null)
            },
            n.prototype.ambientMaterial = function(t, e, r, n) {
              var i = this._renderer.GL,
                o = this._renderer._getShader("lightVert", "lightTextureFrag");
              i.useProgram(o),
              o.uMaterialColor = i.getUniformLocation(o, "uMaterialColor");
              var s = this._renderer._applyColorBlend.apply(this._renderer, arguments);
              return i.uniform4f(o.uMaterialColor, s[0], s[1], s[2], s[3]),
              o.uSpecular = i.getUniformLocation(o, "uSpecular"),
              i.uniform1i(o.uSpecular, !1),
              i.uniform1i(i.getUniformLocation(o, "isTexture"), !1),
              this
            },
            n.prototype.specularMaterial = function(t, e, r, n) {
              var i = this._renderer.GL,
                o = this._renderer._getShader("lightVert", "lightTextureFrag");
              i.useProgram(o),
              i.uniform1i(i.getUniformLocation(o, "isTexture"), !1),
              o.uMaterialColor = i.getUniformLocation(o, "uMaterialColor");
              var s = this._renderer._applyColorBlend.apply(this._renderer, arguments);
              return i.uniform4f(o.uMaterialColor, s[0], s[1], s[2], s[3]),
              o.uSpecular = i.getUniformLocation(o, "uSpecular"),
              i.uniform1i(o.uSpecular, !0),
              this
            },
            n.RendererGL.prototype._applyColorBlend = function(t, e, r, n) {
              var i = this.GL,
                o = this._pInst.color.apply(this._pInst, arguments),
                s = o._array;
              return s[s.length - 1] < 1
                ? (i.depthMask(!1), i.enable(i.BLEND), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA))
                : (i.depthMask(!0), i.disable(i.BLEND)),
              s
            },
            e.exports = n
          }, {
            "../core/core": 37
          }
        ],
        82: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            n.Geometry = function(t, e, r) {
              return this.vertices = [],
              this.vertexNormals = [],
              this.faces = [],
              this.uvs = [],
              this.detailX = void 0 !== t
                ? t
                : 1,
              this.detailY = void 0 !== e
                ? e
                : 1,
              r instanceof Function && r.call(this),
              this
            },
            n.Geometry.prototype.computeFaces = function() {
              for (var t, e, r, n, i = this.detailX + 1, o = 0; o < this.detailY; o++)
                for (var s = 0; s < this.detailX; s++)
                  t = o * i + s,
                  e = o * i + s + 1,
                  r = (o + 1) * i + s + 1,
                  n = (o + 1) * i + s,
                  this.faces.push([t, e, n]),
                  this.faces.push([n, e, r]);
            return this
            },
            n.Geometry.prototype._getFaceNormal = function(t, e) {
              var r = this.faces[t],
                i = this.vertices[r[e % 3]],
                o = this.vertices[r[(e + 1) % 3]],
                s = this.vertices[r[(e + 2) % 3]],
                a = n.Vector.cross(n.Vector.sub(o, i), n.Vector.sub(s, i)),
                h = n.Vector.mag(a) / (n.Vector.mag(n.Vector.sub(o, i)) * n.Vector.mag(n.Vector.sub(s, i)));
              return a = a.normalize(),
              a.mult(Math.asin(h))
            },
            n.Geometry.prototype.computeNormals = function() {
              for (var t = 0; t < this.vertices.length; t++) {
                for (var e = new n.Vector, r = 0; r < this.faces.length; r++)
                  this.faces[r][0] !== t && this.faces[r][1] !== t && this.faces[r][2] !== t || (e = e.add(this._getFaceNormal(r, t)));
                e = e.normalize(),
                this.vertexNormals.push(e)
              }
              return this
            },
            n.Geometry.prototype.averageNormals = function() {
              for (var t = 0; t <= this.detailY; t++) {
                var e = this.detailX + 1,
                  r = n.Vector.add(this.vertexNormals[t * e], this.vertexNormals[t * e + this.detailX]);
                r = n.Vector.div(r, 2),
                this.vertexNormals[t * e] = r,
                this.vertexNormals[t * e + this.detailX] = r
              }
              return this
            },
            n.Geometry.prototype.averagePoleNormals = function() {
              for (var t = new n.Vector(0, 0, 0), e = 0; e < this.detailX; e++)
                t.add(this.vertexNormals[e]);
              for (t = n.Vector.div(t, this.detailX), e = 0; e < this.detailX; e++)
                this.vertexNormals[e] = t;
              for (t = new n.Vector(0, 0, 0), e = this.vertices.length - 1; e > this.vertices.length - 1 - this.detailX; e--)
                t.add(this.vertexNormals[e]);
              for (t = n.Vector.div(t, this.detailX), e = this.vertices.length - 1; e > this.vertices.length - 1 - this.detailX; e--)
                this.vertexNormals[e] = t;
              return this
            },
            n.Geometry.prototype.normalize = function() {
              if (this.vertices.length > 0) {
                for (var t = this.vertices[0].copy(), e = this.vertices[0].copy(), r = 0; r < this.vertices.length; r++)
                  t.x = Math.max(t.x, this.vertices[r].x),
                  e.x = Math.min(e.x, this.vertices[r].x),
                  t.y = Math.max(t.y, this.vertices[r].y),
                  e.y = Math.min(e.y, this.vertices[r].y),
                  t.z = Math.max(t.z, this.vertices[r].z),
                  e.z = Math.min(e.z, this.vertices[r].z);
                var i = n.Vector.lerp(t, e, .5),
                  o = n.Vector.sub(t, e),
                  s = Math.max(Math.max(o.x, o.y), o.z),
                  a = 200 / s;
                for (r = 0; r < this.vertices.length; r++)
                  this.vertices[r].sub(i),
                  this.vertices[r].mult(a)
              }
              return this
            },
            e.exports = n.Geometry
          }, {
            "../core/core": 37
          }
        ],
        83: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("../math/polargeometry"),
              o = t("../core/constants"),
              s = "undefined" != typeof Float32Array
                ? Float32Array
                : Array;
            n.Matrix = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              return t[0]instanceof n
                ? (this.p5 = t[0], "mat3" === t[1]
                  ? this.mat3 = t[2] || new s([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                  ])
                  : this.mat4 = t[1] || new s([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  ]))
                : "mat3" === t[0]
                  ? this.mat3 = t[1] || new s([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                  ])
                  : this.mat4 = t[0] || new s([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  ]),
              this
            },
            n.Matrix.prototype.set = function(t) {
              return t instanceof n.Matrix
                ? (this.mat4 = t.mat4, this)
                : t instanceof s
                  ? (this.mat4 = t, this)
                  : this
            },
            n.Matrix.prototype.get = function() {
              return new n.Matrix(this.mat4)
            },
            n.Matrix.prototype.copy = function() {
              var t = new n.Matrix;
              return t.mat4[0] = this.mat4[0],
              t.mat4[1] = this.mat4[1],
              t.mat4[2] = this.mat4[2],
              t.mat4[3] = this.mat4[3],
              t.mat4[4] = this.mat4[4],
              t.mat4[5] = this.mat4[5],
              t.mat4[6] = this.mat4[6],
              t.mat4[7] = this.mat4[7],
              t.mat4[8] = this.mat4[8],
              t.mat4[9] = this.mat4[9],
              t.mat4[10] = this.mat4[10],
              t.mat4[11] = this.mat4[11],
              t.mat4[12] = this.mat4[12],
              t.mat4[13] = this.mat4[13],
              t.mat4[14] = this.mat4[14],
              t.mat4[15] = this.mat4[15],
              t
            },
            n.Matrix.identity = function() {
              return new n.Matrix
            },
            n.Matrix.prototype.transpose = function(t) {
              var e,
                r,
                i,
                o,
                a,
                h;
              return t instanceof n.Matrix
                ? (e = t.mat4[1], r = t.mat4[2], i = t.mat4[3], o = t.mat4[6], a = t.mat4[7], h = t.mat4[11], this.mat4[0] = t.mat4[0], this.mat4[1] = t.mat4[4], this.mat4[2] = t.mat4[8], this.mat4[3] = t.mat4[12], this.mat4[4] = e, this.mat4[5] = t.mat4[5], this.mat4[6] = t.mat4[9], this.mat4[7] = t.mat4[13], this.mat4[8] = r, this.mat4[9] = o, this.mat4[10] = t.mat4[10], this.mat4[11] = t.mat4[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = h, this.mat4[15] = t.mat4[15])
                : t instanceof s && (e = t[1], r = t[2], i = t[3], o = t[6], a = t[7], h = t[11], this.mat4[0] = t[0], this.mat4[1] = t[4], this.mat4[2] = t[8], this.mat4[3] = t[12], this.mat4[4] = e, this.mat4[5] = t[5], this.mat4[6] = t[9], this.mat4[7] = t[13], this.mat4[8] = r, this.mat4[9] = o, this.mat4[10] = t[10], this.mat4[11] = t[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = h, this.mat4[15] = t[15]),
              this
            },
            n.Matrix.prototype.invert = function(t) {
              var e,
                r,
                i,
                o,
                a,
                h,
                u,
                c,
                l,
                p,
                f,
                d,
                m,
                g,
                y,
                v;
              t instanceof n.Matrix
                ? (e = t.mat4[0], r = t.mat4[1], i = t.mat4[2], o = t.mat4[3], a = t.mat4[4], h = t.mat4[5], u = t.mat4[6], c = t.mat4[7], l = t.mat4[8], p = t.mat4[9], f = t.mat4[10], d = t.mat4[11], m = t.mat4[12], g = t.mat4[13], y = t.mat4[14], v = t.mat4[15])
                : t instanceof s && (e = t[0], r = t[1], i = t[2], o = t[3], a = t[4], h = t[5], u = t[6], c = t[7], l = t[8], p = t[9], f = t[10], d = t[11], m = t[12], g = t[13], y = t[14], v = t[15]);
              var x = e * h - r * a,
                b = e * u - i * a,
                _ = e * c - o * a,
                w = r * u - i * h,
                S = r * c - o * h,
                M = i * c - o * u,
                T = l * g - p * m,
                R = l * y - f * m,
                E = l * v - d * m,
                C = p * y - f * g,
                A = p * v - d * g,
                P = f * v - d * y,
                I = x * P - b * A + _ * C + w * E - S * R + M * T;
              return I
                ? (I = 1 / I, this.mat4[0] = (h * P - u * A + c * C) * I, this.mat4[1] = (i * A - r * P - o * C) * I, this.mat4[2] = (g * M - y * S + v * w) * I, this.mat4[3] = (f * S - p * M - d * w) * I, this.mat4[4] = (u * E - a * P - c * R) * I, this.mat4[5] = (e * P - i * E + o * R) * I, this.mat4[6] = (y * _ - m * M - v * b) * I, this.mat4[7] = (l * M - f * _ + d * b) * I, this.mat4[8] = (a * A - h * E + c * T) * I, this.mat4[9] = (r * E - e * A - o * T) * I, this.mat4[10] = (m * S - g * _ + v * x) * I, this.mat4[11] = (p * _ - l * S - d * x) * I, this.mat4[12] = (h * R - a * C - u * T) * I, this.mat4[13] = (e * C - r * R + i * T) * I, this.mat4[14] = (g * b - m * w - y * x) * I, this.mat4[15] = (l * w - p * b + f * x) * I, this)
                : null
            },
            n.Matrix.prototype.invert3x3 = function() {
              var t = this.mat3[0],
                e = this.mat3[1],
                r = this.mat3[2],
                n = this.mat3[3],
                i = this.mat3[4],
                o = this.mat3[5],
                s = this.mat3[6],
                a = this.mat3[7],
                h = this.mat3[8],
                u = h * i - o * a,
                c = -h * n + o * s,
                l = a * n - i * s,
                p = t * u + e * c + r * l;
              return p
                ? (p = 1 / p, this.mat3[0] = u * p, this.mat3[1] = (-h * e + r * a) * p, this.mat3[2] = (o * e - r * i) * p, this.mat3[3] = c * p, this.mat3[4] = (h * t - r * s) * p, this.mat3[5] = (-o * t + r * n) * p, this.mat3[6] = l * p, this.mat3[7] = (-a * t + e * s) * p, this.mat3[8] = (i * t - e * n) * p, this)
                : null
            },
            n.Matrix.prototype.transpose3x3 = function(t) {
              var e = t[1],
                r = t[2],
                n = t[5];
              return this.mat3[1] = t[3],
              this.mat3[2] = t[6],
              this.mat3[3] = e,
              this.mat3[5] = t[7],
              this.mat3[6] = r,
              this.mat3[7] = n,
              this
            },
            n.Matrix.prototype.inverseTranspose = function(t) {
              return void 0 === this.mat3
                ? console.error("sorry, this function only works with mat3")
                : (this.mat3[0] = t.mat4[0], this.mat3[1] = t.mat4[1], this.mat3[2] = t.mat4[2], this.mat3[3] = t.mat4[4], this.mat3[4] = t.mat4[5], this.mat3[5] = t.mat4[6], this.mat3[6] = t.mat4[8], this.mat3[7] = t.mat4[9], this.mat3[8] = t.mat4[10]),
              this.invert3x3().transpose3x3(this.mat3),
              this
            },
            n.Matrix.prototype.determinant = function() {
              var t = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
                e = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
                r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
                n = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
                i = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
                o = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
                s = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
                a = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
                h = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
                u = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
                c = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13],
                l = this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14];
              return t * l - e * c + r * u + n * h - i * a + o * s
            },
            n.Matrix.prototype.mult = function(t) {
              var e = new s(16),
                r = new s(16);
              t instanceof n.Matrix
                ? r = t.mat4
                : t instanceof s && (r = t);
              var i = this.mat4[0],
                o = this.mat4[1],
                a = this.mat4[2],
                h = this.mat4[3];
              return e[0] = i * r[0] + o * r[4] + a * r[8] + h * r[12],
              e[1] = i * r[1] + o * r[5] + a * r[9] + h * r[13],
              e[2] = i * r[2] + o * r[6] + a * r[10] + h * r[14],
              e[3] = i * r[3] + o * r[7] + a * r[11] + h * r[15],
              i = this.mat4[4],
              o = this.mat4[5],
              a = this.mat4[6],
              h = this.mat4[7],
              e[4] = i * r[0] + o * r[4] + a * r[8] + h * r[12],
              e[5] = i * r[1] + o * r[5] + a * r[9] + h * r[13],
              e[6] = i * r[2] + o * r[6] + a * r[10] + h * r[14],
              e[7] = i * r[3] + o * r[7] + a * r[11] + h * r[15],
              i = this.mat4[8],
              o = this.mat4[9],
              a = this.mat4[10],
              h = this.mat4[11],
              e[8] = i * r[0] + o * r[4] + a * r[8] + h * r[12],
              e[9] = i * r[1] + o * r[5] + a * r[9] + h * r[13],
              e[10] = i * r[2] + o * r[6] + a * r[10] + h * r[14],
              e[11] = i * r[3] + o * r[7] + a * r[11] + h * r[15],
              i = this.mat4[12],
              o = this.mat4[13],
              a = this.mat4[14],
              h = this.mat4[15],
              e[12] = i * r[0] + o * r[4] + a * r[8] + h * r[12],
              e[13] = i * r[1] + o * r[5] + a * r[9] + h * r[13],
              e[14] = i * r[2] + o * r[6] + a * r[10] + h * r[14],
              e[15] = i * r[3] + o * r[7] + a * r[11] + h * r[15],
              this.mat4 = e,
              this
            },
            n.Matrix.prototype.scale = function() {
              for (var t, e, r, i = new Array(arguments.length), o = 0; o < i.length; ++o)
                i[o] = arguments[o];
              i[0]instanceof n.Vector
                ? (t = i[0].x, e = i[0].y, r = i[0].z)
                : i[0]instanceof Array && (t = i[0][0], e = i[0][1], r = i[0][2]);
              var a = new s(16);
              return a[0] = this.mat4[0] * t,
              a[1] = this.mat4[1] * t,
              a[2] = this.mat4[2] * t,
              a[3] = this.mat4[3] * t,
              a[4] = this.mat4[4] * e,
              a[5] = this.mat4[5] * e,
              a[6] = this.mat4[6] * e,
              a[7] = this.mat4[7] * e,
              a[8] = this.mat4[8] * r,
              a[9] = this.mat4[9] * r,
              a[10] = this.mat4[10] * r,
              a[11] = this.mat4[11] * r,
              a[12] = this.mat4[12],
              a[13] = this.mat4[13],
              a[14] = this.mat4[14],
              a[15] = this.mat4[15],
              this.mat4 = a,
              this
            },
            n.Matrix.prototype.rotate = function(t, e) {
              var r,
                s,
                a,
                h,
                u;
              this.p5
                ? this.p5._angleMode === o.DEGREES && (h = i.degreesToRadians(t))
                : h = t,
              e instanceof n.Vector
                ? (r = e.x, s = e.y, a = e.z)
                : e instanceof Array && (r = e[0], s = e[1], a = e[2]),
              u = Math.sqrt(r * r + s * s + a * a),
              r *= 1 / u,
              s *= 1 / u,
              a *= 1 / u;
              var c = this.mat4[0],
                l = this.mat4[1],
                p = this.mat4[2],
                f = this.mat4[3],
                d = this.mat4[4],
                m = this.mat4[5],
                g = this.mat4[6],
                y = this.mat4[7],
                v = this.mat4[8],
                x = this.mat4[9],
                b = this.mat4[10],
                _ = this.mat4[11],
                w = Math.sin(h),
                S = Math.cos(h),
                M = 1 - S,
                T = r * r * M + S,
                R = s * r * M + a * w,
                E = a * r * M - s * w,
                C = r * s * M - a * w,
                A = s * s * M + S,
                P = a * s * M + r * w,
                I = r * a * M + s * w,
                O = s * a * M - r * w,
                L = a * a * M + S;
              return this.mat4[0] = c * T + d * R + v * E,
              this.mat4[1] = l * T + m * R + x * E,
              this.mat4[2] = p * T + g * R + b * E,
              this.mat4[3] = f * T + y * R + _ * E,
              this.mat4[4] = c * C + d * A + v * P,
              this.mat4[5] = l * C + m * A + x * P,
              this.mat4[6] = p * C + g * A + b * P,
              this.mat4[7] = f * C + y * A + _ * P,
              this.mat4[8] = c * I + d * O + v * L,
              this.mat4[9] = l * I + m * O + x * L,
              this.mat4[10] = p * I + g * O + b * L,
              this.mat4[11] = f * I + y * O + _ * L,
              this
            },
            n.Matrix.prototype.translate = function(t) {
              var e = t[0],
                r = t[1],
                n = t[2] || 0;
              this.mat4[12] = this.mat4[0] * e + this.mat4[4] * r + this.mat4[8] * n + this.mat4[12],
              this.mat4[13] = this.mat4[1] * e + this.mat4[5] * r + this.mat4[9] * n + this.mat4[13],
              this.mat4[14] = this.mat4[2] * e + this.mat4[6] * r + this.mat4[10] * n + this.mat4[14],
              this.mat4[15] = this.mat4[3] * e + this.mat4[7] * r + this.mat4[11] * n + this.mat4[15]
            },
            n.Matrix.prototype.rotateX = function(t) {
              this.rotate(t, [1, 0, 0])
            },
            n.Matrix.prototype.rotateY = function(t) {
              this.rotate(t, [0, 1, 0])
            },
            n.Matrix.prototype.rotateZ = function(t) {
              this.rotate(t, [0, 0, 1])
            },
            n.Matrix.prototype.perspective = function(t, e, r, n) {
              var i = 1 / Math.tan(t / 2),
                o = 1 / (r - n);
              return this.mat4[0] = i / e,
              this.mat4[1] = 0,
              this.mat4[2] = 0,
              this.mat4[3] = 0,
              this.mat4[4] = 0,
              this.mat4[5] = i,
              this.mat4[6] = 0,
              this.mat4[7] = 0,
              this.mat4[8] = 0,
              this.mat4[9] = 0,
              this.mat4[10] = (n + r) * o,
              this.mat4[11] = -1,
              this.mat4[12] = 0,
              this.mat4[13] = 0,
              this.mat4[14] = 2 * n * r * o,
              this.mat4[15] = 0,
              this
            },
            n.Matrix.prototype.ortho = function(t, e, r, n, i, o) {
              var s = 1 / (t - e),
                a = 1 / (r - n),
                h = 1 / (i - o);
              return this.mat4[0] = -2 * s,
              this.mat4[1] = 0,
              this.mat4[2] = 0,
              this.mat4[3] = 0,
              this.mat4[4] = 0,
              this.mat4[5] = -2 * a,
              this.mat4[6] = 0,
              this.mat4[7] = 0,
              this.mat4[8] = 0,
              this.mat4[9] = 0,
              this.mat4[10] = 2 * h,
              this.mat4[11] = 0,
              this.mat4[12] = (t + e) * s,
              this.mat4[13] = (n + r) * a,
              this.mat4[14] = (o + i) * h,
              this.mat4[15] = 1,
              this
            },
            e.exports = n.Matrix
          }, {
            "../core/constants": 36,
            "../core/core": 37,
            "../math/polargeometry": 67
          }
        ],
        84: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("../core/constants");
            n.RendererGL.prototype.beginShape = function(t) {
              return this.immediateMode.shapeMode = void 0 !== t
                ? t
                : i.LINE_STRIP,
              void 0 === this.immediateMode.vertexPositions
                ? (this.immediateMode.vertexPositions = [], this.immediateMode.vertexColors = [], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer())
                : (this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0),
              this.isImmediateDrawing = !0,
              this
            },
            n.RendererGL.prototype.vertex = function(t, e, r) {
              this.immediateMode.vertexPositions.push(t, e, r);
              var n = this.curFillColor || [.5, .5, .5, 1];
              return this.immediateMode.vertexColors.push(n[0], n[1], n[2], n[3]),
              this
            },
            n.RendererGL.prototype.endShape = function(t, e, r, n, o, s) {
              var a = this.GL;
              if (this._bindImmediateBuffers(this.immediateMode.vertexPositions, this.immediateMode.vertexColors), t)
                if ("fill" === this.drawMode)
                  switch (this.immediateMode.shapeMode) {
                    case i.LINE_STRIP:
                      this.immediateMode.shapeMode = i.TRIANGLE_FAN;
                      break;
                    case i.LINES:
                      this.immediateMode.shapeMode = i.TRIANGLE_FAN;
                      break;
                    case i.TRIANGLES:
                      this.immediateMode.shapeMode = i.TRIANGLE_FAN
                  }
                else
                switch (this.immediateMode.shapeMode) {
                  case i.LINE_STRIP:
                    this.immediateMode.shapeMode = i.LINE_LOOP;
                    break;
                  case i.LINES:
                    this.immediateMode.shapeMode = i.LINE_LOOP
                }
              if (this.immediateMode.shapeMode === i.QUADS || this.immediateMode.shapeMode === i.QUAD_STRIP)
                throw new Error("sorry, " + this.immediateMode.shapeMode + " not yet implemented in webgl mode.");
              return a.enable(a.BLEND),
              a.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertexPositions.length / 3),
              this.immediateMode.vertexPositions.length = 0,
              this.immediateMode.vertexColors.length = 0,
              this.isImmediateDrawing = !1,
              this
            },
            n.RendererGL.prototype._bindImmediateBuffers = function(t, e) {
              this._setDefaultCamera();
              var r = this.GL,
                n = this._getCurShaderId(),
                i = this.mHash[n];
              return i.vertexPositionAttribute = r.getAttribLocation(i, "aPosition"),
              r.enableVertexAttribArray(i.vertexPositionAttribute),
              r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.vertexBuffer),
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(t), r.DYNAMIC_DRAW),
              r.vertexAttribPointer(i.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0),
              i.vertexColorAttribute = r.getAttribLocation(i, "aVertexColor"),
              r.enableVertexAttribArray(i.vertexColorAttribute),
              r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.colorBuffer),
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(e), r.DYNAMIC_DRAW),
              r.vertexAttribPointer(i.vertexColorAttribute, 4, r.FLOAT, !1, 0, 0),
              this._setMatrixUniforms(n),
              this
            },
            n.RendererGL.prototype._getColorVertexShader = function() {
              var t,
                e = this.GL,
                r = "immediateVert|vertexColorFrag";
              return this.materialInHash(r)
                ? t = this.mHash[r]
                : (t = this._initShaders("immediateVert", "vertexColorFrag", !0), this.mHash[r] = t, t.vertexColorAttribute = e.getAttribLocation(t, "aVertexColor"), e.enableVertexAttribArray(t.vertexColorAttribute)),
              t
            },
            e.exports = n.RendererGL
          }, {
            "../core/constants": 36,
            "../core/core": 37
          }
        ],
        85: [
          function(t, e, r) {
            "use strict";
            function n(t) {
              return t.length > 0
                ? t.reduce(function(t, e) {
                  return t.concat(e)
                })
                : []
            }
            function i(t) {
              return n(t.map(function(t) {
                return [t.x, t.y, t.z]
              }))
            }
            var o = t("../core/core"),
              s = 0;
            o.RendererGL.prototype._initBufferDefaults = function(t) {
              if (s++, s > 1e3) {
                var e = Object.keys(this.gHash)[0];
                delete this.gHash[e],
                s--
              }
              var r = this.GL;
              this.gHash[t] = {},
              this.gHash[t].vertexBuffer = r.createBuffer(),
              this.gHash[t].normalBuffer = r.createBuffer(),
              this.gHash[t].uvBuffer = r.createBuffer(),
              this.gHash[t].indexBuffer = r.createBuffer()
            },
            o.RendererGL.prototype.createBuffers = function(t, e) {
              var r = this.GL;
              this._setDefaultCamera(),
              this._initBufferDefaults(t);
              var o = this.mHash[this._getCurShaderId()];
              this.gHash[t].numberOfItems = 3 * e.faces.length,
              r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].vertexBuffer),
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(i(e.vertices)), r.STATIC_DRAW),
              o.vertexPositionAttribute = r.getAttribLocation(o, "aPosition"),
              r.enableVertexAttribArray(o.vertexPositionAttribute),
              r.vertexAttribPointer(o.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0),
              r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].normalBuffer),
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(i(e.vertexNormals)), r.STATIC_DRAW),
              o.vertexNormalAttribute = r.getAttribLocation(o, "aNormal"),
              r.enableVertexAttribArray(o.vertexNormalAttribute),
              r.vertexAttribPointer(o.vertexNormalAttribute, 3, r.FLOAT, !1, 0, 0),
              r.bindBuffer(r.ARRAY_BUFFER, this.gHash[t].uvBuffer),
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(n(e.uvs)), r.STATIC_DRAW),
              o.textureCoordAttribute = r.getAttribLocation(o, "aTexCoord"),
              r.enableVertexAttribArray(o.textureCoordAttribute),
              r.vertexAttribPointer(o.textureCoordAttribute, 2, r.FLOAT, !1, 0, 0),
              r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.gHash[t].indexBuffer),
              r.bufferData(r.ELEMENT_ARRAY_BUFFER, new Uint16Array(n(e.faces)), r.STATIC_DRAW)
            },
            o.RendererGL.prototype.drawBuffers = function(t) {
              this._setDefaultCamera();
              var e = this.GL,
                r = this._getCurShaderId(),
                n = this.mHash[r];
              return e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].vertexBuffer),
              e.vertexAttribPointer(n.vertexPositionAttribute, 3, e.FLOAT, !1, 0, 0),
              e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].normalBuffer),
              e.vertexAttribPointer(n.vertexNormalAttribute, 3, e.FLOAT, !1, 0, 0),
              e.bindBuffer(e.ARRAY_BUFFER, this.gHash[t].uvBuffer),
              e.vertexAttribPointer(n.textureCoordAttribute, 2, e.FLOAT, !1, 0, 0),
              e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.gHash[t].indexBuffer),
              this._setMatrixUniforms(r),
              e.drawElements(e.TRIANGLES, this.gHash[t].numberOfItems, e.UNSIGNED_SHORT, 0),
              this
            },
            e.exports = o.RendererGL
          }, {
            "../core/core": 37
          }
        ],
        86: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core"),
              i = t("./shader");
            t("../core/p5.Renderer"),
            t("./p5.Matrix");
            var o = [],
              s = 1e3,
              a = {
                alpha: !0,
                depth: !0,
                stencil: !0,
                antialias: !1,
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !1
              };
            n.RendererGL = function(t, e, r) {
              return n.Renderer.call(this, t, e, r),
              this._initContext(),
              this.isP3D = !0,
              this.GL = this.drawingContext,
              this.ambientLightCount = 0,
              this.directionalLightCount = 0,
              this.pointLightCount = 0,
              this._curCamera = null,
              this.uMVMatrix = new n.Matrix,
              this.uPMatrix = new n.Matrix,
              this.uNMatrix = new n.Matrix("mat3"),
              this.gHash = {},
              this.mHash = {},
              this.isImmediateDrawing = !1,
              this.immediateMode = {},
              this.curFillColor = [
                .5, .5, .5, 1
              ],
              this.curStrokeColor = [
                .5, .5, .5, 1
              ],
              this.pointSize = 5,
              this
            },
            n.RendererGL.prototype = Object.create(n.Renderer.prototype),
            n.RendererGL.prototype._initContext = function() {
              try {
                if (this.drawingContext = this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a), null === this.drawingContext)
                  throw new Error("Error creating webgl context");
                console.log("p5.RendererGL: enabled webgl context");
                var t = this.drawingContext;
                t.enable(t.DEPTH_TEST),
                t.depthFunc(t.LEQUAL),
                t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight)
              } catch (e) {
                throw new Error(e)
              }
            },
            n.RendererGL.prototype._setDefaultCamera = function() {
              if (null === this._curCamera) {
                var t = this.width,
                  e = this.height;
                this.uPMatrix = n.Matrix.identity(),
                this.uPMatrix.perspective(60 / 180 * Math.PI, t / e, .1, 100),
                this._curCamera = "default"
              }
            },
            n.RendererGL.prototype._update = function() {
              this.uMVMatrix = n.Matrix.identity(),
              this.translate(0, 0, -(this.height / 2) / Math.tan(30 * Math.PI / 180)),
              this.ambientLightCount = 0,
              this.directionalLightCount = 0,
              this.pointLightCount = 0
            },
            n.RendererGL.prototype.background = function() {
              var t = this.GL,
                e = this._pInst.color.apply(this._pInst, arguments),
                r = e.levels[0] / 255,
                n = e.levels[1] / 255,
                i = e.levels[2] / 255,
                o = e.levels[3] / 255;
              t.clearColor(r, n, i, o),
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
            },
            n.RendererGL.prototype._initShaders = function(t, e, r) {
              var n = this.GL,
                o = n.createShader(n.VERTEX_SHADER);
              if (n.shaderSource(o, i[t]), n.compileShader(o), !n.getShaderParameter(o, n.COMPILE_STATUS))
                return alert("Yikes! An error occurred compiling the shaders:" + n.getShaderInfoLog(o)),
                null;
              var s = n.createShader(n.FRAGMENT_SHADER);
              if (n.shaderSource(s, i[e]), n.compileShader(s), !n.getShaderParameter(s, n.COMPILE_STATUS))
                return alert("Darn! An error occurred compiling the shaders:" + n.getShaderInfoLog(s)),
                null;
              var a = n.createProgram();
              return n.attachShader(a, o),
              n.attachShader(a, s),
              n.linkProgram(a),
              n.getProgramParameter(a, n.LINK_STATUS) || alert("Snap! Error linking shader program"),
              this._getLocation(a, r),
              a
            },
            n.RendererGL.prototype._getLocation = function(t, e) {
              var r = this.GL;
              r.useProgram(t),
              t.uResolution = r.getUniformLocation(t, "uResolution"),
              r.uniform1f(t.uResolution, s),
              t.uPMatrixUniform = r.getUniformLocation(t, "uProjectionMatrix"),
              t.uMVMatrixUniform = r.getUniformLocation(t, "uModelViewMatrix"),
              void 0 === e && (t.uNMatrixUniform = r.getUniformLocation(t, "uNormalMatrix"), t.samplerUniform = r.getUniformLocation(t, "uSampler"))
            },
            n.RendererGL.prototype._setUniform1f = function(t, e, r) {
              var n = this.GL,
                i = this.mHash[t];
              return n.useProgram(i),
              i[e] = n.getUniformLocation(i, e),
              n.uniform1f(i[e], r),
              this
            },
            n.RendererGL.prototype._setMatrixUniforms = function(t) {
              var e = this.GL,
                r = this.mHash[t];
              e.useProgram(r),
              e.uniformMatrix4fv(r.uPMatrixUniform, !1, this.uPMatrix.mat4),
              e.uniformMatrix4fv(r.uMVMatrixUniform, !1, this.uMVMatrix.mat4),
              this.uNMatrix.inverseTranspose(this.uMVMatrix),
              e.uniformMatrix3fv(r.uNMatrixUniform, !1, this.uNMatrix.mat3)
            },
            n.RendererGL.prototype._getShader = function(t, e, r) {
              var n = t + "|" + e;
              if (!this.materialInHash(n)) {
                var i = this._initShaders(t, e, r);
                this.mHash[n] = i
              }
              return this.curShaderId = n,
              this.mHash[this.curShaderId]
            },
            n.RendererGL.prototype._getCurShaderId = function() {
              var t,
                e;
              return "fill" !== this.drawMode && void 0 === this.curShaderId
                ? (t = "normalVert|normalFrag", e = this._initShaders("normalVert", "normalFrag"), this.mHash[t] = e, this.curShaderId = t)
                : this.isImmediateDrawing && "fill" === this.drawMode && (t = "immediateVert|vertexColorFrag", e = this._initShaders("immediateVert", "vertexColorFrag"), this.mHash[t] = e, this.curShaderId = t),
              this.curShaderId
            },
            n.RendererGL.prototype.fill = function(t, e, r, n) {
              var i,
                o = this.GL,
                s = this._applyColorBlend.apply(this, arguments);
              return this.curFillColor = s,
              this.drawMode = "fill",
              this.isImmediateDrawing
                ? (i = this._getShader("immediateVert", "vertexColorFrag"), o.useProgram(i))
                : (i = this._getShader("normalVert", "basicFrag"), o.useProgram(i), i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor"), o.uniform4f(i.uMaterialColor, s[0], s[1], s[2], s[3])),
              this
            },
            n.RendererGL.prototype.stroke = function(t, e, r, n) {
              var i = this._pInst.color.apply(this._pInst, arguments),
                o = i._array;
              return this.curStrokeColor = o,
              this.drawMode = "stroke",
              this
            },
            n.RendererGL.prototype._strokeCheck = function() {
              if ("stroke" === this.drawMode)
                throw new Error("stroke for shapes in 3D not yet implemented, use fill for now :(")
            },
            n.RendererGL.prototype.strokeWeight = function(t) {
              return this.pointSize = t,
              this
            },
            n.RendererGL.prototype.geometryInHash = function(t) {
              return void 0 !== this.gHash[t]
            },
            n.RendererGL.prototype.materialInHash = function(t) {
              return void 0 !== this.mHash[t]
            },
            n.RendererGL.prototype.resize = function(t, e) {
              var r = this.GL;
              n.Renderer.prototype.resize.call(this, t, e),
              r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight),
              "default" === this._curCamera && (this._curCamera = null, this._setDefaultCamera())
            },
            n.RendererGL.prototype.clear = function() {
              var t = this.GL;
              t.clearColor(arguments[0], arguments[1], arguments[2], arguments[3]),
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
            },
            n.RendererGL.prototype.translate = function(t, e, r) {
              return t /= s,
              e = -e / s,
              r /= s,
              this.uMVMatrix.translate([t, e, r]),
              this
            },
            n.RendererGL.prototype.scale = function(t, e, r) {
              return this.uMVMatrix.scale([t, e, r]),
              this
            },
            n.RendererGL.prototype.rotate = function(t, e) {
              return this.uMVMatrix.rotate(t, e),
              this
            },
            n.RendererGL.prototype.rotateX = function(t) {
              return this.rotate(t, [1, 0, 0]),
              this
            },
            n.RendererGL.prototype.rotateY = function(t) {
              return this.rotate(t, [0, 1, 0]),
              this
            },
            n.RendererGL.prototype.rotateZ = function(t) {
              return this.rotate(t, [0, 0, 1]),
              this
            },
            n.RendererGL.prototype.push = function() {
              o.push(this.uMVMatrix.copy())
            },
            n.RendererGL.prototype.pop = function() {
              if (0 === o.length)
                throw new Error("Invalid popMatrix!");
              this.uMVMatrix = o.pop()
            },
            n.RendererGL.prototype.resetMatrix = function() {
              return this.uMVMatrix = n.Matrix.identity(),
              this.translate(0, 0, -800),
              this
            },
            n.RendererGL.prototype._applyTextProperties = function() {
              console.error("text commands not yet implemented in webgl")
            },
            e.exports = n.RendererGL
          }, {
            "../core/core": 37,
            "../core/p5.Renderer": 43,
            "./p5.Matrix": 83,
            "./shader": 88
          }
        ],
        87: [
          function(t, e, r) {
            "use strict";
            var n = t("../core/core");
            t("./p5.Geometry"),
            n.prototype.plane = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0] || 50,
                i = t[1] || r,
                o = "number" == typeof t[2]
                  ? t[2]
                  : 1,
                s = "number" == typeof t[3]
                  ? t[3]
                  : 1,
                a = "plane|" + r + "|" + i + "|" + o + "|" + s;
              if (!this._renderer.geometryInHash(a)) {
                var h = function() {
                    for (var t, e, o, s = 0; s <= this.detailY; s++) {
                      e = s / this.detailY;
                      for (var a = 0; a <= this.detailX; a++)
                        t = a / this.detailX,
                        o = new n.Vector(r * t - r / 2, i * e - i / 2, 0),
                        this.vertices.push(o),
                        this.uvs.push([t, e])
                    }
                  },
                  u = new n.Geometry(o, s, h);
                u.computeFaces().computeNormals(),
                this._renderer.createBuffers(a, u)
              }
              this._renderer.drawBuffers(a)
            },
            n.prototype.box = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0] || 50,
                i = t[1] || r,
                o = t[2] || r,
                s = "number" == typeof t[3]
                  ? t[3]
                  : 4,
                a = "number" == typeof t[4]
                  ? t[4]
                  : 4,
                h = "box|" + r + "|" + i + "|" + o + "|" + s + "|" + a;
              if (!this._renderer.geometryInHash(h)) {
                var u = function() {
                    for (var t = [
                      [
                        0, 4, 2, 6
                      ],
                      [
                        1, 3, 5, 7
                      ],
                      [
                        0, 1, 4, 5
                      ],
                      [
                        2, 6, 3, 7
                      ],
                      [
                        0, 2, 1, 3
                      ],
                      [4, 5, 6, 7]
                    ], e = 0, s = 0; s < t.length; s++) {
                      for (var a = t[s], h = 4 * s, u = 0; u < 4; u++) {
                        var c = a[u],
                          l = new n.Vector((2 * (1 & c) - 1) * r / 2, ((2 & c) - 1) * i / 2, ((4 & c) / 2 - 1) * o / 2);
                        this.vertices.push(l),
                        this.uvs.push([
                          1 & u,
                          (2 & u) / 2
                        ]),
                        e++
                      }
                      this.faces.push([
                        h, h + 1,
                        h + 2
                      ]),
                      this.faces.push([
                        h + 2,
                        h + 1,
                        h + 3
                      ])
                    }
                  },
                  c = new n.Geometry(s, a, u);
                c.computeNormals(),
                this._renderer.createBuffers(h, c)
              }
              return this._renderer.drawBuffers(h),
              this
            },
            n.prototype.sphere = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0] || 50,
                i = "number" == typeof t[1]
                  ? t[1]
                  : 24,
                o = "number" == typeof t[2]
                  ? t[2]
                  : 16,
                s = "sphere|" + r + "|" + i + "|" + o;
              if (!this._renderer.geometryInHash(s)) {
                var a = function() {
                    for (var t, e, i, o = 0; o <= this.detailY; o++) {
                      e = o / this.detailY;
                      for (var s = 0; s <= this.detailX; s++) {
                        t = s / this.detailX;
                        var a = 2 * Math.PI * t,
                          h = Math.PI * e - Math.PI / 2;
                        i = new n.Vector(r * Math.cos(h) * Math.sin(a), r * Math.sin(h), r * Math.cos(h) * Math.cos(a)),
                        this.vertices.push(i),
                        this.uvs.push([t, e])
                      }
                    }
                  },
                  h = new n.Geometry(i, o, a);
                h.computeFaces().computeNormals().averageNormals().averagePoleNormals(),
                this._renderer.createBuffers(s, h)
              }
              return this._renderer.drawBuffers(s),
              this
            };
            var i = function(t, e, r, i, o, s, a) {
              i = i < 3
                ? 3
                : i,
              o = o < 1
                ? 1
                : o,
              s = void 0 === s || s,
              a = void 0 === a || a;
              var h,
                u,
                c = (s
                  ? 2
                  : 0) + (a
                  ? 2
                  : 0),
                l = i + 1,
                p = Math.atan2(t - e, r),
                f = s
                  ? -2
                  : 0,
                d = o + (a
                  ? 2
                  : 0);
              for (h = f; h <= d; ++h) {
                var m,
                  g = h / o,
                  y = r * g;
                for (h < 0
                  ? (y = 0, g = 1, m = t)
                  : h > o
                    ? (y = r, g = 1, m = e)
                    : m = t + (e - t) * (h / o), h !== -2 && h !== o + 2 || (m = 0, g = 0), y -= r / 2, u = 0; u < l; ++u)
                  this.vertices.push(new n.Vector(Math.sin(u * Math.PI * 2 / i) * m, y, Math.cos(u * Math.PI * 2 / i) * m)),
                  this.vertexNormals.push(new n.Vector(h < 0 || h > o
                    ? 0
                    : Math.sin(u * Math.PI * 2 / i) * Math.cos(p), h < 0
                    ? -1
                    : h > o
                      ? 1
                      : Math.sin(p), h < 0 || h > o
                    ? 0
                    : Math.cos(u * Math.PI * 2 / i) * Math.cos(p))),
                  this.uvs.push([
                    u / i,
                    g
                  ])
              }
              for (h = 0; h < o + c; ++h)
                for (u = 0; u < i; ++u)
                  this.faces.push([
                    l * (h + 0) + 0 + u,
                    l * (h + 0) + 1 + u,
                    l * (h + 1) + 1 + u
                  ]),
                  this.faces.push([
                    l * (h + 0) + 0 + u,
                    l * (h + 1) + 1 + u,
                    l * (h + 1) + 0 + u
                  ])
            };
            n.prototype.cylinder = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0] || 50,
                o = t[1] || r,
                s = "number" == typeof t[2]
                  ? t[2]
                  : 24,
                a = "number" == typeof t[3]
                  ? t[3]
                  : 16,
                h = "cylinder|" + r + "|" + o + "|" + s + "|" + a;
              if (!this._renderer.geometryInHash(h)) {
                var u = new n.Geometry(s, a);
                i.call(u, r, r, o, s, a, !0, !0),
                u.computeNormals(),
                this._renderer.createBuffers(h, u)
              }
              return this._renderer.drawBuffers(h),
              this
            },
            n.prototype.cone = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0] || 50,
                o = t[1] || r,
                s = "number" == typeof t[2]
                  ? t[2]
                  : 24,
                a = "number" == typeof t[3]
                  ? t[3]
                  : 16,
                h = "cone|" + r + "|" + o + "|" + s + "|" + a;
              if (!this._renderer.geometryInHash(h)) {
                var u = new n.Geometry(s, a);
                i.call(u, r, 0, o, s, a, !0, !0),
                u.computeNormals(),
                this._renderer.createBuffers(h, u)
              }
              return this._renderer.drawBuffers(h),
              this
            },
            n.prototype.ellipsoid = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = "number" == typeof t[3]
                  ? t[3]
                  : 24,
                i = "number" == typeof t[4]
                  ? t[4]
                  : 24,
                o = t[0] || 50,
                s = t[1] || o,
                a = t[2] || o,
                h = "ellipsoid|" + o + "|" + s + "|" + a + "|" + r + "|" + i;
              if (!this._renderer.geometryInHash(h)) {
                var u = function() {
                    for (var t, e, r, i = 0; i <= this.detailY; i++) {
                      e = i / this.detailY;
                      for (var h = 0; h <= this.detailX; h++) {
                        t = h / this.detailX;
                        var u = 2 * Math.PI * t,
                          c = Math.PI * e - Math.PI / 2;
                        r = new n.Vector(o * Math.cos(c) * Math.sin(u), s * Math.sin(c), a * Math.cos(c) * Math.cos(u)),
                        this.vertices.push(r),
                        this.uvs.push([t, e])
                      }
                    }
                  },
                  c = new n.Geometry(r, i, u);
                c.computeFaces().computeNormals(),
                this._renderer.createBuffers(h, c)
              }
              return this._renderer.drawBuffers(h),
              this
            },
            n.prototype.torus = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = "number" == typeof t[2]
                  ? t[2]
                  : 24,
                i = "number" == typeof t[3]
                  ? t[3]
                  : 16,
                o = t[0] || 50,
                s = t[1] || 10,
                a = "torus|" + o + "|" + s + "|" + r + "|" + i;
              if (!this._renderer.geometryInHash(a)) {
                var h = function() {
                    for (var t, e, r, i = 0; i <= this.detailY; i++) {
                      e = i / this.detailY;
                      for (var a = 0; a <= this.detailX; a++) {
                        t = a / this.detailX;
                        var h = 2 * Math.PI * t,
                          u = 2 * Math.PI * e;
                        r = new n.Vector((o + s * Math.cos(u)) * Math.cos(h), (o + s * Math.cos(u)) * Math.sin(h), s * Math.sin(u)),
                        this.vertices.push(r),
                        this.uvs.push([t, e])
                      }
                    }
                  },
                  u = new n.Geometry(r, i, h);
                u.computeFaces().computeNormals().averageNormals(),
                this._renderer.createBuffers(a, u)
              }
              return this._renderer.drawBuffers(a),
              this
            },
            n.RendererGL.prototype.point = function(t, e, r) {
              return console.log("point not yet implemented in webgl"),
              this
            },
            n.RendererGL.prototype.triangle = function(t) {
              var e = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                s = t[4],
                a = t[5],
                h = "tri|" + e + "|" + r + "|" + i + "|" + o + "|" + s + "|" + a;
              if (!this.geometryInHash(h)) {
                var u = function() {
                    var t = [];
                    t.push(new n.Vector(e, r, 0)),
                    t.push(new n.Vector(i, o, 0)),
                    t.push(new n.Vector(s, a, 0)),
                    this.vertices = t,
                    this.faces = [
                      [0, 1, 2]
                    ],
                    this.uvs = [
                      [
                        0, 0
                      ],
                      [
                        0, 1
                      ],
                      [1, 1]
                    ]
                  },
                  c = new n.Geometry(1, 1, u);
                c.computeNormals(),
                this.createBuffers(h, c)
              }
              return this.drawBuffers(h),
              this
            },
            n.RendererGL.prototype.ellipse = function(t) {
              var e = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                s = t[4] || 24,
                a = t[5] || 16,
                h = "ellipse|" + t[0] + "|" + t[1] + "|" + t[2] + "|" + t[3];
              if (!this.geometryInHash(h)) {
                var u = function() {
                    for (var t, s, a, h = e + .5 * i, u = r + .5 * o, c = 0; c <= this.detailY; c++) {
                      s = c / this.detailY;
                      for (var l = 0; l <= this.detailX; l++) {
                        t = l / this.detailX;
                        var p = 2 * Math.PI * t;
                        if (0 === s)
                          a = new n.Vector(h, u, 0);
                        else {
                          var f = h + .5 * i * Math.cos(p),
                            d = u + .5 * o * Math.sin(p);
                          a = new n.Vector(f, d, 0)
                        }
                        this.vertices.push(a),
                        this.uvs.push([t, s])
                      }
                    }
                  },
                  c = new n.Geometry(s, a, u);
                c.computeFaces().computeNormals(),
                this.createBuffers(h, c)
              }
              return this.drawBuffers(h),
              this
            },
            n.RendererGL.prototype.rect = function(t) {
              var e = "rect|" + t[0] + "|" + t[1] + "|" + t[2] + "|" + t[3],
                r = t[0],
                i = t[1],
                o = t[2],
                s = t[3],
                a = t[4] || 24,
                h = t[5] || 16;
              if (!this.geometryInHash(e)) {
                var u = function() {
                    for (var t, e, a, h = 0; h <= this.detailY; h++) {
                      e = h / this.detailY;
                      for (var u = 0; u <= this.detailX; u++)
                        t = u / this.detailX,
                        a = new n.Vector(r + o * t, i + s * e, 0),
                        this.vertices.push(a),
                        this.uvs.push([t, e])
                    }
                  },
                  c = new n.Geometry(a, h, u);
                c.computeFaces().computeNormals(),
                this.createBuffers(e, c)
              }
              return this.drawBuffers(e),
              this
            },
            n.RendererGL.prototype.quad = function() {
              for (var t = new Array(arguments.length), e = 0; e < t.length; ++e)
                t[e] = arguments[e];
              var r = t[0],
                i = t[1],
                o = t[2],
                s = t[3],
                a = t[4],
                h = t[5],
                u = t[6],
                c = t[7],
                l = "quad|" + r + "|" + i + "|" + o + "|" + s + "|" + a + "|" + h + "|" + u + "|" + c;
              if (!this.geometryInHash(l)) {
                var p = function() {
                    this.vertices.push(new n.Vector(r, i, 0)),
                    this.vertices.push(new n.Vector(o, s, 0)),
                    this.vertices.push(new n.Vector(a, h, 0)),
                    this.vertices.push(new n.Vector(u, c, 0)),
                    this.uvs.push([
                      0, 0
                    ], [
                      1, 0
                    ], [
                      1, 1
                    ], [0, 1])
                  },
                  f = new n.Geometry(2, 2, p);
                f.computeNormals(),
                f.faces = [
                  [
                    0, 1, 2
                  ],
                  [2, 3, 0]
                ],
                this.createBuffers(l, f)
              }
              return this.drawBuffers(l),
              this
            },
            n.RendererGL.prototype.bezier = function(t) {
              var e = t[12] || 20;
              this.beginShape();
              for (var r = [
                0, 0, 0, 0
              ], n = [
                0, 0, 0
              ], i = 0; i <= e; i++)
                r[0] = Math.pow(1 - i / e, 3),
                r[1] = 3 * (i / e) * Math.pow(1 - i / e, 2),
                r[2] = 3 * Math.pow(i / e, 2) * (1 - i / e),
                r[3] = Math.pow(i / e, 3),
                n[0] = t[0] * r[0] + t[3] * r[1] + t[6] * r[2] + t[9] * r[3],
                n[1] = t[1] * r[0] + t[4] * r[1] + t[7] * r[2] + t[10] * r[3],
                n[2] = t[2] * r[0] + t[5] * r[1] + t[8] * r[2] + t[11] * r[3],
                this.vertex(n[0], n[1], n[2]);
              return this.endShape(),
              this
            },
            n.RendererGL.prototype.curve = function(t) {
              var e = t[12];
              this.beginShape();
              for (var r = [
                0, 0, 0, 0
              ], n = [
                0, 0, 0
              ], i = 0; i <= e; i++)
                r[0] = .5 * Math.pow(i / e, 3),
                r[1] = .5 * Math.pow(i / e, 2),
                r[2] = i / e * .5,
                r[3] = .5,
                n[0] = r[0] * (-t[0] + 3 * t[3] - 3 * t[6] + t[9]) + r[1] * (2 * t[0] - 5 * t[3] + 4 * t[6] - t[9]) + r[2] * (-t[0] + t[6]) + r[3] * (2 * t[3]),
                n[1] = r[0] * (-t[1] + 3 * t[4] - 3 * t[7] + t[10]) + r[1] * (2 * t[1] - 5 * t[4] + 4 * t[7] - t[10]) + r[2] * (-t[1] + t[7]) + r[3] * (2 * t[4]),
                n[2] = r[0] * (-t[2] + 3 * t[5] - 3 * t[8] + t[11]) + r[1] * (2 * t[2] - 5 * t[5] + 4 * t[8] - t[11]) + r[2] * (-t[2] + t[8]) + r[3] * (2 * t[5]),
                this.vertex(n[0], n[1], n[2]);
              return this.endShape(),
              this
            },
            e.exports = n
          }, {
            "../core/core": 37,
            "./p5.Geometry": 82
          }
        ],
        88: [
          function(t, e, r) {
            e.exports = {
              immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution *vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
              vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
              vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
              normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}\n",
              normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
              basicFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
              lightVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition / uResolution, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    //loc = loc / uResolution;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n\n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}\n",
              lightTextureFrag: "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a);\n    }\n  }\n}"
            }
          }, {}
        ]
      }, {}, [28])(28)
    })
  },
  function(t, e, r) {
    var n,
      i;
    !function(o, s) {
      n = [r(299)],
      i = function(t) {
        s(t)
      }.apply(e, n),
      !(void 0 !== i && (t.exports = i));
    }(this, function(t) {
      function e(e, r) {
        Object.defineProperty(t.prototype, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            var n = this instanceof t && !this._isGlobal
              ? this
              : window;
            return "undefined" == typeof n._p5PlayProperties && (n._p5PlayProperties = {}),
            e in n._p5PlayProperties || (n._p5PlayProperties[e] = r.call(n)),
            n._p5PlayProperties[e]
          }
        })
      }
      function r(t) {
        if ("function" != typeof t)
          throw new Error("constructor must be a function");
        return function() {
          function e() {
            var e = Array.prototype.slice.call(arguments);
            return t.apply(this, [r].concat(e))
          }
          var r = this;
          return e.prototype = t.prototype,
          e
        }
      }
      function n(t) {
        return function(e) {
          var r = t[e];
          if ("function" != typeof r)
            throw new Error('"' + e + '" is not a p5 method');
          return r.bind(t)
        }
      }
      function i(e, r, o, s, a) {
        var h = n(e),
          p = h("createVector"),
          d = h("color"),
          m = h("random"),
          w = h("print"),
          S = h("push"),
          M = h("pop"),
          T = h("colorMode"),
          R = h("noStroke"),
          E = h("rectMode"),
          C = h("ellipseMode"),
          A = h("imageMode"),
          P = h("translate"),
          I = h("scale"),
          O = h("rotate"),
          L = h("stroke"),
          N = h("strokeWeight"),
          D = h("line"),
          F = h("noFill"),
          k = h("fill"),
          U = h("textAlign"),
          B = h("textSize"),
          G = h("text"),
          H = h("rect"),
          j = h("cos"),
          V = h("sin"),
          W = h("atan2"),
          X = e.quadTree,
          q = e.camera,
          z = t.prototype.RGB,
          Y = t.prototype.CENTER,
          Z = t.prototype.LEFT,
          K = t.prototype.BOTTOM;
        this.position = p(r, o),
        this.previousPosition = p(r, o),
        this.newPosition = p(r, o),
        this.deltaX = 0,
        this.deltaY = 0,
        this.velocity = p(0, 0),
        this.maxSpeed = -1,
        this.friction = 1,
        this.collider = void 0,
        this.colliderType = "none",
        this.touching = {},
        this.touching.left = !1,
        this.touching.right = !1,
        this.touching.top = !1,
        this.touching.bottom = !1,
        this.mass = 1,
        this.immovable = !1,
        this.restitution = 1,
        Object.defineProperty(this, "rotation", {
          enumerable: !0,
          get: function() {
            return this._rotation
          },
          set: function(t) {
            this._rotation = t,
            this.rotateToDirection && this.setSpeed(this.getSpeed(), t)
          }
        }),
        this._rotation = 0,
        this.rotationSpeed = 0,
        this.rotateToDirection = !1,
        this.depth = 0,
        this.scale = 1;
        var J = 1,
          Q = 1;
        this.visible = !0,
        this.mouseActive = !1,
        this.mouseIsOver = !1,
        this.mouseIsPressed = !1,
        this._internalWidth = s,
        this._internalHeight = a,
        Object.defineProperty(this, "width", {
          enumerable: !0,
          configurable: !0,
          get: function() {
            return this._internalWidth
          },
          set: function(t) {
            this._internalWidth = t
          }
        }),
        void 0 === s
          ? this.width = 100
          : this.width = s,
        Object.defineProperty(this, "height", {
          enumerable: !0,
          configurable: !0,
          get: function() {
            return this._internalHeight
          },
          set: function(t) {
            this._internalHeight = t
          }
        }),
        void 0 === a
          ? this.height = 100
          : this.height = a,
        this.originalWidth = this._internalWidth,
        this.originalHeight = this._internalHeight,
        this.removed = !1,
        this.life = -1,
        this.debug = !1,
        this.shapeColor = d(m(255), m(255), m(255)),
        this.groups = [];
        var $ = {},
          tt = "";
        this.animation = void 0,
        this._syncAnimationSizes = function() {
          "default" === this.colliderType && 1 !== $[tt].getWidth() && 1 !== $[tt].getHeight() && (this.collider = this.getBoundingBox(), this.colliderType = "image", this._internalWidth = $[tt].getWidth() * g(this._getScaleX()), this._internalHeight = $[tt].getHeight() * g(this._getScaleY())),
          ($[tt].frameChanged || void 0 === this.width || void 0 === this.height) && (this._internalWidth = $[tt].getWidth() * g(this._getScaleX()), this._internalHeight = $[tt].getHeight() * g(this._getScaleY()))
        },
        this.update = function() {
          if (!this.removed) {
            if (this.newPosition !== this.position
              ? this.previousPosition = p(this.newPosition.x, this.newPosition.y)
              : this.previousPosition = p(this.position.x, this.position.y), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.maxSpeed !== -1 && this.limitSpeed(this.maxSpeed), this.rotateToDirection && this.velocity.mag() > 0 && (this._rotation = this.getDirection()), this.rotation += this.rotationSpeed, this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.newPosition = p(this.position.x, this.position.y), this.deltaX = this.position.x - this.previousPosition.x, this.deltaY = this.position.y - this.previousPosition.y, $[tt] && ($[tt].update(), this._syncAnimationSizes()), this.collider) {
              if (this.collider instanceof c) {
                var t;
                t = e._angleMode === e.RADIANS
                  ? y(this.rotation)
                  : this.rotation,
                "custom" === this.colliderType
                  ? (this.collider.extents.x = this.collider.originalExtents.x * g(this._getScaleX()) * g(j(t)) + this.collider.originalExtents.y * g(this._getScaleY()) * g(V(t)), this.collider.extents.y = this.collider.originalExtents.x * g(this._getScaleX()) * g(V(t)) + this.collider.originalExtents.y * g(this._getScaleY()) * g(j(t)))
                  : "default" === this.colliderType
                    ? (this.collider.extents.x = this._internalWidth * g(this._getScaleX()) * g(j(t)) + this._internalHeight * g(this._getScaleY()) * g(V(t)), this.collider.extents.y = this._internalWidth * g(this._getScaleX()) * g(V(t)) + this._internalHeight * g(this._getScaleY()) * g(j(t)))
                    : "image" === this.colliderType && (this.collider.extents.x = this._internalWidth * g(j(t)) + this._internalHeight * g(V(t)), this.collider.extents.y = this._internalWidth * g(V(t)) + this._internalHeight * g(j(t)))
              }
              this.collider instanceof u && (this.collider.radius = this.collider.originalRadius * g(this.scale))
            }
            this.mouseActive
              ? (this.collider || this.setDefaultCollider(), this.mouseUpdate())
              : "function" != typeof this.onMouseOver && "function" != typeof this.onMouseOut && "function" != typeof this.onMousePressed && "function" != typeof this.onMouseReleased || (this.mouseActive = !0, this.collider || this.setDefaultCollider(), this.mouseUpdate()),
            this.life > 0 && this.life--,
            0 === this.life && this.remove()
          }
        },
        this.setDefaultCollider = function() {
          $[tt] && 1 !== $[tt].getWidth() && 1 !== $[tt].getHeight()
            ? (this.collider = this.getBoundingBox(), this._internalWidth = $[tt].getWidth() * g(this._getScaleX()), this._internalHeight = $[tt].getHeight() * g(this._getScaleY()), this.colliderType = "image")
            : $[tt] && 1 === $[tt].getWidth() && 1 === $[tt].getHeight() || (this.collider = new c(e, this.position, p(this._internalWidth, this._internalHeight)), this.colliderType = "default"),
          e.quadTree.insert(this)
        },
        this.mouseUpdate = function() {
          var t = this.mouseIsOver,
            r = this.mouseIsPressed;
          this.mouseIsOver = !1,
          this.mouseIsPressed = !1;
          var n;
          n = q.active
            ? p(q.mouseX, q.mouseY)
            : p(e.mouseX, e.mouseY),
          this.collider && (this.collider instanceof u
            ? v(n.x, n.y, this.collider.center.x, this.collider.center.y) < this.collider.radius && (this.mouseIsOver = !0)
            : this.collider instanceof c && n.x > this.collider.left() && n.y > this.collider.top() && n.x < this.collider.right() && n.y < this.collider.bottom() && (this.mouseIsOver = !0), this.mouseIsOver && e.mouseIsPressed && (this.mouseIsPressed = !0), !t && this.mouseIsOver && void 0 !== this.onMouseOver && ("function" == typeof this.onMouseOver
            ? this.onMouseOver.call(this, this)
            : w("Warning: onMouseOver should be a function")), t && !this.mouseIsOver && void 0 !== this.onMouseOut && ("function" == typeof this.onMouseOut
            ? this.onMouseOut.call(this, this)
            : w("Warning: onMouseOut should be a function")), !r && this.mouseIsPressed && void 0 !== this.onMousePressed && ("function" == typeof this.onMousePressed
            ? this.onMousePressed.call(this, this)
            : w("Warning: onMousePressed should be a function")), !r || e.mouseIsPressed || this.mouseIsPressed || void 0 === this.onMouseReleased || ("function" == typeof this.onMouseReleased
            ? this.onMouseReleased.call(this, this)
            : w("Warning: onMouseReleased should be a function")))
        },
        this.setCollider = function(t, r, n, i, o) {
          this.colliderType = "custom";
          var s = p(r, n);
          "rectangle" === t && 5 === arguments.length
            ? this.collider = new c(e, this.position, p(i, o), s)
            : "circle" === t && (4 !== arguments.length && w('Warning: usage setCollider("circle", offsetX, offsetY, radius)'), this.collider = new u(e, this.position, i, s)),
          X.insert(this)
        },
        this.getBoundingBox = function() {
          var t = $[tt].getWidth() * g(this._getScaleX()),
            r = $[tt].getHeight() * g(this._getScaleY());
          return 1 === t && 1 === r
            ? new c(e, this.position, p(t, r))
            : new c(e, this.position, p(t, r))
        },
        this.mirrorX = function(t) {
          return 1 !== t && t !== -1
            ? J
            : void(J = t)
        },
        this.mirrorY = function(t) {
          return 1 !== t && t !== -1
            ? Q
            : void(Q = t)
        },
        this._getScaleX = function() {
          return this.scale
        },
        this._getScaleY = function() {
          return this.scale
        },
        this.display = function() {
          this.visible && !this.removed && (S(), T(z), R(), E(Y), C(Y), A(Y), P(this.position.x, this.position.y), I(this._getScaleX() * J, this._getScaleY() * Q), O(e._angleMode === e.RADIANS
            ? y(this.rotation)
            : this.rotation), this.draw(), M(), this.debug && (S(), L(0, 255, 0), N(1), D(this.position.x - 10, this.position.y, this.position.x + 10, this.position.y), D(this.position.x, this.position.y - 10, this.position.x, this.position.y + 10), F(), R(), k(0, 255, 0), U(Z, K), B(16), G(this.depth + "", this.position.x + 4, this.position.y - 2), F(), L(0, 255, 0), void 0 !== this.collider && this.collider.draw(), M()))
        },
        this.draw = function() {
          "" !== tt && $
            ? $[tt] && $[tt].draw(0, 0, 0)
            : (R(), k(this.shapeColor), H(0, 0, this._internalWidth, this._internalHeight))
        },
        this.remove = function() {
          for (this.removed = !0, X.removeObject(this); this.groups.length > 0;)
            this.groups[0].remove(this)
        },
        this.setVelocity = function(t, e) {
          this.velocity.x = t,
          this.velocity.y = e
        },
        this.getSpeed = function() {
          return this.velocity.mag()
        },
        this.getDirection = function() {
          var t = W(this.velocity.y, this.velocity.x);
          return isNaN(t) && (t = 0),
          e._angleMode === e.RADIANS && (t = x(t)),
          t
        },
        this.addToGroup = function(t) {
          t instanceof Array
            ? t.add(this)
            : w("addToGroup error: " + t + " is not a group")
        },
        this.limitSpeed = function(t) {
          var e = this.getSpeed();
          if (g(e) > t) {
            var r = t / g(e);
            this.velocity.x *= r,
            this.velocity.y *= r
          }
        },
        this.setSpeed = function(t, r) {
          var n;
          n = "undefined" == typeof r
            ? 0 !== this.velocity.x || 0 !== this.velocity.y
              ? e.atan2(this.velocity.y, this.velocity.x)
              : e._angleMode === e.RADIANS
                ? y(this._rotation)
                : this._rotation
            : e._angleMode === e.RADIANS
              ? y(r)
              : r,
          this.velocity.x = j(n) * t,
          this.velocity.y = V(n) * t
        },
        this.addSpeed = function(t, r) {
          var n;
          n = e._angleMode === e.RADIANS
            ? y(r)
            : r,
          this.velocity.x += j(n) * t,
          this.velocity.y += V(n) * t
        },
        this.attractionPoint = function(t, e, r) {
          var n = W(r - this.position.y, e - this.position.x);
          this.velocity.x += j(n) * t,
          this.velocity.y += V(n) * t
        },
        this.addImage = function() {
          if ("string" == typeof arguments[0] && arguments[1]instanceof t.Image)
            this.addAnimation(arguments[0], arguments[1]);
          else {
            if (!(arguments[0]instanceof t.Image))
              throw "addImage error: allowed usages are <image> or <label>, <image>";
            this.addAnimation("normal", arguments[0])
          }
        },
        this.addAnimation = function(t) {
          var r;
          if ("string" != typeof t)
            return w("Sprite.addAnimation error: the first argument must be a label (String)"),
            -1;
          if (arguments.length < 2)
            return w("addAnimation error: you must specify a label and n frame images"),
            -1;
          if (arguments[1]instanceof l) {
            var n = arguments[1],
              i = n.clone();
            return $[t] = i,
            "" === tt && (tt = t, this.animation = i),
            i.isSpriteAnimation = !0,
            this._internalWidth = i.getWidth() * g(this._getScaleX()),
            this._internalHeight = i.getHeight() * g(this._getScaleY()),
            i
          }
          for (var o = [], s = 1; s < arguments.length; s++)
            o.push(arguments[s]);
          return r = f(e.Animation, o),
          $[t] = r,
          "" === tt && (tt = t, this.animation = r),
          r.isSpriteAnimation = !0,
          this._internalWidth = r.getWidth() * g(this._getScaleX()),
          this._internalHeight = r.getHeight() * g(this._getScaleY()),
          r
        },
        this.changeImage = function(t) {
          this.changeAnimation(t)
        },
        this.getAnimationLabel = function() {
          return tt
        },
        this.changeAnimation = function(t) {
          $[t]
            ? (tt = t, this.animation = $[t])
            : w("changeAnimation error: no animation labeled " + t)
        },
        this.overlapPixel = function(t, e) {
          var r = p(t, e),
            n = this.animation.getFrameImage();
          if (r.x -= this.position.x - n.width / 2, r.y -= this.position.y - n.height / 2, r.x < 0 || r.x > n.width || r.y < 0 || r.y > n.height)
            return !1;
          if (0 === this.rotation && 1 === this.scale) {
            var i = n.get(r.x, r.y);
            return 255 === i[3]
          }
          return w("Error: overlapPixel doesn't work with scaled or rotated sprites yet"),
          !1
        },
        this.overlapPoint = function(t, e) {
          var r = p(t, e);
          if (this.collider || this.setDefaultCollider(), void 0 !== this.collider) {
            if (this.collider instanceof c)
              return r.x > this.collider.left() && r.x < this.collider.right() && r.y > this.collider.top() && r.y < this.collider.bottom();
            if (this.collider instanceof u) {
              var n = this.collider.radius * this.collider.radius,
                i = b(this.collider.center.x - r.x, 2) + b(this.collider.center.y - r.y, 2);
              return i < n
            }
            return !1
          }
          return !1
        },
        this.overlap = function(t, e) {
          return this.AABBops("overlap", t, e)
        },
        this.collide = function(t, e) {
          return this.AABBops("collide", t, e)
        },
        this.displace = function(t, e) {
          return this.AABBops("displace", t, e)
        },
        this.bounce = function(t, e) {
          return this.AABBops("bounce", t, e)
        },
        this.AABBops = function(r, n, o) {
          this.touching.left = !1,
          this.touching.right = !1,
          this.touching.top = !1,
          this.touching.bottom = !1;
          var s = !1,
            a = [];
          if (n instanceof i)
            a.push(n);
          else {
            if (!(n instanceof Array))
              throw "Error: overlap can only be checked between sprites or groups";
            void 0 !== X && X.active && (a = X.retrieveFromGroup(this, n)),
            0 === a.length && (a = n)
          }
          for (var h = 0; h < a.length; h++)
            if (this !== a[h] && !this.removed) {
              var l,
                f = a[h];
              if (void 0 === this.collider && this.setDefaultCollider(), void 0 === f.collider && f.setDefaultCollider(), void 0 !== this.collider && void 0 !== f.collider)
                if ("overlap" === r) {
                  var d;
                  d = this.collider instanceof u
                    ? f.collider.overlap(this.collider)
                    : this.collider.overlap(f.collider),
                  d && (s = !0, void 0 !== o && "function" == typeof o && o.call(this, this, f))
                }
              else if ("collide" === r || "bounce" === r) {
                l = p(0, 0);
                var m = g(this.velocity.x - f.velocity.x) >= f.collider.extents.x / 2 && 0 === _(this.deltaX - this.velocity.x),
                  y = g(this.velocity.y - f.velocity.y) >= f.collider.size().y / 2 && 0 === _(this.deltaY - this.velocity.y);
                if (m || y) {
                  var v = p((this.position.x + this.previousPosition.x) / 2, (this.position.y + this.previousPosition.y) / 2),
                    x = p(g(this.position.x - this.previousPosition.x) + this.collider.extents.x, g(this.position.y - this.previousPosition.y) + this.collider.extents.y),
                    b = new c(e, v, x, this.collider.offset);
                  b.overlap(f.collider) && (m && (this.velocity.x < 0
                    ? l.x = f.collider.right() - this.collider.left() + 1
                    : this.velocity.x > 0 && (l.x = f.collider.left() - this.collider.right() - 1)), y && (this.velocity.y > 0
                    ? l.y = f.collider.top() - this.collider.bottom() - 1
                    : this.velocity.y < 0 && (l.y = f.collider.bottom() - this.collider.top() + 1)))
                } else
                  l = this.collider instanceof u
                    ? f.collider.collide(this.collider).mult(-1)
                    : this.collider.collide(f.collider);
                if (0 !== l.x || 0 !== l.y) {
                  var w,
                    S,
                    M,
                    T;
                  if (this.immovable || (this.position.add(l), this.previousPosition = p(this.position.x, this.position.y), this.newPosition = p(this.position.x, this.position.y)), l.x > 0 && (this.touching.left = !0), l.x < 0 && (this.touching.right = !0), l.y < 0 && (this.touching.bottom = !0), l.y > 0 && (this.touching.top = !0), "bounce" === r)
                    if (this.collider instanceof u && f.collider instanceof u) {
                      var R = t.Vector.sub(this.position, f.position),
                        E = t.Vector.sub(f.position, this.position),
                        C = R.magSq(),
                        A = this.mass + f.mass,
                        P = 0,
                        I = 0;
                      this.immovable
                        ? I = 2
                        : f.immovable
                          ? P = 2
                          : (P = 2 * f.mass / A, I = 2 * this.mass / A);
                      var O = R.mult(P * t.Vector.sub(this.velocity, f.velocity).dot(R) / C),
                        L = E.mult(I * t.Vector.sub(f.velocity, this.velocity).dot(E) / C);
                      this.velocity.sub(O.mult(this.restitution)),
                      f.velocity.sub(L.mult(f.restitution))
                    } else
                      f.immovable
                        ? (w = -this.velocity.x + f.velocity.x, S = -this.velocity.y + f.velocity.y)
                        : (w = (this.velocity.x * (this.mass - f.mass) + 2 * f.mass * f.velocity.x) / (this.mass + f.mass), S = (this.velocity.y * (this.mass - f.mass) + 2 * f.mass * f.velocity.y) / (this.mass + f.mass), M = (f.velocity.x * (f.mass - this.mass) + 2 * this.mass * this.velocity.x) / (this.mass + f.mass), T = (f.velocity.y * (f.mass - this.mass) + 2 * this.mass * this.velocity.y) / (this.mass + f.mass)),
                      g(l.x) > g(l.y) && (this.immovable || (this.velocity.x = w * this.restitution), f.immovable || (f.velocity.x = M * f.restitution)),
                      g(l.x) < g(l.y) && (this.immovable || (this.velocity.y = S * this.restitution), f.immovable || (f.velocity.y = T * f.restitution));
                void 0 !== o && "function" == typeof o && o.call(this, this, f),
                  s = !0
                }
              } else
                "displace" === r && (l = this.collider instanceof u
                  ? f.collider.collide(this.collider).mult(-1)
                  : this.collider.collide(f.collider), 0 === l.x && 0 === l.y || (f.position.sub(l), l.x > 0 && (this.touching.left = !0), l.x < 0 && (this.touching.right = !0), l.y < 0 && (this.touching.bottom = !0), l.y > 0 && (this.touching.top = !0), void 0 !== o && "function" == typeof o && o.call(this, this, f), s = !0))
              }
          return s
        }
      }
      function o(t, e, r, n) {
        this.position = t.createVector(e, r),
        this.zoom = n,
        this.mouseX = t.mouseX,
        this.mouseY = t.mouseY,
        this.active = !1,
        this.on = function() {
          this.active || (s.call(t), this.active = !0)
        },
        this.off = function() {
          this.active && (a.call(t), this.active = !1)
        }
      }
      function s() {
        var t = this,
          e = t.camera;
        e.init || 0 !== e.position.x || 0 !== e.position.y || (e.position.x = t.width / 2, e.position.y = t.height / 2, e.init = !0),
        e.mouseX = t.mouseX + e.position.x - t.width / 2,
        e.mouseY = t.mouseY + e.position.y - t.height / 2,
        e.active || (e.active = !0, t.push(), t.scale(e.zoom), t.translate(-e.position.x + t.width / 2 / e.zoom, -e.position.y + t.height / 2 / e.zoom))
      }
      function a() {
        var t = this;
        t.camera.active && (t.pop(), t.camera.active = !1)
      }
      function h() {
        function t(t, e) {
          return null === t || null === e
            ? null === t && null === e
            : "string" == typeof t
              ? t === e
              : "object" != typeof t
                ? t === e
                : t.equals instanceof Function
                  ? t.equals(e)
                  : t === e
        }
        function e(t, e, r) {
          for (var n = !1, i = 0; i < this.size(); i++)
            n = this.get(i).AABBops(t, e, r) || n;
          return n
        }
        var r = [];
        return r.get = function(t) {
          return r[t]
        },
        r.contains = function(t) {
          return this.indexOf(t) > -1
        },
        r.indexOf = function(e) {
          for (var n = 0, i = r.length; n < i; ++n)
            if (t(e, r[n]))
              return n;
        return -1
        },
        r.add = function(t) {
          if (!(t instanceof i))
            throw "Error: you can only add sprites to a group";

- 1 === this.indexOf(t) && (r.push(t), t.groups.push(this))
        },
        r.size = function() {
          return r.length
        },
        r.removeSprites = function() {
          for (; r.length > 0;)
            r[0].remove()
        },
        r.clear = function() {
          r.length = 0
        },
        r.remove = function(t) {
          if (!(t instanceof i))
            throw "Error: you can only remove sprites from a group";
          var e,
            n = !1;
          for (e = r.length - 1; e >= 0; e--)
            r[e] === t && (r.splice(e, 1), n = !0);
          if (n)
            for (e = t.groups.length - 1; e >= 0; e--)
              t.groups[e] === this && t.groups.splice(e, 1);
        return n
        },
        r.toArray = function() {
          return r.slice(0)
        },
        r.maxDepth = function() {
          return 0 === r.length
            ? 0
            : r.reduce(function(t, e) {
              return Math.max(t, e.depth)
            }, -(1 / 0))
        },
        r.minDepth = function() {
          return 0 === r.length
            ? 99999
            : r.reduce(function(t, e) {
              return Math.min(t, e.depth)
            }, 1 / 0)
        },
        r.draw = function() {
          this.sort(function(t, e) {
            return t.depth - e.depth
          });
          for (var t = 0; t < this.size(); t++)
            this.get(t).display()
        },
        r.overlap = e.bind(r, "overlap"),
        r.collide = e.bind(r, "collide"),
        r.displace = e.bind(r, "displace"),
        r.bounce = e.bind(r, "bounce"),
        r
      }
      function u(e, r, i, o) {
        var s = n(e),
          a = s("createVector"),
          h = t.prototype.CENTER;
        this.center = r,
        this.radius = i,
        this.originalRadius = i,
        void 0 === o
          ? this.offset = a(0, 0)
          : this.offset = o,
        this.extents = a(2 * i, 2 * i),
        this.draw = function() {
          e.noFill(),
          e.stroke(0, 255, 0),
          e.rectMode(h),
          e.ellipse(this.center.x + this.offset.x, this.center.y + this.offset.y, 2 * this.radius, 2 * this.radius)
        },
        this.overlap = function(t) {
          var e = this.radius + t.radius;
          e *= e;
          var r = b(this.center.x - t.center.x, 2) + b(this.center.y - t.center.y, 2);
          return e > r
        },
        this.collide = function(t) {
          if (this.overlap(t)) {
            var r = e.atan2(this.center.y - t.center.y, this.center.x - t.center.x),
              n = this.radius + t.radius,
              i = g(n - v(this.center.x, this.center.y, t.center.x, t.center.y)),
              o = a(e.cos(r) * i, e.sin(r) * i);
            return o
          }
          return a(0, 0)
        },
        this.size = function() {
          return a(2 * this.radius, 2 * this.radius)
        },
        this.left = function() {
          return this.center.x + this.offset.x - this.radius
        },
        this.right = function() {
          return this.center.x + this.offset.x + this.radius
        },
        this.top = function() {
          return this.center.y + this.offset.y - this.radius
        },
        this.bottom = function() {
          return this.center.y + this.offset.y + this.radius
        }
      }
      function c(e, r, i, o) {
        var s = n(e),
          a = s("createVector"),
          h = t.prototype.CENTER,
          l = t.prototype.PI;
        this.center = r,
        this.extents = i,
        this.originalExtents = i.copy(),
        void 0 === o
          ? this.offset = a(0, 0)
          : this.offset = o,
        this.min = function() {
          return a(this.center.x + this.offset.x - this.extents.x, this.center.y + this.offset.y - this.extents.y)
        },
        this.max = function() {
          return a(this.center.x + this.offset.x + this.extents.x, this.center.y + this.offset.y + this.extents.y)
        },
        this.right = function() {
          return this.center.x + this.offset.x + this.extents.x / 2
        },
        this.left = function() {
          return this.center.x + this.offset.x - this.extents.x / 2
        },
        this.top = function() {
          return this.center.y + this.offset.y - this.extents.y / 2
        },
        this.bottom = function() {
          return this.center.y + this.offset.y + this.extents.y / 2
        },
        this.size = function() {
          return a(2 * this.extents.x, 2 * this.extents.y)
        },
        this.rotate = function(t) {
          var r;
          r = e._angleMode === e.RADIANS
            ? y(t)
            : t;
          var n = this.extents.x * g(e.cos(r)) + this.extents.y * g(e.sin(r)),
            i = this.extents.x * g(e.sin(r)) + this.extents.y * g(e.cos(r));
          this.extents.x = n,
          this.extents.y = i
        },
        this.draw = function() {
          e.noFill(),
          e.stroke(0, 255, 0),
          e.rectMode(h),
          e.rect(this.center.x + this.offset.x, this.center.y + this.offset.y, this.size().x / 2, this.size().y / 2)
        },
        this.overlap = function(t) {
          if (t instanceof c) {
            var e = t.minkowskiDifference(this);
            return e.min().x <= 0 && e.max().x >= 0 && e.min().y <= 0 && e.max().y >= 0
          }
          if (t instanceof u) {
            var r = a(t.center.x, t.center.y);
            t.center.x < this.left()
              ? r.x = this.left()
              : t.center.x > this.right() && (r.x = this.right()),
            t.center.y < this.top()
              ? r.y = this.top()
              : t.center.y > this.bottom() && (r.y = this.bottom());
            var n = r.dist(t.center);
            return n < t.radius
          }
        },
        this.collide = function(t) {
          if (t instanceof c) {
            var r = t.minkowskiDifference(this);
            if (r.min().x <= 0 && r.max().x >= 0 && r.min().y <= 0 && r.max().y >= 0) {
              var n = r.closestPointOnBoundsToPoint(a(0, 0));
              return n
            }
            return a(0, 0)
          }
          if (t instanceof u) {
            var i = a(t.center.x, t.center.y);
            t.center.x < this.left()
              ? i.x = this.left()
              : t.center.x > this.right() && (i.x = this.right()),
            t.center.y < this.top()
              ? i.y = this.top()
              : t.center.y > this.bottom() && (i.y = this.bottom());
            var o,
              s = i.dist(t.center);
            if (s < t.radius) {
              if (i.x === t.center.x && i.y === t.center.y) {
                var h = i.x - this.center.x,
                  p = i.y - this.center.y;
                g(h) < g(p)
                  ? h > 0
                    ? i.x = this.right()
                    : i.x = this.left()
                  : p < 0
                    ? i.y = this.top()
                    : i.y = this.bottom(),
                o = e.atan2(t.center.y - i.y, t.center.x - i.x),
                0 === o && (i.x === this.right() && (o = l), i.y === this.top() && (o = l / 2), i.y === this.bottom() && (o = -l / 2))
              } else
                o = e.atan2(i.y - t.center.y, i.x - t.center.x);
              var f = a(i.x - t.center.x, i.y - t.center.y),
                d = a(e.cos(o) * t.radius - f.x, e.sin(o) * t.radius - f.y);
              return d
            }
            return a(0, 0)
          }
        },
        this.minkowskiDifference = function(t) {
          var r = this.min().sub(t.max()),
            n = this.size().add(t.size());
          return new c(e, r.add(n.div(2)), n.div(2))
        },
        this.closestPointOnBoundsToPoint = function(t) {
          var e = g(t.x - this.min().x),
            r = a(this.min().x, t.y);
          return g(this.max().x - t.x) < e && (e = g(this.max().x - t.x), r = a(this.max().x, t.y)),
          g(this.max().y - t.y) < e && (e = g(this.max().y - t.y), r = a(t.x, this.max().y)),
          g(this.min().y - t.y) < e && (e = g(this.min.y - t.y), r = a(t.x, this.min().y)),
          r
        }
      }
      function l(e) {
        var r,
          n = Array.prototype.slice.call(arguments, 1),
          i = t.prototype.CENTER;
        this.images = [];
        var o = 0,
          s = 0,
          a = -1;
        if (this.offX = 0, this.offY = 0, this.frameDelay = 4, this.playing = !0, this.visible = !0, this.looping = !0, this.frameChanged = !1, this.imageCollider = !1, 2 === n.length && "string" == typeof n[0] && "string" == typeof n[1]) {
          var h = n[0],
            u = n[1],
            c = h.substring(h.length - 4, h.length);
          ".png" !== c && (e.println("Animation error: you need to use .png files (filename " + h + ")"), h = -1);
          var f = u.substring(u.length - 4, u.length);
          if (".png" !== f && (e.println("Animation error: you need to use .png files (filename " + u + ")"), u = -1), h !== -1 && u !== -1) {
            var d = 0,
              m = 0;
            for (r = h.length - 5; r >= 0; r--)
              h.charAt(r) >= "0" && h.charAt(r) <= "9" && d++;
            for (r = u.length - 5; r >= 0; r--)
              u.charAt(r) >= "0" && u.charAt(r) <= "9" && m++;
            var g = h.substring(0, h.length - (4 + d)),
              v = u.substring(0, u.length - (4 + m)),
              x = parseInt(h.substring(h.length - (4 + d), h.length - 4), 10),
              b = parseInt(u.substring(u.length - (4 + m), u.length - 4), 10);
            if (b < x) {
              var _ = b;
              b = x,
              x = _
            }
            if (g !== v)
              this.images.push(e.loadImage(h)),
              this.images.push(e.loadImage(u));
            else {
              var w;
              if (d === m)
                for (r = x; r <= b; r++)
                  w = g + e.nf(r, d) + ".png",
                  this.images.push(e.loadImage(w));
            else
                for (r = x; r <= b; r++)
                  w = g + r + ".png",
                  this.images.push(e.loadImage(w))
            }
          }
        } else if (1 === n.length && n[0]instanceof p)
          this.spriteSheet = n[0],
          this.images = this.spriteSheet.frames.map(function(t) {
            return t.frame
          });
        else if (0 !== n.length)
          for (r = 0; r < n.length; r++)
            n[r]instanceof t.Image
              ? this.images.push(n[r])
              : this.images.push(e.loadImage(n[r]));
        this.clone = function() {
          var t = new l(e);
          return t.images = [],
          this.spriteSheet && (t.spriteSheet = this.spriteSheet.clone()),
          t.images = this.images.slice(),
          t.offX = this.offX,
          t.offY = this.offY,
          t.frameDelay = this.frameDelay,
          t.playing = this.playing,
          t.looping = this.looping,
          t
        },
        this.draw = function(t, r, n) {
          if (this.xpos = t, this.ypos = r, this.rotation = n || 0, this.visible) {
            if (this.isSpriteAnimation || this.update(), e.push(), e.imageMode(i), e.translate(this.xpos, this.ypos), e._angleMode === e.RADIANS
              ? e.rotate(y(this.rotation))
              : e.rotate(this.rotation), void 0 !== this.images[o])
              if (this.spriteSheet) {
                var s = this.images[o];
                e.image(this.spriteSheet.image, s.x, s.y, s.width, s.height, this.offX, this.offY, s.width, s.height)
              } else
                e.image(this.images[o], this.offX, this.offY);
          else
              e.print("Warning undefined frame " + o);
            e.pop()
          }
        },
        this.update = function() {
          s++;
          var t = o;
          this.frameChanged = !1,
          1 === this.images.length && (this.playing = !1, o = 0),
          this.playing && s % this.frameDelay === 0 && (a > o && a !== -1
            ? o ++: a < o && a !== -1
              ? o--
              : a === o && a !== -1
                ? this.playing = !1
                : this.looping
                  ? o >= this.images.length - 1
                    ? o = 0
                    : o ++: o < this.images.length - 1 && o++),
          t !== o && (this.frameChanged = !0)
        },
        this.play = function() {
          this.playing = !0,
          a = -1
        },
        this.stop = function() {
          this.playing = !1
        },
        this.rewind = function() {
          o = 0
        },
        this.changeFrame = function(t) {
          o = t < this.images.length
            ? t
            : this.images.length - 1,
          a = -1
        },
        this.nextFrame = function() {
          o < this.images.length - 1
            ? o += 1
            : this.looping && (o = 0),
          a = -1,
          this.playing = !1
        },
        this.previousFrame = function() {
          o > 0
            ? o -= 1
            : this.looping && (o = this.images.length - 1),
          a = -1,
          this.playing = !1
        },
        this.goToFrame = function(t) {
          this.f = t,
          this.f >= 0 && this.f < this.images.length && (a = this.f),
          a !== o && (this.playing = !0)
        },
        this.getFrame = function() {
          return o
        },
        this.getLastFrame = function() {
          return this.images.length - 1
        },
        this.getFrameImage = function() {
          return this.images[o]
        },
        this.getImageAt = function(t) {
          return this.images[t]
        },
        this.getWidth = function() {
          return this.images[o]
            ? this.images[o].width
            : 1
        },
        this.getHeight = function() {
          return this.images[o]
            ? this.images[o].height
            : 1
        }
      }
      function p(e) {
        var r = Array.prototype.slice.call(arguments, 1);
        this.image = null,
        this.frames = [],
        this.frame_width = 0,
        this.frame_height = 0,
        this.num_frames = 0,
        this._generateSheetFrames = function() {
          for (var t = 0, e = 0, r = 0; r < this.num_frames; r++)
            this.frames.push({
              name: r,
              frame: {
                x: t,
                y: e,
                width: this.frame_width,
                height: this.frame_height
              }
            }),
            t += this.frame_width,
            t >= this.image.width && (t = 0, e += this.frame_height, e >= this.image.height && (e = 0))
        },
        2 === r.length && Array.isArray(r[1])
          ? (this.frames = r[1], this.num_frames = this.frames.length)
          : 4 === r.length && "number" == typeof r[1] && "number" == typeof r[2] && "number" == typeof r[3] && (this.frame_width = r[1], this.frame_height = r[2], this.num_frames = r[3]),
        r[0]instanceof t.Image
          ? (this.image = r[0], 4 === r.length && this._generateSheetFrames())
          : 2 === r.length
            ? this.image = e.loadImage(r[0])
            : 4 === r.length && (this.image = e.loadImage(r[0], this._generateSheetFrames.bind(this))),
        this.drawFrame = function(t, r, n, i, o) {
          var s;
          if ("number" == typeof t)
            s = this.frames[t].frame;
          else
            for (var a = 0; a < this.frames.length; a++)
              if (this.frames[a].name === t) {
                s = this.frames[a].frame;
                break
              }
            var h = i || s.width,
            u = o || s.height;
          e.image(this.image, s.x, s.y, s.width, s.height, r, n, h, u)
        },
        this.clone = function() {
          for (var t = new p(e), r = 0; r < this.frames.length; r++) {
            var n = this.frames[r].frame,
              i = {
                name: n.name,
                frame: {
                  x: n.x,
                  y: n.y,
                  width: n.width,
                  height: n.height
                }
              };
            t.frames.push(i)
          }
          return t.image = this.image,
          t.frame_width = this.frame_width,
          t.frame_height = this.frame_height,
          t.num_frames = this.num_frames,
          t
        }
      }
      function f(t, e) {
        function r() {
          return t.apply(this, e)
        }
        return r.prototype = t.prototype,
        new r
      }
      function d(t, e, r, n) {
        this.active = !0,
        this.max_objects = e || 10,
        this.max_levels = r || 4,
        this.level = n || 0,
        this.bounds = t,
        this.objects = [],
        this.object_refs = [],
        this.nodes = []
      }
      function m() {
        this.quadTree.active && (this.quadTree.updateBounds(), this.quadTree.cleanup())
      }
      var g = t.prototype.abs,
        y = t.prototype.radians,
        v = t.prototype.dist,
        x = t.prototype.degrees,
        b = t.prototype.pow,
        _ = t.prototype.round;
      e("allSprites", function() {
        return new t.prototype.Group
      }),
      t.prototype.spriteUpdate = !0,
      t.prototype.createSprite = function(t, e, r, n) {
        var o = new i(this, t, e, r, n);
        return o.depth = this.allSprites.maxDepth() + 1,
        this.allSprites.add(o),
        o
      },
      t.prototype.removeSprite = function(t) {
        t.remove()
      },
      t.prototype.updateSprites = function(t) {
        if (t === !1 && (this.spriteUpdate = !1), t === !0 && (this.spriteUpdate = !0), this.spriteUpdate)
          for (var e = 0; e < this.allSprites.size(); e++)
            this.allSprites.get(e).update()
      },
      t.prototype.getSprites = function() {
        if (0 === arguments.length)
          return this.allSprites.toArray();
        for (var t = [], e = 0; e < arguments.length; e++)
          for (var r = 0; r < this.allSprites.size(); r++)
            this.allSprites.get(r).isTagged(arguments[e]) && t.push(this.allSprites.get(r));
      return t
      },
      t.prototype.drawSprites = function(t) {
        if (t = t || this.allSprites, "function" != typeof t.draw)
          throw "Error: with drawSprites you can only draw all sprites or a group";
        t.draw()
      },
      t.prototype.drawSprite = function(t) {
        t && t.display()
      },
      t.prototype.loadAnimation = function() {
        return f(this.Animation, arguments)
      },
      t.prototype.loadSpriteSheet = function() {
        return f(this.SpriteSheet, arguments)
      },
      t.prototype.animation = function(t, e, r) {
        t.draw(e, r)
      },
      e("_p5play", function() {
        return {keyStates: {}, mouseStates: {}}
      });
      var w = 0,
        S = 1,
        M = 2,
        T = 3;
      t.prototype.keyWentDown = function(t) {
        return this._isKeyInState(t, S)
      },
      t.prototype.keyWentUp = function(t) {
        return this._isKeyInState(t, T)
      },
      t.prototype.keyDown = function(t) {
        return this._isKeyInState(t, M)
      },
      t.prototype._isKeyInState = function(t, e) {
        var r,
          n = this._p5play.keyStates;
        return r = "string" == typeof t
          ? this._keyCodeFromAlias(t)
          : t,
        void 0 === n[r] && (this.keyIsDown(r)
          ? n[r] = M
          : n[r] = w),
        n[r] === e
      },
      t.prototype.mouseDown = function(t) {
        return this._isMouseButtonInState(t, M)
      },
      t.prototype.mouseUp = function(t) {
        return this._isMouseButtonInState(t, w)
      },
      t.prototype.mouseWentUp = function(t) {
        return this._isMouseButtonInState(t, T)
      },
      t.prototype.mouseWentDown = function(t) {
        return this._isMouseButtonInState(t, S)
      },
      t.prototype._isMouseButtonInState = function(t, e) {
        var r = this._p5play.mouseStates;
        return void 0 === t && (t = this.LEFT),
        void 0 === r[t] && (this.mouseIsPressed && this.mouseButton === t
          ? r[t] = M
          : r[t] = w),
        r[t] === e
      },
      t.prototype.KEY = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        " ": 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        LEFT: 37,
        UP_ARROW: 38,
        UP: 38,
        RIGHT_ARROW: 39,
        RIGHT: 39,
        DOWN_ARROW: 40,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        "0NUMPAD": 96,
        "1NUMPAD": 97,
        "2NUMPAD": 98,
        "3NUMPAD": 99,
        "4NUMPAD": 100,
        "5NUMPAD": 101,
        "6NUMPAD": 102,
        "7NUMPAD": 103,
        "8NUMPAD": 104,
        "9NUMPAD": 105,
        MULTIPLY: 106,
        PLUS: 107,
        MINUS: 109,
        DOT: 110,
        SLASH1: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        EQUAL: 187,
        COMMA: 188,
        SLASH: 191,
        BACKSLASH: 220
      },
      t.prototype.KEY_DEPRECATIONS = {
        MINUT: "MINUS",
        COMA: "COMMA"
      },
      t.prototype._keyCodeFromAlias = function(t) {
        return t = t.toUpperCase(),
        this.KEY_DEPRECATIONS[t] && (this._warn('Key literal "' + t + '" is deprecated and may be removed in a future version of p5.play. Please use "' + this.KEY_DEPRECATIONS[t] + '" instead.'), t = this.KEY_DEPRECATIONS[t]),
        this.KEY[t]
      },
      t.prototype.readPresses = function() {
        var t = this._p5play.keyStates,
          e = this._p5play.mouseStates;
        for (var r in t)
          this.keyIsDown(r)
            ? t[r] === w
              ? t[r] = S
              : t[r] = M
            : t[r] === M
              ? t[r] = T
              : t[r] = w;
        for (var n in e)
          this.mouseIsPressed && this.mouseButton === n
            ? e[n] === w
              ? e[n] = S
              : e[n] = M
            : e[n] === M
              ? e[n] = T
              : e[n] = w
          },
      t.prototype.useQuadTree = function(t) {
        return void 0 !== this.quadTree && (void 0 === t
          ? this.quadTree.active
          : void(t
            ? this.quadTree.active = !0
            : this.quadTree.active = !1))
      },
      e("quadTree", function() {
        return new d({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }, 4)
      }),
      e("Sprite", r(i)),
      e("camera", function() {
        var t = new o(this, 0, 0, 1);
        return t.init = !1,
        t
      }),
      e("Camera", r(o)),
      t.prototype.Group = h,
      e("CircleCollider", r(u)),
      e("AABB", r(c)),
      e("Animation", r(l)),
      e("SpriteSheet", r(p)),
      d.prototype.updateBounds = function() {
        for (var t = this.getAll(), e = 1e4, r = 1e4, n = -1e4, i = -1e4, o = 0; o < t.length; o++)
          t[o].position.x < e && (e = t[o].position.x),
          t[o].position.y < r && (r = t[o].position.y),
          t[o].position.x > n && (n = t[o].position.x),
          t[o].position.y > i && (i = t[o].position.y);
        this.bounds = {
          x: e,
          y: r,
          width: n,
          height: i
        }
      },
      d.prototype.split = function() {
        var t = this.level + 1,
          e = Math.round(this.bounds.width / 2),
          r = Math.round(this.bounds.height / 2),
          n = Math.round(this.bounds.x),
          i = Math.round(this.bounds.y);
        this.nodes[0] = new d({
          x: n + e,
          y: i,
          width: e,
          height: r
        }, this.max_objects, this.max_levels, t),
        this.nodes[1] = new d({
          x: n,
          y: i,
          width: e,
          height: r
        }, this.max_objects, this.max_levels, t),
        this.nodes[2] = new d({
          x: n,
          y: i + r,
          width: e,
          height: r
        }, this.max_objects, this.max_levels, t),
        this.nodes[3] = new d({
          x: n + e,
          y: i + r,
          width: e,
          height: r
        }, this.max_objects, this.max_levels, t)
      },
      d.prototype.getIndex = function(t) {
        if (t.collider) {
          var e = -1,
            r = this.bounds.x + this.bounds.width / 2,
            n = this.bounds.y + this.bounds.height / 2,
            i = t.collider.top() < n && t.collider.top() + t.collider.size().y < n,
            o = t.collider.top() > n;
          return t.collider.left() < r && t.collider.left() + t.collider.size().x < r
            ? i
              ? e = 1
              : o && (e = 2)
            : t.collider.left() > r && (i
              ? e = 0
              : o && (e = 3)),
          e
        }
        return -1
      },
      d.prototype.insert = function(t) {
        if (this.objects.indexOf(t) === -1) {
          var e,
            r = 0;
          if ("undefined" != typeof this.nodes[0] && (e = this.getIndex(t), e !== -1))
            return void this.nodes[e].insert(t);
          if (this.objects.push(t), this.objects.length > this.max_objects && this.level < this.max_levels)
            for ("undefined" == typeof this.nodes[0] && this.split(); r < this.objects.length;)
              e = this.getIndex(this.objects[r]),
              e !== -1
                ? this.nodes[e].insert(this.objects.splice(r, 1)[0])
                : r += 1;
            }
          },
      d.prototype.retrieve = function(t) {
        var e = this.getIndex(t),
          r = this.objects;
        if ("undefined" != typeof this.nodes[0])
          if (e !== -1)
            r = r.concat(this.nodes[e].retrieve(t));
          else
            for (var n = 0; n < this.nodes.length; n += 1)
              r = r.concat(this.nodes[n].retrieve(t));
      return r
      },
      d.prototype.retrieveFromGroup = function(t, e) {
        for (var r = [], n = this.retrieve(t), i = 0; i < n.length; i++)
          e.contains(n[i]) && r.push(n[i]);
        return r
      },
      d.prototype.getAll = function() {
        for (var t = this.objects, e = 0; e < this.nodes.length; e += 1)
          t = t.concat(this.nodes[e].getAll());
        return t
      },
      d.prototype.getObjectNode = function(t) {
        var e;
        if (!this.nodes.length)
          return this;
        if (e = this.getIndex(t), e === -1)
          return this;
        var r = this.nodes[e].getObjectNode(t);
        return !!r && r
      },
      d.prototype.removeObject = function(t) {
        var e = this.getObjectNode(t),
          r = e.objects.indexOf(t);
        return r !== -1 && void e.objects.splice(r, 1)
      },
      d.prototype.clear = function() {
        if (this.objects = [], this.nodes.length) {
          for (var t = 0; t < this.nodes.length; t += 1)
            this.nodes[t].clear();
          this.nodes = []
        }
      },
      d.prototype.cleanup = function() {
        var t = this.getAll();
        this.clear();
        for (var e = 0; e < t.length; e++)
          this.insert(t[e])
      },
      t.prototype.registerMethod("pre", t.prototype.readPresses),
      t.prototype.registerMethod("pre", t.prototype.updateSprites),
      t.prototype.registerMethod("post", m),
      t.prototype.registerMethod("pre", s),
      t.prototype.registerMethod("post", a),
      t.prototype._warn = function(t) {
        var e = window.console;
        e && ("function" == typeof e.warn
          ? e.warn(t)
          : "function" == typeof e.log && e.log("Warning: " + t))
      }
    })
  }
]);
//# sourceMappingURL=bundle.js.map

//# sourceMappingURL=bundle.js.map
