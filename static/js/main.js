$(document).ready(function() {

    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    $(window).on("load", function() {

        // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
        window.requestAnimationFrame(function() {

            var controller = new ScrollMagic.Controller();

            $(document).tooltip();

            if ($("html").attr("lang") === "de") {
                $("#de").css("text-decoration", "underline");
                $("#de").css("text-decoration-thickness", "1px");
            }
            if ($("html").attr("lang") === "en") {
                $("#en").css("text-decoration", "underline");
                $("#en").css("text-decoration-thickness", "1px");
            }
            if ($("html").attr("lang") === "pt") {
                $("#pt").css("text-decoration", "underline");
                $("#pt").css("text-decoration-thickness", "1px");
            }

            function countUp(element) {
                $(element).prop('Counter', 0).animate({
                    Counter: $(element).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(element).text(Math.ceil(now));
                    }
                });
            };

            $("#nav-02").hover(function() {
                $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/02_story_aline/aline_strohhalm outlines.png");
            });
            $("#nav-03").hover(function() {
                $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/04_story_cooperlinia/vitor_golf outlines.png");
            });
            $("#nav-04").hover(function() {
                $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/06_story_erica/erica_Geldbeutel outlines.png");
            });

            $("#open-menu,#nav-01").click(function() {
                $("#menu").toggle();
                if ($(window).width() >= 900) {
                    if ($("#menu").is(':visible')) {
                        $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/pfeil_x.png");
                        $(".language-picker ul li a").css("color", "rgba(0, 124, 249, 1.0)");
                    } else {
                        $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                        $(".language-picker ul li a").css("color", "#000");
                    }
                } else {
                    $(".language-picker").css("display", "none");
                    $("#open-menu-mobile").css("display", "block");
                }
                $(document).ready(function() {
                    $("body").css("background-color", "rgba(255, 220, 178, 0.4)");
                });
            });
            $("#nav-02").click(function() {

                $("#menu").toggle();
                $("body").css("background-color", "rgba(255, 220, 178, 0.4)");
                if ($(window).width() >= 900) {
                    $(".language-picker ul li a").css("color", "#000");
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/02_story_aline/aline_strohhalm outlines.png");
                } else {
                    $(".language-picker").css("display", "none");
                    $("#open-menu-mobile").css("display", "block");
                }
            });
            $("#nav-03").click(function() {

                $("#menu").toggle();
                $("body").css("background-color", "rgba(158, 175, 131, 0.4)");
                if ($(window).width() >= 900) {
                    $(".language-picker ul li a").css("color", "#000");
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/04_story_cooperlínia/vitor_golf outlines.png");
                } else {
                    $(".language-picker").css("display", "none");
                    $("#open-menu-mobile").css("display", "block");
                }
            });
            $("#nav-04").click(function() {

                $("#menu").toggle();
                $("body").css("background-color", "rgba(0, 124, 249, 0.15)");
                if ($(window).width() >= 900) {
                    $(".language-picker ul li a").css("color", "#000");
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/06_story_erica/erica_Geldbeutel outlines.png");
                } else {
                    $(".language-picker").css("display", "none");
                    $("#open-menu-mobile").css("display", "block");
                }
            });
            $("#open-menu-mobile").click(function() {
                $("#menu").toggle();
                $("body").css("background-color", "rgba(255, 220, 178, 0.4)");
                if ($("#menu").is(':visible')) {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/pfeil_x.png");
                    $(".language-picker ul li a").css("color", "rgba(0, 124, 249, 1.0)");
                    $(".language-picker").css("display", "block");
                    $("#open-menu-mobile").css("display", "none");
                }
            });

            function pathPrepare($el, color, id, cl) {
                $el.map((key, value) => {
                    var lineLength = value.getTotalLength();
                    $(value).attr("class", cl);
                    $(value).attr('id', id + key);
                    $("#" + id + key).css("stroke-dasharray", lineLength);
                    $("#" + id + key).css("stroke-dashoffset", lineLength);
                    $("#" + id + key).css("stroke", color);
                    $("#" + id + key).css("stroke-width", 3);
                });
            }

            var $coop = $(".coop-map1-contours");
            var $workday = $("#workday-graphic").find("*");

            // prepare SVG
            pathPrepare($coop, "#000", "c1-", "coop-draw");
            pathPrepare($workday, "rgb(0, 124, 248)", "w1-", "workday-draw");

            function fade(element, from, to) {
                return TweenMax.fromTo(element, 1, {
                    opacity: from
                }, {
                    opacity: to,
                    immediateRender: false,
                    overwrite: "auto"
                });
            }

            function slide(element, from, to) {
                return TweenMax.fromTo(element, 1, {
                    left: from
                }, {
                    left: to,
                    immediateRender: false,
                    overwrite: "auto"
                });
            }

            var changeBackgroundColor = (from, to) => TweenMax.fromTo("body", 1, {
                backgroundColor: from
            }, {
                backgroundColor: to,
                overwrite: "auto"
            });
            var changeColor = (from, to) => TweenMax.fromTo(".language-picker-color", 1, {
                color: from
            }, {
                color: to,
                overwrite: "auto"
            });
            var backgroundColorChangeSection1 = new ScrollMagic.Scene({
                    triggerElement: "#section1"
                })
                .on("start", function() {
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/02_story_aline/aline_strohhalm outlines.png");
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(255, 220, 178, 0.4)"))
                .addTo(controller);
            var backgroundColorChangeSection2 = new ScrollMagic.Scene({
                    triggerElement: "#section2"
                })
                .on("start", function() {
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/04_story_cooperlínia/vitor_golf outlines.png");
                })
                .setTween(changeBackgroundColor("rgba(255, 220, 178, 0.4)", "rgba(158, 175, 131, 0.4)"))
                .addTo(controller);
            var backgroundColorChangeSection3 = new ScrollMagic.Scene({
                    triggerElement: "#section3"
                })
                .on("start", function() {
                    $("#menu-cover").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/06_story_erica/erica_Geldbeutel outlines.png");
                })
                .setTween(changeBackgroundColor("rgba(158, 175, 131, 0.4)", "rgba(0, 124, 249, 0.15)"))
                .addTo(controller);
            var backgroundColorChangeSection4 = new ScrollMagic.Scene({
                    triggerElement: "#infographic1"
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(253, 164, 146, 1.0)"))
                .addTo(controller);
            var backgroundColorChangeSection5 = new ScrollMagic.Scene({
                    triggerElement: "#infographic2"
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(253, 164, 146, 1.0)"))
                .addTo(controller);
            var backgroundColorChangeSection6 = new ScrollMagic.Scene({
                    triggerElement: "#impress"
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(253, 164, 146, 1.0)"))
                .addTo(controller);
            var backgroundColorChangeSection7 = new ScrollMagic.Scene({
                    triggerElement: "#mobile-workday"
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(253, 164, 146, 1.0)"))
                .addTo(controller);
            var backgroundColorChangeSection8 = new ScrollMagic.Scene({
                    triggerElement: "#mobile-waste1"
                })
                .setTween(changeBackgroundColor("rgba(253, 164, 146, 1.0)", "rgba(253, 164, 146, 1.0)"))
                .addTo(controller);
            var colorChange1 = new ScrollMagic.Scene({
                    triggerElement: "#infographic1"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger blau.png");
                })
                .setTween(changeColor("rgba(0, 124, 249, 1.0)", "rgba(0, 124, 249, 1.0)"))
                .addTo(controller);
            var colorChange2 = new ScrollMagic.Scene({
                    triggerElement: "#infographic2"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger blau.png");
                })
                .setTween(changeColor("rgba(0, 124, 249, 1.0)", "rgba(0, 124, 249, 1.0)"))
                .addTo(controller);
            var colorChange3 = new ScrollMagic.Scene({
                    triggerElement: "#section2"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                })
                .setTween(changeColor("rgba(0, 0, 0, 1.0)", "rgba(0, 0, 0, 1.0)"))
                .addTo(controller);
            var colorChange4 = new ScrollMagic.Scene({
                    triggerElement: "#section3"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                })
                .setTween(changeColor("rgba(0, 0, 0, 1.0)", "rgba(0, 0, 0, 1.0)"))
                .addTo(controller);
            var colorChange5 = new ScrollMagic.Scene({
                    triggerElement: "#section1"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger schwarz.png");
                })
                .setTween(changeColor("rgba(0, 0, 0, 1.0)", "rgba(0, 0, 0, 1.0)"))
                .addTo(controller);
            var colorChange6 = new ScrollMagic.Scene({
                    triggerElement: "#impress"
                })
                .on("start", function() {
                    $("#open-menu").attr("src", "../static/Austausch Flo/01_grundlegendes/menue_hamburger blau.png");
                })
                .setTween(changeColor("rgba(0, 124, 249, 1.0)", "rgba(0, 124, 249, 1.0)"))
                .addTo(controller);

            /* COVER */

            var pinIntroSection = new ScrollMagic.Scene({
                    triggerElement: "#section0",
                    duration: "50%",
                    triggerHook: 0
                })
                .setPin("#section0")
                .addTo(controller);

            var fadeOutCover = fade("#cover", 1, 0);
            var slideOutCover = slide("#cover", 0, "-200%");
            var slideOutCoverImage = slide("#cover-image", 0, "-200%");
            var slideOutCoverH1 = slide("#cover-h1", 0, -1000);
            var fadeOutCoverImage = fade("#cover-image", 1, 0);
            var fadeOutCoverTimeline = new TimelineMax();
            fadeOutCoverTimeline.add(fadeOutCover, "a").add(fadeOutCoverImage, "a").add(slideOutCover, "b").add(slideOutCoverImage, "b").add(slideOutCoverH1, "b");
            var fadeOutCover = new ScrollMagic.Scene({
                    triggerElement: "#spacer-section",
                    duration: "50%",
                    triggerHook: 0,
                })
                .setTween(fadeOutCoverTimeline)
                .addTo(controller);

            var fadeInIntroText = fade("#section0-text", 0, 1);
            var fadeInIntroMenu = fade("#intro", 0, 1);
            var fadeInIntroTimeline = new TimelineMax();
            fadeInIntroTimeline.add(fadeInIntroText, "first").add(fadeInIntroMenu, "first");
            var fadeInIntroTextScene = new ScrollMagic.Scene({
                    triggerElement: "#section0",
                    duration: "20%",
                    triggerHook: 0
                })
                .setTween(fadeInIntroTimeline)
                .addTo(controller);

            var fadeOutIntroMenu = fade("#intro", 1, 0);
            var fadeInAlineText = fade("#aline-text", 0, 1);
            var fadeInAlineTextScene = new ScrollMagic.Scene({
                    triggerElement: "#section1",
                    duration: "20%",
                    triggerHook: 0
                })
                .setTween(fadeInAlineText)
                .addTo(controller);
            var fadeOutIntroMenuScene = new ScrollMagic.Scene({
                    triggerElement: "#fade-out-menu-trigger",
                    duration: "20%"
                })
                .setTween(fadeOutIntroMenu)
                .addTo(controller);

            /* COOPERLINIA */

            var fadeInSection2Text = fade("#section2-text", 0, 1);
            var fadeInSection2TextScene = new ScrollMagic.Scene({
                    triggerElement: "#section2",
                    duration: "20%",
                })
                .setTween(fadeInSection2Text)
                .addTo(controller);
            var fillCoopMap = fade("#coop-map2", 0, 1);
            var drawPath = new TimelineMax()
                .add(TweenMax.to(".coop-draw", 0.9, {
                    strokeDashoffset: 0,
                    ease: Linear.easeNone
                }));
            var setCoopPin = fade("#coop-map3", 0, 1);
            var coopTimeline = new TimelineMax();
            coopTimeline.add(drawPath).add(fillCoopMap).add(setCoopPin);
            var coopSceneIn = new ScrollMagic.Scene({
                    triggerElement: "#section2",
                    duration: "50%",
                    triggerHook: 0
                })
                .setTween(coopTimeline)
                .addTo(controller);
            var fadeCoopMap1 = fade("#coop-map1", 1, 0);
            var fadeCoopMap2 = fade("#coop-map2", 1, 0);
            var fadeCoopMap3 = fade("#coop-map3", 1, 0);
            var coopMapOutTimeline = new TimelineMax();
            coopMapOutTimeline.add(fadeCoopMap1, "a").add(fadeCoopMap2, "a").add(fadeCoopMap3, "a");
            var coopMapOutScene = new ScrollMagic.Scene({
                    triggerElement: "#coop-map-out",
                    duration: "20%",
                    triggerHook: 0
                })
                .setTween(coopMapOutTimeline)
                .addTo(controller);

            var slideInCoopCar = slide("#coop-car", -5000, 0);
            var carInTimeline = new TimelineMax();
            carInTimeline.add(slideInCoopCar);
            var coopCarScene = new ScrollMagic.Scene({
                    triggerElement: "#coop-car-trigger",
                    duration: "20%"
                })
                .setTween(carInTimeline)
                .addTo(controller);
            var slideOutCoopCar = fade("#coop-car", 1, 0);
            var carOutTimeline = new TimelineMax();
            carOutTimeline.add(slideOutCoopCar);
            var coopCarSceneOut = new ScrollMagic.Scene({
                    triggerElement: "#coop-car-trigger-out",
                    duration: "20%"
                })
                .setTween(carOutTimeline)
                .addTo(controller);
            var antonioIn = fade("#antonio", 0, 1);
            var slideInAntonio = slide("#antonio", -5000, 0)
            var antonioInTimeline = new TimelineMax();
            antonioInTimeline.add(antonioIn, "a").add(slideInAntonio, "a");
            var antonionInScene = new ScrollMagic.Scene({
                    triggerElement: "#pin-antonio",
                    duration: "10%"
                })
                .setTween(antonioInTimeline)
                .addTo(controller);
            var fadeOutAntonio = fade("#antonio", 1, 0);
            var slideOutAntonio = slide("#antonio", 0, -5000)
            var antonioOutTimeline = new TimelineMax();
            antonioOutTimeline.add(fadeOutAntonio, "a").add(slideOutAntonio, "a");
            var fadeOutAntonioScene = new ScrollMagic.Scene({
                    triggerElement: "#fade-out-antonio",
                    duration: "20%"
                })
                .setTween(antonioOutTimeline)
                .addTo(controller);
            var slideInAgent = slide("#agent", -5000, 0);
            var agentInTimeline = new TimelineMax();
            agentInTimeline.add(slideInAgent);
            var coopAgentSceneIn = new ScrollMagic.Scene({
                    triggerElement: "#agent-trigger",
                    duration: "20%"
                })
                .setTween(agentInTimeline)
                .addTo(controller);
            var fadeOutAgent = fade("#agent", 1, 0);
            var agentOutTimeline = new TimelineMax();
            agentOutTimeline.add(fadeOutAgent);
            var fadeOutAgentScene = new ScrollMagic.Scene({
                    triggerElement: "#fade-out-agent",
                    duration: "20%"
                })
                .setTween(agentOutTimeline)
                .addTo(controller);

            /* ERICA */

            var fadeInSection3Text = fade("#section3-text", 0, 1);
            var fadeInSection2TextScene = new ScrollMagic.Scene({
                    triggerElement: "#section3",
                    duration: "20%"
                })
                .setTween(fadeInSection3Text)
                .addTo(controller);


            var slideInBus = fade("#bus", 0, 1);
            var slideOutBus = fade("#bus", 1, 0);
            var busInTimeline = new TimelineMax();
            busInTimeline.add(slideInBus);
            var busOutTimeline = new TimelineMax();
            busOutTimeline.add(slideOutBus);
            var slideInBusScene = new ScrollMagic.Scene({
                    triggerElement: "#section3",
                    duration: "20%",
                    triggerHook: 0
                })
                .setTween(busInTimeline)
                .addTo(controller);

            var slideOutBusScene = new ScrollMagic.Scene({
                    triggerElement: "#bus-out",
                    duration: "20%"
                })
                .setTween(busOutTimeline)
                .addTo(controller);

            var slideInVista = slide("#vista", -5000, 0);
            var slideOutVista = slide("#vista", 0, -5000);
            var vistaInTimeline = new TimelineMax();
            vistaInTimeline.add(slideInVista);
            var slideInVistaScene = new ScrollMagic.Scene({
                    triggerElement: "#vista-in",
                    duration: "20%"
                })
                .setTween(vistaInTimeline)
                .addTo(controller);
            var vistaOutTimeline = new TimelineMax();
            vistaOutTimeline.add(slideOutVista);
            var slideOutVistaScene = new ScrollMagic.Scene({
                    triggerElement: "#vista-out",
                    duration: "20%"
                })
                .setTween(vistaOutTimeline)
                .addTo(controller);

            var slideInPurse = slide("#purse", -5000, 0);
            var slideOutPurse = slide("#purse", 0, -5000);
            var purseInTimeline = new TimelineMax();
            purseInTimeline.add(slideInPurse);
            var purseOutTimeline = new TimelineMax();
            purseOutTimeline.add(slideOutPurse);
            var slideInPurseScene = new ScrollMagic.Scene({
                    triggerElement: "#purse-in",
                    duration: "20%"
                })
                .setTween(purseInTimeline)
                .addTo(controller);
            var slideOutPurseScene = new ScrollMagic.Scene({
                    triggerElement: "#purse-out",
                    duration: "20%"
                })
                .setTween(purseOutTimeline)
                .addTo(controller);


            /* ALINE */

            var slideInAlineContour = fade("#aline-contour", 0, 1);
            var fadeInAlineFill = fade("#aline-fill", 0, 1);
            var alineTimelineIn = new TimelineMax();
            alineTimelineIn.add(slideInAlineContour).add(fadeInAlineFill);
            var alineSceneIn = new ScrollMagic.Scene({
                    triggerElement: "#section1",
                    duration: "20%",
                    triggerHook: 0
                })
                .setTween(alineTimelineIn)
                .addTo(controller);
            var fadeAlineContourOut = fade("#aline-contour", 1, 0);
            var fadeAlineFillOut = fade("#aline-fill", 1, 0);
            var alineOutTimeline = new TimelineMax();
            alineOutTimeline.add(fadeAlineContourOut, "a").add(fadeAlineFillOut, "a");
            var alineOutScene = new ScrollMagic.Scene({
                    triggerElement: "#aline-out",
                    duration: "20%",
                })
                .setTween(alineOutTimeline)
                .addTo(controller);

            var slideInCataki = fade("#cataki", 0, 1);
            var catakiSceneIn = new ScrollMagic.Scene({
                    triggerElement: "#cataki-in",
                    duration: "20%"
                })
                .on("start", function() {
                    $("#flood3").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/02_story_aline/02_cataki app FINAL/cataki.gif");
                })
                .setTween(slideInCataki)
                .addTo(controller);
            var fadeOutCataki = fade("#cataki", 1, 0);
            var catakiSceneOut = new ScrollMagic.Scene({
                    triggerElement: "#cataki-out",
                    duration: "20%"
                })
                .setTween(fadeOutCataki)
                .addTo(controller);

            var fadeInFlood3 = fade("#flood3", 0, 1);
            var fadeOutFlood3 = fade("#flood3", 1, 0);
            var slideOutFlood3 = slide("#flood3", 0, -5000);
            var floodInTimeline = new TimelineMax();
            floodInTimeline.add(fadeInFlood3);
            var fadeInFlood3Scene = new ScrollMagic.Scene({
                    triggerElement: "#flood-in",
                    duration: "20%"
                })
                .on("start", function() {
                    $("#flood3").attr("src", "../static/Austausch Flo/02_inhalt illustrationen/02_story_aline/03_ueberschwemmung FINAL/Wasser animation final.gif");
                })
                .setTween(floodInTimeline)
                .addTo(controller);
            var floodOutTimeline = new TimelineMax();
            floodOutTimeline.add(slideOutFlood3).add(fadeOutFlood3);
            var fadeOutFlood3Scene = new ScrollMagic.Scene({
                    triggerElement: "#flood-out",
                    duration: "20%"
                })
                .setTween(floodOutTimeline)
                .addTo(controller);


            var slideInTurtle = slide("#turtle", -5000, 0);
            var slideOutTurtle = fade("#turtle", 1, 0);
            var slideInTurtleScene = new ScrollMagic.Scene({
                    triggerElement: "#turtle-in",
                    duration: "20%"
                })
                .setTween(slideInTurtle)
                .addTo(controller);
            var slideOutTurtleScene = new ScrollMagic.Scene({
                    triggerElement: "#turtle-out",
                    duration: "20%"
                })
                .setTween(slideOutTurtle)
                .addTo(controller);


            var pinAlineSection = new ScrollMagic.Scene({
                    triggerElement: "#section1",
                    duration: 300,
                    triggerHook: 0
                })
                .setPin("#section1")
                .addTo(controller);

            var pinFlood = new ScrollMagic.Scene({
                    triggerElement: "#flood-in",
                    duration: 300,
                    triggerHook: 0
                })
                .setPin("#flood-in")
                .addTo(controller);
            var pinCoopSection = new ScrollMagic.Scene({
                    triggerElement: "#section2",
                    duration: "100%",
                    triggerHook: 0
                })
                .setPin("#section2")
                .addTo(controller);
            var pinEricaSection = new ScrollMagic.Scene({
                    triggerElement: "#section3",
                    duration: 300,
                    triggerHook: 0
                })
                .setPin("#section3")
                .addTo(controller);
            if ($(window).width() >= 900) {
                var drawWorkday = new TimelineMax()
                    .add(TweenMax.to(".workday-draw", 0.9, {
                        strokeDashoffset: 0,
                        ease: Linear.easeNone
                    }));
                var workdayTimeline = new TimelineMax();
                workdayTimeline.add(drawWorkday);
                var workdaySceneIn = new ScrollMagic.Scene({
                        triggerElement: "#infographic2",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setTween(workdayTimeline)
                    .addTo(controller);

                var workdayCountIn = fade("#workday-count1", 0, 1);
                var workdayCountInScene = new ScrollMagic.Scene({
                        triggerElement: "#infographic2",
                        duration: "10%",
                        triggerHook: 0
                    })
                    .on("start", function() {
                        $("#workday-count1").css("display", "block");
                        countUp($("#workday-count1-number"));
                    })
                    .setTween(workdayCountIn)
                    .addTo(controller);

                var fadeInWorkplace1 = fade("#workday1", 0, 1);
                var fadeInWorkplace2 = fade("#workday2", 0, 1);
                var fadeInWorkplace3 = fade("#workday3", 0, 1);
                var fadeInWorkplace4 = fade("#workday4", 0, 1);
                var fadeInWorkplace5 = fade("#workday5", 0, 1);
                var fadeInWorkplace6 = fade("#workday6", 0, 1);
                var fadeInWorkdayCount1 = fade("#workday-count1", 0, 1);
                var fadeInWorkdayCount2 = fade("#workday-count2", 0, 1);
                var fadeOutWorkplace1 = fade("#workday1", 1, 0);
                var fadeOutWorkplace2 = fade("#workday2", 1, 0);
                var fadeOutWorkplace3 = fade("#workday3", 1, 0);
                var fadeOutWorkplace4 = fade("#workday4", 1, 0);
                var fadeOutWorkplace5 = fade("#workday5", 1, 0);
                var fadeOutWorkplace6 = fade("#workday6", 1, 0);
                var fadeOutWorkdayCount1 = fade("#workday-count1", 1, 0);
                var fadeOutWorkdayCount2 = fade("#workday-count2", 1, 0);
                var fadeOutWorkdayGraphic = fade("#workday-graphic", 1, 0);
                var workdayPlacesTimeline = new TimelineMax();
                workdayPlacesTimeline
                    .add(fadeInWorkplace1, "a")
                    .add(fadeInWorkdayCount1, "a")
                    .add(fadeInWorkplace2, "b")
                    .add(fadeInWorkplace3, "c")
                    .add(fadeInWorkplace4, "d")
                    .add(fadeInWorkplace5, "e")
                    .add(fadeInWorkplace6, "f")
                    .add(fadeOutWorkdayCount1, "g")
                    .add(fadeInWorkdayCount2, "h")
                    .add(fadeOutWorkplace1, "i")
                    .add(fadeOutWorkplace2, "i")
                    .add(fadeOutWorkplace3, "i")
                    .add(fadeOutWorkplace4, "i")
                    .add(fadeOutWorkplace5, "i")
                    .add(fadeOutWorkplace6, "i")
                    .add(fadeOutWorkdayGraphic, "i")
                    .add(fadeOutWorkdayCount2, "i");
                var workdayPlacesSceneIn = new ScrollMagic.Scene({
                        triggerElement: "#infographic2",
                        duration: "500%",
                        triggerHook: 0
                    })
                    .setTween(workdayPlacesTimeline)
                    .addTo(controller);

                /* WASTE INFOGRAPHIC */



                var wasteCountIn = fade("#waste-count1", 0, 1);
                var wasteCountInScene = new ScrollMagic.Scene({
                        triggerElement: "#infographic1",
                        duration: "10%",
                        triggerHook: 0
                    })
                    .on("start", function() {
                        $("#waste-count1").css("display", "block");
                        countUp($("#waste-count1-number"));
                    })
                    .setTween(wasteCountIn)
                    .addTo(controller);

                var fadeInWaste1 = fade("#waste1", 0, 1);
                var fadeInWaste2 = fade("#waste2", 0, 1);
                var fadeInWaste3 = fade("#waste3", 0, 1);
                var fadeInWaste4 = fade("#waste4", 0, 1);
                var fadeInWaste5 = fade("#waste5", 0, 1);
                var fadeInWaste6 = fade("#waste6", 0, 1);
                var fadeInWaste7 = fade("#waste7", 0, 1);
                var fadeOutWaste1 = fade("#waste1", 1, 0);
                var fadeOutWaste2 = fade("#waste2", 1, 0);
                var fadeOutWaste3 = fade("#waste3", 1, 0);
                var fadeOutWaste4 = fade("#waste4", 1, 0);
                var fadeOutWaste5 = fade("#waste5", 1, 0);
                var fadeOutWaste6 = fade("#waste6", 1, 0);
                var fadeOutWaste7 = fade("#waste7", 1, 0);
                var fadeInWasteCounter2 = fade("#waste-count2", 0, 1);
                var fadeOutWasteCounter1 = fade("#waste-count1", 1, 0);
                var fadeInWasteCounter3 = fade("#waste-count3", 0, 1);
                var fadeOutWasteCounter2 = fade("#waste-count2", 1, 0);
                var fadeOutWasteCounter3 = fade("#waste-count3", 1, 0);
                var wasteTimeline = new TimelineMax();
                wasteTimeline
                    .add(fadeInWaste1, "a")
                    .add(fadeInWaste2, "b")
                    .add(fadeInWaste3, "c")
                    .add(fadeInWaste4, "d")
                    .add(fadeOutWaste1, "e")
                    .add(fadeOutWaste2, "e")
                    .add(fadeOutWaste3, "e")
                    .add(fadeInWaste5, "f")
                    .add(fadeInWaste6, "f")
                    .add(fadeOutWaste4, "g")
                    .add(fadeOutWaste5, "g")
                    .add(fadeOutWaste6, "g")
                    .add(fadeOutWasteCounter1, "g")
                    .add(fadeInWaste3, "h")
                    .add(fadeInWasteCounter3, "h")
                    .add(fadeInWaste7, "i")
                    .add(fadeInWasteCounter2, "i")
                    .add(fadeOutWasteCounter2, "j")
                    .add(fadeOutWasteCounter3, "j")
                    .add(fadeOutWaste3, "j")
                    .add(fadeOutWaste7, "j")
                var wasteSceneIn = new ScrollMagic.Scene({
                        triggerElement: "#infographic1",
                        duration: "500%",
                        triggerHook: 0
                    })
                    .setTween(wasteTimeline)
                    .addTo(controller);
                var pinWorkdaySection = new ScrollMagic.Scene({
                        triggerElement: "#infographic2",
                        duration: "450%",
                        triggerHook: 0
                    })
                    .setPin("#infographic2")
                    .addTo(controller);
                var pinCataki = new ScrollMagic.Scene({
                        triggerElement: "#cataki-in",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#cataki-in")
                    .addTo(controller);
                var pinWasteSection = new ScrollMagic.Scene({
                        triggerElement: "#infographic1",
                        duration: "450%",
                        triggerHook: 0
                    })
                    .setPin("#infographic1")
                    .addTo(controller);
                var pinVista = new ScrollMagic.Scene({
                        triggerElement: "#vista-in",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#vista-in")
                    .addTo(controller);
                var pinAgent = new ScrollMagic.Scene({
                        triggerElement: "#agent-pin",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#agent-pin")
                    .addTo(controller);
                var pinAntonio = new ScrollMagic.Scene({
                        triggerElement: "#pin-antonio",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#pin-antonio")
                    .addTo(controller);
                var pinCar = new ScrollMagic.Scene({
                        triggerElement: "#pin-car",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#pin-car")
                    .addTo(controller);
                var pinTurtle = new ScrollMagic.Scene({
                        triggerElement: "#turtle-pin",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#turtle-pin")
                    .addTo(controller);
                var pinFlood = new ScrollMagic.Scene({
                        triggerElement: "#flood-pin",
                        duration: "50%",
                        triggerHook: 0
                    })
                    .setPin("#flood-pin")
                    .addTo(controller);
            }
            if ($(window).width() < 900) {
                var pinMobileWaste1 = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste1",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setPin("#mobile-waste1")
                    .addTo(controller);
                var fadeInMobileWaste1 = fade("#mobile-waste1", 0, 1);
                var fadeOutMobileWaste1 = fade("#mobile-waste1", 1, 0);
                var mobileWaste1Timeline = new TimelineMax();
                mobileWaste1Timeline.add(fadeInMobileWaste1).add(fadeOutMobileWaste1);
                var mobileWaste1Scene = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste1",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setTween(mobileWaste1Timeline)
                    .addTo(controller);
                var mobilePinWaste2 = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste2",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setPin("#mobile-waste2")
                    .addTo(controller);
                var fadeInMobileWaste2 = fade("#mobile-waste2", 0, 1);
                var fadeOutMobileWaste2 = fade("#mobile-waste2", 1, 0);
                var mobileWaste2Timeline = new TimelineMax();
                mobileWaste2Timeline.add(fadeInMobileWaste2).add(fadeOutMobileWaste2);
                var mobileWaste2Scene = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste2",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setTween(mobileWaste2Timeline)
                    .addTo(controller);
                var mobilePinWaste3 = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste3",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setPin("#mobile-waste3")
                    .addTo(controller);
                var fadeInMobileWaste3 = fade("#mobile-waste3", 0, 1);
                var fadeOutMobileWaste3 = fade("#mobile-waste3", 1, 0);
                var mobileWaste3Timeline = new TimelineMax();
                mobileWaste3Timeline.add(fadeInMobileWaste3).add(fadeOutMobileWaste3);
                var mobileWaste3Scene = new ScrollMagic.Scene({
                        triggerElement: "#mobile-waste3",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setTween(mobileWaste3Timeline)
                    .addTo(controller);

                var mobileWorkdayPin = new ScrollMagic.Scene({
                        triggerElement: "#mobile-workday",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setPin("#mobile-workday")
                    .addTo(controller);

                var fadeInMobileWorkday = fade("#mobile-workday", 0, 1);
                var fadeOutMobileWorkday = fade("#mobile-workday", 1, 0);
                var fadeOutMobileWorkdayCount1 = fade("#mobile-workday-count1", 1, 0);
                var fadeInMobileWorkdayCount2 = fade("#mobile-workday-count2", 0, 1);
                var fadeOutMobileWorkdayCount2 = fade("#mobile-workday-count2", 1, 0);
                var mobileWorkdayTimeline = new TimelineMax();
                mobileWorkdayTimeline.add(fadeInMobileWorkday, "a").add(fadeOutMobileWorkdayCount1, "b").add(fadeOutMobileWorkday, "b");
                var mobileWorkdayScene = new ScrollMagic.Scene({
                        triggerElement: "#mobile-workday",
                        duration: "200%",
                        triggerHook: 0
                    })
                    .setTween(mobileWorkdayTimeline)
                    .addTo(controller);
            }

        });

    });

});