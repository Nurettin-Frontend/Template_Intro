/*global $,document*/
$(document).ready(function () {
    'use strict';

    $('.right_click').parent().find('.item1_h').addClass('item1_h_open'); //pShow
    $('.right_click').parent().find('.item1_p').addClass('item1_p_open'); //p2Show
    $('.right_click').parent().find('.item1_btn').addClass('button_open'); //btnShow
    
    $('.right_click').click(function () {
                // hide when click to show when come again
            //item_1

            $(this).parent().find('.item1_h').removeClass('item1_h_open');
            $(this).parent().find('.item1_p').removeClass('item1_p_open');
            $(this).parent().find('.item1_btn').removeClass('button_open');
            //item 2 
            $(this).parent().parent().find('.item2_h').removeClass('item2_h_open');
            $(this).parent().parent().find('.item2_p').removeClass('item2_p_open');
            $(this).parent().parent().find('.item2_btn').removeClass('item2_btn_open');

            //item 3
            
            $(this).parent().find('.item3_h').removeClass('item3_h_open');
            $(this).parent().find('.item3_p').removeClass('item3_p_open');
            $(this).parent().find('.item3_btn').removeClass('item3_btn_open');
            $(this).parent().find('.img_cover').removeClass('img_cover_open');
            $(this).parent().find('.imgcover_p').removeClass('imgcover_p_open');
            $(this).parent().find('.imgcover_p2').removeClass('imgcover_p2_open');
            $(this).parent().find('.imgcover_btn').removeClass('imgcover_btn_open');
            //item 4 show
            $(this).parent().find('.item4_h3').removeClass('item4_h3_open');
            $(this).parent().find('.item4_h2').removeClass('item4_h2_open');
            $(this).parent().find('.item4_p').removeClass('item4_p_open');
        if (!$(this).parent().is(':last-child')) {

            // to add class selected to show it
            // class start_animation to start the funciton
            $(this).parent().parent().find('li').removeClass('selected').find('start_animation').fadeOut(1);
            $(this).parent().next().addClass('selected').find('.start_animation').fadeIn(1, function () {
                
                //item 2 show
                $(this).parent().parent().find('.item2_h').addClass('item2_h_open');//pShow
                $(this).parent().parent().find('.item2_p').addClass('item2_p_open');//p2Show
                $(this).parent().parent().find('.item2_btn').addClass('item2_btn_open');//btnShow

                //item 3 show
                $(this).parent().find('.item3_h').addClass('item3_h_open');
                $(this).parent().find('.item3_p').addClass('item3_p_open');
                $(this).parent().find('.item3_btn').addClass('item3_btn_open');
                $(this).parent().find('.img_cover').addClass('img_cover_open');
                $(this).parent().find('.imgcover_p').addClass('imgcover_p_open');
                $(this).parent().find('.imgcover_p2').addClass('imgcover_p2_open');
                $(this).parent().find('.imgcover_btn').addClass('imgcover_btn_open');

                //item 4 show
                $(this).parent().find('.item4_h3').addClass('item4_h3_open');
                $(this).parent().find('.item4_h2').addClass('item4_h2_open');
                $(this).parent().find('.item4_p').addClass('item4_p_open');
                
                
                
                
                
                
            });
        } else {
            //item 4 remove calss because its the last item
            // we remove class's of item before come over it and then we show the classes
            $(this).parent().find('.item4_h3').removeClass('item4_h3_open');
            $(this).parent().find('.item4_h2').removeClass('item4_h2_open');
            $(this).parent().find('.item4_p').removeClass('item4_p_open');
            $(this).parent().parent().find('li').removeClass('selected').find('.start_animation').fadeOut();//.fadein_classRemove
            $(this).parent().parent().find('li').find('.item1_h').removeClass('item1_h_open');//p1Remove
            $(this).parent().parent().find('li').find('.item1_p').removeClass('item1_p_open');//p2Remove
            $(this).parent().parent().find('li').find('.item1_btn').removeClass('button_open');//btnRemove
            $(this).parent().parent().find('li:first-child').addClass('selected').find('.start_animation').fadeIn(1, function () {
            //.fadein_classShow
                $(this).parent().find('.item1_h').addClass('item1_h_open');//pShow
                $(this).parent().find('.item1_p').addClass('item1_p_open');//p2Show
                $(this).parent().find('.item1_btn').addClass('button_open');//btnShow

            });
           
        }
    });
    $('.left_click').click(function () {
            // hide when click to show when come again
            //item_1
            $(this).parent().find('.item1_h').removeClass('item1_h_open');
            $(this).parent().find('.item1_p').removeClass('item1_p_open');
            $(this).parent().find('.item1_btn').removeClass('button_open');
            //item 2 
            $(this).parent().parent().find('.item2_h').removeClass('item2_h_open');
            $(this).parent().parent().find('.item2_p').removeClass('item2_p_open');
            $(this).parent().parent().find('.item2_btn').removeClass('item2_btn_open');

            //item 3
            
            $(this).parent().find('.item3_h').removeClass('item3_h_open');
            $(this).parent().find('.item3_p').removeClass('item3_p_open');
            $(this).parent().find('.item3_btn').removeClass('item3_btn_open');
            $(this).parent().find('.img_cover').removeClass('img_cover_open');
            $(this).parent().find('.imgcover_p').removeClass('imgcover_p_open');
            $(this).parent().find('.imgcover_p2').removeClass('imgcover_p2_open');
            $(this).parent().find('.imgcover_btn').removeClass('imgcover_btn_open');
            //item 4 show
            $(this).parent().find('.item4_h3').removeClass('item4_h3_open');
            $(this).parent().find('.item4_h2').removeClass('item4_h2_open');
            $(this).parent().find('.item4_p').removeClass('item4_p_open');
        if (!$(this).parent().is(':first-child')) {


            $(this).parent().parent().find('li').removeClass('selected').find('.start_animation').fadeOut(1);

            $(this).parent().prev().addClass('selected').find('.start_animation').fadeIn(1, function () {
               //.fadein_classShow
                $(this).parent().find('.item1_h').addClass('item1_h_open');
                $(this).parent().find('.item1_p').addClass('item1_p_open');
                $(this).parent().find('.item1_btn').addClass('button_open');
                //item 2 show
                $(this).parent().parent().find('.item2_h').addClass('item2_h_open');//pShow
                $(this).parent().parent().find('.item2_p').addClass('item2_p_open');//p2Show
                $(this).parent().parent().find('.item2_btn').addClass('item2_btn_open');//btnShow
                //item 3 show
                $(this).parent().find('.item3_h').addClass('item3_h_open');
                $(this).parent().find('.item3_p').addClass('item3_p_open');
                $(this).parent().find('.item3_btn').addClass('item3_btn_open');
                $(this).parent().find('.img_cover').addClass('img_cover_open');
                $(this).parent().find('.imgcover_p').addClass('imgcover_p_open');
                $(this).parent().find('.imgcover_p2').addClass('imgcover_p2_open');
                $(this).parent().find('.imgcover_btn').addClass('imgcover_btn_open');
            });
            

        } else {
            $(this).parent().parent().find('li').removeClass('selected');
            //item_1
            $(this).parent().find('.item1_h').removeClass('item1_h_open');
            $(this).parent().find('.item1_p').removeClass('item1_p_open');
            $(this).parent().find('.item1_btn').removeClass('button_open');
            
            //item_2
            $(this).parent().parent().find('li:last-child').addClass('selected').find('.start_animation').fadeIn(1, function () {
               //item 4 show
                $(this).parent().find('.item4_h3').addClass('item4_h3_open');
                $(this).parent().find('.item4_h2').addClass('item4_h2_open');
                $(this).parent().find('.item4_p').addClass('item4_p_open');
            });

        }
    });
    $('.our_blog button').click(function () {
        var a = 0;
        
        if(a === 0){
            $('.ul_2').fadeIn(1000,function(){
                a = 1
            });
        }        
        if(a === 1){
            $('.ul_3').fadeIn(1000,function(){
                a = 2
            });
        }        
        if(a === 2){
            $('.ul_4').fadeIn(1000,function(){
                a = 3
               
            });
            $(this).fadeOut(600)
        }
        
    })
    
    $('.service li').click(function () {
       $(this).siblings().removeClass('service_active');
        $(this).addClass('service_active');
    });
    $('.service ul li').click( function () {
       $('.service_text').find('div').removeClass('service_text_active').css('visibility','hidden')
       $('.service_text').find($(this).attr('data-list')).addClass('service_text_active').css('visibility','visible')
    });
    $('.carousel').carousel({
      interval: 5000
    })
    $('.ability li').click(function () {
       $(this).siblings().removeClass('ability_active');
        $(this).addClass('ability_active');
    });
    $('.ability ul li').click( function () {
       $('.ability_text').find('div').removeClass('ability_text_active').css('visibility','hidden')
       $('.ability_text').find($(this).attr('data-list')).addClass('ability_text_active').css('visibility','visible')
    });
    
    $('.tlt_service').textillate({
        loop: true,
        in : { effect: 'flipInY',delayScale: 2.5, delay: 50},
        out : {effect: 'flipOutY',reverse: true,delayScale: 2.5,delay: 50}
    });    
    $('.tlt_ability').textillate({
        loop: true,
        in : { effect: 'flipInX',delayScale: 2.5, delay: 50},
        out : {effect: 'flipOutX',reverse: true,delayScale: 2.5,delay: 50}
    });
    var typed = new Typed(".type_", {
      strings: ['What Clients say', 'Testimonials', 'Nour-Web'],
      typeSpeed: 60,
      startDelay: 0,
      backSpeed: 30,
      smartBackspace: false,
      shuffle: false,
      backDelay: 1200,
        loop:true
    });

    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


});
