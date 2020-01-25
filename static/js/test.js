$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var pinAline = new ScrollMagic.Scene({
            triggerElement: "#aline",
            duration: "100%",
            triggerHook: 0
        })
        .setPin("#aline")
        .addTo(controller);

    var pinFlood = new ScrollMagic.Scene({
            triggerElement: "#trigger-flood",
            duration: "100%",
            triggerHook: 0
        })
        .setPin("#trigger-flood")
        .addTo(controller);
    var fadeInFlood = new ScrollMagic.Scene({
            triggerElement: "#trigger-flood",
            triggerHook: 0
        })
        .setTween(TweenMax.to("#ilu-flood"), { opacity: 1 })
        .addTo(controller);
});