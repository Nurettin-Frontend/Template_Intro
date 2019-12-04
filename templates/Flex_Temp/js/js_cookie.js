window.onload = function (){
    if(document.cookie.length != 0){
        var cookieArray = document.cookie.split("=");
        document.getElementById('theme_change').style.backgroundColor = cookieArray[1];
        document.getElementById('theme_change').value =  cookieArray[1];

    }
}
function setCookie(){
    var selectColor = document.getElementById('theme_change').value;
    if(selectColor != 'select'){
        document.getElementById('theme_change').style.backgroundColor = selectColor;
        document.cookie = "color=" + selectColor +';expires=Fri, 7 Aug 2020 01:00:00 UTC ;path=/' 
    }
}