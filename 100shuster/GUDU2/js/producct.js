//아코디언
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//셀렉박스
$(document).ready(function() {
    $('.select').change(function() {
        var result = $('.select option:selected').val();
        if (result == $('.select option:selected').val() ) {
        $('.selected_item').append('<div id="item_list" class="flex"><div>/ &nbsp;' + result + '</div> <div> little by little boots <i class="xi-close-square-o"></i></div></div>');
        totalPrice();

      }else{}
      $('.xi-close-square-o').click(function(){
        $(this).parents("#item_list").remove();
        totalPrice();
    });




    });
}); 


function minusComma(value){
    value = value.replace(/[^\d]+/g, "");
    return value; 
}
//콤마추가
function addComma(valu){
    valu = valu.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return valu; 
}

let totalPrice = function(){
    var counts = $('.xi-close-square-o').length;
    //이거에 .price span 콤마뺀 숫자만을 곱해서 
    let gap = $(".price>span").text();
    let gagong = minusComma(gap);
    let sum = gagong * counts;
    
    sum = sum.toString();
    let ggaggong = addComma(sum);
    $('#total>div>span').text(ggaggong);
};

/*모바일 결제창 업다운*/
$(function(){
    $('#m_purchase').click(function(){
        $('#purchase').css('bottom','0');
    });
    $('.xi-caret-down').click(function(){
        $('#purchase').css('bottom','-350px');
    });
});


