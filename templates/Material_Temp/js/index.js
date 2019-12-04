/*global $ ,document*/
$(document).ready(function () {
    'use strict';
    $('.dropdown').hover(function () {
        $(this).siblings().find('.dropdown-menu').fadeOut(200);
        $(this).find('.dropdown-menu').fadeToggle(500);

    });
    $(".dropdown-menu, .dropdown").click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
      $(".dropdown-menu").fadeOut(200);
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-open');
            $('.navbar-nav li a').addClass('active-color');
            //navbar-icon in mobile
            $('.navbar-icon').addClass('active');
        } else {
            $('.navbar').removeClass('navbar-open');
            $('.navbar-nav li a').removeClass('active-color');
            $('.navbar-icon').removeClass('active');
        }
    });
    //to focus when click on label
    $('label').click(function(){
        $(this).parent().find('[request]').focus()
    })
   $('[request]').focus(function (){
      $(this).parent().find('label').addClass('focus'); 
   }).blur(function () {
       if($(this).val() === ""){
           $(this).parent().find('label').removeClass('focus'); 
       }
   });

     new WOW().init(); 
    var countDownDate = new Date('Jan 2, 2023 20:00:00').getTime();
    
    var x = setInterval(function () {
       
        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60))
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60) )
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
        
        
        if(distance < 0 ){
            clearInterval();
            $('#counter').text('complited')
        }
    },1);
    
});