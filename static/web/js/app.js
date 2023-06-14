jQuery(window).on("load", function () {
  setInterval(function () {
    jQuery(".preloader").fadeOut("slow");
  }, 2500);
});

jQuery(function () {
  document.getElementById("colecciones") &&
    (960 < $(window).width() &&
      (gsap.from(".listImg", { scale: 1 }),
      gsap.utils.toArray(".listImg").forEach((e) => {
        let t = gsap.to(e, { scale: 1.1, paused: !0, ease: "power2.inOut" });
        e.addEventListener("mouseenter", () => t.play()), e.addEventListener("mouseleave", () => t.reverse());
      })),
    gsap.utils.toArray(".scrollMove").forEach((e) => {
      var t = gsap.timeline().fromTo(e, { y: "10%" }, { y: "0%", ease: "Expo.inOut", stagger: 0.175 });
      ScrollTrigger.create({ trigger: e, start: "top bottom-=100", end: "top 50%", toggleActions: "play none none none", animation: t, scrub: 1.5 });
    }));
});
jQuery(function () {
  var e, n, t;
  document.getElementById("denbora-latente-story") &&
    ((window.onscroll = function () {
      var e, t;
      (e = document.body.scrollTop || document.documentElement.scrollTop), (t = document.documentElement.scrollHeight - document.documentElement.clientHeight), (t = (e / t) * 100), (document.getElementById("myBar").style.width = t + "%");
    }),
    (e = document.getElementById("set-height")),
    (n = document.getElementById("v0")).addEventListener("loadedmetadata", function () {
      e.style.height = 1e3 * Math.floor(n.duration) + "px";
    }),
    window.requestAnimationFrame(function e() {
      var t = window.pageYOffset / 1e3;
      (n.currentTime = t), window.requestAnimationFrame(e);
    }),
    gsap.registerPlugin(ScrollTrigger),
    (function () {
      const l = gsap.utils.checkPrefix("filter"),
        t = /blur\((.+)?px\)/,
        a = (e) => (gsap.getProperty(e, l) || "").match(t) || [];
      gsap.registerPlugin({
        name: "blur",
        get(e) {
          return +a(e)[1] || 0;
        },
        init(e, t) {
          let n = gsap.getProperty(e, l),
            r = "blur(" + t + "px)",
            o = a(e)[0],
            i;
          "none" === n && (n = ""), o ? ((i = n.indexOf(o)), (t = n.substr(0, i) + r + n.substr(i + o.length))) : ((t = n + r), (n += n ? " blur(0px)" : "blur(0px)")), (this.target = e), (this.interp = gsap.utils.interpolate(n, t));
        },
        render(e, t) {
          t.target.style[l] = t.interp(e);
        },
      });
    })(),
    (t = gsap.timeline()).from("#v0", { scrollTrigger: { trigger: "#scroll-secuencia", start: "top 10%", end: "bottom bottom", endTrigger: "#endSecuencia", pin: "#v0", scrub: 1, pinSpacing: !1 }, opacity: 0.25 }),
    t.from("#espacioLatente", { scrollTrigger: { trigger: "#polaroids", start: "top 10%", end: "bottom bottom", pin: "#espacioLatente", scrub: 1, pinSpacing: !1 } })),
    console.log("esta es la de denbora");
});
jQuery(function () {
  var e, o, t;
  document.getElementById("denbora-latente-story2") &&
    ((window.onscroll = function () {
      var e, t;
      (e = document.body.scrollTop || document.documentElement.scrollTop), (t = document.documentElement.scrollHeight - document.documentElement.clientHeight), (t = (e / t) * 100), (document.getElementById("myBar").style.width = t + "%");
    }),
    (e = document.getElementById("set-height")),
    (o = document.getElementById("v0")).addEventListener("loadedmetadata", function () {
      e.style.height = 1e3 * Math.floor(o.duration) + "px";
    }),
    window.requestAnimationFrame(function e() {
      var t = window.pageYOffset / 1e3;
      (o.currentTime = t), window.requestAnimationFrame(e);
    }),
    gsap.registerPlugin(ScrollTrigger),
    (function () {
      const a = gsap.utils.checkPrefix("filter"),
        t = /blur\((.+)?px\)/,
        l = (e) => (gsap.getProperty(e, a) || "").match(t) || [];
      gsap.registerPlugin({
        name: "blur",
        get(e) {
          return +l(e)[1] || 0;
        },
        init(e, t) {
          let o = gsap.getProperty(e, a),
            r = "blur(" + t + "px)",
            i = l(e)[0],
            n;
          "none" === o && (o = ""), i ? ((n = o.indexOf(i)), (t = o.substr(0, n) + r + o.substr(n + i.length))) : ((t = o + r), (o += o ? " blur(0px)" : "blur(0px)")), (this.target = e), (this.interp = gsap.utils.interpolate(o, t));
        },
        render(e, t) {
          t.target.style[a] = t.interp(e);
        },
      });
    })(),
    gsap.timeline().fromTo(".title1", { opacity: 0 }, { opacity: 1, duration: 7, ease: Power2.easeOut }, "<0.5").fromTo(".title2", { opacity: 0 }, { opacity: 1, duration: 7, ease: Power2.easeOut }, "<0.3"),
    (t = gsap.timeline()).to("#titleIntro", {
      scrollTrigger: { trigger: "#portada", start: "top 0", end: "center 50vh", pin: "#titleIntro", scrub: 0.3, pinSpacing: !1 },
      opacity: 0,
      y: 100,
      blur: 250,
      scale: 100,
      ease: Power2.easeInOut,
    }),
    t.to(".videoIntro", { scrollTrigger: { trigger: ".seccion", start: "top 0", endTrigger: ".pIntro", pin: ".videoIntro", scrub: 0.3, pinSpacing: !1 }, opacity: 0, blur: 500, scale: 3, y: -500, ease: Power2.easeInOut }),
    gsap.from("#v0", { scrollTrigger: { trigger: "#scroll-secuencia", endTrigger: "#endSecuencia", start: "top 45vh", end: "center 50vh", pin: "#v0", scrub: 0.6 }, opacity: 0 }),
    gsap
      .timeline({ scrollTrigger: { trigger: "#polaroids", start: "top -500", end: "bottom bottom", pin: "#polaroids", scrub: 0.2 }, ease: Power2.easeInOut })
      .to("#textBG", { rotate: 45 }, "<")
      .from("#polaroid3", { x: -700, rotate: 8, y: 10 }, "<")
      .to("#polaroid3", { x: -1070, rotate: -8, y: 0 }, "<")
      .from("#polaroid1", { rotate: -15 }, "<")
      .to("#polaroid1", { x: 550 }, "<")
      .from("#polaroid2", { y: 10, x: -300 }, "<")
      .to("#polaroid2", { x: -370, y: -10 }, "<")
      .to("#polaroid4", { x: -1950, rotate: -15 }, "<")
      .to("#polaroid6", { x: -400, rotate: 1 }, "<")
      .to("#polaroid5", { x: -2700 }, "<")
      .to("#v0", { scale: 0.2 }, "<")),
    console.log("esta es la de denbora");
});
jQuery(function () {
  var r;
  document.getElementById("empatizando-ia") &&
    (gsap.registerPlugin(ScrollTrigger),
    (function () {
      const n = gsap.utils.checkPrefix("filter"),
        e = /blur\((.+)?px\)/,
        s = (r) => (gsap.getProperty(r, n) || "").match(e) || [];
      gsap.registerPlugin({
        name: "blur",
        get(r) {
          return +s(r)[1] || 0;
        },
        init(r, e) {
          let o = gsap.getProperty(r, n),
            t = "blur(" + e + "px)",
            a = s(r)[0],
            i;
          "none" === o && (o = ""), a ? ((i = o.indexOf(a)), (e = o.substr(0, i) + t + o.substr(i + a.length))) : ((e = o + t), (o += o ? " blur(0px)" : "blur(0px)")), (this.target = r), (this.interp = gsap.utils.interpolate(o, e));
        },
        render(r, e) {
          e.target.style[n] = e.interp(r);
        },
      });
    })(),
    gsap
      .timeline({ scrollTrigger: { trigger: ".collage", start: "top 75%", end: "bottom 85%", scrub: 1 } })
      .from(".lobo", { y: -150, scale: 2 })
      .from(".bolas", { scale: 2, rotation: -100, x: 300 }, "<")
      .from(".wok", { scale: 0 }, "<")
      .from(".box2", { scale: 0 }, "<")
      .from(".chica", { y: 250 }, "<")
      .from(".box", { scale: 0 }, "<")
      .from(".box4", { scale: 0.75 }, "<")
      .to(".truck", { x: -90 }, "<")
      .from(".box3", { scale: 0 }, "<")
      .from(".lines", { scale: 0 }, "<"),
    gsap.utils.toArray(".bocadillo").forEach((r) => {
      var e = gsap.timeline().from(r, { opacity: 0.1, ease: Power2.easeOut });
      ScrollTrigger.create({ trigger: r, start: "top 85%", end: "top 65%", toggleActions: "play none none reverse", animation: e, scrub: 1 });
    }),
    ScrollTrigger.create({ trigger: "#montajesScroll", start: "center center", endTrigger: ".conclusion", end: "top bottom", pin: !0, pinSpacing: !1 }),
    (r = gsap.timeline().from("#casco", { blur: 25 }).from("#casco", { scale: 0.9 }, "<0.1")),
    ScrollTrigger.create({ trigger: "#bocadillo-3", start: "top bottom", end: "center center", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().to("#casco", { opacity: 0 }).from("#montajeCasco", { opacity: 0 }, ">").to("#montajeCasco", { opacity: 0, ease: Power4.easeIn }, ">")),
    ScrollTrigger.create({ trigger: "#bocadillo-4", start: "top center", endTrigger: "#bocadillo-5", end: "top bottom", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#cactus", { opacity: 0 }).from("#cactus", { blur: 70 }, ">0.8").from("#cactus", { scale: 0.9 }, "<0.1").to("#cactus", { opacity: 0 }, ">1")),
    ScrollTrigger.create({ trigger: "#bocadillo-5", start: "top 80%", endTrigger: "#bocadillo-7", end: "top center", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#montajeCactus", { opacity: 0 }, ">").to("#montajeCactus", { opacity: 0, ease: Power4.easeIn }, ">")),
    ScrollTrigger.create({ trigger: "#bocadillo-7", start: "top center", endTrigger: "#bocadillo-8", end: "top bottom", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#tijeras", { opacity: 0 }).from("#tijeras", { blur: 70 }, ">0.8").from("#tijeras", { scale: 0.9 }, "<0.1").to("#tijeras", { opacity: 0 }, ">1")),
    ScrollTrigger.create({ trigger: "#bocadillo-8", start: "top 80%", endTrigger: "#bocadillo-10", end: "top center", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#montajeTijeras", { opacity: 0 }, ">").to("#montajeTijeras", { opacity: 0, ease: Power4.easeIn }, ">")),
    ScrollTrigger.create({ trigger: "#bocadillo-10", start: "top center", endTrigger: "#bocadillo-11", end: "top bottom", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#mirador", { opacity: 0 }).from("#mirador", { blur: 70 }, ">0.8").from("#mirador", { scale: 0.9 }, "<0.1").to("#mirador", { opacity: 0 }, ">1")),
    ScrollTrigger.create({ trigger: "#bocadillo-11", start: "top 80%", endTrigger: "#bocadillo-13", end: "top center", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    (r = gsap.timeline().from("#montajeMirador", { opacity: 0 }, ">").to("#montajeMirador", { ease: Power4.easeIn }, ">")),
    ScrollTrigger.create({ trigger: "#bocadillo-13", start: "top center", endTrigger: ".conclusion", end: "top bottom", toggleActions: "play none none reverse", animation: r, scrub: 0.5 }),
    console.clear(),
    ScrollTrigger.create({
      trigger: ".transition",
      startTrigger: "center 75%",
      end: "bottom 0%",
      onEnter: () => {
        gsap.to("body", { duration: 1.5, backgroundColor: "#22223c" }), gsap.to(".closer", { duration: 3, backgroundColor: "#E8A1D4" }), gsap.from(".lista-links", { backgroundColor: "#A1F0DE" }), gsap.to(".lista-links", { duration: 1, backgroundColor: "#fff" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1, backgroundColor: "#fff" }), gsap.to(".closer", { duration: 3, backgroundColor: "#fff" }), gsap.to(".share", { duration: 1, backgroundColor: "#A1F0DE" });
      },
    }),
    console.clear(),
    (r = gsap.timeline()).to("#original1", { scrollTrigger: { trigger: "#rs1", endTrigger: "#finrs1", start: "+100", pin: "#original1", scrub: 1 }, opacity: 0, ease: Power2.easeOut }),
    r.to("#rs2 #original2", { scrollTrigger: { trigger: "#rs2", endTrigger: "#finrs2", start: "top top", end: "bottom 150", pin: "#original2", scrub: 1 }, opacity: 0, ease: Power2.easeOut }),
    r.to("#rs3 #original3", { scrollTrigger: { trigger: "#rs3", endTrigger: "#finrs3", start: "top top", end: "bottom 150", pin: "#original3", scrub: 1 }, opacity: 0, ease: Power2.easeOut }),
    r.to("#rs4 #original4", { scrollTrigger: { trigger: "#rs4", endTrigger: "#finrs4", start: "top top", end: "bottom 150", pin: "#original4", scrub: 1 }, opacity: 0, duration: 5, ease: Power2.easeOut }),
    r.to("#rs5 #original5", { scrollTrigger: { trigger: "#rs5", endTrigger: "#finrs5", start: "top top", end: "bottom 150", pin: "#original5", scrub: 1 }, opacity: 0, ease: Power2.easeOut }),
    r.to("#rs6 #original6", { scrollTrigger: { trigger: "#rs6", endTrigger: "#finrs6", start: "top top", end: "bottom 150", pin: "#original6", scrub: 1 }, opacity: 0, ease: Power2.easeOut }),
    console.log("empatizando IA"));
});
jQuery(function () {
  document.getElementById("ficha") &&
    (gsap
      .timeline({ scrollTrigger: { trigger: ".fullwrap", start: "top bottom-=100", toggleActions: "start none none none", scrub: 1.2 } })
      .fromTo(".fullwrap", { scale: 1.15 }, { scale: 0.7, ease: "Expo.inOut" }, 0)
      .fromTo(".fullwrap img ", { y: 150, scale: 1 }, { y: -250, scale: 2, ease: "Expo.inOut" }, "<"),
    gsap.timeline({ scrollTrigger: { trigger: "#ficha", start: "top bottom-=100", toggleActions: "start none none none", scrub: 1.5 } }).fromTo(".scrollmove", { y: "10%" }, { y: "-10%", ease: "Expo.inOut", stagger: 0.175 }),
    gsap.to(".imgwrap-h_image", { scrollTrigger: { trigger: ".imgwrap-h", scrub: 1.5, start: "top bottom", end: "bottom -300%", ease: "power2" }, y: "-20%" }),
    gsap.to(".imgwrap-v_image", { scrollTrigger: { trigger: ".imgwrap-v", scrub: 1.5, start: "top bottom", end: "bottom -200%", ease: "power2" }, y: "-10%" }));
});
jQuery(function () {
  document.getElementById("ficha") &&
    (gsap
      .timeline({ scrollTrigger: { trigger: ".fullwrap", start: "top bottom-=100", toggleActions: "start none none none", scrub: 1.2 } })
      .fromTo(".fullwrap", { scale: 1.15 }, { scale: 0.7, ease: "Expo.inOut" }, 0)
      .fromTo(".fullwrap img ", { y: 150, scale: 1 }, { y: -250, scale: 2, ease: "Expo.inOut" }, "<"),
    gsap.timeline({ scrollTrigger: { trigger: "#ficha", start: "top bottom-=100", toggleActions: "start none none none", scrub: 1.5 } }).fromTo(".scrollmove", { y: "10%" }, { y: "-10%", ease: "Expo.inOut", stagger: 0.175 }),
    gsap.to(".imgwrap-h_image", { scrollTrigger: { trigger: ".imgwrap-h", scrub: 1.5, start: "top bottom", end: "bottom -300%", ease: "power2" }, y: "-20%" }),
    gsap.to(".imgwrap-v_image", { scrollTrigger: { trigger: ".imgwrap-v", scrub: 1.5, start: "top bottom", end: "bottom -200%", ease: "power2" }, y: "-10%" }));
});
!(function (e) {
  var t = (function (o, k) {
    "use strict";
    if (k.getElementsByClassName) {
      var D,
        H,
        O = k.documentElement,
        l = o.Date,
        i = o.HTMLPictureElement,
        c = "addEventListener",
        P = "getAttribute",
        d = o[c],
        $ = o.setTimeout,
        u = o.requestAnimationFrame || $,
        f = o.requestIdleCallback,
        I = /^picture$/i,
        a = ["load", "error", "lazyincluded", "_lazyloaded"],
        n = {},
        q = Array.prototype.forEach,
        j = function (e, t) {
          return n[t] || (n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), n[t].test(e[P]("class") || "") && n[t];
        },
        G = function (e, t) {
          j(e, t) || e.setAttribute("class", (e[P]("class") || "").trim() + " " + t);
        },
        J = function (e, t) {
          var n;
          (n = j(e, t)) && e.setAttribute("class", (e[P]("class") || "").replace(n, " "));
        },
        K = function (t, n, e) {
          var i = e ? c : "removeEventListener";
          e && K(t, n),
            a.forEach(function (e) {
              t[i](e, n);
            });
        },
        Q = function (e, t, n, i, a) {
          var r = k.createEvent("Event");
          return n || (n = {}), (n.instance = D), r.initEvent(t, !i, !a), (r.detail = n), e.dispatchEvent(r), r;
        },
        U = function (e, t) {
          var n;
          !i && (n = o.picturefill || H.pf) ? (t && t.src && !e[P]("srcset") && e.setAttribute("srcset", t.src), n({ reevaluate: !0, elements: [e] })) : t && t.src && (e.src = t.src);
        },
        V = function (e, t) {
          return (getComputedStyle(e, null) || {})[t];
        },
        s = function (e, t, n) {
          for (n = n || e.offsetWidth; n < H.minSize && t && !e._lazysizesWidth; ) (n = t.offsetWidth), (t = t.parentNode);
          return n;
        },
        X = (function () {
          var n,
            i,
            t = [],
            a = [],
            r = t,
            s = function () {
              var e = r;
              for (r = t.length ? a : t, n = !0, i = !1; e.length; ) e.shift()();
              n = !1;
            },
            e = function (e, t) {
              n && !t ? e.apply(this, arguments) : (r.push(e), i || ((i = !0), (k.hidden ? $ : u)(s)));
            };
          return (e._lsFlush = s), e;
        })(),
        Y = function (n, e) {
          return e
            ? function () {
                X(n);
              }
            : function () {
                var e = this,
                  t = arguments;
                X(function () {
                  n.apply(e, t);
                });
              };
        },
        Z = function (e) {
          var n,
            i = 0,
            a = H.throttleDelay,
            r = H.ricTimeout,
            t = function () {
              (n = !1), (i = l.now()), e();
            },
            s =
              f && r > 49
                ? function () {
                    f(t, { timeout: r }), r !== H.ricTimeout && (r = H.ricTimeout);
                  }
                : Y(function () {
                    $(t);
                  }, !0);
          return function (e) {
            var t;
            (e = !0 === e) && (r = 33), n || ((n = !0), (t = a - (l.now() - i)), t < 0 && (t = 0), e || t < 9 ? s() : $(s, t));
          };
        },
        ee = function (e) {
          var t,
            n,
            i = 99,
            a = function () {
              (t = null), e();
            },
            r = function () {
              var e = l.now() - n;
              e < i ? $(r, i - e) : (f || a)(a);
            };
          return function () {
            (n = l.now()), t || (t = $(r, i));
          };
        };
      !(function () {
        var e,
          t = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        H = o.lazySizesConfig || o.lazysizesConfig || {};
        for (e in t) e in H || (H[e] = t[e]);
        (o.lazySizesConfig = H),
          $(function () {
            H.init && r();
          });
      })();
      var e = (function () {
          var m,
            z,
            u,
            y,
            t,
            h,
            v,
            g,
            p,
            C,
            b,
            A,
            r = /^img$/i,
            f = /^iframe$/i,
            E = "onscroll" in o && !/(gle|ing)bot/.test(navigator.userAgent),
            _ = 0,
            w = 0,
            M = 0,
            N = -1,
            x = function (e) {
              M--, (!e || M < 0 || !e.target) && (M = 0);
            },
            W = function (e) {
              return null == A && (A = "hidden" == V(k.body, "visibility")), A || ("hidden" != V(e.parentNode, "visibility") && "hidden" != V(e, "visibility"));
            },
            T = function (e, t) {
              var n,
                i = e,
                a = W(e);
              for (g -= t, b += t, p -= t, C += t; a && (i = i.offsetParent) && i != k.body && i != O; ) (a = (V(i, "opacity") || 1) > 0) && "visible" != V(i, "overflow") && ((n = i.getBoundingClientRect()), (a = C > n.left && p < n.right && b > n.top - 1 && g < n.bottom + 1));
              return a;
            },
            e = function () {
              var e,
                t,
                n,
                i,
                a,
                r,
                s,
                o,
                l,
                c,
                d,
                u,
                f = D.elements;
              if ((y = H.loadMode) && M < 8 && (e = f.length)) {
                for (t = 0, N++, c = !H.expand || H.expand < 1 ? (O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370) : H.expand, D._defEx = c, d = c * H.expFactor, u = H.hFac, A = null, w < d && M < 1 && N > 2 && y > 2 && !k.hidden ? ((w = d), (N = 0)) : (w = y > 1 && N > 1 && M < 6 ? c : _); t < e; t++)
                  if (f[t] && !f[t]._lazyRace)
                    if (E)
                      if ((((o = f[t][P]("data-expand")) && (r = 1 * o)) || (r = w), l !== r && ((h = innerWidth + r * u), (v = innerHeight + r), (s = -1 * r), (l = r)), (n = f[t].getBoundingClientRect()), (b = n.bottom) >= s && (g = n.top) <= v && (C = n.right) >= s * u && (p = n.left) <= h && (b || C || p || g) && (H.loadHidden || W(f[t])) && ((z && M < 3 && !o && (y < 3 || N < 4)) || T(f[t], r)))) {
                        if ((R(f[t]), (a = !0), M > 9)) break;
                      } else !a && z && !i && M < 4 && N < 4 && y > 2 && (m[0] || H.preloadAfterLoad) && (m[0] || (!o && (b || C || p || g || "auto" != f[t][P](H.sizesAttr)))) && (i = m[0] || f[t]);
                    else R(f[t]);
                i && !a && R(i);
              }
            },
            n = Z(e),
            B = function (e) {
              var t = e.target;
              if (t._lazyCache) return void delete t._lazyCache;
              x(e), G(t, H.loadedClass), J(t, H.loadingClass), K(t, F), Q(t, "lazyloaded");
            },
            i = Y(B),
            F = function (e) {
              i({ target: e.target });
            },
            S = function (t, n) {
              try {
                t.contentWindow.location.replace(n);
              } catch (e) {
                t.src = n;
              }
            },
            L = function (e) {
              var t,
                n = e[P](H.srcsetAttr);
              (t = H.customMedia[e[P]("data-media") || e[P]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n);
            },
            s = Y(function (e, t, n, i, a) {
              var r, s, o, l, c, d;
              (c = Q(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? G(e, H.autosizesClass) : e.setAttribute("sizes", i)), (s = e[P](H.srcsetAttr)), (r = e[P](H.srcAttr)), a && ((o = e.parentNode), (l = o && I.test(o.nodeName || ""))), (d = t.firesLoad || ("src" in e && (s || r || l))), (c = { target: e }), G(e, H.loadingClass), d && (clearTimeout(u), (u = $(x, 2500)), K(e, F, !0)), l && q.call(o.getElementsByTagName("source"), L), s ? e.setAttribute("srcset", s) : r && !l && (f.test(e.nodeName) ? S(e, r) : (e.src = r)), a && (s || l) && U(e, { src: r })),
                e._lazyRace && delete e._lazyRace,
                J(e, H.lazyClass),
                X(function () {
                  (!d || (e.complete && e.naturalWidth > 1)) &&
                    (B(c),
                    (e._lazyCache = !0),
                    $(function () {
                      "_lazyCache" in e && delete e._lazyCache;
                    }, 9));
                }, !0);
            }),
            R = function (e) {
              var t,
                n = r.test(e.nodeName),
                i = n && (e[P](H.sizesAttr) || e[P]("sizes")),
                a = "auto" == i;
              ((!a && z) || !n || (!e[P]("src") && !e.srcset) || e.complete || j(e, H.errorClass) || !j(e, H.lazyClass)) && ((t = Q(e, "lazyunveilread").detail), a && te.updateElem(e, !0, e.offsetWidth), (e._lazyRace = !0), M++, s(e, t, a, i, n));
            },
            a = function () {
              if (!z) {
                if (l.now() - t < 999) return void $(a, 999);
                var e = ee(function () {
                  (H.loadMode = 3), n();
                });
                (z = !0),
                  (H.loadMode = 3),
                  n(),
                  d(
                    "scroll",
                    function () {
                      3 == H.loadMode && (H.loadMode = 2), e();
                    },
                    !0
                  );
              }
            };
          return {
            _: function () {
              (t = l.now()),
                (D.elements = k.getElementsByClassName(H.lazyClass)),
                (m = k.getElementsByClassName(H.lazyClass + " " + H.preloadClass)),
                d("scroll", n, !0),
                d("resize", n, !0),
                o.MutationObserver ? new MutationObserver(n).observe(O, { childList: !0, subtree: !0, attributes: !0 }) : (O[c]("DOMNodeInserted", n, !0), O[c]("DOMAttrModified", n, !0), setInterval(n, 999)),
                d("hashchange", n, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
                  k[c](e, n, !0);
                }),
                /d$|^c/.test(k.readyState) ? a() : (d("load", a), k[c]("DOMContentLoaded", n), $(a, 2e4)),
                D.elements.length ? (e(), X._lsFlush()) : n();
            },
            checkElems: n,
            unveil: R,
          };
        })(),
        te = (function () {
          var n,
            r = Y(function (e, t, n, i) {
              var a, r, s;
              if (((e._lazysizesWidth = i), (i += "px"), e.setAttribute("sizes", i), I.test(t.nodeName || ""))) for (a = t.getElementsByTagName("source"), r = 0, s = a.length; r < s; r++) a[r].setAttribute("sizes", i);
              n.detail.dataAttr || U(e, n.detail);
            }),
            i = function (e, t, n) {
              var i,
                a = e.parentNode;
              a && ((n = s(e, a, n)), (i = Q(e, "lazybeforesizes", { width: n, dataAttr: !!t })), i.defaultPrevented || ((n = i.detail.width) && n !== e._lazysizesWidth && r(e, a, i, n)));
            },
            e = function () {
              var e,
                t = n.length;
              if (t) for (e = 0; e < t; e++) i(n[e]);
            },
            t = ee(e);
          return {
            _: function () {
              (n = k.getElementsByClassName(H.autosizesClass)), d("resize", t);
            },
            checkElems: t,
            updateElem: i,
          };
        })(),
        r = function () {
          r.i || ((r.i = !0), te._(), e._());
        };
      return (D = { cfg: H, autoSizer: te, loader: e, init: r, uP: U, aC: G, rC: J, hC: j, fire: Q, gW: s, rAF: X });
    }
  })(e, e.document);
  (e.lazySizes = t), "object" == typeof module && module.exports && (module.exports = t);
})(window);
$(function () {
  $("#nuestro-procesolink").on("click", function (e) {
    e.preventDefault(), scroller.scrollTo("#nuestro-proceso", { offset: -100 });
  }),
    $("#investigacionlink").on("click", function (e) {
      e.preventDefault(), scroller.scrollTo("#investigacion", { offset: -100 });
    }),
    $("#cursolink").on("click", function (e) {
      console.log("movida"), e.preventDefault(), scroller.scrollTo("#curso", { offset: -100 });
    }),
    $("#el-estudiolink").on("click", function (e) {
      e.preventDefault(), scroller.scrollTo("#el-estudio", { offset: -100 });
    }),
    $("#contactarlink").on("click", function (e) {
      e.preventDefault(), scroller.scrollTo("#contactar", { offset: -100 });
    }),
    $("#collectionslink").on("click", function (e) {
      e.preventDefault(), scroller.scrollTo("#collections", { offset: -100 });
    }),
    $(function () {
      let e = new URLSearchParams(window.location.search);
      var t = e.has("nuestro-proceso"),
        o = e.has("investigacion"),
        s = e.has("curso"),
        i = e.has("el-estudio"),
        n = e.has("contactar"),
        l = e.has("collections");
      t && scroller.scrollTo("#nuestro-proceso", { offset: -100 }), o && scroller.scrollTo("#investigacion", { offset: -100 }), s && scroller.scrollTo("#curso", { offset: -100 }), i && scroller.scrollTo("#el-estudio", { offset: -100 }), n && scroller.scrollTo("#contactar", { offset: -100 }), l && scroller.scrollTo("#collections", { offset: -100 });
    });
}),
  document.getElementById("canvas") &&
    new p5(function (i) {
      let t = [],
        o = "#22223C";
      (i.setup = function () {
        i.createCanvas(1500, 776), i.colorMode(i.HSB, 360, 100, 100), i.background(o);
        for (let e = 80; e < i.displayHeight - 80; e += 80) t.push(new s(e));
      }),
        (i.draw = function () {
          i.background(o);
          for (var e = 0; e < t.length; e++) t[e].display();
        });
      class s {
        constructor(e) {
          (this.profundidad = e / 0.5), (this.profundidadColor = e / 10), (this.yNoise = i.random(2)), (this.xVertexInterval = 25), (this.xoffDelta = 0.02);
        }
        display() {
          let t = (this.xNoise = 0);
          i.noStroke(), i.fill(328, this.profundidadColor, 140 + 100 * this.yNoise), i.beginShape();
          for (var o = 0; o <= i.width; o += this.xVertexInterval) {
            var s = i.map(i.noise(this.xNoise, this.yNoise), 0, 1, 0, this.profundidad);
            let e = n.create(o, s, t);
            e.display(), (this.xNoise += this.xoffDelta), ++t;
          }
          (this.yNoise += 9e-4), i.endShape();
        }
      }
      class n {
        constructor(e, t, o) {
          (this.off = 0), (this.x = e), (this.y = t), this.color, (this.index = o), (this.indexInterval = 1);
        }
        display() {
          this.index % this.indexInterval == 0 && (i.push(), i.ellipse(this.x - 0.02 * i.frameCount + this.off, this.y - 120 - 0.02 * i.frameCount + this.off, 5), i.pop()), (this.off = i.random(0.1, -0.1));
        }
        static create(e, t, o) {
          return new n(e, t, o);
        }
      }
    }, "canvas"),
  (function () {
    if (document.getElementById("psique")) {
      let t = [
          { x: 99.50890029065451, y: 7.339690854827159 },
          { x: 148.35683496093748, y: 17.79473590240479 },
          { x: 157.27140328153223, y: 34.78643297984265 },
          { x: 158.86653246201575, y: 44.60799184326679 },
          { x: 181.61932971193735, y: 74.99274353164202 },
          { x: 189.76106100124122, y: 79.58237224536539 },
          { x: 198.67230157703162, y: 79.87103271042109 },
          { x: 215.91892550754548, y: 69.65841853595377 },
          { x: 216.7174791378975, y: 79.51458205573559 },
          { x: 217.46588792049886, y: 86.01922994485497 },
          { x: 225.029630507946, y: 80.55253178305625 },
          { x: 233.63809546756744, y: 79.73818526034356 },
          { x: 266.6548067446351, y: 85.35700499038099 },
          { x: 270.9176116423011, y: 69.67704164753556 },
          { x: 311.09712581517545, y: 53.38269720753878 },
          { x: 354.19409951278567, y: 7.1086941098281 },
          { x: 364.07985325086116, y: 5.8490160647612806 },
          { x: 380.82020573998244, y: 44.398699819933626 },
          { x: 386.48591633427145, y: 52.51470049167051 },
          { x: 389.2255846786499, y: 60.91206483230591 },
          { x: 467.4554737910806, y: 94.9814516356038 },
          { x: 474.79316045379636, y: 101.36435075531006 },
          { x: 425.8295348999575, y: 117.448751919657 },
          { x: 415.8325813564114, y: 117.38135905301246 },
          { x: 405.88852738952636, y: 116.28822969055176 },
          { x: 391.65781079125406, y: 142.67696297353507 },
          { x: 399.99894376373294, y: 143.35660198974608 },
          { x: 404.45629797145165, y: 201.83306278598494 },
          { x: 397.04255587664994, y: 205.57062073345486 },
          { x: 380.583079082489, y: 218.56914389729502 },
          { x: 351.0897889366149, y: 234.6304955253601 },
          { x: 342.40518595683574, y: 231.4693549215794 },
          { x: 327.08562401098015, y: 231.26822490131855 },
          { x: 288.4094284442067, y: 260.799776771605 },
          { x: 263.3430888886451, y: 276.55408337736134 },
          { x: 223.74026392501594, y: 285.1361383302808 },
          { x: 219.0792006869316, y: 277.0735262694359 },
          { x: 209.41657210829854, y: 274.946923254923 },
          { x: 133.01322331619264, y: 227.65106396484376 },
          { x: 123.562359375, y: 225.3275625 },
          { x: 78.43775829005241, y: 202.95441712617873 },
          { x: 71.43163093491792, y: 197.98529240453246 },
          { x: 80.77794375, y: 143.639109375 },
          { x: 42.057790964269635, y: 112.29053125810623 },
          { x: 49.860347153329855, y: 75.23905893654226 },
          { x: 68.2485135704467, y: 67.67890760896923 },
          { x: 99.91952661007643, y: 11.066619400775432 },
        ],
        c,
        r = [];
      let a;
      let h = 0;
      const o = ["#A1F0DE", "#E8A1D4", "#9686D2", "#242850"];
      let f = 4;
      new p5(function (n) {
        function e(e) {
          f = n.windowWidth < e ? 0 : 4;
        }
        (n.setup = function () {
          n.createCanvas(n.windowWidth, n.windowHeight - 150), n.angleMode(n.DEGREES), n.noStroke(), (a = 0.45 * n.max(n.width, n.height)), (c = n.shuffle(t)), n.background("#000"), e(n.windowWidth);
        }),
          (n.draw = function () {
            n.background("#fff");
            var t = Math.ceil(2 * (Math.random() - 0.5)) < 1 ? -1 : 1,
              e = n.map(n.noise(0.01 * h, 0), 0, 1, 0, a),
              o = n.map(n.noise(0.001 * h, 1e3), 0, 1, -360, 360),
              s = e * n.cos(o) * 0.5,
              i = e * n.sin(o) * 0.5;
            n.translate(n.width / f, n.height / f);
            for (let e = 0; e < c.length; e += 20) r.push(new l(2 * c[e].x + s * t * (n.mouseX / 4) * 0.01, 2 * c[e].y + i * t));
            n.mouseIsPressed && r.push(new l(n.mouseX, n.mouseY));
            for (let e = 0; e < r.length; e++) r[e].move(), r[e].display();
            for (let e = r.length - 1; 0 <= e; e--) r[e].isFinished() && r.splice(e, 1);
            h++;
          }),
          (n.windowResized = function () {
            n.resizeCanvas(n.windowWidth, n.windowHeight), e(n.windowWidth), console.log("resize");
          });
        class l {
          constructor(e, t) {
            this.init(e, t);
          }
          init(e, t) {
            (this.vel = n.createVector(0, 0)), (this.pos = n.createVector(e, t)), (this.t = n.random(1, 0.01)), (this.lifeMax = n.random(20, 50)), (this.life = this.lifeMax), (this.step = n.random(0.1, 0.5)), (this.dMax = 5 <= n.random(10) ? 10 : 30), (this.d = this.dMax), (this.c = n.color(n.random(o)));
          }
          move() {
            var e = n.map(n.noise(0.01 * this.pos.x, 0.01 * this.pos.y, this.t), 0, 1, -360, 360);
            (this.vel.x = n.cos(e)), (this.vel.y = n.sin(e)), this.pos.add(this.vel);
          }
          isFinished() {
            return (this.life -= this.step), (this.d = n.map(this.life, 0, this.lifeMax, 0, this.dMax)), this.life < 0;
          }
          display() {
            n.fill(this.c), n.circle(this.pos.x, this.pos.y, this.d);
          }
        }
      }, "psique");
    }
  })(),
  (function () {
    var e;
    document.getElementById("invest") &&
      ((e = function (r) {
        let c, a, h, f, e, t, d;
        (r.setup = function () {
          (c = 360), (t = r.color(176, 63, 98)), (e = r.color(34, 34, 60)), (d = 6), r.createCanvas(1e3, 900, r.P2D), r.smooth(8), r.noFill();
        }),
          (r.draw = function () {
            r.background(e),
              r.push(),
              r.translate(r.width / 2, r.height / 2),
              r.stroke(t),
              (function () {
                let t,
                  o,
                  e = r.createVector(0, 0),
                  s = r.createVector(0, -1),
                  i = r.createVector(r.mouseX - r.width / 2, r.mouseY - r.height / 2);
                (t =
                  (t = (function (e, t) {
                    let o = r.atan2(t.y, t.x) - r.atan2(e.y, e.x);
                    o < 0 && (o += r.TWO_PI);
                    return o;
                  })(s, i)) / r.TWO_PI),
                  (o = e.dist(i)),
                  (o /= 12500),
                  0.5 < o ? (o = 0.18) : o;
                for (let e = 0; e < d; ++e) {
                  var n = (e % 2) * r.PI,
                    l = 100 + 60 * e;
                  !(function (t, o, s, e, i, n, l, c) {
                    r.strokeWeight(e), r.beginShape();
                    for (let e = 0; e < l; e++) (f = (e * r.TWO_PI) / l), (a = r.map(r.cos(f - r.TWO_PI * s), -1, 1, 0, 1)), (a = i * r.pow(a, c)), (h = o * (1 + a * r.cos(n * f + 1.5 * r.TWO_PI + t))), r.vertex(h * r.sin(f), -h * r.cos(f));
                    r.endShape(r.CLOSE);
                  })(n, l, t, 1 + 2 * e, o, 14, c, 2.75);
                }
              })(),
              r.pop();
          });
      }),
      new p5(e, "invest"),
      new p5(e, "invest2"));
  })(),
  jQuery(function () {
    jQuery("#6617").on("click", function () {
      $("#6617").is(":checked") ? $("#textarea6667").removeClass("d-none") : $("#textarea6667").addClass("d-none");
    });
  }),
  jQuery(function () {
    jQuery(".nav-mobile").on("click", function () {
      $(this).toggleClass("nav-mobile-active");
      var e = $(".nav-mobile").hasClass("nav-mobile-active");
      $(".nav-init").toggleClass("nav-init-active", e);
    });
  });
var CABLES = (function (i) {
  var n = {};
  function r(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  return (
    (r.m = i),
    (r.c = n),
    (r.d = function (t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var n in e)
          r.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (t, e, i) {
    t.exports = i(1);
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    var n = {};
    i.r(n),
      i.d(n, "getShortOpName", function () {
        return f;
      }),
      i.d(n, "shuffleArray", function () {
        return _;
      }),
      i.d(n, "shortId", function () {
        return b;
      }),
      i.d(n, "uuid", function () {
        return E;
      }),
      i.d(n, "generateUUID", function () {
        return v;
      }),
      i.d(n, "simpleId", function () {
        return x;
      }),
      i.d(n, "smoothStep", function () {
        return A;
      }),
      i.d(n, "smootherStep", function () {
        return y;
      }),
      i.d(n, "clamp", function () {
        return M;
      }),
      i.d(n, "map", function () {
        return S;
      }),
      i.d(n, "cacheBust", function () {
        return O;
      }),
      i.d(n, "copyArray", function () {
        return I;
      }),
      i.d(n, "basename", function () {
        return C;
      }),
      i.d(n, "jsonp", function () {
        return P;
      }),
      i.d(n, "ajaxSync", function () {
        return R;
      }),
      i.d(n, "ajax", function () {
        return L;
      }),
      i.d(n, "request", function () {
        return w;
      }),
      i.d(n, "keyCodeToName", function () {
        return D;
      }),
      i.d(n, "UTILS", function () {
        return g;
      });
    var r = {};
    i.r(r),
      i.d(r, "base64Chars", function () {
        return U;
      }),
      i.d(r, "base64lookup", function () {
        return V;
      }),
      i.d(r, "b64encTypesArray", function () {
        return G;
      }),
      i.d(r, "b64decTypedArray", function () {
        return z;
      });
    var s = {};
    i.r(s),
      i.d(s, "easeExpoIn", function () {
        return Y;
      }),
      i.d(s, "easeExpoOut", function () {
        return Z;
      }),
      i.d(s, "easeExpoInOut", function () {
        return K;
      }),
      i.d(s, "easeCubicIn", function () {
        return q;
      }),
      i.d(s, "easeCubicOut", function () {
        return Q;
      }),
      i.d(s, "easeCubicInOut", function () {
        return J;
      }),
      i.d(s, "ANIM", function () {
        return W;
      }),
      i.d(s, "Anim", function () {
        return $;
      }),
      i.d(s, "TL", function () {
        return tt;
      });
    var o = {};
    i.r(o),
      i.d(o, "PatchConnectionReceiver", function () {
        return Ft;
      }),
      i.d(o, "PatchConnectionSender", function () {
        return Bt;
      }),
      i.d(o, "PatchConnectorBroadcastChannel", function () {
        return Ut;
      });
    class d {
      constructor(t) {
        (this._logs = []), (this.initiator = t);
      }
      stack(t) {
        console.error("[" + this.initiator + "] ", t), console.log(new Error().stack), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "error", t);
      }
      groupCollapsed(t) {
        console.groupCollapsed("[" + this.initiator + "] " + t);
      }
      table(t) {
        console.table(t);
      }
      groupEnd() {
        console.groupEnd();
      }
      error(t) {
        console.error("[" + this.initiator + "]", ...arguments), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "error", arguments);
      }
      info(t) {
        console.error("[" + this.initiator + "]", ...arguments), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "info", arguments);
      }
      warn(t) {
        console.warn("[" + this.initiator + "]", ...arguments), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "warn", arguments);
      }
      verbose() {
        ((CABLES.UI && CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) || !CABLES.logSilent) && console.log("[" + this.initiator + "]", ...arguments), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "verbose", arguments);
      }
      log(t) {
        ((CABLES.UI && CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) || !CABLES.logSilent) && console.log("[" + this.initiator + "]", ...arguments), window.gui && window.gui.emitEvent("coreLogEvent", this.initiator, "log", arguments);
      }
      userInteraction(t) {}
    }
    function a() {
      let t = Math.random().toString(36).substr(2, 9);
      return m.hasOwnProperty(t) && (t = a()), (m[t] = !0), t;
    }
    function l() {
      let i = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const e = (i + 16 * Math.random()) % 16 | 0;
        return (i = Math.floor(i / 16)), ("x" == t ? e : (3 & e) | 8).toString(16);
      });
    }
    const h = {
        EASINGS: ["linear", "absolute", "smoothstep", "smootherstep", "Cubic In", "Cubic Out", "Cubic In Out", "Expo In", "Expo Out", "Expo In Out", "Sin In", "Sin Out", "Sin In Out", "Quart In", "Quart Out", "Quart In Out", "Quint In", "Quint Out", "Quint In Out", "Back In", "Back Out", "Back In Out", "Elastic In", "Elastic Out", "Bounce In", "Bounce Out"],
        EASING_LINEAR: 0,
        EASING_ABSOLUTE: 1,
        EASING_SMOOTHSTEP: 2,
        EASING_SMOOTHERSTEP: 3,
        EASING_CUBICSPLINE: 4,
        EASING_CUBIC_IN: 5,
        EASING_CUBIC_OUT: 6,
        EASING_CUBIC_INOUT: 7,
        EASING_EXPO_IN: 8,
        EASING_EXPO_OUT: 9,
        EASING_EXPO_INOUT: 10,
        EASING_SIN_IN: 11,
        EASING_SIN_OUT: 12,
        EASING_SIN_INOUT: 13,
        EASING_BACK_IN: 14,
        EASING_BACK_OUT: 15,
        EASING_BACK_INOUT: 16,
        EASING_ELASTIC_IN: 17,
        EASING_ELASTIC_OUT: 18,
        EASING_BOUNCE_IN: 19,
        EASING_BOUNCE_OUT: 21,
        EASING_QUART_IN: 22,
        EASING_QUART_OUT: 23,
        EASING_QUART_INOUT: 24,
        EASING_QUINT_IN: 25,
        EASING_QUINT_OUT: 26,
        EASING_QUINT_INOUT: 27,
      },
      u = { OP_PORT_TYPE_VALUE: 0, OP_PORT_TYPE_FUNCTION: 1, OP_PORT_TYPE_OBJECT: 2, OP_PORT_TYPE_TEXTURE: 2, OP_PORT_TYPE_ARRAY: 3, OP_PORT_TYPE_DYNAMIC: 4, OP_PORT_TYPE_STRING: 5, OP_VERSION_PREFIX: "_v" },
      c = { PORT_DIR_IN: 0, PORT_DIR_OUT: 1 },
      p = {
        PACO_CLEAR: 0,
        PACO_VALUECHANGE: 1,
        PACO_OP_DELETE: 2,
        PACO_UNLINK: 3,
        PACO_LINK: 4,
        PACO_LOAD: 5,
        PACO_OP_CREATE: 6,
        PACO_OP_ENABLE: 7,
        PACO_OP_DISABLE: 8,
        PACO_UIATTRIBS: 9,
        PACO_VARIABLES: 10,
        PACO_TRIGGERS: 11,
        PACO_PORT_SETVARIABLE: 12,
        PACO_PORT_SETANIMATED: 13,
        PACO_PORT_ANIM_UPDATED: 14,
        PACO_DESERIALIZE: 15,
      },
      g = {
        float32Concat: function (t, e) {
          t instanceof Float32Array || (t = new Float32Array(t)), e instanceof Float32Array || (e = new Float32Array(e));
          const i = new Float32Array(t.length + e.length);
          return i.set(t), i.set(e, t.length), i;
        },
      },
      f = function (t) {
        let e = t.split(".")[t.split(".").length - 1];
        if (0 < e.indexOf(u.OP_VERSION_PREFIX)) {
          const t = e.split(u.OP_VERSION_PREFIX)[1];
          e = e.substring(0, e.length - (u.OP_VERSION_PREFIX + t).length);
        }
        return e;
      },
      _ = function (e) {
        for (let t = e.length - 1; 0 < t; t--) {
          var i = Math.floor(Math.seededRandom() * (t + 1)),
            n = e[t];
          (e[t] = e[i]), (e[i] = n);
        }
        return e;
      },
      m = {},
      b = a,
      E = l,
      v = l;
    let T = 0;
    const x = function () {
        return T++, T;
      },
      A = function (t) {
        t = Math.max(0, Math.min(1, +t));
        return t * t * (3 - 2 * t);
      },
      y = function (t) {
        t = Math.max(0, Math.min(1, +t));
        return t * t * t * (t * (6 * t - 15) + 10);
      },
      M = function (t, e, i) {
        return Math.min(Math.max(t, e), i);
      },
      S = function (t, e, i, n, r, s) {
        if (i <= t) return r;
        if (t <= e) return n;
        let o = !1;
        var a = Math.min(e, i),
          l = Math.max(e, i);
        a != e && (o = !0);
        let h = !1;
        var u = Math.min(n, r),
          c = Math.max(n, r);
        u != n && (h = !0);
        (i = 0), (e = 0), (i = o ? ((l - t) * (c - u)) / (l - a) : ((t - a) * (c - u)) / (l - a)), (e = h ? c - i : i + u);
        return s ? (1 == s ? n + (t = Math.max(0, Math.min(1, (e - n) / (r - n)))) * t * (3 - 2 * t) * (r - n) : 2 == s ? n + (t = Math.max(0, Math.min(1, (e - n) / (r - n)))) * t * t * (t * (6 * t - 15) + 10) * (r - n) : e) : e;
      };
    (Math.randomSeed = 1),
      (Math.seededRandom = function (t, e) {
        return 0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()), (t = t || 1), (e = e || 0), (Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280), e + (Math.randomSeed / 233280) * (t - e);
      }),
      (g.arrayWriteToEnd = function (e, t) {
        for (let t = 1; t < e.length; t++) e[t - 1] = e[t];
        e[e.length - 1] = t;
      }),
      (g.isNumeric = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }),
      (g.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      }),
      (String.prototype.endl = function () {
        return this + "\n";
      }),
      (String.prototype.startsWith = function (t) {
        return 0 === this.indexOf(t);
      }),
      (String.prototype.endsWith = function (t) {
        return this.match(t + "$") == t;
      });
    const O = function (t) {
        return -1 < t.indexOf("?") ? (t += "&") : (t += "?"), t + "cb=" + CABLES.uuid();
      },
      I = function (e, i) {
        if (!e) return null;
        (i = i || []).length = e.length;
        for (let t = 0; t < e.length; t++) i[t] = e[t];
        return i;
      },
      C = function (t) {
        let e = "";
        if (!t) return "";
        const i = (t + "").split("/");
        return 0 < i.length && ((t = i[i.length - 1].split("?")), (e = t[0]), (t = e.split(".")), (e = t[0])), e;
      };
    let N = null;
    const P = function (t, e) {
        (N = N || 0), N++;
        var i = N;
        CABLES["jsonpFunc" + i] = function (t) {
          e(!1, t);
        };
        let n = "?";
        -1 < t.indexOf(n) && (n = "&");
        const r = document.createElement("script");
        r.setAttribute("src", t + n + "callback=CABLES.jsonpFunc" + i), document.body.appendChild(r);
      },
      R = function (t, e, i, n, r) {
        w({ url: t, cb: e, method: i, data: n, contenttype: r, sync: !0 });
      },
      L = function (t, e, i, n, r, s, o = {}) {
        w({ url: t, cb: e, method: i, data: n, contenttype: r, sync: !1, jsonP: s, headers: o });
      },
      w = function (e) {
        let i;
        e.hasOwnProperty("asynch") || (e.asynch = !0);
        try {
          i = new XMLHttpRequest();
        } catch (e) {}
        if (
          ((i.onreadystatechange = function () {
            4 == i.readyState && e.cb && (200 == i.status || 0 == i.status ? e.cb(!1, i.responseText, i) : e.cb(!0, i.responseText, i));
          }),
          i.addEventListener("progress", (t) => {}),
          i.open(e.method ? e.method.toUpperCase() : "GET", e.url, !e.sync),
          "object" == typeof e.headers)
        ) {
          var n = Object.keys(e.headers);
          for (let t = 0; t < n.length; t++) {
            var r = n[t],
              s = e.headers[r];
            i.setRequestHeader(r, s);
          }
        }
        e.post || e.data ? (i.setRequestHeader("Content-type", e.contenttype || "application/x-www-form-urlencoded"), i.send(e.data || e.post)) : i.send();
      },
      D = function (t) {
        if (!t && 0 !== t) return "Unidentified";
        var e = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        };
        return e[t] || String.fromCharCode(t);
      };
    window.performance = window.performance || {
      offset: Date.now(),
      now: function () {
        return Date.now() - this.offset;
      },
    };
    function F(t, e) {
      if (!t) throw new Error("no cgl");
      (this._log = new d("cgl_texture")),
        (this._cgl = t),
        (this.tex = this._cgl.gl.createTexture()),
        (this.id = E()),
        (this.width = 0),
        (this.height = 0),
        (this.loading = !1),
        (this.flip = !0),
        (this.flipped = !1),
        (this.shadowMap = !1),
        (this.deleted = !1),
        (this.image = null),
        (this.anisotropic = 0),
        (this.filter = F.FILTER_NEAREST),
        (this.wrap = F.WRAP_CLAMP_TO_EDGE),
        (this.texTarget = this._cgl.gl.TEXTURE_2D),
        e && e.type && (this.texTarget = e.type),
        (this.textureType = F.TYPE_DEFAULT),
        (this.unpackAlpha = !0),
        (this._fromData = !0),
        (this.name = "unknown"),
        e ? ((this.name = e.name || this.name), e.isDepthTexture && (this.textureType = F.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = F.TYPE_FLOAT), "textureType" in e && (this.textureType = e.textureType), "filter" in e && (this.filter = e.filter), "wrap" in e && (this.wrap = e.wrap), "unpackAlpha" in e && (this.unpackAlpha = e.unpackAlpha), "flip" in e && (this.flip = e.flip), "shadowMap" in e && (this.shadowMap = e.shadowMap), "anisotropic" in e && (this.anisotropic = e.anisotropic)) : (e = {}),
        e.width || (e.width = 8),
        e.height || (e.height = 8),
        this._cgl.profileData.profileTextureNew++,
        this._cgl.profileData.addHeavyEvent("texture created", this.name, e.width + "x" + e.height),
        this.setSize(e.width, e.height),
        this.getInfoOneLine();
    }
    (F.prototype.isFloatingPoint = function () {
      return this.textureType == F.TYPE_FLOAT;
    }),
      (F.prototype.compareSettings = function (t) {
        return !!t && t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.anisotropic == this.anisotropic && t.shadowMap == this.shadowMap && t.texTarget == this.texTarget && t.flip == this.flip;
      }),
      (F.prototype.clone = function () {
        var t = new F(this._cgl, { name: this.name, filter: this.filter, wrap: this.wrap, textureType: this.textureType, unpackAlpha: this.unpackAlpha, flip: this.flip, width: this.width, height: this.height });
        return this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height), this.compareSettings(t) || (this._log.error("Cloned texture settings do not compare!"), this._log.error(this), this._log.error(t)), t;
      }),
      (F.prototype.setSize = function (t, e) {
        if (((e != e || e <= 0 || !e) && (e = 8), ((t = t != t || t <= 0 || !t ? 8 : t) > this._cgl.maxTexSize || e > this._cgl.maxTexSize) && this._log.error("texture size too big! " + t + "x" + e + " / max: " + this._cgl.maxTexSize), (t = Math.min(t, this._cgl.maxTexSize)), (e = Math.min(e, this._cgl.maxTexSize)), (t = Math.floor(t)), (e = Math.floor(e)), this.width != t || this.height != e)) {
          var i;
          if (
            ((this.width = t),
            (this.height = e),
            (this.deleted = !1),
            (this.shortInfoString = this.getInfoOneLine()),
            this._cgl.gl.bindTexture(this.texTarget, this.tex),
            this._cgl.profileData.profileTextureResize++,
            this._cgl.patch.config.canvas.forceTextureNearest && (this.filter = F.FILTER_NEAREST),
            1 != this._cgl.glVersion || this.textureType != F.TYPE_FLOAT || this.filter != F.FILTER_LINEAR || this._cgl.gl.getExtension("OES_texture_float_linear") || (console.warn("this graphics card does not support floating point texture linear interpolation! using NEAREST"), (this.filter = F.FILTER_NEAREST)),
            this.textureType == F.TYPE_FLOAT)
          )
            if (1 == this._cgl.glVersion)
              if (this._cgl.glUseHalfFloatTex) {
                var n = this._cgl.gl.getExtension("OES_texture_half_float");
                if ((this._cgl.gl.getExtension("EXT_color_buffer_half_float"), !n)) throw new Error("no half float texture extension");
                this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, n.HALF_FLOAT_OES, null);
              } else this._cgl.gl.getExtension("OES_texture_float"), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
            else if (this._cgl.glUseHalfFloatTex) {
              if (!this._cgl.gl.getExtension("EXT_color_buffer_half_float")) throw new Error("no half float texture extension");
              console.log("half float", this._cgl.gl.RGBA16F, this._cgl.gl.HALF_FLOAT), console.log("half float", this._cgl.gl.HALF_FLOAT), console.log("half float", this._cgl.gl.RGBA16F), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.HALF_FLOAT, null);
            } else this._cgl.gl.getExtension("EXT_color_buffer_float"), this._cgl.gl.getExtension("EXT_color_buffer_float_linear"), this._cgl.gl.getExtension("OES_texture_float_linear"), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
          else this.textureType == F.TYPE_DEPTH ? (1 == this._cgl.glVersion ? ((i = this._cgl.gl.DEPTH_COMPONENT), this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)) : ((i = this._cgl.gl.DEPTH_COMPONENT32F), this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null))) : this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
          this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null);
        }
      }),
      (F.prototype.initFromData = function (t, e, i, n, r) {
        if (((this.filter = n), (this.wrap = r), null == n && (this.filter = F.FILTER_LINEAR), null == r && (this.wrap = F.WRAP_CLAMP_TO_EDGE), (this.width = e), (this.height = i), (this._fromData = !0), (this.deleted = !1), this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)) {
          const t = CGL.Texture.getTempTexture(this._cgl);
          return (this.width = t.width), (this.height = t.height), (this.tex = t.tex), void this._log.error("[cgl_texture] texture size to big!!!", this.width, this.height, this._cgl.maxTexSize);
        }
        this.flip && this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip), this._cgl.gl.bindTexture(this.texTarget, this.tex), this.textureType == F.TYPE_FLOAT ? this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, t) : this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this.flip && this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !1), this._cgl.gl.bindTexture(this.texTarget, null);
      }),
      (F.prototype.updateMipMap = function () {
        (2 != this._cgl.glVersion && !this.isPowerOfTwo()) || this.filter != F.FILTER_MIPMAP || (this._cgl.gl.generateMipmap(this.texTarget), this._cgl.profileData.profileGenMipMap++);
      }),
      (F.prototype.initTexture = function (t, e) {
        if ((this._cgl.printError("before initTexture"), this._cgl.checkFrameStarted("texture inittexture"), (this._fromData = !1), this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), t.width && (this.width = t.width), t.height && (this.height = t.height), e && (this.filter = e), t.height > this._cgl.maxTexSize || t.width > this._cgl.maxTexSize)) {
          const e = CGL.Texture.getTempTexture(this._cgl);
          return (this.width = e.width), (this.height = e.height), (this.tex = e.tex), void this._log.error("[cgl_texture] texture size to big!!!", t.width, t.height, this._cgl.maxTexSize);
        }
        this._cgl.gl.bindTexture(this.texTarget, this.tex),
          (this.deleted = !1),
          (this.flipped = !this.flip),
          this.flipped && this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped),
          this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
          this._setFilter(),
          this.updateMipMap(),
          this._cgl.gl.bindTexture(this.texTarget, null),
          this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          this.flipped && this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !1),
          this.getInfoOneLine(),
          this._cgl.printError("initTexture");
      }),
      (F.prototype.delete = function () {
        this.loading || ((this.deleted = !0), (this.width = 0), (this.height = 0), this._cgl.profileData.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex), (this.image = null), (this.tex = null));
      }),
      (F.prototype.isPowerOfTwo = function () {
        return F.isPowerOfTwo(this.width) && F.isPowerOfTwo(this.height);
      }),
      (F.prototype.printInfo = function () {
        console.log(this.getInfo());
      }),
      (F.prototype.getInfoReadable = function () {
        const t = this.getInfo();
        let e = "";
        t.name = t.name.substr(0, t.name.indexOf("?rnd="));
        for (const i in t) e += "* " + i + ":  **" + t[i] + "**\n";
        return e;
      }),
      (F.prototype.getInfoOneLine = function () {
        let t = this.width + " x " + this.height;
        return this.textureType === CGL.Texture.TYPE_FLOAT ? (t += " 32bit") : (t += " 8bit"), this.filter === CGL.Texture.FILTER_NEAREST && (t += " nearest"), this.filter === CGL.Texture.FILTER_LINEAR && (t += " linear"), this.filter === CGL.Texture.FILTER_MIPMAP && (t += " mipmap"), this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE && (t += " clamp"), this.wrap === CGL.Texture.WRAP_REPEAT && (t += " repeat"), this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT && (t += " repeatmir"), (this.shortInfoString = t), t;
      }),
      (F.prototype.getInfo = function () {
        const t = {};
        (t.name = this.name), (t["power of two"] = this.isPowerOfTwo()), (t.size = this.width + " x " + this.height);
        let e = this.texTarget;
        return (
          this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"),
          (t.target = e),
          (t.unpackAlpha = this.unpackAlpha),
          this.textureType == F.TYPE_FLOAT ? (t.textureType = "TYPE_FLOAT") : this.textureType == F.TYPE_DEPTH ? (t.textureType = "TYPE_DEPTH") : this.textureType == F.TYPE_DEFAULT ? (t.textureType = "TYPE_DEFAULT") : (t.textureType = "UNKNOWN"),
          this.wrap == F.WRAP_CLAMP_TO_EDGE ? (t.wrap = "CLAMP_TO_EDGE") : this.wrap == F.WRAP_REPEAT ? (t.wrap = "WRAP_REPEAT") : this.wrap == F.WRAP_MIRRORED_REPEAT ? (t.wrap = "WRAP_MIRRORED_REPEAT") : (t.wrap = "UNKNOWN"),
          this.filter == F.FILTER_NEAREST ? (t.filter = "FILTER_NEAREST") : this.filter == F.FILTER_LINEAR ? (t.filter = "FILTER_LINEAR") : this.filter == F.FILTER_MIPMAP ? (t.filter = "FILTER_MIPMAP") : (t.filter = "UNKNOWN"),
          t
        );
      }),
      (F.prototype._setFilter = function () {
        if (
          (this._cgl.printError("before _setFilter"),
          this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha),
          this.shadowMap && (this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)),
          this.textureType == F.TYPE_FLOAT && this.filter == F.FILTER_MIPMAP && ((this.filter = F.FILTER_LINEAR), this._log.stack("texture: HDR and mipmap filtering at the same time is not possible")),
          1 != this._cgl.glVersion || this.isPowerOfTwo())
        ) {
          if (
            (this.wrap == F.WRAP_CLAMP_TO_EDGE
              ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE))
              : this.wrap == F.WRAP_REPEAT
              ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT))
              : this.wrap == F.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)),
            this.filter == F.FILTER_NEAREST)
          )
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
          else if (this.filter == F.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
          else {
            if (this.filter != F.FILTER_MIPMAP) throw (this._log.log("unknown texture filter!", this.filter), new Error("unknown texture filter!" + this.filter));
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
          }
          var t, e;
          !this.anisotropic || ((t = this._cgl.gl.getExtension("EXT_texture_filter_anisotropic")) && ((e = this._cgl.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, t.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e, this.anisotropic))));
        } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE), (this.filter = F.FILTER_NEAREST), (this.wrap = F.WRAP_CLAMP_TO_EDGE);
        this.getInfoOneLine(), this._cgl.printError("_setFilter");
      }),
      (F.load = function (e, i, n, t) {
        if (!i) return n({ error: !0 });
        let r = null;
        e.patch.loading.existByName(i) || (r = e.patch.loading.start("texture", i));
        const s = new F(e);
        return (
          (s.name = i),
          e.patch.isEditorMode() && gui.jobs().start({ id: "loadtexture" + r, title: "loading texture " + CABLES.basename(i) }),
          (s.image = new Image()),
          (s.image.crossOrigin = "anonymous"),
          (s.loading = !0),
          t && t.hasOwnProperty("filter") && (s.filter = t.filter),
          t && t.hasOwnProperty("flip") && (s.flip = t.flip),
          t && t.hasOwnProperty("wrap") && (s.wrap = t.wrap),
          t && t.hasOwnProperty("anisotropic") && (s.anisotropic = t.anisotropic),
          t && t.hasOwnProperty("unpackAlpha") && (s.unpackAlpha = t.unpackAlpha),
          (s.image.onabort = s.image.onerror =
            (t) => {
              console.warn("[cgl.texture.load] error loading texture", i, t), (s.loading = !1), r && e.patch.loading.finished(r), n && n({ error: !0 }, s), e.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r);
            }),
          (s.image.onload = function (t) {
            e.addNextFrameOnceCallback(() => {
              s.initTexture(s.image), r && e.patch.loading.finished(r), (s.loading = !1), e.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r), n && n(null, s);
            });
          }),
          (s.image.src = i),
          s
        );
      }),
      (F.getTempTexture = function (t) {
        return t || console.error("[getTempTexture] no cgl!"), t.tempTexture || (t.tempTexture = F.getTemporaryTexture(t, 256, F.FILTER_LINEAR, F.REPEAT)), t.tempTexture;
      }),
      (F.getEmptyTexture = function (t, e) {
        if (e) return F.getEmptyTextureFloat(t);
        if ((t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty)) return t.tempTextureEmpty;
        t.tempTextureEmpty = new F(t, { name: "emptyTexture" });
        const i = new Uint8Array(256).fill(0);
        for (let t = 0; t < 256; t += 4) i[t + 3] = 0;
        return t.tempTextureEmpty.initFromData(i, 8, 8, F.FILTER_NEAREST, F.WRAP_REPEAT), t.tempTextureEmpty;
      }),
      (F.getEmptyTextureFloat = function (t) {
        if ((t || console.error("[getEmptyTextureFloat] no cgl!"), t.tempTextureEmptyFloat)) return t.tempTextureEmptyFloat;
        t.tempTextureEmptyFloat = new F(t, { name: "emptyTexture", isFloatingPointTexture: !0 });
        const e = new Float32Array(256).fill(1);
        for (let t = 0; t < 256; t += 4) e[t + 3] = 0;
        return t.tempTextureEmptyFloat.initFromData(e, 8, 8, F.FILTER_NEAREST, F.WRAP_REPEAT), t.tempTextureEmptyFloat;
      }),
      (F.getRandomTexture = function (t) {
        if ((t || console.error("[getRandomTexture] no cgl!"), t.randomTexture)) return t.randomTexture;
        const e = new Uint8Array(262144);
        for (let t = 0; t < 65536; t++) (e[4 * t + 0] = 255 * Math.random()), (e[4 * t + 1] = 255 * Math.random()), (e[4 * t + 2] = 255 * Math.random()), (e[4 * t + 3] = 255);
        return (t.randomTexture = new F(t)), t.randomTexture.initFromData(e, 256, 256, F.FILTER_NEAREST, F.WRAP_REPEAT), t.randomTexture;
      }),
      (F.getBlackTexture = function (t) {
        if ((t || this._log.error("[getBlackTexture] no cgl!"), t.blackTexture)) return t.blackTexture;
        const e = new Uint8Array(256);
        for (let t = 0; t < 64; t++) (e[4 * t + 0] = e[4 * t + 1] = e[4 * t + 2] = 0), (e[4 * t + 3] = 255);
        return (t.blackTexture = new F(t)), t.blackTexture.initFromData(e, 8, 8, F.FILTER_NEAREST, F.WRAP_REPEAT), t.blackTexture;
      }),
      (F.getEmptyCubemapTexture = function (e) {
        const i = [e.gl.TEXTURE_CUBE_MAP_POSITIVE_X, e.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, e.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, e.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, e.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, e.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z],
          t = e.gl.createTexture(),
          n = e.gl.TEXTURE_CUBE_MAP,
          r = F.FILTER_NEAREST,
          s = F.WRAP_CLAMP_TO_EDGE;
        e.profileData.profileTextureNew++, e.gl.bindTexture(n, t), e.profileData.profileTextureResize++;
        for (let t = 0; t < 6; t += 1) {
          const r = new Uint8Array(256);
          e.gl.texImage2D(i[t], 0, e.gl.RGBA, 8, 8, 0, e.gl.RGBA, e.gl.UNSIGNED_BYTE, r), e.gl.texParameteri(n, e.gl.TEXTURE_MAG_FILTER, e.gl.NEAREST), e.gl.texParameteri(n, e.gl.TEXTURE_MIN_FILTER, e.gl.NEAREST), e.gl.texParameteri(n, e.gl.TEXTURE_WRAP_S, e.gl.CLAMP_TO_EDGE), e.gl.texParameteri(n, e.gl.TEXTURE_WRAP_T, e.gl.CLAMP_TO_EDGE);
        }
        return e.gl.bindTexture(n, null), { id: CABLES.uuid(), tex: t, cubemap: t, width: 8, height: 8, filter: r, wrap: s, unpackAlpha: !0, flip: !0, _fromData: !0, name: "emptyCubemapTexture", anisotropic: 0 };
      }),
      (F.getTempGradientTexture = function (t) {
        if ((t || console.error("[getTempGradientTexture] no cgl!"), t.tempTextureGradient)) return t.tempTextureGradient;
        const e = new F(t),
          i = new Uint8Array(262144);
        for (let e = 0; e < 256; e++) for (let t = 0; t < 256; t++) (i[4 * (t + 256 * e) + 0] = i[4 * (t + 256 * e) + 1] = i[4 * (t + 256 * e) + 2] = 255 - e), (i[4 * (t + 256 * e) + 3] = 255);
        return e.initFromData(i, 256, 256, F.FILTER_NEAREST, F.WRAP_REPEAT), (t.tempTextureGradient = e), e;
      }),
      (F.getTemporaryTexture = function (t, i, e, n) {
        const r = new F(t),
          s = [];
        for (let e = 0; e < i; e++) for (let t = 0; t < i; t++) (t + e) % 64 < 32 ? (s.push(200 + (e / i) * 25 + (t / i) * 25), s.push(200 + (e / i) * 25 + (t / i) * 25), s.push(200 + (e / i) * 25 + (t / i) * 25)) : (s.push(40 + (e / i) * 25 + (t / i) * 25), s.push(40 + (e / i) * 25 + (t / i) * 25), s.push(40 + (e / i) * 25 + (t / i) * 25)), s.push(255);
        t = new Uint8Array(s);
        return r.initFromData(t, i, i, e, n), r;
      }),
      (F.createFromImage = function (t, e, i) {
        const n = new F(t, (i = i || {}));
        return (n.flip = !1), (n.image = e), (n.width = e.width), (n.height = e.height), n.initTexture(e, i.filter), n;
      }),
      (F.fromImage = function (t, e, i, n) {
        console.error("deprecated texture from image...");
        const r = new F(t);
        return (r.flip = !1), i && (r.filter = i), n && (r.wrap = n), (r.image = e), r.initTexture(e), r;
      }),
      (F.isPowerOfTwo = function (t) {
        return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t;
      }),
      (F.FILTER_NEAREST = 0),
      (F.FILTER_LINEAR = 1),
      (F.FILTER_MIPMAP = 2),
      (F.WRAP_REPEAT = 0),
      (F.WRAP_MIRRORED_REPEAT = 1),
      (F.WRAP_CLAMP_TO_EDGE = 2),
      (F.TYPE_DEFAULT = 0),
      (F.TYPE_DEPTH = 1),
      (F.TYPE_FLOAT = 2),
      (F.PFORMATSTR_RGBA32F = "RGBA 32bit float"),
      (F.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte"),
      (F.PIXELFORMATS = [F.PFORMATSTR_RGBA8UB, F.PFORMATSTR_RGBA32F]);
    var B = function (e, t, i, n) {
      (this._log = new d("cgl_framebuffer2")),
        (this.Framebuffer2DrawTargetsDefault = null),
        (this.Framebuffer2BlittingFramebuffer = null),
        (this.Framebuffer2FinalFramebuffer = null),
        (this._cgl = e),
        this._cgl.printError("before framebuffer2 constructor"),
        (this._width = 0),
        (this._height = 0),
        (this._depthRenderbuffer = null),
        (this._frameBuffer = null),
        (this._textureFrameBuffer = null),
        (this._colorRenderbuffers = []),
        (this._drawTargetArray = []),
        this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = e.gl.createFramebuffer()),
        this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = e.gl.createFramebuffer()),
        this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [e.gl.COLOR_ATTACHMENT0]),
        (this._options = n || { isFloatingPointTexture: !1 }),
        (this.name = this._options.name || "unknown"),
        this._cgl.profileData.addHeavyEvent("framebuffer create", this.name),
        this._options.hasOwnProperty("numRenderBuffers") || (this._options.numRenderBuffers = 1),
        this._options.hasOwnProperty("depth") || (this._options.depth = !0),
        this._options.hasOwnProperty("clear") || (this._options.clear = !0),
        this._options.hasOwnProperty("multisampling") || ((this._options.multisampling = !1), (this._options.multisamplingSamples = 0)),
        this._options.multisamplingSamples && (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0), this._cgl.gl.MAX_SAMPLES ? (this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples)) : (this._options.multisamplingSamples = 0)),
        this._options.hasOwnProperty("filter") || (this._options.filter = F.FILTER_LINEAR),
        this._options.hasOwnProperty("wrap") || (this._options.wrap = F.WRAP_REPEAT),
        (this._numRenderBuffers = this._options.numRenderBuffers),
        (this._colorTextures = []);
      for (let t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t] = new F(e, { name: "fb2 " + this.name + " " + t, isFloatingPointTexture: this._options.isFloatingPointTexture, filter: this._options.filter, wrap: this._options.wrap });
      let r = F.FILTER_NEAREST;
      this._options.shadowMap && (r = F.FILTER_LINEAR), this._options.depth && (this._textureDepth = new F(e, { name: "fb2 depth " + this.name, isDepthTexture: !0, filter: r, shadowMap: this._options.shadowMap || !1, width: t || 512, height: i || 512 })), e.aborted || (this.setSize(t || 512, i || 512), this._cgl.printError("framebuffer2 constructor"));
    };
    (B.prototype.getWidth = function () {
      return this._width;
    }),
      (B.prototype.getHeight = function () {
        return this._height;
      }),
      (B.prototype.getGlFrameBuffer = function () {
        return this._frameBuffer;
      }),
      (B.prototype.getDepthRenderBuffer = function () {
        return this._depthRenderbuffer;
      }),
      (B.prototype.getTextureColor = function () {
        return this._colorTextures[0];
      }),
      (B.prototype.getTextureColorNum = function (t) {
        return this._colorTextures[t];
      }),
      (B.prototype.getTextureDepth = function () {
        return this._textureDepth;
      }),
      (B.prototype.setFilter = function (e) {
        for (let t = 0; t < this._numRenderBuffers; t++) (this._colorTextures[t].filter = e), this._colorTextures[t].setSize(this._width, this._height);
      }),
      (B.prototype.delete = B.prototype.dispose =
        function () {
          let t = 0;
          for (t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete();
          for (this._textureDepth && this._textureDepth.delete(), t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
          this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
        }),
      (B.prototype.setSize = function (t, e) {
        this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);
        let i = 0;
        if (((this._width = Math.floor(t)), (this._height = Math.floor(e)), (this._width = Math.min(this._width, this._cgl.maxTexSize)), (this._height = Math.min(this._height, this._cgl.maxTexSize)), this._cgl.profileData.profileFrameBuffercreate++, this._frameBuffer)) {
          for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
          this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
        }
        (this._frameBuffer = this._cgl.gl.createFramebuffer()), (this._textureFrameBuffer = this._cgl.gl.createFramebuffer());
        e = this._options.depth;
        for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height);
        for (i = 0; i < this._numRenderBuffers; i++) {
          const t = this._cgl.gl.createRenderbuffer();
          if ((this._cgl.gl.getExtension("EXT_color_buffer_float"), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t), this._options.isFloatingPointTexture))
            if ((this._cgl.gl.getExtension("EXT_color_buffer_float"), this._cgl.gl.getExtension("EXT_color_buffer_float_linear"), this._cgl.gl.getExtension("OES_texture_float_linear"), this._options.multisampling && this._options.multisamplingSamples)) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height);
            else {
              let t = this._cgl.gl.RGBA32F;
              this._cgl._isSafariCrap && (t = this._cgl.gl.RGBA16F), this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, t, this._width, this._height);
            }
          else this._options.multisampling && this._options.multisamplingSamples ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height);
          this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, t), (this._colorRenderbuffers[i] = t);
        }
        for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        let n = this._cgl.gl.DEPTH_COMPONENT32F;
        for (
          this._cgl.glSlowRenderer && (n = this._cgl.gl.DEPTH_COMPONENT16),
            e &&
              (this._textureDepth.setSize(this._width, this._height),
              (this._depthRenderbuffer = this._cgl.gl.createRenderbuffer()),
              this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer),
              this._options.isFloatingPointTexture,
              this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, n, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, n, this._width, this._height),
              this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)),
            this._drawTargetArray.length = 0,
            i = 0;
          i < this._numRenderBuffers;
          i++
        )
          this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
        this._cgl.gl.isFramebuffer(this._textureFrameBuffer) || this._this._log.warn("invalid framebuffer");
        var r = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
        if (r != this._cgl.gl.FRAMEBUFFER_COMPLETE)
          switch ((this._log.error("framebuffer incomplete: " + this.name, this), r)) {
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
              throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT"));
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
              throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"));
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
              throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS"));
            case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
              throw (this._log.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED"));
            default:
              throw (this._log.warn("incomplete framebuffer", r), new Error("Incomplete framebuffer: " + r));
          }
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
      }),
      (B.prototype.renderStart = function () {
        this._cgl.checkFrameStarted("fb2 renderstart"), this._cgl.pushModelMatrix(), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.pushGlFrameBuffer(this._frameBuffer), this._cgl.pushFrameBuffer(this), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this._width, this._height), this._cgl.gl.drawBuffers(this._drawTargetArray), this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT));
      }),
      (B.prototype.renderEnd = function () {
        if ((this._cgl.popPMatrix(), this._cgl.profileData.profileFramebuffer++, this._numRenderBuffers <= 1)) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
        else {
          this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
          for (let e = 0; e < this._numRenderBuffers; e++) {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
              this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[e]),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
              this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[e].tex, 0),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
              this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]);
            let t = this._cgl.gl.COLOR_BUFFER_BIT;
            0 == e && (t |= this._cgl.gl.DEPTH_BUFFER_BIT), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, t, this._cgl.gl.NEAREST);
          }
        }
        if ((this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == F.FILTER_MIPMAP)) for (let t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex), this._colorTextures[t].updateMipMap(), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
      });
    const U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      k = new Uint8Array(256);
    for (let t = 0; t < U.length; t++) k[U.charCodeAt(t)] = t;
    const V = k,
      G = function (t) {
        t.buffer && (t = t.buffer);
        let e,
          i = new Uint8Array(t),
          n = i.length,
          r = "";
        for (e = 0; e < n; e += 3) (r += U[i[e] >> 2]), (r += U[((3 & i[e]) << 4) | (i[e + 1] >> 4)]), (r += U[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]), (r += U[63 & i[e + 2]]);
        return n % 3 == 2 ? (r = r.substring(0, r.length - 1) + "=") : n % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r;
      },
      z = function (t) {
        let e,
          i,
          n,
          r,
          s,
          o = 0.75 * t.length,
          a = t.length,
          l = 0;
        "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
        let h = new ArrayBuffer(o),
          u = new Uint8Array(h);
        for (e = 0; e < a; e += 4) (i = V[t.charCodeAt(e)]), (n = V[t.charCodeAt(e + 1)]), (r = V[t.charCodeAt(e + 2)]), (s = V[t.charCodeAt(e + 3)]), (u[l++] = (i << 2) | (n >> 4)), (u[l++] = ((15 & n) << 4) | (r >> 2)), (u[l++] = ((3 & r) << 6) | (63 & s));
        return h;
      };
    class j {
      constructor(t) {
        this._init(), (this._first = !0), (this._wireMesh = null), t && this.apply(t);
      }
      _init() {
        (this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]), (this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]), (this._center = [0, 0, 0]), (this._size = [0, 0, 0]), (this._maxAxis = 0), (this._first = !0);
      }
      get maxAxis() {
        return this._maxAxis || 1;
      }
      get size() {
        return this._size;
      }
      get center() {
        return this._center;
      }
      get x() {
        return this._center[0];
      }
      get y() {
        return this._center[1];
      }
      get z() {
        return this._center[2];
      }
      get minX() {
        return this._min[0];
      }
      get minY() {
        return this._min[1];
      }
      get minZ() {
        return this._min[2];
      }
      get maxX() {
        return this._max[0];
      }
      get maxY() {
        return this._max[1];
      }
      get maxZ() {
        return this._max[2];
      }
      apply(e, t) {
        if (e) {
          if (e instanceof j) {
            const t = e;
            this.applyPos(t.maxX, t.maxY, t.maxZ), this.applyPos(t.minX, t.minY, t.minZ);
          } else for (let t = 0; t < e.vertices.length; t += 3) this.applyPos(e.vertices[t], e.vertices[t + 1], e.vertices[t + 2]);
          this.calcCenterSize();
        }
      }
      copy() {
        return new j(this);
      }
      get changed() {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
      }
      applyPos(t, e, i) {
        if (t != Number.MAX_VALUE && t != -Number.MAX_VALUE && e != Number.MAX_VALUE && e != -Number.MAX_VALUE && i != Number.MAX_VALUE && i != -Number.MAX_VALUE && CABLES.UTILS.isNumeric(t) && CABLES.UTILS.isNumeric(e) && CABLES.UTILS.isNumeric(i)) {
          if (this._first) return (this._max[0] = t), (this._max[1] = e), (this._max[2] = i), (this._min[0] = t), (this._min[1] = e), (this._min[2] = i), void (this._first = !1);
          (this._max[0] = Math.max(this._max[0], t)), (this._max[1] = Math.max(this._max[1], e)), (this._max[2] = Math.max(this._max[2], i)), (this._min[0] = Math.min(this._min[0], t)), (this._min[1] = Math.min(this._min[1], e)), (this._min[2] = Math.min(this._min[2], i));
        }
      }
      calcCenterSize() {
        this._first || ((this._size[0] = this._max[0] - this._min[0]), (this._size[1] = this._max[1] - this._min[1]), (this._size[2] = this._max[2] - this._min[2]), (this._center[0] = (this._min[0] + this._max[0]) / 2), (this._center[1] = (this._min[1] + this._max[1]) / 2), (this._center[2] = (this._min[2] + this._max[2]) / 2), (this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]))));
      }
      mulMat4(t) {
        this._first && ((this._max[0] = 0), (this._max[1] = 0), (this._max[2] = 0), (this._min[0] = 0), (this._min[1] = 0), (this._min[2] = 0), (this._first = !1)), vec3.transformMat4(this._max, this._max, t), vec3.transformMat4(this._min, this._min, t), this.calcCenterSize();
      }
      render(t, e) {
        this._wireMesh || (this._wireMesh = new CGL.WireCube(t)), t.pushModelMatrix(), mat4.translate(t.mMatrix, t.mMatrix, this._center), this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2), t.popModelMatrix();
      }
    }
    function H(t) {
      (this.name = t || "unknown"),
        (this._log = new d("cgl_geometry")),
        (this.faceVertCount = 3),
        (this._vertices = []),
        (this.verticesIndices = []),
        (this.texCoords = new Float32Array()),
        (this.texCoordsIndices = []),
        (this.vertexNormals = []),
        (this.tangents = []),
        (this.biTangents = []),
        (this.morphTargets = []),
        (this.vertexColors = []),
        (this._attributes = {}),
        (this.glPrimitive = null),
        Object.defineProperty(this, "vertices", {
          get() {
            return this._vertices;
          },
          set(t) {
            this.setVertices(t);
          },
        });
    }
    (H.prototype.clear = function () {
      (this.vertices = new Float32Array([])), (this.verticesIndices.length = 0), (this.texCoords = new Float32Array([])), (this.texCoordsIndices.length = 0), (this.vertexNormals = new Float32Array([]));
    }),
      (H.prototype.getAttributes = function () {
        return this._attributes;
      }),
      (H.prototype.getAttribute = function (t) {
        for (const e in this._attributes) if (this._attributes[e].name == t) return this._attributes[e];
        return null;
      }),
      (H.prototype.setAttribute = function (t, e, i) {
        let n = "";
        1 == i ? (n = "float") : 2 == i ? (n = "vec2") : 3 == i ? (n = "vec3") : 4 == i && (n = "vec4");
        i = { name: t, data: e, itemSize: i, type: n };
        this._attributes[t] = i;
      }),
      (H.prototype.setVertices = function (t) {
        t instanceof Float32Array ? (this._vertices = t) : (this._vertices = new Float32Array(t));
      }),
      (H.prototype.setTexCoords = function (t) {
        t instanceof Float32Array ? (this.texCoords = t) : (this.texCoords = new Float32Array(t));
      }),
      (H.prototype.calcNormals = function (t) {
        t || this.unIndex(), this.calculateNormals({});
      }),
      (H.prototype.flipNormals = function (e, i, n) {
        let r = vec3.create();
        null == e && (e = 1), null == i && (i = 1), null == n && (n = 1);
        for (let t = 0; t < this.vertexNormals.length; t += 3) vec3.set(r, this.vertexNormals[t + 0], this.vertexNormals[t + 1], this.vertexNormals[t + 2]), (r[0] *= -e), (r[1] *= -i), (r[2] *= -n), vec3.normalize(r, r), (this.vertexNormals[t + 0] = r[0]), (this.vertexNormals[t + 1] = r[1]), (this.vertexNormals[t + 2] = r[2]);
      }),
      (H.prototype.getNumTriangles = function () {
        return this.verticesIndices && this.verticesIndices.length ? this.verticesIndices.length / 3 : this.vertices.length / 3;
      }),
      (H.prototype.flipVertDir = function () {
        const e = [];
        e.length = this.verticesIndices.length;
        for (let t = 0; t < this.verticesIndices.length; t += 3) (e[t] = this.verticesIndices[t + 2]), (e[t + 1] = this.verticesIndices[t + 1]), (e[t + 2] = this.verticesIndices[t]);
        this.verticesIndices = e;
      }),
      (H.prototype.setPointVertices = function (e) {
        if (e.length % 3 == 0) {
          e instanceof Float32Array ? (this.vertices = e) : (this.vertices = new Float32Array(e)), this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array((e.length / 3) * 2)), (this.verticesIndices.length = e.length / 3);
          for (let t = 0; t < e.length / 3; t++) (this.verticesIndices[t] = t), (this.texCoords[2 * t] = 0), (this.texCoords[2 * t + 1] = 0);
        } else this._log.error("SetPointVertices: Array must be multiple of three.");
      }),
      (H.prototype.merge = function (e) {
        if (e) {
          var i = this.verticesIndices.length,
            n = this.vertices.length / 3;
          this.verticesIndices.length = this.verticesIndices.length + e.verticesIndices.length;
          for (let t = 0; t < e.verticesIndices.length; t++) this.verticesIndices[i + t] = e.verticesIndices[t] + n;
          (this.vertices = g.float32Concat(this.vertices, e.vertices)), (this.texCoords = g.float32Concat(this.texCoords, e.texCoords)), (this.vertexNormals = g.float32Concat(this.vertexNormals, e.vertexNormals)), (this.tangents = g.float32Concat(this.tangents, e.tangents)), (this.biTangents = g.float32Concat(this.biTangents, e.biTangents));
        }
      }),
      (H.prototype.copy = function () {
        let t = 0;
        const e = new H(this.name + " copy");
        if (((e.faceVertCount = this.faceVertCount), (e.glPrimitive = this.glPrimitive), e.setVertices(this._vertices.slice(0)), this.verticesIndices)) for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) e.verticesIndices[t] = this.verticesIndices[t];
        if (this.texCoords) for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t];
        if (this.texCoordsIndices) for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) e.texCoordsIndices[t] = this.texCoordsIndices[t];
        if (this.vertexNormals) for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) e.vertexNormals[t] = this.vertexNormals[t];
        if (this.tangents) for (e.tangents = [], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t];
        if (this.biTangents) for (e.biTangents = [], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t];
        for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t];
        for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t];
        return e;
      }),
      (H.prototype.calculateNormals = function (e) {
        const i = vec3.create(),
          n = vec3.create(),
          r = vec3.create();
        function s(t) {
          return vec3.subtract(i, t[0], t[1]), vec3.subtract(n, t[0], t[2]), vec3.cross(r, i, n), vec3.normalize(r, r), e && e.forceZUp && r[2] < 0 && ((r[0] *= -1), (r[1] *= -1), (r[2] *= -1)), r;
        }
        (this.getVertexVec = function (t) {
          const e = [0, 0, 0];
          return (e[0] = this.vertices[3 * t + 0]), (e[1] = this.vertices[3 * t + 1]), (e[2] = this.vertices[3 * t + 2]), e;
        }),
          (this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length) || (this.vertexNormals = new Float32Array(this.vertices.length));
        for (let t = 0; t < this.vertices.length; t++) this.vertexNormals[t] = 0;
        if (this.isIndexed()) {
          const e = [];
          e.length = Math.floor(this.verticesIndices.length / 3);
          for (let t = 0; t < this.verticesIndices.length; t += 3) {
            const n = [this.getVertexVec(this.verticesIndices[t + 0]), this.getVertexVec(this.verticesIndices[t + 1]), this.getVertexVec(this.verticesIndices[t + 2])];
            (e[t / 3] = s(n)),
              (this.vertexNormals[3 * this.verticesIndices[t + 0] + 0] += e[t / 3][0]),
              (this.vertexNormals[3 * this.verticesIndices[t + 0] + 1] += e[t / 3][1]),
              (this.vertexNormals[3 * this.verticesIndices[t + 0] + 2] += e[t / 3][2]),
              (this.vertexNormals[3 * this.verticesIndices[t + 1] + 0] += e[t / 3][0]),
              (this.vertexNormals[3 * this.verticesIndices[t + 1] + 1] += e[t / 3][1]),
              (this.vertexNormals[3 * this.verticesIndices[t + 1] + 2] += e[t / 3][2]),
              (this.vertexNormals[3 * this.verticesIndices[t + 2] + 0] += e[t / 3][0]),
              (this.vertexNormals[3 * this.verticesIndices[t + 2] + 1] += e[t / 3][1]),
              (this.vertexNormals[3 * this.verticesIndices[t + 2] + 2] += e[t / 3][2]);
          }
          for (let e = 0; e < this.verticesIndices.length; e += 3)
            for (let t = 0; t < 3; t++) {
              const n = [this.vertexNormals[3 * this.verticesIndices[e + t] + 0], this.vertexNormals[3 * this.verticesIndices[e + t] + 1], this.vertexNormals[3 * this.verticesIndices[e + t] + 2]];
              vec3.normalize(n, n), (this.vertexNormals[3 * this.verticesIndices[e + t] + 0] = n[0]), (this.vertexNormals[3 * this.verticesIndices[e + t] + 1] = n[1]), (this.vertexNormals[3 * this.verticesIndices[e + t] + 2] = n[2]);
            }
        } else {
          const e = [];
          for (let t = 0; t < this.vertices.length; t += 9) {
            const n = s([
              [this.vertices[t + 0], this.vertices[t + 1], this.vertices[t + 2]],
              [this.vertices[t + 3], this.vertices[t + 4], this.vertices[t + 5]],
              [this.vertices[t + 6], this.vertices[t + 7], this.vertices[t + 8]],
            ]);
            e.push(n[0], n[1], n[2], n[0], n[1], n[2], n[0], n[1], n[2]);
          }
          this.vertexNormals = e;
        }
      }),
      (H.prototype.calcTangentsBitangents = function () {
        if (this.vertices.length)
          if (this.vertexNormals.length) {
            if (!this.texCoords.length) {
              const e = (this.vertices.length / 3) * 2;
              this.texCoords = new Float32Array(e);
              for (let t = 0; t < e; t += 1) this.texCoords[t] = 0;
            }
            if (this.verticesIndices && this.verticesIndices.length)
              if (this.verticesIndices.length % 3 == 0) {
                const e = this.verticesIndices.length / 3,
                  i = this.vertices.length / 3;
                (this.tangents = new Float32Array(this.vertexNormals.length)), (this.biTangents = new Float32Array(this.vertexNormals.length));
                const n = [];
                n.length = 2 * i;
                const r = vec3.create(),
                  s = vec3.create(),
                  o = vec3.create(),
                  a = vec2.create(),
                  l = vec2.create(),
                  h = vec2.create(),
                  u = vec3.create(),
                  c = vec3.create();
                for (let t = 0; t < e; t += 1) {
                  const e = this.verticesIndices[3 * t],
                    p = this.verticesIndices[3 * t + 1],
                    g = this.verticesIndices[3 * t + 2];
                  vec3.set(r, this.vertices[3 * e], this.vertices[3 * e + 1], this.vertices[3 * e + 2]), vec3.set(s, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]), vec3.set(o, this.vertices[3 * g], this.vertices[3 * g + 1], this.vertices[3 * g + 2]), vec2.set(a, this.texCoords[2 * e], this.texCoords[2 * e + 1]), vec2.set(l, this.texCoords[2 * p], this.texCoords[2 * p + 1]), vec2.set(h, this.texCoords[2 * g], this.texCoords[2 * g + 1]);
                  const f = s[0] - r[0],
                    _ = o[0] - r[0],
                    m = s[1] - r[1],
                    b = o[1] - r[1],
                    E = s[2] - r[2],
                    v = o[2] - r[2],
                    T = l[0] - a[0],
                    x = h[0] - a[0],
                    A = l[1] - a[1],
                    y = h[1] - a[1],
                    M = 1 / (T * y - x * A);
                  vec3.set(u, (y * f - A * _) * M, (y * m - A * b) * M, (y * E - A * v) * M), vec3.set(c, (T * _ - x * f) * M, (T * b - x * m) * M, (T * v - x * E) * M), (n[e] = u), (n[p] = u), (n[g] = u), (n[e + i] = c), (n[p + i] = c), (n[g + i] = c);
                }
                const d = vec3.create(),
                  p = vec3.create(),
                  g = vec3.create(),
                  f = vec3.create(),
                  _ = vec3.create(),
                  m = vec3.create(),
                  b = vec3.create(),
                  E = vec3.create();
                for (let t = 0; t < i; t += 1)
                  if (n[t]) {
                    vec3.set(d, this.vertexNormals[3 * t], this.vertexNormals[3 * t + 1], this.vertexNormals[3 * t + 2]), vec3.set(p, n[t][0], n[t][1], n[t][2]);
                    const r = vec3.dot(d, p);
                    vec3.scale(_, d, r), vec3.subtract(m, p, _), vec3.normalize(E, m), vec3.cross(b, d, p), vec3.dot(b, n[t + i]);
                    const s = 1;
                    vec3.scale(g, E, 1), vec3.cross(f, d, g), (this.tangents[3 * t + 0] = g[0]), (this.tangents[3 * t + 1] = g[1]), (this.tangents[3 * t + 2] = g[2]), (this.biTangents[3 * t + 0] = f[0]), (this.biTangents[3 * t + 1] = f[1]), (this.biTangents[3 * t + 2] = f[2]);
                  }
              } else this._log.error("Vertex indices mismatch!");
            else this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
          } else this._log.error("Cannot calculate tangents/bitangents without normals.");
        else this._log.error("Cannot calculate tangents/bitangents without vertices.");
      }),
      (H.prototype.isIndexed = function () {
        return 0 != this.verticesIndices.length;
      }),
      (H.prototype.unIndex = function (t, e) {
        const i = [],
          n = [],
          r = [],
          s = [],
          o = [],
          a = [];
        let l = 0,
          h = 0;
        for (h = 0; h < this.verticesIndices.length; h += 3)
          i.push(this.vertices[3 * this.verticesIndices[h + 0] + 0], this.vertices[3 * this.verticesIndices[h + 0] + 1], this.vertices[3 * this.verticesIndices[h + 0] + 2]),
            s.push(this.vertexNormals[3 * this.verticesIndices[h + 0] + 0], this.vertexNormals[3 * this.verticesIndices[h + 0] + 1], this.vertexNormals[3 * this.verticesIndices[h + 0] + 2]),
            0 < this.tangents.length && o.push(this.tangents[3 * this.verticesIndices[h + 0] + 0], this.tangents[3 * this.verticesIndices[h + 0] + 1], this.tangents[3 * this.verticesIndices[h + 0] + 2]),
            0 < this.biTangents.length && a.push(this.biTangents[3 * this.verticesIndices[h + 0] + 0], this.biTangents[3 * this.verticesIndices[h + 0] + 1], this.biTangents[3 * this.verticesIndices[h + 0] + 2]),
            this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[h + 0] + 0], this.texCoords[2 * this.verticesIndices[h + 0] + 1]) : r.push(0, 0),
            n.push(l),
            l++,
            i.push(this.vertices[3 * this.verticesIndices[h + 1] + 0], this.vertices[3 * this.verticesIndices[h + 1] + 1], this.vertices[3 * this.verticesIndices[h + 1] + 2]),
            s.push(this.vertexNormals[3 * this.verticesIndices[h + 1] + 0], this.vertexNormals[3 * this.verticesIndices[h + 1] + 1], this.vertexNormals[3 * this.verticesIndices[h + 1] + 2]),
            0 < this.tangents.length && o.push(this.tangents[3 * this.verticesIndices[h + 1] + 0], this.tangents[3 * this.verticesIndices[h + 1] + 1], this.tangents[3 * this.verticesIndices[h + 1] + 2]),
            0 < this.biTangents.length && a.push(this.biTangents[3 * this.verticesIndices[h + 1] + 0], this.biTangents[3 * this.verticesIndices[h + 1] + 1], this.biTangents[3 * this.verticesIndices[h + 1] + 2]),
            this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[h + 1] + 0], this.texCoords[2 * this.verticesIndices[h + 1] + 1]) : r.push(0, 0),
            n.push(l),
            l++,
            i.push(this.vertices[3 * this.verticesIndices[h + 2] + 0], this.vertices[3 * this.verticesIndices[h + 2] + 1], this.vertices[3 * this.verticesIndices[h + 2] + 2]),
            s.push(this.vertexNormals[3 * this.verticesIndices[h + 2] + 0], this.vertexNormals[3 * this.verticesIndices[h + 2] + 1], this.vertexNormals[3 * this.verticesIndices[h + 2] + 2]),
            0 < this.tangents.length && o.push(this.tangents[3 * this.verticesIndices[h + 2] + 0], this.tangents[3 * this.verticesIndices[h + 2] + 1], this.tangents[3 * this.verticesIndices[h + 2] + 2]),
            0 < this.biTangents.length && a.push(this.biTangents[3 * this.verticesIndices[h + 2] + 0], this.biTangents[3 * this.verticesIndices[h + 2] + 1], this.biTangents[3 * this.verticesIndices[h + 2] + 2]),
            this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[h + 2] + 0], this.texCoords[2 * this.verticesIndices[h + 2] + 1]) : r.push(0, 0),
            n.push(l),
            l++;
        (this.vertices = i), (this.texCoords = r), (this.vertexNormals = s), 0 < o.length && (this.tangents = o), 0 < a.length && (this.biTangents = a), (this.verticesIndices.length = 0), t && (this.verticesIndices = n), e || this.calculateNormals();
      }),
      (H.prototype.calcBarycentric = function () {
        let e = [];
        e.length = this.vertices.length;
        for (let t = 0; t < this.vertices.length; t++) e[t] = 0;
        let i = 0;
        for (let t = 0; t < this.vertices.length; t += 3) (e[t + i] = 1), i++, 3 == i && (i = 0);
        this.setAttribute("attrBarycentric", e, 3);
      }),
      (H.prototype.getBounds = function () {
        return new j(this);
      }),
      (H.prototype.center = function (t, e, i) {
        void 0 === t && (i = e = t = !0);
        let n = 0;
        var r = this.getBounds(),
          s = [r.minX + (r.maxX - r.minX) / 2, r.minY + (r.maxY - r.minY) / 2, r.minZ + (r.maxZ - r.minZ) / 2];
        for (n = 0; n < this.vertices.length; n += 3) this.vertices[n + 0] == this.vertices[n + 0] && (t && (this.vertices[n + 0] -= s[0]), e && (this.vertices[n + 1] -= s[1]), i && (this.vertices[n + 2] -= s[2]));
        return s;
      }),
      (H.prototype.mapTexCoords2d = function () {
        const e = this.getBounds(),
          i = this.vertices.length / 3;
        this.texCoords = new Float32Array(2 * i);
        for (let t = 0; t < i; t++) {
          const i = this.vertices[3 * t + 0],
            n = this.vertices[3 * t + 1];
          (this.texCoords[2 * t + 0] = i / (e.maxX - e.minX) + 0.5), (this.texCoords[2 * t + 1] = 1 - n / (e.maxY - e.minY) + 0.5);
        }
      }),
      (H.prototype.getInfo = function () {
        const t = {};
        return (
          this.verticesIndices ? (t.numFaces = this.verticesIndices.length / 3) : (t.numFaces = 0),
          this.vertices ? (t.numVerts = this.vertices.length / 3) : (t.numVerts = 0),
          this.vertexNormals ? (t.numNormals = this.vertexNormals.length / 3) : (t.numNormals = 0),
          this.texCoords ? (t.numTexCoords = this.texCoords.length / 2) : (t.numTexCoords = 0),
          this.tangents ? (t.numTangents = this.tangents.length / 3) : (t.numTangents = 0),
          this.biTangents ? (t.numBiTangents = this.biTangents.length / 3) : (t.numBiTangents = 0),
          this.biTangents ? (t.numBiTangents = this.biTangents.length / 3) : (t.numBiTangents = 0),
          this.vertexColors ? (t.numVertexColors = this.vertexColors.length / 4) : (t.numVertexColors = 0),
          this.getAttributes() ? (t.numAttribs = Object.keys(this.getAttributes()).length) : (t.numAttribs = 0),
          (t.isIndexed = this.isIndexed()),
          t
        );
      }),
      (H.buildFromFaces = function (e, t, i) {
        const n = [],
          r = [];
        for (let t = 0; t < e.length; t += 3) {
          const s = e[t + 0],
            o = e[t + 1],
            a = e[t + 2],
            l = [-1, -1, -1];
          if (i) for (let t = 0; t < n.length; t += 3) n[t + 0] == s[0] && n[t + 1] == s[1] && n[t + 2] == s[2] && (l[0] = t / 3), n[t + 0] == o[0] && n[t + 1] == o[1] && n[t + 2] == o[2] && (l[1] = t / 3), n[t + 0] == a[0] && n[t + 1] == a[1] && n[t + 2] == a[2] && (l[2] = t / 3);
          -1 == l[0] && (n.push(s[0], s[1], s[2]), (l[0] = (n.length - 1) / 3)), -1 == l[1] && (n.push(o[0], o[1], o[2]), (l[1] = (n.length - 1) / 3)), -1 == l[2] && (n.push(a[0], a[1], a[2]), (l[2] = (n.length - 1) / 3)), r.push(parseInt(l[0], 10)), r.push(parseInt(l[1], 10)), r.push(parseInt(l[2], 10));
        }
        const s = new H(t);
        return (s.name = t), (s.vertices = n), (s.verticesIndices = r), s;
      }),
      (H.json2geom = function (e) {
        const i = new H("jsonMeshGeom");
        if (
          ((i.verticesIndices = []),
          (i.vertices = e.vertices || []),
          (i.vertexNormals = e.normals || []),
          (i.vertexColors = e.colors || []),
          (i.tangents = e.tangents || []),
          (i.biTangents = e.bitangents || []),
          e.texturecoords && i.setTexCoords(e.texturecoords[0]),
          e.vertices_b64 && (i.vertices = new Float32Array(z(e.vertices_b64))),
          e.normals_b64 && (i.vertexNormals = new Float32Array(z(e.normals_b64))),
          e.tangents_b64 && (i.tangents = new Float32Array(z(e.tangents_b64))),
          e.bitangents_b64 && (i.biTangents = new Float32Array(z(e.bitangents_b64))),
          e.texturecoords_b64 && i.setTexCoords(new Float32Array(z(e.texturecoords_b64[0]))),
          e.faces_b64)
        )
          i.verticesIndices = new Uint32Array(z(e.faces_b64));
        else {
          i.verticesIndices.length = 3 * e.faces.length;
          for (let t = 0; t < e.faces.length; t++) (i.verticesIndices[3 * t] = e.faces[t][0]), (i.verticesIndices[3 * t + 1] = e.faces[t][1]), (i.verticesIndices[3 * t + 2] = e.faces[t][2]);
        }
        return i;
      });
    function X() {
      (this._log = new d("eventtaget")),
        (this._eventCallbacks = {}),
        (this._logName = ""),
        (this._logEvents = !1),
        (this._listeners = {}),
        (this.addEventListener = this.on =
          function (t, e, i) {
            e = { id: (i || "") + CABLES.uuid(), name: t, cb: e };
            return this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : (this._eventCallbacks[t] = [e]), (this._listeners[e.id] = e).id;
          }),
        (this.hasEventListener = function (t, e) {
          return t && !e ? !!this._listeners[t] : (this._log.warn("old eventtarget function haseventlistener!"), t && e && this._eventCallbacks[t] ? -1 != this._eventCallbacks[t].indexOf(e) : void 0);
        }),
        (this.removeEventListener = this.off =
          function (n, r) {
            if (null != n)
              if (r) {
                this._log.stack(" old function signature: removeEventListener! use listener id");
                let e = null;
                for (let t = 0; t < this._eventCallbacks[n].length; t++) this._eventCallbacks[n][t].cb == r && (e = t);
                null !== e ? delete this._eventCallbacks[e] : this._log.warn("removeEventListener not found " + n);
              } else {
                const r = this._listeners[n];
                if (!r) return;
                let i = !0;
                for (; i; ) {
                  i = !1;
                  let e = -1;
                  for (let t = 0; t < this._eventCallbacks[r.name].length; t++) 0 === this._eventCallbacks[r.name][t].id.indexOf(n) && ((i = !0), (e = t));
                  -1 !== e && (this._eventCallbacks[r.name].splice(e, 1), delete this._listeners[n]);
                }
              }
          }),
        (this.logEvents = function (t, e) {
          (this._logEvents = t), (this._logName = e);
        }),
        (this.emitEvent = function (e, i, n, r, s, o, a) {
          if ((this._logEvents && console.log("[event] ", this._logName, e, this._eventCallbacks), this._eventCallbacks[e])) for (let t = 0; t < this._eventCallbacks[e].length; t++) this._eventCallbacks[e][t] && this._eventCallbacks[e][t].cb(i, n, r, s, o, a);
          else this._logEvents && console.log("[event] has no event callback", e, this._eventCallbacks);
        });
    }
    const W = {
      Key: function (t) {
        (this.time = 0), (this.value = 0), (this.ui = null), (this.onChange = null), (this._easing = 0), (this.bezTangIn = 0), (this.bezTangOut = 0), (this.cb = null), (this.cbTriggered = !1), this.setEasing(h.EASING_LINEAR), this.set(t);
      },
    };
    (W.Key.cubicSpline = function (t, e, i) {
      var n = t * t,
        r = n * t;
      return (2 * r - 3 * n + 1) * e.value + (r - 2 * n + t) * e.bezTangOut + (-2 * r + 3 * n) * i.value + (r - n) * i.bezTangIn;
    }),
      (W.Key.easeCubicSpline = function (t, e) {
        return W.Key.cubicSpline(t, this, e);
      }),
      (W.Key.linear = function (t, e, i) {
        return parseFloat(e.value) + parseFloat(i.value - e.value) * t;
      }),
      (W.Key.easeLinear = function (t, e) {
        return W.Key.linear(t, this, e);
      }),
      (W.Key.easeAbsolute = function (t, e) {
        return this.value;
      });
    const Y = function (t) {
      return Math.pow(2, 10 * (t - 1));
    };
    W.Key.easeExpoIn = function (t, e) {
      return (t = Y(t)), W.Key.linear(t, this, e);
    };
    const Z = function (t) {
      return 1 - Math.pow(2, -10 * t);
    };
    W.Key.easeExpoOut = function (t, e) {
      return (t = Z(t)), W.Key.linear(t, this, e);
    };
    const K = function (t) {
      return (t = (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : (t--, 0.5 * (2 - Math.pow(2, -10 * t))));
    };
    (W.Key.easeExpoInOut = function (t, e) {
      return (t = K(t)), W.Key.linear(t, this, e);
    }),
      (W.Key.easeSinIn = function (t, e) {
        return (t = -1 * Math.cos((t * Math.PI) / 2) + 1), W.Key.linear(t, this, e);
      }),
      (W.Key.easeSinOut = function (t, e) {
        return (t = Math.sin((t * Math.PI) / 2)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeSinInOut = function (t, e) {
        return (t = -0.5 * (Math.cos(Math.PI * t) - 1)), W.Key.linear(t, this, e);
      });
    const q = function (t) {
      return t * (t * t);
    };
    (W.Key.easeCubicIn = function (t, e) {
      return (t = q(t)), W.Key.linear(t, this, e);
    }),
      (W.Key.easeInQuint = function (t, e) {
        return (t *= t * t * t * t), W.Key.linear(t, this, e);
      }),
      (W.Key.easeOutQuint = function (t, e) {
        return (t = --t * t * t * t * t + 1), W.Key.linear(t, this, e);
      }),
      (W.Key.easeInOutQuint = function (t, e) {
        return (t /= 0.5) < 1 ? (t *= 0.5 * t * t * t * t) : (t = 0.5 * ((t -= 2) * t * t * t * t + 2)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeInQuart = function (t, e) {
        return (t *= t * t * t), W.Key.linear(t, this, e);
      }),
      (W.Key.easeOutQuart = function (t, e) {
        return (t = -1 * (--t * t * t * t - 1)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeInOutQuart = function (t, e) {
        return (t /= 0.5) < 1 ? (t *= 0.5 * t * t * t) : (t = -0.5 * ((t -= 2) * t * t * t - 2)), W.Key.linear(t, this, e);
      }),
      (W.Key.bounce = function (t) {
        return (t /= 1) < 1 / 2.75 ? (t *= 7.5625 * t) : (t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375), t;
      }),
      (W.Key.easeInBounce = function (t, e) {
        return W.Key.linear(W.Key.bounce(t), this, e);
      }),
      (W.Key.easeOutBounce = function (t, e) {
        return W.Key.linear(W.Key.bounce(t), this, e);
      }),
      (W.Key.easeInElastic = function (t, e) {
        let i = 1.70158,
          n = 0,
          r = 1;
        return (t = 0 === t ? 0 : 1 == (t /= 1) ? 1 : ((n = n || 0.3), (i = r < Math.abs(1) ? ((r = 1), n / 4) : (n / (2 * Math.PI)) * Math.asin(1 / r)), -r * Math.pow(2, 10 * --t) * Math.sin(((+t - i) * (2 * Math.PI)) / n) + 0)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeOutElastic = function (t, e) {
        let i = 1.70158,
          n = 0,
          r = 1;
        return (t = 0 === t ? 0 : 1 == (t /= 1) ? 1 : ((n = n || 0.3), (i = r < Math.abs(1) ? ((r = 1), n / 4) : (n / (2 * Math.PI)) * Math.asin(1 / r)), r * Math.pow(2, -10 * t) * Math.sin(((+t - i) * (2 * Math.PI)) / n) + 1)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeInBack = function (t, e) {
        return (t = t * t * (2.70158 * t - 1.70158)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeOutBack = function (t, e) {
        return (t = (t = +t - 1) * t * (2.70158 * t + 1.70158) + 1), W.Key.linear(t, this, e);
      }),
      (W.Key.easeInOutBack = function (t, e) {
        let i = 1.70158;
        return (t = (t /= 0.5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2)), W.Key.linear(t, this, e);
      });
    const Q = function (t) {
      return --t * t * t + 1;
    };
    W.Key.easeCubicOut = function (t, e) {
      return (t = Q(t)), W.Key.linear(t, this, e);
    };
    const J = function (t) {
      return (t *= 2) < 1 ? (t *= 0.5 * t * t) : (t = 0.5 * ((t -= 2) * t * t + 2)), t;
    };
    (W.Key.easeCubicInOut = function (t, e) {
      return (t = J(t)), W.Key.linear(t, this, e);
    }),
      (W.Key.easeSmoothStep = function (t, e) {
        var i = Math.max(0, Math.min(1, t));
        return (t = i * i * (3 - 2 * i)), W.Key.linear(t, this, e);
      }),
      (W.Key.easeSmootherStep = function (t, e) {
        var i = Math.max(0, Math.min(1, +t));
        return (t = i * i * i * (i * (6 * i - 15) + 10)), W.Key.linear(t, this, e);
      }),
      (W.Key.prototype.setEasing = function (t) {
        (this._easing = t),
          this._easing == h.EASING_LINEAR
            ? (this.ease = W.Key.easeLinear)
            : this._easing == h.EASING_ABSOLUTE
            ? (this.ease = W.Key.easeAbsolute)
            : this._easing == h.EASING_SMOOTHSTEP
            ? (this.ease = W.Key.easeSmoothStep)
            : this._easing == h.EASING_SMOOTHERSTEP
            ? (this.ease = W.Key.easeSmootherStep)
            : this._easing == h.EASING_CUBIC_IN
            ? (this.ease = W.Key.easeCubicIn)
            : this._easing == h.EASING_CUBIC_OUT
            ? (this.ease = W.Key.easeCubicOut)
            : this._easing == h.EASING_CUBIC_INOUT
            ? (this.ease = W.Key.easeCubicInOut)
            : this._easing == h.EASING_EXPO_IN
            ? (this.ease = W.Key.easeExpoIn)
            : this._easing == h.EASING_EXPO_OUT
            ? (this.ease = W.Key.easeExpoOut)
            : this._easing == h.EASING_EXPO_INOUT
            ? (this.ease = W.Key.easeExpoInOut)
            : this._easing == h.EASING_SIN_IN
            ? (this.ease = W.Key.easeSinIn)
            : this._easing == h.EASING_SIN_OUT
            ? (this.ease = W.Key.easeSinOut)
            : this._easing == h.EASING_SIN_INOUT
            ? (this.ease = W.Key.easeSinInOut)
            : this._easing == h.EASING_BACK_OUT
            ? (this.ease = W.Key.easeOutBack)
            : this._easing == h.EASING_BACK_IN
            ? (this.ease = W.Key.easeInBack)
            : this._easing == h.EASING_BACK_INOUT
            ? (this.ease = W.Key.easeInOutBack)
            : this._easing == h.EASING_ELASTIC_IN
            ? (this.ease = W.Key.easeInElastic)
            : this._easing == h.EASING_ELASTIC_OUT
            ? (this.ease = W.Key.easeOutElastic)
            : this._easing == h.EASING_ELASTIC_INOUT
            ? (this.ease = W.Key.easeElasticInOut)
            : this._easing == h.EASING_BOUNCE_IN
            ? (this.ease = W.Key.easeInBounce)
            : this._easing == h.EASING_BOUNCE_OUT
            ? (this.ease = W.Key.easeOutBounce)
            : this._easing == h.EASING_QUART_OUT
            ? (this.ease = W.Key.easeOutQuart)
            : this._easing == h.EASING_QUART_IN
            ? (this.ease = W.Key.easeInQuart)
            : this._easing == h.EASING_QUART_INOUT
            ? (this.ease = W.Key.easeInOutQuart)
            : this._easing == h.EASING_QUINT_OUT
            ? (this.ease = W.Key.easeOutQuint)
            : this._easing == h.EASING_QUINT_IN
            ? (this.ease = W.Key.easeInQuint)
            : this._easing == h.EASING_QUINT_INOUT
            ? (this.ease = W.Key.easeInOutQuint)
            : this._easing == h.EASING_CUBICSPLINE
            ? (this.ease = W.Key.easeCubicSpline)
            : ((this._easing = h.EASING_LINEAR), (this.ease = W.Key.easeLinear));
      }),
      (W.Key.prototype.trigger = function () {
        this.cb(), (this.cbTriggered = !0);
      }),
      (W.Key.prototype.setValue = function (t) {
        (this.value = t), null !== this.onChange && this.onChange();
      }),
      (W.Key.prototype.set = function (t) {
        t && (t.e && this.setEasing(t.e), t.cb && ((this.cb = t.cb), (this.cbTriggered = !1)), t.b, t.hasOwnProperty("t") && (this.time = t.t), t.hasOwnProperty("time") && (this.time = t.time), t.hasOwnProperty("v") ? (this.value = t.v) : t.hasOwnProperty("value") && (this.value = t.value)), null !== this.onChange && this.onChange();
      }),
      (W.Key.prototype.getSerialized = function () {
        const t = {};
        return (t.t = this.time), (t.v = this.value), (t.e = this._easing), t;
      }),
      (W.Key.prototype.getEasing = function () {
        return this._easing;
      });
    const $ = function (t) {
      X.apply(this), (t = t || {}), (this.keys = []), (this.onChange = null), (this.stayInTimeline = !1), (this.loop = !1), (this._log = new d("Anim")), (this.defaultEasing = t.defaultEasing || h.EASING_LINEAR), (this.onLooped = null), (this._timesLooped = 0), (this._needsSort = !1);
    };
    ($.prototype.forceChangeCallback = function () {
      null !== this.onChange && this.onChange(), this.emitEvent("onChange", this);
    }),
      ($.prototype.getLoop = function () {
        return this.loop;
      }),
      ($.prototype.setLoop = function (t) {
        (this.loop = t), this.emitEvent("onChange", this);
      }),
      ($.prototype.hasEnded = function (t) {
        return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t;
      }),
      ($.prototype.isRising = function (t) {
        if (this.hasEnded(t)) return !1;
        t = this.getKeyIndex(t);
        return this.keys[t].value < this.keys[t + 1].value;
      }),
      ($.prototype.clearBefore = function (t) {
        var e = this.getValue(t),
          i = this.getKeyIndex(t);
        this.setValue(t, e), 1 < i && this.keys.splice(0, i);
      }),
      ($.prototype.clear = function (t) {
        let e = 0;
        t && (e = this.getValue(t)), (this.keys.length = 0), t && this.setValue(t, e), null !== this.onChange && this.onChange(), this.emitEvent("onChange", this);
      }),
      ($.prototype.sortKeys = function () {
        this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)), (this._needsSort = !1);
      }),
      ($.prototype.getLength = function () {
        return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time;
      }),
      ($.prototype.getKeyIndex = function (e) {
        let i = 0;
        for (let t = 0; t < this.keys.length; t++) if ((e >= this.keys[t].time && (i = t), this.keys[t].time > e)) return i;
        return i;
      }),
      ($.prototype.setValue = function (t, e, i) {
        let n = null;
        for (const r in this.keys)
          if (this.keys[r].time == t) {
            (n = this.keys[r]), this.keys[r].setValue(e), (this.keys[r].cb = i);
            break;
          }
        return n || ((n = new W.Key({ time: t, value: e, e: this.defaultEasing, cb: i })), this.keys.push(n)), this.onChange && this.onChange(), this.emitEvent("onChange", this), (this._needsSort = !0), n;
      }),
      ($.prototype.setKeyEasing = function (t, e) {
        this.keys[t] && (this.keys[t].setEasing(e), this.emitEvent("onChange", this));
      }),
      ($.prototype.getSerialized = function () {
        const t = { keys: [] };
        t.loop = this.loop;
        for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
        return t;
      }),
      ($.prototype.getKey = function (t) {
        t = this.getKeyIndex(t);
        return this.keys[t];
      }),
      ($.prototype.getNextKey = function (t) {
        let e = this.getKeyIndex(t) + 1;
        return e >= this.keys.length && (e = this.keys.length - 1), this.keys[e];
      }),
      ($.prototype.isFinished = function (t) {
        return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time;
      }),
      ($.prototype.isStarted = function (t) {
        return !(this.keys.length <= 0) && t >= this.keys[0].time;
      }),
      ($.prototype.getValue = function (t) {
        if (0 === this.keys.length) return 0;
        if ((this._needsSort && this.sortKeys(), t < this.keys[0].time)) return this.keys[0].value;
        var e = this.keys.length - 1;
        this.loop && t > this.keys[e].time && (t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()), (t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time)), (t += this.keys[0].time));
        var i = this.getKeyIndex(t);
        if (e <= i) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(), this.keys[e].value;
        const n = parseInt(i, 10) + 1,
          r = this.keys[i],
          s = this.keys[n];
        if ((r.cb && !r.cbTriggered && r.trigger(), !s)) return -1;
        t = (t - r.time) / (s.time - r.time);
        return r.ease || this.log._warn("has no ease", r, s), r.ease(t, s);
      }),
      ($.prototype.addKey = function (t) {
        void 0 === t.time ? this.log.warn("key time undefined, ignoring!") : (this.keys.push(t), null !== this.onChange && this.onChange(), this.emitEvent("onChange", this));
      }),
      ($.prototype.easingFromString = function (t) {
        return "linear" == t
          ? h.EASING_LINEAR
          : "absolute" == t
          ? h.EASING_ABSOLUTE
          : "smoothstep" == t
          ? h.EASING_SMOOTHSTEP
          : "smootherstep" == t
          ? h.EASING_SMOOTHERSTEP
          : "Cubic In" == t
          ? h.EASING_CUBIC_IN
          : "Cubic Out" == t
          ? h.EASING_CUBIC_OUT
          : "Cubic In Out" == t
          ? h.EASING_CUBIC_INOUT
          : "Expo In" == t
          ? h.EASING_EXPO_IN
          : "Expo Out" == t
          ? h.EASING_EXPO_OUT
          : "Expo In Out" == t
          ? h.EASING_EXPO_INOUT
          : "Sin In" == t
          ? h.EASING_SIN_IN
          : "Sin Out" == t
          ? h.EASING_SIN_OUT
          : "Sin In Out" == t
          ? h.EASING_SIN_INOUT
          : "Back In" == t
          ? h.EASING_BACK_IN
          : "Back Out" == t
          ? h.EASING_BACK_OUT
          : "Back In Out" == t
          ? h.EASING_BACK_INOUT
          : "Elastic In" == t
          ? h.EASING_ELASTIC_IN
          : "Elastic Out" == t
          ? h.EASING_ELASTIC_OUT
          : "Bounce In" == t
          ? h.EASING_BOUNCE_IN
          : "Bounce Out" == t
          ? h.EASING_BOUNCE_OUT
          : "Quart Out" == t
          ? h.EASING_QUART_OUT
          : "Quart In" == t
          ? h.EASING_QUART_IN
          : "Quart In Out" == t
          ? h.EASING_QUART_INOUT
          : "Quint Out" == t
          ? h.EASING_QUINT_OUT
          : "Quint In" == t
          ? h.EASING_QUINT_IN
          : "Quint In Out" == t
          ? h.EASING_QUINT_INOUT
          : void 0;
      }),
      ($.prototype.createPort = function (t, e, i) {
        const n = t.inDropDown(e, h.EASINGS);
        return (
          n.set("linear"),
          (n.defaultValue = "linear"),
          (n.onChange = function () {
            (this.defaultEasing = this.easingFromString(n.get())), i && i();
          }.bind(this)),
          n
        );
      }),
      ($.slerpQuaternion = function (t, e, i, n, r, s) {
        $.slerpQuaternion.q1 || (($.slerpQuaternion.q1 = quat.create()), ($.slerpQuaternion.q2 = quat.create()));
        var o = i.getKeyIndex(t);
        let a = o + 1;
        return a >= i.keys.length && (a = i.keys.length - 1), o == a ? quat.set(e, i.keys[o].value, n.keys[o].value, r.keys[o].value, s.keys[o].value) : ((t = (t - (t = i.keys[o].time)) / (i.keys[a].time - t)), quat.set($.slerpQuaternion.q1, i.keys[o].value, n.keys[o].value, r.keys[o].value, s.keys[o].value), quat.set($.slerpQuaternion.q2, i.keys[a].value, n.keys[a].value, r.keys[a].value, s.keys[a].value), quat.slerp(e, $.slerpQuaternion.q1, $.slerpQuaternion.q2, t)), e;
      });
    const tt = W;
    tt.Anim = $;
    function et(t, e, i, n) {
      X.apply(this),
        (this.data = {}),
        (this._log = new d("core_port")),
        (this.direction = c.PORT_DIR_IN),
        (this.id = v()),
        (this.parent = t),
        (this.links = []),
        (this.value = 0),
        (this.name = e),
        (this.type = i || u.OP_PORT_TYPE_VALUE),
        (this.uiAttribs = n || {}),
        (this.anim = null),
        (this._oldAnimVal = -5711),
        (this.defaultValue = null),
        (this._uiActiveState = !0),
        (this.ignoreValueSerialize = !1),
        (this.onLinkChanged = null),
        (this.crashed = !1),
        (this._valueBeforeLink = null),
        (this._lastAnimFrame = -1),
        (this._animated = !1),
        (this.onValueChanged = null),
        (this.onTriggered = null),
        (this.onUiActiveStateChange = null),
        (this.changeAlways = !1),
        (this._warnedDeprecated = !1),
        (this._useVariableName = null),
        (this.activityCounter = 0),
        (this._tempLastUiValue = null),
        Object.defineProperty(this, "val", {
          get() {
            return this._log.warn("val getter deprecated!", this), this._log.stack("val getter deprecated"), (this._warnedDeprecated = !0), this.get();
          },
          set(t) {
            this._log.warn("val setter deprecated!", this), this._log.stack("val setter deprecated"), this.setValue(t), (this._warnedDeprecated = !0);
          },
        });
    }
    (et.prototype.getValueForDisplay = function () {
      let t = String(this.value);
      return this.uiAttribs && "boolnum" == this.uiAttribs.display && ((t += " - "), this.value ? (t += "true") : (t += "false")), (t = t.replace(/(<([^>]+)>)/gi, "")), 100 < t.length && (t = t.substring(0, 100)), t;
    }),
      (et.prototype.onAnimToggle = function () {}),
      (et.prototype._onAnimToggle = function () {
        this.onAnimToggle();
      }),
      (et.prototype.remove = function () {
        this.removeLinks(), this.parent.removePort(this);
      }),
      (et.prototype.setUiAttribs = function (t) {
        let e = !1;
        this.uiAttribs || (this.uiAttribs = {});
        for (const i in t) this.uiAttribs[i] != t[i] && (e = !0), (this.uiAttribs[i] = t[i]), "group" == i && this.indexPort && this.indexPort.setUiAttribs({ group: t[i] });
        e && this.emitEvent("onUiAttrChange", t);
      }),
      (et.prototype.getUiAttribs = function () {
        return this.uiAttribs;
      }),
      (et.prototype.getUiAttrib = function (t) {
        return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null;
      }),
      (et.prototype.get = function () {
        return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && ((this._lastAnimFrame = this.parent.patch.getFrameNum()), (this.value = this.anim.getValue(this.parent.patch.timer.getTime())), (this._oldAnimVal = this.value), this.forceChange()), this.value;
      }),
      (et.prototype.set = et.prototype.setValue =
        function (t) {
          if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == u.OP_PORT_TYPE_TEXTURE || this.type == u.OP_PORT_TYPE_ARRAY)) {
            if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);
            else {
              try {
                (this.value = t), this.forceChange();
              } catch (t) {
                (this.crashed = !0), (this.setValue = function (t) {}), (this.onTriggered = function () {}), this._log.error("onvaluechanged exception cought", t), this._log.error(t.stack), this._log.warn("exception in: " + this.parent.name), this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent), this.parent.patch.emitEvent("exception", t, this.parent), this.parent.onError && this.parent.onError(t);
              }
              this.parent && this.parent.patch && this.parent.patch.isEditorMode() && this.type == u.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this);
            }
            if (this.direction == c.PORT_DIR_OUT) for (let t = 0; t < this.links.length; ++t) this.links[t].setValue();
          }
        }),
      (et.prototype.updateAnim = function () {
        this._animated && ((this.value = this.get()), (this._oldAnimVal == this.value && !this.changeAlways) || ((this._oldAnimVal = this.value), this.forceChange()), (this._oldAnimVal = this.value));
      }),
      (et.args = function (t) {
        return (t + "")
          .replace(/[/][/].*$/gm, "")
          .replace(/\s+/g, "")
          .replace(/[/][*][^/*]*[*][/]/g, "")
          .split("){", 1)[0]
          .replace(/^[^(]*[(]/, "")
          .replace(/=[^,]+/g, "")
          .split(",")
          .filter(Boolean);
      }),
      (et.prototype.forceChange = function () {
        this.onValueChanged || this.onChange, this._activity(), this.emitEvent("change", this.value, this), this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value);
      }),
      (et.prototype.getTypeString = function () {
        return this.type == u.OP_PORT_TYPE_VALUE ? "Number" : this.type == u.OP_PORT_TYPE_FUNCTION ? "Trigger" : this.type == u.OP_PORT_TYPE_OBJECT ? "Object" : this.type == u.OP_PORT_TYPE_DYNAMIC ? "Dynamic" : this.type == u.OP_PORT_TYPE_ARRAY ? "Array" : this.type == u.OP_PORT_TYPE_STRING ? "String" : "Unknown";
      }),
      (et.prototype.deSerializeSettings = function (t) {
        if (t && (t.animated && this.setAnimated(t.animated), t.useVariable && this.setVariableName(t.useVariable), t.anim)) {
          this.anim || (this.anim = new $()),
            this.anim.addEventListener("onChange", () => {
              this.parent.patch.emitEvent("portAnimUpdated", this.parent, this, this.anim);
            }),
            t.anim.loop && (this.anim.loop = t.anim.loop);
          for (const e in t.anim.keys) this.anim.keys.push(new W.Key(t.anim.keys[e]));
        }
      }),
      (et.prototype.getSerialized = function () {
        const t = {};
        if (((t.name = this.getName()), this.ignoreValueSerialize || 0 !== this.links.length || (this.type == u.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) || (t.value = this.value), this._useVariableName && (t.useVariable = this._useVariableName), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), "file" == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == c.PORT_DIR_OUT && 0 < this.links.length)) {
          t.links = [];
          for (const e in this.links) !this.links[e].ignoreInSerialize && this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized());
        }
        return t;
      }),
      (et.prototype.shouldLink = function () {
        return !0;
      }),
      (et.prototype.removeLinks = function () {
        let t = 0;
        for (; 0 < this.links.length; ) {
          if ((t++, 5e3 < t)) {
            this._log.warn("could not delete links... / infinite loop"), (this.links.length = 0);
            break;
          }
          this.links[0].remove();
        }
      }),
      (et.prototype.removeLink = function (t) {
        for (const e in this.links) this.links[e] == t && this.links.splice(e, 1);
        this.direction == c.PORT_DIR_IN && (this.type == u.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged");
      }),
      (et.prototype.getName = function () {
        return this.name;
      }),
      (et.prototype.addLink = function (t) {
        (this._valueBeforeLink = this.value), this.links.push(t), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged");
      }),
      (et.prototype.getLinkTo = function (t) {
        for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e];
      }),
      (et.prototype.removeLinkTo = function (t) {
        for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e].remove(), this.onLinkChanged && this.onLinkChanged(), void this.emitEvent("onLinkChanged");
      }),
      (et.prototype.isLinkedTo = function (t) {
        for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return !0;
        return !1;
      }),
      (et.prototype._activity = function () {
        this.activityCounter++;
      }),
      (et.prototype.trigger = function () {
        if ((this._activity(), 0 !== this.links.length && this.parent.enabled)) {
          let e = null;
          try {
            for (let t = 0; t < this.links.length; ++t) this.links[t].portIn && ((e = this.links[t].portIn), e.parent.patch.pushTriggerStack(e), e._onTriggered(), e.parent.patch.popTriggerStack()), this.links[t] && this.links[t].activity();
          } catch (t) {
            (this.parent.enabled = !1), this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent("exception", t, e.parent), this.parent.patch.emitEvent("opcrash", e), e.parent.onError && e.parent.onError(t)), this._log.warn("exception!"), this._log.error("ontriggered exception cought", t), this._log.error(t.stack), this._log.warn("exception in: " + e.parent.name);
          }
        }
      }),
      (et.prototype.call = function () {
        this._log.warn("call deprecated - use trigger() "), this.trigger();
      }),
      (et.prototype.execute = function () {
        this._log.warn("### execute port: " + this.getName(), this.goals.length);
      }),
      (et.prototype.setVariableName = function (t) {
        this._useVariableName = t;
      }),
      (et.prototype.getVariableName = function () {
        return this._useVariableName;
      }),
      (et.prototype.setVariable = function (t) {
        this.setAnimated(!1);
        const e = { useVariable: !1 };
        this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), (this._variableIn = null)),
          t
            ? ((this._variableIn = this.parent.patch.getVar(t)),
              this._variableIn
                ? (this.type == u.OP_PORT_TYPE_OBJECT
                    ? this._variableIn.addListener(() => {
                        this.set(null), this.set(this._variableIn.getValue());
                      })
                    : this._variableIn.addListener(this.set.bind(this)),
                  this.set(this._variableIn.getValue()))
                : this._log.warn("PORT VAR NOT FOUND!!!", t),
              (this._useVariableName = t),
              (e.useVariable = !0),
              (e.variableName = this._useVariableName))
            : ((e.variableName = this._useVariableName = null), (e.useVariable = !1)),
          this.setUiAttribs(e),
          this.parent.patch.emitEvent("portSetVariable", this.parent, this, t);
      }),
      (et.prototype._handleNoTriggerOpAnimUpdates = function (t) {
        let e = !1;
        for (let t = 0; t < this.parent.portsIn.length; t++)
          if (this.parent.portsIn.type == u.OP_PORT_TYPE_FUNCTION) {
            e = !0;
            break;
          }
        e ||
          (t
            ? (this._notriggerAnimUpdate = this.parent.patch.on("onRenderFrame", () => {
                this.updateAnim();
              }))
            : this.parent.patch.removeEventListener(this._notriggerAnimUpdate));
      }),
      (et.prototype.setAnimated = function (t) {
        this._animated != t &&
          ((this._animated = t),
          this._animated &&
            !this.anim &&
            ((this.anim = new $()),
            this.anim.addEventListener("onChange", () => {
              this.parent.patch.emitEvent("portAnimUpdated", this.parent, this, this.anim);
            })),
          this._onAnimToggle()),
          this._handleNoTriggerOpAnimUpdates(t),
          this.setUiAttribs({ isAnimated: this._animated });
      }),
      (et.prototype.toggleAnim = function (t) {
        (this._animated = !this._animated),
          this._animated &&
            !this.anim &&
            ((this.anim = new $()),
            this.anim.addEventListener("onChange", () => {
              this.parent.patch.emitEvent("portAnimUpdated", this.parent, this, this.anim);
            })),
          this.setAnimated(this._animated),
          this._onAnimToggle(),
          this.setUiAttribs({ isAnimated: this._animated });
      }),
      (et.prototype.getType = function () {
        return this.type;
      }),
      (et.prototype.isLinked = function () {
        return 0 < this.links.length;
      }),
      (et.prototype.isBoundToVar = function () {
        return null != this._useVariableName;
      }),
      (et.prototype.isAnimated = function () {
        return this._animated;
      }),
      (et.prototype.isHidden = function () {
        return this.uiAttribs.hidePort;
      }),
      (et.prototype._onTriggered = function (t) {
        this._activity(), this.parent.updateAnims(), this.parent.enabled && this.onTriggered && this.onTriggered(t);
      }),
      (et.prototype._onSetProfiling = function (t) {
        this.parent.patch.profiler.add("port", this), this.setValue(t), this.parent.patch.profiler.add("port", null);
      }),
      (et.prototype._onTriggeredProfiling = function () {
        this.parent.enabled && this.onTriggered && (this.parent.patch.profiler.add("port", this), this.onTriggered(), this.parent.patch.profiler.add("port", null));
      }),
      (et.prototype.onValueChange = function (t) {
        this.onChange = t;
      }),
      (et.prototype.getUiActiveState = function () {
        return this._uiActiveState;
      }),
      (et.prototype.setUiActiveState = function (t) {
        (this._uiActiveState = t), this.onUiActiveStateChange && this.onUiActiveStateChange();
      }),
      (et.prototype.hidePort = function () {
        this._log.warn("op.hideport() is deprecated, do not use it!");
      }),
      (et.portTypeNumberToString = function (t) {
        return t == u.OP_PORT_TYPE_VALUE ? "value" : t == u.OP_PORT_TYPE_FUNCTION ? "function" : t == u.OP_PORT_TYPE_OBJECT ? "object" : t == u.OP_PORT_TYPE_ARRAY ? "array" : t == u.OP_PORT_TYPE_STRING ? "string" : t == u.OP_PORT_TYPE_DYNAMIC ? "dynamic" : "unknown";
      });
    class it extends et {
      constructor(t, e, i, n, r) {
        super(t, e, i, n),
          (this.indexPort = r),
          (this.indexPort.set = (t) => {
            var e = n.values;
            e && ((t = Math.floor(t)), (t = Math.min(t, e.length - 1)), (t = Math.max(t, 0)), this.indexPort.setValue(t), this.set(e[t]), this.parent.patch.isEditorMode() && window.gui && gui.patchView.isCurrentOp(this.parent) && gui.opParams.show(this.parent));
          });
      }
      setUiAttribs(t) {
        var e = t.hidePort;
        (t.hidePort = !0), super.setUiAttribs(t), void 0 !== e && this.indexPort.setUiAttribs({ hidePort: e });
      }
    }
    class nt extends it {
      setUiAttribs(t) {
        if (this.indexPort.isLinked()) for (const e in t) "greyout" != e || t[e] || (t[e] = "true");
        super.setUiAttribs(t);
      }
    }
    function rt(t, e, i, n, r, s, o, a, l, h) {
      if (((this._loc = -1), (this._log = new d("cgl_uniform")), (this._type = e), (this._cgl = t._cgl), (this._name = i), (this._shader = t), (this._value = 1e-5), (this._oldValue = null), (this._port = null), (this._structName = l), (this._structUniformName = a), (this._propertyName = h), this._shader._addUniform(this), (this.needsUpdate = !0), (this.shaderType = null), (this.comment = null), "f" == e)) (this.set = this.setValue = this.setValueF.bind(this)), (this.updateValue = this.updateValueF.bind(this));
      else if ("f[]" == e) (this.set = this.setValue = this.setValueArrayF.bind(this)), (this.updateValue = this.updateValueArrayF.bind(this));
      else if ("2f[]" == e) (this.set = this.setValue = this.setValueArray2F.bind(this)), (this.updateValue = this.updateValueArray2F.bind(this));
      else if ("3f[]" == e) (this.set = this.setValue = this.setValueArray3F.bind(this)), (this.updateValue = this.updateValueArray3F.bind(this));
      else if ("4f[]" == e) (this.set = this.setValue = this.setValueArray4F.bind(this)), (this.updateValue = this.updateValueArray4F.bind(this));
      else if ("i" == e) (this.set = this.setValue = this.setValueI.bind(this)), (this.updateValue = this.updateValueI.bind(this));
      else if ("2i" == e) (this.set = this.setValue = this.setValue2I.bind(this)), (this.updateValue = this.updateValue2I.bind(this));
      else if ("3i" == e) (this.set = this.setValue = this.setValue3I.bind(this)), (this.updateValue = this.updateValue3I.bind(this));
      else if ("4i" == e) (this.set = this.setValue = this.setValue4I.bind(this)), (this.updateValue = this.updateValue4I.bind(this));
      else if ("b" == e) (this.set = this.setValue = this.setValueBool.bind(this)), (this.updateValue = this.updateValueBool.bind(this));
      else if ("4f" == e) (this.set = this.setValue = this.setValue4F.bind(this)), (this.updateValue = this.updateValue4F.bind(this));
      else if ("3f" == e) (this.set = this.setValue = this.setValue3F.bind(this)), (this.updateValue = this.updateValue3F.bind(this));
      else if ("2f" == e) (this.set = this.setValue = this.setValue2F.bind(this)), (this.updateValue = this.updateValue2F.bind(this));
      else if ("t" == e) (this.set = this.setValue = this.setValueT.bind(this)), (this.updateValue = this.updateValueT.bind(this));
      else if ("tc" == e) (this.set = this.setValue = this.setValueT.bind(this)), (this.updateValue = this.updateValueT.bind(this));
      else if ("t[]" == e) (this.set = this.setValue = this.setValueArrayT.bind(this)), (this.updateValue = this.updateValueArrayT.bind(this));
      else {
        if ("m4" != e && "m4[]" != e) throw new Error("Unknown uniform type");
        (this.set = this.setValue = this.setValueM4.bind(this)), (this.updateValue = this.updateValueM4.bind(this));
      }
      "object" == typeof n && n instanceof et
        ? ((this._port = n),
          (this._value = this._port.get()),
          r && s && o
            ? ((r instanceof et && s instanceof et && o instanceof et) || this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), (this._value = [0, 0, 0, 0]), (this._port2 = r), (this._port3 = s), (this._port4 = o), this._port.on("change", this.updateFromPort4f.bind(this)), this._port2.on("change", this.updateFromPort4f.bind(this)), this._port3.on("change", this.updateFromPort4f.bind(this)), this._port4.on("change", this.updateFromPort4f.bind(this)), this.updateFromPort4f())
            : r && s
            ? ((r instanceof et && s instanceof et) || this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), (this._value = [0, 0, 0]), (this._port2 = r), (this._port3 = s), this._port.on("change", this.updateFromPort3f.bind(this)), this._port2.on("change", this.updateFromPort3f.bind(this)), this._port3.on("change", this.updateFromPort3f.bind(this)), this.updateFromPort3f())
            : r
            ? (r instanceof et || this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), (this._value = [0, 0]), (this._port2 = r), this._port.on("change", this.updateFromPort2f.bind(this)), this._port2.on("change", this.updateFromPort2f.bind(this)), this.updateFromPort2f())
            : this._port.on("change", this.updateFromPort.bind(this)))
        : (this._value = n),
        this.setValue(this._value),
        (this.needsUpdate = !0);
    }
    (rt.prototype.copy = function (t) {
      const e = new rt(t, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
      return (e.shaderType = this.shaderType), e;
    }),
      (rt.prototype.getGlslTypeString = function () {
        return "f" == this._type ? "float" : "b" == this._type ? "bool" : "i" == this._type ? "int" : "2i" == this._type ? "ivec2" : "2f" == this._type ? "vec2" : "3f" == this._type ? "vec3" : "4f" == this._type ? "vec4" : "m4" == this._type ? "mat4" : "t" == this._type ? "sampler2D" : "tc" == this._type ? "samplerCube" : "3f[]" == this._type || "m4[]" == this._type ? null : void this._log.warn("[CGL UNIFORM] unknown glsl type string ", this._type);
      }),
      (rt.prototype._isValidLoc = function () {
        return -1 != this._loc;
      }),
      (rt.prototype.getType = function () {
        return this._type;
      }),
      (rt.prototype.getName = function () {
        return this._name;
      }),
      (rt.prototype.getValue = function () {
        return this._value;
      }),
      (rt.prototype.getShaderType = function () {
        return this.shaderType;
      }),
      (rt.prototype.isStructMember = function () {
        return !!this._structName;
      }),
      (rt.prototype.resetLoc = function () {
        (this._loc = -1), (this.needsUpdate = !0);
      }),
      (rt.prototype.bindTextures = function () {
        return this._value;
      }),
      (rt.prototype.resetLoc = function () {
        (this._loc = -1), (this.needsUpdate = !0);
      }),
      (rt.prototype.bindTextures = function () {}),
      (rt.prototype.getLoc = function () {
        return this._loc;
      }),
      (rt.prototype.updateFromPort4f = function () {
        (this._value[0] = this._port.get()), (this._value[1] = this._port2.get()), (this._value[2] = this._port3.get()), (this._value[3] = this._port4.get()), this.setValue(this._value);
      }),
      (rt.prototype.updateFromPort3f = function () {
        (this._value[0] = this._port.get()), (this._value[1] = this._port2.get()), (this._value[2] = this._port3.get()), this.setValue(this._value);
      }),
      (rt.prototype.updateFromPort2f = function () {
        (this._value[0] = this._port.get()), (this._value[1] = this._port2.get()), this.setValue(this._value);
      }),
      (rt.prototype.updateFromPort = function () {
        this.setValue(this._port.get());
      }),
      (rt.prototype.updateValueF = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._shader.getCgl().gl.uniform1f(this._loc, this._value), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.setValueF = function (t) {
        t != this._value && ((this.needsUpdate = !0), (this._value = t));
      }),
      (rt.prototype.updateValueI = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._shader.getCgl().gl.uniform1i(this._loc, this._value), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.updateValue2I = function () {
        this._value && (this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]), (this.needsUpdate = !1), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.updateValue3I = function () {
        this._value && (this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]), (this.needsUpdate = !1), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.updateValue4I = function () {
        this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.setValueI = function (t) {
        t != this._value && ((this.needsUpdate = !0), (this._value = t));
      }),
      (rt.prototype.setValue2I = function (t) {
        t && (this._oldValue ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this.needsUpdate = !0)) : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)), (this._value = t));
      }),
      (rt.prototype.setValue3I = function (t) {
        t && (this._oldValue ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this._oldValue[2] = t[2]), (this.needsUpdate = !0)) : ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)), (this._value = t));
      }),
      (rt.prototype.setValue4I = function (t) {
        (this.needsUpdate = !0), (this._value = t || vec4.create());
      }),
      (rt.prototype.updateValueBool = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.setValueBool = function (t) {
        t != this._value && ((this.needsUpdate = !0), (this._value = t));
      }),
      (rt.prototype.setValueArray4F = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      }),
      (rt.prototype.updateValueArray4F = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._value && (this._shader.getCgl().gl.uniform4fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValueArray3F = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      }),
      (rt.prototype.updateValueArray3F = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValueArray2F = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      }),
      (rt.prototype.updateValueArray2F = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._value && (this._shader.getCgl().gl.uniform2fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValueArrayF = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      }),
      (rt.prototype.updateValueArrayF = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValueArrayT = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      }),
      (rt.prototype.updateValue3F = function () {
        this._value && (this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), (this.needsUpdate = !1), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValue3F = function (t) {
        t && (this._oldValue ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this._oldValue[2] = t[2]), (this.needsUpdate = !0)) : ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)), (this._value = t));
      }),
      (rt.prototype.updateValue2F = function () {
        this._value && (this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), (this.needsUpdate = !1), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.setValue2F = function (t) {
        t && (this._oldValue ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this.needsUpdate = !0)) : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)), (this._value = t));
      }),
      (rt.prototype.updateValue4F = function () {
        this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._value || (this._log.warn("no value for uniform", this._name, this), (this._value = [0, 0, 0, 0])), (this.needsUpdate = !1), this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.setValue4F = function (t) {
        "number" == typeof this.value && (this.value = vec4.create()), t && (this._oldValue ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] && t[3] == this._oldValue[3]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this._oldValue[2] = t[2]), (this.needsUpdate = !0)) : ((this._oldValue = [t[0] - 1, 1, 2, 3]), (this.needsUpdate = !0)), (this._value = t));
      }),
      (rt.prototype.updateValueM4 = function () {
        if ((this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), !this._value || this._value.length % 16 != 0)) return console.log("this.name", this._name, this._value);
        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value), this._cgl.profileData.profileUniformCount++;
      }),
      (rt.prototype.setValueM4 = function (t) {
        (this.needsUpdate = !0), (this._value = t || mat4.create());
      }),
      (rt.prototype.updateValueArrayT = function () {
        this._isValidLoc() ? (this.needsUpdate = !1) : (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
      }),
      (rt.prototype.updateValueT = function () {
        this._isValidLoc() || ((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)), this._cgl.profileData.profileShaderGetUniform++, (this._cgl.profileData.profileShaderGetUniformName = this._name)), this._cgl.profileData.profileUniformCount++, this._shader.getCgl().gl.uniform1i(this._loc, this._value), (this.needsUpdate = !1);
      }),
      (rt.prototype.setValueT = function (t) {
        (this.needsUpdate = !0), (this._value = t);
      });
    function st(t, e, i) {
      (this._cgl = t),
        (this._log = new d("cgl_mesh")),
        (this._bufVertexAttrib = null),
        (this._bufVerticesIndizes = this._cgl.gl.createBuffer()),
        (this._indexType = this._cgl.gl.UNSIGNED_SHORT),
        (this._attributes = []),
        (this._attribLocs = {}),
        (this._geom = null),
        (this._lastShader = null),
        (this._numInstances = 0),
        (this._glPrimitive = i),
        (this._preWireframeGeom = null),
        (this.addVertexNumbers = !1),
        (this.feedBackAttributes = []),
        this.setGeom(e),
        (this._feedBacks = []),
        (this._feedBacksChanged = !1),
        (this._transformFeedBackLoc = -1),
        (this._lastAttrUpdate = 0),
        (this._name = "unknown"),
        this._cgl.profileData.addHeavyEvent("mesh constructed", this._name),
        (this._queryExt = null),
        Object.defineProperty(this, "numInstances", {
          get() {
            return this._numInstances;
          },
          set(t) {
            this.setNumInstances(t);
          },
        });
    }
    const ot = 180 / Math.PI,
      at = {
        MATH: { DEG2RAD: Math.PI / 180, RAD2DEG: ot },
        SHADER: {
          SHADERVAR_VERTEX_POSITION: "vPosition",
          SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
          SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
          SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
          SHADERVAR_INSTANCE_MMATRIX: "instMat",
          SHADERVAR_VERTEX_COLOR: "attrVertColor",
          SHADERVAR_UNI_PROJMAT: "projMatrix",
          SHADERVAR_UNI_VIEWMAT: "viewMatrix",
          SHADERVAR_UNI_MODELMAT: "modelMatrix",
          SHADERVAR_UNI_NORMALMAT: "normalMatrix",
          SHADERVAR_UNI_INVVIEWMAT: "inverseViewMatrix",
          SHADERVAR_UNI_VIEWPOS: "camPos",
        },
        BLEND_MODES: { BLEND_NONE: 0, BLEND_NORMAL: 1, BLEND_ADD: 2, BLEND_SUB: 3, BLEND_MUL: 4 },
      },
      lt = { lastMesh: null };
    (st.prototype.updateVertices = function (t) {
      this.setAttribute(at.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3), (this._numVerts = t.vertices.length / 3);
    }),
      (st.prototype.setAttributePointer = function (e, i, n, r) {
        for (let t = 0; t < this._attributes.length; t++) this._attributes[t].name == e && (this._attributes[t].pointer || (this._attributes[t].pointer = []), this._attributes[t].pointer.push({ loc: -1, name: i, stride: n, offset: r, instanced: e == at.SHADER.SHADERVAR_INSTANCE_MMATRIX }));
      }),
      (st.prototype.getAttribute = function (e) {
        for (let t = 0; t < this._attributes.length; t++) if (this._attributes[t].name == e) return this._attributes[t];
      }),
      (st.prototype.setAttributeRange = function (t, e, i, n) {
        t &&
          (i || n) &&
          (t.name || (console.log(t), this._log.stack("no attrname?!")),
          this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer),
          (this._cgl.profileData.profileMeshAttributes += n - i || 0),
          (this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0),
          (this._cgl.profileData.profileSingleMeshAttribute[this._name] += n - i || 0),
          t.numItems < e.length / t.itemSize && this._resizeAttr(e, t),
          n >= e.length - 1 && this._log.log(this._cgl.canvas.id + " " + t.name + " buffersubdata out of bounds ?", e.length, n, i, t),
          1 == this._cgl.glVersion ? this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, e) : this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 4 * i, e, i, n - i));
      }),
      (st.prototype._resizeAttr = function (t, e) {
        e.buffer && this._cgl.gl.deleteBuffer(e.buffer), (e.buffer = this._cgl.gl.createBuffer()), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, e.buffer), this._bufferArray(t, e), (e.numItems = t.length / e.itemSize);
      }),
      (st.prototype._bufferArray = function (t, e) {
        let i = null;
        t && (this._cgl.debugOneFrame && console.log("_bufferArray", t.length, e.name), t instanceof Float32Array ? (i = t) : e && i && i.length == t.length ? i.set(t) : ((i = new Float32Array(t)), this._cgl.debugOneFrame && console.log("_bufferArray create new float32array", t.length, e.name), this._cgl.profileData.profileNonTypedAttrib++, (this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + e.name + ")")), (e.arrayLength = i.length), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, i, this._cgl.gl.DYNAMIC_DRAW));
      }),
      (st.prototype.addAttribute =
        st.prototype.updateAttribute =
        st.prototype.setAttribute =
          function (t, e, i, n) {
            if (!e) throw (this._log.error("mesh addAttribute - no array given! " + t), new Error());
            let r = null,
              s = !1,
              o = 0;
            var a = e.length / i;
            for (this._cgl.profileData.profileMeshAttributes += a || 0, "function" == typeof n && (r = n), "object" == typeof n && (n.cb && (r = n.cb), n.instanced && (s = n.instanced)), t == at.SHADER.SHADERVAR_INSTANCE_MMATRIX && (s = !0), o = 0; o < this._attributes.length; o++) {
              const u = this._attributes[o];
              if (u.name == t) return u.numItems === a || this._resizeAttr(e, u), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, u.buffer), this._bufferArray(e, u), u;
            }
            var l = this._cgl.gl.createBuffer();
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, l);
            let h = this._cgl.gl.FLOAT;
            n && n.type && (h = n.type);
            i = { buffer: l, name: t, cb: r, itemSize: i, numItems: a, startItem: 0, instanced: s, type: h };
            return this._bufferArray(e, i), t == at.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = i), this._attributes.push(i), (this._attribLocs = {}), i;
          }),
      (st.prototype.getAttributes = function () {
        return this._attributes;
      }),
      (st.prototype.updateTexCoords = function (t) {
        t.texCoords && 0 < t.texCoords.length ? this.setAttribute(at.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2) : ((t = new Float32Array(Math.round((t.vertices.length / 3) * 2))), this.setAttribute(at.SHADER.SHADERVAR_VERTEX_TEXCOORD, t, 2));
      }),
      (st.prototype.updateNormals = function (t) {
        t.vertexNormals && 0 < t.vertexNormals.length ? this.setAttribute("attrVertNormal", t.vertexNormals, 3) : ((t = new Float32Array(Math.round(t.vertices.length))), this.setAttribute("attrVertNormal", t, 3));
      }),
      (st.prototype._setVertexNumbers = function (t) {
        if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || t) {
          if (t) this._verticesNumbers = t;
          else {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let t = 0; t < this._numVerts; t++) this._verticesNumbers[t] = t;
          }
          this.setAttribute(at.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (t, e, i) => {
            i.uniformNumVertices || (i.uniformNumVertices = new rt(i, "f", "numVertices", this._numVerts)), i.uniformNumVertices.setValue(this._numVerts);
          });
        }
      }),
      (st.prototype.setVertexIndices = function (e) {
        if (this._bufVerticesIndizes)
          if (0 < e.length) {
            for (let t = 0; t < e.length; t++) if (e[t] >= this._numVerts) return void this._log.warn("invalid index in " + this._name);
            this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes), e instanceof Float32Array && this._log.warn("vertIndices float32Array: " + this._name), e instanceof Uint32Array ? ((this.vertIndicesTyped = e), (this._indexType = this._cgl.gl.UNSIGNED_INT)) : e instanceof Uint16Array ? (this.vertIndicesTyped = e) : (this.vertIndicesTyped = new Uint16Array(e)), this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW), (this._bufVerticesIndizes.itemSize = 1), (this._bufVerticesIndizes.numItems = e.length);
          } else this._bufVerticesIndizes.numItems = 0;
        else this._log.warn("no bufVerticesIndizes: " + this._name);
      }),
      (st.prototype.setGeom = function (t, e) {
        null != (this._geom = t).glPrimitive && (this._glPrimitive = t.glPrimitive),
          this._geom && this._geom.name && (this._name = "mesh " + this._geom.name),
          (lt.lastMesh = null),
          this._cgl.profileData.profileMeshSetGeom++,
          this._disposeAttributes(),
          this.updateVertices(this._geom),
          this.setVertexIndices(this._geom.verticesIndices),
          this.updateTexCoords(this._geom),
          this.updateNormals(this._geom),
          this._geom.hasOwnProperty("tangents") && this._geom.tangents && 0 < this._geom.tangents.length && this.setAttribute("attrTangent", this._geom.tangents, 3),
          this._geom.hasOwnProperty("biTangents") && this._geom.biTangents && 0 < this._geom.biTangents.length && this.setAttribute("attrBiTangent", this._geom.biTangents, 3),
          0 < this._geom.vertexColors.length && (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute("attrVertColor", this._geom.vertexColors, 4)),
          this.addVertexNumbers && this._setVertexNumbers();
        var i = this._geom.getAttributes();
        for (const t in i) this.setAttribute(t, i[t].data, i[t].itemSize);
        e && (this._geom = null);
      }),
      (st.prototype._preBind = function (e) {
        for (let t = 0; t < this._attributes.length; t++) this._attributes[t].cb && this._attributes[t].cb(this._attributes[t], this._geom, e);
      }),
      (st.prototype._checkAttrLengths = function () {
        for (let t = 0; t < this._attributes.length; t++) this._attributes[t].arrayLength / this._attributes[t].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize && this._geom && this._geom.name;
      }),
      (st.prototype._bind = function (i) {
        if (i.isValid()) {
          let e = [];
          if ((this._attribLocs[i.id] ? (e = this._attribLocs[i.id]) : (this._attribLocs[i.id] = e), (this._lastShader = i).lastCompile > this._lastAttrUpdate || e.length != this._attributes.length)) {
            this._lastAttrUpdate = i.lastCompile;
            for (let t = 0; t < this._attributes.length; t++) e[t] = -1;
          }
          for (let t = 0; t < this._attributes.length; t++) {
            const n = this._attributes[t];
            if ((-1 == e[t] && n._attrLocationLastShaderTime != i.lastCompile && ((n._attrLocationLastShaderTime = i.lastCompile), (e[t] = this._cgl.glGetAttribLocation(i.getProgram(), n.name)), this._cgl.profileData.profileAttrLoc++), -1 != e[t]))
              if ((this._cgl.gl.enableVertexAttribArray(e[t]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.buffer), n.instanced))
                if (n.itemSize <= 4) (n.itemSize && 0 != n.itemSize) || this._log.warn("instanced attrib itemsize error", this._geom.name, n), this._cgl.gl.vertexAttribPointer(e[t], n.itemSize, n.type, !1, 4 * n.itemSize, 0), this._cgl.gl.vertexAttribDivisor(e[t], 1);
                else if (16 == n.itemSize) {
                  const i = 64;
                  this._cgl.gl.vertexAttribPointer(e[t], 4, n.type, !1, 64, 0),
                    this._cgl.gl.enableVertexAttribArray(e[t] + 1),
                    this._cgl.gl.vertexAttribPointer(e[t] + 1, 4, n.type, !1, 64, 16),
                    this._cgl.gl.enableVertexAttribArray(e[t] + 2),
                    this._cgl.gl.vertexAttribPointer(e[t] + 2, 4, n.type, !1, 64, 32),
                    this._cgl.gl.enableVertexAttribArray(e[t] + 3),
                    this._cgl.gl.vertexAttribPointer(e[t] + 3, 4, n.type, !1, 64, 48),
                    this._cgl.gl.vertexAttribDivisor(e[t], 1),
                    this._cgl.gl.vertexAttribDivisor(e[t] + 1, 1),
                    this._cgl.gl.vertexAttribDivisor(e[t] + 2, 1),
                    this._cgl.gl.vertexAttribDivisor(e[t] + 3, 1);
                } else this._log.warn("unknown instance attrib size", n.name);
              else {
                if (((n.itemSize && 0 != n.itemSize) || this._log.warn("attrib itemsize error", this._name, n), this._cgl.gl.vertexAttribPointer(e[t], n.itemSize, n.type, !1, 4 * n.itemSize, 0), n.pointer))
                  for (let t = 0; t < n.pointer.length; t++) {
                    const r = n.pointer[t];
                    -1 == r.loc && (r.loc = this._cgl.glGetAttribLocation(i.getProgram(), r.name)), this._cgl.profileData.profileAttrLoc++, this._cgl.gl.enableVertexAttribArray(r.loc), this._cgl.gl.vertexAttribPointer(r.loc, n.itemSize, n.type, !1, r.stride, r.offset);
                  }
                this.bindFeedback(n);
              }
          }
          0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
        }
      }),
      (st.prototype.unBind = function () {
        var t = this._lastShader;
        if (((this._lastShader = null), t)) {
          let e = [];
          this._attribLocs[t.id] ? (e = this._attribLocs[t.id]) : (this._attribLocs[t.id] = e), (lt.lastMesh = null);
          for (let t = 0; t < this._attributes.length; t++)
            this._attributes[t].instanced && (this._attributes[t].itemSize <= 4 ? (-1 != e[t] && this._cgl.gl.vertexAttribDivisor(e[t], 0), 0 <= e[t] && this._cgl.gl.disableVertexAttribArray(e[t])) : (this._cgl.gl.vertexAttribDivisor(e[t], 0), this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[t] + 1), this._cgl.gl.disableVertexAttribArray(e[t] + 2), this._cgl.gl.disableVertexAttribArray(e[t] + 3))), -1 != e[t] && this._cgl.gl.disableVertexAttribArray(e[t]);
        }
      }),
      (st.prototype.meshChanged = function () {
        return this._cgl.lastMesh && this._cgl.lastMesh != this;
      }),
      (st.prototype.printDebug = function (t) {
        console.log("--attributes");
        for (let t = 0; t < this._attributes.length; t++) console.log("attribute " + t + " " + this._attributes[t].name);
      }),
      (st.prototype.setNumVertices = function (t) {
        this._bufVertexAttrib.numItems = t;
      }),
      (st.prototype.getNumVertices = function () {
        return this._bufVertexAttrib.numItems;
      }),
      (st.prototype.render = function (s) {
        if (s && s.isValid()) {
          if ((this._checkAttrLengths(), this._geom && (!this._preWireframeGeom || s.wireframe || this._geom.isIndexed() || (this.setGeom(this._preWireframeGeom), (this._preWireframeGeom = null)), s.wireframe))) {
            let t = !1;
            this._geom.isIndexed() && (this._preWireframeGeom || ((this._preWireframeGeom = this._geom), (this._geom = this._geom.copy())), this._geom.unIndex(), (t = !0)), this._geom.getAttribute("attrBarycentric") || (this._preWireframeGeom || ((this._preWireframeGeom = this._geom), (this._geom = this._geom.copy())), (t = !0), this._geom.calcBarycentric()), t && this.setGeom(this._geom);
          }
          let t = !1;
          lt.lastMesh != this && (lt.lastMesh && lt.lastMesh.unBind(), (t = !0)), t && this._preBind(s), s.bind(), s.bindTextures && s.bindTextures(), this._bind(s), this.addVertexNumbers && this._setVertexNumbers();
          let e = (lt.lastMesh = this)._cgl.gl.TRIANGLES;
          void 0 !== this._glPrimitive && (e = this._glPrimitive), null !== s.glPrimitive && (e = s.glPrimitive);
          let i = 1,
            n = this._cgl.profileData.doProfileGlQuery,
            r = !1;
          if (n) {
            let t = this._name + " " + s.getName() + " #" + s.id;
            this._numInstances && (t += " instanced " + this._numInstances + "x");
            let e = this._cgl.profileData.glQueryData[t];
            if ((e || ((e = { id: t, num: 0 }), (this._cgl.profileData.glQueryData[t] = e)), this._queryExt || !1 === this._queryExt || (this._queryExt = this._cgl.gl.getExtension("EXT_disjoint_timer_query_webgl2") || !1), this._queryExt)) {
              if (e._drawQuery && this._cgl.gl.getQueryParameter(e._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE)) {
                const s = this._cgl.gl.getQueryParameter(e._drawQuery, this._cgl.gl.QUERY_RESULT) / 1e6;
                (e._times += s), e._numcount++, (e.when = performance.now()), (e._drawQuery = null), (e.queryStarted = !1);
              }
              e.queryStarted || ((e._drawQuery = this._cgl.gl.createQuery()), this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, e._drawQuery), (r = e.queryStarted = !0));
            }
          }
          if (
            (this.hasFeedbacks()
              ? this.drawFeedbacks(s, e)
              : 0 === this._bufVerticesIndizes.numItems
              ? (e == this._cgl.gl.TRIANGLES && (i = 3), 0 === this._numInstances ? this._cgl.gl.drawArrays(e, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem) : this._cgl.gl.drawArraysInstanced(e, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances))
              : 0 === this._numInstances
              ? this._cgl.gl.drawElements(e, this._bufVerticesIndizes.numItems, this._indexType, 0)
              : this._cgl.gl.drawElementsInstanced(e, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances),
            this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
          ) {
            this._log.error("mesh draw gl error"), this._log.error("mesh", this), this._log.error("shader", s);
            for (let e = 0; e < this._cgl.gl.getProgramParameter(s.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); e++) {
              const t = this._cgl.gl.getActiveAttrib(s.getProgram(), e).name;
              this._log.error("attrib ", t);
            }
          }
          (this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / i) * (this._numInstances || 1)), this._cgl.profileData.profileMeshDraw++, n && r && this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT), this.unBind();
        }
      }),
      (st.prototype.setNumInstances = function (e) {
        if (((e = Math.max(0, e)), this._numInstances != e)) {
          this._numInstances = e;
          const i = new Float32Array(e);
          for (let t = 0; t < e; t++) i[t] = t;
          this.setAttribute("instanceIndex", i, 1, { instanced: !0 });
        }
      }),
      (st.prototype._disposeAttributes = function () {
        if (this._attributes) {
          for (let t = 0; t < this._attributes.length; t++) this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), (this._attributes[t].buffer = null));
          this._attributes.length = 0;
        }
      }),
      (st.prototype.dispose = function () {
        this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer), this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes), (this._bufVerticesIndizes = null), this._disposeAttributes();
      }),
      ((i = st).prototype.hasFeedbacks = function () {
        return 0 < this._feedBacks.length;
      }),
      (i.prototype.removeFeedbacks = function (t) {
        this._feedbacks && ((this._feedbacks.length = 0), (this._feedBacksChanged = !0));
      }),
      (i.prototype.setAttributeFeedback = function () {}),
      (i.prototype.setFeedback = function (t, e, i) {
        let n = { nameOut: e },
          r = !1;
        this.unBindFeedbacks();
        for (let t = 0; t < this._feedBacks.length; t++) this._feedBacks[t].nameOut == e && ((n = this._feedBacks[t]), (r = !0));
        return r || (this._feedBacksChanged = !0), (n.initialArr = i), (n.attrib = t), n.outBuffer && this._cgl.gl.deleteBuffer(n.outBuffer), (n.outBuffer = this._cgl.gl.createBuffer()), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.outBuffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, n.initialArr, this._cgl.gl.STATIC_DRAW), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.attrib.buffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, n.initialArr, this._cgl.gl.STATIC_DRAW), r || this._feedBacks.push(n), n;
      }),
      (i.prototype.bindFeedback = function (e) {
        if (this._feedBacks && 0 !== this._feedBacks.length) {
          -1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()), this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
          for (let t = 0; t < this._feedBacks.length; t++) {
            var i = this._feedBacks[t];
            i.attrib == e && this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, i.outBuffer);
          }
        }
      }),
      (i.prototype.drawFeedbacks = function (t, e) {
        let i = 0;
        if (this._feedBacksChanged) {
          const e = [];
          for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) e.push(this._feedBacks[i].nameOut);
          return t.setFeedbackNames(e), console.log("feedbacknames", e), t.compile(), (this._feedBacksChanged = !1), this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null), void console.log("changed finished");
        }
        this._cgl.gl.beginTransformFeedback(this.glPrimitive), this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems), this._cgl.gl.endTransformFeedback(), this.unBindFeedbacks(), this.feedBacksSwapBuffers();
      }),
      (i.prototype.unBindFeedbacks = function () {
        for (let t = 0; t < this._feedBacks.length; t++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, null);
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
      }),
      (i.prototype.feedBacksSwapBuffers = function () {
        for (let t = 0; t < this._feedBacks.length; t++) {
          var e = this._feedBacks[t].attrib.buffer;
          (this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer), (this._feedBacks[t].outBuffer = e);
        }
      });
    function ht(t, e) {
      (this._cgl = t), (this._log = new d("cgl_TextureEffect")), t.TextureEffectMesh || this.createMesh(), (this._textureSource = null), (this._options = e), (this.imgCompVer = 0), (this.aspectRatio = 1), (this._textureTarget = null), (this._frameBuf = this._cgl.gl.createFramebuffer()), (this._frameBuf2 = this._cgl.gl.createFramebuffer()), (this._renderbuffer = this._cgl.gl.createRenderbuffer()), (this._renderbuffer2 = this._cgl.gl.createRenderbuffer()), (this.switched = !1), (this.depth = !1);
    }
    const ut = {
      getSimpleRect: function (t, e) {
        const i = new H(e);
        return (i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]), (i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0]), (i.verticesIndices = [0, 1, 2, 2, 1, 3]), (i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), new st(t, i);
      },
    };
    (ht.prototype.getWidth = function () {
      return this._textureSource.width;
    }),
      (ht.prototype.getHeight = function () {
        return this._textureSource.height;
      }),
      (ht.prototype.setSourceTexture = function (t) {
        t.textureType == F.TYPE_FLOAT && this._cgl.gl.getExtension("EXT_color_buffer_float"),
          null === t ? ((this._textureSource = new F(this._cgl)), this._textureSource.setSize(16, 16)) : (this._textureSource = t),
          this._textureSource.compareSettings(this._textureTarget) ||
            (this._textureTarget && this._textureTarget.delete(),
            (this._textureTarget = this._textureSource.clone()),
            this._cgl.profileData.profileEffectBuffercreate++,
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf),
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer),
            this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height),
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0),
            this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer),
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2),
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2),
            this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height),
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0),
            this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2),
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)),
          (this.aspectRatio = this._textureSource.width / this._textureSource.height);
      }),
      (ht.prototype.continueEffect = function () {
        this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix);
      }),
      (ht.prototype.startEffect = function (t) {
        this._textureTarget ? ((this.switched = !1), this.continueEffect(), t && (this._bgTex = t), (this._countEffects = 0)) : this._log.warn("effect has no target");
      }),
      (ht.prototype.endEffect = function () {
        this._cgl.popDepthTest(), this._cgl.popModelMatrix(), this._cgl.popPMatrix(), this._cgl.popModelMatrix(), this._cgl.popViewMatrix(), this._cgl.popPMatrix(), this._cgl.resetViewPort();
      }),
      (ht.prototype.bind = function () {
        null !== this._textureSource ? (this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2)) : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf))) : this._log.warn("no base texture set!");
      }),
      (ht.prototype.finish = function () {
        null !== this._textureSource
          ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()),
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()),
            this._cgl.profileData.profileTextureEffect++,
            this._textureTarget.filter == F.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap()) : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)),
            (this.switched = !this.switched),
            this._countEffects++)
          : this._log.warn("no base texture set!");
      }),
      (ht.prototype.getCurrentTargetTexture = function () {
        return this.switched ? this._textureSource : this._textureTarget;
      }),
      (ht.prototype.getCurrentSourceTexture = function () {
        return 0 == this._countEffects && this._bgTex ? this._bgTex : this.switched ? this._textureTarget : this._textureSource;
      }),
      (ht.prototype.delete = function () {
        this._textureTarget && this._textureTarget.delete(), this._textureSource && this._textureSource.delete(), this._cgl.gl.deleteRenderbuffer(this._renderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuf);
      }),
      (ht.prototype.createMesh = function () {
        this._cgl.TextureEffectMesh = ut.getSimpleRect(this._cgl, "texEffectRect");
      }),
      (ht.checkOpNotInTextureEffect = function (t) {
        return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.setUiError("textureeffect", null), !0) : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0), !1) : !t.patch.cgl.currentTextureEffect);
      }),
      (ht.checkOpInEffect = function (t, e) {
        if (((e = e || 0), t.patch.cgl.currentTextureEffect)) {
          if (t.uiAttribs.uierrors && t.patch.cgl.currentTextureEffect.imgCompVer >= e) return t.setUiError("texeffect", null), !0;
          e && t.patch.cgl.currentTextureEffect.imgCompVer < e && t.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + e + ' <span class="button-small" onclick="gui.patchView.downGradeOp(\'' + t.id + "','" + t.name + "')\">Downgrade</span> to previous version", 1);
        }
        return !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || (t.uiAttribs.uierrors && 0 != t.uiAttribs.uierrors.length) ? !!t.patch.cgl.currentTextureEffect : (t.setUiError("texeffect", 'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>. ', 1), !1));
      }),
      (ht.getBlendCode = function (t) {
        let e =
          "".endl() +
          "vec3 _blend(vec3 base,vec3 blend)".endl() +
          "{".endl() +
          "   vec3 colNew=blend;".endl() +
          "   #ifdef BM_MULTIPLY".endl() +
          "       colNew=base*blend;".endl() +
          "   #endif".endl() +
          "   #ifdef BM_MULTIPLY_INV".endl() +
          "       colNew=base* vec3(1.0)-blend;".endl() +
          "   #endif".endl() +
          "   #ifdef BM_AVERAGE".endl() +
          "       colNew=((base + blend) / 2.0);".endl() +
          "   #endif".endl() +
          "   #ifdef BM_ADD".endl() +
          "       colNew=min(base + blend, vec3(1.0));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_SUBTRACT_ONE".endl() +
          "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_SUBTRACT".endl() +
          "       colNew=base - blend;".endl() +
          "   #endif".endl() +
          "   #ifdef BM_DIFFERENCE".endl() +
          "       colNew=abs(base - blend);".endl() +
          "   #endif".endl() +
          "   #ifdef BM_NEGATION".endl() +
          "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_EXCLUSION".endl() +
          "       colNew=(base + blend - 2.0 * base * blend);".endl() +
          "   #endif".endl() +
          "   #ifdef BM_LIGHTEN".endl() +
          "       colNew=max(blend, base);".endl() +
          "   #endif".endl() +
          "   #ifdef BM_DARKEN".endl() +
          "       colNew=min(blend, base);".endl() +
          "   #endif".endl() +
          "   #ifdef BM_OVERLAY".endl() +
          "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() +
          "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_SCREEN".endl() +
          "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl() +
          "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_SOFTLIGHT".endl() +
          "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl() +
          "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_HARDLIGHT".endl() +
          "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() +
          "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_COLORDODGE".endl() +
          "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl() +
          "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   #ifdef BM_COLORBURN".endl() +
          "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl() +
          "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl() +
          "   #endif".endl() +
          "   return colNew;".endl() +
          "}".endl();
        return (
          t || (e += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() + "{".endl() + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() + "return col;".endl() + "}".endl()),
          3 <= t && (e += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() + "{".endl() + "vec3 colNew=_blend(base.rgb,col.rgb);".endl() + "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() + "#ifdef BM_ALPHAMASKED".endl() + "newA=base.a;".endl() + "#endif".endl() + "return vec4(".endl() + "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() + "newA);".endl() + "}".endl()),
          e
        );
      }),
      (ht.onChangeBlendSelect = function (t, e, i) {
        t.toggleDefine("BM_NORMAL", "normal" == e),
          t.toggleDefine("BM_MULTIPLY", "multiply" == e),
          t.toggleDefine("BM_MULTIPLY_INV", "multiply invert" == e),
          t.toggleDefine("BM_AVERAGE", "average" == e),
          t.toggleDefine("BM_ADD", "add" == e),
          t.toggleDefine("BM_SUBTRACT_ONE", "subtract one" == e),
          t.toggleDefine("BM_SUBTRACT", "subtract" == e),
          t.toggleDefine("BM_DIFFERENCE", "difference" == e),
          t.toggleDefine("BM_NEGATION", "negation" == e),
          t.toggleDefine("BM_EXCLUSION", "exclusion" == e),
          t.toggleDefine("BM_LIGHTEN", "lighten" == e),
          t.toggleDefine("BM_DARKEN", "darken" == e),
          t.toggleDefine("BM_OVERLAY", "overlay" == e),
          t.toggleDefine("BM_SCREEN", "screen" == e),
          t.toggleDefine("BM_SOFTLIGHT", "softlight" == e),
          t.toggleDefine("BM_HARDLIGHT", "hardlight" == e),
          t.toggleDefine("BM_COLORDODGE", "color dodge" == e),
          t.toggleDefine("BM_COLORBURN", "color burn" == e),
          t.toggleDefine("BM_ALPHAMASKED", i);
      }),
      (ht.AddBlendSelect = function (t, e, i) {
        return t.inValueSelect(e || "Blend Mode", ["normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one"], i || "normal");
      }),
      (ht.AddBlendAlphaMask = function (t, e, i) {
        return t.inSwitch(e || "Alpha Mask", ["Off", "On"], i || "Off");
      }),
      (ht.setupBlending = function (i, n, r, t, s) {
        var e = () => {
          let t = !1;
          s && (t = "On" == s.get()), ht.onChangeBlendSelect(n, r.get(), t);
          let e = r.get();
          "normal" == e ? (e = null) : "multiply" == e ? (e = "mul") : "multiply invert" == e ? (e = "mulinv") : "lighten" == e ? (e = "light") : "darken" == e ? (e = "darken") : "average" == e ? (e = "avg") : "subtract one" == e ? (e = "sub one") : "subtract" == e ? (e = "sub") : "difference" == e ? (e = "diff") : "negation" == e || "negation" == e || "negation" == e ? (e = "neg") : "exclusion" == e ? (e = "exc") : "overlay" == e ? (e = "ovl") : "color dodge" == e ? (e = "dodge") : "color burn" == e ? (e = "burn") : "softlight" == e ? (e = "soft") : "hardlight" == e && (e = "hard"),
            i.setUiAttrib({ extendTitle: e });
        };
        i.setPortGroup("Blending", [r, t, s]);
        let o = !1;
        (r.onChange = e), s && ((s.onChange = e), (o = "On" == s.get())), ht.onChangeBlendSelect(n, r.get(), o);
      });
    function ct() {
      return window.performance.now();
    }
    function dt() {
      CABLES.EventTarget.apply(this), (this._timeStart = ct()), (this._timeOffset = 0), (this._currentTime = 0), (this._lastTime = 0), (this._paused = !0), (this._delay = 0), (this._eventsPaused = !1), (this.overwriteTime = -1), (this.cbPlayPause = []), (this.cbTimeChange = []);
    }
    const pt = {
        "CGL.BLENDMODES": function () {
          (this.name = "blendmodes"), (this.srcHeadFrag = ht.getBlendCode());
        },
        "CGL.BLENDMODES3": function () {
          (this.name = "blendmodes3"), (this.srcHeadFrag = ht.getBlendCode(3));
        },
        "CGL.LUMINANCE": function () {
          (this.name = "luminance"), (this.srcHeadFrag = "".endl() + "float cgl_luminance(vec3 c)".endl() + "{".endl() + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl() + "}".endl());
        },
        "CGL.RANDOM_OLD": function () {
          (this.name = "randomNumber"), (this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}");
        },
        "CGL.RANDOM_LOW": function () {
          (this.name = "randomNumber"), (this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}");
        },
        "CGL.RANDOM_TEX": function () {
          (this.name = "randomNumbertex"),
            (this.srcHeadFrag = "".endl() + "UNI sampler2D CGLRNDTEX;".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).r;".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl() + "}"),
            (this.initUniforms = function (t) {
              return [new rt(t, "t", "CGLRNDTEX", 7)];
            }),
            (this.onBind = function (t, e) {
              F.getRandomTexture(t), t.setTexture(7, F.getRandomTexture(t).tex);
            });
        },
      },
      gt = ct;
    (dt.prototype._getTime = function () {
      return (this._lastTime = (ct() - this._timeStart) / 1e3), this._lastTime + this._timeOffset;
    }),
      (dt.prototype._eventPlayPause = function () {
        if ((this.emitEvent("playPause"), !this._eventsPaused)) for (const t in this.cbPlayPause) this.cbPlayPause[t]();
      }),
      (dt.prototype._eventTimeChange = function () {
        if (!this._eventsPaused) for (const t in this.cbTimeChange) this.cbTimeChange[t]();
      }),
      (dt.prototype.setDelay = function (t) {
        (this._delay = t), this._eventTimeChange();
      }),
      (dt.prototype.isPlaying = function () {
        return !this._paused;
      }),
      (dt.prototype.update = function () {
        if (!this._paused) return (this._currentTime = this._getTime()), this._currentTime;
      }),
      (dt.prototype.getMillis = function () {
        return 1e3 * this.get();
      }),
      (dt.prototype.get = dt.prototype.getTime =
        function () {
          return 0 <= this.overwriteTime ? this.overwriteTime - this._delay : this._currentTime - this._delay;
        }),
      (dt.prototype.togglePlay = function () {
        this._paused ? this.play() : this.pause();
      }),
      (dt.prototype.setTime = function (t) {
        t < 0 && (t = 0), (this._timeStart = ct()), (this._timeOffset = t), (this._currentTime = t), this._eventTimeChange();
      }),
      (dt.prototype.setOffset = function (t) {
        this._currentTime + t < 0 ? ((this._timeStart = ct()), (this._timeOffset = 0), (this._currentTime = 0)) : ((this._timeOffset += t), (this._currentTime = this._lastTime + this._timeOffset)), this._eventTimeChange();
      }),
      (dt.prototype.play = function () {
        (this._timeStart = ct()), (this._paused = !1), this._eventPlayPause();
      }),
      (dt.prototype.pause = function () {
        (this._timeOffset = this._currentTime), (this._paused = !0), this._eventPlayPause();
      }),
      (dt.prototype.pauseEvents = function (t) {
        this._eventsPaused = t;
      }),
      (dt.prototype.onPlayPause = function (t) {
        t && "function" == typeof t && this.cbPlayPause.push(t);
      }),
      (dt.prototype.onTimeChange = function (t) {
        t && "function" == typeof t && this.cbTimeChange.push(t);
      });
    function ft(e) {
      let i;
      if (e.wheelDelta) (i = e.wheelDelta % 120 == -0 ? e.wheelDelta / 120 : e.wheelDelta / 30), (i *= -1.5), bt && (i *= 2);
      else {
        let t = e.deltaY;
        e.shiftKey && (t = e.deltaX);
        e = t || e.detail;
        (i = -(e % 3 ? 10 * e : e / 3)), (i *= -3);
      }
      return 20 < i && (i = 20), i < -20 && (i = -20), i;
    }
    function _t(t, e) {
      if (!t) throw new Error("shader constructed without cgl " + e);
      (this._log = new d("cgl_shader")),
        (this._cgl = t),
        e || this._log.stack("no shader name given"),
        (this._name = e || "unknown"),
        (this.glslVersion = 0),
        1 < t.glVersion && (this.glslVersion = 300),
        (this.id = x()),
        (this._isValid = !0),
        (this._program = null),
        (this._uniforms = []),
        (this._drawBuffers = [!0]),
        (this._defines = []),
        (this._needsRecompile = !0),
        (this._compileReason = "initial"),
        (this._projMatrixUniform = null),
        (this._mvMatrixUniform = null),
        (this._mMatrixUniform = null),
        (this._vMatrixUniform = null),
        (this._camPosUniform = null),
        (this._normalMatrixUniform = null),
        (this._inverseViewMatrixUniform = null),
        (this._attrVertexPos = -1),
        (this.precision = t.patch.config.glslPrecision || "highp"),
        (this._pMatrixState = -1),
        (this._vMatrixState = -1),
        (this._modGroupCount = 0),
        (this._feedBackNames = []),
        (this._attributes = []),
        (this.glPrimitive = null),
        (this.offScreenPass = !1),
        (this._extensions = []),
        (this.srcVert = this.getDefaultVertexShader()),
        (this.srcFrag = this.getDefaultFragmentShader()),
        (this.lastCompile = 0),
        (this._moduleNames = []),
        (this._modules = []),
        (this._moduleNumId = 0),
        (this._libs = []),
        (this._structNames = []),
        (this._structUniformNames = []),
        (this._textureStackUni = []),
        (this._textureStackTex = []),
        (this._textureStackType = []),
        (this._textureStackTexCgl = []),
        (this._tempNormalMatrix = mat4.create()),
        (this._tempCamPosMatrix = mat4.create()),
        (this._tempInverseViewMatrix = mat4.create()),
        this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
    }
    const mt = Math.PI / 180,
      bt = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
      Et = ft,
      vt = ft,
      Tt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      xt = /[&<>"']/g,
      At = RegExp(xt.source);
    (_t.prototype.isValid = function () {
      return this._isValid;
    }),
      (_t.prototype.getCgl = function () {
        return this._cgl;
      }),
      (_t.prototype.getName = function () {
        return this._name;
      }),
      (_t.prototype.enableExtension = function (t) {
        this.setWhyCompile("enable extension " + t), (this._needsRecompile = !0), this._extensions.push(t);
      }),
      (_t.prototype.getAttrVertexPos = function () {
        return this._attrVertexPos;
      }),
      (_t.prototype.hasTextureUniforms = function () {
        for (let t = 0; t < this._uniforms.length; t++) if ("t" == this._uniforms[t].getType()) return !0;
        return !1;
      }),
      (_t.prototype.setWhyCompile = function (t) {
        this._compileReason = t;
      }),
      (_t.prototype.copyUniformValues = function (e) {
        for (let t = 0; t < e._uniforms.length; t++) this._uniforms[t] ? (-1 != e._uniforms[t].getName().indexOf("pathPoints") && console.log("copyUniformValues", e._uniforms[t].getName(), e._uniforms[t].getValue()), this.getUniform(e._uniforms[t].getName()).set(e._uniforms[t].getValue())) : this._log.log("unknown uniform?!");
        this.popTextures();
        for (let t = 0; t < e._textureStackUni.length; t++) (this._textureStackUni[t] = e._textureStackUni[t]), (this._textureStackTex[t] = e._textureStackTex[t]), (this._textureStackType[t] = e._textureStackType[t]), (this._textureStackTexCgl[t] = e._textureStackTexCgl[t]);
      }),
      (_t.prototype.copy = function () {
        const e = new _t(this._cgl, this._name + " copy");
        e.setSource(this.srcVert, this.srcFrag), (e._modules = JSON.parse(JSON.stringify(this._modules))), (e._defines = JSON.parse(JSON.stringify(this._defines))), (e._modGroupCount = this._modGroupCount), (e._moduleNames = this._moduleNames), (e.glPrimitive = this.glPrimitive), (e.offScreenPass = this.offScreenPass), (e._extensions = this._extensions), (e.wireframe = this.wireframe);
        for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].copy(e).resetLoc();
        return this.setWhyCompile("copy"), (e._needsRecompile = !0), e;
      }),
      (_t.prototype.setSource = function (t, e) {
        (this.srcVert = t), (this.srcFrag = e), this.setWhyCompile("Source changed"), (this._needsRecompile = !0);
      }),
      (_t.prototype._addLibs = function (t) {
        for (const e in pt)
          if (-1 < t.indexOf(e)) {
            const i = new pt[e]();
            (t = t.replace("{{" + e + "}}", i.srcHeadFrag)), this._libs.push(i), i.initUniforms && i.initUniforms(this);
          }
        return t;
      }),
      (_t.prototype.createStructUniforms = function () {
        let n = "",
          r = "";
        (this._structNames = []), (this._injectedStringsFrag = {}), (this._injectedStringsVert = {}), (this._structUniformNamesIndicesFrag = []), (this._structUniformNamesIndicesVert = []);
        for (let i = 0; i < this._uniforms.length; i++)
          if (this._uniforms[i].isStructMember()) {
            var s,
              o,
              a = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";
            -1 === this._structNames.indexOf(this._uniforms[i]._structName) && ((o = "struct " + this._uniforms[i]._structName + " {".endl() + a + "};".endl().endl()), ("both" !== this._uniforms[i].getShaderType() && "frag" !== this._uniforms[i].getShaderType()) || (n = n.concat(o)), ("both" !== this._uniforms[i].getShaderType() && "vert" !== this._uniforms[i].getShaderType()) || (r = r.concat(o)), this._structNames.push(this._uniforms[i]._structName), (this._injectedStringsFrag[this._uniforms[i]._structName] = []), (this._injectedStringsVert[this._uniforms[i]._structName] = []));
            let t = "";
            this._uniforms[i].comment && (t = " // " + this._uniforms[i].comment);
            let e = "";
            if ((null == this._uniforms[i].getGlslTypeString() && (e += "//"), (e += "  " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i]._propertyName + ";" + t), "both" === this._uniforms[i].getShaderType()))
              -1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(e) && -1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(e) && ((s = n.lastIndexOf(a)), (o = r.lastIndexOf(a)), (n = n.slice(0, s) + e + n.slice(s - 1)), (r = r.slice(0, o) + e + r.slice(o - 1)), this._injectedStringsFrag[this._uniforms[i]._structName].push(e), this._injectedStringsVert[this._uniforms[i]._structName].push(e)),
                -1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i),
                -1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i);
            else if ("frag" === this._uniforms[i].getShaderType()) {
              if (-1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(e)) {
                const r = n.lastIndexOf(a);
                (n = n.slice(0, r) + e + n.slice(r - 1)), this._injectedStringsFrag[this._uniforms[i]._structName].push(e);
              }
              -1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i);
            } else if ("vert" === this._uniforms[i].getShaderType()) {
              if (-1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(e)) {
                const n = r.lastIndexOf(a);
                (r = r.slice(0, n) + e + r.slice(n - 1)), this._injectedStringsVert[this._uniforms[i]._structName].push(e);
              }
              -1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i);
            }
          }
        (this._uniDeclarationsFrag = []), (this._uniDeclarationsVert = []);
        for (let t = 0; t < this._structUniformNamesIndicesFrag.length; t += 1) {
          var e = this._structUniformNamesIndicesFrag[t],
            i = "UNI " + this._uniforms[e]._structName + " " + this._uniforms[e]._structUniformName + ";".endl();
          if (-1 === this._uniDeclarationsFrag.indexOf(i)) {
            const r = "{{INJECTION_POINT_STRUCT_" + this._uniforms[e]._structName + "}}";
            (n = n.replace(r, "")), (n += i), this._uniDeclarationsFrag.push(i);
          }
        }
        for (let t = 0; t < this._structUniformNamesIndicesVert.length; t += 1) {
          var l = this._structUniformNamesIndicesVert[t],
            h = "UNI " + this._uniforms[l]._structName + " " + this._uniforms[l]._structUniformName + ";".endl();
          if (-1 === this._uniDeclarationsVert.indexOf(h)) {
            const n = "{{INJECTION_POINT_STRUCT_" + this._uniforms[l]._structName + "}}";
            (r = r.replace(n, "")), (r += h), this._uniDeclarationsVert.push(h);
          }
        }
        return [r, n];
      }),
      (_t.prototype.compile = function () {
        const e = performance.now();
        this._cgl.profileData.profileShaderCompiles++, (this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]");
        let i = "";
        if (this._extensions) for (let t = 0; t < this._extensions.length; t++) i += "#extension " + this._extensions[t] + " : enable".endl();
        let n = "";
        this._defines.length && (n = "\n// cgl generated".endl());
        for (let t = 0; t < this._defines.length; t++) n += "#define " + this._defines[t][0] + " " + this._defines[t][1] + "".endl();
        const r = this.createStructUniforms();
        if ((this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]"), (this._compileReason = ""), this._uniforms)) {
          const e = this._uniforms.map((t) => t._name),
            i = [];
          for (let t = 0; t < this._uniforms.length; t++) {
            const r = this._uniforms[t];
            -1 < e.indexOf(r._name, t + 1) && i.push(t);
          }
          for (let t = this._uniforms.length - 1; 0 <= t; --t) -1 < i.indexOf(t) ? this._uniforms.splice(t, 1) : this._uniforms[t].resetLoc();
        }
        this._cgl.printError("uniform resets"), this.hasTextureUniforms() && (n += "#define HAS_TEXTURES".endl());
        let s = "",
          o = "";
        if ((this.srcFrag || (this._log.error("[cgl shader] has no fragment source!"), (this.srcVert = this.getDefaultVertexShader()), (this.srcFrag = this.getDefaultFragmentShader())), 300 == this.glslVersion)) {
          let i = "";
          if ((-1 < this.srcFrag.indexOf("outColor0") && (this._drawBuffers[0] = !0), -1 < this.srcFrag.indexOf("outColor1") && (this._drawBuffers[1] = !0), -1 < this.srcFrag.indexOf("outColor2") && (this._drawBuffers[2] = !0), -1 < this.srcFrag.indexOf("outColor3") && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length)) (i = "out vec4 outColor;".endl()), (i += "#define gl_FragColor outColor".endl());
          else {
            let e = 0;
            (i += "#define MULTI_COLORTARGETS".endl()), (i += "vec4 outColor;".endl());
            for (let t = 0; t < this._drawBuffers.length; t++) 0 == e && (i += "#define gl_FragColor outColor" + t + "".endl()), (i += "layout(location = " + t + ") out vec4 outColor" + t + ";".endl()), e++;
          }
          (s = "#version 300 es".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "precision " + this.precision + " sampler2D;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define UNI uniform".endl() + "#define IN in".endl() + "#define OUT out".endl()),
            (o = "#version 300 es".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "precision " + this.precision + " sampler2D;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define IN in".endl() + "#define UNI uniform".endl() + i.endl());
        } else (o = "".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define outColor gl_FragColor".endl() + "#define IN varying".endl() + "#define UNI uniform".endl()), (s = "".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define OUT varying".endl() + "#define IN attribute".endl() + "#define UNI uniform".endl());
        let a = "\n// cgl generated".endl(),
          l = "\n// cgl generated".endl();
        (o += "\n// active mods: --------------- "), (s += "\n// active mods: --------------- ");
        let h = !1,
          u = !1;
        for (let e = 0; e < this._moduleNames.length; e++) for (let t = 0; t < this._modules.length; t++) this._modules[t].name == this._moduleNames[e] && ((this._modules[t].srcBodyFrag || this._modules[t].srcHeadFrag) && ((h = !0), (o += "\n// " + e + "." + t + ". " + this._modules[t].title + " (" + this._modules[t].name + ")")), (this._modules[t].srcBodyVert || this._modules[t].srcHeadVert) && ((s += "\n// " + e + "." + t + ". " + this._modules[t].title + " (" + this._modules[t].name + ")"), (u = !0)));
        u || (o += "\n// no mods used..."), h || (o += "\n// no mods used..."), (o += "\n"), (s += "\n");
        for (let i = 0; i < this._uniforms.length; i++)
          if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember()) {
            let t = "";
            this._uniforms[i].getGlslTypeString() || (t += "// "), (t += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName());
            let e = "";
            this._uniforms[i].comment && (e = " // " + this._uniforms[i].comment),
              ("vert" != this._uniforms[i].shaderType && "both" != this._uniforms[i].shaderType) || (-1 == this.srcVert.indexOf(t) && -1 == this.srcVert.indexOf("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()) && (a += t + ";" + e.endl())),
              ("frag" != this._uniforms[i].shaderType && "both" != this._uniforms[i].shaderType) || (-1 == this.srcFrag.indexOf(t) && -1 == this.srcFrag.indexOf("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()) && (l += t + ";" + e.endl()));
          }
        let c = 0,
          d = 0;
        for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].shaderType && !this._uniforms[t].isStructMember() && (("vert" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType) || d++, ("frag" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType) || c++);
        c >= this._cgl.maxUniformsFrag && this._log.warn("[cgl_shader] num uniforms frag: " + c + " / " + this._cgl.maxUniformsFrag),
          d >= this._cgl.maxUniformsVert && this._log.warn("[cgl_shader] num uniforms vert: " + d + " / " + this._cgl.maxUniformsVert),
          -1 == o.indexOf("precision") && (o = "precision " + this.precision + " float;".endl() + o),
          -1 == s.indexOf("precision") && (s = "precision " + this.precision + " float;".endl() + s),
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ((o += "#define MOBILE".endl()), (s += "#define MOBILE".endl())),
          (s = i + s + n + r[0] + a + "\n// -- \n" + this.srcVert),
          (o = i + o + n + r[1] + l + "\n// -- \n" + this.srcFrag);
        let p = "",
          g = "";
        this._modules.sort(function (t, e) {
          return t.group - e.group;
        }),
          this._modules.sort(function (t, e) {
            return t.priority || 0 - e.priority || 0;
          });
        let f = !1;
        for (let n = 0; n < this._moduleNames.length; n++) {
          let e = "",
            i = "";
          for (let t = 0; t < this._modules.length; t++)
            if (this._modules[t].name == this._moduleNames[n]) {
              if (((p += "\n//---- MOD: group:" + this._modules[t].group + ": idx:" + t + " - prfx:" + this._modules[t].prefix + " - " + this._modules[t].title + " ------\n"), (g += "\n//---- MOD: group:" + this._modules[t].group + ": idx:" + t + " - prfx:" + this._modules[t].prefix + " - " + this._modules[t].title + " ------\n"), (e += "\n\n//---- MOD: " + this._modules[t].title + " / " + this._modules[t].priority + " ------\n"), (i += "\n\n//---- MOD: " + this._modules[t].title + " / " + this._modules[t].priority + " ------\n"), !f)) {
                f = !0;
                for (let t = 0; t < this._attributes.length; t++)
                  this._attributes[t].name &&
                    this._attributes[t].type &&
                    ((p += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].name.endl() + "  #define ATTRIB_" + this._attributes[t].name.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].name + ";".endl() + "#endif"),
                    this._attributes[t].nameFrag && ((p += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  OUT " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif"), (e += "".endl() + this._attributes[t].nameFrag + "=" + this._attributes[t].name + ";")),
                    (g += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif"));
              }
              (p += this._modules[t].srcHeadVert || ""),
                (g += this._modules[t].srcHeadFrag || ""),
                (e += this._modules[t].srcBodyVert || ""),
                (i += this._modules[t].srcBodyFrag || ""),
                (p += "\n//---- end mod ------\n"),
                (g += "\n//---- end mod ------\n"),
                (e += "\n//---- end mod ------\n"),
                (i += "\n//---- end mod ------\n"),
                (e = e.replace(/{{mod}}/g, this._modules[t].prefix)),
                (i = i.replace(/{{mod}}/g, this._modules[t].prefix)),
                (p = p.replace(/{{mod}}/g, this._modules[t].prefix)),
                (g = g.replace(/{{mod}}/g, this._modules[t].prefix)),
                (e = e.replace(/MOD_/g, this._modules[t].prefix)),
                (i = i.replace(/MOD_/g, this._modules[t].prefix)),
                (p = p.replace(/MOD_/g, this._modules[t].prefix)),
                (g = g.replace(/MOD_/g, this._modules[t].prefix));
            }
          (s = s.replace("{{" + this._moduleNames[n] + "}}", e)), (o = o.replace("{{" + this._moduleNames[n] + "}}", i));
        }
        if (((s = s.replace("{{MODULES_HEAD}}", p)), (o = o.replace("{{MODULES_HEAD}}", g)), (s = this._addLibs(s)), (o = this._addLibs(o)), this._program)) {
          (this._program = this._createProgram(s, o)), (this._projMatrixUniform = null);
          for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].resetLoc();
        } else this._program = this._createProgram(s, o);
        (this.finalShaderFrag = o), (this.finalShaderVert = s), (lt.lastMesh = null), (lt.lastShader = null), (this._needsRecompile = !1), (this.lastCompile = gt()), (this._cgl.profileData.shaderCompileTime += performance.now() - e);
      }),
      (_t.hasChanged = function () {
        return this._needsRecompile;
      }),
      (_t.prototype.bind = function () {
        if (this._isValid && (((lt.lastShader = this)._program && !this._needsRecompile) || this.compile(), this._isValid)) {
          if (!this._projMatrixUniform) {
            (this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, at.SHADER.SHADERVAR_VERTEX_POSITION)),
              (this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_PROJMAT)),
              (this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix")),
              (this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_VIEWMAT)),
              (this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_MODELMAT)),
              (this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_VIEWPOS)),
              (this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_NORMALMAT)),
              (this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_INVVIEWMAT));
            for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate = !0;
          }
          this._cgl.currentProgram != this._program && (this._cgl.profileData.profileShaderBinds++, this._cgl.gl.useProgram(this._program), (this._cgl.currentProgram = this._program));
          for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
          var t;
          this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && ((this._pMatrixState = this._cgl.getProjectionMatrixStateCount()), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), this._cgl.profileData.profileMVPMatrixCount++),
            this._vMatrixUniform
              ? (this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), this._cgl.profileData.profileMVPMatrixCount++, (this._vMatrixState = this._cgl.getViewMatrixStateCount()), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), this._cgl.profileData.profileMVPMatrixCount++)),
                this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix),
                this._cgl.profileData.profileMVPMatrixCount++,
                this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), this._cgl.profileData.profileMVPMatrixCount++))
              : ((t = mat4.create()), mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix), this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, t), this._cgl.profileData.profileMVPMatrixCount++),
            this._normalMatrixUniform && (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), this._cgl.profileData.profileMVPMatrixCount++);
          for (let t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t])(this._cgl, this);
          this._bindTextures();
        }
      }),
      (_t.prototype.toggleDefine = function (e, t) {
        t &&
          "object" == typeof t &&
          t.addEventListener &&
          (t.changeListener && t.removeEventListener(t.changeListener),
          (t.onToggleDefine = (t) => {
            this.toggleDefine(e, t);
          }),
          (t.changeListener = t.on("change", t.onToggleDefine)),
          (t = t.get())),
          t ? this.define(e) : this.removeDefine(e);
      }),
      (_t.prototype.define = function (e, i) {
        "object" == typeof (i = null == i ? "" : i) &&
          (i.removeEventListener("change", i.onDefineChange),
          (i.onDefineChange = (t) => {
            this.define(e, t);
          }),
          i.on("change", i.onDefineChange),
          (i = i.get()));
        for (let t = 0; t < this._defines.length; t++) {
          if (this._defines[t][0] == e && this._defines[t][1] == i) return;
          if (this._defines[t][0] == e) return (this._defines[t][1] = i), this.setWhyCompile("define " + e + " " + i), void (this._needsRecompile = !0);
        }
        this.setWhyCompile("define " + e + " " + i), (this._needsRecompile = !0), this._defines.push([e, i]);
      }),
      (_t.prototype.getDefines = function () {
        return this._defines;
      }),
      (_t.prototype.getDefine = function (e) {
        for (let t = 0; t < this._defines.length; t++) if (this._defines[t][0] == e) return this._defines[t][1];
        return null;
      }),
      (_t.prototype.hasDefine = function (e) {
        for (let t = 0; t < this._defines.length; t++) if (this._defines[t][0] == e) return !0;
      }),
      (_t.prototype.removeDefine = function (e) {
        for (let t = 0; t < this._defines.length; t++) if (this._defines[t][0] == e) return this._defines.splice(t, 1), (this._needsRecompile = !0), void this.setWhyCompile("define removed:" + e);
      }),
      (_t.prototype.removeModule = function (i) {
        for (let t = 0; t < this._modules.length; t++)
          if (i && i.id && (this._modules[t].id == i.id || !this._modules[t])) {
            let e = !0;
            for (; e; ) {
              e = !1;
              for (let t = 0; t < this._uniforms.length; t++) 0 != this._uniforms[t].getName().indexOf(i.prefix) || (this._uniforms.splice(t, 1), (e = !0));
            }
            (this._needsRecompile = !0), this.setWhyCompile("remove module " + i.title), this._modules.splice(t, 1);
            break;
          }
      }),
      (_t.prototype.getNumModules = function () {
        return this._modules.length;
      }),
      (_t.prototype.getCurrentModules = function () {
        return this._modules;
      }),
      (_t.prototype.addModule = function (t, e) {
        return t.id || (t.id = v()), t.numId || (t.numId = this._moduleNumId), t.num || (t.num = this._modules.length), e && !e.group && (e.group = x()), t.group || (t.group = e ? e.group : x()), (t.prefix = "mod" + t.group + "_"), this._modules.push(t), (this._needsRecompile = !0), this.setWhyCompile("add module " + t.title), this._moduleNumId++, t;
      }),
      (_t.prototype.hasModule = function (e) {
        for (let t = 0; t < this._modules.length; t++) if (this._modules[t].id == e) return !0;
        return !1;
      }),
      (_t.prototype.setModules = function (t) {
        this._moduleNames = t;
      }),
      (_t.prototype.dispose = function () {
        this._cgl.gl.deleteProgram(this._program);
      }),
      (_t.prototype.needsRecompile = function () {
        return this._needsRecompile;
      }),
      (_t.prototype.setDrawBuffers = function (e) {
        if (this._drawBuffers.length !== e.length) return (this._drawBuffers = e), (this._needsRecompile = !0), void this.setWhyCompile("setDrawBuffers");
        for (let t = 0; t < e; t++) if (e[t] !== this._drawBuffers[t]) return (this._drawBuffers = e), (this._needsRecompile = !0), void this.setWhyCompile("setDrawBuffers");
      }),
      (_t.prototype.getUniforms = function () {
        return this._uniforms;
      }),
      (_t.prototype.getUniform = function (e) {
        for (let t = 0; t < this._uniforms.length; t++) if (this._uniforms[t].getName() == e) return this._uniforms[t];
        return null;
      }),
      (_t.prototype.removeUniform = function (e) {
        for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].getName() == e && this._uniforms.splice(t, 1);
        (this._needsRecompile = !0), this.setWhyCompile("remove uniform " + e);
      }),
      (_t.prototype._addUniform = function (t) {
        this._uniforms.push(t), this.setWhyCompile("add uniform " + name), (this._needsRecompile = !0);
      }),
      (_t.prototype.addUniformFrag = function (t, e, i, n, r, s) {
        const o = new CGL.Uniform(this, t, e, i, n, r, s);
        return (o.shaderType = "frag"), o;
      }),
      (_t.prototype.addUniformVert = function (t, e, i, n, r, s) {
        const o = new CGL.Uniform(this, t, e, i, n, r, s);
        return (o.shaderType = "vert"), o;
      }),
      (_t.prototype.addUniformBoth = function (t, e, i, n, r, s) {
        const o = new CGL.Uniform(this, t, e, i, n, r, s);
        return (o.shaderType = "both"), o;
      }),
      (_t.prototype.addUniformStructFrag = function (e, i, n) {
        const r = {};
        if (!n) return r;
        for (let t = 0; t < n.length; t += 1) {
          var s = n[t];
          if (!this.hasUniform(i + "." + s.name)) {
            const n = new CGL.Uniform(this, s.type, i + "." + s.name, s.v1, s.v2, s.v3, s.v4, i, e, s.name);
            (n.shaderType = "frag"), (r[i + "." + s.name] = n);
          }
        }
        return r;
      }),
      (_t.prototype.addUniformStructVert = function (e, i, n) {
        const r = {};
        if (!n) return r;
        for (let t = 0; t < n.length; t += 1) {
          var s = n[t];
          if (!this.hasUniform(i + "." + s.name)) {
            const n = new CGL.Uniform(this, s.type, i + "." + s.name, s.v1, s.v2, s.v3, s.v4, i, e, s.name);
            (n.shaderType = "vert"), (r[i + "." + s.name] = n);
          }
        }
        return r;
      }),
      (_t.prototype.addUniformStructBoth = function (e, i, n) {
        const r = {};
        if (!n) return r;
        for (let t = 0; t < n.length; t += 1) {
          var s = n[t];
          if ((("2i" !== s.type && "i" !== s.type && "3i" !== s.type) || this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", e, " with member:", s.name, " of type:", s.type, "."), !this.hasUniform(i + "." + s.name))) {
            const n = new CGL.Uniform(this, s.type, i + "." + s.name, s.v1, s.v2, s.v3, s.v4, i, e, s.name);
            (n.shaderType = "both"), (r[i + "." + s.name] = n);
          }
        }
        return r;
      }),
      (_t.prototype.hasUniform = function (e) {
        for (let t = 0; t < this._uniforms.length; t++) if (this._uniforms[t].getName() == e) return !0;
        return !1;
      }),
      (_t.prototype._createProgram = function (t, e) {
        this._cgl.printError("before _createprogram");
        var i = this._cgl.gl.createProgram();
        return (this.vshader = _t.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this)), (this.fshader = _t.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this)), this._cgl.gl.attachShader(i, this.vshader), this._cgl.gl.attachShader(i, this.fshader), this._linkProgram(i, t, e), this._cgl.printError("shader _createProgram"), i;
      }),
      (_t.prototype.hasErrors = function () {
        return this._hasErrors;
      }),
      (_t.prototype._linkProgram = function (t, e, i) {
        this._cgl.printError("before _linkprogram"),
          0 < this._feedBackNames.length && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS),
          this._cgl.gl.linkProgram(t),
          this._cgl.printError("gl.linkprogram"),
          (this._isValid = !0),
          (this._hasErrors = !1) !== this._cgl.patch.config.glValidateShader &&
            (this._cgl.gl.validateProgram(t),
            this._cgl.gl.getProgramParameter(t, this._cgl.gl.VALIDATE_STATUS) || (console.log("shaderprogram validation failed..."), console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(t))),
            this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) ||
              ((this._hasErrors = !0),
              this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader) || "empty shader infolog"),
              this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader) || "empty shader infolog"),
              this._log.error(this._name + " shader linking fail..."),
              console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(t)),
              console.log("--------------------------------------"),
              console.log(this),
              console.log("--------------------------------------"),
              (this._isValid = !1),
              (this._name = "errorshader"),
              this.setSource(_t.getDefaultVertexShader(), _t.getErrorFragmentShader()),
              this._cgl.printError("shader link err")));
      }),
      (_t.prototype.getProgram = function () {
        return this._program;
      }),
      (_t.prototype.setFeedbackNames = function (t) {
        this.setWhyCompile("setFeedbackNames"), (this._needsRecompile = !0), (this._feedBackNames = t);
      }),
      (_t.prototype.getDefaultVertexShader = _t.getDefaultVertexShader =
        function () {
          return "{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    {{MODULE_VERTEX_POSITION}}\n    gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;\n}\n";
        }),
      (_t.prototype.getDefaultFragmentShader = _t.getDefaultFragmentShader =
        function (t, e, i) {
          return null == t && (i = e = t = 0.5), "".endl() + "IN vec2 texCoord;".endl() + "{{MODULES_HEAD}}".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(" + t + "," + e + "," + i + ",1.0);".endl() + "    {{MODULE_COLOR}}".endl() + "    outColor = col;".endl() + "}";
        }),
      (_t.prototype.addAttribute = function (e) {
        for (let t = 0; t < this._attributes.length; t++) if (this._attributes[t].name == e.name && this._attributes[t].nameFrag == e.nameFrag) return;
        this._attributes.push(e), (this._needsRecompile = !0), this.setWhyCompile("addAttribute");
      }),
      (_t.prototype.bindTextures = _t.prototype._bindTextures =
        function () {
          this._textureStackTex.length > this._cgl.maxTextureUnits && this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
          for (let i = 0; i < this._textureStackTex.length; i++)
            if (this._textureStackTex[i] || this._textureStackTexCgl[i]) {
              let t = this._textureStackTex[i];
              this._textureStackTexCgl[i] && (t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex);
              let e = !0;
              (e = (this._textureStackUni[i] ? this._textureStackUni[i].setValue(i) : this._log.warn("no uniform for pushtexture", this._name), this._cgl.setTexture(i, t, this._textureStackType[i]))), e || this._log.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
            } else this._log.warn("no texture for pushtexture", this._name);
        }),
      (_t.prototype.setUniformTexture = function (e, i) {
        for (let t = 0; t < this._textureStackTex.length; t++)
          if (this._textureStackUni[t] == e) {
            const e = this._textureStackTex[t];
            return (this._textureStackTex[t] = i), e;
          }
        return null;
      }),
      (_t.prototype.pushTexture = function (t, e, i) {
        if (!t) throw new Error("no uniform given to texturestack");
        if (e) {
          if (!(e.hasOwnProperty("tex") || e instanceof WebGLTexture)) return this._log.warn(new Error("invalid texture").stack), void this._log.warn("[cgl_shader] invalid texture...", e);
          this._textureStackUni.push(t), e.hasOwnProperty("tex") ? (this._textureStackTexCgl.push(e), this._textureStackTex.push(null)) : (this._textureStackTexCgl.push(null), this._textureStackTex.push(e)), this._textureStackType.push(i);
        }
      }),
      (_t.prototype.popTexture = function () {
        this._textureStackUni.pop(), this._textureStackTex.pop(), this._textureStackType.pop();
      }),
      (_t.prototype.popTextures = function () {
        this._textureStackTex.length = this._textureStackTexCgl.length = this._textureStackType.length = this._textureStackUni.length = 0;
      }),
      (_t.prototype.getInfo = function () {
        const t = {};
        return (t.name = this._name), (t.defines = this.getDefines()), (t.hasErrors = this.hasErrors()), t;
      }),
      (_t.getErrorFragmentShader = function () {
        return "".endl() + "void main()".endl() + "{".endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl() + "   g= step(0.1,g);".endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl() + "}";
      }),
      (_t.createShader = function (i, n, r, s) {
        if (!i.aborted) {
          var o,
            a = i.gl.createShader(r);
          if ((i.gl.shaderSource(a, n), i.gl.compileShader(a), !i.gl.getShaderParameter(a, i.gl.COMPILE_STATUS))) {
            console.log("compile status: "), r == i.gl.VERTEX_SHADER && console.log("VERTEX_SHADER"), r == i.gl.FRAGMENT_SHADER && console.log("FRAGMENT_SHADER");
            let t = i.gl.getShaderInfoLog(a) || "empty shader info log";
            var l = (function (t) {
              const e = [],
                i = t.split("\n");
              for (const t in i) {
                var n = i[t].split(":");
                parseInt(n[2], 10) && e.push(parseInt(n[2], 10));
              }
              return e;
            })(t);
            let e = '<div class="shaderErrorCode">';
            var h = n.match(/^.*((\r\n|\n|\r)|$)/gm);
            for (const i in h) {
              const n = parseInt(i, 10) + 1,
                r = n + ": " + h[i];
              console.log(r);
              let t = !1;
              for (const i in l) l[i] == n && (t = !0);
              t && (e += '<span class="error">'),
                (e +=
                  (o = r) && At.test(o)
                    ? o.replace(xt, function (t) {
                        return Tt[t];
                      })
                    : o || ""),
                t && (e += "</span>");
            }
            console.warn(t), (t = t.replace(/\n/g, "<br/>")), (e = t + "<br/>" + e + "<br/><br/>"), (e += "</div>"), i.patch.emitEvent("criticalError", "Shader error " + this._name, e), i.patch.isEditorMode() && console.log("Shader error " + this._name, e), (this._name = "errorshader"), s.setSource(_t.getDefaultVertexShader(), _t.getErrorFragmentShader());
          }
          return a;
        }
      });
    function yt() {
      (this._arr = [mat4.create()]), (this._index = 0), (this.stateCounter = 0);
    }
    (yt.prototype.push = function (t) {
      if ((this._index++, this.stateCounter++, this._index == this._arr.length)) {
        const t = mat4.create();
        this._arr.push(t);
      }
      return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]), this._arr[this._index];
    }),
      (yt.prototype.pop = function () {
        return this.stateCounter++, this._index--, this._index < 0 && (this._index = 0), this._arr[this._index];
      }),
      (yt.prototype.length = function () {
        return this._index;
      });
    class Mt {
      constructor(t) {
        (this._cgl = t),
          (this._lastTime = 0),
          (this.pause = !1),
          (this.profileUniformCount = 0),
          (this.profileShaderBinds = 0),
          (this.profileUniformCount = 0),
          (this.profileShaderCompiles = 0),
          (this.profileVideosPlaying = 0),
          (this.profileMVPMatrixCount = 0),
          (this.profileEffectBuffercreate = 0),
          (this.profileShaderGetUniform = 0),
          (this.profileFrameBuffercreate = 0),
          (this.profileMeshSetGeom = 0),
          (this.profileTextureNew = 0),
          (this.profileGenMipMap = 0),
          (this.profileOnAnimFrameOps = 0),
          (this.profileMainloopMs = 0),
          (this.profileMeshDraw = 0),
          (this.profileTextureEffect = 0),
          (this.profileTexPreviews = 0),
          (this.shaderCompileTime = 0),
          (this.profileMeshNumElements = 0),
          (this.profileMeshAttributes = 0),
          (this.profileSingleMeshAttribute = []),
          (this.heavyEvents = []),
          (this.doProfileGlQuery = !1),
          (this.glQueryData = {});
      }
      clear() {
        (this.profileSingleMeshAttribute = {}),
          (this.profileMeshAttributes = 0),
          (this.profileUniformCount = 0),
          (this.profileShaderGetUniform = 0),
          (this.profileShaderCompiles = 0),
          (this.profileShaderBinds = 0),
          (this.profileTextureResize = 0),
          (this.profileFrameBuffercreate = 0),
          (this.profileEffectBuffercreate = 0),
          (this.profileTextureDelete = 0),
          (this.profileMeshSetGeom = 0),
          (this.profileVideosPlaying = 0),
          (this.profileMVPMatrixCount = 0),
          (this.profileNonTypedAttrib = 0),
          (this.profileNonTypedAttribNames = ""),
          (this.profileTextureNew = 0),
          (this.profileGenMipMap = 0),
          (this.profileFramebuffer = 0),
          (this.profileMeshDraw = 0),
          (this.profileTextureEffect = 0),
          (this.profileTexPreviews = 0),
          (this.profileMeshNumElements = 0);
      }
      clearGlQuery() {
        for (var t in this.glQueryData) (!this.glQueryData[t].lastClear || 1e3 < performance.now() - this.glQueryData[t].lastClear) && ((this.glQueryData[t].time = this.glQueryData[t]._times / this.glQueryData[t]._numcount), (this.glQueryData[t].num = this.glQueryData[t]._numcount), (this.glQueryData[t]._times = 0), (this.glQueryData[t]._numcount = 0), (this.glQueryData[t].lastClear = performance.now()));
      }
      addHeavyEvent(t, e, i) {
        i = { event: t, name: e, info: i, date: performance.now() };
        this.heavyEvents.push(i), this._cgl.emitEvent("heavyEvent", i);
      }
    }
    function St(t) {
      X.apply(this), (this.profileData = new Mt(this)), (this._log = new d("cgl_context"));
      const r = [0, 0, 0, 0];
      (this.glVersion = 0),
        (this.glUseHalfFloatTex = !1),
        (this.clearCanvasTransparent = !0),
        (this.clearCanvasDepth = !0),
        (this.patch = t),
        (this.debugOneFrame = !1),
        (this.checkGlErrors = !0),
        (this.maxTextureUnits = 0),
        (this.maxVaryingVectors = 0),
        (this.currentProgram = null),
        (this._hadStackError = !1),
        (this.glSlowRenderer = !1),
        (this._isSafariCrap = !1),
        (this.temporaryTexture = null),
        (this.frameStore = {}),
        (this._onetimeCallbacks = []),
        (this.gl = null),
        (this._cursor = "auto"),
        (this._currentCursor = ""),
        (this.pMatrix = mat4.create()),
        (this.mMatrix = mat4.create()),
        (this.vMatrix = mat4.create()),
        (this._textureslots = []),
        (this._pMatrixStack = new yt()),
        (this._mMatrixStack = new yt()),
        (this._vMatrixStack = new yt()),
        (this._glFrameBufferStack = []),
        (this._frameBufferStack = []),
        (this._shaderStack = []),
        (this._stackDepthTest = []),
        Object.defineProperty(this, "mvMatrix", {
          get() {
            return this.mMatrix;
          },
          set(t) {
            this.mMatrix = t;
          },
        }),
        (this.canvas = null),
        (this.pixelDensity = 1),
        mat4.identity(this.mMatrix),
        mat4.identity(this.vMatrix);
      const n = new _t(this, "simpleshader");
      n.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), n.setSource(_t.getDefaultVertexShader(), _t.getDefaultFragmentShader());
      let e = n;
      this.aborted = !1;
      const i = [];
      (this.exitError = function (t, e) {
        this.patch.exitError(t, e), (this.aborted = !0);
      }),
        (this.setCanvas = function (t) {
          if (
            ((this.canvas = "string" == typeof t ? document.getElementById(t) : t),
            this.patch.config.canvas || (this.patch.config.canvas = {}),
            this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer") || (this.patch.config.canvas.preserveDrawingBuffer = !1),
            this.patch.config.canvas.hasOwnProperty("premultipliedAlpha") || (this.patch.config.canvas.premultipliedAlpha = !1),
            this.patch.config.canvas.hasOwnProperty("alpha") || (this.patch.config.canvas.alpha = !1),
            this.patch.config.hasOwnProperty("clearCanvasColor") && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor),
            this.patch.config.hasOwnProperty("clearCanvasDepth") && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this._isSafariCrap = !0),
            this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext("webgl2", this.patch.config.canvas)),
            this.gl && "WebGL 1.0" != this.gl.getParameter(this.gl.VERSION) ? (this.glVersion = 2) : ((this.gl = this.canvas.getContext("webgl", this.patch.config.canvas) || this.canvas.getContext("experimental-webgl", this.patch.config.canvas)), (this.glVersion = 1), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && navigator.userAgent.match(/iPhone/i) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty("powerPreference") || (this.patch.config.canvas.powerPreference = "high-performance"))),
            this.gl)
          ) {
            t = this.gl.getExtension("WEBGL_debug_renderer_info");
            t && ((this.glRenderer = this.gl.getParameter(t.UNMASKED_RENDERER_WEBGL)), "Google SwiftShader" === this.glRenderer && (this.glSlowRenderer = !0)), this.gl.getExtension("OES_standard_derivatives");
            const e = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
            this.canvas.addEventListener("webglcontextlost", (t) => {
              this._log.error("canvas lost...", t), this.emitEvent("webglcontextlost"), (this.aborted = !0);
            }),
              (this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS)),
              (this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)),
              (this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),
              (this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS)),
              (this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS)),
              (this.maxSamples = 0),
              this.gl.MAX_SAMPLES && (this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)),
              e.vertexAttribDivisorANGLE && ((this.gl.vertexAttribDivisor = e.vertexAttribDivisorANGLE.bind(e)), (this.gl.drawElementsInstanced = e.drawElementsInstancedANGLE.bind(e))),
              this.updateSize();
          } else this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
        }),
        (this.getInfo = function () {
          return {
            glVersion: this.glVersion,
            glRenderer: this.glRenderer,
            glUseHalfFloatTex: this.glUseHalfFloatTex,
            maxVaryingVectors: this.maxVaryingVectors,
            maxTextureUnits: this.maxTextureUnits,
            maxTexSize: this.maxTexSize,
            maxUniformsFrag: this.maxUniformsFrag,
            maxUniformsVert: this.maxUniformsVert,
            maxSamples: this.maxSamples,
          };
        }),
        (this.updateSize = function () {
          (this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity), (this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity);
        }),
        (this.canvasWidth = -1),
        (this.canvasHeight = -1);
      let s = -(this.canvasScale = 1),
        o = -1;
      (this.getViewPort = function () {
        return r;
      }),
        (this.resetViewPort = function () {
          this.gl.viewport(r[0], r[1], r[2], r[3]);
        }),
        (this.setViewPort = function (t, e, i, n) {
          (r[0] = Math.round(t)), (r[1] = Math.round(e)), (r[2] = Math.round(i)), (r[3] = Math.round(n)), this.gl.viewport(r[0], r[1], r[2], r[3]);
        }),
        (this.screenShot = function (e, t, i, n) {
          t && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)),
            this.canvas &&
              this.canvas.toBlob &&
              this.canvas.toBlob(
                (t) => {
                  e ? e(t) : this._log.log("no screenshot callback...");
                },
                i,
                n
              );
        }),
        (this.endFrame = function () {
          if (
            (this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this),
            this.setPreviousShader(),
            0 < this._vMatrixStack.length() && this.logStackError("view matrix stack length !=0 at end of rendering..."),
            0 < this._mMatrixStack.length() && this.logStackError("mvmatrix stack length !=0 at end of rendering..."),
            0 < this._pMatrixStack.length() && this.logStackError("pmatrix stack length !=0 at end of rendering..."),
            0 < this._glFrameBufferStack.length && this.logStackError("glFrameBuffer stack length !=0 at end of rendering..."),
            0 < this._stackDepthTest.length && this.logStackError("depthtest stack length !=0 at end of rendering..."),
            0 < this._stackDepthWrite.length && this.logStackError("depthwrite stack length !=0 at end of rendering..."),
            0 < this._stackDepthFunc.length && this.logStackError("depthfunc stack length !=0 at end of rendering..."),
            0 < this._stackBlend.length && this.logStackError("blend stack length !=0 at end of rendering..."),
            0 < this._stackBlendMode.length && this.logStackError("blendMode stack length !=0 at end of rendering..."),
            0 < this._shaderStack.length && this.logStackError("this._shaderStack length !=0 at end of rendering..."),
            0 < this._stackCullFace.length && this.logStackError("this._stackCullFace length !=0 at end of rendering..."),
            0 < this._stackCullFaceFacing.length && this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering..."),
            (this._frameStarted = !1),
            s != this.canvasWidth || o != this.canvasHeight)
          ) {
            (s = this.canvasWidth), (o = this.canvasHeight), this.setSize(this.canvasWidth / this.pixelDensity, this.canvasHeight / this.pixelDensity), this.updateSize();
            for (let t = 0; t < i.length; t++) i[t]();
            this.emitEvent("resize");
          }
          this._cursor != this._currentCursor && (this._currentCursor = this.canvas.style.cursor = this._cursor);
        }),
        (this.logStackError = function (t) {
          this._hadStackError || ((this._hadStackError = !0), this._log.warn("[" + this.canvas.id + "]: ", t));
        }),
        (this.getShader = function () {
          if (e && (!this.frameStore || ((!0 === this.frameStore.renderOffscreen) == e.offScreenPass) == 1)) return e;
          for (let t = this._shaderStack.length - 1; 0 <= t; t--) if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t];
        }),
        (this.getDefaultShader = function () {
          return n;
        }),
        (this.pushShader = this.setShader =
          function (t) {
            this._shaderStack.push(t), (e = t);
          }),
        (this.popShader = this.setPreviousShader =
          function () {
            if (0 === this._shaderStack.length) throw new Error("Invalid shader stack pop!");
            this._shaderStack.pop(), (e = this._shaderStack[this._shaderStack.length - 1]);
          }),
        (this.pushGlFrameBuffer = function (t) {
          this._glFrameBufferStack.push(t);
        }),
        (this.popGlFrameBuffer = function () {
          return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1]);
        }),
        (this.getCurrentGlFrameBuffer = function () {
          return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
        }),
        (this.pushFrameBuffer = function (t) {
          this._frameBufferStack.push(t);
        }),
        (this.popFrameBuffer = function () {
          return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1]);
        }),
        (this.getCurrentFrameBuffer = function () {
          return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1];
        });
      const a = vec3.create();
      vec3.set(a, 0, 0, 2);
      const l = vec3.create();
      vec3.set(l, 0, 0, 0),
        (this.renderStart = function (t, e, i) {
          (e = e || l),
            (i = i || a),
            this.pushDepthTest(!0),
            this.pushDepthWrite(!0),
            this.pushDepthFunc(t.gl.LEQUAL),
            this.pushCullFaceFacing(t.gl.BACK),
            this.pushCullFace(!1),
            this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
            this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
            t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
            mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, 0.1, 1e3),
            mat4.identity(t.mMatrix),
            mat4.identity(t.vMatrix),
            mat4.translate(t.mMatrix, t.mMatrix, e),
            mat4.translate(t.vMatrix, t.vMatrix, i),
            t.pushPMatrix(),
            t.pushModelMatrix(),
            t.pushViewMatrix(),
            t.pushBlendMode(at.BLEND_MODES.BLEND_NORMAL, !1);
          for (let t = 0; t < this._textureslots.length; t++) this._textureslots[t] = null;
          if ((this.pushShader(n), (this._frameStarted = !0), 0 < this._onetimeCallbacks.length)) {
            for (let t = 0; t < this._onetimeCallbacks.length; t++) this._onetimeCallbacks[t]();
            this._onetimeCallbacks.length = 0;
          }
          this.emitEvent("beginFrame");
        }),
        (this.renderEnd = function (t) {
          t.popViewMatrix(), t.popModelMatrix(), t.popPMatrix(), this.popDepthTest(), this.popDepthWrite(), this.popDepthFunc(), this.popCullFaceFacing(), this.popCullFace(), this.popBlend(), this.popBlendMode(), t.endFrame(), this.emitEvent("endFrame");
        }),
        (this.getTexture = function (t) {
          return this._textureslots[t];
        }),
        (this.checkFrameStarted = function (t) {
          this._frameStarted || (this._log.warn("frame not started " + t), this.patch.printTriggerStack());
        }),
        (this.setTexture = function (t, e, i) {
          return this.checkFrameStarted("cgl setTexture"), null === e && (e = CGL.Texture.getEmptyTexture(this).tex), this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), (this._textureslots[t] = e)), !0;
        }),
        (this.fullScreen = function () {
          this.canvas.requestFullscreen ? this.canvas.requestFullscreen() : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen() : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen() : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen();
        }),
        (this.setSize = function (t, e, i) {
          i || ((this.canvas.style.width = t + "px"), (this.canvas.style.height = e + "px")), (this.canvas.width = t * this.pixelDensity), (this.canvas.height = e * this.pixelDensity), this.updateSize();
        }),
        (this._resizeToWindowSize = function () {
          this.setSize(window.innerWidth, window.innerHeight), this.updateSize();
        }),
        (this._resizeToParentSize = function () {
          var t = this.canvas.parentElement;
          t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : this._log.error("cables: can not resize to container element");
        }),
        (this.setAutoResize = function (t) {
          window.removeEventListener("resize", this._resizeToWindowSize.bind(this)), window.removeEventListener("resize", this._resizeToParentSize.bind(this)), "window" == t && (window.addEventListener("resize", this._resizeToWindowSize.bind(this)), window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()), "parent" == t && (window.addEventListener("resize", this._resizeToParentSize.bind(this)), this._resizeToParentSize());
        }),
        (this.printError = function (n) {
          if (this.checkGlErrors) {
            let e = !1,
              i = this.gl.getError();
            if (i != this.gl.NO_ERROR) {
              let t = "";
              i == this.gl.OUT_OF_MEMORY && (t = "OUT_OF_MEMORY"),
                i == this.gl.INVALID_ENUM && (t = "INVALID_ENUM"),
                i == this.gl.INVALID_OPERATION && (t = "INVALID_OPERATION"),
                i == this.gl.INVALID_FRAMEBUFFER_OPERATION && (t = "INVALID_FRAMEBUFFER_OPERATION"),
                i == this.gl.INVALID_VALUE && (t = "INVALID_VALUE"),
                i == this.gl.CONTEXT_LOST_WEBGL && ((this.aborted = !0), (t = "CONTEXT_LOST_WEBGL")),
                i == this.gl.NO_ERROR && (t = "NO_ERROR"),
                (e = !0),
                this._log.warn("gl error [" + this.canvas.id + "]: ", n, i, t),
                -1 == this.canvas.id.indexOf("glGuiCanvas") && (this._loggedGlError || (this.patch.printTriggerStack(), this._log.stack("glerror"), (this._loggedGlError = !0)));
            }
            return (i = this.gl.getError()), e;
          }
        }),
        (this.saveScreenshot = function (i, n, t, e, r) {
          this.patch.renderOneFrame();
          let s = this.canvas.clientWidth,
            o = this.canvas.clientHeight;
          function a(t, e, i) {
            return Array(e - String(t).length + 1).join(i || "0") + t;
          }
          t && ((this.canvas.width = t), (s = t)), e && ((this.canvas.height = e), (o = e));
          const l = new Date(),
            h = ""
              .concat(String(l.getFullYear()) + String(l.getMonth() + 1) + String(l.getDate()), "_")
              .concat(a(l.getHours(), 2))
              .concat(a(l.getMinutes(), 2))
              .concat(a(l.getSeconds(), 2));
          i ? (i += ".png") : (i = "cables_" + h + ".png"),
            this.patch.cgl.screenShot(
              function (t) {
                if (((this.canvas.width = s), (this.canvas.height = o), t)) {
                  const e = document.createElement("a");
                  (e.download = i),
                    (e.href = URL.createObjectURL(t)),
                    setTimeout(function () {
                      e.click(), n && n(t);
                    }, 100);
                } else this._log.log("screenshot: no blob");
              }.bind(this),
              r
            );
        });
    }
    (St.prototype.addNextFrameOnceCallback = function (t) {
      t && this._onetimeCallbacks.push(t);
    }),
      (St.prototype.pushViewMatrix = function () {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
      }),
      (St.prototype.popViewMatrix = function () {
        this.vMatrix = this._vMatrixStack.pop();
      }),
      (St.prototype.getViewMatrixStateCount = function () {
        return this._vMatrixStack.stateCounter;
      }),
      (St.prototype.pushPMatrix = function () {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
      }),
      (St.prototype.popPMatrix = function () {
        return (this.pMatrix = this._pMatrixStack.pop()), this.pMatrix;
      }),
      (St.prototype.getProjectionMatrixStateCount = function () {
        return this._pMatrixStack.stateCounter;
      }),
      (St.prototype.pushMvMatrix = St.prototype.pushModelMatrix =
        function () {
          this.mMatrix = this._mMatrixStack.push(this.mMatrix);
        }),
      (St.prototype.popMvMatrix =
        St.prototype.popmMatrix =
        St.prototype.popModelMatrix =
          function () {
            return (this.mMatrix = this._mMatrixStack.pop()), this.mMatrix;
          }),
      (St.prototype.modelMatrix = function () {
        return this.mMatrix;
      }),
      (St.prototype._stackDepthTest = []),
      (St.prototype.pushDepthTest = function (t) {
        this._stackDepthTest.push(t), t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST);
      }),
      (St.prototype.stateDepthTest = function () {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
      }),
      (St.prototype.popDepthTest = function () {
        this._stackDepthTest.pop(), this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST);
      }),
      (St.prototype._stackDepthWrite = []),
      (St.prototype.pushDepthWrite = function (t) {
        this._stackDepthWrite.push((t = t || !1)), this.gl.depthMask(t);
      }),
      (St.prototype.stateDepthWrite = function () {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
      }),
      (St.prototype.popDepthWrite = function () {
        this._stackDepthWrite.pop(), this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || !1);
      }),
      (St.prototype._stackCullFace = []),
      (St.prototype.pushCullFace = function (t) {
        this._stackCullFace.push(t), t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE);
      }),
      (St.prototype.stateCullFace = function () {
        return this._stackCullFace[this._stackCullFace.length - 1];
      }),
      (St.prototype.popCullFace = function () {
        this._stackCullFace.pop(), this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE);
      }),
      (St.prototype._stackCullFaceFacing = []),
      (St.prototype.pushCullFaceFacing = function (t) {
        this._stackCullFaceFacing.push(t), this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
      }),
      (St.prototype.stateCullFaceFacing = function () {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
      }),
      (St.prototype.popCullFaceFacing = function () {
        this._stackCullFaceFacing.pop(), 0 < this._stackCullFaceFacing.length && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
      }),
      (St.prototype._stackDepthFunc = []),
      (St.prototype.pushDepthFunc = function (t) {
        this._stackDepthFunc.push(t), this.gl.depthFunc(t);
      }),
      (St.prototype.stateDepthFunc = function () {
        return 0 < this._stackDepthFunc.length && this._stackDepthFunc[this._stackDepthFunc.length - 1];
      }),
      (St.prototype.popDepthFunc = function () {
        this._stackDepthFunc.pop(), 0 < this._stackDepthFunc.length && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
      }),
      (St.prototype._stackBlend = []),
      (St.prototype.pushBlend = function (t) {
        this._stackBlend.push(t), t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
      }),
      (St.prototype.popBlend = function () {
        this._stackBlend.pop(), this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
      }),
      (St.prototype.stateBlend = function () {
        return this._stackBlend[this._stackBlend.length - 1];
      }),
      (St.prototype._stackBlendMode = []),
      (St.prototype._stackBlendModePremul = []),
      (St.prototype.pushBlendMode = function (t, e) {
        this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
        e = this._stackBlendMode.length - 1;
        this.pushBlend(this._stackBlendMode[e] !== at.BLEND_MODES.BLEND_NONE), this._setBlendMode(this._stackBlendMode[e], this._stackBlendModePremul[e]);
      }),
      (St.prototype.popBlendMode = function () {
        this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
        var t = this._stackBlendMode.length - 1;
        this.popBlend(this._stackBlendMode[t] !== at.BLEND_MODES.BLEND_NONE), 0 <= t && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t]);
      }),
      (St.prototype.glGetAttribLocation = function (t, e) {
        return this.gl.getAttribLocation(t, e);
      }),
      (St.prototype.shouldDrawHelpers = function (t) {
        return !this.frameStore.shadowPass && !!t.patch.isEditorMode() && (CABLES.UI.renderHelper || (CABLES.UI.renderHelperCurrent && t.isCurrentUiOp()));
      }),
      (St.prototype._setBlendMode = function (t, e) {
        const i = this.gl;
        t == at.BLEND_MODES.BLEND_NONE ||
          (t == at.BLEND_MODES.BLEND_ADD
            ? e
              ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))
              : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE))
            : t == at.BLEND_MODES.BLEND_SUB
            ? e
              ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA))
              : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR))
            : t == at.BLEND_MODES.BLEND_MUL
            ? e
              ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA))
              : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR))
            : t == at.BLEND_MODES.BLEND_NORMAL
            ? e
              ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))
              : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))
            : this._log.log("setblendmode: unknown blendmode"));
      }),
      (St.prototype.setCursor = function (t) {
        this._cursor = t;
      });
    B = Object.assign(
      {
        Framebuffer: function (t, e, i, n) {
          const r = t;
          this._log = new d("Framebuffer");
          const s = r.gl.getExtension("WEBGL_depth_texture") || r.gl.getExtension("WEBKIT_WEBGL_depth_texture") || r.gl.getExtension("MOZ_WEBGL_depth_texture") || r.gl.DEPTH_TEXTURE;
          s || r.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
          let o = e || 512,
            a = i || 512;
          (n = n || { isFloatingPointTexture: !1 }).hasOwnProperty("clear") || (n.clear = !0), n.hasOwnProperty("filter") || (n.filter = F.FILTER_LINEAR);
          const l = new F(r, { isFloatingPointTexture: n.isFloatingPointTexture, filter: n.filter, wrap: n.wrap || F.CLAMP_TO_EDGE });
          let h = null;
          s && (h = new F(r, { isDepthTexture: !0 })), (this._options = n);
          const u = r.gl.createFramebuffer(),
            c = r.gl.createRenderbuffer();
          (this.getWidth = function () {
            return o;
          }),
            (this.getHeight = function () {
              return a;
            }),
            (this.getGlFrameBuffer = function () {
              return u;
            }),
            (this.getDepthRenderBuffer = function () {
              return c;
            }),
            (this.getTextureColor = function () {
              return l;
            }),
            (this.getTextureDepth = function () {
              return h;
            }),
            (this.setFilter = function (t) {
              (l.filter = t), l.setSize(o, a);
            }),
            (this.setSize = function (t, e) {
              if (
                (t < 2 && (t = 2),
                e < 2 && (e = 2),
                (o = Math.ceil(t)),
                (a = Math.ceil(e)),
                r.profileData.profileFrameBuffercreate++,
                r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
                r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c),
                l.setSize(o, a),
                h && h.setSize(o, a),
                s && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, a),
                r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, l.tex, 0),
                s && (r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, c), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, h.tex, 0)),
                !r.gl.isFramebuffer(u))
              )
                throw new Error("Invalid framebuffer");
              var i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);
              switch (i) {
                case r.gl.FRAMEBUFFER_COMPLETE:
                  break;
                case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                  throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", o, a, l.tex, c), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT"));
                case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                  throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"));
                case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                  throw (this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS"));
                case r.gl.FRAMEBUFFER_UNSUPPORTED:
                  throw (this._log.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED"));
                case 36059:
                  this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
                  break;
                default:
                  throw (this._log.warn("incomplete framebuffer", i), new Error("Incomplete framebuffer: " + i));
              }
              r.gl.bindTexture(r.gl.TEXTURE_2D, null), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null);
            }),
            (this.renderStart = function () {
              r.pushModelMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u), r.pushGlFrameBuffer(u), r.pushFrameBuffer(this), r.pushPMatrix(), r.gl.viewport(0, 0, o, a), this._options.clear && (r.gl.clearColor(0, 0, 0, 0), r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT));
            }),
            (this.renderEnd = function () {
              r.popPMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()), r.popFrameBuffer(), r.popModelMatrix(), r.resetViewPort();
            }),
            (this.delete = function () {
              l.delete(), h && h.delete(), r.gl.deleteRenderbuffer(c), r.gl.deleteFramebuffer(u);
            }),
            this.setSize(o, a);
        },
        Framebuffer2: B,
        Geometry: H,
        BoundingBox: j,
        Marker: function (t) {
          const e = new H("marker");
          e.setPointVertices([1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1]);
          const n = new st(t, e, t.gl.LINES);
          n.setGeom(e);
          const r = new _t(t, "markermaterial"),
            i = "".endl() + "precision highp float;".endl() + "IN vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(axisColor,1.0);".endl() + "    outColor = col;".endl() + "}",
            s = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "OUT vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "   vec4 pos=vec4(vPosition, 1.0);".endl() + "   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl() + "   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl() + "   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl() + "   gl_Position = projMatrix * mvMatrix * pos;".endl() + "}";
          r.setSource(s, i),
            (this._vScale = vec3.create()),
            (this.draw = function (t, e, i) {
              e = e || 2;
              t.pushModelMatrix(), t.pushShader(r), vec3.set(this._vScale, e, e, e), mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale), t.pushDepthTest(1 == i), n.render(t.getShader()), t.popDepthTest(), t.popShader(), t.popModelMatrix();
            });
        },
        WirePoint: function (n) {
          const r = n.gl.createBuffer(),
            s = vec3.create();
          (this.render = function (t, e) {
            t.pushModelMatrix(), vec3.set(s, e, e, e), mat4.scale(t.mvMatrix, t.mvMatrix, s);
            const i = t.getShader();
            i && (i.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, r), t.gl.vertexAttribPointer(i.getAttrVertexPos(), r.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(i.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, r), t.gl.drawArrays(t.gl.LINE_STRIP, 0, r.numItems)), t.popModelMatrix();
          }),
            (function () {
              const t = [];
              let e = 0,
                i = 0;
              for (e = 0; e <= Math.round(24); e++) (i = (360 / Math.round(24)) * e * mt), t.push(0.5 * Math.cos(i)), t.push(0), t.push(0.5 * Math.sin(i));
              for (e = 0; e <= Math.round(24); e++) (i = (360 / Math.round(24)) * e * mt), t.push(0.5 * Math.cos(i)), t.push(0.5 * Math.sin(i)), t.push(0);
              for (e = 0; e <= Math.round(24); e++) (i = (360 / Math.round(24)) * e * mt), t.push(0), t.push(0.5 * Math.cos(i)), t.push(0.5 * Math.sin(i));
              n.gl.bindBuffer(n.gl.ARRAY_BUFFER, r), n.gl.bufferData(n.gl.ARRAY_BUFFER, new Float32Array(t), n.gl.STATIC_DRAW), (r.itemSize = 3), (r.numItems = t.length / r.itemSize);
            })();
        },
        WireCube: function (e) {
          const s = e.gl.createBuffer(),
            o = vec3.create();
          (this.render = function (t, e, i, n) {
            t.pushModelMatrix(), vec3.set(o, e || 1, i || 1, n || 1), mat4.scale(t.mvMatrix, t.mvMatrix, o);
            const r = t.getShader();
            r && (r.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, s), t.gl.vertexAttribPointer(r.getAttrVertexPos(), s.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(r.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, s), t.gl.drawArrays(t.gl.LINE_STRIP, 0, s.numItems)), t.popModelMatrix();
          }),
            (function () {
              const t = [];
              t.push(-1, -1, 1), t.push(1, -1, 1), t.push(1, 1, 1), t.push(-1, 1, 1), t.push(-1, -1, 1), t.push(-1, -1, -1), t.push(1, -1, -1), t.push(1, 1, -1), t.push(-1, 1, -1), t.push(-1, -1, -1), t.push(-1, -1, -1), t.push(-1, 1, -1), t.push(-1, 1, 1), t.push(-1, -1, 1), t.push(-1, -1, -1), t.push(1, -1, -1), t.push(1, 1, -1), t.push(1, 1, 1), t.push(1, -1, 1), t.push(1, -1, -1), e.gl.bindBuffer(e.gl.ARRAY_BUFFER, s), e.gl.bufferData(e.gl.ARRAY_BUFFER, new Float32Array(t), e.gl.STATIC_DRAW), (s.itemSize = 3), (s.numItems = t.length / s.itemSize);
            })();
        },
        MatrixStack: yt,
        Mesh: st,
        MESH: lt,
        ShaderLibMods: pt,
        Shader: _t,
        Uniform: rt,
        MESHES: ut,
        Context: St,
        Texture: F,
        TextureEffect: ht,
        isWindows: bt,
        getWheelSpeed: Et,
        getWheelDelta: vt,
        onLoadingAssetsFinished: null,
        profileData: void 0,
        UniColorShader: class {
          constructor(t) {
            this.shader = new CGL.Shader(t, "markermaterial");
            var e = "".endl() + "void main()".endl() + "{".endl() + "    outColor = vec4(color.rgb,1.0);".endl() + "}",
              t = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "void main()".endl() + "{".endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);".endl() + "}";
            this.shader.setSource(t, e), (this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]));
          }
          setColor(t, e, i, n) {
            this.coloruni.set(t, e, i, n);
          }
        },
      },
      at.BLEND_MODES,
      at.SHADER,
      at.MATH,
      at.BLEND_MODES
    );
    window.CGL = B;
    function Ot(t) {
      X.apply(this), (this.id = CABLES.uuid()), (this.portIn = null), (this.portOut = null), (this.scene = t), (this.activityCounter = 0), (this.ignoreInSerialize = !1);
    }
    (Ot.prototype.setValue = function (t) {
      void 0 === t ? this._setValue() : this.portIn.set(t);
    }),
      (Ot.prototype.activity = function () {
        this.activityCounter++;
      }),
      (Ot.prototype._setValue = function () {
        var t;
        this.portOut ? (t = this.portOut.get()) == t && (this.portIn.type != u.OP_PORT_TYPE_FUNCTION && this.activity(), (this.portIn.get() === t && !this.portIn.changeAlways) || this.portIn.set(t)) : this.remove();
      }),
      (Ot.prototype.getOtherPort = function (t) {
        return t == this.portIn ? this.portOut : this.portIn;
      }),
      (Ot.prototype.remove = function () {
        this.portIn && this.portIn.removeLink(this),
          this.portOut && this.portOut.removeLink(this),
          this.scene && this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this),
          !this.portIn || (this.portIn.type != u.OP_PORT_TYPE_OBJECT && this.portIn.type != u.OP_PORT_TYPE_ARRAY) || (this.portIn.set(null), 0 < this.portIn.links.length && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())),
          this.portIn && this.portIn.parent._checkLinksNeededToWork(),
          this.portOut && this.portOut.parent._checkLinksNeededToWork(),
          (this.portIn = null),
          (this.portOut = null),
          (this.scene = null);
      }),
      (Ot.prototype.link = function (t, e) {
        if (!Ot.canLink(t, e)) return console.warn("[core_link] cannot link ports!", t, e), !1;
        t.direction == c.PORT_DIR_IN ? ((this.portIn = t), (this.portOut = e)) : ((this.portIn = e), (this.portOut = t)), t.addLink(this), e.addLink(this), this.setValue(), t.onLink && t.onLink(this), e.onLink && e.onLink(this), t.parent._checkLinksNeededToWork(), e.parent._checkLinksNeededToWork();
      }),
      (Ot.prototype.getSerialized = function () {
        const t = {};
        return (t.portIn = this.portIn.getName()), (t.portOut = this.portOut.getName()), (t.objIn = this.portIn.parent.id), (t.objOut = this.portOut.parent.id), t;
      }),
      (Ot.canLinkText = function (t, e) {
        if (t.direction != e.direction) return t.parent == e.parent ? "can not link: same op" : t.type != u.OP_PORT_TYPE_DYNAMIC && e.type != u.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? "can not link: different type" : t ? (e ? ((t.direction == c.PORT_DIR_IN && t.isAnimated()) || (e.direction == c.PORT_DIR_IN && e.isAnimated()) ? "can not link: is animated" : t.isLinkedTo(e) ? "ports already linked" : (t.canLink && !t.canLink(e)) || (e.canLink && !e.canLink(t)) ? "Incompatible" : "can link") : "can not link: port 2 invalid") : "can not link: port 1 invalid";
        {
          let t = "(out)";
          return e.direction == c.PORT_DIR_IN && (t = "(in)"), "can not link: same direction " + t;
        }
      }),
      (Ot.canLink = function (t, e) {
        return !(!t || !e || (t.direction == c.PORT_DIR_IN && t.isAnimated()) || (e.direction == c.PORT_DIR_IN && e.isAnimated()) || t.isHidden() || e.isHidden() || t.isLinkedTo(e) || t.direction == e.direction || (t.type != e.type && t.type != u.OP_PORT_TYPE_DYNAMIC && e.type != u.OP_PORT_TYPE_DYNAMIC) || (t.type != u.OP_PORT_TYPE_DYNAMIC && e.type != u.OP_PORT_TYPE_DYNAMIC && (t.parent == e.parent || (t.canLink && !t.canLink(e)) || (e.canLink && !e.canLink(t)))));
      });
    B = function () {
      X.apply(this),
        (this._log = new d("core_op")),
        (this.data = {}),
        (this.storage = {}),
        (this.objName = ""),
        (this.portsOut = []),
        (this.portsIn = []),
        (this.portsInData = []),
        (this.opId = ""),
        (this.uiAttribs = {}),
        (this.enabled = !0),
        (this.patch = arguments[0]),
        (this.name = arguments[1]),
        (this._needsLinkedToWork = []),
        (this._needsParentOp = null),
        (this._shortOpName = ""),
        (this.hasUiErrors = !1),
        (this._uiErrors = {}),
        arguments[1] && ((this._shortOpName = CABLES.getShortOpName(arguments[1])), this.getTitle()),
        (this.id = arguments[2] || E()),
        (this.onAddPort = null),
        (this.onCreate = null),
        (this.onResize = null),
        (this.onLoaded = null),
        (this.onDelete = null),
        (this.onUiAttrChange = null),
        (this.onError = null),
        (this._eventCallbacks = {}),
        (this._instances = null),
        (this.preRender = null),
        (this.init = null);
    };
    {
      (B.prototype.clearUiAttrib = function (t) {
        this.uiAttrib({ name: null });
      }),
        (B.prototype.getTitle = function () {
          return this.uiAttribs ? ((void 0 !== this.uiAttribs.title && "" !== this.uiAttribs.title) || -1 != this.objName.indexOf("Ops.Ui.") || (this.uiAttribs.title = this._shortOpName), void 0 === this.uiAttribs.title && (this.uiAttribs.title = this._shortOpName), this.uiAttribs.title) : "nouiattribs" + this.name;
        }),
        (B.prototype.setTitle = function (t) {
          var e = this.name != t;
          (this.name = t), this.uiAttr({ title: t }), e && this.fireEvent("onTitleChange", t);
        });
      const t = function (e) {
        if (e) {
          (e.error || e.warning || e.hint) && this._log.warn("old ui error/warning attribute in " + this.name + ", use op.setUiError !", e), "object" != typeof e && this._log.error("op.uiAttrib attribs are not of type object"), this.uiAttribs || (this.uiAttribs = {});
          let t = !1;
          for (const i in e) this.uiAttribs[i] != e[i] && (t = !0), (this.uiAttribs[i] = e[i]);
          this.uiAttribs.hasOwnProperty("selected") && 0 == this.uiAttribs.selected && delete this.uiAttribs.selected, e.title && e.title != this.name && this.setTitle(e.title), t && (this.fireEvent("onUiAttribsChange", e), this.patch.emitEvent("onUiAttribsChange", this, e));
        }
      };
      (B.prototype.setUiAttribs = B.prototype.setUiAttrib = B.prototype.uiAttr = t),
        (B.prototype.getName = function () {
          return this.uiAttribs.name || this.objName.split(".");
        }),
        (B.prototype.addOutPort = function (t) {
          return (t.direction = c.PORT_DIR_OUT), (t.parent = this).portsOut.push(t), this.fireEvent("onPortAdd", t), t;
        }),
        (B.prototype.hasDynamicPort = function () {
          let t = 0;
          for (t = 0; t < this.portsIn.length; t++) {
            if (this.portsIn[t].type == u.OP_PORT_TYPE_DYNAMIC) return !0;
            if ("dyn" == this.portsIn[t].getName()) return !0;
          }
          for (t = 0; t < this.portsOut.length; t++) {
            if (this.portsOut[t].type == u.OP_PORT_TYPE_DYNAMIC) return !0;
            if ("dyn" == this.portsOut[t].getName()) return !0;
          }
          return !1;
        }),
        (B.prototype.addInPort = function (t) {
          if (!(t instanceof et)) throw new Error("parameter is not a port!");
          return (t.direction = c.PORT_DIR_IN), (t.parent = this).portsIn.push(t), this.fireEvent("onPortAdd", t), t;
        }),
        (B.prototype.inFunction = B.prototype.inTrigger =
          function (t, e) {
            const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_FUNCTION));
            return void 0 !== e && i.set(e), i;
          }),
        (B.prototype.inFunctionButton = B.prototype.inTriggerButton =
          function (t, e) {
            const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_FUNCTION, { display: "button" }));
            return void 0 !== e && i.set(e), i;
          }),
        (B.prototype.inFunctionButton = B.prototype.inUiTriggerButtons =
          function (t, e) {
            const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_FUNCTION, { display: "buttons" }));
            return void 0 !== e && i.set(e), i;
          }),
        (B.prototype.inValueFloat =
          B.prototype.inValue =
          B.prototype.inFloat =
            function (t, e) {
              const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE));
              return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
            }),
        (B.prototype.inValueBool = B.prototype.inBool =
          function (t, e) {
            const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "bool" }));
            return void 0 !== e && (i.set(e), (i.defaultValue = i.get())), i;
          }),
        (B.prototype.inValueString = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { type: "string" }));
          return (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
        }),
        (B.prototype.inString = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_STRING, { type: "string" }));
          return (e = e || ""), (i.value = e), i.set(e), (i.defaultValue = e), i;
        }),
        (B.prototype.inValueText = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { type: "string", display: "text" }));
          return (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
        }),
        (B.prototype.inTextarea = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_STRING, { type: "string", display: "text" }));
          return (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
        }),
        (B.prototype.inStringEditor = function (t, e, i, n = !0) {
          const r = this.addInPort(new et(this, t, u.OP_PORT_TYPE_STRING, { type: "string", display: "editor", editorSyntax: i, hideFormatButton: n }));
          return (r.value = ""), void 0 !== e && (r.set(e), (r.defaultValue = e)), r;
        }),
        (B.prototype.inValueEditor = function (t, e, i, n = !0) {
          const r = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { type: "string", display: "editor", editorSyntax: i, hideFormatButton: n }));
          return (r.value = ""), void 0 !== e && (r.set(e), (r.defaultValue = e)), r;
        }),
        (B.prototype.inValueSelect = B.prototype.inDropDown =
          function (t, e, i, n) {
            let r = null;
            if (n) {
              const i = new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "dropdown", hidePort: !0, type: "string", values: e });
              r = this.addInPort(i);
            } else {
              const n = new et(this, t + " index", u.OP_PORT_TYPE_VALUE, { increment: "integer", hideParam: !0 }),
                s = this.addInPort(n),
                o = new nt(this, t, u.OP_PORT_TYPE_VALUE, { display: "dropdown", hidePort: !0, type: "string", values: e }, s);
              if (
                ((o.indexPort = n),
                (n.onLinkChanged = function () {
                  o.setUiAttribs({ greyout: n.isLinked() });
                }),
                (r = this.addInPort(o)),
                void 0 !== i)
              ) {
                r.set(i);
                const t = e.findIndex((t) => t == i);
                s.setValue(t), (r.defaultValue = i), (s.defaultValue = t);
              }
            }
            return r;
          }),
        (B.prototype.inSwitch = function (t, e, i, n) {
          let r = null;
          if (n) {
            const i = new et(this, t, u.OP_PORT_TYPE_STRING, { display: "switch", hidePort: !0, type: "string", values: e });
            r = this.addInPort(i);
          } else {
            const n = new et(this, t + " index", u.OP_PORT_TYPE_VALUE, { increment: "integer", hideParam: !0 }),
              s = this.addInPort(n),
              o = new it(this, t, u.OP_PORT_TYPE_STRING, { display: "switch", hidePort: !0, type: "string", values: e }, s);
            if (
              ((n.onLinkChanged = function () {
                o.setUiAttribs({ greyout: n.isLinked() });
              }),
              (r = this.addInPort(o)),
              void 0 !== i)
            ) {
              r.set(i);
              const t = e.findIndex((t) => t == i);
              s.setValue(t), (r.defaultValue = i), (s.defaultValue = t);
            }
          }
          return r;
        }),
        (B.prototype.inValueInt = B.prototype.inInt =
          function (t, e) {
            const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { increment: "integer" }));
            return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
          }),
        (B.prototype.inFile = function (t, e, i) {
          const n = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "file", type: "string", filter: e }));
          return void 0 !== i && (n.set(i), (n.defaultValue = i)), n;
        }),
        (B.prototype.inUrl = function (t, e, i) {
          const n = this.addInPort(new et(this, t, u.OP_PORT_TYPE_STRING, { display: "file", type: "string", filter: e }));
          return void 0 !== i && (n.set(i), (n.defaultValue = i)), n;
        }),
        (B.prototype.inTexture = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_OBJECT, { display: "texture", objType: "texture", preview: !0 }));
          return void 0 !== e && i.set(e), i;
        }),
        (B.prototype.inObject = function (t, e, i) {
          const n = this.addInPort(new et(this, t, u.OP_PORT_TYPE_OBJECT, { objType: i }));
          return void 0 !== e && n.set(e), n;
        }),
        (B.prototype.inGradient = function (t, e) {
          const i = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "gradient", hidePort: !0 }));
          return void 0 !== e && i.set(e), i;
        }),
        (B.prototype.inArray = function (t, e, i) {
          !i && CABLES.UTILS.isNumeric(e) && (i = e);
          const n = this.addInPort(new et(this, t, u.OP_PORT_TYPE_ARRAY, { stride: i }));
          return void 0 === e || (!Array.isArray(e) && null != e) || n.set(e), n;
        }),
        (B.prototype.inValueSlider = B.prototype.inFloatSlider =
          function (t, e, i, n) {
            const r = { display: "range" };
            null != i && null != n && ((r.min = i), (r.max = n));
            const s = this.addInPort(new et(this, t, u.OP_PORT_TYPE_VALUE, r));
            return void 0 !== e && (s.set(e), (s.defaultValue = e)), s;
          }),
        (B.prototype.outFunction = B.prototype.outTrigger =
          function (t, e) {
            const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_FUNCTION));
            return void 0 !== e && i.set(e), i;
          }),
        (B.prototype.outValue = B.prototype.outNumber =
          function (t, e) {
            const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_VALUE));
            return void 0 !== e && i.set(e), i;
          }),
        (B.prototype.outValueBool = B.prototype.outBool =
          function (t, e) {
            const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "bool" }));
            return void 0 !== e ? i.set(e) : i.set(0), i;
          }),
        (B.prototype.outBoolNum = function (t, e) {
          const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { display: "boolnum" }));
          return (
            (i.set = function (t) {
              this.setValue(t ? 1 : 0);
            }.bind(i)),
            void 0 !== e ? i.set(e) : i.set(0),
            i
          );
        }),
        (B.prototype.outValueString = function (t, e) {
          const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_VALUE, { type: "string" }));
          return void 0 !== e && i.set(e), i;
        }),
        (B.prototype.outString = function (t, e) {
          const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_STRING, { type: "string" }));
          return void 0 !== e ? i.set(e) : i.set(""), i;
        }),
        (B.prototype.outObject = function (t, e, i) {
          const n = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_OBJECT, { objType: i || null }));
          return void 0 !== e && n.set(e), (n.ignoreValueSerialize = !0), n;
        }),
        (B.prototype.outArray = function (t, e, i) {
          !i && CABLES.UTILS.isNumeric(e) && (i = e);
          const n = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_ARRAY, { stride: i }));
          return void 0 === e || (!Array.isArray(e) && null != e) || n.set(e), (n.ignoreValueSerialize = !0), n;
        }),
        (B.prototype.outTexture = function (t, e) {
          const i = this.addOutPort(new et(this, t, u.OP_PORT_TYPE_OBJECT, { preview: !0, objType: "texture" }));
          return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i;
        }),
        (B.prototype.inDynamic = function (t, n, e, i) {
          const r = new et(this, t, u.OP_PORT_TYPE_DYNAMIC, e);
          return (
            (r.shouldLink = function (e, i) {
              if (n && g.isArray(n)) {
                for (let t = 0; t < n.length; t++) {
                  if (e == this && i.type === n[t]) return !0;
                  if (i == this && e.type === n[t]) return !0;
                }
                return !1;
              }
              return !0;
            }),
            this.addInPort(r),
            void 0 !== i && (r.set(i), (r.defaultValue = i)),
            r
          );
        }),
        (B.prototype.printInfo = function () {
          for (let t = 0; t < this.portsIn.length; t++) console.log("in: " + this.portsIn[t].getName());
          for (const t in this.portsOut) console.log("out: " + this.portsOut[t].getName());
        }),
        (B.prototype.getOutChilds = function () {
          const t = [];
          for (const e in this.portsOut) for (const i in this.portsOut[e].links) this.portsOut[e].type == u.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent);
          return t;
        }),
        (B.prototype.markChilds = function () {
          this.marked = !0;
          for (const t in this.portsOut) for (const e in this.portsOut[t].links) (this.portsOut[t].parent.marked = !0), this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds();
        }),
        (B.prototype.selectChilds = function () {
          this.setUiAttrib({ selected: !0 });
          for (const t in this.portsOut) for (const e in this.portsOut[t].links) this.portsOut[t].parent.setUiAttrib({ selected: !0 }), this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.selectChilds();
        }),
        (B.prototype.deleteChilds = function () {
          const t = [];
          for (const e in this.portsOut) for (const i in this.portsOut[e].links) this.portsOut[e].links[i].portIn.parent != this && (this.portsOut[e].parent != this && t.push(this.portsOut[e].parent), t.push(this.portsOut[e].links[i].portIn.parent), this.portsOut[e].links[i].portIn.parent.deleteChilds());
          for (const n in t) this.patch.deleteOp(t[n].id);
        }),
        (B.prototype.removeLinks = function () {
          for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
          for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
        }),
        (B.prototype.countFittingPorts = function (t) {
          let e = 0;
          for (const i in this.portsOut) Ot.canLink(t, this.portsOut[i]) && e++;
          for (const n in this.portsIn) Ot.canLink(t, this.portsIn[n]) && e++;
          return e;
        }),
        (B.prototype.findFittingPort = function (t, e = !1) {
          if (e) {
            for (const e in this.portsIn) if (Ot.canLink(t, this.portsIn[e])) return this.portsIn[e];
            for (const e in this.portsOut) if (Ot.canLink(t, this.portsOut[e])) return this.portsOut[e];
          } else {
            for (const e in this.portsOut) if (Ot.canLink(t, this.portsOut[e])) return this.portsOut[e];
            for (const e in this.portsIn) if (Ot.canLink(t, this.portsIn[e])) return this.portsIn[e];
          }
        }),
        (B.prototype.getSerialized = function (t) {
          const e = {};
          this.opId && (e.opId = this.opId), (e.objName = this.objName), (e.id = this.id), (e.uiAttribs = this.uiAttribs), this.storage && 0 < Object.keys(this.storage).length && (e.storage = this.storage), this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title, this.uiAttribs.hasOwnProperty("working") && 1 == this.uiAttribs.working && delete this.uiAttribs.working, t && this.uiAttribs.hasOwnProperty("uierrors") && delete this.uiAttribs.uierrors, (e.portsIn = []), (e.portsOut = []);
          for (let t = 0; t < this.portsIn.length; t++) e.portsIn.push(this.portsIn[t].getSerialized());
          for (const t in this.portsOut) e.portsOut.push(this.portsOut[t].getSerialized());
          return e;
        }),
        (B.prototype.getFirstOutPortByType = function (t) {
          for (const e in this.portsOut) if (this.portsOut[e].type == t) return this.portsOut[e];
        }),
        (B.prototype.getFirstInPortByType = function (t) {
          for (const e in this.portsIn) if (this.portsIn[e].type == t) return this.portsIn[e];
        }),
        (B.prototype.getPort = B.prototype.getPortByName =
          function (e, t) {
            if (t) {
              for (let t = 0; t < this.portsIn.length; t++) if (this.portsIn[t].getName().toLowerCase() == e) return this.portsIn[t];
              for (let t = 0; t < this.portsOut.length; t++) if (this.portsOut[t].getName().toLowerCase() == e) return this.portsOut[t];
            } else {
              for (let t = 0; t < this.portsIn.length; t++) if (this.portsIn[t].getName() == e) return this.portsIn[t];
              for (let t = 0; t < this.portsOut.length; t++) if (this.portsOut[t].getName() == e) return this.portsOut[t];
            }
          }),
        (B.prototype.getPortById = function (e) {
          for (let t = 0; t < this.portsIn.length; t++) if (this.portsIn[t].id == e) return this.portsIn[t];
          for (let t = 0; t < this.portsOut.length; t++) if (this.portsOut[t].id == e) return this.portsOut[t];
        }),
        (B.prototype.updateAnims = function () {
          for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim();
        }),
        (B.prototype.log = function () {
          var t = "op " + this.objName;
          if ((!CABLES.UI || CABLES.UI.logFilter.shouldPrint(t, ...arguments)) && (CABLES.UI || !this.patch.silent)) {
            const e = ["[op " + this._shortOpName + "]"];
            e.push.apply(e, arguments), Function.prototype.apply.apply(console.log, [console, e]);
          }
        }),
        (B.prototype.error = B.prototype.logError =
          function () {
            const t = ["[op " + this._shortOpName + "]"];
            t.push.apply(t, arguments), Function.prototype.apply.apply(console.error, [console, t]), window.gui && window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
          }),
        (B.prototype.warn = B.prototype.logWarn =
          function () {
            const t = ["[op " + this._shortOpName + "]"];
            t.push.apply(t, arguments), Function.prototype.apply.apply(console.warn, [console, t]);
          }),
        (B.prototype.verbose = B.prototype.logVerbose =
          function () {
            var t = "op " + this._shortOpName;
            if ((!CABLES.UI || CABLES.UI.logFilter.shouldPrint(t, ...arguments)) && (CABLES.UI || !this.patch.silent)) {
              const e = ["[" + t + "]"];
              e.push.apply(e, arguments), Function.prototype.apply.apply(console.info, [console, e]);
            }
          }),
        (B.prototype.unLink = function () {
          for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
          for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
        }),
        (B.prototype.profile = function (t) {
          for (let t = 0; t < this.portsIn.length; t++) (this.portsIn[t]._onTriggered = this.portsIn[t]._onTriggeredProfiling), (this.portsIn[t].set = this.portsIn[t]._onSetProfiling);
        }),
        (B.prototype.findParent = function (e) {
          for (let t = 0; t < this.portsIn.length; t++)
            if (this.portsIn[t].isLinked()) {
              if (this.portsIn[t].links[0].portOut.parent.objName == e) return this.portsIn[t].links[0].portOut.parent;
              var i = null;
              if ((i = this.portsIn[t].links[0].portOut.parent.findParent(e))) return i;
            }
          return null;
        }),
        (B.prototype.cleanUp = function () {
          if (this._instances) {
            for (let t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete();
            this._instances.length = 0;
          }
        }),
        (B.prototype.instanced = function (t) {
          if ((console.log("instanced", this.patch.instancing.numCycles()), 0 === this.patch.instancing.numCycles())) return !1;
          let e = 0,
            i = 0;
          if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
            for (this._instances || (this._instances = []), this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
              (this._instances[e] = this.patch.createOp(this.objName, !0)),
                (this._instances[e].instanced = function () {
                  return !1;
                }),
                this._instances[e].uiAttr(this.uiAttribs);
              for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].type == u.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[t].name).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]));
            }
            for (i = 0; i < this.portsIn.length; i++) (this.portsIn[i].onChange = null), (this.portsIn[i].onValueChanged = null);
          }
          for (i = 0; i < this.portsIn.length; i++) (this.portsIn[i].type != u.OP_PORT_TYPE_VALUE && this.portsIn[i].type != u.OP_PORT_TYPE_ARRAY) || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()), this.portsIn[i].type, u;
          for (i = 0; i < this.portsOut.length; i++) this.portsOut[i].type == u.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
          return !0;
        }),
        (B.prototype.initInstancable = function () {}),
        (B.prototype.setValues = function (t) {
          for (const e in t) {
            const i = this.getPortByName(e);
            i ? i.set(t[e]) : this._log.warn("op.setValues: port not found:", e);
          }
        }),
        (B.prototype.setUiError = function (t, e, i) {
          if ((e || this.hasUiErrors) && (e || this._uiErrors.hasOwnProperty(t)) && (!this._uiErrors.hasOwnProperty(t) || this._uiErrors[t].txt != e)) {
            -1 < t.indexOf(" ") && this._log.warn("setuierror id cant have spaces! ", t), !e && this._uiErrors.hasOwnProperty(t) ? delete this._uiErrors[t] : !e || (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e) || (this._uiErrors[t] = { txt: e, level: (i = null == i ? 2 : i), id: t });
            const n = [];
            for (const t in this._uiErrors) n.push(this._uiErrors[t]);
            this.uiAttr({ uierrors: n }), (this.hasUiErrors = Object.keys(this._uiErrors).length), console.log(t, e, this._uiErrors.hasOwnProperty(t));
          }
        }),
        (B.prototype.setError = function (t, e) {
          this._log.warn("old error message op.error() - use op.setUiError()");
        }),
        (B.prototype.addListener = B.prototype.addEventListener =
          function (t, e) {
            this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : (this._eventCallbacks[t] = [e]);
          }),
        (B.prototype.hasEventListener = function (t, e) {
          if (t && e) {
            if (this._eventCallbacks[t]) return -1 != this._eventCallbacks[t].indexOf(e);
          } else this._log.warn("hasListener: missing parameters");
        }),
        (B.prototype.removeEventListener = function (t, e) {
          this._eventCallbacks[t] && (-1 == (e = this._eventCallbacks[t].indexOf(e)) ? this._log.warn("eventlistener " + t + " not found...") : this._eventCallbacks[t].slice(e));
        }),
        (B.prototype.fireEvent = function (e, i) {
          if (this._eventCallbacks[e]) for (let t = 0; t < this._eventCallbacks[e].length; t++) this._eventCallbacks[e][t] && this._eventCallbacks[e][t].cb(i);
          this.onUiAttrChange && "onUiAttribsChange" == e && this.onUiAttrChange(i);
        }),
        (B.prototype.setEnabled = function (t) {
          (this.enabled = t), this.fireEvent("onEnabledChange", t);
        }),
        (B.prototype.setPortGroup = function (e, i) {
          for (let t = 0; t < i.length; t++) i[t] && (i[t].setUiAttribs ? i[t].setUiAttribs({ group: e }) : this._log.error("setPortGroup: invalid port!"));
        }),
        (B.prototype.setUiAxisPorts = function (t, e, i) {
          t && t.setUiAttribs({ axis: "X" }), e && e.setUiAttribs({ axis: "Y" }), i && i.setUiAttribs({ axis: "Z" });
        }),
        (B.prototype.removePort = function (e) {
          for (let t = 0; t < this.portsIn.length; t++) if (this.portsIn[t] == e) return this.portsIn.splice(t, 1), this.fireEvent("onUiAttribsChange", {}), void this.fireEvent("onPortRemoved", {});
        }),
        (B.prototype._checkLinksNeededToWork = function () {}),
        (B.prototype.toWorkNeedsParent = function (t) {
          this.patch.isEditorMode() && (this._needsParentOp = t);
        }),
        (B.prototype.toWorkPortsNeedToBeLinked = function () {
          if (this.patch.isEditorMode()) for (let t = 0; t < arguments.length; t++) -1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t]);
        }),
        (B.prototype.toWorkPortsNeedToBeLinkedReset = function () {
          this.patch.isEditorMode() && ((this._needsLinkedToWork.length = 0), this.checkLinkTimeWarnings && this.checkLinkTimeWarnings());
        }),
        (B.prototype.initVarPorts = function () {
          for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].getVariableName() && this.portsIn[t].setVariable(this.portsIn[t].getVariableName());
        }),
        (B.prototype.refreshParams = function () {
          this.patch && this.patch.isEditorMode() && this.isCurrentUiOp() && gui.opParams.show(this);
        }),
        (B.prototype.isCurrentUiOp = function () {
          if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
        }),
        (B.prototype.renderVizLayer = null);
    }
    (B.getNamespaceClassName = function (t) {
      return t ? (t.startsWith("Ops.Gl") ? "gl" : t.startsWith("Ops.WebAudio") ? "audio" : t.startsWith("Ops.Devices") ? "devices" : t.startsWith("Ops.Html") || t.startsWith("Ops.Sidebar") ? "html" : t.startsWith("Ops.Math") ? "math" : t.startsWith("Ops.User") ? "user" : "default") : "default";
    }),
      (B.isSubpatchOp = function (t) {
        return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t;
      });
    function It(t) {
      CABLES.EventTarget.apply(this), (this._log = new d("LoadingStatus")), (this._loadingAssets = {}), (this._cbFinished = []), (this._assetTasks = []), (this._percent = 0), (this._count = 0), (this._countFinished = 0), (this._order = 0), (this._startTime = 0), (this._patch = t), (this._wasFinishedPrinted = !1), (this._loadingAssetTaskCb = !1);
    }
    (It.prototype.setOnFinishedLoading = function (t) {
      this._cbFinished.push(t);
    }),
      (It.prototype.getNumAssets = function () {
        return this._countFinished;
      }),
      (It.prototype.getProgress = function () {
        return this._percent;
      }),
      (It.prototype.checkStatus = function () {
        (this._countFinished = 0), (this._count = 0);
        for (const t in this._loadingAssets) this._count++, this._loadingAssets[t].finished || this._countFinished++;
        if (((this._percent = (this._count - this._countFinished) / this._count), 0 === this._countFinished)) {
          for (let t = 0; t < this._cbFinished.length; t++)
            if (this._cbFinished[t]) {
              const e = this._cbFinished[t];
              setTimeout(() => {
                e(this._patch), this.emitEvent("finishedAll");
              }, 100);
            }
          this._wasFinishedPrinted || ((this._wasFinishedPrinted = !0), this.print()), this.emitEvent("finishedAll");
        }
      }),
      (It.prototype.getList = function () {
        let t = [];
        for (const e in this._loadingAssets) t.push(this._loadingAssets[e]);
        return t;
      }),
      (It.prototype.getListJobs = function () {
        let t = [];
        for (const e in this._loadingAssets) this._loadingAssets[e].finished || t.push(this._loadingAssets[e].name);
        return t;
      }),
      (It.prototype.print = function () {
        if (!this._patch.config.silent) {
          const t = [];
          for (const e in this._loadingAssets) t.push([this._loadingAssets[e].order, this._loadingAssets[e].type, this._loadingAssets[e].name, (this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1e3 + "s"]);
          this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1e3 + "s"), this._log.table(t), this._log.groupEnd();
        }
      }),
      (It.prototype.finished = function (t) {
        this._loadingAssets[t] && ((this._loadingAssets[t].finished = !0), (this._loadingAssets[t].timeEnd = Date.now())), this.checkStatus(), this.emitEvent("finishedTask");
      }),
      (It.prototype._startAssetTasks = function () {
        for (let t = 0; t < this._assetTasks.length; t++) this._assetTasks[t]();
        this._assetTasks.length = 0;
      }),
      (It.prototype.addAssetLoadingTask = function (t) {
        this._patch.isEditorMode() && !CABLES.UI.loaded ? (this._assetTasks.push(t), this._loadingAssetTaskCb || window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this)), (this._loadingAssetTaskCb = !0)) : t(), this.emitEvent("addAssetTask");
      }),
      (It.prototype.existByName = function (t) {
        for (var e in this._loadingAssets) if (this._loadingAssets[e].name == t && !this._loadingAssets[e].finished) return !0;
      }),
      (It.prototype.start = function (t, e) {
        0 == this._startTime && (this._startTime = Date.now());
        var i = v();
        return (this._loadingAssets[i] = { id: i, type: t, name: e, finished: !1, timeStart: Date.now(), order: this._order }), this._order++, this.emitEvent("startTask"), i;
      });
    function Ct() {
      (this._loops = []), (this._indizes = []), (this._index = 0);
    }
    (Ct.prototype.pushLoop = function (t) {
      this._loops.push(Math.abs(Math.floor(t))), this._indizes.push(this._index);
    }),
      (Ct.prototype.popLoop = function () {
        this._loops.pop(), (this._index = this._indizes.pop()), 0 === this._loops.length && (this._index = 0);
      }),
      (Ct.prototype.numLoops = function () {
        return this._loops.length;
      }),
      (Ct.prototype.numCycles = function () {
        if (0 === this._loops.length) return 0;
        let e = this._loops[0];
        for (let t = 1; t < this._loops.length; t++) e *= this._loops[t];
        return e;
      }),
      (Ct.prototype.inLoop = function () {
        return 0 < this._loops.length;
      }),
      (Ct.prototype.increment = function () {
        this._index++;
      }),
      (Ct.prototype.index = function () {
        return this._index;
      });
    function Nt(i) {
      this.startFrame = i.getFrameNum();
      let n = {},
        r = null,
        s = 0;
      (this.getItems = function () {
        return n;
      }),
        (this.clear = function () {
          n = {};
        }),
        (this.add = function (t, e) {
          null !== r && ((e && e.id == r) || (n[r] && ((n[r].timeUsed += performance.now() - s), (!n[r].peakTime || 5e3 < gt() - n[r].peakTime) && ((n[r].peak = 0), (n[r].peakTime = gt())), (n[r].peak = Math.max(n[r].peak, performance.now() - s))))),
            null !== e ? (n[e.id] || (n[e.id] = { numTriggers: 0, timeUsed: 0 }), n[e.id].lastFrame != i.getFrameNum() && (n[e.id].numTriggers = 0), (n[e.id].lastFrame = i.getFrameNum()), n[e.id].numTriggers++, (n[e.id].opid = e.parent.id), (n[e.id].title = e.parent.name + "." + e.name), (n[e.id].subPatch = e.parent.uiAttribs.subPatch), (r = e.id), (s = performance.now())) : (r = null);
        }),
        (this.print = function () {
          console.log("--------");
          for (const t in n) console.log(n[t].title + ": " + n[t].numTriggers + " / " + n[t].timeUsed);
        });
    }
    var Pt = class {
      constructor(t, e, i) {
        (this._name = t), (this._changeListeners = []), (this.type = i), this.setValue(e);
      }
      getValue() {
        return this._v;
      }
      getName() {
        return this._name;
      }
      setValue(e) {
        this._v = e;
        for (let t = 0; t < this._changeListeners.length; t++) this._changeListeners[t](e, this);
      }
      addListener(t) {
        -1 == this._changeListeners.indexOf(t) && this._changeListeners.push(t);
      }
      removeListener(t) {
        t = this._changeListeners.indexOf(t);
        this._changeListeners.splice(t, 1);
      }
    };
    function Rt(t) {
      X.apply(this),
        (this._log = new d("core_patch")),
        (this.ops = []),
        (this.settings = {}),
        (this.config = t || { glCanvasResizeToWindow: !1, prefixAssetPath: "", prefixJsPath: "", silent: !0, onError: null, onFinishedLoading: null, onFirstFrameRendered: null, onPatchLoaded: null, fpsLimit: 0 }),
        (this.timer = new dt()),
        (this.freeTimer = new dt()),
        (this.animFrameOps = []),
        (this.animFrameCallbacks = []),
        (this.gui = !1),
        (CABLES.logSilent = this.silent = !0),
        (this.profiler = null),
        (this.aborted = !1),
        (this._crashedOps = []),
        (this._renderOneFrame = !1),
        (this._animReq = null),
        (this._opIdCache = {}),
        (this._triggerStack = []),
        (this.loading = new It(this)),
        (this._perf = { fps: 0, ms: 0, _fpsFrameCount: 0, _fpsMsCount: 0, _fpsStart: 0 }),
        (this._volumeListeners = []),
        (this._paused = !1),
        (this._frameNum = 0),
        (this.instancing = new Ct()),
        (this.onOneFrameRendered = null),
        (this.namedTriggers = {}),
        (this._origData = null),
        (this._frameNext = 0),
        (this._frameInterval = 0),
        (this._lastFrameTime = 0),
        (this._frameWasdelayed = !0),
        (function () {
          return !this;
        })() || this._log.warn("not in strict mode: core patch"),
        (this._isLocal = 0 === document.location.href.indexOf("file:")),
        this.config.hasOwnProperty("silent") && (this.silent = CABLES.logSilent = this.config.silent),
        this.config.hasOwnProperty("doRequestAnimation") || (this.config.doRequestAnimation = !0),
        this.config.prefixAssetPath || (this.config.prefixAssetPath = ""),
        this.config.prefixJsPath || (this.config.prefixJsPath = ""),
        this.config.masterVolume || (this.config.masterVolume = 1),
        (this._variables = {}),
        (this._variableListeners = []),
        (this.vars = {}),
        t && t.vars && (this.vars = t.vars),
        (this.cgl = new St(this)),
        this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas"),
        !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize("window"),
        !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize("parent"),
        this.loading.setOnFinishedLoading(this.config.onFinishedLoading),
        this.cgl.aborted && (this.aborted = !0),
        this.cgl.silent && (this.silent = !0),
        this.freeTimer.play(),
        this.exec(),
        this.aborted ||
          (this.config.patch
            ? this.deSerialize(this.config.patch)
            : this.config.patchFile &&
              L(this.config.patchFile, (t, e) => {
                e = JSON.parse(e);
                if (t) return this._log.error("err", t), this._log.error("data", e), void this._log.error("data", e.msg);
                this.deSerialize(e);
              }),
          this.timer.play()),
        console.log("made with https://cables.gl");
    }
    (Rt.prototype.isPlaying = function () {
      return !this._paused;
    }),
      (Rt.prototype.isRenderingOneFrame = function () {
        return this._renderOneFrame;
      }),
      (Rt.prototype.renderOneFrame = function () {
        (this._paused = !0), (this._renderOneFrame = !0), this.exec(), (this._renderOneFrame = !1);
      }),
      (Rt.prototype.getFPS = function () {
        return this._perf.fps;
      }),
      (Rt.prototype.isEditorMode = function () {
        return !0 === this.config.editorMode;
      }),
      (Rt.prototype.pause = function () {
        cancelAnimationFrame(this._animReq), this.emitEvent("pause"), (this._animReq = null), (this._paused = !0), this.freeTimer.pause();
      }),
      (Rt.prototype.resume = function () {
        this._paused && (cancelAnimationFrame(this._animReq), (this._paused = !1), this.freeTimer.play(), this.emitEvent("resume"), this.exec());
      }),
      (Rt.prototype.setVolume = function (e) {
        this.config.masterVolume = e;
        for (let t = 0; t < this._volumeListeners.length; t++) this._volumeListeners[t].onMasterVolumeChanged(e);
      }),
      (Rt.prototype.getAssetPath = function () {
        if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";
        if (0 < document.location.href.indexOf("cables.gl")) {
          var t = document.location.href.split("/");
          return "/assets/" + t[t.length - 1] + "/";
        }
        return "assets/";
      }),
      (Rt.prototype.getFilePath = function (t) {
        return this._isLocal && !this.config.allowLocalFileAccess && this.exitError("localAccess", "Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this."), t && (0 === (t = String(t)).indexOf("https:") || 0 === t.indexOf("http:") || 0 === t.indexOf("data:") ? t : ((t = t.replace("//", "/")), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || "")));
      }),
      (Rt.prototype.clear = function () {
        for (this.emitEvent("patchClearStart"), this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new dt(); 0 < this.ops.length; ) this.deleteOp(this.ops[0].id);
        this.emitEvent("patchClearEnd");
      }),
      (Rt.getOpClass = function (t) {
        var e = t.split(".");
        let i = null;
        try {
          return (
            2 == e.length
              ? (i = window[e[0]][e[1]])
              : 3 == e.length
              ? (i = window[e[0]][e[1]][e[2]])
              : 4 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]])
              : 5 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]])
              : 6 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]])
              : 7 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]])
              : 8 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]])
              : 9 == e.length
              ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]])
              : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]),
            i
          );
        } catch (t) {
          return null;
        }
      }),
      (Rt.prototype.createOp = function (t, e) {
        const i = t.split(".");
        let n = null,
          r = "";
        try {
          if (-1 == t.indexOf("Ops.")) {
            const i = t;
            if (!CABLES.OPS[i]) throw new Error("could not find op by id: " + i);
            (r = CABLES.OPS[i].objName), (n = new CABLES.OPS[i].f(this, r, e, i)), (n.opId = i);
          }
          if (!n) {
            if (((r = t), !Rt.getOpClass(r))) throw (this.emitEvent("criticalError", "unknown op", "unknown op: " + r), this._log.error("unknown op: " + r), new Error("unknown op: " + r));
            if (
              (2 == i.length
                ? (n = new window[i[0]][i[1]](this, r, e))
                : 3 == i.length
                ? (n = new window[i[0]][i[1]][i[2]](this, r, e))
                : 4 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]](this, r, e))
                : 5 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e))
                : 6 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e))
                : 7 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e))
                : 8 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e))
                : 9 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e))
                : 10 == i.length
                ? (n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e))
                : this._log.warn("parts.length", i.length),
              n)
            ) {
              n.opId = null;
              for (const t in CABLES.OPS) CABLES.OPS[t].objName == r && (n.opId = t);
            }
          }
        } catch (t) {
          if ((this._crashedOps.push(r), this.emitEvent("exceptionOp", t, r, n), !this.isEditorMode())) throw (this._log.error(t), this._log.error("[instancing error] " + r, t), CABLES.api && CABLES.api.sendErrorReport(t), this.exitError("INSTANCE_ERR", "Instancing Error " + r, t), new Error("instancing error " + r));
        }
        return n ? ((n.objName = r), (n.patch = this)) : this._log.log("no op was created!?", t, e), n;
      }),
      (Rt.prototype.addOp = function (t, e, i, n) {
        const r = this.createOp(t, i);
        if (r) {
          if ((e && e.hasOwnProperty("errors") && delete e.errors, e && e.hasOwnProperty("error") && delete e.error, r.uiAttr(e), r.onCreate && r.onCreate(), r.hasOwnProperty("onAnimFrame") && this.addOnAnimFrame(r), r.hasOwnProperty("onMasterVolumeChanged") && this._volumeListeners.push(r), this._opIdCache[r.id])) return void this._log.warn("opid with id " + r.id + " already exists in patch!");
          this.ops.push(r), (this._opIdCache[r.id] = r), this.emitEvent("onOpAdd", r, n), r.init && r.init();
        } else this._log.error("addop: no op.....");
        return r;
      }),
      (Rt.prototype.addOnAnimFrame = function (e) {
        for (let t = 0; t < this.animFrameOps.length; t++) if (this.animFrameOps[t] == e) return;
        this.animFrameOps.push(e);
      }),
      (Rt.prototype.removeOnAnimFrame = function (e) {
        for (let t = 0; t < this.animFrameOps.length; t++) if (this.animFrameOps[t] == e) return void this.animFrameOps.splice(t, 1);
      }),
      (Rt.prototype.addOnAnimFrameCallback = function (t) {
        this.animFrameCallbacks.push(t);
      }),
      (Rt.prototype.removeOnAnimCallback = function (e) {
        for (let t = 0; t < this.animFrameCallbacks.length; t++) if (this.animFrameCallbacks[t] == e) return void this.animFrameCallbacks.splice(t, 1);
      }),
      (Rt.prototype.deleteOp = function (i, n, r) {
        let s = !1;
        for (const o in this.ops)
          if (this.ops[o].id == i) {
            const a = this.ops[o];
            let t = null,
              e = null;
            if (a) {
              (s = !0), n && 0 < a.portsIn.length && a.portsIn[0].isLinked() && 0 < a.portsOut.length && a.portsOut[0].isLinked() && a.portsIn[0].getType() == a.portsOut[0].getType() && ((t = a.portsIn[0].links[0].getOtherPort(a.portsIn[0])), (e = a.portsOut[0].links[0].getOtherPort(a.portsOut[0])));
              const l = this.ops[o];
              l.removeLinks(), l.emitEvent("onDelete", this.ops[o]), this.onDelete && (this._log.warn("deprecated this.onDelete", this.onDelete), this.onDelete(l)), this.ops.splice(o, 1), this.emitEvent("onOpDelete", l, r), l.onDelete && l.onDelete(r), l.cleanUp(), null !== t && null !== e && this.link(t.parent, t.getName(), e.parent, e.getName()), delete this._opIdCache[i];
              break;
            }
          }
        s || this._log.warn("core patch deleteop: not found...");
      }),
      (Rt.prototype.getFrameNum = function () {
        return this._frameNum;
      }),
      (Rt.prototype.renderFrame = function (t) {
        this.timer.update(), this.freeTimer.update();
        var e = this.timer.getTime(),
          i = performance.now();
        for (let t = 0; t < this.animFrameCallbacks.length; ++t) this.animFrameCallbacks[t] && this.animFrameCallbacks[t](e, this._frameNum);
        for (let t = 0; t < this.animFrameOps.length; ++t) this.animFrameOps[t].onAnimFrame && this.animFrameOps[t].onAnimFrame(e);
        (this.cgl.profileData.profileOnAnimFrameOps = performance.now() - i), this.emitEvent("onRenderFrame", e), this._frameNum++, 1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered();
      }),
      (Rt.prototype.exec = function (t) {
        if (this._renderOneFrame || (!this._paused && !this.aborted)) {
          (this.config.fpsLimit = this.config.fpsLimit || 0), this.config.fpsLimit && (this._frameInterval = 1e3 / this.config.fpsLimit);
          var e = CABLES.now(),
            i = e - this._frameNext;
          if (this.isEditorMode() && !this._renderOneFrame && 500 <= e - this._lastFrameTime && 0 !== this._lastFrameTime && !this._frameWasdelayed) return (this._lastFrameTime = 0), setTimeout(this.exec.bind(this), 500), this.emitEvent("renderDelayStart"), void (this._frameWasdelayed = !0);
          if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
            const t = CABLES.now();
            this.renderFrame(), (this._perf._lastFrameTime = CABLES.now()), this._perf._fpsFrameCount++, (this._perf._fpsMsCount += CABLES.now() - t), this._frameInterval && (this._frameNext = e - (i % this._frameInterval));
          }
          this._frameWasdelayed && (this.emitEvent("renderDelayEnd"), (this._frameWasdelayed = !1)),
            this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent("renderedOneFrame"), (this._renderOneFrame = !1)),
            1e3 <= CABLES.now() - this._perf._fpsStart && this._perf.fps != this._perf._fpsFrameCount && ((this._perf.fps = this._perf._fpsFrameCount), (this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount)), this.emitEvent("performance", this._perf), (this._perf._fpsFrameCount = 0), (this._perf._fpsMsCount = 0), (this._perf._fpsStart = CABLES.now())),
            this.config.doRequestAnimation && (this._animReq = requestAnimationFrame(this.exec.bind(this)));
        }
      }),
      (Rt.prototype.link = function (t, e, i, n, r, s) {
        if (t)
          if (i) {
            const o = t.getPort(e, r),
              a = i.getPort(n, r);
            if (o)
              if (a) {
                if (!o.shouldLink(o, a) || !a.shouldLink(o, a)) return !1;
                if (Ot.canLink(o, a)) {
                  const t = new Ot(this);
                  return t.link(o, a), this.emitEvent("onLink", o, a, t, s), t;
                }
              } else this._log.warn("port not found! " + n + " of " + i.name + "(" + i.objName + ")");
            else this._log.warn("port not found! " + e + "(" + t.objName + ")");
          } else this._log.warn("link: op2 is null");
        else this._log.warn("link: op1 is null ");
      }),
      (Rt.prototype.serialize = function (t) {
        const e = {};
        (t = t || {}).hasOwnProperty("removeBlueprints") || (t.removeBlueprints = !0), t.hasOwnProperty("removeFromNetworkAttr") || (t.removeFromNetworkAttr = !0), (e.ops = []), (e.settings = this.settings);
        for (const i in this.ops) {
          const n = this.ops[i];
          (t.removeBlueprints && n.storage && n.storage.blueprint) || (t.removeFromNetworkAttr && n.uiAttribs && n.uiAttribs.hasOwnProperty("fromNetwork") && delete n.uiAttribs.fromNetwork, e.ops.push(n.getSerialized()));
        }
        return t.asObject ? e : JSON.stringify(e);
      }),
      (Rt.prototype.getOpById = function (t) {
        return this._opIdCache[t];
      }),
      (Rt.prototype.getOpsByName = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
        return e;
      }),
      (Rt.prototype.getOpsByObjName = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].objName == t && e.push(this.ops[i]);
        return e;
      }),
      (Rt.prototype.loadLib = function (t) {
        R(
          "/ui/libs/" + t + ".js",
          (t, e) => {
            const i = document.createElement("script");
            (i.type = "text/javascript"), (i.text = e), document.getElementsByTagName("head")[0].appendChild(i);
          },
          "GET"
        );
      }),
      (Rt.prototype.reloadOp = function (i, n) {
        let r = 0;
        const s = [],
          e = [];
        for (const n in this.ops) this.ops[n].objName == i && e.push(this.ops[n]);
        for (let t = 0; t < e.length; t++) {
          r++;
          const o = e[t];
          o.deleted = !0;
          const a = this.addOp(i, o.uiAttribs);
          if (a) {
            let t, e;
            for (t in (o && o.storage && (a.storage = o.storage), s.push(a), o.portsIn))
              if (0 === o.portsIn[t].links.length) {
                const i = a.getPort(o.portsIn[t].name);
                i ? (i.set(o.portsIn[t].get()), o.portsIn[t].getVariableName() && i.setVariable(o.portsIn[t].getVariableName())) : this._log.error("[reloadOp] could not set port " + o.portsIn[t].name + ", propably renamed port ?");
              } else
                for (; o.portsIn[t].links.length; ) {
                  const i = o.portsIn[t].links[0].portIn.name,
                    n = o.portsIn[t].links[0].portOut.name,
                    r = o.portsIn[t].links[0].portOut.parent;
                  o.portsIn[t].links[0].remove(), (e = this.link(a, i, r, n)), e ? e.setValue() : this._log.warn("[reloadOp] relink after op reload not successfull for port " + n);
                }
            for (t in o.portsOut)
              for (; o.portsOut[t].links.length; ) {
                const i = o.portsOut[t].links[0].portOut.name,
                  n = o.portsOut[t].links[0].portIn.name,
                  r = o.portsOut[t].links[0].portIn.parent;
                o.portsOut[t].links[0].remove(), (e = this.link(a, i, r, n)), e ? e.setValue() : this._log.warn("relink after op reload not successfull for port " + n);
              }
            this.deleteOp(o.id, !1, !0);
          }
        }
        n(r, s);
      }),
      (Rt.prototype.getSubPatchOps = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i]);
        return e;
      }),
      (Rt.prototype.getSubPatchOp = function (t, e) {
        for (const i in this.ops) if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i];
        return !1;
      }),
      (Rt.prototype._addLink = function (t, e, i, n) {
        this.link(this.getOpById(t), i, this.getOpById(e), n, !1, !0);
      }),
      (Rt.prototype.deSerialize = function (n, e) {
        if (!this.aborted) {
          const r = [],
            s = this.loading.start("core", "deserialize");
          (this.namespace = n.namespace || ""), (this.name = n.name || ""), "string" == typeof n && (n = JSON.parse(n)), (this.settings = n.settings), this.emitEvent("patchLoadStart");
          for (const s in n.ops) {
            const o = CABLES.now(),
              a = n.ops[s];
            let t = null;
            try {
              t = a.opId ? this.addOp(a.opId, a.uiAttribs, a.id, !0) : this.addOp(a.objName, a.uiAttribs, a.id, !0);
            } catch (n) {
              throw (this._log.warn("[instancing error] op data:", a, n), new Error("instancing error: " + a.objName));
            }
            if (t) {
              e && (t.id = E()), (t.portsInData = a.portsIn), (t._origData = a), (t.storage = a.storage);
              for (const n in a.portsIn) {
                const e = a.portsIn[n],
                  r = t.getPort(e.name);
                !r || ("bool" != r.uiAttribs.display && "bool" != r.uiAttribs.type) || isNaN(e.value) || (e.value = !0 === e.value), r && void 0 !== e.value && r.type != u.OP_PORT_TYPE_TEXTURE && r.set(e.value), r && r.deSerializeSettings(e);
              }
              for (const e in a.portsOut) {
                const r = t.getPort(a.portsOut[e].name);
                r && r.type != u.OP_PORT_TYPE_TEXTURE && a.portsOut[e].hasOwnProperty("value") && r.set(n.ops[s].portsOut[e].value);
              }
              r.push(t);
            }
            var i = Math.round(100 * (CABLES.now() - o)) / 100;
            !this.silent && 200 < i && this._log.warn("long op init ", n.ops[s].objName, i);
          }
          for (const n in this.ops) this.ops[n].onLoadedValueSet && (this.ops[n].onLoadedValueSet(this.ops[n]._origData), (this.ops[n].onLoadedValueSet = null), (this.ops[n]._origData = null));
          if (n.ops)
            for (let i = 0; i < n.ops.length; i++) {
              if (n.ops[i].portsIn) for (let e = 0; e < n.ops[i].portsIn.length; e++) if (n.ops[i].portsIn[e].links) for (let t = 0; t < n.ops[i].portsIn[e].links.length; t++) n.ops[i].portsIn[e].links[t] && this._addLink(n.ops[i].portsIn[e].links[t].objIn, n.ops[i].portsIn[e].links[t].objOut, n.ops[i].portsIn[e].links[t].portIn, n.ops[i].portsIn[e].links[t].portOut);
              if (n.ops[i].portsOut) for (let e = 0; e < n.ops[i].portsOut.length; e++) if (n.ops[i].portsOut[e].links) for (let t = 0; t < n.ops[i].portsOut[e].links.length; t++) n.ops[i].portsOut[e].links[t] && this._addLink(n.ops[i].portsOut[e].links[t].objIn, n.ops[i].portsOut[e].links[t].objOut, n.ops[i].portsOut[e].links[t].portIn, n.ops[i].portsOut[e].links[t].portOut);
            }
          for (const n in this.ops) this.ops[n].onLoaded && (this.ops[n].onLoaded(), (this.ops[n].onLoaded = null));
          for (const n in this.ops) this.ops[n].init && (this.ops[n].init(), (this.ops[n].init = null));
          if (this.config.variables) for (const n in this.config.variables) this.setVarValue(n, this.config.variables[n]);
          for (const n in this.ops) this.ops[n].initVarPorts(), delete this.ops[n].uiAttribs.pasted;
          setTimeout(() => {
            this.loading.finished(s);
          }, 100),
            this.config.onPatchLoaded && this.config.onPatchLoaded(this),
            this.emitEvent("patchLoadEnd", r, n, e);
        }
      }),
      (Rt.prototype.profile = function (t) {
        this.profiler = new Nt(this);
        for (const e in this.ops) this.ops[e].profile(t);
      }),
      (Rt.prototype.setVariable = function (t, e) {
        void 0 !== this._variables[t] ? this._variables[t].setValue(e) : this._log.warn("variable " + t + " not found!");
      }),
      (Rt.prototype._sortVars = function () {
        if (this.isEditorMode()) {
          const e = {};
          Object.keys(this._variables)
            .sort((t, e) => t.localeCompare(e, "en", { sensitivity: "base" }))
            .forEach((t) => {
              e[t] = this._variables[t];
            }),
            (this._variables = e);
        }
      }),
      (Rt.prototype.hasVar = function (t) {
        return void 0 !== this._variables[t];
      }),
      (Rt.prototype.setVarValue = function (t, e, i) {
        return this.hasVar(t) ? this._variables[t].setValue(e) : ((this._variables[t] = new Pt(t, e, i)), this._sortVars(), this.emitEvent("variablesChanged")), this._variables[t];
      }),
      (Rt.prototype.getVarValue = function (t, e) {
        if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue();
      }),
      (Rt.prototype.getVar = function (t) {
        if (this._variables.hasOwnProperty(t)) return this._variables[t];
      }),
      (Rt.prototype.deleteVar = function (i) {
        for (let e = 0; e < this.ops.length; e++) for (let t = 0; t < this.ops[e].portsIn.length; t++) this.ops[e].portsIn[t].getVariableName() == i && this.ops[e].portsIn[t].setVariable(null);
        delete this._variables[i], this.emitEvent("variableDeleted", i), this.emitEvent("variablesChanged");
      }),
      (Rt.prototype.getVars = function (t) {
        if (void 0 === t) return this._variables;
        const e = [];
        (t = (t = (t = t == CABLES.OP_PORT_TYPE_STRING ? "string" : t) == CABLES.OP_PORT_TYPE_VALUE ? "number" : t) == CABLES.OP_PORT_TYPE_ARRAY ? "array" : t) == CABLES.OP_PORT_TYPE_OBJECT && (t = "object");
        for (const i in this._variables) (this._variables[i].type && this._variables[i].type != t) || e.push(this._variables[i]);
        return e;
      }),
      (Rt.prototype.exitError = function (e, i, n) {
        if (((this.aborted = !0), this && this.config && this.config.onError)) this.config.onError(e, i);
        else if (!this.isEditorMode()) {
          const r = document.createElement("div"),
            s = this.cgl.canvas.getBoundingClientRect();
          r.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;"), (r.style.top = s.top + "px"), (r.style.left = s.left + "px");
          let t = "cables - An error occured:<br/>";
          (t += "[" + e + "] - " + i), n && (t += "<br/>Exception: " + n.message), (r.innerHTML = t);
          const o = this.cgl.canvas.parentElement;
          for (; o.hasChildNodes(); ) o.removeChild(o.lastChild);
          document.body.appendChild(r);
        }
      }),
      (Rt.prototype.preRenderOps = function () {
        this._log.log("prerendering...");
        for (let t = 0; t < this.ops.length; t++) this.ops[t].preRender && (this.ops[t].preRender(), this._log.log("prerender " + this.ops[t].objName));
      }),
      (Rt.prototype.dispose = function () {
        this.pause(), this.clear();
      }),
      (Rt.prototype.pushTriggerStack = function (t) {
        this._triggerStack.push(t);
      }),
      (Rt.prototype.popTriggerStack = function () {
        this._triggerStack.pop();
      }),
      (Rt.prototype.printTriggerStack = function () {
        if (0 != this._triggerStack.length) {
          console.groupCollapsed("trigger port stack " + this._triggerStack[this._triggerStack.length - 1].parent.name + "." + this._triggerStack[this._triggerStack.length - 1].name);
          const e = [];
          for (let t = 0; t < this._triggerStack.length; t++) e.push(t + ". " + this._triggerStack[t].parent.name + " " + this._triggerStack[t].name);
          console.table(e), console.groupEnd();
        } else console.log("stack length", this._triggerStack.length);
      });
    var Lt = Rt;
    const wt = {
        addPatch: function (t, e) {
          let i = t,
            n = v();
          if ("string" != typeof t || ((n = t), (i = document.getElementById(n)), i)) {
            const r = document.createElement("canvas");
            return (
              (r.id = "glcanvas_" + n),
              (r.width = i.clientWidth),
              (r.height = i.clientHeight),
              window.addEventListener(
                "resize",
                function () {
                  this.setAttribute("width", i.clientWidth), (this.height = i.clientHeight);
                }.bind(r)
              ),
              i.appendChild(r),
              ((e = e || {}).glCanvasId = r.id),
              e.onError ||
                (e.onError = function (t) {
                  console.error(t);
                }),
              (CABLES.patch = new Lt(e)),
              r
            );
          }
          console.error(n + " Polyshape Container Element not found!");
        },
      },
      Dt = {
        toneJsInitialized: !1,
        createAudioContext: function (t) {
          if (((window.AudioContext = window.AudioContext || window.webkitAudioContext), window.AudioContext)) return window.audioContext || (window.audioContext = new AudioContext()), window.Tone && !Dt.toneJsInitialized && (Tone.setContext(window.audioContext), (Dt.toneJsInitialized = !0)), window.audioContext;
          t.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        },
        getAudioContext: function () {
          return window.audioContext;
        },
        createAudioInPort: function (i, t, e, n) {
          if (!i || !t || !e) {
            const t = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
            throw (i.log(t), new Error(t));
          }
          (n = n || 0), (i.webAudio = i.webAudio || {}), (i.webAudio.audioInPorts = i.webAudio.audioInPorts || []);
          const r = i.inObject(t);
          return (
            (r.webAudio = {}),
            (r.webAudio.previousAudioInNode = null),
            (r.webAudio.audioNode = e),
            (i.webAudio.audioInPorts[t] = r),
            (r.onChange = function () {
              const e = r.get();
              if (e)
                try {
                  e.connect ? (e.connect(r.webAudio.audioNode, 0, n), i.setUiError("audioCtx", null)) : i.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
                } catch (t) {
                  throw (i.log("Error: Failed to connect web audio node!", t), i.log("port.webAudio.audioNode", r.webAudio.audioNode), i.log("audioInNode: ", e), i.log("inputChannelIndex:", n), i.log("audioInNode.connect: ", e.connect), t);
                }
              else if (r.webAudio.previousAudioInNode)
                try {
                  r.webAudio.previousAudioInNode.disconnect && r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode, 0, n), i.setUiError("audioCtx", null);
                } catch (e) {
                  try {
                    r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode);
                  } catch (t) {
                    throw (i.log("Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ", e), e.printStackTrace && e.printStackTrace(), e);
                  }
                }
              r.webAudio.previousAudioInNode = e;
            }),
            r
          );
        },
        replaceNodeInPort: function (t, e, i) {
          const n = t.webAudio.previousAudioInNode;
          if (n && n.disconnect) {
            try {
              n.disconnect(e);
            } catch (t) {
              throw (t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not disconnect old audio node. " + t.name + " " + t.message));
            }
            t.webAudio.audioNode = i;
            try {
              n.connect(i);
            } catch (t) {
              throw (t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not connect to new node. " + t.name + " " + t.message));
            }
          }
        },
        createAudioOutPort: function (t, e, i) {
          if (!t || !e || !i) {
            const e = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
            throw (t.log(e), new Error(e));
          }
          const n = t.outObject(e);
          return n.set(i), n;
        },
        createAudioParamInPort: function (n, t, e, i, r) {
          if (!n || !t || !e) return n.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"), n && n.name && n.log("opname: ", n.name), n.log("portName", t), void n.log("audioNode: ", e);
          (n.webAudio = n.webAudio || {}), (n.webAudio.audioInPorts = n.webAudio.audioInPorts || []);
          const s = n.inDynamic(t, [u.OP_PORT_TYPE_VALUE, u.OP_PORT_TYPE_OBJECT], i, r);
          return (
            (s.webAudio = {}),
            (s.webAudio.previousAudioInNode = null),
            (s.webAudio.audioNode = e),
            (n.webAudio.audioInPorts[t] = s),
            (s.onChange = function () {
              const t = s.get(),
                e = s.webAudio.audioNode,
                i = Dt.getAudioContext();
              if (null != t)
                if ("object" == typeof t && t.connect) {
                  try {
                    t.connect(e);
                  } catch (t) {
                    throw (n.log("Could not connect audio node: ", t), t.printStackTrace && t.printStackTrace(), t);
                  }
                  s.webAudio.previousAudioInNode = t;
                } else {
                  if (e._param && e._param.minValue && e._param.maxValue)
                    if (t >= e._param.minValue && t <= e._param.maxValue)
                      try {
                        e.setValueAtTime ? e.setValueAtTime(t, i.currentTime) : (e.value = t);
                      } catch (t) {
                        throw (n.log("Possible AudioParam problem with tone.js op: ", t), t.printStackTrace && t.printStackTrace(), t);
                      }
                    else n.log("Warning: The value for an audio parameter is out of range!");
                  else if (e.minValue && e.maxValue)
                    if (t >= e.minValue && t <= e.maxValue)
                      try {
                        e.setValueAtTime ? e.setValueAtTime(t, i.currentTime) : (e.value = t);
                      } catch (t) {
                        throw (n.log("AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ", t), t.printStackTrace && t.printStackTrace(), t);
                      }
                    else n.log("Warning: The value for an audio parameter is out of range!");
                  else
                    try {
                      e.setValueAtTime ? e.setValueAtTime(t, i.currentTime) : (e.value = t);
                    } catch (t) {
                      throw (n.log("Possible AudioParam problem (without minValue / maxValue): ", t), t.printStackTrace && t.printStackTrace(), t);
                    }
                  if (s.webAudio.previousAudioInNode && s.webAudio.previousAudioInNode.disconnect) {
                    try {
                      s.webAudio.previousAudioInNode.disconnect(e);
                    } catch (t) {
                      throw (n.log("Could not disconnect previous audio node: ", t), t);
                    }
                    s.webAudio.previousAudioInNode = void 0;
                  }
                }
              else s.webAudio.previousAudioInNode;
            }),
            s
          );
        },
        loadAudioFile: function (t, e, i, n, r) {
          const s = Dt.createAudioContext();
          let o = null;
          (!r && void 0 !== r) || ((o = t.loading.start("audio", e)), t.isEditorMode() && gui.jobs().start({ id: "loadaudio" + o, title: " loading audio (" + e + ")" }));
          const a = new XMLHttpRequest();
          e &&
            (a.open("GET", e, !0),
            (a.responseType = "arraybuffer"),
            (a.onload = function () {
              t.loading.finished(o), t.isEditorMode() && gui.jobs().finish("loadaudio" + o), s.decodeAudioData(a.response, i, n);
            }),
            a.send());
        },
        isValidToneTime: function (t) {
          try {
            new Tone.Time(t);
          } catch (t) {
            return !1;
          }
          return !0;
        },
        isValidToneNote: function (t) {
          try {
            Tone.Frequency(t);
          } catch (t) {
            return !1;
          }
          return !0;
        },
      },
      Ft = function (t, e, i) {
        (this._patch = t), (this.connector = i), (this._log = new d("PatchConnectionReceiver"));
      };
    (Ft.prototype._addOp = function (t) {
      let e = null;
      t.vars.uiAttribs && (e = t.vars.uiAttribs);
      const i = this._patch.addOp(t.vars.objName, e, t.vars.opId, !0);
      i &&
        ((i.id = t.vars.opId),
        t.vars.portsIn &&
          t.vars.portsIn.forEach((t) => {
            const e = i.getPortByName(t.name);
            e && e.set(t.value);
          }));
    }),
      (Ft.prototype._receive = function (t) {
        let e = {};
        if (((e = t.hasOwnProperty("event") ? t : JSON.parse(t.data)), e.event == p.PACO_OP_CREATE))
          this._patch.getOpById(e.vars.opId) ||
            (this._log.verbose("op create:", e.vars.objName),
            window.gui
              ? gui.serverOps.loadOpLibs(e.vars.objName, () => {
                  this._addOp(e);
                })
              : this._addOp(e));
        else if (e.event == p.PACO_DESERIALIZE)
          e.vars.json &&
            (window.gui
              ? gui.serverOps.loadProjectLibs(e.vars.json, () => {
                  this._patch.deSerialize(e.vars.json, e.vars.genIds);
                })
              : this._patch.deSerialize(e.vars.json, e.vars.genIds));
        else if (e.event == p.PACO_LOAD)
          this._log.verbose("PACO load patch....."),
            this._patch.clear(),
            window.gui
              ? gui.serverOps.loadProjectLibs(JSON.parse(e.vars.patch), () => {
                  this._patch.deSerialize(e.vars.patch);
                })
              : this._patch.deSerialize(e.vars.patch);
        else if (e.event == p.PACO_CLEAR) this._patch.clear(), this._log.log("clear");
        else if (e.event == p.PACO_OP_DELETE) this._log.verbose("op delete", e.vars.objName), this._patch.getOpById(e.vars.op), this._patch.deleteOp(e.vars.op, !0);
        else if (e.event == p.PACO_OP_ENABLE) {
          const t = this._patch.getOpById(e.vars.op);
          t && (t.enabled = !0);
        } else if (e.event == p.PACO_OP_DISABLE) {
          const t = this._patch.getOpById(e.vars.op);
          t && (t.enabled = !1);
        } else if (e.event == p.PACO_UIATTRIBS) {
          const t = this._patch.getOpById(e.vars.op);
          t && t.setUiAttrib(e.vars.uiAttribs);
        } else if (e.event == p.PACO_UNLINK) {
          const t = this._patch.getOpById(e.vars.op1),
            i = this._patch.getOpById(e.vars.op2);
          if (t && i) {
            const n = t.getPort(e.vars.port1),
              r = i.getPort(e.vars.port2);
            n && r ? n.removeLinkTo(r) : this._log.warn("paco unlink could not find port...");
          }
        } else if (e.event == p.PACO_LINK) {
          const t = this._patch.getOpById(e.vars.op1),
            s = this._patch.getOpById(e.vars.op2);
          t && s && this._patch.link(t, e.vars.port1, s, e.vars.port2);
        } else if (e.event == p.PACO_VALUECHANGE) {
          if ("+ create new one" !== e.vars.v) {
            const t = this._patch.getOpById(e.vars.op);
            if (t) {
              const o = t.getPort(e.vars.port);
              o && o.set(e.vars.v);
            }
          }
        } else if (e.event == p.PACO_VARIABLES) {
          const t = this._patch.getOpById(e.vars.opId);
          t && t.varName && t.varName.set(e.vars.varName);
        } else if (e.event == p.PACO_TRIGGERS) {
          const t = this._patch.getOpById(e.vars.opId);
          t && t.varName && t.varName.set(e.vars.varName);
        } else if (e.event == p.PACO_PORT_SETVARIABLE) {
          const t = this._patch.getOpById(e.vars.opId);
          if (t) {
            const a = t.getPortByName(e.vars.portName);
            a && a.setVariable(e.vars.variableName);
          }
        } else if (e.event == p.PACO_PORT_SETANIMATED) {
          const t = this._patch.getOpById(e.vars.opId);
          t && t.portsIn[e.vars.portIndex] && e.vars.hasOwnProperty("targetState") && this._patch.emitEvent("pacoPortValueSetAnimated", t, e.vars.portIndex, e.vars.targetState, e.vars.defaultValue);
        } else if (e.event == p.PACO_PORT_ANIM_UPDATED) {
          const t = this._patch.getOpById(e.vars.opId);
          if (t) {
            const l = t.getPortByName(e.vars.portName);
            if (l) {
              const t = l.getSerialized();
              (t.anim = e.vars.anim), (l.anim = null), l.deSerializeSettings(t), this._patch.emitEvent("pacoPortAnimUpdated", l);
            }
          }
        } else this._log.warn("unknown patchConnectionEvent!", t);
      });
    const Bt = function (t) {
      (this.connectors = []),
        (this.paused = !1),
        t.addEventListener("onOpDelete", (t) => {
          this.send(CABLES.PACO_OP_DELETE, { op: t.id, objName: t.objName });
        }),
        t.addEventListener("patchClearStart", () => {
          this.paused = !0;
        }),
        t.addEventListener("patchClearEnd", () => {
          this.paused = !1;
        }),
        t.addEventListener("patchLoadStart", () => {
          this.paused = !0;
        }),
        t.addEventListener("patchLoadEnd", (t, e, i) => {
          (this.paused = !1), this.send(CABLES.PACO_DESERIALIZE, { json: e, genIds: i });
        }),
        t.addEventListener("onOpAdd", (t) => {
          const e = [];
          t.portsIn.forEach((t) => {
            t = { id: t.id, name: t.name, value: t.get() };
            e.push(t);
          });
          let i = {};
          t.uiAttribs && (i = { ...t.uiAttribs }), this.send(CABLES.PACO_OP_CREATE, { opId: t.id, objName: t.objName, uiAttribs: i, portsIn: e });
        }),
        t.addEventListener("onUnLink", (t, e) => {
          this.send(CABLES.PACO_UNLINK, { op1: t.parent.id, op2: e.parent.id, port1: t.getName(), port2: e.getName() });
        }),
        t.addEventListener("onUiAttribsChange", (t, e) => {
          e && (delete e.extendTitle, delete e.history, delete e.translate, 0 < Object.keys(e).length && this.send(CABLES.PACO_UIATTRIBS, { op: t.id, uiAttribs: e }));
        }),
        t.addEventListener("opVariableNameChanged", (t, e) => {
          e = { opId: t.id, varName: e };
          this.send(CABLES.PACO_VARIABLES, e);
        }),
        t.addEventListener("opTriggerNameChanged", (t, e) => {
          e = { opId: t.id, varName: e };
          this.send(CABLES.PACO_TRIGGERS, e);
        }),
        t.addEventListener("onLink", (t, e) => {
          this.send(CABLES.PACO_LINK, { op1: t.parent.id, op2: e.parent.id, port1: t.name, port2: e.name });
        }),
        t.addEventListener("portSetVariable", (t, e, i) => {
          i = { opId: t.id, portName: e.name, variableName: i };
          this.send(CABLES.PACO_PORT_SETVARIABLE, i);
        }),
        t.addEventListener("portAnimUpdated", (t, e, i) => {
          t && e && ((i = { opId: t.id, portName: e.name, anim: i.getSerialized() }), this.send(CABLES.PACO_PORT_ANIM_UPDATED, i));
        });
    };
    Bt.prototype.send = function (e, i) {
      if (!this.paused && (e !== CABLES.PACO_VALUECHANGE || "+ create new one" !== i.v)) for (let t = 0; t < this.connectors.length; t++) this.connectors[t].send(e, i);
    };
    const Ut = function () {
      window.BroadcastChannel && (this.bc = new BroadcastChannel("test_channel"));
    };
    (Ut.prototype.receive = function (t) {
      this.bc && (this._log.log("init"), (this.bc.onmessage = t._receive.bind(t)));
    }),
      (Ut.prototype.send = function (t, e) {
        if (this.bc) {
          const i = {};
          (i.event = t), (i.vars = e), this.bc.postMessage(JSON.stringify(i));
        }
      });
    o = Object.assign(
      {
        EventTarget: X,
        EMBED: wt,
        Link: Ot,
        Port: et,
        Op: B,
        Profiler: Nt,
        Patch: Lt,
        Instancing: Ct,
        Timer: dt,
        WEBAUDIO: Dt,
        Variable: function () {
          let e = null;
          const i = [];
          (this.onChanged = function (t) {
            i.push(t);
          }),
            (this.getValue = function () {
              return e;
            }),
            (this.setValue = function (t) {
              (e = t), this.emitChanged();
            }),
            (this.emitChanged = function () {
              for (let t = 0; t < i.length; t++) i[t]();
            });
        },
        LoadingStatus: It,
        now: gt,
        internalNow: ct,
      },
      r,
      n,
      s,
      h,
      o,
      c,
      p,
      h,
      u
    );
    (e.default = o),
      (function () {
        return !this;
      })() || console.warn("not in strict mode: index core");
  },
]).default;
((CABLES = CABLES || {}).build = { timestamp: 1658229186222, created: "2022-07-19T11:13:06.222Z", git: { branch: "master", commit: "819fc0e7c02646be982b7338326b610a383cd8f6", date: "2022-07-19T11:09:39.000Z", message: "corelib" } }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).glMatrix = {}));
  })(this, function (t) {
    "use strict";
    var R = 1e-6,
      m = "undefined" != typeof Float32Array ? Float32Array : Array,
      h = Math.random,
      e = Math.PI / 180;
    Math.hypot ||
      (Math.hypot = function () {
        for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
        return Math.sqrt(t);
      });
    var i = Object.freeze({
      EPSILON: R,
      get ARRAY_TYPE() {
        return m;
      },
      RANDOM: h,
      setMatrixArrayType: function (t) {
        m = t;
      },
      toRadian: function (t) {
        return t * e;
      },
      equals: function (t, e) {
        return Math.abs(t - e) <= R * Math.max(1, Math.abs(t), Math.abs(e));
      },
    });
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = i[0],
        l = i[1],
        e = i[2],
        i = i[3];
      return (t[0] = n * a + s * l), (t[1] = r * a + o * l), (t[2] = n * e + s * i), (t[3] = r * e + o * i), t;
    }
    function r(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), t;
    }
    var s = Object.freeze({
      create: function () {
        var t = new m(4);
        return m != Float32Array && ((t[1] = 0), (t[2] = 0)), (t[0] = 1), (t[3] = 1), t;
      },
      clone: function (t) {
        var e = new m(4);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      },
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      },
      identity: function (t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
      },
      fromValues: function (t, e, i, n) {
        var r = new m(4);
        return (r[0] = t), (r[1] = e), (r[2] = i), (r[3] = n), r;
      },
      set: function (t, e, i, n, r) {
        return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), t;
      },
      transpose: function (t, e) {
        var i;
        return t === e ? ((i = e[1]), (t[1] = e[2]), (t[2] = i)) : ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3])), t;
      },
      invert: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          e = i * s - r * n;
        return e ? ((t[0] = s * (e = 1 / e)), (t[1] = -n * e), (t[2] = -r * e), (t[3] = i * e), t) : null;
      },
      adjoint: function (t, e) {
        var i = e[0];
        return (t[0] = e[3]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = i), t;
      },
      determinant: function (t) {
        return t[0] * t[3] - t[2] * t[1];
      },
      multiply: n,
      rotate: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          e = Math.sin(i),
          i = Math.cos(i);
        return (t[0] = n * i + s * e), (t[1] = r * i + o * e), (t[2] = n * -e + s * i), (t[3] = r * -e + o * i), t;
      },
      scale: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          e = i[0],
          i = i[1];
        return (t[0] = n * e), (t[1] = r * e), (t[2] = s * i), (t[3] = o * i), t;
      },
      fromRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = e), (t[1] = i), (t[2] = -i), (t[3] = e), t;
      },
      fromScaling: function (t, e) {
        return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), t;
      },
      str: function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3]);
      },
      LDU: function (t, e, i, n) {
        return (t[2] = n[2] / n[0]), (i[0] = n[0]), (i[1] = n[1]), (i[3] = n[3] - t[2] * i[1]), [t, e, i];
      },
      add: function (t, e, i) {
        return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), t;
      },
      subtract: r,
      exactEquals: function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      },
      equals: function (t, e) {
        var i = t[0],
          n = t[1],
          r = t[2],
          s = t[3],
          o = e[0],
          a = e[1],
          t = e[2],
          e = e[3];
        return Math.abs(i - o) <= R * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - a) <= R * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - t) <= R * Math.max(1, Math.abs(r), Math.abs(t)) && Math.abs(s - e) <= R * Math.max(1, Math.abs(s), Math.abs(e));
      },
      multiplyScalar: function (t, e, i) {
        return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), t;
      },
      multiplyScalarAndAdd: function (t, e, i, n) {
        return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), t;
      },
      mul: n,
      sub: r,
    });
    function o(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        h = i[0],
        u = i[1],
        c = i[2],
        d = i[3],
        e = i[4],
        i = i[5];
      return (t[0] = n * h + s * u), (t[1] = r * h + o * u), (t[2] = n * c + s * d), (t[3] = r * c + o * d), (t[4] = n * e + s * i + a), (t[5] = r * e + o * i + l), t;
    }
    function a(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), (t[4] = e[4] - i[4]), (t[5] = e[5] - i[5]), t;
    }
    var l = Object.freeze({
      create: function () {
        var t = new m(6);
        return m != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)), (t[0] = 1), (t[3] = 1), t;
      },
      clone: function (t) {
        var e = new m(6);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), e;
      },
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), t;
      },
      identity: function (t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
      },
      fromValues: function (t, e, i, n, r, s) {
        var o = new m(6);
        return (o[0] = t), (o[1] = e), (o[2] = i), (o[3] = n), (o[4] = r), (o[5] = s), o;
      },
      set: function (t, e, i, n, r, s, o) {
        return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), (t[4] = s), (t[5] = o), t;
      },
      invert: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          e = i * s - n * r;
        return e ? ((t[0] = s * (e = 1 / e)), (t[1] = -n * e), (t[2] = -r * e), (t[3] = i * e), (t[4] = (r * a - s * o) * e), (t[5] = (n * o - i * a) * e), t) : null;
      },
      determinant: function (t) {
        return t[0] * t[3] - t[1] * t[2];
      },
      multiply: o,
      rotate: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          e = Math.sin(i),
          i = Math.cos(i);
        return (t[0] = n * i + s * e), (t[1] = r * i + o * e), (t[2] = n * -e + s * i), (t[3] = r * -e + o * i), (t[4] = a), (t[5] = l), t;
      },
      scale: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          e = i[0],
          i = i[1];
        return (t[0] = n * e), (t[1] = r * e), (t[2] = s * i), (t[3] = o * i), (t[4] = a), (t[5] = l), t;
      },
      translate: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          e = i[0],
          i = i[1];
        return (t[0] = n), (t[1] = r), (t[2] = s), (t[3] = o), (t[4] = n * e + s * i + a), (t[5] = r * e + o * i + l), t;
      },
      fromRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = e), (t[1] = i), (t[2] = -i), (t[3] = e), (t[4] = 0), (t[5] = 0), t;
      },
      fromScaling: function (t, e) {
        return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), (t[4] = 0), (t[5] = 0), t;
      },
      fromTranslation: function (t, e) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = e[0]), (t[5] = e[1]), t;
      },
      str: function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
      },
      add: function (t, e, i) {
        return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), (t[4] = e[4] + i[4]), (t[5] = e[5] + i[5]), t;
      },
      subtract: a,
      multiplyScalar: function (t, e, i) {
        return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), (t[4] = e[4] * i), (t[5] = e[5] * i), t;
      },
      multiplyScalarAndAdd: function (t, e, i, n) {
        return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), (t[4] = e[4] + i[4] * n), (t[5] = e[5] + i[5] * n), t;
      },
      exactEquals: function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5];
      },
      equals: function (t, e) {
        var i = t[0],
          n = t[1],
          r = t[2],
          s = t[3],
          o = t[4],
          a = t[5],
          l = e[0],
          h = e[1],
          u = e[2],
          c = e[3],
          t = e[4],
          e = e[5];
        return Math.abs(i - l) <= R * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(n - h) <= R * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(r - u) <= R * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(s - c) <= R * Math.max(1, Math.abs(s), Math.abs(c)) && Math.abs(o - t) <= R * Math.max(1, Math.abs(o), Math.abs(t)) && Math.abs(a - e) <= R * Math.max(1, Math.abs(a), Math.abs(e));
      },
      mul: o,
      sub: a,
    });
    function u() {
      var t = new m(9);
      return m != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)), (t[0] = 1), (t[4] = 1), (t[8] = 1), t;
    }
    function c(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        h = e[6],
        u = e[7],
        c = e[8],
        d = i[0],
        p = i[1],
        g = i[2],
        f = i[3],
        _ = i[4],
        m = i[5],
        b = i[6],
        e = i[7],
        i = i[8];
      return (t[0] = d * n + p * o + g * h), (t[1] = d * r + p * a + g * u), (t[2] = d * s + p * l + g * c), (t[3] = f * n + _ * o + m * h), (t[4] = f * r + _ * a + m * u), (t[5] = f * s + _ * l + m * c), (t[6] = b * n + e * o + i * h), (t[7] = b * r + e * a + i * u), (t[8] = b * s + e * l + i * c), t;
    }
    function d(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), (t[4] = e[4] - i[4]), (t[5] = e[5] - i[5]), (t[6] = e[6] - i[6]), (t[7] = e[7] - i[7]), (t[8] = e[8] - i[8]), t;
    }
    var p = Object.freeze({
      create: u,
      fromMat4: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[4]), (t[4] = e[5]), (t[5] = e[6]), (t[6] = e[8]), (t[7] = e[9]), (t[8] = e[10]), t;
      },
      clone: function (t) {
        var e = new m(9);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), (e[6] = t[6]), (e[7] = t[7]), (e[8] = t[8]), e;
      },
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[8] = e[8]), t;
      },
      fromValues: function (t, e, i, n, r, s, o, a, l) {
        var h = new m(9);
        return (h[0] = t), (h[1] = e), (h[2] = i), (h[3] = n), (h[4] = r), (h[5] = s), (h[6] = o), (h[7] = a), (h[8] = l), h;
      },
      set: function (t, e, i, n, r, s, o, a, l, h) {
        return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), (t[4] = s), (t[5] = o), (t[6] = a), (t[7] = l), (t[8] = h), t;
      },
      identity: function (t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t;
      },
      transpose: function (t, e) {
        var i, n, r;
        return t === e ? ((i = e[1]), (n = e[2]), (r = e[5]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = i), (t[5] = e[7]), (t[6] = n), (t[7] = r)) : ((t[0] = e[0]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = e[1]), (t[4] = e[4]), (t[5] = e[7]), (t[6] = e[2]), (t[7] = e[5]), (t[8] = e[8])), t;
      },
      invert: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          l = e[6],
          h = e[7],
          u = e[8],
          c = u * o - a * h,
          d = -u * s + a * l,
          p = h * s - o * l,
          e = i * c + n * d + r * p;
        return e ? ((t[0] = c * (e = 1 / e)), (t[1] = (-u * n + r * h) * e), (t[2] = (a * n - r * o) * e), (t[3] = d * e), (t[4] = (u * i - r * l) * e), (t[5] = (-a * i + r * s) * e), (t[6] = p * e), (t[7] = (-h * i + n * l) * e), (t[8] = (o * i - n * s) * e), t) : null;
      },
      adjoint: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          l = e[6],
          h = e[7],
          e = e[8];
        return (t[0] = o * e - a * h), (t[1] = r * h - n * e), (t[2] = n * a - r * o), (t[3] = a * l - s * e), (t[4] = i * e - r * l), (t[5] = r * s - i * a), (t[6] = s * h - o * l), (t[7] = n * l - i * h), (t[8] = i * o - n * s), t;
      },
      determinant: function (t) {
        var e = t[0],
          i = t[1],
          n = t[2],
          r = t[3],
          s = t[4],
          o = t[5],
          a = t[6],
          l = t[7],
          t = t[8];
        return e * (t * s - o * l) + i * (-t * r + o * a) + n * (l * r - s * a);
      },
      multiply: c,
      translate: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          h = e[6],
          u = e[7],
          c = e[8],
          e = i[0],
          i = i[1];
        return (t[0] = n), (t[1] = r), (t[2] = s), (t[3] = o), (t[4] = a), (t[5] = l), (t[6] = e * n + i * o + h), (t[7] = e * r + i * a + u), (t[8] = e * s + i * l + c), t;
      },
      rotate: function (t, e, i) {
        var n = e[0],
          r = e[1],
          s = e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          h = e[6],
          u = e[7],
          c = e[8],
          e = Math.sin(i),
          i = Math.cos(i);
        return (t[0] = i * n + e * o), (t[1] = i * r + e * a), (t[2] = i * s + e * l), (t[3] = i * o - e * n), (t[4] = i * a - e * r), (t[5] = i * l - e * s), (t[6] = h), (t[7] = u), (t[8] = c), t;
      },
      scale: function (t, e, i) {
        var n = i[0],
          i = i[1];
        return (t[0] = n * e[0]), (t[1] = n * e[1]), (t[2] = n * e[2]), (t[3] = i * e[3]), (t[4] = i * e[4]), (t[5] = i * e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[8] = e[8]), t;
      },
      fromTranslation: function (t, e) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = e[0]), (t[7] = e[1]), (t[8] = 1), t;
      },
      fromRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = e), (t[1] = i), (t[2] = 0), (t[3] = -i), (t[4] = e), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t;
      },
      fromScaling: function (t, e) {
        return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = e[1]), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t;
      },
      fromMat2d: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = 0), (t[3] = e[2]), (t[4] = e[3]), (t[5] = 0), (t[6] = e[4]), (t[7] = e[5]), (t[8] = 1), t;
      },
      fromQuat: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = i + i,
          a = n + n,
          l = r + r,
          h = i * o,
          u = n * o,
          e = n * a,
          i = r * o,
          n = r * a,
          r = r * l,
          o = s * o,
          a = s * a,
          l = s * l;
        return (t[0] = 1 - e - r), (t[3] = u - l), (t[6] = i + a), (t[1] = u + l), (t[4] = 1 - h - r), (t[7] = n - o), (t[2] = i - a), (t[5] = n + o), (t[8] = 1 - h - e), t;
      },
      normalFromMat4: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          l = e[6],
          h = e[7],
          u = e[8],
          c = e[9],
          d = e[10],
          p = e[11],
          g = e[12],
          f = e[13],
          _ = e[14],
          m = e[15],
          b = i * a - n * o,
          E = i * l - r * o,
          v = i * h - s * o,
          T = n * l - r * a,
          x = n * h - s * a,
          A = r * h - s * l,
          y = u * f - c * g,
          M = u * _ - d * g,
          e = u * m - p * g,
          u = c * _ - d * f,
          c = c * m - p * f,
          d = d * m - p * _,
          p = b * d - E * c + v * u + T * e - x * M + A * y;
        return p ? ((t[0] = (a * d - l * c + h * u) * (p = 1 / p)), (t[1] = (l * e - o * d - h * M) * p), (t[2] = (o * c - a * e + h * y) * p), (t[3] = (r * c - n * d - s * u) * p), (t[4] = (i * d - r * e + s * M) * p), (t[5] = (n * e - i * c - s * y) * p), (t[6] = (f * A - _ * x + m * T) * p), (t[7] = (_ * v - g * A - m * E) * p), (t[8] = (g * x - f * v + m * b) * p), t) : null;
      },
      projection: function (t, e, i) {
        return (t[0] = 2 / e), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = -2 / i), (t[5] = 0), (t[6] = -1), (t[7] = 1), (t[8] = 1), t;
      },
      str: function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
      },
      add: function (t, e, i) {
        return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), (t[4] = e[4] + i[4]), (t[5] = e[5] + i[5]), (t[6] = e[6] + i[6]), (t[7] = e[7] + i[7]), (t[8] = e[8] + i[8]), t;
      },
      subtract: d,
      multiplyScalar: function (t, e, i) {
        return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), (t[4] = e[4] * i), (t[5] = e[5] * i), (t[6] = e[6] * i), (t[7] = e[7] * i), (t[8] = e[8] * i), t;
      },
      multiplyScalarAndAdd: function (t, e, i, n) {
        return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), (t[4] = e[4] + i[4] * n), (t[5] = e[5] + i[5] * n), (t[6] = e[6] + i[6] * n), (t[7] = e[7] + i[7] * n), (t[8] = e[8] + i[8] * n), t;
      },
      exactEquals: function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8];
      },
      equals: function (t, e) {
        var i = t[0],
          n = t[1],
          r = t[2],
          s = t[3],
          o = t[4],
          a = t[5],
          l = t[6],
          h = t[7],
          u = t[8],
          c = e[0],
          d = e[1],
          p = e[2],
          g = e[3],
          f = e[4],
          _ = e[5],
          m = e[6],
          t = e[7],
          e = e[8];
        return Math.abs(i - c) <= R * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(n - d) <= R * Math.max(1, Math.abs(n), Math.abs(d)) && Math.abs(r - p) <= R * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(s - g) <= R * Math.max(1, Math.abs(s), Math.abs(g)) && Math.abs(o - f) <= R * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - _) <= R * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(l - m) <= R * Math.max(1, Math.abs(l), Math.abs(m)) && Math.abs(h - t) <= R * Math.max(1, Math.abs(h), Math.abs(t)) && Math.abs(u - e) <= R * Math.max(1, Math.abs(u), Math.abs(e));
      },
      mul: c,
      sub: d,
    });
    function g(t) {
      return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
    }
    function f(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        h = e[6],
        u = e[7],
        c = e[8],
        d = e[9],
        p = e[10],
        g = e[11],
        f = e[12],
        _ = e[13],
        m = e[14],
        b = e[15],
        E = i[0],
        v = i[1],
        T = i[2],
        e = i[3];
      return (
        (t[0] = E * n + v * a + T * c + e * f),
        (t[1] = E * r + v * l + T * d + e * _),
        (t[2] = E * s + v * h + T * p + e * m),
        (t[3] = E * o + v * u + T * g + e * b),
        (E = i[4]),
        (v = i[5]),
        (T = i[6]),
        (e = i[7]),
        (t[4] = E * n + v * a + T * c + e * f),
        (t[5] = E * r + v * l + T * d + e * _),
        (t[6] = E * s + v * h + T * p + e * m),
        (t[7] = E * o + v * u + T * g + e * b),
        (E = i[8]),
        (v = i[9]),
        (T = i[10]),
        (e = i[11]),
        (t[8] = E * n + v * a + T * c + e * f),
        (t[9] = E * r + v * l + T * d + e * _),
        (t[10] = E * s + v * h + T * p + e * m),
        (t[11] = E * o + v * u + T * g + e * b),
        (E = i[12]),
        (v = i[13]),
        (T = i[14]),
        (e = i[15]),
        (t[12] = E * n + v * a + T * c + e * f),
        (t[13] = E * r + v * l + T * d + e * _),
        (t[14] = E * s + v * h + T * p + e * m),
        (t[15] = E * o + v * u + T * g + e * b),
        t
      );
    }
    function _(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = n + n,
        l = r + r,
        h = s + s,
        u = n * a,
        c = n * l,
        e = n * h,
        n = r * l,
        r = r * h,
        s = s * h,
        a = o * a,
        l = o * l,
        h = o * h;
      return (t[0] = 1 - (n + s)), (t[1] = c + h), (t[2] = e - l), (t[3] = 0), (t[4] = c - h), (t[5] = 1 - (u + s)), (t[6] = r + a), (t[7] = 0), (t[8] = e + l), (t[9] = r - a), (t[10] = 1 - (u + n)), (t[11] = 0), (t[12] = i[0]), (t[13] = i[1]), (t[14] = i[2]), (t[15] = 1), t;
    }
    function b(t, e) {
      return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
    }
    function E(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[4],
        o = e[5],
        a = e[6],
        l = e[8],
        h = e[9],
        e = e[10];
      return (t[0] = Math.hypot(i, n, r)), (t[1] = Math.hypot(s, o, a)), (t[2] = Math.hypot(l, h, e)), t;
    }
    function v(t, e) {
      var i = new m(3);
      E(i, e);
      var n = 1 / i[0],
        r = 1 / i[1],
        s = 1 / i[2],
        o = e[0] * n,
        a = e[1] * r,
        l = e[2] * s,
        h = e[4] * n,
        u = e[5] * r,
        c = e[6] * s,
        i = e[8] * n,
        n = e[9] * r,
        r = e[10] * s,
        e = o + u + r,
        s = 0;
      return 0 < e ? ((s = 2 * Math.sqrt(1 + e)), (t[3] = 0.25 * s), (t[0] = (c - n) / s), (t[1] = (i - l) / s), (t[2] = (a - h) / s)) : u < o && r < o ? ((s = 2 * Math.sqrt(1 + o - u - r)), (t[3] = (c - n) / s), (t[0] = 0.25 * s), (t[1] = (a + h) / s), (t[2] = (i + l) / s)) : r < u ? ((s = 2 * Math.sqrt(1 + u - o - r)), (t[3] = (i - l) / s), (t[0] = (a + h) / s), (t[1] = 0.25 * s), (t[2] = (c + n) / s)) : ((s = 2 * Math.sqrt(1 + r - o - u)), (t[3] = (a - h) / s), (t[0] = (i + l) / s), (t[1] = (c + n) / s), (t[2] = 0.25 * s)), t;
    }
    function T(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), (t[4] = e[4] - i[4]), (t[5] = e[5] - i[5]), (t[6] = e[6] - i[6]), (t[7] = e[7] - i[7]), (t[8] = e[8] - i[8]), (t[9] = e[9] - i[9]), (t[10] = e[10] - i[10]), (t[11] = e[11] - i[11]), (t[12] = e[12] - i[12]), (t[13] = e[13] - i[13]), (t[14] = e[14] - i[14]), (t[15] = e[15] - i[15]), t;
    }
    var x = Object.freeze({
      create: function () {
        var t = new m(16);
        return m != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0)), (t[0] = 1), (t[5] = 1), (t[10] = 1), (t[15] = 1), t;
      },
      clone: function (t) {
        var e = new m(16);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), (e[6] = t[6]), (e[7] = t[7]), (e[8] = t[8]), (e[9] = t[9]), (e[10] = t[10]), (e[11] = t[11]), (e[12] = t[12]), (e[13] = t[13]), (e[14] = t[14]), (e[15] = t[15]), e;
      },
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[8] = e[8]), (t[9] = e[9]), (t[10] = e[10]), (t[11] = e[11]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15]), t;
      },
      fromValues: function (t, e, i, n, r, s, o, a, l, h, u, c, d, p, g, f) {
        var _ = new m(16);
        return (_[0] = t), (_[1] = e), (_[2] = i), (_[3] = n), (_[4] = r), (_[5] = s), (_[6] = o), (_[7] = a), (_[8] = l), (_[9] = h), (_[10] = u), (_[11] = c), (_[12] = d), (_[13] = p), (_[14] = g), (_[15] = f), _;
      },
      set: function (t, e, i, n, r, s, o, a, l, h, u, c, d, p, g, f, _) {
        return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), (t[4] = s), (t[5] = o), (t[6] = a), (t[7] = l), (t[8] = h), (t[9] = u), (t[10] = c), (t[11] = d), (t[12] = p), (t[13] = g), (t[14] = f), (t[15] = _), t;
      },
      identity: g,
      transpose: function (t, e) {
        var i, n, r, s, o, a;
        return t === e ? ((i = e[1]), (n = e[2]), (r = e[3]), (s = e[6]), (o = e[7]), (a = e[11]), (t[1] = e[4]), (t[2] = e[8]), (t[3] = e[12]), (t[4] = i), (t[6] = e[9]), (t[7] = e[13]), (t[8] = n), (t[9] = s), (t[11] = e[14]), (t[12] = r), (t[13] = o), (t[14] = a)) : ((t[0] = e[0]), (t[1] = e[4]), (t[2] = e[8]), (t[3] = e[12]), (t[4] = e[1]), (t[5] = e[5]), (t[6] = e[9]), (t[7] = e[13]), (t[8] = e[2]), (t[9] = e[6]), (t[10] = e[10]), (t[11] = e[14]), (t[12] = e[3]), (t[13] = e[7]), (t[14] = e[11]), (t[15] = e[15])), t;
      },
      invert: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          l = e[6],
          h = e[7],
          u = e[8],
          c = e[9],
          d = e[10],
          p = e[11],
          g = e[12],
          f = e[13],
          _ = e[14],
          m = e[15],
          b = i * a - n * o,
          E = i * l - r * o,
          v = i * h - s * o,
          T = n * l - r * a,
          x = n * h - s * a,
          A = r * h - s * l,
          y = u * f - c * g,
          M = u * _ - d * g,
          S = u * m - p * g,
          O = c * _ - d * f,
          I = c * m - p * f,
          C = d * m - p * _,
          e = b * C - E * I + v * O + T * S - x * M + A * y;
        return e
          ? ((t[0] = (a * C - l * I + h * O) * (e = 1 / e)),
            (t[1] = (r * I - n * C - s * O) * e),
            (t[2] = (f * A - _ * x + m * T) * e),
            (t[3] = (d * x - c * A - p * T) * e),
            (t[4] = (l * S - o * C - h * M) * e),
            (t[5] = (i * C - r * S + s * M) * e),
            (t[6] = (_ * v - g * A - m * E) * e),
            (t[7] = (u * A - d * v + p * E) * e),
            (t[8] = (o * I - a * S + h * y) * e),
            (t[9] = (n * S - i * I - s * y) * e),
            (t[10] = (g * x - f * v + m * b) * e),
            (t[11] = (c * v - u * x - p * b) * e),
            (t[12] = (a * M - o * O - l * y) * e),
            (t[13] = (i * O - n * M + r * y) * e),
            (t[14] = (f * E - g * T - _ * b) * e),
            (t[15] = (u * T - c * E + d * b) * e),
            t)
          : null;
      },
      adjoint: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          a = e[5],
          l = e[6],
          h = e[7],
          u = e[8],
          c = e[9],
          d = e[10],
          p = e[11],
          g = e[12],
          f = e[13],
          _ = e[14],
          e = e[15];
        return (
          (t[0] = a * (d * e - p * _) - c * (l * e - h * _) + f * (l * p - h * d)),
          (t[1] = -(n * (d * e - p * _) - c * (r * e - s * _) + f * (r * p - s * d))),
          (t[2] = n * (l * e - h * _) - a * (r * e - s * _) + f * (r * h - s * l)),
          (t[3] = -(n * (l * p - h * d) - a * (r * p - s * d) + c * (r * h - s * l))),
          (t[4] = -(o * (d * e - p * _) - u * (l * e - h * _) + g * (l * p - h * d))),
          (t[5] = i * (d * e - p * _) - u * (r * e - s * _) + g * (r * p - s * d)),
          (t[6] = -(i * (l * e - h * _) - o * (r * e - s * _) + g * (r * h - s * l))),
          (t[7] = i * (l * p - h * d) - o * (r * p - s * d) + u * (r * h - s * l)),
          (t[8] = o * (c * e - p * f) - u * (a * e - h * f) + g * (a * p - h * c)),
          (t[9] = -(i * (c * e - p * f) - u * (n * e - s * f) + g * (n * p - s * c))),
          (t[10] = i * (a * e - h * f) - o * (n * e - s * f) + g * (n * h - s * a)),
          (t[11] = -(i * (a * p - h * c) - o * (n * p - s * c) + u * (n * h - s * a))),
          (t[12] = -(o * (c * _ - d * f) - u * (a * _ - l * f) + g * (a * d - l * c))),
          (t[13] = i * (c * _ - d * f) - u * (n * _ - r * f) + g * (n * d - r * c)),
          (t[14] = -(i * (a * _ - l * f) - o * (n * _ - r * f) + g * (n * l - r * a))),
          (t[15] = i * (a * d - l * c) - o * (n * d - r * c) + u * (n * l - r * a)),
          t
        );
      },
      determinant: function (t) {
        var e = t[0],
          i = t[1],
          n = t[2],
          r = t[3],
          s = t[4],
          o = t[5],
          a = t[6],
          l = t[7],
          h = t[8],
          u = t[9],
          c = t[10],
          d = t[11],
          p = t[12],
          g = t[13],
          f = t[14],
          t = t[15];
        return (e * o - i * s) * (c * t - d * f) - (e * a - n * s) * (u * t - d * g) + (e * l - r * s) * (u * f - c * g) + (i * a - n * o) * (h * t - d * p) - (i * l - r * o) * (h * f - c * p) + (n * l - r * a) * (h * g - u * p);
      },
      multiply: f,
      translate: function (t, e, i) {
        var n,
          r,
          s,
          o,
          a,
          l,
          h,
          u,
          c,
          d,
          p,
          g = i[0],
          f = i[1],
          _ = i[2];
        return (
          e === t
            ? ((t[12] = e[0] * g + e[4] * f + e[8] * _ + e[12]), (t[13] = e[1] * g + e[5] * f + e[9] * _ + e[13]), (t[14] = e[2] * g + e[6] * f + e[10] * _ + e[14]), (t[15] = e[3] * g + e[7] * f + e[11] * _ + e[15]))
            : ((n = e[0]), (r = e[1]), (s = e[2]), (o = e[3]), (a = e[4]), (l = e[5]), (h = e[6]), (u = e[7]), (c = e[8]), (d = e[9]), (p = e[10]), (i = e[11]), (t[0] = n), (t[1] = r), (t[2] = s), (t[3] = o), (t[4] = a), (t[5] = l), (t[6] = h), (t[7] = u), (t[8] = c), (t[9] = d), (t[10] = p), (t[11] = i), (t[12] = n * g + a * f + c * _ + e[12]), (t[13] = r * g + l * f + d * _ + e[13]), (t[14] = s * g + h * f + p * _ + e[14]), (t[15] = o * g + u * f + i * _ + e[15])),
          t
        );
      },
      scale: function (t, e, i) {
        var n = i[0],
          r = i[1],
          i = i[2];
        return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), (t[3] = e[3] * n), (t[4] = e[4] * r), (t[5] = e[5] * r), (t[6] = e[6] * r), (t[7] = e[7] * r), (t[8] = e[8] * i), (t[9] = e[9] * i), (t[10] = e[10] * i), (t[11] = e[11] * i), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15]), t;
      },
      rotate: function (t, e, i, n) {
        var r,
          s,
          o,
          a,
          l,
          h,
          u,
          c,
          d,
          p,
          g,
          f,
          _,
          m,
          b,
          E,
          v,
          T,
          x,
          A = n[0],
          y = n[1],
          M = n[2],
          S = Math.hypot(A, y, M);
        return S < R
          ? null
          : ((A *= S = 1 / S),
            (y *= S),
            (M *= S),
            (b = Math.sin(i)),
            (r = 1 - (m = Math.cos(i))),
            (s = e[0]),
            (o = e[1]),
            (a = e[2]),
            (l = e[3]),
            (h = e[4]),
            (u = e[5]),
            (c = e[6]),
            (d = e[7]),
            (p = e[8]),
            (g = e[9]),
            (f = e[10]),
            (_ = e[11]),
            (E = A * y * r - M * b),
            (v = y * y * r + m),
            (T = M * y * r + A * b),
            (x = A * M * r + y * b),
            (n = y * M * r - A * b),
            (S = M * M * r + m),
            (t[0] = s * (i = A * A * r + m) + h * (m = y * A * r + M * b) + p * (b = M * A * r - y * b)),
            (t[1] = o * i + u * m + g * b),
            (t[2] = a * i + c * m + f * b),
            (t[3] = l * i + d * m + _ * b),
            (t[4] = s * E + h * v + p * T),
            (t[5] = o * E + u * v + g * T),
            (t[6] = a * E + c * v + f * T),
            (t[7] = l * E + d * v + _ * T),
            (t[8] = s * x + h * n + p * S),
            (t[9] = o * x + u * n + g * S),
            (t[10] = a * x + c * n + f * S),
            (t[11] = l * x + d * n + _ * S),
            e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
            t);
      },
      rotateX: function (t, e, i) {
        var n = Math.sin(i),
          r = Math.cos(i),
          s = e[4],
          o = e[5],
          a = e[6],
          l = e[7],
          h = e[8],
          u = e[9],
          c = e[10],
          i = e[11];
        return e !== t && ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])), (t[4] = s * r + h * n), (t[5] = o * r + u * n), (t[6] = a * r + c * n), (t[7] = l * r + i * n), (t[8] = h * r - s * n), (t[9] = u * r - o * n), (t[10] = c * r - a * n), (t[11] = i * r - l * n), t;
      },
      rotateY: function (t, e, i) {
        var n = Math.sin(i),
          r = Math.cos(i),
          s = e[0],
          o = e[1],
          a = e[2],
          l = e[3],
          h = e[8],
          u = e[9],
          c = e[10],
          i = e[11];
        return e !== t && ((t[4] = e[4]), (t[5] = e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])), (t[0] = s * r - h * n), (t[1] = o * r - u * n), (t[2] = a * r - c * n), (t[3] = l * r - i * n), (t[8] = s * n + h * r), (t[9] = o * n + u * r), (t[10] = a * n + c * r), (t[11] = l * n + i * r), t;
      },
      rotateZ: function (t, e, i) {
        var n = Math.sin(i),
          r = Math.cos(i),
          s = e[0],
          o = e[1],
          a = e[2],
          l = e[3],
          h = e[4],
          u = e[5],
          c = e[6],
          i = e[7];
        return e !== t && ((t[8] = e[8]), (t[9] = e[9]), (t[10] = e[10]), (t[11] = e[11]), (t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])), (t[0] = s * r + h * n), (t[1] = o * r + u * n), (t[2] = a * r + c * n), (t[3] = l * r + i * n), (t[4] = h * r - s * n), (t[5] = u * r - o * n), (t[6] = c * r - a * n), (t[7] = i * r - l * n), t;
      },
      fromTranslation: function (t, e) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = e[0]), (t[13] = e[1]), (t[14] = e[2]), (t[15] = 1), t;
      },
      fromScaling: function (t, e) {
        return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = e[1]), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = e[2]), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
      },
      fromRotation: function (t, e, i) {
        var n = i[0],
          r = i[1],
          s = i[2],
          o = Math.hypot(n, r, s);
        return o < R ? null : ((n *= o = 1 / o), (r *= o), (s *= o), (i = Math.sin(e)), (e = 1 - (o = Math.cos(e))), (t[0] = n * n * e + o), (t[1] = r * n * e + s * i), (t[2] = s * n * e - r * i), (t[3] = 0), (t[4] = n * r * e - s * i), (t[5] = r * r * e + o), (t[6] = s * r * e + n * i), (t[7] = 0), (t[8] = n * s * e + r * i), (t[9] = r * s * e - n * i), (t[10] = s * s * e + o), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t);
      },
      fromXRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = e), (t[6] = i), (t[7] = 0), (t[8] = 0), (t[9] = -i), (t[10] = e), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
      },
      fromYRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = e), (t[1] = 0), (t[2] = -i), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = i), (t[9] = 0), (t[10] = e), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
      },
      fromZRotation: function (t, e) {
        var i = Math.sin(e),
          e = Math.cos(e);
        return (t[0] = e), (t[1] = i), (t[2] = 0), (t[3] = 0), (t[4] = -i), (t[5] = e), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
      },
      fromRotationTranslation: _,
      fromQuat2: function (t, e) {
        var i = new m(3),
          n = -e[0],
          r = -e[1],
          s = -e[2],
          o = e[3],
          a = e[4],
          l = e[5],
          h = e[6],
          u = e[7],
          c = n * n + r * r + s * s + o * o;
        return 0 < c ? ((i[0] = (2 * (a * o + u * n + l * s - h * r)) / c), (i[1] = (2 * (l * o + u * r + h * n - a * s)) / c), (i[2] = (2 * (h * o + u * s + a * r - l * n)) / c)) : ((i[0] = 2 * (a * o + u * n + l * s - h * r)), (i[1] = 2 * (l * o + u * r + h * n - a * s)), (i[2] = 2 * (h * o + u * s + a * r - l * n))), _(t, e, i), t;
      },
      getTranslation: b,
      getScaling: E,
      getRotation: v,
      fromRotationTranslationScale: function (t, e, i, n) {
        var r = e[0],
          s = e[1],
          o = e[2],
          a = e[3],
          l = r + r,
          h = s + s,
          u = o + o,
          c = r * l,
          d = r * h,
          p = r * u,
          e = s * h,
          r = s * u,
          s = o * u,
          o = a * l,
          l = a * h,
          h = a * u,
          a = n[0],
          u = n[1],
          n = n[2];
        return (t[0] = (1 - (e + s)) * a), (t[1] = (d + h) * a), (t[2] = (p - l) * a), (t[3] = 0), (t[4] = (d - h) * u), (t[5] = (1 - (c + s)) * u), (t[6] = (r + o) * u), (t[7] = 0), (t[8] = (p + l) * n), (t[9] = (r - o) * n), (t[10] = (1 - (c + e)) * n), (t[11] = 0), (t[12] = i[0]), (t[13] = i[1]), (t[14] = i[2]), (t[15] = 1), t;
      },
      fromRotationTranslationScaleOrigin: function (t, e, i, n, r) {
        var s = e[0],
          o = e[1],
          a = e[2],
          l = e[3],
          h = s + s,
          u = o + o,
          c = a + a,
          d = s * h,
          p = s * u,
          g = s * c,
          f = o * u,
          _ = o * c,
          m = a * c,
          b = l * h,
          e = l * u,
          s = l * c,
          o = n[0],
          a = n[1],
          h = n[2],
          u = r[0],
          l = r[1],
          c = r[2],
          n = (1 - (f + m)) * o,
          r = (p + s) * o,
          o = (g - e) * o,
          s = (p - s) * a,
          m = (1 - (d + m)) * a,
          a = (_ + b) * a,
          e = (g + e) * h,
          b = (_ - b) * h,
          h = (1 - (d + f)) * h;
        return (t[0] = n), (t[1] = r), (t[2] = o), (t[3] = 0), (t[4] = s), (t[5] = m), (t[6] = a), (t[7] = 0), (t[8] = e), (t[9] = b), (t[10] = h), (t[11] = 0), (t[12] = i[0] + u - (n * u + s * l + e * c)), (t[13] = i[1] + l - (r * u + m * l + b * c)), (t[14] = i[2] + c - (o * u + a * l + h * c)), (t[15] = 1), t;
      },
      fromQuat: function (t, e) {
        var i = e[0],
          n = e[1],
          r = e[2],
          s = e[3],
          o = i + i,
          a = n + n,
          l = r + r,
          h = i * o,
          u = n * o,
          e = n * a,
          i = r * o,
          n = r * a,
          r = r * l,
          o = s * o,
          a = s * a,
          l = s * l;
        return (t[0] = 1 - e - r), (t[1] = u + l), (t[2] = i - a), (t[3] = 0), (t[4] = u - l), (t[5] = 1 - h - r), (t[6] = n + o), (t[7] = 0), (t[8] = i + a), (t[9] = n - o), (t[10] = 1 - h - e), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), t;
      },
      frustum: function (t, e, i, n, r, s, o) {
        var a = 1 / (i - e),
          l = 1 / (r - n),
          h = 1 / (s - o);
        return (t[0] = 2 * s * a), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 2 * s * l), (t[6] = 0), (t[7] = 0), (t[8] = (i + e) * a), (t[9] = (r + n) * l), (t[10] = (o + s) * h), (t[11] = -1), (t[12] = 0), (t[13] = 0), (t[14] = o * s * 2 * h), (t[15] = 0), t;
      },
      perspective: function (t, e, i, n, r) {
        var e = 1 / Math.tan(e / 2);
        return (t[0] = e / i), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = e), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[11] = -1), (t[12] = 0), (t[13] = 0), (t[15] = 0), null != r && r !== 1 / 0 ? ((t[10] = (r + n) * (e = 1 / (n - r))), (t[14] = 2 * r * n * e)) : ((t[10] = -1), (t[14] = -2 * n)), t;
      },
      perspectiveFromFieldOfView: function (t, e, i, n) {
        var r = Math.tan((e.upDegrees * Math.PI) / 180),
          s = Math.tan((e.downDegrees * Math.PI) / 180),
          o = Math.tan((e.leftDegrees * Math.PI) / 180),
          a = Math.tan((e.rightDegrees * Math.PI) / 180),
          l = 2 / (o + a),
          e = 2 / (r + s);
        return (t[0] = l), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = e), (t[6] = 0), (t[7] = 0), (t[8] = -(o - a) * l * 0.5), (t[9] = (r - s) * e * 0.5), (t[10] = n / (i - n)), (t[11] = -1), (t[12] = 0), (t[13] = 0), (t[14] = (n * i) / (i - n)), (t[15] = 0), t;
      },
      ortho: function (t, e, i, n, r, s, o) {
        var a = 1 / (e - i),
          l = 1 / (n - r),
          h = 1 / (s - o);
        return (t[0] = -2 * a), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = -2 * l), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 2 * h), (t[11] = 0), (t[12] = (e + i) * a), (t[13] = (r + n) * l), (t[14] = (o + s) * h), (t[15] = 1), t;
      },
      lookAt: function (t, e, i, n) {
        var r,
          s = e[0],
          o = e[1],
          a = e[2],
          l = n[0],
          h = n[1],
          u = n[2],
          c = i[0],
          d = i[1],
          p = i[2];
        return Math.abs(s - c) < R && Math.abs(o - d) < R && Math.abs(a - p) < R
          ? g(t)
          : ((r = s - c),
            (e = o - d),
            (n = a - p),
            (c = h * (n *= i = 1 / Math.hypot(r, e, n)) - u * (e *= i)),
            (d = u * (r *= i) - l * n),
            (p = l * e - h * r),
            (i = Math.hypot(c, d, p)) ? ((c *= i = 1 / i), (d *= i), (p *= i)) : (p = d = c = 0),
            (u = e * p - n * d),
            (l = n * c - r * p),
            (h = r * d - e * c),
            (i = Math.hypot(u, l, h)) ? ((u *= i = 1 / i), (l *= i), (h *= i)) : (h = l = u = 0),
            (t[0] = c),
            (t[1] = u),
            (t[2] = r),
            (t[3] = 0),
            (t[4] = d),
            (t[5] = l),
            (t[6] = e),
            (t[7] = 0),
            (t[8] = p),
            (t[9] = h),
            (t[10] = n),
            (t[11] = 0),
            (t[12] = -(c * s + d * o + p * a)),
            (t[13] = -(u * s + l * o + h * a)),
            (t[14] = -(r * s + e * o + n * a)),
            (t[15] = 1),
            t);
      },
      targetTo: function (t, e, i, n) {
        var r = e[0],
          s = e[1],
          o = e[2],
          a = n[0],
          l = n[1],
          h = n[2],
          u = r - i[0],
          c = s - i[1],
          e = o - i[2],
          n = u * u + c * c + e * e;
        0 < n && ((u *= n = 1 / Math.sqrt(n)), (c *= n), (e *= n));
        (i = l * e - h * c), (h = h * u - a * e), (l = a * c - l * u);
        return 0 < (n = i * i + h * h + l * l) && ((i *= n = 1 / Math.sqrt(n)), (h *= n), (l *= n)), (t[0] = i), (t[1] = h), (t[2] = l), (t[3] = 0), (t[4] = c * l - e * h), (t[5] = e * i - u * l), (t[6] = u * h - c * i), (t[7] = 0), (t[8] = u), (t[9] = c), (t[10] = e), (t[11] = 0), (t[12] = r), (t[13] = s), (t[14] = o), (t[15] = 1), t;
      },
      str: function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
      },
      add: function (t, e, i) {
        return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), (t[4] = e[4] + i[4]), (t[5] = e[5] + i[5]), (t[6] = e[6] + i[6]), (t[7] = e[7] + i[7]), (t[8] = e[8] + i[8]), (t[9] = e[9] + i[9]), (t[10] = e[10] + i[10]), (t[11] = e[11] + i[11]), (t[12] = e[12] + i[12]), (t[13] = e[13] + i[13]), (t[14] = e[14] + i[14]), (t[15] = e[15] + i[15]), t;
      },
      subtract: T,
      multiplyScalar: function (t, e, i) {
        return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), (t[4] = e[4] * i), (t[5] = e[5] * i), (t[6] = e[6] * i), (t[7] = e[7] * i), (t[8] = e[8] * i), (t[9] = e[9] * i), (t[10] = e[10] * i), (t[11] = e[11] * i), (t[12] = e[12] * i), (t[13] = e[13] * i), (t[14] = e[14] * i), (t[15] = e[15] * i), t;
      },
      multiplyScalarAndAdd: function (t, e, i, n) {
        return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), (t[4] = e[4] + i[4] * n), (t[5] = e[5] + i[5] * n), (t[6] = e[6] + i[6] * n), (t[7] = e[7] + i[7] * n), (t[8] = e[8] + i[8] * n), (t[9] = e[9] + i[9] * n), (t[10] = e[10] + i[10] * n), (t[11] = e[11] + i[11] * n), (t[12] = e[12] + i[12] * n), (t[13] = e[13] + i[13] * n), (t[14] = e[14] + i[14] * n), (t[15] = e[15] + i[15] * n), t;
      },
      exactEquals: function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15];
      },
      equals: function (t, e) {
        var i = t[0],
          n = t[1],
          r = t[2],
          s = t[3],
          o = t[4],
          a = t[5],
          l = t[6],
          h = t[7],
          u = t[8],
          c = t[9],
          d = t[10],
          p = t[11],
          g = t[12],
          f = t[13],
          _ = t[14],
          m = t[15],
          b = e[0],
          E = e[1],
          v = e[2],
          T = e[3],
          x = e[4],
          A = e[5],
          y = e[6],
          M = e[7],
          S = e[8],
          O = e[9],
          I = e[10],
          C = e[11],
          N = e[12],
          P = e[13],
          t = e[14],
          e = e[15];
        return (
          Math.abs(i - b) <= R * Math.max(1, Math.abs(i), Math.abs(b)) &&
          Math.abs(n - E) <= R * Math.max(1, Math.abs(n), Math.abs(E)) &&
          Math.abs(r - v) <= R * Math.max(1, Math.abs(r), Math.abs(v)) &&
          Math.abs(s - T) <= R * Math.max(1, Math.abs(s), Math.abs(T)) &&
          Math.abs(o - x) <= R * Math.max(1, Math.abs(o), Math.abs(x)) &&
          Math.abs(a - A) <= R * Math.max(1, Math.abs(a), Math.abs(A)) &&
          Math.abs(l - y) <= R * Math.max(1, Math.abs(l), Math.abs(y)) &&
          Math.abs(h - M) <= R * Math.max(1, Math.abs(h), Math.abs(M)) &&
          Math.abs(u - S) <= R * Math.max(1, Math.abs(u), Math.abs(S)) &&
          Math.abs(c - O) <= R * Math.max(1, Math.abs(c), Math.abs(O)) &&
          Math.abs(d - I) <= R * Math.max(1, Math.abs(d), Math.abs(I)) &&
          Math.abs(p - C) <= R * Math.max(1, Math.abs(p), Math.abs(C)) &&
          Math.abs(g - N) <= R * Math.max(1, Math.abs(g), Math.abs(N)) &&
          Math.abs(f - P) <= R * Math.max(1, Math.abs(f), Math.abs(P)) &&
          Math.abs(_ - t) <= R * Math.max(1, Math.abs(_), Math.abs(t)) &&
          Math.abs(m - e) <= R * Math.max(1, Math.abs(m), Math.abs(e))
        );
      },
      mul: f,
      sub: T,
    });
    function A() {
      var t = new m(3);
      return m != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
    }
    function y(t) {
      var e = t[0],
        i = t[1],
        t = t[2];
      return Math.hypot(e, i, t);
    }
    function M(t, e, i) {
      var n = new m(3);
      return (n[0] = t), (n[1] = e), (n[2] = i), n;
    }
    function S(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t;
    }
    function O(t, e, i) {
      return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), (t[2] = e[2] * i[2]), t;
    }
    function I(t, e, i) {
      return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), (t[2] = e[2] / i[2]), t;
    }
    function C(t, e) {
      var i = e[0] - t[0],
        n = e[1] - t[1],
        t = e[2] - t[2];
      return Math.hypot(i, n, t);
    }
    function N(t, e) {
      var i = e[0] - t[0],
        n = e[1] - t[1],
        t = e[2] - t[2];
      return i * i + n * n + t * t;
    }
    function P(t) {
      var e = t[0],
        i = t[1],
        t = t[2];
      return e * e + i * i + t * t;
    }
    function L(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        r = i * i + n * n + r * r;
      return 0 < r && (r = 1 / Math.sqrt(r)), (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t;
    }
    function w(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    }
    function D(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = i[0],
        e = i[1],
        i = i[2];
      return (t[0] = r * i - s * e), (t[1] = s * o - n * i), (t[2] = n * e - r * o), t;
    }
    var F,
      B = S,
      U = O,
      k = I,
      V = C,
      G = N,
      z = y,
      j = P,
      H =
        ((F = A()),
        function (t, e, i, n, r, s) {
          var o, a;
          for (e = e || 3, i = i || 0, a = n ? Math.min(n * e + i, t.length) : t.length, o = i; o < a; o += e) (F[0] = t[o]), (F[1] = t[o + 1]), (F[2] = t[o + 2]), r(F, F, s), (t[o] = F[0]), (t[o + 1] = F[1]), (t[o + 2] = F[2]);
          return t;
        }),
      X = Object.freeze({
        create: A,
        clone: function (t) {
          var e = new m(3);
          return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
        },
        length: y,
        fromValues: M,
        copy: function (t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
        },
        set: function (t, e, i, n) {
          return (t[0] = e), (t[1] = i), (t[2] = n), t;
        },
        add: function (t, e, i) {
          return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t;
        },
        subtract: S,
        multiply: O,
        divide: I,
        ceil: function (t, e) {
          return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t;
        },
        floor: function (t, e) {
          return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t;
        },
        min: function (t, e, i) {
          return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), (t[2] = Math.min(e[2], i[2])), t;
        },
        max: function (t, e, i) {
          return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), (t[2] = Math.max(e[2], i[2])), t;
        },
        round: function (t, e) {
          return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t;
        },
        scale: function (t, e, i) {
          return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
        },
        scaleAndAdd: function (t, e, i, n) {
          return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), t;
        },
        distance: C,
        squaredDistance: N,
        squaredLength: P,
        negate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
        },
        inverse: function (t, e) {
          return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
        },
        normalize: L,
        dot: w,
        cross: D,
        lerp: function (t, e, i, n) {
          var r = e[0],
            s = e[1],
            e = e[2];
          return (t[0] = r + n * (i[0] - r)), (t[1] = s + n * (i[1] - s)), (t[2] = e + n * (i[2] - e)), t;
        },
        hermite: function (t, e, i, n, r, s) {
          var o = s * s,
            a = o * (2 * s - 3) + 1,
            l = o * (s - 2) + s,
            h = o * (s - 1),
            s = o * (3 - 2 * s);
          return (t[0] = e[0] * a + i[0] * l + n[0] * h + r[0] * s), (t[1] = e[1] * a + i[1] * l + n[1] * h + r[1] * s), (t[2] = e[2] * a + i[2] * l + n[2] * h + r[2] * s), t;
        },
        bezier: function (t, e, i, n, r, s) {
          var o = 1 - s,
            a = o * o,
            l = s * s,
            h = a * o,
            a = 3 * s * a,
            o = 3 * l * o,
            s = l * s;
          return (t[0] = e[0] * h + i[0] * a + n[0] * o + r[0] * s), (t[1] = e[1] * h + i[1] * a + n[1] * o + r[1] * s), (t[2] = e[2] * h + i[2] * a + n[2] * o + r[2] * s), t;
        },
        random: function (t, e) {
          e = e || 1;
          var i = 2 * h() * Math.PI,
            n = 2 * h() - 1,
            r = Math.sqrt(1 - n * n) * e;
          return (t[0] = Math.cos(i) * r), (t[1] = Math.sin(i) * r), (t[2] = n * e), t;
        },
        transformMat4: function (t, e, i) {
          var n = e[0],
            r = e[1],
            s = e[2],
            e = i[3] * n + i[7] * r + i[11] * s + i[15];
          return (t[0] = (i[0] * n + i[4] * r + i[8] * s + i[12]) / (e = e || 1)), (t[1] = (i[1] * n + i[5] * r + i[9] * s + i[13]) / e), (t[2] = (i[2] * n + i[6] * r + i[10] * s + i[14]) / e), t;
        },
        transformMat3: function (t, e, i) {
          var n = e[0],
            r = e[1],
            e = e[2];
          return (t[0] = n * i[0] + r * i[3] + e * i[6]), (t[1] = n * i[1] + r * i[4] + e * i[7]), (t[2] = n * i[2] + r * i[5] + e * i[8]), t;
        },
        transformQuat: function (t, e, i) {
          var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            a = e[0],
            l = e[1],
            h = e[2],
            u = r * h - s * l,
            c = s * a - n * h,
            i = n * l - r * a,
            e = r * i - s * c,
            s = s * u - n * i,
            r = n * c - r * u,
            o = 2 * o;
          return (c *= o), (i *= o), (s *= 2), (r *= 2), (t[0] = a + (u *= o) + (e *= 2)), (t[1] = l + c + s), (t[2] = h + i + r), t;
        },
        rotateX: function (t, e, i, n) {
          var r = [],
            s = [];
          return (r[0] = e[0] - i[0]), (r[1] = e[1] - i[1]), (r[2] = e[2] - i[2]), (s[0] = r[0]), (s[1] = r[1] * Math.cos(n) - r[2] * Math.sin(n)), (s[2] = r[1] * Math.sin(n) + r[2] * Math.cos(n)), (t[0] = s[0] + i[0]), (t[1] = s[1] + i[1]), (t[2] = s[2] + i[2]), t;
        },
        rotateY: function (t, e, i, n) {
          var r = [],
            s = [];
          return (r[0] = e[0] - i[0]), (r[1] = e[1] - i[1]), (r[2] = e[2] - i[2]), (s[0] = r[2] * Math.sin(n) + r[0] * Math.cos(n)), (s[1] = r[1]), (s[2] = r[2] * Math.cos(n) - r[0] * Math.sin(n)), (t[0] = s[0] + i[0]), (t[1] = s[1] + i[1]), (t[2] = s[2] + i[2]), t;
        },
        rotateZ: function (t, e, i, n) {
          var r = [],
            s = [];
          return (r[0] = e[0] - i[0]), (r[1] = e[1] - i[1]), (r[2] = e[2] - i[2]), (s[0] = r[0] * Math.cos(n) - r[1] * Math.sin(n)), (s[1] = r[0] * Math.sin(n) + r[1] * Math.cos(n)), (s[2] = r[2]), (t[0] = s[0] + i[0]), (t[1] = s[1] + i[1]), (t[2] = s[2] + i[2]), t;
        },
        angle: function (t, e) {
          (t = M(t[0], t[1], t[2])), (e = M(e[0], e[1], e[2]));
          L(t, t), L(e, e);
          e = w(t, e);
          return 1 < e ? 0 : e < -1 ? Math.PI : Math.acos(e);
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
        },
        str: function (t) {
          return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        exactEquals: function (t, e) {
          return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
        },
        equals: function (t, e) {
          var i = t[0],
            n = t[1],
            r = t[2],
            s = e[0],
            t = e[1],
            e = e[2];
          return Math.abs(i - s) <= R * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - t) <= R * Math.max(1, Math.abs(n), Math.abs(t)) && Math.abs(r - e) <= R * Math.max(1, Math.abs(r), Math.abs(e));
        },
        sub: B,
        mul: U,
        div: k,
        dist: V,
        sqrDist: G,
        len: z,
        sqrLen: j,
        forEach: H,
      });
    function W() {
      var t = new m(4);
      return m != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t;
    }
    function Y(t) {
      var e = new m(4);
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
    }
    function Z(t, e, i, n) {
      var r = new m(4);
      return (r[0] = t), (r[1] = e), (r[2] = i), (r[3] = n), r;
    }
    function K(t, e) {
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
    }
    function q(t, e, i, n, r) {
      return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), t;
    }
    function Q(t, e, i) {
      return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), t;
    }
    function J(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), (t[3] = e[3] - i[3]), t;
    }
    function $(t, e, i) {
      return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), (t[2] = e[2] * i[2]), (t[3] = e[3] * i[3]), t;
    }
    function tt(t, e, i) {
      return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), (t[2] = e[2] / i[2]), (t[3] = e[3] / i[3]), t;
    }
    function et(t, e, i) {
      return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), t;
    }
    function it(t, e) {
      var i = e[0] - t[0],
        n = e[1] - t[1],
        r = e[2] - t[2],
        t = e[3] - t[3];
      return Math.hypot(i, n, r, t);
    }
    function nt(t, e) {
      var i = e[0] - t[0],
        n = e[1] - t[1],
        r = e[2] - t[2],
        t = e[3] - t[3];
      return i * i + n * n + r * r + t * t;
    }
    function rt(t) {
      var e = t[0],
        i = t[1],
        n = t[2],
        t = t[3];
      return Math.hypot(e, i, n, t);
    }
    function st(t) {
      var e = t[0],
        i = t[1],
        n = t[2],
        t = t[3];
      return e * e + i * i + n * n + t * t;
    }
    function ot(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        e = i * i + n * n + r * r + s * s;
      return 0 < e && (e = 1 / Math.sqrt(e)), (t[0] = i * e), (t[1] = n * e), (t[2] = r * e), (t[3] = s * e), t;
    }
    function at(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    }
    function lt(t, e, i, n) {
      var r = e[0],
        s = e[1],
        o = e[2],
        e = e[3];
      return (t[0] = r + n * (i[0] - r)), (t[1] = s + n * (i[1] - s)), (t[2] = o + n * (i[2] - o)), (t[3] = e + n * (i[3] - e)), t;
    }
    function ht(t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
    }
    function ut(t, e) {
      var i = t[0],
        n = t[1],
        r = t[2],
        s = t[3],
        o = e[0],
        a = e[1],
        t = e[2],
        e = e[3];
      return Math.abs(i - o) <= R * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - a) <= R * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - t) <= R * Math.max(1, Math.abs(r), Math.abs(t)) && Math.abs(s - e) <= R * Math.max(1, Math.abs(s), Math.abs(e));
    }
    var ct,
      dt = J,
      pt = $,
      gt = tt,
      ft = it,
      _t = nt,
      mt = rt,
      bt = st,
      Et =
        ((ct = W()),
        function (t, e, i, n, r, s) {
          var o, a;
          for (e = e || 4, i = i || 0, a = n ? Math.min(n * e + i, t.length) : t.length, o = i; o < a; o += e) (ct[0] = t[o]), (ct[1] = t[o + 1]), (ct[2] = t[o + 2]), (ct[3] = t[o + 3]), r(ct, ct, s), (t[o] = ct[0]), (t[o + 1] = ct[1]), (t[o + 2] = ct[2]), (t[o + 3] = ct[3]);
          return t;
        }),
      vt = Object.freeze({
        create: W,
        clone: Y,
        fromValues: Z,
        copy: K,
        set: q,
        add: Q,
        subtract: J,
        multiply: $,
        divide: tt,
        ceil: function (t, e) {
          return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), (t[3] = Math.ceil(e[3])), t;
        },
        floor: function (t, e) {
          return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), (t[3] = Math.floor(e[3])), t;
        },
        min: function (t, e, i) {
          return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), (t[2] = Math.min(e[2], i[2])), (t[3] = Math.min(e[3], i[3])), t;
        },
        max: function (t, e, i) {
          return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), (t[2] = Math.max(e[2], i[2])), (t[3] = Math.max(e[3], i[3])), t;
        },
        round: function (t, e) {
          return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), (t[3] = Math.round(e[3])), t;
        },
        scale: et,
        scaleAndAdd: function (t, e, i, n) {
          return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), (t[2] = e[2] + i[2] * n), (t[3] = e[3] + i[3] * n), t;
        },
        distance: it,
        squaredDistance: nt,
        length: rt,
        squaredLength: st,
        negate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
        },
        inverse: function (t, e) {
          return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), (t[3] = 1 / e[3]), t;
        },
        normalize: ot,
        dot: at,
        cross: function (t, e, i, n) {
          var r = i[0] * n[1] - i[1] * n[0],
            s = i[0] * n[2] - i[2] * n[0],
            o = i[0] * n[3] - i[3] * n[0],
            a = i[1] * n[2] - i[2] * n[1],
            l = i[1] * n[3] - i[3] * n[1],
            h = i[2] * n[3] - i[3] * n[2],
            u = e[0],
            i = e[1],
            n = e[2],
            e = e[3];
          return (t[0] = i * h - n * l + e * a), (t[1] = -u * h + n * o - e * s), (t[2] = u * l - i * o + e * r), (t[3] = -u * a + i * s - n * r), t;
        },
        lerp: lt,
        random: function (t, e) {
          var i, n, r, s, o, a;
          for (e = e || 1; 1 <= (o = (i = 2 * h() - 1) * i + (n = 2 * h() - 1) * n); );
          for (; 1 <= (a = (r = 2 * h() - 1) * r + (s = 2 * h() - 1) * s); );
          var l = Math.sqrt((1 - o) / a);
          return (t[0] = e * i), (t[1] = e * n), (t[2] = e * r * l), (t[3] = e * s * l), t;
        },
        transformMat4: function (t, e, i) {
          var n = e[0],
            r = e[1],
            s = e[2],
            e = e[3];
          return (t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * e), (t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * e), (t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * e), (t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * e), t;
        },
        transformQuat: function (t, e, i) {
          var n = e[0],
            r = e[1],
            s = e[2],
            o = i[0],
            a = i[1],
            l = i[2],
            h = i[3],
            u = h * n + a * s - l * r,
            c = h * r + l * n - o * s,
            i = h * s + o * r - a * n,
            s = -o * n - a * r - l * s;
          return (t[0] = u * h + s * -o + c * -l - i * -a), (t[1] = c * h + s * -a + i * -o - u * -l), (t[2] = i * h + s * -l + u * -a - c * -o), (t[3] = e[3]), t;
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
        },
        str: function (t) {
          return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        },
        exactEquals: ht,
        equals: ut,
        sub: dt,
        mul: pt,
        div: gt,
        dist: ft,
        sqrDist: _t,
        len: mt,
        sqrLen: bt,
        forEach: Et,
      });
    function Tt() {
      var t = new m(4);
      return m != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t;
    }
    function xt(t, e, i) {
      i *= 0.5;
      var n = Math.sin(i);
      return (t[0] = n * e[0]), (t[1] = n * e[1]), (t[2] = n * e[2]), (t[3] = Math.cos(i)), t;
    }
    function At(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = i[0],
        l = i[1],
        e = i[2],
        i = i[3];
      return (t[0] = n * i + o * a + r * e - s * l), (t[1] = r * i + o * l + s * a - n * e), (t[2] = s * i + o * e + n * l - r * a), (t[3] = o * i - n * a - r * l - s * e), t;
    }
    function yt(t, e, i) {
      i *= 0.5;
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        e = Math.sin(i),
        i = Math.cos(i);
      return (t[0] = n * i + o * e), (t[1] = r * i + s * e), (t[2] = s * i - r * e), (t[3] = o * i - n * e), t;
    }
    function Mt(t, e, i) {
      i *= 0.5;
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        e = Math.sin(i),
        i = Math.cos(i);
      return (t[0] = n * i - s * e), (t[1] = r * i + o * e), (t[2] = s * i + n * e), (t[3] = o * i - r * e), t;
    }
    function St(t, e, i) {
      i *= 0.5;
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        e = Math.sin(i),
        i = Math.cos(i);
      return (t[0] = n * i + r * e), (t[1] = r * i - n * e), (t[2] = s * i + o * e), (t[3] = o * i - s * e), t;
    }
    function Ot(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = Math.sqrt(i * i + n * n + r * r),
        e = Math.exp(s),
        s = 0 < o ? (e * Math.sin(o)) / o : 0;
      return (t[0] = i * s), (t[1] = n * s), (t[2] = r * s), (t[3] = e * Math.cos(o)), t;
    }
    function It(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        e = Math.sqrt(i * i + n * n + r * r),
        e = 0 < e ? Math.atan2(e, s) / e : 0;
      return (t[0] = i * e), (t[1] = n * e), (t[2] = r * e), (t[3] = 0.5 * Math.log(i * i + n * n + r * r + s * s)), t;
    }
    function Ct(t, e, i, n) {
      var r,
        s = e[0],
        o = e[1],
        a = e[2],
        l = e[3],
        h = i[0],
        u = i[1],
        c = i[2],
        d = i[3];
      return (e = s * h + o * u + a * c + l * d) < 0 && ((e = -e), (h = -h), (u = -u), (c = -c), (d = -d)), (n = R < 1 - e ? ((i = Math.acos(e)), (e = Math.sin(i)), (r = Math.sin((1 - n) * i) / e), Math.sin(n * i) / e) : ((r = 1 - n), n)), (t[0] = r * s + n * h), (t[1] = r * o + n * u), (t[2] = r * a + n * c), (t[3] = r * l + n * d), t;
    }
    function Nt(t, e) {
      var i,
        n,
        r,
        s = e[0] + e[4] + e[8];
      return 0 < s ? ((r = Math.sqrt(s + 1)), (t[3] = 0.5 * r), (t[0] = (e[5] - e[7]) * (r = 0.5 / r)), (t[1] = (e[6] - e[2]) * r), (t[2] = (e[1] - e[3]) * r)) : (e[4] > e[(i = 0)] && (i = 1), (n = ((i = e[8] > e[3 * i + i] ? 2 : i) + 1) % 3), (s = (i + 2) % 3), (r = Math.sqrt(e[3 * i + i] - e[3 * n + n] - e[3 * s + s] + 1)), (t[i] = 0.5 * r), (t[3] = (e[3 * n + s] - e[3 * s + n]) * (r = 0.5 / r)), (t[n] = (e[3 * n + i] + e[3 * i + n]) * r), (t[s] = (e[3 * s + i] + e[3 * i + s]) * r)), t;
    }
    var Pt,
      Rt,
      Lt,
      wt,
      Dt,
      Ft,
      Bt = Y,
      B = Z,
      U = K,
      k = q,
      V = Q,
      G = At,
      Ut = et,
      kt = at,
      j = lt,
      H = rt,
      dt = H,
      pt = st,
      gt = pt,
      Vt = ot,
      ft = ht,
      _t = ut,
      mt =
        ((Pt = A()),
        (Rt = M(1, 0, 0)),
        (Lt = M(0, 1, 0)),
        function (t, e, i) {
          var n = w(e, i);
          return n < -0.999999 ? (D(Pt, Rt, e), z(Pt) < 1e-6 && D(Pt, Lt, e), L(Pt, Pt), xt(t, Pt, Math.PI), t) : 0.999999 < n ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t) : (D(Pt, e, i), (t[0] = Pt[0]), (t[1] = Pt[1]), (t[2] = Pt[2]), (t[3] = 1 + n), Vt(t, t));
        }),
      bt =
        ((wt = Tt()),
        (Dt = Tt()),
        function (t, e, i, n, r, s) {
          return Ct(wt, e, r, s), Ct(Dt, i, n, s), Ct(t, wt, Dt, 2 * s * (1 - s)), t;
        }),
      Et =
        ((Ft = u()),
        function (t, e, i, n) {
          return (Ft[0] = i[0]), (Ft[3] = i[1]), (Ft[6] = i[2]), (Ft[1] = n[0]), (Ft[4] = n[1]), (Ft[7] = n[2]), (Ft[2] = -e[0]), (Ft[5] = -e[1]), (Ft[8] = -e[2]), Vt(t, Nt(t, Ft));
        }),
      dt = Object.freeze({
        create: Tt,
        identity: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        },
        setAxisAngle: xt,
        getAxisAngle: function (t, e) {
          var i = 2 * Math.acos(e[3]),
            n = Math.sin(i / 2);
          return R < n ? ((t[0] = e[0] / n), (t[1] = e[1] / n), (t[2] = e[2] / n)) : ((t[0] = 1), (t[1] = 0), (t[2] = 0)), i;
        },
        getAngle: function (t, e) {
          e = kt(t, e);
          return Math.acos(2 * e * e - 1);
        },
        multiply: At,
        rotateX: yt,
        rotateY: Mt,
        rotateZ: St,
        calculateW: function (t, e) {
          var i = e[0],
            n = e[1],
            e = e[2];
          return (t[0] = i), (t[1] = n), (t[2] = e), (t[3] = Math.sqrt(Math.abs(1 - i * i - n * n - e * e))), t;
        },
        exp: Ot,
        ln: It,
        pow: function (t, e, i) {
          return It(t, e), Ut(t, t, i), Ot(t, t), t;
        },
        slerp: Ct,
        random: function (t) {
          var e = h(),
            i = h(),
            n = h(),
            r = Math.sqrt(1 - e),
            e = Math.sqrt(e);
          return (t[0] = r * Math.sin(2 * Math.PI * i)), (t[1] = r * Math.cos(2 * Math.PI * i)), (t[2] = e * Math.sin(2 * Math.PI * n)), (t[3] = e * Math.cos(2 * Math.PI * n)), t;
        },
        invert: function (t, e) {
          var i = e[0],
            n = e[1],
            r = e[2],
            s = e[3],
            e = i * i + n * n + r * r + s * s,
            e = e ? 1 / e : 0;
          return (t[0] = -i * e), (t[1] = -n * e), (t[2] = -r * e), (t[3] = s * e), t;
        },
        conjugate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t;
        },
        fromMat3: Nt,
        fromEuler: function (t, e, i, n) {
          var r = (0.5 * Math.PI) / 180;
          (e *= r), (i *= r), (n *= r);
          var s = Math.sin(e),
            o = Math.cos(e),
            r = Math.sin(i),
            e = Math.cos(i),
            i = Math.sin(n),
            n = Math.cos(n);
          return (t[0] = s * e * n - o * r * i), (t[1] = o * r * n + s * e * i), (t[2] = o * e * i - s * r * n), (t[3] = o * e * n + s * r * i), t;
        },
        str: function (t) {
          return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        },
        clone: Bt,
        fromValues: B,
        copy: U,
        set: k,
        add: V,
        mul: G,
        scale: Ut,
        dot: kt,
        lerp: j,
        length: H,
        len: dt,
        squaredLength: pt,
        sqrLen: gt,
        normalize: Vt,
        exactEquals: ft,
        equals: _t,
        rotationTo: mt,
        sqlerp: bt,
        setAxes: Et,
      });
    function Gt(t, e, i) {
      var n = 0.5 * i[0],
        r = 0.5 * i[1],
        s = 0.5 * i[2],
        o = e[0],
        a = e[1],
        i = e[2],
        e = e[3];
      return (t[0] = o), (t[1] = a), (t[2] = i), (t[3] = e), (t[4] = n * e + r * i - s * a), (t[5] = r * e + s * o - n * i), (t[6] = s * e + n * a - r * o), (t[7] = -n * o - r * a - s * i), t;
    }
    function zt(t, e) {
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), (t[6] = e[6]), (t[7] = e[7]), t;
    }
    function jt(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = i[4],
        l = i[5],
        h = i[6],
        u = i[7],
        c = e[4],
        d = e[5],
        p = e[6],
        g = e[7],
        f = i[0],
        _ = i[1],
        e = i[2],
        i = i[3];
      return (t[0] = n * i + o * f + r * e - s * _), (t[1] = r * i + o * _ + s * f - n * e), (t[2] = s * i + o * e + n * _ - r * f), (t[3] = o * i - n * f - r * _ - s * e), (t[4] = n * u + o * a + r * h - s * l + c * i + g * f + d * e - p * _), (t[5] = r * u + o * l + s * a - n * h + d * i + g * _ + p * f - c * e), (t[6] = s * u + o * h + n * l - r * a + p * i + g * e + c * _ - d * f), (t[7] = o * u - n * a - r * l - s * h + g * i - c * f - d * _ - p * e), t;
    }
    var Ht = kt,
      Xt = pt,
      gt = Object.freeze({
        create: function () {
          var t = new m(8);
          return m != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)), (t[3] = 1), t;
        },
        clone: function (t) {
          var e = new m(8);
          return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), (e[6] = t[6]), (e[7] = t[7]), e;
        },
        fromValues: function (t, e, i, n, r, s, o, a) {
          var l = new m(8);
          return (l[0] = t), (l[1] = e), (l[2] = i), (l[3] = n), (l[4] = r), (l[5] = s), (l[6] = o), (l[7] = a), l;
        },
        fromRotationTranslationValues: function (t, e, i, n, r, s, o) {
          var a = new m(8);
          (a[0] = t), (a[1] = e), (a[2] = i), (a[3] = n);
          (r *= 0.5), (s *= 0.5), (o *= 0.5);
          return (a[4] = r * n + s * i - o * e), (a[5] = s * n + o * t - r * i), (a[6] = o * n + r * e - s * t), (a[7] = -r * t - s * e - o * i), a;
        },
        fromRotationTranslation: Gt,
        fromTranslation: function (t, e) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0.5 * e[0]), (t[5] = 0.5 * e[1]), (t[6] = 0.5 * e[2]), (t[7] = 0), t;
        },
        fromRotation: function (t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t;
        },
        fromMat4: function (t, e) {
          var i = Tt();
          v(i, e);
          var n = new m(3);
          return b(n, e), Gt(t, i, n), t;
        },
        copy: zt,
        identity: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t;
        },
        set: function (t, e, i, n, r, s, o, a, l) {
          return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), (t[4] = s), (t[5] = o), (t[6] = a), (t[7] = l), t;
        },
        getReal: U,
        getDual: function (t, e) {
          return (t[0] = e[4]), (t[1] = e[5]), (t[2] = e[6]), (t[3] = e[7]), t;
        },
        setReal: U,
        setDual: function (t, e) {
          return (t[4] = e[0]), (t[5] = e[1]), (t[6] = e[2]), (t[7] = e[3]), t;
        },
        getTranslation: function (t, e) {
          var i = e[4],
            n = e[5],
            r = e[6],
            s = e[7],
            o = -e[0],
            a = -e[1],
            l = -e[2],
            e = e[3];
          return (t[0] = 2 * (i * e + s * o + n * l - r * a)), (t[1] = 2 * (n * e + s * a + r * o - i * l)), (t[2] = 2 * (r * e + s * l + i * a - n * o)), t;
        },
        translate: function (t, e, i) {
          var n = e[0],
            r = e[1],
            s = e[2],
            o = e[3],
            a = 0.5 * i[0],
            l = 0.5 * i[1],
            h = 0.5 * i[2],
            u = e[4],
            c = e[5],
            i = e[6],
            e = e[7];
          return (t[0] = n), (t[1] = r), (t[2] = s), (t[3] = o), (t[4] = o * a + r * h - s * l + u), (t[5] = o * l + s * a - n * h + c), (t[6] = o * h + n * l - r * a + i), (t[7] = -n * a - r * l - s * h + e), t;
        },
        rotateX: function (t, e, i) {
          var n = -e[0],
            r = -e[1],
            s = -e[2],
            o = e[3],
            a = e[4],
            l = e[5],
            h = e[6],
            u = e[7],
            c = a * o + u * n + l * s - h * r,
            d = l * o + u * r + h * n - a * s,
            p = h * o + u * s + a * r - l * n,
            h = u * o - a * n - l * r - h * s;
          return yt(t, e, i), (n = t[0]), (r = t[1]), (s = t[2]), (o = t[3]), (t[4] = c * o + h * n + d * s - p * r), (t[5] = d * o + h * r + p * n - c * s), (t[6] = p * o + h * s + c * r - d * n), (t[7] = h * o - c * n - d * r - p * s), t;
        },
        rotateY: function (t, e, i) {
          var n = -e[0],
            r = -e[1],
            s = -e[2],
            o = e[3],
            a = e[4],
            l = e[5],
            h = e[6],
            u = e[7],
            c = a * o + u * n + l * s - h * r,
            d = l * o + u * r + h * n - a * s,
            p = h * o + u * s + a * r - l * n,
            h = u * o - a * n - l * r - h * s;
          return Mt(t, e, i), (n = t[0]), (r = t[1]), (s = t[2]), (o = t[3]), (t[4] = c * o + h * n + d * s - p * r), (t[5] = d * o + h * r + p * n - c * s), (t[6] = p * o + h * s + c * r - d * n), (t[7] = h * o - c * n - d * r - p * s), t;
        },
        rotateZ: function (t, e, i) {
          var n = -e[0],
            r = -e[1],
            s = -e[2],
            o = e[3],
            a = e[4],
            l = e[5],
            h = e[6],
            u = e[7],
            c = a * o + u * n + l * s - h * r,
            d = l * o + u * r + h * n - a * s,
            p = h * o + u * s + a * r - l * n,
            h = u * o - a * n - l * r - h * s;
          return St(t, e, i), (n = t[0]), (r = t[1]), (s = t[2]), (o = t[3]), (t[4] = c * o + h * n + d * s - p * r), (t[5] = d * o + h * r + p * n - c * s), (t[6] = p * o + h * s + c * r - d * n), (t[7] = h * o - c * n - d * r - p * s), t;
        },
        rotateByQuatAppend: function (t, e, i) {
          var n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            a = e[0],
            l = e[1],
            h = e[2],
            i = e[3];
          return (t[0] = a * o + i * n + l * s - h * r), (t[1] = l * o + i * r + h * n - a * s), (t[2] = h * o + i * s + a * r - l * n), (t[3] = i * o - a * n - l * r - h * s), (a = e[4]), (l = e[5]), (h = e[6]), (i = e[7]), (t[4] = a * o + i * n + l * s - h * r), (t[5] = l * o + i * r + h * n - a * s), (t[6] = h * o + i * s + a * r - l * n), (t[7] = i * o - a * n - l * r - h * s), t;
        },
        rotateByQuatPrepend: function (t, e, i) {
          var n = e[0],
            r = e[1],
            s = e[2],
            o = e[3],
            a = i[0],
            l = i[1],
            h = i[2],
            e = i[3];
          return (t[0] = n * e + o * a + r * h - s * l), (t[1] = r * e + o * l + s * a - n * h), (t[2] = s * e + o * h + n * l - r * a), (t[3] = o * e - n * a - r * l - s * h), (a = i[4]), (l = i[5]), (h = i[6]), (e = i[7]), (t[4] = n * e + o * a + r * h - s * l), (t[5] = r * e + o * l + s * a - n * h), (t[6] = s * e + o * h + n * l - r * a), (t[7] = o * e - n * a - r * l - s * h), t;
        },
        rotateAroundAxis: function (t, e, i, n) {
          if (Math.abs(n) < R) return zt(t, e);
          var r = Math.hypot(i[0], i[1], i[2]);
          n *= 0.5;
          var s = Math.sin(n),
            o = (s * i[0]) / r,
            a = (s * i[1]) / r,
            l = (s * i[2]) / r,
            h = Math.cos(n),
            s = e[0],
            i = e[1],
            r = e[2],
            n = e[3];
          (t[0] = s * h + n * o + i * l - r * a), (t[1] = i * h + n * a + r * o - s * l), (t[2] = r * h + n * l + s * a - i * o), (t[3] = n * h - s * o - i * a - r * l);
          (s = e[4]), (i = e[5]), (r = e[6]), (e = e[7]);
          return (t[4] = s * h + e * o + i * l - r * a), (t[5] = i * h + e * a + r * o - s * l), (t[6] = r * h + e * l + s * a - i * o), (t[7] = e * h - s * o - i * a - r * l), t;
        },
        add: function (t, e, i) {
          return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), (t[3] = e[3] + i[3]), (t[4] = e[4] + i[4]), (t[5] = e[5] + i[5]), (t[6] = e[6] + i[6]), (t[7] = e[7] + i[7]), t;
        },
        multiply: jt,
        mul: jt,
        scale: function (t, e, i) {
          return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), (t[3] = e[3] * i), (t[4] = e[4] * i), (t[5] = e[5] * i), (t[6] = e[6] * i), (t[7] = e[7] * i), t;
        },
        dot: Ht,
        lerp: function (t, e, i, n) {
          var r = 1 - n;
          return Ht(e, i) < 0 && (n = -n), (t[0] = e[0] * r + i[0] * n), (t[1] = e[1] * r + i[1] * n), (t[2] = e[2] * r + i[2] * n), (t[3] = e[3] * r + i[3] * n), (t[4] = e[4] * r + i[4] * n), (t[5] = e[5] * r + i[5] * n), (t[6] = e[6] * r + i[6] * n), (t[7] = e[7] * r + i[7] * n), t;
        },
        invert: function (t, e) {
          var i = Xt(e);
          return (t[0] = -e[0] / i), (t[1] = -e[1] / i), (t[2] = -e[2] / i), (t[3] = e[3] / i), (t[4] = -e[4] / i), (t[5] = -e[5] / i), (t[6] = -e[6] / i), (t[7] = e[7] / i), t;
        },
        conjugate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), (t[4] = -e[4]), (t[5] = -e[5]), (t[6] = -e[6]), (t[7] = e[7]), t;
        },
        length: H,
        len: H,
        squaredLength: Xt,
        sqrLen: Xt,
        normalize: function (t, e) {
          var i,
            n,
            r,
            s,
            o,
            a,
            l,
            h,
            u = Xt(e);
          return 0 < u && ((u = Math.sqrt(u)), (i = e[0] / u), (n = e[1] / u), (r = e[2] / u), (s = e[3] / u), (e = i * (o = e[4]) + n * (a = e[5]) + r * (l = e[6]) + s * (h = e[7])), (t[0] = i), (t[1] = n), (t[2] = r), (t[3] = s), (t[4] = (o - i * e) / u), (t[5] = (a - n * e) / u), (t[6] = (l - r * e) / u), (t[7] = (h - s * e) / u)), t;
        },
        str: function (t) {
          return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")";
        },
        exactEquals: function (t, e) {
          return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7];
        },
        equals: function (t, e) {
          var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = t[4],
            a = t[5],
            l = t[6],
            h = t[7],
            u = e[0],
            c = e[1],
            d = e[2],
            p = e[3],
            g = e[4],
            f = e[5],
            t = e[6],
            e = e[7];
          return Math.abs(i - u) <= R * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(n - c) <= R * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(r - d) <= R * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(s - p) <= R * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(o - g) <= R * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(a - f) <= R * Math.max(1, Math.abs(a), Math.abs(f)) && Math.abs(l - t) <= R * Math.max(1, Math.abs(l), Math.abs(t)) && Math.abs(h - e) <= R * Math.max(1, Math.abs(h), Math.abs(e));
        },
      });
    function Wt() {
      var t = new m(2);
      return m != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
    }
    function Yt(t, e, i) {
      return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t;
    }
    function Zt(t, e, i) {
      return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), t;
    }
    function Kt(t, e, i) {
      return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), t;
    }
    function qt(t, e) {
      var i = e[0] - t[0],
        t = e[1] - t[1];
      return Math.hypot(i, t);
    }
    function Qt(t, e) {
      var i = e[0] - t[0],
        t = e[1] - t[1];
      return i * i + t * t;
    }
    function Jt(t) {
      var e = t[0],
        t = t[1];
      return Math.hypot(e, t);
    }
    function $t(t) {
      var e = t[0],
        t = t[1];
      return e * e + t * t;
    }
    var te,
      ft = Jt,
      _t = Yt,
      mt = Zt,
      bt = Kt,
      Et = qt,
      pt = Qt,
      U = $t,
      H =
        ((te = Wt()),
        function (t, e, i, n, r, s) {
          var o, a;
          for (e = e || 2, i = i || 0, a = n ? Math.min(n * e + i, t.length) : t.length, o = i; o < a; o += e) (te[0] = t[o]), (te[1] = t[o + 1]), r(te, te, s), (t[o] = te[0]), (t[o + 1] = te[1]);
          return t;
        }),
      H = Object.freeze({
        create: Wt,
        clone: function (t) {
          var e = new m(2);
          return (e[0] = t[0]), (e[1] = t[1]), e;
        },
        fromValues: function (t, e) {
          var i = new m(2);
          return (i[0] = t), (i[1] = e), i;
        },
        copy: function (t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), t;
        },
        set: function (t, e, i) {
          return (t[0] = e), (t[1] = i), t;
        },
        add: function (t, e, i) {
          return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t;
        },
        subtract: Yt,
        multiply: Zt,
        divide: Kt,
        ceil: function (t, e) {
          return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
        },
        floor: function (t, e) {
          return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
        },
        min: function (t, e, i) {
          return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), t;
        },
        max: function (t, e, i) {
          return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), t;
        },
        round: function (t, e) {
          return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
        },
        scale: function (t, e, i) {
          return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
        },
        scaleAndAdd: function (t, e, i, n) {
          return (t[0] = e[0] + i[0] * n), (t[1] = e[1] + i[1] * n), t;
        },
        distance: qt,
        squaredDistance: Qt,
        length: Jt,
        squaredLength: $t,
        negate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), t;
        },
        inverse: function (t, e) {
          return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
        },
        normalize: function (t, e) {
          var i = e[0],
            n = e[1],
            n = i * i + n * n;
          return 0 < n && (n = 1 / Math.sqrt(n)), (t[0] = e[0] * n), (t[1] = e[1] * n), t;
        },
        dot: function (t, e) {
          return t[0] * e[0] + t[1] * e[1];
        },
        cross: function (t, e, i) {
          i = e[0] * i[1] - e[1] * i[0];
          return (t[0] = t[1] = 0), (t[2] = i), t;
        },
        lerp: function (t, e, i, n) {
          var r = e[0],
            e = e[1];
          return (t[0] = r + n * (i[0] - r)), (t[1] = e + n * (i[1] - e)), t;
        },
        random: function (t, e) {
          e = e || 1;
          var i = 2 * h() * Math.PI;
          return (t[0] = Math.cos(i) * e), (t[1] = Math.sin(i) * e), t;
        },
        transformMat2: function (t, e, i) {
          var n = e[0],
            e = e[1];
          return (t[0] = i[0] * n + i[2] * e), (t[1] = i[1] * n + i[3] * e), t;
        },
        transformMat2d: function (t, e, i) {
          var n = e[0],
            e = e[1];
          return (t[0] = i[0] * n + i[2] * e + i[4]), (t[1] = i[1] * n + i[3] * e + i[5]), t;
        },
        transformMat3: function (t, e, i) {
          var n = e[0],
            e = e[1];
          return (t[0] = i[0] * n + i[3] * e + i[6]), (t[1] = i[1] * n + i[4] * e + i[7]), t;
        },
        transformMat4: function (t, e, i) {
          var n = e[0],
            e = e[1];
          return (t[0] = i[0] * n + i[4] * e + i[12]), (t[1] = i[1] * n + i[5] * e + i[13]), t;
        },
        rotate: function (t, e, i, n) {
          var r = e[0] - i[0],
            s = e[1] - i[1],
            e = Math.sin(n),
            n = Math.cos(n);
          return (t[0] = r * n - s * e + i[0]), (t[1] = r * e + s * n + i[1]), t;
        },
        angle: function (t, e) {
          var i = t[0],
            n = t[1],
            r = e[0],
            s = e[1],
            t = i * i + n * n,
            e = r * r + s * s,
            e = (i * r + n * s) * (t = 0 < t ? 1 / Math.sqrt(t) : t) * (e = 0 < e ? 1 / Math.sqrt(e) : e);
          return 1 < e ? 0 : e < -1 ? Math.PI : Math.acos(e);
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), t;
        },
        str: function (t) {
          return "vec2(" + t[0] + ", " + t[1] + ")";
        },
        exactEquals: function (t, e) {
          return t[0] === e[0] && t[1] === e[1];
        },
        equals: function (t, e) {
          var i = t[0],
            n = t[1],
            t = e[0],
            e = e[1];
          return Math.abs(i - t) <= R * Math.max(1, Math.abs(i), Math.abs(t)) && Math.abs(n - e) <= R * Math.max(1, Math.abs(n), Math.abs(e));
        },
        len: ft,
        sub: _t,
        mul: mt,
        div: bt,
        dist: Et,
        sqrDist: pt,
        sqrLen: U,
        forEach: H,
      });
    (t.glMatrix = i), (t.mat2 = s), (t.mat2d = l), (t.mat3 = p), (t.mat4 = x), (t.quat = dt), (t.quat2 = gt), (t.vec2 = H), (t.vec3 = X), (t.vec4 = vt), Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (window.glMatrix = glMatrix),
  (window.mat2 = glMatrix.mat2),
  (window.mat2d = glMatrix.mat2d),
  (window.mat3 = glMatrix.mat3),
  (window.mat4 = glMatrix.mat4),
  (window.quat = glMatrix.quat),
  (window.quat2 = glMatrix.quat2),
  (window.vec2 = glMatrix.vec2),
  (window.vec3 = glMatrix.vec3),
  (window.vec4 = glMatrix.vec4),
  ((CABLES = CABLES || {}).build = { timestamp: 1658229186222, created: "2022-07-19T11:13:06.222Z", git: { branch: "master", commit: "819fc0e7c02646be982b7338326b610a383cd8f6", date: "2022-07-19T11:09:39.000Z", message: "corelib" } }),
  CABLES.exportedPatches || (CABLES.exportedPatches = {}),
  (CABLES.exportedPatches.clRfab = {
    settings: { opExample: [], licence: "none", isPublic: !1, manualScreenshot: !0 },
    ops: [
      {
        objName: "Ops.Points.PointsSphereRandom",
        id: "0",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Amount of points", value: 1e5 },
          { name: "Sphere size", value: 1 },
          { name: "Random seed", value: 0 },
          { name: "Random distance from sphere", value: 0.402 },
          { name: "Distribution index", value: 0 },
          { name: "Distribution", value: "Poles" },
        ],
        portsOut: [
          { name: "Array out", links: [{ portIn: "Array", portOut: "Array out", objIn: "1", objOut: "0" }] },
          { name: "Total points", value: 1e5 },
          { name: "Array length", value: 3e5 },
        ],
      },
      {
        objName: "Ops.Gl.Meshes.PointCloudFromArray",
        id: "1",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "Array" }, { name: "Num Points", value: 0 }, { name: "Scramble Texcoords", value: !0 }, { name: "Seed", value: 0 }, { name: "Coordinates", value: 0 }, { name: "Vertex Colors", value: 0 }],
        portsOut: [{ name: "Trigger out", value: 0 }, { name: "Geometry" }],
      },
      {
        objName: "Ops.Gl.MainLoop",
        id: "2",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "FPS Limit", value: 0 },
          { name: "Reduce FPS not focussed", value: !1 },
          { name: "Reduce FPS loading", value: !1 },
          { name: "Clear", value: !0 },
          { name: "ClearAlpha", value: !0 },
          { name: "Fullscreen Button", value: !1 },
          { name: "Active", value: !0 },
          { name: "Hires Displays", value: !1 },
          { name: "Pixel Unit index", value: 0 },
          { name: "Pixel Unit", value: "Display" },
        ],
        portsOut: [
          { name: "trigger", links: [{ portIn: "exe", portOut: "trigger", objIn: "22", objOut: "2" }] },
          { name: "width", value: 898 },
          { name: "height", value: 567 },
        ],
      },
      {
        objName: "Ops.Gl.Shader.PointMaterial_v4",
        id: "3",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "PointSize" },
          { name: "Size in Pixels", value: !1 },
          { name: "Random Size", value: 0 },
          { name: "Round", value: !0 },
          { name: "Round Antialias", value: !0 },
          { name: "Scale by Distance", value: !0 },
          { name: "r", value: 0.5323251891770633 },
          { name: "g", value: 0.6857146862801866 },
          { name: "b", value: 0.9021211751302083 },
          { name: "a", value: 1 },
          { name: "Vertex Colors", value: !1 },
          { name: "texture", value: 0 },
          { name: "Colorize Texture", value: !1 },
          { name: "Texture Mask", value: 0 },
          { name: "Mask Channel index", value: 0 },
          { name: "Mask Channel", value: "R" },
          { name: "Texture Colorize", value: 0 },
          { name: "Colorize Randomize", value: !0 },
          { name: "Texture Opacity", value: 0 },
          { name: "Texture Point Size", value: 0 },
          { name: "Point Size Channel index", value: 0 },
          { name: "Point Size Channel", value: "R" },
          { name: "Texture Point Size Mul", value: 1 },
          { name: "Map Size 0 index", value: 0 },
          { name: "Map Size 0", value: "Black" },
          { name: "Flip Texture", value: !1 },
        ],
        portsOut: [{ name: "trigger", links: [{ portIn: "Render", portOut: "trigger", objIn: "6", objOut: "3" }] }, { name: "shader" }],
      },
      {
        objName: "Ops.Gl.Performance",
        id: "4",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "Visible" }, { name: "Position index", value: 0 }, { name: "Position", value: "bottom" }, { name: "Open", value: !1 }, { name: "Smooth Graph", value: !0 }, { name: "Scale", value: 4 }, { name: "Size", value: 128 }],
        portsOut: [{ name: "childs", links: [{ portIn: "render", portOut: "childs", objIn: "3", objOut: "4" }] }, { name: "Canvas" }, { name: "FPS", value: 58 }],
      },
      {
        objName: "Ops.Gl.ShaderEffects.ColorArea_v3",
        id: "5",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Render" },
          { name: "Area index", value: 0 },
          { name: "Area", value: "Axis Z" },
          { name: "Size", value: 1.01 },
          { name: "Amount", value: 1 },
          { name: "Falloff", value: 0.861 },
          { name: "Invert", value: !1 },
          { name: "Blend  index", value: 0 },
          { name: "Blend ", value: "Normal" },
          { name: "r", value: 0.9098039215686274 },
          { name: "g", value: 0.6313725490196078 },
          { name: "b", value: 0.8313725490196078 },
          { name: "x", value: 0 },
          { name: "y", value: 0 },
          { name: "z", value: 0 },
          { name: "Size X", value: 1 },
          { name: "WorldSpace", value: !0 },
          { name: "Priority", value: !0 },
        ],
        portsOut: [{ name: "Next", links: [{ portIn: "Render", portOut: "Next", objIn: "7", objOut: "5" }] }],
      },
      {
        objName: "Ops.Gl.ShaderEffects.ColorArea_v3",
        id: "6",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Render" },
          { name: "Area index", value: 0 },
          { name: "Area", value: "Box" },
          { name: "Size", value: 2.83 },
          { name: "Amount", value: 1 },
          { name: "Falloff", value: 0.443 },
          { name: "Invert", value: !0 },
          { name: "Blend  index", value: 0 },
          { name: "Blend ", value: "Normal" },
          { name: "r", value: 0.1411764705882353 },
          { name: "g", value: 0.15686274509803919 },
          { name: "b", value: 0.3137254901960784 },
          { name: "x", value: 0 },
          { name: "y", value: 0 },
          { name: "z", value: 0 },
          { name: "Size X", value: 1 },
          { name: "WorldSpace", value: !0 },
          { name: "Priority", value: !0 },
        ],
        portsOut: [{ name: "Next", links: [{ portIn: "Render", portOut: "Next", objIn: "5", objOut: "6" }] }],
      },
      {
        objName: "Ops.Gl.BlendMode",
        id: "7",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "Render" }, { name: "Blendmode index", value: 1 }, { name: "Blendmode", value: "Multiply" }, { name: "Premultiplied", value: !1 }],
        portsOut: [{ name: "Next", links: [{ portIn: "render", portOut: "Next", objIn: "8", objOut: "7" }] }],
      },
      {
        objName: "Ops.Gl.ShaderEffects.AreaRotate",
        id: "8",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "render" }, { name: "Size", value: 1.05 }, { name: "Strength" }, { name: "Smooth", value: !1 }, { name: "x", value: 1.24 }, { name: "y", value: 0 }, { name: "z", value: 0 }],
        portsOut: [{ name: "trigger", links: [{ portIn: "render", portOut: "trigger", objIn: "12", objOut: "8" }] }],
      },
      {
        objName: "Ops.Gl.ShaderEffects.TransformVertex",
        id: "9",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "render" }, { name: "Translate X", value: 0 }, { name: "Translate Y", value: 0 }, { name: "Translate Z", value: 0.45 }, { name: "Scale X", value: -2.24 }, { name: "Scale Y", value: 0.92 }, { name: "Scale Z" }, { name: "Rotation X", value: 0 }, { name: "Rotation Y" }, { name: "Rotation Z", value: 0 }, { name: "Transform normals", value: !0 }],
        portsOut: [{ name: "Trigger", links: [{ portIn: "exe", portOut: "Trigger", objIn: "1", objOut: "9" }] }],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "10",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "render" }, { name: "posX", value: 0 }, { name: "posY", value: 0 }, { name: "posZ", value: 0 }, { name: "scale", value: 1 }, { name: "rotX", value: 143.58 }, { name: "rotY" }, { name: "rotZ", value: 0 }],
        portsOut: [{ name: "trigger", links: [{ portIn: "render", portOut: "trigger", objIn: "9", objOut: "10" }] }],
      },
      {
        objName: "Ops.Anim.Timer_v2",
        id: "11",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Speed", value: 0.8 },
          { name: "Play", value: !0 },
          { name: "Reset", value: 0 },
          { name: "Sync to timeline", value: !1 },
        ],
        portsOut: [{ name: "Time", links: [{ portIn: "Rotation Y", portOut: "Time", objIn: "9", objOut: "11" }] }],
      },
      {
        objName: "Ops.Gl.ShaderEffects.AreaRotate",
        id: "12",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "render" }, { name: "Size", value: 2.61 }, { name: "Strength", value: 12.91 }, { name: "Smooth", value: !0 }, { name: "x", value: 0 }, { name: "y", value: 0.59 }, { name: "z", value: 0.16 }],
        portsOut: [{ name: "trigger", links: [{ portIn: "render", portOut: "trigger", objIn: "10", objOut: "12" }] }],
      },
      {
        objName: "Ops.Sidebar.Slider_v3",
        id: "13",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "link" }, { name: "Text", value: "point size" }, { name: "Min", value: 1 }, { name: "Max", value: 12 }, { name: "Step", value: 1e-5 }, { name: "Suffix", value: "" }, { name: "Grey Out", value: !1 }, { name: "Visible", value: !0 }, { name: "Input", value: 1.52856 }, { name: "Set Default", value: 0 }, { name: "Reset", value: 0 }, { name: "Default", value: 3.34 }],
        portsOut: [
          { name: "childs", links: [{ portIn: "link", portOut: "childs", objIn: "15", objOut: "13" }] },
          { name: "Result", links: [{ portIn: "PointSize", portOut: "Result", objIn: "3", objOut: "13" }] },
        ],
      },
      {
        objName: "Ops.Sidebar.Sidebar",
        id: "14",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "Visible" }, { name: "Opacity", value: 1 }, { name: "Default Minimized", value: !0 }, { name: "Minimized Opacity", value: 0.5 }, { name: "Show undo button", value: !1 }, { name: "Show Minimize", value: !1 }, { name: "Title", value: "adjustment" }, { name: "Side", value: !1 }],
        portsOut: [
          { name: "childs", links: [{ portIn: "link", portOut: "childs", objIn: "13", objOut: "14" }] },
          { name: "Opfened", value: !0 },
        ],
      },
      {
        objName: "Ops.Sidebar.SideBarStyle",
        id: "15",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "link" }, { name: "Width", value: 251 }, { name: "Round Corners", value: 1 }, { name: "Special Color", value: "turquoise" }],
        portsOut: [{ name: "childs" }],
      },
      {
        objName: "Ops.Anim.Smooth",
        id: "16",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "Update" }, { name: "Separate inc/dec", value: !1 }, { name: "Value", value: 0 }, { name: "Inc factor", value: 11.22 }, { name: "Dec factor", value: 4 }],
        portsOut: [
          { name: "Next", value: 0 },
          { name: "Result", links: [{ portIn: "rotY", portOut: "Result", objIn: "10", objOut: "16" }] },
        ],
      },
      {
        objName: "Ops.Gl.ClearColor",
        id: "17",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "render" }, { name: "r", value: 1 }, { name: "g", value: 1 }, { name: "b", value: 1 }, { name: "a", value: 1 }],
        portsOut: [{ name: "trigger", links: [{ portIn: "exe", portOut: "trigger", objIn: "4", objOut: "17" }] }],
      },
      {
        objName: "Ops.Boolean.ToggleBool",
        id: "18",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "trigger" }, { name: "reset", value: 0 }, { name: "Default", value: !1 }],
        portsOut: [
          {
            name: "result",
            links: [
              { portIn: "Visible", portOut: "result", objIn: "14", objOut: "18" },
              { portIn: "Visible", portOut: "result", objIn: "4", objOut: "18" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Devices.Mouse.MouseButtons",
        id: "19",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Area index", value: 0 },
          { name: "Area", value: "Canvas" },
          { name: "Active", value: !0 },
        ],
        portsOut: [
          { name: "Click Left", value: 0 },
          { name: "Click Right", links: [{ portIn: "trigger", portOut: "Click Right", objIn: "18", objOut: "19" }] },
          { name: "Double Click", value: 0 },
          { name: "Button pressed Left", links: [{ portIn: "bool", portOut: "Button pressed Left", objIn: "23", objOut: "19" }] },
          { name: "Button pressed Middle", value: !1 },
          { name: "Button pressed Right", value: !1 },
          { name: "Mouse Down Left", value: 0 },
          { name: "Mouse Down Middle", value: 0 },
          { name: "Mouse Down Right", value: 0 },
          { name: "Mouse Up Left", value: 0 },
          { name: "Mouse Up Middle", value: 0 },
          { name: "Mouse Up Right", value: 0 },
        ],
      },
      {
        objName: "Ops.Anim.RandomAnim",
        id: "20",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "exe", value: null },
          { name: "min", value: -10 },
          { name: "max", value: 10 },
          { name: "random seed", value: 0 },
          { name: "duration", value: 10 },
          { name: "pause between", value: 0 },
          { name: "easing index", value: 0 },
          { name: "easing", value: "smootherstep" },
        ],
        portsOut: [
          { name: "Next", value: 0 },
          {
            name: "result",
            links: [
              { portIn: "Number 1", portOut: "result", objIn: "21", objOut: "20" },
              { portIn: "Strength", portOut: "result", objIn: "8", objOut: "20" },
            ],
          },
          { name: "Looped", value: 0 },
        ],
      },
      {
        objName: "Ops.Ui.VizGraph",
        id: "21",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "Number 1" }, { name: "Number 2", value: 0 }, { name: "Number 3", value: 0 }, { name: "Number 4", value: 0 }, { name: "Number 5", value: 0 }, { name: "Number 6", value: 0 }, { name: "Number 7", value: 0 }, { name: "Number 8", value: 0 }, { name: "Reset", value: 0 }],
        portsOut: [],
      },
      {
        objName: "Ops.Sequence",
        id: "22",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "Clean up connections", value: 0 }, { name: "exe 0", value: 0 }, { name: "exe 1", value: 0 }, { name: "exe 2", value: 0 }, { name: "exe 3", value: 0 }, { name: "exe 4", value: 0 }, { name: "exe 5", value: 0 }, { name: "exe 6", value: 0 }, { name: "exe 7", value: 0 }, { name: "exe 8", value: 0 }, { name: "exe 9", value: 0 }, { name: "exe 10", value: 0 }, { name: "exe 11", value: 0 }, { name: "exe 12", value: 0 }, { name: "exe 13", value: 0 }, { name: "exe 14", value: 0 }],
        portsOut: [
          { name: "trigger 0", links: [{ portIn: "render", portOut: "trigger 0", objIn: "17", objOut: "22" }] },
          { name: "trigger 1", value: 0 },
          { name: "trigger 2", value: 0 },
          { name: "trigger 3", value: 0 },
          { name: "trigger 4", value: 0 },
          { name: "trigger 5", value: 0 },
          { name: "trigger 6", value: 0 },
          { name: "trigger 7", value: 0 },
          { name: "trigger 8", links: [{ portIn: "Update", portOut: "trigger 8", objIn: "16", objOut: "22" }] },
          { name: "trigger 9", value: 0 },
          { name: "trigger 10", links: [{ portIn: "exe", portOut: "trigger 10", objIn: "23", objOut: "22" }] },
          { name: "trigger 11", value: 0 },
          { name: "trigger 12", value: 0 },
          { name: "trigger 13", links: [{ portIn: "exe", portOut: "trigger 13", objIn: "26", objOut: "22" }] },
          { name: "trigger 14", value: 0 },
          { name: "trigger 15", links: [{ portIn: "exe", portOut: "trigger 15", objIn: "25", objOut: "22" }] },
        ],
      },
      {
        objName: "Ops.Anim.BoolAnim",
        id: "23",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "bool" }, { name: "easing index", value: 0 }, { name: "easing", value: "absolute" }, { name: "duration", value: 0.5 }, { name: "Direction index", value: 0 }, { name: "Direction", value: "Both" }, { name: "value false", value: 0 }, { name: "value true", value: 1 }],
        portsOut: [
          { name: "trigger", value: 0 },
          { name: "value", value: 0 },
          { name: "finished", value: !0 },
          { name: "Finished Trigger", value: 0 },
        ],
      },
      {
        objName: "Ops.Boolean.ToggleBool",
        id: "24",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "trigger" }, { name: "reset", value: 0 }, { name: "Default", value: !1 }],
        portsOut: [{ name: "result", links: [{ portIn: "bool", portOut: "result", objIn: "25", objOut: "24" }] }],
      },
      {
        objName: "Ops.Anim.BoolAnim",
        id: "25",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "bool" }, { name: "easing index", value: 0 }, { name: "easing", value: "linear" }, { name: "duration", value: 0.6 }, { name: "Direction index", value: 0 }, { name: "Direction", value: "Animate Both" }, { name: "value false", value: 0 }, { name: "value true", value: 1 }],
        portsOut: [
          { name: "trigger", value: 0 },
          { name: "value", value: 0 },
          { name: "finished", value: !0 },
          { name: "Finished Trigger", links: [{ portIn: "trigger", portOut: "Finished Trigger", objIn: "27", objOut: "25" }] },
        ],
      },
      {
        objName: "Ops.Anim.BoolAnim",
        id: "26",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "bool" }, { name: "easing index", value: 0 }, { name: "easing", value: "smoothstep" }, { name: "duration", value: 0.5 }, { name: "Direction index", value: 0 }, { name: "Direction", value: "Animate Both" }, { name: "value false", value: 0 }, { name: "value true", value: 1 }],
        portsOut: [
          { name: "trigger", value: 0 },
          { name: "value", links: [{ portIn: "Scale Z", portOut: "value", objIn: "9", objOut: "26" }] },
          { name: "finished", value: !0 },
          { name: "Finished Trigger", value: 0 },
        ],
      },
      {
        objName: "Ops.Boolean.ToggleBool",
        id: "27",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "trigger" }, { name: "reset", value: 0 }, { name: "Default", value: !1 }],
        portsOut: [{ name: "result", links: [{ portIn: "bool", portOut: "result", objIn: "26", objOut: "27" }] }],
      },
      {
        objName: "Ops.Devices.Mouse.Mouse_v2",
        id: "28",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Active", value: !0 },
          { name: "relative", value: !1 },
          { name: "normalize", value: !1 },
          { name: "flip y", value: !1 },
          { name: "Area index", value: 0 },
          { name: "Area", value: "Canvas" },
          { name: "right click prevent default", value: !0 },
          { name: "Touch support", value: !0 },
          { name: "smooth", value: !1 },
          { name: "smoothSpeed", value: 20 },
          { name: "multiply", value: 1 },
        ],
        portsOut: [
          { name: "x", value: 17 },
          { name: "y", value: 122 },
          { name: "button down", value: !1 },
          { name: "click", links: [{ portIn: "trigger", portOut: "click", objIn: "24", objOut: "28" }] },
          { name: "Button Up", value: 0 },
          { name: "click right", value: 0 },
          { name: "mouseOver", value: !1 },
          { name: "button", value: 0 },
        ],
      },
    ],
    users: [],
    userOps: [],
    tags: [],
    _id: "6304abdc8cdf9c86c82cab84",
    name: "Colecciones Bikolabs",
    userId: "5c54b23eff421922c466b2c7",
    created: "2022-08-23T10:28:44.712Z",
    cloneOf: "6283fc4987bb6fb3d0a3b1e6",
    updated: "2022-08-23T15:35:33.053Z",
    log: [{ _id: "6304abdc8cdf9c86c82cab86", key: "collabsatcreate", text: "initial list of collaborators:" }],
    __v: 12,
    shortId: "clRfab",
    buildInfo: {
      core: { timestamp: 1658229186222, created: "2022-07-19T11:13:06.222Z", git: { branch: "master", commit: "819fc0e7c02646be982b7338326b610a383cd8f6", date: "2022-07-19T11:09:39.000Z", message: "corelib" } },
      ui: { timestamp: 1658229196319, created: "2022-07-19T11:13:16.319Z", git: { branch: "master", commit: "cde4fa72579470c06fa2ad7390223a8b7a061095", date: "2022-06-29T13:18:31.000Z", message: "idiot sandwitch" } },
      host: "cables.gl",
    },
    opsHash: "ba62bad5e146ed03a9b0438e80bd7799ca0f14c2",
    ui: { timeLineLength: 20, bookmarks: [], viewBoxesGl: { 0: { x: 440.04676929320567, y: -130.71575498529003, z: 400.31522582634113 } }, renderer: { w: 898, h: 567, s: 1 } },
    updatedByUser: "karlosgliberal",
    deployments: { lastDeployment: { date: 1661268491701, service: "download" } },
    exports: 7,
    views: 0,
    cachedUsername: "karlosgliberal",
    statsAdmin: {
      filenameScreenshots: ["_screenshots/screenshot.png", "_screenshots/screenshot_1661250818956.png", "_screenshots/screenshot_1661251194144.png", "_screenshots/screenshot_1661253709959.png", "_screenshots/screenshot_1661254823692.png", "_screenshots/screenshot_1661267035008.png", "_screenshots/screenshot_1661267079780.png", "_screenshots/screenshot_1661267176754.png", "_screenshots/screenshot_1661267268492.png", "_screenshots/screenshot_converted.jpg", "_screenshots/screenshot_converted.webp"],
      filenameExports: ["_exports/cables_colleciones1.zip", "_exports/cables_colleciones2.zip", "_exports/cables_colleciones3.zip"],
      filenameAssets: [],
      hasOldScreenshots: !1,
      hasOldExports: !1,
      sizeScreenshots: 1950.3564453125,
      sizeExports: 777.482421875,
      sizeAssets: 0,
    },
    description: "",
    namespace: "colecciones",
  }),
  CABLES.exportedPatch || (CABLES.exportedPatch = CABLES.exportedPatches.clRfab),
  ((CABLES = CABLES || {}).OPS = CABLES.OPS || {});
var Ops = Ops || {};
(Ops.Gl = Ops.Gl || {}),
  (Ops.Ui = Ops.Ui || {}),
  (Ops.Anim = Ops.Anim || {}),
  (Ops.Points = Ops.Points || {}),
  (Ops.Boolean = Ops.Boolean || {}),
  (Ops.Devices = Ops.Devices || {}),
  (Ops.Sidebar = Ops.Sidebar || {}),
  (Ops.Gl.Matrix = Ops.Gl.Matrix || {}),
  (Ops.Gl.Meshes = Ops.Gl.Meshes || {}),
  (Ops.Gl.Shader = Ops.Gl.Shader || {}),
  (Ops.Devices.Mouse = Ops.Devices.Mouse || {}),
  (Ops.Gl.ShaderEffects = Ops.Gl.ShaderEffects || {}),
  (Ops.Points.PointsSphereRandom = function () {
    CABLES.Op.apply(this, arguments);
    const o = this.inValueInt("Amount of points", 100),
      a = this.inValue("Sphere size", 1),
      t = this.inValue("Random seed", 0),
      l = this.inValueSlider("Random distance from sphere", 0),
      h = this.inValueSelect("Distribution", ["Uniform", "Poles", "Half"], "Uniform"),
      u = this.outArray("Array out", 3),
      c = this.outNumber("Total points"),
      d = this.outNumber("Array length");
    u.set([]);
    function e() {
      const e = [];
      (e.length = Math.max(0, 3 * Math.round(o.get()))), (Math.randomSeed = t.get());
      let i = quat.create(),
        n = vec3.create(),
        r = 0;
      "Poles" == h.get() && (r = 1), "Half" == h.get() && (r = 2);
      var s = l.get();
      for (let t = 0; t < o.get(); t++) 1 == r || 2 == r ? ((i[0] = Math.seededRandom()), (i[1] = Math.seededRandom()), (i[2] = Math.seededRandom()), (i[3] = Math.seededRandom())) : ((i[0] = 2 * Math.seededRandom() - 1), (i[1] = 2 * Math.seededRandom() - 1), (i[2] = 2 * Math.seededRandom() - 1), (i[3] = 2 * Math.seededRandom() - 1)), quat.normalize(i, i), 2 != r && t % 2 == 0 ? (n[0] = -a.get()) : (n[0] = a.get()), (n[1] = 0), (n[2] = 0) !== s && (n[0] -= Math.random() * s), vec3.transformQuat(n, n, i), (e[3 * t] = n[0]), (e[3 * t + 1] = n[1]), (e[3 * t + 2] = n[2]);
      u.set(null), u.set(e), c.set(e.length / 3), d.set(e.length);
    }
    (t.onChange = o.onChange = a.onChange = h.onChange = l.onChange = u.onLinkChanged = e)();
  }),
  (Ops.Points.PointsSphereRandom.prototype = new CABLES.Op()),
  (CABLES.OPS["1ea17de7-adad-4053-943a-4874bccf54e9"] = { f: Ops.Points.PointsSphereRandom, objName: "Ops.Points.PointsSphereRandom" }),
  (Ops.Gl.Meshes.PointCloudFromArray = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const e = t.inTrigger("exe"),
      r = t.inArray("Array", 3),
      i = t.inValueInt("Num Points"),
      n = t.outTrigger("Trigger out"),
      s = t.outObject("Geometry"),
      o = t.inValueBool("Scramble Texcoords", !0),
      a = t.inValue("Seed"),
      l = t.inArray("Coordinates", 2),
      h = t.inArray("Vertex Colors", 4),
      u = t.patch.cgl;
    (l.onChange = m),
      (o.onChange = m),
      (h.onChange =
        a.onChange =
        r.onChange =
          function () {
            (c = null == r.get()), (f = !c);
          }),
      (i.onChange = b),
      t.toWorkPortsNeedToBeLinked(r, e),
      t.setPortGroup("Texture Coordinates", [o, a, l]);
    let c = !1;
    e.onTriggered = function () {
      n.trigger(), CABLES.UI && (u.getShader().glPrimitive != u.gl.POINTS ? t.setUiError("nopointmat", "Using a Material not made for point rendering. Try to use PointMaterial.") : t.setUiError("nopointmat", null));
      (!f && d) ||
        (function () {
          var e = r.get();
          if (e && 0 != e.length)
            if (e.length % 3 == 0)
              if ((t.setUiError("div3", null), p.vertices.length != e.length || !d || l.isLinked() || h.isLinked())) {
                p.clear();
                var i = e.length / 3;
                if (0 != (i = Math.abs(Math.floor(i)))) {
                  (g && g.length == 2 * i) || (g = new Float32Array(2 * i));
                  var n = o.get();
                  if (!l.isLinked()) {
                    (Math.randomSeed = a.get()), (g = []);
                    for (let t = 0; t < i; t++) (p.vertices[3 * t] == e[3 * t] && p.vertices[3 * t + 1] == e[3 * t + 1] && p.vertices[3 * t + 2] == e[3 * t + 2]) || (n ? ((g[2 * t] = Math.seededRandom()), (g[2 * t + 1] = Math.seededRandom())) : ((g[2 * t] = t / i), (g[2 * t + 1] = t / i)));
                  }
                  if (h.get()) {
                    if (!_ && h.get().length != 4 * i) return t.uiAttr({ error: "Color array does not have the correct length! (should be " + 4 * i + ")" }), (_ = !0), (d = null);
                    p.vertexColors = h.get();
                  } else p.vertexColors = [];
                  l.isLinked() && (g = l.get()), p.setPointVertices(e), p.setTexCoords(g), (p.verticesIndices = []), d && d.dispose(), (d = new CGL.Mesh(u, p, u.gl.POINTS)), (d.addVertexNumbers = !0), d.setGeom(p), s.set(p), b(), (f = !1);
                }
              } else d.setAttribute(CGL.SHADERVAR_VERTEX_POSITION, e, 3), (p.vertices = e), (f = !1);
            else t.setUiError("div3", "Array length not multiple of 3");
        })();
      !c && d && d.render(u.getShader());
    };
    let d = null;
    const p = new CGL.Geometry("pointcloudfromarray");
    let g = [],
      f = !0,
      _ = !1;
    function m() {
      l.isLinked() ? (a.setUiAttribs({ greyout: !0 }), o.setUiAttribs({ greyout: !0 })) : (o.setUiAttribs({ greyout: !1 }), o.get() ? a.setUiAttribs({ greyout: !1 }) : a.setUiAttribs({ greyout: !0 })), (d = null), (f = !0);
    }
    function b() {
      d && (d.setNumVertices(Math.min(p.vertices.length / 3, i.get())), 0 == i.get() && d.setNumVertices(p.vertices.length / 3));
    }
  }),
  (Ops.Gl.Meshes.PointCloudFromArray.prototype = new CABLES.Op()),
  (CABLES.OPS["0a6d9c6f-6459-45ca-88ad-268a1f7304db"] = { f: Ops.Gl.Meshes.PointCloudFromArray, objName: "Ops.Gl.Meshes.PointCloudFromArray" }),
  (Ops.Gl.MainLoop = function () {
    CABLES.Op.apply(this, arguments);
    const i = this;
    const n = i.inValue("FPS Limit", 0),
      r = i.outTrigger("trigger"),
      s = i.outNumber("width"),
      o = i.outNumber("height"),
      a = i.inValueBool("Reduce FPS not focussed", !0),
      l = i.inValueBool("Reduce FPS loading"),
      h = i.inValueBool("Clear", !0),
      u = i.inValueBool("ClearAlpha", !0),
      c = i.inValueBool("Fullscreen Button", !1),
      d = i.inValueBool("Active", !0),
      t = i.inValueBool("Hires Displays", !1),
      p = i.inSwitch("Pixel Unit", ["Display", "CSS"], "Display");
    (i.onAnimFrame = x),
      (t.onChange = function () {
        t.get() ? (i.patch.cgl.pixelDensity = window.devicePixelRatio) : (i.patch.cgl.pixelDensity = 1), i.patch.cgl.updateSize(), CABLES.UI && gui.setLayout(), p.setUiAttribs({ greyout: !t.get() });
      }),
      (d.onChange = function () {
        i.patch.removeOnAnimFrame(i), d.get() ? (i.setUiAttrib({ extendTitle: "" }), (i.onAnimFrame = x), i.patch.addOnAnimFrame(i), i.log("adding again!")) : i.setUiAttrib({ extendTitle: "Inactive" });
      });
    const g = i.patch.cgl;
    let f = 0,
      _ = 0;
    i.patch.cgl || i.uiAttr({ error: "No webgl cgl context" });
    const m = vec3.create();
    vec3.set(m, 0, 0, 0);
    const b = vec3.create();
    vec3.set(b, 0, 0, -2), (c.onChange = e), setTimeout(e, 100);
    let E = null,
      v = !0,
      T = !0;
    function e() {
      function t() {
        E && (E.style.display = "block");
      }
      if (
        (i.patch.cgl.canvas.addEventListener("mouseleave", function () {
          E && (E.style.display = "none");
        }),
        i.patch.cgl.canvas.addEventListener("mouseenter", t),
        c.get())
      ) {
        if (!E) {
          E = document.createElement("div");
          const e = i.patch.cgl.canvas.parentElement;
          e && e.appendChild(E),
            E.addEventListener("mouseenter", t),
            E.addEventListener("click", function (t) {
              CABLES.UI && !t.shiftKey ? gui.cycleFullscreen() : g.fullScreen();
            });
        }
        (E.style.padding = "10px"),
          (E.style.position = "absolute"),
          (E.style.right = "5px"),
          (E.style.top = "5px"),
          (E.style.width = "20px"),
          (E.style.height = "20px"),
          (E.style.cursor = "pointer"),
          (E.style["border-radius"] = "40px"),
          (E.style.background = "#444"),
          (E.style["z-index"] = "9999"),
          (E.style.display = "none"),
          (E.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>');
      } else E && ((E.style.display = "none"), E.remove(), (E = null));
    }
    function x(t) {
      if (d.get() && !g.aborted && 0 !== g.canvas.clientWidth && 0 !== g.canvas.clientHeight) {
        var e = performance.now();
        if (
          ((i.patch.config.fpsLimit = (function () {
            if (l.get() && i.patch.loading.getProgress() < 1) return 5;
            if (a.get()) {
              if (!T) return 10;
              if (!v) return 30;
            }
            return n.get();
          })()),
          -1 != g.canvasWidth)
        ) {
          if (g.canvasWidth != s.get() || g.canvasHeight != o.get()) {
            let t = 1;
            "CSS" == p.get() && (t = i.patch.cgl.pixelDensity), s.set(g.canvasWidth / t), o.set(g.canvasHeight / t);
          }
          1e3 < CABLES.now() - _ && ((CGL.fpsReport = CGL.fpsReport || []), 1 <= i.patch.loading.getProgress() && 0 !== _ && CGL.fpsReport.push(f), (f = 0), (_ = CABLES.now())),
            (CGL.MESH.lastShader = null),
            (CGL.MESH.lastMesh = null),
            g.renderStart(g, m, b),
            h.get() && (g.gl.clearColor(0, 0, 0, 1), g.gl.clear(g.gl.COLOR_BUFFER_BIT | g.gl.DEPTH_BUFFER_BIT)),
            r.trigger(),
            CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(),
            CGL.Texture.previewTexture && (CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(g)), CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)),
            g.renderEnd(g),
            u.get() && (g.gl.clearColor(1, 1, 1, 1), g.gl.colorMask(!1, !1, !1, !0), g.gl.clear(g.gl.COLOR_BUFFER_BIT), g.gl.colorMask(!0, !0, !0, !0)),
            g.frameStore.phong || (g.frameStore.phong = {}),
            f++,
            (i.patch.cgl.profileData.profileMainloopMs = performance.now() - e);
        } else g.setCanvas(i.patch.config.glCanvasId);
      }
    }
    window.addEventListener("blur", () => {
      v = !1;
    }),
      window.addEventListener("focus", () => {
        v = !0;
      }),
      document.addEventListener("visibilitychange", () => {
        T = !document.hidden;
      }),
      (function t() {
        setTimeout(() => {
          1 < i.patch.getOpsByObjName(i.name).length ? (i.setUiError("multimainloop", "there should only be one mainloop op!"), i.patch.addEventListener("onOpDelete", t)) : i.setUiError("multimainloop", null, 1);
        }, 500);
      })(),
      (p.onChange = () => {
        s.set(0), o.set(0);
      }),
      (i.onDelete = function () {
        g.gl.clearColor(0, 0, 0, 0), g.gl.clear(g.gl.COLOR_BUFFER_BIT | g.gl.DEPTH_BUFFER_BIT);
      });
  }),
  (Ops.Gl.MainLoop.prototype = new CABLES.Op()),
  (CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = { f: Ops.Gl.MainLoop, objName: "Ops.Gl.MainLoop" }),
  (Ops.Gl.Shader.PointMaterial_v4 = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const e =
        "\n{{MODULES_HEAD}}\n\nUNI vec4 color;\n// IN vec2 pointCoord;\nIN float ps;\n\n#ifdef HAS_TEXTURE_DIFFUSE\n    UNI sampler2D diffTex;\n#endif\n#ifdef HAS_TEXTURE_MASK\n    UNI sampler2D texMask;\n#endif\n#ifdef HAS_TEXTURE_COLORIZE\n    IN vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    IN float opacity;\n#endif\n#ifdef VERTEX_COLORS\n    IN vec4 vertexColor;\n#endif\n\nvoid main()\n{\n    #ifdef FLIP_TEX\n        vec2 pointCoord=vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y));\n    #endif\n    #ifndef FLIP_TEX\n        vec2 pointCoord=gl_PointCoord;\n    #endif\n    {{MODULE_BEGIN_FRAG}}\n\n    if(ps<1.0)discard;\n\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURE_MASK\n        float mask;\n        #ifdef TEXTURE_MASK_R\n            mask=texture(texMask,pointCoord).r;\n        #endif\n        #ifdef TEXTURE_MASK_A\n            mask=texture(texMask,pointCoord).a;\n        #endif\n        #ifdef TEXTURE_MASK_LUMI\n        \tvec3 lumcoeff = vec3(0.299,0.587,0.114);\n        \tmask = dot(texture(texMask,pointCoord).rgb, lumcoeff);\n        #endif\n\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n        col=texture(diffTex,pointCoord);\n        #ifdef COLORIZE_TEXTURE\n          col.rgb*=color.rgb;\n        #endif\n    #endif\n    col.a*=color.a;\n\n    {{MODULE_COLOR}}\n\n    #ifdef MAKE_ROUND\n\n        #ifndef MAKE_ROUNDAA\n            if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\n        #endif\n\n        #ifdef MAKE_ROUNDAA\n            float circ=(gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5);\n\n            float a=smoothstep(0.25,0.25-fwidth(gl_PointCoord.x),circ);\n            if(a==0.0)discard;\n            col.a=a*color.a;\n        #endif\n    #endif\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    #ifdef TEXTURE_COLORIZE_MUL\n        col*=color;\n    #endif\n\n    #ifdef HAS_TEXTURE_MASK\n        col.a*=mask;\n    #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        col.a*=opacity;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col.rgb = vertexColor.rgb;\n        col.a *= vertexColor.a;\n    #endif\n\n    if (col.a <= 0.0) discard;\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    outColor = col;\n}\n",
      i =
        "{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\n\n#ifdef VERTEX_COLORS\n    IN vec4 attrVertColor;\n    OUT vec4 vertexColor;\n#endif\n\nOUT vec3 norm;\nOUT float ps;\n\nOUT vec2 texCoord;\n\n\n#ifdef HAS_TEXTURES\n#endif\n\n#ifdef HAS_TEXTURE_COLORIZE\n   UNI sampler2D texColorize;\n   OUT vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    UNI sampler2D texOpacity;\n    OUT float opacity;\n#endif\n\n#ifdef HAS_TEXTURE_POINTSIZE\n   UNI sampler2D texPointSize;\n   UNI float texPointSizeMul;\n#endif\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nUNI float pointSize;\nUNI vec3 camPos;\n\nUNI float canvasWidth;\nUNI float canvasHeight;\nUNI float camDistMul;\nUNI float randomSize;\n\nIN float attrVertIndex;\n\n\n\nfloat rand(float n){return fract(sin(n) * 5711.5711123);}\n\n#define POINTMATERIAL\n\nvoid main()\n{\n    norm=attrVertNormal;\n    #ifdef PIXELSIZE\n        float psMul=1.0;\n    #endif\n\n    #ifndef PIXELSIZE\n        float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\n    #endif\n\n    // float sizeMultiply=1.0;\n\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n\n\n    #ifdef VERTEX_COLORS\n        vertexColor=attrVertColor;\n    #endif\n\n    // #ifdef HAS_TEXTURES\n        texCoord=attrTexCoord;\n    // #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        // opacity=texture(texOpacity,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex))).r;\n        opacity=texture(texOpacity,texCoord).r;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        #ifdef RANDOM_COLORIZE\n            colorize=texture(texColorize,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex)));\n        #endif\n        #ifndef RANDOM_COLORIZE\n            colorize=texture(texColorize,texCoord);\n        #endif\n    #endif\n\n\n\n\n\n    mat4 mMatrix=modelMatrix;\n    vec4 pos = vec4( vPosition, 1. );\n\n    gl_PointSize=0.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 model=mMatrix * pos;\n\n    psMul+=rand(texCoord.x*texCoord.y+texCoord.y*3.0+texCoord.x*2.0+attrVertIndex)*randomSize;\n    // psMul*=sizeMultiply;\n\n    float addPointSize=0.0;\n    #ifdef HAS_TEXTURE_POINTSIZE\n\n        #ifdef POINTSIZE_CHAN_R\n            addPointSize=texture(texPointSize,texCoord).r;\n        #endif\n        #ifdef POINTSIZE_CHAN_G\n            addPointSize=texture(texPointSize,texCoord).g;\n        #endif\n        #ifdef POINTSIZE_CHAN_B\n            addPointSize=texture(texPointSize,texCoord).b;\n        #endif\n\n\n        #ifdef DOTSIZEREMAPABS\n            // addPointSize=(( (texture(texPointSize,texCoord).r) * texPointSizeMul)-0.5)*2.0;\n\n            addPointSize=1.0-(distance(addPointSize,0.5)*2.0);\n            // addPointSize=abs(1.0-(distance(addPointSize,0.5)*2.0));\n            addPointSize=addPointSize*addPointSize*addPointSize*2.0;\n\n            // addPointSize=(( (texture(texPointSize,texCoord).r) * texPointSizeMul)-0.5)*2.0;\n        #endif\n\n        addPointSize*=texPointSizeMul;\n\n    #endif\n\n    ps=0.0;\n    #ifndef SCALE_BY_DISTANCE\n        ps = (pointSize+addPointSize) * psMul;\n    #endif\n    #ifdef SCALE_BY_DISTANCE\n        float cameraDist = distance(model.xyz, camPos);\n        ps = ( (pointSize+addPointSize) / cameraDist) * psMul;\n    #endif\n\n    gl_PointSize += ps;\n\n\n    gl_Position = projMatrix * viewMatrix * model;\n}\n",
      n = t.patch.cgl,
      r = t.inTrigger("render"),
      s = t.inValueFloat("PointSize", 3),
      o = t.inBool("Size in Pixels", !1),
      a = t.inValue("Random Size", 0),
      l = t.inValueBool("Round", !0),
      h = t.inValueBool("Round Antialias", !1),
      u = t.inValueBool("Scale by Distance", !1),
      c = t.inValueSlider("r", Math.random()),
      d = t.inValueSlider("g", Math.random()),
      p = t.inValueSlider("b", Math.random()),
      g = t.inValueSlider("a", 1),
      f = t.inBool("Vertex Colors", !1),
      _ = t.inTexture("texture"),
      m = t.inBool("Colorize Texture"),
      b = t.inTexture("Texture Mask"),
      E = t.inSwitch("Mask Channel", ["R", "A", "Luminance"], "R"),
      v = t.inTexture("Texture Colorize"),
      T = t.inValueBool("Colorize Randomize", !0),
      x = t.inTexture("Texture Opacity"),
      A = t.inTexture("Texture Point Size"),
      y = t.inSwitch("Point Size Channel", ["R", "G", "B"], "R"),
      M = t.inFloat("Texture Point Size Mul", 1),
      S = t.inSwitch("Map Size 0", ["Black", "Grey"], "Black"),
      O = t.inValueBool("Flip Texture", !1),
      I = t.outTrigger("trigger"),
      C = t.outObject("shader", null, "shader");
    t.setPortGroup("Texture", [_, m, b, E, v, x, T]), t.setPortGroup("Color", [c, d, p, g, f]), t.setPortGroup("Size", [s, a, l, h, u, o, A, M, y, S]), c.setUiAttribs({ colorPick: !0 });
    const N = new CGL.Shader(n, "PointMaterial");
    N.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), N.define("MAKE_ROUND");
    new CGL.Uniform(N, "f", "pointSize", s), new CGL.Uniform(N, "f", "texPointSizeMul", M), new CGL.Uniform(N, "f", "randomSize", a), new CGL.Uniform(N, "4f", "color", c, d, p, g);
    const P = new CGL.Uniform(N, "f", "canvasWidth", n.canvasWidth),
      R = new CGL.Uniform(N, "f", "canvasHeight", n.canvasHeight),
      L = new CGL.Uniform(N, "t", "diffTex"),
      w = new CGL.Uniform(N, "t", "texColorize"),
      D = new CGL.Uniform(N, "t", "texOpacity"),
      F = (new CGL.Uniform(N, "t", "texPointSize"), new CGL.Uniform(N, "t", "texPointSize")),
      B = new CGL.Uniform(N, "t", "texMask");
    function U() {
      P.setValue(n.canvasWidth), R.setValue(n.canvasHeight), n.pushShader(N), N.popTextures(), _.get() && !_.get().deleted && N.pushTexture(L, _.get()), b.get() && N.pushTexture(B, b.get()), v.get() && N.pushTexture(w, v.get()), x.get() && N.pushTexture(D, x.get()), A.get() && N.pushTexture(F, A.get()), I.trigger(), n.popShader();
    }
    function k() {
      E.setUiAttribs({ greyout: !b.isLinked() }), y.setUiAttribs({ greyout: !A.isLinked() }), M.setUiAttribs({ greyout: !A.isLinked() }), S.setUiAttribs({ greyout: !A.isLinked() });
    }
    N.setSource(i, e),
      (N.glPrimitive = n.gl.POINTS),
      C.set(N),
      (C.ignoreValueSerialize = !0),
      (r.onTriggered = U),
      (u.onChange =
        l.onChange =
        h.onChange =
        _.onChange =
        v.onChange =
        b.onChange =
        T.onChange =
        O.onChange =
        E.onChange =
        o.onChange =
        x.onChange =
        A.onChange =
        S.onChange =
        y.onChange =
        m.onChange =
        f.onChange =
          function () {
            N.toggleDefine("SCALE_BY_DISTANCE", u.get()),
              N.toggleDefine("MAKE_ROUND", l.get()),
              N.toggleDefine("MAKE_ROUNDAA", h.get()),
              N.toggleDefine("VERTEX_COLORS", f.get()),
              N.toggleDefine("RANDOM_COLORIZE", T.get()),
              N.toggleDefine("HAS_TEXTURE_DIFFUSE", _.get()),
              N.toggleDefine("HAS_TEXTURE_MASK", b.get()),
              N.toggleDefine("HAS_TEXTURE_COLORIZE", v.get()),
              N.toggleDefine("HAS_TEXTURE_OPACITY", x.get()),
              N.toggleDefine("HAS_TEXTURE_POINTSIZE", A.get()),
              N.toggleDefine("TEXTURE_COLORIZE_MUL", m.get()),
              N.toggleDefine("FLIP_TEX", O.get()),
              N.toggleDefine("TEXTURE_MASK_R", "R" == E.get()),
              N.toggleDefine("TEXTURE_MASK_A", "A" == E.get()),
              N.toggleDefine("TEXTURE_MASK_LUMI", "Luminance" == E.get()),
              N.toggleDefine("PIXELSIZE", o.get()),
              N.toggleDefine("POINTSIZE_CHAN_R", "R" == y.get()),
              N.toggleDefine("POINTSIZE_CHAN_G", "G" == y.get()),
              N.toggleDefine("POINTSIZE_CHAN_B", "B" == y.get()),
              N.toggleDefine("DOTSIZEREMAPABS", "Grey" == S.get()),
              k();
          }),
      k(),
      (t.preRender = function () {
        N && N.bind(), U();
      });
  }),
  (Ops.Gl.Shader.PointMaterial_v4.prototype = new CABLES.Op()),
  (CABLES.OPS["a7cb5d1c-cd4a-4c28-bb13-7bb9bda187ed"] = { f: Ops.Gl.Shader.PointMaterial_v4, objName: "Ops.Gl.Shader.PointMaterial_v4" }),
  (Ops.Gl.Performance = function () {
    CABLES.Op.apply(this, arguments);
    const s = this;
    const t = s.inTrigger("exe"),
      o = s.inValueBool("Visible", !0),
      a = s.outTrigger("childs"),
      e = s.inSwitch("Position", ["top", "bottom"], "top"),
      i = s.inBool("Open", !1),
      l = s.inBool("Smooth Graph", !0),
      h = s.inFloat("Scale", 4),
      u = s.inFloat("Size", 128),
      c = s.outObject("Canvas"),
      d = s.outValue("FPS"),
      n = s.patch.cgl,
      r = document.createElement("div");
    let p = null,
      g = null,
      f = !1,
      _ = 0,
      m = 0,
      b = 0,
      E = 0,
      v = 0;
    const T = [],
      x = [],
      A = [],
      y = [];
    let M = 0,
      S = 0,
      O = null,
      I = 0,
      C = 0;
    const N = ["|", "/", "-", "\\"];
    let P = !0;
    const R = "#ffffff",
      L = "#222222",
      w = "#003f5c",
      D = "#7a5195",
      F = "#ef5675",
      B = "#ffa600";
    let U = 0,
      k = 0,
      V = 0;
    const G = s.patch.cgl.gl,
      z = G.getExtension("EXT_disjoint_timer_query_webgl2");
    (t.onLinkChanged = o.onChange =
      () => {
        Z(), X();
      }),
      (e.onChange = H),
      (u.onChange = W),
      (r.id = "performance"),
      (r.style.position = "absolute"),
      (r.style.left = "0px"),
      (r.style.opacity = "0.8"),
      (r.style.padding = "10px"),
      (r.style.cursor = "pointer"),
      (r.style.background = "#222"),
      (r.style.color = "white"),
      (r.style["font-family"] = "monospace"),
      (r.style["font-size"] = "12px"),
      (r.style["z-index"] = "99999"),
      (r.innerHTML = "&nbsp;"),
      r.addEventListener("click", Y);
    const j = s.patch.cgl.canvas.parentElement;
    function H() {
      (O.style["pointer-events"] = "none"), "top" == e.get() ? ((O.style.top = r.style.top = "0px"), (O.style.bottom = r.style.bottom = "initial")) : ((O.style.bottom = r.style.bottom = "0px"), (O.style.top = r.style.top = "initial"));
    }
    function X() {
      o.get() && t.isLinked() ? ((r.style.display = "block"), (r.style.opacity = 1), (O.style.display = "block")) : ((r.style.display = "none"), (r.style.opacity = 0), (O.style.display = "none"));
    }
    function W() {
      if (O) {
        var e = Math.max(0, parseInt(u.get()));
        (O.width = e), (O.height = e), (r.style.left = e + "px"), (T.length = 0), (x.length = 0), (A.length = 0);
        for (let t = (y.length = 0); t < e; t++) (T[t] = -1), (x[t] = -1), (A[t] = -1), (y[t] = -1);
      }
    }
    function Y() {
      o.get() && ((r.style.opacity = 1), (f = !f), Z());
    }
    function Z() {
      K(),
        O || ((O = document.createElement("canvas")), (O.id = "performance_" + s.patch.config.glCanvasId), (O.width = u.get()), (O.height = u.get()), (O.style.display = "block"), (O.style.opacity = 0.9), (O.style.position = "absolute"), (O.style.left = "0px"), (O.style.cursor = "pointer"), (O.style.top = "-64px"), (O.style["z-index"] = "99998"), j.appendChild(O), (g = O.getContext("2d")), O.addEventListener("click", Y), W()),
        f ? ((O.style.display = "block"), (r.style.left = u.get() + "px"), (r.style["min-height"] = "56px")) : ((O.style.display = "none"), (r.style.left = "0px"), (r.style["min-height"] = "auto"));
    }
    function K() {
      if (o.get()) {
        let t = "";
        0 < s.patch.cgl.profileData.profileShaderCompiles && (t += "Shader compile (" + s.patch.cgl.profileData.profileShaderCompileName + ") "),
          0 < s.patch.cgl.profileData.profileShaderGetUniform && (t += "Shader get uni loc! (" + s.patch.cgl.profileData.profileShaderGetUniformName + ")"),
          0 < s.patch.cgl.profileData.profileTextureResize && (t += "Texture resize! "),
          0 < s.patch.cgl.profileData.profileFrameBuffercreate && (t += "Framebuffer create! "),
          0 < s.patch.cgl.profileData.profileEffectBuffercreate && (t += "Effectbuffer create! "),
          0 < s.patch.cgl.profileData.profileTextureDelete && (t += "Texture delete! "),
          0 < s.patch.cgl.profileData.profileNonTypedAttrib && (t += "Not-Typed Buffer Attrib! " + s.patch.cgl.profileData.profileNonTypedAttribNames),
          0 < s.patch.cgl.profileData.profileTextureNew && (t += "new texture created! "),
          0 < s.patch.cgl.profileData.profileGenMipMap && (t += "generating mip maps!"),
          0 < t.length && (t = '| <span style="color:#f80;">WARNING: ' + t + "<span>");
        let e = "";
        if (
          (f ? ((e += '<span style="color:' + w + '">■</span> ' + m + " fps "), (e += '<span style="color:' + D + '">■</span> ' + Math.round(100 * k) / 100 + "ms mainloop "), (e += '<span style="color:' + F + '">■</span> ' + Math.round(100 * V) / 100 + "ms onframe "), U && (e += '<span style="color:' + B + '">■</span> ' + Math.round(100 * U) / 100 + "ms GPU"), (e += t)) : ((e += m + " fps / "), (e += "CPU: " + Math.round(100 * (k + s.patch.cgl.profileData.profileOnAnimFrameOps)) / 100 + "ms / "), U && (e += "GPU: " + Math.round(100 * U) / 100 + "ms  ")),
          (r.innerHTML = e),
          1 != s.patch.loading.getProgress() && (r.innerHTML += "<br/>loading " + Math.round(100 * s.patch.loading.getProgress()) + "% " + N[++C % N.length]),
          f)
        ) {
          let e = 0;
          (M = 0), (v = 0);
          for (let t = T.length; t > T.length - T.length / 3; t--) -1 < T[t] && ((M += T[t]), e++), -1 < x[t] && (v += x[t]);
          (M /= e),
            (v /= e),
            (r.innerHTML += "<br/> " + n.canvasWidth + " x " + n.canvasHeight + " (x" + n.pixelDensity + ") "),
            (r.innerHTML += "<br/>frame avg: " + Math.round(100 * v) / 100 + " ms (" + Math.round((v / M) * 100) + "%) / " + Math.round(100 * M) / 100 + " ms"),
            (r.innerHTML += " (self: " + Math.round(100 * S) / 100 + " ms) "),
            (r.innerHTML += "<br/>shader binds: " + Math.ceil(s.patch.cgl.profileData.profileShaderBinds / m) + " uniforms: " + Math.ceil(s.patch.cgl.profileData.profileUniformCount / m) + " mvp_uni_mat4: " + Math.ceil(s.patch.cgl.profileData.profileMVPMatrixCount / m) + " num glPrimitives: " + Math.ceil(s.patch.cgl.profileData.profileMeshNumElements / m) + " mesh.setGeom: " + s.patch.cgl.profileData.profileMeshSetGeom + " videos: " + s.patch.cgl.profileData.profileVideosPlaying + " tex preview: " + s.patch.cgl.profileData.profileTexPreviews),
            (r.innerHTML += " draw meshes: " + Math.ceil(s.patch.cgl.profileData.profileMeshDraw / m) + " framebuffer blit: " + Math.ceil(s.patch.cgl.profileData.profileFramebuffer / m) + " texeffect blit: " + Math.ceil(s.patch.cgl.profileData.profileTextureEffect / m)),
            (r.innerHTML += " all shader compiletime: " + Math.round(100 * s.patch.cgl.profileData.shaderCompileTime) / 100);
        }
        s.patch.cgl.profileData.clear();
      }
    }
    function q() {
      if (CGL.performanceMeasures) {
        p || (s.log("create measure ele"), (p = document.createElement("div")), (p.style.width = "100%"), (p.style["background-color"] = "#444"), (p.style.bottom = "10px"), (p.style.height = "100px"), (p.style.opacity = "1"), (p.style.position = "absolute"), (p.style["z-index"] = "99999"), (p.innerHTML = ""), j.appendChild(p));
        let e = 0;
        const i = CGL.performanceMeasures[0];
        for (let t = 0; t < i.childs.length; t++) e += i.childs[t].used;
        !(function e(i, t, n, r) {
          if (((i.usedAvg = i.usedAvg || i.used), !i.ele || P)) {
            const o = document.createElement("div");
            (i.ele = o), i.childs && 0 < i.childs.length ? (o.style.height = "500px") : (o.style.height = "20px"), (o.style.overflow = "hidden"), (o.style.display = "inline-block"), i.isRoot || ((o.innerHTML = '<div style="min-height:20px;width:100%;overflow:hidden;color:black;position:relative">&nbsp;' + i.name + "</div>"), (o.style["background-color"] = "rgb(" + i.colR + "," + i.colG + "," + i.colB + ")"), (o.style["border-left"] = "1px solid black")), t.appendChild(o);
          }
          if ((i.isRoot ? ((i.ele.style.width = "100%"), (i.ele.style.clear = "both"), (i.ele.style.float = "none")) : (200 < performance.now() - i.lastTime ? ((i.ele.style.display = "none"), (i.hidden = !0)) : i.hidden && ((i.ele.style.display = "inline-block"), (i.hidden = !1)), (i.ele.style.float = "left"), (i.ele.style.width = Math.floor((i.usedAvg / n) * 98) + "%")), i && i.childs && 0 < i.childs.length)) {
            let t = 0;
            for (var s = 0; s < i.childs.length; s++) (i.childs[s].usedAvg = 0.95 * (i.childs[s].usedAvg || i.childs[s].used) + 0.05 * i.childs[s].used), (t += i.childs[s].usedAvg);
            for (s = 0; s < i.childs.length; s++) e(i.childs[s], i.ele, t, r + 1);
          }
        })(CGL.performanceMeasures[0], p, e, 0),
          (i.childs.length = 0),
          (function e(i) {
            for (let t = 0; t < i.childs.length; t++) e(i.childs[t]);
            i.childs.length = 0;
          })(CGL.performanceMeasures[0]),
          (CGL.performanceMeasures.length = 0),
          (P = !1);
      }
    }
    j.appendChild(r),
      W(),
      Z(),
      H(),
      X(),
      (s.onDelete = function () {
        O && O.remove(), r && r.remove();
      }),
      (i.onChange = function () {
        (f = i.get()), Z();
      }),
      (t.onTriggered = function () {
        var t = performance.now();
        _++, z && o.get() && (s.patch.cgl.profileData.doProfileGlQuery = !0);
        0 === b && (b = Date.now());
        1e3 <= Date.now() - b && ((m = _), (_ = 0), d.set(m), o.get() && K(), (b = Date.now()));
        var e = s.patch.cgl.profileData.glQueryData;
        if (((U = 0), e)) {
          let t = 0;
          for (var i in e) t++, e[i].time && (U += e[i].time);
        }
        o.get() &&
          (q(),
          f &&
            !s.patch.cgl.profileData.pause &&
            ((r = performance.now() - I),
            T.push(r),
            T.shift(),
            x.push(E),
            x.shift(),
            A.push(s.patch.cgl.profileData.profileOnAnimFrameOps - s.patch.cgl.profileData.profileMainloopMs),
            A.shift(),
            y.push(U),
            y.shift(),
            (function () {
              var t = O.height,
                e = h.get();
              (g.fillStyle = L), g.fillRect(0, 0, O.width, t), (g.fillStyle = w);
              let i = 0;
              var n,
                r = Math.max(0, parseInt(u.get()));
              for (i = r; 0 <= i; i--) 30 < T[i] && (g.fillStyle = R), g.fillRect(r - i, t - T[i] * e, 1, T[i] * e), 30 < T[i] && (g.fillStyle = w);
              for (i = r; 0 <= i; i--) (g.fillStyle = D), (n = x[i]), g.fillRect(r - i, t - n * e, 1, x[i] * e), (g.fillStyle = F), (n += A[i]), g.fillRect(r - i, t - n * e, 1, A[i] * e), (g.fillStyle = B), (n += y[i]), g.fillRect(r - i, t - n * e, 1, y[i] * e);
            })()));
        (I = performance.now()), (S = performance.now() - t);
        var n = performance.now();
        c.set(null), c.set(O), a.trigger();
        var r = performance.now() - n,
          t = s.patch.cgl.profileData.profileMainloopMs,
          n = s.patch.cgl.profileData.profileOnAnimFrameOps - s.patch.cgl.profileData.profileMainloopMs;
        V = l.get() ? ((E = 0.9 * E + 0.1 * r), (k = 0.5 * k + 0.5 * t), 0.5 * V + 0.5 * n) : ((E = r), (k = t), n);
        s.patch.cgl.profileData.clearGlQuery();
      });
  }),
  (Ops.Gl.Performance.prototype = new CABLES.Op()),
  (CABLES.OPS["9cd2d9de-000f-4a14-bd13-e7d5f057583c"] = { f: Ops.Gl.Performance, objName: "Ops.Gl.Performance" }),
  (Ops.Gl.ShaderEffects.ColorArea_v3 = function () {
    CABLES.Op.apply(this, arguments);
    const t = this,
      e =
        "\n\n#ifdef MOD_AREA_SPHERE\n    float MOD_de=distance(\n        MOD_pos,\n        vec3(MOD_vertPos.x*MOD_inSizeAmountFalloffSizeX.w,MOD_vertPos.y,MOD_vertPos.z)\n        );\n#endif\n\n#ifdef MOD_AREA_BOX\n    float MOD_de=0.0;\n    if(abs(MOD_vertPos.y-MOD_pos.y)>MOD_inSizeAmountFalloffSizeX.x ||\n        abs(MOD_vertPos.x-MOD_pos.x)>MOD_inSizeAmountFalloffSizeX.x ||\n        abs(MOD_vertPos.z-MOD_pos.z)>MOD_inSizeAmountFalloffSizeX.x ) MOD_de=1.0;\n#endif\n\n#ifdef MOD_AREA_AXIS_X\n    float MOD_de=abs(MOD_pos.x-MOD_vertPos.x);\n#endif\n#ifdef MOD_AREA_AXIS_Y\n    float MOD_de=abs(MOD_pos.y-MOD_vertPos.y);\n#endif\n#ifdef MOD_AREA_AXIS_Z\n    float MOD_de=abs(MOD_pos.z-MOD_vertPos.z);\n#endif\n\n#ifdef MOD_AREA_AXIS_X_INFINITE\n    float MOD_de=MOD_pos.x-MOD_vertPos.x;\n#endif\n#ifdef MOD_AREA_AXIS_Y_INFINITE\n    float MOD_de=MOD_pos.y-MOD_vertPos.y;\n#endif\n#ifdef MOD_AREA_AXIS_Z_INFINITE\n    float MOD_de=MOD_pos.z-MOD_vertPos.z;\n#endif\n\n#ifndef MOD_AREA_BOX\n    MOD_de=1.0-smoothstep(MOD_inSizeAmountFalloffSizeX.z*MOD_inSizeAmountFalloffSizeX.x,MOD_inSizeAmountFalloffSizeX.x,MOD_de);\n#endif\n\n#ifdef MOD_AREA_INVERT\n    MOD_de=1.0-MOD_de;\n#endif\n\n#ifdef MOD_BLEND_NORMAL\n    col.rgb=mix(col.rgb,MOD_color, MOD_de*MOD_inSizeAmountFalloffSizeX.y);\n#endif\n\n\n#ifdef MOD_BLEND_MULTIPLY\n    col.rgb=mix(col.rgb,col.rgb*MOD_color,MOD_de*MOD_inSizeAmountFalloffSizeX.y);\n#endif\n\n#ifdef MOD_BLEND_ADD\n    col.rgb+=MOD_de*MOD_inSizeAmountFalloffSizeX.y*MOD_color;\n#endif\n\n\n#ifdef MOD_BLEND_OPACITY\n    col.a*=(1.0-MOD_de*MOD_inSizeAmountFalloffSizeX.y);\n#endif\n\n#ifdef MOD_BLEND_DISCARD\n    if(MOD_de*MOD_inSizeAmountFalloffSizeX.y>=0.999)discard;\n#endif\n\n// col.rgb=vec3(distance(MOD_vertPos.xyz,MOD_pos.xyz))*0.1\n// col.rgb=MOD_pos.xyz;",
      i = "IN vec4 MOD_vertPos;\n",
      n = t.inTrigger("Render"),
      r = t.inValueSelect("Area", ["Sphere", "Box", "Axis X", "Axis Y", "Axis Z", "Axis X Infinite", "Axis Y Infinite", "Axis Z Infinite"], "Sphere"),
      s = t.inValue("Size", 1),
      o = t.inValueSlider("Amount", 0.5),
      a = t.inValueSlider("Falloff", 0),
      l = t.inValueBool("Invert"),
      h = t.inSwitch("Blend ", ["Normal", "Multiply", "Opacity", "Add", "Discard"], "Normal"),
      u = t.inValueSlider("r", Math.random()),
      c = t.inValueSlider("g", Math.random()),
      d = t.inValueSlider("b", Math.random()),
      p = t.inValue("x"),
      g = t.inValue("y"),
      f = t.inValue("z"),
      _ = t.inValueSlider("Size X", 1),
      m = t.inValueBool("WorldSpace", !0),
      b = t.inBool("Priority", !0),
      E = t.outTrigger("Next");
    t.setPortGroup("Position", [p, g, f]), t.setPortGroup("Color", [h, u, c, d]), u.setUiAttribs({ colorPick: !0 });
    const v = t.patch.cgl,
      T = "".endl() + "OUT vec4 MOD_vertPos;".endl(),
      x = "".endl() + "#ifndef MOD_WORLDSPACE".endl() + "   MOD_vertPos=vec4(vPosition,1.0);".endl() + "#endif".endl() + "#ifdef MOD_WORLDSPACE".endl() + "   MOD_vertPos=mMatrix*pos;".endl() + "#endif".endl();
    (m.onChange = r.onChange = l.onChange = h.onChange = S),
      (n.onTriggered = function () {
        y.bind(), v.frameStore.shadowPass || (v.shouldDrawHelpers(t) && gui.setTransformGizmo({ posX: p, posY: g, posZ: f })), E.trigger(), y.unbind();
      });
    const A = "vert_" + t.name,
      y = new CGL.ShaderModifier(v, t.name);
    function M() {
      y.removeModule(A);
      const t = { title: A, name: "MODULE_VERTEX_POSITION", srcHeadVert: T, srcBodyVert: x };
      b.get() && (t.priority = 2), y.addModule(t);
    }
    function S() {
      y.toggleDefine("MOD_BLEND_NORMAL", "Normal" == h.get()),
        y.toggleDefine("MOD_BLEND_OPACITY", "Opacity" == h.get()),
        y.toggleDefine("MOD_BLEND_MULTIPLY", "Multiply" == h.get()),
        y.toggleDefine("MOD_BLEND_DISCARD", "Discard" == h.get()),
        y.toggleDefine("MOD_BLEND_ADD", "Add" == h.get()),
        y.toggleDefine("MOD_AREA_INVERT", l.get()),
        y.toggleDefine("MOD_WORLDSPACE", m.get()),
        y.toggleDefine("MOD_AREA_AXIS_X", "Axis X" == r.get()),
        y.toggleDefine("MOD_AREA_AXIS_Y", "Axis Y" == r.get()),
        y.toggleDefine("MOD_AREA_AXIS_Z", "Axis Z" == r.get()),
        y.toggleDefine("MOD_AREA_AXIS_X_INFINITE", "Axis X Infinite" == r.get()),
        y.toggleDefine("MOD_AREA_AXIS_Y_INFINITE", "Axis Y Infinite" == r.get()),
        y.toggleDefine("MOD_AREA_AXIS_Z_INFINITE", "Axis Z Infinite" == r.get()),
        y.toggleDefine("MOD_AREA_SPHERE", "Sphere" == r.get()),
        y.toggleDefine("MOD_AREA_BOX", "Box" == r.get());
    }
    y.addModule({ priority: 2, title: A, name: "MODULE_VERTEX_POSITION", srcHeadVert: T, srcBodyVert: x }), y.addModule({ title: t.name, name: "MODULE_COLOR", srcHeadFrag: i, srcBodyFrag: e }), y.addUniform("4f", "MOD_inSizeAmountFalloffSizeX", s, o, a, _), y.addUniform("3f", "MOD_color", u, c, d), y.addUniform("3f", "MOD_pos", p, g, f), S(), (b.onChange = M)();
  }),
  (Ops.Gl.ShaderEffects.ColorArea_v3.prototype = new CABLES.Op()),
  (CABLES.OPS["bc46bd2b-ea86-4b74-bb2b-7613e1a1a4f3"] = { f: Ops.Gl.ShaderEffects.ColorArea_v3, objName: "Ops.Gl.ShaderEffects.ColorArea_v3" }),
  (Ops.Gl.BlendMode = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = e.inTrigger("Render"),
      i = e.inValueSelect("Blendmode", ["None", "Normal", "Add", "Subtract", "Multiply"], "Normal"),
      n = e.inValueBool("Premultiplied"),
      r = e.outTrigger("Next"),
      s = e.patch.cgl;
    let o = 0;
    function a() {
      if (((o = "Normal" == i.get() ? CGL.BLEND_NORMAL : "Add" == i.get() ? CGL.BLEND_ADD : "Subtract" == i.get() ? CGL.BLEND_SUB : "Multiply" == i.get() ? CGL.BLEND_MUL : CGL.BLEND_NONE), CABLES.UI)) {
        let t = "";
        (t = "Normal" == i.get() ? "" : "Add" == i.get() ? "Add" : "Subtract" == i.get() ? "Sub" : "Multiply" == i.get() ? "Mul" : "None"), e.setUiAttrib({ extendTitle: t });
      }
    }
    (i.onChange = a)(),
      (t.onTriggered = function () {
        s.pushBlendMode(o, n.get()), s.pushBlend(o != CGL.BLEND_NONE), r.trigger(), s.popBlend(), s.popBlendMode(), s.gl.blendEquationSeparate(s.gl.FUNC_ADD, s.gl.FUNC_ADD), s.gl.blendFuncSeparate(s.gl.SRC_ALPHA, s.gl.ONE_MINUS_SRC_ALPHA, s.gl.ONE, s.gl.ONE_MINUS_SRC_ALPHA);
      });
  }),
  (Ops.Gl.BlendMode.prototype = new CABLES.Op()),
  (CABLES.OPS["ce0fff72-1438-4373-924f-e1d0f78b053f"] = { f: Ops.Gl.BlendMode, objName: "Ops.Gl.BlendMode" }),
  (Ops.Gl.ShaderEffects.AreaRotate = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const e = t.patch.cgl;
    (t.render = t.inTrigger("render")), (t.trigger = t.outTrigger("trigger"));
    var i = t.inValue("Size", 1),
      n = t.inValue("Strength", 1),
      r = t.inValueBool("Smooth", !0),
      s = t.inValue("x"),
      o = t.inValue("y"),
      a = t.inValue("z"),
      l = null,
      h = "".endl() + "pos=MOD_scaler(pos,mMatrix);".endl(),
      u = null;
    function c() {
      l && u && l.removeModule(u), (l = null);
    }
    (t.render.onLinkChanged = c),
      (t.render.onTriggered = function () {
        e.getShader()
          ? (t.isCurrentUiOp() && gui.setTransformGizmo({ posX: s, posY: o, posZ: a }),
            e.getShader() != l &&
              (l && c(),
              (l = e.getShader()),
              (u = l.addModule({
                title: t.objName,
                name: "MODULE_VERTEX_POSITION",
                srcHeadVert:
                  "\nUNI bool MOD_smooth;\nUNI float MOD_x,MOD_y,MOD_z;\nUNI float MOD_strength;\nUNI float MOD_size;\n\nvec4 MOD_scaler(vec4 pos,mat4 modelMatrix)\n{\n    vec3 forcePos=vec3(MOD_x,MOD_y,MOD_z);\n    vec3 vecToOrigin=(modelMatrix*pos).xyz-forcePos;\n    float dist=abs(length(vecToOrigin));\n    float distAlpha = (MOD_size - dist) ;\n\n    if(MOD_smooth) distAlpha=smoothstep(0.0,MOD_size,distAlpha);\n    \n    // pos.xyz*=(1.0+(distAlpha*MOD_strength));\n\n    mat3 rotation = mat3(\n        vec3( cos(MOD_strength*distAlpha),  sin(MOD_strength*distAlpha),  0.0),\n        vec3(-sin(MOD_strength*distAlpha),  cos(MOD_strength*distAlpha),  0.0),\n        vec3(        0.0,         0.0,  1.0)\n    );\n    pos =vec4(rotation * pos.xyz, 1.0);\n\n\n    return pos;\n}\n",
                srcBodyVert: h,
              })),
              (i.uniform = new CGL.Uniform(l, "f", u.prefix + "size", i)),
              (n.uniform = new CGL.Uniform(l, "f", u.prefix + "strength", n)),
              (r.uniform = new CGL.Uniform(l, "f", u.prefix + "smooth", r)),
              (s.uniform = new CGL.Uniform(l, "f", u.prefix + "x", s)),
              (o.uniform = new CGL.Uniform(l, "f", u.prefix + "y", o)),
              (a.uniform = new CGL.Uniform(l, "f", u.prefix + "z", a))),
            l && t.trigger.trigger())
          : t.trigger.trigger();
      });
  }),
  (Ops.Gl.ShaderEffects.AreaRotate.prototype = new CABLES.Op()),
  (CABLES.OPS["8de665f1-0fc5-466c-8819-b73e17560ccf"] = { f: Ops.Gl.ShaderEffects.AreaRotate, objName: "Ops.Gl.ShaderEffects.AreaRotate" }),
  (Ops.Gl.ShaderEffects.TransformVertex = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const e = "\n\n\npos.xyz*=vec3(MOD_scale);\npos.xyz+=vec3(MOD_translate);\n\nmat4 MOD_rmat=\n        MOD_rotationX(MOD_rot.x*0.0174533)*\n        MOD_rotationY(MOD_rot.y*0.0174533)*\n        MOD_rotationZ(MOD_rot.z*0.0174533);\n\npos*=MOD_rmat;\n\n#ifdef MOD_TRANS_NORMS\n    norm=(vec4(norm,1.0)*MOD_rmat).xyz;\n    bitangent=(vec4(bitangent,1.0)*MOD_rmat).xyz;\n    tangent=(vec4(tangent,1.0)*MOD_rmat).xyz;\n#endif",
      i =
        "\nmat4 MOD_rotationX( in float angle ) {\n\treturn mat4(\t1.0,\t\t0,\t\t\t0,\t\t\t0,\n\t\t\t \t\t0, \tcos(angle),\t-sin(angle),\t\t0,\n\t\t\t\t\t0, \tsin(angle),\t cos(angle),\t\t0,\n\t\t\t\t\t0, \t\t\t0,\t\t\t  0, \t\t1);\n}\n\nmat4 MOD_rotationY( in float angle ) {\n\treturn mat4(\tcos(angle),\t\t0,\t\tsin(angle),\t0,\n\t\t\t \t\t\t\t0,\t\t1.0,\t\t\t 0,\t0,\n\t\t\t\t\t-sin(angle),\t0,\t\tcos(angle),\t0,\n\t\t\t\t\t\t\t0, \t\t0,\t\t\t\t0,\t1);\n}\n\nmat4 MOD_rotationZ( in float angle ) {\n\treturn mat4(\tcos(angle),\t\t-sin(angle),\t0,\t0,\n\t\t\t \t\tsin(angle),\t\tcos(angle),\t\t0,\t0,\n\t\t\t\t\t\t\t0,\t\t\t\t0,\t\t1,\t0,\n\t\t\t\t\t\t\t0,\t\t\t\t0,\t\t0,\t1);\n}\n",
      n = t.inTrigger("render"),
      r = t.outTrigger("Trigger"),
      s = t.inValue("Translate X", 0),
      o = t.inValue("Translate Y", 0),
      a = t.inValue("Translate Z", 0),
      l = t.inValue("Scale X", 1),
      h = t.inValue("Scale Y", 1),
      u = t.inValue("Scale Z", 1),
      c = t.inValue("Rotation X", 0),
      d = t.inValue("Rotation Y", 0),
      p = t.inValue("Rotation Z", 0),
      g = t.inBool("Transform normals", !1);
    var f = t.patch.cgl;
    const _ = new CGL.ShaderModifier(f, t.name);
    function m() {
      _.toggleDefine("MOD_TRANS_NORMS", g.get());
    }
    _.addModule({ priority: -2, name: "MODULE_VERTEX_POSITION", srcHeadVert: i || "", srcBodyVert: e || "" }),
      _.addUniformVert("3f", "MOD_translate", s, o, a),
      _.addUniformVert("3f", "MOD_scale", l, h, u),
      _.addUniformVert("3f", "MOD_rot", c, d, p),
      (g.onChange = m)(),
      (n.onTriggered = function () {
        _.bind(), r.trigger(), _.unbind();
      });
  }),
  (Ops.Gl.ShaderEffects.TransformVertex.prototype = new CABLES.Op()),
  (CABLES.OPS["68ca4a91-c3ce-4e81-bb84-3ba5f50dfaa1"] = { f: Ops.Gl.ShaderEffects.TransformVertex, objName: "Ops.Gl.ShaderEffects.TransformVertex" }),
  (Ops.Gl.Matrix.Transform = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = e.inTrigger("render"),
      i = e.inValue("posX", 0),
      n = e.inValue("posY", 0),
      r = e.inValue("posZ", 0),
      s = e.inValue("scale", 1),
      o = e.inValue("rotX", 0),
      a = e.inValue("rotY", 0),
      l = e.inValue("rotZ", 0),
      h = e.outTrigger("trigger");
    e.setPortGroup("Rotation", [o, a, l]), e.setPortGroup("Position", [i, n, r]), e.setPortGroup("Scale", [s]), e.setUiAxisPorts(i, n, r);
    const u = e.patch.cgl,
      c = vec3.create(),
      d = vec3.create(),
      p = mat4.create();
    mat4.identity(p);
    let g = !1,
      f = !1,
      _ = !0,
      m = !0,
      b = !0;
    function E() {
      mat4.identity(p), f && mat4.translate(p, p, c), 0 !== o.get() && mat4.rotateX(p, p, o.get() * CGL.DEG2RAD), 0 !== a.get() && mat4.rotateY(p, p, a.get() * CGL.DEG2RAD), 0 !== l.get() && mat4.rotateZ(p, p, l.get() * CGL.DEG2RAD), g && mat4.scale(p, p, d), (b = !1);
    }
    (o.onChange =
      a.onChange =
      l.onChange =
        function () {
          b = !0;
        }),
      (i.onChange =
        n.onChange =
        r.onChange =
          function () {
            _ = !0;
          }),
      (s.onChange = function () {
        m = !0;
      }),
      (t.onTriggered = function () {
        let t = !1;
        _ &&
          ((function () {
            (f = !1), (0 === i.get() && 0 === n.get() && 0 === r.get()) || (f = !0);
            vec3.set(c, i.get(), n.get(), r.get()), (_ = !1);
          })(),
          (t = !0)),
          m && ((g = !0), vec3.set(d, s.get(), s.get(), s.get()), (m = !1), (t = !0)),
          b && (t = !0),
          t && E(),
          u.pushModelMatrix(),
          mat4.multiply(u.mMatrix, u.mMatrix, p),
          h.trigger(),
          u.popModelMatrix(),
          CABLES.UI && CABLES.UI.showCanvasTransforms && gui.setTransform(e.id, i.get(), n.get(), r.get()),
          e.isCurrentUiOp() && gui.setTransformGizmo({ posX: i, posY: n, posZ: r });
      }),
      (e.transform3d = function () {
        return { pos: [i, n, r] };
      }),
      E();
  }),
  (Ops.Gl.Matrix.Transform.prototype = new CABLES.Op()),
  (CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"] = { f: Ops.Gl.Matrix.Transform, objName: "Ops.Gl.Matrix.Transform" }),
  (Ops.Anim.Timer_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const i = t.inValue("Speed", 1),
      e = t.inValueBool("Play", !0),
      n = t.inTriggerButton("Reset"),
      r = t.inValueBool("Sync to timeline", !1),
      s = t.outValue("Time");
    t.setPortGroup("Controls", [e, n, i]);
    const o = new CABLES.Timer();
    let a = null,
      l = 0,
      h = !1;
    function u() {
      e.get() ? (o.play(), t.patch.addOnAnimFrame(t)) : (o.pause(), t.patch.removeOnAnimFrame(t));
    }
    (e.onChange = u)(),
      (n.onTriggered = function () {
        (l = 0), (a = null), o.setTime(0), s.set(0);
      }),
      (r.onChange = function () {
        (h = r.get()), e.setUiAttribs({ greyout: h }), n.setUiAttribs({ greyout: h });
      }),
      (t.onAnimFrame = function (t) {
        var e;
        o.isPlaying() && (void 0 !== CABLES.overwriteTime ? s.set(CABLES.overwriteTime * i.get()) : h ? s.set(t * i.get()) : (o.update(), (e = o.get()), null !== a ? ((t = Math.abs(e - a)), (a = e), (l += t * i.get()), l != l && (l = 0), s.set(l)) : (a = e)));
      });
  }),
  (Ops.Anim.Timer_v2.prototype = new CABLES.Op()),
  (CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"] = { f: Ops.Anim.Timer_v2, objName: "Ops.Anim.Timer_v2" }),
  (Ops.Sidebar.Slider_v3 = function () {
    CABLES.Op.apply(this, arguments);
    const n = this;
    const t = n.inObject("link"),
      e = n.inString("Text", "Slider"),
      r = n.inValue("Min", 0),
      s = n.inValue("Max", 1),
      i = n.inValue("Step", 1e-5),
      o = n.inString("Suffix", ""),
      a = n.inBool("Grey Out", !1),
      l = n.inBool("Visible", !0),
      h = n.inValue("Input", 0.5),
      u = n.inTriggerButton("Set Default"),
      c = n.inTriggerButton("Reset");
    let d = null;
    const p = n.inValue("Default", 0.5);
    p.setUiAttribs({ hidePort: !0, greyout: !0 });
    const g = n.outObject("childs"),
      f = n.outValue("Result", p.get());
    n.toWorkNeedsParent("Ops.Sidebar.Sidebar"), n.setPortGroup("Range", [r, s, i]), n.setPortGroup("Display", [a, l]);
    const _ = document.createElement("div");
    _.addEventListener("dblclick", function () {
      f.set(parseFloat(p.get())), h.set(parseFloat(p.get()));
    }),
      (_.dataset.op = n.id),
      _.classList.add("cablesEle"),
      _.classList.add("sidebar__item"),
      _.classList.add("sidebar__slider"),
      _.classList.add("sidebar__reloadable"),
      n.patch.on("sidebarStylesChanged", () => {
        M();
      });
    const m = document.createElement("div");
    m.classList.add("sidebar__item-label");
    const b = document.createElement("div");
    b.classList.add("sidebar__greyout"), _.appendChild(b), (b.style.display = "none");
    var E = document.createTextNode(e.get());
    m.appendChild(E), _.appendChild(m);
    const v = document.createElement("input");
    (v.value = p.get()),
      v.classList.add("sidebar__text-input-input"),
      v.setAttribute("type", "text"),
      (v.oninput = function (t) {
        let e = parseFloat(t.target.value);
        isNaN(e) && (e = 0);
        var i = r.get(),
          t = s.get();
        e < i ? (e = i) : e > t && (e = t);
        f.set(e), M(), h.set(e), n.isCurrentUiOp() && gui.opParams.show(n);
      }),
      _.appendChild(v);
    const T = document.createElement("span");
    _.appendChild(T),
      (o.onChange = () => {
        T.innerHTML = o.get();
      });
    const x = document.createElement("div");
    x.classList.add("sidebar__slider-input-wrapper"), _.appendChild(x);
    const A = document.createElement("div");
    A.classList.add("sidebar__slider-input-active-track"), x.appendChild(A);
    const y = document.createElement("input");
    function M(t) {
      let e = parseFloat(y.value);
      void 0 !== t && (e = t);
      let i = A.parentElement.getBoundingClientRect().width || 220;
      d && (i = parseInt(getComputedStyle(d.parentElement).getPropertyValue("--sidebar-width")) - 20);
      t = CABLES.map(e, parseFloat(y.min), parseFloat(y.max), 0, i - 16);
      A.style.width = t + "px";
    }
    function S() {
      var t = r.get();
      y.setAttribute("min", t), M();
    }
    function O() {
      var t = s.get();
      y.setAttribute("max", t), M();
    }
    function I(t) {
      v.value = t;
    }
    function C(t) {
      y.value = t;
    }
    y.classList.add("sidebar__slider-input"),
      y.setAttribute("min", r.get()),
      y.setAttribute("max", s.get()),
      y.setAttribute("type", "range"),
      y.setAttribute("step", i.get()),
      y.setAttribute("value", p.get()),
      (y.style.display = "block"),
      x.appendChild(y),
      M(),
      y.addEventListener("input", function (t) {
        t.preventDefault(), t.stopPropagation(), I(t.target.value);
        t = parseFloat(t.target.value);
        f.set(t), h.set(t), n.isCurrentUiOp() && gui.opParams.show(n);
        return M(), !1;
      }),
      (t.onChange = function () {
        g.set(null), (d = t.get()), d && d.parentElement ? (d.parentElement.appendChild(_), g.set(d)) : _.parentElement && _.parentElement.removeChild(_);
        M();
      }),
      (e.onChange = function () {
        var t = e.get();
        (m.textContent = t), CABLES.UI && n.setTitle("Slider: " + t);
      }),
      (h.onChange = function () {
        let t = parseFloat(h.get());
        var e = r.get(),
          i = s.get();
        t > i ? (t = i) : t < e && (t = e);
        I(t), C(t), f.set(t), M();
      }),
      (p.onChange = function () {
        var t = p.get();
        f.set(parseFloat(t)), S(), O(), C(t), I(t), M(t);
      }),
      (u.onTriggered = function () {
        let t = parseFloat(h.get());
        var e = r.get(),
          i = s.get();
        t > i ? (t = i) : t < e && (t = e);
        I(t), C(t), f.set(t), p.set(t), n.isCurrentUiOp() && gui.opParams.show(n);
        M();
      }),
      (r.onChange = S),
      (s.onChange = O),
      (i.onChange = function () {
        var t = i.get();
        y.setAttribute("step", t), M();
      }),
      (n.onDelete = function () {
        !(function (t) {
          t && t.parentNode && t.parentNode.removeChild && t.parentNode.removeChild(t);
        })(_);
      }),
      (n.onLoaded = n.onInit =
        function () {
          n.patch.config.sidebar ? (n.patch.config.sidebar[e.get()], f.set(n.patch.config.sidebar[e.get()])) : (f.set(parseFloat(p.get())), h.set(parseFloat(p.get())));
        }),
      (c.onTriggered = function () {
        var t = parseFloat(p.get());
        f.set(t), I(t), C(t), h.set(t), M();
      }),
      (a.onChange = function () {
        b.style.display = a.get() ? "block" : "none";
      }),
      (l.onChange = function () {
        _.style.display = l.get() ? "block" : "none";
      });
  }),
  (Ops.Sidebar.Slider_v3.prototype = new CABLES.Op()),
  (CABLES.OPS["74730122-5cba-4d0d-b610-df334ec6220a"] = { f: Ops.Sidebar.Slider_v3, objName: "Ops.Sidebar.Slider_v3" }),
  (Ops.Sidebar.Sidebar = function () {
    CABLES.Op.apply(this, arguments);
    const o = this,
      i = {
        style_css:
          " /*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n.sidebar-icon-undo\n{\n    width:10px;\n    height:10px;\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\n    background-size: 19px;\n    background-repeat: no-repeat;\n    top: -19px;\n    margin-top: -7px;\n}\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up,.sidebar__close-button {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n}\n\n.iconsidebar-minimizebutton {\n    background-position: 98% center;\n    background-repeat: no-repeat;\n}\n\n.sidebar-cables-right\n{\n    right: 15px;\n    left: initial !important;\n}\n\n.sidebar-cables {\n    --sidebar-color: #07f78c;\n    --sidebar-width: 220px;\n    --sidebar-border-radius: 10px;\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: var(--sidebar-border-radius);\n    z-index: 100000;\n    color: #BBBBBB;\n    width: var(  --sidebar-width);\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    font-family: Arial;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n}\n\n.sidebar-cables::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    /*-webkit-user-select: none;  */\n    /*-moz-user-select: none;     */\n    /*-ms-user-select: none;      */\n    /*user-select: none;          */\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    /*color: #CCCCCC;*/\n    height: 2px;\n    /*border-bottom:20px solid #222;*/\n\n    /*box-sizing: border-box;*/\n    /*padding-top: 2px;*/\n    /*text-align: center;*/\n    /*cursor: pointer;*/\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\n    /*opacity: 1.0;*/\n    /*transition: opacity 0.3s;*/\n    /*overflow: hidden;*/\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 20px;\n    height: 20px;\n    /*position: relative;*/\n    /*top: -1px;*/\n\n\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding:10px;\n\n    height: 25px;\n    width:25px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transform:rotate(180deg);\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n    padding-bottom: 20px;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /*background-color: #151515;*/\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n\n    /*height: 100%;//var(--sidebar-group-header-height);*/\n\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  /*float: left;*/\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  padding-bottom:10px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n/*.sidebar__toggle */\n.icon_toggle{\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    min-height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n    padding-bottom: 3px;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid var(--sidebar-color);\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    outline: 0;\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: var(--sidebar-color);\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n    max-width: 100%;\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: var(--sidebar-color) !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb:hover {*/\n  /* background-color: #EEEEEE; */\n/*}*/\n\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {*/\n/*    background-color: #fff !important;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n.sidebar__slider input[type=text] {\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover {\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__text-input textarea:focus::placeholder {\n  color: transparent;\n}\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    /*height: 20px;*/\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    outline: none;\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:active {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*\n * COLOR PICKER\n */\n\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\ndiv.sidebar__color-picker-color-input,\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n\n    padding: 0;\n    border: none;\n    /*border:2px solid red;*/\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n\n.sidebar_tabs\n{\n    background-color: #151515;\n    padding-bottom: 0px;\n}\n\n.sidebar_switchs\n{\n    float: right;\n}\n\n.sidebar_tab\n{\n    float:left;\n    background-color: #151515;\n    border-bottom:1px solid transparent;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_tab_active\n{\n    background-color: #272727;\n    color:white;\n}\n\n.sidebar_tab:hover\n{\n    border-bottom:1px solid #777;\n    color:white;\n}\n\n\n.sidebar_switch\n{\n    float:left;\n    background-color: #444;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_switch:last-child\n{\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n\n.sidebar_switch:first-child\n{\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n\n\n.sidebar_switch_active\n{\n    background-color: #999;\n    color:white;\n}\n\n.sidebar_switch:hover\n{\n    color:white;\n}\n",
      },
      n = "cables-sidebar-style",
      r = "cables-sidebar-dynamic-style",
      a = "sidebar-cables",
      l = "sidebar" + CABLES.uuid(),
      h = "sidebar__items",
      u = "sidebar__close-button",
      e = "",
      s = "";
    let c = null;
    let d = null;
    const t = o.inValueBool("Visible", !0),
      p = o.inValueSlider("Opacity", 1),
      g = o.inValueBool("Default Minimized"),
      f = o.inValueSlider("Minimized Opacity", 0.5),
      _ = o.inValueBool("Show undo button", !1),
      m = o.inValueBool("Show Minimize", !1),
      b = o.inString("Title", "Sidebar"),
      E = o.inValueBool("Side"),
      v = o.outObject("childs");
    v.setUiAttribs({ title: "Children" });
    const T = o.outBool("Opfened");
    T.setUiAttribs({ title: "Opened" });
    let x = document.querySelector("." + l);
    x =
      x ||
      (function () {
        const t = document.createElement("div");
        t.classList.add(a), t.classList.add(l);
        const e = o.patch.cgl.canvas.parentElement,
          i = document.createElement("div");
        i.classList.add("sidebar__group"), t.appendChild(i);
        const n = document.createElement("div");
        n.classList.add("sidebar__group-header"), t.appendChild(n);
        const r = document.createElement("span");
        if ((r.classList.add("sidebar__group-header-title"), (d = document.createElement("span")), d.classList.add("sidebar__group-header-title-text"), (d.innerHTML = b.get()), r.appendChild(d), n.appendChild(r), M(n), y(n), i.appendChild(n), t.appendChild(i), i.addEventListener("click", I), e)) {
          e.appendChild(t);
          const s = document.createElement("div");
          return s.classList.add(h), t.appendChild(s), (c = document.createElement("div")), c.classList.add(u), c.addEventListener("click", I), t.appendChild(c), t;
        }
        o.warn("[sidebar] no canvas parentelement found...");
      })();
    var A = x.querySelector("." + h);
    function y(t) {
      if ((t = !t || t.uiAttribs ? document.querySelector(".sidebar-cables .sidebar__group-header") : t)) {
        const e = document.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");
        m.get() ? (t.classList.add("iconsidebar-chevron-up"), t.classList.add("iconsidebar-minimizebutton"), e && (e.style.marginRight = "20px")) : (t.classList.remove("iconsidebar-chevron-up"), t.classList.remove("iconsidebar-minimizebutton"), e && (e.style.marginRight = "initial"));
      }
    }
    function M(t) {
      if (t) {
        const e = document.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");
        if (e) _.get() || e.remove();
        else if (_.get()) {
          const i = document.createElement("span");
          i.classList.add("sidebar__group-header-undo"),
            i.classList.add("sidebar-icon-undo"),
            i.addEventListener("click", function (t) {
              t.stopPropagation();
              const e = document.querySelectorAll(".sidebar-cables .sidebar__reloadable"),
                i = document.createEvent("MouseEvents");
              i.initEvent("dblclick", !0, !0),
                e.forEach((t) => {
                  t.dispatchEvent(i);
                });
            }),
            t.appendChild(i);
        }
      }
      y(t);
    }
    function S() {
      c && (g.get() ? (x.classList.add("sidebar--closed"), t.get() && T.set(!1)) : (x.classList.remove("sidebar--closed"), t.get() && T.set(!0)));
    }
    function O() {
      const t = document.querySelectorAll("." + r);
      t &&
        t.forEach(function (t) {
          t.parentNode.removeChild(t);
        });
      const e = document.createElement("style");
      e.classList.add(r);
      var i = ".sidebar--closed .sidebar__close-button { ";
      (i += "opacity: " + f.get()), (i += "}");
      i = document.createTextNode(i);
      e.appendChild(i), document.body.appendChild(e);
    }
    function I(t) {
      t.stopPropagation(), x ? (x.classList.toggle("sidebar--closed"), t.target, e, x.classList.contains("sidebar--closed") ? (s, T.set(!1)) : T.set(!0)) : o.logError("Sidebar could not be closed...");
    }
    v.set({ parentElement: A, parentOp: o }),
      S(),
      (function () {
        const t = document.querySelectorAll("." + n);
        t &&
          t.forEach(function (t) {
            t.parentNode.removeChild(t);
          });
        const e = document.createElement("style");
        (e.innerHTML = i.style_css), e.classList.add(n), document.body.appendChild(e);
      })(),
      O(),
      (t.onChange = function () {
        t.get() ? ((x.style.display = "block"), x.classList.contains("sidebar--closed") || T.set(!0)) : ((x.style.display = "none"), T.set(!1));
      }),
      (p.onChange = function () {
        var t = p.get();
        x.style.opacity = t;
      }),
      (g.onChange = S),
      (f.onChange = function () {
        O();
      }),
      (_.onChange = function () {
        var t = document.querySelector(".sidebar-cables .sidebar__group-header");
        t && M(t);
      }),
      (o.onDelete = function () {
        !(function (t) {
          t && t.parentNode && t.parentNode.removeChild && t.parentNode.removeChild(t);
        })(x);
      }),
      (m.onChange = y),
      (E.onChange = function () {
        E.get() ? x.classList.add("sidebar-cables-right") : x.classList.remove("sidebar-cables-right");
      }),
      (E.onChanged = function () {}),
      (b.onChange = function () {
        d && (d.innerHTML = b.get());
      });
  }),
  (Ops.Sidebar.Sidebar.prototype = new CABLES.Op()),
  (CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"] = { f: Ops.Sidebar.Sidebar, objName: "Ops.Sidebar.Sidebar" }),
  (Ops.Sidebar.SideBarStyle = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const e = t.inObject("link"),
      i = t.inInt("Width", 220),
      n = t.inFloat("Round Corners", 10),
      r = t.inString("Special Color", "#07f78c"),
      s = t.outObject("childs");
    (r.onChange = n.onChange = i.onChange = a),
      (e.onChange = function () {
        s.set(null);
        var t = e.get();
        t && t.parentElement ? (s.set(t), (o = t.parentElement.parentElement), a()) : (o = null);
      }),
      (t.onDelete = function () {}),
      t.toWorkNeedsParent("Ops.Sidebar.Sidebar");
    let o = null;
    function a() {
      o && (o.style.setProperty("--sidebar-width", i.get() + "px"), o.style.setProperty("--sidebar-color", r.get()), o.style.setProperty("--sidebar-border-radius", Math.round(n.get()) + "px"), t.patch.emitEvent("sidebarStylesChanged"));
    }
  }),
  (Ops.Sidebar.SideBarStyle.prototype = new CABLES.Op()),
  (CABLES.OPS["87d78a59-c8d4-4269-a3f8-af273741aae4"] = { f: Ops.Sidebar.SideBarStyle, objName: "Ops.Sidebar.SideBarStyle" }),
  (Ops.Anim.Smooth = function () {
    CABLES.Op.apply(this, arguments);
    const t = this.inTrigger("Update"),
      e = this.inBool("Separate inc/dec", !1),
      i = this.inValue("Value"),
      n = this.outTrigger("Next"),
      r = this.inValue("Inc factor", 4),
      s = this.inValue("Dec factor", 4),
      o = this.outValue("Result", 0);
    let a = 0,
      l = 0,
      h = 0,
      u = 0;
    this.toWorkPortsNeedToBeLinked(t);
    let c,
      d,
      p = 4,
      g = !0,
      f = 0;
    const _ = 0,
      m = 1;
    function b() {
      var t = e.get();
      (f = t ? m : _), f == _ ? (s.setUiAttribs({ greyout: !0 }), r.setUiAttribs({ title: "Inc/Dec factor" })) : f == m && (s.setUiAttribs({ greyout: !1 }), r.setUiAttribs({ title: "Inc factor" })), E(), v();
    }
    function E() {
      f == _ ? ((c = r.get()), (d = r.get())) : f == m && ((c = r.get()), (d = s.get())), (c <= 0.2 || c != c) && (c = 0.2), (d <= 0.2 || d != d) && (d = 0.2);
    }
    function v() {
      let t = 1;
      500 < performance.now() - u || 0 === u ? (a = i.get() || 0) : (t = (performance.now() - u) / (performance.now() - u)), (u = performance.now()), a != a && (a = 0), p <= 0 && (p = 1e-4);
      var e = l - a;
      (a += 0 <= e ? e / (d * t) : e / (c * t)), Math.abs(e) < 1e-5 && (a = l), p != p && (a = 0), (a == a && a != -1 / 0 && a != 1 / 0) || (a = i.get()), h != a && (o.set(a), (h = a)), a != l || g || ((g = !0), o.set(a)), n.trigger();
    }
    b(),
      E(),
      e.setUiAttribs({ hidePort: !0 }),
      (r.onChange = s.onChange = E),
      (e.onChange = b),
      v(),
      (i.onChange = function () {
        g = !1;
        l;
        l = i.get();
      }),
      (r.onChange = function () {
        E();
      }),
      (t.onTriggered = function () {
        v();
      });
  }),
  (Ops.Anim.Smooth.prototype = new CABLES.Op()),
  (CABLES.OPS["5677b5b5-753a-4fbf-9e91-64c81ec68a2f"] = { f: Ops.Anim.Smooth, objName: "Ops.Anim.Smooth" }),
  (Ops.Gl.ClearColor = function () {
    CABLES.Op.apply(this, arguments);
    const t = this.inTrigger("render"),
      e = this.outTrigger("trigger"),
      i = this.inFloatSlider("r", 0.1),
      n = this.inFloatSlider("g", 0.1),
      r = this.inFloatSlider("b", 0.1),
      s = this.inFloatSlider("a", 1);
    i.setUiAttribs({ colorPick: !0 });
    const o = this.patch.cgl;
    t.onTriggered = function () {
      o.gl.clearColor(i.get(), n.get(), r.get(), s.get()), o.gl.clear(o.gl.COLOR_BUFFER_BIT | o.gl.DEPTH_BUFFER_BIT), e.trigger();
    };
  }),
  (Ops.Gl.ClearColor.prototype = new CABLES.Op()),
  (CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"] = { f: Ops.Gl.ClearColor, objName: "Ops.Gl.ClearColor" }),
  (Ops.Boolean.ToggleBool = function () {
    CABLES.Op.apply(this, arguments);
    const t = this.inTriggerButton("trigger"),
      e = this.inTriggerButton("reset"),
      i = this.outBool("result"),
      n = this.inBool("Default", !1);
    let r = !1;
    i.set(r),
      (i.ignoreValueSerialize = !0),
      (t.onTriggered = function () {
        (r = !r), i.set(r);
      }),
      (e.onTriggered = function () {
        (r = n.get()), i.set(r);
      });
  }),
  (Ops.Boolean.ToggleBool.prototype = new CABLES.Op()),
  (CABLES.OPS["712a25f4-3a93-4042-b8c5-2f56169186cc"] = { f: Ops.Boolean.ToggleBool, objName: "Ops.Boolean.ToggleBool" }),
  (Ops.Devices.Mouse.MouseButtons = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const e = t.outTrigger("Click Left"),
      i = t.outTrigger("Click Right"),
      n = t.outTrigger("Double Click"),
      r = t.outValue("Button pressed Left", !1),
      s = t.outValue("Button pressed Middle", !1),
      o = t.outValue("Button pressed Right", !1),
      a = t.outTrigger("Mouse Down Left"),
      l = t.outTrigger("Mouse Down Middle"),
      h = t.outTrigger("Mouse Down Right"),
      u = t.outTrigger("Mouse Up Left"),
      c = t.outTrigger("Mouse Up Middle"),
      d = t.outTrigger("Mouse Up Right"),
      p = t.inValueSelect("Area", ["Canvas", "Document"], "Canvas"),
      g = t.inValueBool("Active", !0),
      f = t.patch.cgl;
    let _ = null;
    (p.onChange = S), (t.onDelete = M), S();
    let m = 0;
    function b(t) {
      (m = CABLES.now()), 1 == t.which ? (r.set(!0), a.trigger()) : 2 == t.which ? (s.set(!0), l.trigger()) : 3 == t.which && (o.set(!0), h.trigger());
    }
    function E(t) {
      1 == t.which ? (r.set(!1), u.trigger()) : 2 == t.which ? (s.set(!1), c.trigger()) : 3 == t.which && (o.set(!1), d.trigger());
    }
    function v(t) {
      i.trigger(), t.preventDefault();
    }
    function T(t) {
      n.trigger();
    }
    function x(t) {
      CABLES.now() - m < 200 && e.trigger();
    }
    function A(t) {
      t.touches && 0 < t.touches.length && ((t.touches[0].which = 1), b(t.touches[0]));
    }
    function y(t) {
      E({ which: 1 });
    }
    function M() {
      _ && (_.removeEventListener("touchend", y), _.removeEventListener("touchcancel", y), _.removeEventListener("touchstart", A), _.removeEventListener("dblclick", T), _.removeEventListener("click", x), _.removeEventListener("mousedown", b), _.removeEventListener("mouseup", E), _.removeEventListener("contextmenu", v), _.removeEventListener("mouseleave", E), (_ = null));
    }
    function S() {
      M(), g.get() && (_ && M(), (_ = f.canvas), "Document" == p.get() && (_ = document.body), _.addEventListener("touchend", y), _.addEventListener("touchcancel", y), _.addEventListener("touchstart", A), _.addEventListener("dblclick", T), _.addEventListener("click", x), _.addEventListener("mousedown", b), _.addEventListener("mouseup", E), _.addEventListener("contextmenu", v), _.addEventListener("mouseleave", E));
    }
    (t.onLoaded = S), (g.onChange = S);
  }),
  (Ops.Devices.Mouse.MouseButtons.prototype = new CABLES.Op()),
  (CABLES.OPS["c7e5e545-c8a1-4fef-85c2-45422b947f0d"] = { f: Ops.Devices.Mouse.MouseButtons, objName: "Ops.Devices.Mouse.MouseButtons" }),
  (Ops.Anim.RandomAnim = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const e = t.inTrigger("exe"),
      i = t.inValue("min", 0),
      n = t.inValue("max", 1),
      r = t.inValue("random seed", 0),
      s = t.inValue("duration", 0.5),
      o = t.inValue("pause between", 0),
      a = t.outTrigger("Next"),
      l = t.outValue("result"),
      h = t.outTrigger("Looped"),
      u = new CABLES.Anim();
    u.createPort(t, "easing", g), t.setPortGroup("Timing", [s, o]), t.setPortGroup("Value", [i, n, r]), t.toWorkPortsNeedToBeLinked(e);
    let c = 0;
    i.onChange =
      n.onChange =
      o.onChange =
      r.onChange =
      s.onChange =
        function () {
          d = !0;
        };
    let d = !0;
    function p() {
      var t = i.get();
      return Math.seededRandom() * (n.get() - t) + t;
    }
    function g() {
      (Math.randomSeed = r.get() + 100 * c), f(p()), (d = !1);
    }
    function f(t) {
      u.clear(), u.setValue(CABLES.now() / 1e3, t), 0 !== o.get() && u.setValue(CABLES.now() / 1e3 + o.get(), t), u.setValue(s.get() + CABLES.now() / 1e3 + o.get(), p());
    }
    e.onTriggered = function () {
      d && g();
      var t = CABLES.now() / 1e3,
        e = u.getValue(t);
      u.hasEnded(t) && (c++, u.clear(), f(e), h.trigger());
      l.set(e), a.trigger();
    };
  }),
  (Ops.Anim.RandomAnim.prototype = new CABLES.Op()),
  (CABLES.OPS["2d2e5f0e-b69f-4789-9a48-1ee6ade5049a"] = { f: Ops.Anim.RandomAnim, objName: "Ops.Anim.RandomAnim" }),
  (Ops.Ui.VizGraph = function () {
    CABLES.Op.apply(this, arguments);
    const l = this;
    const t = l.inFloat("Number 1"),
      e = l.inFloat("Number 2"),
      i = l.inFloat("Number 3"),
      n = l.inFloat("Number 4"),
      r = l.inFloat("Number 5"),
      s = l.inFloat("Number 6"),
      o = l.inFloat("Number 7"),
      a = l.inFloat("Number 8"),
      h = l.inTriggerButton("Reset");
    l.setUiAttrib({ height: 150, resizable: !0 });
    let u = [],
      c = -Number.MAX_VALUE,
      d = Number.MAX_VALUE;
    (t.onLinkChanged =
      e.onLinkChanged =
      i.onLinkChanged =
      n.onLinkChanged =
      r.onLinkChanged =
      s.onLinkChanged =
      o.onLinkChanged =
      a.onLinkChanged =
      h.onTriggered =
        () => {
          (c = -Number.MAX_VALUE), (d = Number.MAX_VALUE), (u = []);
        }),
      (l.renderVizLayer = (i, n) => {
        const t = CABLES.UI.uiProfiler.start("previewlayer graph");
        var r = ["#00ffff", "#ffff00", "#ff00ff", "#0000ff", "#00ff00", "#ff0000", "#ffffff", "#888888"];
        (i.fillStyle = "#222"), i.fillRect(n.x, n.y, n.width, n.height);
        for (let e = 0; e < l.portsIn.length; e++)
          if (l.portsIn[e].isLinked()) {
            var s = l.portsIn[e].get();
            (c = Math.max(l.portsIn[e].get(), c)), (d = Math.min(l.portsIn[e].get(), d)), u[e] || (u[e] = []), u[e].push(s), 60 < u[e].length && u[e].shift();
            var o = n.width / 60;
            (i.lineWidth = 2), (i.strokeStyle = "#555555"), i.beginPath(), i.moveTo(n.x, CABLES.map(0, d, c, n.height, 0) + n.y), i.lineTo(n.x + n.width, CABLES.map(0, d, c, n.height, 0) + n.y), i.stroke(), (i.strokeStyle = r[e]), i.beginPath();
            for (let t = 0; t < u[e].length; t++) {
              var a = u[e][t],
                a = CABLES.map(a, d, c, n.height, 0);
              (a += n.y), 0 === t ? i.moveTo(n.x, a) : i.lineTo(n.x + t * o, a);
            }
            i.stroke();
          }
        (i.fillStyle = "#888"), i.fillText("max:" + Math.round(100 * c) / 100, n.x + 10, n.y + n.height - 10), i.fillText("min:" + Math.round(100 * d) / 100, n.x + 10, n.y + n.height - 30), t.finish();
      });
  }),
  (Ops.Ui.VizGraph.prototype = new CABLES.Op()),
  (CABLES.OPS["13c54eb4-60ef-4b9c-8425-d52a431f5c87"] = { f: Ops.Ui.VizGraph, objName: "Ops.Ui.VizGraph" }),
  (Ops.Sequence = function () {
    CABLES.Op.apply(this, arguments);
    const s = this;
    const t = s.inTrigger("exe"),
      i = s.inTriggerButton("Clean up connections"),
      n = [],
      o = [];
    let e = null;
    (t.onTriggered = r),
      (i.onTriggered = function () {
        let n = 0;
        for (let i = 0; i < o.length; i++) {
          let e = [];
          if (1 < o[i].links.length)
            for (let t = 1; t < o[i].links.length; t++) {
              for (; 0 < o[n].links.length; ) n++;
              e.push(o[i].links[t]);
              var r = o[i].links[t].getOtherPort(o[i]);
              s.patch.link(s, "trigger " + n, r.parent, r.name), n++;
            }
          for (let t = 0; t < e.length; t++) e[t].remove();
        }
        a();
      }),
      i.setUiAttribs({ hidePort: !0 }),
      i.setUiAttribs({ hideParam: !0 });
    for (let e = 0; e < 16; e++) {
      const l = s.outTrigger("trigger " + e);
      if ((o.push(l), (l.onLinkChanged = a), e < 15)) {
        let t = s.inTrigger("exe " + e);
        (t.onTriggered = r), n.push(t);
      }
    }
    function a() {
      clearTimeout(e),
        (e = setTimeout(() => {
          let e = !1;
          for (let t = 0; t < o.length; t++) 1 < o[t].links.length && (e = !0);
          i.setUiAttribs({ hideParam: !e }), s.isCurrentUiOp() && s.refreshParams();
        }, 60));
    }
    function r() {
      for (let t = 0; t < o.length; t++) o[t].trigger();
    }
  }),
  (Ops.Sequence.prototype = new CABLES.Op()),
  (CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"] = { f: Ops.Sequence, objName: "Ops.Sequence" }),
  (Ops.Anim.BoolAnim = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const i = new CABLES.Anim(),
      e = t.inTrigger("exe"),
      n = t.inValueBool("bool"),
      r = i.createPort(t, "easing"),
      s = t.inValue("duration", 0.5),
      o = t.inValueSelect("Direction", ["Animate Both", "Only True", "Only False"], "Both"),
      a = t.inValue("value false", 0),
      l = t.inValue("value true", 1),
      h = t.outTrigger("trigger"),
      u = t.outValue("value"),
      c = t.outValueBool("finished"),
      d = t.outTrigger("Finished Trigger"),
      p = CABLES.now();
    function g() {
      c.set(!1);
      var t = (CABLES.now() - p) / 1e3,
        e = i.getValue(t);
      i.clear(), i.setValue(t, e), n.get() ? ("Only False" != o.get() ? i.setValue(t + s.get(), l.get()) : i.setValue(t, l.get())) : "Only True" != o.get() ? i.setValue(t + s.get(), a.get()) : i.setValue(t, a.get());
    }
    t.toWorkPortsNeedToBeLinked(e),
      t.setPortGroup("Animation", [s, r]),
      t.setPortGroup("Values", [a, l]),
      (o.onChange = n.onChange = a.onChange = l.onChange = s.onChange = g)(),
      (e.onTriggered = function () {
        var t = (CABLES.now() - p) / 1e3;
        u.set(i.getValue(t)), i.hasEnded(t) && (c.get() || d.trigger(), c.set(!0)), h.trigger();
      });
  }),
  (Ops.Anim.BoolAnim.prototype = new CABLES.Op()),
  (CABLES.OPS["06ad9d35-ccf5-4d31-889c-e23fa062588a"] = { f: Ops.Anim.BoolAnim, objName: "Ops.Anim.BoolAnim" }),
  (Ops.Devices.Mouse.Mouse_v2 = function () {
    CABLES.Op.apply(this, arguments);
    var t = this;
    const e = t.inValueBool("Active", !0),
      i = t.inValueBool("relative"),
      r = t.inValueBool("normalize"),
      n = t.inValueBool("flip y", !0),
      s = t.inValueSelect("Area", ["Canvas", "Document", "Parent Element"], "Canvas"),
      o = t.inBool("right click prevent default", !0),
      a = t.inValueBool("Touch support", !0),
      l = t.inValueBool("smooth"),
      h = t.inValueFloat("smoothSpeed", 20),
      u = t.inValueFloat("multiply", 1),
      c = t.outNumber("x", 0),
      d = t.outNumber("y", 0),
      p = t.outValueBool("button down"),
      g = t.outTrigger("click"),
      f = t.outTrigger("Button Up"),
      _ = t.outTrigger("click right"),
      m = t.outValueBool("mouseOver"),
      b = t.outNumber("button");
    t.setPortGroup("Behavior", [i, r, n, s, o, a]), t.setPortGroup("Smoothing", [l, h, u]);
    let E = 0;
    const v = t.patch.cgl;
    let T = null;
    function x(i, n) {
      if (r.get()) {
        let t = v.canvas.width / v.pixelDensity,
          e = v.canvas.height / v.pixelDensity;
        T == document.body && ((t = T.clientWidth / v.pixelDensity), (e = T.clientHeight / v.pixelDensity)), c.set((((i || 0) / t) * 2 - 1) * u.get()), d.set((((n || 0) / e) * 2 - 1) * u.get());
      } else c.set((i || 0) * u.get()), d.set((n || 0) * u.get());
    }
    l.onChange = function () {
      l.get() ? (E = setInterval(R, 5)) : E && clearTimeout(E);
    };
    let A = 0,
      y = 0;
    r.onChange = function () {
      x((M = 0), (S = 0));
    };
    var M = v.canvas.width / 2,
      S = v.canvas.height / 2;
    (A = M), (y = S), c.set(M), d.set(S);
    let O = 0,
      I = 0,
      C = 0,
      N = 0;
    X(), (s.onChange = X);
    let P = 0;
    function R() {
      (P = h.get()), P <= 0 && (P = 0.01);
      var t = Math.abs(M - A),
        t = Math.round(t / P, 0);
      A = A < M ? A + t : A - t;
      (t = Math.abs(S - y)), (t = Math.round(t / P, 0));
      (y = y < S ? y + t : y - t), x(A, y);
    }
    function L(t) {
      p.set(!1), m.set(!0), (P = h.get());
    }
    function w(t) {
      b.set(t.which), p.set(!0);
    }
    function D(t) {
      b.set(0), p.set(!1), f.trigger();
    }
    function F(t) {
      _.trigger(), o.get() && t.preventDefault();
    }
    function B(t) {
      g.trigger();
    }
    function U(t) {
      (O = 0), (I = 0), (P = 100), m.set(!1), p.set(!1);
    }
    function k(t) {
      i.get() ? (0 != O && 0 != I && ((C = t.offsetX - O), (N = t.offsetY - I)), (O = t.offsetX), (I = t.offsetY), (M += C), 460 < (S += N) && (S = 460)) : ((N = "Document" != s.get() ? ((C = t.offsetX), t.offsetY) : ((C = t.clientX), t.clientY)), l.get() ? ((M = C), (S = n.get() ? T.clientHeight - N : N)) : n.get() ? x(C, T.clientHeight - N) : x(C, N));
    }
    function V(t) {
      m.set(!0), k(t);
    }
    function G(t) {
      event.touches && 0 < event.touches.length && k(t.touches[0]);
    }
    function z(t) {
      p.set(!0), t.touches && 0 < t.touches.length && w(t.touches[0]);
    }
    function j(t) {
      p.set(!1), D();
    }
    function H() {
      T && (T.removeEventListener("touchend", j), T.removeEventListener("touchstart", z), T.removeEventListener("touchmove", G), T.removeEventListener("click", B), T.removeEventListener("mousemove", V), T.removeEventListener("mouseleave", U), T.removeEventListener("mousedown", w), T.removeEventListener("mouseup", D), T.removeEventListener("mouseenter", L), T.removeEventListener("contextmenu", F), (T = null));
    }
    function X() {
      (!T && e.get()) || H(), e.get() && ((T = v.canvas), "Document" == s.get() && (T = document.body), "Parent Element" == s.get() && (T = v.canvas.parentElement), a.get() && (T.addEventListener("touchend", j), T.addEventListener("touchstart", z), T.addEventListener("touchmove", G)), T.addEventListener("mousemove", V), T.addEventListener("mouseleave", U), T.addEventListener("mousedown", w), T.addEventListener("mouseup", D), T.addEventListener("mouseenter", L), T.addEventListener("contextmenu", F), T.addEventListener("click", B));
    }
    (i.onChange = function () {
      (C = 0), (N = 0);
    }),
      (a.onChange = function () {
        H(), X();
      }),
      (e.onChange = function () {
        T && H(), e.get() && X();
      }),
      (t.onDelete = function () {
        H();
      }),
      X();
  }),
  (Ops.Devices.Mouse.Mouse_v2.prototype = new CABLES.Op()),
  (CABLES.OPS["9fa3fc46-3147-4e3a-8ee8-a93ea9e8786e"] = { f: Ops.Devices.Mouse.Mouse_v2, objName: "Ops.Devices.Mouse.Mouse_v2" }),
  window.addEventListener("load", function (t) {
    (CABLES.jsLoaded = new Event("CABLES.jsLoaded")), document.dispatchEvent(CABLES.jsLoaded);
  }),
  (this.CGL = this.CGL || {}),
  (this.CGL.COREMODULES = this.CGL.COREMODULES || {}),
  (this.CGL.COREMODULES.Shadermodifier = (function (i) {
    var n = {};
    function r(t) {
      if (n[t]) return n[t].exports;
      var e = (n[t] = { i: t, l: !1, exports: {} });
      return i[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
    }
    return (
      (r.m = i),
      (r.c = n),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if ((r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var n in e)
            r.d(
              i,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, e, i) {
      "use strict";
      i.r(e),
        (CGL.ShaderModifier = class {
          constructor(t, e, i) {
            (this._cgl = t),
              (this._name = e),
              (this._origShaders = {}),
              (this._uniforms = []),
              (this._structUniforms = []),
              (this._definesToggled = {}),
              (this._defines = {}),
              (this._mods = []),
              (this._textures = []),
              (this._boundShader = null),
              (this._changedDefines = !0),
              (this._changedUniforms = !0),
              (this._modulesChanged = !1),
              (this.needsTexturePush = !1),
              (this._lastShader = null),
              1 == this._cgl.glVersion && (this._cgl.gl.getExtension("OES_texture_float"), this._cgl.gl.getExtension("OES_texture_float_linear"), this._cgl.gl.getExtension("OES_texture_half_float"), this._cgl.gl.getExtension("OES_texture_half_float_linear"));
          }
          bind() {
            const i = this._cgl.getShader();
            if (i) {
              this._boundShader = this._origShaders[i.id];
              let t = !1;
              if (
                (this._boundShader && this._lastShader != this._boundShader.shader && (this._boundShader.shader.hasModule(this._mods[0].id) || (t = !0)),
                (t || !this._boundShader || i.lastCompile != this._boundShader.lastCompile || this._modulesChanged || i._needsRecompile) &&
                  (this._boundShader && this._boundShader.shader.dispose(),
                  i._needsRecompile && i.compile(),
                  (this._boundShader = this._origShaders[i.id] = { lastCompile: i.lastCompile, orig: i, shader: i.copy() }),
                  1 == this._cgl.glVersion && (this._boundShader.shader.enableExtension("GL_OES_standard_derivatives"), this._boundShader.shader.enableExtension("GL_OES_texture_float"), this._boundShader.shader.enableExtension("GL_OES_texture_float_linear"), this._boundShader.shader.enableExtension("GL_OES_texture_half_float"), this._boundShader.shader.enableExtension("GL_OES_texture_half_float_linear")),
                  this._addModulesToShader(this._boundShader.shader),
                  this._updateDefinesShader(this._boundShader.shader),
                  this._updateUniformsShader(this._boundShader.shader)),
                (this._boundShader.wireframe = i.wireframe),
                this._changedDefines && this._updateDefines(),
                this._changedUniforms && this._updateUniforms(),
                this._cgl.pushShader(this._boundShader.shader),
                this._boundShader.shader.copyUniformValues(this._boundShader.orig),
                this.needsTexturePush)
              ) {
                for (let e = 0; e < this._textures.length; e += 1) {
                  const t = this._textures[e][0],
                    n = this._textures[e][1],
                    r = this._textures[e][2];
                  if (this._getUniform(t)) {
                    const i = this.getPrefixedName(t),
                      s = this._boundShader.shader.getUniform(i);
                    s && this._boundShader.shader.pushTexture(s, n, r);
                  }
                }
                (this.needsTexturePush = !1), (this._textures.length = 0);
              }
              this._modulesChanged = !1;
            }
          }
          unbind() {
            this._boundShader && this._cgl.popShader(), (this._boundShader = null);
          }
          _addModulesToShader(e) {
            let i;
            1 < this._mods.length && (i = this._mods[0]);
            for (let t = 0; t < this._mods.length; t++) e.addModule(this._mods[t], i);
          }
          _removeModulesFromShader(t) {
            for (const e in this._origShaders) this._origShaders[e].shader.removeModule(t);
          }
          addModule(t) {
            this._mods.push(t), (this._modulesChanged = !0);
          }
          removeModule(e) {
            const i = [];
            for (let t = 0; t < this._mods.length; t++) this._mods[t].title == e && (this._removeModulesFromShader(this._mods[t]), i.push(t));
            for (let t = i.length - 1; 0 <= t; --t) this._mods.splice(i[t], 1);
            this._modulesChanged = !0;
          }
          _updateUniformsShader(e) {
            for (let t = 0; t < this._uniforms.length; t++) {
              var i = this._uniforms[t],
                n = this.getPrefixedName(i.name);
              if (!e.hasUniform(n) && !i.structName) {
                let t = null;
                "both" === i.shaderType ? ((t = e.addUniformBoth(i.type, n, i.v1, i.v2, i.v3, i.v4)), (t.comment = "mod: " + this._name)) : "frag" === i.shaderType ? ((t = e.addUniformFrag(i.type, n, i.v1, i.v2, i.v3, i.v4)), (t.comment = "mod: " + this._name)) : "vert" === i.shaderType && ((t = e.addUniformVert(i.type, n, i.v1, i.v2, i.v3, i.v4)), (t.comment = "mod: " + this._name));
              }
            }
            for (let t = 0; t < this._structUniforms.length; t += 1) {
              var r = this._structUniforms[t],
                s = (r.uniformName, r.structName, r.members),
                o = this.getPrefixedName(r.uniformName),
                a = this.getPrefixedName(r.structName);
              "frag" === r.shaderType && e.addUniformStructFrag(a, o, s), "vert" === r.shaderType && e.addUniformStructVert(a, o, s), "both" === r.shaderType && e.addUniformStructBoth(a, o, s);
            }
          }
          _updateUniforms() {
            for (const t in this._origShaders) this._updateUniformsShader(this._origShaders[t].shader);
            this._changedUniforms = !1;
          }
          _setUniformValue(t, e, i) {
            const n = t.getUniform(e);
            n && n.setValue(i);
          }
          setUniformValue(t, e) {
            if (this._getUniform(t)) {
              var i = this.getPrefixedName(t);
              for (const t in this._origShaders) this._setUniformValue(this._origShaders[t].shader, i, e);
            }
          }
          hasUniform(t) {
            return this._getUniform(t);
          }
          _getUniform(e) {
            for (let t = 0; t < this._uniforms.length; t++) {
              if (this._uniforms[t].name == e) return this._uniforms[t];
              if (this._uniforms[t].structName && this._uniforms[t].propertyName == e) return this._uniforms[t];
            }
            return !1;
          }
          _getStructUniform(e) {
            for (let t = 0; t < this._structUniforms.length; t += 1) if (this._structUniforms[t].uniformName === e) return this._structUniforms[t];
            return null;
          }
          _isStructUniform(e) {
            for (let t = 0; t < this._uniforms.length; t++) {
              if (this._uniforms[t].name == e) return !1;
              if (this._uniforms[t].structName && this._uniforms[t].propertyName == e) return !0;
            }
            return !1;
          }
          addUniform(e, i, n, r, s, o, a, l, h, u) {
            if (!this._getUniform(i)) {
              let t = u ? u : "both";
              this._uniforms.push({ type: e, name: i, v1: n, v2: r, v3: s, v4: o, structUniformName: a, structName: l, propertyName: h, shaderType: t }), (this._changedUniforms = !0);
            }
          }
          addUniformFrag(t, e, i, n, r, s) {
            this.addUniform(t, e, i, n, r, s, null, null, null, "frag"), (this._changedUniforms = !0);
          }
          addUniformVert(t, e, i, n, r, s) {
            this.addUniform(t, e, i, n, r, s, null, null, null, "vert"), (this._changedUniforms = !0);
          }
          addUniformBoth(t, e, i, n, r, s) {
            this.addUniform(t, e, i, n, r, s, null, null, null, "both"), (this._changedUniforms = !0);
          }
          addUniformStruct(e, i, n, r) {
            for (let t = 0; t < n.length; t += 1) {
              var s = n[t];
              ("2i" !== s.type && "i" !== s.type && "3i" !== s.type) || "both" !== r || console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", e, " with member:", s.name, " of type:", s.type, "."), this._getUniform(i + "." + s.name) || this.addUniform(s.type, i + "." + s.name, s.v1, s.v2, s.v3, s.v4, i, e, s.name, r);
            }
            this._getStructUniform(i) || this._structUniforms.push({ structName: e, uniformName: i, members: n, shaderType: r });
          }
          addUniformStructVert(t, e, i) {
            this.addUniformStruct(t, e, i, "vert");
          }
          addUniformStructFrag(t, e, i) {
            this.addUniformStruct(t, e, i, "frag");
          }
          addUniformStructBoth(t, e, i) {
            this.addUniformStruct(t, e, i, "both");
          }
          pushTexture(t, e, i) {
            if (!e) throw new Error("no texture given to texturestack");
            this._textures.push([t, e, i]), (this.needsTexturePush = !0);
          }
          _removeUniformFromShader(t, e) {
            e.hasUniform(t) && e.removeUniform(t);
          }
          removeUniform(e) {
            if (this._getUniform(e)) {
              for (let t = this._uniforms.length - 1; 0 <= t; --t) {
                var i = e;
                if (this._uniforms[t].name == e && !this._uniforms[t].structName) {
                  for (const e in this._origShaders) this._removeUniformFromShader(this.getPrefixedName(i), this._origShaders[e].shader);
                  this._uniforms.splice(t, 1);
                }
              }
              this._changedUniforms = !0;
            }
          }
          removeUniformStruct(e) {
            if (this._getStructUniform(e)) {
              for (let t = this._structUniforms.length - 1; 0 <= t; --t) {
                var i = this._structUniforms[t];
                if (i.uniformName === e) {
                  for (const e in this._origShaders)
                    for (let t = 0; t < i.members.length; t += 1) {
                      var n = i.members[t];
                      this._removeUniformFromShader(this.getPrefixedName(n.name), this._origShaders[e].shader);
                    }
                  this._structUniforms.splice(t, 1);
                }
              }
              this._changedUniforms = !0;
            }
          }
          getPrefixedName(t) {
            var e = this._mods[0].group;
            if (void 0 !== e) return (t = 0 == t.indexOf("MOD_") ? "mod" + e + "_" + t.substr("MOD_".length) : t);
          }
          _updateDefinesShader(t) {
            for (const n in this._defines) {
              var e = this.getPrefixedName(n);
              null !== this._defines[n] && void 0 !== this._defines[n] ? t.define(e, this._defines[n]) : t.removeDefine(e);
            }
            for (const r in this._definesToggled) {
              var i = this.getPrefixedName(r);
              t.toggleDefine(i, this._definesToggled[r]);
            }
          }
          _updateDefines() {
            for (const t in this._origShaders) this._updateDefinesShader(this._origShaders[t].shader);
            this._changedDefines = !1;
          }
          define(t, e) {
            (this._defines[t] = e), (this._changedDefines = !0);
          }
          removeDefine(t) {
            (this._defines[t] = null), (this._changedDefines = !0);
          }
          hasDefine(t) {
            return null !== this._defines[t] && void 0 !== this._defines[t];
          }
          toggleDefine(t, e) {
            (this._changedDefines = !0), (this._definesToggled[t] = e);
          }
          currentShader() {
            return this._boundShader.shader;
          }
          dispose() {}
        });
    },
  ]).Shadermodifier);
!(function (l) {
  "use strict";
  var a = {
    ns: "SVG Sprite Polyfill",
    ajax: function (t, e) {
      var n,
        o = new XMLHttpRequest();
      o.open("GET", t, !0),
        (o.onload = function () {
          200 <= o.status && o.status < 400 ? ((n = o.responseText), "function" == typeof e && e.call(this, n)) : console.log("Error reaching the server");
        }),
        (o.onerror = function () {
          console.log("Connection error");
        }),
        o.send();
    },
    init: function () {
      var t,
        e,
        n,
        o,
        r,
        i,
        s,
        u = l.querySelectorAll("svg > use"),
        c = a.create('<div id="svg-poly-target" style="position: absolute;height: 0; width: 0;"></div>'),
        d = [];
      for (document.body.insertBefore(c, document.body.childNodes[0]), n = 0; n < u.length; n += 1) (t = (s = (r = u[n]).getAttribute("xlink:href").split("#"))[0]), (e = s[1]), t && (d.push(t), r.setAttribute("xlink:href", "#" + e));
      for (
        d = d.filter(function (t, e) {
          return d.indexOf(t) == e;
        }),
          o = 0;
        o < d.length;
        o += 1
      )
        (i = d[o]),
          a.ajax(i, function (t) {
            document.getElementById("svg-poly-target").innerHTML += t;
          });
    },
    create: function (t) {
      var e = document.createDocumentFragment(),
        n = document.createElement("div");
      for (n.innerHTML = t; n.firstChild; ) e.appendChild(n.firstChild);
      return e;
    },
  };
  /MSIE|Trident/.test(navigator.userAgent) &&
    document.addEventListener("DOMContentLoaded", function () {
      a.init();
    });
})(this.document);
