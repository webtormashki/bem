import jQuery from "jquery";
	// Smooth scroll and pageup

	
	$(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
	});
	$(function(){
		$("a[href^='#up']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
		});
	});