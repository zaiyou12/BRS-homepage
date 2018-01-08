$(document).ready(function() {

    var scrolled;
    var startPoint = 10;
    var docTop;
    var sectionTop = new Array;
    var sectionTarget;


    var recentWidth;
    $("body").resize(function() {
        return recentWidth = $(this).width();
    }).resize();

    if (recentWidth > 767) {
        $(".technology.mob").remove();
    }

    $(window).scroll(function() {
        scrolled = true;
        docTop = $(window).scrollTop();

        hacScrolled();
        getSection();
    });

    function hacScrolled() {
        if (docTop > startPoint) {
            $('header').addClass("scrolled");
        } else if (docTop < startPoint) {
            $('header').removeClass("scrolled");
        }
    }

    function getSection() {
        sectionTarget = document.querySelectorAll("section");

        if (sectionTop.length < sectionTarget.length) {
            for (var i = 0; i < sectionTarget.length; i++) {
                sectionTop.push($(sectionTarget[i]).offset().top);
            }
        }
    }

    /* nav button */
    var navOpenBtn = document.getElementsByClassName(".nav-open-btn")[0];
    console.log(navOpenBtn);
});