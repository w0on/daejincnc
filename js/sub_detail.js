$(document).ready(function(){


    ///메인메뉴
    $('header .sub_menu').hide();
    $('header .main_menu>li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(300);
    });
    
    $('header .main_menu>li').mouseleave(function(){
        $(this).find('.sub_menu').stop().slideUp(300);
    });


    // 좌측 사이드바
    $('#side_menu .side_sub_menu').hide();

    $("#side_menu .menu_list>li>a").click(function () { 
        $(this).next("#side_menu .side_sub_menu").slideToggle(300);
      });

	
    // 탭 메뉴
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
        
	})
    // 탭 새로고침
    $(function(){
        $('.tab-link').on("click",function(e){
            e.preventDefault();
        });
     });

    
    //  마우스 휠 이벤트     
    function handleMouseWheel(e) {
        e.preventDefault(); 
        
        var delta = e.originalEvent.wheelDelta / 100 || -e.originalEvent.detail / 3;
        var moveTop = null;
        
        if (delta < 0) {
            moveTop = $(this).next().offset().top; 
        } else {
          
            moveTop = $(this).prev().length ? $(this).prev().offset().top : $(this).parent().prev().offset().top;
        }

        $("html, body").stop().animate({
            scrollTop: moveTop + 'px'
        }, 300);
    }

    $(".active").on("mousewheel DOMMouseScroll", handleMouseWheel);




    // 자동차 부품 캐러셀 소스
    $('.prev').click(function(){
        $('.list').stop().animate({'margin-left':'-1000px'},function(){
            $('.list>li').eq(0).appendTo('.list');
            $('.list').css({'margin-left':'0px'});
        });
    });
    $('.next').click(function(){
        $('.list').stop().animate({'margin-left':'1000px'},function(){
            $('.list>li').eq(2).prependTo('.list');
            $('.list').css({'margin-left':'0px'});
        });
    });

    var auto = setInterval(function(){
         $('.list').stop().animate({'margin-left':'0'},function(){
            $('.list>li').eq(2).prependTo('.list');
            $('.list').css({'margin-left':'-1000px'});
        });
    },5000);

        /* 마우스 올렸을때 캐러셀 자동 멈춤 */
    $('.carousel').mouseenter(function(){
         clearInterval(auto);  
    });

        /* 마우스 내렸을때 캐러셀 자동 다시실행 */
    $('.carousel').mouseleave(function(){
         auto = setInterval(function(){
                 $('.list').stop().animate({'margin-left':'1000px'},function(){
            $('.list>li').eq(2).prependTo('.list');
            $('.list').css({'margin-left':'0'});
         });
     },2000);
    });
    

    // 자동차 부품 모바일 슬라이드
    const outer = document.querySelector('.outer');
    const innerList = document.querySelector('.inner-list');
    const inners = document.querySelectorAll('.inner');
    let currentIndex = 0; 

    inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`;
    })

    innerList.style.width = `${outer.clientWidth * inners.length}px`; 

    const getInterval = () => {
    return setInterval(() => {
        currentIndex++;
        currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
        innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    }, 2000);
    }

    let interval = getInterval(); 



    // 슬라이드 소스
    $('.prev_1').click(function() {
        $('.box').stop().animate({
            'margin-left': '-300px'
        }, function() {
        $('.box div:first-child').appendTo('.box');
        $('.box').css({
            'margin-left': '-70px'
        });
        });
    });

    $('.next_1').click(function() {
        $('.box').stop().animate({
            'margin-left': '60px'
        }, function() {
        $('.box div:last-child').prependTo('.box');
        $('.box').css({
            'margin-left': '-170px'
        });
        });
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


