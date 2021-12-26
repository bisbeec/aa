$(document).ready(function() { 

        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
        });


        $(window).scroll(function() { 
          var scrollDown = $(window).scrollTop();

          if (scrollDown >= 100) {
              $(".header").addClass("sticky");
          }
          if (scrollDown <= 100) {
              $(".header").removeClass("sticky");
          }
        });

        // Owl Carousel
        var owl = $("#owl-testimonials");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768,1],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 500,
        });

          $(".hero .headline").waypoint(function(direction) {
            $(".hero .headline h1").addClass("animate-slide-in");
            $(".hero .headline h2").addClass("animate-slide-in");
            $(".hero .desc").addClass("animate-fade-up");
            $(".hero .button-wrap").addClass("animate-fade-up");
          },{
              offset:'90%'
          });

          $("#section-intro").waypoint(function(direction) {
            $("#section-intro").addClass("animate-fade-in");
          },{
              offset:'60%'
          });

          $("#section-services-offered").waypoint(function(direction) {
            $("#section-services-offered .row > div").addClass("animate-fade-up");
          },{
              offset:'50%'
          });

          $('#section-two-tiles').waypoint(function(direction) {
            $('.main .methods').addClass("animate-slide-in");
            $('.main .methods .content').addClass("animate-fade-up");
            $('.main .methods .content li').addClass("animate-slide-in");
            $('.main .what-i-treat').addClass("animate-slide-in");
            $('.main .what-i-treat .content').addClass("animate-fade");
            $('.main .what-i-treat .content li').addClass("animate-slide-in");
          },{
              offset:'100%'
          });


})


