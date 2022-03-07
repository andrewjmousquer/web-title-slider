
(Function()){
    $('.flex-container').waitForImagens(function() {
        $('spinner').fadeOut();
    }, $.noop, true);

    $(".flex-slide").each(function() {
        $(this).hover(function(){
            $(this).find('flex-title').css({
                transform: 'rotate(0deg)',
                top: '10%'
            });
            $(this).find('')
        }
    }
