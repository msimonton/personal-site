$(document).ready(function(){

          // Navigation scrollTop
// $('#portfolio-scroll').click(function() {
//    $.scrollTo($('.cover'), 500);
// });
$("#portfolio-scroll").click(function(event) {
  event.preventDefault()
    $('html,body').animate({
        scrollTop: $("#cover").offset().top-30},
        'slow');
});

$("#contact-scroll").click(function(event) {
  event.preventDefault()
    $('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
});

$("#smlogoimg").click(function(event) {
  event.preventDefault()
    $('html,body').animate({
        scrollTop: $("#logo").offset().top},
        'slow');
});

$('[data-toggle="popover"]').popover();



              // Contact popover
$('.contact').popover({trigger: "hover"});


var scrollBottom = $(window).scrollTop() + $(window).height();
$(window).scroll(function(){
    $(".tops").css("opacity", 1 - $(window).scrollTop() / 150);
  });
  $(window).scroll(function(){
      $("#logoimg").css("opacity", 1 - $(window).scrollTop() / 350);
    });

    $(window).scroll(function(){
        $("#smlogoimg").css("opacity", 0 + $(window).scrollTop() / 400);
      });


    $('#nav').affix({
          offset: {
            top: $('#blah').outerHeight()
          }
    });


        //
        // var navBar = $("#header");
        // var hdrHeight = $("#logo").height();
        //
        //
        // $(window).scroll(function() {
        //   if( $(this).scrollTop() > hdrHeight + 100) {
        //     navBar.addClass("navScrolled");
        //   } else {
        //     navBar.removeClass("navScrolled");
        //   }
        // });
        //
        var menu = $('.menu');
        var origOffsetY = menu.offset().top;

        function scroll() {
            if ($(window).scrollTop() >= origOffsetY) {
                $('.menu').addClass('sticky');
                $('.content').addClass('menu-padding');
                $('#marg').css('display','block');
                // $('index_main').css('margin-top','110px');

            } else {
                $('.menu').removeClass('sticky');
                $('.content').removeClass('menu-padding');
                $('#marg').css('display','none');
                // $('index_main').css('margin-top','50px');


            }


        }

        document.onscroll = scroll;


});
