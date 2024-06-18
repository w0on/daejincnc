
$(document).ready(function(){
    $('header .sub_menu').hide();
    $('header .main_menu>li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(300);
    });
    
    $('header .main_menu>li').mouseleave(function(){
        $(this).find('.sub_menu').stop().slideUp(300);
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
  
  $(document).ready(function() {
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


});