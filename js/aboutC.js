if (isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
		$(".name a, .overlay-menu a.work").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},200);
		$('#sticker').animate({opacity:0}, 200);
		
		setTimeout(function(){
			window.location = url;
		}, 150);
		$('body').delay(500).animate({top:'0', opacity: '1'},500);
		$('#sticker').delay(500).animate({opacity:1},500);
	});
} else {
		$(".name a, .overlay-menu a.work").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},200);
		$('#sticker').animate({opacity:0}, 200);
		
		setTimeout(function(){
			window.location = url;
		}, 150);
		
	});
}

