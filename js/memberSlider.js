$(document).ready(function() {

    var recentWidth;
    $("body").resize(function() {
        return recentWidth = $(this).width();
    }).resize();

    var pageBtn = document.querySelectorAll(".page a");
    var sliderCount = 0;
    var teamMember = $(document.querySelectorAll(".team-members li"));
    var memberNum = teamMember.length;
    var teamCon = document.querySelector(".team-con");
    var teamLeft = new Array;

    /* web scroll*/
    if (recentWidth > 768) {
        $(teamMember).click(function() {
            $(this).parent().find("li").removeClass("on");
            $(this).addClass("on");
            var leftValue = -$(this).index() * 340 + 340;
            $(".team-members").animate({ left: leftValue }, "fast");
        })
    }
    $(".prev-btn").click(function(e) {
        e.preventDefault();
        $(".team-members").find("li.on").prev().click();
    });
    $(".next-btn").click(function(e) {
        e.preventDefault();
        $(".team-members").find("li.on").next().click();
    });

    /* mobile touch scroll*/
    var down_x = null;
    var up_x = null;
    var slidingLength = $(teamMember).width();

    $(teamCon).bind("touchstart", function(e) {
        e.preventDefault();
        scrolled = true;
        var docLeft = $(this).scrollLeft();
        down_x = e.originalEvent.touches[0].pageX;
    });
    $(teamCon).bind("touchmove", function(e) {
        up_x = e.originalEvent.touches[0].pageX;
    });
    $(teamCon).bind("touchend", function(e) {
        e.preventDefault();
        move_slide();
    });

    function move_slide() {
        if ((down_x - up_x) > 50) {
            if (0 <= sliderCount && sliderCount < memberNum - 1) {
                $(teamCon).find("li.on").next().addClass("on");
                $(teamCon).find("li.on").first().removeClass("on");
                slide_right();
            }
        }
        if ((up_x - down_x) > 50) {
            if (0 < sliderCount && sliderCount <= memberNum) {
                $(teamCon).find("li.on").prev().addClass("on");
                $(teamCon).find("li.on").first().next().removeClass("on");
                slide_left();
            }
        }
    }

    function slide_right() {
        sliderCount++;
        $(teamCon).animate({ scrollLeft: '+=305' }, 300);
    }

    function slide_left() {
        sliderCount--;
        $(teamCon).animate({ scrollLeft: '-=305' }, 300);
    }

    /* ceo */
    /* mobile touch scroll*/
    var c_sliderCount = 0;
    var c_down_x = null;
    var c_up_x = null;
    var categoryCon = document.querySelector(".category-con")
    var con_inner = document.querySelector(".category-con .con-inner");
    var categoryLengh = con_inner.querySelectorAll(".category").length;
    console.log(categoryLengh);
    var conLength = $(con_inner).find(".category").width();

    if (recentWidth < 768) {
        $(con_inner).css("width", (categoryLengh + 10) * conLength);

    }



    $(categoryCon).bind("touchstart", function(e) {
        e.preventDefault();
        scrolled = true;
        var docLeft = $(this).scrollLeft();
        c_down_x = e.originalEvent.touches[0].pageX;
    });
    $(categoryCon).bind("touchmove", function(e) {
        c_up_x = e.originalEvent.touches[0].pageX;
    });
    $(categoryCon).bind("touchend", function(e) {
        e.preventDefault();
        c_move_slide();
    });

    function c_move_slide() {
        if ((c_down_x - c_up_x) > 50) {
            if (0 <= c_sliderCount && c_sliderCount < 3 - 1) {
                c_slide_right();
            }

        }
        if ((c_up_x - c_down_x) > 50) {
            if (0 < c_sliderCount && c_sliderCount <= 3) {
                c_slide_left();
            }
        }
    }

    function c_slide_right() {
        c_sliderCount++;
        $(categoryCon).animate({ scrollLeft: '+=316' }, 300);
    }

    function c_slide_left() {
        c_sliderCount--;
        $(categoryCon).animate({ scrollLeft: '-=316' }, 300);
    }

    /* 스크롤 위치에 따른 ON 생성 */
    // $(teamCon).scroll(function(){
    //     scrolled = true;
    //     var docLeft = $(this).scrollLeft();            
    //     pushOn(docLeft)                
    // });

    /* 스크롤 위치에 따른 ON 생성 정의 */
    // function pushOn(obj){
    //     if(0 < obj < 150){
    //         $(teamMember).removeClass("on");
    //         $(teamMember[0]).addClass("on");               
    //     } 
    //     if(obj > 150){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[1]).addClass("on");               
    //     }
    //     if(obj > 450){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[2]).addClass("on");               
    //     }
    //     if(obj > 750){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[3]).addClass("on");               
    //     }
    //     if(obj > 1050){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[4]).addClass("on");               
    //     }
    //     if(obj > 1350){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[5]).addClass("on");               
    //     }
    //     if(obj > 1650){
    //         $(teamMember).removeClass("on");            
    //         $(teamMember[6]).addClass("on");               
    //     }        
    // }
});