(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.btn-menu a').click(function() {
      $('.side-nav').hide('slow');
    })

    $('.pushpin-nav').each(function() {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });
  }); // end of document ready

  /* Scroll to specific section on front page */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: (target.offset().top - 60)
          }, 1000);
          return false;
        }
      }
    });
  });
})(jQuery); // end of jQuery name space