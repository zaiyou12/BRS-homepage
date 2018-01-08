$(document).ready(function(){
    
    /* historyTree */
    var historyTarget = document.querySelectorAll(".history-tree .tree-branch li");
    var summaryList = document.querySelectorAll(".history-tree .summary-list li");
    var onSummary = document.querySelector(".on-summary");

    var clickQueue = function ($target, timeout){
        
        var n = $target.length, i = 0;
        function click() {
            $target.eq(i++).click(); // 순차적 클릭
            if (i != n){
                stop = setTimeout(click, timeout); 
            } else if ( i = n){
                i = 0;
                setTimeout(click, timeout)
            }
        }
        click(); // 페이지로드 시 실행
    };
    clickQueue($(historyTarget), 2500); // auto slide 실행

    $(historyTarget).each(function(i,e){
        $(this).on("click", function(e){
            e.preventDefault();
            $(historyTarget).removeClass("on");
            $(historyTarget[i]).addClass("on"); 
            onSummary.innerText = summaryList[i].innerText; 
            clearTimeout(stop);
        })
    });        
    
});