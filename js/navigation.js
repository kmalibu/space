$(function(){
    // dropdown menu
    $('#main-menu > li').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('#main-menu > li').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
    });

    // trigger button
    $('#trigger').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('#main-menu').toggleClass('active');
        $('.top-menu').toggleClass('active');
        $('.flex-direction-nav a').toggleClass('active');
        $('.flex-control-nav').toggleClass('active');
    });

    // scroll event effect : 스크롤 이벤트의 대상은 '웹브라우저'이다.
    $(window).scroll(function(){ // window 내장 객체는 웹브라우저 객체(BOM)이다.
        var value = $(window).scrollTop(); // 스크롤바가 내려간 거리를 얻는다.

        if (value > 150) { // 스크롤바의 내려간 거리가 150 픽셀보다 클때
            $('header').addClass('dark'); // header에 dark 클래스명을 넣는다.
        } else {
            $('header').removeClass('dark'); // header에 dark 클래스명을 제거한다.
        }
    });
});