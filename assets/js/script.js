(function($, window) {
	$('#owl-vitrine').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#owl-oferta').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
})(jQuery, window);