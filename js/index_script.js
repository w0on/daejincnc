
$(document).ready(function(){

    ///메인메뉴
    $('header .sub_menu').hide();

    $('header .main_menu>li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(300);
    });
    
    $('header .main_menu>li').mouseleave(function(){
        $(this).find('.sub_menu').stop().slideUp(300);
    });
 

    // sec02 Recruit 웹
    $('.s1_slide > li').click(function(){
        $(this).addClass('on');
        $('.s1_slide > li').not(this).removeClass('on');
    });	
    

    // sec02 Recruit 모바일
    $(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
    });
    
    $('#side_menu .side_sub_menu').hide();
    
    $("#side_menu .menu_list>li>a").click(function () { 
    $(this).next("#side_menu .side_sub_menu").slideToggle(300);
    });



    // 스크롤 이벤트 핸들러 함수
    function handleScroll() {
        let value2 = $(this).scrollTop();
    
        if (value2 > 700) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        } 
        }
    
        $(window).scroll(handleScroll); 
    
        $(".top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 400, function() {
                $(window).scroll(handleScroll);
            });
            return false;
        });
    

    

 
});

    

    
    
   
