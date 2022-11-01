var slideIndex = 0;
function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    // .backimg안에 있는 모든 li에 접근 한 후 거기에 topImg클래스가 있다면 지워 버려라!
    slideIndex++;
    var isIdx = slideIndex % 3;
    $(".backimg>li").eq(isIdx).addClass("topImg");
}

var slideCall = setInterval("slideAuto()", 1500);

$(".headerWrap").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()", 1500);
});

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











