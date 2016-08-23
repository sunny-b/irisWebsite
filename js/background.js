


/**************************
zoom general pàgina
**************************/

minFontSize = 30;
maxFontSize = 100;
minHeight = 690;
minWidth =0;
portraitTablet = 768;
  $('body').css({
       minWidth:minWidth
    });

function zoom() {
    
  
   /*
    * configuració alçada i amplada FINESTRA
    */
   windowWidth = $(window).innerWidth();
   if (windowWidth < minWidth) windowWidth = minWidth;
   windowHeight = $(window).innerHeight();
   if (windowHeight < minHeight) windowHeight = minHeight;

   
   /*
    * configuració alçada i amplada POSTER
    */
   posterHeight = windowHeight*0.72586;
   posterWidth = posterHeight/Math.sqrt(2);
   if (posterWidth > (0.5*windowWidth-60)) {
       posterWidth = 0.5*windowWidth-60;
       posterHeight = posterWidth*Math.sqrt(2);
       
   } 
   if ($(window).innerWidth()<=portraitTablet) {
       posterHeight = $('#poster').width()*Math.sqrt(2);
       if ($('body').hasClass('home')){
                 posterHeight = ($(window).innerHeight()- 310);
                 posterWidth = posterHeight/Math.sqrt(2);
                 if (posterWidth>440) posterWidth = 440;
                 if (posterWidth>($(window).innerWidth()*0.7)) posterWidth = $(window).innerWidth()*0.7
                 posterHeight = posterWidth*Math.sqrt(2);
                 $('#poster').css({
                     marginLeft: -posterWidth/2,
                     marginTop: -posterHeight/2
                 })

             }
   }
   else {
       $('#poster').css({
                marginLeft: 'auto',
                marginTop: 0
            })
   }
   
   
   /*
    * configuració mida font
    */
   var fontSize = (posterHeight / (19.33*0.72586));
   if (fontSize < minFontSize) fontSize = minFontSize
   else if (fontSize > maxFontSize) fontSize = maxFontSize;
   
   
   /*
    * configuració alçada header i footer
    */
   headerHeight = posterHeight*0.1371/0.72586;
   if(headerHeight < windowHeight * 0.1371) headerHeight = windowHeight * 0.1371;
   
   numLinks = $("#colTwo .linkContainer").size();
    fontSizeList = (posterHeight-fontSize)/numLinks;
    if (fontSizeList > fontSize) fontSizeList=fontSize;
    
    
   /*
    * poster
    */ 
   $('#poster, #colRight, #colLeft, #commingsoon').css({
       height:posterHeight,
       width:posterWidth
   });
   
   
   /*
    * text desbordat sobre poster
    */
   $('#poster.horizontal #textOverPoster').css({
       width:posterHeight*1.03,
       marginLeft:-posterHeight*1.03/2,
       left:'50%'
       
   })
    $('#colLeft').css({
       left:(-posterWidth/2)*0.95
   });
   
    $('#colRight').css({
       right:(-posterWidth/2)*0.95,
       marginTop:-posterHeight
       
   });
   
   
   /*
    * header & footer
    */
   $('header').css({
       height: headerHeight,
       //paddingTop: headerHeight*0.3029
   });
   $('header .wrapper').css({
       width: posterWidth*1.9654,
       marginTop: headerHeight*0.3029
   });
   $('footer').css({
       height: headerHeight,
       //paddingTop: headerHeight*0.553
   });
   $('footer .wrapper').css({
       width: $('#poster').width(),
       marginBottom: headerHeight*0.3029+8,
       marginLeft: -$('#poster').width()/2
   });
    $('.navList').css({
       height: headerHeight,
       paddingTop: headerHeight*0.553
   });
   
   /*
    * mida font
    */
   $('body, .globalFontSize').css({
       fontSize: fontSize + 'px'
    });
    $('#poster').css({
       fontSize: fontSizeList + 'px'
    });
    
    
    
    /*
    * calcular mida extra entre header, footer i main
    */
    totalHeight=
            $('main').height()+$('header').height()+$('footer').height()
            +parseInt($('header').css('padding-top'))+parseInt($('header').css('padding-bottom'))
            +parseInt($('header').css('margin-top'))+parseInt($('header').css('margin-bottom'))
            +parseInt($('footer').css('padding-top'))+parseInt($('footer').css('padding-bottom'))
            +parseInt($('footer').css('margin-top'))+parseInt($('footer').css('margin-bottom'))
            +parseInt($('main').css('margin-top'))+parseInt($('main').css('margin-bottom'))
            +parseInt($('main').css('padding-top'))+parseInt($('main').css('padding-bottom'))
   
    if ($(window).innerHeight()>totalHeight) extraHeight =($(window).innerHeight()-totalHeight)/2 
    else extraHeight = 0;
    $('.extraHeight').height(extraHeight)
    
    
    /*
    * amagar poster a la home
    */
    if ($('.home #poster').width()<250) $('.home #poster').hide();
    else $('.home #poster').show();
  
          
}



/**************************
Inicial / reescalar pàgina
**************************/

function fadePagina(tFade) {
    $('header, main, footer').animate({opacity: 1}, tFade);
}


window.onload = function() {
    zoom();
    fadePagina(400);
    drawNonImage ();
    
}
window.onresize = function() {
    zoom();
    drawNonImage ();
               
}

/**************************
dibuixar creu poster
**************************/

function drawNonImage () {
     var c=document.getElementById("commingsoon");
     c.width = posterWidth;
      c.height = posterHeight;
var cxt=c.getContext("2d");
           cxt.moveTo(0,0);
           cxt.lineTo(posterWidth, posterHeight);
             cxt.moveTo(posterWidth,0);
           cxt.lineTo(0, posterHeight);
         
           cxt.lineWidth = 1;
           cxt.strokeStyle = "black";
           cxt.stroke();  
}


/**************************
share
**************************/

$('.dropdownSocial ul').hide();
$('.dropdownSocial .triggerList, .dropdownSocial ul').mouseover(function(){
    if ($('.dropdownSocial:hover .triggerList').hasClass('selected')==false){
   $('.dropdownSocial:hover .triggerList').addClass('selected');
   $('.dropdownSocial:hover').addClass('open');
    $('.dropdownSocial:hover ul').stop().fadeIn();
    }
});

$('.dropdownSocial ul, .triggerList').mouseout(function(){
 
    if (!$(".triggerList.selected").mouseIsOver() && !$(".open ul").mouseIsOver()) {
        $('.selected').removeClass('selected');
        $('.dropdownSocial').removeClass('open');
        $('.dropdownSocial ul').stop().fadeOut('fast');  
    }
})

jQuery.fn.mouseIsOver = function () {
    if($(this[0]).is(":hover"))
    {
        return true;
    }
    return false;
};

function share(social, url) {
        var winWidth = 650;
        var winHeight =450;
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        
         window.open(url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
        
        
      }
 



$(window).scroll(function(){
    if ($('body').scrollTop()>5 && $(window).innerWidth()<=portraitTablet) {
        $('.borderBottom').fadeIn();
     }
    else {
        $('.borderBottom').fadeOut();
      
    }
 
});













