
$(function(){/*호버는 function 두개 쓰라~ 나타났다 안보여야하니*/
/*.stop걸어서 계속 왔다갔다하면 그만큼 계속 나타나는거 없엠*/
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().fadeIn();
    },function(){
        $(this).children(".sub").stop().fadeOut();
    });
});

$(function(){
    $("#menu").click(function(){
        $(this).toggleClass
        ("aniMenu");
        $("#gnb").fadeToggle(100);
    });
});











