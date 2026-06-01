! function(t) {
    "use strict";

    function e(e) {
        t(e).length > 0 && t(e).each((function() {
            var e = t(this).find("a");
            t(this).find(e).each((function() {
                t(this).on("click", (function() {
                    var e = t(this.getAttribute("href"));
                    e.length && (event.preventDefault(), t("html, body").stop().animate({
                        scrollTop: e.offset().top - 10
                    }, 1e3))
                }))
            }))
        }))
    }
    if (window.addEventListener("load", (function() {
            t(".preloader").fadeOut(), new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !1,
                live: !0
            }).init()
        })), t(document).on("click", ".preloaderCls", (function(e) {
            e.preventDefault(), t(".preloader").hide()
        })), t.fn.thmobilemenu = function(e) {
            var a = t.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, e);
            return this.each((function() {
                var e = t(this);

                function n() {
                    e.toggleClass(a.bodyToggleClass);
                    var n = "." + a.subMenuClass;
                    t(n).each((function() {
                        t(this).hasClass(a.subMenuToggleClass) && (t(this).removeClass(a.subMenuToggleClass), t(this).css("display", "none"), t(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                e.find("." + a.subMenuParent).each((function() {
                    var e = t(this).find("ul");
                    e.addClass(a.subMenuClass), e.css("display", "none"), t(this).addClass(a.subMenuParent), t(this).addClass(a.thSubMenuParent), t(this).children("a").append(a.appendElement)
                }));
                var o = "." + a.thSubMenuParent + " > a";
                t(o).each((function() {
                    t(this).on("click", (function(e) {
                        var n, o;
                        e.preventDefault(), n = t(this).parent(), (o = n.children("ul")).length > 0 && (n.toggleClass(a.subMenuParentToggle), o.slideToggle(a.toggleSpeed), o.toggleClass(a.subMenuToggleClass))
                    }))
                })), t(a.menuToggleBtn).each((function() {
                    t(this).on("click", (function() {
                        n()
                    }))
                })), e.on("click", (function(t) {
                    t.stopPropagation(), n()
                })), e.find("div").on("click", (function(t) {
                    t.stopPropagation()
                }))
            }))
        }, t(".th-menu-wrapper").thmobilemenu(), t(window).scroll((function() {
            t(this).scrollTop() > 100 ? (t(".sticky-wrapper").addClass("sticky"), t(".category-menu").addClass("close-category")) : (t(".sticky-wrapper").removeClass("sticky"), t(".category-menu").removeClass("close-category"))
        })), t(".menu-expand").each((function() {
            t(this).on("click", (function(e) {
                e.preventDefault(), t(".category-menu").toggleClass("open-category")
            }))
        })), e(".onepage-nav"), e(".scroll-down"), t(".scroll-top").length > 0) {
        var a = document.querySelector(".scroll-top"),
            n = document.querySelector(".scroll-top path"),
            o = n.getTotalLength();
        n.style.transition = n.style.WebkitTransition = "none", n.style.strokeDasharray = o + " " + o, n.style.strokeDashoffset = o, n.getBoundingClientRect(), n.style.transition = n.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var s = function() {
            var e = t(window).scrollTop(),
                a = t(document).height() - t(window).height(),
                s = o - e * o / a;
            n.style.strokeDashoffset = s
        };
        s(), t(window).scroll(s);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show")
        })), jQuery(a).on("click", (function(t) {
            return t.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    t("[data-bg-src]").length > 0 && t("[data-bg-src]").each((function() {
        var e = t(this).attr("data-bg-src");
        t(this).css("background-image", "url(" + e + ")"), t(this).removeAttr("data-bg-src").addClass("background-image")
    })), t("[data-bg-color]").length > 0 && t("[data-bg-color]").each((function() {
        var e = t(this).attr("data-bg-color");
        t(this).css("background-color", e), t(this).removeAttr("data-bg-color")
    })), t("[data-theme-color]").length > 0 && t("[data-theme-color]").each((function() {
        var e = t(this).attr("data-theme-color");
        t(this).get(0).style.setProperty("--theme-color", e), t(this).removeAttr("data-theme-color")
    })), t("[data-border]").each((function() {
        var e = t(this).data("border");
        t(this).css("--th-border-color", e)
    })), t("[data-mask-src]").length > 0 && t("[data-mask-src]").each((function() {
        var e = t(this).attr("data-mask-src");
        t(this).css({
            "mask-image": "url(" + e + ")",
            "-webkit-mask-image": "url(" + e + ")"
        }), t(this).addClass("bg-mask"), t(this).removeAttr("data-mask-src")
    })), t(".th-slider").each((function() {
        var e = t(this),
            a = t(this).data("slider-options") || {},
            n = e.find(".slider-prev"),
            o = e.find(".slider-next"),
            s = e.find(".slider-pagination").get(0),
            i = e.find(".slider-pagination2"),
            r = e.find(".slider-pagination-progressbar2 .slider-progressbar-fill"),
            c = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween || 24,
                loop: !1 !== a.loop,
                speed: a.speed || 1e3,
                autoplay: a.autoplay || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    prevEl: n.get(0),
                    nextEl: o.get(0)
                },
                pagination: {
                    el: s,
                    type: a.paginationType || "bullets",
                    clickable: !0,
                    renderBullet: function(t, e) {
                        var a = t + 1;
                        return '<span class="' + e + '" aria-label="Go to Slide ' + (a < 10 ? "0" + a : a) + '"></span>'
                    }
                },
                on: {
                    init: function() {
                        d(this), u(this)
                    },
                    slideChange: function() {
                        d(this), u(this)
                    }
                }
            },
            l = t.extend({}, c, a);
        new Swiper(e.get(0), l);

        function d(t) {
            var e = t.realIndex + 1,
                a = t.slides.length;
            i.html('<span class="current-slide">' + (e < 10 ? "0" + e : e) + '</span> <span class="divider"></span> <span class="total-slides">' + (a < 10 ? "0" + a : a) + "</span>")
        }

        function u(t) {
            var e = (t.realIndex + 1) / t.slides.length * 100;
            r.css("height", e + "%")
        }
        t(".slider-area").length > 0 && t(".slider-area").closest(".container").parent().addClass("arrow-wrap")
    })), t("[data-ani]").each((function() {
        var e = t(this).data("ani");
        t(this).addClass(e)
    })), t("[data-ani-delay]").each((function() {
        var e = t(this).data("ani-delay");
        t(this).css("animation-delay", e)
    })), t("[data-slider-prev], [data-slider-next]").on("click", (function() {
        var e = t(this).data("slider-prev") || t(this).data("slider-next"),
            a = t(e);
        if (a.length) {
            var n = a[0].swiper;
            n && (t(this).data("slider-prev") ? n.slidePrev() : (navigator, n.slideNext()))
        }
    })), t(window).on("load", (function() {
        t(".hero-thumb-tab").length && t(".hero-slider4").length && function(e, a) {
            var n = t(e).find(".tab-btn"),
                o = t('<span class="indicator"></span>').appendTo(e),
                s = t(a).map((function() {
                    return this.swiper
                })).get();
            n.on("click", (function(a) {
                a.preventDefault();
                var n = t(this),
                    o = n.index();
                n.addClass("active").siblings().removeClass("active"), c(n, t(e)), s.forEach((function(t) {
                    t && t.slideToLoop(o)
                }))
            })), s.forEach((function(a) {
                a && a.on("slideChange", (function() {
                    var o = a.realIndex,
                        s = n.eq(o);
                    s.addClass("active").siblings().removeClass("active"), c(s, t(e))
                }))
            }));
            var i = s[0]?.realIndex || 0,
                r = n.eq(i);

            function c(t, e) {
                var a = t.position(),
                    n = parseInt(t.css("margin-top"), 10) || 0,
                    s = parseInt(t.css("margin-left"), 10) || 0;
                o.css("--height-set", t.outerHeight() + "px"), o.css("--width-set", t.outerWidth() + "px"), o.css("--pos-y", a.top + n + "px"), o.css("--pos-x", a.left + s + "px")
            }
            r.addClass("active").siblings().removeClass("active"), c(r, t(e))
        }(".hero-thumb-tab", ".hero-slider4")
    }));
    var i, r, c, l = ".ajax-contact",
        d = "is-invalid",
        u = '[name="email"]',
        h = '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]',
        p = t(".form-messages");

    function g() {
        var e, a = t(l).serialize();
        e = function() {
            var e, a = !0;

            function n(n) {
                n = n.split(",");
                for (var o = 0; o < n.length; o++) e = l + " " + n[o], t(e).val() ? (t(e).removeClass(d), a = !0) : (t(e).addClass(d), a = !1)
            }
            n(h), t(u).val() && t(u).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (t(u).removeClass(d), a = !0) : (t(u).addClass(d), a = !1);
            return a
        }(), e && jQuery.ajax({
            url: t(l).attr("action"),
            data: a,
            type: "POST"
        }).done((function(e) {
            p.removeClass("error"), p.addClass("success"), p.text(e), t(l + ' input:not([type="submit"]),' + l + " textarea").val("")
        })).fail((function(t) {
            p.removeClass("success"), p.addClass("error"), "" !== t.responseText ? p.html(t.responseText) : p.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function f(e, a, n, o) {
        t(a).on("click", (function(a) {
            a.preventDefault(), t(e).addClass(o)
        })), t(e).on("click", (function(a) {
            a.stopPropagation(), t(e).removeClass(o)
        })), t(e + " > div").on("click", (function(a) {
            a.stopPropagation(), t(e).addClass(o)
        })), t(n).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), t(e).removeClass(o)
        }))
    }

    function m(t) {
        return parseInt(t, 10)
    }
    t(l).on("submit", (function(t) {
        t.preventDefault(), g()
    })), i = ".popup-search-box", r = ".searchClose", c = "show", t(".searchBoxToggler").on("click", (function(e) {
        e.preventDefault(), t(i).addClass(c)
    })), t(i).on("click", (function(e) {
        e.stopPropagation(), t(i).removeClass(c)
    })), t(i).find("form").on("click", (function(e) {
        e.stopPropagation(), t(i).addClass(c)
    })), t(r).on("click", (function(e) {
        e.preventDefault(), e.stopPropagation(), t(i).removeClass(c)
    })), f(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"), f(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"), t(".popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: {
            enabled: !0
        }
    }), t(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-zoom-in"
    }), t(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0
    }), t.fn.sectionPosition = function(e, a) {
        t(this).each((function() {
            var n, o, s, i, r, c = t(this);
            n = Math.floor(c.height() / 2), o = c.attr(e), s = c.attr(a), i = m(t(s).css("padding-top")), r = m(t(s).css("padding-bottom")), "top-half" === o ? (t(s).css("padding-bottom", r + n + "px"), c.css("margin-top", "-" + n + "px")) : "bottom-half" === o && (t(s).css("padding-top", i + n + "px"), c.css("margin-bottom", "-" + n + "px"))
        }))
    };
    var v = "[data-sec-pos]";
    t(v).length && t(v).imagesLoaded((function() {
        t(v).sectionPosition("data-sec-pos", "data-pos-for")
    })), t(".filter-active").imagesLoaded((function() {
        var e = ".filter-active",
            a = ".filter-menu-active";
        if (t(e).length > 0) {
            var n = t(e).isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            t(a).on("click", "button", (function() {
                var e = t(this).attr("data-filter");
                n.isotope({
                    filter: e
                })
            })), t(a).on("click", "button", (function(e) {
                e.preventDefault(), t(this).addClass("active"), t(this).siblings(".active").removeClass("active")
            }))
        }
    })), t(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
        var e = ".masonary-active, .woocommerce-Reviews .comment-list";
        t(e).length > 0 && t(e).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        }), t('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
            t(e).isotope({
                filter: "*"
            })
        }))
    })), t(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), t.fn.shapeMockup = function() {
        t(this).each((function() {
            var e = t(this),
                a = e.data("top"),
                n = e.data("right"),
                o = e.data("bottom"),
                s = e.data("left");
            e.css({
                top: a,
                right: n,
                bottom: o,
                left: s
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, t(".shape-mockup") && t(".shape-mockup").shapeMockup(), t(".progress-bar").waypoint((function() {
        t(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "100%"
    }), t.fn.countdown = function() {
        t(this).each((function() {
            var e = t(this),
                a = new Date(e.data("offer-date")).getTime();

            function n(t) {
                return e.find(t)
            }
            var o = setInterval((function() {
                var t = (new Date).getTime(),
                    s = a - t,
                    i = Math.floor(s / 864e5),
                    r = Math.floor(s % 864e5 / 36e5),
                    c = Math.floor(s % 36e5 / 6e4),
                    l = Math.floor(s % 6e4 / 1e3);
                i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), l < 10 && (l = "0" + l), s < 0 ? (clearInterval(o), e.addClass("expired"), e.find(".message").css("display", "block")) : (n(".day").html(i), n(".hour").html(r), n(".minute").html(c), n(".seconds").html(l))
            }), 1e3)
        }))
    }, t(".counter-list").length && t(".counter-list").countdown();
    const y = {};

    function b() {
        const e = t(this),
            a = e.attr("src");
        if (!y[a]) {
            const e = t.Deferred();
            t.get(a, (a => {
                e.resolve(t(a).find("svg"))
            })), y[a] = e.promise()
        }
        y[a].then((a => {
            const n = t(a).clone();
            e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), e.attr("width") || n.removeAttr("width")), n.insertAfter(e), e.trigger("svgInlined", n[0]), e.remove()
        }))
    }

    function C(e, a, n, o) {
        var s = e.text().split(a),
            i = "";
        s.length && (t(s).each((function(t, e) {
            i += '<span class="' + n + (t + 1) + '">' + e + "</span>" + o
        })), e.empty().append(i))
    }
    t.fn.inlineSvg = function() {
        return this.each(b), this
    }, t(".svg-img").inlineSvg(), document.addEventListener("DOMContentLoaded", (function() {
        document.querySelectorAll(".circular-progress").forEach((t => {
            const e = t.querySelector(".circle"),
                a = t.querySelector(".percentage"),
                n = parseInt(t.getAttribute("data-target"), 10) || 0;
            let o = 0;
            const s = () => {
                if (o <= n) {
                    const t = 100 - o / 100 * 100;
                    e.style.strokeDashoffset = t, a.textContent = o + "%", o++, requestAnimationFrame(s)
                }
            };
            s()
        }))
    })), t("#ship-to-different-address-checkbox").on("change", (function() {
        t(this).is(":checked") ? t("#ship-to-different-address").next(".shipping_address").slideDown() : t("#ship-to-different-address").next(".shipping_address").slideUp()
    })), t(".woocommerce-form-login-toggle a").on("click", (function(e) {
        e.preventDefault(), t(".woocommerce-form-login").slideToggle()
    })), t(".woocommerce-form-coupon-toggle a").on("click", (function(e) {
        e.preventDefault(), t(".woocommerce-form-coupon").slideToggle()
    })), t(".shipping-calculator-button").on("click", (function(e) {
        e.preventDefault(), t(this).next(".shipping-calculator-form").slideToggle()
    })), t('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), t('.wc_payment_methods input[type="radio"]').each((function() {
        t(this).on("change", (function() {
            t(".payment_box").slideUp(), t(this).siblings(".payment_box").slideDown()
        }))
    })), t(".rating-select .stars a").each((function() {
        t(this).on("click", (function(e) {
            e.preventDefault(), t(this).siblings().removeClass("active"), t(this).parent().parent().addClass("selected"), t(this).addClass("active")
        }))
    })), t(".quantity-plus").each((function() {
        t(this).on("click", (function(e) {
            e.preventDefault();
            var a = t(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            isNaN(n) || a.val(n + 1)
        }))
    })), t(".quantity-minus").each((function() {
        t(this).on("click", (function(e) {
            e.preventDefault();
            var a = t(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            !isNaN(n) && n > 1 && a.val(n - 1)
        }))
    })), t(".color-switch-btns button").each((function() {
        const e = t(this),
            a = e.data("color");
        e.css("--theme-color", a), e.on("click", (function() {
            const e = t(this).data("color");
            t("body").css("--theme-color", e)
        }))
    })), t(document).on("click", ".switchIcon", (function() {
        t(".color-scheme-wrap").toggleClass("active")
    })), t(".secondary-color-switch-btns button").each((function() {
        const e = t(this),
            a = e.data("secondary-color");
        e.css("--theme-color2", a), e.on("click", (function() {
            const e = t(this).data("secondary-color");
            t(":root").css("--theme-color2", e)
        }))
    }));
    var w = {
        init: function() {
            return this.each((function() {
                C(t(this), "", "char", "")
            }))
        },
        words: function() {
            return this.each((function() {
                C(t(this), " ", "word", " ")
            }))
        },
        lines: function() {
            return this.each((function() {
                var e = "eefec303079ad17405c889e092e105b0";
                C(t(this).children("br").replaceWith(e).end(), e, "line", "")
            }))
        }
    };
    if (t.fn.lettering = function(e) {
            return e && w[e] ? w[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : w.init.apply(this, [].slice.call(arguments, 0))
        }, t(".circle-title-anime").lettering(), t(document).on("mouseover", ".hover-item", (function() {
            t(this).addClass("item-active").siblings(".hover-item").removeClass("item-active")
        })), gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin), t("#smooth-wrapper").length && t("#smooth-content").length && ScrollSmoother.create({
            smooth: .9,
            effects: !0,
            smoothTouch: .1,
            ignoreMobileResize: !1
        }), t(".th_fade_anim").length > 0 && gsap.utils.toArray(".th_fade_anim").forEach((t => {
            let e = t.getAttribute("data-fade-offset") || 40,
                a = t.getAttribute("data-duration") || .75,
                n = t.getAttribute("data-fade-from") || "bottom",
                o = t.getAttribute("data-on-scroll") || 1,
                s = t.getAttribute("data-delay") || .15,
                i = {
                    opacity: 0,
                    ease: t.getAttribute("data-ease") || "power2.out",
                    duration: a,
                    delay: s,
                    x: "left" == n ? -e : "right" == n ? e : 0,
                    y: "top" == n ? -e : "bottom" == n ? e : 0
                };
            1 == o && (i.scrollTrigger = {
                trigger: t,
                start: "top 85%"
            }), gsap.from(t, i)
        })), t(".th--hover-item").length) {
        let e = function(t, e) {
            let a = new hoverEffect({
                parent: t.get(0),
                intensity: t.data("intensity") || void 0,
                speedIn: t.data("speedin") || void 0,
                speedOut: t.data("speedout") || void 0,
                easing: t.data("easing") || void 0,
                hover: t.data("hover") || void 0,
                image1: e.eq(0).attr("src"),
                image2: e.eq(0).attr("src"),
                displacementImage: t.data("displacement"),
                imagesRatio: e[0].height / e[0].width,
                hover: !1
            });
            t.closest(".th--hover-item").on("mouseenter", (function() {
                a.next()
            })).on("mouseleave", (function() {
                a.previous()
            }))
        };
        (function() {
            t(".th--hover-img").each((function() {
                let a = t(this),
                    n = a.find("img"),
                    o = n.eq(0);
                o[0].complete ? e(a, n) : o.on("load", (function() {
                    e(a, n)
                }))
            }))
        })()
    }
    gsap.utils.toArray(".th-text-perspective").forEach((t => {
        const e = parseFloat(t.getAttribute("data-delay") || .5),
            a = gsap.timeline({
                scrollTrigger: {
                    trigger: t,
                    start: "top 85%",
                    duration: 1.5,
                    scrub: !1,
                    markers: !1,
                    toggleActions: "play none none none"
                }
            }),
            n = new SplitText(t, {
                type: "lines"
            });
        gsap.set(t, {
            perspective: 400
        }), n.split({
            type: "lines"
        }), a.from(n.lines, {
            duration: 1,
            delay: e,
            opacity: 0,
            rotationX: -80,
            force3D: !0,
            transformOrigin: "top center -50",
            stagger: .1
        })
    })), gsap.utils.toArray(".th-anim-trigger").forEach((t => {
        let e = t.querySelector(".th-anim-lr");
        e && gsap.to(e, {
            x: 300,
            scrollTrigger: {
                trigger: t,
                start: "top center",
                end: "+=2500",
                scrub: !0
            }
        })
    })), gsap.utils.toArray(".th-anim-trigger").forEach((t => {
        let e = t.querySelector(".th-anim-spin");
        e && gsap.to(e, {
            rotate: 360,
            ease: "none",
            scrollTrigger: {
                trigger: t,
                start: "top center",
                end: "+=2000",
                scrub: !0
            }
        })
    })), gsap.utils.toArray(".scroll-to-zoom").forEach((t => {
        gsap.to(t, {
            duration: 2,
            scale: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: t,
                markers: !1,
                start: "top bottom",
                end: "top",
                scrub: 1
            }
        })
    })), t(document).ready((function() {
        t(".work-process-list li").on("mouseenter", (function() {
            var e = t(this).index();
            t(".work-process-list li").each((function(a) {
                a <= e && t(this).addClass("dot-active")
            }))
        })), t(".work-process-list li").on("mouseleave", (function() {
            t(".work-process-list li").removeClass("dot-active")
        }))
    }))
}(jQuery);