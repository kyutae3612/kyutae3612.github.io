function pinnedScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.parallax-dynamic',
        triggerHook: 0
    })
    .setPin('.parallax-dynamic')
    .addTo(controller)
}

pinnedScroll();