$(function(){
    cart_count();
    totalprs();

    //셀렉트박스 선택시 사이즈값 자동 입력
    $("select").change(function(){
        let chk_size = $(this).find("option:selected").val();
        let chk_idx = ($(this).parents("#cart>ul").index() + 1) / 2 + 0.5;
        $("#cart>ul:nth-of-type("+chk_idx+")").find("label").text(chk_size);
    })

    //삭제버튼
    $(".xi-close").click(function(){
        $(this).parents("ul").next("hr").remove();
        $(this).parents("ul").remove();
        cart_count();
        totalprs();
    });

});

//머리말 총 건수
let cart_count = function(){
    let in_cart = $("#cart").children("ul").length;
    $("#count").text(in_cart);
};


//총 금액
let totalprs = function(){
    let sum = 0;
    for(let i = 0; i < $(".prs").length; i++){
        let del_comma = minusComma($(".prs").eq(i).text());
        sum = sum + parseInt(del_comma);
    }
    let s = sum.toString();
    $("#total_price").text(addComma(s));
}

//콤마제거
function minusComma(value){
    value = value.replace(/[^\d]+/g, "");
    return value;
}
//콤마추가
function addComma(valu){
    valu = valu.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return valu;
}

//주문하기 버튼
function orderbtn(){
    $("#container").css("filter","blur(3px)");
    $("footer").css("filter","blur(3px)");
    $("nav").css("filter","blur(3px)");
    $("header>div").css("filter","blur(3px)");

    $("#submit_menu").css("width","100%");
    $("#submit_menu button").css("display","inline");
    $("#submit_menu h2").css("display","block");
    setTimeout(function(){
        $("#submit_menu h2").css("opacity","1");
        $("#submit_menu button").css("opacity","1");
    },500);


}
//창 닫기 버튼
function backbtn(){
    $("#submit_menu").css("width","0");
    $("#submit_menu button").css("opacity","0");
    $("#submit_menu h2").css("opacity","0");
    $("#container").css("filter","none");
    $("footer").css("filter","none");
    $("nav").css("filter","none");
    $("header>div").css("filter","none");
    setTimeout(function(){

        $("#submit_menu h2").css("display","none");
        $("#submit_menu button").css("display","none");
    },500)


}
