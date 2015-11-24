smoothScroll.init();

$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('#scrollhint').fadeOut();
     }
    else
     {
      $('#scrollhint').fadeIn();
     }
 });
