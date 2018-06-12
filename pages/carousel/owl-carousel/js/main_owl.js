jQuery(document).ready(function ($) {
    //for basic usage
    var basic_owl = $('.basic_slider');
    basic_owl.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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

    //for mousewheel usage
    var mousewheel_owl = $('.mousewheel_slider');
    mousewheel_owl.owlCarousel({
        loop:true,
        margin:10,
        mouseDrag:false,
        autoHeight:true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        merge:true,
        smartSpeed: 1000,
        animateOut: 'rotateOut',
        autoplaySpeed:5000,

        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:3,
                nav:false,
                loop:false,
                mergeFit:true
            },
            1000:{
                items:3,
                nav:true,
                navText: ['Prev','Next'],
                loop:true,
                mergeFit:false
            }
        }
    });

    mousewheel_owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            mousewheel_owl.trigger('next.owl');
        } else {
            mousewheel_owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

});

