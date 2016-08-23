if	(window.innerWidth <= 768) {
	
	$('a.left').hide();
		
		var slideHT = document.querySelector('.carousel-inner').clientHeight;
		var slideWD = document.querySelector('.carousel-inner').clientwidth;
		$('.navigation-control').css({
			width:slideWD,
			height:slideHT
		});
	
	var popUpHt = document.querySelector('.container .carousel .carousel-inner .item.active').clientHeight;
		$('.wrapper .content .accolades').css({
		height:popUpHt
		});

	$('a.right').click(function(){
		if ($('.carousel-inner div:first-child').hasClass('active')) {
		$('a.left').show();
	} else if ($('.carousel-inner div.third').hasClass('active')) {
		$('.wrapper .content .accolades').animate({
				opacity: "1"
			}, 100).css('zIndex', '1');
			
		
			$('a.right').hide();
		}
	}
		
$('a.left').click(function(){
	if ($('.carousel-inner div.active').hasClass('second')) {
			$('a.left').hide();
	} else if ($('.carousel-inner div:last-child').hasClass('active')) {
			$('.wrapper .content .accolades').animate({
				opacity: "0"
			}, 100).css('zIndex', '-1');
		$('a.right').show();
	}
});

}