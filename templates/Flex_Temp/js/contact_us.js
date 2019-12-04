/*global $,document*/
$(document).ready(function(){
    $('.ball').click(function () {
        var time = parseInt($('h1').attr('data-play'))
        $('h1').text(time)
        $('h1').attr('data-play',time + 1)
        
        if(time > 0 && time < 5){
            $('.smile').addClass('smile_angry')
        } else {
            $('.smile').removeClass('smile_angry')
        }        
        if(time >= 5){
            $('.smile').addClass('smile_happy')
        } else {
            $('.smile').removeClass('smile_happy')
        }
        if(time === 10){
            alert('Hello World...')
            $('h1').attr('data-play',1)
            $('h1').text('0')
            $('.smile').removeClass('smile_happy')
            
        }
        
    });
    var balls = $('.eye');
    $(document).mousemove(function(e) {
        var x = e.clientX * 100 / window.innerWidth + "%";
        var y = e.clientY * 100 / window.innerHeight + "%";
        for(i=0; i<2; i++){
            balls[i].style.left = x;
            balls[i].style.top = y;
            
            balls[i].style.transform = "translate(-"+ x +",-"+ y +")"
        }
    });
});