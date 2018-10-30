$(function(){
    //引入外部文件
    $("header").load("header.html");
    $("footer").load("footer.html");
    $("#backTop").load("backTop.html");

    //轮播图
    //获取bannerList的高度
    var bannerListHgt = $("#bannerList").height();
    $(".bannerText").height(bannerListHgt);
    //默认第一张显示
    $("#bannerList .bannerItem").hide().eq(0).show().find(".bannerText1").show();
    //点击右键头轮播
    var bannerIndex = 0;
    imgMove(0);
    $("#bannerList").find(".next").click(function(){
        if (bannerIndex >= $("#bannerList .points span").length - 1) {
            bannerIndex = 0;
        } else {
            bannerIndex++;
        }
        $("#bannerList .points span").eq(bannerIndex).addClass("now").siblings().removeClass("now")
        $("#bannerList .bannerItem").fadeOut(300);
        $("#bannerList .bannerItem").eq(bannerIndex).fadeIn(300);
        imgMove(bannerIndex);
    })
    //点击左箭头轮播
    $("#bannerList").find(".prev").click(function(){
        if (bannerIndex == 0) {
            bannerIndex = $("#bannerList .points span").length - 1;
        } else {
            bannerIndex--;
        }
        $("#bannerList .points span").eq(bannerIndex).addClass("now").siblings().removeClass("now")
        $("#bannerList .bannerItem").fadeOut(300);
        $("#bannerList .bannerItem").eq(bannerIndex).fadeIn(300);
        imgMove(bannerIndex);
    })
    function imgMove(bannerIndex) {
        $("#bannerList .bannerItem").eq(bannerIndex).find("img").eq(1).show().addClass("animated fadeInLeft");
        setTimeout(function () {
            $("#bannerList .bannerItem").eq(bannerIndex).find("img").eq(2).show().addClass("animated bounceInRight");
            $("#bannerList .bannerItem").eq(bannerIndex).find("img").eq(3).fadeIn();
        }, 1000)
    }



    //主要产品轮播
    //获取可视盒子的宽度并赋给li，li的高度给可视盒子
    var proItemHgt = $(".proItem").eq(0).height(),
        proItemsWdh = $(".pro-items").width();
    $("proItem").width(proItemsWdh);
    setTimeout(function(){
        $(".pro-items").height(proItemHgt);
    })
    //获取pro-text的宽度给箭头组合
    $(".pro-arrow").width($(".pro-text").width());
    //pro-text的触摸效果
    var proOutviewLen = $("#pro-list").find(".pro-outview").length;
    for(let i = 0;i < proOutviewLen;i++){
        $(".proItem").eq(i).hover(function(){
            $("#pro-list").find(".pro-outview").eq(i).children("img").get(0).src = "imgs/index/Layer-" + (i+1) + "_2.png";
        },function(){
            $("#pro-list").find(".pro-outview").eq(i).children("img").get(0).src = "imgs/index/Layer-" + (i+1) + "_1.png";
        })
    }
    //点击小圆圈实现跳转
    var proIndex = 0;
    //proList的子集
    var proItemLen = $("#proList .proItem").length;
    var lastPro = 0;  //保存上一次的索引值
    for(let t = 0;t < proItemLen;t++){
        $(".pro-line .linebtn").eq(t).click(function(){
            if(t > lastPro){
                proIndex = t - 1;
                proNext();
            }else if(t < lastPro){
                proIndex = t + 1;
                proPrev();
            }
            lastPro = t;
        })
    }
    //点击右箭头轮播
    //默认第一个显示
    var proFlag = true;
    $("#proList .proItem").css({display:"none"}).eq(0).css({display:"block"});
    $(".pro-line .linebtn").eq(0).find("i").css({display:"block"}).next().css({display:"none"});
    $(".pro-arrow>.next").click(proNext);
    function proNext(){
        if(proFlag){
            proFlag = false;
            if(proIndex >= proItemLen - 1){
                proIndex = -1;
            }
            proIndex++;
            $(".pro-items").height($(".proItem").eq(proIndex).height());
            $("#proList .proItem").css({display:"none"}).eq(proIndex).css({left:proItemsWdh / 2 + "px",display:"block",opacity:"0"}).animate({opacity:"1",left:"0"},800,function(){proFlag = true;});
            $(".pro-line .linebtn").eq(proIndex).find("i").css({display:"block"}).next().css({display:"none"}).end().parent().siblings().find("i").css({display:"none"}).next().css({display:"block"});
        }
    }
    //点击左箭头轮播
    $(".pro-arrow>.prev").click(proPrev);
    function proPrev(){
        if(proFlag){
            proFlag = false;
            if(proIndex == 0){
                proIndex = proItemLen;
            }
            proIndex--;
            $(".pro-items").height($(".proItem").eq(proIndex).height());
            $("#proList .proItem").css({display:"none"}).eq(proIndex).css({left:-proItemsWdh / 2 + "px",display:"block",opacity:"0"}).animate({opacity:"1",left:"0"},800,function(){proFlag = true;});
            $(".pro-line .linebtn").eq(proIndex).find("i").css({display:"block"}).next().css({display:"none"}).end().parent().siblings().find("i").css({display:"none"}).next().css({display:"block"});
        }
    }


    //业务范围折叠面板
    //获取隐藏面板的高度且保存
    var busiDropHgtArr = [];
    var busiItemsLen = $("#busiList .busiItem").length;
    var busiItem = $("#busiList .busiItem");
    var lastEq = 0;    //保存上一次的i值
    var isExpend = true;  //当前面板是否展开
    for(let i = 0;i < busiItemsLen;i++){
        busiDropHgtArr[i] = busiItem.eq(i).find(".busi-drop").height();
        busiItem.eq(i).find(".busi-drop").height(0);
        //默认第一个是展开的
        $("#busiList .busiItem:eq(0)").find(".busi-drop").height(busiDropHgtArr[0]);
        busiItem.eq(0).find(".expend>img").css({top : "0"});
        //点击中间图展开面板
        busiItem.eq(i).find(".type-icon").click(function(){
            expendDrop(i);
        })
        busiItem.eq(i).find(".expend").click(function(){
            expendDrop(i);
        })
    }
    //封装折叠面板
    function expendDrop(i){
        if(i == lastEq && isExpend){
            busiItem.eq(i).find(".busi-drop").stop().animate({height: "0"});
            busiItem.eq(i).find(".expend>img").animate({top : -$(".expend").height() + "px"})
            isExpend = false;
        }else{
            busiItem.eq(i).find(".busi-drop").stop().animate({height: busiDropHgtArr[i] + "px"}).end().siblings().find(".busi-drop").stop().animate({height: "0"});
            busiItem.eq(i).find(".expend>img").animate({top : "0"}).end().siblings().find(".expend>img").animate({top : -$(".expend").height() + "px"});
            isExpend = true;
        }
        lastEq = i;
    }

    //团队介绍轮播
    //获取可视盒子的宽度，且赋给li
    var teamWidth = $(".team-content").width();
    $(".dbmemb").width(teamWidth);
    //获取li的个数
    var membChildLen = $("#members").children().length;
    //克隆第一个放在最后，最后一个放在第一
    var membFirst = $("#members .dbmemb:eq(0)").clone(true),
        membLast = $("#members .dbmemb").eq(membChildLen - 1).clone(true);
    $("#members").append(membFirst).prepend(membLast);
    //设置ul的宽度
    membChildLen = $("#members").children().length;
    $("#members").width(teamWidth * membChildLen);
    //设置可视盒子的高度
    var membHeight = $("#members").height() + parseInt($("#members").css("padding-top"));
    $(".team-content").height(membHeight);
    //手动设置第一张
    $("#members").css({left:-teamWidth + "px"});
    //点击右箭头轮播
    var teamIndex = 1;   //图片当前索引值
    var teamSquare = 0;  //小点当前索引值
    var flag = true;   //节流阀
    $(".team-content").find(".next").click(teamNext);

    function teamNext(){
        if(flag) {
            flag = false;
            if (teamIndex >= membChildLen - 1) {
                teamIndex = 1;
                $("#members").css({left: -teamWidth + "px"});
            }
            teamIndex++;
            $("#members").animate({left: -teamWidth * teamIndex + "px"}, 2000, "backIn", function () {
                flag = true; //开启节流阀
            });
            if (teamSquare >= $(".team-content").find(".points").children().length - 1) {
                teamSquare = -1;
            }
            teamSquare++;
            $(".team-content").find(".points").children().eq(teamSquare).addClass("now").siblings().removeClass("now");
        }
    }
    //点击左箭头轮播
    $(".team-content").find(".prev").click(function(){
        if(flag){
            flag = false;
            if(teamIndex == 0){
                teamIndex = membChildLen - 2;
                $("#members").css({left:-teamWidth * teamIndex + "px"});
            }
            teamIndex--;
            $("#members").animate({left:-teamWidth * teamIndex + "px"},2000,"backIn",function(){
                flag = true;
            });
            if(teamSquare == 0){
                teamSquare = $(".team-content").find(".points").children().length;
            }
            teamSquare--;
            $(".team-content").find(".points").children().eq(teamSquare).addClass("now").siblings().removeClass("now");
        }
    })
    //鼠标放入盒子停止轮播
    $(".team-content").hover(function(){
        autoPlay(false);
    },function(){
        autoPlay(true);
    });
    //自动轮播
    var teamTimer = setInterval(teamNext,2000);
    function autoPlay(flag){
        if(flag){
            teamTimer = setInterval(teamNext,2000);
        }else{
            clearInterval(teamTimer);
        }
    }

    // 字数监测
    var lastLen = $("#iptTextArea").val().length;
    $("#iptTextArea").keyup(function(){
        var wordCount = $(".wordCount>span").text();
        wordCount = $(this).val().trim().length;
        $(".wordCount>span").text(wordCount);
    })
})