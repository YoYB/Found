$(function(){
    //下拉菜单
    //先保存drop的高度
    var dropHgtArr = [],
        dropHgtLen = $("#navList .navItem").find(".dropList").length,
        dropList = $("#navList .navItem").find(".dropList"),
        navItem = $("#navList .navItem"),
        navItemLen = $("#navList .navItem").length;

    for(let i = 0;i < dropHgtLen;i++){
        dropHgtArr[i] = dropList.eq(i).height();
        dropList.eq(i).height(0);
        $(".dropLi").eq(i).hover(function(){
            $(this).find(".dropList").stop().animate({height:dropHgtArr[i] + "px"}).end().siblings().find(".dropList").stop().animate(({height:"0"}));
        },function(){
            dropList.eq(i).stop().animate(({height:"0"}));
        })
    }
    //默认第一个显示
    navItem.eq(0).children("a").addClass("current");
    for(var m = 0;m < navItemLen;m++){
        navItem.eq(m).hover(function(){
            $(this).children("a").addClass("current").end().siblings().children("a").removeClass("current");
        },function(){
            navItem.eq(0).children("a").addClass("current").end().siblings().children("a").removeClass("current");
        })
    }
})
