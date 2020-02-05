function pinnedScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.parallax-static',
        triggerHook: 0
    })
    .setPin('.parallax-static')
    .addTo(controller)
}

pinnedScroll();