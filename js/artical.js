$(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");
    $("#backTop").load("backTop.html");


    $(".art-title>span").click(function(){
        $(".art-title").css({width:"10%"}).stop().animate({width:"100%"},800);
    })


    //开始复用模板代码
    //获取浏览器参数
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        } else {
            return "";
        }
    }

    var type = getUrlParams("name");
    //console.log(type);
    switch(type){
        case "ta":   //人物
            var artTop = `<div class="title">发现动态</div>
        <div class="entitle">
            <span>Discovery Dynamics</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            人物
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/taData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                     console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/taData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/taData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })

            break;
        case "food":   //知食
            var artTop = `<div class="title">发现动态</div>
        <div class="entitle">
            <span>Discovery Dynamics</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            知食
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/foodData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/foodData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/foodData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })

            break;
        case "shop":   //店记
            var artTop = `<div class="title">发现动态</div>
        <div class="entitle">
            <span>Discovery Dynamics</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            店记
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/shopData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/shopData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/shopData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })

            break;
        case "city":   //城事
            var artTop = `<div class="title">发现动态</div>
        <div class="entitle">
            <span>Discovery Dynamics</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            城事
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/cityData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/cityData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/cityData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })

            break;
        case "art":   //艺会
            var artTop = `<div class="title">发现动态</div>
        <div class="entitle">
            <span>Discovery Dynamics</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            艺会
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/artData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/artData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/artData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })

            break;
        case "companyIdea":  //公司介绍
            var artTop = `<div class="title">企业文化</div>
        <div class="entitle">
            <span>Company Culture</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            公司介绍
        </div>`
            $("#art-top").html(artTop);
        //上半部分结束
        //下半部分
            var artMain = `<div class="artText">
            <div class="art-bgimg"><img src="imgs/artical-img01.png"></div>
            <div class="art-info"><h2>概述</h2><p>
南京米来信息技术有限公司由移动互联网资深专家联合知名数字广告集团投资创建，核心成员来自新加坡国立大学、中科院、南京大学、东南大学等国内外一流大学。公司致力于品牌 IP 化传播，拥有稳定的核心技术团队，是集产品设计、研发、运维和测试于一体的全面技术研发企业。</p>
<p>公司获得政府多项政策支持，入选南京市科技创业家、南京市“五个一批” 人才计划、江苏省双创人才计划、江苏省第五批“333”工程，荣获南京市首届文化产业金梧桐奖等多项奖项。</p>
</div>
</div>`
            $("#art-main").html(artMain);
            break;
        case "institute":  //品牌研究院
            var artTop = `<div class="title">企业文化</div>
        <div class="entitle">
            <span>Company Culture</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            品牌研究院
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            var artMain = `<div class="artText">
            <div class="art-bgimg"><img src="imgs/artical-img02.png"></div>
            <div class="art-info"><h2>概述</h2>
<p>未来的品牌都将IP化，我们是国内首家企业级品牌IP研究院，致力于品牌 IP 化传播、IP内容智造、IP产品推广。</p>
</div>
</div>`
            $("#art-main").html(artMain);
            break;
        case "job":    //招聘信息
            var artTop = `<div class="title">企业文化</div>
        <div class="entitle">
            <span>Company Culture</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            招聘信息
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/jobData.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `
                        <div class="el">
                            <p class="t1">
                               <a href="javascript:;" class="zw-name">${list[i].post}
                               </a>
                            </p>
                            <span class="t2">${list[i].keyPoints}</span>
                            <span class="t3">${list[i].location}</span>
                            <span class="t4">${list[i].salary}</span>
                            <span class="t5">${list[i].date}</span>
                        </div>
                        `
                        arr.push(artMain);
                    }
                    //console.log(arr);
                    $("#art-main").html(arr)
                    var artImg = `
                    <div class="art-bgimg"><img src="imgs/artical-img03.png" alt=""></div>
                    `
                    $("#art-main").prepend(artImg);
                }
            })

            break;
        case "character":  //城市人物
            var artTop = `<div class="title">发现TV</div>
        <div class="entitle">
            <span>Discover Television</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            城市人物
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/characterData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    //console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/characterData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/characterData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })
            break;
        case "development":   //城市发展
            var artTop = `<div class="title">发现TV</div>
        <div class="entitle">
            <span>Discover Television</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            城市发展
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/developData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    //console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/developData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/developData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })
            break;
        case "culturalTravel":  //城市文旅
            var artTop = `<div class="title">发现TV</div>
        <div class="entitle">
            <span>Discover Television</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            城市文旅
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/culturalTravelData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    //console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            break;
        case "life":  //城市生活
            var artTop = `<div class="title">发现TV</div>
        <div class="entitle">
            <span>Discover Television</span>
            <img src="imgs/index/three_points01.png">
        </div>
        <div class="art-title">
            城市生活
        </div>`
            $("#art-top").html(artTop);
            //上半部分结束
            //下半部分
            $.ajax({
                url: 'js/lifeData01.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    //console.log(arr);
                    $(".art-list").html(arr)
                }
            })
            $.ajax({
                url: 'js/lifeData02.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop1").html(arr);
                }
            })
            $.ajax({
                url: 'js/lifeData03.json',
                success: function (res) {
                    var list = res.data.list;
                    //console.log(list);
                    //循环遍历数据,动态创建结构
                    //用一个空数组,储存创建好的结构
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var artMain = `<div class="artItem">
                <div class="art-img">
                    <img src="${list[i].coverImg}">
                </div>
                <div class="art-mes">
                    <div class="mes-title" title="${list[i].title}">${list[i].title}</div>
                    <div class="art-time">${list[i].creatAt}</div>
                    <div class="art-text" title="${list[i].describe}">${list[i].describe}</div>
                </div>
            </div>`;
                        arr.push(artMain);
                    }
                    // console.log(arr);
                    $(".art-drop2").html(arr);
                }
            })
            break;
    }

    var titleName = $(".title").html(),
        artTitle = $(".art-title").html();
    if(artTitle){
        $("title").html(titleName + "--" + artTitle);
    }else{
        $("title").html(titleName);
    }


    setTimeout(function(){
        //查看更多
        //保存隐藏部分的高度
        var artDropHgt = [];
        var artDropLen = $(".art-drop").length;
        for(var i = 0;i < artDropLen;i++){
            artDropHgt[i] = $("#art-main>.art-drop").eq(i).height();
            //将隐藏部分的高度设置为0
            $(".art-drop").eq(i).height(0);
        }
        var clickCount = 0;  //记录点击次数
        $(".scroll-look").click(function(){
        console.log(artDropHgt);
        //点击查看更多给隐藏部分设置高度
            if(clickCount >= artDropLen - 1){
                $(".look-more").html("<img src='imgs/list_gomore_bg_nomore.jpg'>")
            }
            clickCount++;
            $(".art-drop").eq(clickCount - 1).animate({height:artDropHgt[clickCount - 1] + "px"});
        })
    },100)

    //点击喜欢按钮
    var likeWidth = $(".like").width();
    $(".like").css({marginRight:-likeWidth + "px"});
    $(".like-btn").hover(function(){
        $(".like").stop().animate({marginRight:"0"});
    },function(){
        $(".like").stop().animate({marginRight:-likeWidth + "px"});
    })
})
