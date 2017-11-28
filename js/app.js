 $(function(){  // $(document).ready shorthand

    var visibleHeight = $(document).height() - $(window).height();
visibleHeight.nextAll().remove();
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
            $('.hidden').css('opacity','0');

        /* Check the location of each desired element */
        $('.hidden').each(function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    

    //menus ul

    $('.menus h3').on('click', function(e) {
        $(this).next('ul').toggleClass('open');
        updateHeight();
        e.preventDefault(); return false;
    });

});


$(function(){
	$('.menus a').on('click', function( e ) {
		var href = $(this).attr('href');
		$('content').load(href);
		e.preventDefault();
	});
}) ();



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
