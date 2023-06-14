jQuery(function () {
  let empatizandoIa = document.getElementById("empatizando-ia");

  if (empatizandoIa) {
    gsap.registerPlugin(ScrollTrigger);
    // Blur plugin //
    (function () {
      const blurProperty = gsap.utils.checkPrefix("filter"),
        blurExp = /blur\((.+)?px\)/,
        getBlurMatch = (target) => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

      gsap.registerPlugin({
        name: "blur",
        get(target) {
          return +getBlurMatch(target)[1] || 0;
        },
        init(target, endValue) {
          let data = this,
            filter = gsap.getProperty(target, blurProperty),
            endBlur = "blur(" + endValue + "px)",
            match = getBlurMatch(target)[0],
            index;
          if (filter === "none") {
            filter = "";
          }
          if (match) {
            index = filter.indexOf(match);
            endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
          } else {
            endValue = filter + endBlur;
            filter += filter ? " blur(0px)" : "blur(0px)";
          }
          data.target = target;
          data.interp = gsap.utils.interpolate(filter, endValue);
        },
        render(progress, data) {
          data.target.style[blurProperty] = data.interp(progress);
        },
      });
    })();

    // Fin plugin //

    // Collage
    let collage = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".collage",
          start: "top 75%",
          end: "bottom 85%",
          scrub: 1,
        },
      })

      .from(".lobo", { y: -150, scale: 2 })
      .from(".bolas", { scale: 2, rotation: -100, x: 300 }, "<")
      .from(".wok", { scale: 0 }, "<")
      .from(".box2", { scale: 0 }, "<")
      .from(".chica", { y: 250 }, "<")
      .from(".box", { scale: 0 }, "<")
      .from(".box4", { scale: 0.75 }, "<")
      .to(".truck", { x: -90 }, "<")
      .from(".box3", { scale: 0 }, "<")
      .from(".lines", { scale: 0 }, "<");

    // Fade de los bocadillos
    gsap.utils.toArray(".bocadillo").forEach((element) => {
      let fadeBocadillo = gsap.timeline().from(element, { opacity: 0.1, ease: Power2.easeOut });

      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        end: "top 65%",
        toggleActions: "play none none reverse",
        animation: fadeBocadillo,
        scrub: 1,
      });
    });

    // Pinear div fotos
    ScrollTrigger.create({
      trigger: "#montajesScroll",
      start: "center center",
      endTrigger: ".conclusion",
      end: "top bottom",
      pin: true,
      pinSpacing: false,
    });

    // Casco blur
    let blurCasco = gsap.timeline().from("#casco", { blur: 25 }).from("#casco", { scale: 0.9 }, "<0.1");

    ScrollTrigger.create({
      trigger: "#bocadillo-3",
      start: "top bottom",
      end: "center center",
      toggleActions: "play none none reverse",
      animation: blurCasco,
      scrub: 0.5,
    });

    // Casco Fade out img, fade in montaje y fade out montaje
    let inOutMontajeCasco = gsap.timeline().to("#casco", { opacity: 0 }).from("#montajeCasco", { opacity: 0 }, ">").to("#montajeCasco", { opacity: 0, ease: Power4.easeIn }, ">");

    ScrollTrigger.create({
      trigger: "#bocadillo-4",
      start: "top center",
      endTrigger: "#bocadillo-5",
      end: "top bottom",
      toggleActions: "play none none reverse",
      animation: inOutMontajeCasco,
      scrub: 0.5,
    });

    // Cactus entra, blur y fade out

    let entraCactus = gsap.timeline().from("#cactus", { opacity: 0 }).from("#cactus", { blur: 70 }, ">0.8").from("#cactus", { scale: 0.9 }, "<0.1").to("#cactus", { opacity: 0 }, ">1");

    ScrollTrigger.create({
      trigger: "#bocadillo-5",
      start: "top 80%",
      endTrigger: "#bocadillo-7",
      end: "top center",
      toggleActions: "play none none reverse",
      animation: entraCactus,
      scrub: 0.5,
    });

    // Cactus fade in montaje y fade out montaje

    let inOutMontajeCactus = gsap.timeline().from("#montajeCactus", { opacity: 0 }, ">").to("#montajeCactus", { opacity: 0, ease: Power4.easeIn }, ">");

    ScrollTrigger.create({
      trigger: "#bocadillo-7",
      start: "top center",
      endTrigger: "#bocadillo-8",
      end: "top bottom",
      toggleActions: "play none none reverse",
      animation: inOutMontajeCactus,
      scrub: 0.5,
    });

    // Tijeras entra, blur y fade out

    let entraTijeras = gsap.timeline().from("#tijeras", { opacity: 0 }).from("#tijeras", { blur: 70 }, ">0.8").from("#tijeras", { scale: 0.9 }, "<0.1").to("#tijeras", { opacity: 0 }, ">1");

    ScrollTrigger.create({
      trigger: "#bocadillo-8",
      start: "top 80%",
      endTrigger: "#bocadillo-10",
      end: "top center",
      toggleActions: "play none none reverse",
      animation: entraTijeras,
      scrub: 0.5,
    });

    // Tijeras fade in montaje y fade out montaje

    let inOutMontajeTijeras = gsap.timeline().from("#montajeTijeras", { opacity: 0 }, ">").to("#montajeTijeras", { opacity: 0, ease: Power4.easeIn }, ">");

    ScrollTrigger.create({
      trigger: "#bocadillo-10",
      start: "top center",
      endTrigger: "#bocadillo-11",
      end: "top bottom",
      toggleActions: "play none none reverse",
      animation: inOutMontajeTijeras,
      scrub: 0.5,
    });

    // Mirador entra y blur

    let entraMirador = gsap.timeline().from("#mirador", { opacity: 0 }).from("#mirador", { blur: 70 }, ">0.8").from("#mirador", { scale: 0.9 }, "<0.1").to("#mirador", { opacity: 0 }, ">1");

    ScrollTrigger.create({
      trigger: "#bocadillo-11",
      start: "top 80%",
      endTrigger: "#bocadillo-13",
      end: "top center",
      toggleActions: "play none none reverse",
      animation: entraMirador,
      scrub: 0.5,
    });

    // Mirador fade in montaje y fade out montaje

    let inOutMontajeMirador = gsap.timeline().from("#montajeMirador", { opacity: 0 }, ">").to("#montajeMirador", { ease: Power4.easeIn }, ">");

    ScrollTrigger.create({
      trigger: "#bocadillo-13",
      start: "top center",
      endTrigger: ".conclusion",
      end: "top bottom",
      toggleActions: "play none none reverse",
      animation: inOutMontajeMirador,
      scrub: 0.5,
    });

    // transicion de color
    console.clear();

    ScrollTrigger.create({
      trigger: ".transition",
      startTrigger: "center 75%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to("body", {
          duration: 1.5,
          backgroundColor: "#22223c",
        });
        gsap.to(".closer", {
          duration: 3,
          backgroundColor: "#E8A1D4",
        });
        gsap.from(".lista-links", {
          backgroundColor: "#A1F0DE",
        });
        gsap.to(".lista-links", {
          duration: 1,
          backgroundColor: "#fff",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#fff" });
        gsap.to(".closer", {
          duration: 3,
          backgroundColor: "#fff",
        });
        gsap.to(".share", {
          duration: 1,
          backgroundColor: "#A1F0DE",
        });
      },
    });

    //RESULTADOS
    console.clear();

    var tl = gsap.timeline();

    tl.to("#original1", {
      scrollTrigger: {
        trigger: "#rs1",
        endTrigger: "#finrs1",
        start: "+100",
        pin: "#original1",
        scrub: 1,
      },
      opacity: 0,
      ease: Power2.easeOut,
    });

    tl.to("#rs2 #original2", {
      scrollTrigger: {
        trigger: "#rs2",
        endTrigger: "#finrs2",
        start: "top top",
        end: "bottom 150",
        pin: "#original2",
        scrub: 1,
      },
      opacity: 0,
      ease: Power2.easeOut,
    });

    tl.to("#rs3 #original3", {
      scrollTrigger: {
        trigger: "#rs3",
        endTrigger: "#finrs3",
        start: "top top",
        end: "bottom 150",
        pin: "#original3",
        scrub: 1,
      },
      opacity: 0,
      ease: Power2.easeOut,
    });

    tl.to("#rs4 #original4", {
      scrollTrigger: {
        trigger: "#rs4",
        endTrigger: "#finrs4",
        start: "top top",
        end: "bottom 150",
        pin: "#original4",
        scrub: 1,
      },
      opacity: 0,
      duration: 5,
      ease: Power2.easeOut,
    });

    tl.to("#rs5 #original5", {
      scrollTrigger: {
        trigger: "#rs5",
        endTrigger: "#finrs5",
        start: "top top",
        end: "bottom 150",
        pin: "#original5",
        scrub: 1,
      },
      opacity: 0,
      ease: Power2.easeOut,
    });

    tl.to("#rs6 #original6", {
      scrollTrigger: {
        trigger: "#rs6",
        endTrigger: "#finrs6",
        start: "top top",
        end: "bottom 150",
        pin: "#original6",
        scrub: 1,
      },
      opacity: 0,
      ease: Power2.easeOut,
    });

    console.log("AAAAAAA empatizando IA");
  }
});
