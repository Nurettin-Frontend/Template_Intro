/*global $,document*/
$(document).ready(function(){
    $('.img_open').click(function () {
       $('.show_img').addClass('show_img_open')
        $('.show_img').find('img').attr('src', $(this).parent().parent().parent().find('img').attr('src'))
        $('.show_img').click(function (){
           $(this).removeClass('show_img_open') 
            $('.cover').click(function (e) {
                e.stopPropagation()
            });
        });
    });
    $('.blog').find('.article_list_1').fadeIn()
    $('.changeList ul li').click(function(){
        $(this).siblings().removeClass('active_list')
        $(this).addClass('active_list')
        $(document).scrollTop(0)
        $('.blog').find('.article_list').removeClass('active').fadeOut()
        $($(this).attr('article-list')).addClass('active').fadeIn()
        
    })

});