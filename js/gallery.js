//PAGE UNLOAD

if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
	$(".overlay-menu a.work, .grid-item a:not(.different),a#hi,a#aboutIris").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},200);
		$('#sticker').animate({opacity:0}, 200);
		
		setTimeout(function(){
			window.location = url;
		}, 100);
		$('body').delay(500).animate({top:'0', opacity: '1'},500);
		$('#sticker').delay(500).animate({opacity:1},500);
	});
} else {
	$(".overlay-menu a.work, .grid-item a:not(.different),a#hi,a#aboutIris").click(function(e){
		var url = $(this).attr('href');
		e.preventDefault();
		$('body').animate({top:'110%', opacity: '0'},200);
		$('#sticker').animate({opacity:0}, 200);
		
		setTimeout(function(){
			window.location = url;
		}, 100);
		
	});
}

//ISOTOPE

$(document).on('ready', function() {
	var $grid = $('.grid').isotope({
			itemSelector:'.grid-item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: ".grid-sizer",
				gutter:3
			}
		});	
	
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	
	// filter items on button click
	$('.middleNav a, .nav .name a').click(function() {
	  
	 if($('.middleNav ul li a').hasClass('selected')){
   		$('.middleNav ul li a').removeClass('selected');
   		$(this).addClass('selected');
	 } else {
			$(this).addClass('selected');
	}

	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	  
	});

});


//Gallery Overlay

$('.grid-item .cover').hide();
$('.grid-item .follow').hide();

$('.hoverimg img').mouseenter(function(){
	$('.grid-item .cover, .grid-item .follow').show();
	var $width = document.querySelector('.grid-item:hover img').clientWidth;
   var $height = document.querySelector('.grid-item:hover img').clientHeight;
   var $spanht = document.querySelector('.hoverimg:hover .follow').clientHeight;
   var $spanwd = document.querySelector('.hoverimg:hover .follow').clientWidth;
   $('.grid .hoverimg:hover .cover').css({
	    	width:$width,
	    	height:$height,
	    	top:0,
	    	left:0
	  });
  	$('.grid .hoverimg:hover .follow').css({
		    	left:($width/2) - ($spanwd/2),
		      top:($height/2) - ($spanht/2),
	});
	
	$('.hoverimg').mouseleave(function(){
  	$('.grid-item .cover, .grid-item .follow').hide();
		$('.grid .hoverimg:hover .cover').css({
	    	width:null,
	    	height:null,
	    	top:null,
	    	left:null
    	});
    });
 });
 
 


	
