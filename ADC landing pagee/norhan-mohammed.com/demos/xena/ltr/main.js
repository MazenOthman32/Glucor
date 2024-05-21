 function _toConsumableArray(t) {
        return (
          _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
        );
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _iterableToArray(t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      }
      function _arrayWithoutHoles(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function _typeof(t) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      !(function (t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports
          ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                  if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                  return e(t);
                })
          : e(t);
      })("undefined" != typeof window ? window : this, function (E, t) {
        "use strict";
        var e = [],
          T = E.document,
          i = Object.getPrototypeOf,
          a = e.slice,
          m = e.concat,
          l = e.push,
          r = e.indexOf,
          n = {},
          o = n.toString,
          g = n.hasOwnProperty,
          s = g.toString,
          c = s.call(Object),
          v = {},
          y = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
          },
          _ = function (t) {
            return null != t && t === t.window;
          },
          u = { type: !0, src: !0, noModule: !0 };
        function b(t, e, n) {
          var i,
            r = (e = e || T).createElement("script");
          if (((r.text = t), n)) for (i in u) n[i] && (r[i] = n[i]);
          e.head.appendChild(r).parentNode.removeChild(r);
        }
        function w(t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? n[o.call(t)] || "object"
            : typeof t;
        }
        var C = function (t, e) {
            return new C.fn.init(t, e);
          },
          h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function d(t) {
          var e = !!t && "length" in t && t.length,
            n = w(t);
          return (
            !y(t) &&
            !_(t) &&
            ("array" === n ||
              0 === e ||
              ("number" == typeof e && 0 < e && e - 1 in t))
          );
        }
        (C.fn = C.prototype =
          {
            jquery: "3.3.1",
            constructor: C,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (t) {
              return null == t
                ? a.call(this)
                : t < 0
                ? this[t + this.length]
                : this[t];
            },
            pushStack: function (t) {
              var e = C.merge(this.constructor(), t);
              return (e.prevObject = this), e;
            },
            each: function (t) {
              return C.each(this, t);
            },
            map: function (n) {
              return this.pushStack(
                C.map(this, function (t, e) {
                  return n.call(t, e, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (t) {
              var e = this.length,
                n = +t + (t < 0 ? e : 0);
              return this.pushStack(0 <= n && n < e ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: e.sort,
            splice: e.splice,
          }),
          (C.extend = C.fn.extend =
            function () {
              var t,
                e,
                n,
                i,
                r,
                o,
                s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
              for (
                "boolean" == typeof s &&
                  ((c = s), (s = arguments[a] || {}), a++),
                  "object" == typeof s || y(s) || (s = {}),
                  a === l && ((s = this), a--);
                a < l;
                a++
              )
                if (null != (t = arguments[a]))
                  for (e in t)
                    (n = s[e]),
                      s !== (i = t[e]) &&
                        (c &&
                        i &&
                        (C.isPlainObject(i) || (r = Array.isArray(i)))
                          ? ((o = r
                              ? ((r = !1), n && Array.isArray(n) ? n : [])
                              : n && C.isPlainObject(n)
                              ? n
                              : {}),
                            (s[e] = C.extend(c, o, i)))
                          : void 0 !== i && (s[e] = i));
              return s;
            }),
          C.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
              var e, n;
              return !(
                !t ||
                "[object Object]" !== o.call(t) ||
                ((e = i(t)) &&
                  ("function" !=
                    typeof (n = g.call(e, "constructor") && e.constructor) ||
                    s.call(n) !== c))
              );
            },
            isEmptyObject: function (t) {
              var e;
              for (e in t) return !1;
              return !0;
            },
            globalEval: function (t) {
              b(t);
            },
            each: function (t, e) {
              var n,
                i = 0;
              if (d(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
              else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
              return t;
            },
            trim: function (t) {
              return null == t ? "" : (t + "").replace(h, "");
            },
            makeArray: function (t, e) {
              var n = e || [];
              return (
                null != t &&
                  (d(Object(t))
                    ? C.merge(n, "string" == typeof t ? [t] : t)
                    : l.call(n, t)),
                n
              );
            },
            inArray: function (t, e, n) {
              return null == e ? -1 : r.call(e, t, n);
            },
            merge: function (t, e) {
              for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                t[r++] = e[i];
              return (t.length = r), t;
            },
            grep: function (t, e, n) {
              for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                !e(t[r], r) != s && i.push(t[r]);
              return i;
            },
            map: function (t, e, n) {
              var i,
                r,
                o = 0,
                s = [];
              if (d(t))
                for (i = t.length; o < i; o++)
                  null != (r = e(t[o], o, n)) && s.push(r);
              else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
              return m.apply([], s);
            },
            guid: 1,
            support: v,
          }),
          "function" == typeof Symbol &&
            (C.fn[Symbol.iterator] = e[Symbol.iterator]),
          C.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (t, e) {
              n["[object " + e + "]"] = e.toLowerCase();
            }
          );
        var f = (function (n) {
          var t,
            f,
            b,
            o,
            r,
            p,
            h,
            m,
            w,
            l,
            c,
            x,
            E,
            s,
            T,
            g,
            a,
            u,
            v,
            C = "sizzle" + 1 * new Date(),
            y = n.document,
            D = 0,
            i = 0,
            d = st(),
            _ = st(),
            S = st(),
            A = function (t, e) {
              return t === e && (c = !0), 0;
            },
            k = {}.hasOwnProperty,
            e = [],
            I = e.pop,
            N = e.push,
            O = e.push,
            L = e.slice,
            j = function (t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n;
              return -1;
            },
            F =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ =
              "\\[" +
              P +
              "*(" +
              M +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              P +
              "*\\]",
            R =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              $ +
              ")*)|.*)\\)|)",
            H = new RegExp(P + "+", "g"),
            q = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            z = new RegExp("^" + P + "*," + P + "*"),
            W = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            B = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            U = new RegExp(R),
            V = new RegExp("^" + M + "$"),
            Q = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + $),
              PSEUDO: new RegExp("^" + R),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + F + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            K = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            tt = function (t, e, n) {
              var i = "0x" + e - 65536;
              return i != i || n
                ? e
                : i < 0
                ? String.fromCharCode(65536 + i)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            it = function () {
              x();
            },
            rt = yt(
              function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((e = L.call(y.childNodes)), y.childNodes),
              e[y.childNodes.length].nodeType;
          } catch (n) {
            O = {
              apply: e.length
                ? function (t, e) {
                    N.apply(t, L.call(e));
                  }
                : function (t, e) {
                    for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                    t.length = n - 1;
                  },
            };
          }
          function ot(t, e, n, i) {
            var r,
              o,
              s,
              a,
              l,
              c,
              u,
              h = e && e.ownerDocument,
              d = e ? e.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
            )
              return n;
            if (
              !i &&
              ((e ? e.ownerDocument || e : y) !== E && x(e), (e = e || E), T)
            ) {
              if (11 !== d && (l = G.exec(t)))
                if ((r = l[1])) {
                  if (9 === d) {
                    if (!(s = e.getElementById(r))) return n;
                    if (s.id === r) return n.push(s), n;
                  } else if (
                    h &&
                    (s = h.getElementById(r)) &&
                    v(e, s) &&
                    s.id === r
                  )
                    return n.push(s), n;
                } else {
                  if (l[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                  if (
                    (r = l[3]) &&
                    f.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return O.apply(n, e.getElementsByClassName(r)), n;
                }
              if (f.qsa && !S[t + " "] && (!g || !g.test(t))) {
                if (1 !== d) (h = e), (u = t);
                else if ("object" !== e.nodeName.toLowerCase()) {
                  for (
                    (a = e.getAttribute("id"))
                      ? (a = a.replace(et, nt))
                      : e.setAttribute("id", (a = C)),
                      o = (c = p(t)).length;
                    o--;

                  )
                    c[o] = "#" + a + " " + vt(c[o]);
                  (u = c.join(",")), (h = (Z.test(t) && mt(e.parentNode)) || e);
                }
                if (u)
                  try {
                    return O.apply(n, h.querySelectorAll(u)), n;
                  } catch (t) {
                  } finally {
                    a === C && e.removeAttribute("id");
                  }
              }
            }
            return m(t.replace(q, "$1"), e, n, i);
          }
          function st() {
            var i = [];
            return function t(e, n) {
              return (
                i.push(e + " ") > b.cacheLength && delete t[i.shift()],
                (t[e + " "] = n)
              );
            };
          }
          function at(t) {
            return (t[C] = !0), t;
          }
          function lt(t) {
            var e = E.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ct(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
              b.attrHandle[n[i]] = e;
          }
          function ut(t, e) {
            var n = e && t,
              i =
                n &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function ht(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function dt(n) {
            return function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e || "button" === e) && t.type === n;
            };
          }
          function ft(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && rt(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function pt(s) {
            return at(function (o) {
              return (
                (o = +o),
                at(function (t, e) {
                  for (var n, i = s([], t.length, o), r = i.length; r--; )
                    t[(n = i[r])] && (t[n] = !(e[n] = t[n]));
                })
              );
            });
          }
          function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (t in ((f = ot.support = {}),
          (r = ot.isXML =
            function (t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName;
            }),
          (x = ot.setDocument =
            function (t) {
              var e,
                n,
                i = t ? t.ownerDocument || t : y;
              return (
                i !== E &&
                  9 === i.nodeType &&
                  i.documentElement &&
                  ((s = (E = i).documentElement),
                  (T = !r(E)),
                  y !== E &&
                    (n = E.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", it, !1)
                      : n.attachEvent && n.attachEvent("onunload", it)),
                  (f.attributes = lt(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (f.getElementsByTagName = lt(function (t) {
                    return (
                      t.appendChild(E.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (f.getElementsByClassName = Y.test(E.getElementsByClassName)),
                  (f.getById = lt(function (t) {
                    return (
                      (s.appendChild(t).id = C),
                      !E.getElementsByName || !E.getElementsByName(C).length
                    );
                  })),
                  f.getById
                    ? ((b.filter.ID = function (t) {
                        var e = t.replace(J, tt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (b.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && T) {
                          var n = e.getElementById(t);
                          return n ? [n] : [];
                        }
                      }))
                    : ((b.filter.ID = function (t) {
                        var n = t.replace(J, tt);
                        return function (t) {
                          var e =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return e && e.value === n;
                        };
                      }),
                      (b.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && T) {
                          var n,
                            i,
                            r,
                            o = e.getElementById(t);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                            for (
                              r = e.getElementsByName(t), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (b.find.TAG = f.getElementsByTagName
                    ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : f.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var n,
                          i = [],
                          r = 0,
                          o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }),
                  (b.find.CLASS =
                    f.getElementsByClassName &&
                    function (t, e) {
                      if (void 0 !== e.getElementsByClassName && T)
                        return e.getElementsByClassName(t);
                    }),
                  (a = []),
                  (g = []),
                  (f.qsa = Y.test(E.querySelectorAll)) &&
                    (lt(function (t) {
                      (s.appendChild(t).innerHTML =
                        "<a id='" +
                        C +
                        "'></a><select id='" +
                        C +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          g.push("[*^$]=" + P + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          g.push("\\[" + P + "*(?:value|" + F + ")"),
                        t.querySelectorAll("[id~=" + C + "-]").length ||
                          g.push("~="),
                        t.querySelectorAll(":checked").length ||
                          g.push(":checked"),
                        t.querySelectorAll("a#" + C + "+*").length ||
                          g.push(".#.+[+~]");
                    }),
                    lt(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = E.createElement("input");
                      e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          g.push("name" + P + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          g.push(":enabled", ":disabled"),
                        (s.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          g.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (f.matchesSelector = Y.test(
                    (u =
                      s.matches ||
                      s.webkitMatchesSelector ||
                      s.mozMatchesSelector ||
                      s.oMatchesSelector ||
                      s.msMatchesSelector)
                  )) &&
                    lt(function (t) {
                      (f.disconnectedMatch = u.call(t, "*")),
                        u.call(t, "[s!='']:x"),
                        a.push("!=", R);
                    }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (a = a.length && new RegExp(a.join("|"))),
                  (e = Y.test(s.compareDocumentPosition)),
                  (v =
                    e || Y.test(s.contains)
                      ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                          return (
                            t === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (A = e
                    ? function (t, e) {
                        if (t === e) return (c = !0), 0;
                        var n =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (t.ownerDocument || t) === (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1) ||
                          (!f.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === E || (t.ownerDocument === y && v(y, t))
                              ? -1
                              : e === E || (e.ownerDocument === y && v(y, e))
                              ? 1
                              : l
                              ? j(l, t) - j(l, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, e) {
                        if (t === e) return (c = !0), 0;
                        var n,
                          i = 0,
                          r = t.parentNode,
                          o = e.parentNode,
                          s = [t],
                          a = [e];
                        if (!r || !o)
                          return t === E
                            ? -1
                            : e === E
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : l
                            ? j(l, t) - j(l, e)
                            : 0;
                        if (r === o) return ut(t, e);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (; s[i] === a[i]; ) i++;
                        return i
                          ? ut(s[i], a[i])
                          : s[i] === y
                          ? -1
                          : a[i] === y
                          ? 1
                          : 0;
                      })),
                E
              );
            }),
          (ot.matches = function (t, e) {
            return ot(t, null, null, e);
          }),
          (ot.matchesSelector = function (t, e) {
            if (
              ((t.ownerDocument || t) !== E && x(t),
              (e = e.replace(B, "='$1']")),
              f.matchesSelector &&
                T &&
                !S[e + " "] &&
                (!a || !a.test(e)) &&
                (!g || !g.test(e)))
            )
              try {
                var n = u.call(t, e);
                if (
                  n ||
                  f.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return n;
              } catch (t) {}
            return 0 < ot(e, E, null, [t]).length;
          }),
          (ot.contains = function (t, e) {
            return (t.ownerDocument || t) !== E && x(t), v(t, e);
          }),
          (ot.attr = function (t, e) {
            (t.ownerDocument || t) !== E && x(t);
            var n = b.attrHandle[e.toLowerCase()],
              i =
                n && k.call(b.attrHandle, e.toLowerCase())
                  ? n(t, e, !T)
                  : void 0;
            return void 0 !== i
              ? i
              : f.attributes || !T
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (ot.escape = function (t) {
            return (t + "").replace(et, nt);
          }),
          (ot.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (ot.uniqueSort = function (t) {
            var e,
              n = [],
              i = 0,
              r = 0;
            if (
              ((c = !f.detectDuplicates),
              (l = !f.sortStable && t.slice(0)),
              t.sort(A),
              c)
            ) {
              for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
              for (; i--; ) t.splice(n[i], 1);
            }
            return (l = null), t;
          }),
          (o = ot.getText =
            function (t) {
              var e,
                n = "",
                i = 0,
                r = t.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
              } else for (; (e = t[i++]); ) n += o(e);
              return n;
            }),
          ((b = ot.selectors =
            {
              cacheLength: 50,
              createPseudo: at,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(J, tt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || ot.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && ot.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2];
                  return Q.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : n &&
                          U.test(n) &&
                          (e = p(n, !0)) &&
                          (e = n.indexOf(")", n.length - e) - n.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(J, tt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = d[t + " "];
                  return (
                    e ||
                    ((e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                      d(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (n, i, r) {
                  return function (t) {
                    var e = ot.attr(t, n);
                    return null == e
                      ? "!=" === i
                      : !i ||
                          ((e += ""),
                          "=" === i
                            ? e === r
                            : "!=" === i
                            ? e !== r
                            : "^=" === i
                            ? r && 0 === e.indexOf(r)
                            : "*=" === i
                            ? r && -1 < e.indexOf(r)
                            : "$=" === i
                            ? r && e.slice(-r.length) === r
                            : "~=" === i
                            ? -1 < (" " + e.replace(H, " ") + " ").indexOf(r)
                            : "|=" === i &&
                              (e === r ||
                                e.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (p, t, e, m, g) {
                  var v = "nth" !== p.slice(0, 3),
                    y = "last" !== p.slice(-4),
                    _ = "of-type" === t;
                  return 1 === m && 0 === g
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (t, e, n) {
                        var i,
                          r,
                          o,
                          s,
                          a,
                          l,
                          c = v != y ? "nextSibling" : "previousSibling",
                          u = t.parentNode,
                          h = _ && t.nodeName.toLowerCase(),
                          d = !n && !_,
                          f = !1;
                        if (u) {
                          if (v) {
                            for (; c; ) {
                              for (s = t; (s = s[c]); )
                                if (
                                  _
                                    ? s.nodeName.toLowerCase() === h
                                    : 1 === s.nodeType
                                )
                                  return !1;
                              l = c = "only" === p && !l && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((l = [y ? u.firstChild : u.lastChild]), y && d)
                          ) {
                            for (
                              f =
                                (a =
                                  (i =
                                    (r =
                                      (o = (s = u)[C] || (s[C] = {}))[
                                        s.uniqueID
                                      ] || (o[s.uniqueID] = {}))[p] ||
                                    [])[0] === D && i[1]) && i[2],
                                s = a && u.childNodes[a];
                              (s =
                                (++a && s && s[c]) || (f = a = 0) || l.pop());

                            )
                              if (1 === s.nodeType && ++f && s === t) {
                                r[p] = [D, a, f];
                                break;
                              }
                          } else if (
                            (d &&
                              (f = a =
                                (i =
                                  (r =
                                    (o = (s = t)[C] || (s[C] = {}))[
                                      s.uniqueID
                                    ] || (o[s.uniqueID] = {}))[p] || [])[0] ===
                                  D && i[1]),
                            !1 === f)
                          )
                            for (
                              ;
                              (s =
                                (++a && s && s[c]) || (f = a = 0) || l.pop()) &&
                              ((_
                                ? s.nodeName.toLowerCase() !== h
                                : 1 !== s.nodeType) ||
                                !++f ||
                                (d &&
                                  ((r =
                                    (o = s[C] || (s[C] = {}))[s.uniqueID] ||
                                    (o[s.uniqueID] = {}))[p] = [D, f]),
                                s !== t));

                            );
                          return (f -= g) === m || (f % m == 0 && 0 <= f / m);
                        }
                      };
                },
                PSEUDO: function (t, o) {
                  var e,
                    s =
                      b.pseudos[t] ||
                      b.setFilters[t.toLowerCase()] ||
                      ot.error("unsupported pseudo: " + t);
                  return s[C]
                    ? s(o)
                    : 1 < s.length
                    ? ((e = [t, t, "", o]),
                      b.setFilters.hasOwnProperty(t.toLowerCase())
                        ? at(function (t, e) {
                            for (var n, i = s(t, o), r = i.length; r--; )
                              t[(n = j(t, i[r]))] = !(e[n] = i[r]);
                          })
                        : function (t) {
                            return s(t, 0, e);
                          })
                    : s;
                },
              },
              pseudos: {
                not: at(function (t) {
                  var i = [],
                    r = [],
                    a = h(t.replace(q, "$1"));
                  return a[C]
                    ? at(function (t, e, n, i) {
                        for (var r, o = a(t, null, i, []), s = t.length; s--; )
                          (r = o[s]) && (t[s] = !(e[s] = r));
                      })
                    : function (t, e, n) {
                        return (
                          (i[0] = t), a(i, null, n, r), (i[0] = null), !r.pop()
                        );
                      };
                }),
                has: at(function (e) {
                  return function (t) {
                    return 0 < ot(e, t).length;
                  };
                }),
                contains: at(function (e) {
                  return (
                    (e = e.replace(J, tt)),
                    function (t) {
                      return (
                        -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                      );
                    }
                  );
                }),
                lang: at(function (n) {
                  return (
                    V.test(n || "") || ot.error("unsupported lang: " + n),
                    (n = n.replace(J, tt).toLowerCase()),
                    function (t) {
                      var e;
                      do {
                        if (
                          (e = T
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (e = e.toLowerCase()) === n ||
                            0 === e.indexOf(n + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var e = n.location && n.location.hash;
                  return e && e.slice(1) === t.id;
                },
                root: function (t) {
                  return t === s;
                },
                focus: function (t) {
                  return (
                    t === E.activeElement &&
                    (!E.hasFocus || E.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: ft(!1),
                disabled: ft(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !b.pseudos.empty(t);
                },
                header: function (t) {
                  return X.test(t.nodeName);
                },
                input: function (t) {
                  return K.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: pt(function () {
                  return [0];
                }),
                last: pt(function (t, e) {
                  return [e - 1];
                }),
                eq: pt(function (t, e, n) {
                  return [n < 0 ? n + e : n];
                }),
                even: pt(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t;
                }),
                odd: pt(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t;
                }),
                lt: pt(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; 0 <= --i; ) t.push(i);
                  return t;
                }),
                gt: pt(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                  return t;
                }),
              },
            }).pseudos.nth = b.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[t] = ht(t);
          for (t in { submit: !0, reset: !0 }) b.pseudos[t] = dt(t);
          function gt() {}
          function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
          }
          function yt(a, t, e) {
            var l = t.dir,
              c = t.next,
              u = c || l,
              h = e && "parentNode" === u,
              d = i++;
            return t.first
              ? function (t, e, n) {
                  for (; (t = t[l]); )
                    if (1 === t.nodeType || h) return a(t, e, n);
                  return !1;
                }
              : function (t, e, n) {
                  var i,
                    r,
                    o,
                    s = [D, d];
                  if (n) {
                    for (; (t = t[l]); )
                      if ((1 === t.nodeType || h) && a(t, e, n)) return !0;
                  } else
                    for (; (t = t[l]); )
                      if (1 === t.nodeType || h)
                        if (
                          ((r =
                            (o = t[C] || (t[C] = {}))[t.uniqueID] ||
                            (o[t.uniqueID] = {})),
                          c && c === t.nodeName.toLowerCase())
                        )
                          t = t[l] || t;
                        else {
                          if ((i = r[u]) && i[0] === D && i[1] === d)
                            return (s[2] = i[2]);
                          if (((r[u] = s)[2] = a(t, e, n))) return !0;
                        }
                  return !1;
                };
          }
          function _t(r) {
            return 1 < r.length
              ? function (t, e, n) {
                  for (var i = r.length; i--; ) if (!r[i](t, e, n)) return !1;
                  return !0;
                }
              : r[0];
          }
          function bt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
              (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), c && e.push(a)));
            return s;
          }
          function wt(f, p, m, g, v, t) {
            return (
              g && !g[C] && (g = wt(g)),
              v && !v[C] && (v = wt(v, t)),
              at(function (t, e, n, i) {
                var r,
                  o,
                  s,
                  a = [],
                  l = [],
                  c = e.length,
                  u =
                    t ||
                    (function (t, e, n) {
                      for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                      return n;
                    })(p || "*", n.nodeType ? [n] : n, []),
                  h = !f || (!t && p) ? u : bt(u, a, f, n, i),
                  d = m ? (v || (t ? f : c || g) ? [] : e) : h;
                if ((m && m(h, d, n, i), g))
                  for (r = bt(d, l), g(r, [], n, i), o = r.length; o--; )
                    (s = r[o]) && (d[l[o]] = !(h[l[o]] = s));
                if (t) {
                  if (v || f) {
                    if (v) {
                      for (r = [], o = d.length; o--; )
                        (s = d[o]) && r.push((h[o] = s));
                      v(null, (d = []), r, i);
                    }
                    for (o = d.length; o--; )
                      (s = d[o]) &&
                        -1 < (r = v ? j(t, s) : a[o]) &&
                        (t[r] = !(e[r] = s));
                  }
                } else (d = bt(d === e ? d.splice(c, d.length) : d)), v ? v(null, e, d, i) : O.apply(e, d);
              })
            );
          }
          function xt(t) {
            for (
              var r,
                e,
                n,
                i = t.length,
                o = b.relative[t[0].type],
                s = o || b.relative[" "],
                a = o ? 1 : 0,
                l = yt(
                  function (t) {
                    return t === r;
                  },
                  s,
                  !0
                ),
                c = yt(
                  function (t) {
                    return -1 < j(r, t);
                  },
                  s,
                  !0
                ),
                u = [
                  function (t, e, n) {
                    var i =
                      (!o && (n || e !== w)) ||
                      ((r = e).nodeType ? l(t, e, n) : c(t, e, n));
                    return (r = null), i;
                  },
                ];
              a < i;
              a++
            )
              if ((e = b.relative[t[a].type])) u = [yt(_t(u), e)];
              else {
                if ((e = b.filter[t[a].type].apply(null, t[a].matches))[C]) {
                  for (n = ++a; n < i && !b.relative[t[n].type]; n++);
                  return wt(
                    1 < a && _t(u),
                    1 < a &&
                      vt(
                        t
                          .slice(0, a - 1)
                          .concat({ value: " " === t[a - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    e,
                    a < n && xt(t.slice(a, n)),
                    n < i && xt((t = t.slice(n))),
                    n < i && vt(t)
                  );
                }
                u.push(e);
              }
            return _t(u);
          }
          return (
            (gt.prototype = b.filters = b.pseudos),
            (b.setFilters = new gt()),
            (p = ot.tokenize =
              function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = _[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, a = [], l = b.preFilter; s; ) {
                  for (o in ((n && !(i = z.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
                  (n = !1),
                  (i = W.exec(s)) &&
                    ((n = i.shift()),
                    r.push({ value: n, type: i[0].replace(q, " ") }),
                    (s = s.slice(n.length))),
                  b.filter))
                    !(i = Q[o].exec(s)) ||
                      (l[o] && !(i = l[o](i))) ||
                      ((n = i.shift()),
                      r.push({ value: n, type: o, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return e ? s.length : s ? ot.error(t) : _(t, a).slice(0);
              }),
            (h = ot.compile =
              function (t, e) {
                var n,
                  g,
                  v,
                  y,
                  _,
                  i,
                  r = [],
                  o = [],
                  s = S[t + " "];
                if (!s) {
                  for (e || (e = p(t)), n = e.length; n--; )
                    (s = xt(e[n]))[C] ? r.push(s) : o.push(s);
                  (s = S(
                    t,
                    ((g = o),
                    (v = r),
                    (y = 0 < v.length),
                    (_ = 0 < g.length),
                    (i = function (t, e, n, i, r) {
                      var o,
                        s,
                        a,
                        l = 0,
                        c = "0",
                        u = t && [],
                        h = [],
                        d = w,
                        f = t || (_ && b.find.TAG("*", r)),
                        p = (D += null == d ? 1 : Math.random() || 0.1),
                        m = f.length;
                      for (
                        r && (w = e === E || e || r);
                        c !== m && null != (o = f[c]);
                        c++
                      ) {
                        if (_ && o) {
                          for (
                            s = 0,
                              e || o.ownerDocument === E || (x(o), (n = !T));
                            (a = g[s++]);

                          )
                            if (a(o, e || E, n)) {
                              i.push(o);
                              break;
                            }
                          r && (D = p);
                        }
                        y && ((o = !a && o) && l--, t && u.push(o));
                      }
                      if (((l += c), y && c !== l)) {
                        for (s = 0; (a = v[s++]); ) a(u, h, e, n);
                        if (t) {
                          if (0 < l)
                            for (; c--; ) u[c] || h[c] || (h[c] = I.call(i));
                          h = bt(h);
                        }
                        O.apply(i, h),
                          r &&
                            !t &&
                            0 < h.length &&
                            1 < l + v.length &&
                            ot.uniqueSort(i);
                      }
                      return r && ((D = p), (w = d)), u;
                    }),
                    y ? at(i) : i)
                  )).selector = t;
                }
                return s;
              }),
            (m = ot.select =
              function (t, e, n, i) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  c = "function" == typeof t && t,
                  u = !i && p((t = c.selector || t));
                if (((n = n || []), 1 === u.length)) {
                  if (
                    2 < (o = u[0] = u[0].slice(0)).length &&
                    "ID" === (s = o[0]).type &&
                    9 === e.nodeType &&
                    T &&
                    b.relative[o[1].type]
                  ) {
                    if (
                      !(e = (b.find.ID(s.matches[0].replace(J, tt), e) ||
                        [])[0])
                    )
                      return n;
                    c && (e = e.parentNode),
                      (t = t.slice(o.shift().value.length));
                  }
                  for (
                    r = Q.needsContext.test(t) ? 0 : o.length;
                    r-- && ((s = o[r]), !b.relative[(a = s.type)]);

                  )
                    if (
                      (l = b.find[a]) &&
                      (i = l(
                        s.matches[0].replace(J, tt),
                        (Z.test(o[0].type) && mt(e.parentNode)) || e
                      ))
                    ) {
                      if ((o.splice(r, 1), !(t = i.length && vt(o))))
                        return O.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (c || h(t, u))(
                    i,
                    e,
                    !T,
                    n,
                    !e || (Z.test(t) && mt(e.parentNode)) || e
                  ),
                  n
                );
              }),
            (f.sortStable = C.split("").sort(A).join("") === C),
            (f.detectDuplicates = !!c),
            x(),
            (f.sortDetached = lt(function (t) {
              return 1 & t.compareDocumentPosition(E.createElement("fieldset"));
            })),
            lt(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ct("type|href|height|width", function (t, e, n) {
                if (!n)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (f.attributes &&
              lt(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ct("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            lt(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              ct(F, function (t, e, n) {
                var i;
                if (!n)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (i = t.getAttributeNode(e)) && i.specified
                    ? i.value
                    : null;
              }),
            ot
          );
        })(E);
        (C.find = f),
          (C.expr = f.selectors),
          (C.expr[":"] = C.expr.pseudos),
          (C.uniqueSort = C.unique = f.uniqueSort),
          (C.text = f.getText),
          (C.isXMLDoc = f.isXML),
          (C.contains = f.contains),
          (C.escapeSelector = f.escape);
        var p = function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                if (r && C(t).is(n)) break;
                i.push(t);
              }
            return i;
          },
          x = function (t, e) {
            for (var n = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && n.push(t);
            return n;
          },
          D = C.expr.match.needsContext;
        function S(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var A =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function k(t, n, i) {
          return y(n)
            ? C.grep(t, function (t, e) {
                return !!n.call(t, e, t) !== i;
              })
            : n.nodeType
            ? C.grep(t, function (t) {
                return (t === n) !== i;
              })
            : "string" != typeof n
            ? C.grep(t, function (t) {
                return -1 < r.call(n, t) !== i;
              })
            : C.filter(n, t, i);
        }
        (C.filter = function (t, e, n) {
          var i = e[0];
          return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
              ? C.find.matchesSelector(i, t)
                ? [i]
                : []
              : C.find.matches(
                  t,
                  C.grep(e, function (t) {
                    return 1 === t.nodeType;
                  })
                )
          );
        }),
          C.fn.extend({
            find: function (t) {
              var e,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof t)
                return this.pushStack(
                  C(t).filter(function () {
                    for (e = 0; e < i; e++)
                      if (C.contains(r[e], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), e = 0; e < i; e++)
                C.find(t, r[e], n);
              return 1 < i ? C.uniqueSort(n) : n;
            },
            filter: function (t) {
              return this.pushStack(k(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(k(this, t || [], !0));
            },
            is: function (t) {
              return !!k(
                this,
                "string" == typeof t && D.test(t) ? C(t) : t || [],
                !1
              ).length;
            },
          });
        var I,
          N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((C.fn.init = function (t, e, n) {
          var i, r;
          if (!t) return this;
          if (((n = n || I), "string" != typeof t))
            return t.nodeType
              ? ((this[0] = t), (this.length = 1), this)
              : y(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(C)
              : C.makeArray(t, this);
          if (
            !(i =
              "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
                ? [null, t, null]
                : N.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof C ? e[0] : e),
              C.merge(
                this,
                C.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : T,
                  !0
                )
              ),
              A.test(i[1]) && C.isPlainObject(e))
            )
              for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (r = T.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }).prototype = C.fn),
          (I = C(T));
        var O = /^(?:parents|prev(?:Until|All))/,
          L = { children: !0, contents: !0, next: !0, prev: !0 };
        function j(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        C.fn.extend({
          has: function (t) {
            var e = C(t, this),
              n = e.length;
            return this.filter(function () {
              for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var n,
              i = 0,
              r = this.length,
              o = [],
              s = "string" != typeof t && C(t);
            if (!D.test(t))
              for (; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? -1 < s.index(n)
                      : 1 === n.nodeType && C.find.matchesSelector(n, t))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? r.call(C(t), this[0])
                : r.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (t, e) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t)
            );
          },
        }),
          C.each(
            {
              parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function (t) {
                return p(t, "parentNode");
              },
              parentsUntil: function (t, e, n) {
                return p(t, "parentNode", n);
              },
              next: function (t) {
                return j(t, "nextSibling");
              },
              prev: function (t) {
                return j(t, "previousSibling");
              },
              nextAll: function (t) {
                return p(t, "nextSibling");
              },
              prevAll: function (t) {
                return p(t, "previousSibling");
              },
              nextUntil: function (t, e, n) {
                return p(t, "nextSibling", n);
              },
              prevUntil: function (t, e, n) {
                return p(t, "previousSibling", n);
              },
              siblings: function (t) {
                return x((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return x(t.firstChild);
              },
              contents: function (t) {
                return S(t, "iframe")
                  ? t.contentDocument
                  : (S(t, "template") && (t = t.content || t),
                    C.merge([], t.childNodes));
              },
            },
            function (i, r) {
              C.fn[i] = function (t, e) {
                var n = C.map(this, r, t);
                return (
                  "Until" !== i.slice(-5) && (e = t),
                  e && "string" == typeof e && (n = C.filter(e, n)),
                  1 < this.length &&
                    (L[i] || C.uniqueSort(n), O.test(i) && n.reverse()),
                  this.pushStack(n)
                );
              };
            }
          );
        var F = /[^\x20\t\r\n\f]+/g;
        function P(t) {
          return t;
        }
        function M(t) {
          throw t;
        }
        function $(t, e, n, i) {
          var r;
          try {
            t && y((r = t.promise))
              ? r.call(t).done(e).fail(n)
              : t && y((r = t.then))
              ? r.call(t, e, n)
              : e.apply(void 0, [t].slice(i));
          } catch (t) {
            n.apply(void 0, [t]);
          }
        }
        (C.Callbacks = function (i) {
          var t, n;
          i =
            "string" == typeof i
              ? ((t = i),
                (n = {}),
                C.each(t.match(F) || [], function (t, e) {
                  n[e] = !0;
                }),
                n)
              : C.extend({}, i);
          var r,
            e,
            o,
            s,
            a = [],
            l = [],
            c = -1,
            u = function () {
              for (s = s || i.once, o = r = !0; l.length; c = -1)
                for (e = l.shift(); ++c < a.length; )
                  !1 === a[c].apply(e[0], e[1]) &&
                    i.stopOnFalse &&
                    ((c = a.length), (e = !1));
              i.memory || (e = !1), (r = !1), s && (a = e ? [] : "");
            },
            h = {
              add: function () {
                return (
                  a &&
                    (e && !r && ((c = a.length - 1), l.push(e)),
                    (function n(t) {
                      C.each(t, function (t, e) {
                        y(e)
                          ? (i.unique && h.has(e)) || a.push(e)
                          : e && e.length && "string" !== w(e) && n(e);
                      });
                    })(arguments),
                    e && !r && u()),
                  this
                );
              },
              remove: function () {
                return (
                  C.each(arguments, function (t, e) {
                    for (var n; -1 < (n = C.inArray(e, a, n)); )
                      a.splice(n, 1), n <= c && c--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? -1 < C.inArray(t, a) : 0 < a.length;
              },
              empty: function () {
                return a && (a = []), this;
              },
              disable: function () {
                return (s = l = []), (a = e = ""), this;
              },
              disabled: function () {
                return !a;
              },
              lock: function () {
                return (s = l = []), e || r || (a = e = ""), this;
              },
              locked: function () {
                return !!s;
              },
              fireWith: function (t, e) {
                return (
                  s ||
                    ((e = [t, (e = e || []).slice ? e.slice() : e]),
                    l.push(e),
                    r || u()),
                  this
                );
              },
              fire: function () {
                return h.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!o;
              },
            };
          return h;
        }),
          C.extend({
            Deferred: function (t) {
              var o = [
                  [
                    "notify",
                    "progress",
                    C.Callbacks("memory"),
                    C.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    C.Callbacks("once memory"),
                    C.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    C.Callbacks("once memory"),
                    C.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                r = "pending",
                s = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return a.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return s.then(null, t);
                  },
                  pipe: function () {
                    var r = arguments;
                    return C.Deferred(function (i) {
                      C.each(o, function (t, e) {
                        var n = y(r[e[4]]) && r[e[4]];
                        a[e[1]](function () {
                          var t = n && n.apply(this, arguments);
                          t && y(t.promise)
                            ? t
                                .promise()
                                .progress(i.notify)
                                .done(i.resolve)
                                .fail(i.reject)
                            : i[e[0] + "With"](this, n ? [t] : arguments);
                        });
                      }),
                        (r = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var l = 0;
                    function c(r, o, s, a) {
                      return function () {
                        var n = this,
                          i = arguments,
                          t = function () {
                            var t, e;
                            if (!(r < l)) {
                              if ((t = s.apply(n, i)) === o.promise())
                                throw new TypeError("Thenable self-resolution");
                              (e =
                                t &&
                                ("object" == typeof t ||
                                  "function" == typeof t) &&
                                t.then),
                                y(e)
                                  ? a
                                    ? e.call(t, c(l, o, P, a), c(l, o, M, a))
                                    : (l++,
                                      e.call(
                                        t,
                                        c(l, o, P, a),
                                        c(l, o, M, a),
                                        c(l, o, P, o.notifyWith)
                                      ))
                                  : (s !== P && ((n = void 0), (i = [t])),
                                    (a || o.resolveWith)(n, i));
                            }
                          },
                          e = a
                            ? t
                            : function () {
                                try {
                                  t();
                                } catch (t) {
                                  C.Deferred.exceptionHook &&
                                    C.Deferred.exceptionHook(t, e.stackTrace),
                                    l <= r + 1 &&
                                      (s !== M && ((n = void 0), (i = [t])),
                                      o.rejectWith(n, i));
                                }
                              };
                        r
                          ? e()
                          : (C.Deferred.getStackHook &&
                              (e.stackTrace = C.Deferred.getStackHook()),
                            E.setTimeout(e));
                      };
                    }
                    return C.Deferred(function (t) {
                      o[0][3].add(c(0, t, y(i) ? i : P, t.notifyWith)),
                        o[1][3].add(c(0, t, y(e) ? e : P)),
                        o[2][3].add(c(0, t, y(n) ? n : M));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? C.extend(t, s) : s;
                  },
                },
                a = {};
              return (
                C.each(o, function (t, e) {
                  var n = e[2],
                    i = e[5];
                  (s[e[1]] = n.add),
                    i &&
                      n.add(
                        function () {
                          r = i;
                        },
                        o[3 - t][2].disable,
                        o[3 - t][3].disable,
                        o[0][2].lock,
                        o[0][3].lock
                      ),
                    n.add(e[3].fire),
                    (a[e[0]] = function () {
                      return (
                        a[e[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (a[e[0] + "With"] = n.fireWith);
                }),
                s.promise(a),
                t && t.call(a, a),
                a
              );
            },
            when: function (t) {
              var n = arguments.length,
                e = n,
                i = Array(e),
                r = a.call(arguments),
                o = C.Deferred(),
                s = function (e) {
                  return function (t) {
                    (i[e] = this),
                      (r[e] = 1 < arguments.length ? a.call(arguments) : t),
                      --n || o.resolveWith(i, r);
                  };
                };
              if (
                n <= 1 &&
                ($(t, o.done(s(e)).resolve, o.reject, !n),
                "pending" === o.state() || y(r[e] && r[e].then))
              )
                return o.then();
              for (; e--; ) $(r[e], s(e), o.reject);
              return o.promise();
            },
          });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (C.Deferred.exceptionHook = function (t, e) {
          E.console &&
            E.console.warn &&
            t &&
            R.test(t.name) &&
            E.console.warn(
              "jQuery.Deferred exception: " + t.message,
              t.stack,
              e
            );
        }),
          (C.readyException = function (t) {
            E.setTimeout(function () {
              throw t;
            });
          });
        var H = C.Deferred();
        function q() {
          T.removeEventListener("DOMContentLoaded", q),
            E.removeEventListener("load", q),
            C.ready();
        }
        (C.fn.ready = function (t) {
          return (
            H.then(t).catch(function (t) {
              C.readyException(t);
            }),
            this
          );
        }),
          C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --C.readyWait : C.isReady) ||
                ((C.isReady = !0) !== t && 0 < --C.readyWait) ||
                H.resolveWith(T, [C]);
            },
          }),
          (C.ready.then = H.then),
          "complete" === T.readyState ||
          ("loading" !== T.readyState && !T.documentElement.doScroll)
            ? E.setTimeout(C.ready)
            : (T.addEventListener("DOMContentLoaded", q),
              E.addEventListener("load", q));
        var z = function (t, e, n, i, r, o, s) {
            var a = 0,
              l = t.length,
              c = null == n;
            if ("object" === w(n))
              for (a in ((r = !0), n)) z(t, e, a, n[a], !0, o, s);
            else if (
              void 0 !== i &&
              ((r = !0),
              y(i) || (s = !0),
              c &&
                (e = s
                  ? (e.call(t, i), null)
                  : ((c = e),
                    function (t, e, n) {
                      return c.call(C(t), n);
                    })),
              e)
            )
              for (; a < l; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o;
          },
          W = /^-ms-/,
          B = /-([a-z])/g;
        function U(t, e) {
          return e.toUpperCase();
        }
        function V(t) {
          return t.replace(W, "ms-").replace(B, U);
        }
        var Q = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function K() {
          this.expando = C.expando + K.uid++;
        }
        (K.uid = 1),
          (K.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                  ((e = {}),
                  Q(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                          value: e,
                          configurable: !0,
                        }))),
                e
              );
            },
            set: function (t, e, n) {
              var i,
                r = this.cache(t);
              if ("string" == typeof e) r[V(e)] = n;
              else for (i in e) r[V(i)] = e[i];
              return r;
            },
            get: function (t, e) {
              return void 0 === e
                ? this.cache(t)
                : t[this.expando] && t[this.expando][V(e)];
            },
            access: function (t, e, n) {
              return void 0 === e || (e && "string" == typeof e && void 0 === n)
                ? this.get(t, e)
                : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
              var n,
                i = t[this.expando];
              if (void 0 !== i) {
                if (void 0 !== e) {
                  n = (e = Array.isArray(e)
                    ? e.map(V)
                    : (e = V(e)) in i
                    ? [e]
                    : e.match(F) || []).length;
                  for (; n--; ) delete i[e[n]];
                }
                (void 0 === e || C.isEmptyObject(i)) &&
                  (t.nodeType
                    ? (t[this.expando] = void 0)
                    : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              var e = t[this.expando];
              return void 0 !== e && !C.isEmptyObject(e);
            },
          });
        var X = new K(),
          Y = new K(),
          G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Z = /[A-Z]/g;
        function J(t, e, n) {
          var i, r;
          if (void 0 === n && 1 === t.nodeType)
            if (
              ((i = "data-" + e.replace(Z, "-$&").toLowerCase()),
              "string" == typeof (n = t.getAttribute(i)))
            ) {
              try {
                n =
                  "true" === (r = n) ||
                  ("false" !== r &&
                    ("null" === r
                      ? null
                      : r === +r + ""
                      ? +r
                      : G.test(r)
                      ? JSON.parse(r)
                      : r));
              } catch (t) {}
              Y.set(t, e, n);
            } else n = void 0;
          return n;
        }
        C.extend({
          hasData: function (t) {
            return Y.hasData(t) || X.hasData(t);
          },
          data: function (t, e, n) {
            return Y.access(t, e, n);
          },
          removeData: function (t, e) {
            Y.remove(t, e);
          },
          _data: function (t, e, n) {
            return X.access(t, e, n);
          },
          _removeData: function (t, e) {
            X.remove(t, e);
          },
        }),
          C.fn.extend({
            data: function (n, t) {
              var e,
                i,
                r,
                o = this[0],
                s = o && o.attributes;
              if (void 0 !== n)
                return "object" == typeof n
                  ? this.each(function () {
                      Y.set(this, n);
                    })
                  : z(
                      this,
                      function (t) {
                        var e;
                        if (o && void 0 === t) {
                          if (void 0 !== (e = Y.get(o, n))) return e;
                          if (void 0 !== (e = J(o, n))) return e;
                        } else
                          this.each(function () {
                            Y.set(this, n, t);
                          });
                      },
                      null,
                      t,
                      1 < arguments.length,
                      null,
                      !0
                    );
              if (
                this.length &&
                ((r = Y.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
              ) {
                for (e = s.length; e--; )
                  s[e] &&
                    0 === (i = s[e].name).indexOf("data-") &&
                    ((i = V(i.slice(5))), J(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0);
              }
              return r;
            },
            removeData: function (t) {
              return this.each(function () {
                Y.remove(this, t);
              });
            },
          }),
          C.extend({
            queue: function (t, e, n) {
              var i;
              if (t)
                return (
                  (e = (e || "fx") + "queue"),
                  (i = X.get(t, e)),
                  n &&
                    (!i || Array.isArray(n)
                      ? (i = X.access(t, e, C.makeArray(n)))
                      : i.push(n)),
                  i || []
                );
            },
            dequeue: function (t, e) {
              e = e || "fx";
              var n = C.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = C._queueHooks(t, e);
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === e && n.unshift("inprogress"),
                  delete o.stop,
                  r.call(
                    t,
                    function () {
                      C.dequeue(t, e);
                    },
                    o
                  )),
                !i && o && o.empty.fire();
            },
            _queueHooks: function (t, e) {
              var n = e + "queueHooks";
              return (
                X.get(t, n) ||
                X.access(t, n, {
                  empty: C.Callbacks("once memory").add(function () {
                    X.remove(t, [e + "queue", n]);
                  }),
                })
              );
            },
          }),
          C.fn.extend({
            queue: function (e, n) {
              var t = 2;
              return (
                "string" != typeof e && ((n = e), (e = "fx"), t--),
                arguments.length < t
                  ? C.queue(this[0], e)
                  : void 0 === n
                  ? this
                  : this.each(function () {
                      var t = C.queue(this, e, n);
                      C._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== t[0] &&
                          C.dequeue(this, e);
                    })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                C.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
              var n,
                i = 1,
                r = C.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                  --i || r.resolveWith(o, [o]);
                };
              for (
                "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
                s--;

              )
                (n = X.get(o[s], t + "queueHooks")) &&
                  n.empty &&
                  (i++, n.empty.add(a));
              return a(), r.promise(e);
            },
          });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
          nt = ["Top", "Right", "Bottom", "Left"],
          it = function (t, e) {
            return (
              "none" === (t = e || t).style.display ||
              ("" === t.style.display &&
                C.contains(t.ownerDocument, t) &&
                "none" === C.css(t, "display"))
            );
          },
          rt = function (t, e, n, i) {
            var r,
              o,
              s = {};
            for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
            for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = s[o];
            return r;
          };
        function ot(t, e, n, i) {
          var r,
            o,
            s = 20,
            a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return C.css(t, e, "");
                },
            l = a(),
            c = (n && n[3]) || (C.cssNumber[e] ? "" : "px"),
            u = (C.cssNumber[e] || ("px" !== c && +l)) && et.exec(C.css(t, e));
          if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--; )
              C.style(t, e, u + c),
                (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                (u /= o);
            (u *= 2), C.style(t, e, u + c), (n = n || []);
          }
          return (
            n &&
              ((u = +u || +l || 0),
              (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = c), (i.start = u), (i.end = r))),
            r
          );
        }
        var st = {};
        function at(t, e) {
          for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
            (i = t[o]).style &&
              ((n = i.style.display),
              e
                ? ("none" === n &&
                    ((r[o] = X.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display &&
                    it(i) &&
                    (r[o] =
                      ((h = c = l = void 0),
                      (c = (a = i).ownerDocument),
                      (u = a.nodeName),
                      (h = st[u]) ||
                        ((l = c.body.appendChild(c.createElement(u))),
                        (h = C.css(l, "display")),
                        l.parentNode.removeChild(l),
                        "none" === h && (h = "block"),
                        (st[u] = h)))))
                : "none" !== n && ((r[o] = "none"), X.set(i, "display", n)));
          var a, l, c, u, h;
          for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
          return t;
        }
        C.fn.extend({
          show: function () {
            return at(this, !0);
          },
          hide: function () {
            return at(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  it(this) ? C(this).show() : C(this).hide();
                });
          },
        });
        var lt = /^(?:checkbox|radio)$/i,
          ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          ut = /^$|^module$|\/(?:java|ecma)script/i,
          ht = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
        function dt(t, e) {
          var n;
          return (
            (n =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || "*")
                : void 0 !== t.querySelectorAll
                ? t.querySelectorAll(e || "*")
                : []),
            void 0 === e || (e && S(t, e)) ? C.merge([t], n) : n
          );
        }
        function ft(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
            X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"));
        }
        (ht.optgroup = ht.option),
          (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead),
          (ht.th = ht.td);
        var pt,
          mt,
          gt = /<|&#?\w+;/;
        function vt(t, e, n, i, r) {
          for (
            var o,
              s,
              a,
              l,
              c,
              u,
              h = e.createDocumentFragment(),
              d = [],
              f = 0,
              p = t.length;
            f < p;
            f++
          )
            if ((o = t[f]) || 0 === o)
              if ("object" === w(o)) C.merge(d, o.nodeType ? [o] : o);
              else if (gt.test(o)) {
                for (
                  s = s || h.appendChild(e.createElement("div")),
                    a = (ct.exec(o) || ["", ""])[1].toLowerCase(),
                    l = ht[a] || ht._default,
                    s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                    u = l[0];
                  u--;

                )
                  s = s.lastChild;
                C.merge(d, s.childNodes), ((s = h.firstChild).textContent = "");
              } else d.push(e.createTextNode(o));
          for (h.textContent = "", f = 0; (o = d[f++]); )
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (
              ((c = C.contains(o.ownerDocument, o)),
              (s = dt(h.appendChild(o), "script")),
              c && ft(s),
              n)
            )
              for (u = 0; (o = s[u++]); ) ut.test(o.type || "") && n.push(o);
          return h;
        }
        (pt = T.createDocumentFragment().appendChild(T.createElement("div"))),
          (mt = T.createElement("input")).setAttribute("type", "radio"),
          mt.setAttribute("checked", "checked"),
          mt.setAttribute("name", "t"),
          pt.appendChild(mt),
          (v.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (pt.innerHTML = "<textarea>x</textarea>"),
          (v.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue);
        var yt = T.documentElement,
          _t = /^key/,
          bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          wt = /^([^.]*)(?:\.(.+)|)/;
        function xt() {
          return !0;
        }
        function Et() {
          return !1;
        }
        function Tt() {
          try {
            return T.activeElement;
          } catch (t) {}
        }
        function Ct(t, e, n, i, r, o) {
          var s, a;
          if ("object" == typeof e) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
              Ct(t, a, n, i, e[a], o);
            return t;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = i), (i = void 0))
                  : ((r = i), (i = n), (n = void 0))),
            !1 === r)
          )
            r = Et;
          else if (!r) return t;
          return (
            1 === o &&
              ((s = r),
              ((r = function (t) {
                return C().off(t), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = C.guid++))),
            t.each(function () {
              C.event.add(this, e, r, i, n);
            })
          );
        }
        (C.event = {
          global: {},
          add: function (e, t, n, i, r) {
            var o,
              s,
              a,
              l,
              c,
              u,
              h,
              d,
              f,
              p,
              m,
              g = X.get(e);
            if (g)
              for (
                n.handler && ((n = (o = n).handler), (r = o.selector)),
                  r && C.find.matchesSelector(yt, r),
                  n.guid || (n.guid = C.guid++),
                  (l = g.events) || (l = g.events = {}),
                  (s = g.handle) ||
                    (s = g.handle =
                      function (t) {
                        return void 0 !== C && C.event.triggered !== t.type
                          ? C.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  c = (t = (t || "").match(F) || [""]).length;
                c--;

              )
                (f = m = (a = wt.exec(t[c]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  f &&
                    ((h = C.event.special[f] || {}),
                    (f = (r ? h.delegateType : h.bindType) || f),
                    (h = C.event.special[f] || {}),
                    (u = C.extend(
                      {
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && C.expr.match.needsContext.test(r),
                        namespace: p.join("."),
                      },
                      o
                    )),
                    (d = l[f]) ||
                      (((d = l[f] = []).delegateCount = 0),
                      (h.setup && !1 !== h.setup.call(e, i, p, s)) ||
                        (e.addEventListener && e.addEventListener(f, s))),
                    h.add &&
                      (h.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    (C.event.global[f] = !0));
          },
          remove: function (t, e, n, i, r) {
            var o,
              s,
              a,
              l,
              c,
              u,
              h,
              d,
              f,
              p,
              m,
              g = X.hasData(t) && X.get(t);
            if (g && (l = g.events)) {
              for (c = (e = (e || "").match(F) || [""]).length; c--; )
                if (
                  ((f = m = (a = wt.exec(e[c]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    h = C.event.special[f] || {},
                      d = l[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = d.length;
                    o--;

                  )
                    (u = d[o]),
                      (!r && m !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (i &&
                          i !== u.selector &&
                          ("**" !== i || !u.selector)) ||
                        (d.splice(o, 1),
                        u.selector && d.delegateCount--,
                        h.remove && h.remove.call(t, u));
                  s &&
                    !d.length &&
                    ((h.teardown && !1 !== h.teardown.call(t, p, g.handle)) ||
                      C.removeEvent(t, f, g.handle),
                    delete l[f]);
                } else for (f in l) C.event.remove(t, f + e[c], n, i, !0);
              C.isEmptyObject(l) && X.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a = C.event.fix(t),
              l = new Array(arguments.length),
              c = (X.get(this, "events") || {})[a.type] || [],
              u = C.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++)
              l[e] = arguments[e];
            if (
              ((a.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, a))
            ) {
              for (
                s = C.event.handlers.call(this, a, c), e = 0;
                (r = s[e++]) && !a.isPropagationStopped();

              )
                for (
                  a.currentTarget = r.elem, n = 0;
                  (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

                )
                  (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                    ((a.handleObj = o),
                    (a.data = o.data),
                    void 0 !==
                      (i = (
                        (C.event.special[o.origType] || {}).handle || o.handler
                      ).apply(r.elem, l)) &&
                      !1 === (a.result = i) &&
                      (a.preventDefault(), a.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, a), a.result;
            }
          },
          handlers: function (t, e) {
            var n,
              i,
              r,
              o,
              s,
              a = [],
              l = e.delegateCount,
              c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ("click" !== t.type || !0 !== c.disabled)
                ) {
                  for (o = [], s = {}, n = 0; n < l; n++)
                    void 0 === s[(r = (i = e[n]).selector + " ")] &&
                      (s[r] = i.needsContext
                        ? -1 < C(r, this).index(c)
                        : C.find(r, this, null, [c]).length),
                      s[r] && o.push(i);
                  o.length && a.push({ elem: c, handlers: o });
                }
            return (
              (c = this),
              l < e.length && a.push({ elem: c, handlers: e.slice(l) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(C.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (t) {
            return t[C.expando] ? t : new C.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function () {
                if (this !== Tt() && this.focus) return this.focus(), !1;
              },
              delegateType: "focusin",
            },
            blur: {
              trigger: function () {
                if (this === Tt() && this.blur) return this.blur(), !1;
              },
              delegateType: "focusout",
            },
            click: {
              trigger: function () {
                if ("checkbox" === this.type && this.click && S(this, "input"))
                  return this.click(), !1;
              },
              _default: function (t) {
                return S(t.target, "a");
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
          (C.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }),
          (C.Event = function (t, e) {
            if (!(this instanceof C.Event)) return new C.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? xt
                    : Et),
                (this.target =
                  t.target && 3 === t.target.nodeType
                    ? t.target.parentNode
                    : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && C.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[C.expando] = !0);
          }),
          (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Et,
            isPropagationStopped: Et,
            isImmediatePropagationStopped: Et,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = xt),
                t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = xt),
                t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = xt),
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          C.each(
            {
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
              which: function (t) {
                var e = t.button;
                return null == t.which && _t.test(t.type)
                  ? null != t.charCode
                    ? t.charCode
                    : t.keyCode
                  : !t.which && void 0 !== e && bt.test(t.type)
                  ? 1 & e
                    ? 1
                    : 2 & e
                    ? 3
                    : 4 & e
                    ? 2
                    : 0
                  : t.which;
              },
            },
            C.event.addProp
          ),
          C.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (t, r) {
              C.event.special[t] = {
                delegateType: r,
                bindType: r,
                handle: function (t) {
                  var e,
                    n = t.relatedTarget,
                    i = t.handleObj;
                  return (
                    (n && (n === this || C.contains(this, n))) ||
                      ((t.type = i.origType),
                      (e = i.handler.apply(this, arguments)),
                      (t.type = r)),
                    e
                  );
                },
              };
            }
          ),
          C.fn.extend({
            on: function (t, e, n, i) {
              return Ct(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
              return Ct(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
              var i, r;
              if (t && t.preventDefault && t.handleObj)
                return (
                  (i = t.handleObj),
                  C(t.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler
                  ),
                  this
                );
              if ("object" != typeof t)
                return (
                  (!1 !== e && "function" != typeof e) ||
                    ((n = e), (e = void 0)),
                  !1 === n && (n = Et),
                  this.each(function () {
                    C.event.remove(this, t, n, e);
                  })
                );
              for (r in t) this.off(r, e, t[r]);
              return this;
            },
          });
        var Dt =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          St = /<script|<style|<link/i,
          At = /checked\s*(?:[^=]|=\s*.checked.)/i,
          kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function It(t, e) {
          return (
            (S(t, "table") &&
              S(11 !== e.nodeType ? e : e.firstChild, "tr") &&
              C(t).children("tbody")[0]) ||
            t
          );
        }
        function Nt(t) {
          return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function Ot(t) {
          return (
            "true/" === (t.type || "").slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute("type"),
            t
          );
        }
        function Lt(t, e) {
          var n, i, r, o, s, a, l, c;
          if (1 === e.nodeType) {
            if (
              X.hasData(t) &&
              ((o = X.access(t)), (s = X.set(e, o)), (c = o.events))
            )
              for (r in (delete s.handle, (s.events = {}), c))
                for (n = 0, i = c[r].length; n < i; n++)
                  C.event.add(e, r, c[r][n]);
            Y.hasData(t) &&
              ((a = Y.access(t)), (l = C.extend({}, a)), Y.set(e, l));
          }
        }
        function jt(n, i, r, o) {
          i = m.apply([], i);
          var t,
            e,
            s,
            a,
            l,
            c,
            u = 0,
            h = n.length,
            d = h - 1,
            f = i[0],
            p = y(f);
          if (
            p ||
            (1 < h && "string" == typeof f && !v.checkClone && At.test(f))
          )
            return n.each(function (t) {
              var e = n.eq(t);
              p && (i[0] = f.call(this, t, e.html())), jt(e, i, r, o);
            });
          if (
            h &&
            ((e = (t = vt(i, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === t.childNodes.length && (t = e),
            e || o)
          ) {
            for (a = (s = C.map(dt(t, "script"), Nt)).length; u < h; u++)
              (l = t),
                u !== d &&
                  ((l = C.clone(l, !0, !0)), a && C.merge(s, dt(l, "script"))),
                r.call(n[u], l, u);
            if (a)
              for (
                c = s[s.length - 1].ownerDocument, C.map(s, Ot), u = 0;
                u < a;
                u++
              )
                (l = s[u]),
                  ut.test(l.type || "") &&
                    !X.access(l, "globalEval") &&
                    C.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? C._evalUrl && C._evalUrl(l.src)
                      : b(l.textContent.replace(kt, ""), c, l));
          }
          return n;
        }
        function Ft(t, e, n) {
          for (
            var i, r = e ? C.filter(e, t) : t, o = 0;
            null != (i = r[o]);
            o++
          )
            n || 1 !== i.nodeType || C.cleanData(dt(i)),
              i.parentNode &&
                (n && C.contains(i.ownerDocument, i) && ft(dt(i, "script")),
                i.parentNode.removeChild(i));
          return t;
        }
        C.extend({
          htmlPrefilter: function (t) {
            return t.replace(Dt, "<$1></$2>");
          },
          clone: function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u = t.cloneNode(!0),
              h = C.contains(t.ownerDocument, t);
            if (
              !(
                v.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                C.isXMLDoc(t)
              )
            )
              for (s = dt(u), i = 0, r = (o = dt(t)).length; i < r; i++)
                (a = o[i]),
                  "input" === (c = (l = s[i]).nodeName.toLowerCase()) &&
                  lt.test(a.type)
                    ? (l.checked = a.checked)
                    : ("input" !== c && "textarea" !== c) ||
                      (l.defaultValue = a.defaultValue);
            if (e)
              if (n)
                for (
                  o = o || dt(t), s = s || dt(u), i = 0, r = o.length;
                  i < r;
                  i++
                )
                  Lt(o[i], s[i]);
              else Lt(t, u);
            return (
              0 < (s = dt(u, "script")).length && ft(s, !h && dt(t, "script")),
              u
            );
          },
          cleanData: function (t) {
            for (
              var e, n, i, r = C.event.special, o = 0;
              void 0 !== (n = t[o]);
              o++
            )
              if (Q(n)) {
                if ((e = n[X.expando])) {
                  if (e.events)
                    for (i in e.events)
                      r[i]
                        ? C.event.remove(n, i)
                        : C.removeEvent(n, i, e.handle);
                  n[X.expando] = void 0;
                }
                n[Y.expando] && (n[Y.expando] = void 0);
              }
          },
        }),
          C.fn.extend({
            detach: function (t) {
              return Ft(this, t, !0);
            },
            remove: function (t) {
              return Ft(this, t);
            },
            text: function (t) {
              return z(
                this,
                function (t) {
                  return void 0 === t
                    ? C.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = t);
                      });
                },
                null,
                t,
                arguments.length
              );
            },
            append: function () {
              return jt(this, arguments, function (t) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  It(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return jt(this, arguments, function (t) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var e = It(this, t);
                  e.insertBefore(t, e.firstChild);
                }
              });
            },
            before: function () {
              return jt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return jt(this, arguments, function (t) {
                this.parentNode &&
                  this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType &&
                  (C.cleanData(dt(t, !1)), (t.textContent = ""));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return C.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return z(
                this,
                function (t) {
                  var e = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if (
                    "string" == typeof t &&
                    !St.test(t) &&
                    !ht[(ct.exec(t) || ["", ""])[1].toLowerCase()]
                  ) {
                    t = C.htmlPrefilter(t);
                    try {
                      for (; n < i; n++)
                        1 === (e = this[n] || {}).nodeType &&
                          (C.cleanData(dt(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) {}
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length
              );
            },
            replaceWith: function () {
              var n = [];
              return jt(
                this,
                arguments,
                function (t) {
                  var e = this.parentNode;
                  C.inArray(this, n) < 0 &&
                    (C.cleanData(dt(this)), e && e.replaceChild(t, this));
                },
                n
              );
            },
          }),
          C.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (t, s) {
              C.fn[t] = function (t) {
                for (
                  var e, n = [], i = C(t), r = i.length - 1, o = 0;
                  o <= r;
                  o++
                )
                  (e = o === r ? this : this.clone(!0)),
                    C(i[o])[s](e),
                    l.apply(n, e.get());
                return this.pushStack(n);
              };
            }
          );
        var Pt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
          Mt = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = E), e.getComputedStyle(t);
          },
          $t = new RegExp(nt.join("|"), "i");
        function Rt(t, e, n) {
          var i,
            r,
            o,
            s,
            a = t.style;
          return (
            (n = n || Mt(t)) &&
              ("" !== (s = n.getPropertyValue(e) || n[e]) ||
                C.contains(t.ownerDocument, t) ||
                (s = C.style(t, e)),
              !v.pixelBoxStyles() &&
                Pt.test(s) &&
                $t.test(e) &&
                ((i = a.width),
                (r = a.minWidth),
                (o = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = i),
                (a.minWidth = r),
                (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
          );
        }
        function Ht(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (l) {
              (a.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (l.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                yt.appendChild(a).appendChild(l);
              var t = E.getComputedStyle(l);
              (n = "1%" !== t.top),
                (s = 12 === e(t.marginLeft)),
                (l.style.right = "60%"),
                (o = 36 === e(t.right)),
                (i = 36 === e(t.width)),
                (l.style.position = "absolute"),
                (r = 36 === l.offsetWidth || "absolute"),
                yt.removeChild(a),
                (l = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var n,
            i,
            r,
            o,
            s,
            a = T.createElement("div"),
            l = T.createElement("div");
          l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
            C.extend(v, {
              boxSizingReliable: function () {
                return t(), i;
              },
              pixelBoxStyles: function () {
                return t(), o;
              },
              pixelPosition: function () {
                return t(), n;
              },
              reliableMarginLeft: function () {
                return t(), s;
              },
              scrollboxSize: function () {
                return t(), r;
              },
            }));
        })();
        var qt = /^(none|table(?!-c[ea]).+)/,
          zt = /^--/,
          Wt = { position: "absolute", visibility: "hidden", display: "block" },
          Bt = { letterSpacing: "0", fontWeight: "400" },
          Ut = ["Webkit", "Moz", "ms"],
          Vt = T.createElement("div").style;
        function Qt(t) {
          var e = C.cssProps[t];
          return (
            e ||
              (e = C.cssProps[t] =
                (function (t) {
                  if (t in Vt) return t;
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = Ut.length;
                    n--;

                  )
                    if ((t = Ut[n] + e) in Vt) return t;
                })(t) || t),
            e
          );
        }
        function Kt(t, e, n) {
          var i = et.exec(e);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
        }
        function Xt(t, e, n, i, r, o) {
          var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (l += C.css(t, n + nt[s], !0, r)),
              i
                ? ("content" === n && (l -= C.css(t, "padding" + nt[s], !0, r)),
                  "margin" !== n &&
                    (l -= C.css(t, "border" + nt[s] + "Width", !0, r)))
                : ((l += C.css(t, "padding" + nt[s], !0, r)),
                  "padding" !== n
                    ? (l += C.css(t, "border" + nt[s] + "Width", !0, r))
                    : (a += C.css(t, "border" + nt[s] + "Width", !0, r)));
          return (
            !i &&
              0 <= o &&
              (l += Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              )),
            l
          );
        }
        function Yt(t, e, n) {
          var i = Mt(t),
            r = Rt(t, e, i),
            o = "border-box" === C.css(t, "boxSizing", !1, i),
            s = o;
          if (Pt.test(r)) {
            if (!n) return r;
            r = "auto";
          }
          return (
            (s = s && (v.boxSizingReliable() || r === t.style[e])),
            ("auto" === r ||
              (!parseFloat(r) && "inline" === C.css(t, "display", !1, i))) &&
              ((r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = !0)),
            (r = parseFloat(r) || 0) +
              Xt(t, e, n || (o ? "border" : "content"), s, i, r) +
              "px"
          );
        }
        function Gt(t, e, n, i, r) {
          return new Gt.prototype.init(t, e, n, i, r);
        }
        C.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var n = Rt(t, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var r,
                o,
                s,
                a = V(e),
                l = zt.test(e),
                c = t.style;
              if (
                (l || (e = Qt(a)),
                (s = C.cssHooks[e] || C.cssHooks[a]),
                void 0 === n)
              )
                return s && "get" in s && void 0 !== (r = s.get(t, !1, i))
                  ? r
                  : c[e];
              "string" == (o = typeof n) &&
                (r = et.exec(n)) &&
                r[1] &&
                ((n = ot(t, e, r)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" === o &&
                    (n += (r && r[3]) || (C.cssNumber[a] ? "" : "px")),
                  v.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (c[e] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                    (l ? c.setProperty(e, n) : (c[e] = n)));
            }
          },
          css: function (t, e, n, i) {
            var r,
              o,
              s,
              a = V(e);
            return (
              zt.test(e) || (e = Qt(a)),
              (s = C.cssHooks[e] || C.cssHooks[a]) &&
                "get" in s &&
                (r = s.get(t, !0, n)),
              void 0 === r && (r = Rt(t, e, i)),
              "normal" === r && e in Bt && (r = Bt[e]),
              "" === n || n
                ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                : r
            );
          },
        }),
          C.each(["height", "width"], function (t, a) {
            C.cssHooks[a] = {
              get: function (t, e, n) {
                if (e)
                  return !qt.test(C.css(t, "display")) ||
                    (t.getClientRects().length &&
                      t.getBoundingClientRect().width)
                    ? Yt(t, a, n)
                    : rt(t, Wt, function () {
                        return Yt(t, a, n);
                      });
              },
              set: function (t, e, n) {
                var i,
                  r = Mt(t),
                  o = "border-box" === C.css(t, "boxSizing", !1, r),
                  s = n && Xt(t, a, n, o, r);
                return (
                  o &&
                    v.scrollboxSize() === r.position &&
                    (s -= Math.ceil(
                      t["offset" + a[0].toUpperCase() + a.slice(1)] -
                        parseFloat(r[a]) -
                        Xt(t, a, "border", !1, r) -
                        0.5
                    )),
                  s &&
                    (i = et.exec(e)) &&
                    "px" !== (i[3] || "px") &&
                    ((t.style[a] = e), (e = C.css(t, a))),
                  Kt(0, e, s)
                );
              },
            };
          }),
          (C.cssHooks.marginLeft = Ht(v.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(Rt(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                    rt(t, { marginLeft: 0 }, function () {
                      return t.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (C.cssHooks[r + o] = {
              expand: function (t) {
                for (
                  var e = 0,
                    n = {},
                    i = "string" == typeof t ? t.split(" ") : [t];
                  e < 4;
                  e++
                )
                  n[r + nt[e] + o] = i[e] || i[e - 2] || i[0];
                return n;
              },
            }),
              "margin" !== r && (C.cssHooks[r + o].set = Kt);
          }),
          C.fn.extend({
            css: function (t, e) {
              return z(
                this,
                function (t, e, n) {
                  var i,
                    r,
                    o = {},
                    s = 0;
                  if (Array.isArray(e)) {
                    for (i = Mt(t), r = e.length; s < r; s++)
                      o[e[s]] = C.css(t, e[s], !1, i);
                    return o;
                  }
                  return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
                },
                t,
                e,
                1 < arguments.length
              );
            },
          }),
          (((C.Tween = Gt).prototype = {
            constructor: Gt,
            init: function (t, e, n, i, r, o) {
              (this.elem = t),
                (this.prop = n),
                (this.easing = r || C.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = o || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var t = Gt.propHooks[this.prop];
              return t && t.get ? t.get(this) : Gt.propHooks._default.get(this);
            },
            run: function (t) {
              var e,
                n = Gt.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e =
                      C.easing[this.easing](
                        t,
                        this.options.duration * t,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Gt.propHooks._default.set(this),
                this
              );
            },
          }).init.prototype = Gt.prototype),
          ((Gt.propHooks = {
            _default: {
              get: function (t) {
                var e;
                return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (e = C.css(t.elem, t.prop, "")) && "auto" !== e
                  ? e
                  : 0;
              },
              set: function (t) {
                C.fx.step[t.prop]
                  ? C.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType ||
                    (null == t.elem.style[C.cssProps[t.prop]] &&
                      !C.cssHooks[t.prop])
                  ? (t.elem[t.prop] = t.now)
                  : C.style(t.elem, t.prop, t.now + t.unit);
              },
            },
          }).scrollTop = Gt.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType &&
                  t.elem.parentNode &&
                  (t.elem[t.prop] = t.now);
              },
            }),
          (C.easing = {
            linear: function (t) {
              return t;
            },
            swing: function (t) {
              return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (C.fx = Gt.prototype.init),
          (C.fx.step = {});
        var Zt,
          Jt,
          te,
          ee,
          ne = /^(?:toggle|show|hide)$/,
          ie = /queueHooks$/;
        function re() {
          Jt &&
            (!1 === T.hidden && E.requestAnimationFrame
              ? E.requestAnimationFrame(re)
              : E.setTimeout(re, C.fx.interval),
            C.fx.tick());
        }
        function oe() {
          return (
            E.setTimeout(function () {
              Zt = void 0;
            }),
            (Zt = Date.now())
          );
        }
        function se(t, e) {
          var n,
            i = 0,
            r = { height: t };
          for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = nt[i])] = r["padding" + n] = t;
          return e && (r.opacity = r.width = t), r;
        }
        function ae(t, e, n) {
          for (
            var i,
              r = (le.tweeners[e] || []).concat(le.tweeners["*"]),
              o = 0,
              s = r.length;
            o < s;
            o++
          )
            if ((i = r[o].call(n, e, t))) return i;
        }
        function le(o, t, e) {
          var n,
            s,
            i = 0,
            r = le.prefilters.length,
            a = C.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (s) return !1;
              for (
                var t = Zt || oe(),
                  e = Math.max(0, c.startTime + c.duration - t),
                  n = 1 - (e / c.duration || 0),
                  i = 0,
                  r = c.tweens.length;
                i < r;
                i++
              )
                c.tweens[i].run(n);
              return (
                a.notifyWith(o, [c, n, e]),
                n < 1 && r
                  ? e
                  : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
              );
            },
            c = a.promise({
              elem: o,
              props: C.extend({}, t),
              opts: C.extend(
                !0,
                { specialEasing: {}, easing: C.easing._default },
                e
              ),
              originalProperties: t,
              originalOptions: e,
              startTime: Zt || oe(),
              duration: e.duration,
              tweens: [],
              createTween: function (t, e) {
                var n = C.Tween(
                  o,
                  c.opts,
                  t,
                  e,
                  c.opts.specialEasing[t] || c.opts.easing
                );
                return c.tweens.push(n), n;
              },
              stop: function (t) {
                var e = 0,
                  n = t ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; e < n; e++) c.tweens[e].run(1);
                return (
                  t
                    ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t]))
                    : a.rejectWith(o, [c, t]),
                  this
                );
              },
            }),
            u = c.props;
          for (
            (function (t, e) {
              var n, i, r, o, s;
              for (n in t)
                if (
                  ((r = e[(i = V(n))]),
                  (o = t[n]),
                  Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
                  n !== i && ((t[i] = o), delete t[n]),
                  (s = C.cssHooks[i]) && ("expand" in s))
                )
                  for (n in ((o = s.expand(o)), delete t[i], o))
                    (n in t) || ((t[n] = o[n]), (e[n] = r));
                else e[i] = r;
            })(u, c.opts.specialEasing);
            i < r;
            i++
          )
            if ((n = le.prefilters[i].call(c, o, u, c.opts)))
              return (
                y(n.stop) &&
                  (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n
              );
          return (
            C.map(u, ae, c),
            y(c.opts.start) && c.opts.start.call(o, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            C.fx.timer(C.extend(l, { elem: o, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (C.Animation = C.extend(le, {
          tweeners: {
            "*": [
              function (t, e) {
                var n = this.createTween(t, e);
                return ot(n.elem, t, et.exec(e), n), n;
              },
            ],
          },
          tweener: function (t, e) {
            for (
              var n,
                i = 0,
                r = (t = y(t) ? ((e = t), ["*"]) : t.match(F)).length;
              i < r;
              i++
            )
              (n = t[i]),
                (le.tweeners[n] = le.tweeners[n] || []),
                le.tweeners[n].unshift(e);
          },
          prefilters: [
            function (t, e, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                h = "width" in e || "height" in e,
                d = this,
                f = {},
                p = t.style,
                m = t.nodeType && it(t),
                g = X.get(t, "fxshow");
              for (i in (n.queue ||
                (null == (s = C._queueHooks(t, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                d.always(function () {
                  d.always(function () {
                    s.unqueued--, C.queue(t, "fx").length || s.empty.fire();
                  });
                })),
              e))
                if (((r = e[i]), ne.test(r))) {
                  if (
                    (delete e[i],
                    (o = o || "toggle" === r),
                    r === (m ? "hide" : "show"))
                  ) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0;
                  }
                  f[i] = (g && g[i]) || C.style(t, i);
                }
              if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(f))
                for (i in (h &&
                  1 === t.nodeType &&
                  ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (c = g && g.display) && (c = X.get(t, "display")),
                  "none" === (u = C.css(t, "display")) &&
                    (c
                      ? (u = c)
                      : (at([t], !0),
                        (c = t.style.display || c),
                        (u = C.css(t, "display")),
                        at([t]))),
                  ("inline" === u || ("inline-block" === u && null != c)) &&
                    "none" === C.css(t, "float") &&
                    (l ||
                      (d.done(function () {
                        p.display = c;
                      }),
                      null == c &&
                        ((u = p.display), (c = "none" === u ? "" : u))),
                    (p.display = "inline-block"))),
                n.overflow &&
                  ((p.overflow = "hidden"),
                  d.always(function () {
                    (p.overflow = n.overflow[0]),
                      (p.overflowX = n.overflow[1]),
                      (p.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                f))
                  l ||
                    (g
                      ? "hidden" in g && (m = g.hidden)
                      : (g = X.access(t, "fxshow", { display: c })),
                    o && (g.hidden = !m),
                    m && at([t], !0),
                    d.done(function () {
                      for (i in (m || at([t]), X.remove(t, "fxshow"), f))
                        C.style(t, i, f[i]);
                    })),
                    (l = ae(m ? g[i] : 0, i, d)),
                    i in g ||
                      ((g[i] = l.start),
                      m && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? le.prefilters.unshift(t) : le.prefilters.push(t);
          },
        })),
          (C.speed = function (t, e, n) {
            var i =
              t && "object" == typeof t
                ? C.extend({}, t)
                : {
                    complete: n || (!n && e) || (y(t) && t),
                    duration: t,
                    easing: (n && e) || (e && !y(e) && e),
                  };
            return (
              C.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in C.fx.speeds
                    ? (i.duration = C.fx.speeds[i.duration])
                    : (i.duration = C.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                y(i.old) && i.old.call(this),
                  i.queue && C.dequeue(this, i.queue);
              }),
              i
            );
          }),
          C.fn.extend({
            fadeTo: function (t, e, n, i) {
              return this.filter(it)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: e }, t, n, i);
            },
            animate: function (e, t, n, i) {
              var r = C.isEmptyObject(e),
                o = C.speed(t, n, i),
                s = function () {
                  var t = le(this, C.extend({}, e), o);
                  (r || X.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
              );
            },
            stop: function (r, t, o) {
              var s = function (t) {
                var e = t.stop;
                delete t.stop, e(o);
              };
              return (
                "string" != typeof r && ((o = t), (t = r), (r = void 0)),
                t && !1 !== r && this.queue(r || "fx", []),
                this.each(function () {
                  var t = !0,
                    e = null != r && r + "queueHooks",
                    n = C.timers,
                    i = X.get(this);
                  if (e) i[e] && i[e].stop && s(i[e]);
                  else for (e in i) i[e] && i[e].stop && ie.test(e) && s(i[e]);
                  for (e = n.length; e--; )
                    n[e].elem !== this ||
                      (null != r && n[e].queue !== r) ||
                      (n[e].anim.stop(o), (t = !1), n.splice(e, 1));
                  (!t && o) || C.dequeue(this, r);
                })
              );
            },
            finish: function (s) {
              return (
                !1 !== s && (s = s || "fx"),
                this.each(function () {
                  var t,
                    e = X.get(this),
                    n = e[s + "queue"],
                    i = e[s + "queueHooks"],
                    r = C.timers,
                    o = n ? n.length : 0;
                  for (
                    e.finish = !0,
                      C.queue(this, s, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = r.length;
                    t--;

                  )
                    r[t].elem === this &&
                      r[t].queue === s &&
                      (r[t].anim.stop(!0), r.splice(t, 1));
                  for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                  delete e.finish;
                })
              );
            },
          }),
          C.each(["toggle", "show", "hide"], function (t, i) {
            var r = C.fn[i];
            C.fn[i] = function (t, e, n) {
              return null == t || "boolean" == typeof t
                ? r.apply(this, arguments)
                : this.animate(se(i, !0), t, e, n);
            };
          }),
          C.each(
            {
              slideDown: se("show"),
              slideUp: se("hide"),
              slideToggle: se("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (t, i) {
              C.fn[t] = function (t, e, n) {
                return this.animate(i, t, e, n);
              };
            }
          ),
          (C.timers = []),
          (C.fx.tick = function () {
            var t,
              e = 0,
              n = C.timers;
            for (Zt = Date.now(); e < n.length; e++)
              (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || C.fx.stop(), (Zt = void 0);
          }),
          (C.fx.timer = function (t) {
            C.timers.push(t), C.fx.start();
          }),
          (C.fx.interval = 13),
          (C.fx.start = function () {
            Jt || ((Jt = !0), re());
          }),
          (C.fx.stop = function () {
            Jt = null;
          }),
          (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (C.fn.delay = function (i, t) {
            return (
              (i = (C.fx && C.fx.speeds[i]) || i),
              (t = t || "fx"),
              this.queue(t, function (t, e) {
                var n = E.setTimeout(t, i);
                e.stop = function () {
                  E.clearTimeout(n);
                };
              })
            );
          }),
          (te = T.createElement("input")),
          (ee = T.createElement("select").appendChild(
            T.createElement("option")
          )),
          (te.type = "checkbox"),
          (v.checkOn = "" !== te.value),
          (v.optSelected = ee.selected),
          ((te = T.createElement("input")).value = "t"),
          (te.type = "radio"),
          (v.radioValue = "t" === te.value);
        var ce,
          ue = C.expr.attrHandle;
        C.fn.extend({
          attr: function (t, e) {
            return z(this, C.attr, t, e, 1 < arguments.length);
          },
          removeAttr: function (t) {
            return this.each(function () {
              C.removeAttr(this, t);
            });
          },
        }),
          C.extend({
            attr: function (t, e, n) {
              var i,
                r,
                o = t.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute
                  ? C.prop(t, e, n)
                  : ((1 === o && C.isXMLDoc(t)) ||
                      (r =
                        C.attrHooks[e.toLowerCase()] ||
                        (C.expr.match.bool.test(e) ? ce : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void C.removeAttr(t, e)
                        : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                        ? i
                        : (t.setAttribute(e, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(t, e))
                      ? i
                      : null == (i = C.find.attr(t, e))
                      ? void 0
                      : i);
            },
            attrHooks: {
              type: {
                set: function (t, e) {
                  if (!v.radioValue && "radio" === e && S(t, "input")) {
                    var n = t.value;
                    return t.setAttribute("type", e), n && (t.value = n), e;
                  }
                },
              },
            },
            removeAttr: function (t, e) {
              var n,
                i = 0,
                r = e && e.match(F);
              if (r && 1 === t.nodeType)
                for (; (n = r[i++]); ) t.removeAttribute(n);
            },
          }),
          (ce = {
            set: function (t, e, n) {
              return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
          }),
          C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var s = ue[e] || C.find.attr;
            ue[e] = function (t, e, n) {
              var i,
                r,
                o = e.toLowerCase();
              return (
                n ||
                  ((r = ue[o]),
                  (ue[o] = i),
                  (i = null != s(t, e, n) ? o : null),
                  (ue[o] = r)),
                i
              );
            };
          });
        var he = /^(?:input|select|textarea|button)$/i,
          de = /^(?:a|area)$/i;
        function fe(t) {
          return (t.match(F) || []).join(" ");
        }
        function pe(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function me(t) {
          return Array.isArray(t)
            ? t
            : ("string" == typeof t && t.match(F)) || [];
        }
        C.fn.extend({
          prop: function (t, e) {
            return z(this, C.prop, t, e, 1 < arguments.length);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[C.propFix[t] || t];
            });
          },
        }),
          C.extend({
            prop: function (t, e, n) {
              var i,
                r,
                o = t.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && C.isXMLDoc(t)) ||
                    ((e = C.propFix[e] || e), (r = C.propHooks[e])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t[e] = n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = C.find.attr(t, "tabindex");
                  return e
                    ? parseInt(e, 10)
                    : he.test(t.nodeName) || (de.test(t.nodeName) && t.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          v.optSelected ||
            (C.propHooks.selected = {
              get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function (t) {
                var e = t.parentNode;
                e &&
                  (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
              },
            }),
          C.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              C.propFix[this.toLowerCase()] = this;
            }
          ),
          C.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a,
                l = 0;
              if (y(e))
                return this.each(function (t) {
                  C(this).addClass(e.call(this, t, pe(this)));
                });
              if ((t = me(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((r = pe(n)), (i = 1 === n.nodeType && " " + fe(r) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r !== (a = fe(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a,
                l = 0;
              if (y(e))
                return this.each(function (t) {
                  C(this).removeClass(e.call(this, t, pe(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = me(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((r = pe(n)), (i = 1 === n.nodeType && " " + fe(r) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      for (; -1 < i.indexOf(" " + o + " "); )
                        i = i.replace(" " + o + " ", " ");
                    r !== (a = fe(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (r, e) {
              var o = typeof r,
                s = "string" == o || Array.isArray(r);
              return "boolean" == typeof e && s
                ? e
                  ? this.addClass(r)
                  : this.removeClass(r)
                : y(r)
                ? this.each(function (t) {
                    C(this).toggleClass(r.call(this, t, pe(this), e), e);
                  })
                : this.each(function () {
                    var t, e, n, i;
                    if (s)
                      for (e = 0, n = C(this), i = me(r); (t = i[e++]); )
                        n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                    else
                      (void 0 !== r && "boolean" != o) ||
                        ((t = pe(this)) && X.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === r
                              ? ""
                              : X.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (t) {
              var e,
                n,
                i = 0;
              for (e = " " + t + " "; (n = this[i++]); )
                if (1 === n.nodeType && -1 < (" " + fe(pe(n)) + " ").indexOf(e))
                  return !0;
              return !1;
            },
          });
        var ge = /\r/g;
        C.fn.extend({
          val: function (n) {
            var i,
              t,
              r,
              e = this[0];
            return arguments.length
              ? ((r = y(n)),
                this.each(function (t) {
                  var e;
                  1 === this.nodeType &&
                    (null == (e = r ? n.call(this, t, C(this).val()) : n)
                      ? (e = "")
                      : "number" == typeof e
                      ? (e += "")
                      : Array.isArray(e) &&
                        (e = C.map(e, function (t) {
                          return null == t ? "" : t + "";
                        })),
                    ((i =
                      C.valHooks[this.type] ||
                      C.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in i &&
                      void 0 !== i.set(this, e, "value")) ||
                      (this.value = e));
                }))
              : e
              ? (i =
                  C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) &&
                "get" in i &&
                void 0 !== (t = i.get(e, "value"))
                ? t
                : "string" == typeof (t = e.value)
                ? t.replace(ge, "")
                : null == t
                ? ""
                : t
              : void 0;
          },
        }),
          C.extend({
            valHooks: {
              option: {
                get: function (t) {
                  var e = C.find.attr(t, "value");
                  return null != e ? e : fe(C.text(t));
                },
              },
              select: {
                get: function (t) {
                  var e,
                    n,
                    i,
                    r = t.options,
                    o = t.selectedIndex,
                    s = "select-one" === t.type,
                    a = s ? null : [],
                    l = s ? o + 1 : r.length;
                  for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                    if (
                      ((n = r[i]).selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
                    ) {
                      if (((e = C(n).val()), s)) return e;
                      a.push(e);
                    }
                  return a;
                },
                set: function (t, e) {
                  for (
                    var n, i, r = t.options, o = C.makeArray(e), s = r.length;
                    s--;

                  )
                    ((i = r[s]).selected =
                      -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                  return n || (t.selectedIndex = -1), o;
                },
              },
            },
          }),
          C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
              set: function (t, e) {
                if (Array.isArray(e))
                  return (t.checked = -1 < C.inArray(C(t).val(), e));
              },
            }),
              v.checkOn ||
                (C.valHooks[this].get = function (t) {
                  return null === t.getAttribute("value") ? "on" : t.value;
                });
          }),
          (v.focusin = "onfocusin" in E);
        var ve = /^(?:focusinfocus|focusoutblur)$/,
          ye = function (t) {
            t.stopPropagation();
          };
        C.extend(C.event, {
          trigger: function (t, e, n, i) {
            var r,
              o,
              s,
              a,
              l,
              c,
              u,
              h,
              d = [n || T],
              f = g.call(t, "type") ? t.type : t,
              p = g.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((o = h = s = n = n || T),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !ve.test(f + C.event.triggered) &&
                (-1 < f.indexOf(".") &&
                  ((f = (p = f.split(".")).shift()), p.sort()),
                (l = f.indexOf(":") < 0 && "on" + f),
                ((t = t[C.expando]
                  ? t
                  : new C.Event(f, "object" == typeof t && t)).isTrigger = i
                  ? 2
                  : 3),
                (t.namespace = p.join(".")),
                (t.rnamespace = t.namespace
                  ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (t.result = void 0),
                t.target || (t.target = n),
                (e = null == e ? [t] : C.makeArray(e, [t])),
                (u = C.event.special[f] || {}),
                i || !u.trigger || !1 !== u.trigger.apply(n, e)))
            ) {
              if (!i && !u.noBubble && !_(n)) {
                for (
                  a = u.delegateType || f, ve.test(a + f) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  d.push(o), (s = o);
                s === (n.ownerDocument || T) &&
                  d.push(s.defaultView || s.parentWindow || E);
              }
              for (r = 0; (o = d[r++]) && !t.isPropagationStopped(); )
                (h = o),
                  (t.type = 1 < r ? a : u.bindType || f),
                  (c =
                    (X.get(o, "events") || {})[t.type] && X.get(o, "handle")) &&
                    c.apply(o, e),
                  (c = l && o[l]) &&
                    c.apply &&
                    Q(o) &&
                    ((t.result = c.apply(o, e)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = f),
                i ||
                  t.isDefaultPrevented() ||
                  (u._default && !1 !== u._default.apply(d.pop(), e)) ||
                  !Q(n) ||
                  (l &&
                    y(n[f]) &&
                    !_(n) &&
                    ((s = n[l]) && (n[l] = null),
                    (C.event.triggered = f),
                    t.isPropagationStopped() && h.addEventListener(f, ye),
                    n[f](),
                    t.isPropagationStopped() && h.removeEventListener(f, ye),
                    (C.event.triggered = void 0),
                    s && (n[l] = s))),
                t.result
              );
            }
          },
          simulate: function (t, e, n) {
            var i = C.extend(new C.Event(), n, { type: t, isSimulated: !0 });
            C.event.trigger(i, null, e);
          },
        }),
          C.fn.extend({
            trigger: function (t, e) {
              return this.each(function () {
                C.event.trigger(t, e, this);
              });
            },
            triggerHandler: function (t, e) {
              var n = this[0];
              if (n) return C.event.trigger(t, e, n, !0);
            },
          }),
          v.focusin ||
            C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
              var r = function (t) {
                C.event.simulate(i, t.target, C.event.fix(t));
              };
              C.event.special[i] = {
                setup: function () {
                  var t = this.ownerDocument || this,
                    e = X.access(t, i);
                  e || t.addEventListener(n, r, !0),
                    X.access(t, i, (e || 0) + 1);
                },
                teardown: function () {
                  var t = this.ownerDocument || this,
                    e = X.access(t, i) - 1;
                  e
                    ? X.access(t, i, e)
                    : (t.removeEventListener(n, r, !0), X.remove(t, i));
                },
              };
            });
        var _e = E.location,
          be = Date.now(),
          we = /\?/;
        C.parseXML = function (t) {
          var e;
          if (!t || "string" != typeof t) return null;
          try {
            e = new E.DOMParser().parseFromString(t, "text/xml");
          } catch (t) {
            e = void 0;
          }
          return (
            (e && !e.getElementsByTagName("parsererror").length) ||
              C.error("Invalid XML: " + t),
            e
          );
        };
        var xe = /\[\]$/,
          Ee = /\r?\n/g,
          Te = /^(?:submit|button|image|reset|file)$/i,
          Ce = /^(?:input|select|textarea|keygen)/i;
        function De(n, t, i, r) {
          var e;
          if (Array.isArray(t))
            C.each(t, function (t, e) {
              i || xe.test(n)
                ? r(n, e)
                : De(
                    n +
                      "[" +
                      ("object" == typeof e && null != e ? t : "") +
                      "]",
                    e,
                    i,
                    r
                  );
            });
          else if (i || "object" !== w(t)) r(n, t);
          else for (e in t) De(n + "[" + e + "]", t[e], i, r);
        }
        (C.param = function (t, e) {
          var n,
            i = [],
            r = function (t, e) {
              var n = y(e) ? e() : e;
              i[i.length] =
                encodeURIComponent(t) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
            C.each(t, function () {
              r(this.name, this.value);
            });
          else for (n in t) De(n, t[n], e, r);
          return i.join("&");
        }),
          C.fn.extend({
            serialize: function () {
              return C.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = C.prop(this, "elements");
                return t ? C.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return (
                    this.name &&
                    !C(this).is(":disabled") &&
                    Ce.test(this.nodeName) &&
                    !Te.test(t) &&
                    (this.checked || !lt.test(t))
                  );
                })
                .map(function (t, e) {
                  var n = C(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? C.map(n, function (t) {
                        return { name: e.name, value: t.replace(Ee, "\r\n") };
                      })
                    : { name: e.name, value: n.replace(Ee, "\r\n") };
                })
                .get();
            },
          });
        var Se = /%20/g,
          Ae = /#.*$/,
          ke = /([?&])_=[^&]*/,
          Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ne = /^(?:GET|HEAD)$/,
          Oe = /^\/\//,
          Le = {},
          je = {},
          Fe = "*/".concat("*"),
          Pe = T.createElement("a");
        function Me(o) {
          return function (t, e) {
            "string" != typeof t && ((e = t), (t = "*"));
            var n,
              i = 0,
              r = t.toLowerCase().match(F) || [];
            if (y(e))
              for (; (n = r[i++]); )
                "+" === n[0]
                  ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(e))
                  : (o[n] = o[n] || []).push(e);
          };
        }
        function $e(e, r, o, s) {
          var a = {},
            l = e === je;
          function c(t) {
            var i;
            return (
              (a[t] = !0),
              C.each(e[t] || [], function (t, e) {
                var n = e(r, o, s);
                return "string" != typeof n || l || a[n]
                  ? l
                    ? !(i = n)
                    : void 0
                  : (r.dataTypes.unshift(n), c(n), !1);
              }),
              i
            );
          }
          return c(r.dataTypes[0]) || (!a["*"] && c("*"));
        }
        function Re(t, e) {
          var n,
            i,
            r = C.ajaxSettings.flatOptions || {};
          for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
          return i && C.extend(!0, t, i), t;
        }
        (Pe.href = _e.href),
          C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: _e.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  _e.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
              return e ? Re(Re(t, C.ajaxSettings), e) : Re(C.ajaxSettings, t);
            },
            ajaxPrefilter: Me(Le),
            ajaxTransport: Me(je),
            ajax: function (t, e) {
              "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
              var u,
                h,
                d,
                n,
                f,
                i,
                p,
                m,
                r,
                o,
                g = C.ajaxSetup({}, e),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                _ = C.Deferred(),
                b = C.Callbacks("once memory"),
                w = g.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                x = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (p) {
                      if (!n)
                        for (n = {}; (e = Ie.exec(d)); )
                          n[e[1].toLowerCase()] = e[2];
                      e = n[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                  },
                  getAllResponseHeaders: function () {
                    return p ? d : null;
                  },
                  setRequestHeader: function (t, e) {
                    return (
                      null == p &&
                        ((t = a[t.toLowerCase()] = a[t.toLowerCase()] || t),
                        (s[t] = e)),
                      this
                    );
                  },
                  overrideMimeType: function (t) {
                    return null == p && (g.mimeType = t), this;
                  },
                  statusCode: function (t) {
                    var e;
                    if (t)
                      if (p) x.always(t[x.status]);
                      else for (e in t) w[e] = [w[e], t[e]];
                    return this;
                  },
                  abort: function (t) {
                    var e = t || l;
                    return u && u.abort(e), c(0, e), this;
                  },
                };
              if (
                (_.promise(x),
                (g.url = ((t || g.url || _e.href) + "").replace(
                  Oe,
                  _e.protocol + "//"
                )),
                (g.type = e.method || e.type || g.method || g.type),
                (g.dataTypes = (g.dataType || "*").toLowerCase().match(F) || [
                  "",
                ]),
                null == g.crossDomain)
              ) {
                i = T.createElement("a");
                try {
                  (i.href = g.url),
                    (i.href = i.href),
                    (g.crossDomain =
                      Pe.protocol + "//" + Pe.host !=
                      i.protocol + "//" + i.host);
                } catch (t) {
                  g.crossDomain = !0;
                }
              }
              if (
                (g.data &&
                  g.processData &&
                  "string" != typeof g.data &&
                  (g.data = C.param(g.data, g.traditional)),
                $e(Le, g, e, x),
                p)
              )
                return x;
              for (r in ((m = C.event && g.global) &&
                0 == C.active++ &&
                C.event.trigger("ajaxStart"),
              (g.type = g.type.toUpperCase()),
              (g.hasContent = !Ne.test(g.type)),
              (h = g.url.replace(Ae, "")),
              g.hasContent
                ? g.data &&
                  g.processData &&
                  0 ===
                    (g.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (g.data = g.data.replace(Se, "+"))
                : ((o = g.url.slice(h.length)),
                  g.data &&
                    (g.processData || "string" == typeof g.data) &&
                    ((h += (we.test(h) ? "&" : "?") + g.data), delete g.data),
                  !1 === g.cache &&
                    ((h = h.replace(ke, "$1")),
                    (o = (we.test(h) ? "&" : "?") + "_=" + be++ + o)),
                  (g.url = h + o)),
              g.ifModified &&
                (C.lastModified[h] &&
                  x.setRequestHeader("If-Modified-Since", C.lastModified[h]),
                C.etag[h] && x.setRequestHeader("If-None-Match", C.etag[h])),
              ((g.data && g.hasContent && !1 !== g.contentType) ||
                e.contentType) &&
                x.setRequestHeader("Content-Type", g.contentType),
              x.setRequestHeader(
                "Accept",
                g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                  ? g.accepts[g.dataTypes[0]] +
                      ("*" !== g.dataTypes[0] ? ", " + Fe + "; q=0.01" : "")
                  : g.accepts["*"]
              ),
              g.headers))
                x.setRequestHeader(r, g.headers[r]);
              if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || p))
                return x.abort();
              if (
                ((l = "abort"),
                b.add(g.complete),
                x.done(g.success),
                x.fail(g.error),
                (u = $e(je, g, e, x)))
              ) {
                if (((x.readyState = 1), m && y.trigger("ajaxSend", [x, g]), p))
                  return x;
                g.async &&
                  0 < g.timeout &&
                  (f = E.setTimeout(function () {
                    x.abort("timeout");
                  }, g.timeout));
                try {
                  (p = !1), u.send(s, c);
                } catch (t) {
                  if (p) throw t;
                  c(-1, t);
                }
              } else c(-1, "No Transport");
              function c(t, e, n, i) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  c = e;
                p ||
                  ((p = !0),
                  f && E.clearTimeout(f),
                  (u = void 0),
                  (d = i || ""),
                  (x.readyState = 0 < t ? 4 : 0),
                  (r = (200 <= t && t < 300) || 304 === t),
                  n &&
                    (a = (function (t, e, n) {
                      for (
                        var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];

                      )
                        l.shift(),
                          void 0 === i &&
                            (i =
                              t.mimeType ||
                              e.getResponseHeader("Content-Type"));
                      if (i)
                        for (r in a)
                          if (a[r] && a[r].test(i)) {
                            l.unshift(r);
                            break;
                          }
                      if (l[0] in n) o = l[0];
                      else {
                        for (r in n) {
                          if (!l[0] || t.converters[r + " " + l[0]]) {
                            o = r;
                            break;
                          }
                          s || (s = r);
                        }
                        o = o || s;
                      }
                      if (o) return o !== l[0] && l.unshift(o), n[o];
                    })(g, x, n)),
                  (a = (function (t, e, n, i) {
                    var r,
                      o,
                      s,
                      a,
                      l,
                      c = {},
                      u = t.dataTypes.slice();
                    if (u[1])
                      for (s in t.converters)
                        c[s.toLowerCase()] = t.converters[s];
                    for (o = u.shift(); o; )
                      if (
                        (t.responseFields[o] && (n[t.responseFields[o]] = e),
                        !l &&
                          i &&
                          t.dataFilter &&
                          (e = t.dataFilter(e, t.dataType)),
                        (l = o),
                        (o = u.shift()))
                      )
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                          if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                              if (
                                (a = r.split(" "))[1] === o &&
                                (s = c[l + " " + a[0]] || c["* " + a[0]])
                              ) {
                                !0 === s
                                  ? (s = c[r])
                                  : !0 !== c[r] &&
                                    ((o = a[0]), u.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else
                              try {
                                e = s(e);
                              } catch (t) {
                                return {
                                  state: "parsererror",
                                  error: s
                                    ? t
                                    : "No conversion from " + l + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: e };
                  })(g, a, x, r)),
                  r
                    ? (g.ifModified &&
                        ((l = x.getResponseHeader("Last-Modified")) &&
                          (C.lastModified[h] = l),
                        (l = x.getResponseHeader("etag")) && (C.etag[h] = l)),
                      204 === t || "HEAD" === g.type
                        ? (c = "nocontent")
                        : 304 === t
                        ? (c = "notmodified")
                        : ((c = a.state), (o = a.data), (r = !(s = a.error))))
                    : ((s = c), (!t && c) || ((c = "error"), t < 0 && (t = 0))),
                  (x.status = t),
                  (x.statusText = (e || c) + ""),
                  r ? _.resolveWith(v, [o, c, x]) : _.rejectWith(v, [x, c, s]),
                  x.statusCode(w),
                  (w = void 0),
                  m &&
                    y.trigger(r ? "ajaxSuccess" : "ajaxError", [
                      x,
                      g,
                      r ? o : s,
                    ]),
                  b.fireWith(v, [x, c]),
                  m &&
                    (y.trigger("ajaxComplete", [x, g]),
                    --C.active || C.event.trigger("ajaxStop")));
              }
              return x;
            },
            getJSON: function (t, e, n) {
              return C.get(t, e, n, "json");
            },
            getScript: function (t, e) {
              return C.get(t, void 0, e, "script");
            },
          }),
          C.each(["get", "post"], function (t, r) {
            C[r] = function (t, e, n, i) {
              return (
                y(e) && ((i = i || n), (n = e), (e = void 0)),
                C.ajax(
                  C.extend(
                    { url: t, type: r, dataType: i, data: e, success: n },
                    C.isPlainObject(t) && t
                  )
                )
              );
            };
          }),
          (C._evalUrl = function (t) {
            return C.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              throws: !0,
            });
          }),
          C.fn.extend({
            wrapAll: function (t) {
              var e;
              return (
                this[0] &&
                  (y(t) && (t = t.call(this[0])),
                  (e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (n) {
              return y(n)
                ? this.each(function (t) {
                    C(this).wrapInner(n.call(this, t));
                  })
                : this.each(function () {
                    var t = C(this),
                      e = t.contents();
                    e.length ? e.wrapAll(n) : t.append(n);
                  });
            },
            wrap: function (e) {
              var n = y(e);
              return this.each(function (t) {
                C(this).wrapAll(n ? e.call(this, t) : e);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not("body")
                  .each(function () {
                    C(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (C.expr.pseudos.hidden = function (t) {
            return !C.expr.pseudos.visible(t);
          }),
          (C.expr.pseudos.visible = function (t) {
            return !!(
              t.offsetWidth ||
              t.offsetHeight ||
              t.getClientRects().length
            );
          }),
          (C.ajaxSettings.xhr = function () {
            try {
              return new E.XMLHttpRequest();
            } catch (t) {}
          });
        var He = { 0: 200, 1223: 204 },
          qe = C.ajaxSettings.xhr();
        (v.cors = !!qe && "withCredentials" in qe),
          (v.ajax = qe = !!qe),
          C.ajaxTransport(function (r) {
            var o, s;
            if (v.cors || (qe && !r.crossDomain))
              return {
                send: function (t, e) {
                  var n,
                    i = r.xhr();
                  if (
                    (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                  )
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                  for (n in (r.mimeType &&
                    i.overrideMimeType &&
                    i.overrideMimeType(r.mimeType),
                  r.crossDomain ||
                    t["X-Requested-With"] ||
                    (t["X-Requested-With"] = "XMLHttpRequest"),
                  t))
                    i.setRequestHeader(n, t[n]);
                  (o = function (t) {
                    return function () {
                      o &&
                        ((o =
                          s =
                          i.onload =
                          i.onerror =
                          i.onabort =
                          i.ontimeout =
                          i.onreadystatechange =
                            null),
                        "abort" === t
                          ? i.abort()
                          : "error" === t
                          ? "number" != typeof i.status
                            ? e(0, "error")
                            : e(i.status, i.statusText)
                          : e(
                              He[i.status] || i.status,
                              i.statusText,
                              "text" !== (i.responseType || "text") ||
                                "string" != typeof i.responseText
                                ? { binary: i.response }
                                : { text: i.responseText },
                              i.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (i.onload = o()),
                    (s = i.onerror = i.ontimeout = o("error")),
                    void 0 !== i.onabort
                      ? (i.onabort = s)
                      : (i.onreadystatechange = function () {
                          4 === i.readyState &&
                            E.setTimeout(function () {
                              o && s();
                            });
                        }),
                    (o = o("abort"));
                  try {
                    i.send((r.hasContent && r.data) || null);
                  } catch (t) {
                    if (o) throw t;
                  }
                },
                abort: function () {
                  o && o();
                },
              };
          }),
          C.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
          }),
          C.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (t) {
                return C.globalEval(t), t;
              },
            },
          }),
          C.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
              t.crossDomain && (t.type = "GET");
          }),
          C.ajaxTransport("script", function (n) {
            var i, r;
            if (n.crossDomain)
              return {
                send: function (t, e) {
                  (i = C("<script>")
                    .prop({ charset: n.scriptCharset, src: n.url })
                    .on(
                      "load error",
                      (r = function (t) {
                        i.remove(),
                          (r = null),
                          t && e("error" === t.type ? 404 : 200, t.type);
                      })
                    )),
                    T.head.appendChild(i[0]);
                },
                abort: function () {
                  r && r();
                },
              };
          });
        var ze,
          We = [],
          Be = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var t = We.pop() || C.expando + "_" + be++;
            return (this[t] = !0), t;
          },
        }),
          C.ajaxPrefilter("json jsonp", function (t, e, n) {
            var i,
              r,
              o,
              s =
                !1 !== t.jsonp &&
                (Be.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                    0 ===
                      (t.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Be.test(t.data) &&
                    "data");
            if (s || "jsonp" === t.dataTypes[0])
              return (
                (i = t.jsonpCallback =
                  y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                s
                  ? (t[s] = t[s].replace(Be, "$1" + i))
                  : !1 !== t.jsonp &&
                    (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                (t.converters["script json"] = function () {
                  return o || C.error(i + " was not called"), o[0];
                }),
                (t.dataTypes[0] = "json"),
                (r = E[i]),
                (E[i] = function () {
                  o = arguments;
                }),
                n.always(function () {
                  void 0 === r ? C(E).removeProp(i) : (E[i] = r),
                    t[i] && ((t.jsonpCallback = e.jsonpCallback), We.push(i)),
                    o && y(r) && r(o[0]),
                    (o = r = void 0);
                }),
                "script"
              );
          }),
          (v.createHTMLDocument =
            (((ze = T.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === ze.childNodes.length)),
          (C.parseHTML = function (t, e, n) {
            return "string" != typeof t
              ? []
              : ("boolean" == typeof e && ((n = e), (e = !1)),
                e ||
                  (v.createHTMLDocument
                    ? (((i = (e =
                        T.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = T.location.href),
                      e.head.appendChild(i))
                    : (e = T)),
                (o = !n && []),
                (r = A.exec(t))
                  ? [e.createElement(r[1])]
                  : ((r = vt([t], e, o)),
                    o && o.length && C(o).remove(),
                    C.merge([], r.childNodes)));
            var i, r, o;
          }),
          (C.fn.load = function (t, e, n) {
            var i,
              r,
              o,
              s = this,
              a = t.indexOf(" ");
            return (
              -1 < a && ((i = fe(t.slice(a))), (t = t.slice(0, a))),
              y(e)
                ? ((n = e), (e = void 0))
                : e && "object" == typeof e && (r = "POST"),
              0 < s.length &&
                C.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                  .done(function (t) {
                    (o = arguments),
                      s.html(i ? C("<div>").append(C.parseHTML(t)).find(i) : t);
                  })
                  .always(
                    n &&
                      function (t, e) {
                        s.each(function () {
                          n.apply(this, o || [t.responseText, e, t]);
                        });
                      }
                  ),
              this
            );
          }),
          C.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (t, e) {
              C.fn[e] = function (t) {
                return this.on(e, t);
              };
            }
          ),
          (C.expr.pseudos.animated = function (e) {
            return C.grep(C.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (C.offset = {
            setOffset: function (t, e, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c = C.css(t, "position"),
                u = C(t),
                h = {};
              "static" === c && (t.style.position = "relative"),
                (a = u.offset()),
                (o = C.css(t, "top")),
                (l = C.css(t, "left")),
                (r =
                  ("absolute" === c || "fixed" === c) &&
                  -1 < (o + l).indexOf("auto")
                    ? ((s = (i = u.position()).top), i.left)
                    : ((s = parseFloat(o) || 0), parseFloat(l) || 0)),
                y(e) && (e = e.call(t, n, C.extend({}, a))),
                null != e.top && (h.top = e.top - a.top + s),
                null != e.left && (h.left = e.left - a.left + r),
                "using" in e ? e.using.call(t, h) : u.css(h);
            },
          }),
          C.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      C.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0];
              return i
                ? i.getClientRects().length
                  ? ((t = i.getBoundingClientRect()),
                    (n = i.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var t,
                  e,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 };
                if ("fixed" === C.css(i, "position"))
                  e = i.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                      n = i.ownerDocument,
                      t = i.offsetParent || n.documentElement;
                    t &&
                    (t === n.body || t === n.documentElement) &&
                    "static" === C.css(t, "position");

                  )
                    t = t.parentNode;
                  t &&
                    t !== i &&
                    1 === t.nodeType &&
                    (((r = C(t).offset()).top += C.css(
                      t,
                      "borderTopWidth",
                      !0
                    )),
                    (r.left += C.css(t, "borderLeftWidth", !0)));
                }
                return {
                  top: e.top - r.top - C.css(i, "marginTop", !0),
                  left: e.left - r.left - C.css(i, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var t = this.offsetParent;
                  t && "static" === C.css(t, "position");

                )
                  t = t.offsetParent;
                return t || yt;
              });
            },
          }),
          C.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, r) {
              var o = "pageYOffset" === r;
              C.fn[e] = function (t) {
                return z(
                  this,
                  function (t, e, n) {
                    var i;
                    if (
                      (_(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                      void 0 === n)
                    )
                      return i ? i[r] : t[e];
                    i
                      ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                      : (t[e] = n);
                  },
                  e,
                  t,
                  arguments.length
                );
              };
            }
          ),
          C.each(["top", "left"], function (t, n) {
            C.cssHooks[n] = Ht(v.pixelPosition, function (t, e) {
              if (e)
                return (
                  (e = Rt(t, n)), Pt.test(e) ? C(t).position()[n] + "px" : e
                );
            });
          }),
          C.each({ Height: "height", Width: "width" }, function (s, a) {
            C.each(
              { padding: "inner" + s, content: a, "": "outer" + s },
              function (i, o) {
                C.fn[o] = function (t, e) {
                  var n = arguments.length && (i || "boolean" != typeof t),
                    r = i || (!0 === t || !0 === e ? "margin" : "border");
                  return z(
                    this,
                    function (t, e, n) {
                      var i;
                      return _(t)
                        ? 0 === o.indexOf("outer")
                          ? t["inner" + s]
                          : t.document.documentElement["client" + s]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(
                            t.body["scroll" + s],
                            i["scroll" + s],
                            t.body["offset" + s],
                            i["offset" + s],
                            i["client" + s]
                          ))
                        : void 0 === n
                        ? C.css(t, e, r)
                        : C.style(t, e, n, r);
                    },
                    a,
                    n ? t : void 0,
                    n
                  );
                };
              }
            );
          }),
          C.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (t, n) {
              C.fn[n] = function (t, e) {
                return 0 < arguments.length
                  ? this.on(n, null, t, e)
                  : this.trigger(n);
              };
            }
          ),
          C.fn.extend({
            hover: function (t, e) {
              return this.mouseenter(t).mouseleave(e || t);
            },
          }),
          C.fn.extend({
            bind: function (t, e, n) {
              return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
              return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
              return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
              return 1 === arguments.length
                ? this.off(t, "**")
                : this.off(e, t || "**", n);
            },
          }),
          (C.proxy = function (t, e) {
            var n, i, r;
            if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
              return (
                (i = a.call(arguments, 2)),
                ((r = function () {
                  return t.apply(e || this, i.concat(a.call(arguments)));
                }).guid = t.guid =
                  t.guid || C.guid++),
                r
              );
          }),
          (C.holdReady = function (t) {
            t ? C.readyWait++ : C.ready(!0);
          }),
          (C.isArray = Array.isArray),
          (C.parseJSON = JSON.parse),
          (C.nodeName = S),
          (C.isFunction = y),
          (C.isWindow = _),
          (C.camelCase = V),
          (C.type = w),
          (C.now = Date.now),
          (C.isNumeric = function (t) {
            var e = C.type(t);
            return (
              ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            );
          }),
          "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
              return C;
            });
        var Ue = E.jQuery,
          Ve = E.$;
        return (
          (C.noConflict = function (t) {
            return (
              E.$ === C && (E.$ = Ve), t && E.jQuery === C && (E.jQuery = Ue), C
            );
          }),
          t || (E.jQuery = E.$ = C),
          C
        );
      }),
        (function (t, e) {
          "object" == typeof exports && "undefined" != typeof module
            ? e(exports, require("jquery"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery"], e)
            : e((t.bootstrap = {}), t.jQuery);
        })(this, function (t, e) {
          "use strict";
          function i(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          function s(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t;
          }
          function c(r) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
              "function" == typeof Object.getOwnPropertySymbols &&
                (e = e.concat(
                  Object.getOwnPropertySymbols(o).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable;
                  })
                )),
                e.forEach(function (t) {
                  var e, n, i;
                  (e = r),
                    (i = o[(n = t)]),
                    n in e
                      ? Object.defineProperty(e, n, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = i);
                });
            }
            return r;
          }
          for (
            var r,
              n,
              o,
              a,
              l,
              u,
              h,
              d,
              f,
              p,
              m,
              g,
              v,
              y,
              _,
              b,
              w,
              x,
              E,
              T,
              C,
              D,
              S,
              A,
              k,
              I,
              N,
              O,
              L,
              j,
              F,
              P,
              M,
              $,
              R,
              H,
              q,
              z,
              W,
              B,
              U,
              V,
              Q,
              K,
              X,
              Y = (function (i) {
                var e = "transitionend",
                  l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (t) {
                      for (
                        ;
                        (t += ~~(1e6 * Math.random())),
                          document.getElementById(t);

                      );
                      return t;
                    },
                    getSelectorFromElement: function (t) {
                      var e = t.getAttribute("data-target");
                      (e && "#" !== e) || (e = t.getAttribute("href") || "");
                      try {
                        return 0 < i(document).find(e).length ? e : null;
                      } catch (t) {
                        return null;
                      }
                    },
                    getTransitionDurationFromElement: function (t) {
                      if (!t) return 0;
                      var e = i(t).css("transition-duration");
                      return parseFloat(e)
                        ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
                        : 0;
                    },
                    reflow: function (t) {
                      return t.offsetHeight;
                    },
                    triggerTransitionEnd: function (t) {
                      i(t).trigger(e);
                    },
                    supportsTransitionEnd: function () {
                      return Boolean(e);
                    },
                    isElement: function (t) {
                      return (t[0] || t).nodeType;
                    },
                    typeCheckConfig: function (t, e, n) {
                      for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                          var r = n[i],
                            o = e[i],
                            s =
                              o && l.isElement(o)
                                ? "element"
                                : ((a = o),
                                  {}.toString
                                    .call(a)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase());
                          if (!new RegExp(r).test(s))
                            throw new Error(
                              t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                r +
                                '".'
                            );
                        }
                      var a;
                    },
                  };
                return (
                  (i.fn.emulateTransitionEnd = function (t) {
                    var e = this,
                      n = !1;
                    return (
                      i(this).one(l.TRANSITION_END, function () {
                        n = !0;
                      }),
                      setTimeout(function () {
                        n || l.triggerTransitionEnd(e);
                      }, t),
                      this
                    );
                  }),
                  (i.event.special[l.TRANSITION_END] = {
                    bindType: e,
                    delegateType: e,
                    handle: function (t) {
                      if (i(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments);
                    },
                  }),
                  l
                );
              })((e = e && e.hasOwnProperty("default") ? e.default : e)),
              G =
                ((n = "alert"),
                (a = "." + (o = "bs.alert")),
                (l = (r = e).fn[n]),
                (u = {
                  CLOSE: "close" + a,
                  CLOSED: "closed" + a,
                  CLICK_DATA_API: "click" + a + ".data-api",
                }),
                (h = (function () {
                  function i(t) {
                    this._element = t;
                  }
                  var t = i.prototype;
                  return (
                    (t.close = function (t) {
                      t = t || this._element;
                      var e = this._getRootElement(t);
                      this._triggerCloseEvent(e).isDefaultPrevented() ||
                        this._removeElement(e);
                    }),
                    (t.dispose = function () {
                      r.removeData(this._element, o), (this._element = null);
                    }),
                    (t._getRootElement = function (t) {
                      var e = Y.getSelectorFromElement(t),
                        n = !1;
                      return (
                        e && (n = r(e)[0]),
                        n || (n = r(t).closest(".alert")[0]),
                        n
                      );
                    }),
                    (t._triggerCloseEvent = function (t) {
                      var e = r.Event(u.CLOSE);
                      return r(t).trigger(e), e;
                    }),
                    (t._removeElement = function (e) {
                      var n = this;
                      if ((r(e).removeClass("show"), r(e).hasClass("fade"))) {
                        var t = Y.getTransitionDurationFromElement(e);
                        r(e)
                          .one(Y.TRANSITION_END, function (t) {
                            return n._destroyElement(e, t);
                          })
                          .emulateTransitionEnd(t);
                      } else this._destroyElement(e);
                    }),
                    (t._destroyElement = function (t) {
                      r(t).detach().trigger(u.CLOSED).remove();
                    }),
                    (i._jQueryInterface = function (n) {
                      return this.each(function () {
                        var t = r(this),
                          e = t.data(o);
                        e || ((e = new i(this)), t.data(o, e)),
                          "close" === n && e[n](this);
                      });
                    }),
                    (i._handleDismiss = function (e) {
                      return function (t) {
                        t && t.preventDefault(), e.close(this);
                      };
                    }),
                    s(i, null, [
                      {
                        key: "VERSION",
                        get: function () {
                          return "4.1.0";
                        },
                      },
                    ]),
                    i
                  );
                })()),
                r(document).on(
                  u.CLICK_DATA_API,
                  '[data-dismiss="alert"]',
                  h._handleDismiss(new h())
                ),
                (r.fn[n] = h._jQueryInterface),
                (r.fn[n].Constructor = h),
                (r.fn[n].noConflict = function () {
                  return (r.fn[n] = l), h._jQueryInterface;
                }),
                h),
              Z =
                ((f = "button"),
                (m = "." + (p = "bs.button")),
                (g = ".data-api"),
                (v = (d = e).fn[f]),
                (y = "active"),
                (_ = '[data-toggle^="button"]'),
                (b = {
                  CLICK_DATA_API: "click" + m + g,
                  FOCUS_BLUR_DATA_API: "focus" + m + g + " blur" + m + g,
                }),
                (w = (function () {
                  function n(t) {
                    this._element = t;
                  }
                  var t = n.prototype;
                  return (
                    (t.toggle = function () {
                      var t = !0,
                        e = !0,
                        n = d(this._element).closest(
                          '[data-toggle="buttons"]'
                        )[0];
                      if (n) {
                        var i = d(this._element).find("input")[0];
                        if (i) {
                          if ("radio" === i.type)
                            if (i.checked && d(this._element).hasClass(y))
                              t = !1;
                            else {
                              var r = d(n).find(".active")[0];
                              r && d(r).removeClass(y);
                            }
                          if (t) {
                            if (
                              i.hasAttribute("disabled") ||
                              n.hasAttribute("disabled") ||
                              i.classList.contains("disabled") ||
                              n.classList.contains("disabled")
                            )
                              return;
                            (i.checked = !d(this._element).hasClass(y)),
                              d(i).trigger("change");
                          }
                          i.focus(), (e = !1);
                        }
                      }
                      e &&
                        this._element.setAttribute(
                          "aria-pressed",
                          !d(this._element).hasClass(y)
                        ),
                        t && d(this._element).toggleClass(y);
                    }),
                    (t.dispose = function () {
                      d.removeData(this._element, p), (this._element = null);
                    }),
                    (n._jQueryInterface = function (e) {
                      return this.each(function () {
                        var t = d(this).data(p);
                        t || ((t = new n(this)), d(this).data(p, t)),
                          "toggle" === e && t[e]();
                      });
                    }),
                    s(n, null, [
                      {
                        key: "VERSION",
                        get: function () {
                          return "4.1.0";
                        },
                      },
                    ]),
                    n
                  );
                })()),
                d(document)
                  .on(b.CLICK_DATA_API, _, function (t) {
                    t.preventDefault();
                    var e = t.target;
                    d(e).hasClass("btn") || (e = d(e).closest(".btn")),
                      w._jQueryInterface.call(d(e), "toggle");
                  })
                  .on(b.FOCUS_BLUR_DATA_API, _, function (t) {
                    var e = d(t.target).closest(".btn")[0];
                    d(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
                  }),
                (d.fn[f] = w._jQueryInterface),
                (d.fn[f].Constructor = w),
                (d.fn[f].noConflict = function () {
                  return (d.fn[f] = v), w._jQueryInterface;
                }),
                w),
              J =
                ((E = "carousel"),
                (C = "." + (T = "bs.carousel")),
                (D = ".data-api"),
                (S = (x = e).fn[E]),
                (A = {
                  interval: 5e3,
                  keyboard: !0,
                  slide: !1,
                  pause: "hover",
                  wrap: !0,
                }),
                (k = {
                  interval: "(number|boolean)",
                  keyboard: "boolean",
                  slide: "(boolean|string)",
                  pause: "(string|boolean)",
                  wrap: "boolean",
                }),
                (I = "next"),
                (N = "prev"),
                (O = {
                  SLIDE: "slide" + C,
                  SLID: "slid" + C,
                  KEYDOWN: "keydown" + C,
                  MOUSEENTER: "mouseenter" + C,
                  MOUSELEAVE: "mouseleave" + C,
                  TOUCHEND: "touchend" + C,
                  LOAD_DATA_API: "load" + C + D,
                  CLICK_DATA_API: "click" + C + D,
                }),
                (L = "active"),
                (j = {
                  ACTIVE: ".active",
                  ACTIVE_ITEM: ".active.carousel-item",
                  ITEM: ".carousel-item",
                  NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                  INDICATORS: ".carousel-indicators",
                  DATA_SLIDE: "[data-slide], [data-slide-to]",
                  DATA_RIDE: '[data-ride="carousel"]',
                }),
                (F = (function () {
                  function o(t, e) {
                    (this._items = null),
                      (this._interval = null),
                      (this._activeElement = null),
                      (this._isPaused = !1),
                      (this._isSliding = !1),
                      (this.touchTimeout = null),
                      (this._config = this._getConfig(e)),
                      (this._element = x(t)[0]),
                      (this._indicatorsElement = x(this._element).find(
                        j.INDICATORS
                      )[0]),
                      this._addEventListeners();
                  }
                  var t = o.prototype;
                  return (
                    (t.next = function () {
                      this._isSliding || this._slide(I);
                    }),
                    (t.nextWhenVisible = function () {
                      !document.hidden &&
                        x(this._element).is(":visible") &&
                        "hidden" !== x(this._element).css("visibility") &&
                        this.next();
                    }),
                    (t.prev = function () {
                      this._isSliding || this._slide(N);
                    }),
                    (t.pause = function (t) {
                      t || (this._isPaused = !0),
                        x(this._element).find(j.NEXT_PREV)[0] &&
                          (Y.triggerTransitionEnd(this._element),
                          this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                    }),
                    (t.cycle = function (t) {
                      t || (this._isPaused = !1),
                        this._interval &&
                          (clearInterval(this._interval),
                          (this._interval = null)),
                        this._config.interval &&
                          !this._isPaused &&
                          (this._interval = setInterval(
                            (document.visibilityState
                              ? this.nextWhenVisible
                              : this.next
                            ).bind(this),
                            this._config.interval
                          ));
                    }),
                    (t.to = function (t) {
                      var e = this;
                      this._activeElement = x(this._element).find(
                        j.ACTIVE_ITEM
                      )[0];
                      var n = this._getItemIndex(this._activeElement);
                      if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                          x(this._element).one(O.SLID, function () {
                            return e.to(t);
                          });
                        else {
                          if (n === t) return this.pause(), void this.cycle();
                          var i = n < t ? I : N;
                          this._slide(i, this._items[t]);
                        }
                    }),
                    (t.dispose = function () {
                      x(this._element).off(C),
                        x.removeData(this._element, T),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                    }),
                    (t._getConfig = function (t) {
                      return (t = c({}, A, t)), Y.typeCheckConfig(E, t, k), t;
                    }),
                    (t._addEventListeners = function () {
                      var e = this;
                      this._config.keyboard &&
                        x(this._element).on(O.KEYDOWN, function (t) {
                          return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                          (x(this._element)
                            .on(O.MOUSEENTER, function (t) {
                              return e.pause(t);
                            })
                            .on(O.MOUSELEAVE, function (t) {
                              return e.cycle(t);
                            }),
                          ("ontouchstart" in document.documentElement) &&
                            x(this._element).on(O.TOUCHEND, function () {
                              e.pause(),
                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                (e.touchTimeout = setTimeout(function (t) {
                                  return e.cycle(t);
                                }, 500 + e._config.interval));
                            }));
                    }),
                    (t._keydown = function (t) {
                      if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                          case 37:
                            t.preventDefault(), this.prev();
                            break;
                          case 39:
                            t.preventDefault(), this.next();
                        }
                    }),
                    (t._getItemIndex = function (t) {
                      return (
                        (this._items = x.makeArray(x(t).parent().find(j.ITEM))),
                        this._items.indexOf(t)
                      );
                    }),
                    (t._getItemByDirection = function (t, e) {
                      var n = t === I,
                        i = t === N,
                        r = this._getItemIndex(e),
                        o = this._items.length - 1;
                      if (
                        ((i && 0 === r) || (n && r === o)) &&
                        !this._config.wrap
                      )
                        return e;
                      var s = (r + (t === N ? -1 : 1)) % this._items.length;
                      return -1 == s
                        ? this._items[this._items.length - 1]
                        : this._items[s];
                    }),
                    (t._triggerSlideEvent = function (t, e) {
                      var n = this._getItemIndex(t),
                        i = this._getItemIndex(
                          x(this._element).find(j.ACTIVE_ITEM)[0]
                        ),
                        r = x.Event(O.SLIDE, {
                          relatedTarget: t,
                          direction: e,
                          from: i,
                          to: n,
                        });
                      return x(this._element).trigger(r), r;
                    }),
                    (t._setActiveIndicatorElement = function (t) {
                      if (this._indicatorsElement) {
                        x(this._indicatorsElement)
                          .find(j.ACTIVE)
                          .removeClass(L);
                        var e =
                          this._indicatorsElement.children[
                            this._getItemIndex(t)
                          ];
                        e && x(e).addClass(L);
                      }
                    }),
                    (t._slide = function (t, e) {
                      var n,
                        i,
                        r,
                        o = this,
                        s = x(this._element).find(j.ACTIVE_ITEM)[0],
                        a = this._getItemIndex(s),
                        l = e || (s && this._getItemByDirection(t, s)),
                        c = this._getItemIndex(l),
                        u = Boolean(this._interval);
                      if (
                        ((r =
                          t === I
                            ? ((n = "carousel-item-left"),
                              (i = "carousel-item-next"),
                              "left")
                            : ((n = "carousel-item-right"),
                              (i = "carousel-item-prev"),
                              "right")),
                        l && x(l).hasClass(L))
                      )
                        this._isSliding = !1;
                      else if (
                        !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
                        s &&
                        l
                      ) {
                        (this._isSliding = !0),
                          u && this.pause(),
                          this._setActiveIndicatorElement(l);
                        var h = x.Event(O.SLID, {
                          relatedTarget: l,
                          direction: r,
                          from: a,
                          to: c,
                        });
                        if (x(this._element).hasClass("slide")) {
                          x(l).addClass(i),
                            Y.reflow(l),
                            x(s).addClass(n),
                            x(l).addClass(n);
                          var d = Y.getTransitionDurationFromElement(s);
                          x(s)
                            .one(Y.TRANSITION_END, function () {
                              x(l)
                                .removeClass(n + " " + i)
                                .addClass(L),
                                x(s).removeClass(L + " " + i + " " + n),
                                (o._isSliding = !1),
                                setTimeout(function () {
                                  return x(o._element).trigger(h);
                                }, 0);
                            })
                            .emulateTransitionEnd(d);
                        } else
                          x(s).removeClass(L),
                            x(l).addClass(L),
                            (this._isSliding = !1),
                            x(this._element).trigger(h);
                        u && this.cycle();
                      }
                    }),
                    (o._jQueryInterface = function (i) {
                      return this.each(function () {
                        var t = x(this).data(T),
                          e = c({}, A, x(this).data());
                        "object" == typeof i && (e = c({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (
                          (t || ((t = new o(this, e)), x(this).data(T, t)),
                          "number" == typeof i)
                        )
                          t.to(i);
                        else if ("string" == typeof n) {
                          if (void 0 === t[n])
                            throw new TypeError('No method named "' + n + '"');
                          t[n]();
                        } else e.interval && (t.pause(), t.cycle());
                      });
                    }),
                    (o._dataApiClickHandler = function (t) {
                      var e = Y.getSelectorFromElement(this);
                      if (e) {
                        var n = x(e)[0];
                        if (n && x(n).hasClass("carousel")) {
                          var i = c({}, x(n).data(), x(this).data()),
                            r = this.getAttribute("data-slide-to");
                          r && (i.interval = !1),
                            o._jQueryInterface.call(x(n), i),
                            r && x(n).data(T).to(r),
                            t.preventDefault();
                        }
                      }
                    }),
                    s(o, null, [
                      {
                        key: "VERSION",
                        get: function () {
                          return "4.1.0";
                        },
                      },
                      {
                        key: "Default",
                        get: function () {
                          return A;
                        },
                      },
                    ]),
                    o
                  );
                })()),
                x(document).on(
                  O.CLICK_DATA_API,
                  j.DATA_SLIDE,
                  F._dataApiClickHandler
                ),
                x(window).on(O.LOAD_DATA_API, function () {
                  x(j.DATA_RIDE).each(function () {
                    var t = x(this);
                    F._jQueryInterface.call(t, t.data());
                  });
                }),
                (x.fn[E] = F._jQueryInterface),
                (x.fn[E].Constructor = F),
                (x.fn[E].noConflict = function () {
                  return (x.fn[E] = S), F._jQueryInterface;
                }),
                F),
              tt =
                ((M = "collapse"),
                (R = "." + ($ = "bs.collapse")),
                (H = (P = e).fn[M]),
                (q = { toggle: !0, parent: "" }),
                (z = { toggle: "boolean", parent: "(string|element)" }),
                (W = {
                  SHOW: "show" + R,
                  SHOWN: "shown" + R,
                  HIDE: "hide" + R,
                  HIDDEN: "hidden" + R,
                  CLICK_DATA_API: "click" + R + ".data-api",
                }),
                (B = "show"),
                (U = "collapse"),
                (V = "collapsing"),
                (Q = "collapsed"),
                (K = {
                  ACTIVES: ".show, .collapsing",
                  DATA_TOGGLE: '[data-toggle="collapse"]',
                }),
                (X = (function () {
                  function a(t, e) {
                    (this._isTransitioning = !1),
                      (this._element = t),
                      (this._config = this._getConfig(e)),
                      (this._triggerArray = P.makeArray(
                        P(
                          '[data-toggle="collapse"][href="#' +
                            t.id +
                            '"],[data-toggle="collapse"][data-target="#' +
                            t.id +
                            '"]'
                        )
                      ));
                    for (var n = P(K.DATA_TOGGLE), i = 0; i < n.length; i++) {
                      var r = n[i],
                        o = Y.getSelectorFromElement(r);
                      null !== o &&
                        0 < P(o).filter(t).length &&
                        ((this._selector = o), this._triggerArray.push(r));
                    }
                    (this._parent = this._config.parent
                      ? this._getParent()
                      : null),
                      this._config.parent ||
                        this._addAriaAndCollapsedClass(
                          this._element,
                          this._triggerArray
                        ),
                      this._config.toggle && this.toggle();
                  }
                  var t = a.prototype;
                  return (
                    (t.toggle = function () {
                      P(this._element).hasClass(B) ? this.hide() : this.show();
                    }),
                    (t.show = function () {
                      var t,
                        e,
                        n = this;
                      if (
                        !(
                          this._isTransitioning ||
                          P(this._element).hasClass(B) ||
                          (this._parent &&
                            0 ===
                              (t = P.makeArray(
                                P(this._parent)
                                  .find(K.ACTIVES)
                                  .filter(
                                    '[data-parent="' +
                                      this._config.parent +
                                      '"]'
                                  )
                              )).length &&
                            (t = null),
                          t &&
                            (e = P(t).not(this._selector).data($)) &&
                            e._isTransitioning)
                        )
                      ) {
                        var i = P.Event(W.SHOW);
                        if (
                          (P(this._element).trigger(i), !i.isDefaultPrevented())
                        ) {
                          t &&
                            (a._jQueryInterface.call(
                              P(t).not(this._selector),
                              "hide"
                            ),
                            e || P(t).data($, null));
                          var r = this._getDimension();
                          P(this._element).removeClass(U).addClass(V),
                            (this._element.style[r] = 0) <
                              this._triggerArray.length &&
                              P(this._triggerArray)
                                .removeClass(Q)
                                .attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                          var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = Y.getTransitionDurationFromElement(
                              this._element
                            );
                          P(this._element)
                            .one(Y.TRANSITION_END, function () {
                              P(n._element)
                                .removeClass(V)
                                .addClass(U)
                                .addClass(B),
                                (n._element.style[r] = ""),
                                n.setTransitioning(!1),
                                P(n._element).trigger(W.SHOWN);
                            })
                            .emulateTransitionEnd(s),
                            (this._element.style[r] = this._element[o] + "px");
                        }
                      }
                    }),
                    (t.hide = function () {
                      var t = this;
                      if (
                        !this._isTransitioning &&
                        P(this._element).hasClass(B)
                      ) {
                        var e = P.Event(W.HIDE);
                        if (
                          (P(this._element).trigger(e), !e.isDefaultPrevented())
                        ) {
                          var n = this._getDimension();
                          if (
                            ((this._element.style[n] =
                              this._element.getBoundingClientRect()[n] + "px"),
                            Y.reflow(this._element),
                            P(this._element)
                              .addClass(V)
                              .removeClass(U)
                              .removeClass(B),
                            0 < this._triggerArray.length)
                          )
                            for (
                              var i = 0;
                              i < this._triggerArray.length;
                              i++
                            ) {
                              var r = this._triggerArray[i],
                                o = Y.getSelectorFromElement(r);
                              null !== o &&
                                (P(o).hasClass(B) ||
                                  P(r).addClass(Q).attr("aria-expanded", !1));
                            }
                          this.setTransitioning(!0),
                            (this._element.style[n] = "");
                          var s = Y.getTransitionDurationFromElement(
                            this._element
                          );
                          P(this._element)
                            .one(Y.TRANSITION_END, function () {
                              t.setTransitioning(!1),
                                P(t._element)
                                  .removeClass(V)
                                  .addClass(U)
                                  .trigger(W.HIDDEN);
                            })
                            .emulateTransitionEnd(s);
                        }
                      }
                    }),
                    (t.setTransitioning = function (t) {
                      this._isTransitioning = t;
                    }),
                    (t.dispose = function () {
                      P.removeData(this._element, $),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                    }),
                    (t._getConfig = function (t) {
                      return (
                        ((t = c({}, q, t)).toggle = Boolean(t.toggle)),
                        Y.typeCheckConfig(M, t, z),
                        t
                      );
                    }),
                    (t._getDimension = function () {
                      return P(this._element).hasClass("width")
                        ? "width"
                        : "height";
                    }),
                    (t._getParent = function () {
                      var n = this,
                        t = null;
                      Y.isElement(this._config.parent)
                        ? ((t = this._config.parent),
                          void 0 !== this._config.parent.jquery &&
                            (t = this._config.parent[0]))
                        : (t = P(this._config.parent)[0]);
                      var e =
                        '[data-toggle="collapse"][data-parent="' +
                        this._config.parent +
                        '"]';
                      return (
                        P(t)
                          .find(e)
                          .each(function (t, e) {
                            n._addAriaAndCollapsedClass(
                              a._getTargetFromElement(e),
                              [e]
                            );
                          }),
                        t
                      );
                    }),
                    (t._addAriaAndCollapsedClass = function (t, e) {
                      if (t) {
                        var n = P(t).hasClass(B);
                        0 < e.length &&
                          P(e).toggleClass(Q, !n).attr("aria-expanded", n);
                      }
                    }),
                    (a._getTargetFromElement = function (t) {
                      var e = Y.getSelectorFromElement(t);
                      return e ? P(e)[0] : null;
                    }),
                    (a._jQueryInterface = function (i) {
                      return this.each(function () {
                        var t = P(this),
                          e = t.data($),
                          n = c({}, q, t.data(), "object" == typeof i && i);
                        if (
                          (!e &&
                            n.toggle &&
                            /show|hide/.test(i) &&
                            (n.toggle = !1),
                          e || ((e = new a(this, n)), t.data($, e)),
                          "string" == typeof i)
                        ) {
                          if (void 0 === e[i])
                            throw new TypeError('No method named "' + i + '"');
                          e[i]();
                        }
                      });
                    }),
                    s(a, null, [
                      {
                        key: "VERSION",
                        get: function () {
                          return "4.1.0";
                        },
                      },
                      {
                        key: "Default",
                        get: function () {
                          return q;
                        },
                      },
                    ]),
                    a
                  );
                })()),
                P(document).on(W.CLICK_DATA_API, K.DATA_TOGGLE, function (t) {
                  "A" === t.currentTarget.tagName && t.preventDefault();
                  var n = P(this),
                    e = Y.getSelectorFromElement(this);
                  P(e).each(function () {
                    var t = P(this),
                      e = t.data($) ? "toggle" : n.data();
                    X._jQueryInterface.call(t, e);
                  });
                }),
                (P.fn[M] = X._jQueryInterface),
                (P.fn[M].Constructor = X),
                (P.fn[M].noConflict = function () {
                  return (P.fn[M] = H), X._jQueryInterface;
                }),
                X),
              et =
                "undefined" != typeof window && "undefined" != typeof document,
              nt = ["Edge", "Trident", "Firefox"],
              it = 0,
              rt = 0;
            rt < nt.length;
            rt += 1
          )
            if (et && 0 <= navigator.userAgent.indexOf(nt[rt])) {
              it = 1;
              break;
            }
          var ot =
            et && window.Promise
              ? function (t) {
                  var e = !1;
                  return function () {
                    e ||
                      ((e = !0),
                      window.Promise.resolve().then(function () {
                        (e = !1), t();
                      }));
                  };
                }
              : function (t) {
                  var e = !1;
                  return function () {
                    e ||
                      ((e = !0),
                      setTimeout(function () {
                        (e = !1), t();
                      }, it));
                  };
                };
          function st(t) {
            return t && "[object Function]" === {}.toString.call(t);
          }
          function at(t, e) {
            if (1 !== t.nodeType) return [];
            var n = getComputedStyle(t, null);
            return e ? n[e] : n;
          }
          function lt(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host;
          }
          function ct(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
              case "HTML":
              case "BODY":
                return t.ownerDocument.body;
              case "#document":
                return t.body;
            }
            var e = at(t),
              n = e.overflow,
              i = e.overflowX,
              r = e.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? t : ct(lt(t));
          }
          var ut = {},
            ht = function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "all";
              if (((t = t.toString()), ut.hasOwnProperty(t))) return ut[t];
              switch (t) {
                case "11":
                  ut[t] = -1 !== navigator.userAgent.indexOf("Trident");
                  break;
                case "10":
                  ut[t] = -1 !== navigator.appVersion.indexOf("MSIE 10");
                  break;
                case "all":
                  ut[t] =
                    -1 !== navigator.userAgent.indexOf("Trident") ||
                    -1 !== navigator.userAgent.indexOf("MSIE");
              }
              return (
                (ut.all =
                  ut.all ||
                  Object.keys(ut).some(function (t) {
                    return ut[t];
                  })),
                ut[t]
              );
            };
          function dt(t) {
            if (!t) return document.documentElement;
            for (
              var e = ht(10) ? document.body : null, n = t.offsetParent;
              n === e && t.nextElementSibling;

            )
              n = (t = t.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i
              ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
                "static" === at(n, "position")
                ? dt(n)
                : n
              : t
              ? t.ownerDocument.documentElement
              : document.documentElement;
          }
          function ft(t) {
            return null !== t.parentNode ? ft(t.parentNode) : t;
          }
          function pt(t, e) {
            if (!(t && t.nodeType && e && e.nodeType))
              return document.documentElement;
            var n =
                t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
              i = n ? t : e,
              r = n ? e : t,
              o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var s,
              a,
              l = o.commonAncestorContainer;
            if ((t !== l && e !== l) || i.contains(r))
              return "BODY" === (a = (s = l).nodeName) ||
                ("HTML" !== a && dt(s.firstElementChild) !== s)
                ? dt(l)
                : l;
            var c = ft(t);
            return c.host ? pt(c.host, e) : pt(t, ft(e).host);
          }
          function mt(t) {
            var e =
                "top" ===
                (1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : "top")
                  ? "scrollTop"
                  : "scrollLeft",
              n = t.nodeName;
            if ("BODY" !== n && "HTML" !== n) return t[e];
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e];
          }
          function gt(t, e) {
            var n = "x" === e ? "Left" : "Top",
              i = "Left" == n ? "Right" : "Bottom";
            return (
              parseFloat(t["border" + n + "Width"], 10) +
              parseFloat(t["border" + i + "Width"], 10)
            );
          }
          function vt(t, e, n, i) {
            return Math.max(
              e["offset" + t],
              e["scroll" + t],
              n["client" + t],
              n["offset" + t],
              n["scroll" + t],
              ht(10)
                ? n["offset" + t] +
                    i["margin" + ("Height" === t ? "Top" : "Left")] +
                    i["margin" + ("Height" === t ? "Bottom" : "Right")]
                : 0
            );
          }
          function yt() {
            var t = document.body,
              e = document.documentElement,
              n = ht(10) && getComputedStyle(e);
            return {
              height: vt("Height", t, e, n),
              width: vt("Width", t, e, n),
            };
          }
          var _t = (function () {
              function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              }
              return function (t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t;
              };
            })(),
            bt = function (t, e, n) {
              return (
                e in t
                  ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = n),
                t
              );
            },
            wt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              };
          function xt(t) {
            return wt({}, t, {
              right: t.left + t.width,
              bottom: t.top + t.height,
            });
          }
          function Et(t) {
            var e = {};
            try {
              if (ht(10)) {
                e = t.getBoundingClientRect();
                var n = mt(t, "top"),
                  i = mt(t, "left");
                (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
              } else e = t.getBoundingClientRect();
            } catch (t) {}
            var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top,
              },
              o = "HTML" === t.nodeName ? yt() : {},
              s = o.width || t.clientWidth || r.right - r.left,
              a = o.height || t.clientHeight || r.bottom - r.top,
              l = t.offsetWidth - s,
              c = t.offsetHeight - a;
            if (l || c) {
              var u = at(t);
              (l -= gt(u, "x")),
                (c -= gt(u, "y")),
                (r.width -= l),
                (r.height -= c);
            }
            return xt(r);
          }
          function Tt(t, e) {
            var n =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              i = ht(10),
              r = "HTML" === e.nodeName,
              o = Et(t),
              s = Et(e),
              a = ct(t),
              l = at(e),
              c = parseFloat(l.borderTopWidth, 10),
              u = parseFloat(l.borderLeftWidth, 10);
            n &&
              "HTML" === e.nodeName &&
              ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
            var h = xt({
              top: o.top - s.top - c,
              left: o.left - s.left - u,
              width: o.width,
              height: o.height,
            });
            if (((h.marginTop = 0), (h.marginLeft = 0), !i && r)) {
              var d = parseFloat(l.marginTop, 10),
                f = parseFloat(l.marginLeft, 10);
              (h.top -= c - d),
                (h.bottom -= c - d),
                (h.left -= u - f),
                (h.right -= u - f),
                (h.marginTop = d),
                (h.marginLeft = f);
            }
            return (
              (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
                (h = (function (t, e) {
                  var n =
                      2 < arguments.length &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = mt(e, "top"),
                    r = mt(e, "left"),
                    o = n ? -1 : 1;
                  return (
                    (t.top += i * o),
                    (t.bottom += i * o),
                    (t.left += r * o),
                    (t.right += r * o),
                    t
                  );
                })(h, e)),
              h
            );
          }
          function Ct(t) {
            if (!t || !t.parentElement || ht()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === at(e, "transform"); )
              e = e.parentElement;
            return e || document.documentElement;
          }
          function Dt(t, e, n, i) {
            var r =
                4 < arguments.length && void 0 !== arguments[4] && arguments[4],
              o = { top: 0, left: 0 },
              s = r ? Ct(t) : pt(t, e);
            if ("viewport" === i)
              o = (function (t) {
                var e =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = t.ownerDocument.documentElement,
                  i = Tt(t, n),
                  r = Math.max(n.clientWidth, window.innerWidth || 0),
                  o = Math.max(n.clientHeight, window.innerHeight || 0),
                  s = e ? 0 : mt(n),
                  a = e ? 0 : mt(n, "left");
                return xt({
                  top: s - i.top + i.marginTop,
                  left: a - i.left + i.marginLeft,
                  width: r,
                  height: o,
                });
              })(s, r);
            else {
              var a = void 0;
              "scrollParent" === i
                ? "BODY" === (a = ct(lt(e))).nodeName &&
                  (a = t.ownerDocument.documentElement)
                : (a = "window" === i ? t.ownerDocument.documentElement : i);
              var l = Tt(a, s, r);
              if (
                "HTML" !== a.nodeName ||
                (function t(e) {
                  var n = e.nodeName;
                  return (
                    "BODY" !== n &&
                    "HTML" !== n &&
                    ("fixed" === at(e, "position") || t(lt(e)))
                  );
                })(s)
              )
                o = l;
              else {
                var c = yt(),
                  u = c.height,
                  h = c.width;
                (o.top += l.top - l.marginTop),
                  (o.bottom = u + l.top),
                  (o.left += l.left - l.marginLeft),
                  (o.right = h + l.left);
              }
            }
            return (
              (o.left += n), (o.top += n), (o.right -= n), (o.bottom -= n), o
            );
          }
          function St(t, e, i, n, r) {
            var o =
              5 < arguments.length && void 0 !== arguments[5]
                ? arguments[5]
                : 0;
            if (-1 === t.indexOf("auto")) return t;
            var s = Dt(i, n, o, r),
              a = {
                top: { width: s.width, height: e.top - s.top },
                right: { width: s.right - e.right, height: s.height },
                bottom: { width: s.width, height: s.bottom - e.bottom },
                left: { width: e.left - s.left, height: s.height },
              },
              l = Object.keys(a)
                .map(function (t) {
                  return wt({ key: t }, a[t], {
                    area: ((e = a[t]), e.width * e.height),
                  });
                  var e;
                })
                .sort(function (t, e) {
                  return e.area - t.area;
                }),
              c = l.filter(function (t) {
                var e = t.width,
                  n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight;
              }),
              u = 0 < c.length ? c[0].key : l[0].key,
              h = t.split("-")[1];
            return u + (h ? "-" + h : "");
          }
          function At(t, e, n) {
            var i =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return Tt(n, i ? Ct(e) : pt(e, n), i);
          }
          function kt(t) {
            var e = getComputedStyle(t),
              n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
              i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
            return { width: t.offsetWidth + i, height: t.offsetHeight + n };
          }
          function It(t) {
            var e = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom",
            };
            return t.replace(/left|right|bottom|top/g, function (t) {
              return e[t];
            });
          }
          function Nt(t, e, n) {
            n = n.split("-")[0];
            var i = kt(t),
              r = { width: i.width, height: i.height },
              o = -1 !== ["right", "left"].indexOf(n),
              s = o ? "top" : "left",
              a = o ? "left" : "top",
              l = o ? "height" : "width",
              c = o ? "width" : "height";
            return (
              (r[s] = e[s] + e[l] / 2 - i[l] / 2),
              (r[a] = n === a ? e[a] - i[c] : e[It(a)]),
              r
            );
          }
          function Ot(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0];
          }
          function Lt(t, n, e) {
            return (
              (void 0 === e
                ? t
                : t.slice(
                    0,
                    (function (t, e, n) {
                      if (Array.prototype.findIndex)
                        return t.findIndex(function (t) {
                          return t.name === n;
                        });
                      var i = Ot(t, function (t) {
                        return t.name === n;
                      });
                      return t.indexOf(i);
                    })(t, 0, e)
                  )
              ).forEach(function (t) {
                t.function &&
                  console.warn(
                    "`modifier.function` is deprecated, use `modifier.fn`!"
                  );
                var e = t.function || t.fn;
                t.enabled &&
                  st(e) &&
                  ((n.offsets.popper = xt(n.offsets.popper)),
                  (n.offsets.reference = xt(n.offsets.reference)),
                  (n = e(n, t)));
              }),
              n
            );
          }
          function jt(t, n) {
            return t.some(function (t) {
              var e = t.name;
              return t.enabled && e === n;
            });
          }
          function Ft(t) {
            for (
              var e = [!1, "ms", "Webkit", "Moz", "O"],
                n = t.charAt(0).toUpperCase() + t.slice(1),
                i = 0;
              i < e.length;
              i++
            ) {
              var r = e[i],
                o = r ? "" + r + n : t;
              if (void 0 !== document.body.style[o]) return o;
            }
            return null;
          }
          function Pt(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window;
          }
          function Mt(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
          }
          function $t(n, i) {
            Object.keys(i).forEach(function (t) {
              var e = "";
              -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                  t
                ) &&
                Mt(i[t]) &&
                (e = "px"),
                (n.style[t] = i[t] + e);
            });
          }
          function Rt(t, e, n) {
            var i = Ot(t, function (t) {
                return t.name === e;
              }),
              r =
                !!i &&
                t.some(function (t) {
                  return t.name === n && t.enabled && t.order < i.order;
                });
            if (!r) {
              var o = "`" + e + "`",
                s = "`" + n + "`";
              console.warn(
                s +
                  " modifier is required by " +
                  o +
                  " modifier in order to work, be sure to include it before " +
                  o +
                  "!"
              );
            }
            return r;
          }
          var Ht = [
              "auto-start",
              "auto",
              "auto-end",
              "top-start",
              "top",
              "top-end",
              "right-start",
              "right",
              "right-end",
              "bottom-end",
              "bottom",
              "bottom-start",
              "left-end",
              "left",
              "left-start",
            ],
            qt = Ht.slice(3);
          function zt(t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              n = qt.indexOf(t),
              i = qt.slice(n + 1).concat(qt.slice(0, n));
            return e ? i.reverse() : i;
          }
          var Wt = {
              placement: "bottom",
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function () {},
              onUpdate: function () {},
              modifiers: {
                shift: {
                  order: 100,
                  enabled: !0,
                  fn: function (t) {
                    var e = t.placement,
                      n = e.split("-")[0],
                      i = e.split("-")[1];
                    if (i) {
                      var r = t.offsets,
                        o = r.reference,
                        s = r.popper,
                        a = -1 !== ["bottom", "top"].indexOf(n),
                        l = a ? "left" : "top",
                        c = a ? "width" : "height",
                        u = {
                          start: bt({}, l, o[l]),
                          end: bt({}, l, o[l] + o[c] - s[c]),
                        };
                      t.offsets.popper = wt({}, s, u[i]);
                    }
                    return t;
                  },
                },
                offset: {
                  order: 200,
                  enabled: !0,
                  fn: function (t, e) {
                    var n,
                      i = e.offset,
                      r = t.placement,
                      o = t.offsets,
                      s = o.popper,
                      a = o.reference,
                      u = r.split("-")[0];
                    return (
                      (n = Mt(+i)
                        ? [+i, 0]
                        : (function (t, r, o, e) {
                            var s = [0, 0],
                              a = -1 !== ["right", "left"].indexOf(u),
                              n = t.split(/(\+|\-)/).map(function (t) {
                                return t.trim();
                              }),
                              i = n.indexOf(
                                Ot(n, function (t) {
                                  return -1 !== t.search(/,|\s/);
                                })
                              );
                            n[i] &&
                              -1 === n[i].indexOf(",") &&
                              console.warn(
                                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                              );
                            var l = /\s*,\s*|\s+/,
                              c =
                                -1 !== i
                                  ? [
                                      n.slice(0, i).concat([n[i].split(l)[0]]),
                                      [n[i].split(l)[1]].concat(n.slice(i + 1)),
                                    ]
                                  : [n];
                            return (
                              (c = c.map(function (t, e) {
                                var n = (1 === e ? !a : a) ? "height" : "width",
                                  i = !1;
                                return t
                                  .reduce(function (t, e) {
                                    return "" === t[t.length - 1] &&
                                      -1 !== ["+", "-"].indexOf(e)
                                      ? ((t[t.length - 1] = e), (i = !0), t)
                                      : i
                                      ? ((t[t.length - 1] += e), (i = !1), t)
                                      : t.concat(e);
                                  }, [])
                                  .map(function (t) {
                                    return (function (t, e, n, i) {
                                      var r = t.match(
                                          /((?:\-|\+)?\d*\.?\d*)(.*)/
                                        ),
                                        o = +r[1],
                                        s = r[2];
                                      if (!o) return t;
                                      if (0 !== s.indexOf("%"))
                                        return "vh" === s || "vw" === s
                                          ? (("vh" === s
                                              ? Math.max(
                                                  document.documentElement
                                                    .clientHeight,
                                                  window.innerHeight || 0
                                                )
                                              : Math.max(
                                                  document.documentElement
                                                    .clientWidth,
                                                  window.innerWidth || 0
                                                )) /
                                              100) *
                                              o
                                          : o;
                                      var a = void 0;
                                      switch (s) {
                                        case "%p":
                                          a = n;
                                          break;
                                        case "%":
                                        case "%r":
                                        default:
                                          a = i;
                                      }
                                      return (xt(a)[e] / 100) * o;
                                    })(t, n, r, o);
                                  });
                              })).forEach(function (n, i) {
                                n.forEach(function (t, e) {
                                  Mt(t) &&
                                    (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
                                });
                              }),
                              s
                            );
                          })(i, s, a)),
                      "left" === u
                        ? ((s.top += n[0]), (s.left -= n[1]))
                        : "right" === u
                        ? ((s.top += n[0]), (s.left += n[1]))
                        : "top" === u
                        ? ((s.left += n[0]), (s.top -= n[1]))
                        : "bottom" === u && ((s.left += n[0]), (s.top += n[1])),
                      (t.popper = s),
                      t
                    );
                  },
                  offset: 0,
                },
                preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function (t, i) {
                    var e = i.boundariesElement || dt(t.instance.popper);
                    t.instance.reference === e && (e = dt(e));
                    var r = Dt(
                      t.instance.popper,
                      t.instance.reference,
                      i.padding,
                      e,
                      t.positionFixed
                    );
                    i.boundaries = r;
                    var n = i.priority,
                      o = t.offsets.popper,
                      s = {
                        primary: function (t) {
                          var e = o[t];
                          return (
                            o[t] < r[t] &&
                              !i.escapeWithReference &&
                              (e = Math.max(o[t], r[t])),
                            bt({}, t, e)
                          );
                        },
                        secondary: function (t) {
                          var e = "right" === t ? "left" : "top",
                            n = o[e];
                          return (
                            o[t] > r[t] &&
                              !i.escapeWithReference &&
                              (n = Math.min(
                                o[e],
                                r[t] - ("right" === t ? o.width : o.height)
                              )),
                            bt({}, e, n)
                          );
                        },
                      };
                    return (
                      n.forEach(function (t) {
                        var e =
                          -1 !== ["left", "top"].indexOf(t)
                            ? "primary"
                            : "secondary";
                        o = wt({}, o, s[e](t));
                      }),
                      (t.offsets.popper = o),
                      t
                    );
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent",
                },
                keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function (t) {
                    var e = t.offsets,
                      n = e.popper,
                      i = e.reference,
                      r = t.placement.split("-")[0],
                      o = Math.floor,
                      s = -1 !== ["top", "bottom"].indexOf(r),
                      a = s ? "right" : "bottom",
                      l = s ? "left" : "top",
                      c = s ? "width" : "height";
                    return (
                      n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
                      n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
                      t
                    );
                  },
                },
                arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function (t, e) {
                    var n;
                    if (!Rt(t.instance.modifiers, "arrow", "keepTogether"))
                      return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                      if (!(i = t.instance.popper.querySelector(i))) return t;
                    } else if (!t.instance.popper.contains(i))
                      return (
                        console.warn(
                          "WARNING: `arrow.element` must be child of its popper element!"
                        ),
                        t
                      );
                    var r = t.placement.split("-")[0],
                      o = t.offsets,
                      s = o.popper,
                      a = o.reference,
                      l = -1 !== ["left", "right"].indexOf(r),
                      c = l ? "height" : "width",
                      u = l ? "Top" : "Left",
                      h = u.toLowerCase(),
                      d = l ? "left" : "top",
                      f = l ? "bottom" : "right",
                      p = kt(i)[c];
                    a[f] - p < s[h] &&
                      (t.offsets.popper[h] -= s[h] - (a[f] - p)),
                      a[h] + p > s[f] &&
                        (t.offsets.popper[h] += a[h] + p - s[f]),
                      (t.offsets.popper = xt(t.offsets.popper));
                    var m = a[h] + a[c] / 2 - p / 2,
                      g = at(t.instance.popper),
                      v = parseFloat(g["margin" + u], 10),
                      y = parseFloat(g["border" + u + "Width"], 10),
                      _ = m - t.offsets.popper[h] - v - y;
                    return (
                      (_ = Math.max(Math.min(s[c] - p, _), 0)),
                      (t.arrowElement = i),
                      (t.offsets.arrow =
                        (bt((n = {}), h, Math.round(_)), bt(n, d, ""), n)),
                      t
                    );
                  },
                  element: "[x-arrow]",
                },
                flip: {
                  order: 600,
                  enabled: !0,
                  fn: function (p, m) {
                    if (jt(p.instance.modifiers, "inner")) return p;
                    if (p.flipped && p.placement === p.originalPlacement)
                      return p;
                    var g = Dt(
                        p.instance.popper,
                        p.instance.reference,
                        m.padding,
                        m.boundariesElement,
                        p.positionFixed
                      ),
                      v = p.placement.split("-")[0],
                      y = It(v),
                      _ = p.placement.split("-")[1] || "",
                      b = [];
                    switch (m.behavior) {
                      case "flip":
                        b = [v, y];
                        break;
                      case "clockwise":
                        b = zt(v);
                        break;
                      case "counterclockwise":
                        b = zt(v, !0);
                        break;
                      default:
                        b = m.behavior;
                    }
                    return (
                      b.forEach(function (t, e) {
                        if (v !== t || b.length === e + 1) return p;
                        (v = p.placement.split("-")[0]), (y = It(v));
                        var n,
                          i = p.offsets.popper,
                          r = p.offsets.reference,
                          o = Math.floor,
                          s =
                            ("left" === v && o(i.right) > o(r.left)) ||
                            ("right" === v && o(i.left) < o(r.right)) ||
                            ("top" === v && o(i.bottom) > o(r.top)) ||
                            ("bottom" === v && o(i.top) < o(r.bottom)),
                          a = o(i.left) < o(g.left),
                          l = o(i.right) > o(g.right),
                          c = o(i.top) < o(g.top),
                          u = o(i.bottom) > o(g.bottom),
                          h =
                            ("left" === v && a) ||
                            ("right" === v && l) ||
                            ("top" === v && c) ||
                            ("bottom" === v && u),
                          d = -1 !== ["top", "bottom"].indexOf(v),
                          f =
                            !!m.flipVariations &&
                            ((d && "start" === _ && a) ||
                              (d && "end" === _ && l) ||
                              (!d && "start" === _ && c) ||
                              (!d && "end" === _ && u));
                        (s || h || f) &&
                          ((p.flipped = !0),
                          (s || h) && (v = b[e + 1]),
                          f &&
                            (_ =
                              "end" === (n = _)
                                ? "start"
                                : "start" === n
                                ? "end"
                                : n),
                          (p.placement = v + (_ ? "-" + _ : "")),
                          (p.offsets.popper = wt(
                            {},
                            p.offsets.popper,
                            Nt(
                              p.instance.popper,
                              p.offsets.reference,
                              p.placement
                            )
                          )),
                          (p = Lt(p.instance.modifiers, p, "flip")));
                      }),
                      p
                    );
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport",
                },
                inner: {
                  order: 700,
                  enabled: !1,
                  fn: function (t) {
                    var e = t.placement,
                      n = e.split("-")[0],
                      i = t.offsets,
                      r = i.popper,
                      o = i.reference,
                      s = -1 !== ["left", "right"].indexOf(n),
                      a = -1 === ["top", "left"].indexOf(n);
                    return (
                      (r[s ? "left" : "top"] =
                        o[n] - (a ? r[s ? "width" : "height"] : 0)),
                      (t.placement = It(e)),
                      (t.offsets.popper = xt(r)),
                      t
                    );
                  },
                },
                hide: {
                  order: 800,
                  enabled: !0,
                  fn: function (t) {
                    if (!Rt(t.instance.modifiers, "hide", "preventOverflow"))
                      return t;
                    var e = t.offsets.reference,
                      n = Ot(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name;
                      }).boundaries;
                    if (
                      e.bottom < n.top ||
                      e.left > n.right ||
                      e.top > n.bottom ||
                      e.right < n.left
                    ) {
                      if (!0 === t.hide) return t;
                      (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                    } else {
                      if (!1 === t.hide) return t;
                      (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                    }
                    return t;
                  },
                },
                computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function (t, e) {
                    var n = e.x,
                      i = e.y,
                      r = t.offsets.popper,
                      o = Ot(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name;
                      }).gpuAcceleration;
                    void 0 !== o &&
                      console.warn(
                        "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                      );
                    var s,
                      a,
                      l = void 0 !== o ? o : e.gpuAcceleration,
                      c = Et(dt(t.instance.popper)),
                      u = { position: r.position },
                      h = {
                        left: Math.floor(r.left),
                        top: Math.floor(r.top),
                        bottom: Math.floor(r.bottom),
                        right: Math.floor(r.right),
                      },
                      d = "bottom" === n ? "top" : "bottom",
                      f = "right" === i ? "left" : "right",
                      p = Ft("transform");
                    if (
                      ((a = "bottom" == d ? -c.height + h.bottom : h.top),
                      (s = "right" == f ? -c.width + h.right : h.left),
                      l && p)
                    )
                      (u[p] = "translate3d(" + s + "px, " + a + "px, 0)"),
                        (u[d] = 0),
                        (u[f] = 0),
                        (u.willChange = "transform");
                    else {
                      var m = "bottom" == d ? -1 : 1,
                        g = "right" == f ? -1 : 1;
                      (u[d] = a * m),
                        (u[f] = s * g),
                        (u.willChange = d + ", " + f);
                    }
                    var v = { "x-placement": t.placement };
                    return (
                      (t.attributes = wt({}, v, t.attributes)),
                      (t.styles = wt({}, u, t.styles)),
                      (t.arrowStyles = wt({}, t.offsets.arrow, t.arrowStyles)),
                      t
                    );
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right",
                },
                applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function (t) {
                    var e, n;
                    return (
                      $t(t.instance.popper, t.styles),
                      (e = t.instance.popper),
                      (n = t.attributes),
                      Object.keys(n).forEach(function (t) {
                        !1 !== n[t]
                          ? e.setAttribute(t, n[t])
                          : e.removeAttribute(t);
                      }),
                      t.arrowElement &&
                        Object.keys(t.arrowStyles).length &&
                        $t(t.arrowElement, t.arrowStyles),
                      t
                    );
                  },
                  onLoad: function (t, e, n, i, r) {
                    var o = At(r, e, t, n.positionFixed),
                      s = St(
                        n.placement,
                        o,
                        e,
                        t,
                        n.modifiers.flip.boundariesElement,
                        n.modifiers.flip.padding
                      );
                    return (
                      e.setAttribute("x-placement", s),
                      $t(e, {
                        position: n.positionFixed ? "fixed" : "absolute",
                      }),
                      n
                    );
                  },
                  gpuAcceleration: void 0,
                },
              },
            },
            Bt = (function () {
              function o(t, e) {
                var n = this,
                  i =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (function (t, e) {
                  if (!(t instanceof o))
                    throw new TypeError("Cannot call a class as a function");
                })(this),
                  (this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update);
                  }),
                  (this.update = ot(this.update.bind(this))),
                  (this.options = wt({}, o.Defaults, i)),
                  (this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: [],
                  }),
                  (this.reference = t && t.jquery ? t[0] : t),
                  (this.popper = e && e.jquery ? e[0] : e),
                  (this.options.modifiers = {}),
                  Object.keys(
                    wt({}, o.Defaults.modifiers, i.modifiers)
                  ).forEach(function (t) {
                    n.options.modifiers[t] = wt(
                      {},
                      o.Defaults.modifiers[t] || {},
                      i.modifiers ? i.modifiers[t] : {}
                    );
                  }),
                  (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function (t) {
                      return wt({ name: t }, n.options.modifiers[t]);
                    })
                    .sort(function (t, e) {
                      return t.order - e.order;
                    })),
                  this.modifiers.forEach(function (t) {
                    t.enabled &&
                      st(t.onLoad) &&
                      t.onLoad(n.reference, n.popper, n.options, t, n.state);
                  }),
                  this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(),
                  (this.state.eventsEnabled = r);
              }
              return (
                _t(o, [
                  {
                    key: "update",
                    value: function () {
                      return function () {
                        if (!this.state.isDestroyed) {
                          var t = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {},
                          };
                          (t.offsets.reference = At(
                            this.state,
                            this.popper,
                            this.reference,
                            this.options.positionFixed
                          )),
                            (t.placement = St(
                              this.options.placement,
                              t.offsets.reference,
                              this.popper,
                              this.reference,
                              this.options.modifiers.flip.boundariesElement,
                              this.options.modifiers.flip.padding
                            )),
                            (t.originalPlacement = t.placement),
                            (t.positionFixed = this.options.positionFixed),
                            (t.offsets.popper = Nt(
                              this.popper,
                              t.offsets.reference,
                              t.placement
                            )),
                            (t.offsets.popper.position = this.options
                              .positionFixed
                              ? "fixed"
                              : "absolute"),
                            (t = Lt(this.modifiers, t)),
                            this.state.isCreated
                              ? this.options.onUpdate(t)
                              : ((this.state.isCreated = !0),
                                this.options.onCreate(t));
                        }
                      }.call(this);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      return function () {
                        return (
                          (this.state.isDestroyed = !0),
                          jt(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[Ft("transform")] = "")),
                          this.disableEventListeners(),
                          this.options.removeOnDestroy &&
                            this.popper.parentNode.removeChild(this.popper),
                          this
                        );
                      }.call(this);
                    },
                  },
                  {
                    key: "enableEventListeners",
                    value: function () {
                      return function () {
                        this.state.eventsEnabled ||
                          (this.state = (function (t, e, n, i) {
                            (n.updateBound = i),
                              Pt(t).addEventListener("resize", n.updateBound, {
                                passive: !0,
                              });
                            var r = ct(t);
                            return (
                              (function t(e, n, i, r) {
                                var o = "BODY" === e.nodeName,
                                  s = o ? e.ownerDocument.defaultView : e;
                                s.addEventListener(n, i, { passive: !0 }),
                                  o || t(ct(s.parentNode), n, i, r),
                                  r.push(s);
                              })(r, "scroll", n.updateBound, n.scrollParents),
                              (n.scrollElement = r),
                              (n.eventsEnabled = !0),
                              n
                            );
                          })(
                            this.reference,
                            this.options,
                            this.state,
                            this.scheduleUpdate
                          ));
                      }.call(this);
                    },
                  },
                  {
                    key: "disableEventListeners",
                    value: function () {
                      return function () {
                        var t, e;
                        this.state.eventsEnabled &&
                          (cancelAnimationFrame(this.scheduleUpdate),
                          (this.state =
                            ((t = this.reference),
                            (e = this.state),
                            Pt(t).removeEventListener("resize", e.updateBound),
                            e.scrollParents.forEach(function (t) {
                              t.removeEventListener("scroll", e.updateBound);
                            }),
                            (e.updateBound = null),
                            (e.scrollParents = []),
                            (e.scrollElement = null),
                            (e.eventsEnabled = !1),
                            e)));
                      }.call(this);
                    },
                  },
                ]),
                o
              );
            })();
          (Bt.Utils = (
            "undefined" != typeof window ? window : global
          ).PopperUtils),
            (Bt.placements = Ht),
            (Bt.Defaults = Wt);
          var Ut,
            Vt,
            Qt,
            Kt,
            Xt,
            Yt,
            Gt,
            Zt,
            Jt,
            te,
            ee,
            ne,
            ie,
            re,
            oe,
            se,
            ae,
            le,
            ce,
            ue,
            he,
            de,
            fe,
            pe,
            me,
            ge,
            ve,
            ye,
            _e,
            be,
            we,
            xe,
            Ee,
            Te,
            Ce,
            De,
            Se,
            Ae,
            ke,
            Ie,
            Ne,
            Oe,
            Le,
            je,
            Fe,
            Pe,
            Me,
            $e,
            Re,
            He,
            qe,
            ze,
            We,
            Be,
            Ue,
            Ve,
            Qe,
            Ke,
            Xe,
            Ye,
            Ge,
            Ze,
            Je,
            tn,
            en,
            nn,
            rn,
            on,
            sn,
            an,
            ln,
            cn,
            un,
            hn,
            dn,
            fn,
            pn,
            mn,
            gn =
              ((Vt = "dropdown"),
              (Kt = "." + (Qt = "bs.dropdown")),
              (Xt = ".data-api"),
              (Yt = (Ut = e).fn[Vt]),
              (Gt = new RegExp("38|40|27")),
              (Zt = {
                HIDE: "hide" + Kt,
                HIDDEN: "hidden" + Kt,
                SHOW: "show" + Kt,
                SHOWN: "shown" + Kt,
                CLICK: "click" + Kt,
                CLICK_DATA_API: "click" + Kt + Xt,
                KEYDOWN_DATA_API: "keydown" + Kt + Xt,
                KEYUP_DATA_API: "keyup" + Kt + Xt,
              }),
              (Jt = "disabled"),
              (te = "show"),
              (ee = "dropdown-menu-right"),
              (ne = '[data-toggle="dropdown"]'),
              (ie = ".dropdown-menu"),
              (re = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
              }),
              (oe = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
              }),
              (se = (function () {
                function l(t, e) {
                  (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
                }
                var t = l.prototype;
                return (
                  (t.toggle = function () {
                    if (
                      !this._element.disabled &&
                      !Ut(this._element).hasClass(Jt)
                    ) {
                      var t = l._getParentFromElement(this._element),
                        e = Ut(this._menu).hasClass(te);
                      if ((l._clearMenus(), !e)) {
                        var n = { relatedTarget: this._element },
                          i = Ut.Event(Zt.SHOW, n);
                        if ((Ut(t).trigger(i), !i.isDefaultPrevented())) {
                          if (!this._inNavbar) {
                            if (void 0 === Bt)
                              throw new TypeError(
                                "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                              );
                            var r = this._element;
                            "parent" === this._config.reference
                              ? (r = t)
                              : Y.isElement(this._config.reference) &&
                                ((r = this._config.reference),
                                void 0 !== this._config.reference.jquery &&
                                  (r = this._config.reference[0])),
                              "scrollParent" !== this._config.boundary &&
                                Ut(t).addClass("position-static"),
                              (this._popper = new Bt(
                                r,
                                this._menu,
                                this._getPopperConfig()
                              ));
                          }
                          "ontouchstart" in document.documentElement &&
                            0 === Ut(t).closest(".navbar-nav").length &&
                            Ut(document.body)
                              .children()
                              .on("mouseover", null, Ut.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            Ut(this._menu).toggleClass(te),
                            Ut(t)
                              .toggleClass(te)
                              .trigger(Ut.Event(Zt.SHOWN, n));
                        }
                      }
                    }
                  }),
                  (t.dispose = function () {
                    Ut.removeData(this._element, Qt),
                      Ut(this._element).off(Kt),
                      (this._element = null),
                      (this._menu = null) !== this._popper &&
                        (this._popper.destroy(), (this._popper = null));
                  }),
                  (t.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                      null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (t._addEventListeners = function () {
                    var e = this;
                    Ut(this._element).on(Zt.CLICK, function (t) {
                      t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                  }),
                  (t._getConfig = function (t) {
                    return (
                      (t = c(
                        {},
                        this.constructor.Default,
                        Ut(this._element).data(),
                        t
                      )),
                      Y.typeCheckConfig(Vt, t, this.constructor.DefaultType),
                      t
                    );
                  }),
                  (t._getMenuElement = function () {
                    if (!this._menu) {
                      var t = l._getParentFromElement(this._element);
                      this._menu = Ut(t).find(ie)[0];
                    }
                    return this._menu;
                  }),
                  (t._getPlacement = function () {
                    var t = Ut(this._element).parent(),
                      e = "bottom-start";
                    return (
                      t.hasClass("dropup")
                        ? ((e = "top-start"),
                          Ut(this._menu).hasClass(ee) && (e = "top-end"))
                        : t.hasClass("dropright")
                        ? (e = "right-start")
                        : t.hasClass("dropleft")
                        ? (e = "left-start")
                        : Ut(this._menu).hasClass(ee) && (e = "bottom-end"),
                      e
                    );
                  }),
                  (t._detectNavbar = function () {
                    return 0 < Ut(this._element).closest(".navbar").length;
                  }),
                  (t._getPopperConfig = function () {
                    var e = this,
                      t = {};
                    "function" == typeof this._config.offset
                      ? (t.fn = function (t) {
                          return (
                            (t.offsets = c(
                              {},
                              t.offsets,
                              e._config.offset(t.offsets) || {}
                            )),
                            t
                          );
                        })
                      : (t.offset = this._config.offset);
                    var n = {
                      placement: this._getPlacement(),
                      modifiers: {
                        offset: t,
                        flip: { enabled: this._config.flip },
                        preventOverflow: {
                          boundariesElement: this._config.boundary,
                        },
                      },
                    };
                    return (
                      "static" === this._config.display &&
                        (n.modifiers.applyStyle = { enabled: !1 }),
                      n
                    );
                  }),
                  (l._jQueryInterface = function (e) {
                    return this.each(function () {
                      var t = Ut(this).data(Qt);
                      if (
                        (t ||
                          ((t = new l(this, "object" == typeof e ? e : null)),
                          Ut(this).data(Qt, t)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === t[e])
                          throw new TypeError('No method named "' + e + '"');
                        t[e]();
                      }
                    });
                  }),
                  (l._clearMenus = function (t) {
                    if (
                      !t ||
                      (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    )
                      for (
                        var e = Ut.makeArray(Ut(ne)), n = 0;
                        n < e.length;
                        n++
                      ) {
                        var i = l._getParentFromElement(e[n]),
                          r = Ut(e[n]).data(Qt),
                          o = { relatedTarget: e[n] };
                        if (r) {
                          var s = r._menu;
                          if (
                            Ut(i).hasClass(te) &&
                            !(
                              t &&
                              (("click" === t.type &&
                                /input|textarea/i.test(t.target.tagName)) ||
                                ("keyup" === t.type && 9 === t.which)) &&
                              Ut.contains(i, t.target)
                            )
                          ) {
                            var a = Ut.Event(Zt.HIDE, o);
                            Ut(i).trigger(a),
                              a.isDefaultPrevented() ||
                                ("ontouchstart" in document.documentElement &&
                                  Ut(document.body)
                                    .children()
                                    .off("mouseover", null, Ut.noop),
                                e[n].setAttribute("aria-expanded", "false"),
                                Ut(s).removeClass(te),
                                Ut(i)
                                  .removeClass(te)
                                  .trigger(Ut.Event(Zt.HIDDEN, o)));
                          }
                        }
                      }
                  }),
                  (l._getParentFromElement = function (t) {
                    var e,
                      n = Y.getSelectorFromElement(t);
                    return n && (e = Ut(n)[0]), e || t.parentNode;
                  }),
                  (l._dataApiKeydownHandler = function (t) {
                    if (
                      (/input|textarea/i.test(t.target.tagName)
                        ? !(
                            32 === t.which ||
                            (27 !== t.which &&
                              ((40 !== t.which && 38 !== t.which) ||
                                Ut(t.target).closest(ie).length))
                          )
                        : Gt.test(t.which)) &&
                      (t.preventDefault(),
                      t.stopPropagation(),
                      !this.disabled && !Ut(this).hasClass(Jt))
                    ) {
                      var e = l._getParentFromElement(this),
                        n = Ut(e).hasClass(te);
                      if (
                        (n || (27 === t.which && 32 === t.which)) &&
                        (!n || (27 !== t.which && 32 !== t.which))
                      ) {
                        var i = Ut(e)
                          .find(
                            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                          )
                          .get();
                        if (0 !== i.length) {
                          var r = i.indexOf(t.target);
                          38 === t.which && 0 < r && r--,
                            40 === t.which && r < i.length - 1 && r++,
                            r < 0 && (r = 0),
                            i[r].focus();
                        }
                      } else {
                        if (27 === t.which) {
                          var o = Ut(e).find(ne)[0];
                          Ut(o).trigger("focus");
                        }
                        Ut(this).trigger("click");
                      }
                    }
                  }),
                  s(l, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return re;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return oe;
                      },
                    },
                  ]),
                  l
                );
              })()),
              Ut(document)
                .on(Zt.KEYDOWN_DATA_API, ne, se._dataApiKeydownHandler)
                .on(Zt.KEYDOWN_DATA_API, ie, se._dataApiKeydownHandler)
                .on(Zt.CLICK_DATA_API + " " + Zt.KEYUP_DATA_API, se._clearMenus)
                .on(Zt.CLICK_DATA_API, ne, function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    se._jQueryInterface.call(Ut(this), "toggle");
                })
                .on(Zt.CLICK_DATA_API, ".dropdown form", function (t) {
                  t.stopPropagation();
                }),
              (Ut.fn[Vt] = se._jQueryInterface),
              (Ut.fn[Vt].Constructor = se),
              (Ut.fn[Vt].noConflict = function () {
                return (Ut.fn[Vt] = Yt), se._jQueryInterface;
              }),
              se),
            vn =
              ((le = "modal"),
              (ue = "." + (ce = "bs.modal")),
              (he = (ae = e).fn[le]),
              (de = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
              (fe = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean",
              }),
              (pe = {
                HIDE: "hide" + ue,
                HIDDEN: "hidden" + ue,
                SHOW: "show" + ue,
                SHOWN: "shown" + ue,
                FOCUSIN: "focusin" + ue,
                RESIZE: "resize" + ue,
                CLICK_DISMISS: "click.dismiss" + ue,
                KEYDOWN_DISMISS: "keydown.dismiss" + ue,
                MOUSEUP_DISMISS: "mouseup.dismiss" + ue,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + ue,
                CLICK_DATA_API: "click" + ue + ".data-api",
              }),
              (me = "modal-open"),
              (ge = "fade"),
              (ve = "show"),
              (ye = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT:
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler",
              }),
              (_e = (function () {
                function r(t, e) {
                  (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = ae(t).find(ye.DIALOG)[0]),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._scrollbarWidth = 0);
                }
                var t = r.prototype;
                return (
                  (t.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                  }),
                  (t.show = function (t) {
                    var e = this;
                    if (!this._isTransitioning && !this._isShown) {
                      ae(this._element).hasClass(ge) &&
                        (this._isTransitioning = !0);
                      var n = ae.Event(pe.SHOW, { relatedTarget: t });
                      ae(this._element).trigger(n),
                        this._isShown ||
                          n.isDefaultPrevented() ||
                          ((this._isShown = !0),
                          this._checkScrollbar(),
                          this._setScrollbar(),
                          this._adjustDialog(),
                          ae(document.body).addClass(me),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          ae(this._element).on(
                            pe.CLICK_DISMISS,
                            ye.DATA_DISMISS,
                            function (t) {
                              return e.hide(t);
                            }
                          ),
                          ae(this._dialog).on(
                            pe.MOUSEDOWN_DISMISS,
                            function () {
                              ae(e._element).one(
                                pe.MOUSEUP_DISMISS,
                                function (t) {
                                  ae(t.target).is(e._element) &&
                                    (e._ignoreBackdropClick = !0);
                                }
                              );
                            }
                          ),
                          this._showBackdrop(function () {
                            return e._showElement(t);
                          }));
                    }
                  }),
                  (t.hide = function (t) {
                    var e = this;
                    if (
                      (t && t.preventDefault(),
                      !this._isTransitioning && this._isShown)
                    ) {
                      var n = ae.Event(pe.HIDE);
                      if (
                        (ae(this._element).trigger(n),
                        this._isShown && !n.isDefaultPrevented())
                      ) {
                        this._isShown = !1;
                        var i = ae(this._element).hasClass(ge);
                        if (
                          (i && (this._isTransitioning = !0),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          ae(document).off(pe.FOCUSIN),
                          ae(this._element).removeClass(ve),
                          ae(this._element).off(pe.CLICK_DISMISS),
                          ae(this._dialog).off(pe.MOUSEDOWN_DISMISS),
                          i)
                        ) {
                          var r = Y.getTransitionDurationFromElement(
                            this._element
                          );
                          ae(this._element)
                            .one(Y.TRANSITION_END, function (t) {
                              return e._hideModal(t);
                            })
                            .emulateTransitionEnd(r);
                        } else this._hideModal();
                      }
                    }
                  }),
                  (t.dispose = function () {
                    ae.removeData(this._element, ce),
                      ae(window, document, this._element, this._backdrop).off(
                        ue
                      ),
                      (this._config = null),
                      (this._element = null),
                      (this._dialog = null),
                      (this._backdrop = null),
                      (this._isShown = null),
                      (this._isBodyOverflowing = null),
                      (this._ignoreBackdropClick = null),
                      (this._scrollbarWidth = null);
                  }),
                  (t.handleUpdate = function () {
                    this._adjustDialog();
                  }),
                  (t._getConfig = function (t) {
                    return (t = c({}, de, t)), Y.typeCheckConfig(le, t, fe), t;
                  }),
                  (t._showElement = function (t) {
                    var e = this,
                      n = ae(this._element).hasClass(ge);
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType ===
                        Node.ELEMENT_NODE) ||
                      document.body.appendChild(this._element),
                      (this._element.style.display = "block"),
                      this._element.removeAttribute("aria-hidden"),
                      (this._element.scrollTop = 0),
                      n && Y.reflow(this._element),
                      ae(this._element).addClass(ve),
                      this._config.focus && this._enforceFocus();
                    var i = ae.Event(pe.SHOWN, { relatedTarget: t }),
                      r = function () {
                        e._config.focus && e._element.focus(),
                          (e._isTransitioning = !1),
                          ae(e._element).trigger(i);
                      };
                    if (n) {
                      var o = Y.getTransitionDurationFromElement(this._element);
                      ae(this._dialog)
                        .one(Y.TRANSITION_END, r)
                        .emulateTransitionEnd(o);
                    } else r();
                  }),
                  (t._enforceFocus = function () {
                    var e = this;
                    ae(document)
                      .off(pe.FOCUSIN)
                      .on(pe.FOCUSIN, function (t) {
                        document !== t.target &&
                          e._element !== t.target &&
                          0 === ae(e._element).has(t.target).length &&
                          e._element.focus();
                      });
                  }),
                  (t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                      ? ae(this._element).on(pe.KEYDOWN_DISMISS, function (t) {
                          27 === t.which && (t.preventDefault(), e.hide());
                        })
                      : this._isShown ||
                        ae(this._element).off(pe.KEYDOWN_DISMISS);
                  }),
                  (t._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                      ? ae(window).on(pe.RESIZE, function (t) {
                          return e.handleUpdate(t);
                        })
                      : ae(window).off(pe.RESIZE);
                  }),
                  (t._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                      this._element.setAttribute("aria-hidden", !0),
                      (this._isTransitioning = !1),
                      this._showBackdrop(function () {
                        ae(document.body).removeClass(me),
                          t._resetAdjustments(),
                          t._resetScrollbar(),
                          ae(t._element).trigger(pe.HIDDEN);
                      });
                  }),
                  (t._removeBackdrop = function () {
                    this._backdrop &&
                      (ae(this._backdrop).remove(), (this._backdrop = null));
                  }),
                  (t._showBackdrop = function (t) {
                    var e = this,
                      n = ae(this._element).hasClass(ge) ? ge : "";
                    if (this._isShown && this._config.backdrop) {
                      if (
                        ((this._backdrop = document.createElement("div")),
                        (this._backdrop.className = "modal-backdrop"),
                        n && ae(this._backdrop).addClass(n),
                        ae(this._backdrop).appendTo(document.body),
                        ae(this._element).on(pe.CLICK_DISMISS, function (t) {
                          e._ignoreBackdropClick
                            ? (e._ignoreBackdropClick = !1)
                            : t.target === t.currentTarget &&
                              ("static" === e._config.backdrop
                                ? e._element.focus()
                                : e.hide());
                        }),
                        n && Y.reflow(this._backdrop),
                        ae(this._backdrop).addClass(ve),
                        !t)
                      )
                        return;
                      if (!n) return void t();
                      var i = Y.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      ae(this._backdrop)
                        .one(Y.TRANSITION_END, t)
                        .emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                      ae(this._backdrop).removeClass(ve);
                      var r = function () {
                        e._removeBackdrop(), t && t();
                      };
                      if (ae(this._element).hasClass(ge)) {
                        var o = Y.getTransitionDurationFromElement(
                          this._backdrop
                        );
                        ae(this._backdrop)
                          .one(Y.TRANSITION_END, r)
                          .emulateTransitionEnd(o);
                      } else r();
                    } else t && t();
                  }),
                  (t._adjustDialog = function () {
                    var t =
                      this._element.scrollHeight >
                      document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                      t &&
                      (this._element.style.paddingLeft =
                        this._scrollbarWidth + "px"),
                      this._isBodyOverflowing &&
                        !t &&
                        (this._element.style.paddingRight =
                          this._scrollbarWidth + "px");
                  }),
                  (t._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                      (this._element.style.paddingRight = "");
                  }),
                  (t._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                      t.left + t.right < window.innerWidth),
                      (this._scrollbarWidth = this._getScrollbarWidth());
                  }),
                  (t._setScrollbar = function () {
                    var r = this;
                    if (this._isBodyOverflowing) {
                      ae(ye.FIXED_CONTENT).each(function (t, e) {
                        var n = ae(e)[0].style.paddingRight,
                          i = ae(e).css("padding-right");
                        ae(e)
                          .data("padding-right", n)
                          .css(
                            "padding-right",
                            parseFloat(i) + r._scrollbarWidth + "px"
                          );
                      }),
                        ae(ye.STICKY_CONTENT).each(function (t, e) {
                          var n = ae(e)[0].style.marginRight,
                            i = ae(e).css("margin-right");
                          ae(e)
                            .data("margin-right", n)
                            .css(
                              "margin-right",
                              parseFloat(i) - r._scrollbarWidth + "px"
                            );
                        }),
                        ae(ye.NAVBAR_TOGGLER).each(function (t, e) {
                          var n = ae(e)[0].style.marginRight,
                            i = ae(e).css("margin-right");
                          ae(e)
                            .data("margin-right", n)
                            .css(
                              "margin-right",
                              parseFloat(i) + r._scrollbarWidth + "px"
                            );
                        });
                      var t = document.body.style.paddingRight,
                        e = ae(document.body).css("padding-right");
                      ae(document.body)
                        .data("padding-right", t)
                        .css(
                          "padding-right",
                          parseFloat(e) + this._scrollbarWidth + "px"
                        );
                    }
                  }),
                  (t._resetScrollbar = function () {
                    ae(ye.FIXED_CONTENT).each(function (t, e) {
                      var n = ae(e).data("padding-right");
                      void 0 !== n &&
                        ae(e)
                          .css("padding-right", n)
                          .removeData("padding-right");
                    }),
                      ae(ye.STICKY_CONTENT + ", " + ye.NAVBAR_TOGGLER).each(
                        function (t, e) {
                          var n = ae(e).data("margin-right");
                          void 0 !== n &&
                            ae(e)
                              .css("margin-right", n)
                              .removeData("margin-right");
                        }
                      );
                    var t = ae(document.body).data("padding-right");
                    void 0 !== t &&
                      ae(document.body)
                        .css("padding-right", t)
                        .removeData("padding-right");
                  }),
                  (t._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"),
                      document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                  }),
                  (r._jQueryInterface = function (n, i) {
                    return this.each(function () {
                      var t = ae(this).data(ce),
                        e = c(
                          {},
                          r.Default,
                          ae(this).data(),
                          "object" == typeof n && n
                        );
                      if (
                        (t || ((t = new r(this, e)), ae(this).data(ce, t)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === t[n])
                          throw new TypeError('No method named "' + n + '"');
                        t[n](i);
                      } else e.show && t.show(i);
                    });
                  }),
                  s(r, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return de;
                      },
                    },
                  ]),
                  r
                );
              })()),
              ae(document).on(pe.CLICK_DATA_API, ye.DATA_TOGGLE, function (t) {
                var e,
                  n = this,
                  i = Y.getSelectorFromElement(this);
                i && (e = ae(i)[0]);
                var r = ae(e).data(ce)
                  ? "toggle"
                  : c({}, ae(e).data(), ae(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) ||
                  t.preventDefault();
                var o = ae(e).one(pe.SHOW, function (t) {
                  t.isDefaultPrevented() ||
                    o.one(pe.HIDDEN, function () {
                      ae(n).is(":visible") && n.focus();
                    });
                });
                _e._jQueryInterface.call(ae(e), r, this);
              }),
              (ae.fn[le] = _e._jQueryInterface),
              (ae.fn[le].Constructor = _e),
              (ae.fn[le].noConflict = function () {
                return (ae.fn[le] = he), _e._jQueryInterface;
              }),
              _e),
            yn =
              ((we = "tooltip"),
              (Ee = "." + (xe = "bs.tooltip")),
              (Te = (be = e).fn[we]),
              (Ce = "bs-tooltip"),
              (De = new RegExp("(^|\\s)" + Ce + "\\S+", "g")),
              (ke = {
                animation: !0,
                template:
                  '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html:
                  ((Ae = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left",
                  }),
                  !1),
                selector:
                  ((Se = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                  }),
                  !1),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
              }),
              (Ne = {
                HIDE: "hide" + Ee,
                HIDDEN: "hidden" + Ee,
                SHOW: (Ie = "show") + Ee,
                SHOWN: "shown" + Ee,
                INSERTED: "inserted" + Ee,
                CLICK: "click" + Ee,
                FOCUSIN: "focusin" + Ee,
                FOCUSOUT: "focusout" + Ee,
                MOUSEENTER: "mouseenter" + Ee,
                MOUSELEAVE: "mouseleave" + Ee,
              }),
              (Oe = "fade"),
              (Le = "show"),
              (je = "hover"),
              (Fe = "focus"),
              (Pe = (function () {
                function i(t, e) {
                  if (void 0 === Bt)
                    throw new TypeError(
                      "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                    );
                  (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
                }
                var t = i.prototype;
                return (
                  (t.enable = function () {
                    this._isEnabled = !0;
                  }),
                  (t.disable = function () {
                    this._isEnabled = !1;
                  }),
                  (t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                  }),
                  (t.toggle = function (t) {
                    if (this._isEnabled)
                      if (t) {
                        var e = this.constructor.DATA_KEY,
                          n = be(t.currentTarget).data(e);
                        n ||
                          ((n = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                          )),
                          be(t.currentTarget).data(e, n)),
                          (n._activeTrigger.click = !n._activeTrigger.click),
                          n._isWithActiveTrigger()
                            ? n._enter(null, n)
                            : n._leave(null, n);
                      } else {
                        if (be(this.getTipElement()).hasClass(Le))
                          return void this._leave(null, this);
                        this._enter(null, this);
                      }
                  }),
                  (t.dispose = function () {
                    clearTimeout(this._timeout),
                      be.removeData(this.element, this.constructor.DATA_KEY),
                      be(this.element).off(this.constructor.EVENT_KEY),
                      be(this.element).closest(".modal").off("hide.bs.modal"),
                      this.tip && be(this.tip).remove(),
                      (this._isEnabled = null),
                      (this._timeout = null),
                      (this._hoverState = null),
                      (this._activeTrigger = null) !== this._popper &&
                        this._popper.destroy(),
                      (this._popper = null),
                      (this.element = null),
                      (this.config = null),
                      (this.tip = null);
                  }),
                  (t.show = function () {
                    var e = this;
                    if ("none" === be(this.element).css("display"))
                      throw new Error("Please use show on visible elements");
                    var t = be.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                      be(this.element).trigger(t);
                      var n = be.contains(
                        this.element.ownerDocument.documentElement,
                        this.element
                      );
                      if (t.isDefaultPrevented() || !n) return;
                      var i = this.getTipElement(),
                        r = Y.getUID(this.constructor.NAME);
                      i.setAttribute("id", r),
                        this.element.setAttribute("aria-describedby", r),
                        this.setContent(),
                        this.config.animation && be(i).addClass(Oe);
                      var o =
                          "function" == typeof this.config.placement
                            ? this.config.placement.call(this, i, this.element)
                            : this.config.placement,
                        s = this._getAttachment(o);
                      this.addAttachmentClass(s);
                      var a =
                        !1 === this.config.container
                          ? document.body
                          : be(this.config.container);
                      be(i).data(this.constructor.DATA_KEY, this),
                        be.contains(
                          this.element.ownerDocument.documentElement,
                          this.tip
                        ) || be(i).appendTo(a),
                        be(this.element).trigger(
                          this.constructor.Event.INSERTED
                        ),
                        (this._popper = new Bt(this.element, i, {
                          placement: s,
                          modifiers: {
                            offset: { offset: this.config.offset },
                            flip: { behavior: this.config.fallbackPlacement },
                            arrow: { element: ".arrow" },
                            preventOverflow: {
                              boundariesElement: this.config.boundary,
                            },
                          },
                          onCreate: function (t) {
                            t.originalPlacement !== t.placement &&
                              e._handlePopperPlacementChange(t);
                          },
                          onUpdate: function (t) {
                            e._handlePopperPlacementChange(t);
                          },
                        })),
                        be(i).addClass(Le),
                        "ontouchstart" in document.documentElement &&
                          be(document.body)
                            .children()
                            .on("mouseover", null, be.noop);
                      var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        (e._hoverState = null),
                          be(e.element).trigger(e.constructor.Event.SHOWN),
                          "out" === t && e._leave(null, e);
                      };
                      if (be(this.tip).hasClass(Oe)) {
                        var c = Y.getTransitionDurationFromElement(this.tip);
                        be(this.tip)
                          .one(Y.TRANSITION_END, l)
                          .emulateTransitionEnd(c);
                      } else l();
                    }
                  }),
                  (t.hide = function (t) {
                    var e = this,
                      n = this.getTipElement(),
                      i = be.Event(this.constructor.Event.HIDE),
                      r = function () {
                        e._hoverState !== Ie &&
                          n.parentNode &&
                          n.parentNode.removeChild(n),
                          e._cleanTipClass(),
                          e.element.removeAttribute("aria-describedby"),
                          be(e.element).trigger(e.constructor.Event.HIDDEN),
                          null !== e._popper && e._popper.destroy(),
                          t && t();
                      };
                    if (
                      (be(this.element).trigger(i), !i.isDefaultPrevented())
                    ) {
                      if (
                        (be(n).removeClass(Le),
                        "ontouchstart" in document.documentElement &&
                          be(document.body)
                            .children()
                            .off("mouseover", null, be.noop),
                        (this._activeTrigger.click = !1),
                        (this._activeTrigger[Fe] = !1),
                        (this._activeTrigger[je] = !1),
                        be(this.tip).hasClass(Oe))
                      ) {
                        var o = Y.getTransitionDurationFromElement(n);
                        be(n).one(Y.TRANSITION_END, r).emulateTransitionEnd(o);
                      } else r();
                      this._hoverState = "";
                    }
                  }),
                  (t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (t.isWithContent = function () {
                    return Boolean(this.getTitle());
                  }),
                  (t.addAttachmentClass = function (t) {
                    be(this.getTipElement()).addClass(Ce + "-" + t);
                  }),
                  (t.getTipElement = function () {
                    return (
                      (this.tip = this.tip || be(this.config.template)[0]),
                      this.tip
                    );
                  }),
                  (t.setContent = function () {
                    var t = be(this.getTipElement());
                    this.setElementContent(
                      t.find(".tooltip-inner"),
                      this.getTitle()
                    ),
                      t.removeClass(Oe + " " + Le);
                  }),
                  (t.setElementContent = function (t, e) {
                    var n = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery)
                      ? n
                        ? be(e).parent().is(t) || t.empty().append(e)
                        : t.text(be(e).text())
                      : t[n ? "html" : "text"](e);
                  }),
                  (t.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                      t ||
                        (t =
                          "function" == typeof this.config.title
                            ? this.config.title.call(this.element)
                            : this.config.title),
                      t
                    );
                  }),
                  (t._getAttachment = function (t) {
                    return Ae[t.toUpperCase()];
                  }),
                  (t._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                      if ("click" === t)
                        be(i.element).on(
                          i.constructor.Event.CLICK,
                          i.config.selector,
                          function (t) {
                            return i.toggle(t);
                          }
                        );
                      else if ("manual" !== t) {
                        var e =
                            t === je
                              ? i.constructor.Event.MOUSEENTER
                              : i.constructor.Event.FOCUSIN,
                          n =
                            t === je
                              ? i.constructor.Event.MOUSELEAVE
                              : i.constructor.Event.FOCUSOUT;
                        be(i.element)
                          .on(e, i.config.selector, function (t) {
                            return i._enter(t);
                          })
                          .on(n, i.config.selector, function (t) {
                            return i._leave(t);
                          });
                      }
                      be(i.element)
                        .closest(".modal")
                        .on("hide.bs.modal", function () {
                          return i.hide();
                        });
                    }),
                      this.config.selector
                        ? (this.config = c({}, this.config, {
                            trigger: "manual",
                            selector: "",
                          }))
                        : this._fixTitle();
                  }),
                  (t._fixTitle = function () {
                    var t = typeof this.element.getAttribute(
                      "data-original-title"
                    );
                    (this.element.getAttribute("title") || "string" != t) &&
                      (this.element.setAttribute(
                        "data-original-title",
                        this.element.getAttribute("title") || ""
                      ),
                      this.element.setAttribute("title", ""));
                  }),
                  (t._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || be(t.currentTarget).data(n)) ||
                      ((e = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      be(t.currentTarget).data(n, e)),
                      t &&
                        (e._activeTrigger["focusin" === t.type ? Fe : je] = !0),
                      be(e.getTipElement()).hasClass(Le) || e._hoverState === Ie
                        ? (e._hoverState = Ie)
                        : (clearTimeout(e._timeout),
                          (e._hoverState = Ie),
                          e.config.delay && e.config.delay.show
                            ? (e._timeout = setTimeout(function () {
                                e._hoverState === Ie && e.show();
                              }, e.config.delay.show))
                            : e.show());
                  }),
                  (t._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || be(t.currentTarget).data(n)) ||
                      ((e = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      be(t.currentTarget).data(n, e)),
                      t &&
                        (e._activeTrigger["focusout" === t.type ? Fe : je] =
                          !1),
                      e._isWithActiveTrigger() ||
                        (clearTimeout(e._timeout),
                        (e._hoverState = "out"),
                        e.config.delay && e.config.delay.hide
                          ? (e._timeout = setTimeout(function () {
                              "out" === e._hoverState && e.hide();
                            }, e.config.delay.hide))
                          : e.hide());
                  }),
                  (t._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                      if (this._activeTrigger[t]) return !0;
                    return !1;
                  }),
                  (t._getConfig = function (t) {
                    return (
                      "number" ==
                        typeof (t = c(
                          {},
                          this.constructor.Default,
                          be(this.element).data(),
                          t
                        )).delay &&
                        (t.delay = { show: t.delay, hide: t.delay }),
                      "number" == typeof t.title &&
                        (t.title = t.title.toString()),
                      "number" == typeof t.content &&
                        (t.content = t.content.toString()),
                      Y.typeCheckConfig(we, t, this.constructor.DefaultType),
                      t
                    );
                  }),
                  (t._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                      for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] &&
                          (t[e] = this.config[e]);
                    return t;
                  }),
                  (t._cleanTipClass = function () {
                    var t = be(this.getTipElement()),
                      e = t.attr("class").match(De);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                  }),
                  (t._handlePopperPlacementChange = function (t) {
                    this._cleanTipClass(),
                      this.addAttachmentClass(this._getAttachment(t.placement));
                  }),
                  (t._fixTransition = function () {
                    var t = this.getTipElement(),
                      e = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                      (be(t).removeClass(Oe),
                      (this.config.animation = !1),
                      this.hide(),
                      this.show(),
                      (this.config.animation = e));
                  }),
                  (i._jQueryInterface = function (n) {
                    return this.each(function () {
                      var t = be(this).data(xe),
                        e = "object" == typeof n && n;
                      if (
                        (t || !/dispose|hide/.test(n)) &&
                        (t || ((t = new i(this, e)), be(this).data(xe, t)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === t[n])
                          throw new TypeError('No method named "' + n + '"');
                        t[n]();
                      }
                    });
                  }),
                  s(i, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return ke;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return we;
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return xe;
                      },
                    },
                    {
                      key: "Event",
                      get: function () {
                        return Ne;
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return Ee;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Se;
                      },
                    },
                  ]),
                  i
                );
              })()),
              (be.fn[we] = Pe._jQueryInterface),
              (be.fn[we].Constructor = Pe),
              (be.fn[we].noConflict = function () {
                return (be.fn[we] = Te), Pe._jQueryInterface;
              }),
              Pe),
            _n =
              (($e = "popover"),
              (He = "." + (Re = "bs.popover")),
              (qe = (Me = e).fn[$e]),
              (ze = "bs-popover"),
              (We = new RegExp("(^|\\s)" + ze + "\\S+", "g")),
              (Be = c({}, yn.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                  '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              })),
              (Ue = c({}, yn.DefaultType, {
                content: "(string|element|function)",
              })),
              (Ve = {
                HIDE: "hide" + He,
                HIDDEN: "hidden" + He,
                SHOW: "show" + He,
                SHOWN: "shown" + He,
                INSERTED: "inserted" + He,
                CLICK: "click" + He,
                FOCUSIN: "focusin" + He,
                FOCUSOUT: "focusout" + He,
                MOUSEENTER: "mouseenter" + He,
                MOUSELEAVE: "mouseleave" + He,
              }),
              (Qe = (function (t) {
                var e, n;
                function i() {
                  return t.apply(this, arguments) || this;
                }
                (n = t),
                  ((e = i).prototype = Object.create(n.prototype)),
                  ((e.prototype.constructor = e).__proto__ = n);
                var r = i.prototype;
                return (
                  (r.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                  }),
                  (r.addAttachmentClass = function (t) {
                    Me(this.getTipElement()).addClass(ze + "-" + t);
                  }),
                  (r.getTipElement = function () {
                    return (
                      (this.tip = this.tip || Me(this.config.template)[0]),
                      this.tip
                    );
                  }),
                  (r.setContent = function () {
                    var t = Me(this.getTipElement());
                    this.setElementContent(
                      t.find(".popover-header"),
                      this.getTitle()
                    );
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                      this.setElementContent(t.find(".popover-body"), e),
                      t.removeClass("fade show");
                  }),
                  (r._getContent = function () {
                    return (
                      this.element.getAttribute("data-content") ||
                      this.config.content
                    );
                  }),
                  (r._cleanTipClass = function () {
                    var t = Me(this.getTipElement()),
                      e = t.attr("class").match(We);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                  }),
                  (i._jQueryInterface = function (n) {
                    return this.each(function () {
                      var t = Me(this).data(Re),
                        e = "object" == typeof n ? n : null;
                      if (
                        (t || !/destroy|hide/.test(n)) &&
                        (t || ((t = new i(this, e)), Me(this).data(Re, t)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === t[n])
                          throw new TypeError('No method named "' + n + '"');
                        t[n]();
                      }
                    });
                  }),
                  s(i, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return Be;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return $e;
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return Re;
                      },
                    },
                    {
                      key: "Event",
                      get: function () {
                        return Ve;
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return He;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Ue;
                      },
                    },
                  ]),
                  i
                );
              })(yn)),
              (Me.fn[$e] = Qe._jQueryInterface),
              (Me.fn[$e].Constructor = Qe),
              (Me.fn[$e].noConflict = function () {
                return (Me.fn[$e] = qe), Qe._jQueryInterface;
              }),
              Qe),
            bn =
              ((Xe = "scrollspy"),
              (Ge = "." + (Ye = "bs.scrollspy")),
              (Ze = (Ke = e).fn[Xe]),
              (Je = { offset: 10, method: "auto", target: "" }),
              (tn = {
                offset: "number",
                method: "string",
                target: "(string|element)",
              }),
              (en = {
                ACTIVATE: "activate" + Ge,
                SCROLL: "scroll" + Ge,
                LOAD_DATA_API: "load" + Ge + ".data-api",
              }),
              (nn = "active"),
              (rn = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle",
              }),
              (on = "position"),
              (sn = (function () {
                function n(t, e) {
                  var n = this;
                  (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector =
                      this._config.target +
                      " " +
                      rn.NAV_LINKS +
                      "," +
                      this._config.target +
                      " " +
                      rn.LIST_ITEMS +
                      "," +
                      this._config.target +
                      " " +
                      rn.DROPDOWN_ITEMS),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    Ke(this._scrollElement).on(en.SCROLL, function (t) {
                      return n._process(t);
                    }),
                    this.refresh(),
                    this._process();
                }
                var t = n.prototype;
                return (
                  (t.refresh = function () {
                    var e = this,
                      t =
                        this._scrollElement === this._scrollElement.window
                          ? "offset"
                          : on,
                      r =
                        "auto" === this._config.method
                          ? t
                          : this._config.method,
                      o = r === on ? this._getScrollTop() : 0;
                    (this._offsets = []),
                      (this._targets = []),
                      (this._scrollHeight = this._getScrollHeight()),
                      Ke.makeArray(Ke(this._selector))
                        .map(function (t) {
                          var e,
                            n = Y.getSelectorFromElement(t);
                          if ((n && (e = Ke(n)[0]), e)) {
                            var i = e.getBoundingClientRect();
                            if (i.width || i.height)
                              return [Ke(e)[r]().top + o, n];
                          }
                          return null;
                        })
                        .filter(function (t) {
                          return t;
                        })
                        .sort(function (t, e) {
                          return t[0] - e[0];
                        })
                        .forEach(function (t) {
                          e._offsets.push(t[0]), e._targets.push(t[1]);
                        });
                  }),
                  (t.dispose = function () {
                    Ke.removeData(this._element, Ye),
                      Ke(this._scrollElement).off(Ge),
                      (this._element = null),
                      (this._scrollElement = null),
                      (this._config = null),
                      (this._selector = null),
                      (this._offsets = null),
                      (this._targets = null),
                      (this._activeTarget = null),
                      (this._scrollHeight = null);
                  }),
                  (t._getConfig = function (t) {
                    if ("string" != typeof (t = c({}, Je, t)).target) {
                      var e = Ke(t.target).attr("id");
                      e || ((e = Y.getUID(Xe)), Ke(t.target).attr("id", e)),
                        (t.target = "#" + e);
                    }
                    return Y.typeCheckConfig(Xe, t, tn), t;
                  }),
                  (t._getScrollTop = function () {
                    return this._scrollElement === window
                      ? this._scrollElement.pageYOffset
                      : this._scrollElement.scrollTop;
                  }),
                  (t._getScrollHeight = function () {
                    return (
                      this._scrollElement.scrollHeight ||
                      Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight
                      )
                    );
                  }),
                  (t._getOffsetHeight = function () {
                    return this._scrollElement === window
                      ? window.innerHeight
                      : this._scrollElement.getBoundingClientRect().height;
                  }),
                  (t._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                      e = this._getScrollHeight(),
                      n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                      var i = this._targets[this._targets.length - 1];
                      this._activeTarget !== i && this._activate(i);
                    } else {
                      if (
                        this._activeTarget &&
                        t < this._offsets[0] &&
                        0 < this._offsets[0]
                      )
                        return (this._activeTarget = null), void this._clear();
                      for (var r = this._offsets.length; r--; )
                        this._activeTarget !== this._targets[r] &&
                          t >= this._offsets[r] &&
                          (void 0 === this._offsets[r + 1] ||
                            t < this._offsets[r + 1]) &&
                          this._activate(this._targets[r]);
                    }
                  }),
                  (t._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function (t) {
                      return (
                        t +
                        '[data-target="' +
                        e +
                        '"],' +
                        t +
                        '[href="' +
                        e +
                        '"]'
                      );
                    });
                    var n = Ke(t.join(","));
                    n.hasClass("dropdown-item")
                      ? (n
                          .closest(rn.DROPDOWN)
                          .find(rn.DROPDOWN_TOGGLE)
                          .addClass(nn),
                        n.addClass(nn))
                      : (n.addClass(nn),
                        n
                          .parents(rn.NAV_LIST_GROUP)
                          .prev(rn.NAV_LINKS + ", " + rn.LIST_ITEMS)
                          .addClass(nn),
                        n
                          .parents(rn.NAV_LIST_GROUP)
                          .prev(rn.NAV_ITEMS)
                          .children(rn.NAV_LINKS)
                          .addClass(nn)),
                      Ke(this._scrollElement).trigger(en.ACTIVATE, {
                        relatedTarget: e,
                      });
                  }),
                  (t._clear = function () {
                    Ke(this._selector).filter(rn.ACTIVE).removeClass(nn);
                  }),
                  (n._jQueryInterface = function (e) {
                    return this.each(function () {
                      var t = Ke(this).data(Ye);
                      if (
                        (t ||
                          ((t = new n(this, "object" == typeof e && e)),
                          Ke(this).data(Ye, t)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === t[e])
                          throw new TypeError('No method named "' + e + '"');
                        t[e]();
                      }
                    });
                  }),
                  s(n, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return Je;
                      },
                    },
                  ]),
                  n
                );
              })()),
              Ke(window).on(en.LOAD_DATA_API, function () {
                for (
                  var t = Ke.makeArray(Ke(rn.DATA_SPY)), e = t.length;
                  e--;

                ) {
                  var n = Ke(t[e]);
                  sn._jQueryInterface.call(n, n.data());
                }
              }),
              (Ke.fn[Xe] = sn._jQueryInterface),
              (Ke.fn[Xe].Constructor = sn),
              (Ke.fn[Xe].noConflict = function () {
                return (Ke.fn[Xe] = Ze), sn._jQueryInterface;
              }),
              sn),
            wn =
              ((cn = "." + (ln = "bs.tab")),
              (un = (an = e).fn.tab),
              (hn = {
                HIDE: "hide" + cn,
                HIDDEN: "hidden" + cn,
                SHOW: "show" + cn,
                SHOWN: "shown" + cn,
                CLICK_DATA_API: "click" + cn + ".data-api",
              }),
              (dn = "active"),
              (fn = ".active"),
              (pn = "> li > .active"),
              (mn = (function () {
                function i(t) {
                  this._element = t;
                }
                var t = i.prototype;
                return (
                  (t.show = function () {
                    var n = this;
                    if (
                      !(
                        (this._element.parentNode &&
                          this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE &&
                          an(this._element).hasClass(dn)) ||
                        an(this._element).hasClass("disabled")
                      )
                    ) {
                      var t,
                        i,
                        e = an(this._element).closest(".nav, .list-group")[0],
                        r = Y.getSelectorFromElement(this._element);
                      if (e) {
                        var o = "UL" === e.nodeName ? pn : fn;
                        i = (i = an.makeArray(an(e).find(o)))[i.length - 1];
                      }
                      var s = an.Event(hn.HIDE, {
                          relatedTarget: this._element,
                        }),
                        a = an.Event(hn.SHOW, { relatedTarget: i });
                      if (
                        (i && an(i).trigger(s),
                        an(this._element).trigger(a),
                        !a.isDefaultPrevented() && !s.isDefaultPrevented())
                      ) {
                        r && (t = an(r)[0]), this._activate(this._element, e);
                        var l = function () {
                          var t = an.Event(hn.HIDDEN, {
                              relatedTarget: n._element,
                            }),
                            e = an.Event(hn.SHOWN, { relatedTarget: i });
                          an(i).trigger(t), an(n._element).trigger(e);
                        };
                        t ? this._activate(t, t.parentNode, l) : l();
                      }
                    }
                  }),
                  (t.dispose = function () {
                    an.removeData(this._element, ln), (this._element = null);
                  }),
                  (t._activate = function (t, e, n) {
                    var i = this,
                      r = (
                        "UL" === e.nodeName
                          ? an(e).find(pn)
                          : an(e).children(fn)
                      )[0],
                      o = n && r && an(r).hasClass("fade"),
                      s = function () {
                        return i._transitionComplete(t, r, n);
                      };
                    if (r && o) {
                      var a = Y.getTransitionDurationFromElement(r);
                      an(r).one(Y.TRANSITION_END, s).emulateTransitionEnd(a);
                    } else s();
                  }),
                  (t._transitionComplete = function (t, e, n) {
                    if (e) {
                      an(e).removeClass("show " + dn);
                      var i = an(e.parentNode).find(
                        "> .dropdown-menu .active"
                      )[0];
                      i && an(i).removeClass(dn),
                        "tab" === e.getAttribute("role") &&
                          e.setAttribute("aria-selected", !1);
                    }
                    if (
                      (an(t).addClass(dn),
                      "tab" === t.getAttribute("role") &&
                        t.setAttribute("aria-selected", !0),
                      Y.reflow(t),
                      an(t).addClass("show"),
                      t.parentNode &&
                        an(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                      var r = an(t).closest(".dropdown")[0];
                      r && an(r).find(".dropdown-toggle").addClass(dn),
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                  }),
                  (i._jQueryInterface = function (n) {
                    return this.each(function () {
                      var t = an(this),
                        e = t.data(ln);
                      if (
                        (e || ((e = new i(this)), t.data(ln, e)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === e[n])
                          throw new TypeError('No method named "' + n + '"');
                        e[n]();
                      }
                    });
                  }),
                  s(i, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.0";
                      },
                    },
                  ]),
                  i
                );
              })()),
              an(document).on(
                hn.CLICK_DATA_API,
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                function (t) {
                  t.preventDefault(),
                    mn._jQueryInterface.call(an(this), "show");
                }
              ),
              (an.fn.tab = mn._jQueryInterface),
              (an.fn.tab.Constructor = mn),
              (an.fn.tab.noConflict = function () {
                return (an.fn.tab = un), mn._jQueryInterface;
              }),
              mn);
          !(function (t) {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
              );
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (
              (e[0] < 2 && e[1] < 9) ||
              (1 === e[0] && 9 === e[1] && e[2] < 1) ||
              4 <= e[0]
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
              );
          })(e),
            (t.Util = Y),
            (t.Alert = G),
            (t.Button = Z),
            (t.Carousel = J),
            (t.Collapse = tt),
            (t.Dropdown = gn),
            (t.Modal = vn),
            (t.Popover = _n),
            (t.Scrollspy = bn),
            (t.Tab = wn),
            (t.Tooltip = yn),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (function (t) {
          "use strict";
          "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : t("undefined" != typeof jQuery ? jQuery : window.Zepto);
        })(function (L) {
          "use strict";
          function n(t) {
            var e = t.data;
            t.isDefaultPrevented() ||
              (t.preventDefault(), L(t.target).ajaxSubmit(e));
          }
          function i(t) {
            var e = t.target,
              n = L(e);
            if (!n.is("[type=submit],[type=image]")) {
              var i = n.closest("[type=submit]");
              if (0 === i.length) return;
              e = i[0];
            }
            var r = this;
            if ("image" == (r.clk = e).type)
              if (void 0 !== t.offsetX)
                (r.clk_x = t.offsetX), (r.clk_y = t.offsetY);
              else if ("function" == typeof L.fn.offset) {
                var o = n.offset();
                (r.clk_x = t.pageX - o.left), (r.clk_y = t.pageY - o.top);
              } else
                (r.clk_x = t.pageX - e.offsetLeft),
                  (r.clk_y = t.pageY - e.offsetTop);
            setTimeout(function () {
              r.clk = r.clk_x = r.clk_y = null;
            }, 100);
          }
          function j() {
            if (L.fn.ajaxSubmit.debug) {
              var t =
                "[jquery.form] " + Array.prototype.join.call(arguments, "");
              window.console && window.console.log
                ? window.console.log(t)
                : window.opera &&
                  window.opera.postError &&
                  window.opera.postError(t);
            }
          }
          var _ = {};
          (_.fileapi = void 0 !== L("<input type='file'/>").get(0).files),
            (_.formdata = void 0 !== window.FormData);
          var F = !!L.fn.prop;
          (L.fn.attr2 = function () {
            if (!F) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return (t && t.jquery) || "string" == typeof t
              ? t
              : this.attr.apply(this, arguments);
          }),
            (L.fn.ajaxSubmit = function (k) {
              function t(t) {
                function u(e) {
                  var n = null;
                  try {
                    e.contentWindow && (n = e.contentWindow.document);
                  } catch (t) {
                    j("cannot get iframe.contentWindow document: " + t);
                  }
                  if (n) return n;
                  try {
                    n = e.contentDocument ? e.contentDocument : e.document;
                  } catch (t) {
                    j("cannot get iframe.contentDocument: " + t),
                      (n = e.document);
                  }
                  return n;
                }
                function e() {
                  var t = N.attr2("target"),
                    e = N.attr2("action"),
                    n =
                      N.attr("enctype") ||
                      N.attr("encoding") ||
                      "multipart/form-data";
                  a.setAttribute("target", o),
                    (!I || /post/i.test(I)) && a.setAttribute("method", "POST"),
                    e != d.url && a.setAttribute("action", d.url),
                    d.skipEncodingOverride ||
                      (I && !/post/i.test(I)) ||
                      N.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data",
                      }),
                    d.timeout &&
                      (y = setTimeout(function () {
                        (v = !0), h(b);
                      }, d.timeout));
                  var i = [];
                  try {
                    if (d.extraData)
                      for (var r in d.extraData)
                        d.extraData.hasOwnProperty(r) &&
                          i.push(
                            L.isPlainObject(d.extraData[r]) &&
                              d.extraData[r].hasOwnProperty("name") &&
                              d.extraData[r].hasOwnProperty("value")
                              ? L(
                                  '<input type="hidden" name="' +
                                    d.extraData[r].name +
                                    '">'
                                )
                                  .val(d.extraData[r].value)
                                  .appendTo(a)[0]
                              : L('<input type="hidden" name="' + r + '">')
                                  .val(d.extraData[r])
                                  .appendTo(a)[0]
                          );
                    d.iframeTarget || p.appendTo("body"),
                      m.attachEvent
                        ? m.attachEvent("onload", h)
                        : m.addEventListener("load", h, !1),
                      setTimeout(function t() {
                        try {
                          var e = u(m).readyState;
                          j("state = " + e),
                            e &&
                              "uninitialized" == e.toLowerCase() &&
                              setTimeout(t, 50);
                        } catch (t) {
                          j("Server abort: ", t, " (", t.name, ")"),
                            h(w),
                            y && clearTimeout(y),
                            (y = void 0);
                        }
                      }, 15);
                    try {
                      a.submit();
                    } catch (t) {
                      document.createElement("form").submit.apply(a);
                    }
                  } finally {
                    a.setAttribute("action", e),
                      a.setAttribute("enctype", n),
                      t ? a.setAttribute("target", t) : N.removeAttr("target"),
                      L(i).remove();
                  }
                }
                function h(t) {
                  if (!g.aborted && !T) {
                    if (
                      ((E = u(m)) ||
                        (j("cannot access response document"), (t = w)),
                      t === b && g)
                    )
                      return g.abort("timeout"), void _.reject(g, "timeout");
                    if (t == w && g)
                      return (
                        g.abort("server abort"),
                        void _.reject(g, "error", "server abort")
                      );
                    if ((E && E.location.href != d.iframeSrc) || v) {
                      m.detachEvent
                        ? m.detachEvent("onload", h)
                        : m.removeEventListener("load", h, !1);
                      var e,
                        n = "success";
                      try {
                        if (v) throw "timeout";
                        var i =
                          "xml" == d.dataType || E.XMLDocument || L.isXMLDoc(E);
                        if (
                          (j("isXml=" + i),
                          !i &&
                            window.opera &&
                            (null === E.body || !E.body.innerHTML) &&
                            --C)
                        )
                          return (
                            j("requeing onLoad callback, DOM not available"),
                            void setTimeout(h, 250)
                          );
                        var r = E.body ? E.body : E.documentElement;
                        (g.responseText = r ? r.innerHTML : null),
                          (g.responseXML = E.XMLDocument ? E.XMLDocument : E),
                          i && (d.dataType = "xml"),
                          (g.getResponseHeader = function (t) {
                            return { "content-type": d.dataType }[
                              t.toLowerCase()
                            ];
                          }),
                          r &&
                            ((g.status =
                              Number(r.getAttribute("status")) || g.status),
                            (g.statusText =
                              r.getAttribute("statusText") || g.statusText));
                        var o = (d.dataType || "").toLowerCase(),
                          s = /(json|script|text)/.test(o);
                        if (s || d.textarea) {
                          var a = E.getElementsByTagName("textarea")[0];
                          if (a)
                            (g.responseText = a.value),
                              (g.status =
                                Number(a.getAttribute("status")) || g.status),
                              (g.statusText =
                                a.getAttribute("statusText") || g.statusText);
                          else if (s) {
                            var l = E.getElementsByTagName("pre")[0],
                              c = E.getElementsByTagName("body")[0];
                            l
                              ? (g.responseText = l.textContent
                                  ? l.textContent
                                  : l.innerText)
                              : c &&
                                (g.responseText = c.textContent
                                  ? c.textContent
                                  : c.innerText);
                          }
                        } else
                          "xml" == o &&
                            !g.responseXML &&
                            g.responseText &&
                            (g.responseXML = D(g.responseText));
                        try {
                          x = A(g, o, d);
                        } catch (t) {
                          (n = "parsererror"), (g.error = e = t || n);
                        }
                      } catch (t) {
                        j("error caught: ", t),
                          (n = "error"),
                          (g.error = e = t || n);
                      }
                      g.aborted && (j("upload aborted"), (n = null)),
                        g.status &&
                          (n =
                            (200 <= g.status && g.status < 300) ||
                            304 === g.status
                              ? "success"
                              : "error"),
                        "success" === n
                          ? (d.success &&
                              d.success.call(d.context, x, "success", g),
                            _.resolve(g.responseText, "success", g),
                            f && L.event.trigger("ajaxSuccess", [g, d]))
                          : n &&
                            (void 0 === e && (e = g.statusText),
                            d.error && d.error.call(d.context, g, n, e),
                            _.reject(g, "error", e),
                            f && L.event.trigger("ajaxError", [g, d, e])),
                        f && L.event.trigger("ajaxComplete", [g, d]),
                        f && !--L.active && L.event.trigger("ajaxStop"),
                        d.complete && d.complete.call(d.context, g, n),
                        (T = !0),
                        d.timeout && clearTimeout(y),
                        setTimeout(function () {
                          d.iframeTarget
                            ? p.attr("src", d.iframeSrc)
                            : p.remove(),
                            (g.responseXML = null);
                        }, 100);
                    }
                  }
                }
                var n,
                  i,
                  d,
                  f,
                  o,
                  p,
                  m,
                  g,
                  r,
                  s,
                  v,
                  y,
                  a = N[0],
                  _ = L.Deferred();
                if (
                  ((_.abort = function (t) {
                    g.abort(t);
                  }),
                  t)
                )
                  for (i = 0; i < O.length; i++)
                    (n = L(O[i])),
                      F ? n.prop("disabled", !1) : n.removeAttr("disabled");
                if (
                  (((d = L.extend(!0, {}, L.ajaxSettings, k)).context =
                    d.context || d),
                  (o = "jqFormIO" + new Date().getTime()),
                  d.iframeTarget
                    ? (s = (p = L(d.iframeTarget)).attr2("name"))
                      ? (o = s)
                      : p.attr2("name", o)
                    : (p = L(
                        '<iframe name="' + o + '" src="' + d.iframeSrc + '" />'
                      )).css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px",
                      }),
                  (m = p[0]),
                  (g = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                      var e = "timeout" === t ? "timeout" : "aborted";
                      j("aborting upload... " + e), (this.aborted = 1);
                      try {
                        m.contentWindow.document.execCommand &&
                          m.contentWindow.document.execCommand("Stop");
                      } catch (t) {}
                      p.attr("src", d.iframeSrc),
                        (g.error = e),
                        d.error && d.error.call(d.context, g, e, t),
                        f && L.event.trigger("ajaxError", [g, d, e]),
                        d.complete && d.complete.call(d.context, g, e);
                    },
                  }),
                  (f = d.global) &&
                    0 == L.active++ &&
                    L.event.trigger("ajaxStart"),
                  f && L.event.trigger("ajaxSend", [g, d]),
                  d.beforeSend && !1 === d.beforeSend.call(d.context, g, d))
                )
                  return d.global && L.active--, _.reject(), _;
                if (g.aborted) return _.reject(), _;
                (r = a.clk) &&
                  (s = r.name) &&
                  !r.disabled &&
                  ((d.extraData = d.extraData || {}),
                  (d.extraData[s] = r.value),
                  "image" == r.type &&
                    ((d.extraData[s + ".x"] = a.clk_x),
                    (d.extraData[s + ".y"] = a.clk_y)));
                var b = 1,
                  w = 2,
                  l = L("meta[name=csrf-token]").attr("content"),
                  c = L("meta[name=csrf-param]").attr("content");
                c &&
                  l &&
                  ((d.extraData = d.extraData || {}), (d.extraData[c] = l)),
                  d.forceSync ? e() : setTimeout(e, 10);
                var x,
                  E,
                  T,
                  C = 50,
                  D =
                    L.parseXML ||
                    function (t, e) {
                      return (
                        window.ActiveXObject
                          ? (((e = new ActiveXObject(
                              "Microsoft.XMLDOM"
                            )).async = "false"),
                            e.loadXML(t))
                          : (e = new DOMParser().parseFromString(
                              t,
                              "text/xml"
                            )),
                        e &&
                        e.documentElement &&
                        "parsererror" != e.documentElement.nodeName
                          ? e
                          : null
                      );
                    },
                  S =
                    L.parseJSON ||
                    function (t) {
                      return window.eval("(" + t + ")");
                    },
                  A = function (t, e, n) {
                    var i = t.getResponseHeader("content-type") || "",
                      r = "xml" === e || (!e && 0 <= i.indexOf("xml")),
                      o = r ? t.responseXML : t.responseText;
                    return (
                      r &&
                        "parsererror" === o.documentElement.nodeName &&
                        L.error &&
                        L.error("parsererror"),
                      n && n.dataFilter && (o = n.dataFilter(o, e)),
                      "string" == typeof o &&
                        ("json" === e || (!e && 0 <= i.indexOf("json"))
                          ? (o = S(o))
                          : ("script" === e ||
                              (!e && 0 <= i.indexOf("javascript"))) &&
                            L.globalEval(o)),
                      o
                    );
                  };
                return _;
              }
              if (!this.length)
                return (
                  j(
                    "ajaxSubmit: skipping submit process - no element selected"
                  ),
                  this
                );
              var I,
                e,
                n,
                N = this;
              "function" == typeof k
                ? (k = { success: k })
                : void 0 === k && (k = {}),
                (I = k.type || this.attr2("method")),
                (n =
                  (n =
                    "string" == typeof (e = k.url || this.attr2("action"))
                      ? L.trim(e)
                      : "") ||
                  window.location.href ||
                  "") && (n = (n.match(/^([^#]+)/) || [])[1]),
                (k = L.extend(
                  !0,
                  {
                    url: n,
                    success: L.ajaxSettings.success,
                    type: I || L.ajaxSettings.type,
                    iframeSrc: /^https/i.test(window.location.href || "")
                      ? "javascript:false"
                      : "about:blank",
                  },
                  k
                ));
              var i = {};
              if ((this.trigger("form-pre-serialize", [this, k, i]), i.veto))
                return (
                  j("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
                  this
                );
              if (k.beforeSerialize && !1 === k.beforeSerialize(this, k))
                return (
                  j("ajaxSubmit: submit aborted via beforeSerialize callback"),
                  this
                );
              var r = k.traditional;
              void 0 === r && (r = L.ajaxSettings.traditional);
              var o,
                O = [],
                s = this.formToArray(k.semantic, O);
              if (
                (k.data && ((k.extraData = k.data), (o = L.param(k.data, r))),
                k.beforeSubmit && !1 === k.beforeSubmit(s, this, k))
              )
                return (
                  j("ajaxSubmit: submit aborted via beforeSubmit callback"),
                  this
                );
              if (
                (this.trigger("form-submit-validate", [s, this, k, i]), i.veto)
              )
                return (
                  j(
                    "ajaxSubmit: submit vetoed via form-submit-validate trigger"
                  ),
                  this
                );
              var a = L.param(s, r);
              o && (a = a ? a + "&" + o : o),
                "GET" == k.type.toUpperCase()
                  ? ((k.url += (0 <= k.url.indexOf("?") ? "&" : "?") + a),
                    (k.data = null))
                  : (k.data = a);
              var l = [];
              if (
                (k.resetForm &&
                  l.push(function () {
                    N.resetForm();
                  }),
                k.clearForm &&
                  l.push(function () {
                    N.clearForm(k.includeHidden);
                  }),
                !k.dataType && k.target)
              ) {
                var c = k.success || function () {};
                l.push(function (t) {
                  var e = k.replaceTarget ? "replaceWith" : "html";
                  L(k.target)[e](t).each(c, arguments);
                });
              } else k.success && l.push(k.success);
              if (
                ((k.success = function (t, e, n) {
                  for (
                    var i = k.context || this, r = 0, o = l.length;
                    r < o;
                    r++
                  )
                    l[r].apply(i, [t, e, n || N, N]);
                }),
                k.error)
              ) {
                var u = k.error;
                k.error = function (t, e, n) {
                  var i = k.context || this;
                  u.apply(i, [t, e, n, N]);
                };
              }
              if (k.complete) {
                var h = k.complete;
                k.complete = function (t, e) {
                  var n = k.context || this;
                  h.apply(n, [t, e, N]);
                };
              }
              var d =
                  0 <
                  L("input[type=file]:enabled", this).filter(function () {
                    return "" !== L(this).val();
                  }).length,
                f = "multipart/form-data",
                p = N.attr("enctype") == f || N.attr("encoding") == f,
                m = _.fileapi && _.formdata;
              j("fileAPI :" + m);
              var g,
                v = (d || p) && !m;
              !1 !== k.iframe && (k.iframe || v)
                ? k.closeKeepAlive
                  ? L.get(k.closeKeepAlive, function () {
                      g = t(s);
                    })
                  : (g = t(s))
                : (g =
                    (d || p) && m
                      ? (function (t) {
                          for (var n = new FormData(), e = 0; e < t.length; e++)
                            n.append(t[e].name, t[e].value);
                          if (k.extraData) {
                            var i = (function (t) {
                              var e,
                                n,
                                i = L.param(t, k.traditional).split("&"),
                                r = i.length,
                                o = [];
                              for (e = 0; e < r; e++)
                                (i[e] = i[e].replace(/\+/g, " ")),
                                  (n = i[e].split("=")),
                                  o.push([
                                    decodeURIComponent(n[0]),
                                    decodeURIComponent(n[1]),
                                  ]);
                              return o;
                            })(k.extraData);
                            for (e = 0; e < i.length; e++)
                              i[e] && n.append(i[e][0], i[e][1]);
                          }
                          k.data = null;
                          var r = L.extend(!0, {}, L.ajaxSettings, k, {
                            contentType: !1,
                            processData: !1,
                            cache: !1,
                            type: I || "POST",
                          });
                          k.uploadProgress &&
                            (r.xhr = function () {
                              var t = L.ajaxSettings.xhr();
                              return (
                                t.upload &&
                                  t.upload.addEventListener(
                                    "progress",
                                    function (t) {
                                      var e = 0,
                                        n = t.loaded || t.position,
                                        i = t.total;
                                      t.lengthComputable &&
                                        (e = Math.ceil((n / i) * 100)),
                                        k.uploadProgress(t, n, i, e);
                                    },
                                    !1
                                  ),
                                t
                              );
                            }),
                            (r.data = null);
                          var o = r.beforeSend;
                          return (
                            (r.beforeSend = function (t, e) {
                              (e.data = k.formData ? k.formData : n),
                                o && o.call(this, t, e);
                            }),
                            L.ajax(r)
                          );
                        })(s)
                      : L.ajax(k)),
                N.removeData("jqxhr").data("jqxhr", g);
              for (var y = 0; y < O.length; y++) O[y] = null;
              return this.trigger("form-submit-notify", [this, k]), this;
            }),
            (L.fn.ajaxForm = function (t) {
              if (
                (((t = t || {}).delegation =
                  t.delegation && L.isFunction(L.fn.on)),
                t.delegation || 0 !== this.length)
              )
                return t.delegation
                  ? (L(document)
                      .off("submit.form-plugin", this.selector, n)
                      .off("click.form-plugin", this.selector, i)
                      .on("submit.form-plugin", this.selector, t, n)
                      .on("click.form-plugin", this.selector, t, i),
                    this)
                  : this.ajaxFormUnbind()
                      .bind("submit.form-plugin", t, n)
                      .bind("click.form-plugin", t, i);
              var e = { s: this.selector, c: this.context };
              return (
                !L.isReady && e.s
                  ? (j("DOM not ready, queuing ajaxForm"),
                    L(function () {
                      L(e.s, e.c).ajaxForm(t);
                    }))
                  : j(
                      "terminating; zero elements found by selector" +
                        (L.isReady ? "" : " (DOM not ready)")
                    ),
                this
              );
            }),
            (L.fn.ajaxFormUnbind = function () {
              return this.unbind("submit.form-plugin click.form-plugin");
            }),
            (L.fn.formToArray = function (t, e) {
              var n = [];
              if (0 === this.length) return n;
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                h = this[0],
                d = this.attr("id"),
                f = t ? h.getElementsByTagName("*") : h.elements;
              if (
                (f &&
                  !/MSIE [678]/.test(navigator.userAgent) &&
                  (f = L(f).get()),
                d &&
                  (i = L(':input[form="' + d + '"]').get()).length &&
                  (f = (f || []).concat(i)),
                !f || !f.length)
              )
                return n;
              for (r = 0, c = f.length; r < c; r++)
                if ((s = (l = f[r]).name) && !l.disabled)
                  if (t && h.clk && "image" == l.type)
                    h.clk == l &&
                      (n.push({ name: s, value: L(l).val(), type: l.type }),
                      n.push(
                        { name: s + ".x", value: h.clk_x },
                        { name: s + ".y", value: h.clk_y }
                      ));
                  else if ((a = L.fieldValue(l, !0)) && a.constructor == Array)
                    for (e && e.push(l), o = 0, u = a.length; o < u; o++)
                      n.push({ name: s, value: a[o] });
                  else if (_.fileapi && "file" == l.type) {
                    e && e.push(l);
                    var p = l.files;
                    if (p.length)
                      for (o = 0; o < p.length; o++)
                        n.push({ name: s, value: p[o], type: l.type });
                    else n.push({ name: s, value: "", type: l.type });
                  } else
                    null != a &&
                      (e && e.push(l),
                      n.push({
                        name: s,
                        value: a,
                        type: l.type,
                        required: l.required,
                      }));
              if (!t && h.clk) {
                var m = L(h.clk),
                  g = m[0];
                (s = g.name) &&
                  !g.disabled &&
                  "image" == g.type &&
                  (n.push({ name: s, value: m.val() }),
                  n.push(
                    { name: s + ".x", value: h.clk_x },
                    { name: s + ".y", value: h.clk_y }
                  ));
              }
              return n;
            }),
            (L.fn.formSerialize = function (t) {
              return L.param(this.formToArray(t));
            }),
            (L.fn.fieldSerialize = function (r) {
              var o = [];
              return (
                this.each(function () {
                  var t = this.name;
                  if (t) {
                    var e = L.fieldValue(this, r);
                    if (e && e.constructor == Array)
                      for (var n = 0, i = e.length; n < i; n++)
                        o.push({ name: t, value: e[n] });
                    else null != e && o.push({ name: this.name, value: e });
                  }
                }),
                L.param(o)
              );
            }),
            (L.fn.fieldValue = function (t) {
              for (var e = [], n = 0, i = this.length; n < i; n++) {
                var r = this[n],
                  o = L.fieldValue(r, t);
                null == o ||
                  (o.constructor == Array && !o.length) ||
                  (o.constructor == Array ? L.merge(e, o) : e.push(o));
              }
              return e;
            }),
            (L.fieldValue = function (t, e) {
              var n = t.name,
                i = t.type,
                r = t.tagName.toLowerCase();
              if (
                (void 0 === e && (e = !0),
                e &&
                  (!n ||
                    t.disabled ||
                    "reset" == i ||
                    "button" == i ||
                    (("checkbox" == i || "radio" == i) && !t.checked) ||
                    (("submit" == i || "image" == i) &&
                      t.form &&
                      t.form.clk != t) ||
                    ("select" == r && -1 == t.selectedIndex)))
              )
                return null;
              if ("select" != r) return L(t).val();
              var o = t.selectedIndex;
              if (o < 0) return null;
              for (
                var s = [],
                  a = t.options,
                  l = "select-one" == i,
                  c = l ? o + 1 : a.length,
                  u = l ? o : 0;
                u < c;
                u++
              ) {
                var h = a[u];
                if (h.selected) {
                  var d = h.value;
                  if (
                    (d ||
                      (d =
                        h.attributes &&
                        h.attributes.value &&
                        !h.attributes.value.specified
                          ? h.text
                          : h.value),
                    l)
                  )
                    return d;
                  s.push(d);
                }
              }
              return s;
            }),
            (L.fn.clearForm = function (t) {
              return this.each(function () {
                L("input,select,textarea", this).clearFields(t);
              });
            }),
            (L.fn.clearFields = L.fn.clearInputs =
              function (n) {
                var i =
                  /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                return this.each(function () {
                  var t = this.type,
                    e = this.tagName.toLowerCase();
                  i.test(t) || "textarea" == e
                    ? (this.value = "")
                    : "checkbox" == t || "radio" == t
                    ? (this.checked = !1)
                    : "select" == e
                    ? (this.selectedIndex = -1)
                    : "file" == t
                    ? /MSIE/.test(navigator.userAgent)
                      ? L(this).replaceWith(L(this).clone(!0))
                      : L(this).val("")
                    : n &&
                      ((!0 === n && /hidden/.test(t)) ||
                        ("string" == typeof n && L(this).is(n))) &&
                      (this.value = "");
                });
              }),
            (L.fn.resetForm = function () {
              return this.each(function () {
                ("function" == typeof this.reset ||
                  ("object" == typeof this.reset && !this.reset.nodeType)) &&
                  this.reset();
              });
            }),
            (L.fn.enable = function (t) {
              return (
                void 0 === t && (t = !0),
                this.each(function () {
                  this.disabled = !t;
                })
              );
            }),
            (L.fn.selected = function (n) {
              return (
                void 0 === n && (n = !0),
                this.each(function () {
                  var t = this.type;
                  if ("checkbox" == t || "radio" == t) this.checked = n;
                  else if ("option" == this.tagName.toLowerCase()) {
                    var e = L(this).parent("select");
                    n &&
                      e[0] &&
                      "select-one" == e[0].type &&
                      e.find("option").selected(!1),
                      (this.selected = n);
                  }
                })
              );
            }),
            (L.fn.ajaxSubmit.debug = !1);
        }),
        (function (c) {
          c.extend(c.fn, {
            validate: function (t) {
              if (this.length) {
                var n = c.data(this[0], "validator");
                return (
                  n ||
                  (this.attr("novalidate", "novalidate"),
                  (n = new c.validator(t, this[0])),
                  c.data(this[0], "validator", n),
                  n.settings.onsubmit &&
                    (this.validateDelegate(":submit", "click", function (t) {
                      n.settings.submitHandler && (n.submitButton = t.target),
                        c(t.target).hasClass("cancel") && (n.cancelSubmit = !0),
                        void 0 !== c(t.target).attr("formnovalidate") &&
                          (n.cancelSubmit = !0);
                    }),
                    this.submit(function (e) {
                      function t() {
                        var t;
                        return (
                          !n.settings.submitHandler ||
                          (n.submitButton &&
                            (t = c("<input type='hidden'/>")
                              .attr("name", n.submitButton.name)
                              .val(c(n.submitButton).val())
                              .appendTo(n.currentForm)),
                          n.settings.submitHandler.call(n, n.currentForm, e),
                          n.submitButton && t.remove(),
                          !1)
                        );
                      }
                      return (
                        n.settings.debug && e.preventDefault(),
                        n.cancelSubmit
                          ? ((n.cancelSubmit = !1), t())
                          : n.form()
                          ? n.pendingRequest
                            ? !(n.formSubmitted = !0)
                            : t()
                          : (n.focusInvalid(), !1)
                      );
                    })),
                  n)
                );
              }
              t &&
                t.debug &&
                window.console &&
                console.warn(
                  "Nothing selected, can't validate, returning nothing."
                );
            },
            valid: function () {
              var t, e;
              return (
                c(this[0]).is("form")
                  ? (t = this.validate().form())
                  : ((t = !0),
                    (e = c(this[0].form).validate()),
                    this.each(function () {
                      t = e.element(this) && t;
                    })),
                t
              );
            },
            removeAttrs: function (t) {
              var n = {},
                i = this;
              return (
                c.each(t.split(/\s/), function (t, e) {
                  (n[e] = i.attr(e)), i.removeAttr(e);
                }),
                n
              );
            },
            rules: function (t, e) {
              var n,
                i,
                r,
                o,
                s,
                a,
                l = this[0];
              if (t)
                switch (
                  ((n = c.data(l.form, "validator").settings),
                  (i = n.rules),
                  (r = c.validator.staticRules(l)),
                  t)
                ) {
                  case "add":
                    c.extend(r, c.validator.normalizeRule(e)),
                      delete r.messages,
                      (i[l.name] = r),
                      e.messages &&
                        (n.messages[l.name] = c.extend(
                          n.messages[l.name],
                          e.messages
                        ));
                    break;
                  case "remove":
                    return e
                      ? ((a = {}),
                        c.each(e.split(/\s/), function (t, e) {
                          (a[e] = r[e]),
                            delete r[e],
                            "required" === e &&
                              c(l).removeAttr("aria-required");
                        }),
                        a)
                      : (delete i[l.name], r);
                }
              return (
                (o = c.validator.normalizeRules(
                  c.extend(
                    {},
                    c.validator.classRules(l),
                    c.validator.attributeRules(l),
                    c.validator.dataRules(l),
                    c.validator.staticRules(l)
                  ),
                  l
                )).required &&
                  ((s = o.required),
                  delete o.required,
                  (o = c.extend({ required: s }, o)),
                  c(l).attr("aria-required", "true")),
                o.remote &&
                  ((s = o.remote),
                  delete o.remote,
                  (o = c.extend(o, { remote: s }))),
                o
              );
            },
          }),
            c.extend(c.expr[":"], {
              blank: function (t) {
                return !c.trim("" + c(t).val());
              },
              filled: function (t) {
                return !!c.trim("" + c(t).val());
              },
              unchecked: function (t) {
                return !c(t).prop("checked");
              },
            }),
            (c.validator = function (t, e) {
              (this.settings = c.extend(!0, {}, c.validator.defaults, t)),
                (this.currentForm = e),
                this.init();
            }),
            (c.validator.format = function (n, t) {
              return 1 === arguments.length
                ? function () {
                    var t = c.makeArray(arguments);
                    return t.unshift(n), c.validator.format.apply(this, t);
                  }
                : (2 < arguments.length &&
                    t.constructor !== Array &&
                    (t = c.makeArray(arguments).slice(1)),
                  t.constructor !== Array && (t = [t]),
                  c.each(t, function (t, e) {
                    n = n.replace(
                      new RegExp("\\{" + t + "\\}", "g"),
                      function () {
                        return e;
                      }
                    );
                  }),
                  n);
            }),
            c.extend(c.validator, {
              defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: c([]),
                errorLabelContainer: c([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                  (this.lastActive = t),
                    this.settings.focusCleanup &&
                      !this.blockFocusCleanup &&
                      (this.settings.unhighlight &&
                        this.settings.unhighlight.call(
                          this,
                          t,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.addWrapper(this.errorsFor(t)).hide());
                },
                onfocusout: function (t) {
                  this.checkable(t) ||
                    (!(t.name in this.submitted) && this.optional(t)) ||
                    this.element(t);
                },
                onkeyup: function (t, e) {
                  (9 !== e.which || "" !== this.elementValue(t)) &&
                    (t.name in this.submitted || t === this.lastElement) &&
                    this.element(t);
                },
                onclick: function (t) {
                  t.name in this.submitted
                    ? this.element(t)
                    : t.parentNode.name in this.submitted &&
                      this.element(t.parentNode);
                },
                highlight: function (t, e, n) {
                  "radio" === t.type
                    ? this.findByName(t.name).addClass(e).removeClass(n)
                    : c(t).addClass(e).removeClass(n);
                },
                unhighlight: function (t, e, n) {
                  "radio" === t.type
                    ? this.findByName(t.name).removeClass(e).addClass(n)
                    : c(t).removeClass(e).addClass(n);
                },
              },
              setDefaults: function (t) {
                c.extend(c.validator.defaults, t);
              },
              messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: c.validator.format(
                  "Please enter no more than {0} characters."
                ),
                minlength: c.validator.format(
                  "Please enter at least {0} characters."
                ),
                rangelength: c.validator.format(
                  "Please enter a value between {0} and {1} characters long."
                ),
                range: c.validator.format(
                  "Please enter a value between {0} and {1}."
                ),
                max: c.validator.format(
                  "Please enter a value less than or equal to {0}."
                ),
                min: c.validator.format(
                  "Please enter a value greater than or equal to {0}."
                ),
              },
              autoCreateRanges: !1,
              prototype: {
                init: function () {
                  function t(t) {
                    var e = c.data(this[0].form, "validator"),
                      n = "on" + t.type.replace(/^validate/, ""),
                      i = e.settings;
                    i[n] && !this.is(i.ignore) && i[n].call(e, this[0], t);
                  }
                  (this.labelContainer = c(this.settings.errorLabelContainer)),
                    (this.errorContext =
                      (this.labelContainer.length && this.labelContainer) ||
                      c(this.currentForm)),
                    (this.containers = c(this.settings.errorContainer).add(
                      this.settings.errorLabelContainer
                    )),
                    (this.submitted = {}),
                    (this.valueCache = {}),
                    (this.pendingRequest = 0),
                    (this.pending = {}),
                    (this.invalid = {}),
                    this.reset();
                  var n,
                    i = (this.groups = {});
                  c.each(this.settings.groups, function (n, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                      c.each(t, function (t, e) {
                        i[e] = n;
                      });
                  }),
                    (n = this.settings.rules),
                    c.each(n, function (t, e) {
                      n[t] = c.validator.normalizeRule(e);
                    }),
                    c(this.currentForm)
                      .validateDelegate(
                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                        "focusin focusout keyup",
                        t
                      )
                      .validateDelegate(
                        "[type='radio'], [type='checkbox'], select, option",
                        "click",
                        t
                      ),
                    this.settings.invalidHandler &&
                      c(this.currentForm).bind(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                      ),
                    c(this.currentForm)
                      .find("[required], [data-rule-required], .required")
                      .attr("aria-required", "true");
                },
                form: function () {
                  return (
                    this.checkForm(),
                    c.extend(this.submitted, this.errorMap),
                    (this.invalid = c.extend({}, this.errorMap)),
                    this.valid() ||
                      c(this.currentForm).triggerHandler("invalid-form", [
                        this,
                      ]),
                    this.showErrors(),
                    this.valid()
                  );
                },
                checkForm: function () {
                  this.prepareForm();
                  for (
                    var t = 0, e = (this.currentElements = this.elements());
                    e[t];
                    t++
                  )
                    this.check(e[t]);
                  return this.valid();
                },
                element: function (t) {
                  var e = this.clean(t),
                    n = this.validationTargetFor(e),
                    i = !0;
                  return (
                    void 0 === (this.lastElement = n)
                      ? delete this.invalid[e.name]
                      : (this.prepareElement(n),
                        (this.currentElements = c(n)),
                        (i = !1 !== this.check(n))
                          ? delete this.invalid[n.name]
                          : (this.invalid[n.name] = !0)),
                    c(t).attr("aria-invalid", !i),
                    this.numberOfInvalids() ||
                      (this.toHide = this.toHide.add(this.containers)),
                    this.showErrors(),
                    i
                  );
                },
                showErrors: function (e) {
                  if (e) {
                    for (var t in (c.extend(this.errorMap, e),
                    (this.errorList = []),
                    e))
                      this.errorList.push({
                        message: e[t],
                        element: this.findByName(t)[0],
                      });
                    this.successList = c.grep(this.successList, function (t) {
                      return !(t.name in e);
                    });
                  }
                  this.settings.showErrors
                    ? this.settings.showErrors.call(
                        this,
                        this.errorMap,
                        this.errorList
                      )
                    : this.defaultShowErrors();
                },
                resetForm: function () {
                  c.fn.resetForm && c(this.currentForm).resetForm(),
                    (this.submitted = {}),
                    (this.lastElement = null),
                    this.prepareForm(),
                    this.hideErrors(),
                    this.elements()
                      .removeClass(this.settings.errorClass)
                      .removeData("previousValue")
                      .removeAttr("aria-invalid");
                },
                numberOfInvalids: function () {
                  return this.objectLength(this.invalid);
                },
                objectLength: function (t) {
                  var e,
                    n = 0;
                  for (e in t) n++;
                  return n;
                },
                hideErrors: function () {
                  this.addWrapper(this.toHide).hide();
                },
                valid: function () {
                  return 0 === this.size();
                },
                size: function () {
                  return this.errorList.length;
                },
                focusInvalid: function () {
                  if (this.settings.focusInvalid)
                    try {
                      c(
                        this.findLastActive() ||
                          (this.errorList.length &&
                            this.errorList[0].element) ||
                          []
                      )
                        .filter(":visible")
                        .focus()
                        .trigger("focusin");
                    } catch (t) {}
                },
                findLastActive: function () {
                  var e = this.lastActive;
                  return (
                    e &&
                    1 ===
                      c.grep(this.errorList, function (t) {
                        return t.element.name === e.name;
                      }).length &&
                    e
                  );
                },
                elements: function () {
                  var t = this,
                    e = {};
                  return c(this.currentForm)
                    .find("input, select, textarea")
                    .not(":submit, :reset, :image, [disabled]")
                    .not(this.settings.ignore)
                    .filter(function () {
                      return (
                        !this.name &&
                          t.settings.debug &&
                          window.console &&
                          console.error("%o has no name assigned", this),
                        !(this.name in e || !t.objectLength(c(this).rules())) &&
                          (e[this.name] = !0)
                      );
                    });
                },
                clean: function (t) {
                  return c(t)[0];
                },
                errors: function () {
                  var t = this.settings.errorClass.split(" ").join(".");
                  return c(
                    this.settings.errorElement + "." + t,
                    this.errorContext
                  );
                },
                reset: function () {
                  (this.successList = []),
                    (this.errorList = []),
                    (this.errorMap = {}),
                    (this.toShow = c([])),
                    (this.toHide = c([])),
                    (this.currentElements = c([]));
                },
                prepareForm: function () {
                  this.reset(),
                    (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (t) {
                  this.reset(), (this.toHide = this.errorsFor(t));
                },
                elementValue: function (t) {
                  var e,
                    n = c(t),
                    i = n.attr("type");
                  return "radio" === i || "checkbox" === i
                    ? c("input[name='" + n.attr("name") + "']:checked").val()
                    : "string" == typeof (e = n.val())
                    ? e.replace(/\r/g, "")
                    : e;
                },
                check: function (t) {
                  t = this.validationTargetFor(this.clean(t));
                  var e,
                    n,
                    i,
                    r = c(t).rules(),
                    o = c.map(r, function (t, e) {
                      return e;
                    }).length,
                    s = !1,
                    a = this.elementValue(t);
                  for (n in r) {
                    i = { method: n, parameters: r[n] };
                    try {
                      if (
                        "dependency-mismatch" ===
                          (e = c.validator.methods[n].call(
                            this,
                            a,
                            t,
                            i.parameters
                          )) &&
                        1 === o
                      ) {
                        s = !0;
                        continue;
                      }
                      if (((s = !1), "pending" === e))
                        return void (this.toHide = this.toHide.not(
                          this.errorsFor(t)
                        ));
                      if (!e) return this.formatAndAdd(t, i), !1;
                    } catch (e) {
                      throw (
                        (this.settings.debug &&
                          window.console &&
                          console.log(
                            "Exception occurred when checking element " +
                              t.id +
                              ", check the '" +
                              i.method +
                              "' method.",
                            e
                          ),
                        e)
                      );
                    }
                  }
                  if (!s)
                    return this.objectLength(r) && this.successList.push(t), !0;
                },
                customDataMessage: function (t, e) {
                  return (
                    c(t).data(
                      "msg" + e[0].toUpperCase() + e.substring(1).toLowerCase()
                    ) || c(t).data("msg")
                  );
                },
                customMessage: function (t, e) {
                  var n = this.settings.messages[t];
                  return n && (n.constructor === String ? n : n[e]);
                },
                findDefined: function () {
                  for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
                },
                defaultMessage: function (t, e) {
                  return this.findDefined(
                    this.customMessage(t.name, e),
                    this.customDataMessage(t, e),
                    (!this.settings.ignoreTitle && t.title) || void 0,
                    c.validator.messages[e],
                    "<strong>Warning: No message defined for " +
                      t.name +
                      "</strong>"
                  );
                },
                formatAndAdd: function (t, e) {
                  var n = this.defaultMessage(t, e.method),
                    i = /\$?\{(\d+)\}/g;
                  "function" == typeof n
                    ? (n = n.call(this, e.parameters, t))
                    : i.test(n) &&
                      (n = c.validator.format(
                        n.replace(i, "{$1}"),
                        e.parameters
                      )),
                    this.errorList.push({
                      message: n,
                      element: t,
                      method: e.method,
                    }),
                    (this.errorMap[t.name] = n),
                    (this.submitted[t.name] = n);
                },
                addWrapper: function (t) {
                  return (
                    this.settings.wrapper &&
                      (t = t.add(t.parent(this.settings.wrapper))),
                    t
                  );
                },
                defaultShowErrors: function () {
                  var t, e, n;
                  for (t = 0; this.errorList[t]; t++)
                    (n = this.errorList[t]),
                      this.settings.highlight &&
                        this.settings.highlight.call(
                          this,
                          n.element,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.showLabel(n.element, n.message);
                  if (
                    (this.errorList.length &&
                      (this.toShow = this.toShow.add(this.containers)),
                    this.settings.success)
                  )
                    for (t = 0; this.successList[t]; t++)
                      this.showLabel(this.successList[t]);
                  if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++)
                      this.settings.unhighlight.call(
                        this,
                        e[t],
                        this.settings.errorClass,
                        this.settings.validClass
                      );
                  (this.toHide = this.toHide.not(this.toShow)),
                    this.hideErrors(),
                    this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                  return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                  return c(this.errorList).map(function () {
                    return this.element;
                  });
                },
                showLabel: function (t, e) {
                  var n = this.errorsFor(t);
                  n.length
                    ? (n
                        .removeClass(this.settings.validClass)
                        .addClass(this.settings.errorClass),
                      n.html(e))
                    : ((n = c("<" + this.settings.errorElement + ">")
                        .attr("for", this.idOrName(t))
                        .addClass(this.settings.errorClass)
                        .html(e || "")),
                      this.settings.wrapper &&
                        (n = n
                          .hide()
                          .show()
                          .wrap("<" + this.settings.wrapper + "/>")
                          .parent()),
                      this.labelContainer.append(n).length ||
                        (this.settings.errorPlacement
                          ? this.settings.errorPlacement(n, c(t))
                          : n.insertAfter(t))),
                    !e &&
                      this.settings.success &&
                      (n.text(""),
                      "string" == typeof this.settings.success
                        ? n.addClass(this.settings.success)
                        : this.settings.success(n, t)),
                    (this.toShow = this.toShow.add(n));
                },
                errorsFor: function (t) {
                  var e = this.idOrName(t);
                  return this.errors().filter(function () {
                    return c(this).attr("for") === e;
                  });
                },
                idOrName: function (t) {
                  return (
                    this.groups[t.name] ||
                    (this.checkable(t) ? t.name : t.id || t.name)
                  );
                },
                validationTargetFor: function (t) {
                  return (
                    this.checkable(t) &&
                      (t = this.findByName(t.name).not(
                        this.settings.ignore
                      )[0]),
                    t
                  );
                },
                checkable: function (t) {
                  return /radio|checkbox/i.test(t.type);
                },
                findByName: function (t) {
                  return c(this.currentForm).find("[name='" + t + "']");
                },
                getLength: function (t, e) {
                  switch (e.nodeName.toLowerCase()) {
                    case "select":
                      return c("option:selected", e).length;
                    case "input":
                      if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked")
                          .length;
                  }
                  return t.length;
                },
                depend: function (t, e) {
                  return (
                    !this.dependTypes[typeof t] ||
                    this.dependTypes[typeof t](t, e)
                  );
                },
                dependTypes: {
                  boolean: function (t) {
                    return t;
                  },
                  string: function (t, e) {
                    return !!c(t, e.form).length;
                  },
                  function: function (t, e) {
                    return t(e);
                  },
                },
                optional: function (t) {
                  var e = this.elementValue(t);
                  return (
                    !c.validator.methods.required.call(this, e, t) &&
                    "dependency-mismatch"
                  );
                },
                startRequest: function (t) {
                  this.pending[t.name] ||
                    (this.pendingRequest++, (this.pending[t.name] = !0));
                },
                stopRequest: function (t, e) {
                  this.pendingRequest--,
                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                    delete this.pending[t.name],
                    e &&
                    0 === this.pendingRequest &&
                    this.formSubmitted &&
                    this.form()
                      ? (c(this.currentForm).submit(),
                        (this.formSubmitted = !1))
                      : !e &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        (c(this.currentForm).triggerHandler("invalid-form", [
                          this,
                        ]),
                        (this.formSubmitted = !1));
                },
                previousValue: function (t) {
                  return (
                    c.data(t, "previousValue") ||
                    c.data(t, "previousValue", {
                      old: null,
                      valid: !0,
                      message: this.defaultMessage(t, "remote"),
                    })
                  );
                },
              },
              classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
              },
              addClassRules: function (t, e) {
                t.constructor === String
                  ? (this.classRuleSettings[t] = e)
                  : c.extend(this.classRuleSettings, t);
              },
              classRules: function (t) {
                var e = {},
                  n = c(t).attr("class");
                return (
                  n &&
                    c.each(n.split(" "), function () {
                      this in c.validator.classRuleSettings &&
                        c.extend(e, c.validator.classRuleSettings[this]);
                    }),
                  e
                );
              },
              attributeRules: function (t) {
                var e,
                  n,
                  i = {},
                  r = c(t),
                  o = t.getAttribute("type");
                for (e in c.validator.methods)
                  (n =
                    "required" === e
                      ? ("" === (n = t.getAttribute(e)) && (n = !0), !!n)
                      : r.attr(e)),
                    /min|max/.test(e) &&
                      (null === o || /number|range|text/.test(o)) &&
                      (n = Number(n)),
                    n || 0 === n
                      ? (i[e] = n)
                      : o === e && "range" !== o && (i[e] = !0);
                return (
                  i.maxlength &&
                    /-1|2147483647|524288/.test(i.maxlength) &&
                    delete i.maxlength,
                  i
                );
              },
              dataRules: function (t) {
                var e,
                  n,
                  i = {},
                  r = c(t);
                for (e in c.validator.methods)
                  void 0 !==
                    (n = r.data(
                      "rule" + e[0].toUpperCase() + e.substring(1).toLowerCase()
                    )) && (i[e] = n);
                return i;
              },
              staticRules: function (t) {
                var e = {},
                  n = c.data(t.form, "validator");
                return (
                  n.settings.rules &&
                    (e =
                      c.validator.normalizeRule(n.settings.rules[t.name]) ||
                      {}),
                  e
                );
              },
              normalizeRules: function (i, r) {
                return (
                  c.each(i, function (t, e) {
                    if (!1 !== e) {
                      if (e.param || e.depends) {
                        var n = !0;
                        switch (typeof e.depends) {
                          case "string":
                            n = !!c(e.depends, r.form).length;
                            break;
                          case "function":
                            n = e.depends.call(r, r);
                        }
                        n
                          ? (i[t] = void 0 === e.param || e.param)
                          : delete i[t];
                      }
                    } else delete i[t];
                  }),
                  c.each(i, function (t, e) {
                    i[t] = c.isFunction(e) ? e(r) : e;
                  }),
                  c.each(["minlength", "maxlength"], function () {
                    i[this] && (i[this] = Number(i[this]));
                  }),
                  c.each(["rangelength", "range"], function () {
                    var t;
                    i[this] &&
                      (c.isArray(i[this])
                        ? (i[this] = [Number(i[this][0]), Number(i[this][1])])
                        : "string" == typeof i[this] &&
                          ((t = i[this].split(/[\s,]+/)),
                          (i[this] = [Number(t[0]), Number(t[1])])));
                  }),
                  c.validator.autoCreateRanges &&
                    (i.min &&
                      i.max &&
                      ((i.range = [i.min, i.max]), delete i.min, delete i.max),
                    i.minlength &&
                      i.maxlength &&
                      ((i.rangelength = [i.minlength, i.maxlength]),
                      delete i.minlength,
                      delete i.maxlength)),
                  i
                );
              },
              normalizeRule: function (t) {
                if ("string" == typeof t) {
                  var e = {};
                  c.each(t.split(/\s/), function () {
                    e[this] = !0;
                  }),
                    (t = e);
                }
                return t;
              },
              addMethod: function (t, e, n) {
                (c.validator.methods[t] = e),
                  (c.validator.messages[t] =
                    void 0 !== n ? n : c.validator.messages[t]),
                  e.length < 3 &&
                    c.validator.addClassRules(t, c.validator.normalizeRule(t));
              },
              methods: {
                required: function (t, e, n) {
                  if (!this.depend(n, e)) return "dependency-mismatch";
                  if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e)
                      ? 0 < this.getLength(t, e)
                      : 0 < c.trim(t).length;
                  var i = c(e).val();
                  return i && 0 < i.length;
                },
                email: function (t, e) {
                  return (
                    this.optional(e) ||
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                      t
                    )
                  );
                },
                url: function (t, e) {
                  return (
                    this.optional(e) ||
                    /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                      t
                    )
                  );
                },
                date: function (t, e) {
                  return (
                    this.optional(e) ||
                    !/Invalid|NaN/.test(new Date(t).toString())
                  );
                },
                dateISO: function (t, e) {
                  return (
                    this.optional(e) ||
                    /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                  );
                },
                number: function (t, e) {
                  return (
                    this.optional(e) ||
                    /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                  );
                },
                digits: function (t, e) {
                  return this.optional(e) || /^\d+$/.test(t);
                },
                creditcard: function (t, e) {
                  if (this.optional(e)) return "dependency-mismatch";
                  if (/[^0-9 \-]+/.test(t)) return !1;
                  var n,
                    i,
                    r = 0,
                    o = 0,
                    s = !1;
                  if ((t = t.replace(/\D/g, "")).length < 13 || 19 < t.length)
                    return !1;
                  for (n = t.length - 1; 0 <= n; n--)
                    (i = t.charAt(n)),
                      (o = parseInt(i, 10)),
                      s && 9 < (o *= 2) && (o -= 9),
                      (r += o),
                      (s = !s);
                  return r % 10 == 0;
                },
                minlength: function (t, e, n) {
                  var i = c.isArray(t)
                    ? t.length
                    : this.getLength(c.trim(t), e);
                  return this.optional(e) || n <= i;
                },
                maxlength: function (t, e, n) {
                  var i = c.isArray(t)
                    ? t.length
                    : this.getLength(c.trim(t), e);
                  return this.optional(e) || i <= n;
                },
                rangelength: function (t, e, n) {
                  var i = c.isArray(t)
                    ? t.length
                    : this.getLength(c.trim(t), e);
                  return this.optional(e) || (i >= n[0] && i <= n[1]);
                },
                min: function (t, e, n) {
                  return this.optional(e) || n <= t;
                },
                max: function (t, e, n) {
                  return this.optional(e) || t <= n;
                },
                range: function (t, e, n) {
                  return this.optional(e) || (t >= n[0] && t <= n[1]);
                },
                equalTo: function (t, e, n) {
                  var i = c(n);
                  return (
                    this.settings.onfocusout &&
                      i
                        .unbind(".validate-equalTo")
                        .bind("blur.validate-equalTo", function () {
                          c(e).valid();
                        }),
                    t === i.val()
                  );
                },
                remote: function (o, s, t) {
                  if (this.optional(s)) return "dependency-mismatch";
                  var a,
                    e,
                    l = this.previousValue(s);
                  return (
                    this.settings.messages[s.name] ||
                      (this.settings.messages[s.name] = {}),
                    (l.originalMessage = this.settings.messages[s.name].remote),
                    (this.settings.messages[s.name].remote = l.message),
                    (t = ("string" == typeof t && { url: t }) || t),
                    l.old === o
                      ? l.valid
                      : ((l.old = o),
                        (a = this).startRequest(s),
                        ((e = {})[s.name] = o),
                        c.ajax(
                          c.extend(
                            !0,
                            {
                              url: t,
                              mode: "abort",
                              port: "validate" + s.name,
                              dataType: "json",
                              data: e,
                              context: a.currentForm,
                              success: function (t) {
                                var e,
                                  n,
                                  i,
                                  r = !0 === t || "true" === t;
                                (a.settings.messages[s.name].remote =
                                  l.originalMessage),
                                  r
                                    ? ((i = a.formSubmitted),
                                      a.prepareElement(s),
                                      (a.formSubmitted = i),
                                      a.successList.push(s),
                                      delete a.invalid[s.name],
                                      a.showErrors())
                                    : ((e = {}),
                                      (n = t || a.defaultMessage(s, "remote")),
                                      (e[s.name] = l.message =
                                        c.isFunction(n) ? n(o) : n),
                                      (a.invalid[s.name] = !0),
                                      a.showErrors(e)),
                                  (l.valid = r),
                                  a.stopRequest(s, r);
                              },
                            },
                            t
                          )
                        ),
                        "pending")
                  );
                },
              },
            }),
            (c.format = function () {
              throw "$.format has been deprecated. Please use $.validator.format instead.";
            });
        })(jQuery),
        (function (i) {
          var r,
            o = {};
          i.ajaxPrefilter
            ? i.ajaxPrefilter(function (t, e, n) {
                var i = t.port;
                "abort" === t.mode && (o[i] && o[i].abort(), (o[i] = n));
              })
            : ((r = i.ajax),
              (i.ajax = function (t) {
                var e = ("mode" in t ? t : i.ajaxSettings).mode,
                  n = ("port" in t ? t : i.ajaxSettings).port;
                return "abort" === e
                  ? (o[n] && o[n].abort(),
                    (o[n] = r.apply(this, arguments)),
                    o[n])
                  : r.apply(this, arguments);
              }));
        })(jQuery),
        (function (r) {
          r.extend(r.fn, {
            validateDelegate: function (n, t, i) {
              return this.bind(t, function (t) {
                var e = r(t.target);
                return e.is(n) ? i.apply(e, arguments) : void 0;
              });
            },
          });
        })(jQuery),
        (function (l) {
          l.validator.addMethod(
            "mc_birthday",
            function (t, e, n) {
              var i = !1,
                r = l("input:not(:hidden)", l(e).closest(n));
              if (0 == r.filter(":filled").length && this.optional(e)) i = !0;
              else {
                var o = new Array();
                (o.month = r.filter("input[name*='[month]']").val()),
                  (o.day = r.filter("input[name*='[day]']").val()),
                  (o.month = o.month - 1);
                var s = new Date(1970, o.month, o.day);
                i = s.getDate() == o.day && s.getMonth() == o.month;
              }
              return i;
            },
            "Please enter a valid month and day."
          ),
            l.validator.addMethod(
              "mc_date",
              function (t, e, n) {
                var i = !1,
                  r = l("input:not(:hidden)", l(e).closest(n));
                if (0 == r.filter(":filled").length && this.optional(e)) i = !0;
                else {
                  var o = new Array();
                  (o.month = r.filter("input[name*='[month]']").val()),
                    (o.day = r.filter("input[name*='[day]']").val()),
                    (o.year = r.filter("input[name*='[year]']").val()),
                    (o.month = o.month - 1),
                    o.year.length < 4 &&
                      (o.year =
                        parseInt(o.year) < 50
                          ? 2e3 + parseInt(o.year)
                          : 1900 + parseInt(o.year));
                  var s = new Date(o.year, o.month, o.day);
                  i =
                    s.getDate() == o.day &&
                    s.getMonth() == o.month &&
                    s.getFullYear() == o.year;
                }
                return i;
              },
              "Please enter a valid date"
            ),
            l.validator.addMethod(
              "mc_phone",
              function (t, e, n) {
                var i = l("input:filled:not(:hidden)", l(e).closest(n));
                return (
                  !(0 != i.length || !this.optional(e)) ||
                  (10 ==
                    (t = i.eq(0).val() + i.eq(1).val() + i.eq(2).val())
                      .length &&
                    t.match(/[0-9]{9}/))
                );
              },
              "Please specify a valid phone number"
            ),
            l.validator.addMethod(
              "skip_or_complete_group",
              function (t, e, n) {
                var i = l("input:not(:hidden)", l(e).closest(n)),
                  r = i.eq(0),
                  o = r.data("valid_skip")
                    ? r.data("valid_skip")
                    : l.extend({}, this),
                  s = i.filter(function () {
                    return o.elementValue(this);
                  }).length,
                  a = 0 === s || s === i.length;
                return (
                  r.data("valid_skip", o),
                  l(e).data("being_validated") ||
                    (i.data("being_validated", !0),
                    i.each(function () {
                      o.element(this);
                    }),
                    i.data("being_validated", !1)),
                  a
                );
              },
              l.validator.format("Please supply missing fields.")
            ),
            l.validator.addMethod(
              "skip_or_fill_minimum",
              function (t, e, n) {
                var i = l(n[1], e.form),
                  r = i.eq(0),
                  o = r.data("valid_skip")
                    ? r.data("valid_skip")
                    : l.extend({}, this),
                  s = i.filter(function () {
                    return o.elementValue(this);
                  }).length,
                  a = 0 === s || s >= n[0];
                return (
                  console.log(i.eq(0)),
                  r.data("valid_skip", o),
                  l(e).data("being_validated") ||
                    (i.data("being_validated", !0),
                    i.each(function () {
                      o.element(this);
                    }),
                    i.data("being_validated", !1)),
                  a
                );
              },
              l.validator.format(
                "Please either skip these fields or fill at least {0} of them."
              )
            ),
            l.validator.addMethod(
              "zipcodeUS",
              function (t, e) {
                return this.optional(e) || /^\d{5}-\d{4}$|^\d{5}$/.test(t);
              },
              "The specified US ZIP Code is invalid"
            );
        })(jQuery),
        (function (c) {
          var t = "";
          try {
            t = mc_custom_error_style;
          } catch (e) {
            t =
              "#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }";
          }
          var e = document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          (n.type = "text/css"),
            n.styleSheet
              ? (n.styleSheet.cssText = t)
              : n.appendChild(document.createTextNode(t)),
            e.appendChild(n),
            (window.mc = {
              openPopup: function () {
                c("#mc_embed_signup a.mc_embed_close").show(),
                  setTimeout(function () {
                    c("#mc_embed_signup").fadeIn();
                  }, mc.delayPopup);
              },
              closePopup: function () {
                c("#mc_embed_signup").hide();
                var t = new Date(),
                  e = new Date(t.getTime() + 31536e6);
                document.cookie =
                  "MCPopupClosed=yes;expires=" + e.toGMTString() + ";path=/";
              },
              evalPopup: function () {
                for (
                  c("#mc_embed_signup").hide(),
                    cks = document.cookie.split(";"),
                    i = 0;
                  i < cks.length;
                  i++
                )
                  (parts = cks[i].split("=")),
                    -1 != parts[0].indexOf("MCPopupClosed") &&
                      (mc.showPopup = !1);
                mc.showPopup && mc.openPopup();
              },
              getAjaxSubmitUrl: function () {
                if (0 < c("form#mc-embedded-subscribe-form").length) {
                  var t = c("form#mc-embedded-subscribe-form").attr("action");
                  return (t = t.replace("/post?u=", "/post-json?u=")) + "&c=?";
                }
              },
              getGroups: function () {
                var r = {};
                return (
                  c(".mc-field-group").each(function (t) {
                    var e = c(this).find("input:text:not(:hidden)");
                    if (1 < e.length) {
                      var n = e.first().attr("name"),
                        i = c.map(e, function (t) {
                          return t.name;
                        });
                      r[n.substring(0, n.indexOf("["))] = i.join(" ");
                    }
                  }),
                  r
                );
              },
              isMultiPartField: function (t) {
                return (
                  1 <
                  c("input:not(:hidden)", c(t).closest(".mc-field-group"))
                    .length
                );
              },
              isTooEarly: function (t) {
                var e = c(
                  "input:not(:hidden)",
                  c(t).closest(".mc-field-group")
                );
                return c(e).eq(-1).attr("id") != c(t).attr("id");
              },
              mce_success_cb: function (t) {
                if (
                  (c("#mce-success-response").hide(),
                  c("#mce-error-response").hide(),
                  "success" == t.result)
                )
                  c("#mce-" + t.result + "-response").show(),
                    c("#mce-" + t.result + "-response").html(t.msg),
                    c("#mc-embedded-subscribe-form").each(function () {
                      this.reset();
                    });
                else {
                  if ("captcha" === t.msg) {
                    var e = c("form#mc-embedded-subscribe-form").attr("action"),
                      n = c.param(t.params);
                    (e = e.split("?")[0]), (e += "?"), (e += n), window.open(e);
                  }
                  var r,
                    o = -1;
                  try {
                    var s = t.msg.split(" - ", 2);
                    r =
                      null == s[1]
                        ? t.msg
                        : ((i = parseInt(s[0])),
                          i.toString() == s[0]
                            ? ((o = s[0]), s[1])
                            : ((o = -1), t.msg));
                  } catch (e) {
                    (o = -1), (r = t.msg);
                  }
                  try {
                    if (-1 == o)
                      c("#mce-" + t.result + "-response").slideDown(),
                        c("#mce-" + t.result + "-response").html(r);
                    else {
                      var a = c("input[name*='" + fnames[o] + "']").attr(
                          "name"
                        ),
                        l = {};
                      (l[a] = r), mc.mce_validator.showErrors(l);
                    }
                  } catch (e) {
                    c("#mce-" + t.result + "-response").show(),
                      c("#mce-" + t.result + "-response").html(r);
                  }
                }
              },
            }),
            (window.mc.mce_validator = c(
              "#mc-embedded-subscribe-form"
            ).validate({
              errorClass: "mce_inline_error",
              errorElement: "div",
              onkeyup: !1,
              onfocusout: function (t) {
                mc.isTooEarly(t) || c(t).valid();
              },
              onblur: function (t) {
                mc.isTooEarly(t) || c(t).valid();
              },
              groups: mc.getGroups(),
              errorPlacement: function (t, e) {
                e.closest(".mc-field-group").append(t);
              },
              submitHandler: function (t) {
                c(t).ajaxSubmit(mc.ajaxOptions);
              },
            })),
            (window.mc.ajaxOptions = {
              url: mc.getAjaxSubmitUrl(),
              type: "GET",
              dataType: "json",
              contentType: "application/json; charset=utf-8",
              success: mc.mce_success_cb,
            }),
            c.validator.addClassRules("birthday", {
              digits: !0,
              mc_birthday: ".datefield",
            }),
            c.validator.addClassRules("datepart", {
              digits: !0,
              mc_date: ".datefield",
            }),
            c.validator.addClassRules("phonepart", {
              digits: !0,
              mc_phone: ".phonefield",
            }),
            c("#mc_embed_signup a.mc_embed_close").click(function () {
              mc.closePopup();
            }),
            c(document).keydown(function (t) {
              (keycode = null == t ? event.keyCode : t.which),
                27 == keycode && void 0 !== mc.showPopup && mc.closePopup();
            });
        })(jQuery),
        (function (l, n, r, a) {
          function c(t, e) {
            (this.settings = null),
              (this.options = l.extend({}, c.Defaults, e)),
              (this.$element = l(t)),
              (this._handlers = {}),
              (this._plugins = {}),
              (this._supress = {}),
              (this._current = null),
              (this._speed = null),
              (this._coordinates = []),
              (this._breakpoint = null),
              (this._width = null),
              (this._items = []),
              (this._clones = []),
              (this._mergers = []),
              (this._widths = []),
              (this._invalidated = {}),
              (this._pipe = []),
              (this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: { start: null, current: null },
                direction: null,
              }),
              (this._states = {
                current: {},
                tags: {
                  initializing: ["busy"],
                  animating: ["busy"],
                  dragging: ["interacting"],
                },
              }),
              l.each(
                ["onResize", "onThrottledResize"],
                l.proxy(function (t, e) {
                  this._handlers[e] = l.proxy(this[e], this);
                }, this)
              ),
              l.each(
                c.Plugins,
                l.proxy(function (t, e) {
                  this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                    this
                  );
                }, this)
              ),
              l.each(
                c.Workers,
                l.proxy(function (t, e) {
                  this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this),
                  });
                }, this)
              ),
              this.setup(),
              this.initialize();
          }
          (c.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: n,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
          }),
            (c.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (c.Type = { Event: "event", State: "state" }),
            (c.Plugins = {}),
            (c.Workers = [
              {
                filter: ["width", "settings"],
                run: function () {
                  this._width = this.$element.width();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (t) {
                  t.current =
                    this._items && this._items[this.relative(this._current)];
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  this.$stage.children(".cloned").remove();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (t) {
                  var e = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    r = {
                      width: "auto",
                      "margin-left": i ? e : "",
                      "margin-right": i ? "" : e,
                    };
                  !n && this.$stage.children().css(r), (t.css = r);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (t) {
                  var e =
                      (this.width() / this.settings.items).toFixed(3) -
                      this.settings.margin,
                    n = null,
                    i = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                  for (t.items = { merge: !1, width: e }; i--; )
                    (n = this._mergers[i]),
                      (n =
                        (this.settings.mergeFit &&
                          Math.min(n, this.settings.items)) ||
                        n),
                      (t.items.merge = 1 < n || t.items.merge),
                      (o[i] = r ? e * n : this._items[i].width());
                  this._widths = o;
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  var t = [],
                    e = this._items,
                    n = this.settings,
                    i = Math.max(2 * n.items, 4),
                    r = 2 * Math.ceil(e.length / 2),
                    o =
                      n.loop && e.length ? (n.rewind ? i : Math.max(i, r)) : 0,
                    s = "",
                    a = "";
                  for (o /= 2; 0 < o; )
                    t.push(this.normalize(t.length / 2, !0)),
                      (s += e[t[t.length - 1]][0].outerHTML),
                      t.push(
                        this.normalize(e.length - 1 - (t.length - 1) / 2, !0)
                      ),
                      (a = e[t[t.length - 1]][0].outerHTML + a),
                      (o -= 1);
                  (this._clones = t),
                    l(s).addClass("cloned").appendTo(this.$stage),
                    l(a).addClass("cloned").prependTo(this.$stage);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  for (
                    var t = this.settings.rtl ? 1 : -1,
                      e = this._clones.length + this._items.length,
                      n = -1,
                      i = 0,
                      r = 0,
                      o = [];
                    ++n < e;

                  )
                    (i = o[n - 1] || 0),
                      (r =
                        this._widths[this.relative(n)] + this.settings.margin),
                      o.push(i + r * t);
                  this._coordinates = o;
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  var t = this.settings.stagePadding,
                    e = this._coordinates,
                    n = {
                      width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                      "padding-left": t || "",
                      "padding-right": t || "",
                    };
                  this.$stage.css(n);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (t) {
                  var e = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                  if (n && t.items.merge)
                    for (; e--; )
                      (t.css.width = this._widths[this.relative(e)]),
                        i.eq(e).css(t.css);
                  else n && ((t.css.width = t.items.width), i.css(t.css));
                },
              },
              {
                filter: ["items"],
                run: function () {
                  this._coordinates.length < 1 &&
                    this.$stage.removeAttr("style");
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (t) {
                  (t.current = t.current
                    ? this.$stage.children().index(t.current)
                    : 0),
                    (t.current = Math.max(
                      this.minimum(),
                      Math.min(this.maximum(), t.current)
                    )),
                    this.reset(t.current);
                },
              },
              {
                filter: ["position"],
                run: function () {
                  this.animate(this.coordinates(this._current));
                },
              },
              {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                  var t,
                    e,
                    n,
                    i,
                    r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                  for (n = 0, i = this._coordinates.length; n < i; n++)
                    (t = this._coordinates[n - 1] || 0),
                      (e = Math.abs(this._coordinates[n]) + o * r),
                      ((this.op(t, "<=", s) && this.op(t, ">", a)) ||
                        (this.op(e, "<", s) && this.op(e, ">", a))) &&
                        l.push(n);
                  this.$stage.children(".active").removeClass("active"),
                    this.$stage
                      .children(":eq(" + l.join("), :eq(") + ")")
                      .addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                    this.settings.center &&
                      this.$stage
                        .children()
                        .eq(this.current())
                        .addClass("center");
                },
              },
            ]),
            (c.prototype.initializeStage = function () {
              (this.$stage = this.$element.find(
                "." + this.settings.stageClass
              )),
                this.$stage.length ||
                  (this.$element.addClass(this.options.loadingClass),
                  (this.$stage = l("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass,
                  }).wrap(
                    l("<div/>", { class: this.settings.stageOuterClass })
                  )),
                  this.$element.append(this.$stage.parent()));
            }),
            (c.prototype.initializeItems = function () {
              var t = this.$element.find(".owl-item");
              if (t.length)
                return (
                  (this._items = t.get().map(function (t) {
                    return l(t);
                  })),
                  (this._mergers = this._items.map(function () {
                    return 1;
                  })),
                  void this.refresh()
                );
              this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element
                  .removeClass(this.options.loadingClass)
                  .addClass(this.options.loadedClass);
            }),
            (c.prototype.initialize = function () {
              var t, e, n;
              this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(
                  this.settings.rtlClass,
                  this.settings.rtl
                ),
                this.settings.autoWidth &&
                  !this.is("pre-loading") &&
                  ((t = this.$element.find("img")),
                  (e = this.settings.nestedItemSelector
                    ? "." + this.settings.nestedItemSelector
                    : a),
                  (n = this.$element.children(e).width()),
                  t.length && n <= 0 && this.preloadAutoWidthImages(t)),
                this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
            }),
            (c.prototype.isVisible = function () {
              return (
                !this.settings.checkVisibility || this.$element.is(":visible")
              );
            }),
            (c.prototype.setup = function () {
              var e = this.viewport(),
                t = this.options.responsive,
                n = -1,
                i = null;
              t
                ? (l.each(t, function (t) {
                    t <= e && n < t && (n = Number(t));
                  }),
                  "function" ==
                    typeof (i = l.extend({}, this.options, t[n]))
                      .stagePadding && (i.stagePadding = i.stagePadding()),
                  delete i.responsive,
                  i.responsiveClass &&
                    this.$element.attr(
                      "class",
                      this.$element
                        .attr("class")
                        .replace(
                          new RegExp(
                            "(" + this.options.responsiveClass + "-)\\S+\\s",
                            "g"
                          ),
                          "$1" + n
                        )
                    ))
                : (i = l.extend({}, this.options)),
                this.trigger("change", {
                  property: { name: "settings", value: i },
                }),
                (this._breakpoint = n),
                (this.settings = i),
                this.invalidate("settings"),
                this.trigger("changed", {
                  property: { name: "settings", value: this.settings },
                });
            }),
            (c.prototype.optionsLogic = function () {
              this.settings.autoWidth &&
                ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (c.prototype.prepare = function (t) {
              var e = this.trigger("prepare", { content: t });
              return (
                e.data ||
                  (e.data = l("<" + this.settings.itemElement + "/>")
                    .addClass(this.options.itemClass)
                    .append(t)),
                this.trigger("prepared", { content: e.data }),
                e.data
              );
            }),
            (c.prototype.update = function () {
              for (
                var t = 0,
                  e = this._pipe.length,
                  n = l.proxy(function (t) {
                    return this[t];
                  }, this._invalidated),
                  i = {};
                t < e;

              )
                (this._invalidated.all ||
                  0 < l.grep(this._pipe[t].filter, n).length) &&
                  this._pipe[t].run(i),
                  t++;
              (this._invalidated = {}),
                !this.is("valid") && this.enter("valid");
            }),
            (c.prototype.width = function (t) {
              switch ((t = t || c.Width.Default)) {
                case c.Width.Inner:
                case c.Width.Outer:
                  return this._width;
                default:
                  return (
                    this._width -
                    2 * this.settings.stagePadding +
                    this.settings.margin
                  );
              }
            }),
            (c.prototype.refresh = function () {
              this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
            }),
            (c.prototype.onThrottledResize = function () {
              n.clearTimeout(this.resizeTimer),
                (this.resizeTimer = n.setTimeout(
                  this._handlers.onResize,
                  this.settings.responsiveRefreshRate
                ));
            }),
            (c.prototype.onResize = function () {
              return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented()
                  ? (this.leave("resizing"), !1)
                  : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))
              );
            }),
            (c.prototype.registerEventHandlers = function () {
              l.support.transition &&
                this.$stage.on(
                  l.support.transition.end + ".owl.core",
                  l.proxy(this.onTransitionEnd, this)
                ),
                !1 !== this.settings.responsive &&
                  this.on(n, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                  (this.$element.addClass(this.options.dragClass),
                  this.$stage.on(
                    "mousedown.owl.core",
                    l.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "dragstart.owl.core selectstart.owl.core",
                    function () {
                      return !1;
                    }
                  )),
                this.settings.touchDrag &&
                  (this.$stage.on(
                    "touchstart.owl.core",
                    l.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "touchcancel.owl.core",
                    l.proxy(this.onDragEnd, this)
                  ));
            }),
            (c.prototype.onDragStart = function (t) {
              var e = null;
              3 !== t.which &&
                ((e = l.support.transform
                  ? {
                      x: (e = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(","))[16 === e.length ? 12 : 4],
                      y: e[16 === e.length ? 13 : 5],
                    }
                  : ((e = this.$stage.position()),
                    {
                      x: this.settings.rtl
                        ? e.left +
                          this.$stage.width() -
                          this.width() +
                          this.settings.margin
                        : e.left,
                      y: e.top,
                    })),
                this.is("animating") &&
                  (l.support.transform ? this.animate(e.x) : this.$stage.stop(),
                  this.invalidate("position")),
                this.$element.toggleClass(
                  this.options.grabClass,
                  "mousedown" === t.type
                ),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = l(t.target)),
                (this._drag.stage.start = e),
                (this._drag.stage.current = e),
                (this._drag.pointer = this.pointer(t)),
                l(r).on(
                  "mouseup.owl.core touchend.owl.core",
                  l.proxy(this.onDragEnd, this)
                ),
                l(r).one(
                  "mousemove.owl.core touchmove.owl.core",
                  l.proxy(function (t) {
                    var e = this.difference(
                      this._drag.pointer,
                      this.pointer(t)
                    );
                    l(r).on(
                      "mousemove.owl.core touchmove.owl.core",
                      l.proxy(this.onDragMove, this)
                    ),
                      (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) ||
                        (t.preventDefault(),
                        this.enter("dragging"),
                        this.trigger("drag"));
                  }, this)
                ));
            }),
            (c.prototype.onDragMove = function (t) {
              var e = null,
                n = null,
                i = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, r);
              this.is("dragging") &&
                (t.preventDefault(),
                this.settings.loop
                  ? ((e = this.coordinates(this.minimum())),
                    (n = this.coordinates(this.maximum() + 1) - e),
                    (o.x = ((((o.x - e) % n) + n) % n) + e))
                  : ((e = this.settings.rtl
                      ? this.coordinates(this.maximum())
                      : this.coordinates(this.minimum())),
                    (n = this.settings.rtl
                      ? this.coordinates(this.minimum())
                      : this.coordinates(this.maximum())),
                    (i = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
                    (o.x = Math.max(Math.min(o.x, e + i), n + i))),
                (this._drag.stage.current = o),
                this.animate(o.x));
            }),
            (c.prototype.onDragEnd = function (t) {
              var e = this.difference(this._drag.pointer, this.pointer(t)),
                n = this._drag.stage.current,
                i = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
              l(r).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
                  (this.speed(
                    this.settings.dragEndSpeed || this.settings.smartSpeed
                  ),
                  this.current(
                    this.closest(n.x, 0 !== e.x ? i : this._drag.direction)
                  ),
                  this.invalidate("position"),
                  this.update(),
                  (this._drag.direction = i),
                  (3 < Math.abs(e.x) ||
                    300 < new Date().getTime() - this._drag.time) &&
                    this._drag.target.one("click.owl.core", function () {
                      return !1;
                    })),
                this.is("dragging") &&
                  (this.leave("dragging"), this.trigger("dragged"));
            }),
            (c.prototype.closest = function (n, i) {
              var r = -1,
                o = this.width(),
                s = this.coordinates();
              return (
                this.settings.freeDrag ||
                  l.each(
                    s,
                    l.proxy(function (t, e) {
                      return (
                        "left" === i && e - 30 < n && n < e + 30
                          ? (r = t)
                          : "right" === i && e - o - 30 < n && n < e - o + 30
                          ? (r = t + 1)
                          : this.op(n, "<", e) &&
                            this.op(
                              n,
                              ">",
                              s[t + 1] !== a ? s[t + 1] : e - o
                            ) &&
                            (r = "left" === i ? t + 1 : t),
                        -1 === r
                      );
                    }, this)
                  ),
                this.settings.loop ||
                  (this.op(n, ">", s[this.minimum()])
                    ? (r = n = this.minimum())
                    : this.op(n, "<", s[this.maximum()]) &&
                      (r = n = this.maximum())),
                r
              );
            }),
            (c.prototype.animate = function (t) {
              var e = 0 < this.speed();
              this.is("animating") && this.onTransitionEnd(),
                e && (this.enter("animating"), this.trigger("translate")),
                l.support.transform3d && l.support.transition
                  ? this.$stage.css({
                      transform: "translate3d(" + t + "px,0px,0px)",
                      transition:
                        this.speed() / 1e3 +
                        "s" +
                        (this.settings.slideTransition
                          ? " " + this.settings.slideTransition
                          : ""),
                    })
                  : e
                  ? this.$stage.animate(
                      { left: t + "px" },
                      this.speed(),
                      this.settings.fallbackEasing,
                      l.proxy(this.onTransitionEnd, this)
                    )
                  : this.$stage.css({ left: t + "px" });
            }),
            (c.prototype.is = function (t) {
              return this._states.current[t] && 0 < this._states.current[t];
            }),
            (c.prototype.current = function (t) {
              if (t === a) return this._current;
              if (0 === this._items.length) return a;
              if (((t = this.normalize(t)), this._current !== t)) {
                var e = this.trigger("change", {
                  property: { name: "position", value: t },
                });
                e.data !== a && (t = this.normalize(e.data)),
                  (this._current = t),
                  this.invalidate("position"),
                  this.trigger("changed", {
                    property: { name: "position", value: this._current },
                  });
              }
              return this._current;
            }),
            (c.prototype.invalidate = function (t) {
              return (
                "string" === l.type(t) &&
                  ((this._invalidated[t] = !0),
                  this.is("valid") && this.leave("valid")),
                l.map(this._invalidated, function (t, e) {
                  return e;
                })
              );
            }),
            (c.prototype.reset = function (t) {
              (t = this.normalize(t)) !== a &&
                ((this._speed = 0),
                (this._current = t),
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(t)),
                this.release(["translate", "translated"]));
            }),
            (c.prototype.normalize = function (t, e) {
              var n = this._items.length,
                i = e ? 0 : this._clones.length;
              return (
                !this.isNumeric(t) || n < 1
                  ? (t = a)
                  : (t < 0 || n + i <= t) &&
                    (t = ((((t - i / 2) % n) + n) % n) + i / 2),
                t
              );
            }),
            (c.prototype.relative = function (t) {
              return (t -= this._clones.length / 2), this.normalize(t, !0);
            }),
            (c.prototype.maximum = function (t) {
              var e,
                n,
                i,
                r = this.settings,
                o = this._coordinates.length;
              if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
              else if (r.autoWidth || r.merge) {
                if ((e = this._items.length))
                  for (
                    n = this._items[--e].width(), i = this.$element.width();
                    e-- &&
                    !((n += this._items[e].width() + this.settings.margin) > i);

                  );
                o = e + 1;
              } else
                o = r.center
                  ? this._items.length - 1
                  : this._items.length - r.items;
              return t && (o -= this._clones.length / 2), Math.max(o, 0);
            }),
            (c.prototype.minimum = function (t) {
              return t ? 0 : this._clones.length / 2;
            }),
            (c.prototype.items = function (t) {
              return t === a
                ? this._items.slice()
                : ((t = this.normalize(t, !0)), this._items[t]);
            }),
            (c.prototype.mergers = function (t) {
              return t === a
                ? this._mergers.slice()
                : ((t = this.normalize(t, !0)), this._mergers[t]);
            }),
            (c.prototype.clones = function (n) {
              var e = this._clones.length / 2,
                i = e + this._items.length,
                r = function (t) {
                  return t % 2 == 0 ? i + t / 2 : e - (t + 1) / 2;
                };
              return n === a
                ? l.map(this._clones, function (t, e) {
                    return r(e);
                  })
                : l.map(this._clones, function (t, e) {
                    return t === n ? r(e) : null;
                  });
            }),
            (c.prototype.speed = function (t) {
              return t !== a && (this._speed = t), this._speed;
            }),
            (c.prototype.coordinates = function (t) {
              var e,
                n = 1,
                i = t - 1;
              return t === a
                ? l.map(
                    this._coordinates,
                    l.proxy(function (t, e) {
                      return this.coordinates(e);
                    }, this)
                  )
                : (this.settings.center
                    ? (this.settings.rtl && ((n = -1), (i = t + 1)),
                      (e = this._coordinates[t]),
                      (e +=
                        ((this.width() - e + (this._coordinates[i] || 0)) / 2) *
                        n))
                    : (e = this._coordinates[i] || 0),
                  (e = Math.ceil(e)));
            }),
            (c.prototype.duration = function (t, e, n) {
              return 0 === n
                ? 0
                : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                    Math.abs(n || this.settings.smartSpeed);
            }),
            (c.prototype.to = function (t, e) {
              var n = this.current(),
                i = null,
                r = t - this.relative(n),
                o = (0 < r) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
              this.settings.loop
                ? (!this.settings.rewind &&
                    Math.abs(r) > s / 2 &&
                    (r += -1 * o * s),
                  (i = (((((t = n + r) - a) % s) + s) % s) + a) !== t &&
                    i - r <= l &&
                    0 < i - r &&
                    ((n = i - r), (t = i), this.reset(n)))
                : (t = this.settings.rewind
                    ? ((t % (l += 1)) + l) % l
                    : Math.max(a, Math.min(l, t))),
                this.speed(this.duration(n, t, e)),
                this.current(t),
                this.isVisible() && this.update();
            }),
            (c.prototype.next = function (t) {
              (t = t || !1), this.to(this.relative(this.current()) + 1, t);
            }),
            (c.prototype.prev = function (t) {
              (t = t || !1), this.to(this.relative(this.current()) - 1, t);
            }),
            (c.prototype.onTransitionEnd = function (t) {
              if (
                t !== a &&
                (t.stopPropagation(),
                (t.target || t.srcElement || t.originalTarget) !==
                  this.$stage.get(0))
              )
                return !1;
              this.leave("animating"), this.trigger("translated");
            }),
            (c.prototype.viewport = function () {
              var t;
              return (
                this.options.responsiveBaseElement !== n
                  ? (t = l(this.options.responsiveBaseElement).width())
                  : n.innerWidth
                  ? (t = n.innerWidth)
                  : r.documentElement && r.documentElement.clientWidth
                  ? (t = r.documentElement.clientWidth)
                  : console.warn("Can not detect viewport width."),
                t
              );
            }),
            (c.prototype.replace = function (t) {
              this.$stage.empty(),
                (this._items = []),
                t && (t = t instanceof jQuery ? t : l(t)),
                this.settings.nestedItemSelector &&
                  (t = t.find("." + this.settings.nestedItemSelector)),
                t
                  .filter(function () {
                    return 1 === this.nodeType;
                  })
                  .each(
                    l.proxy(function (t, e) {
                      (e = this.prepare(e)),
                        this.$stage.append(e),
                        this._items.push(e),
                        this._mergers.push(
                          1 *
                            e
                              .find("[data-merge]")
                              .addBack("[data-merge]")
                              .attr("data-merge") || 1
                        );
                    }, this)
                  ),
                this.reset(
                  this.isNumeric(this.settings.startPosition)
                    ? this.settings.startPosition
                    : 0
                ),
                this.invalidate("items");
            }),
            (c.prototype.add = function (t, e) {
              var n = this.relative(this._current);
              (e = e === a ? this._items.length : this.normalize(e, !0)),
                (t = t instanceof jQuery ? t : l(t)),
                this.trigger("add", { content: t, position: e }),
                (t = this.prepare(t)),
                0 === this._items.length || e === this._items.length
                  ? (0 === this._items.length && this.$stage.append(t),
                    0 !== this._items.length && this._items[e - 1].after(t),
                    this._items.push(t),
                    this._mergers.push(
                      1 *
                        t
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    ))
                  : (this._items[e].before(t),
                    this._items.splice(e, 0, t),
                    this._mergers.splice(
                      e,
                      0,
                      1 *
                        t
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    )),
                this._items[n] && this.reset(this._items[n].index()),
                this.invalidate("items"),
                this.trigger("added", { content: t, position: e });
            }),
            (c.prototype.remove = function (t) {
              (t = this.normalize(t, !0)) !== a &&
                (this.trigger("remove", {
                  content: this._items[t],
                  position: t,
                }),
                this._items[t].remove(),
                this._items.splice(t, 1),
                this._mergers.splice(t, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: t }));
            }),
            (c.prototype.preloadAutoWidthImages = function (t) {
              t.each(
                l.proxy(function (t, e) {
                  this.enter("pre-loading"),
                    (e = l(e)),
                    l(new Image())
                      .one(
                        "load",
                        l.proxy(function (t) {
                          e.attr("src", t.target.src),
                            e.css("opacity", 1),
                            this.leave("pre-loading"),
                            !this.is("pre-loading") &&
                              !this.is("initializing") &&
                              this.refresh();
                        }, this)
                      )
                      .attr(
                        "src",
                        e.attr("src") ||
                          e.attr("data-src") ||
                          e.attr("data-src-retina")
                      );
                }, this)
              );
            }),
            (c.prototype.destroy = function () {
              for (var t in (this.$element.off(".owl.core"),
              this.$stage.off(".owl.core"),
              l(r).off(".owl.core"),
              !1 !== this.settings.responsive &&
                (n.clearTimeout(this.resizeTimer),
                this.off(n, "resize", this._handlers.onThrottledResize)),
              this._plugins))
                this._plugins[t].destroy();
              this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                  .removeClass(this.options.refreshClass)
                  .removeClass(this.options.loadingClass)
                  .removeClass(this.options.loadedClass)
                  .removeClass(this.options.rtlClass)
                  .removeClass(this.options.dragClass)
                  .removeClass(this.options.grabClass)
                  .attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          this.options.responsiveClass + "-\\S+\\s",
                          "g"
                        ),
                        ""
                      )
                  )
                  .removeData("owl.carousel");
            }),
            (c.prototype.op = function (t, e, n) {
              var i = this.settings.rtl;
              switch (e) {
                case "<":
                  return i ? n < t : t < n;
                case ">":
                  return i ? t < n : n < t;
                case ">=":
                  return i ? t <= n : n <= t;
                case "<=":
                  return i ? n <= t : t <= n;
              }
            }),
            (c.prototype.on = function (t, e, n, i) {
              t.addEventListener
                ? t.addEventListener(e, n, i)
                : t.attachEvent && t.attachEvent("on" + e, n);
            }),
            (c.prototype.off = function (t, e, n, i) {
              t.removeEventListener
                ? t.removeEventListener(e, n, i)
                : t.detachEvent && t.detachEvent("on" + e, n);
            }),
            (c.prototype.trigger = function (t, e, n, i, r) {
              var o = {
                  item: { count: this._items.length, index: this.current() },
                },
                s = l.camelCase(
                  l
                    .grep(["on", t, n], function (t) {
                      return t;
                    })
                    .join("-")
                    .toLowerCase()
                ),
                a = l.Event(
                  [t, "owl", n || "carousel"].join(".").toLowerCase(),
                  l.extend({ relatedTarget: this }, o, e)
                );
              return (
                this._supress[t] ||
                  (l.each(this._plugins, function (t, e) {
                    e.onTrigger && e.onTrigger(a);
                  }),
                  this.register({ type: c.Type.Event, name: t }),
                  this.$element.trigger(a),
                  this.settings &&
                    "function" == typeof this.settings[s] &&
                    this.settings[s].call(this, a)),
                a
              );
            }),
            (c.prototype.enter = function (t) {
              l.each(
                [t].concat(this._states.tags[t] || []),
                l.proxy(function (t, e) {
                  this._states.current[e] === a &&
                    (this._states.current[e] = 0),
                    this._states.current[e]++;
                }, this)
              );
            }),
            (c.prototype.leave = function (t) {
              l.each(
                [t].concat(this._states.tags[t] || []),
                l.proxy(function (t, e) {
                  this._states.current[e]--;
                }, this)
              );
            }),
            (c.prototype.register = function (n) {
              if (n.type === c.Type.Event) {
                if (
                  (l.event.special[n.name] || (l.event.special[n.name] = {}),
                  !l.event.special[n.name].owl)
                ) {
                  var e = l.event.special[n.name]._default;
                  (l.event.special[n.name]._default = function (t) {
                    return !e ||
                      !e.apply ||
                      (t.namespace && -1 !== t.namespace.indexOf("owl"))
                      ? t.namespace && -1 < t.namespace.indexOf("owl")
                      : e.apply(this, arguments);
                  }),
                    (l.event.special[n.name].owl = !0);
                }
              } else
                n.type === c.Type.State &&
                  (this._states.tags[n.name]
                    ? (this._states.tags[n.name] = this._states.tags[
                        n.name
                      ].concat(n.tags))
                    : (this._states.tags[n.name] = n.tags),
                  (this._states.tags[n.name] = l.grep(
                    this._states.tags[n.name],
                    l.proxy(function (t, e) {
                      return l.inArray(t, this._states.tags[n.name]) === e;
                    }, this)
                  )));
            }),
            (c.prototype.suppress = function (t) {
              l.each(
                t,
                l.proxy(function (t, e) {
                  this._supress[e] = !0;
                }, this)
              );
            }),
            (c.prototype.release = function (t) {
              l.each(
                t,
                l.proxy(function (t, e) {
                  delete this._supress[e];
                }, this)
              );
            }),
            (c.prototype.pointer = function (t) {
              var e = { x: null, y: null };
              return (
                (t =
                  (t = t.originalEvent || t || n.event).touches &&
                  t.touches.length
                    ? t.touches[0]
                    : t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : t).pageX
                  ? ((e.x = t.pageX), (e.y = t.pageY))
                  : ((e.x = t.clientX), (e.y = t.clientY)),
                e
              );
            }),
            (c.prototype.isNumeric = function (t) {
              return !isNaN(parseFloat(t));
            }),
            (c.prototype.difference = function (t, e) {
              return { x: t.x - e.x, y: t.y - e.y };
            }),
            (l.fn.owlCarousel = function (e) {
              var i = Array.prototype.slice.call(arguments, 1);
              return this.each(function () {
                var t = l(this),
                  n = t.data("owl.carousel");
                n ||
                  ((n = new c(this, "object" == typeof e && e)),
                  t.data("owl.carousel", n),
                  l.each(
                    [
                      "next",
                      "prev",
                      "to",
                      "destroy",
                      "refresh",
                      "replace",
                      "add",
                      "remove",
                    ],
                    function (t, e) {
                      n.register({ type: c.Type.Event, name: e }),
                        n.$element.on(
                          e + ".owl.carousel.core",
                          l.proxy(function (t) {
                            t.namespace &&
                              t.relatedTarget !== this &&
                              (this.suppress([e]),
                              n[e].apply(this, [].slice.call(arguments, 1)),
                              this.release([e]));
                          }, n)
                        );
                    }
                  )),
                  "string" == typeof e &&
                    "_" !== e.charAt(0) &&
                    n[e].apply(n, i);
              });
            }),
            (l.fn.owlCarousel.Constructor = c);
        })(window.Zepto || window.jQuery, window, document),
        (function (e, n, t, i) {
          var r = function (t) {
            (this._core = t),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                "initialized.owl.carousel": e.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoRefresh &&
                    this.watch();
                }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (r.prototype.watch = function () {
              this._interval ||
                ((this._visible = this._core.isVisible()),
                (this._interval = n.setInterval(
                  e.proxy(this.refresh, this),
                  this._core.settings.autoRefreshInterval
                )));
            }),
            (r.prototype.refresh = function () {
              this._core.isVisible() !== this._visible &&
                ((this._visible = !this._visible),
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible &&
                  this._core.invalidate("width") &&
                  this._core.refresh());
            }),
            (r.prototype.destroy = function () {
              var t, e;
              for (t in (n.clearInterval(this._interval), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, o, t, e) {
          var n = function (t) {
            (this._core = t),
              (this._loaded = []),
              (this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                  a.proxy(function (t) {
                    if (
                      t.namespace &&
                      this._core.settings &&
                      this._core.settings.lazyLoad &&
                      ((t.property && "position" == t.property.name) ||
                        "initialized" == t.type)
                    ) {
                      var e = this._core.settings,
                        n = (e.center && Math.ceil(e.items / 2)) || e.items,
                        i = (e.center && -1 * n) || 0,
                        r =
                          (t.property && void 0 !== t.property.value
                            ? t.property.value
                            : this._core.current()) + i,
                        o = this._core.clones().length,
                        s = a.proxy(function (t, e) {
                          this.load(e);
                        }, this);
                      for (
                        0 < e.lazyLoadEager &&
                        ((n += e.lazyLoadEager),
                        e.loop && ((r -= e.lazyLoadEager), n++));
                        i++ < n;

                      )
                        this.load(o / 2 + this._core.relative(r)),
                          o &&
                            a.each(
                              this._core.clones(this._core.relative(r)),
                              s
                            ),
                          r++;
                    }
                  }, this),
              }),
              (this._core.options = a.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (n.prototype.load = function (t) {
              var e = this._core.$stage.children().eq(t),
                n = e && e.find(".owl-lazy");
              !n ||
                -1 < a.inArray(e.get(0), this._loaded) ||
                (n.each(
                  a.proxy(function (t, e) {
                    var n,
                      i = a(e),
                      r =
                        (1 < o.devicePixelRatio && i.attr("data-src-retina")) ||
                        i.attr("data-src") ||
                        i.attr("data-srcset");
                    this._core.trigger("load", { element: i, url: r }, "lazy"),
                      i.is("img")
                        ? i
                            .one(
                              "load.owl.lazy",
                              a.proxy(function () {
                                i.css("opacity", 1),
                                  this._core.trigger(
                                    "loaded",
                                    { element: i, url: r },
                                    "lazy"
                                  );
                              }, this)
                            )
                            .attr("src", r)
                        : i.is("source")
                        ? i
                            .one(
                              "load.owl.lazy",
                              a.proxy(function () {
                                this._core.trigger(
                                  "loaded",
                                  { element: i, url: r },
                                  "lazy"
                                );
                              }, this)
                            )
                            .attr("srcset", r)
                        : (((n = new Image()).onload = a.proxy(function () {
                            i.css({
                              "background-image": 'url("' + r + '")',
                              opacity: "1",
                            }),
                              this._core.trigger(
                                "loaded",
                                { element: i, url: r },
                                "lazy"
                              );
                          }, this)),
                          (n.src = r));
                  }, this)
                ),
                this._loaded.push(e.get(0)));
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this._core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (s, n, t, e) {
          var i = function (t) {
            (this._core = t),
              (this._previousHeight = null),
              (this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": s.proxy(
                  function (t) {
                    t.namespace &&
                      this._core.settings.autoHeight &&
                      this.update();
                  },
                  this
                ),
                "changed.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    "position" === t.property.name &&
                    this.update();
                }, this),
                "loaded.owl.lazy": s.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    t.element
                      .closest("." + this._core.settings.itemClass)
                      .index() === this._core.current() &&
                    this.update();
                }, this),
              }),
              (this._core.options = s.extend(
                {},
                i.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
            var e = this;
            s(n).on("load", function () {
              e._core.settings.autoHeight && e.update();
            }),
              s(n).resize(function () {
                e._core.settings.autoHeight &&
                  (null != e._intervalId && clearTimeout(e._intervalId),
                  (e._intervalId = setTimeout(function () {
                    e.update();
                  }, 250)));
              });
          };
          (i.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (i.prototype.update = function () {
              var t = this._core._current,
                e = t + this._core.settings.items,
                n = this._core.settings.lazyLoad,
                i = this._core.$stage.children().toArray().slice(t, e),
                r = [],
                o = 0;
              s.each(i, function (t, e) {
                r.push(s(e).height());
              }),
                (o = Math.max.apply(null, r)) <= 1 &&
                  n &&
                  this._previousHeight &&
                  (o = this._previousHeight),
                (this._previousHeight = o),
                this._core.$stage
                  .parent()
                  .height(o)
                  .addClass(this._core.settings.autoHeightClass);
            }),
            (i.prototype.destroy = function () {
              var t, e;
              for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (s.fn.owlCarousel.Constructor.Plugins.AutoHeight = i);
        })(window.Zepto || window.jQuery, window, document),
        (function (u, t, e, n) {
          var i = function (t) {
            (this._core = t),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                "initialized.owl.carousel": u.proxy(function (t) {
                  t.namespace &&
                    this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"],
                    });
                }, this),
                "resize.owl.carousel": u.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen() &&
                    t.preventDefault();
                }, this),
                "refreshed.owl.carousel": u.proxy(function (t) {
                  t.namespace &&
                    this._core.is("resizing") &&
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }, this),
                "changed.owl.carousel": u.proxy(function (t) {
                  t.namespace &&
                    "position" === t.property.name &&
                    this._playing &&
                    this.stop();
                }, this),
                "prepared.owl.carousel": u.proxy(function (t) {
                  if (t.namespace) {
                    var e = u(t.content).find(".owl-video");
                    e.length &&
                      (e.css("display", "none"), this.fetch(e, u(t.content)));
                  }
                }, this),
              }),
              (this._core.options = u.extend(
                {},
                i.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                u.proxy(function (t) {
                  this.play(t);
                }, this)
              );
          };
          (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (i.prototype.fetch = function (t, e) {
              var n = t.attr("data-vimeo-id")
                  ? "vimeo"
                  : t.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube",
                i =
                  t.attr("data-vimeo-id") ||
                  t.attr("data-youtube-id") ||
                  t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
              if (!s) throw new Error("Missing video URL.");
              if (
                -1 <
                (i = s.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ))[3].indexOf("youtu")
              )
                n = "youtube";
              else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
              else {
                if (!(-1 < i[3].indexOf("vzaar")))
                  throw new Error("Video URL not supported.");
                n = "vzaar";
              }
              (i = i[6]),
                (this._videos[s] = { type: n, id: i, width: r, height: o }),
                e.attr("data-video", s),
                this.thumbnail(t, this._videos[s]);
            }),
            (i.prototype.thumbnail = function (e, t) {
              var n,
                i,
                r =
                  t.width && t.height
                    ? "width:" + t.width + "px;height:" + t.height + "px;"
                    : "",
                o = e.find("img"),
                s = "src",
                a = "",
                l = this._core.settings,
                c = function (t) {
                  (n = l.lazyLoad
                    ? u("<div/>", { class: "owl-video-tn " + a, srcType: t })
                    : u("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + t + ")",
                      })),
                    e.after(n),
                    e.after('<div class="owl-video-play-icon"></div>');
                };
              if (
                (e.wrap(u("<div/>", { class: "owl-video-wrapper", style: r })),
                this._core.settings.lazyLoad &&
                  ((s = "data-src"), (a = "owl-lazy")),
                o.length)
              )
                return c(o.attr(s)), o.remove(), !1;
              "youtube" === t.type
                ? ((i = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"),
                  c(i))
                : "vimeo" === t.type
                ? u.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (i = t[0].thumbnail_large), c(i);
                    },
                  })
                : "vzaar" === t.type &&
                  u.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + t.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (i = t.framegrab_url), c(i);
                    },
                  });
            }),
            (i.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                (this._playing = null),
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video");
            }),
            (i.prototype.play = function (t) {
              var e,
                n = u(t.target).closest("." + this._core.settings.itemClass),
                i = this._videos[n.attr("data-video")],
                r = i.width || "100%",
                o = i.height || this._core.$stage.height();
              this._playing ||
                (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (n = this._core.items(this._core.relative(n.index()))),
                this._core.reset(n.index()),
                (e = u(
                  '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                )).attr("height", o),
                e.attr("width", r),
                "youtube" === i.type
                  ? e.attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        i.id +
                        "?autoplay=1&rel=0&v=" +
                        i.id
                    )
                  : "vimeo" === i.type
                  ? e.attr(
                      "src",
                      "//player.vimeo.com/video/" + i.id + "?autoplay=1"
                    )
                  : "vzaar" === i.type &&
                    e.attr(
                      "src",
                      "//view.vzaar.com/" + i.id + "/player?autoplay=true"
                    ),
                u(e)
                  .wrap('<div class="owl-video-frame" />')
                  .insertAfter(n.find(".owl-video")),
                (this._playing = n.addClass("owl-video-playing")));
            }),
            (i.prototype.isInFullScreen = function () {
              var t =
                e.fullscreenElement ||
                e.mozFullScreenElement ||
                e.webkitFullscreenElement;
              return t && u(t).parent().hasClass("owl-video-frame");
            }),
            (i.prototype.destroy = function () {
              var t, e;
              for (t in (this._core.$element.off("click.owl.video"),
              this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (u.fn.owlCarousel.Constructor.Plugins.Video = i);
        })(window.Zepto || window.jQuery, window, document),
        (function (s, t, e, n) {
          var i = function (t) {
            (this.core = t),
              (this.core.options = s.extend({}, i.Defaults, this.core.options)),
              (this.swapping = !0),
              (this.previous = void 0),
              (this.next = void 0),
              (this.handlers = {
                "change.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    "position" == t.property.name &&
                    ((this.previous = this.core.current()),
                    (this.next = t.property.value));
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                  s.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type);
                  }, this),
                "translate.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                      this.core.options.animateIn) &&
                    this.swap();
                }, this),
              }),
              this.core.$element.on(this.handlers);
          };
          (i.Defaults = { animateOut: !1, animateIn: !1 }),
            (i.prototype.swap = function () {
              if (
                1 === this.core.settings.items &&
                s.support.animation &&
                s.support.transition
              ) {
                this.core.speed(0);
                var t,
                  e = s.proxy(this.clear, this),
                  n = this.core.$stage.children().eq(this.previous),
                  i = this.core.$stage.children().eq(this.next),
                  r = this.core.settings.animateIn,
                  o = this.core.settings.animateOut;
                this.core.current() !== this.previous &&
                  (o &&
                    ((t =
                      this.core.coordinates(this.previous) -
                      this.core.coordinates(this.next)),
                    n
                      .one(s.support.animation.end, e)
                      .css({ left: t + "px" })
                      .addClass("animated owl-animated-out")
                      .addClass(o)),
                  r &&
                    i
                      .one(s.support.animation.end, e)
                      .addClass("animated owl-animated-in")
                      .addClass(r));
              }
            }),
            (i.prototype.clear = function (t) {
              s(t.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd();
            }),
            (i.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this.core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (s.fn.owlCarousel.Constructor.Plugins.Animate = i);
        })(window.Zepto || window.jQuery, window, document),
        (function (i, r, e, t) {
          var n = function (t) {
            (this._core = t),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                "changed.owl.carousel": i.proxy(function (t) {
                  t.namespace && "settings" === t.property.name
                    ? this._core.settings.autoplay
                      ? this.play()
                      : this.stop()
                    : t.namespace &&
                      "position" === t.property.name &&
                      this._paused &&
                      (this._time = 0);
                }, this),
                "initialized.owl.carousel": i.proxy(function (t) {
                  t.namespace && this._core.settings.autoplay && this.play();
                }, this),
                "play.owl.autoplay": i.proxy(function (t, e, n) {
                  t.namespace && this.play(e, n);
                }, this),
                "stop.owl.autoplay": i.proxy(function (t) {
                  t.namespace && this.stop();
                }, this),
                "mouseover.owl.autoplay": i.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "mouseleave.owl.autoplay": i.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.play();
                }, this),
                "touchstart.owl.core": i.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "touchend.owl.core": i.proxy(function () {
                  this._core.settings.autoplayHoverPause && this.play();
                }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = i.extend(
                {},
                n.Defaults,
                this._core.options
              ));
          };
          (n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
          }),
            (n.prototype._next = function (t) {
              (this._call = r.setTimeout(
                i.proxy(this._next, this, t),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                  this.read()
              )),
                this._core.is("interacting") ||
                  e.hidden ||
                  this._core.next(t || this._core.settings.autoplaySpeed);
            }),
            (n.prototype.read = function () {
              return new Date().getTime() - this._time;
            }),
            (n.prototype.play = function (t, e) {
              var n;
              this._core.is("rotating") || this._core.enter("rotating"),
                (t = t || this._core.settings.autoplayTimeout),
                (n = Math.min(this._time % (this._timeout || t), t)),
                this._paused
                  ? ((this._time = this.read()), (this._paused = !1))
                  : r.clearTimeout(this._call),
                (this._time += (this.read() % t) - n),
                (this._timeout = t),
                (this._call = r.setTimeout(
                  i.proxy(this._next, this, e),
                  t - n
                ));
            }),
            (n.prototype.stop = function () {
              this._core.is("rotating") &&
                ((this._time = 0),
                (this._paused = !0),
                r.clearTimeout(this._call),
                this._core.leave("rotating"));
            }),
            (n.prototype.pause = function () {
              this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                (this._paused = !0),
                r.clearTimeout(this._call));
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in (this.stop(), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (i.fn.owlCarousel.Constructor.Plugins.autoplay = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (o, t, e, n) {
          "use strict";
          var i = function (t) {
            (this._core = t),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": o.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        o(t.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": o.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      t.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": o.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(t.position, 1);
                }, this),
                "changed.owl.carousel": o.proxy(function (t) {
                  t.namespace && "position" == t.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": o.proxy(function (t) {
                  t.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": o.proxy(function (t) {
                  t.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = o.extend(
                {},
                i.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (i.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (i.prototype.initialize = function () {
              var t,
                n = this._core.settings;
              for (t in ((this._controls.$relative = (
                n.navContainer
                  ? o(n.navContainer)
                  : o("<div>")
                      .addClass(n.navContainerClass)
                      .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = o("<" + n.navElement + ">")
                .addClass(n.navClass[0])
                .html(n.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  o.proxy(function (t) {
                    this.prev(n.navSpeed);
                  }, this)
                )),
              (this._controls.$next = o("<" + n.navElement + ">")
                .addClass(n.navClass[1])
                .html(n.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  o.proxy(function (t) {
                    this.next(n.navSpeed);
                  }, this)
                )),
              n.dotsData ||
                (this._templates = [
                  o('<button role="button">')
                    .addClass(n.dotClass)
                    .append(o("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                n.dotsContainer
                  ? o(n.dotsContainer)
                  : o("<div>").addClass(n.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                o.proxy(function (t) {
                  var e = o(t.target).parent().is(this._controls.$absolute)
                    ? o(t.target).index()
                    : o(t.target).parent().index();
                  t.preventDefault(), this.to(e, n.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[t] = o.proxy(this[t], this);
            }),
            (i.prototype.destroy = function () {
              var t, e, n, i, r;
              for (t in ((r = this._core.settings), this._handlers))
                this.$element.off(t, this._handlers[t]);
              for (e in this._controls)
                "$relative" === e && r.navContainer
                  ? this._controls[e].html("")
                  : this._controls[e].remove();
              for (i in this.overides) this._core[i] = this._overrides[i];
              for (n in Object.getOwnPropertyNames(this))
                "function" != typeof this[n] && (this[n] = null);
            }),
            (i.prototype.update = function () {
              var t,
                e,
                n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s =
                  o.center || o.autoWidth || o.dotsData
                    ? 1
                    : o.dotsEach || o.items;
              if (
                ("page" !== o.slideBy &&
                  (o.slideBy = Math.min(o.slideBy, o.items)),
                o.dots || "page" == o.slideBy)
              )
                for (this._pages = [], t = n, e = 0; t < i; t++) {
                  if (s <= e || 0 === e) {
                    if (
                      (this._pages.push({
                        start: Math.min(r, t - n),
                        end: t - n + s - 1,
                      }),
                      Math.min(r, t - n) === r)
                    )
                      break;
                    e = 0;
                  }
                  e += this._core.mergers(this._core.relative(t));
                }
            }),
            (i.prototype.draw = function () {
              var t,
                e = this._core.settings,
                n = this._core.items().length <= e.items,
                i = this._core.relative(this._core.current()),
                r = e.loop || e.rewind;
              this._controls.$relative.toggleClass("disabled", !e.nav || n),
                e.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !r && i <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !r && i >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !e.dots || n),
                e.dots &&
                  ((t =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  e.dotsData && 0 != t
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : 0 < t
                    ? this._controls.$absolute.append(
                        new Array(1 + t).join(this._templates[0])
                      )
                    : t < 0 &&
                      this._controls.$absolute.children().slice(t).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(o.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (i.prototype.onTrigger = function (t) {
              var e = this._core.settings;
              t.page = {
                index: o.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  e &&
                  (e.center || e.autoWidth || e.dotsData
                    ? 1
                    : e.dotsEach || e.items),
              };
            }),
            (i.prototype.current = function () {
              var n = this._core.relative(this._core.current());
              return o
                .grep(
                  this._pages,
                  o.proxy(function (t, e) {
                    return t.start <= n && t.end >= n;
                  }, this)
                )
                .pop();
            }),
            (i.prototype.getPosition = function (t) {
              var e,
                n,
                i = this._core.settings;
              return (
                "page" == i.slideBy
                  ? ((e = o.inArray(this.current(), this._pages)),
                    (n = this._pages.length),
                    t ? ++e : --e,
                    (e = this._pages[((e % n) + n) % n].start))
                  : ((e = this._core.relative(this._core.current())),
                    (n = this._core.items().length),
                    t ? (e += i.slideBy) : (e -= i.slideBy)),
                e
              );
            }),
            (i.prototype.next = function (t) {
              o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (i.prototype.prev = function (t) {
              o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (i.prototype.to = function (t, e, n) {
              var i;
              !n && this._pages.length
                ? ((i = this._pages.length),
                  o.proxy(this._overrides.to, this._core)(
                    this._pages[((t % i) + i) % i].start,
                    e
                  ))
                : o.proxy(this._overrides.to, this._core)(t, e);
            }),
            (o.fn.owlCarousel.Constructor.Plugins.Navigation = i);
        })(window.Zepto || window.jQuery, window, document),
        (function (i, r, t, e) {
          "use strict";
          var n = function (t) {
            (this._core = t),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": i.proxy(function (t) {
                  t.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    i(r).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": i.proxy(function (t) {
                  if (t.namespace) {
                    var e = i(t.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content;
                  }
                }, this),
                "changed.owl.carousel": i.proxy(function (t) {
                  if (t.namespace && "position" === t.property.name) {
                    var n = this._core.items(
                        this._core.relative(this._core.current())
                      ),
                      e = i
                        .map(this._hashes, function (t, e) {
                          return t === n ? e : null;
                        })
                        .join();
                    if (!e || r.location.hash.slice(1) === e) return;
                    r.location.hash = e;
                  }
                }, this),
              }),
              (this._core.options = i.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              i(r).on(
                "hashchange.owl.navigation",
                i.proxy(function (t) {
                  var e = r.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[e] && n.index(this._hashes[e]);
                  void 0 !== i &&
                    i !== this._core.current() &&
                    this._core.to(this._core.relative(i), !1, !0);
                }, this)
              );
          };
          (n.Defaults = { URLhashListener: !1 }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in (i(r).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (i.fn.owlCarousel.Constructor.Plugins.Hash = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (r, t, e, o) {
          function n(t, n) {
            var i = !1,
              e = t.charAt(0).toUpperCase() + t.slice(1);
            return (
              r.each(
                (t + " " + a.join(e + " ") + e).split(" "),
                function (t, e) {
                  if (s[e] !== o) return (i = !n || e), !1;
                }
              ),
              i
            );
          }
          function i(t) {
            return n(t, !0);
          }
          var s = r("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            };
          !!n("transition") &&
            ((r.support.transition = new String(i("transition"))),
            (r.support.transition.end =
              l.transition.end[r.support.transition])),
            !!n("animation") &&
              ((r.support.animation = new String(i("animation"))),
              (r.support.animation.end = l.animation.end[r.support.animation])),
            n("transform") &&
              ((r.support.transform = new String(i("transform"))),
              (r.support.transform3d = !!n("perspective")));
        })(window.Zepto || window.jQuery, window, document),
        (function (t) {
          "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" == typeof exports
            ? t(require("jquery"))
            : t(jQuery);
        })(function (o) {
          var s = function (t, e) {
            (this.$element = o(t)),
              (this.options = o.extend({}, s.DEFAULTS, this.dataOptions(), e)),
              this.init();
          };
          (s.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function (t, e) {
              return t.toFixed(e.decimals);
            },
            onUpdate: null,
            onComplete: null,
          }),
            (s.prototype.init = function () {
              (this.value = this.options.from),
                (this.loops = Math.ceil(
                  this.options.speed / this.options.refreshInterval
                )),
                (this.loopCount = 0),
                (this.increment =
                  (this.options.to - this.options.from) / this.loops);
            }),
            (s.prototype.dataOptions = function () {
              var t = {
                  from: this.$element.data("from"),
                  to: this.$element.data("to"),
                  speed: this.$element.data("speed"),
                  refreshInterval: this.$element.data("refresh-interval"),
                  decimals: this.$element.data("decimals"),
                },
                e = Object.keys(t);
              for (var n in e) {
                var i = e[n];
                void 0 === t[i] && delete t[i];
              }
              return t;
            }),
            (s.prototype.update = function () {
              (this.value += this.increment),
                this.loopCount++,
                this.render(),
                "function" == typeof this.options.onUpdate &&
                  this.options.onUpdate.call(this.$element, this.value),
                this.loopCount >= this.loops &&
                  (clearInterval(this.interval),
                  (this.value = this.options.to),
                  "function" == typeof this.options.onComplete &&
                    this.options.onComplete.call(this.$element, this.value));
            }),
            (s.prototype.render = function () {
              var t = this.options.formatter.call(
                this.$element,
                this.value,
                this.options
              );
              this.$element.text(t);
            }),
            (s.prototype.restart = function () {
              this.stop(), this.init(), this.start();
            }),
            (s.prototype.start = function () {
              this.stop(),
                this.render(),
                (this.interval = setInterval(
                  this.update.bind(this),
                  this.options.refreshInterval
                ));
            }),
            (s.prototype.stop = function () {
              this.interval && clearInterval(this.interval);
            }),
            (s.prototype.toggle = function () {
              this.interval ? this.stop() : this.start();
            }),
            (o.fn.countTo = function (r) {
              return this.each(function () {
                var t = o(this),
                  e = t.data("countTo"),
                  n = "object" == typeof r ? r : {},
                  i = "string" == typeof r ? r : "start";
                (!e || "object" == typeof r) &&
                  (e && e.stop(), t.data("countTo", (e = new s(this, n)))),
                  e[i].call(e);
              });
            });
        }),
        (function () {
          "use strict";
          function e(t) {
            if (!t)
              throw new Error("No options passed to Waypoint constructor");
            if (!t.element)
              throw new Error(
                "No element option passed to Waypoint constructor"
              );
            if (!t.handler)
              throw new Error(
                "No handler option passed to Waypoint constructor"
              );
            (this.key = "waypoint-" + n),
              (this.options = e.Adapter.extend({}, e.defaults, t)),
              (this.element = this.options.element),
              (this.adapter = new e.Adapter(this.element)),
              (this.callback = t.handler),
              (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
              (this.enabled = this.options.enabled),
              (this.triggerPoint = null),
              (this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
              })),
              (this.context = e.Context.findOrCreateByElement(
                this.options.context
              )),
              e.offsetAliases[this.options.offset] &&
                (this.options.offset = e.offsetAliases[this.options.offset]),
              this.group.add(this),
              this.context.add(this),
              (o[this.key] = this),
              (n += 1);
          }
          var n = 0,
            o = {};
          (e.prototype.queueTrigger = function (t) {
            this.group.queueTrigger(this, t);
          }),
            (e.prototype.trigger = function (t) {
              this.enabled && this.callback && this.callback.apply(this, t);
            }),
            (e.prototype.destroy = function () {
              this.context.remove(this),
                this.group.remove(this),
                delete o[this.key];
            }),
            (e.prototype.disable = function () {
              return (this.enabled = !1), this;
            }),
            (e.prototype.enable = function () {
              return this.context.refresh(), (this.enabled = !0), this;
            }),
            (e.prototype.next = function () {
              return this.group.next(this);
            }),
            (e.prototype.previous = function () {
              return this.group.previous(this);
            }),
            (e.invokeAll = function (t) {
              var e = [];
              for (var n in o) e.push(o[n]);
              for (var i = 0, r = e.length; i < r; i++) e[i][t]();
            }),
            (e.destroyAll = function () {
              e.invokeAll("destroy");
            }),
            (e.disableAll = function () {
              e.invokeAll("disable");
            }),
            (e.enableAll = function () {
              for (var t in (e.Context.refreshAll(), o)) o[t].enabled = !0;
              return this;
            }),
            (e.refreshAll = function () {
              e.Context.refreshAll();
            }),
            (e.viewportHeight = function () {
              return (
                window.innerHeight || document.documentElement.clientHeight
              );
            }),
            (e.viewportWidth = function () {
              return document.documentElement.clientWidth;
            }),
            (e.adapters = []),
            (e.defaults = {
              context: window,
              continuous: !0,
              enabled: !0,
              group: "default",
              horizontal: !1,
              offset: 0,
            }),
            (e.offsetAliases = {
              "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
              },
              "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
              },
            }),
            (window.Waypoint = e);
        })(),
        (function () {
          "use strict";
          function e(t) {
            (this.element = t),
              (this.Adapter = g.Adapter),
              (this.adapter = new this.Adapter(t)),
              (this.key = "waypoint-context-" + n),
              (this.didScroll = !1),
              (this.didResize = !1),
              (this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop(),
              }),
              (this.waypoints = { vertical: {}, horizontal: {} }),
              (t.waypointContextKey = this.key),
              (i[t.waypointContextKey] = this),
              (n += 1),
              g.windowContext ||
                ((g.windowContext = !0), (g.windowContext = new e(window))),
              this.createThrottledScrollHandler(),
              this.createThrottledResizeHandler();
          }
          var n = 0,
            i = {},
            g = window.Waypoint,
            t = window.onload;
          (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
          }),
            (e.prototype.checkEmpty = function () {
              var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                n = this.element == this.element.window;
              t &&
                e &&
                !n &&
                (this.adapter.off(".waypoints"), delete i[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
              function t() {
                e.handleResize(), (e.didResize = !1);
              }
              var e = this;
              this.adapter.on("resize.waypoints", function () {
                e.didResize || ((e.didResize = !0), g.requestAnimationFrame(t));
              });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
              function t() {
                e.handleScroll(), (e.didScroll = !1);
              }
              var e = this;
              this.adapter.on("scroll.waypoints", function () {
                (!e.didScroll || g.isTouch) &&
                  ((e.didScroll = !0), g.requestAnimationFrame(t));
              });
            }),
            (e.prototype.handleResize = function () {
              g.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
              var t = {},
                e = {
                  horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                  },
                  vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                  },
                };
              for (var n in e) {
                var i = e[n],
                  r = i.newScroll > i.oldScroll ? i.forward : i.backward;
                for (var o in this.waypoints[n]) {
                  var s = this.waypoints[n][o];
                  if (null !== s.triggerPoint) {
                    var a = i.oldScroll < s.triggerPoint,
                      l = i.newScroll >= s.triggerPoint;
                    ((a && l) || (!a && !l)) &&
                      (s.queueTrigger(r), (t[s.group.id] = s.group));
                  }
                }
              }
              for (var c in t) t[c].flushTriggers();
              this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll,
              };
            }),
            (e.prototype.innerHeight = function () {
              return this.element == this.element.window
                ? g.viewportHeight()
                : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
              delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
              return this.element == this.element.window
                ? g.viewportWidth()
                : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
              var t = [];
              for (var e in this.waypoints)
                for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
              for (var i = 0, r = t.length; i < r; i++) t[i].destroy();
            }),
            (e.prototype.refresh = function () {
              var t,
                e = this.element == this.element.window,
                n = e ? void 0 : this.adapter.offset(),
                i = {};
              for (var r in (this.handleScroll(),
              (t = {
                horizontal: {
                  contextOffset: e ? 0 : n.left,
                  contextScroll: e ? 0 : this.oldScroll.x,
                  contextDimension: this.innerWidth(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left",
                  offsetProp: "left",
                },
                vertical: {
                  contextOffset: e ? 0 : n.top,
                  contextScroll: e ? 0 : this.oldScroll.y,
                  contextDimension: this.innerHeight(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up",
                  offsetProp: "top",
                },
              }))) {
                var o = t[r];
                for (var s in this.waypoints[r]) {
                  var a,
                    l,
                    c,
                    u,
                    h = this.waypoints[r][s],
                    d = h.options.offset,
                    f = h.triggerPoint,
                    p = 0,
                    m = null == f;
                  h.element !== h.element.window &&
                    (p = h.adapter.offset()[o.offsetProp]),
                    "function" == typeof d
                      ? (d = d.apply(h))
                      : "string" == typeof d &&
                        ((d = parseFloat(d)),
                        -1 < h.options.offset.indexOf("%") &&
                          (d = Math.ceil((o.contextDimension * d) / 100))),
                    (a = o.contextScroll - o.contextOffset),
                    (h.triggerPoint = Math.floor(p + a - d)),
                    (l = f < o.oldScroll),
                    (c = h.triggerPoint >= o.oldScroll),
                    (u = !l && !c),
                    !m && l && c
                      ? (h.queueTrigger(o.backward), (i[h.group.id] = h.group))
                      : !m && u
                      ? (h.queueTrigger(o.forward), (i[h.group.id] = h.group))
                      : m &&
                        o.oldScroll >= h.triggerPoint &&
                        (h.queueTrigger(o.forward), (i[h.group.id] = h.group));
                }
              }
              return (
                g.requestAnimationFrame(function () {
                  for (var t in i) i[t].flushTriggers();
                }),
                this
              );
            }),
            (e.findOrCreateByElement = function (t) {
              return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
              for (var t in i) i[t].refresh();
            }),
            (e.findByElement = function (t) {
              return i[t.waypointContextKey];
            }),
            (window.onload = function () {
              t && t(), e.refreshAll();
            }),
            (g.requestAnimationFrame = function (t) {
              (
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (t) {
                  window.setTimeout(t, 1e3 / 60);
                }
              ).call(window, t);
            }),
            (g.Context = e);
        })(),
        (function () {
          "use strict";
          function s(t, e) {
            return t.triggerPoint - e.triggerPoint;
          }
          function a(t, e) {
            return e.triggerPoint - t.triggerPoint;
          }
          function e(t) {
            (this.name = t.name),
              (this.axis = t.axis),
              (this.id = this.name + "-" + this.axis),
              (this.waypoints = []),
              this.clearTriggerQueues(),
              (n[this.axis][this.name] = this);
          }
          var n = { vertical: {}, horizontal: {} },
            i = window.Waypoint;
          (e.prototype.add = function (t) {
            this.waypoints.push(t);
          }),
            (e.prototype.clearTriggerQueues = function () {
              this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (e.prototype.flushTriggers = function () {
              for (var t in this.triggerQueues) {
                var e = this.triggerQueues[t],
                  n = "up" === t || "left" === t;
                e.sort(n ? a : s);
                for (var i = 0, r = e.length; i < r; i += 1) {
                  var o = e[i];
                  (o.options.continuous || i === e.length - 1) &&
                    o.trigger([t]);
                }
              }
              this.clearTriggerQueues();
            }),
            (e.prototype.next = function (t) {
              this.waypoints.sort(s);
              var e = i.Adapter.inArray(t, this.waypoints);
              return e === this.waypoints.length - 1
                ? null
                : this.waypoints[e + 1];
            }),
            (e.prototype.previous = function (t) {
              this.waypoints.sort(s);
              var e = i.Adapter.inArray(t, this.waypoints);
              return e ? this.waypoints[e - 1] : null;
            }),
            (e.prototype.queueTrigger = function (t, e) {
              this.triggerQueues[e].push(t);
            }),
            (e.prototype.remove = function (t) {
              var e = i.Adapter.inArray(t, this.waypoints);
              -1 < e && this.waypoints.splice(e, 1);
            }),
            (e.prototype.first = function () {
              return this.waypoints[0];
            }),
            (e.prototype.last = function () {
              return this.waypoints[this.waypoints.length - 1];
            }),
            (e.findOrCreate = function (t) {
              return n[t.axis][t.name] || new e(t);
            }),
            (i.Group = e);
        })(),
        (function () {
          "use strict";
          function i(t) {
            return t === t.window;
          }
          function r(t) {
            return i(t) ? t : t.defaultView;
          }
          function t(t) {
            (this.element = t), (this.handlers = {});
          }
          var e = window.Waypoint;
          (t.prototype.innerHeight = function () {
            return i(this.element)
              ? this.element.innerHeight
              : this.element.clientHeight;
          }),
            (t.prototype.innerWidth = function () {
              return i(this.element)
                ? this.element.innerWidth
                : this.element.clientWidth;
            }),
            (t.prototype.off = function (t, e) {
              function n(t, e, n) {
                for (var i = 0, r = e.length - 1; i < r; i++) {
                  var o = e[i];
                  (n && n !== o) || t.removeEventListener(o);
                }
              }
              var i = t.split("."),
                r = i[0],
                o = i[1],
                s = this.element;
              if (o && this.handlers[o] && r)
                n(s, this.handlers[o][r], e), (this.handlers[o][r] = []);
              else if (r)
                for (var a in this.handlers)
                  n(s, this.handlers[a][r] || [], e),
                    (this.handlers[a][r] = []);
              else if (o && this.handlers[o]) {
                for (var l in this.handlers[o]) n(s, this.handlers[o][l], e);
                this.handlers[o] = {};
              }
            }),
            (t.prototype.offset = function () {
              if (!this.element.ownerDocument) return null;
              var t = this.element.ownerDocument.documentElement,
                e = r(this.element.ownerDocument),
                n = { top: 0, left: 0 };
              return (
                this.element.getBoundingClientRect &&
                  (n = this.element.getBoundingClientRect()),
                {
                  top: n.top + e.pageYOffset - t.clientTop,
                  left: n.left + e.pageXOffset - t.clientLeft,
                }
              );
            }),
            (t.prototype.on = function (t, e) {
              var n = t.split("."),
                i = n[0],
                r = n[1] || "__default",
                o = (this.handlers[r] = this.handlers[r] || {});
              (o[i] = o[i] || []).push(e), this.element.addEventListener(i, e);
            }),
            (t.prototype.outerHeight = function (t) {
              var e,
                n = this.innerHeight();
              return (
                t &&
                  !i(this.element) &&
                  ((e = window.getComputedStyle(this.element)),
                  (n += parseInt(e.marginTop, 10)),
                  (n += parseInt(e.marginBottom, 10))),
                n
              );
            }),
            (t.prototype.outerWidth = function (t) {
              var e,
                n = this.innerWidth();
              return (
                t &&
                  !i(this.element) &&
                  ((e = window.getComputedStyle(this.element)),
                  (n += parseInt(e.marginLeft, 10)),
                  (n += parseInt(e.marginRight, 10))),
                n
              );
            }),
            (t.prototype.scrollLeft = function () {
              var t = r(this.element);
              return t ? t.pageXOffset : this.element.scrollLeft;
            }),
            (t.prototype.scrollTop = function () {
              var t = r(this.element);
              return t ? t.pageYOffset : this.element.scrollTop;
            }),
            (t.extend = function () {
              function t(t, e) {
                if ("object" == typeof t && "object" == typeof e)
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t;
              }
              for (
                var e = Array.prototype.slice.call(arguments),
                  n = 1,
                  i = e.length;
                n < i;
                n++
              )
                t(e[0], e[n]);
              return e[0];
            }),
            (t.inArray = function (t, e, n) {
              return null == e ? -1 : e.indexOf(t, n);
            }),
            (t.isEmptyObject = function (t) {
              for (var e in t) return !1;
              return !0;
            }),
            e.adapters.push({ name: "noframework", Adapter: t }),
            (e.Adapter = t);
        })(),
        (function () {
          "use strict";
          if ("object" == typeof window)
            if (
              "IntersectionObserver" in window &&
              "IntersectionObserverEntry" in window &&
              "intersectionRatio" in window.IntersectionObserverEntry.prototype
            )
              "isIntersecting" in window.IntersectionObserverEntry.prototype ||
                Object.defineProperty(
                  window.IntersectionObserverEntry.prototype,
                  "isIntersecting",
                  {
                    get: function () {
                      return 0 < this.intersectionRatio;
                    },
                  }
                );
            else {
              var m = window.document,
                e = [];
              (t.prototype.THROTTLE_TIMEOUT = 100),
                (t.prototype.POLL_INTERVAL = null),
                (t.prototype.USE_MUTATION_OBSERVER = !0),
                (t.prototype.observe = function (e) {
                  if (
                    !this._observationTargets.some(function (t) {
                      return t.element == e;
                    })
                  ) {
                    if (!e || 1 != e.nodeType)
                      throw new Error("target must be an Element");
                    this._registerInstance(),
                      this._observationTargets.push({
                        element: e,
                        entry: null,
                      }),
                      this._monitorIntersections(),
                      this._checkForIntersections();
                  }
                }),
                (t.prototype.unobserve = function (e) {
                  (this._observationTargets = this._observationTargets.filter(
                    function (t) {
                      return t.element != e;
                    }
                  )),
                    this._observationTargets.length ||
                      (this._unmonitorIntersections(),
                      this._unregisterInstance());
                }),
                (t.prototype.disconnect = function () {
                  (this._observationTargets = []),
                    this._unmonitorIntersections(),
                    this._unregisterInstance();
                }),
                (t.prototype.takeRecords = function () {
                  var t = this._queuedEntries.slice();
                  return (this._queuedEntries = []), t;
                }),
                (t.prototype._initThresholds = function (t) {
                  var e = t || [0];
                  return (
                    Array.isArray(e) || (e = [e]),
                    e.sort().filter(function (t, e, n) {
                      if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t)
                        throw new Error(
                          "threshold must be a number between 0 and 1 inclusively"
                        );
                      return t !== n[e - 1];
                    })
                  );
                }),
                (t.prototype._parseRootMargin = function (t) {
                  var e = (t || "0px").split(/\s+/).map(function (t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e)
                      throw new Error(
                        "rootMargin must be specified in pixels or percent"
                      );
                    return { value: parseFloat(e[1]), unit: e[2] };
                  });
                  return (
                    (e[1] = e[1] || e[0]),
                    (e[2] = e[2] || e[0]),
                    (e[3] = e[3] || e[1]),
                    e
                  );
                }),
                (t.prototype._monitorIntersections = function () {
                  this._monitoringIntersections ||
                    ((this._monitoringIntersections = !0),
                    this.POLL_INTERVAL
                      ? (this._monitoringInterval = setInterval(
                          this._checkForIntersections,
                          this.POLL_INTERVAL
                        ))
                      : (n(window, "resize", this._checkForIntersections, !0),
                        n(m, "scroll", this._checkForIntersections, !0),
                        this.USE_MUTATION_OBSERVER &&
                          "MutationObserver" in window &&
                          ((this._domObserver = new MutationObserver(
                            this._checkForIntersections
                          )),
                          this._domObserver.observe(m, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0,
                          }))));
                }),
                (t.prototype._unmonitorIntersections = function () {
                  this._monitoringIntersections &&
                    ((this._monitoringIntersections = !1),
                    clearInterval(this._monitoringInterval),
                    (this._monitoringInterval = null),
                    i(window, "resize", this._checkForIntersections, !0),
                    i(m, "scroll", this._checkForIntersections, !0),
                    this._domObserver &&
                      (this._domObserver.disconnect(),
                      (this._domObserver = null)));
                }),
                (t.prototype._checkForIntersections = function () {
                  var a = this._rootIsInDom(),
                    l = a
                      ? this._getRootRect()
                      : {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        };
                  this._observationTargets.forEach(function (t) {
                    var e = t.element,
                      n = g(e),
                      i = this._rootContainsTarget(e),
                      r = t.entry,
                      o =
                        a && i && this._computeTargetAndRootIntersection(e, l),
                      s = (t.entry = new c({
                        time:
                          window.performance &&
                          performance.now &&
                          performance.now(),
                        target: e,
                        boundingClientRect: n,
                        rootBounds: l,
                        intersectionRect: o,
                      }));
                    r
                      ? a && i
                        ? this._hasCrossedThreshold(r, s) &&
                          this._queuedEntries.push(s)
                        : r && r.isIntersecting && this._queuedEntries.push(s)
                      : this._queuedEntries.push(s);
                  }, this),
                    this._queuedEntries.length &&
                      this._callback(this.takeRecords(), this);
                }),
                (t.prototype._computeTargetAndRootIntersection = function (
                  t,
                  e
                ) {
                  if ("none" != window.getComputedStyle(t).display) {
                    for (
                      var n, i, r, o, s, a, l, c, u = g(t), h = v(t), d = !1;
                      !d;

                    ) {
                      var f = null,
                        p = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                      if ("none" == p.display) return;
                      if (
                        (h == this.root || h == m
                          ? ((d = !0), (f = e))
                          : h != m.body &&
                            h != m.documentElement &&
                            "visible" != p.overflow &&
                            (f = g(h)),
                        f &&
                          ((n = f),
                          (i = u),
                          (r = Math.max(n.top, i.top)),
                          (o = Math.min(n.bottom, i.bottom)),
                          (s = Math.max(n.left, i.left)),
                          (c = o - r),
                          !(u = 0 <=
                            (l = (a = Math.min(n.right, i.right)) - s) &&
                            0 <= c && {
                              top: r,
                              bottom: o,
                              left: s,
                              right: a,
                              width: l,
                              height: c,
                            })))
                      )
                        break;
                      h = v(h);
                    }
                    return u;
                  }
                }),
                (t.prototype._getRootRect = function () {
                  var t;
                  if (this.root) t = g(this.root);
                  else {
                    var e = m.documentElement,
                      n = m.body;
                    t = {
                      top: 0,
                      left: 0,
                      right: e.clientWidth || n.clientWidth,
                      width: e.clientWidth || n.clientWidth,
                      bottom: e.clientHeight || n.clientHeight,
                      height: e.clientHeight || n.clientHeight,
                    };
                  }
                  return this._expandRectByRootMargin(t);
                }),
                (t.prototype._expandRectByRootMargin = function (n) {
                  var t = this._rootMarginValues.map(function (t, e) {
                      return "px" == t.unit
                        ? t.value
                        : (t.value * (e % 2 ? n.width : n.height)) / 100;
                    }),
                    e = {
                      top: n.top - t[0],
                      right: n.right + t[1],
                      bottom: n.bottom + t[2],
                      left: n.left - t[3],
                    };
                  return (
                    (e.width = e.right - e.left),
                    (e.height = e.bottom - e.top),
                    e
                  );
                }),
                (t.prototype._hasCrossedThreshold = function (t, e) {
                  var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                    i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                  if (n !== i)
                    for (var r = 0; r < this.thresholds.length; r++) {
                      var o = this.thresholds[r];
                      if (o == n || o == i || o < n != o < i) return !0;
                    }
                }),
                (t.prototype._rootIsInDom = function () {
                  return !this.root || r(m, this.root);
                }),
                (t.prototype._rootContainsTarget = function (t) {
                  return r(this.root || m, t);
                }),
                (t.prototype._registerInstance = function () {
                  e.indexOf(this) < 0 && e.push(this);
                }),
                (t.prototype._unregisterInstance = function () {
                  var t = e.indexOf(this);
                  -1 != t && e.splice(t, 1);
                }),
                (window.IntersectionObserver = t),
                (window.IntersectionObserverEntry = c);
            }
          function c(t) {
            (this.time = t.time),
              (this.target = t.target),
              (this.rootBounds = t.rootBounds),
              (this.boundingClientRect = t.boundingClientRect),
              (this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0,
              }),
              (this.isIntersecting = !!t.intersectionRect);
            var e = this.boundingClientRect,
              n = e.width * e.height,
              i = this.intersectionRect,
              r = i.width * i.height;
            this.intersectionRatio = n
              ? Number((r / n).toFixed(4))
              : this.isIntersecting
              ? 1
              : 0;
          }
          function t(t, e) {
            var n,
              i,
              r,
              o = e || {};
            if ("function" != typeof t)
              throw new Error("callback must be a function");
            if (o.root && 1 != o.root.nodeType)
              throw new Error("root must be an Element");
            (this._checkForIntersections =
              ((n = this._checkForIntersections.bind(this)),
              (i = this.THROTTLE_TIMEOUT),
              (r = null),
              function () {
                r ||
                  (r = setTimeout(function () {
                    n(), (r = null);
                  }, i));
              })),
              (this._callback = t),
              (this._observationTargets = []),
              (this._queuedEntries = []),
              (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
              (this.thresholds = this._initThresholds(o.threshold)),
              (this.root = o.root || null),
              (this.rootMargin = this._rootMarginValues
                .map(function (t) {
                  return t.value + t.unit;
                })
                .join(" "));
          }
          function n(t, e, n, i) {
            "function" == typeof t.addEventListener
              ? t.addEventListener(e, n, i || !1)
              : "function" == typeof t.attachEvent &&
                t.attachEvent("on" + e, n);
          }
          function i(t, e, n, i) {
            "function" == typeof t.removeEventListener
              ? t.removeEventListener(e, n, i || !1)
              : "function" == typeof t.detatchEvent &&
                t.detatchEvent("on" + e, n);
          }
          function g(t) {
            var e;
            try {
              e = t.getBoundingClientRect();
            } catch (t) {}
            return e
              ? ((e.width && e.height) ||
                  (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                  }),
                e)
              : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
          function r(t, e) {
            for (var n = e; n; ) {
              if (n == t) return !0;
              n = v(n);
            }
            return !1;
          }
          function v(t) {
            var e = t.parentNode;
            return e && 11 == e.nodeType && e.host
              ? e.host
              : e && e.assignedSlot
              ? e.assignedSlot.parentNode
              : e;
          }
        })(),
        (function (t, e) {
          "object" ===
            ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
          "undefined" != typeof module
            ? (module.exports = e())
            : "function" == typeof define && define.amd
            ? define(e)
            : (t.LazyLoad = e());
        })(this, function () {
          "use strict";
          var r = "undefined" != typeof window,
            o =
              (r && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = r && "IntersectionObserver" in window,
            n = r && "classList" in document.createElement("p"),
            a = {
              elements_selector: "img",
              container: o || r ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              load_delay: 0,
              auto_unobserve: !0,
              callback_enter: null,
              callback_exit: null,
              callback_reveal: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              use_native: !1,
            },
            l = function (t, e) {
              var n,
                i = new t(e);
              try {
                n = new CustomEvent("LazyLoad::Initialized", {
                  detail: { instance: i },
                });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  "LazyLoad::Initialized",
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(n);
            },
            h = function (t, e) {
              return t.getAttribute("data-" + e);
            },
            d = function (t, e, n) {
              var i = "data-" + e;
              null !== n ? t.setAttribute(i, n) : t.removeAttribute(i);
            },
            f = function (t) {
              return "true" === h(t, "was-processed");
            },
            p = function (t, e) {
              return d(t, "ll-timeout", e);
            },
            m = function (t) {
              return h(t, "ll-timeout");
            },
            g = function (t, e) {
              t && t(e);
            },
            v = function (t, e) {
              (t._loadingCount += e),
                0 === t._elements.length &&
                  0 === t._loadingCount &&
                  g(t._settings.callback_finish);
            },
            i = function (t) {
              for (var e, n = [], i = 0; (e = t.children[i]); i += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            c = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            u = function (t, e) {
              c(t, "sizes", h(t, e.data_sizes)),
                c(t, "srcset", h(t, e.data_srcset)),
                c(t, "src", h(t, e.data_src));
            },
            y = {
              IMG: function (t, e) {
                var n = t.parentNode;
                n &&
                  "PICTURE" === n.tagName &&
                  i(n).forEach(function (t) {
                    u(t, e);
                  }),
                  u(t, e);
              },
              IFRAME: function (t, e) {
                c(t, "src", h(t, e.data_src));
              },
              VIDEO: function (t, e) {
                i(t).forEach(function (t) {
                  c(t, "src", h(t, e.data_src));
                }),
                  c(t, "src", h(t, e.data_src)),
                  t.load();
              },
            },
            _ = function (t, e) {
              n
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            b = function (t, e) {
              n
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            w = function (t, e, n) {
              t.addEventListener(e, n);
            },
            x = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            E = function (t, e, n) {
              x(t, "load", e), x(t, "loadeddata", e), x(t, "error", n);
            },
            T = function (t, e, n) {
              var i = n._settings,
                r = e ? i.class_loaded : i.class_error,
                o = e ? i.callback_loaded : i.callback_error,
                s = t.target;
              b(s, i.class_loading), _(s, r), g(o, s), v(n, -1);
            },
            C = ["IMG", "IFRAME", "VIDEO"],
            D = function (t, e) {
              var n = e._observer;
              A(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
            },
            S = function (t) {
              var e = m(t);
              e && (clearTimeout(e), p(t, null));
            },
            A = function (t, e, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = e._settings;
              (!n && f(t)) ||
                (-1 < C.indexOf(t.tagName) &&
                  ((r = e),
                  (l = function t(e) {
                    T(e, !0, r), E(i, t, c);
                  }),
                  (a = c =
                    function t(e) {
                      T(e, !1, r), E(i, l, t);
                    }),
                  w((o = i = t), "load", (s = l)),
                  w(o, "loadeddata", s),
                  w(o, "error", a),
                  _(t, u.class_loading)),
                (function (t, e) {
                  var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = e._settings,
                    c = t.tagName,
                    u = y[c];
                  if (u)
                    return (
                      u(t, l),
                      v(e, 1),
                      (e._elements =
                        ((n = e._elements),
                        (i = t),
                        n.filter(function (t) {
                          return t !== i;
                        })))
                    );
                  (s = h((r = t), (o = l).data_src)),
                    (a = h(r, o.data_bg)),
                    s && (r.style.backgroundImage = 'url("'.concat(s, '")')),
                    a && (r.style.backgroundImage = a);
                })(t, e),
                d(t, "was-processed", "true"),
                g(u.callback_reveal, t),
                g(u.callback_set, t));
            },
            k = ["IMG", "IFRAME"],
            I = function (t, e) {
              return ((i =
                t || (n = e).container.querySelectorAll(n.elements_selector)),
              Array.prototype.slice.call(i)).filter(function (t) {
                return !f(t);
              });
              var n, i;
            },
            t = function (t, e) {
              var i, h, n;
              (this._settings = _extends({}, a, t)),
                (this._loadingCount = 0),
                (h = this),
                !!s &&
                  (h._observer = new IntersectionObserver(
                    function (t) {
                      t.forEach(function (t) {
                        return (u = t).isIntersecting || 0 < u.intersectionRatio
                          ? ((a = t.target),
                            (c = (l = h)._settings),
                            g(c.callback_enter, a),
                            void (c.load_delay
                              ? ((e = a),
                                (i = (n = l)._settings.load_delay),
                                (r = m(e)) ||
                                  ((r = setTimeout(function () {
                                    D(e, n), S(e);
                                  }, i)),
                                  p(e, r)))
                              : D(a, l)))
                          : ((o = t.target),
                            (s = h._settings),
                            g(s.callback_exit, o),
                            void (s.load_delay && S(o)));
                        var e, n, i, r, o, s, a, l, c, u;
                      });
                    },
                    {
                      root:
                        (n = h._settings).container === document
                          ? null
                          : n.container,
                      rootMargin: n.thresholds || n.threshold + "px",
                    }
                  )),
                this.update(e),
                (i = this),
                r &&
                  window.addEventListener("online", function (t) {
                    var e, n;
                    _toConsumableArray(
                      (n = (e = i)._settings).container.querySelectorAll(
                        "." + n.class_error
                      )
                    ).forEach(function (t) {
                      b(t, n.class_error), d(t, "was-processed", null);
                    }),
                      e.update();
                  });
            };
          return (
            (t.prototype = {
              update: function (t) {
                var e,
                  n = this,
                  i = this._settings;
                (this._elements = I(t, i)),
                  !o && this._observer
                    ? (i.use_native &&
                        "loading" in HTMLImageElement.prototype &&
                        ((e = this)._elements.forEach(function (t) {
                          -1 !== k.indexOf(t.tagName) &&
                            (t.setAttribute("loading", "lazy"), A(t, e));
                        }),
                        (this._elements = I(t, i))),
                      this._elements.forEach(function (t) {
                        n._observer.observe(t);
                      }))
                    : this.loadAll();
              },
              destroy: function () {
                var e = this;
                this._observer &&
                  (this._elements.forEach(function (t) {
                    e._observer.unobserve(t);
                  }),
                  (this._observer = null)),
                  (this._elements = null),
                  (this._settings = null);
              },
              load: function (t, e) {
                A(t, this, e);
              },
              loadAll: function () {
                var e = this;
                this._elements.forEach(function (t) {
                  D(t, e);
                });
              },
            }),
            r &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, i = 0; (n = e[i]); i += 1) l(t, n);
                  else l(t, e);
              })(t, window.lazyLoadOptions),
            t
          );
        });
      var target = "",
        hrefLink = "",
        oldX = 0,
        oldY = 0,
        element_oldTop = 0,
        element_oldLeft = 0,
        currentScrollValue = 0,
        previousScrollValue = 0,
        videoLink = "",
        imgSrc = "",
        form = "",
        formData = "",
        formMessages = "",
        url = "",
        pageName = "",
        sections = [],
        targetDate = "";
      $(window).on("load", function () {
        setTimeout(function () {
          $("#loader").addClass("hide"), $("main:not(.home)").addClass("show");
        }, 200);
      }),
        $(document).ready(function () {
          var s, a;
          $(".hover_moving_effect").on({
            mouseenter: function (t) {
              (element_oldTop = $(this).css("top")),
                (element_oldLeft = $(this).css("left")),
                t.pageX > oldX
                  ? $(this).animate({ left: "20" })
                  : $(this).animate({ left: "-20" }),
                t.pageY > oldY
                  ? $(this).animate({ top: "20" })
                  : $(this).animate({ top: "-20" }),
                (oldX = t.pageX),
                (oldY = t.pageY);
            },
            mouseleave: function () {
              $(this).animate({ top: element_oldTop, left: element_oldLeft });
            },
          }),
            (function () {
              if (0 < $(".owl-carousel").length) {
                $("#testimonials-section .owl-carousel").owlCarousel({
                  items: 1,
                  loop: !0,
                  autoplay: !0,
                  autoplayHoverPause: !0,
                  dots: !1,
                  nav: !0,
                  navText: ["", ""],
                  rtl: !!$("body").is("[dir='rtl']"),
                });
                var t = $("#screenshots-section .owl-carousel");
                $("#screenshots-carousel-1 .owl-carousel").owlCarousel({
                  items: 3,
                  loop: !0,
                  autoplay: !0,
                  autoplayHoverPause: !0,
                  center: !0,
                  dots: !1,
                  nav: !1,
                  rtl: !!$("body").is("[dir='rtl']"),
                  responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                  },
                }),
                  $("#screenshots-carousel-2 .owl-carousel").owlCarousel({
                    items: 6,
                    loop: !0,
                    autoplay: !0,
                    autoplayHoverPause: !0,
                    center: !0,
                    dots: !1,
                    nav: !1,
                    rtl: !!$("body").is("[dir='rtl']"),
                    margin: 5,
                    autoWidth: !0,
                    responsive: {
                      0: { items: 1 },
                      480: { items: 2 },
                      768: { items: 3 },
                      1024: { items: 6 },
                    },
                  }),
                  (i = t)
                    .parents("section")
                    .find(".carousel-navigation .next")
                    .on("click", function () {
                      i.trigger("next.owl.carousel", [300]);
                    }),
                  i
                    .parents("section")
                    .find(".carousel-navigation .prev")
                    .on("click", function () {
                      i.trigger("prev.owl.carousel", [300]);
                    }),
                  (n = (e = t)
                    .parents("section")
                    .find(".carousel-indicators .dot")).on(
                    "click",
                    function () {
                      e.trigger("to.owl.carousel", [$(this).index(), 300]),
                        $(this)
                          .addClass("active")
                          .siblings()
                          .removeClass("active");
                    }
                  ),
                  e.on("change.owl.carousel", function (t) {
                    var e =
                      t.item.index + 1 - t.relatedTarget._clones.length / 2;
                    n.eq(e).addClass("active").siblings().removeClass("active");
                  });
              }
              var e, n, i;
            })(),
            $(".categories a[data-toggle=collapse]").on("click", function () {
              $(this)
                .parents("li")
                .siblings("li")
                .find(".collapse")
                .collapse("hide");
            }),
            $("[data-video-link*='.']").on("click", function () {
              (videoLink = $(this).attr("data-video-link")),
                $("#video-modal iframe").attr("src", videoLink),
                $("#video-modal").modal();
            }),
            $(".zoomIn-img img,.zoomIn-img ").on("click", function () {
              (imgSrc = $(this).attr("src")),
                $("#image-modal img").attr("src", imgSrc),
                $("#image-modal").modal();
            }),
            $("#screenshots-carousel .owl-item").on("click", function () {
              (imgSrc = $(this).find("img").attr("src")),
                $("#image-modal img").attr("src", imgSrc),
                $("#image-modal").modal();
            }),
            (url = window.location.pathname.split("/")),
            (pageName = url[url.length - 1]),
            $("header a[ href*='" + pageName + "']").addClass("active"),
            $("header .dropdown-item.active")
              .parent(".dropdown-menu")
              .siblings(".dropdown-toggle")
              .addClass("active"),
            $("main").is(".home") &&
              (0 < $("#achievements-section").length &&
                new Waypoint({
                  element: document.getElementById("achievements-section"),
                  offset: "45%",
                  handler: function () {
                    $(".counter").countTo({ speed: 2e3 }), this.destroy();
                  },
                }),
              (sections = $(
                ".home #about-section , .home #features-section,.home #howItWorking-section , .home #team-section ,.home #pricing-section, .home #download-section , .home  #fqa-section ,.home #blog-section"
              )).each(function (t) {
                new Waypoint({
                  element: this,
                  offset: "25%",
                  handler: function () {
                    $(sections[t]).toggleClass("show"), this.destroy();
                  },
                });
              })),
            (targetDate = $("#countDown").attr("data-targetDate")),
            (s = new Date(targetDate).getTime()),
            (a = setInterval(function () {
              var t = new Date().getTime(),
                e = s - t,
                n = Math.floor(e / 864e5),
                i = Math.floor((e % 864e5) / 36e5),
                r = Math.floor((e % 36e5) / 6e4),
                o = Math.floor((e % 6e4) / 1e3);
              $("#countDown .days p").text(n),
                $("#countDown .hours p").text(i),
                $("#countDown .minutes p").text(r),
                $("#countDown .seconds p").text(o),
                e < 0 &&
                  (clearInterval(a),
                  (document.getElementById("countDown").innerHTML = "EXPIRED"));
            }, 1e3)),
            window.addEventListener(
              "load",
              function () {
                var t = document.getElementsByClassName("needs-validation");
                Array.prototype.filter.call(t, function (e) {
                  e.addEventListener(
                    "submit",
                    function (t) {
                      !1 === e.checkValidity() &&
                        (t.preventDefault(), t.stopPropagation()),
                        e.classList.add("was-validated");
                    },
                    !1
                  );
                });
              },
              !1
            ),
            (form = $(".contact-form form")),
            (formData = ""),
            (formMessages = $(".contact-form .form-messages .alert")),
            $(form).submit(function (t) {
              t.preventDefault(),
                (formData = $(form).serialize()),
                $.ajax({
                  type: "POST",
                  url: $(form).attr("action"),
                  data: formData,
                })
                  .done(function (t) {
                    $(formMessages).removeClass("alert-danger"),
                      $(formMessages).addClass("alert-success"),
                      $(formMessages).text(t),
                      $("form").trigger("reset"),
                      $(form).removeClass("was-validated"),
                      $(formMessages).slideDown("slow"),
                      $("html, body").animate(
                        { scrollTop: $(".form-messages").offset().top - 200 },
                        1e3
                      ),
                      setTimeout(function () {
                        $(formMessages).slideUp(),
                          $(formMessages).removeClass(
                            "alert-danger ,alert-success"
                          ),
                          $(formMessages).text(" ");
                      }, 5e4);
                  })
                  .fail(function (t) {
                    $(formMessages).removeClass("alert-success,"),
                      $(formMessages).addClass("alert-danger"),
                      "" !== t.responseText
                        ? $(formMessages).text(t.responseText)
                        : $(formMessages).text(
                            "Oops! An error occured and your message could not be sent."
                          ),
                      $(formMessages).slideDown("slow"),
                      $("html, body").animate(
                        { scrollTop: $(".form-messages").offset().top - 200 },
                        1e3
                      ),
                      setTimeout(function () {
                        $(formMessages).slideUp(),
                          $(formMessages).removeClass(
                            "alert-danger ,alert-success"
                          ),
                          $(formMessages).text(" ");
                      }, 5e4);
                  });
            }),
            $("#top-btn").on("click", function () {
              $("html,body").stop(!0, !1).animate({ scrollTop: 0 }, 2e3);
            }),
            $(
              'a[href*="#"]:not([data-toggle="tab"]):not([href="#"]):not([href="#!"]):not([class*="control"]):not([class*="modal"]):not([data-toggle="collapse"]):not([href*="modal"]'
            ).on("click", function () {
              (target = $(this.hash)),
                $("html, body").animate(
                  { scrollTop: $(target).offset().top },
                  1e3
                );
            }),
            $("header a:not(.dropdown-toggle) ").on("click", function () {
              $("header a:not(.dropdown-item)").removeClass("active"),
                $(this).addClass("active"),
                $(".navbar-collapse").collapse("hide");
            }),
            new LazyLoad({ elements_selector: ".lazy" }),
            $(window).scroll(function () {
              100 < (currentScrollValue = $(window).scrollTop())
                ? $("header #navbar").addClass("scrolling")
                : $("header #navbar").removeClass("scrolling"),
                $("main").hasClass("home")
                  ? previousScrollValue < currentScrollValue &&
                    400 < currentScrollValue
                    ? $(" #navbar").slideUp()
                    : $(" #navbar").slideDown()
                  : ((currentScrollValue = $(window).scrollTop()),
                    previousScrollValue < currentScrollValue
                      ? $(" #navbar").slideUp()
                      : $(" #navbar").slideDown()),
                (previousScrollValue = currentScrollValue);
            });
        });


      src="https://www.googletagmanager.com/gtag/js?id=UA-56934545-9"
      async=""


      function gtag() {
        dataLayer.push(arguments);
      }
      (window.dataLayer = window.dataLayer || []),
        gtag("js", new Date()),
        gtag("config", "UA-56934545-9");


      var link = $("head base").attr("href");
      $.get((null != link ? link : "") + "option-box.html", function (n) {
        $("body").append(n);
      });
