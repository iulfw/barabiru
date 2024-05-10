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


// Menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
    function filterFunction() {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const div = document.getElementById("myDropdown");
        const a = div.getElementsByTagName("a");
        for (let i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
        }
    }
}