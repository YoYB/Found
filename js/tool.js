$(function(){
    // 返回顶部
    $(window).scroll(function(){
        if($(this).scrollTop() > $(".banner").height() / 2){
            $("#backTop").css({opacity : "1"});
        }else{
            $("#backTop").css({opacity : "0"});
        }
    })
    $("#backTop .back").click(function(){
        $("html,body").animate({scrollTop : "0"});
    })
})