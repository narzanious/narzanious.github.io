$(document).ready(function(){
    $("#profile").click(function() {
        $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
        scrollTop: $("#contactme").offset().top},
        'slow');
    });
    $(".navbar-inverse .navbar-nav > li > a").hover(function(){
        $(this).css("font-size", "22px");
        }, function(){
        $(this).css("font-size", "18px");
        /*}, function(){
        if ($(document).scrollTop() > 50) {
        $(this).css("color", "black");
    	} else {
    	$(this).css("color", "white");
    	}*/
    });    
    $(".navbar-header button").click(function(){
        $(".port").toggleClass("plus");
    });
})

