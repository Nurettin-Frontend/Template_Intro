/*global $, document*/
$(document).ready(function () {
   "use strict";
    $('.navbar-nav li').removeClass('active')
    $('.' + $(document).find('title').text()).addClass('active')

    $(document).scroll(function(){
        if($(this).scrollTop() ){
        $('.header_top').addClass('header_top_open')
        }else{
            $('.header_top').removeClass('header_top_open')
        }
        
        if($(this).scrollTop() > 500){
            $('.goTop').addClass('goTop_open')
        } else{
            $('.goTop').removeClass('goTop_open')
        }
    });
    $('.goTop').click(function () {
        let goTop = $('body, html').offset().top 
        $('body, html').animate({
            scrollTop: goTop
        },1000);
    })
    $('.one-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }); 
    $('.hold').mixItUp();
    $('.img_click').click(function () {
       $('.fixed_img').addClass('fixed_img_open')
        $('.fixed_img').find('img').attr('src', $(this).parent().parent().find('img:nth-child(2)').attr('src'))
        $('.fixed_img').click(function (){
           $(this).removeClass('fixed_img_open') 
            $('.cover').click(function (e) {
                e.stopPropagation()
            });
        });
    });
    $('.team .person_img a').click(function () {
        $('.team_img').addClass('team_img_open')
        $('.team_img').find('img').attr('src', $(this).parent().parent().find('img').attr('src'))
        $('.team_img').click(function (){
           $(this).removeClass('team_img_open') 
            $('.cover').click(function (e) {
                e.stopPropagation()
            });
        });
    });
    $('.team_img .fa-times').click(function () {
       $('.team_img').removeClass('team_img_open') 
    });
    $('.loading-overlay .spinner').fadeOut(600, function () {
        $(document).scrollTop(0);
        $(this).parent().fadeOut(500);
        $('body').css('overflow-y', 'auto');
    });
    new WOW().init();
});
document.addEventListener('mousemove', parallax);
function parallax(e){
  document.querySelectorAll('.layer').forEach(layer =>{
    var speed = layer.getAttribute('data-speed');
    var x     = (window.innerWidth - e.pageX * speed)/100;
    var y     = (window.innerWidth - e.pageY * speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  });
} 