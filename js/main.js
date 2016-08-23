//PAGE LOADING ISSUE
$(window).load(function(){
	$('.fixedFooter, .nav, #instaIcon, #mailto,.appearing').delay().animate({opacity:1}, 250);
	$('.gallery-content').animate({opacity:'1',marginTop: '100'}, 250);
	$('.moving').animate({opacity:'1',top:'0'},350);
});

//Hamburger Button Function Call

$(document).ready(function() {
	
  $('.pullright .toggle').click(function() {
  	$('.pullright ul').slideToggle();
		return false;
	});
	
});

  
//Overlay  

$hamburger = $('.hamburger');
  
$("header").show();

$hamburger.click(function(){
	$('div.bottomBorder').addClass('effect');
	$("#downArrow").hide();
	$(".overlay-close").click(function(){
		$("header, .wrapper").removeClass("effect");
		$("#downArrow").show(250);
		$('div.bottomBorder').removeClass('effect');
	});
});

//Page Fade

$(window).scroll(function(){
   
    if ($(window).scrollTop()>10 && $(window).innerWidth()<=641)  {
        $('.bottomBorder').fadeIn();
    } else if ($(window).scrollTop()>20 && $(window).innerWidth()>=641) {
    	$('.bottomBorder').fadeIn();
    }
    else {
        $('.bottomBorder').fadeOut();
      
    }
 
});

$(document).ready(function() {

   $('.nav .name a,.overlay-menu a,.wrapper .content .about a,footer .social-links ul li a,a.emailAdd,a.next-prev,a.prev-next,.middleNav ul li a').on('click touchend', function(e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });

	function foo(e){ e.preventDefault(); };
		
		$('.hamburger').click(function(){
		document.addEventListener("touchmove",foo, true);
		});
		$('.overlay-close').click(function(){
				document.removeEventListener("touchmove",foo, true);

			});

});

