        /*global $,document */

$(document).ready(function (){
      $('.tlt').textillate({
        loop: true,
        in : { effect: 'flipInY',delayScale: 2.5, delay: 50},
        out : {effect: 'flipOutY',reverse: true,delayScale: 2.5,delay: 50}
    });  
    $('.hold').mixItUp();  
})