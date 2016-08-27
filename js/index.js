$(document).ready(function(){
    $("#mystatus button").click(function() {
        $('html,body').animate({
        scrollTop: $("#contactme").offset().top},
        'slow');
    });

    $("#profile").click(function() {
        $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
    });

    $("#cv").click(function() {
        $('html,body').animate({
        scrollTop: $("#resume").offset().top},
        'slow');
    });

    $("#contact").click(function() {
        $('html,body').animate({
        scrollTop: $("#contactme").offset().top},
        'slow');
    });

    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
        $(".navbar-fixed-top").css("background-color", "#FFFFFF");
        } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); 
        }
    });

    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
        $(".navbar-header .navbar-brand").css("color", "black");
        } else {
        $(".navbar-header .navbar-brand").css("color", "#FFFFFF"); 
        }
    });

    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
        $(".navbar-inverse .navbar-nav > li > a").css("color", "black");
        } else {
        $(".navbar-inverse .navbar-nav > li > a").css("color", "#FFFFFF"); 
        }
    });

    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
        $(".navbar-brand").css("color", "#0099cc");
        } else {
        $(".navbar-brand").css("color", "#FFFFFF"); 
        }
    });

    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
        $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "#0099cc");
        } else {
        $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "#FFFFFF"); 
        }
    });


    $(".navbar-inverse .navbar-nav > li > a").hover(function(){
        $(this).css("font-size", "22px");
        }, function(){
        $(this).css("font-size", "18px");
        }, function(){
        if ($(document).scrollTop() > 50) {
        $(this).css("color", "black");
    	} else {
    	$(this).css("color", "white");
    	}
    });
});

