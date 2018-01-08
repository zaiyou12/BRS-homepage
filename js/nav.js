$(document).ready(function(){
    
        var navOpenBtn = document.querySelector(".nav-open-btn");
        var navTab = document.querySelector(".closed-nav");        
        var navPosition = true;
        
        $(navOpenBtn).on("click", function(e){
            e.preventDefault();
            (navPosition == true) ? openSwitch() : closeSwitch();                        
        })
        
        function openSwitch(){
            $(navOpenBtn).addClass("on");
            $(navTab).addClass("on");
            return navPosition = false;
        }
        function closeSwitch(){
            $(navOpenBtn).removeClass("on");
            $(navTab).removeClass("on");
            return navPosition = true;
        }

    });