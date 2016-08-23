//PAGE UNLOAD

if (isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
			$(".name a, .overlay-menu a.work, a.next-prev, a.prev-next").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},100);
		$('#sticker').animate({opacity:0}, 100);
		
		setTimeout(function(){
			window.location = url;
		}, 200);
		$('body').delay(20).animate({top:'0', opacity: '1'},0);
		$('#sticker').delay(20).animate({opacity:1},0);
	});
} else {
	$(".name a, .overlay-menu a.work, a.next-prev, a.prev-next").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},100);
		$('#sticker').animate({opacity:0}, 100);
		
		setTimeout(function(){
			window.location = url;
		}, 200);
	});
}




$('.carousel').carousel({
			interval:false,
			wrap:false
	});
	
		$('a.left').css( "display", "none" );
	
	//Accolade height
	
	if (window.innerWidth > 768) {
		var slideHT = document.querySelector('.carousel-inner').clientHeight;
		var slideWD = document.querySelector('.carousel-inner').clientwidth;
		$('.navigation-control').css({
			width:slideWD,
			height:slideHT
		});
		
		var aboutHT = document.querySelector('.wrapper .content .about').clientHeight;	
	$('.wrapper .content .accolades').css({
		height:aboutHT
		});
	}

$(window).resize(function() {
	var aboutH = document.querySelector('.wrapper .content .about').clientHeight;	
	$('.wrapper .content .accolades').css({
		height:aboutH
		});
	
});

//Pop-up
		
$('a.right').click(function(){
		if ($('.carousel-inner div:first-child').hasClass('active') && $('.carousel-inner div.third').hasClass('active')) {
		
			$('a.left').css( "display", "block" );
			$('#next').animate({marginBottom:'50'},0);
			$('.wrapper .content .accolades').animate({
				top: "-=277",
				paddingTop: "30", 
				height:"+=277",
				marginBottom:"-277"
			}, 100);
			
			$('.wrapper .next-prev').animate({
				fontSize:"15pt",
				lineHeight:"25"
			},100);
		
			$('.carousel-inner .accolades2').animate({
				opacity: "1"
			}, 100).css('zIndex', '1');
		
			
			$('a.right').css( "display", "none" );
		
		
		}	else if ($('.carousel-inner div:first-child').hasClass('active')) {
			$('a.left').css( "display", "block" );
		
		} else if ($('.carousel-inner div.third').hasClass('active')) {
			
			$('#next').animate({marginBottom:'50'},0);
		
			$('.wrapper .content .accolades').animate({
				top: "-=277",
				paddingTop: "30", 
				height:"+=277",
				marginBottom:"-277"
			}, 100);
			
			$('.wrapper .next-prev').animate({
				fontSize:"15pt",
				lineHeight:"25"
			},100);
		
			
		
			$('.carousel-inner .accolades2').animate({
				opacity: "1"
			}, 100).css('zIndex', '1');
		
			
			$('a.right').css( "display", "none" );
		}
	
});



$('a.left').click(function(){
	if ($('.carousel-inner div.active').hasClass('second')&&$('.carousel-inner div.last').hasClass('active')) {
	
		$('a.left').css( "display", "none" );
		$('#next').animate({marginBottom:'28'},0);
		$('.wrapper .content .accolades').animate({
				top: "+=277",
				paddingTop: "70", 
				height:"-=277",
				marginBottom:"0"
			}, 100);
			
			$('.wrapper .next-prev').animate({
				fontSize:"12pt",
				lineHeight:"21"
			},100);
			
			$('.carousel-inner .accolades2').animate({
				opacity: "0"
			}, 0).css('zIndex', '-1');
			
		$('a.right').css( "display", "block" );
	
	}	else if ($('.carousel-inner div.active').hasClass('second')) {
			$('a.left').css( "display", "none" );
	} else if ($('.carousel-inner div.last').hasClass('active')) {
			
			$('#next').animate({marginBottom:'28'},0);
			
			$('.wrapper .content .accolades').animate({
				top: "+=277",
				paddingTop: "70", 
				height:"-=277",
				marginBottom:"0"
			}, 100);
			
			$('.wrapper .next-prev').animate({
				fontSize:"12pt",
				lineHeight:"21"
			},100);
			
			
			
				$('.carousel-inner .accolades2').animate({
				opacity: "0"
			}, 0).css('zIndex', '-1');
			
		$('a.right').css( "display", "block" );
	}
});

$(document).ready(function(){
	if(window.innerWidth <= 641) {
		$(".navigation-control").css('height','84%');
	} else if (window.innerWidth <= 768) {
		$(".navigation-control").css('height','89%');
	} else if (window.innerWidth <= 992) {
		$(".navigation-control").css('height','91%');
	} else if (window.innerWidth <= 1200) {
		$(".navigation-control").css('height','93%');
	} else {
		$(".navigation-control").css('height','100%');
	}
	
	$(window).resize(function () {
		if(window.innerWidth <= 641) {
			$(".navigation-control").css('height','84%');
		} else if (window.innerWidth <= 768) {
			$(".navigation-control").css('height','89%');
		} else if (window.innerWidth <= 992) {
			$(".navigation-control").css('height','91%');
		} else if (window.innerWidth <= 1200) {
			$(".navigation-control").css('height','93%');
		} else {
			$(".navigation-control").css('height','100%');
		}
	});
});


// if(window.innerWidth <= 768) {
// 	
	// $('a.left').css( "display", "none" );
// 	
// 	
// 
// 		
// 
	// $('a.right').click(function(){
		// if ($('.carousel-inner div:first-child').hasClass('active')) {
		// $('a.left').show();
	// } else if ($('.carousel-inner div.third').hasClass('active')) {
// 		
		// $('.carousel-inner .accolades2').animate({
				// opacity: "1"
			// }, 100).css('zIndex', '1');
// 			
// 		
			// $('a.right').hide();
		// }
	// });
// 		
// $('a.left').click(function(){
	// if ($('.carousel-inner div.active').hasClass('second')) {
			// $('a.left').hide();
	// } else if ($('.carousel-inner div.last').hasClass('active')) {
			// $('.carousel-inner .accolades2').animate({
				// opacity: "0"
			// }, 100).css('zIndex', '-1');
		// $('a.right').show();
	// }
// });
// 
// 
// }
// 




		

