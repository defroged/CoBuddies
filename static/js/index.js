! function() {
    "use strict";
    var e, t = {
            5579: function(e, t, r) {
                var n = r(2541),
                    i = r(5020);
                (0, n.X)("page-home", i.HomePage)
            },
            8897: function(e, t, r) {
                r.r(t), r.d(t, {
                    InlineSliderItemListAsync: function() {
                        return g
                    }
                }), r(2070), r(2004), r(8407), r(6394), r(8288), r(5677), r(2129), r(4655), r(288), r(4458), r(3675), r(4517), r(9751), r(8833), r(815), r(5090), r(9174);
                var n = r(5466),
                    i = r(8578),
                    a = r(2546),
                    o = r(8982),
                    l = r(2832),
                    u = r(3632),
                    c = r(8986);

                function s(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.
                        apply(r, n)
                    }
                    return r
                }

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(r), !0).forEach((function(t) {
                                d(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ?
                            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                    }
                    return e
                }

                function d(e, t, r) {
                    return t in
                        e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                }

                function m() {
                    return (m = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function p(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function g(e) {
                    var t, r, o = (0, a.useLayout)().visibleSidebar,
                        s = (t = (0, a.useItemListInlineSlider)(e), r = 13, function(e) {
                                if (Array.isArray(e)) return e
                            }(t) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof
                                Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != r) {
                                    var n, i, a = [],
                                        o = !0,
                                        l = !1;
                                    try {
                                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                                    } catch (e) {
                                        l = !0, i = e
                                    } finally {
                                        try {
                                            o || null ==
                                                r.return || r.return()
                                        } finally {
                                            if (l) throw i
                                        }
                                    }
                                    return a
                                }
                            }(t, r) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return p(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor &&
                                        (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
                                }
                            }(t, r) || function() {
                                throw new TypeError("Invalid attempt to 
                                    destructure non - iterable instance.\nIn order to be iterable, non - array objects must have a[Symbol.iterator]() method.
                                    ")}()),f=s[0],d=s[1],g=s[2],y=s[3],b=s[4],v=s[5],h=s[6],O=s[7],w=s[8],P=s[9],j=s[10],
                                    S = s[11], E = s[12];
                                    return (0, n.useEffect)((function() {
                                        w()
                                    }), [o]), (0, n.useEffect)((function() {
                                        return b(new c.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, v, h)), i.PageStore.on("window_resize", O),
                                            function() {
                                                i.PageStore.removeListener("window_resize", O), g && (g.cancelAll(), b(null))
                                            }
                                    }), []), d ? f.length ? n.createElement("div", {
                                        className: y.listOuter
                                    }, S(), n.createElement("div", {
                                        ref: P,
                                        className: "items-list-wrap"
                                    }, n.createElement("div", {
                                        ref: j,
                                        className: y.list
                                    }, f.map((function(t, r) {
                                        return n.createElement(u.H, m({
                                            key: r
                                        }, (0, u.j)(e, t, r)))
                                    })))), E()) : null : n.createElement(l.K, {
                                        className: y.listOuter
                                    })
                                }
                                g.
                                propTypes = f({}, o.ItemListAsync.propTypes), g.defaultProps = f(f({}, o.ItemListAsync.defaultProps), {}, {
                                    pageItems: 12
                                })
                            }, 8982: function(e, t, r) {
                                r.r(t), r.d(t, {
                                    ItemListAsync: function() {
                                        return y
                                    }
                                }), r(2070), r(2004), r(8407), r(6394), r(8288), r(5677), r(2129), r(4655), r(288), r(4458), r(3675), r(4517), r(9751), r(8833), r(815), r(5090), r(9174);
                                var n = r(5466),
                                    i = r(3074),
                                    a = r.n(i),
                                    o = r(2546),
                                    l = r(7777),
                                    u = r(2832),
                                    c = r(3632),
                                    s = r(8986);

                                function f(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        t && (n = n.filter((function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        }))), r.push.
                                        apply(r, n)
                                    }
                                    return r
                                }

                                function d(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? f(Object(r), !0).forEach((function(t) {
                                                m(e, t, r[t])
                                            })) : Object.getOwnPropertyDescriptors ?
                                            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            }))
                                    }
                                    return e
                                }

                                function m(e, t, r) {
                                    return t in
                                        e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r, e
                                }

                                function p() {
                                    return (p = Object.assign || function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = arguments[t];
                                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                        }
                                        return e
                                    }).apply(this, arguments)
                                }

                                function g(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }

                                function y(e) {
                                    var t, r, i = (t = (0, o.useItemListSync)(e), r = 11, function(e) {
                                            if (Array.isArray(e)) return e
                                        }(t) || function(e, t) {
                                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (
                                                null != r) {
                                                var n, i, a = [],
                                                    o = !0,
                                                    l = !1;
                                                try {
                                                    for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                                                } catch (e) {
                                                    l = !0, i = e
                                                } finally {
                                                    try {
                                                        o || null == r.return || r.return()
                                                    } finally {
                                                        if (l) throw i
                                                    }
                                                }
                                                return a
                                            }
                                        }(t, r) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return g(e, t);
                                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ?
                                                    Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
                                            }
                                        }(t, r) || function() {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order 
                                                    to be iterable, non - array objects must have a[Symbol.iterator]() method.
                                                    ")}()),a=i[0],l=i[1],f=i[2],d=i[3],m=i[4],y=i[5],b=i[6],v=i[7],h=i[8],O=i[9],w=i[10];return(0,n.useEffect)((function(){return d(
                                                    new s.g(e.pageItems, e.maxItems, e.firstItemRequestUrl, e.requestUrl, v, h)),
                                                function() {
                                                    f && (f.cancelAll(), d(null))
                                                }
                                        }),
                                        []), a ? l.length ? n.createElement("div", {
                                    className: m.listOuter
                                }, O(), n.createElement("div", {
                                    ref: y,
                                    className: "items-list-wrap"
                                }, n.createElement("div", {
                                    ref: b,
                                    className: m.list
                                }, l.map((function(t, r) {
                                    return n.createElement(c.H, p({
                                        key: r
                                    }, (0, c.j)(e, t, r)))
                                })))), w()) : null : n.createElement(u.K, {
                                    className: m.listOuter
                                })
                            }
                            y.propTypes = d(d({}, l.s.propTypes), {}, {
                                items: a().array,
                                requestUrl: a().string.isRequired,
                                firstItemRequestUrl: a().string
                            }), y.defaultProps = d(d({}, l.s.defaultProps), {}, {
                                requestUrl: null,
                                firstItemRequestUrl: null,
                                pageItems: 24
                            })
                        },
                        90: function(e, t, r) {
                            var n = this && this.__importDefault || function(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            };
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.
                            MediaMultiListWrapper = void 0;
                            var i = n(r(5466));
                            r(3804), t.MediaMultiListWrapper = function(e) {
                                var t = e.className,
                                    r = e.style,
                                    n = e.children;
                                return i.default.createElement("div", {
                                    className: (t ? t + " " : "") +
                                        "media-list-wrapper",
                                    style: r
                                }, n || null)
                            }
                        }, 5020: function(e, t, r) {
                            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                                        enumerable: !0,
                                        get: function() {
                                            return t[r]
                                        }
                                    })
                                } : function(e, t, r, n) {
                                    void 0 === n && (n = r), e[n] = t[r]
                                }),
                                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                    Object.defineProperty(e, "default", {
                                        enumerable: !0,
                                        value: t
                                    })
                                } : function(e, t) {
                                    e.
                                    default = t
                                }),
                                a = this && this.__importStar || function(e) {
                                    if (e && e.__esModule) return e;
                                    var t = {};
                                    if (null != e)
                                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                    return i(t, e), t
                                };
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HomePage = void 0;
                            var o = a(r(5466)),
                                l = r(3613),
                                u = r(8578),
                                c = r(7180),
                                s = r(90),
                                f = r(8982),
                                d = r(8897),
                                m = r(7637),
                                p = function(e) {
                                    return o.default.createElement(l.LinksConsumer, null, (function(e) {
                                        return o.default.createElement("div", {
                                            className: "empty-media"
                                        }, o.default.createElement("div", {
                                            className: "welcome-title"
                                        }, "Welcome to CoBuddies!"), o.default.createElement(
                                            "div", {
                                                className: "start-uploading"
                                            }, "Start uploading media and sharing your work!"), o.default.createElement("a", {
                                            href: e.user.addMedia,
                                            title: "Upload media",
                                            className: "button-link"
                                        }, o.default.createElement("i", {
                                            className: "material-icons",
                                            "data-icon": "video_call"
                                        }), "UPLOAD MEDIA"))
                                    }))
                                };
                            t.HomePage = function(e) {
                                var t = e.id,
                                    r = void 0 === t ? "home" : t,
                                    n = e.featured_title,
                                    i = void 0 === n ? u.PageStore.get("config-options").
                                pages.home.sections.featured.title: n, a = e.recommended_title, g = void 0 === a ? u.PageStore.get("config-options").pages.home.sections.recommended.title : a, y = e.latest_title, b = void 0 === y ? u.PageStore.get(
                                    "config-options").pages.home.sections.latest.title : y, v = e.latest_view_all_link, h = void 0 !== v && v, O = e.featured_view_all_link, w = void 0 === O || O, P = e.recommended_view_all_link, j = void 0 === P || P, S = o.useState(!1), E = S[0], _ = S[1], A = o.useState(!1), I = A[0], L = A[1], M = o.useState(!1), k = M[0], D = M[1], N = o.useState(!1), U = N[0], C = N[1], q = function(e) {
                                    L(0 < e), _(0 === e)
                                }, T = function(e) {
                                    D(0 < e)
                                }, x = function(e) {
                                    C(0 < e)
                                };
                                return o.default.
                                createElement(m.Page, {
                                    id: r
                                }, o.default.createElement(l.LinksConsumer, null, (function(e) {
                                    return o.default.createElement(l.ApiUrlConsumer, null, (function(t) {
                                        return o.default.createElement(s.MediaMultiListWrapper, {
                                            className: "items-list-ver"
                                        }, u.PageStore.get("config-enabled").pages.featured && u.PageStore.get("config-enabled").pages.featured.enabled && o.default.createElement(c.MediaListRow, {
                                            title: i,
                                            style: k ? void 0 : {
                                                display: "none"
                                            },
                                            viewAllLink: w ? e.featured : null
                                        }, o.default.createElement(d.InlineSliderItemListAsync, {
                                            requestUrl: t.featured,
                                            itemsCountCallback: T,
                                            hideViews: !u.PageStore.get(
                                                "config-media-item").displayViews,
                                            hideAuthor: !u.PageStore.get("config-media-item").displayAuthor,
                                            hideDate: !u.PageStore.get("config-media-item").displayPublishDate
                                        })), u.PageStore.get("config-enabled").pages.recommended && u.PageStore.get("config-enabled").pages.recommended.enabled && o.default.createElement(c.MediaListRow, {
                                                title: g,
                                                style: U ? void 0 : {
                                                    display: "none"
                                                },
                                                viewAllLink: j ? e.recommended : null
                                            }, o.default
                                            .createElement(d.InlineSliderItemListAsync, {
                                                requestUrl: t.recommended,
                                                itemsCountCallback: x,
                                                hideViews: !u.PageStore.get("config-media-item").displayViews,
                                                hideAuthor: !u.PageStore.get("config-media-item").
                                                displayAuthor,
                                                hideDate: !u.PageStore.get("config-media-item").displayPublishDate
                                            })), o.default.createElement(c.MediaListRow, {
                                            title: b,
                                            style: I ? void 0 : {
                                                display: "none"
                                            },
                                            viewAllLink: h ? e.latest : null
                                        }, o.default.createElement(f.ItemListAsync, {
                                            pageItems: 30,
                                            requestUrl: t.media,
                                            itemsCountCallback: q,
                                            hideViews: !u.PageStore.get("config-media-item").displayViews,
                                            hideAuthor: !u.PageStore.get("config-media-item").
                                            displayAuthor,
                                            hideDate: !u.PageStore.get("config-media-item").displayPublishDate
                                        })), E && o.default.createElement(p, null))
                                    }))
                                })))
                            }
                        }
                }, r = {};

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var a = r[e] = {
                        exports: {}
                    };
                    return t[e].call(a.exports, a, a.exports, n), a.exports
                }
                n.m = t, e = [], n.O = function(t, r, i, a) {
                        if (!r) {
                            var o = 1 / 0;
                            for (c = 0; c < e.length; c++) {
                                r = e[c][0], i = e[c][1], a = e[c][2];
                                for (var l = !0, u = 0; u < r.length; u++)(!1 &
                                    a || o >= a) && Object.keys(n.O).every((function(e) {
                                    return n.O[e](r[u])
                                })) ? r.splice(u--, 1) : (l = !1, a < o && (o = a));
                                l && (e.splice(c--, 1), t = i())
                            }
                            return t
                        }
                        a = a || 0;
                        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
                        e[c] = [r, i, a]
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, {
                            a: t
                        }), t
                    }, n.d = function(e, t) {
                        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        })
                    }, n.g = function() {
                        if ("object" == typeof globalThis) return globalThis;
                        try {
                            return this || new Function("return this")()
                        } catch (e) {
                            if ("object" == typeof window) return window
                        }
                    }(), n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(
                            e, "__esModule", {
                                value: !0
                            })
                    }, n.j = 826,
                    function() {
                        var e = {
                            826: 0
                        };
                        n.O.j = function(t) {
                            return 0 === e[t]
                        };
                        var t = function(t, r) {
                                var i, a, o = r[0],
                                    l = r[1],
                                    u = r[2],
                                    c = 0;
                                for (i in l) n.o(l, i) && (n.m[i] = l[i]);
                                if (u) var s = u(n);
                                for (t && t(r); c < o.length; c++) a = o[c], n.o(e, a) && e[a] && e[a][0](), e[o[c]] = 0;
                                return n.O(s)
                            },
                            r = self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || [];
                        r.forEach(t.bind(null, 0)), r.push = t.bind(null,
                            r.push.bind(r))
                    }();
                var i = n.O(void 0, [431], (function() {
                    return n(5579)
                }));
                i = n.O(i)
            }();