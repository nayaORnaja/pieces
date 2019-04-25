/**
 * Created by Administrator on 2019/3/20.
 */
$(function () {
    $("#down").mouseenter(function () {
        $("nav>.list").toggle();
    });
    $("nav>.list").mouseleave(function (e) {
        if(e.relatedTarget.tagName!="A"&&e.relatedTarget.tagName!="UL"){
            $(this).toggle(500);
        }
    });

    $(".icon_1").click(function () {
        $("html,body").animate({
            scrollTop:0
        },300);
    });
    $(".icon_2").click(function () {
        location.reload(true);
    });
    $(window).scroll(function () {
        if($(window).scrollTop()>300){
            $(".icon_1").css("visibility","visible");
        }else {
            $(".icon_1").css("visibility","hidden");
        }
    });
    $(".closeLogin").click(function () {
        $(".login").css("display","none");
    });
    $(".search_right>button").click(function () {
        $(".login").css("display","block");
    })
})