//main js

$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();
    	if (scroll >= 60) {
	        $(".top-navbar").addClass("top-navbar-opacity");
	        $(".bottom-navbar").addClass("bottom-navbar-opacity");
	        //addfilter$(".portada-foto").removeClass("addbluer");
	        //$(".whenontop-bg").attr('src','imagenes/logo-md-lg-white.png');
	        //$(".whenontop-sm").attr('src','imagenes/logo-sm-xs-white.png');
	        
	    	} else {
		    $(".top-navbar").removeClass("top-navbar-opacity");
		    $(".bottom-navbar").removeClass("bottom-navbar-opacity");
		    //addfilter$(".portada-foto").addClass("addbluer");
		    //$(".whenontop-bg").attr('src','imagenes/logo-md-lg.png');
		    //$(".whenontop-sm").attr('src','imagenes/logo-sm-xs.png');
		    
	    	}

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
