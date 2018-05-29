//main js

$(window).scroll(function(){
	  var off = $('.icon-animated, text-animated').offset().top;
	  var w_scr = $(this).scrollTop();
	  
	  if(w_scr >= (off / 4)){
	    $('.icon-animated').addClass('animated flipInY');
	    $('.text-animated').addClass('zoomIn animated');
	    $('.icon-animated').removeClass('invisible');
	    $('.text-animated').removeClass('invisible');
	  } else {
	    $('.icon-animated').removeClass('animated flipInY invisible');
	    $('.text-animated').removeClass('zoomIn animated invisible');
	    $('.icon-animated').addClass('invisible');
	    $('.text-animated').addClass('invisible');
	  }
	});
