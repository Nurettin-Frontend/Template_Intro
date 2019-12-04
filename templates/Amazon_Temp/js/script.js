/*global $, document,  window*/
$(document).ready(function () {
   'use strict';
    $(document).scroll(function(){
        $('.scroll').each(function(){
            var scrollLink = $(this).attr('id')
            if($(window).scrollTop() > $(this).offset().top -100){
                $('header ul li').removeClass('active');
                $('header ul li[data-scroll="' + scrollLink + '"]').addClass('active');
            }
        })
        if($(this).scrollTop() ){
            $('header').addClass('header_open')
            $('.logo_img').attr('src','images/logo_open.png')
        }else{
            $('header').removeClass('header_open')
            $('.logo_img').attr('src','images/logo.png')
        }
        /*if($(this).scrollTop() > 500){
            $('.goTop').addClass('goTop_open')
        } else{
            $('.goTop').removeClass('goTop_open')
        }*/
        if( $(window).scrollTop() > $('.about').offset().top){
            $('.progress_list .progress_value').each(function (){
                var prog = $(this).attr('data-value');
                var progValu = ($('.progress_value').width()) / 100;
                var progPerc = prog * progValu;
                $(this).find('.progress_').animate({
                    width: progPerc
                },1500)
            })
        }
    });
    $('header ul li').click(function() {

        var sectionTop = $($(this).attr('data-link')).offset().top - 80
        $('html, body').animate({
            scrollTop: sectionTop
        },1000)
    });
    $('.list_links li').click(function() {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        $('.list_info li').removeClass('opacity_visible')
        $('.about_img img, .owl-three').removeClass('opacity_visible')
        
        $($(this).attr('data-list')).addClass('opacity_visible')
    });

    $('.protfolio li').click(function() {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    });
    $('.hold').mixItUp();
    
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })    
    
    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })    
    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
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
    })
});