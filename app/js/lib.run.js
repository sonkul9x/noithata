$(window).load(function() {
    $(function() {
        if (!flux.browser.supportsTransitions)
            alert("Flux Slider requires a browser that supports CSS3 transitions");

        window.f = new flux.slider('#slider', {
            pagination: false,

        });
    });
    $('#producthot').lightSlider({
        item: 4,
        pager: false,
        loop: true,
        auto: true,
        controls: true,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
    new WOW().init();

});