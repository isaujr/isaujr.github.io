$(function(){
    
    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.c-').each(function(){
            var elOffY = $(this).offset().top;
            if(elOffY+300 < (windowOffY + windowHeight) && 
                elOffY+300+$(this).height() > windowOffY ){
                $('.menu-desktop a').css('border-bottom','0');
                $('.menu-desktop a').css('color','#EAEAEA');
                var target = $(this).attr('target');
                $('.'+target).css('border-bottom','2px solid #EF5350'); 
                $('.'+target).css('color','#EF5350'); 

                return;
            }
        });
    })

    $('nav ul li a[href^="#"], .inner a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 500);
    });

});
