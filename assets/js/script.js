(function($, window) {
	$('#owl-blog').owlCarousel({
        loop: true,
        autoplay: true,
        margin:0,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
})(jQuery, window);