/*Start global $,alert, and console*/

$(function(){
    'use strict';

    //adjast header height
    $('.header').height($(window).height());

    //resize function
    $(window).resize(function(){

        //adjast header height
    $('.header').height($(window).height());
    });

    //add class active for links
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');


    });

    //bxslider
             $('bxslider').each(function(){
                      $(this).css('paddingTop', ($(window).height() - $('bxslider li').height()) / 2);
               });

    // $('bxslider').bxSlider();
    $('.bxslider').bxSlider({
        pager: false
    });

     // $('.slider').bxSlider({
        //     auto: true,
        //     autoControls: true,
        //     stopAutoOnClick: true,
        //     pager: true,
        //     slideWidth: 600
        // });


        //smooth scroll to Divs
        $('.links li a').click(function(){
            $('html , body').animate({
                scrollTop: $('#' + $(this).data('value')).offset().top
            }, 1000);
        });

        //create our own slider

        (function autoSlider(){
            $('.slider .active').each(function(){
                if (!$(this).is(':last-child')){
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('active').next().addClass('active').fadeIn();
                        autoSlider();
                    });
                } else {
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('active');
                        $('.slider div').eq(0).addClass('active');
                        autoSlider();
                    });

                }
            });
        }());

        //Trigger of shufel mixitup
        $('#container').mixItUp();

        //shufle
        $('.shuffle li').click(function(){
            $(this).addClass('active').siblings().removeClass();
        });


        //Trigger nice scroll
        $("body").niceScroll({
            cursorcolor:"#f7600f",
            cursorwidth:"10px",
            cursorborder: "none"    
        });

    });



/*End global $,alert, and console*/

//  /*Start my slide */
//  $(document).ready(function() {

//     var $slider = $(".slider"),
//         $slideBGs = $(".slide__bg"),
//         diff = 0,
//         curSlide = 0,
//         numOfSlides = $(".slide").length-1,
//         animating = false,
//         animTime = 500,
//         autoSlideTimeout,
//         autoSlideDelay = 6000,
//         $pagination = $(".slider-pagi");

//     function createBullets() {
//       for (var i = 0; i < numOfSlides+1; i++) {
//         var $li = $("<li class='slider-pagi__elem'></li>");
//         $li.addClass("slider-pagi__elem-"+i).data("page", i);
//         if (!i) $li.addClass("active");
//         $pagination.append($li);
//       }
//     };

//     createBullets();

//     function manageControls() {
//       $(".slider-control").removeClass("inactive");
//       if (!curSlide) $(".slider-control.left").addClass("inactive");
//       if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
//     };

//     function autoSlide() {
//       autoSlideTimeout = setTimeout(function() {
//         curSlide++;
//         if (curSlide > numOfSlides) curSlide = 0;
//         changeSlides();
//       }, autoSlideDelay);
//     };

//     autoSlide();

//     function changeSlides(instant) {
//       if (!instant) {
//         animating = true;
//         manageControls();
//         $slider.addClass("animating");
//         $slider.css("top");
//         $(".slide").removeClass("active");
//         $(".slide-"+curSlide).addClass("active");
//         setTimeout(function() {
//           $slider.removeClass("animating");
//           animating = false;
//         }, animTime);
//       }
//       window.clearTimeout(autoSlideTimeout);
//       $(".slider-pagi__elem").removeClass("active");
//       $(".slider-pagi__elem-"+curSlide).addClass("active");
//       $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
//       $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
//       diff = 0;
//       autoSlide();
//     }

//     function navigateLeft() {
//       if (animating) return;
//       if (curSlide > 0) curSlide--;
//       changeSlides();
//     }

//     function navigateRight() {
//       if (animating) return;
//       if (curSlide < numOfSlides) curSlide++;
//       changeSlides();
//     }

//     $(document).on("mousedown touchstart", ".slider", function(e) {
//       if (animating) return;
//       window.clearTimeout(autoSlideTimeout);
//       var startX = e.pageX || e.originalEvent.touches[0].pageX,
//           winW = $(window).width();
//       diff = 0;

//       $(document).on("mousemove touchmove", function(e) {
//         var x = e.pageX || e.originalEvent.touches[0].pageX;
//         diff = (startX - x) / winW * 70;
//         if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
//         $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
//         $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
//       });
//     });

//     $(document).on("mouseup touchend", function(e) {
//       $(document).off("mousemove touchmove");
//       if (animating) return;
//       if (!diff) {
//         changeSlides(true);
//         return;
//       }
//       if (diff > -8 && diff < 8) {
//         changeSlides();
//         return;
//       }
//       if (diff <= -8) {
//         navigateLeft();
//       }
//       if (diff >= 8) {
//         navigateRight();
//       }
//     });

//     $(document).on("click", ".slider-control", function() {
//       if ($(this).hasClass("left")) {
//         navigateLeft();
//       } else {
//         navigateRight();
//       }
//     });

//     $(document).on("click", ".slider-pagi__elem", function() {
//       curSlide = $(this).data("page");
//       changeSlides();
//     });

//   });
// /*End my slide*/
