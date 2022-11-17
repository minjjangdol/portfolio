$(function(){
  //GNB 슬라이드다운 메뉴
    $("#gnb>li").click(function(){
        if ($(this).children(".sub").css("display") == 'none') {
            $('.sub').slideDown();
        }else{
            $('.sub').slideUp();
        }
    });

  //TOP 버튼
  $(".top_btn").click(function(){
   let loc = $("body").offset().top;
   window.scrollTo({top:loc, behavior:"smooth"});
  });

  //햄버거 클릭 이벤트
  $('#hamberger').click(function(){
    $(this).toggleClass("xi-close-min");
    if($(this).hasClass("xi-close-min") == true){
      $('nav').css('left','0');
    }else{
        $('nav').css('left','-280px');
    }
  });
  //배경 클릭시 GNB 들어가
  //클릭이벤트 선택자만 변경하면 이벤트 적용.
  $("#container").click(function(){
    if (window.matchMedia("(max-width: 1024px)").matches){
      if($("#hamberger").hasClass("xi-close-min") == true){
        $("nav").css("left","-280px");
        $("#hamberger").removeClass("xi-close-min");
      }else{}

    }else{}

  });
  $("footer").click(function(){
    if (window.matchMedia("(max-width: 1024px)").matches){
      if($("#hamberger").hasClass("xi-close-min") == true){
        $("nav").css("left","-280px");
        $("#hamberger").removeClass("xi-close-min");
      }else{}

    }else{}

  });

})