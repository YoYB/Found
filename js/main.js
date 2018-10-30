/**
 * Created by Administrator on 2018/7/31.
 */
$(function(){
    $("#navList>a:eq(0)").addClass("current").css({color:"#fff"});
    //创建存储当前高亮的导航项
    var navCurrent = $("#navList>a:eq(0)");
    $("#container").fullpage({
        //设置不同盒子的背景颜色
        sectionsColor : ["","#fff","","#f1f2f6","#f1f2f6"],
        //设置页面缩小字体大小不变
        resize : false,
        //添加锚点
        anchors : ["p1","p2","p3","p4","p5"],
        menu : "navbar",

        //滚动时，导航高亮
        afterLoad: function(a,i){
            //a 为锚点链接
            //i 为index值，从1开始
            $("#navList>a:eq(" + (i - 1) + ")").addClass("current").css({color:"#fff"}).siblings().removeClass("current").css({color:"#aeabb4"});
            navCurrent = $("#navList>a:eq(" + (i - 1) + ")");
        }
    })

    //关闭鼠标滚动
    $.fn.fullpage.setAllowScrolling(false);
    //获取。timer-text的高度
    var timerTextHgt = $(".timer-text").height() + $(".timer-text>.home-title").height();
    $(".timer-text").css({bottom:-timerTextHgt + "px"});
    //开局动画
    var isLoading = true;
    var textLoad = setTimeout(function(){
        $(".timer-text").animate({bottom:"40px"},1000);
    },4000);
    var hideLoad = setTimeout(function(){
        $(".timerHide").animate({height:"0"},500);
        setTimeout(function(){
            //开启鼠标滚动
            $.fn.fullpage.setAllowScrolling(true);
        },500);
    },8000);
    isLoad();
    //双击关闭动画
    $(".timerHide").dblclick(function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        isLoading = false;
        isLoad();
    })
    function isLoad() {
        if (isLoading) {
            setTimeout(function () {
                $(".timer-text").animate({bottom: "40px"}, 1000);
            }, 4000);
            setTimeout(function () {
                $(".timerHide").animate({height: "0"}, 500);
                setTimeout(function () {
                    //开启鼠标滚动
                    $.fn.fullpage.setAllowScrolling(true);
                }, 500);
            }, 8000);
        } else {
            clearTimeout(textLoad);
            clearTimeout(hideLoad);
            $(".timerHide").animate({height: "0"}, 500);
            $.fn.fullpage.setAllowScrolling(true);
        }
    }

    //鼠标hover导航
    $("#navList>a").hover(function(){
        $(this).addClass("current").css({color:"#fff"}).siblings().removeClass("current").css({color:"#aeabb4"});
    },function(){
        navCurrent.addClass("current").css({color:"#fff"}).siblings().removeClass("current").css({color:"#aeabb4"});
    })

    //toNext, toLeft, toRight
    var toImgWidth = $("#out-left>img").width() / 2;
    $("#toNext>img").click(function(){
        //点击触发下一张
        setTimeout($.fn.fullpage.moveSectionDown(),500);
    })

    //轮播
    //获取当前盒子的宽度
    var screenWidth = $(".section").width();
    var index = 1;//创建索引值
    //将当前的宽度给每个子盒子
    $(".outview").width(screenWidth);
    //克隆第一张和最后一张
    var outFirst = $("#outline").clone(true),
        outLast = $("#study").clone(true);
    //第一张放到最后，最后一张放在第一
    $("#outList").append(outFirst).prepend(outLast);
    //设置父盒子的宽度
    var outListChilds = $("#outList").children().length;
    $("#outList").width(screenWidth * outListChilds);

    //手动设置第一张
    $("#outList").css({left:-screenWidth + "px"});
    //点击toRight轮播
    $("#out-right").click(function(){
        if(index >= outListChilds - 1){
            index = 1;
            $("#outList").css({left:-screenWidth+"px"});
        }
        index++;
        $("#outList").animate({left:-screenWidth * index+"px"});
    })
    //点击toLeft轮播
    $("#out-left").click(function(){
        if(index == 0){
            index = outListChilds - 2;
            $("#outList").css({left:-screenWidth * index+"px"});
        }
        index--;
        $("#outList").animate({left:-screenWidth * index+"px"});
    })

    //边角发亮
    setInterval(function(){
        $(".valImg>.light").animate({opacity:"1"},700,function(){
            $(this).animate({opacity:"0"},700)
        })
    },1500)


    //水状盒子
    var bcConWidth = $(".bc-content").width(),
        bcItemHeight = $(".bcItem:eq(0)").height(),
        bcItemsLen = $("#bcList").children().length;
    //将获取到的宽度赋给bcItem
    $(".bcItem").width(bcConWidth);
    //将内容的高度赋给父盒子
    $(".bc-content").height(bcItemHeight);
    //将内容的宽度赋给ul
    $("#bcList").width(bcConWidth * bcItemsLen);
    //点击水盒子移动内容
    var bcNowWidth = $("#bcleft").width();
    $("#bcleft .bcNow").css({left:"0"});
    $("#bcright .bcNow").css({left:-bcNowWidth + "px"});
    $(".bcbox>div").click(function(){
        //水盒子的变化
        if($(this).attr("id") === "bcleft"){
            $(this).children().stop().animate({left:"0"},1200).end().siblings().children().stop().animate({left:-$(this).width()});
            //对应盒子的移动
            $("#bcList").stop().animate({left:"0"});
        }else{
            $(this).children().stop().animate({left:"0"},1500).end().siblings().children().stop().animate({left:$(this).width()});
            //对应盒子的移动
            $("#bcList").stop().animate({left:-bcConWidth + "px"})
        }
    })
})




























