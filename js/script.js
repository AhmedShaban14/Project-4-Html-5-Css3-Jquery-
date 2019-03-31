
$(function(){

    $('section.folio .folio_part button.first').click(function(){
        $('section.folio div.folio_part p.one').show().siblings().hide();
    });
    $('section.folio .folio_part button.second').click(function(){
        $('section.folio div.folio_part p.two').show().siblings().hide();
    });
    
    $(window).scroll(function(){
        var scrol = $(this).scrollTop();
        if(scrol==0)
            $('section.conrad .second-header').hide();
        if(scrol>500)
            $('.second-header').slideDown();
        else
            $('section.conrad .second-header').slideUp();
        
    });
    
    $('section.solution .acording p.one').css('display','block');
        $('section.solution .acording h3').click(function(){
            $(this).next().slideToggle();
            $('section.solution .acording p').not($(this).next()).slideUp();
        });
    
          $('.timer').countTo();
    
    
    $('.all').mixItUp();

 
    $("html").niceScroll();
    });