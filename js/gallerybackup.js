//Gallery Overlay


 



	$(".grid a").on('mousemove', function(e){
	    $title = $(".grid-item:hover").attr('id');
	    
	    $('.grid .hoverimg:hover .follow').html($title).css({
	    	left: e.pageX - 140,
	      top: e.pageY - 100,
		});
	});

	
	
	
	
	$(".grid a").mouseleave(function(){
   	 $title = null;
   	 $('.grid .follow').html('');
   }); 