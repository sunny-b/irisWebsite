

$(window).load(function(){
	$("#poster, #downArrow").css({opacity:0});
	$('#poster, #downArrow, #colOne').delay().animate({opacity:1}, 250);
	$('.wrapper').animate({top:'0'},250);
});

if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
$("#colOne a, #downArrow a, .name a, .overlay-menu a.work").click(function(e){
	var url = $(this).attr('href');
	e.preventDefault();
	$('body').animate({top:'110%', opacity: '0'},200);
	$('#sticker, #colOne').animate({opacity:0}, 200);
	
	setTimeout(function(){
		window.location = url;
	}, 150);
	$('body').delay(20).animate({top:'0', opacity: '1'},0);
	$('#sticker,#colOne').delay(20).animate({opacity:1},0);
});

} else {
	$("#colOne a, #downArrow a, .name a, .overlay-menu a.work").click(function(e){
	var url = $(this).attr('href');
	e.preventDefault();
	$('body').animate({top:'110%', opacity: '0'},200);
	$('#sticker, #colOne').animate({opacity:0}, 200);
	
	setTimeout(function(){
		window.location = url;
	}, 150);
	});
}	

$(".linkList a").mouseenter(function(){
	var bgcolor = $(".linkList a:hover").attr("rel");
	var imagePoster = $('.linkList a:hover').attr('media');
	console.log(imagePoster);
	console.log(bgcolor);
		
	$("body").stop().removeClass('colorNormal').addClass("colorChange");
		
	$('.colorChange').css({
		backgroundColor: bgcolor
	});
		
	$("#poster").addClass('imageChange');
		
	$('.imageChange').css({
		backgroundImage: "url("+imagePoster+")",
		opacity: 0
	}).animate({opacity: 1}, 500);

	if ($(".linkList a:hover").hasClass("invert")) {
		$(".nav .name a").stop().animate({color:"#fff"}, 0);
		$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("normal negative zaha red").addClass("invert");
	
	
	} else if ($(".linkList a:hover").hasClass("normal")) {
		$(".nav .name a").stop().animate({color:"#fff"}, 0);
		$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("invert negative zaha red").addClass("normal");
	
	
	} else if ($(".linkList a:hover").hasClass("negative")) {
		$(".nav .name a").stop().animate({color:"#000"}, 0);
		$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("invert normal zaha red").addClass("negative");
		
	} else if ($(".linkList a:hover").hasClass("zaha")) {
		$(".nav .name a").stop().animate({color:"#989898"}, 0);
		$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("invert normal negative red").addClass("zaha");
		
		} else if ($(".linkList a:hover").hasClass("red")) {
		$(".nav .name a").stop().animate({color:"#ff4931"}, 0);
		$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("normal invert negative zaha").addClass("red");
	
		
	} else if ($(".linkList a:hover").hasClass("stay")) {
		$(".nav .name a").stop().animate({color:"#fff"}, 0);
		$(".pullright a.hamburger, footer #downArrow a").stop().removeClass("normal negative zaha").addClass("invert");
		$(".wrapper #colOne div").removeClass("normal negative zaha red");
	} 
	
	
});
	
$("#colOne").mouseleave(function(){
	$("body").stop().removeClass('colorChange').removeAttr('style').addClass('colorNormal');
			
	$("#poster").css({
		backgroundImage: "url('img/homescreen_1.png')",
		opacity: 0
	}).animate({opacity:1}, 700);
	
	$(".nav .name a").stop().removeAttr("style");
	$(".pullright a.hamburger, footer #downArrow a, .wrapper #colOne div").stop().removeClass("red invert normal negative zaha");
});
	
	
