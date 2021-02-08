$(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
        resize: true
      })

    $('.burger-icon').click(function(){
        var setSpace = $('header').innerHeight();
	 	$('.mobile-menu').css('top',setSpace);
        $('.mobile-menu').slideToggle(300);
        $(this).toggleClass('open');
    })

    $(window).load(function(){
        var setSpace = $('header').innerHeight();
        $('.header-space').height(setSpace);
    })
    
    $(window).resize(function(){
        var setSpace = $('header').innerHeight();
	    $('.header-space').height(setSpace);
        $('.mobile-menu').css('top',setSpace);
    
        var WW = $(window).width();
        if(WW>1025){
            $('.burger-icon').removeClass('open');
            $('.mobile-menu').slideUp(300);
            $('.mobile-menu').css('top',setSpace);
        }else{
            $('.mobile-menu').css('top',setSpace);
        }
    })

    $(window).scroll(function(){
        var setSpace = $('header').innerHeight();
        var WC = $(window).scrollTop();
        if(WC>100){
            $('header').addClass('header-scroll');
        }else{
            $('header').removeClass('header-scroll');
        }
        $('.burger-icon').removeClass('open');
        $('.mobile-menu').slideUp(300);
        $('.mobile-menu').css('top',setSpace);
    
    })
    
});