/*global $, document*/
$(document).ready(function () {
    'use strict';
    //Menu Page
    $(document).scroll(function(){
        if($(this).scrollTop() > 660){
        $('.list_food').addClass('list_food_open')
        }else{
            $('.list_food').removeClass('list_food_open')
        }
    });
    $('.list_food ul li a').click(function () {
        let scrollTopMenu = $($(this).attr('data-scroll')).offset().top - 60
        $('body, html').animate({
            scrollTop: scrollTopMenu
        },1500);
    })
    $('.go_now').click(function () {
        let goDown = $('.list_food').offset().top 
        $('body, html').animate({
            scrollTop: goDown
        },1000);
    })
});