// Navigation

function checkScroll() {
    var startY = $('nav').height() * 2;

    if($(window).scrollTop() > startY) {
        $('nav').addClass("scroll");
    } else{
        $('nav').removeClass("scroll");
    }
}

if($('nav').length > 0) {
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}


// Reviews

jQuery(document).ready(function($) {
    "use strict";

    $('#reviews').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 750,
        responsive: {
            0: {
            items: 1
            },
            768: {
            items: 2
            },
            1170: {
            items: 3
            }
        }
    });
});