/*global $,document, window, WOW*/
var a = 1;
var progressTop = $('.progress-section').offset().top - 600;
var pagesNumTop = $('.pagesNum').offset().top - 300;
       
$(document).ready(function () {
    "use strict";
    $(document).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-open');
            $('.header .layout .navbar-nav li a').addClass('active-color');
            //navbar-icon in mobile
            $('.navbar-icon').addClass('active');
        } else {
            $('.navbar').removeClass('navbar-open');
            $('.header .layout .navbar-nav li a').removeClass('active-color');
            $('.navbar-icon').removeClass('active');
        }
        $('.scroll').each(function () {
            var linkActive =  $(this).attr('id');
            if ($(window).scrollTop() > $(this).offset().top - 100) {
                $('.header ul li').children().removeClass('active');
                $('.header ul li a[data-scroll="' + linkActive + '"]').addClass('active');
            }
        });
        //headerText : opacity
        var target = $('.header'),
            targetHeight = target.outerHeight(),
            scrollPercent = (targetHeight - window.scrollY * 3) / targetHeight;
        //headerText : hide
        if ($(this).scrollTop() > 30) {
            $('.header-text').css('opacity', scrollPercent);
        } else {
            $('.header-text').css('opacity', 1);
        }
        //btn-up
        if ($(this).scrollTop() > $('.about').offset().top) {
            $('.btn-up').addClass('btn-up-show');
        } else {
            $('.btn-up').removeClass('btn-up-show');
        }
    //progress

        if ($(this).scrollTop() > progressTop) {
            $('.progress-bar').each(function () {
                var progVal = $(this).attr('data-value'),
                    progWidth = ($('.progress-bar').parent().width()) / 100,
                    progPerc = progVal * progWidth;
                $(this).find('.prog').animate({
                    width: progPerc
                }, 1500);
                $(this).find('.progress-text').text(progVal + '%');
                $('.about .progress-section .progress-bar span').addClass('active-opacity');
            });
        }

    //pagesNum

        if ($(document).scrollTop() > pagesNumTop && a === 1) {
            $('.counter').each(function () {
                $(this).prop('pres', 0).animate({
                    pres: $(this).text()
                }, {
                    duration: 3000,
                    step: function (now) {////every step it do function it take number from text and show it
                        $(this).text(Math.ceil(now));
                    }
                });
                a = 0;
            });
            
        }
    });
        //menuSide Open
    $('.menu-icon').click(function () {
        $(".menu-side").toggleClass('menu-side-open');
        $('.menu').toggleClass('menu-open');
        $('.menu-contain ul,.menu-contain ul li').each(function () {
            $(this).addClass('activee');
        });

    });
    $('.menu-exit').click(function () {
        $('.menu-contain ul,.menu-contain ul li').each(function () {
            $(this).removeClass('activee', function () {
                
            });
        
        });
        $(".menu-side").toggleClass('menu-side-open');
        $('.menu').toggleClass('menu-open');
    });

    //Popup Start: to hide it when click in window
    //menu-side
    $('.menu').click(function () {
        $(".menu-side").removeClass('menu-side-open');
        $(this).toggleClass('menu-open');
        //when remove this class we can open (li) with animation everytime when open
        $('.menu-contain ul,.menu-contain ul li').each(function () {
            $(this).removeClass('activee');
        });
        
    });
    $('.menu-side-open').click(function () {
        
    });
    /////End Scroll
    (function autoChange() {
        $('.header-text ul .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1000).fadeOut(600, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoChange();
                });
            } else {
                $(this).delay(1000).fadeOut(600, function () {
                    $(this).removeClass('active');
                    $('.header-text ul li').eq(0).addClass('active').fadeIn();
                    autoChange();
                });
               
            }
        });
    }());

    //Eduction Section to hange Content
    $('.education .education-buttons li').click(function () {
        $(this).addClass('btn-active').siblings().removeClass('btn-active');
        $(this).find('i').addClass('i-active').parent().parent().siblings().find('i').removeClass('i-active');
        $('.education .cont > div').hide();
        $($(this).data('content')).fadeIn();
    });

    $('.carousel').carousel('pause');
	$('.hold').mixItUp();
    
    //contact
    $('.contact :input').blur(function () {
        var placeHolder = $(this).attr('data-error');
        if ($(this).val() === "") {
            $(this).parent().find('.no-val').text(placeHolder + " is requeried");
        } else {
            $(this).parent().find('.no-val').text('');
        }
    });
    $('#btn-message').click(function (e) {
        var  isValied = true;
        $('[data-error]').each(function () {
            if ($(this).val() === "") {
                isValied = false;
            }
        });
        if (isValied === false) {
            e.preventDefault();
        }
    });
    $('.header .navbar ul li:nth-child(1)').children().addClass('active');
    $('.header .navbar ul li a').click(function () {
        var aTop = $($(this).attr('data-scroll')).offset().top - 60;
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        $('body, html').animate({
            scrollTop: aTop
        }, 1500);
    });
    //go-top
    $('.btn-up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    $('.change-style i').click(function () {
       $('.change-style').toggleClass('change-style-open') 
    });
    var t = 1;
    $('#checkBox').click(function () {
        if (t === 1) {
            $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
            $('#wave').attr('src','images/wave-black.png');
            t = 0;
        } else {
            $('link[href*="theme"]').attr('href', 'css/theme-default.css');
            $('#wave').attr('src','images/wave.png');
            t = 1;
        }
    });
    
    $('.fa-search').parent().click(function () {
        $('.show-img').addClass('show-img-open');
        $('#img').attr('src',$(this).children().attr('data-img'));
        $('.show-img').click(function () {
           $(this).removeClass('show-img-open'); 
        });
        $('#img').click(function (e) {
            e.stopPropagation();
        });
    });
});
$(window).on("load", function () {
    "use strict";
     
    $('.loading-overlay .spinner').fadeOut(800, function () {
        $(document).scrollTop(0);
        $(this).parent().fadeOut(400);
        $('body').css('overflow-y', 'auto');
        /*
        $('body').niceScroll({
            cursorwidth:'8',
            horizrailenabled: false,
            cursorminheight: '70',
            zindex: 99999,
            cursorcolor: 'black',
            background:'rgb(226, 226, 226)'
                
    })*/
        new WOW().init();
    });

});