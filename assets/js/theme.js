$(document).ready(function() {
  // Navigation
  $(window).bind('load scroll', function(){
     var y = $(window).scrollTop();
     if (y <= 15) {
      // $('#lt-navigation nav').addClass('lt-no-background');
     } else if (y > 15) {
       $('#lt-navigation nav').removeClass('lt-no-background');
     }
  });
  $('.sidenav').sidenav();

  // Slider
  $('.lt-slider').slider({full_width: true});
  $(window).resize(function() {
      $('.lt-slider').height($(window).height() + 15).css('position', 'relative');
  });
  $(window).trigger('resize');

  // Parallax
  $('.lt-parallax').parallax();

  // Tabs
  $('.lt-tabs').tabs();

  // Modal
  $('.lt-modal-trigger').modal();

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 1,
      center: true
  });

  // Select
  $('select').formSelect();

  // DatePicker
  $('.datepicker').datepicker();

    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.tabs').tabs();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
        accordion: false
    });


    var $retraining_modal = $('#retraining');
    $retraining_modal.modal({
        dismissible: false
    });
    $retraining_modal.modal('open');
    $('#address_modal').modal();
    $("ul.pagination li").addClass('waves-effect');
    var activeText = $("ul.pagination li.active").text();
    $("ul.pagination li.active").html("<a>"+activeText+"</a>");
    $('#lt-navigation nav').removeClass('lt-no-background');

});
