$(document).ready(function(){
    $('[data-toggle="popover"]').popover();



    $(window).scroll(function(){
        $(".tops").css("opacity", 1 - $(window).scrollTop() / 150);
      });
      $(window).scroll(function(){
          $("#logoimg").css("opacity", 1 - $(window).scrollTop() / 350);
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


        function scroll_to(div){
	$('html, body').animate({
		scrollTop: $("mydiv").offset().top
	},1000);
}

});
