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
	}  else {
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
