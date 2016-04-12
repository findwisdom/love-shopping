/**
 * Created by wisdom king on 2016/2/24.
 */
$(function(){
    var $li = $("#skin li");
    $li.click(function(){
        switchSkin(this.id);
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
    function switchSkin(skinName){
        $("#"+skinName).addClass("select").siblings().removeClass("select");
        $("#cssflie").attr("href","css/skin/"+ skinName +".css");
        //选择
        $.cookie("MyCssSkin",skinName,{path:'/',expires:10});
    }
    /*换肤*/
    var index = 0
    var length = $("#photoplay img").length;
    function play(){
        a(index);
        index++;
        if (index == length) index = 0;
    }
    function a(x){
       $("#photoplay").find("img").eq(x).stop(true,true).fadeIn().siblings().fadeOut();
       $("#photoplay_list ul li").eq(x).addClass("selected").siblings().removeClass("selected");
    }
     $("#photoplay_list ul li").mouseover(function(){
        index = $(this).index();
        a(index);
     });
     $("#photoplay").mouseover(function(){
        clearInterval(show);
     }).mouseout(function() {
         show = setInterval(play, 3000);
    });
    var show = setInterval(play, 3000);
    /*轮播*/
    $("#active_list ul li").mouseover(function(){
        var x= $(this).index();
        var width =-$("#active_box2 ul li").width()*4*x+"px";
        $("#active_box2 ul").stop(true,true).animate({marginLeft:width },"1000")
        $("#section_3 #active_box1 #active_list li").eq(x).addClass("selected").siblings().removeClass("selected");
    })
    /*选择播放*/
    $("#detail_color li img").click(function(){
        $(this).addClass("selected").parent().siblings().find("img").removeClass("selected");
        var m = $(this).attr("alt");
        var n = $("#image_small").attr("src").lastIndexOf("/");
        var str = $("#image_small").attr("src").substring(0,n+1);
        $("#image_small").attr("src",str+m);
        var m1 = m.indexOf("_")
        var str1 = m.substring(0,m1);
        $("#menu ul li img").hide();
        $("#menu ul ").find("."+str1).show();
        var name = $(this).attr("name");
        $("#col").text(name);
    })
    $("#menu ul li img").click(function(){
        $(this).addClass("selected").parent().siblings().find("img").removeClass("selected");
        var m = $(this).attr("alt");
        var n = $("#image_small").attr("src").lastIndexOf("/");
        var str = $("#image_small").attr("src").substring(0,n+1);
        $("#image_small").attr("src",str+m+"_small.jpg");
    })
    $("#introduce ul li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".introduce_content").eq($(this).index()).show().siblings(".introduce_content").hide();
    })
    /*选取不同颜色的衬衫*/
    $("#look").click(function(){
        var n = $("#menu ul li").find(".selected").attr("src").lastIndexOf(".");
        var url = $("#menu ul li").find(".selected").attr("src").substring(0,n)+"_big.jpg";
        var a ="<div id='ooo_o'></div><div id='ooo'><img src='"+url+"' id='ooo_img'/></div>";
        var width = $("html").width()+"px";
        var height = $("html").height()+400+"px";
        $("body").append(a);
        $("#ooo_o").css({
            "width":width,
            "height":height
        }).animate({opacity:"0.6"},400);
        $("#ooo_o,#ooo").click(function(){
            $("#ooo").animate({opacity:"0"},1000,function(){
                $(this).remove();
            })
            $("#ooo_o").animate({opacity:"0"},1000,function(){
                $(this).remove();
            })
        })
    })
    /*放大镜效果*/
    $("#all_size li").click(function(){
       $(this).addClass("selected").siblings().removeClass("selected");
       var html = $(this).html() ;
       $("#detail_size #size").html(html);
    })
    /*选择尺寸*/
    var price = $("#total").text();
    $("select").change(function(){
        $("#total").text($(this).val()*price);
    })
    /*计算总价*/
    $("#detail_pingjia li").mouseover(function(){
        $("#detail_pingjia").removeClass(this.id).addClass(this.id);
    }).mouseout(function(){
        $("#detail_pingjia").removeClass(this.id);
    })
    $("#detail_pingjia li").click(function(){
        alert("你给的评价是："+$(this).attr("title"));
        $("#detail_pingjia").removeClass().addClass(this.id+"_1")
    })
    /*评分*/
    $("#shopping img").click(function(){
        var a = "谢谢惠顾\n"+"您选择的颜色是："+$("#col").text()+"\n您选择的尺寸是："+$("#size").text()+"\n共计:"+$("#total").text();
        if($("#size").text() == "未选择"){
            alert("请选择尺寸");
        }else{
            alert(a);
            alert(1<br>1);
        }
    /*购物车*/
    })
})
