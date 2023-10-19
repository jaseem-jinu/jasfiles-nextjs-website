jQuery(document).ready(function() {
    jQuery('.menu-icon').click(function() {
        jQuery(this).toggleClass('open');
        jQuery("body").toggleClass("menu-opn");
    });
});


jQuery('.clients-slider').owlCarousel({
    loop:false,
    margin:10,
    autoplay:false,
autoplayTimeout:2000,
autoplaySpeed:800,
autoplayHoverPause:false,
responsiveClass:true,
nav:false,
dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});



jQuery('.blog-slider').owlCarousel({
    loop:false,
    margin:65,
    autoplay:false,
autoplayTimeout:2000,
autoplaySpeed:800,
autoplayHoverPause:false,
responsiveClass:true,
nav:false,
dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});


jQuery('.service-slider').owlCarousel({
    loop:false,
    margin:40,
    autoplay:false,
autoplayTimeout:2000,
autoplaySpeed:800,
autoplayHoverPause:false,
responsiveClass:true,
nav:false,
dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


jQuery('.works-slider').owlCarousel({
    loop:false,
    margin:0,
    autoplay:true,
autoplayTimeout:2000,
autoplaySpeed:800,
autoplayHoverPause:false,
responsiveClass:true,
nav:false,
dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});


var width = jQuery(window).width();
var height = jQuery(window).height();

if (width > 1200) {
   jQuery(window).ready(function () {
        jQuery('.wwd_sec').css({'margin-left': ((jQuery(window).width() - 1200) / 2 ) + 'px'});
    });
    jQuery(window).resize(function () {
        jQuery(window).ready(function () {
        jQuery('.wwd_sec').css({'margin-left': ((jQuery(window).width() - 1200) / 2 ) + 'px'});
    }	);
    });
}



