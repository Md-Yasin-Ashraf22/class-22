$(function () {
   'use strict'


   $(window).on('scroll' , function(){
      

      var scrollSize= $(this).scrollTop()

      if(scrollSize > 500){
         $('#backToTop').fadeIn(500)
      }else{
         $('#backToTop').fadeOut(500)
      }
      
   })

   $('#backToTop').on('click' , function(){
      $('html , body').animate({
         scrollTop: 0
      }, 500)
   })

   $(window).on('load' , function(){
      $('#preloader').fadeOut(800)
   })

   $('.banner_slider').slick({
      prevArrow : '<i class="banner_slider_icon fas fa-arrow-left"></i>' ,
      nextArrow : '<i class="banner_slider_icon fas fa-arrow-right"></i>',
      dots : true ,
      dotsClass: 'banner_slider_dots',
      fade: true,
      cssEase: 'linear'
   })

   $(window).on('scroll' , function(){
      var menuHeight = $('#header').height()
      var Scrolltop = $(window).scrollTop()

      if(Scrolltop > menuHeight){
         $('#header').addClass('animate')
      }else{
         $('#header').removeClass('animate')
      }
   })

   $('a').on('click' , function(e){
      e.preventDefault()

      var hash = this.hash

      if(hash !== ''){
         $('html , body').animate({
            scrollTop: $(hash).offset().top
         }, 500);
      }

      
   })

   $('.gallery_item_filter').filterizr();

   $('.gallery_menu li').on('click' , function(){
      $('this').addClass('active') 
      $('this').sibilings('.active').removeClass('active')
   })

   $('.count_down').countdown('2022/10/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item"><span>%D</span><span>days</span></div> '
        + '<div class="count_down_item"><span>%H</span><span>hours</span></div>'
        + '<div class="count_down_item"><span>%M</span><span>mins</span></div> '
        + '<div class="count_down_item"><span>%S</span><span>sec</span></div>'));
    });


})

new VenoBox();


