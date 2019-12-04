/*global $,document, localStorage*/
$(document).ready(function () {
    'use strict';
    //creat a virtul cookie to ask and start the style cookie
    
    $('#cookie_accept').click(function(){
        $(this).parent().fadeOut();
        localStorage.setItem('checkCookie','T')
    })
    if(localStorage.getItem('checkCookie')){
        $('.ask_cookie').hide();
    }
    //show header when scroll
    $(document).scroll(function(){
        if($(this).scrollTop() > 250){
        $('.header_bottom').addClass('header_bottom_open')
        }else{
            $('.header_bottom').removeClass('header_bottom_open')
        }
    })
    //style in mobile
    $('.style_li').click(function(){
        $(this).toggleClass('style_li_open')
    })
    $('.menu_btn').click(function () {
        $('.header_list').toggleClass('header_list_open')
    })
    //To change themeColor
    $('.style_theme li').click(function () {
        $('link[href*="theme_"]').attr('href', $(this).attr('data-style'));
        $('#img_logo').attr('src',$(this).attr('data-img'))
        //creat a style cookies
        if(localStorage.getItem('checkCookie')){
            localStorage.setItem('style',$(this).attr('data-style')) 
        }
    });
    //check the cookie to remmber the style
    if(localStorage.getItem('checkCookie')){
        $('link[href*="theme_"]').attr('href',localStorage.getItem('style'))
    }
    //footerCode
    $('.counter').each(function () {
        $(this).prop('pres', 0).animate({
            pres: $(this).text()
        }, {
            duration: 3000,
            step: function (now) {////every step it do function it take number from text and show it
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.countOut').each(function () {
            var progWidth = ($('.countIn').parent().attr('data-value'))
        $(this).find('.countIn').animate({
            width: progWidth + "%"
        }, 1500);
    });

    /*To Creat loclaStorage 
    localStorage.setItem('ket','value')
    then get it when you want by it's key
    localStorage.getItem('key')
    */
    // to edit dropdown inner in mobile and laptop
    if ($(window).width() > 992) {
        $('.list-inline-item').click(function(e){
            e.stopPropagation();
            $('.header_bottom').find('.dropdown_inner').fadeOut();
            $(this).find('.dropdown_inner').fadeIn()
        });
        $(".list-inline-item, .dropdown_inner, .menu_btn").click(function(e){
            e.stopPropagation();
        });
        $(document).click(function(){
          $(".dropdown_inner").fadeOut(200);
        });
        
    }
});
